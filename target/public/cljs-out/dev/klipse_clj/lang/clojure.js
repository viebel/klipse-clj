// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure');
goog.require('cljs.core');
goog.require('klipse_clj.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('cljs.tagged_literals');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('klipse_clj.lang.clojure.guard');
goog.require('klipse_clj.repl');
goog.require('klipse_clj.lang.clojure.io');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('klipse_clj.lang.cljs_repl');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
goog.require('cljs.compiler');
klipse_clj.lang.clojure.load_core_macros_cache = (function klipse_clj$lang$clojure$load_core_macros_cache(){
return klipse_clj.lang.clojure.io.load_ns_from_file.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),"/cljs/core$macros.cljc.cache.json"].join(''));
});
klipse_clj.lang.clojure.init_custom_macros = (function klipse_clj$lang$clojure$init_custom_macros(){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10423){
var state_val_10424 = (state_10423[(1)]);
if((state_val_10424 === (7))){
var inst_10419 = (state_10423[(2)]);
var state_10423__$1 = state_10423;
var statearr_10425_10451 = state_10423__$1;
(statearr_10425_10451[(2)] = inst_10419);

(statearr_10425_10451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (1))){
var inst_10362 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_10423__$1 = state_10423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10423__$1,(2),inst_10362);
} else {
if((state_val_10424 === (4))){
var inst_10421 = (state_10423[(2)]);
var state_10423__$1 = state_10423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10423__$1,inst_10421);
} else {
if((state_val_10424 === (15))){
var inst_10393 = (state_10423[(7)]);
var inst_10410 = (state_10423[(2)]);
var inst_10411 = cljs.core.next.call(null,inst_10393);
var inst_10373 = inst_10411;
var inst_10374 = null;
var inst_10375 = (0);
var inst_10376 = (0);
var state_10423__$1 = (function (){var statearr_10426 = state_10423;
(statearr_10426[(8)] = inst_10375);

(statearr_10426[(9)] = inst_10376);

(statearr_10426[(10)] = inst_10374);

(statearr_10426[(11)] = inst_10373);

(statearr_10426[(12)] = inst_10410);

return statearr_10426;
})();
var statearr_10427_10452 = state_10423__$1;
(statearr_10427_10452[(2)] = null);

(statearr_10427_10452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (13))){
var inst_10393 = (state_10423[(7)]);
var inst_10402 = cljs.core.first.call(null,inst_10393);
var inst_10403 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_10404 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_10405 = [inst_10404,klipse_clj.repl.current_ns_eval];
var inst_10406 = cljs.core.PersistentHashMap.fromArrays(inst_10403,inst_10405);
var inst_10407 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_10402,inst_10406);
var inst_10408 = cljs.core.first.call(null,inst_10407);
var state_10423__$1 = state_10423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10423__$1,(15),inst_10408);
} else {
if((state_val_10424 === (6))){
var inst_10393 = (state_10423[(7)]);
var inst_10373 = (state_10423[(11)]);
var inst_10393__$1 = cljs.core.seq.call(null,inst_10373);
var state_10423__$1 = (function (){var statearr_10428 = state_10423;
(statearr_10428[(7)] = inst_10393__$1);

return statearr_10428;
})();
if(inst_10393__$1){
var statearr_10429_10453 = state_10423__$1;
(statearr_10429_10453[(1)] = (9));

} else {
var statearr_10430_10454 = state_10423__$1;
(statearr_10430_10454[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (3))){
var inst_10375 = (state_10423[(8)]);
var inst_10376 = (state_10423[(9)]);
var inst_10378 = (inst_10376 < inst_10375);
var inst_10379 = inst_10378;
var state_10423__$1 = state_10423;
if(cljs.core.truth_(inst_10379)){
var statearr_10431_10455 = state_10423__$1;
(statearr_10431_10455[(1)] = (5));

} else {
var statearr_10432_10456 = state_10423__$1;
(statearr_10432_10456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (12))){
var inst_10393 = (state_10423[(7)]);
var inst_10397 = cljs.core.chunk_first.call(null,inst_10393);
var inst_10398 = cljs.core.chunk_rest.call(null,inst_10393);
var inst_10399 = cljs.core.count.call(null,inst_10397);
var inst_10373 = inst_10398;
var inst_10374 = inst_10397;
var inst_10375 = inst_10399;
var inst_10376 = (0);
var state_10423__$1 = (function (){var statearr_10433 = state_10423;
(statearr_10433[(8)] = inst_10375);

(statearr_10433[(9)] = inst_10376);

(statearr_10433[(10)] = inst_10374);

(statearr_10433[(11)] = inst_10373);

return statearr_10433;
})();
var statearr_10434_10457 = state_10423__$1;
(statearr_10434_10457[(2)] = null);

(statearr_10434_10457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (2))){
var inst_10364 = (state_10423[(2)]);
var inst_10369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10370 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_10371 = (new cljs.core.PersistentVector(null,2,(5),inst_10369,inst_10370,null));
var inst_10372 = cljs.core.seq.call(null,inst_10371);
var inst_10373 = inst_10372;
var inst_10374 = null;
var inst_10375 = (0);
var inst_10376 = (0);
var state_10423__$1 = (function (){var statearr_10435 = state_10423;
(statearr_10435[(8)] = inst_10375);

(statearr_10435[(9)] = inst_10376);

(statearr_10435[(10)] = inst_10374);

(statearr_10435[(11)] = inst_10373);

(statearr_10435[(13)] = inst_10364);

return statearr_10435;
})();
var statearr_10436_10458 = state_10423__$1;
(statearr_10436_10458[(2)] = null);

(statearr_10436_10458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (11))){
var inst_10417 = (state_10423[(2)]);
var state_10423__$1 = state_10423;
var statearr_10437_10459 = state_10423__$1;
(statearr_10437_10459[(2)] = inst_10417);

(statearr_10437_10459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (9))){
var inst_10393 = (state_10423[(7)]);
var inst_10395 = cljs.core.chunked_seq_QMARK_.call(null,inst_10393);
var state_10423__$1 = state_10423;
if(inst_10395){
var statearr_10438_10460 = state_10423__$1;
(statearr_10438_10460[(1)] = (12));

} else {
var statearr_10439_10461 = state_10423__$1;
(statearr_10439_10461[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (5))){
var inst_10376 = (state_10423[(9)]);
var inst_10374 = (state_10423[(10)]);
var inst_10381 = cljs.core._nth.call(null,inst_10374,inst_10376);
var inst_10382 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_10383 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_10384 = [inst_10383,klipse_clj.repl.current_ns_eval];
var inst_10385 = cljs.core.PersistentHashMap.fromArrays(inst_10382,inst_10384);
var inst_10386 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_10381,inst_10385);
var inst_10387 = cljs.core.first.call(null,inst_10386);
var state_10423__$1 = state_10423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10423__$1,(8),inst_10387);
} else {
if((state_val_10424 === (14))){
var inst_10414 = (state_10423[(2)]);
var state_10423__$1 = state_10423;
var statearr_10443_10462 = state_10423__$1;
(statearr_10443_10462[(2)] = inst_10414);

(statearr_10443_10462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (10))){
var state_10423__$1 = state_10423;
var statearr_10444_10463 = state_10423__$1;
(statearr_10444_10463[(2)] = null);

(statearr_10444_10463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10424 === (8))){
var inst_10375 = (state_10423[(8)]);
var inst_10376 = (state_10423[(9)]);
var inst_10374 = (state_10423[(10)]);
var inst_10373 = (state_10423[(11)]);
var inst_10389 = (state_10423[(2)]);
var inst_10390 = (inst_10376 + (1));
var tmp10440 = inst_10375;
var tmp10441 = inst_10374;
var tmp10442 = inst_10373;
var inst_10373__$1 = tmp10442;
var inst_10374__$1 = tmp10441;
var inst_10375__$1 = tmp10440;
var inst_10376__$1 = inst_10390;
var state_10423__$1 = (function (){var statearr_10445 = state_10423;
(statearr_10445[(8)] = inst_10375__$1);

(statearr_10445[(9)] = inst_10376__$1);

(statearr_10445[(10)] = inst_10374__$1);

(statearr_10445[(14)] = inst_10389);

(statearr_10445[(11)] = inst_10373__$1);

return statearr_10445;
})();
var statearr_10446_10464 = state_10423__$1;
(statearr_10446_10464[(2)] = null);

(statearr_10446_10464[(1)] = (3));


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
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____0 = (function (){
var statearr_10447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10447[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__);

(statearr_10447[(1)] = (1));

return statearr_10447;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____1 = (function (state_10423){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10448){if((e10448 instanceof Object)){
var ex__9989__auto__ = e10448;
var statearr_10449_10465 = state_10423;
(statearr_10449_10465[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10466 = state_10423;
state_10423 = G__10466;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__ = function(state_10423){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____1.call(this,state_10423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10450 = f__10009__auto__.call(null);
(statearr_10450[(6)] = c__10008__auto__);

return statearr_10450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10469){
var state_val_10470 = (state_10469[(1)]);
if((state_val_10470 === (1))){
var inst_10467 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_10469__$1 = state_10469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10469__$1,inst_10467);
} else {
return null;
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____0 = (function (){
var statearr_10471 = [null,null,null,null,null,null,null];
(statearr_10471[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__);

(statearr_10471[(1)] = (1));

return statearr_10471;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____1 = (function (state_10469){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10472){if((e10472 instanceof Object)){
var ex__9989__auto__ = e10472;
var statearr_10473_10475 = state_10469;
(statearr_10473_10475[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10476 = state_10469;
state_10469 = G__10476;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__ = function(state_10469){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____1.call(this,state_10469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10474 = f__10009__auto__.call(null);
(statearr_10474[(6)] = c__10008__auto__);

return statearr_10474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
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
}catch (e10477){if((e10477 instanceof Object)){
var e = e10477;

return e;
} else {
throw e10477;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__10478){
var map__10479 = p__10478;
var map__10479__$1 = (((((!((map__10479 == null))))?(((((map__10479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10479):map__10479);
var print_length = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__10479__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__10482 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__10483 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__10483;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10484_10488 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10485_10489 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10486_10490 = true;
var _STAR_print_fn_STAR__temp_val__10487_10491 = ((function (_STAR_print_newline_STAR__orig_val__10484_10488,_STAR_print_fn_STAR__orig_val__10485_10489,_STAR_print_newline_STAR__temp_val__10486_10490,sb__4661__auto__,_STAR_print_length_STAR__orig_val__10482,_STAR_print_length_STAR__temp_val__10483,map__10479,map__10479__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__10484_10488,_STAR_print_fn_STAR__orig_val__10485_10489,_STAR_print_newline_STAR__temp_val__10486_10490,sb__4661__auto__,_STAR_print_length_STAR__orig_val__10482,_STAR_print_length_STAR__temp_val__10483,map__10479,map__10479__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10486_10490;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10487_10491;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10485_10489;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10484_10488;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__10482;
}}catch (e10481){if((e10481 instanceof Object)){
var e = e10481;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e10481;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__10492,verbose_QMARK_,current_ns){
var map__10493 = p__10492;
var map__10493__$1 = (((((!((map__10493 == null))))?(((((map__10493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10493):map__10493);
var ns = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var _value = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__10495,opts){
var map__10496 = p__10495;
var map__10496__$1 = (((((!((map__10496 == null))))?(((((map__10496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10496):map__10496);
var args = map__10496__$1;
var _ns = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"_ns","_ns",1411120581));
var _form = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__10496__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__10498,opts){
var map__10499 = p__10498;
var map__10499__$1 = (((((!((map__10499 == null))))?(((((map__10499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10499):map__10499);
var args = map__10499__$1;
var ns = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var _error = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"_error","_error",-332213735));
var _value = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var vec__10501 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__10501,(0),null);
var val = cljs.core.nth.call(null,vec__10501,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__10504){
var map__10505 = p__10504;
var map__10505__$1 = (((((!((map__10505 == null))))?(((((map__10505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10505):map__10505);
var _form = cljs.core.get.call(null,map__10505__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__10505__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__10505__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__10505__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__10505__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__10507){
var map__10508 = p__10507;
var map__10508__$1 = (((((!((map__10508 == null))))?(((((map__10508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10508):map__10508);
var foo = map__10508__$1;
var value = cljs.core.get.call(null,map__10508__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__10508__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__10510){
var map__10511 = p__10510;
var map__10511__$1 = (((((!((map__10511 == null))))?(((((map__10511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10511):map__10511);
var args = map__10511__$1;
var _file = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_file","_file",-267733516));
var _source = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));
var _lang = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_lang","_lang",-796607044));
var _name = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var _path = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_path","_path",157802149));
var _cache = cljs.core.get.call(null,map__10511__$1,new cljs.core.Keyword(null,"_cache","_cache",442382032));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__10513){
var map__10514 = p__10513;
var map__10514__$1 = (((((!((map__10514 == null))))?(((((map__10514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10514):map__10514);
var source = cljs.core.get.call(null,map__10514__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__10516){
var map__10517 = p__10516;
var map__10517__$1 = (((((!((map__10517 == null))))?(((((map__10517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10517):map__10517);
var static_fns = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,map__10517,map__10517__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,map__10517,map__10517__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return c;
});
klipse_clj.lang.clojure.warning_handler = (function klipse_clj$lang$clojure$warning_handler(c,warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5804__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.async.put_BANG_.call(null,c,[cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"\n"].join(''));
} else {
return null;
}
} else {
return null;
}
});
klipse_clj.lang.clojure.read_until_closed_BANG_ = (function klipse_clj$lang$clojure$read_until_closed_BANG_(c){
var d = cljs.core.async.chan.call(null);
var c__10008__auto___10550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto___10550,d){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto___10550,d){
return (function (state_10535){
var state_val_10536 = (state_10535[(1)]);
if((state_val_10536 === (1))){
var inst_10519 = cljs.core.PersistentVector.EMPTY;
var inst_10520 = inst_10519;
var state_10535__$1 = (function (){var statearr_10537 = state_10535;
(statearr_10537[(7)] = inst_10520);

return statearr_10537;
})();
var statearr_10538_10551 = state_10535__$1;
(statearr_10538_10551[(2)] = null);

(statearr_10538_10551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (2))){
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10535__$1,(4),c);
} else {
if((state_val_10536 === (3))){
var inst_10533 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10535__$1,inst_10533);
} else {
if((state_val_10536 === (4))){
var inst_10523 = (state_10535[(8)]);
var inst_10523__$1 = (state_10535[(2)]);
var inst_10524 = (inst_10523__$1 == null);
var state_10535__$1 = (function (){var statearr_10539 = state_10535;
(statearr_10539[(8)] = inst_10523__$1);

return statearr_10539;
})();
if(cljs.core.truth_(inst_10524)){
var statearr_10540_10552 = state_10535__$1;
(statearr_10540_10552[(1)] = (5));

} else {
var statearr_10541_10553 = state_10535__$1;
(statearr_10541_10553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (5))){
var inst_10520 = (state_10535[(7)]);
var inst_10526 = cljs.core.async.put_BANG_.call(null,d,inst_10520);
var state_10535__$1 = state_10535;
var statearr_10542_10554 = state_10535__$1;
(statearr_10542_10554[(2)] = inst_10526);

(statearr_10542_10554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (6))){
var inst_10520 = (state_10535[(7)]);
var inst_10523 = (state_10535[(8)]);
var inst_10528 = cljs.core.conj.call(null,inst_10520,inst_10523);
var inst_10520__$1 = inst_10528;
var state_10535__$1 = (function (){var statearr_10543 = state_10535;
(statearr_10543[(7)] = inst_10520__$1);

return statearr_10543;
})();
var statearr_10544_10555 = state_10535__$1;
(statearr_10544_10555[(2)] = null);

(statearr_10544_10555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10536 === (7))){
var inst_10531 = (state_10535[(2)]);
var state_10535__$1 = state_10535;
var statearr_10545_10556 = state_10535__$1;
(statearr_10545_10556[(2)] = inst_10531);

(statearr_10545_10556[(1)] = (3));


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
});})(c__10008__auto___10550,d))
;
return ((function (switch__9985__auto__,c__10008__auto___10550,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____0 = (function (){
var statearr_10546 = [null,null,null,null,null,null,null,null,null];
(statearr_10546[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__);

(statearr_10546[(1)] = (1));

return statearr_10546;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____1 = (function (state_10535){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10547){if((e10547 instanceof Object)){
var ex__9989__auto__ = e10547;
var statearr_10548_10557 = state_10535;
(statearr_10548_10557[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10558 = state_10535;
state_10535 = G__10558;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__ = function(state_10535){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____1.call(this,state_10535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto___10550,d))
})();
var state__10010__auto__ = (function (){var statearr_10549 = f__10009__auto__.call(null);
(statearr_10549[(6)] = c__10008__auto___10550);

return statearr_10549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto___10550,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__10559){
var map__10560 = p__10559;
var map__10560__$1 = (((((!((map__10560 == null))))?(((((map__10560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10560):map__10560);
var static_fns = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__10560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__10562 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__10563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__10563;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (state_10572){
var state_val_10573 = (state_10572[(1)]);
if((state_val_10573 === (1))){
var inst_10564 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_10572__$1 = state_10572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10572__$1,(2),inst_10564);
} else {
if((state_val_10573 === (2))){
var inst_10566 = (state_10572[(2)]);
var inst_10567 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_10568 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_10569 = clojure.string.join.call(null,"",inst_10566);
var inst_10570 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_10569);
var state_10572__$1 = (function (){var statearr_10574 = state_10572;
(statearr_10574[(7)] = inst_10568);

(statearr_10574[(8)] = inst_10567);

return statearr_10574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10572__$1,inst_10570);
} else {
return null;
}
}
});})(c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
;
return ((function (switch__9985__auto__,c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____0 = (function (){
var statearr_10575 = [null,null,null,null,null,null,null,null,null];
(statearr_10575[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__);

(statearr_10575[(1)] = (1));

return statearr_10575;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____1 = (function (state_10572){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10576){if((e10576 instanceof Object)){
var ex__9989__auto__ = e10576;
var statearr_10577_10579 = state_10572;
(statearr_10577_10579[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10580 = state_10572;
state_10572 = G__10580;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__ = function(state_10572){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____1.call(this,state_10572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
})();
var state__10010__auto__ = (function (){var statearr_10578 = f__10009__auto__.call(null);
(statearr_10578[(6)] = c__10008__auto__);

return statearr_10578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return c__10008__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__10562,_STAR_cljs_warning_handlers_STAR__temp_val__10563,res_chan,warnings_chan,agg_warnings_chan,map__10560,map__10560__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__10562;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__10581 = cljs.core.conj.call(null,res,ch);
res = G__10581;
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
var _STAR_alias_map_STAR__orig_val__10582 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__10583 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__10584 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__10585 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__10586 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__10587 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__10588 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__10589 = ns;
var _STAR_cljs_ns_STAR__temp_val__10590 = ns;
var _STAR_compiler_STAR__temp_val__10591 = st;
var resolve_symbol_temp_val__10592 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__10593 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__10588;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__10589;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__10590;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__10591;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__10592;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__10593;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__10587;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__10586;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__10585;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__10584;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__10583;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__10582;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__10597 = arguments.length;
switch (G__10597) {
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
var _STAR_alias_map_STAR__orig_val__10598 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__10599 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__10600 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__10601 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__10602 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__10603 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__10604 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__10605 = ns;
var _STAR_cljs_ns_STAR__temp_val__10606 = ns;
var _STAR_compiler_STAR__temp_val__10607 = st;
var resolve_symbol_temp_val__10608 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__10609 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__10604;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__10605;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__10606;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__10607;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__10608;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__10609;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__10603;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__10602;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__10601;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__10600;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__10599;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__10598;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__10614 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__10614,(0),null);
var rest_s = cljs.core.nth.call(null,vec__10614,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__10617 = rest_s;
var G__10618 = res;
s__$1 = G__10617;
res = G__10618;
continue;
} else {
var G__10619 = rest_s;
var G__10620 = cljs.core.conj.call(null,res,exp);
s__$1 = G__10619;
res = G__10620;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__10621){
var map__10622 = p__10621;
var map__10622__$1 = (((((!((map__10622 == null))))?(((((map__10622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10622):map__10622);
var result_element = cljs.core.get.call(null,map__10622__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__10622__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__4120__auto__ = container;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__4120__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null);
var c__10008__auto___10726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto___10726,res_chan,warnings_chan){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto___10726,res_chan,warnings_chan){
return (function (state_10698){
var state_val_10699 = (state_10698[(1)]);
if((state_val_10699 === (7))){
var inst_10694 = (state_10698[(2)]);
var state_10698__$1 = state_10698;
var statearr_10700_10727 = state_10698__$1;
(statearr_10700_10727[(2)] = inst_10694);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10698__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (1))){
var state_10698__$1 = state_10698;
var statearr_10701_10728 = state_10698__$1;
(statearr_10701_10728[(2)] = null);

(statearr_10701_10728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10698,(3),Object,null,(2));
var inst_10637 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_10698__$1 = state_10698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10698__$1,(5),inst_10637);
} else {
if((state_val_10699 === (15))){
var inst_10681 = (state_10698[(7)]);
var inst_10654 = (state_10698[(8)]);
var inst_10672 = (state_10698[(9)]);
var inst_10683 = (state_10698[(2)]);
var inst_10684 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10654),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10683)].join('');
var inst_10652 = inst_10681;
var inst_10653 = inst_10672;
var inst_10654__$1 = inst_10684;
var state_10698__$1 = (function (){var statearr_10702 = state_10698;
(statearr_10702[(10)] = inst_10652);

(statearr_10702[(11)] = inst_10653);

(statearr_10702[(8)] = inst_10654__$1);

return statearr_10702;
})();
var statearr_10703_10729 = state_10698__$1;
(statearr_10703_10729[(2)] = null);

(statearr_10703_10729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (13))){
var inst_10660 = (state_10698[(12)]);
var inst_10670 = (state_10698[(13)]);
var inst_10679 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_10680 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_10681 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_10660,inst_10679,inst_10680);
var state_10698__$1 = (function (){var statearr_10704 = state_10698;
(statearr_10704[(7)] = inst_10681);

return statearr_10704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10698__$1,(15),inst_10670);
} else {
if((state_val_10699 === (6))){
var inst_10652 = (state_10698[(10)]);
var inst_10659 = (state_10698[(14)]);
var inst_10659__$1 = cljs.core.nth.call(null,inst_10652,(0),null);
var inst_10660 = cljs.core.nth.call(null,inst_10652,(1),null);
var inst_10661 = cljs.core.seq.call(null,inst_10659__$1);
var state_10698__$1 = (function (){var statearr_10705 = state_10698;
(statearr_10705[(12)] = inst_10660);

(statearr_10705[(14)] = inst_10659__$1);

return statearr_10705;
})();
if(inst_10661){
var statearr_10706_10730 = state_10698__$1;
(statearr_10706_10730[(1)] = (8));

} else {
var statearr_10707_10731 = state_10698__$1;
(statearr_10707_10731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (3))){
var inst_10624 = (state_10698[(2)]);
var inst_10625 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_10626 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_10627 = [inst_10624];
var inst_10628 = cljs.core.PersistentHashMap.fromArrays(inst_10626,inst_10627);
var inst_10629 = cljs.core.async.put_BANG_.call(null,res_chan,inst_10628);
var inst_10630 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_10631 = [inst_10624];
var inst_10632 = cljs.core.PersistentHashMap.fromArrays(inst_10630,inst_10631);
var inst_10633 = klipse_clj.lang.clojure.populate_err.call(null,inst_10632,opts);
var state_10698__$1 = (function (){var statearr_10708 = state_10698;
(statearr_10708[(15)] = inst_10629);

(statearr_10708[(16)] = inst_10625);

return statearr_10708;
})();
var statearr_10709_10732 = state_10698__$1;
(statearr_10709_10732[(2)] = inst_10633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10698__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (12))){
var inst_10672 = (state_10698[(9)]);
var inst_10675 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_10676 = cljs.core.async.put_BANG_.call(null,res_chan,inst_10672);
var inst_10677 = klipse_clj.lang.clojure.populate_err.call(null,inst_10672,opts);
var state_10698__$1 = (function (){var statearr_10710 = state_10698;
(statearr_10710[(17)] = inst_10675);

(statearr_10710[(18)] = inst_10676);

return statearr_10710;
})();
var statearr_10711_10733 = state_10698__$1;
(statearr_10711_10733[(2)] = inst_10677);

(statearr_10711_10733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (2))){
var inst_10696 = (state_10698[(2)]);
var state_10698__$1 = state_10698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10698__$1,inst_10696);
} else {
if((state_val_10699 === (11))){
var inst_10672 = (state_10698[(9)]);
var inst_10672__$1 = (state_10698[(2)]);
var inst_10673 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_10672__$1);
var state_10698__$1 = (function (){var statearr_10712 = state_10698;
(statearr_10712[(9)] = inst_10672__$1);

return statearr_10712;
})();
if(cljs.core.truth_(inst_10673)){
var statearr_10713_10734 = state_10698__$1;
(statearr_10713_10734[(1)] = (12));

} else {
var statearr_10714_10735 = state_10698__$1;
(statearr_10714_10735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (9))){
var inst_10653 = (state_10698[(11)]);
var inst_10654 = (state_10698[(8)]);
var inst_10689 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_10654);
var inst_10690 = cljs.core.async.put_BANG_.call(null,res_chan,inst_10653);
var state_10698__$1 = (function (){var statearr_10715 = state_10698;
(statearr_10715[(19)] = inst_10689);

return statearr_10715;
})();
var statearr_10716_10736 = state_10698__$1;
(statearr_10716_10736[(2)] = inst_10690);

(statearr_10716_10736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (5))){
var inst_10639 = (state_10698[(2)]);
var inst_10647 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_10648 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_10649 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_10647,inst_10648);
var inst_10650 = cljs.core.nth.call(null,inst_10649,(0),null);
var inst_10651 = cljs.core.nth.call(null,inst_10649,(1),null);
var inst_10652 = inst_10649;
var inst_10653 = null;
var inst_10654 = "";
var state_10698__$1 = (function (){var statearr_10717 = state_10698;
(statearr_10717[(10)] = inst_10652);

(statearr_10717[(11)] = inst_10653);

(statearr_10717[(20)] = inst_10650);

(statearr_10717[(21)] = inst_10651);

(statearr_10717[(8)] = inst_10654);

(statearr_10717[(22)] = inst_10639);

return statearr_10717;
})();
var statearr_10718_10737 = state_10698__$1;
(statearr_10718_10737[(2)] = null);

(statearr_10718_10737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (14))){
var inst_10687 = (state_10698[(2)]);
var state_10698__$1 = state_10698;
var statearr_10719_10738 = state_10698__$1;
(statearr_10719_10738[(2)] = inst_10687);

(statearr_10719_10738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (10))){
var inst_10692 = (state_10698[(2)]);
var state_10698__$1 = state_10698;
var statearr_10720_10739 = state_10698__$1;
(statearr_10720_10739[(2)] = inst_10692);

(statearr_10720_10739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10699 === (8))){
var inst_10659 = (state_10698[(14)]);
var inst_10666 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_10667 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_10666,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_10668 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_10659,inst_10667);
var inst_10669 = cljs.core.nth.call(null,inst_10668,(0),null);
var inst_10670 = cljs.core.nth.call(null,inst_10668,(1),null);
var state_10698__$1 = (function (){var statearr_10721 = state_10698;
(statearr_10721[(13)] = inst_10670);

return statearr_10721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10698__$1,(11),inst_10669);
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
});})(c__10008__auto___10726,res_chan,warnings_chan))
;
return ((function (switch__9985__auto__,c__10008__auto___10726,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____0 = (function (){
var statearr_10722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10722[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__);

(statearr_10722[(1)] = (1));

return statearr_10722;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____1 = (function (state_10698){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10723){if((e10723 instanceof Object)){
var ex__9989__auto__ = e10723;
var statearr_10724_10740 = state_10698;
(statearr_10724_10740[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10741 = state_10698;
state_10698 = G__10741;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__ = function(state_10698){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____1.call(this,state_10698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto___10726,res_chan,warnings_chan))
})();
var state__10010__auto__ = (function (){var statearr_10725 = f__10009__auto__.call(null);
(statearr_10725[(6)] = c__10008__auto___10726);

return statearr_10725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto___10726,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10798){
var state_val_10799 = (state_10798[(1)]);
if((state_val_10799 === (7))){
var inst_10767 = (state_10798[(7)]);
var inst_10771 = klipse_clj.repl.create_state_compile.call(null);
var inst_10772 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_10771,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_10773 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_10767,inst_10772);
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10798__$1,(10),inst_10773);
} else {
if((state_val_10799 === (1))){
var state_10798__$1 = state_10798;
var statearr_10800_10821 = state_10798__$1;
(statearr_10800_10821[(2)] = null);

(statearr_10800_10821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10798,(3),Object,null,(2));
var inst_10756 = klipse_clj.repl.create_state_compile.call(null);
var inst_10757 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_10758 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_10756,inst_10757);
var inst_10759 = cljs.core.nth.call(null,inst_10758,(0),null);
var inst_10760 = cljs.core.nth.call(null,inst_10758,(1),null);
var inst_10761 = inst_10758;
var inst_10762 = "";
var state_10798__$1 = (function (){var statearr_10801 = state_10798;
(statearr_10801[(8)] = inst_10761);

(statearr_10801[(9)] = inst_10760);

(statearr_10801[(10)] = inst_10762);

(statearr_10801[(11)] = inst_10759);

return statearr_10801;
})();
var statearr_10802_10822 = state_10798__$1;
(statearr_10802_10822[(2)] = null);

(statearr_10802_10822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (13))){
var inst_10786 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10803_10823 = state_10798__$1;
(statearr_10803_10823[(2)] = inst_10786);

(statearr_10803_10823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (6))){
var inst_10794 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10804_10824 = state_10798__$1;
(statearr_10804_10824[(2)] = inst_10794);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (3))){
var inst_10742 = (state_10798[(2)]);
var inst_10743 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_10744 = [inst_10742];
var inst_10745 = cljs.core.PersistentHashMap.fromArrays(inst_10743,inst_10744);
var state_10798__$1 = state_10798;
var statearr_10805_10825 = state_10798__$1;
(statearr_10805_10825[(2)] = inst_10745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10798__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (12))){
var inst_10768 = (state_10798[(12)]);
var inst_10762 = (state_10798[(10)]);
var inst_10775 = (state_10798[(13)]);
var inst_10779 = klipse_clj.repl.create_state_compile.call(null);
var inst_10780 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_10781 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_10768,inst_10779,inst_10780);
var inst_10782 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_10775);
var inst_10783 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10762),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10782)].join('');
var inst_10761 = inst_10781;
var inst_10762__$1 = inst_10783;
var state_10798__$1 = (function (){var statearr_10806 = state_10798;
(statearr_10806[(8)] = inst_10761);

(statearr_10806[(10)] = inst_10762__$1);

return statearr_10806;
})();
var statearr_10807_10826 = state_10798__$1;
(statearr_10807_10826[(2)] = null);

(statearr_10807_10826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (2))){
var inst_10796 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10798__$1,inst_10796);
} else {
if((state_val_10799 === (11))){
var inst_10775 = (state_10798[(13)]);
var state_10798__$1 = state_10798;
var statearr_10808_10827 = state_10798__$1;
(statearr_10808_10827[(2)] = inst_10775);

(statearr_10808_10827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (9))){
var inst_10792 = (state_10798[(2)]);
var state_10798__$1 = state_10798;
var statearr_10809_10828 = state_10798__$1;
(statearr_10809_10828[(2)] = inst_10792);

(statearr_10809_10828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (5))){
var inst_10761 = (state_10798[(8)]);
var inst_10767 = (state_10798[(7)]);
var inst_10767__$1 = cljs.core.nth.call(null,inst_10761,(0),null);
var inst_10768 = cljs.core.nth.call(null,inst_10761,(1),null);
var inst_10769 = cljs.core.seq.call(null,inst_10767__$1);
var state_10798__$1 = (function (){var statearr_10810 = state_10798;
(statearr_10810[(12)] = inst_10768);

(statearr_10810[(7)] = inst_10767__$1);

return statearr_10810;
})();
if(inst_10769){
var statearr_10811_10829 = state_10798__$1;
(statearr_10811_10829[(1)] = (7));

} else {
var statearr_10812_10830 = state_10798__$1;
(statearr_10812_10830[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (10))){
var inst_10775 = (state_10798[(13)]);
var inst_10775__$1 = (state_10798[(2)]);
var inst_10776 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_10775__$1);
var state_10798__$1 = (function (){var statearr_10813 = state_10798;
(statearr_10813[(13)] = inst_10775__$1);

return statearr_10813;
})();
if(cljs.core.truth_(inst_10776)){
var statearr_10814_10831 = state_10798__$1;
(statearr_10814_10831[(1)] = (11));

} else {
var statearr_10815_10832 = state_10798__$1;
(statearr_10815_10832[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10799 === (8))){
var inst_10762 = (state_10798[(10)]);
var inst_10788 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_10789 = [inst_10762];
var inst_10790 = cljs.core.PersistentHashMap.fromArrays(inst_10788,inst_10789);
var state_10798__$1 = state_10798;
var statearr_10816_10833 = state_10798__$1;
(statearr_10816_10833[(2)] = inst_10790);

(statearr_10816_10833[(1)] = (9));


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
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____0 = (function (){
var statearr_10817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10817[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__);

(statearr_10817[(1)] = (1));

return statearr_10817;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____1 = (function (state_10798){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10818){if((e10818 instanceof Object)){
var ex__9989__auto__ = e10818;
var statearr_10819_10834 = state_10798;
(statearr_10819_10834[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10835 = state_10798;
state_10798 = G__10835;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__ = function(state_10798){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____1.call(this,state_10798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10820 = f__10009__auto__.call(null);
(statearr_10820[(6)] = c__10008__auto__);

return statearr_10820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10851){
var state_val_10852 = (state_10851[(1)]);
if((state_val_10852 === (1))){
var inst_10839 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_10840 = cljs.core.nth.call(null,inst_10839,(0),null);
var inst_10841 = cljs.core.nth.call(null,inst_10839,(1),null);
var state_10851__$1 = (function (){var statearr_10853 = state_10851;
(statearr_10853[(7)] = inst_10841);

return statearr_10853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10851__$1,(2),inst_10840);
} else {
if((state_val_10852 === (2))){
var inst_10841 = (state_10851[(7)]);
var inst_10843 = (state_10851[(2)]);
var inst_10844 = klipse_clj.lang.clojure.result_as_str.call(null,inst_10843,opts);
var state_10851__$1 = (function (){var statearr_10854 = state_10851;
(statearr_10854[(8)] = inst_10844);

return statearr_10854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10851__$1,(3),inst_10841);
} else {
if((state_val_10852 === (3))){
var inst_10844 = (state_10851[(8)]);
var inst_10846 = (state_10851[(2)]);
var inst_10847 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_10848 = [inst_10846,inst_10844];
var inst_10849 = cljs.core.PersistentHashMap.fromArrays(inst_10847,inst_10848);
var state_10851__$1 = state_10851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10851__$1,inst_10849);
} else {
return null;
}
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____0 = (function (){
var statearr_10855 = [null,null,null,null,null,null,null,null,null];
(statearr_10855[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__);

(statearr_10855[(1)] = (1));

return statearr_10855;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____1 = (function (state_10851){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10856){if((e10856 instanceof Object)){
var ex__9989__auto__ = e10856;
var statearr_10857_10859 = state_10851;
(statearr_10857_10859[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10860 = state_10851;
state_10851 = G__10860;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__ = function(state_10851){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____1.call(this,state_10851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10858 = f__10009__auto__.call(null);
(statearr_10858[(6)] = c__10008__auto__);

return statearr_10858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10873){
var state_val_10874 = (state_10873[(1)]);
if((state_val_10874 === (1))){
var inst_10864 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_10865 = cljs.core.nth.call(null,inst_10864,(0),null);
var inst_10866 = cljs.core.nth.call(null,inst_10864,(1),null);
var state_10873__$1 = (function (){var statearr_10875 = state_10873;
(statearr_10875[(7)] = inst_10866);

return statearr_10875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10873__$1,(2),inst_10865);
} else {
if((state_val_10874 === (2))){
var inst_10866 = (state_10873[(7)]);
var inst_10868 = (state_10873[(2)]);
var inst_10869 = klipse_clj.lang.clojure.result_as_str.call(null,inst_10868,opts);
var state_10873__$1 = (function (){var statearr_10876 = state_10873;
(statearr_10876[(8)] = inst_10869);

return statearr_10876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10873__$1,(3),inst_10866);
} else {
if((state_val_10874 === (3))){
var inst_10869 = (state_10873[(8)]);
var inst_10871 = (state_10873[(2)]);
var state_10873__$1 = (function (){var statearr_10877 = state_10873;
(statearr_10877[(9)] = inst_10871);

return statearr_10877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10873__$1,inst_10869);
} else {
return null;
}
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____0 = (function (){
var statearr_10878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10878[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__);

(statearr_10878[(1)] = (1));

return statearr_10878;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____1 = (function (state_10873){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10879){if((e10879 instanceof Object)){
var ex__9989__auto__ = e10879;
var statearr_10880_10882 = state_10873;
(statearr_10880_10882[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10883 = state_10873;
state_10873 = G__10883;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__ = function(state_10873){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____1.call(this,state_10873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10881 = f__10009__auto__.call(null);
(statearr_10881[(6)] = c__10008__auto__);

return statearr_10881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__10885 = arguments.length;
switch (G__10885) {
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
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10892){
var state_val_10893 = (state_10892[(1)]);
if((state_val_10893 === (1))){
var inst_10886 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_10887 = cljs.core.first.call(null,inst_10886);
var state_10892__$1 = state_10892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10892__$1,(2),inst_10887);
} else {
if((state_val_10893 === (2))){
var inst_10889 = (state_10892[(2)]);
var inst_10890 = klipse_clj.lang.clojure.read_result.call(null,inst_10889);
var state_10892__$1 = state_10892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10892__$1,inst_10890);
} else {
return null;
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$state_machine__9986__auto____0 = (function (){
var statearr_10894 = [null,null,null,null,null,null,null];
(statearr_10894[(0)] = klipse_clj$lang$clojure$state_machine__9986__auto__);

(statearr_10894[(1)] = (1));

return statearr_10894;
});
var klipse_clj$lang$clojure$state_machine__9986__auto____1 = (function (state_10892){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10895){if((e10895 instanceof Object)){
var ex__9989__auto__ = e10895;
var statearr_10896_10899 = state_10892;
(statearr_10896_10899[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10900 = state_10892;
state_10892 = G__10900;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__9986__auto__ = function(state_10892){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__9986__auto____1.call(this,state_10892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__9986__auto____0;
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__9986__auto____1;
return klipse_clj$lang$clojure$state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10897 = f__10009__auto__.call(null);
(statearr_10897[(6)] = c__10008__auto__);

return statearr_10897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10907){
var state_val_10908 = (state_10907[(1)]);
if((state_val_10908 === (1))){
var inst_10901 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_10907__$1 = state_10907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10907__$1,(2),inst_10901);
} else {
if((state_val_10908 === (2))){
var inst_10903 = (state_10907[(2)]);
var inst_10904 = cljs.core.clj__GT_js.call(null,inst_10903);
var inst_10905 = cb.call(null,inst_10904);
var state_10907__$1 = state_10907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10907__$1,inst_10905);
} else {
return null;
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____0 = (function (){
var statearr_10909 = [null,null,null,null,null,null,null];
(statearr_10909[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__);

(statearr_10909[(1)] = (1));

return statearr_10909;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____1 = (function (state_10907){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10910){if((e10910 instanceof Object)){
var ex__9989__auto__ = e10910;
var statearr_10911_10913 = state_10907;
(statearr_10911_10913[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10914 = state_10907;
state_10907 = G__10914;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__ = function(state_10907){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____1.call(this,state_10907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10912 = f__10009__auto__.call(null);
(statearr_10912[(6)] = c__10008__auto__);

return statearr_10912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__10916 = arguments.length;
switch (G__10916) {
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
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10922){
var state_val_10923 = (state_10922[(1)]);
if((state_val_10923 === (1))){
var inst_10917 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_10922__$1 = state_10922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10922__$1,(2),inst_10917);
} else {
if((state_val_10923 === (2))){
var inst_10919 = (state_10922[(2)]);
var inst_10920 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_10919);
var state_10922__$1 = state_10922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10922__$1,inst_10920);
} else {
return null;
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$state_machine__9986__auto____0 = (function (){
var statearr_10924 = [null,null,null,null,null,null,null];
(statearr_10924[(0)] = klipse_clj$lang$clojure$state_machine__9986__auto__);

(statearr_10924[(1)] = (1));

return statearr_10924;
});
var klipse_clj$lang$clojure$state_machine__9986__auto____1 = (function (state_10922){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10925){if((e10925 instanceof Object)){
var ex__9989__auto__ = e10925;
var statearr_10926_10929 = state_10922;
(statearr_10926_10929[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10930 = state_10922;
state_10922 = G__10930;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__9986__auto__ = function(state_10922){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__9986__auto____1.call(this,state_10922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__9986__auto____0;
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__9986__auto____1;
return klipse_clj$lang$clojure$state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10927 = f__10009__auto__.call(null);
(statearr_10927[(6)] = c__10008__auto__);

return statearr_10927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10936){
var state_val_10937 = (state_10936[(1)]);
if((state_val_10937 === (1))){
var inst_10931 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_10936__$1 = state_10936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10936__$1,(2),inst_10931);
} else {
if((state_val_10937 === (2))){
var inst_10933 = (state_10936[(2)]);
var inst_10934 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_10933);
var state_10936__$1 = state_10936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10936__$1,inst_10934);
} else {
return null;
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____0 = (function (){
var statearr_10938 = [null,null,null,null,null,null,null];
(statearr_10938[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__);

(statearr_10938[(1)] = (1));

return statearr_10938;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____1 = (function (state_10936){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10939){if((e10939 instanceof Object)){
var ex__9989__auto__ = e10939;
var statearr_10940_10942 = state_10936;
(statearr_10940_10942[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10943 = state_10936;
state_10936 = G__10943;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__ = function(state_10936){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____1.call(this,state_10936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10941 = f__10009__auto__.call(null);
(statearr_10941[(6)] = c__10008__auto__);

return statearr_10941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__){
return (function (state_10950){
var state_val_10951 = (state_10950[(1)]);
if((state_val_10951 === (1))){
var inst_10944 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_10950__$1 = state_10950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10950__$1,(2),inst_10944);
} else {
if((state_val_10951 === (2))){
var inst_10946 = (state_10950[(2)]);
var inst_10947 = cljs.core.second.call(null,inst_10946);
var inst_10948 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10947);
var state_10950__$1 = state_10950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10950__$1,inst_10948);
} else {
return null;
}
}
});})(c__10008__auto__))
;
return ((function (switch__9985__auto__,c__10008__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____0 = (function (){
var statearr_10952 = [null,null,null,null,null,null,null];
(statearr_10952[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__);

(statearr_10952[(1)] = (1));

return statearr_10952;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____1 = (function (state_10950){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_10950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e10953){if((e10953 instanceof Object)){
var ex__9989__auto__ = e10953;
var statearr_10954_10956 = state_10950;
(statearr_10954_10956[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10957 = state_10950;
state_10950 = G__10957;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__ = function(state_10950){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____1.call(this,state_10950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__))
})();
var state__10010__auto__ = (function (){var statearr_10955 = f__10009__auto__.call(null);
(statearr_10955[(6)] = c__10008__auto__);

return statearr_10955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__))
);

return c__10008__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__10959){
var map__10960 = p__10959;
var map__10960__$1 = (((((!((map__10960 == null))))?(((((map__10960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10960):map__10960);
var opts = map__10960__$1;
var container_id = cljs.core.get.call(null,map__10960__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__10960__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__10960__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__10008__auto___11050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_11019){
var state_val_11020 = (state_11019[(1)]);
if((state_val_11020 === (7))){
var inst_10970 = (state_11019[(2)]);
var inst_10975 = (function (){var _STAR_print_newline_STAR__orig_val__10971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10972 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10973 = true;
return ((function (_STAR_print_newline_STAR__orig_val__10971,_STAR_print_fn_STAR__orig_val__10972,_STAR_print_newline_STAR__temp_val__10973,inst_10970,state_val_11020,c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__10958_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__10958_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__10971,_STAR_print_fn_STAR__orig_val__10972,_STAR_print_newline_STAR__temp_val__10973,inst_10970,state_val_11020,c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_10976 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_10977 = cljs.core._STAR_print_fn_STAR_ = inst_10975;
var state_11019__$1 = (function (){var statearr_11021 = state_11019;
(statearr_11021[(7)] = inst_10976);

(statearr_11021[(8)] = inst_10977);

(statearr_11021[(9)] = inst_10970);

return statearr_11021;
})();
var statearr_11022_11051 = state_11019__$1;
(statearr_11022_11051[(2)] = null);

(statearr_11022_11051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (20))){
var inst_11008 = (state_11019[(2)]);
var inst_11009 = cljs.core.get.call(null,inst_11008,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_11010 = cljs.core.get.call(null,inst_11008,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_11011 = cljs.core.second.call(null,inst_11010);
var inst_11012 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11009),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_11011)].join('');
var inst_11013 = cljs.core.async.put_BANG_.call(null,c,inst_11012);
var state_11019__$1 = state_11019;
var statearr_11023_11052 = state_11019__$1;
(statearr_11023_11052[(2)] = inst_11013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (1))){
var inst_10962 = clojure.string.blank_QMARK_.call(null,exp);
var state_11019__$1 = state_11019;
if(inst_10962){
var statearr_11024_11053 = state_11019__$1;
(statearr_11024_11053[(1)] = (2));

} else {
var statearr_11025_11054 = state_11019__$1;
(statearr_11025_11054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (4))){
var inst_11017 = (state_11019[(2)]);
var state_11019__$1 = state_11019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11019__$1,inst_11017);
} else {
if((state_val_11020 === (15))){
var state_11019__$1 = state_11019;
var statearr_11026_11055 = state_11019__$1;
(statearr_11026_11055[(2)] = true);

(statearr_11026_11055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (13))){
var state_11019__$1 = state_11019;
var statearr_11027_11056 = state_11019__$1;
(statearr_11027_11056[(2)] = false);

(statearr_11027_11056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (6))){
var state_11019__$1 = state_11019;
var statearr_11028_11057 = state_11019__$1;
(statearr_11028_11057[(2)] = null);

(statearr_11028_11057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (17))){
var inst_11000 = (state_11019[(2)]);
var state_11019__$1 = state_11019;
var statearr_11029_11058 = state_11019__$1;
(statearr_11029_11058[(2)] = inst_11000);

(statearr_11029_11058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (3))){
var state_11019__$1 = state_11019;
if(cljs.core.truth_(setup_container_fn)){
var statearr_11030_11059 = state_11019__$1;
(statearr_11030_11059[(1)] = (5));

} else {
var statearr_11031_11060 = state_11019__$1;
(statearr_11031_11060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (12))){
var inst_10987 = (state_11019[(10)]);
var inst_10992 = inst_10987.cljs$lang$protocol_mask$partition0$;
var inst_10993 = (inst_10992 & (64));
var inst_10994 = inst_10987.cljs$core$ISeq$;
var inst_10995 = (cljs.core.PROTOCOL_SENTINEL === inst_10994);
var inst_10996 = ((inst_10993) || (inst_10995));
var state_11019__$1 = state_11019;
if(cljs.core.truth_(inst_10996)){
var statearr_11032_11061 = state_11019__$1;
(statearr_11032_11061[(1)] = (15));

} else {
var statearr_11033_11062 = state_11019__$1;
(statearr_11033_11062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (2))){
var inst_10964 = cljs.core.async.put_BANG_.call(null,c,"");
var state_11019__$1 = state_11019;
var statearr_11034_11063 = state_11019__$1;
(statearr_11034_11063[(2)] = inst_10964);

(statearr_11034_11063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (19))){
var inst_10987 = (state_11019[(10)]);
var state_11019__$1 = state_11019;
var statearr_11035_11064 = state_11019__$1;
(statearr_11035_11064[(2)] = inst_10987);

(statearr_11035_11064[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (11))){
var inst_10987 = (state_11019[(10)]);
var inst_10987__$1 = (state_11019[(2)]);
var inst_10989 = (inst_10987__$1 == null);
var inst_10990 = cljs.core.not.call(null,inst_10989);
var state_11019__$1 = (function (){var statearr_11036 = state_11019;
(statearr_11036[(10)] = inst_10987__$1);

return statearr_11036;
})();
if(inst_10990){
var statearr_11037_11065 = state_11019__$1;
(statearr_11037_11065[(1)] = (12));

} else {
var statearr_11038_11066 = state_11019__$1;
(statearr_11038_11066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (9))){
var inst_10978 = (state_11019[(2)]);
var inst_10979 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_10980 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_11019__$1 = (function (){var statearr_11039 = state_11019;
(statearr_11039[(11)] = inst_10979);

(statearr_11039[(12)] = inst_10980);

(statearr_11039[(13)] = inst_10978);

return statearr_11039;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (5))){
var inst_10967 = setup_container_fn.call(null,container_id);
var state_11019__$1 = state_11019;
var statearr_11040_11067 = state_11019__$1;
(statearr_11040_11067[(2)] = inst_10967);

(statearr_11040_11067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (14))){
var inst_11003 = (state_11019[(2)]);
var state_11019__$1 = state_11019;
if(cljs.core.truth_(inst_11003)){
var statearr_11041_11068 = state_11019__$1;
(statearr_11041_11068[(1)] = (18));

} else {
var statearr_11042_11069 = state_11019__$1;
(statearr_11042_11069[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (16))){
var state_11019__$1 = state_11019;
var statearr_11043_11070 = state_11019__$1;
(statearr_11043_11070[(2)] = false);

(statearr_11043_11070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11019,null,null,(9),(8));
var inst_10985 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_11019__$1 = state_11019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11019__$1,(11),inst_10985);
} else {
if((state_val_11020 === (18))){
var inst_10987 = (state_11019[(10)]);
var inst_11005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10987);
var state_11019__$1 = state_11019;
var statearr_11044_11071 = state_11019__$1;
(statearr_11044_11071[(2)] = inst_11005);

(statearr_11044_11071[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11020 === (8))){
var inst_11015 = (state_11019[(2)]);
var state_11019__$1 = state_11019;
var statearr_11045_11072 = state_11019__$1;
(statearr_11045_11072[(2)] = inst_11015);

(statearr_11045_11072[(1)] = (4));


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
});})(c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__9985__auto__,c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____0 = (function (){
var statearr_11046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11046[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__);

(statearr_11046[(1)] = (1));

return statearr_11046;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____1 = (function (state_11019){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_11019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e11047){if((e11047 instanceof Object)){
var ex__9989__auto__ = e11047;
var statearr_11048_11073 = state_11019;
(statearr_11048_11073[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11074 = state_11019;
state_11019 = G__11074;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__ = function(state_11019){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____1.call(this,state_11019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__10010__auto__ = (function (){var statearr_11049 = f__10009__auto__.call(null);
(statearr_11049[(6)] = c__10008__auto___11050);

return statearr_11049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto___11050,c,map__10960,map__10960__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.str_eval_prom = (function klipse_clj$lang$clojure$str_eval_prom(exp,p__11076){
var map__11077 = p__11076;
var map__11077__$1 = (((((!((map__11077 == null))))?(((((map__11077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11077):map__11077);
var opts = map__11077__$1;
var verbose = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var p = (new Promise(((function (map__11077,map__11077__$1,opts,verbose){
return (function (resolve,reject){
if(cljs.core.truth_(verbose)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__10008__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto__,map__11077,map__11077__$1,opts,verbose){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto__,map__11077,map__11077__$1,opts,verbose){
return (function (state_11144){
var state_val_11145 = (state_11144[(1)]);
if((state_val_11145 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11144,null,null,(6),(5));
var inst_11092 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11144__$1,(8),inst_11092);
} else {
if((state_val_11145 === (20))){
var inst_11138 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11146_11186 = state_11144__$1;
(statearr_11146_11186[(2)] = inst_11138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (1))){
var inst_11079 = clojure.string.blank_QMARK_.call(null,exp);
var state_11144__$1 = state_11144;
if(inst_11079){
var statearr_11147_11187 = state_11144__$1;
(statearr_11147_11187[(1)] = (2));

} else {
var statearr_11148_11188 = state_11144__$1;
(statearr_11148_11188[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (24))){
var inst_11130 = console.info("[clojure] evaluated",exp);
var state_11144__$1 = state_11144;
var statearr_11149_11189 = state_11144__$1;
(statearr_11149_11189[(2)] = inst_11130);

(statearr_11149_11189[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (4))){
var inst_11142 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11144__$1,inst_11142);
} else {
if((state_val_11145 === (15))){
var inst_11094 = (state_11144[(7)]);
var inst_11112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11094);
var state_11144__$1 = state_11144;
var statearr_11150_11190 = state_11144__$1;
(statearr_11150_11190[(2)] = inst_11112);

(statearr_11150_11190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (21))){
var inst_11116 = (state_11144[(8)]);
var inst_11125 = console.warn(inst_11116);
var state_11144__$1 = state_11144;
var statearr_11151_11191 = state_11144__$1;
(statearr_11151_11191[(2)] = inst_11125);

(statearr_11151_11191[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (13))){
var state_11144__$1 = state_11144;
var statearr_11152_11192 = state_11144__$1;
(statearr_11152_11192[(2)] = false);

(statearr_11152_11192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (22))){
var state_11144__$1 = state_11144;
var statearr_11153_11193 = state_11144__$1;
(statearr_11153_11193[(2)] = null);

(statearr_11153_11193[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (6))){
var inst_11086 = (state_11144[(2)]);
var inst_11087 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_11144__$1 = (function (){var statearr_11154 = state_11144;
(statearr_11154[(9)] = inst_11086);

(statearr_11154[(10)] = inst_11087);

return statearr_11154;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (25))){
var state_11144__$1 = state_11144;
var statearr_11155_11194 = state_11144__$1;
(statearr_11155_11194[(2)] = null);

(statearr_11155_11194[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (17))){
var inst_11117 = (state_11144[(11)]);
var inst_11115 = (state_11144[(2)]);
var inst_11116 = cljs.core.get.call(null,inst_11115,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_11117__$1 = cljs.core.get.call(null,inst_11115,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_11118 = cljs.core.first.call(null,inst_11117__$1);
var inst_11119 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_11118);
var state_11144__$1 = (function (){var statearr_11156 = state_11144;
(statearr_11156[(8)] = inst_11116);

(statearr_11156[(11)] = inst_11117__$1);

return statearr_11156;
})();
if(inst_11119){
var statearr_11157_11195 = state_11144__$1;
(statearr_11157_11195[(1)] = (18));

} else {
var statearr_11158_11196 = state_11144__$1;
(statearr_11158_11196[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (3))){
var inst_11085 = cljs.core._STAR_print_newline_STAR_ = false;
var state_11144__$1 = (function (){var statearr_11159 = state_11144;
(statearr_11159[(12)] = inst_11085);

return statearr_11159;
})();
var statearr_11160_11197 = state_11144__$1;
(statearr_11160_11197[(2)] = null);

(statearr_11160_11197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (12))){
var state_11144__$1 = state_11144;
var statearr_11161_11198 = state_11144__$1;
(statearr_11161_11198[(2)] = true);

(statearr_11161_11198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (2))){
var inst_11081 = resolve.call(null,"");
var state_11144__$1 = state_11144;
var statearr_11162_11199 = state_11144__$1;
(statearr_11162_11199[(2)] = inst_11081);

(statearr_11162_11199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (23))){
var inst_11128 = (state_11144[(2)]);
var state_11144__$1 = (function (){var statearr_11163 = state_11144;
(statearr_11163[(13)] = inst_11128);

return statearr_11163;
})();
if(cljs.core.truth_(verbose)){
var statearr_11164_11200 = state_11144__$1;
(statearr_11164_11200[(1)] = (24));

} else {
var statearr_11165_11201 = state_11144__$1;
(statearr_11165_11201[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (19))){
var inst_11116 = (state_11144[(8)]);
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11116)){
var statearr_11166_11202 = state_11144__$1;
(statearr_11166_11202[(1)] = (21));

} else {
var statearr_11167_11203 = state_11144__$1;
(statearr_11167_11203[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (11))){
var inst_11110 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11110)){
var statearr_11168_11204 = state_11144__$1;
(statearr_11168_11204[(1)] = (15));

} else {
var statearr_11169_11205 = state_11144__$1;
(statearr_11169_11205[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (9))){
var inst_11094 = (state_11144[(7)]);
var inst_11099 = inst_11094.cljs$lang$protocol_mask$partition0$;
var inst_11100 = (inst_11099 & (64));
var inst_11101 = inst_11094.cljs$core$ISeq$;
var inst_11102 = (cljs.core.PROTOCOL_SENTINEL === inst_11101);
var inst_11103 = ((inst_11100) || (inst_11102));
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11103)){
var statearr_11170_11206 = state_11144__$1;
(statearr_11170_11206[(1)] = (12));

} else {
var statearr_11171_11207 = state_11144__$1;
(statearr_11171_11207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (5))){
var inst_11140 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11172_11208 = state_11144__$1;
(statearr_11172_11208[(2)] = inst_11140);

(statearr_11172_11208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (14))){
var inst_11107 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11173_11209 = state_11144__$1;
(statearr_11173_11209[(2)] = inst_11107);

(statearr_11173_11209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (26))){
var inst_11117 = (state_11144[(11)]);
var inst_11133 = (state_11144[(2)]);
var inst_11134 = cljs.core.second.call(null,inst_11117);
var inst_11135 = clojure.string.trim_newline.call(null,inst_11134);
var inst_11136 = resolve.call(null,inst_11135);
var state_11144__$1 = (function (){var statearr_11174 = state_11144;
(statearr_11174[(14)] = inst_11133);

return statearr_11174;
})();
var statearr_11175_11210 = state_11144__$1;
(statearr_11175_11210[(2)] = inst_11136);

(statearr_11175_11210[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (16))){
var inst_11094 = (state_11144[(7)]);
var state_11144__$1 = state_11144;
var statearr_11176_11211 = state_11144__$1;
(statearr_11176_11211[(2)] = inst_11094);

(statearr_11176_11211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (10))){
var state_11144__$1 = state_11144;
var statearr_11177_11212 = state_11144__$1;
(statearr_11177_11212[(2)] = false);

(statearr_11177_11212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (18))){
var inst_11117 = (state_11144[(11)]);
var inst_11121 = cljs.core.second.call(null,inst_11117);
var inst_11122 = reject.call(null,inst_11121);
var state_11144__$1 = state_11144;
var statearr_11178_11213 = state_11144__$1;
(statearr_11178_11213[(2)] = inst_11122);

(statearr_11178_11213[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (8))){
var inst_11094 = (state_11144[(7)]);
var inst_11094__$1 = (state_11144[(2)]);
var inst_11096 = (inst_11094__$1 == null);
var inst_11097 = cljs.core.not.call(null,inst_11096);
var state_11144__$1 = (function (){var statearr_11179 = state_11144;
(statearr_11179[(7)] = inst_11094__$1);

return statearr_11179;
})();
if(inst_11097){
var statearr_11180_11214 = state_11144__$1;
(statearr_11180_11214[(1)] = (9));

} else {
var statearr_11181_11215 = state_11144__$1;
(statearr_11181_11215[(1)] = (10));

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
}
});})(c__10008__auto__,map__11077,map__11077__$1,opts,verbose))
;
return ((function (switch__9985__auto__,c__10008__auto__,map__11077,map__11077__$1,opts,verbose){
return (function() {
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____0 = (function (){
var statearr_11182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11182[(0)] = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__);

(statearr_11182[(1)] = (1));

return statearr_11182;
});
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____1 = (function (state_11144){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_11144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e11183){if((e11183 instanceof Object)){
var ex__9989__auto__ = e11183;
var statearr_11184_11216 = state_11144;
(statearr_11184_11216[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11217 = state_11144;
state_11144 = G__11217;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__ = function(state_11144){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____1.call(this,state_11144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____0;
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto____1;
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto__,map__11077,map__11077__$1,opts,verbose))
})();
var state__10010__auto__ = (function (){var statearr_11185 = f__10009__auto__.call(null);
(statearr_11185[(6)] = c__10008__auto__);

return statearr_11185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto__,map__11077,map__11077__$1,opts,verbose))
);

return c__10008__auto__;
});})(map__11077,map__11077__$1,opts,verbose))
));
return p;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__11219 = arguments.length;
switch (G__11219) {
case 1:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.eval_async_prepl.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c = cljs.core.async.chan.call(null);
var c__10008__auto___11249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10008__auto___11249,c){
return (function (){
var f__10009__auto__ = (function (){var switch__9985__auto__ = ((function (c__10008__auto___11249,c){
return (function (state_11238){
var state_val_11239 = (state_11238[(1)]);
if((state_val_11239 === (1))){
var inst_11222 = (function (){var _STAR_print_fn_STAR__orig_val__11220 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_fn_STAR__orig_val__11220,state_val_11239,c__10008__auto___11249,c){
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
;})(_STAR_print_fn_STAR__orig_val__11220,state_val_11239,c__10008__auto___11249,c))
})();
var inst_11223 = cljs.core._STAR_print_fn_STAR_ = inst_11222;
var state_11238__$1 = (function (){var statearr_11240 = state_11238;
(statearr_11240[(7)] = inst_11223);

return statearr_11240;
})();
var statearr_11241_11250 = state_11238__$1;
(statearr_11241_11250[(2)] = null);

(statearr_11241_11250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (2))){
var inst_11236 = (state_11238[(2)]);
var state_11238__$1 = state_11238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11238__$1,inst_11236);
} else {
if((state_val_11239 === (3))){
var inst_11224 = (state_11238[(2)]);
var inst_11225 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var state_11238__$1 = (function (){var statearr_11242 = state_11238;
(statearr_11242[(8)] = inst_11225);

(statearr_11242[(9)] = inst_11224);

return statearr_11242;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11239 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11238,null,null,(3),(2));
var inst_11229 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_11230 = cljs.core.first.call(null,inst_11229);
var state_11238__$1 = state_11238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11238__$1,(5),inst_11230);
} else {
if((state_val_11239 === (5))){
var inst_11232 = (state_11238[(2)]);
var inst_11233 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_11232,opts);
var inst_11234 = cljs.core.async.put_BANG_.call(null,c,inst_11233);
var state_11238__$1 = state_11238;
var statearr_11243_11251 = state_11238__$1;
(statearr_11243_11251[(2)] = inst_11234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__10008__auto___11249,c))
;
return ((function (switch__9985__auto__,c__10008__auto___11249,c){
return (function() {
var klipse_clj$lang$clojure$state_machine__9986__auto__ = null;
var klipse_clj$lang$clojure$state_machine__9986__auto____0 = (function (){
var statearr_11244 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11244[(0)] = klipse_clj$lang$clojure$state_machine__9986__auto__);

(statearr_11244[(1)] = (1));

return statearr_11244;
});
var klipse_clj$lang$clojure$state_machine__9986__auto____1 = (function (state_11238){
while(true){
var ret_value__9987__auto__ = (function (){try{while(true){
var result__9988__auto__ = switch__9985__auto__.call(null,state_11238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9988__auto__;
}
break;
}
}catch (e11245){if((e11245 instanceof Object)){
var ex__9989__auto__ = e11245;
var statearr_11246_11252 = state_11238;
(statearr_11246_11252[(5)] = ex__9989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11253 = state_11238;
state_11238 = G__11253;
continue;
} else {
return ret_value__9987__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__9986__auto__ = function(state_11238){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__9986__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__9986__auto____1.call(this,state_11238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__9986__auto____0;
klipse_clj$lang$clojure$state_machine__9986__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__9986__auto____1;
return klipse_clj$lang$clojure$state_machine__9986__auto__;
})()
;})(switch__9985__auto__,c__10008__auto___11249,c))
})();
var state__10010__auto__ = (function (){var statearr_11247 = f__10009__auto__.call(null);
(statearr_11247[(6)] = c__10008__auto___11249);

return statearr_11247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10010__auto__);
});})(c__10008__auto___11249,c))
);


return c;
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
