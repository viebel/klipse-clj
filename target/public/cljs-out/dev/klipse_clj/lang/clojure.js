// Compiled by ClojureScript 1.10.492 {}
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
goog.require('klipse_clj.lang.cljs_repl');
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48493){
var state_val_48494 = (state_48493[(1)]);
if((state_val_48494 === (7))){
var inst_48489 = (state_48493[(2)]);
var state_48493__$1 = state_48493;
var statearr_48495_48521 = state_48493__$1;
(statearr_48495_48521[(2)] = inst_48489);

(statearr_48495_48521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (1))){
var inst_48434 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_48493__$1 = state_48493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48493__$1,(2),inst_48434);
} else {
if((state_val_48494 === (4))){
var inst_48491 = (state_48493[(2)]);
var state_48493__$1 = state_48493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48493__$1,inst_48491);
} else {
if((state_val_48494 === (15))){
var inst_48464 = (state_48493[(7)]);
var inst_48480 = (state_48493[(2)]);
var inst_48481 = cljs.core.next.call(null,inst_48464);
var inst_48445 = inst_48481;
var inst_48446 = null;
var inst_48447 = (0);
var inst_48448 = (0);
var state_48493__$1 = (function (){var statearr_48496 = state_48493;
(statearr_48496[(8)] = inst_48480);

(statearr_48496[(9)] = inst_48446);

(statearr_48496[(10)] = inst_48445);

(statearr_48496[(11)] = inst_48448);

(statearr_48496[(12)] = inst_48447);

return statearr_48496;
})();
var statearr_48497_48522 = state_48493__$1;
(statearr_48497_48522[(2)] = null);

(statearr_48497_48522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (13))){
var inst_48464 = (state_48493[(7)]);
var inst_48473 = cljs.core.first.call(null,inst_48464);
var inst_48474 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_48475 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48476 = [inst_48475,klipse_clj.repl.current_ns_eval];
var inst_48477 = cljs.core.PersistentHashMap.fromArrays(inst_48474,inst_48476);
var inst_48478 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48473,inst_48477);
var state_48493__$1 = state_48493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48493__$1,(15),inst_48478);
} else {
if((state_val_48494 === (6))){
var inst_48464 = (state_48493[(7)]);
var inst_48445 = (state_48493[(10)]);
var inst_48464__$1 = cljs.core.seq.call(null,inst_48445);
var state_48493__$1 = (function (){var statearr_48498 = state_48493;
(statearr_48498[(7)] = inst_48464__$1);

return statearr_48498;
})();
if(inst_48464__$1){
var statearr_48499_48523 = state_48493__$1;
(statearr_48499_48523[(1)] = (9));

} else {
var statearr_48500_48524 = state_48493__$1;
(statearr_48500_48524[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (3))){
var inst_48448 = (state_48493[(11)]);
var inst_48447 = (state_48493[(12)]);
var inst_48450 = (inst_48448 < inst_48447);
var inst_48451 = inst_48450;
var state_48493__$1 = state_48493;
if(cljs.core.truth_(inst_48451)){
var statearr_48501_48525 = state_48493__$1;
(statearr_48501_48525[(1)] = (5));

} else {
var statearr_48502_48526 = state_48493__$1;
(statearr_48502_48526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (12))){
var inst_48464 = (state_48493[(7)]);
var inst_48468 = cljs.core.chunk_first.call(null,inst_48464);
var inst_48469 = cljs.core.chunk_rest.call(null,inst_48464);
var inst_48470 = cljs.core.count.call(null,inst_48468);
var inst_48445 = inst_48469;
var inst_48446 = inst_48468;
var inst_48447 = inst_48470;
var inst_48448 = (0);
var state_48493__$1 = (function (){var statearr_48503 = state_48493;
(statearr_48503[(9)] = inst_48446);

(statearr_48503[(10)] = inst_48445);

(statearr_48503[(11)] = inst_48448);

(statearr_48503[(12)] = inst_48447);

return statearr_48503;
})();
var statearr_48504_48527 = state_48493__$1;
(statearr_48504_48527[(2)] = null);

(statearr_48504_48527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (2))){
var inst_48436 = (state_48493[(2)]);
var inst_48441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48442 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_48443 = (new cljs.core.PersistentVector(null,2,(5),inst_48441,inst_48442,null));
var inst_48444 = cljs.core.seq.call(null,inst_48443);
var inst_48445 = inst_48444;
var inst_48446 = null;
var inst_48447 = (0);
var inst_48448 = (0);
var state_48493__$1 = (function (){var statearr_48505 = state_48493;
(statearr_48505[(13)] = inst_48436);

(statearr_48505[(9)] = inst_48446);

(statearr_48505[(10)] = inst_48445);

(statearr_48505[(11)] = inst_48448);

(statearr_48505[(12)] = inst_48447);

return statearr_48505;
})();
var statearr_48506_48528 = state_48493__$1;
(statearr_48506_48528[(2)] = null);

(statearr_48506_48528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (11))){
var inst_48487 = (state_48493[(2)]);
var state_48493__$1 = state_48493;
var statearr_48507_48529 = state_48493__$1;
(statearr_48507_48529[(2)] = inst_48487);

(statearr_48507_48529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (9))){
var inst_48464 = (state_48493[(7)]);
var inst_48466 = cljs.core.chunked_seq_QMARK_.call(null,inst_48464);
var state_48493__$1 = state_48493;
if(inst_48466){
var statearr_48508_48530 = state_48493__$1;
(statearr_48508_48530[(1)] = (12));

} else {
var statearr_48509_48531 = state_48493__$1;
(statearr_48509_48531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (5))){
var inst_48446 = (state_48493[(9)]);
var inst_48448 = (state_48493[(11)]);
var inst_48453 = cljs.core._nth.call(null,inst_48446,inst_48448);
var inst_48454 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_48455 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48456 = [inst_48455,klipse_clj.repl.current_ns_eval];
var inst_48457 = cljs.core.PersistentHashMap.fromArrays(inst_48454,inst_48456);
var inst_48458 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48453,inst_48457);
var state_48493__$1 = state_48493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48493__$1,(8),inst_48458);
} else {
if((state_val_48494 === (14))){
var inst_48484 = (state_48493[(2)]);
var state_48493__$1 = state_48493;
var statearr_48513_48532 = state_48493__$1;
(statearr_48513_48532[(2)] = inst_48484);

(statearr_48513_48532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (10))){
var state_48493__$1 = state_48493;
var statearr_48514_48533 = state_48493__$1;
(statearr_48514_48533[(2)] = null);

(statearr_48514_48533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48494 === (8))){
var inst_48446 = (state_48493[(9)]);
var inst_48445 = (state_48493[(10)]);
var inst_48448 = (state_48493[(11)]);
var inst_48447 = (state_48493[(12)]);
var inst_48460 = (state_48493[(2)]);
var inst_48461 = (inst_48448 + (1));
var tmp48510 = inst_48446;
var tmp48511 = inst_48445;
var tmp48512 = inst_48447;
var inst_48445__$1 = tmp48511;
var inst_48446__$1 = tmp48510;
var inst_48447__$1 = tmp48512;
var inst_48448__$1 = inst_48461;
var state_48493__$1 = (function (){var statearr_48515 = state_48493;
(statearr_48515[(9)] = inst_48446__$1);

(statearr_48515[(14)] = inst_48460);

(statearr_48515[(10)] = inst_48445__$1);

(statearr_48515[(11)] = inst_48448__$1);

(statearr_48515[(12)] = inst_48447__$1);

return statearr_48515;
})();
var statearr_48516_48534 = state_48493__$1;
(statearr_48516_48534[(2)] = null);

(statearr_48516_48534[(1)] = (3));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____0 = (function (){
var statearr_48517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48517[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__);

(statearr_48517[(1)] = (1));

return statearr_48517;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____1 = (function (state_48493){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48518){if((e48518 instanceof Object)){
var ex__20457__auto__ = e48518;
var statearr_48519_48535 = state_48493;
(statearr_48519_48535[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48536 = state_48493;
state_48493 = G__48536;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__ = function(state_48493){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____1.call(this,state_48493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48520 = f__20621__auto__.call(null);
(statearr_48520[(6)] = c__20620__auto__);

return statearr_48520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48539){
var state_val_48540 = (state_48539[(1)]);
if((state_val_48540 === (1))){
var inst_48537 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_48539__$1 = state_48539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48539__$1,inst_48537);
} else {
return null;
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____0 = (function (){
var statearr_48541 = [null,null,null,null,null,null,null];
(statearr_48541[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__);

(statearr_48541[(1)] = (1));

return statearr_48541;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____1 = (function (state_48539){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48542){if((e48542 instanceof Object)){
var ex__20457__auto__ = e48542;
var statearr_48543_48545 = state_48539;
(statearr_48543_48545[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48546 = state_48539;
state_48539 = G__48546;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__ = function(state_48539){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____1.call(this,state_48539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48544 = f__20621__auto__.call(null);
(statearr_48544[(6)] = c__20620__auto__);

return statearr_48544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__48547){
var map__48548 = p__48547;
var map__48548__$1 = (((((!((map__48548 == null))))?(((((map__48548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48548):map__48548);
var print_length = cljs.core.get.call(null,map__48548__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__48548__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__48551 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__48552 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48552;

try{var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48553_48557 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48554_48558 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48555_48559 = true;
var _STAR_print_fn_STAR__temp_val__48556_48560 = ((function (_STAR_print_newline_STAR__orig_val__48553_48557,_STAR_print_fn_STAR__orig_val__48554_48558,_STAR_print_newline_STAR__temp_val__48555_48559,sb__4532__auto__,_STAR_print_length_STAR__orig_val__48551,_STAR_print_length_STAR__temp_val__48552,map__48548,map__48548__$1,print_length,beautify_strings){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__48553_48557,_STAR_print_fn_STAR__orig_val__48554_48558,_STAR_print_newline_STAR__temp_val__48555_48559,sb__4532__auto__,_STAR_print_length_STAR__orig_val__48551,_STAR_print_length_STAR__temp_val__48552,map__48548,map__48548__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48555_48559;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48556_48560;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3991__auto__ = typeof value === 'string';
if(and__3991__auto__){
return beautify_strings;
} else {
return and__3991__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48554_48558;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48553_48557;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48551;
}}catch (e48550){if((e48550 instanceof Object)){
var e = e48550;
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e48550;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__48561,verbose_QMARK_,current_ns){
var map__48562 = p__48561;
var map__48562__$1 = (((((!((map__48562 == null))))?(((((map__48562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48562):map__48562);
var ns = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(verbose_QMARK_)){
console.info("update-current-ns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
} else {
}

return cljs.core.reset_BANG_.call(null,current_ns,ns);
}
});
klipse_clj.lang.clojure.reader_error_QMARK_ = (function klipse_clj$lang$clojure$reader_error_QMARK_(e){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e)));
});
klipse_clj.lang.clojure.error_message = (function klipse_clj$lang$clojure$error_message(error){
if((error instanceof cljs.core.ExceptionInfo)){
return cljs.core.ex_message.call(null,error);
} else {
return error.message;
}
});
klipse_clj.lang.clojure.display_err = (function klipse_clj$lang$clojure$display_err(error){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return klipse_clj.lang.cljs_repl.error__GT_str.call(null,cljs.core.ex_cause.call(null,error));
} else {
if(klipse_clj.lang.clojure.reader_error_QMARK_.call(null,error)){
return ["Syntax error reading source.","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.error_message.call(null,error))].join('');
} else {
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');

}
}
}catch (e48564){if((e48564 instanceof Object)){
var e = e48564;

return e;
} else {
throw e48564;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__48565,opts){
var map__48566 = p__48565;
var map__48566__$1 = (((((!((map__48566 == null))))?(((((map__48566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48566):map__48566);
var args = map__48566__$1;
var ns = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48566__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__48568){
var map__48569 = p__48568;
var map__48569__$1 = (((((!((map__48569 == null))))?(((((map__48569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48569):map__48569);
var form = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48569__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__48571){
var map__48572 = p__48571;
var map__48572__$1 = (((((!((map__48572 == null))))?(((((map__48572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48572):map__48572);
var foo = map__48572__$1;
var value = cljs.core.get.call(null,map__48572__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__48572__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__48574){
var map__48575 = p__48574;
var map__48575__$1 = (((((!((map__48575 == null))))?(((((map__48575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48575):map__48575);
var args = map__48575__$1;
var file = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__48577){
var map__48578 = p__48577;
var map__48578__$1 = (((((!((map__48578 == null))))?(((((map__48578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48578):map__48578);
var source = cljs.core.get.call(null,map__48578__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__48580){
var map__48581 = p__48580;
var map__48581__$1 = (((((!((map__48581 == null))))?(((((map__48581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48581):map__48581);
var static_fns = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__48581,map__48581__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__48581,map__48581__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__48583){
var map__48584 = p__48583;
var map__48584__$1 = (((((!((map__48584 == null))))?(((((map__48584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48584):map__48584);
var static_fns = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__48584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,map__48584,map__48584__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,map__48584,map__48584__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__48586 = cljs.core.conj.call(null,res,ch);
res = G__48586;
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
var _STAR_alias_map_STAR__orig_val__48587 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__48588 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48589 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__48590 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__48591 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__48592 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__48593 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__48594 = ns;
var _STAR_cljs_ns_STAR__temp_val__48595 = ns;
var _STAR_compiler_STAR__temp_val__48596 = st;
var resolve_symbol_temp_val__48597 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__48598 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48593;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48594;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48595;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48596;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48597;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48598;

try{var sentinel = ({});
var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var res = cljs.tools.reader.read.call(null,reader,false,sentinel);
if(cljs.core._EQ_.call(null,sentinel,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var rest_s = klipse_clj.lang.clojure.reader_content.call(null,reader);
var first_exp = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,rest_s)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,first_exp,/^[\s\n]*/,""),rest_s], null);
}
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48592;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48591;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48590;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48589;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48588;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48587;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__48602 = arguments.length;
switch (G__48602) {
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
var _STAR_alias_map_STAR__orig_val__48603 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__48604 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__48605 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__48606 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__48607 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__48608 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__48609 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__48610 = ns;
var _STAR_cljs_ns_STAR__temp_val__48611 = ns;
var _STAR_compiler_STAR__temp_val__48612 = st;
var resolve_symbol_temp_val__48613 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__48614 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__48609;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__48610;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__48611;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__48612;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__48613;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__48614;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__48608;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__48607;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__48606;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__48605;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__48604;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__48603;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__48619 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__48619,(0),null);
var rest_s = cljs.core.nth.call(null,vec__48619,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__48622 = rest_s;
var G__48623 = res;
s__$1 = G__48622;
res = G__48623;
continue;
} else {
var G__48624 = rest_s;
var G__48625 = cljs.core.conj.call(null,res,exp);
s__$1 = G__48624;
res = G__48625;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__48626){
var map__48627 = p__48626;
var map__48627__$1 = (((((!((map__48627 == null))))?(((((map__48627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48627):map__48627);
var result_element = cljs.core.get.call(null,map__48627__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__48627__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__3991__auto__ = container;
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__3991__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48686){
var state_val_48687 = (state_48686[(1)]);
if((state_val_48687 === (7))){
var inst_48682 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48688_48709 = state_48686__$1;
(statearr_48688_48709[(2)] = inst_48682);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (1))){
var state_48686__$1 = state_48686;
var statearr_48689_48710 = state_48686__$1;
(statearr_48689_48710[(2)] = null);

(statearr_48689_48710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48686,(3),Object,null,(2));
var inst_48637 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48686__$1,(5),inst_48637);
} else {
if((state_val_48687 === (13))){
var inst_48659 = (state_48686[(7)]);
var inst_48667 = (state_48686[(8)]);
var inst_48672 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48673 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_48674 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_48659,inst_48672,inst_48673);
var inst_48652 = inst_48674;
var inst_48653 = inst_48667;
var state_48686__$1 = (function (){var statearr_48690 = state_48686;
(statearr_48690[(9)] = inst_48652);

(statearr_48690[(10)] = inst_48653);

return statearr_48690;
})();
var statearr_48691_48711 = state_48686__$1;
(statearr_48691_48711[(2)] = null);

(statearr_48691_48711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (6))){
var inst_48652 = (state_48686[(9)]);
var inst_48658 = (state_48686[(11)]);
var inst_48658__$1 = cljs.core.nth.call(null,inst_48652,(0),null);
var inst_48659 = cljs.core.nth.call(null,inst_48652,(1),null);
var inst_48660 = cljs.core.empty_QMARK_.call(null,inst_48658__$1);
var inst_48661 = (!(inst_48660));
var state_48686__$1 = (function (){var statearr_48692 = state_48686;
(statearr_48692[(7)] = inst_48659);

(statearr_48692[(11)] = inst_48658__$1);

return statearr_48692;
})();
if(inst_48661){
var statearr_48693_48712 = state_48686__$1;
(statearr_48693_48712[(1)] = (8));

} else {
var statearr_48694_48713 = state_48686__$1;
(statearr_48694_48713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (3))){
var inst_48629 = (state_48686[(2)]);
var inst_48630 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_48631 = [inst_48629];
var inst_48632 = cljs.core.PersistentHashMap.fromArrays(inst_48630,inst_48631);
var inst_48633 = klipse_clj.lang.clojure.populate_err.call(null,inst_48632,opts);
var state_48686__$1 = state_48686;
var statearr_48695_48714 = state_48686__$1;
(statearr_48695_48714[(2)] = inst_48633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (12))){
var inst_48667 = (state_48686[(8)]);
var inst_48670 = klipse_clj.lang.clojure.populate_err.call(null,inst_48667,opts);
var state_48686__$1 = state_48686;
var statearr_48696_48715 = state_48686__$1;
(statearr_48696_48715[(2)] = inst_48670);

(statearr_48696_48715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (2))){
var inst_48684 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48686__$1,inst_48684);
} else {
if((state_val_48687 === (11))){
var inst_48667 = (state_48686[(8)]);
var inst_48667__$1 = (state_48686[(2)]);
var inst_48668 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48667__$1);
var state_48686__$1 = (function (){var statearr_48697 = state_48686;
(statearr_48697[(8)] = inst_48667__$1);

return statearr_48697;
})();
if(cljs.core.truth_(inst_48668)){
var statearr_48698_48716 = state_48686__$1;
(statearr_48698_48716[(1)] = (12));

} else {
var statearr_48699_48717 = state_48686__$1;
(statearr_48699_48717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (9))){
var inst_48653 = (state_48686[(10)]);
var state_48686__$1 = state_48686;
var statearr_48700_48718 = state_48686__$1;
(statearr_48700_48718[(2)] = inst_48653);

(statearr_48700_48718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (5))){
var inst_48639 = (state_48686[(2)]);
var inst_48647 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48648 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_48649 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_48647,inst_48648);
var inst_48650 = cljs.core.nth.call(null,inst_48649,(0),null);
var inst_48651 = cljs.core.nth.call(null,inst_48649,(1),null);
var inst_48652 = inst_48649;
var inst_48653 = null;
var state_48686__$1 = (function (){var statearr_48701 = state_48686;
(statearr_48701[(12)] = inst_48650);

(statearr_48701[(9)] = inst_48652);

(statearr_48701[(10)] = inst_48653);

(statearr_48701[(13)] = inst_48651);

(statearr_48701[(14)] = inst_48639);

return statearr_48701;
})();
var statearr_48702_48719 = state_48686__$1;
(statearr_48702_48719[(2)] = null);

(statearr_48702_48719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (14))){
var inst_48677 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48703_48720 = state_48686__$1;
(statearr_48703_48720[(2)] = inst_48677);

(statearr_48703_48720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (10))){
var inst_48680 = (state_48686[(2)]);
var state_48686__$1 = state_48686;
var statearr_48704_48721 = state_48686__$1;
(statearr_48704_48721[(2)] = inst_48680);

(statearr_48704_48721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48687 === (8))){
var inst_48658 = (state_48686[(11)]);
var inst_48663 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48664 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_48663,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_48665 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48658,inst_48664);
var state_48686__$1 = state_48686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48686__$1,(11),inst_48665);
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
var klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____0 = (function (){
var statearr_48705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48705[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__);

(statearr_48705[(1)] = (1));

return statearr_48705;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____1 = (function (state_48686){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48706){if((e48706 instanceof Object)){
var ex__20457__auto__ = e48706;
var statearr_48707_48722 = state_48686;
(statearr_48707_48722[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48723 = state_48686;
state_48686 = G__48723;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__ = function(state_48686){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____1.call(this,state_48686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48708 = f__20621__auto__.call(null);
(statearr_48708[(6)] = c__20620__auto__);

return statearr_48708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48781){
var state_val_48782 = (state_48781[(1)]);
if((state_val_48782 === (7))){
var inst_48749 = (state_48781[(7)]);
var inst_48754 = klipse_clj.repl.create_state_compile.call(null);
var inst_48755 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_48754,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_48756 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_48749,inst_48755);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(10),inst_48756);
} else {
if((state_val_48782 === (1))){
var state_48781__$1 = state_48781;
var statearr_48783_48804 = state_48781__$1;
(statearr_48783_48804[(2)] = null);

(statearr_48783_48804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48781,(3),Object,null,(2));
var inst_48738 = klipse_clj.repl.create_state_compile.call(null);
var inst_48739 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_48740 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_48738,inst_48739);
var inst_48741 = cljs.core.nth.call(null,inst_48740,(0),null);
var inst_48742 = cljs.core.nth.call(null,inst_48740,(1),null);
var inst_48743 = inst_48740;
var inst_48744 = "";
var state_48781__$1 = (function (){var statearr_48784 = state_48781;
(statearr_48784[(8)] = inst_48743);

(statearr_48784[(9)] = inst_48741);

(statearr_48784[(10)] = inst_48742);

(statearr_48784[(11)] = inst_48744);

return statearr_48784;
})();
var statearr_48785_48805 = state_48781__$1;
(statearr_48785_48805[(2)] = null);

(statearr_48785_48805[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (13))){
var inst_48769 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48786_48806 = state_48781__$1;
(statearr_48786_48806[(2)] = inst_48769);

(statearr_48786_48806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (6))){
var inst_48777 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48787_48807 = state_48781__$1;
(statearr_48787_48807[(2)] = inst_48777);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (3))){
var inst_48724 = (state_48781[(2)]);
var inst_48725 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_48726 = [inst_48724];
var inst_48727 = cljs.core.PersistentHashMap.fromArrays(inst_48725,inst_48726);
var state_48781__$1 = state_48781;
var statearr_48788_48808 = state_48781__$1;
(statearr_48788_48808[(2)] = inst_48727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (12))){
var inst_48758 = (state_48781[(12)]);
var inst_48744 = (state_48781[(11)]);
var inst_48750 = (state_48781[(13)]);
var inst_48762 = klipse_clj.repl.create_state_compile.call(null);
var inst_48763 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_48764 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_48750,inst_48762,inst_48763);
var inst_48765 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_48758);
var inst_48766 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48744),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48765)].join('');
var inst_48743 = inst_48764;
var inst_48744__$1 = inst_48766;
var state_48781__$1 = (function (){var statearr_48789 = state_48781;
(statearr_48789[(8)] = inst_48743);

(statearr_48789[(11)] = inst_48744__$1);

return statearr_48789;
})();
var statearr_48790_48809 = state_48781__$1;
(statearr_48790_48809[(2)] = null);

(statearr_48790_48809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (2))){
var inst_48779 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48781__$1,inst_48779);
} else {
if((state_val_48782 === (11))){
var inst_48758 = (state_48781[(12)]);
var state_48781__$1 = state_48781;
var statearr_48791_48810 = state_48781__$1;
(statearr_48791_48810[(2)] = inst_48758);

(statearr_48791_48810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (9))){
var inst_48775 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48792_48811 = state_48781__$1;
(statearr_48792_48811[(2)] = inst_48775);

(statearr_48792_48811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (5))){
var inst_48743 = (state_48781[(8)]);
var inst_48749 = (state_48781[(7)]);
var inst_48749__$1 = cljs.core.nth.call(null,inst_48743,(0),null);
var inst_48750 = cljs.core.nth.call(null,inst_48743,(1),null);
var inst_48751 = cljs.core.empty_QMARK_.call(null,inst_48749__$1);
var inst_48752 = (!(inst_48751));
var state_48781__$1 = (function (){var statearr_48793 = state_48781;
(statearr_48793[(13)] = inst_48750);

(statearr_48793[(7)] = inst_48749__$1);

return statearr_48793;
})();
if(inst_48752){
var statearr_48794_48812 = state_48781__$1;
(statearr_48794_48812[(1)] = (7));

} else {
var statearr_48795_48813 = state_48781__$1;
(statearr_48795_48813[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (10))){
var inst_48758 = (state_48781[(12)]);
var inst_48758__$1 = (state_48781[(2)]);
var inst_48759 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48758__$1);
var state_48781__$1 = (function (){var statearr_48796 = state_48781;
(statearr_48796[(12)] = inst_48758__$1);

return statearr_48796;
})();
if(cljs.core.truth_(inst_48759)){
var statearr_48797_48814 = state_48781__$1;
(statearr_48797_48814[(1)] = (11));

} else {
var statearr_48798_48815 = state_48781__$1;
(statearr_48798_48815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (8))){
var inst_48744 = (state_48781[(11)]);
var inst_48771 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_48772 = [inst_48744];
var inst_48773 = cljs.core.PersistentHashMap.fromArrays(inst_48771,inst_48772);
var state_48781__$1 = state_48781;
var statearr_48799_48816 = state_48781__$1;
(statearr_48799_48816[(2)] = inst_48773);

(statearr_48799_48816[(1)] = (9));


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
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____0 = (function (){
var statearr_48800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48800[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__);

(statearr_48800[(1)] = (1));

return statearr_48800;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____1 = (function (state_48781){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48801){if((e48801 instanceof Object)){
var ex__20457__auto__ = e48801;
var statearr_48802_48817 = state_48781;
(statearr_48802_48817[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48818 = state_48781;
state_48781 = G__48818;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__ = function(state_48781){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____1.call(this,state_48781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48803 = f__20621__auto__.call(null);
(statearr_48803[(6)] = c__20620__auto__);

return statearr_48803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48824){
var state_val_48825 = (state_48824[(1)]);
if((state_val_48825 === (1))){
var inst_48819 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_48824__$1 = state_48824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48824__$1,(2),inst_48819);
} else {
if((state_val_48825 === (2))){
var inst_48821 = (state_48824[(2)]);
var inst_48822 = klipse_clj.lang.clojure.result_as_str.call(null,inst_48821,opts);
var state_48824__$1 = state_48824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48824__$1,inst_48822);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____0 = (function (){
var statearr_48826 = [null,null,null,null,null,null,null];
(statearr_48826[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__);

(statearr_48826[(1)] = (1));

return statearr_48826;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____1 = (function (state_48824){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48827){if((e48827 instanceof Object)){
var ex__20457__auto__ = e48827;
var statearr_48828_48830 = state_48824;
(statearr_48828_48830[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48831 = state_48824;
state_48824 = G__48831;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__ = function(state_48824){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____1.call(this,state_48824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48829 = f__20621__auto__.call(null);
(statearr_48829[(6)] = c__20620__auto__);

return statearr_48829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__48833 = arguments.length;
switch (G__48833) {
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48839){
var state_val_48840 = (state_48839[(1)]);
if((state_val_48840 === (1))){
var inst_48834 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_48839__$1 = state_48839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48839__$1,(2),inst_48834);
} else {
if((state_val_48840 === (2))){
var inst_48836 = (state_48839[(2)]);
var inst_48837 = klipse_clj.lang.clojure.read_result.call(null,inst_48836);
var state_48839__$1 = state_48839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48839__$1,inst_48837);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$state_machine__20454__auto____0 = (function (){
var statearr_48841 = [null,null,null,null,null,null,null];
(statearr_48841[(0)] = klipse_clj$lang$clojure$state_machine__20454__auto__);

(statearr_48841[(1)] = (1));

return statearr_48841;
});
var klipse_clj$lang$clojure$state_machine__20454__auto____1 = (function (state_48839){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48842){if((e48842 instanceof Object)){
var ex__20457__auto__ = e48842;
var statearr_48843_48846 = state_48839;
(statearr_48843_48846[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48847 = state_48839;
state_48839 = G__48847;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__20454__auto__ = function(state_48839){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__20454__auto____1.call(this,state_48839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__20454__auto____0;
klipse_clj$lang$clojure$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48844 = f__20621__auto__.call(null);
(statearr_48844[(6)] = c__20620__auto__);

return statearr_48844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48854){
var state_val_48855 = (state_48854[(1)]);
if((state_val_48855 === (1))){
var inst_48848 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_48854__$1 = state_48854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48854__$1,(2),inst_48848);
} else {
if((state_val_48855 === (2))){
var inst_48850 = (state_48854[(2)]);
var inst_48851 = cljs.core.clj__GT_js.call(null,inst_48850);
var inst_48852 = cb.call(null,inst_48851);
var state_48854__$1 = state_48854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48854__$1,inst_48852);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____0 = (function (){
var statearr_48856 = [null,null,null,null,null,null,null];
(statearr_48856[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__);

(statearr_48856[(1)] = (1));

return statearr_48856;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____1 = (function (state_48854){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48857){if((e48857 instanceof Object)){
var ex__20457__auto__ = e48857;
var statearr_48858_48860 = state_48854;
(statearr_48858_48860[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48861 = state_48854;
state_48854 = G__48861;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__ = function(state_48854){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____1.call(this,state_48854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48859 = f__20621__auto__.call(null);
(statearr_48859[(6)] = c__20620__auto__);

return statearr_48859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__48863 = arguments.length;
switch (G__48863) {
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
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48869){
var state_val_48870 = (state_48869[(1)]);
if((state_val_48870 === (1))){
var inst_48864 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_48869__$1 = state_48869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48869__$1,(2),inst_48864);
} else {
if((state_val_48870 === (2))){
var inst_48866 = (state_48869[(2)]);
var inst_48867 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_48866);
var state_48869__$1 = state_48869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48869__$1,inst_48867);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$state_machine__20454__auto____0 = (function (){
var statearr_48871 = [null,null,null,null,null,null,null];
(statearr_48871[(0)] = klipse_clj$lang$clojure$state_machine__20454__auto__);

(statearr_48871[(1)] = (1));

return statearr_48871;
});
var klipse_clj$lang$clojure$state_machine__20454__auto____1 = (function (state_48869){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48872){if((e48872 instanceof Object)){
var ex__20457__auto__ = e48872;
var statearr_48873_48876 = state_48869;
(statearr_48873_48876[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48877 = state_48869;
state_48869 = G__48877;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__20454__auto__ = function(state_48869){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__20454__auto____1.call(this,state_48869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__20454__auto____0;
klipse_clj$lang$clojure$state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__20454__auto____1;
return klipse_clj$lang$clojure$state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48874 = f__20621__auto__.call(null);
(statearr_48874[(6)] = c__20620__auto__);

return statearr_48874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48883){
var state_val_48884 = (state_48883[(1)]);
if((state_val_48884 === (1))){
var inst_48878 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_48883__$1 = state_48883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48883__$1,(2),inst_48878);
} else {
if((state_val_48884 === (2))){
var inst_48880 = (state_48883[(2)]);
var inst_48881 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_48880);
var state_48883__$1 = state_48883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48883__$1,inst_48881);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____0 = (function (){
var statearr_48885 = [null,null,null,null,null,null,null];
(statearr_48885[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__);

(statearr_48885[(1)] = (1));

return statearr_48885;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____1 = (function (state_48883){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48886){if((e48886 instanceof Object)){
var ex__20457__auto__ = e48886;
var statearr_48887_48889 = state_48883;
(statearr_48887_48889[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48890 = state_48883;
state_48883 = G__48890;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__ = function(state_48883){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____1.call(this,state_48883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48888 = f__20621__auto__.call(null);
(statearr_48888[(6)] = c__20620__auto__);

return statearr_48888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_48897){
var state_val_48898 = (state_48897[(1)]);
if((state_val_48898 === (1))){
var inst_48891 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_48897__$1 = state_48897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48897__$1,(2),inst_48891);
} else {
if((state_val_48898 === (2))){
var inst_48893 = (state_48897[(2)]);
var inst_48894 = cljs.core.second.call(null,inst_48893);
var inst_48895 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48894);
var state_48897__$1 = state_48897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48897__$1,inst_48895);
} else {
return null;
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____0 = (function (){
var statearr_48899 = [null,null,null,null,null,null,null];
(statearr_48899[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__);

(statearr_48899[(1)] = (1));

return statearr_48899;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____1 = (function (state_48897){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48900){if((e48900 instanceof Object)){
var ex__20457__auto__ = e48900;
var statearr_48901_48903 = state_48897;
(statearr_48901_48903[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48904 = state_48897;
state_48897 = G__48904;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__ = function(state_48897){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____1.call(this,state_48897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_48902 = f__20621__auto__.call(null);
(statearr_48902[(6)] = c__20620__auto__);

return statearr_48902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__48906){
var map__48907 = p__48906;
var map__48907__$1 = (((((!((map__48907 == null))))?(((((map__48907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48907):map__48907);
var opts = map__48907__$1;
var container_id = cljs.core.get.call(null,map__48907__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__48907__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__48907__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__20620__auto___48959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_48941){
var state_val_48942 = (state_48941[(1)]);
if((state_val_48942 === (7))){
var inst_48917 = (state_48941[(2)]);
var inst_48922 = (function (){var _STAR_print_newline_STAR__orig_val__48918 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48920 = true;
return ((function (_STAR_print_newline_STAR__orig_val__48918,_STAR_print_fn_STAR__orig_val__48919,_STAR_print_newline_STAR__temp_val__48920,inst_48917,state_val_48942,c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__48905_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__48905_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__48918,_STAR_print_fn_STAR__orig_val__48919,_STAR_print_newline_STAR__temp_val__48920,inst_48917,state_val_48942,c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_48923 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_48924 = cljs.core._STAR_print_fn_STAR_ = inst_48922;
var state_48941__$1 = (function (){var statearr_48943 = state_48941;
(statearr_48943[(7)] = inst_48924);

(statearr_48943[(8)] = inst_48923);

(statearr_48943[(9)] = inst_48917);

return statearr_48943;
})();
var statearr_48944_48960 = state_48941__$1;
(statearr_48944_48960[(2)] = null);

(statearr_48944_48960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (1))){
var inst_48909 = clojure.string.blank_QMARK_.call(null,exp);
var state_48941__$1 = state_48941;
if(inst_48909){
var statearr_48945_48961 = state_48941__$1;
(statearr_48945_48961[(1)] = (2));

} else {
var statearr_48946_48962 = state_48941__$1;
(statearr_48946_48962[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (4))){
var inst_48939 = (state_48941[(2)]);
var state_48941__$1 = state_48941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48941__$1,inst_48939);
} else {
if((state_val_48942 === (6))){
var state_48941__$1 = state_48941;
var statearr_48947_48963 = state_48941__$1;
(statearr_48947_48963[(2)] = null);

(statearr_48947_48963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (3))){
var state_48941__$1 = state_48941;
if(cljs.core.truth_(setup_container_fn)){
var statearr_48948_48964 = state_48941__$1;
(statearr_48948_48964[(1)] = (5));

} else {
var statearr_48949_48965 = state_48941__$1;
(statearr_48949_48965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (2))){
var inst_48911 = cljs.core.async.put_BANG_.call(null,c,"");
var state_48941__$1 = state_48941;
var statearr_48950_48966 = state_48941__$1;
(statearr_48950_48966[(2)] = inst_48911);

(statearr_48950_48966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (11))){
var inst_48933 = (state_48941[(2)]);
var inst_48934 = cljs.core.second.call(null,inst_48933);
var inst_48935 = cljs.core.async.put_BANG_.call(null,c,inst_48934);
var state_48941__$1 = state_48941;
var statearr_48951_48967 = state_48941__$1;
(statearr_48951_48967[(2)] = inst_48935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (9))){
var inst_48925 = (state_48941[(2)]);
var inst_48926 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_48927 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_48941__$1 = (function (){var statearr_48952 = state_48941;
(statearr_48952[(10)] = inst_48926);

(statearr_48952[(11)] = inst_48927);

(statearr_48952[(12)] = inst_48925);

return statearr_48952;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (5))){
var inst_48914 = setup_container_fn.call(null,container_id);
var state_48941__$1 = state_48941;
var statearr_48953_48968 = state_48941__$1;
(statearr_48953_48968[(2)] = inst_48914);

(statearr_48953_48968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48942 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48941,null,null,(9),(8));
var inst_48931 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_48941__$1 = state_48941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48941__$1,(11),inst_48931);
} else {
if((state_val_48942 === (8))){
var inst_48937 = (state_48941[(2)]);
var state_48941__$1 = state_48941;
var statearr_48954_48969 = state_48941__$1;
(statearr_48954_48969[(2)] = inst_48937);

(statearr_48954_48969[(1)] = (4));


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
});})(c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__20453__auto__,c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____0 = (function (){
var statearr_48955 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48955[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__);

(statearr_48955[(1)] = (1));

return statearr_48955;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____1 = (function (state_48941){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_48941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e48956){if((e48956 instanceof Object)){
var ex__20457__auto__ = e48956;
var statearr_48957_48970 = state_48941;
(statearr_48957_48970[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48971 = state_48941;
state_48941 = G__48971;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__ = function(state_48941){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____1.call(this,state_48941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__20622__auto__ = (function (){var statearr_48958 = f__20621__auto__.call(null);
(statearr_48958[(6)] = c__20620__auto___48959);

return statearr_48958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto___48959,c,map__48907,map__48907__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
