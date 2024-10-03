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
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),(function (_,p__27671,_src_cb){
var map__27672 = p__27671;
var map__27672__$1 = cljs.core.__destructure_map.call(null,map__27672);
var name = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__5726__auto___27766 = arguments.length;
var i__5727__auto___27767 = (0);
while(true){
if((i__5727__auto___27767 < len__5726__auto___27766)){
args__5732__auto__.push((arguments[i__5727__auto___27767]));

var G__27768 = (i__5727__auto___27767 + (1));
i__5727__auto___27767 = G__27768;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__27678){
var map__27679 = p__27678;
var map__27679__$1 = cljs.core.__destructure_map.call(null,map__27679);
var transform = cljs.core.get.call(null,map__27679__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__27679__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27731){
var state_val_27732 = (state_27731[(1)]);
if((state_val_27732 === (7))){
var inst_27693 = (state_27731[(2)]);
var inst_27694 = cljs.core.__destructure_map.call(null,inst_27693);
var inst_27695 = cljs.core.get.call(null,inst_27694,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27696 = cljs.core.get.call(null,inst_27694,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27697 = cljs.core._EQ_.call(null,(200),inst_27695);
var state_27731__$1 = (function (){var statearr_27733 = state_27731;
(statearr_27733[(7)] = inst_27696);

return statearr_27733;
})();
if(inst_27697){
var statearr_27734_27769 = state_27731__$1;
(statearr_27734_27769[(1)] = (8));

} else {
var statearr_27735_27770 = state_27731__$1;
(statearr_27735_27770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (1))){
var inst_27680 = filenames;
var inst_27681 = inst_27680;
var state_27731__$1 = (function (){var statearr_27736 = state_27731;
(statearr_27736[(8)] = inst_27681);

return statearr_27736;
})();
var statearr_27737_27771 = state_27731__$1;
(statearr_27737_27771[(2)] = null);

(statearr_27737_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (4))){
var inst_27681 = (state_27731[(8)]);
var inst_27686 = (state_27731[(9)]);
var inst_27686__$1 = cljs.core.first.call(null,inst_27681);
var inst_27687 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27686__$1);
var inst_27688 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27689 = [false];
var inst_27690 = cljs.core.PersistentHashMap.fromArrays(inst_27688,inst_27689);
var inst_27691 = cljs_http.client.get.call(null,inst_27687,inst_27690);
var state_27731__$1 = (function (){var statearr_27738 = state_27731;
(statearr_27738[(9)] = inst_27686__$1);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27731__$1,(7),inst_27691);
} else {
if((state_val_27732 === (15))){
var state_27731__$1 = state_27731;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_27739_27772 = state_27731__$1;
(statearr_27739_27772[(1)] = (17));

} else {
var statearr_27740_27773 = state_27731__$1;
(statearr_27740_27773[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (13))){
var inst_27696 = (state_27731[(7)]);
var inst_27686 = (state_27731[(9)]);
var inst_27705 = (state_27731[(2)]);
var inst_27706 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_27707 = transform.call(null,inst_27696);
var inst_27708 = [lang,inst_27707,inst_27686];
var inst_27709 = cljs.core.PersistentHashMap.fromArrays(inst_27706,inst_27708);
var inst_27710 = src_cb.call(null,inst_27709);
var state_27731__$1 = (function (){var statearr_27741 = state_27731;
(statearr_27741[(10)] = inst_27705);

(statearr_27741[(11)] = inst_27710);

return statearr_27741;
})();
var statearr_27742_27774 = state_27731__$1;
(statearr_27742_27774[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27742_27774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (6))){
var inst_27718 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27743_27775 = state_27731__$1;
(statearr_27743_27775[(2)] = inst_27718);

(statearr_27743_27775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (17))){
var state_27731__$1 = state_27731;
var statearr_27744_27776 = state_27731__$1;
(statearr_27744_27776[(2)] = null);

(statearr_27744_27776[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (3))){
var inst_27720 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
if(cljs.core.truth_(inst_27720)){
var statearr_27745_27777 = state_27731__$1;
(statearr_27745_27777[(1)] = (14));

} else {
var statearr_27746_27778 = state_27731__$1;
(statearr_27746_27778[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (12))){
var state_27731__$1 = state_27731;
var statearr_27747_27779 = state_27731__$1;
(statearr_27747_27779[(2)] = null);

(statearr_27747_27779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (2))){
var inst_27681 = (state_27731[(8)]);
var inst_27683 = cljs.core.seq.call(null,inst_27681);
var state_27731__$1 = state_27731;
if(inst_27683){
var statearr_27748_27780 = state_27731__$1;
(statearr_27748_27780[(1)] = (4));

} else {
var statearr_27749_27781 = state_27731__$1;
(statearr_27749_27781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (19))){
var inst_27727 = (state_27731[(2)]);
var state_27731__$1 = (function (){var statearr_27750 = state_27731;
(statearr_27750[(12)] = inst_27727);

return statearr_27750;
})();
var statearr_27751_27782 = state_27731__$1;
(statearr_27751_27782[(2)] = false);

(statearr_27751_27782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (11))){
var inst_27686 = (state_27731[(9)]);
var inst_27700 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_27701 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_27702 = console.info("file loaded successfully",inst_27700,inst_27701,inst_27686);
var state_27731__$1 = state_27731;
var statearr_27752_27783 = state_27731__$1;
(statearr_27752_27783[(2)] = inst_27702);

(statearr_27752_27783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (9))){
var inst_27681 = (state_27731[(8)]);
var inst_27712 = cljs.core.rest.call(null,inst_27681);
var inst_27681__$1 = inst_27712;
var state_27731__$1 = (function (){var statearr_27753 = state_27731;
(statearr_27753[(8)] = inst_27681__$1);

return statearr_27753;
})();
var statearr_27754_27784 = state_27731__$1;
(statearr_27754_27784[(2)] = null);

(statearr_27754_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (5))){
var state_27731__$1 = state_27731;
var statearr_27755_27785 = state_27731__$1;
(statearr_27755_27785[(2)] = null);

(statearr_27755_27785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (14))){
var state_27731__$1 = state_27731;
var statearr_27756_27786 = state_27731__$1;
(statearr_27756_27786[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_27756_27786[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (16))){
var inst_27729 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27731__$1,inst_27729);
} else {
if((state_val_27732 === (10))){
var inst_27715 = (state_27731[(2)]);
var state_27731__$1 = state_27731;
var statearr_27757_27787 = state_27731__$1;
(statearr_27757_27787[(2)] = inst_27715);

(statearr_27757_27787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (18))){
var inst_27725 = src_cb.call(null,null);
var state_27731__$1 = state_27731;
var statearr_27758_27788 = state_27731__$1;
(statearr_27758_27788[(2)] = inst_27725);

(statearr_27758_27788[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27732 === (8))){
var state_27731__$1 = state_27731;
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
var statearr_27759_27789 = state_27731__$1;
(statearr_27759_27789[(1)] = (11));

} else {
var statearr_27760_27790 = state_27731__$1;
(statearr_27760_27790[(1)] = (12));

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
var klipse_clj$lang$clojure$io$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21899__auto____0 = (function (){
var statearr_27761 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27761[(0)] = klipse_clj$lang$clojure$io$state_machine__21899__auto__);

(statearr_27761[(1)] = (1));

return statearr_27761;
});
var klipse_clj$lang$clojure$io$state_machine__21899__auto____1 = (function (state_27731){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27762){var ex__21902__auto__ = e27762;
var statearr_27763_27791 = state_27731;
(statearr_27763_27791[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27731[(4)]))){
var statearr_27764_27792 = state_27731;
(statearr_27764_27792[(1)] = cljs.core.first.call(null,(state_27731[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27731;
state_27731 = G__27793;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21899__auto__ = function(state_27731){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____1.call(this,state_27731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27765 = f__22024__auto__.call(null);
(statearr_27765[(6)] = c__22023__auto__);

return statearr_27765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq27673){
var G__27674 = cljs.core.first.call(null,seq27673);
var seq27673__$1 = cljs.core.next.call(null,seq27673);
var G__27675 = cljs.core.first.call(null,seq27673__$1);
var seq27673__$2 = cljs.core.next.call(null,seq27673__$1);
var G__27676 = cljs.core.first.call(null,seq27673__$2);
var seq27673__$3 = cljs.core.next.call(null,seq27673__$2);
var G__27677 = cljs.core.first.call(null,seq27673__$3);
var seq27673__$4 = cljs.core.next.call(null,seq27673__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27674,G__27675,G__27676,G__27677,seq27673__$4);
}));

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__5480__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27794(s__27795){
return (new cljs.core.LazySeq(null,(function (){
var s__27795__$1 = s__27795;
while(true){
var temp__5823__auto__ = cljs.core.seq.call(null,s__27795__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var lib = cljs.core.first.call(null,xs__6383__auto__);
var iterys__5476__auto__ = ((function (s__27795__$1,lib,xs__6383__auto__,temp__5823__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__27794_$_iter__27796(s__27797){
return (new cljs.core.LazySeq(null,((function (s__27795__$1,lib,xs__6383__auto__,temp__5823__auto__){
return (function (){
var s__27797__$1 = s__27797;
while(true){
var temp__5823__auto____$1 = cljs.core.seq.call(null,s__27797__$1);
if(temp__5823__auto____$1){
var s__27797__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27797__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__27797__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__27799 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__27798 = (0);
while(true){
if((i__27798 < size__5479__auto__)){
var suffix = cljs.core._nth.call(null,c__5478__auto__,i__27798);
cljs.core.chunk_append.call(null,b__27799,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__27800 = (i__27798 + (1));
i__27798 = G__27800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27799),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27794_$_iter__27796.call(null,cljs.core.chunk_rest.call(null,s__27797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27799),null);
}
} else {
var suffix = cljs.core.first.call(null,s__27797__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__27794_$_iter__27796.call(null,cljs.core.rest.call(null,s__27797__$2)));
}
} else {
return null;
}
break;
}
});})(s__27795__$1,lib,xs__6383__auto__,temp__5823__auto__))
,null,null));
});})(s__27795__$1,lib,xs__6383__auto__,temp__5823__auto__))
;
var fs__5477__auto__ = cljs.core.seq.call(null,iterys__5476__auto__.call(null,suffixes));
if(fs__5477__auto__){
return cljs.core.concat.call(null,fs__5477__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__27794.call(null,cljs.core.rest.call(null,s__27795__$1)));
} else {
var G__27801 = cljs.core.rest.call(null,s__27795__$1);
s__27795__$1 = G__27801;
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

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27846){
var state_val_27847 = (state_27846[(1)]);
if((state_val_27847 === (7))){
var inst_27825 = (state_27846[(7)]);
var inst_27818 = (state_27846[(8)]);
var inst_27834 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27835 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27825);
var inst_27836 = klipse_clj.lang.clojure.io.edn.call(null,inst_27835);
var inst_27837 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27818);
var inst_27838 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_27836,inst_27837];
var inst_27839 = cljs.core.PersistentHashMap.fromArrays(inst_27834,inst_27838);
var inst_27840 = src_cb.call(null,inst_27839);
var state_27846__$1 = state_27846;
var statearr_27848_27865 = state_27846__$1;
(statearr_27848_27865[(2)] = inst_27840);

(statearr_27848_27865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (1))){
var inst_27803 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_27846__$1 = (function (){var statearr_27849 = state_27846;
(statearr_27849[(9)] = inst_27803);

return statearr_27849;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_27850_27866 = state_27846__$1;
(statearr_27850_27866[(1)] = (2));

} else {
var statearr_27851_27867 = state_27846__$1;
(statearr_27851_27867[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (4))){
var inst_27809 = (state_27846[(10)]);
var inst_27803 = (state_27846[(9)]);
var inst_27807 = (state_27846[(11)]);
var inst_27810 = (state_27846[(12)]);
var inst_27807__$1 = (state_27846[(2)]);
var inst_27808 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_27809__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27808),"/"].join('');
var inst_27810__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27809__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27807__$1),".js"].join('');
var inst_27811 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27809__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27807__$1),".cache.json"].join('');
var inst_27812 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27810__$1);
var inst_27813 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27814 = [false];
var inst_27815 = cljs.core.PersistentHashMap.fromArrays(inst_27813,inst_27814);
var inst_27816 = cljs_http.client.get.call(null,inst_27812,inst_27815);
var state_27846__$1 = (function (){var statearr_27852 = state_27846;
(statearr_27852[(11)] = inst_27807__$1);

(statearr_27852[(10)] = inst_27809__$1);

(statearr_27852[(12)] = inst_27810__$1);

(statearr_27852[(13)] = inst_27811);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(5),inst_27816);
} else {
if((state_val_27847 === (6))){
var inst_27803 = (state_27846[(9)]);
var inst_27807 = (state_27846[(11)]);
var inst_27809 = (state_27846[(10)]);
var inst_27810 = (state_27846[(12)]);
var inst_27811 = (state_27846[(13)]);
var inst_27818 = (state_27846[(8)]);
var inst_27825 = (state_27846[(7)]);
var inst_27825__$1 = (state_27846[(2)]);
var inst_27826 = (function (){var nn = inst_27803;
var suffix = inst_27807;
var root = inst_27809;
var src_filename = inst_27810;
var cache_filename = inst_27811;
var src = inst_27818;
var cache = inst_27825__$1;
return (function (p1__27802_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__27802_SHARP_);
});
})();
var inst_27827 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27828 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27825__$1);
var inst_27829 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_27818);
var inst_27830 = [inst_27828,inst_27829];
var inst_27831 = (new cljs.core.PersistentVector(null,2,(5),inst_27827,inst_27830,null));
var inst_27832 = cljs.core.every_QMARK_.call(null,inst_27826,inst_27831);
var state_27846__$1 = (function (){var statearr_27853 = state_27846;
(statearr_27853[(7)] = inst_27825__$1);

return statearr_27853;
})();
if(inst_27832){
var statearr_27854_27868 = state_27846__$1;
(statearr_27854_27868[(1)] = (7));

} else {
var statearr_27855_27869 = state_27846__$1;
(statearr_27855_27869[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (3))){
var state_27846__$1 = state_27846;
var statearr_27856_27870 = state_27846__$1;
(statearr_27856_27870[(2)] = "");

(statearr_27856_27870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (2))){
var state_27846__$1 = state_27846;
var statearr_27857_27871 = state_27846__$1;
(statearr_27857_27871[(2)] = "$macros");

(statearr_27857_27871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (9))){
var inst_27844 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27846__$1,inst_27844);
} else {
if((state_val_27847 === (5))){
var inst_27811 = (state_27846[(13)]);
var inst_27818 = (state_27846[(2)]);
var inst_27819 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_27811);
var inst_27820 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27821 = [false];
var inst_27822 = cljs.core.PersistentHashMap.fromArrays(inst_27820,inst_27821);
var inst_27823 = cljs_http.client.get.call(null,inst_27819,inst_27822);
var state_27846__$1 = (function (){var statearr_27858 = state_27846;
(statearr_27858[(8)] = inst_27818);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(6),inst_27823);
} else {
if((state_val_27847 === (8))){
var inst_27842 = on_failure_cb.call(null);
var state_27846__$1 = state_27846;
var statearr_27859_27872 = state_27846__$1;
(statearr_27859_27872[(2)] = inst_27842);

(statearr_27859_27872[(1)] = (9));


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
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____1 = (function (state_27846){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27861){var ex__21902__auto__ = e27861;
var statearr_27862_27873 = state_27846;
(statearr_27862_27873[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27846[(4)]))){
var statearr_27863_27874 = state_27846;
(statearr_27863_27874[(1)] = cljs.core.first.call(null,(state_27846[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27875 = state_27846;
state_27846 = G__27875;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27864 = f__22024__auto__.call(null);
(statearr_27864[(6)] = c__22023__auto__);

return statearr_27864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-file",filename);
} else {
}

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27895){
var state_val_27896 = (state_27895[(1)]);
if((state_val_27896 === (1))){
var inst_27877 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27878 = [false];
var inst_27879 = cljs.core.PersistentHashMap.fromArrays(inst_27877,inst_27878);
var inst_27880 = cljs_http.client.get.call(null,filename,inst_27879);
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27895__$1,(2),inst_27880);
} else {
if((state_val_27896 === (2))){
var inst_27882 = (state_27895[(2)]);
var inst_27883 = cljs.core.__destructure_map.call(null,inst_27882);
var inst_27884 = cljs.core.get.call(null,inst_27883,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_27885 = cljs.core.get.call(null,inst_27883,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_27886 = cljs.core._EQ_.call(null,(200),inst_27885);
var state_27895__$1 = (function (){var statearr_27897 = state_27895;
(statearr_27897[(7)] = inst_27884);

return statearr_27897;
})();
if(inst_27886){
var statearr_27898_27907 = state_27895__$1;
(statearr_27898_27907[(1)] = (3));

} else {
var statearr_27899_27908 = state_27895__$1;
(statearr_27899_27908[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (3))){
var inst_27884 = (state_27895[(7)]);
var inst_27888 = klipse_clj.lang.clojure.io.edn.call(null,inst_27884);
var inst_27889 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_27888);
var state_27895__$1 = state_27895;
var statearr_27900_27909 = state_27895__$1;
(statearr_27900_27909[(2)] = inst_27889);

(statearr_27900_27909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (4))){
var inst_27891 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_27895__$1 = state_27895;
var statearr_27901_27910 = state_27895__$1;
(statearr_27901_27910[(2)] = inst_27891);

(statearr_27901_27910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27896 === (5))){
var inst_27893 = (state_27895[(2)]);
var state_27895__$1 = state_27895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27895__$1,inst_27893);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____0 = (function (){
var statearr_27902 = [null,null,null,null,null,null,null,null];
(statearr_27902[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__);

(statearr_27902[(1)] = (1));

return statearr_27902;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____1 = (function (state_27895){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27903){var ex__21902__auto__ = e27903;
var statearr_27904_27911 = state_27895;
(statearr_27904_27911[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27895[(4)]))){
var statearr_27905_27912 = state_27895;
(statearr_27905_27912[(1)] = cljs.core.first.call(null,(state_27895[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27913 = state_27895;
state_27895 = G__27913;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__ = function(state_27895){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____1.call(this,state_27895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27906 = f__22024__auto__.call(null);
(statearr_27906[(6)] = c__22023__auto__);

return statearr_27906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__27914,src_cb_original){
var map__27915 = p__27914;
var map__27915__$1 = cljs.core.__destructure_map.call(null,map__27915);
var args = map__27915__$1;
var name = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__27915__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:(function() { 
var G__27916__delegate = function (args__$1){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__27916 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__27917__i = 0, G__27917__a = new Array(arguments.length -  0);
while (G__27917__i < G__27917__a.length) {G__27917__a[G__27917__i] = arguments[G__27917__i + 0]; ++G__27917__i;}
  args__$1 = new cljs.core.IndexedSeq(G__27917__a,0,null);
} 
return G__27916__delegate.call(this,args__$1);};
G__27916.cljs$lang$maxFixedArity = 0;
G__27916.cljs$lang$applyTo = (function (arglist__27918){
var args__$1 = cljs.core.seq(arglist__27918);
return G__27916__delegate(args__$1);
});
G__27916.cljs$core$IFn$_invoke$arity$variadic = G__27916__delegate;
return G__27916;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__27920,src_cb){
var map__27921 = p__27920;
var map__27921__$1 = cljs.core.__destructure_map.call(null,map__27921);
var path = cljs.core.get.call(null,map__27921__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,(function (p1__27919_SHARP_){
return ["https://gist.githubusercontent.com/",path__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27919_SHARP_)].join('');
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
return (!(((function (){var obj__26858__auto__ = goog;
var f__26859__auto__ = (obj__26858__auto__["getObjectByName"]);
return f__26859__auto__.call(obj__26858__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var obj27922 = window;
if((!((obj27922 == null)))){
return (obj27922["React"]);
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
var obj27923 = window;
if((!((obj27923 == null)))){
return (obj27923["ReactDOMServer"]);
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
var obj27924 = window;
if((!((obj27924 == null)))){
return (obj27924["ReactDOM"]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__27926,src_cb){
var map__27927 = p__27926;
var map__27927__$1 = cljs.core.__destructure_map.call(null,map__27927);
var args = map__27927__$1;
var name = cljs.core.get.call(null,map__27927__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27927__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__27927__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
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
var filenames = cljs.core.map.call(null,(function (p1__27925_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27925_SHARP_),".cache.json"].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27940){
var state_val_27941 = (state_27940[(1)]);
if((state_val_27941 === (1))){
var inst_27928 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27940__$1,(2),inst_27928);
} else {
if((state_val_27941 === (2))){
var inst_27930 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
if(cljs.core.truth_(inst_27930)){
var statearr_27942_27996 = state_27940__$1;
(statearr_27942_27996[(1)] = (3));

} else {
var statearr_27943_27997 = state_27940__$1;
(statearr_27943_27997[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (3))){
var state_27940__$1 = state_27940;
var statearr_27944_27998 = state_27940__$1;
(statearr_27944_27998[(2)] = null);

(statearr_27944_27998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (4))){
var inst_27933 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_27934 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_27935 = cljs.core.PersistentHashMap.fromArrays(inst_27933,inst_27934);
var inst_27936 = src_cb.call(null,inst_27935);
var state_27940__$1 = state_27940;
var statearr_27945_27999 = state_27940__$1;
(statearr_27945_27999[(2)] = inst_27936);

(statearr_27945_27999[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27941 === (5))){
var inst_27938 = (state_27940[(2)]);
var state_27940__$1 = state_27940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21899__auto____0 = (function (){
var statearr_27946 = [null,null,null,null,null,null,null];
(statearr_27946[(0)] = klipse_clj$lang$clojure$io$state_machine__21899__auto__);

(statearr_27946[(1)] = (1));

return statearr_27946;
});
var klipse_clj$lang$clojure$io$state_machine__21899__auto____1 = (function (state_27940){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27947){var ex__21902__auto__ = e27947;
var statearr_27948_28000 = state_27940;
(statearr_27948_28000[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27940[(4)]))){
var statearr_27949_28001 = state_27940;
(statearr_27949_28001[(1)] = cljs.core.first.call(null,(state_27940[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28002 = state_27940;
state_27940 = G__28002;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21899__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27950 = f__22024__auto__.call(null);
(statearr_27950[(6)] = c__22023__auto__);

return statearr_27950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (1))){
var inst_27951 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27961__$1,(2),inst_27951);
} else {
if((state_val_27962 === (2))){
var inst_27953 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
if(cljs.core.truth_(inst_27953)){
var statearr_27963_28003 = state_27961__$1;
(statearr_27963_28003[(1)] = (3));

} else {
var statearr_27964_28004 = state_27961__$1;
(statearr_27964_28004[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (3))){
var state_27961__$1 = state_27961;
var statearr_27965_28005 = state_27961__$1;
(statearr_27965_28005[(2)] = null);

(statearr_27965_28005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (4))){
var inst_27956 = [prefix,".js"].join('');
var inst_27957 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27956,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27961__$1 = state_27961;
var statearr_27966_28006 = state_27961__$1;
(statearr_27966_28006[(2)] = inst_27957);

(statearr_27966_28006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (5))){
var inst_27959 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21899__auto____0 = (function (){
var statearr_27967 = [null,null,null,null,null,null,null];
(statearr_27967[(0)] = klipse_clj$lang$clojure$io$state_machine__21899__auto__);

(statearr_27967[(1)] = (1));

return statearr_27967;
});
var klipse_clj$lang$clojure$io$state_machine__21899__auto____1 = (function (state_27961){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27968){var ex__21902__auto__ = e27968;
var statearr_27969_28007 = state_27961;
(statearr_27969_28007[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27961[(4)]))){
var statearr_27970_28008 = state_27961;
(statearr_27970_28008[(1)] = cljs.core.first.call(null,(state_27961[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28009 = state_27961;
state_27961 = G__28009;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21899__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27971 = f__22024__auto__.call(null);
(statearr_27971[(6)] = c__22023__auto__);

return statearr_27971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (1))){
var inst_27972 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(2),inst_27972);
} else {
if((state_val_27986 === (2))){
var inst_27974 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27974)){
var statearr_27987_28010 = state_27985__$1;
(statearr_27987_28010[(1)] = (3));

} else {
var statearr_27988_28011 = state_27985__$1;
(statearr_27988_28011[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (3))){
var state_27985__$1 = state_27985;
var statearr_27989_28012 = state_27985__$1;
(statearr_27989_28012[(2)] = null);

(statearr_27989_28012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (4))){
var inst_27977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27978 = [".js"];
var inst_27979 = (new cljs.core.PersistentVector(null,1,(5),inst_27977,inst_27978,null));
var inst_27980 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_27979,path);
var inst_27981 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_27980,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_27985__$1 = state_27985;
var statearr_27990_28013 = state_27985__$1;
(statearr_27990_28013[(2)] = inst_27981);

(statearr_27990_28013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (5))){
var inst_27983 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__21899__auto____0 = (function (){
var statearr_27991 = [null,null,null,null,null,null,null];
(statearr_27991[(0)] = klipse_clj$lang$clojure$io$state_machine__21899__auto__);

(statearr_27991[(1)] = (1));

return statearr_27991;
});
var klipse_clj$lang$clojure$io$state_machine__21899__auto____1 = (function (state_27985){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e27992){var ex__21902__auto__ = e27992;
var statearr_27993_28014 = state_27985;
(statearr_27993_28014[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_27985[(4)]))){
var statearr_27994_28015 = state_27985;
(statearr_27994_28015[(1)] = cljs.core.first.call(null,(state_27985[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28016 = state_27985;
state_27985 = G__28016;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__21899__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__21899__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__21899__auto____0;
klipse_clj$lang$clojure$io$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$io$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_27995 = f__22024__auto__.call(null);
(statearr_27995[(6)] = c__22023__auto__);

return statearr_27995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__28018,src_cb){
var map__28019 = p__28018;
var map__28019__$1 = cljs.core.__destructure_map.call(null,map__28019);
var name = cljs.core.get.call(null,map__28019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28019__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__26858__auto__ = goog;
var f__26859__auto__ = (obj__26858__auto__["getObjectByName"]);
return f__26859__auto__.call(obj__26858__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,(function (p1__28017_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28017_SHARP_),".js"].join('');
}),cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
