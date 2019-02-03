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
return (function (_,p__26114,src_cb){
var map__26115 = p__26114;
var map__26115__$1 = (((((!((map__26115 == null))))?(((((map__26115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26115):map__26115);
var name = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__4730__auto___26231 = arguments.length;
var i__4731__auto___26232 = (0);
while(true){
if((i__4731__auto___26232 < len__4730__auto___26231)){
args__4736__auto__.push((arguments[i__4731__auto___26232]));

var G__26233 = (i__4731__auto___26232 + (1));
i__4731__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__26122){
var map__26123 = p__26122;
var map__26123__$1 = (((((!((map__26123 == null))))?(((((map__26123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26123):map__26123);
var transform = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__26123__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("try-to-load-ns ",filenames,lang,src_key);
} else {
}

var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_){
return (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (7))){
var inst_26137 = (state_26188[(7)]);
var inst_26137__$1 = (state_26188[(2)]);
var inst_26139 = (inst_26137__$1 == null);
var inst_26140 = cljs.core.not.call(null,inst_26139);
var state_26188__$1 = (function (){var statearr_26190 = state_26188;
(statearr_26190[(7)] = inst_26137__$1);

return statearr_26190;
})();
if(inst_26140){
var statearr_26191_26234 = state_26188__$1;
(statearr_26191_26234[(1)] = (8));

} else {
var statearr_26192_26235 = state_26188__$1;
(statearr_26192_26235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (20))){
var state_26188__$1 = state_26188;
var statearr_26193_26236 = state_26188__$1;
(statearr_26193_26236[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_26193_26236[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (1))){
var inst_26125 = filenames;
var state_26188__$1 = (function (){var statearr_26194 = state_26188;
(statearr_26194[(8)] = inst_26125);

return statearr_26194;
})();
var statearr_26195_26237 = state_26188__$1;
(statearr_26195_26237[(2)] = null);

(statearr_26195_26237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (24))){
var inst_26182 = src_cb.call(null,null);
var state_26188__$1 = state_26188;
var statearr_26196_26238 = state_26188__$1;
(statearr_26196_26238[(2)] = inst_26182);

(statearr_26196_26238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (4))){
var inst_26125 = (state_26188[(8)]);
var inst_26130 = (state_26188[(9)]);
var inst_26130__$1 = cljs.core.first.call(null,inst_26125);
var inst_26131 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26130__$1);
var inst_26132 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26133 = [false];
var inst_26134 = cljs.core.PersistentHashMap.fromArrays(inst_26132,inst_26133);
var inst_26135 = cljs_http.client.get.call(null,inst_26131,inst_26134);
var state_26188__$1 = (function (){var statearr_26197 = state_26188;
(statearr_26197[(9)] = inst_26130__$1);

return statearr_26197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26188__$1,(7),inst_26135);
} else {
if((state_val_26189 === (15))){
var inst_26137 = (state_26188[(7)]);
var state_26188__$1 = state_26188;
var statearr_26198_26239 = state_26188__$1;
(statearr_26198_26239[(2)] = inst_26137);

(statearr_26198_26239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (21))){
var state_26188__$1 = state_26188;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_26199_26240 = state_26188__$1;
(statearr_26199_26240[(1)] = (23));

} else {
var statearr_26200_26241 = state_26188__$1;
(statearr_26200_26241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (13))){
var inst_26150 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26201_26242 = state_26188__$1;
(statearr_26201_26242[(2)] = inst_26150);

(statearr_26201_26242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (22))){
var inst_26186 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26188__$1,inst_26186);
} else {
if((state_val_26189 === (6))){
var inst_26175 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26202_26243 = state_26188__$1;
(statearr_26202_26243[(2)] = inst_26175);

(statearr_26202_26243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (25))){
var inst_26184 = (state_26188[(2)]);
var state_26188__$1 = (function (){var statearr_26203 = state_26188;
(statearr_26203[(10)] = inst_26184);

return statearr_26203;
})();
var statearr_26204_26244 = state_26188__$1;
(statearr_26204_26244[(2)] = false);

(statearr_26204_26244[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (17))){
var inst_26160 = (state_26188[(11)]);
var inst_26130 = (state_26188[(9)]);
var inst_26163 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_26164 = transform.call(null,inst_26160);
var inst_26165 = [lang,inst_26164,inst_26130];
var inst_26166 = cljs.core.PersistentHashMap.fromArrays(inst_26163,inst_26165);
var inst_26167 = src_cb.call(null,inst_26166);
var state_26188__$1 = (function (){var statearr_26205 = state_26188;
(statearr_26205[(12)] = inst_26167);

return statearr_26205;
})();
var statearr_26206_26245 = state_26188__$1;
(statearr_26206_26245[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_26206_26245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (3))){
var inst_26177 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
if(cljs.core.truth_(inst_26177)){
var statearr_26207_26246 = state_26188__$1;
(statearr_26207_26246[(1)] = (20));

} else {
var statearr_26208_26247 = state_26188__$1;
(statearr_26208_26247[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (12))){
var state_26188__$1 = state_26188;
var statearr_26209_26248 = state_26188__$1;
(statearr_26209_26248[(2)] = false);

(statearr_26209_26248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (2))){
var inst_26125 = (state_26188[(8)]);
var inst_26127 = cljs.core.seq.call(null,inst_26125);
var state_26188__$1 = state_26188;
if(inst_26127){
var statearr_26210_26249 = state_26188__$1;
(statearr_26210_26249[(1)] = (4));

} else {
var statearr_26211_26250 = state_26188__$1;
(statearr_26211_26250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (23))){
var state_26188__$1 = state_26188;
var statearr_26212_26251 = state_26188__$1;
(statearr_26212_26251[(2)] = null);

(statearr_26212_26251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (19))){
var inst_26172 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26213_26252 = state_26188__$1;
(statearr_26213_26252[(2)] = inst_26172);

(statearr_26213_26252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (11))){
var state_26188__$1 = state_26188;
var statearr_26214_26253 = state_26188__$1;
(statearr_26214_26253[(2)] = true);

(statearr_26214_26253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (9))){
var state_26188__$1 = state_26188;
var statearr_26215_26254 = state_26188__$1;
(statearr_26215_26254[(2)] = false);

(statearr_26215_26254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (5))){
var state_26188__$1 = state_26188;
var statearr_26216_26255 = state_26188__$1;
(statearr_26216_26255[(2)] = null);

(statearr_26216_26255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (14))){
var inst_26137 = (state_26188[(7)]);
var inst_26155 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26137);
var state_26188__$1 = state_26188;
var statearr_26217_26256 = state_26188__$1;
(statearr_26217_26256[(2)] = inst_26155);

(statearr_26217_26256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (16))){
var inst_26158 = (state_26188[(2)]);
var inst_26159 = cljs.core.get.call(null,inst_26158,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26160 = cljs.core.get.call(null,inst_26158,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26161 = cljs.core._EQ_.call(null,(200),inst_26159);
var state_26188__$1 = (function (){var statearr_26218 = state_26188;
(statearr_26218[(11)] = inst_26160);

return statearr_26218;
})();
if(inst_26161){
var statearr_26219_26257 = state_26188__$1;
(statearr_26219_26257[(1)] = (17));

} else {
var statearr_26220_26258 = state_26188__$1;
(statearr_26220_26258[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (10))){
var inst_26153 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
if(cljs.core.truth_(inst_26153)){
var statearr_26221_26259 = state_26188__$1;
(statearr_26221_26259[(1)] = (14));

} else {
var statearr_26222_26260 = state_26188__$1;
(statearr_26222_26260[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (18))){
var inst_26125 = (state_26188[(8)]);
var inst_26169 = cljs.core.rest.call(null,inst_26125);
var inst_26125__$1 = inst_26169;
var state_26188__$1 = (function (){var statearr_26223 = state_26188;
(statearr_26223[(8)] = inst_26125__$1);

return statearr_26223;
})();
var statearr_26224_26261 = state_26188__$1;
(statearr_26224_26261[(2)] = null);

(statearr_26224_26261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (8))){
var inst_26137 = (state_26188[(7)]);
var inst_26142 = inst_26137.cljs$lang$protocol_mask$partition0$;
var inst_26143 = (inst_26142 & (64));
var inst_26144 = inst_26137.cljs$core$ISeq$;
var inst_26145 = (cljs.core.PROTOCOL_SENTINEL === inst_26144);
var inst_26146 = ((inst_26143) || (inst_26145));
var state_26188__$1 = state_26188;
if(cljs.core.truth_(inst_26146)){
var statearr_26225_26262 = state_26188__$1;
(statearr_26225_26262[(1)] = (11));

} else {
var statearr_26226_26263 = state_26188__$1;
(statearr_26226_26263[(1)] = (12));

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
});})(c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_))
;
return ((function (switch__20715__auto__,c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20716__auto____0 = (function (){
var statearr_26227 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26227[(0)] = klipse_clj$lang$clojure$io$state_machine__20716__auto__);

(statearr_26227[(1)] = (1));

return statearr_26227;
});
var klipse_clj$lang$clojure$io$state_machine__20716__auto____1 = (function (state_26188){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26228){if((e26228 instanceof Object)){
var ex__20719__auto__ = e26228;
var statearr_26229_26264 = state_26188;
(statearr_26229_26264[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26265 = state_26188;
state_26188 = G__26265;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20716__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_))
})();
var state__20884__auto__ = (function (){var statearr_26230 = f__20883__auto__.call(null);
(statearr_26230[(6)] = c__20882__auto__);

return statearr_26230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,map__26123,map__26123__$1,transform,can_recover_QMARK_))
);

return c__20882__auto__;
});

klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq26117){
var G__26118 = cljs.core.first.call(null,seq26117);
var seq26117__$1 = cljs.core.next.call(null,seq26117);
var G__26119 = cljs.core.first.call(null,seq26117__$1);
var seq26117__$2 = cljs.core.next.call(null,seq26117__$1);
var G__26120 = cljs.core.first.call(null,seq26117__$2);
var seq26117__$3 = cljs.core.next.call(null,seq26117__$2);
var G__26121 = cljs.core.first.call(null,seq26117__$3);
var seq26117__$4 = cljs.core.next.call(null,seq26117__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26118,G__26119,G__26120,G__26121,seq26117__$4);
});

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__4523__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__26266(s__26267){
return (new cljs.core.LazySeq(null,(function (){
var s__26267__$1 = s__26267;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26267__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var lib = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26267__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__26266_$_iter__26268(s__26269){
return (new cljs.core.LazySeq(null,((function (s__26267__$1,lib,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26269__$1 = s__26269;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26269__$1);
if(temp__5720__auto____$1){
var s__26269__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26269__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26269__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26271 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26270 = (0);
while(true){
if((i__26270 < size__4522__auto__)){
var suffix = cljs.core._nth.call(null,c__4521__auto__,i__26270);
cljs.core.chunk_append.call(null,b__26271,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__26272 = (i__26270 + (1));
i__26270 = G__26272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26271),klipse_clj$lang$clojure$io$external_libs_files_$_iter__26266_$_iter__26268.call(null,cljs.core.chunk_rest.call(null,s__26269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26271),null);
}
} else {
var suffix = cljs.core.first.call(null,s__26269__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__26266_$_iter__26268.call(null,cljs.core.rest.call(null,s__26269__$2)));
}
} else {
return null;
}
break;
}
});})(s__26267__$1,lib,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26267__$1,lib,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,suffixes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__26266.call(null,cljs.core.rest.call(null,s__26267__$1)));
} else {
var G__26273 = cljs.core.rest.call(null,s__26267__$1);
s__26267__$1 = G__26273;
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

var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_26318){
var state_val_26319 = (state_26318[(1)]);
if((state_val_26319 === (7))){
var inst_26290 = (state_26318[(7)]);
var inst_26297 = (state_26318[(8)]);
var inst_26306 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26307 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26297);
var inst_26308 = klipse_clj.lang.clojure.io.edn.call(null,inst_26307);
var inst_26309 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26290);
var inst_26310 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_26308,inst_26309];
var inst_26311 = cljs.core.PersistentHashMap.fromArrays(inst_26306,inst_26310);
var inst_26312 = src_cb.call(null,inst_26311);
var state_26318__$1 = state_26318;
var statearr_26320_26336 = state_26318__$1;
(statearr_26320_26336[(2)] = inst_26312);

(statearr_26320_26336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (1))){
var inst_26275 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_26318__$1 = (function (){var statearr_26321 = state_26318;
(statearr_26321[(9)] = inst_26275);

return statearr_26321;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_26322_26337 = state_26318__$1;
(statearr_26322_26337[(1)] = (2));

} else {
var statearr_26323_26338 = state_26318__$1;
(statearr_26323_26338[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (4))){
var inst_26282 = (state_26318[(10)]);
var inst_26275 = (state_26318[(9)]);
var inst_26279 = (state_26318[(11)]);
var inst_26281 = (state_26318[(12)]);
var inst_26279__$1 = (state_26318[(2)]);
var inst_26280 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_26281__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26280),"/"].join('');
var inst_26282__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26281__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26275),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26279__$1),".js"].join('');
var inst_26283 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26281__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26275),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26279__$1),".cache.json"].join('');
var inst_26284 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26282__$1);
var inst_26285 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26286 = [false];
var inst_26287 = cljs.core.PersistentHashMap.fromArrays(inst_26285,inst_26286);
var inst_26288 = cljs_http.client.get.call(null,inst_26284,inst_26287);
var state_26318__$1 = (function (){var statearr_26324 = state_26318;
(statearr_26324[(13)] = inst_26283);

(statearr_26324[(10)] = inst_26282__$1);

(statearr_26324[(11)] = inst_26279__$1);

(statearr_26324[(12)] = inst_26281__$1);

return statearr_26324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26318__$1,(5),inst_26288);
} else {
if((state_val_26319 === (6))){
var inst_26283 = (state_26318[(13)]);
var inst_26282 = (state_26318[(10)]);
var inst_26275 = (state_26318[(9)]);
var inst_26279 = (state_26318[(11)]);
var inst_26281 = (state_26318[(12)]);
var inst_26290 = (state_26318[(7)]);
var inst_26297 = (state_26318[(8)]);
var inst_26297__$1 = (state_26318[(2)]);
var inst_26298 = (function (){var nn = inst_26275;
var suffix = inst_26279;
var root = inst_26281;
var src_filename = inst_26282;
var cache_filename = inst_26283;
var src = inst_26290;
var cache = inst_26297__$1;
return ((function (nn,suffix,root,src_filename,cache_filename,src,cache,inst_26283,inst_26282,inst_26275,inst_26279,inst_26281,inst_26290,inst_26297,inst_26297__$1,state_val_26319,c__20882__auto__){
return (function (p1__26274_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__26274_SHARP_);
});
;})(nn,suffix,root,src_filename,cache_filename,src,cache,inst_26283,inst_26282,inst_26275,inst_26279,inst_26281,inst_26290,inst_26297,inst_26297__$1,state_val_26319,c__20882__auto__))
})();
var inst_26299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26300 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26297__$1);
var inst_26301 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26290);
var inst_26302 = [inst_26300,inst_26301];
var inst_26303 = (new cljs.core.PersistentVector(null,2,(5),inst_26299,inst_26302,null));
var inst_26304 = cljs.core.every_QMARK_.call(null,inst_26298,inst_26303);
var state_26318__$1 = (function (){var statearr_26325 = state_26318;
(statearr_26325[(8)] = inst_26297__$1);

return statearr_26325;
})();
if(inst_26304){
var statearr_26326_26339 = state_26318__$1;
(statearr_26326_26339[(1)] = (7));

} else {
var statearr_26327_26340 = state_26318__$1;
(statearr_26327_26340[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (3))){
var state_26318__$1 = state_26318;
var statearr_26328_26341 = state_26318__$1;
(statearr_26328_26341[(2)] = "");

(statearr_26328_26341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (2))){
var state_26318__$1 = state_26318;
var statearr_26329_26342 = state_26318__$1;
(statearr_26329_26342[(2)] = "$macros");

(statearr_26329_26342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (9))){
var inst_26316 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26318__$1,inst_26316);
} else {
if((state_val_26319 === (5))){
var inst_26283 = (state_26318[(13)]);
var inst_26290 = (state_26318[(2)]);
var inst_26291 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_26283);
var inst_26292 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26293 = [false];
var inst_26294 = cljs.core.PersistentHashMap.fromArrays(inst_26292,inst_26293);
var inst_26295 = cljs_http.client.get.call(null,inst_26291,inst_26294);
var state_26318__$1 = (function (){var statearr_26330 = state_26318;
(statearr_26330[(7)] = inst_26290);

return statearr_26330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26318__$1,(6),inst_26295);
} else {
if((state_val_26319 === (8))){
var inst_26314 = src_cb.call(null,null);
var state_26318__$1 = state_26318;
var statearr_26331_26343 = state_26318__$1;
(statearr_26331_26343[(2)] = inst_26314);

(statearr_26331_26343[(1)] = (9));


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
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____0 = (function (){
var statearr_26332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26332[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__);

(statearr_26332[(1)] = (1));

return statearr_26332;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____1 = (function (state_26318){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26333){if((e26333 instanceof Object)){
var ex__20719__auto__ = e26333;
var statearr_26334_26344 = state_26318;
(statearr_26334_26344[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26345 = state_26318;
state_26318 = G__26345;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__ = function(state_26318){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____1.call(this,state_26318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_26335 = f__20883__auto__.call(null);
(statearr_26335[(6)] = c__20882__auto__);

return statearr_26335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("load-ns-from-file",filename);
} else {
}

var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_26385){
var state_val_26386 = (state_26385[(1)]);
if((state_val_26386 === (7))){
var state_26385__$1 = state_26385;
var statearr_26387_26409 = state_26385__$1;
(statearr_26387_26409[(2)] = false);

(statearr_26387_26409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (1))){
var inst_26347 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26348 = [false];
var inst_26349 = cljs.core.PersistentHashMap.fromArrays(inst_26347,inst_26348);
var inst_26350 = cljs_http.client.get.call(null,filename,inst_26349);
var state_26385__$1 = state_26385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26385__$1,(2),inst_26350);
} else {
if((state_val_26386 === (4))){
var state_26385__$1 = state_26385;
var statearr_26388_26410 = state_26385__$1;
(statearr_26388_26410[(2)] = false);

(statearr_26388_26410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (13))){
var inst_26381 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_26385__$1 = state_26385;
var statearr_26389_26411 = state_26385__$1;
(statearr_26389_26411[(2)] = inst_26381);

(statearr_26389_26411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (6))){
var state_26385__$1 = state_26385;
var statearr_26390_26412 = state_26385__$1;
(statearr_26390_26412[(2)] = true);

(statearr_26390_26412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (3))){
var inst_26352 = (state_26385[(7)]);
var inst_26357 = inst_26352.cljs$lang$protocol_mask$partition0$;
var inst_26358 = (inst_26357 & (64));
var inst_26359 = inst_26352.cljs$core$ISeq$;
var inst_26360 = (cljs.core.PROTOCOL_SENTINEL === inst_26359);
var inst_26361 = ((inst_26358) || (inst_26360));
var state_26385__$1 = state_26385;
if(cljs.core.truth_(inst_26361)){
var statearr_26391_26413 = state_26385__$1;
(statearr_26391_26413[(1)] = (6));

} else {
var statearr_26392_26414 = state_26385__$1;
(statearr_26392_26414[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (12))){
var inst_26374 = (state_26385[(8)]);
var inst_26378 = klipse_clj.lang.clojure.io.edn.call(null,inst_26374);
var inst_26379 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_26378);
var state_26385__$1 = state_26385;
var statearr_26393_26415 = state_26385__$1;
(statearr_26393_26415[(2)] = inst_26379);

(statearr_26393_26415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (2))){
var inst_26352 = (state_26385[(7)]);
var inst_26352__$1 = (state_26385[(2)]);
var inst_26354 = (inst_26352__$1 == null);
var inst_26355 = cljs.core.not.call(null,inst_26354);
var state_26385__$1 = (function (){var statearr_26394 = state_26385;
(statearr_26394[(7)] = inst_26352__$1);

return statearr_26394;
})();
if(inst_26355){
var statearr_26395_26416 = state_26385__$1;
(statearr_26395_26416[(1)] = (3));

} else {
var statearr_26396_26417 = state_26385__$1;
(statearr_26396_26417[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (11))){
var inst_26373 = (state_26385[(2)]);
var inst_26374 = cljs.core.get.call(null,inst_26373,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_26375 = cljs.core.get.call(null,inst_26373,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_26376 = cljs.core._EQ_.call(null,(200),inst_26375);
var state_26385__$1 = (function (){var statearr_26397 = state_26385;
(statearr_26397[(8)] = inst_26374);

return statearr_26397;
})();
if(inst_26376){
var statearr_26398_26418 = state_26385__$1;
(statearr_26398_26418[(1)] = (12));

} else {
var statearr_26399_26419 = state_26385__$1;
(statearr_26399_26419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (9))){
var inst_26352 = (state_26385[(7)]);
var inst_26370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26352);
var state_26385__$1 = state_26385;
var statearr_26400_26420 = state_26385__$1;
(statearr_26400_26420[(2)] = inst_26370);

(statearr_26400_26420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (5))){
var inst_26368 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
if(cljs.core.truth_(inst_26368)){
var statearr_26401_26421 = state_26385__$1;
(statearr_26401_26421[(1)] = (9));

} else {
var statearr_26402_26422 = state_26385__$1;
(statearr_26402_26422[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (14))){
var inst_26383 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26385__$1,inst_26383);
} else {
if((state_val_26386 === (10))){
var inst_26352 = (state_26385[(7)]);
var state_26385__$1 = state_26385;
var statearr_26403_26423 = state_26385__$1;
(statearr_26403_26423[(2)] = inst_26352);

(statearr_26403_26423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26386 === (8))){
var inst_26365 = (state_26385[(2)]);
var state_26385__$1 = state_26385;
var statearr_26404_26424 = state_26385__$1;
(statearr_26404_26424[(2)] = inst_26365);

(statearr_26404_26424[(1)] = (5));


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
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____0 = (function (){
var statearr_26405 = [null,null,null,null,null,null,null,null,null];
(statearr_26405[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__);

(statearr_26405[(1)] = (1));

return statearr_26405;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____1 = (function (state_26385){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26406){if((e26406 instanceof Object)){
var ex__20719__auto__ = e26406;
var statearr_26407_26425 = state_26385;
(statearr_26407_26425[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26426 = state_26385;
state_26385 = G__26426;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__ = function(state_26385){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____1.call(this,state_26385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_26408 = f__20883__auto__.call(null);
(statearr_26408[(6)] = c__20882__auto__);

return statearr_26408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__26427,src_cb_original){
var map__26428 = p__26427;
var map__26428__$1 = (((((!((map__26428 == null))))?(((((map__26428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26428):map__26428);
var name = cljs.core.get.call(null,map__26428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26428__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:((function (map__26428,map__26428__$1,name,path){
return (function() { 
var G__26430__delegate = function (args){
if(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__26430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26431__i = 0, G__26431__a = new Array(arguments.length -  0);
while (G__26431__i < G__26431__a.length) {G__26431__a[G__26431__i] = arguments[G__26431__i + 0]; ++G__26431__i;}
  args = new cljs.core.IndexedSeq(G__26431__a,0,null);
} 
return G__26430__delegate.call(this,args);};
G__26430.cljs$lang$maxFixedArity = 0;
G__26430.cljs$lang$applyTo = (function (arglist__26432){
var args = cljs.core.seq(arglist__26432);
return G__26430__delegate(args);
});
G__26430.cljs$core$IFn$_invoke$arity$variadic = G__26430__delegate;
return G__26430;
})()
;})(map__26428,map__26428__$1,name,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (external_libs,p__26434,src_cb){
var map__26435 = p__26434;
var map__26435__$1 = (((((!((map__26435 == null))))?(((((map__26435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26435):map__26435);
var path = cljs.core.get.call(null,map__26435__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,((function (path__$1,map__26435,map__26435__$1,path){
return (function (p1__26433_SHARP_){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26433_SHARP_)].join('');
});})(path__$1,map__26435,map__26435__$1,path))
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__26438,src_cb){
var map__26439 = p__26438;
var map__26439__$1 = (((((!((map__26439 == null))))?(((((map__26439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26439):map__26439);
var name = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26439__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var filenames = cljs.core.map.call(null,((function (_,map__26439,map__26439__$1,name,path){
return (function (p1__26437_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26437_SHARP_),".cache.json"].join('');
});})(_,map__26439,map__26439__$1,name,path))
,klipse_clj.lang.clojure.io.cljs_suffixes);
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path){
return (function (state_26453){
var state_val_26454 = (state_26453[(1)]);
if((state_val_26454 === (1))){
var inst_26441 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26453__$1 = state_26453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26453__$1,(2),inst_26441);
} else {
if((state_val_26454 === (2))){
var inst_26443 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
if(cljs.core.truth_(inst_26443)){
var statearr_26455_26506 = state_26453__$1;
(statearr_26455_26506[(1)] = (3));

} else {
var statearr_26456_26507 = state_26453__$1;
(statearr_26456_26507[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (3))){
var state_26453__$1 = state_26453;
var statearr_26457_26508 = state_26453__$1;
(statearr_26457_26508[(2)] = null);

(statearr_26457_26508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (4))){
var inst_26446 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_26447 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_26448 = cljs.core.PersistentHashMap.fromArrays(inst_26446,inst_26447);
var inst_26449 = src_cb.call(null,inst_26448);
var state_26453__$1 = state_26453;
var statearr_26458_26509 = state_26453__$1;
(statearr_26458_26509[(2)] = inst_26449);

(statearr_26458_26509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26454 === (5))){
var inst_26451 = (state_26453[(2)]);
var state_26453__$1 = state_26453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26453__$1,inst_26451);
} else {
return null;
}
}
}
}
}
});})(c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path))
;
return ((function (switch__20715__auto__,c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20716__auto____0 = (function (){
var statearr_26459 = [null,null,null,null,null,null,null];
(statearr_26459[(0)] = klipse_clj$lang$clojure$io$state_machine__20716__auto__);

(statearr_26459[(1)] = (1));

return statearr_26459;
});
var klipse_clj$lang$clojure$io$state_machine__20716__auto____1 = (function (state_26453){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object)){
var ex__20719__auto__ = e26460;
var statearr_26461_26510 = state_26453;
(statearr_26461_26510[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26511 = state_26453;
state_26453 = G__26511;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20716__auto__ = function(state_26453){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____1.call(this,state_26453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path))
})();
var state__20884__auto__ = (function (){var statearr_26462 = f__20883__auto__.call(null);
(statearr_26462[(6)] = c__20882__auto__);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,_,filenames,map__26439,map__26439__$1,name,path))
);

return c__20882__auto__;
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

var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path){
return (function (state_26473){
var state_val_26474 = (state_26473[(1)]);
if((state_val_26474 === (1))){
var inst_26463 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(2),inst_26463);
} else {
if((state_val_26474 === (2))){
var inst_26465 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
if(cljs.core.truth_(inst_26465)){
var statearr_26475_26512 = state_26473__$1;
(statearr_26475_26512[(1)] = (3));

} else {
var statearr_26476_26513 = state_26473__$1;
(statearr_26476_26513[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (3))){
var state_26473__$1 = state_26473;
var statearr_26477_26514 = state_26473__$1;
(statearr_26477_26514[(2)] = null);

(statearr_26477_26514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (4))){
var inst_26468 = [prefix,".js"].join('');
var inst_26469 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26468,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26473__$1 = state_26473;
var statearr_26478_26515 = state_26473__$1;
(statearr_26478_26515[(2)] = inst_26469);

(statearr_26478_26515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (5))){
var inst_26471 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26473__$1,inst_26471);
} else {
return null;
}
}
}
}
}
});})(c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path))
;
return ((function (switch__20715__auto__,c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20716__auto____0 = (function (){
var statearr_26479 = [null,null,null,null,null,null,null];
(statearr_26479[(0)] = klipse_clj$lang$clojure$io$state_machine__20716__auto__);

(statearr_26479[(1)] = (1));

return statearr_26479;
});
var klipse_clj$lang$clojure$io$state_machine__20716__auto____1 = (function (state_26473){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26480){if((e26480 instanceof Object)){
var ex__20719__auto__ = e26480;
var statearr_26481_26516 = state_26473;
(statearr_26481_26516[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26517 = state_26473;
state_26473 = G__26517;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20716__auto__ = function(state_26473){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____1.call(this,state_26473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path))
})();
var state__20884__auto__ = (function (){var statearr_26482 = f__20883__auto__.call(null);
(statearr_26482[(6)] = c__20882__auto__);

return statearr_26482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,prefix,filenames,map__26439,map__26439__$1,name,path))
);

return c__20882__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__,filenames,map__26439,map__26439__$1,name,path){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__,filenames,map__26439,map__26439__$1,name,path){
return (function (state_26496){
var state_val_26497 = (state_26496[(1)]);
if((state_val_26497 === (1))){
var inst_26483 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26496__$1 = state_26496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26496__$1,(2),inst_26483);
} else {
if((state_val_26497 === (2))){
var inst_26485 = (state_26496[(2)]);
var state_26496__$1 = state_26496;
if(cljs.core.truth_(inst_26485)){
var statearr_26498_26518 = state_26496__$1;
(statearr_26498_26518[(1)] = (3));

} else {
var statearr_26499_26519 = state_26496__$1;
(statearr_26499_26519[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (3))){
var state_26496__$1 = state_26496;
var statearr_26500_26520 = state_26496__$1;
(statearr_26500_26520[(2)] = null);

(statearr_26500_26520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (4))){
var inst_26488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26489 = [".js"];
var inst_26490 = (new cljs.core.PersistentVector(null,1,(5),inst_26488,inst_26489,null));
var inst_26491 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_26490,path);
var inst_26492 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26491,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26496__$1 = state_26496;
var statearr_26501_26521 = state_26496__$1;
(statearr_26501_26521[(2)] = inst_26492);

(statearr_26501_26521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26497 === (5))){
var inst_26494 = (state_26496[(2)]);
var state_26496__$1 = state_26496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26496__$1,inst_26494);
} else {
return null;
}
}
}
}
}
});})(c__20882__auto__,filenames,map__26439,map__26439__$1,name,path))
;
return ((function (switch__20715__auto__,c__20882__auto__,filenames,map__26439,map__26439__$1,name,path){
return (function() {
var klipse_clj$lang$clojure$io$state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__20716__auto____0 = (function (){
var statearr_26502 = [null,null,null,null,null,null,null];
(statearr_26502[(0)] = klipse_clj$lang$clojure$io$state_machine__20716__auto__);

(statearr_26502[(1)] = (1));

return statearr_26502;
});
var klipse_clj$lang$clojure$io$state_machine__20716__auto____1 = (function (state_26496){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_26496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e26503){if((e26503 instanceof Object)){
var ex__20719__auto__ = e26503;
var statearr_26504_26522 = state_26496;
(statearr_26504_26522[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26523 = state_26496;
state_26496 = G__26523;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__20716__auto__ = function(state_26496){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__20716__auto____1.call(this,state_26496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__20716__auto____0;
klipse_clj$lang$clojure$io$state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__20716__auto____1;
return klipse_clj$lang$clojure$io$state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__,filenames,map__26439,map__26439__$1,name,path))
})();
var state__20884__auto__ = (function (){var statearr_26505 = f__20883__auto__.call(null);
(statearr_26505[(6)] = c__20882__auto__);

return statearr_26505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__,filenames,map__26439,map__26439__$1,name,path))
);

return c__20882__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__26525,src_cb){
var map__26526 = p__26525;
var map__26526__$1 = (((((!((map__26526 == null))))?(((((map__26526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26526):map__26526);
var name = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26526__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj_SHARP_ = goog;
var fn_SHARP_ = (obj_SHARP_["getObjectByName"]);
return fn_SHARP_.call(obj_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,((function (closure_github_path,map__26526,map__26526__$1,name,path){
return (function (p1__26524_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26524_SHARP_),".js"].join('');
});})(closure_github_path,map__26526,map__26526__$1,name,path))
,cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map
