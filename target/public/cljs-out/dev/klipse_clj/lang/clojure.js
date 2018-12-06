// Compiled by ClojureScript 1.10.238 {}
goog.provide('klipse_clj.lang.clojure');
goog.require('cljs.core');
goog.require('klipse_clj.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('cljs.tagged_literals');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('klipse_clj.lang.clojure.guard');
goog.require('klipse_clj.lang.clojure.io');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
klipse_clj.lang.clojure.load_core_macros_cache = (function klipse_clj$lang$clojure$load_core_macros_cache(){
return klipse_clj.lang.clojure.io.load_ns_from_file.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),"/cljs/core$macros.cljc.cache.json"].join(''));
});
klipse_clj.lang.clojure.init_custom_macros = (function klipse_clj$lang$clojure$init_custom_macros(){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63226){
var state_val_63227 = (state_63226[(1)]);
if((state_val_63227 === (7))){
var inst_63222 = (state_63226[(2)]);
var state_63226__$1 = state_63226;
var statearr_63228_63277 = state_63226__$1;
(statearr_63228_63277[(2)] = inst_63222);

(statearr_63228_63277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (1))){
var inst_63164 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_63226__$1 = state_63226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63226__$1,(2),inst_63164);
} else {
if((state_val_63227 === (4))){
var inst_63224 = (state_63226[(2)]);
var state_63226__$1 = state_63226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63226__$1,inst_63224);
} else {
if((state_val_63227 === (15))){
var inst_63195 = (state_63226[(7)]);
var inst_63213 = (state_63226[(2)]);
var inst_63214 = cljs.core.next.call(null,inst_63195);
var inst_63176 = inst_63214;
var inst_63177 = null;
var inst_63178 = (0);
var inst_63179 = (0);
var state_63226__$1 = (function (){var statearr_63230 = state_63226;
(statearr_63230[(8)] = inst_63213);

(statearr_63230[(9)] = inst_63177);

(statearr_63230[(10)] = inst_63178);

(statearr_63230[(11)] = inst_63176);

(statearr_63230[(12)] = inst_63179);

return statearr_63230;
})();
var statearr_63231_63285 = state_63226__$1;
(statearr_63231_63285[(2)] = null);

(statearr_63231_63285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (13))){
var inst_63195 = (state_63226[(7)]);
var inst_63206 = cljs.core.first.call(null,inst_63195);
var inst_63207 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_63208 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63209 = [inst_63208,klipse_clj.repl.current_ns_eval];
var inst_63210 = cljs.core.PersistentHashMap.fromArrays(inst_63207,inst_63209);
var inst_63211 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_63206,inst_63210);
var state_63226__$1 = state_63226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63226__$1,(15),inst_63211);
} else {
if((state_val_63227 === (6))){
var inst_63195 = (state_63226[(7)]);
var inst_63176 = (state_63226[(11)]);
var inst_63195__$1 = cljs.core.seq.call(null,inst_63176);
var state_63226__$1 = (function (){var statearr_63233 = state_63226;
(statearr_63233[(7)] = inst_63195__$1);

return statearr_63233;
})();
if(inst_63195__$1){
var statearr_63234_63289 = state_63226__$1;
(statearr_63234_63289[(1)] = (9));

} else {
var statearr_63235_63290 = state_63226__$1;
(statearr_63235_63290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (3))){
var inst_63178 = (state_63226[(10)]);
var inst_63179 = (state_63226[(12)]);
var inst_63181 = (inst_63179 < inst_63178);
var inst_63182 = inst_63181;
var state_63226__$1 = state_63226;
if(cljs.core.truth_(inst_63182)){
var statearr_63236_63291 = state_63226__$1;
(statearr_63236_63291[(1)] = (5));

} else {
var statearr_63237_63293 = state_63226__$1;
(statearr_63237_63293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (12))){
var inst_63195 = (state_63226[(7)]);
var inst_63200 = cljs.core.chunk_first.call(null,inst_63195);
var inst_63201 = cljs.core.chunk_rest.call(null,inst_63195);
var inst_63202 = cljs.core.count.call(null,inst_63200);
var inst_63176 = inst_63201;
var inst_63177 = inst_63200;
var inst_63178 = inst_63202;
var inst_63179 = (0);
var state_63226__$1 = (function (){var statearr_63238 = state_63226;
(statearr_63238[(9)] = inst_63177);

(statearr_63238[(10)] = inst_63178);

(statearr_63238[(11)] = inst_63176);

(statearr_63238[(12)] = inst_63179);

return statearr_63238;
})();
var statearr_63239_63295 = state_63226__$1;
(statearr_63239_63295[(2)] = null);

(statearr_63239_63295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (2))){
var inst_63166 = (state_63226[(2)]);
var inst_63172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63173 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_63174 = (new cljs.core.PersistentVector(null,2,(5),inst_63172,inst_63173,null));
var inst_63175 = cljs.core.seq.call(null,inst_63174);
var inst_63176 = inst_63175;
var inst_63177 = null;
var inst_63178 = (0);
var inst_63179 = (0);
var state_63226__$1 = (function (){var statearr_63241 = state_63226;
(statearr_63241[(13)] = inst_63166);

(statearr_63241[(9)] = inst_63177);

(statearr_63241[(10)] = inst_63178);

(statearr_63241[(11)] = inst_63176);

(statearr_63241[(12)] = inst_63179);

return statearr_63241;
})();
var statearr_63242_63297 = state_63226__$1;
(statearr_63242_63297[(2)] = null);

(statearr_63242_63297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (11))){
var inst_63220 = (state_63226[(2)]);
var state_63226__$1 = state_63226;
var statearr_63243_63302 = state_63226__$1;
(statearr_63243_63302[(2)] = inst_63220);

(statearr_63243_63302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (9))){
var inst_63195 = (state_63226[(7)]);
var inst_63198 = cljs.core.chunked_seq_QMARK_.call(null,inst_63195);
var state_63226__$1 = state_63226;
if(inst_63198){
var statearr_63244_63303 = state_63226__$1;
(statearr_63244_63303[(1)] = (12));

} else {
var statearr_63245_63304 = state_63226__$1;
(statearr_63245_63304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (5))){
var inst_63177 = (state_63226[(9)]);
var inst_63179 = (state_63226[(12)]);
var inst_63184 = cljs.core._nth.call(null,inst_63177,inst_63179);
var inst_63185 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_63186 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63187 = [inst_63186,klipse_clj.repl.current_ns_eval];
var inst_63188 = cljs.core.PersistentHashMap.fromArrays(inst_63185,inst_63187);
var inst_63189 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_63184,inst_63188);
var state_63226__$1 = state_63226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63226__$1,(8),inst_63189);
} else {
if((state_val_63227 === (14))){
var inst_63217 = (state_63226[(2)]);
var state_63226__$1 = state_63226;
var statearr_63249_63309 = state_63226__$1;
(statearr_63249_63309[(2)] = inst_63217);

(statearr_63249_63309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (10))){
var state_63226__$1 = state_63226;
var statearr_63251_63312 = state_63226__$1;
(statearr_63251_63312[(2)] = null);

(statearr_63251_63312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63227 === (8))){
var inst_63177 = (state_63226[(9)]);
var inst_63178 = (state_63226[(10)]);
var inst_63176 = (state_63226[(11)]);
var inst_63179 = (state_63226[(12)]);
var inst_63191 = (state_63226[(2)]);
var inst_63192 = (inst_63179 + (1));
var tmp63246 = inst_63177;
var tmp63247 = inst_63178;
var tmp63248 = inst_63176;
var inst_63176__$1 = tmp63248;
var inst_63177__$1 = tmp63246;
var inst_63178__$1 = tmp63247;
var inst_63179__$1 = inst_63192;
var state_63226__$1 = (function (){var statearr_63252 = state_63226;
(statearr_63252[(9)] = inst_63177__$1);

(statearr_63252[(10)] = inst_63178__$1);

(statearr_63252[(11)] = inst_63176__$1);

(statearr_63252[(14)] = inst_63191);

(statearr_63252[(12)] = inst_63179__$1);

return statearr_63252;
})();
var statearr_63254_63315 = state_63226__$1;
(statearr_63254_63315[(2)] = null);

(statearr_63254_63315[(1)] = (3));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0 = (function (){
var statearr_63255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63255[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__);

(statearr_63255[(1)] = (1));

return statearr_63255;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1 = (function (state_63226){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63256){if((e63256 instanceof Object)){
var ex__13860__auto__ = e63256;
var statearr_63257_63316 = state_63226;
(statearr_63257_63316[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63320 = state_63226;
state_63226 = G__63320;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__ = function(state_63226){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1.call(this,state_63226);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63266 = f__13947__auto__.call(null);
(statearr_63266[(6)] = c__13946__auto__);

return statearr_63266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63334){
var state_val_63335 = (state_63334[(1)]);
if((state_val_63335 === (1))){
var inst_63321 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63322 = (inst_63321 == null);
var state_63334__$1 = state_63334;
if(cljs.core.truth_(inst_63322)){
var statearr_63336_63349 = state_63334__$1;
(statearr_63336_63349[(1)] = (2));

} else {
var statearr_63337_63350 = state_63334__$1;
(statearr_63337_63350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63335 === (2))){
var inst_63324 = cljs.js.empty_state.call(null);
var inst_63325 = cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,inst_63324);
var inst_63326 = klipse_clj.lang.clojure.init_custom_macros.call(null);
var state_63334__$1 = (function (){var statearr_63338 = state_63334;
(statearr_63338[(7)] = inst_63325);

return statearr_63338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63334__$1,(5),inst_63326);
} else {
if((state_val_63335 === (3))){
var state_63334__$1 = state_63334;
var statearr_63339_63354 = state_63334__$1;
(statearr_63339_63354[(2)] = null);

(statearr_63339_63354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63335 === (4))){
var inst_63331 = (state_63334[(2)]);
var inst_63332 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_63334__$1 = (function (){var statearr_63340 = state_63334;
(statearr_63340[(8)] = inst_63331);

return statearr_63340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63334__$1,inst_63332);
} else {
if((state_val_63335 === (5))){
var inst_63328 = (state_63334[(2)]);
var state_63334__$1 = state_63334;
var statearr_63343_63355 = state_63334__$1;
(statearr_63343_63355[(2)] = inst_63328);

(statearr_63343_63355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0 = (function (){
var statearr_63345 = [null,null,null,null,null,null,null,null,null];
(statearr_63345[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__);

(statearr_63345[(1)] = (1));

return statearr_63345;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1 = (function (state_63334){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63346){if((e63346 instanceof Object)){
var ex__13860__auto__ = e63346;
var statearr_63347_63356 = state_63334;
(statearr_63347_63356[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63357 = state_63334;
state_63334 = G__63357;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__ = function(state_63334){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1.call(this,state_63334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63348 = f__13947__auto__.call(null);
(statearr_63348[(6)] = c__13946__auto__);

return statearr_63348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.current_alias_map = (function klipse_clj$lang$clojure$current_alias_map(ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__63361){
var vec__63362 = p__63361;
var k = cljs.core.nth.call(null,vec__63362,(0),null);
var v = cljs.core.nth.call(null,vec__63362,(1),null);
return cljs.core._EQ_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__63368){
var map__63369 = p__63368;
var map__63369__$1 = ((((!((map__63369 == null)))?(((((map__63369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63369):map__63369);
var print_length = cljs.core.get.call(null,map__63369__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__63369__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_63371 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_63372_63377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_63373_63378 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_63372_63377,_STAR_print_fn_STAR_63373_63378,sb__4430__auto__,_STAR_print_length_STAR_63371,map__63369,map__63369__$1,print_length,beautify_strings){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_63372_63377,_STAR_print_fn_STAR_63373_63378,sb__4430__auto__,_STAR_print_length_STAR_63371,map__63369,map__63369__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = typeof value === 'string';
if(and__3911__auto__){
return beautify_strings;
} else {
return and__3911__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_63373_63378;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_63372_63377;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_63371;
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__63380,verbose_QMARK_,current_ns){
var map__63382 = p__63380;
var map__63382__$1 = ((((!((map__63382 == null)))?(((((map__63382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63382):map__63382);
var ns = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(verbose_QMARK_)){
console.info("update-current-ns:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,current_ns,ns);
}
});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__63386,opts){
var map__63387 = p__63386;
var map__63387__$1 = ((((!((map__63387 == null)))?(((((map__63387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63387):map__63387);
var args = map__63387__$1;
var ns = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__63391){
var map__63392 = p__63391;
var map__63392__$1 = ((((!((map__63392 == null)))?(((((map__63392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63392):map__63392);
var form = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__63397){
var map__63398 = p__63397;
var map__63398__$1 = ((((!((map__63398 == null)))?(((((map__63398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63398):map__63398);
var foo = map__63398__$1;
var value = cljs.core.get.call(null,map__63398__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__63398__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__63401){
var map__63402 = p__63401;
var map__63402__$1 = ((((!((map__63402 == null)))?(((((map__63402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63402):map__63402);
var args = map__63402__$1;
var file = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__63402__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__63411){
var map__63412 = p__63411;
var map__63412__$1 = ((((!((map__63412 == null)))?(((((map__63412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63412):map__63412);
var source = cljs.core.get.call(null,map__63412__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__63416){
var map__63417 = p__63416;
var map__63417__$1 = ((((!((map__63417 == null)))?(((((map__63417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63417):map__63417);
var static_fns = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__63417__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits63419_63429 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits63419_63429,c,max_eval_duration__$1,the_emits,map__63417,map__63417__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits63419_63429,c,max_eval_duration__$1,the_emits,map__63417,map__63417__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits63419_63429;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__63439){
var map__63440 = p__63439;
var map__63440__$1 = ((((!((map__63440 == null)))?(((((map__63440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63440):map__63440);
var static_fns = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var emits63443_63498 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits63443_63498,c,max_eval_duration__$1,map__63440,map__63440__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits63443_63498,c,max_eval_duration__$1,map__63440,map__63440__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits63443_63498;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5455__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var ch = temp__5455__auto__;
var G__63513 = cljs.core.conj.call(null,res,ch);
res = G__63513;
continue;
} else {
return res;
}
break;
}
});
klipse_clj.lang.clojure.reader_content = (function klipse_clj$lang$clojure$reader_content(r){
return cljs.core.apply.call(null,cljs.core.str,klipse_clj.lang.clojure.read_chars.call(null,r));
});
klipse_clj.lang.clojure.data_readers = (function klipse_clj$lang$clojure$data_readers(){
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
});
klipse_clj.lang.clojure.first_exp_and_rest = (function klipse_clj$lang$clojure$first_exp_and_rest(s,st,ns){
var _STAR_alias_map_STAR_63520 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_63521 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_63522 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_63523 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol63524 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_63525 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.lang.clojure.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

try{var sentinel = {};
var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var res = cljs.tools.reader.read.call(null,reader,false,sentinel);
if(cljs.core._EQ_.call(null,sentinel,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var rest_s = klipse_clj.lang.clojure.reader_content.call(null,reader);
var first_exp = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,rest_s)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,first_exp,/^[\s\n]*/,""),rest_s], null);
}
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_63525;

cljs.tools.reader.resolve_symbol = resolve_symbol63524;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_63523;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_63522;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_63521;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_63520;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__63537 = arguments.length;
switch (G__63537) {
case 1:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.read_string.call(null,s,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
});

klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3 = (function (s,st,ns){
var _STAR_alias_map_STAR_63538 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_63539 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_63540 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_63541 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol63542 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_63543 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.lang.clojure.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_63543;

cljs.tools.reader.resolve_symbol = resolve_symbol63542;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_63541;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_63540;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_63539;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_63538;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__63550 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__63550,(0),null);
var rest_s = cljs.core.nth.call(null,vec__63550,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__63555 = rest_s;
var G__63556 = res;
s__$1 = G__63555;
res = G__63556;
continue;
} else {
var G__63558 = rest_s;
var G__63559 = cljs.core.conj.call(null,res,exp);
s__$1 = G__63558;
res = G__63559;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(res,p__63560){
var map__63561 = p__63560;
var map__63561__$1 = ((((!((map__63561 == null)))?(((((map__63561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63561):map__63561);
var result_element = cljs.core.get.call(null,map__63561__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__63561__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__3911__auto__ = container;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__3911__auto__;
}
})())){
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))].join(''));
} else {
}

return res;
});
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63623){
var state_val_63624 = (state_63623[(1)]);
if((state_val_63624 === (7))){
var inst_63619 = (state_63623[(2)]);
var state_63623__$1 = state_63623;
var statearr_63625_63717 = state_63623__$1;
(statearr_63625_63717[(2)] = inst_63619);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63623__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (1))){
var state_63623__$1 = state_63623;
var statearr_63626_63721 = state_63623__$1;
(statearr_63626_63721[(2)] = null);

(statearr_63626_63721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63623,(3),Object,null,(2));
var inst_63574 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_63623__$1 = state_63623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63623__$1,(5),inst_63574);
} else {
if((state_val_63624 === (13))){
var inst_63604 = (state_63623[(7)]);
var inst_63596 = (state_63623[(8)]);
var inst_63609 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63610 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_63611 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_63596,inst_63609,inst_63610);
var inst_63589 = inst_63611;
var inst_63590 = inst_63604;
var state_63623__$1 = (function (){var statearr_63628 = state_63623;
(statearr_63628[(9)] = inst_63589);

(statearr_63628[(10)] = inst_63590);

return statearr_63628;
})();
var statearr_63630_63730 = state_63623__$1;
(statearr_63630_63730[(2)] = null);

(statearr_63630_63730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (6))){
var inst_63589 = (state_63623[(9)]);
var inst_63595 = (state_63623[(11)]);
var inst_63595__$1 = cljs.core.nth.call(null,inst_63589,(0),null);
var inst_63596 = cljs.core.nth.call(null,inst_63589,(1),null);
var inst_63597 = cljs.core.empty_QMARK_.call(null,inst_63595__$1);
var inst_63598 = !(inst_63597);
var state_63623__$1 = (function (){var statearr_63631 = state_63623;
(statearr_63631[(11)] = inst_63595__$1);

(statearr_63631[(8)] = inst_63596);

return statearr_63631;
})();
if(inst_63598){
var statearr_63632_63731 = state_63623__$1;
(statearr_63632_63731[(1)] = (8));

} else {
var statearr_63633_63732 = state_63623__$1;
(statearr_63633_63732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (3))){
var inst_63566 = (state_63623[(2)]);
var inst_63567 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_63568 = [inst_63566];
var inst_63569 = cljs.core.PersistentHashMap.fromArrays(inst_63567,inst_63568);
var inst_63570 = klipse_clj.lang.clojure.populate_err.call(null,inst_63569,opts);
var state_63623__$1 = state_63623;
var statearr_63634_63734 = state_63623__$1;
(statearr_63634_63734[(2)] = inst_63570);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63623__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (12))){
var inst_63604 = (state_63623[(7)]);
var inst_63607 = klipse_clj.lang.clojure.populate_err.call(null,inst_63604,opts);
var state_63623__$1 = state_63623;
var statearr_63637_63735 = state_63623__$1;
(statearr_63637_63735[(2)] = inst_63607);

(statearr_63637_63735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (2))){
var inst_63621 = (state_63623[(2)]);
var state_63623__$1 = state_63623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63623__$1,inst_63621);
} else {
if((state_val_63624 === (11))){
var inst_63604 = (state_63623[(7)]);
var inst_63604__$1 = (state_63623[(2)]);
var inst_63605 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_63604__$1);
var state_63623__$1 = (function (){var statearr_63666 = state_63623;
(statearr_63666[(7)] = inst_63604__$1);

return statearr_63666;
})();
if(cljs.core.truth_(inst_63605)){
var statearr_63675_63739 = state_63623__$1;
(statearr_63675_63739[(1)] = (12));

} else {
var statearr_63681_63740 = state_63623__$1;
(statearr_63681_63740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (9))){
var inst_63590 = (state_63623[(10)]);
var state_63623__$1 = state_63623;
var statearr_63696_63741 = state_63623__$1;
(statearr_63696_63741[(2)] = inst_63590);

(statearr_63696_63741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (5))){
var inst_63576 = (state_63623[(2)]);
var inst_63584 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63585 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_63586 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_63584,inst_63585);
var inst_63587 = cljs.core.nth.call(null,inst_63586,(0),null);
var inst_63588 = cljs.core.nth.call(null,inst_63586,(1),null);
var inst_63589 = inst_63586;
var inst_63590 = null;
var state_63623__$1 = (function (){var statearr_63699 = state_63623;
(statearr_63699[(9)] = inst_63589);

(statearr_63699[(12)] = inst_63587);

(statearr_63699[(10)] = inst_63590);

(statearr_63699[(13)] = inst_63576);

(statearr_63699[(14)] = inst_63588);

return statearr_63699;
})();
var statearr_63700_63743 = state_63623__$1;
(statearr_63700_63743[(2)] = null);

(statearr_63700_63743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (14))){
var inst_63614 = (state_63623[(2)]);
var state_63623__$1 = state_63623;
var statearr_63701_63745 = state_63623__$1;
(statearr_63701_63745[(2)] = inst_63614);

(statearr_63701_63745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (10))){
var inst_63617 = (state_63623[(2)]);
var state_63623__$1 = state_63623;
var statearr_63703_63747 = state_63623__$1;
(statearr_63703_63747[(2)] = inst_63617);

(statearr_63703_63747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63624 === (8))){
var inst_63595 = (state_63623[(11)]);
var inst_63600 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_63601 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_63600,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_63602 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_63595,inst_63601);
var state_63623__$1 = state_63623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63623__$1,(11),inst_63602);
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
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0 = (function (){
var statearr_63706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63706[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__);

(statearr_63706[(1)] = (1));

return statearr_63706;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1 = (function (state_63623){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63708){if((e63708 instanceof Object)){
var ex__13860__auto__ = e63708;
var statearr_63709_63751 = state_63623;
(statearr_63709_63751[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63753 = state_63623;
state_63623 = G__63753;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__ = function(state_63623){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1.call(this,state_63623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63712 = f__13947__auto__.call(null);
(statearr_63712[(6)] = c__13946__auto__);

return statearr_63712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63814){
var state_val_63815 = (state_63814[(1)]);
if((state_val_63815 === (7))){
var inst_63781 = (state_63814[(7)]);
var inst_63786 = klipse_clj.repl.create_state_compile.call(null);
var inst_63787 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_63786,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_63788 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_63781,inst_63787);
var state_63814__$1 = state_63814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63814__$1,(10),inst_63788);
} else {
if((state_val_63815 === (1))){
var state_63814__$1 = state_63814;
var statearr_63817_63852 = state_63814__$1;
(statearr_63817_63852[(2)] = null);

(statearr_63817_63852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63814,(3),Object,null,(2));
var inst_63770 = klipse_clj.repl.create_state_compile.call(null);
var inst_63771 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_63772 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_63770,inst_63771);
var inst_63773 = cljs.core.nth.call(null,inst_63772,(0),null);
var inst_63774 = cljs.core.nth.call(null,inst_63772,(1),null);
var inst_63775 = inst_63772;
var inst_63776 = "";
var state_63814__$1 = (function (){var statearr_63818 = state_63814;
(statearr_63818[(8)] = inst_63773);

(statearr_63818[(9)] = inst_63774);

(statearr_63818[(10)] = inst_63775);

(statearr_63818[(11)] = inst_63776);

return statearr_63818;
})();
var statearr_63819_63862 = state_63814__$1;
(statearr_63819_63862[(2)] = null);

(statearr_63819_63862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (13))){
var inst_63801 = (state_63814[(2)]);
var state_63814__$1 = state_63814;
var statearr_63827_63865 = state_63814__$1;
(statearr_63827_63865[(2)] = inst_63801);

(statearr_63827_63865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (6))){
var inst_63809 = (state_63814[(2)]);
var state_63814__$1 = state_63814;
var statearr_63828_63867 = state_63814__$1;
(statearr_63828_63867[(2)] = inst_63809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63814__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (3))){
var inst_63756 = (state_63814[(2)]);
var inst_63757 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_63758 = [inst_63756];
var inst_63759 = cljs.core.PersistentHashMap.fromArrays(inst_63757,inst_63758);
var state_63814__$1 = state_63814;
var statearr_63829_63869 = state_63814__$1;
(statearr_63829_63869[(2)] = inst_63759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63814__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (12))){
var inst_63782 = (state_63814[(12)]);
var inst_63790 = (state_63814[(13)]);
var inst_63776 = (state_63814[(11)]);
var inst_63794 = klipse_clj.repl.create_state_compile.call(null);
var inst_63795 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_63796 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_63782,inst_63794,inst_63795);
var inst_63797 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_63790);
var inst_63798 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63776),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63797)].join('');
var inst_63775 = inst_63796;
var inst_63776__$1 = inst_63798;
var state_63814__$1 = (function (){var statearr_63832 = state_63814;
(statearr_63832[(10)] = inst_63775);

(statearr_63832[(11)] = inst_63776__$1);

return statearr_63832;
})();
var statearr_63834_63870 = state_63814__$1;
(statearr_63834_63870[(2)] = null);

(statearr_63834_63870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (2))){
var inst_63811 = (state_63814[(2)]);
var state_63814__$1 = state_63814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63814__$1,inst_63811);
} else {
if((state_val_63815 === (11))){
var inst_63790 = (state_63814[(13)]);
var state_63814__$1 = state_63814;
var statearr_63836_63871 = state_63814__$1;
(statearr_63836_63871[(2)] = inst_63790);

(statearr_63836_63871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (9))){
var inst_63807 = (state_63814[(2)]);
var state_63814__$1 = state_63814;
var statearr_63837_63874 = state_63814__$1;
(statearr_63837_63874[(2)] = inst_63807);

(statearr_63837_63874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (5))){
var inst_63781 = (state_63814[(7)]);
var inst_63775 = (state_63814[(10)]);
var inst_63781__$1 = cljs.core.nth.call(null,inst_63775,(0),null);
var inst_63782 = cljs.core.nth.call(null,inst_63775,(1),null);
var inst_63783 = cljs.core.empty_QMARK_.call(null,inst_63781__$1);
var inst_63784 = !(inst_63783);
var state_63814__$1 = (function (){var statearr_63838 = state_63814;
(statearr_63838[(12)] = inst_63782);

(statearr_63838[(7)] = inst_63781__$1);

return statearr_63838;
})();
if(inst_63784){
var statearr_63839_63883 = state_63814__$1;
(statearr_63839_63883[(1)] = (7));

} else {
var statearr_63840_63884 = state_63814__$1;
(statearr_63840_63884[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (10))){
var inst_63790 = (state_63814[(13)]);
var inst_63790__$1 = (state_63814[(2)]);
var inst_63791 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_63790__$1);
var state_63814__$1 = (function (){var statearr_63841 = state_63814;
(statearr_63841[(13)] = inst_63790__$1);

return statearr_63841;
})();
if(cljs.core.truth_(inst_63791)){
var statearr_63842_63888 = state_63814__$1;
(statearr_63842_63888[(1)] = (11));

} else {
var statearr_63843_63889 = state_63814__$1;
(statearr_63843_63889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63815 === (8))){
var inst_63776 = (state_63814[(11)]);
var inst_63803 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_63804 = [inst_63776];
var inst_63805 = cljs.core.PersistentHashMap.fromArrays(inst_63803,inst_63804);
var state_63814__$1 = state_63814;
var statearr_63844_63891 = state_63814__$1;
(statearr_63844_63891[(2)] = inst_63805);

(statearr_63844_63891[(1)] = (9));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0 = (function (){
var statearr_63845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63845[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__);

(statearr_63845[(1)] = (1));

return statearr_63845;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1 = (function (state_63814){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63846){if((e63846 instanceof Object)){
var ex__13860__auto__ = e63846;
var statearr_63847_63892 = state_63814;
(statearr_63847_63892[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63893 = state_63814;
state_63814 = G__63893;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__ = function(state_63814){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1.call(this,state_63814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63848 = f__13947__auto__.call(null);
(statearr_63848[(6)] = c__13946__auto__);

return statearr_63848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63901){
var state_val_63902 = (state_63901[(1)]);
if((state_val_63902 === (1))){
var inst_63896 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_63901__$1 = state_63901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63901__$1,(2),inst_63896);
} else {
if((state_val_63902 === (2))){
var inst_63898 = (state_63901[(2)]);
var inst_63899 = klipse_clj.lang.clojure.result_as_str.call(null,inst_63898,opts);
var state_63901__$1 = state_63901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63901__$1,inst_63899);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0 = (function (){
var statearr_63905 = [null,null,null,null,null,null,null];
(statearr_63905[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__);

(statearr_63905[(1)] = (1));

return statearr_63905;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1 = (function (state_63901){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63906){if((e63906 instanceof Object)){
var ex__13860__auto__ = e63906;
var statearr_63907_63921 = state_63901;
(statearr_63907_63921[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63922 = state_63901;
state_63901 = G__63922;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__ = function(state_63901){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1.call(this,state_63901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63913 = f__13947__auto__.call(null);
(statearr_63913[(6)] = c__13946__auto__);

return statearr_63913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__63924 = arguments.length;
switch (G__63924) {
case 1:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.the_eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63931){
var state_val_63932 = (state_63931[(1)]);
if((state_val_63932 === (1))){
var inst_63926 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_63931__$1 = state_63931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63931__$1,(2),inst_63926);
} else {
if((state_val_63932 === (2))){
var inst_63928 = (state_63931[(2)]);
var inst_63929 = klipse_clj.lang.clojure.read_result.call(null,inst_63928);
var state_63931__$1 = state_63931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63931__$1,inst_63929);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13857__auto____0 = (function (){
var statearr_63934 = [null,null,null,null,null,null,null];
(statearr_63934[(0)] = klipse_clj$lang$clojure$state_machine__13857__auto__);

(statearr_63934[(1)] = (1));

return statearr_63934;
});
var klipse_clj$lang$clojure$state_machine__13857__auto____1 = (function (state_63931){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63935){if((e63935 instanceof Object)){
var ex__13860__auto__ = e63935;
var statearr_63936_63950 = state_63931;
(statearr_63936_63950[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63951 = state_63931;
state_63931 = G__63951;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13857__auto__ = function(state_63931){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13857__auto____1.call(this,state_63931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13857__auto____0;
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63942 = f__13947__auto__.call(null);
(statearr_63942[(6)] = c__13946__auto__);

return statearr_63942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63960){
var state_val_63961 = (state_63960[(1)]);
if((state_val_63961 === (1))){
var inst_63954 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_63960__$1 = state_63960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63960__$1,(2),inst_63954);
} else {
if((state_val_63961 === (2))){
var inst_63956 = (state_63960[(2)]);
var inst_63957 = cljs.core.clj__GT_js.call(null,inst_63956);
var inst_63958 = cb.call(null,inst_63957);
var state_63960__$1 = state_63960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63960__$1,inst_63958);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0 = (function (){
var statearr_63970 = [null,null,null,null,null,null,null];
(statearr_63970[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__);

(statearr_63970[(1)] = (1));

return statearr_63970;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1 = (function (state_63960){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e63971){if((e63971 instanceof Object)){
var ex__13860__auto__ = e63971;
var statearr_63972_63978 = state_63960;
(statearr_63972_63978[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63980 = state_63960;
state_63960 = G__63980;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__ = function(state_63960){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1.call(this,state_63960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_63975 = f__13947__auto__.call(null);
(statearr_63975[(6)] = c__13946__auto__);

return statearr_63975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__63983 = arguments.length;
switch (G__63983) {
case 1:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse_clj.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_63993){
var state_val_63994 = (state_63993[(1)]);
if((state_val_63994 === (1))){
var inst_63988 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_63993__$1 = state_63993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63993__$1,(2),inst_63988);
} else {
if((state_val_63994 === (2))){
var inst_63990 = (state_63993[(2)]);
var inst_63991 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_63990);
var state_63993__$1 = state_63993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63993__$1,inst_63991);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13857__auto____0 = (function (){
var statearr_64004 = [null,null,null,null,null,null,null];
(statearr_64004[(0)] = klipse_clj$lang$clojure$state_machine__13857__auto__);

(statearr_64004[(1)] = (1));

return statearr_64004;
});
var klipse_clj$lang$clojure$state_machine__13857__auto____1 = (function (state_63993){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_63993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e64014){if((e64014 instanceof Object)){
var ex__13860__auto__ = e64014;
var statearr_64019_64047 = state_63993;
(statearr_64019_64047[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64049 = state_63993;
state_63993 = G__64049;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13857__auto__ = function(state_63993){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13857__auto____1.call(this,state_63993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13857__auto____0;
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_64030 = f__13947__auto__.call(null);
(statearr_64030[(6)] = c__13946__auto__);

return statearr_64030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_64055){
var state_val_64056 = (state_64055[(1)]);
if((state_val_64056 === (1))){
var inst_64050 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_64055__$1 = state_64055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64055__$1,(2),inst_64050);
} else {
if((state_val_64056 === (2))){
var inst_64052 = (state_64055[(2)]);
var inst_64053 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_64052);
var state_64055__$1 = state_64055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64055__$1,inst_64053);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0 = (function (){
var statearr_64058 = [null,null,null,null,null,null,null];
(statearr_64058[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__);

(statearr_64058[(1)] = (1));

return statearr_64058;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1 = (function (state_64055){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_64055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e64059){if((e64059 instanceof Object)){
var ex__13860__auto__ = e64059;
var statearr_64060_64065 = state_64055;
(statearr_64060_64065[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64068 = state_64055;
state_64055 = G__64068;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__ = function(state_64055){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1.call(this,state_64055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_64061 = f__13947__auto__.call(null);
(statearr_64061[(6)] = c__13946__auto__);

return statearr_64061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_64077){
var state_val_64078 = (state_64077[(1)]);
if((state_val_64078 === (1))){
var inst_64071 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_64077__$1 = state_64077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64077__$1,(2),inst_64071);
} else {
if((state_val_64078 === (2))){
var inst_64073 = (state_64077[(2)]);
var inst_64074 = cljs.core.second.call(null,inst_64073);
var inst_64075 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64074)].join('');
var state_64077__$1 = state_64077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64077__$1,inst_64075);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0 = (function (){
var statearr_64080 = [null,null,null,null,null,null,null];
(statearr_64080[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__);

(statearr_64080[(1)] = (1));

return statearr_64080;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1 = (function (state_64077){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_64077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e64081){if((e64081 instanceof Object)){
var ex__13860__auto__ = e64081;
var statearr_64082_64086 = state_64077;
(statearr_64082_64086[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64088 = state_64077;
state_64077 = G__64088;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__ = function(state_64077){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1.call(this,state_64077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_64083 = f__13947__auto__.call(null);
(statearr_64083[(6)] = c__13946__auto__);

return statearr_64083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__64091){
var map__64092 = p__64091;
var map__64092__$1 = ((((!((map__64092 == null)))?(((((map__64092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64092):map__64092);
var opts = map__64092__$1;
var container_id = cljs.core.get.call(null,map__64092__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__64092__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__64092__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13946__auto___64142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_64124){
var state_val_64125 = (state_64124[(1)]);
if((state_val_64125 === (7))){
var inst_64102 = (state_64124[(2)]);
var inst_64105 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_64106 = (function (){var _STAR_print_newline_STAR_64103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_64104 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_64103,_STAR_print_fn_STAR_64104,inst_64102,inst_64105,state_val_64125,c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__64090_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__64090_SHARP_);
});
;})(_STAR_print_newline_STAR_64103,_STAR_print_fn_STAR_64104,inst_64102,inst_64105,state_val_64125,c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_64107 = cljs.core._STAR_print_fn_STAR_ = inst_64106;
var state_64124__$1 = (function (){var statearr_64126 = state_64124;
(statearr_64126[(7)] = inst_64107);

(statearr_64126[(8)] = inst_64102);

(statearr_64126[(9)] = inst_64105);

return statearr_64126;
})();
var statearr_64127_64143 = state_64124__$1;
(statearr_64127_64143[(2)] = null);

(statearr_64127_64143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (1))){
var inst_64094 = clojure.string.blank_QMARK_.call(null,exp);
var state_64124__$1 = state_64124;
if(inst_64094){
var statearr_64128_64144 = state_64124__$1;
(statearr_64128_64144[(1)] = (2));

} else {
var statearr_64129_64145 = state_64124__$1;
(statearr_64129_64145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (4))){
var inst_64122 = (state_64124[(2)]);
var state_64124__$1 = state_64124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64124__$1,inst_64122);
} else {
if((state_val_64125 === (6))){
var state_64124__$1 = state_64124;
var statearr_64130_64146 = state_64124__$1;
(statearr_64130_64146[(2)] = null);

(statearr_64130_64146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (3))){
var state_64124__$1 = state_64124;
if(cljs.core.truth_(setup_container_fn)){
var statearr_64131_64147 = state_64124__$1;
(statearr_64131_64147[(1)] = (5));

} else {
var statearr_64132_64148 = state_64124__$1;
(statearr_64132_64148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (2))){
var inst_64096 = cljs.core.async.put_BANG_.call(null,c,"");
var state_64124__$1 = state_64124;
var statearr_64133_64149 = state_64124__$1;
(statearr_64133_64149[(2)] = inst_64096);

(statearr_64133_64149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (11))){
var inst_64116 = (state_64124[(2)]);
var inst_64117 = cljs.core.second.call(null,inst_64116);
var inst_64118 = cljs.core.async.put_BANG_.call(null,c,inst_64117);
var state_64124__$1 = state_64124;
var statearr_64134_64150 = state_64124__$1;
(statearr_64134_64150[(2)] = inst_64118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (9))){
var inst_64108 = (state_64124[(2)]);
var inst_64109 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_64110 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_64124__$1 = (function (){var statearr_64135 = state_64124;
(statearr_64135[(10)] = inst_64109);

(statearr_64135[(11)] = inst_64110);

(statearr_64135[(12)] = inst_64108);

return statearr_64135;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (5))){
var inst_64099 = setup_container_fn.call(null,container_id);
var state_64124__$1 = state_64124;
var statearr_64136_64151 = state_64124__$1;
(statearr_64136_64151[(2)] = inst_64099);

(statearr_64136_64151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64125 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_64124,null,null,(9),(8));
var inst_64114 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_64124__$1 = state_64124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64124__$1,(11),inst_64114);
} else {
if((state_val_64125 === (8))){
var inst_64120 = (state_64124[(2)]);
var state_64124__$1 = state_64124;
var statearr_64137_64152 = state_64124__$1;
(statearr_64137_64152[(2)] = inst_64120);

(statearr_64137_64152[(1)] = (4));


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
});})(c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__13856__auto__,c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0 = (function (){
var statearr_64138 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64138[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__);

(statearr_64138[(1)] = (1));

return statearr_64138;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1 = (function (state_64124){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_64124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e64139){if((e64139 instanceof Object)){
var ex__13860__auto__ = e64139;
var statearr_64140_64153 = state_64124;
(statearr_64140_64153[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64154 = state_64124;
state_64124 = G__64154;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__ = function(state_64124){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1.call(this,state_64124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__13948__auto__ = (function (){var statearr_64141 = f__13947__auto__.call(null);
(statearr_64141[(6)] = c__13946__auto___64142);

return statearr_64141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___64142,c,map__64092,map__64092__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
