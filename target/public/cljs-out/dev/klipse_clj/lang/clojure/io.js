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
return (function (_,p__47579,src_cb){
var map__47580 = p__47579;
var map__47580__$1 = ((((!((map__47580 == null)))?(((((map__47580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47580):map__47580);
var name = cljs.core.get.call(null,map__47580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__47580__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__47580__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4499__auto___47696 = arguments.length;
var i__4500__auto___47697 = (0);
while(true){
if((i__4500__auto___47697 < len__4499__auto___47696)){
args__4502__auto__.push((arguments[i__4500__auto___47697]));

var G__47698 = (i__4500__auto___47697 + (1));
i__4500__auto___47697 = G__47698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__47587){
var map__47588 = p__47587;
var map__47588__$1 = ((((!((map__47588 == null)))?(((((map__47588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47588):map__47588);
var transform = cljs.core.get.call(null,map__47588__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__47588__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_){
return (function (state_47653){
var state_val_47654 = (state_47653[(1)]);
if((state_val_47654 === (7))){
var inst_47602 = (state_47653[(7)]);
var inst_47602__$1 = (state_47653[(2)]);
var inst_47604 = (inst_47602__$1 == null);
var inst_47605 = cljs.core.not.call(null,inst_47604);
var state_47653__$1 = (function (){var statearr_47655 = state_47653;
(statearr_47655[(7)] = inst_47602__$1);

return statearr_47655;
})();
if(inst_47605){
var statearr_47656_47699 = state_47653__$1;
(statearr_47656_47699[(1)] = (8));

} else {
var statearr_47657_47700 = state_47653__$1;
(statearr_47657_47700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (20))){
var state_47653__$1 = state_47653;
var statearr_47658_47701 = state_47653__$1;
(statearr_47658_47701[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_47658_47701[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (1))){
var inst_47590 = filenames;
var state_47653__$1 = (function (){var statearr_47659 = state_47653;
(statearr_47659[(8)] = inst_47590);

return statearr_47659;
})();
var statearr_47660_47702 = state_47653__$1;
(statearr_47660_47702[(2)] = null);

(statearr_47660_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (24))){
var inst_47647 = src_cb.call(null,null);
var state_47653__$1 = state_47653;
var statearr_47661_47703 = state_47653__$1;
(statearr_47661_47703[(2)] = inst_47647);

(statearr_47661_47703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (4))){
var inst_47595 = (state_47653[(9)]);
var inst_47590 = (state_47653[(8)]);
var inst_47595__$1 = cljs.core.first.call(null,inst_47590);
var inst_47596 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_47595__$1);
var inst_47597 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47598 = [false];
var inst_47599 = cljs.core.PersistentHashMap.fromArrays(inst_47597,inst_47598);
var inst_47600 = cljs_http.client.get.call(null,inst_47596,inst_47599);
var state_47653__$1 = (function (){var statearr_47662 = state_47653;
(statearr_47662[(9)] = inst_47595__$1);

return statearr_47662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47653__$1,(7),inst_47600);
} else {
if((state_val_47654 === (15))){
var inst_47602 = (state_47653[(7)]);
var state_47653__$1 = state_47653;
var statearr_47663_47704 = state_47653__$1;
(statearr_47663_47704[(2)] = inst_47602);

(statearr_47663_47704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (21))){
var state_47653__$1 = state_47653;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_47664_47705 = state_47653__$1;
(statearr_47664_47705[(1)] = (23));

} else {
var statearr_47665_47706 = state_47653__$1;
(statearr_47665_47706[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (13))){
var inst_47615 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
var statearr_47666_47707 = state_47653__$1;
(statearr_47666_47707[(2)] = inst_47615);

(statearr_47666_47707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (22))){
var inst_47651 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47653__$1,inst_47651);
} else {
if((state_val_47654 === (6))){
var inst_47640 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
var statearr_47667_47708 = state_47653__$1;
(statearr_47667_47708[(2)] = inst_47640);

(statearr_47667_47708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (25))){
var inst_47649 = (state_47653[(2)]);
var state_47653__$1 = (function (){var statearr_47668 = state_47653;
(statearr_47668[(10)] = inst_47649);

return statearr_47668;
})();
var statearr_47669_47709 = state_47653__$1;
(statearr_47669_47709[(2)] = false);

(statearr_47669_47709[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (17))){
var inst_47625 = (state_47653[(11)]);
var inst_47595 = (state_47653[(9)]);
var inst_47628 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_47629 = transform.call(null,inst_47625);
var inst_47630 = [lang,inst_47629,inst_47595];
var inst_47631 = cljs.core.PersistentHashMap.fromArrays(inst_47628,inst_47630);
var inst_47632 = src_cb.call(null,inst_47631);
var state_47653__$1 = (function (){var statearr_47670 = state_47653;
(statearr_47670[(12)] = inst_47632);

return statearr_47670;
})();
var statearr_47671_47710 = state_47653__$1;
(statearr_47671_47710[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_47671_47710[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (3))){
var inst_47642 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
if(cljs.core.truth_(inst_47642)){
var statearr_47672_47711 = state_47653__$1;
(statearr_47672_47711[(1)] = (20));

} else {
var statearr_47673_47712 = state_47653__$1;
(statearr_47673_47712[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (12))){
var state_47653__$1 = state_47653;
var statearr_47674_47713 = state_47653__$1;
(statearr_47674_47713[(2)] = false);

(statearr_47674_47713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (2))){
var inst_47590 = (state_47653[(8)]);
var inst_47592 = cljs.core.seq.call(null,inst_47590);
var state_47653__$1 = state_47653;
if(inst_47592){
var statearr_47675_47714 = state_47653__$1;
(statearr_47675_47714[(1)] = (4));

} else {
var statearr_47676_47715 = state_47653__$1;
(statearr_47676_47715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (23))){
var state_47653__$1 = state_47653;
var statearr_47677_47716 = state_47653__$1;
(statearr_47677_47716[(2)] = null);

(statearr_47677_47716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (19))){
var inst_47637 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
var statearr_47678_47717 = state_47653__$1;
(statearr_47678_47717[(2)] = inst_47637);

(statearr_47678_47717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (11))){
var state_47653__$1 = state_47653;
var statearr_47679_47718 = state_47653__$1;
(statearr_47679_47718[(2)] = true);

(statearr_47679_47718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (9))){
var state_47653__$1 = state_47653;
var statearr_47680_47719 = state_47653__$1;
(statearr_47680_47719[(2)] = false);

(statearr_47680_47719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (5))){
var state_47653__$1 = state_47653;
var statearr_47681_47720 = state_47653__$1;
(statearr_47681_47720[(2)] = null);

(statearr_47681_47720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (14))){
var inst_47602 = (state_47653[(7)]);
var inst_47620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47602);
var state_47653__$1 = state_47653;
var statearr_47682_47721 = state_47653__$1;
(statearr_47682_47721[(2)] = inst_47620);

(statearr_47682_47721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (16))){
var inst_47623 = (state_47653[(2)]);
var inst_47624 = cljs.core.get.call(null,inst_47623,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_47625 = cljs.core.get.call(null,inst_47623,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_47626 = cljs.core._EQ_.call(null,(200),inst_47624);
var state_47653__$1 = (function (){var statearr_47683 = state_47653;
(statearr_47683[(11)] = inst_47625);

return statearr_47683;
})();
if(inst_47626){
var statearr_47684_47722 = state_47653__$1;
(statearr_47684_47722[(1)] = (17));

} else {
var statearr_47685_47723 = state_47653__$1;
(statearr_47685_47723[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (10))){
var inst_47618 = (state_47653[(2)]);
var state_47653__$1 = state_47653;
if(cljs.core.truth_(inst_47618)){
var statearr_47686_47724 = state_47653__$1;
(statearr_47686_47724[(1)] = (14));

} else {
var statearr_47687_47725 = state_47653__$1;
(statearr_47687_47725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (18))){
var inst_47590 = (state_47653[(8)]);
var inst_47634 = cljs.core.rest.call(null,inst_47590);
var inst_47590__$1 = inst_47634;
var state_47653__$1 = (function (){var statearr_47688 = state_47653;
(statearr_47688[(8)] = inst_47590__$1);

return statearr_47688;
})();
var statearr_47689_47726 = state_47653__$1;
(statearr_47689_47726[(2)] = null);

(statearr_47689_47726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47654 === (8))){
var inst_47602 = (state_47653[(7)]);
var inst_47607 = inst_47602.cljs$lang$protocol_mask$partition0$;
var inst_47608 = (inst_47607 & (64));
var inst_47609 = inst_47602.cljs$core$ISeq$;
var inst_47610 = (cljs.core.PROTOCOL_SENTINEL === inst_47609);
var inst_47611 = ((inst_47608) || (inst_47610));
var state_47653__$1 = state_47653;
if(cljs.core.truth_(inst_47611)){
var statearr_47690_47727 = state_47653__$1;
(statearr_47690_47727[(1)] = (11));

} else {
var statearr_47691_47728 = state_47653__$1;
(statearr_47691_47728[(1)] = (12));

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
});})(c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_))
;
return ((function (switch__13856__auto__,c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_47692 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47692[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_47692[(1)] = (1));

return statearr_47692;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_47653){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47693){if((e47693 instanceof Object)){
var ex__13860__auto__ = e47693;
var statearr_47694_47729 = state_47653;
(statearr_47694_47729[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47730 = state_47653;
state_47653 = G__47730;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_47653){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_47653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_))
})();
var state__13948__auto__ = (function (){var statearr_47695 = f__13947__auto__.call(null);
(statearr_47695[(6)] = c__13946__auto__);

return statearr_47695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,map__47588,map__47588__$1,transform,can_recover_QMARK_))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq47582){
var G__47583 = cljs.core.first.call(null,seq47582);
var seq47582__$1 = cljs.core.next.call(null,seq47582);
var G__47584 = cljs.core.first.call(null,seq47582__$1);
var seq47582__$2 = cljs.core.next.call(null,seq47582__$1);
var G__47585 = cljs.core.first.call(null,seq47582__$2);
var seq47582__$3 = cljs.core.next.call(null,seq47582__$2);
var G__47586 = cljs.core.first.call(null,seq47582__$3);
var seq47582__$4 = cljs.core.next.call(null,seq47582__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47583,G__47584,G__47585,G__47586,seq47582__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4292__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__47731(s__47732){
return (new cljs.core.LazySeq(null,(function (){
var s__47732__$1 = s__47732;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__47732__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var lib = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__47732__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__47731_$_iter__47733(s__47734){
return (new cljs.core.LazySeq(null,((function (s__47732__$1,lib,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__47734__$1 = s__47734;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__47734__$1);
if(temp__5457__auto____$1){
var s__47734__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47734__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__47734__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__47736 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__47735 = (0);
while(true){
if((i__47735 < size__4291__auto__)){
var suffix = cljs.core._nth.call(null,c__4290__auto__,i__47735);
cljs.core.chunk_append.call(null,b__47736,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__47737 = (i__47735 + (1));
i__47735 = G__47737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47736),klipse_clj$lang$clojure$io$external_libs_files_$_iter__47731_$_iter__47733.call(null,cljs.core.chunk_rest.call(null,s__47734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47736),null);
}
} else {
var suffix = cljs.core.first.call(null,s__47734__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__47731_$_iter__47733.call(null,cljs.core.rest.call(null,s__47734__$2)));
}
} else {
return null;
}
break;
}
});})(s__47732__$1,lib,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__47732__$1,lib,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,suffixes));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__47731.call(null,cljs.core.rest.call(null,s__47732__$1)));
} else {
var G__47738 = cljs.core.rest.call(null,s__47732__$1);
s__47732__$1 = G__47738;
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
return (function (state_47783){
var state_val_47784 = (state_47783[(1)]);
if((state_val_47784 === (1))){
var inst_47740 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_47783__$1 = (function (){var statearr_47785 = state_47783;
(statearr_47785[(7)] = inst_47740);

return statearr_47785;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_47786_47801 = state_47783__$1;
(statearr_47786_47801[(1)] = (2));

} else {
var statearr_47787_47802 = state_47783__$1;
(statearr_47787_47802[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (2))){
var state_47783__$1 = state_47783;
var statearr_47788_47803 = state_47783__$1;
(statearr_47788_47803[(2)] = "$macros");

(statearr_47788_47803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (3))){
var state_47783__$1 = state_47783;
var statearr_47789_47804 = state_47783__$1;
(statearr_47789_47804[(2)] = "");

(statearr_47789_47804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (4))){
var inst_47747 = (state_47783[(8)]);
var inst_47744 = (state_47783[(9)]);
var inst_47746 = (state_47783[(10)]);
var inst_47740 = (state_47783[(7)]);
var inst_47744__$1 = (state_47783[(2)]);
var inst_47745 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_47746__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47745),"/"].join('');
var inst_47747__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47746__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47740),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47744__$1),".js"].join('');
var inst_47748 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47746__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47740),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47744__$1),".cache.json"].join('');
var inst_47749 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_47747__$1);
var inst_47750 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47751 = [false];
var inst_47752 = cljs.core.PersistentHashMap.fromArrays(inst_47750,inst_47751);
var inst_47753 = cljs_http.client.get.call(null,inst_47749,inst_47752);
var state_47783__$1 = (function (){var statearr_47790 = state_47783;
(statearr_47790[(11)] = inst_47748);

(statearr_47790[(8)] = inst_47747__$1);

(statearr_47790[(9)] = inst_47744__$1);

(statearr_47790[(10)] = inst_47746__$1);

return statearr_47790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47783__$1,(5),inst_47753);
} else {
if((state_val_47784 === (5))){
var inst_47748 = (state_47783[(11)]);
var inst_47755 = (state_47783[(2)]);
var inst_47756 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_47748);
var inst_47757 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47758 = [false];
var inst_47759 = cljs.core.PersistentHashMap.fromArrays(inst_47757,inst_47758);
var inst_47760 = cljs_http.client.get.call(null,inst_47756,inst_47759);
var state_47783__$1 = (function (){var statearr_47791 = state_47783;
(statearr_47791[(12)] = inst_47755);

return statearr_47791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47783__$1,(6),inst_47760);
} else {
if((state_val_47784 === (6))){
var inst_47748 = (state_47783[(11)]);
var inst_47747 = (state_47783[(8)]);
var inst_47744 = (state_47783[(9)]);
var inst_47746 = (state_47783[(10)]);
var inst_47755 = (state_47783[(12)]);
var inst_47762 = (state_47783[(13)]);
var inst_47740 = (state_47783[(7)]);
var inst_47762__$1 = (state_47783[(2)]);
var inst_47763 = (function (){var nn = inst_47740;
var suffix = inst_47744;
var root = inst_47746;
var src_filename = inst_47747;
var cache_filename = inst_47748;
var src = inst_47755;
var cache = inst_47762__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_47748,inst_47747,inst_47744,inst_47746,inst_47755,inst_47762,inst_47740,inst_47762__$1,state_val_47784,c__13946__auto__){
return (function (p1__47739_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__47739_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_47748,inst_47747,inst_47744,inst_47746,inst_47755,inst_47762,inst_47740,inst_47762__$1,state_val_47784,c__13946__auto__))
})();
var inst_47764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47765 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_47762__$1);
var inst_47766 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_47755);
var inst_47767 = [inst_47765,inst_47766];
var inst_47768 = (new cljs.core.PersistentVector(null,2,(5),inst_47764,inst_47767,null));
var inst_47769 = cljs.core.every_QMARK_.call(null,inst_47763,inst_47768);
var state_47783__$1 = (function (){var statearr_47792 = state_47783;
(statearr_47792[(13)] = inst_47762__$1);

return statearr_47792;
})();
if(inst_47769){
var statearr_47793_47805 = state_47783__$1;
(statearr_47793_47805[(1)] = (7));

} else {
var statearr_47794_47806 = state_47783__$1;
(statearr_47794_47806[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (7))){
var inst_47755 = (state_47783[(12)]);
var inst_47762 = (state_47783[(13)]);
var inst_47771 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_47772 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47762);
var inst_47773 = klipse_clj.lang.clojure.io.edn.call(null,inst_47772);
var inst_47774 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_47755);
var inst_47775 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_47773,inst_47774];
var inst_47776 = cljs.core.PersistentHashMap.fromArrays(inst_47771,inst_47775);
var inst_47777 = src_cb.call(null,inst_47776);
var state_47783__$1 = state_47783;
var statearr_47795_47807 = state_47783__$1;
(statearr_47795_47807[(2)] = inst_47777);

(statearr_47795_47807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (8))){
var inst_47779 = src_cb.call(null,null);
var state_47783__$1 = state_47783;
var statearr_47796_47808 = state_47783__$1;
(statearr_47796_47808[(2)] = inst_47779);

(statearr_47796_47808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47784 === (9))){
var inst_47781 = (state_47783[(2)]);
var state_47783__$1 = state_47783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47783__$1,inst_47781);
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
var statearr_47797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47797[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__);

(statearr_47797[(1)] = (1));

return statearr_47797;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1 = (function (state_47783){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47798){if((e47798 instanceof Object)){
var ex__13860__auto__ = e47798;
var statearr_47799_47809 = state_47783;
(statearr_47799_47809[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47810 = state_47783;
state_47783 = G__47810;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__ = function(state_47783){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1.call(this,state_47783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_47800 = f__13947__auto__.call(null);
(statearr_47800[(6)] = c__13946__auto__);

return statearr_47800;
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
return (function (state_47850){
var state_val_47851 = (state_47850[(1)]);
if((state_val_47851 === (7))){
var state_47850__$1 = state_47850;
var statearr_47852_47874 = state_47850__$1;
(statearr_47852_47874[(2)] = false);

(statearr_47852_47874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (1))){
var inst_47812 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_47813 = [false];
var inst_47814 = cljs.core.PersistentHashMap.fromArrays(inst_47812,inst_47813);
var inst_47815 = cljs_http.client.get.call(null,filename,inst_47814);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47850__$1,(2),inst_47815);
} else {
if((state_val_47851 === (4))){
var state_47850__$1 = state_47850;
var statearr_47853_47875 = state_47850__$1;
(statearr_47853_47875[(2)] = false);

(statearr_47853_47875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (13))){
var inst_47846 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_47850__$1 = state_47850;
var statearr_47854_47876 = state_47850__$1;
(statearr_47854_47876[(2)] = inst_47846);

(statearr_47854_47876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (6))){
var state_47850__$1 = state_47850;
var statearr_47855_47877 = state_47850__$1;
(statearr_47855_47877[(2)] = true);

(statearr_47855_47877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (3))){
var inst_47817 = (state_47850[(7)]);
var inst_47822 = inst_47817.cljs$lang$protocol_mask$partition0$;
var inst_47823 = (inst_47822 & (64));
var inst_47824 = inst_47817.cljs$core$ISeq$;
var inst_47825 = (cljs.core.PROTOCOL_SENTINEL === inst_47824);
var inst_47826 = ((inst_47823) || (inst_47825));
var state_47850__$1 = state_47850;
if(cljs.core.truth_(inst_47826)){
var statearr_47856_47878 = state_47850__$1;
(statearr_47856_47878[(1)] = (6));

} else {
var statearr_47857_47879 = state_47850__$1;
(statearr_47857_47879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (12))){
var inst_47839 = (state_47850[(8)]);
var inst_47843 = klipse_clj.lang.clojure.io.edn.call(null,inst_47839);
var inst_47844 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_47843);
var state_47850__$1 = state_47850;
var statearr_47858_47880 = state_47850__$1;
(statearr_47858_47880[(2)] = inst_47844);

(statearr_47858_47880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (2))){
var inst_47817 = (state_47850[(7)]);
var inst_47817__$1 = (state_47850[(2)]);
var inst_47819 = (inst_47817__$1 == null);
var inst_47820 = cljs.core.not.call(null,inst_47819);
var state_47850__$1 = (function (){var statearr_47859 = state_47850;
(statearr_47859[(7)] = inst_47817__$1);

return statearr_47859;
})();
if(inst_47820){
var statearr_47860_47881 = state_47850__$1;
(statearr_47860_47881[(1)] = (3));

} else {
var statearr_47861_47882 = state_47850__$1;
(statearr_47861_47882[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (11))){
var inst_47838 = (state_47850[(2)]);
var inst_47839 = cljs.core.get.call(null,inst_47838,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_47840 = cljs.core.get.call(null,inst_47838,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_47841 = cljs.core._EQ_.call(null,(200),inst_47840);
var state_47850__$1 = (function (){var statearr_47862 = state_47850;
(statearr_47862[(8)] = inst_47839);

return statearr_47862;
})();
if(inst_47841){
var statearr_47863_47883 = state_47850__$1;
(statearr_47863_47883[(1)] = (12));

} else {
var statearr_47864_47884 = state_47850__$1;
(statearr_47864_47884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (9))){
var inst_47817 = (state_47850[(7)]);
var inst_47835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47817);
var state_47850__$1 = state_47850;
var statearr_47865_47885 = state_47850__$1;
(statearr_47865_47885[(2)] = inst_47835);

(statearr_47865_47885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (5))){
var inst_47833 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
if(cljs.core.truth_(inst_47833)){
var statearr_47866_47886 = state_47850__$1;
(statearr_47866_47886[(1)] = (9));

} else {
var statearr_47867_47887 = state_47850__$1;
(statearr_47867_47887[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (14))){
var inst_47848 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47850__$1,inst_47848);
} else {
if((state_val_47851 === (10))){
var inst_47817 = (state_47850[(7)]);
var state_47850__$1 = state_47850;
var statearr_47868_47888 = state_47850__$1;
(statearr_47868_47888[(2)] = inst_47817);

(statearr_47868_47888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (8))){
var inst_47830 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47869_47889 = state_47850__$1;
(statearr_47869_47889[(2)] = inst_47830);

(statearr_47869_47889[(1)] = (5));


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
var statearr_47870 = [null,null,null,null,null,null,null,null,null];
(statearr_47870[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__);

(statearr_47870[(1)] = (1));

return statearr_47870;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1 = (function (state_47850){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47871){if((e47871 instanceof Object)){
var ex__13860__auto__ = e47871;
var statearr_47872_47890 = state_47850;
(statearr_47872_47890[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47891 = state_47850;
state_47850 = G__47891;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__ = function(state_47850){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1.call(this,state_47850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_47873 = f__13947__auto__.call(null);
(statearr_47873[(6)] = c__13946__auto__);

return statearr_47873;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__47892,src_cb_original){
var map__47893 = p__47892;
var map__47893__$1 = ((((!((map__47893 == null)))?(((((map__47893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47893):map__47893);
var name = cljs.core.get.call(null,map__47893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__47893__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__47893,map__47893__$1,name,path){
return (function() { 
var G__47895__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__47895 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47896__i = 0, G__47896__a = new Array(arguments.length -  0);
while (G__47896__i < G__47896__a.length) {G__47896__a[G__47896__i] = arguments[G__47896__i + 0]; ++G__47896__i;}
  args = new cljs.core.IndexedSeq(G__47896__a,0,null);
} 
return G__47895__delegate.call(this,args);};
G__47895.cljs$lang$maxFixedArity = 0;
G__47895.cljs$lang$applyTo = (function (arglist__47897){
var args = cljs.core.seq(arglist__47897);
return G__47895__delegate(args);
});
G__47895.cljs$core$IFn$_invoke$arity$variadic = G__47895__delegate;
return G__47895;
})()
;})(map__47893,map__47893__$1,name,path))
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
return new cljs.core.Keyword(null,"bundled_ns_root","bundled_ns_root",205057992).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/klipse-clj/target/public/cljs-out/dev/parinfer");
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__47899,src_cb){
var map__47900 = p__47899;
var map__47900__$1 = ((((!((map__47900 == null)))?(((((map__47900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47900):map__47900);
var path = cljs.core.get.call(null,map__47900__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__47900,map__47900__$1,path){
return (function (p1__47898_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47898_SHARP_)].join('');
});})(path__$1,map__47900,map__47900__$1,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__47903,src_cb){
var map__47904 = p__47903;
var map__47904__$1 = ((((!((map__47904 == null)))?(((((map__47904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47904):map__47904);
var name = cljs.core.get.call(null,map__47904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__47904__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__47904,map__47904__$1,name,path){
return (function (p1__47902_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47902_SHARP_),".cache.json"].join('');
});})(_,map__47904,map__47904__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path){
return (function (state_47918){
var state_val_47919 = (state_47918[(1)]);
if((state_val_47919 === (1))){
var inst_47906 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_47918__$1 = state_47918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47918__$1,(2),inst_47906);
} else {
if((state_val_47919 === (2))){
var inst_47908 = (state_47918[(2)]);
var state_47918__$1 = state_47918;
if(cljs.core.truth_(inst_47908)){
var statearr_47920_47971 = state_47918__$1;
(statearr_47920_47971[(1)] = (3));

} else {
var statearr_47921_47972 = state_47918__$1;
(statearr_47921_47972[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (3))){
var state_47918__$1 = state_47918;
var statearr_47922_47973 = state_47918__$1;
(statearr_47922_47973[(2)] = null);

(statearr_47922_47973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (4))){
var inst_47911 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_47912 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_47913 = cljs.core.PersistentHashMap.fromArrays(inst_47911,inst_47912);
var inst_47914 = src_cb.call(null,inst_47913);
var state_47918__$1 = state_47918;
var statearr_47923_47974 = state_47918__$1;
(statearr_47923_47974[(2)] = inst_47914);

(statearr_47923_47974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (5))){
var inst_47916 = (state_47918[(2)]);
var state_47918__$1 = state_47918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47918__$1,inst_47916);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_47924 = [null,null,null,null,null,null,null];
(statearr_47924[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_47924[(1)] = (1));

return statearr_47924;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_47918){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47925){if((e47925 instanceof Object)){
var ex__13860__auto__ = e47925;
var statearr_47926_47975 = state_47918;
(statearr_47926_47975[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47976 = state_47918;
state_47918 = G__47976;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_47918){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_47918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_47927 = f__13947__auto__.call(null);
(statearr_47927[(6)] = c__13946__auto__);

return statearr_47927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,_,filenames,map__47904,map__47904__$1,name,path))
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
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path){
return (function (state_47938){
var state_val_47939 = (state_47938[(1)]);
if((state_val_47939 === (1))){
var inst_47928 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_47938__$1 = state_47938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47938__$1,(2),inst_47928);
} else {
if((state_val_47939 === (2))){
var inst_47930 = (state_47938[(2)]);
var state_47938__$1 = state_47938;
if(cljs.core.truth_(inst_47930)){
var statearr_47940_47977 = state_47938__$1;
(statearr_47940_47977[(1)] = (3));

} else {
var statearr_47941_47978 = state_47938__$1;
(statearr_47941_47978[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47939 === (3))){
var state_47938__$1 = state_47938;
var statearr_47942_47979 = state_47938__$1;
(statearr_47942_47979[(2)] = null);

(statearr_47942_47979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47939 === (4))){
var inst_47933 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".js"].join('');
var inst_47934 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_47933,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_47938__$1 = state_47938;
var statearr_47943_47980 = state_47938__$1;
(statearr_47943_47980[(2)] = inst_47934);

(statearr_47943_47980[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47939 === (5))){
var inst_47936 = (state_47938[(2)]);
var state_47938__$1 = state_47938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47938__$1,inst_47936);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_47944 = [null,null,null,null,null,null,null];
(statearr_47944[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_47944[(1)] = (1));

return statearr_47944;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_47938){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47945){if((e47945 instanceof Object)){
var ex__13860__auto__ = e47945;
var statearr_47946_47981 = state_47938;
(statearr_47946_47981[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47982 = state_47938;
state_47938 = G__47982;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_47938){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_47938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_47947 = f__13947__auto__.call(null);
(statearr_47947[(6)] = c__13946__auto__);

return statearr_47947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,prefix,filenames,map__47904,map__47904__$1,name,path))
);

return c__13946__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__,filenames,map__47904,map__47904__$1,name,path){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__,filenames,map__47904,map__47904__$1,name,path){
return (function (state_47961){
var state_val_47962 = (state_47961[(1)]);
if((state_val_47962 === (1))){
var inst_47948 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_47961__$1 = state_47961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47961__$1,(2),inst_47948);
} else {
if((state_val_47962 === (2))){
var inst_47950 = (state_47961[(2)]);
var state_47961__$1 = state_47961;
if(cljs.core.truth_(inst_47950)){
var statearr_47963_47983 = state_47961__$1;
(statearr_47963_47983[(1)] = (3));

} else {
var statearr_47964_47984 = state_47961__$1;
(statearr_47964_47984[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (3))){
var state_47961__$1 = state_47961;
var statearr_47965_47985 = state_47961__$1;
(statearr_47965_47985[(2)] = null);

(statearr_47965_47985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (4))){
var inst_47953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47954 = [".js"];
var inst_47955 = (new cljs.core.PersistentVector(null,1,(5),inst_47953,inst_47954,null));
var inst_47956 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_47955,path);
var inst_47957 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_47956,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_47961__$1 = state_47961;
var statearr_47966_47986 = state_47961__$1;
(statearr_47966_47986[(2)] = inst_47957);

(statearr_47966_47986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47962 === (5))){
var inst_47959 = (state_47961[(2)]);
var state_47961__$1 = state_47961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47961__$1,inst_47959);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__,filenames,map__47904,map__47904__$1,name,path))
;
return ((function (switch__13856__auto__,c__13946__auto__,filenames,map__47904,map__47904__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13857__auto____0 = (function (){
var statearr_47967 = [null,null,null,null,null,null,null];
(statearr_47967[(0)] = klipse_clj$lang$clojure$io$state_machine__13857__auto__);

(statearr_47967[(1)] = (1));

return statearr_47967;
});
var klipse_clj$lang$clojure$io$state_machine__13857__auto____1 = (function (state_47961){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_47961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e47968){if((e47968 instanceof Object)){
var ex__13860__auto__ = e47968;
var statearr_47969_47987 = state_47961;
(statearr_47969_47987[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47988 = state_47961;
state_47961 = G__47988;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13857__auto__ = function(state_47961){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13857__auto____1.call(this,state_47961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13857__auto____0;
klipse_clj$lang$clojure$io$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__,filenames,map__47904,map__47904__$1,name,path))
})();
var state__13948__auto__ = (function (){var statearr_47970 = f__13947__auto__.call(null);
(statearr_47970[(6)] = c__13946__auto__);

return statearr_47970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__,filenames,map__47904,map__47904__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__47990,src_cb){
var map__47991 = p__47990;
var map__47991__$1 = ((((!((map__47991 == null)))?(((((map__47991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47991):map__47991);
var name = cljs.core.get.call(null,map__47991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__47991__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__47991,map__47991__$1,name,path){
return (function (p1__47989_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(closure_github_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47989_SHARP_),".js"].join('');
});})(closure_github_path,map__47991,map__47991__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
