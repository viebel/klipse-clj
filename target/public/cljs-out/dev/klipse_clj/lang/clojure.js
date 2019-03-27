// Compiled by ClojureScript 1.10.516 {}
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
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26473){
var state_val_26474 = (state_26473[(1)]);
if((state_val_26474 === (7))){
var inst_26469 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26475_26501 = state_26473__$1;
(statearr_26475_26501[(2)] = inst_26469);

(statearr_26475_26501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (1))){
var inst_26412 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(2),inst_26412);
} else {
if((state_val_26474 === (4))){
var inst_26471 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26473__$1,inst_26471);
} else {
if((state_val_26474 === (15))){
var inst_26443 = (state_26473[(7)]);
var inst_26460 = (state_26473[(2)]);
var inst_26461 = cljs.core.next.call(null,inst_26443);
var inst_26423 = inst_26461;
var inst_26424 = null;
var inst_26425 = (0);
var inst_26426 = (0);
var state_26473__$1 = (function (){var statearr_26476 = state_26473;
(statearr_26476[(8)] = inst_26460);

(statearr_26476[(9)] = inst_26423);

(statearr_26476[(10)] = inst_26426);

(statearr_26476[(11)] = inst_26424);

(statearr_26476[(12)] = inst_26425);

return statearr_26476;
})();
var statearr_26477_26502 = state_26473__$1;
(statearr_26477_26502[(2)] = null);

(statearr_26477_26502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (13))){
var inst_26443 = (state_26473[(7)]);
var inst_26452 = cljs.core.first.call(null,inst_26443);
var inst_26453 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_26454 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26455 = [inst_26454,klipse_clj.repl.current_ns_eval];
var inst_26456 = cljs.core.PersistentHashMap.fromArrays(inst_26453,inst_26455);
var inst_26457 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_26452,inst_26456);
var inst_26458 = cljs.core.first.call(null,inst_26457);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(15),inst_26458);
} else {
if((state_val_26474 === (6))){
var inst_26423 = (state_26473[(9)]);
var inst_26443 = (state_26473[(7)]);
var inst_26443__$1 = cljs.core.seq.call(null,inst_26423);
var state_26473__$1 = (function (){var statearr_26478 = state_26473;
(statearr_26478[(7)] = inst_26443__$1);

return statearr_26478;
})();
if(inst_26443__$1){
var statearr_26479_26503 = state_26473__$1;
(statearr_26479_26503[(1)] = (9));

} else {
var statearr_26480_26504 = state_26473__$1;
(statearr_26480_26504[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (3))){
var inst_26426 = (state_26473[(10)]);
var inst_26425 = (state_26473[(12)]);
var inst_26428 = (inst_26426 < inst_26425);
var inst_26429 = inst_26428;
var state_26473__$1 = state_26473;
if(cljs.core.truth_(inst_26429)){
var statearr_26481_26505 = state_26473__$1;
(statearr_26481_26505[(1)] = (5));

} else {
var statearr_26482_26506 = state_26473__$1;
(statearr_26482_26506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (12))){
var inst_26443 = (state_26473[(7)]);
var inst_26447 = cljs.core.chunk_first.call(null,inst_26443);
var inst_26448 = cljs.core.chunk_rest.call(null,inst_26443);
var inst_26449 = cljs.core.count.call(null,inst_26447);
var inst_26423 = inst_26448;
var inst_26424 = inst_26447;
var inst_26425 = inst_26449;
var inst_26426 = (0);
var state_26473__$1 = (function (){var statearr_26483 = state_26473;
(statearr_26483[(9)] = inst_26423);

(statearr_26483[(10)] = inst_26426);

(statearr_26483[(11)] = inst_26424);

(statearr_26483[(12)] = inst_26425);

return statearr_26483;
})();
var statearr_26484_26507 = state_26473__$1;
(statearr_26484_26507[(2)] = null);

(statearr_26484_26507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (2))){
var inst_26414 = (state_26473[(2)]);
var inst_26419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26420 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_26421 = (new cljs.core.PersistentVector(null,2,(5),inst_26419,inst_26420,null));
var inst_26422 = cljs.core.seq.call(null,inst_26421);
var inst_26423 = inst_26422;
var inst_26424 = null;
var inst_26425 = (0);
var inst_26426 = (0);
var state_26473__$1 = (function (){var statearr_26485 = state_26473;
(statearr_26485[(9)] = inst_26423);

(statearr_26485[(10)] = inst_26426);

(statearr_26485[(11)] = inst_26424);

(statearr_26485[(13)] = inst_26414);

(statearr_26485[(12)] = inst_26425);

return statearr_26485;
})();
var statearr_26486_26508 = state_26473__$1;
(statearr_26486_26508[(2)] = null);

(statearr_26486_26508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (11))){
var inst_26467 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26487_26509 = state_26473__$1;
(statearr_26487_26509[(2)] = inst_26467);

(statearr_26487_26509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (9))){
var inst_26443 = (state_26473[(7)]);
var inst_26445 = cljs.core.chunked_seq_QMARK_.call(null,inst_26443);
var state_26473__$1 = state_26473;
if(inst_26445){
var statearr_26488_26510 = state_26473__$1;
(statearr_26488_26510[(1)] = (12));

} else {
var statearr_26489_26511 = state_26473__$1;
(statearr_26489_26511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (5))){
var inst_26426 = (state_26473[(10)]);
var inst_26424 = (state_26473[(11)]);
var inst_26431 = cljs.core._nth.call(null,inst_26424,inst_26426);
var inst_26432 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_26433 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26434 = [inst_26433,klipse_clj.repl.current_ns_eval];
var inst_26435 = cljs.core.PersistentHashMap.fromArrays(inst_26432,inst_26434);
var inst_26436 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_26431,inst_26435);
var inst_26437 = cljs.core.first.call(null,inst_26436);
var state_26473__$1 = state_26473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26473__$1,(8),inst_26437);
} else {
if((state_val_26474 === (14))){
var inst_26464 = (state_26473[(2)]);
var state_26473__$1 = state_26473;
var statearr_26493_26512 = state_26473__$1;
(statearr_26493_26512[(2)] = inst_26464);

(statearr_26493_26512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (10))){
var state_26473__$1 = state_26473;
var statearr_26494_26513 = state_26473__$1;
(statearr_26494_26513[(2)] = null);

(statearr_26494_26513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26474 === (8))){
var inst_26423 = (state_26473[(9)]);
var inst_26426 = (state_26473[(10)]);
var inst_26424 = (state_26473[(11)]);
var inst_26425 = (state_26473[(12)]);
var inst_26439 = (state_26473[(2)]);
var inst_26440 = (inst_26426 + (1));
var tmp26490 = inst_26423;
var tmp26491 = inst_26424;
var tmp26492 = inst_26425;
var inst_26423__$1 = tmp26490;
var inst_26424__$1 = tmp26491;
var inst_26425__$1 = tmp26492;
var inst_26426__$1 = inst_26440;
var state_26473__$1 = (function (){var statearr_26495 = state_26473;
(statearr_26495[(9)] = inst_26423__$1);

(statearr_26495[(10)] = inst_26426__$1);

(statearr_26495[(11)] = inst_26424__$1);

(statearr_26495[(12)] = inst_26425__$1);

(statearr_26495[(14)] = inst_26439);

return statearr_26495;
})();
var statearr_26496_26514 = state_26473__$1;
(statearr_26496_26514[(2)] = null);

(statearr_26496_26514[(1)] = (3));


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
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____0 = (function (){
var statearr_26497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26497[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__);

(statearr_26497[(1)] = (1));

return statearr_26497;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____1 = (function (state_26473){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26498){if((e26498 instanceof Object)){
var ex__11673__auto__ = e26498;
var statearr_26499_26515 = state_26473;
(statearr_26499_26515[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26516 = state_26473;
state_26473 = G__26516;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__ = function(state_26473){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____1.call(this,state_26473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26500 = f__11693__auto__.call(null);
(statearr_26500[(6)] = c__11692__auto__);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26519){
var state_val_26520 = (state_26519[(1)]);
if((state_val_26520 === (1))){
var inst_26517 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_26519__$1 = state_26519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26519__$1,inst_26517);
} else {
return null;
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____0 = (function (){
var statearr_26521 = [null,null,null,null,null,null,null];
(statearr_26521[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__);

(statearr_26521[(1)] = (1));

return statearr_26521;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____1 = (function (state_26519){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26522){if((e26522 instanceof Object)){
var ex__11673__auto__ = e26522;
var statearr_26523_26525 = state_26519;
(statearr_26523_26525[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26526 = state_26519;
state_26519 = G__26526;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__ = function(state_26519){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____1.call(this,state_26519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26524 = f__11693__auto__.call(null);
(statearr_26524[(6)] = c__11692__auto__);

return statearr_26524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
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
}catch (e26527){if((e26527 instanceof Object)){
var e = e26527;

return e;
} else {
throw e26527;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__26528){
var map__26529 = p__26528;
var map__26529__$1 = (((((!((map__26529 == null))))?(((((map__26529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529):map__26529);
var print_length = cljs.core.get.call(null,map__26529__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__26529__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__26532 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__26533 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__26533;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26534_26538 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26535_26539 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26536_26540 = true;
var _STAR_print_fn_STAR__temp_val__26537_26541 = ((function (_STAR_print_newline_STAR__orig_val__26534_26538,_STAR_print_fn_STAR__orig_val__26535_26539,_STAR_print_newline_STAR__temp_val__26536_26540,sb__4661__auto__,_STAR_print_length_STAR__orig_val__26532,_STAR_print_length_STAR__temp_val__26533,map__26529,map__26529__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26534_26538,_STAR_print_fn_STAR__orig_val__26535_26539,_STAR_print_newline_STAR__temp_val__26536_26540,sb__4661__auto__,_STAR_print_length_STAR__orig_val__26532,_STAR_print_length_STAR__temp_val__26533,map__26529,map__26529__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26536_26540;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26537_26541;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26535_26539;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26534_26538;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__26532;
}}catch (e26531){if((e26531 instanceof Object)){
var e = e26531;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e26531;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__26542,verbose_QMARK_,current_ns){
var map__26543 = p__26542;
var map__26543__$1 = (((((!((map__26543 == null))))?(((((map__26543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26543):map__26543);
var ns = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__26545,opts){
var map__26546 = p__26545;
var map__26546__$1 = (((((!((map__26546 == null))))?(((((map__26546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26546):map__26546);
var args = map__26546__$1;
var ns = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26546__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__26548){
var map__26549 = p__26548;
var map__26549__$1 = (((((!((map__26549 == null))))?(((((map__26549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26549):map__26549);
var args = map__26549__$1;
var ns = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),(cljs.core.truth_(error)?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"form","form",-1624062471),form_str,new cljs.core.Keyword(null,"ret","ret",-468222814),(cljs.core.truth_(error)?error:value)], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__26551){
var map__26552 = p__26551;
var map__26552__$1 = (((((!((map__26552 == null))))?(((((map__26552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26552):map__26552);
var form = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__26552__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__26554){
var map__26555 = p__26554;
var map__26555__$1 = (((((!((map__26555 == null))))?(((((map__26555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26555):map__26555);
var foo = map__26555__$1;
var value = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__26557){
var map__26558 = p__26557;
var map__26558__$1 = (((((!((map__26558 == null))))?(((((map__26558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26558):map__26558);
var args = map__26558__$1;
var file = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__26560){
var map__26561 = p__26560;
var map__26561__$1 = (((((!((map__26561 == null))))?(((((map__26561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26561):map__26561);
var source = cljs.core.get.call(null,map__26561__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__26563){
var map__26564 = p__26563;
var map__26564__$1 = (((((!((map__26564 == null))))?(((((map__26564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26564):map__26564);
var static_fns = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__26564,map__26564__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__26564,map__26564__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.warning_handler = (function klipse_clj$lang$clojure$warning_handler(c,warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5720__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
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
var c__11692__auto___26597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto___26597,d){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto___26597,d){
return (function (state_26582){
var state_val_26583 = (state_26582[(1)]);
if((state_val_26583 === (1))){
var inst_26566 = cljs.core.PersistentVector.EMPTY;
var inst_26567 = inst_26566;
var state_26582__$1 = (function (){var statearr_26584 = state_26582;
(statearr_26584[(7)] = inst_26567);

return statearr_26584;
})();
var statearr_26585_26598 = state_26582__$1;
(statearr_26585_26598[(2)] = null);

(statearr_26585_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (2))){
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26582__$1,(4),c);
} else {
if((state_val_26583 === (3))){
var inst_26580 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26582__$1,inst_26580);
} else {
if((state_val_26583 === (4))){
var inst_26570 = (state_26582[(8)]);
var inst_26570__$1 = (state_26582[(2)]);
var inst_26571 = (inst_26570__$1 == null);
var state_26582__$1 = (function (){var statearr_26586 = state_26582;
(statearr_26586[(8)] = inst_26570__$1);

return statearr_26586;
})();
if(cljs.core.truth_(inst_26571)){
var statearr_26587_26599 = state_26582__$1;
(statearr_26587_26599[(1)] = (5));

} else {
var statearr_26588_26600 = state_26582__$1;
(statearr_26588_26600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (5))){
var inst_26567 = (state_26582[(7)]);
var inst_26573 = cljs.core.async.put_BANG_.call(null,d,inst_26567);
var state_26582__$1 = state_26582;
var statearr_26589_26601 = state_26582__$1;
(statearr_26589_26601[(2)] = inst_26573);

(statearr_26589_26601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (6))){
var inst_26567 = (state_26582[(7)]);
var inst_26570 = (state_26582[(8)]);
var inst_26575 = cljs.core.conj.call(null,inst_26567,inst_26570);
var inst_26567__$1 = inst_26575;
var state_26582__$1 = (function (){var statearr_26590 = state_26582;
(statearr_26590[(7)] = inst_26567__$1);

return statearr_26590;
})();
var statearr_26591_26602 = state_26582__$1;
(statearr_26591_26602[(2)] = null);

(statearr_26591_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26583 === (7))){
var inst_26578 = (state_26582[(2)]);
var state_26582__$1 = state_26582;
var statearr_26592_26603 = state_26582__$1;
(statearr_26592_26603[(2)] = inst_26578);

(statearr_26592_26603[(1)] = (3));


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
});})(c__11692__auto___26597,d))
;
return ((function (switch__11669__auto__,c__11692__auto___26597,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____1 = (function (state_26582){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26594){if((e26594 instanceof Object)){
var ex__11673__auto__ = e26594;
var statearr_26595_26604 = state_26582;
(statearr_26595_26604[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26605 = state_26582;
state_26582 = G__26605;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__ = function(state_26582){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____1.call(this,state_26582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto___26597,d))
})();
var state__11694__auto__ = (function (){var statearr_26596 = f__11693__auto__.call(null);
(statearr_26596[(6)] = c__11692__auto___26597);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto___26597,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__26606){
var map__26607 = p__26606;
var map__26607__$1 = (((((!((map__26607 == null))))?(((((map__26607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26607):map__26607);
var static_fns = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__26607__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__26609 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__26610 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__26610;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (state_26619){
var state_val_26620 = (state_26619[(1)]);
if((state_val_26620 === (1))){
var inst_26611 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26619__$1,(2),inst_26611);
} else {
if((state_val_26620 === (2))){
var inst_26613 = (state_26619[(2)]);
var inst_26614 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_26615 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_26616 = clojure.string.join.call(null,"",inst_26613);
var inst_26617 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_26616);
var state_26619__$1 = (function (){var statearr_26621 = state_26619;
(statearr_26621[(7)] = inst_26614);

(statearr_26621[(8)] = inst_26615);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26619__$1,inst_26617);
} else {
return null;
}
}
});})(c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
;
return ((function (switch__11669__auto__,c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____0 = (function (){
var statearr_26622 = [null,null,null,null,null,null,null,null,null];
(statearr_26622[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__);

(statearr_26622[(1)] = (1));

return statearr_26622;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____1 = (function (state_26619){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object)){
var ex__11673__auto__ = e26623;
var statearr_26624_26626 = state_26619;
(statearr_26624_26626[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26619;
state_26619 = G__26627;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__ = function(state_26619){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____1.call(this,state_26619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
})();
var state__11694__auto__ = (function (){var statearr_26625 = f__11693__auto__.call(null);
(statearr_26625[(6)] = c__11692__auto__);

return statearr_26625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return c__11692__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__26609,_STAR_cljs_warning_handlers_STAR__temp_val__26610,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__26607,map__26607__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__26609;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__26628 = cljs.core.conj.call(null,res,ch);
res = G__26628;
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
var _STAR_alias_map_STAR__orig_val__26629 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__26630 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__26631 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__26632 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__26633 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__26634 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__26635 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__26636 = ns;
var _STAR_cljs_ns_STAR__temp_val__26637 = ns;
var _STAR_compiler_STAR__temp_val__26638 = st;
var resolve_symbol_temp_val__26639 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__26640 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__26635;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__26636;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__26637;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__26638;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__26639;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__26640;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__26634;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__26633;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__26632;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__26631;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__26630;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__26629;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__26644 = arguments.length;
switch (G__26644) {
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
var _STAR_alias_map_STAR__orig_val__26645 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__26646 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__26647 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__26648 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__26649 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__26650 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__26651 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__26652 = ns;
var _STAR_cljs_ns_STAR__temp_val__26653 = ns;
var _STAR_compiler_STAR__temp_val__26654 = st;
var resolve_symbol_temp_val__26655 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__26656 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__26651;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__26652;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__26653;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__26654;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__26655;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__26656;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__26650;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__26649;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__26648;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__26647;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__26646;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__26645;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__26661 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__26661,(0),null);
var rest_s = cljs.core.nth.call(null,vec__26661,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__26664 = rest_s;
var G__26665 = res;
s__$1 = G__26664;
res = G__26665;
continue;
} else {
var G__26666 = rest_s;
var G__26667 = cljs.core.conj.call(null,res,exp);
s__$1 = G__26666;
res = G__26667;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__26668){
var map__26669 = p__26668;
var map__26669__$1 = (((((!((map__26669 == null))))?(((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26669):map__26669);
var result_element = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__26669__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__11692__auto___26774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto___26774,res_chan,warnings_chan){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto___26774,res_chan,warnings_chan){
return (function (state_26746){
var state_val_26747 = (state_26746[(1)]);
if((state_val_26747 === (7))){
var inst_26742 = (state_26746[(2)]);
var state_26746__$1 = state_26746;
var statearr_26748_26775 = state_26746__$1;
(statearr_26748_26775[(2)] = inst_26742);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (1))){
var state_26746__$1 = state_26746;
var statearr_26749_26776 = state_26746__$1;
(statearr_26749_26776[(2)] = null);

(statearr_26749_26776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26746,(3),Object,null,(2));
var inst_26684 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_26746__$1 = state_26746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,(5),inst_26684);
} else {
if((state_val_26747 === (15))){
var inst_26701 = (state_26746[(7)]);
var inst_26729 = (state_26746[(8)]);
var inst_26720 = (state_26746[(9)]);
var inst_26731 = (state_26746[(2)]);
var inst_26732 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26701),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26731)].join('');
var inst_26699 = inst_26729;
var inst_26700 = inst_26720;
var inst_26701__$1 = inst_26732;
var state_26746__$1 = (function (){var statearr_26750 = state_26746;
(statearr_26750[(7)] = inst_26701__$1);

(statearr_26750[(10)] = inst_26700);

(statearr_26750[(11)] = inst_26699);

return statearr_26750;
})();
var statearr_26751_26777 = state_26746__$1;
(statearr_26751_26777[(2)] = null);

(statearr_26751_26777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (13))){
var inst_26707 = (state_26746[(12)]);
var inst_26718 = (state_26746[(13)]);
var inst_26727 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26728 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_26729 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_26707,inst_26727,inst_26728);
var state_26746__$1 = (function (){var statearr_26752 = state_26746;
(statearr_26752[(8)] = inst_26729);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,(15),inst_26718);
} else {
if((state_val_26747 === (6))){
var inst_26699 = (state_26746[(11)]);
var inst_26706 = (state_26746[(14)]);
var inst_26706__$1 = cljs.core.nth.call(null,inst_26699,(0),null);
var inst_26707 = cljs.core.nth.call(null,inst_26699,(1),null);
var inst_26708 = cljs.core.empty_QMARK_.call(null,inst_26706__$1);
var inst_26709 = (!(inst_26708));
var state_26746__$1 = (function (){var statearr_26753 = state_26746;
(statearr_26753[(12)] = inst_26707);

(statearr_26753[(14)] = inst_26706__$1);

return statearr_26753;
})();
if(inst_26709){
var statearr_26754_26778 = state_26746__$1;
(statearr_26754_26778[(1)] = (8));

} else {
var statearr_26755_26779 = state_26746__$1;
(statearr_26755_26779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (3))){
var inst_26671 = (state_26746[(2)]);
var inst_26672 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_26673 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26674 = [inst_26671];
var inst_26675 = cljs.core.PersistentHashMap.fromArrays(inst_26673,inst_26674);
var inst_26676 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26675);
var inst_26677 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26678 = [inst_26671];
var inst_26679 = cljs.core.PersistentHashMap.fromArrays(inst_26677,inst_26678);
var inst_26680 = klipse_clj.lang.clojure.populate_err.call(null,inst_26679,opts);
var state_26746__$1 = (function (){var statearr_26756 = state_26746;
(statearr_26756[(15)] = inst_26676);

(statearr_26756[(16)] = inst_26672);

return statearr_26756;
})();
var statearr_26757_26780 = state_26746__$1;
(statearr_26757_26780[(2)] = inst_26680);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (12))){
var inst_26720 = (state_26746[(9)]);
var inst_26723 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_26724 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26720);
var inst_26725 = klipse_clj.lang.clojure.populate_err.call(null,inst_26720,opts);
var state_26746__$1 = (function (){var statearr_26758 = state_26746;
(statearr_26758[(17)] = inst_26724);

(statearr_26758[(18)] = inst_26723);

return statearr_26758;
})();
var statearr_26759_26781 = state_26746__$1;
(statearr_26759_26781[(2)] = inst_26725);

(statearr_26759_26781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (2))){
var inst_26744 = (state_26746[(2)]);
var state_26746__$1 = state_26746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26746__$1,inst_26744);
} else {
if((state_val_26747 === (11))){
var inst_26720 = (state_26746[(9)]);
var inst_26720__$1 = (state_26746[(2)]);
var inst_26721 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_26720__$1);
var state_26746__$1 = (function (){var statearr_26760 = state_26746;
(statearr_26760[(9)] = inst_26720__$1);

return statearr_26760;
})();
if(cljs.core.truth_(inst_26721)){
var statearr_26761_26782 = state_26746__$1;
(statearr_26761_26782[(1)] = (12));

} else {
var statearr_26762_26783 = state_26746__$1;
(statearr_26762_26783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (9))){
var inst_26701 = (state_26746[(7)]);
var inst_26700 = (state_26746[(10)]);
var inst_26737 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_26701);
var inst_26738 = cljs.core.async.put_BANG_.call(null,res_chan,inst_26700);
var state_26746__$1 = (function (){var statearr_26763 = state_26746;
(statearr_26763[(19)] = inst_26737);

return statearr_26763;
})();
var statearr_26764_26784 = state_26746__$1;
(statearr_26764_26784[(2)] = inst_26738);

(statearr_26764_26784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (5))){
var inst_26686 = (state_26746[(2)]);
var inst_26694 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26695 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_26696 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_26694,inst_26695);
var inst_26697 = cljs.core.nth.call(null,inst_26696,(0),null);
var inst_26698 = cljs.core.nth.call(null,inst_26696,(1),null);
var inst_26699 = inst_26696;
var inst_26700 = null;
var inst_26701 = "";
var state_26746__$1 = (function (){var statearr_26765 = state_26746;
(statearr_26765[(20)] = inst_26686);

(statearr_26765[(21)] = inst_26698);

(statearr_26765[(7)] = inst_26701);

(statearr_26765[(10)] = inst_26700);

(statearr_26765[(11)] = inst_26699);

(statearr_26765[(22)] = inst_26697);

return statearr_26765;
})();
var statearr_26766_26785 = state_26746__$1;
(statearr_26766_26785[(2)] = null);

(statearr_26766_26785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (14))){
var inst_26735 = (state_26746[(2)]);
var state_26746__$1 = state_26746;
var statearr_26767_26786 = state_26746__$1;
(statearr_26767_26786[(2)] = inst_26735);

(statearr_26767_26786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (10))){
var inst_26740 = (state_26746[(2)]);
var state_26746__$1 = state_26746;
var statearr_26768_26787 = state_26746__$1;
(statearr_26768_26787[(2)] = inst_26740);

(statearr_26768_26787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26747 === (8))){
var inst_26706 = (state_26746[(14)]);
var inst_26714 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_26715 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_26714,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_26716 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_26706,inst_26715);
var inst_26717 = cljs.core.nth.call(null,inst_26716,(0),null);
var inst_26718 = cljs.core.nth.call(null,inst_26716,(1),null);
var state_26746__$1 = (function (){var statearr_26769 = state_26746;
(statearr_26769[(13)] = inst_26718);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26746__$1,(11),inst_26717);
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
});})(c__11692__auto___26774,res_chan,warnings_chan))
;
return ((function (switch__11669__auto__,c__11692__auto___26774,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____0 = (function (){
var statearr_26770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26770[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__);

(statearr_26770[(1)] = (1));

return statearr_26770;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____1 = (function (state_26746){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26771){if((e26771 instanceof Object)){
var ex__11673__auto__ = e26771;
var statearr_26772_26788 = state_26746;
(statearr_26772_26788[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26789 = state_26746;
state_26746 = G__26789;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__ = function(state_26746){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____1.call(this,state_26746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto___26774,res_chan,warnings_chan))
})();
var state__11694__auto__ = (function (){var statearr_26773 = f__11693__auto__.call(null);
(statearr_26773[(6)] = c__11692__auto___26774);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto___26774,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26847){
var state_val_26848 = (state_26847[(1)]);
if((state_val_26848 === (7))){
var inst_26815 = (state_26847[(7)]);
var inst_26820 = klipse_clj.repl.create_state_compile.call(null);
var inst_26821 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_26820,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_26822 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_26815,inst_26821);
var state_26847__$1 = state_26847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26847__$1,(10),inst_26822);
} else {
if((state_val_26848 === (1))){
var state_26847__$1 = state_26847;
var statearr_26849_26870 = state_26847__$1;
(statearr_26849_26870[(2)] = null);

(statearr_26849_26870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26847,(3),Object,null,(2));
var inst_26804 = klipse_clj.repl.create_state_compile.call(null);
var inst_26805 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_26806 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_26804,inst_26805);
var inst_26807 = cljs.core.nth.call(null,inst_26806,(0),null);
var inst_26808 = cljs.core.nth.call(null,inst_26806,(1),null);
var inst_26809 = inst_26806;
var inst_26810 = "";
var state_26847__$1 = (function (){var statearr_26850 = state_26847;
(statearr_26850[(8)] = inst_26807);

(statearr_26850[(9)] = inst_26810);

(statearr_26850[(10)] = inst_26808);

(statearr_26850[(11)] = inst_26809);

return statearr_26850;
})();
var statearr_26851_26871 = state_26847__$1;
(statearr_26851_26871[(2)] = null);

(statearr_26851_26871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (13))){
var inst_26835 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
var statearr_26852_26872 = state_26847__$1;
(statearr_26852_26872[(2)] = inst_26835);

(statearr_26852_26872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (6))){
var inst_26843 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
var statearr_26853_26873 = state_26847__$1;
(statearr_26853_26873[(2)] = inst_26843);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (3))){
var inst_26790 = (state_26847[(2)]);
var inst_26791 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_26792 = [inst_26790];
var inst_26793 = cljs.core.PersistentHashMap.fromArrays(inst_26791,inst_26792);
var state_26847__$1 = state_26847;
var statearr_26854_26874 = state_26847__$1;
(statearr_26854_26874[(2)] = inst_26793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26847__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (12))){
var inst_26810 = (state_26847[(9)]);
var inst_26816 = (state_26847[(12)]);
var inst_26824 = (state_26847[(13)]);
var inst_26828 = klipse_clj.repl.create_state_compile.call(null);
var inst_26829 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_26830 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_26816,inst_26828,inst_26829);
var inst_26831 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_26824);
var inst_26832 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26810),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26831)].join('');
var inst_26809 = inst_26830;
var inst_26810__$1 = inst_26832;
var state_26847__$1 = (function (){var statearr_26855 = state_26847;
(statearr_26855[(9)] = inst_26810__$1);

(statearr_26855[(11)] = inst_26809);

return statearr_26855;
})();
var statearr_26856_26875 = state_26847__$1;
(statearr_26856_26875[(2)] = null);

(statearr_26856_26875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (2))){
var inst_26845 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26847__$1,inst_26845);
} else {
if((state_val_26848 === (11))){
var inst_26824 = (state_26847[(13)]);
var state_26847__$1 = state_26847;
var statearr_26857_26876 = state_26847__$1;
(statearr_26857_26876[(2)] = inst_26824);

(statearr_26857_26876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (9))){
var inst_26841 = (state_26847[(2)]);
var state_26847__$1 = state_26847;
var statearr_26858_26877 = state_26847__$1;
(statearr_26858_26877[(2)] = inst_26841);

(statearr_26858_26877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (5))){
var inst_26815 = (state_26847[(7)]);
var inst_26809 = (state_26847[(11)]);
var inst_26815__$1 = cljs.core.nth.call(null,inst_26809,(0),null);
var inst_26816 = cljs.core.nth.call(null,inst_26809,(1),null);
var inst_26817 = cljs.core.empty_QMARK_.call(null,inst_26815__$1);
var inst_26818 = (!(inst_26817));
var state_26847__$1 = (function (){var statearr_26859 = state_26847;
(statearr_26859[(7)] = inst_26815__$1);

(statearr_26859[(12)] = inst_26816);

return statearr_26859;
})();
if(inst_26818){
var statearr_26860_26878 = state_26847__$1;
(statearr_26860_26878[(1)] = (7));

} else {
var statearr_26861_26879 = state_26847__$1;
(statearr_26861_26879[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (10))){
var inst_26824 = (state_26847[(13)]);
var inst_26824__$1 = (state_26847[(2)]);
var inst_26825 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_26824__$1);
var state_26847__$1 = (function (){var statearr_26862 = state_26847;
(statearr_26862[(13)] = inst_26824__$1);

return statearr_26862;
})();
if(cljs.core.truth_(inst_26825)){
var statearr_26863_26880 = state_26847__$1;
(statearr_26863_26880[(1)] = (11));

} else {
var statearr_26864_26881 = state_26847__$1;
(statearr_26864_26881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26848 === (8))){
var inst_26810 = (state_26847[(9)]);
var inst_26837 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_26838 = [inst_26810];
var inst_26839 = cljs.core.PersistentHashMap.fromArrays(inst_26837,inst_26838);
var state_26847__$1 = state_26847;
var statearr_26865_26882 = state_26847__$1;
(statearr_26865_26882[(2)] = inst_26839);

(statearr_26865_26882[(1)] = (9));


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
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____1 = (function (state_26847){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__11673__auto__ = e26867;
var statearr_26868_26883 = state_26847;
(statearr_26868_26883[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26884 = state_26847;
state_26847 = G__26884;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__ = function(state_26847){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____1.call(this,state_26847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26869 = f__11693__auto__.call(null);
(statearr_26869[(6)] = c__11692__auto__);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (1))){
var inst_26888 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26889 = cljs.core.nth.call(null,inst_26888,(0),null);
var inst_26890 = cljs.core.nth.call(null,inst_26888,(1),null);
var state_26900__$1 = (function (){var statearr_26902 = state_26900;
(statearr_26902[(7)] = inst_26890);

return statearr_26902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(2),inst_26889);
} else {
if((state_val_26901 === (2))){
var inst_26890 = (state_26900[(7)]);
var inst_26892 = (state_26900[(2)]);
var inst_26893 = klipse_clj.lang.clojure.result_as_str.call(null,inst_26892,opts);
var state_26900__$1 = (function (){var statearr_26903 = state_26900;
(statearr_26903[(8)] = inst_26893);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(3),inst_26890);
} else {
if((state_val_26901 === (3))){
var inst_26893 = (state_26900[(8)]);
var inst_26895 = (state_26900[(2)]);
var inst_26896 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_26897 = [inst_26895,inst_26893];
var inst_26898 = cljs.core.PersistentHashMap.fromArrays(inst_26896,inst_26897);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
return null;
}
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____0 = (function (){
var statearr_26904 = [null,null,null,null,null,null,null,null,null];
(statearr_26904[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__);

(statearr_26904[(1)] = (1));

return statearr_26904;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____1 = (function (state_26900){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26905){if((e26905 instanceof Object)){
var ex__11673__auto__ = e26905;
var statearr_26906_26908 = state_26900;
(statearr_26906_26908[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_26900;
state_26900 = G__26909;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26907 = f__11693__auto__.call(null);
(statearr_26907[(6)] = c__11692__auto__);

return statearr_26907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26922){
var state_val_26923 = (state_26922[(1)]);
if((state_val_26923 === (1))){
var inst_26913 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26914 = cljs.core.nth.call(null,inst_26913,(0),null);
var inst_26915 = cljs.core.nth.call(null,inst_26913,(1),null);
var state_26922__$1 = (function (){var statearr_26924 = state_26922;
(statearr_26924[(7)] = inst_26915);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(2),inst_26914);
} else {
if((state_val_26923 === (2))){
var inst_26915 = (state_26922[(7)]);
var inst_26917 = (state_26922[(2)]);
var inst_26918 = klipse_clj.lang.clojure.result_as_str.call(null,inst_26917,opts);
var state_26922__$1 = (function (){var statearr_26925 = state_26922;
(statearr_26925[(8)] = inst_26918);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26922__$1,(3),inst_26915);
} else {
if((state_val_26923 === (3))){
var inst_26918 = (state_26922[(8)]);
var inst_26920 = (state_26922[(2)]);
var state_26922__$1 = (function (){var statearr_26926 = state_26922;
(statearr_26926[(9)] = inst_26920);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26922__$1,inst_26918);
} else {
return null;
}
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____0 = (function (){
var statearr_26927 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26927[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__);

(statearr_26927[(1)] = (1));

return statearr_26927;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____1 = (function (state_26922){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26928){if((e26928 instanceof Object)){
var ex__11673__auto__ = e26928;
var statearr_26929_26931 = state_26922;
(statearr_26929_26931[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26932 = state_26922;
state_26922 = G__26932;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__ = function(state_26922){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____1.call(this,state_26922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26930 = f__11693__auto__.call(null);
(statearr_26930[(6)] = c__11692__auto__);

return statearr_26930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__26934 = arguments.length;
switch (G__26934) {
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
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26941){
var state_val_26942 = (state_26941[(1)]);
if((state_val_26942 === (1))){
var inst_26935 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_26936 = cljs.core.first.call(null,inst_26935);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26941__$1,(2),inst_26936);
} else {
if((state_val_26942 === (2))){
var inst_26938 = (state_26941[(2)]);
var inst_26939 = klipse_clj.lang.clojure.read_result.call(null,inst_26938);
var state_26941__$1 = state_26941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26941__$1,inst_26939);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$state_machine__11670__auto____0 = (function (){
var statearr_26943 = [null,null,null,null,null,null,null];
(statearr_26943[(0)] = klipse_clj$lang$clojure$state_machine__11670__auto__);

(statearr_26943[(1)] = (1));

return statearr_26943;
});
var klipse_clj$lang$clojure$state_machine__11670__auto____1 = (function (state_26941){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26944){if((e26944 instanceof Object)){
var ex__11673__auto__ = e26944;
var statearr_26945_26948 = state_26941;
(statearr_26945_26948[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26941;
state_26941 = G__26949;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__11670__auto__ = function(state_26941){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__11670__auto____1.call(this,state_26941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__11670__auto____0;
klipse_clj$lang$clojure$state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__11670__auto____1;
return klipse_clj$lang$clojure$state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26946 = f__11693__auto__.call(null);
(statearr_26946[(6)] = c__11692__auto__);

return statearr_26946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26956){
var state_val_26957 = (state_26956[(1)]);
if((state_val_26957 === (1))){
var inst_26950 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26956__$1,(2),inst_26950);
} else {
if((state_val_26957 === (2))){
var inst_26952 = (state_26956[(2)]);
var inst_26953 = cljs.core.clj__GT_js.call(null,inst_26952);
var inst_26954 = cb.call(null,inst_26953);
var state_26956__$1 = state_26956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26956__$1,inst_26954);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____0 = (function (){
var statearr_26958 = [null,null,null,null,null,null,null];
(statearr_26958[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__);

(statearr_26958[(1)] = (1));

return statearr_26958;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____1 = (function (state_26956){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26959){if((e26959 instanceof Object)){
var ex__11673__auto__ = e26959;
var statearr_26960_26962 = state_26956;
(statearr_26960_26962[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26963 = state_26956;
state_26956 = G__26963;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__ = function(state_26956){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____1.call(this,state_26956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26961 = f__11693__auto__.call(null);
(statearr_26961[(6)] = c__11692__auto__);

return statearr_26961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__26965 = arguments.length;
switch (G__26965) {
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
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26971){
var state_val_26972 = (state_26971[(1)]);
if((state_val_26972 === (1))){
var inst_26966 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26971__$1,(2),inst_26966);
} else {
if((state_val_26972 === (2))){
var inst_26968 = (state_26971[(2)]);
var inst_26969 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_26968);
var state_26971__$1 = state_26971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26971__$1,inst_26969);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$state_machine__11670__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null];
(statearr_26973[(0)] = klipse_clj$lang$clojure$state_machine__11670__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var klipse_clj$lang$clojure$state_machine__11670__auto____1 = (function (state_26971){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__11673__auto__ = e26974;
var statearr_26975_26978 = state_26971;
(statearr_26975_26978[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26979 = state_26971;
state_26971 = G__26979;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__11670__auto__ = function(state_26971){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__11670__auto____1.call(this,state_26971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__11670__auto____0;
klipse_clj$lang$clojure$state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__11670__auto____1;
return klipse_clj$lang$clojure$state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26976 = f__11693__auto__.call(null);
(statearr_26976[(6)] = c__11692__auto__);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26985){
var state_val_26986 = (state_26985[(1)]);
if((state_val_26986 === (1))){
var inst_26980 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26985__$1,(2),inst_26980);
} else {
if((state_val_26986 === (2))){
var inst_26982 = (state_26985[(2)]);
var inst_26983 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_26982);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26985__$1,inst_26983);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____0 = (function (){
var statearr_26987 = [null,null,null,null,null,null,null];
(statearr_26987[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__);

(statearr_26987[(1)] = (1));

return statearr_26987;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____1 = (function (state_26985){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e26988){if((e26988 instanceof Object)){
var ex__11673__auto__ = e26988;
var statearr_26989_26991 = state_26985;
(statearr_26989_26991[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26992 = state_26985;
state_26985 = G__26992;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__ = function(state_26985){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____1.call(this,state_26985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_26990 = f__11693__auto__.call(null);
(statearr_26990[(6)] = c__11692__auto__);

return statearr_26990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_26999){
var state_val_27000 = (state_26999[(1)]);
if((state_val_27000 === (1))){
var inst_26993 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26999__$1,(2),inst_26993);
} else {
if((state_val_27000 === (2))){
var inst_26995 = (state_26999[(2)]);
var inst_26996 = cljs.core.second.call(null,inst_26995);
var inst_26997 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26996);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26999__$1,inst_26997);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____0 = (function (){
var statearr_27001 = [null,null,null,null,null,null,null];
(statearr_27001[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__);

(statearr_27001[(1)] = (1));

return statearr_27001;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____1 = (function (state_26999){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_26999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e27002){if((e27002 instanceof Object)){
var ex__11673__auto__ = e27002;
var statearr_27003_27005 = state_26999;
(statearr_27003_27005[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27006 = state_26999;
state_26999 = G__27006;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__ = function(state_26999){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____1.call(this,state_26999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_27004 = f__11693__auto__.call(null);
(statearr_27004[(6)] = c__11692__auto__);

return statearr_27004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__27008){
var map__27009 = p__27008;
var map__27009__$1 = (((((!((map__27009 == null))))?(((((map__27009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27009):map__27009);
var opts = map__27009__$1;
var container_id = cljs.core.get.call(null,map__27009__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__27009__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__27009__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__11692__auto___27099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_27068){
var state_val_27069 = (state_27068[(1)]);
if((state_val_27069 === (7))){
var inst_27019 = (state_27068[(2)]);
var inst_27024 = (function (){var _STAR_print_newline_STAR__orig_val__27020 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27021 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27022 = true;
return ((function (_STAR_print_newline_STAR__orig_val__27020,_STAR_print_fn_STAR__orig_val__27021,_STAR_print_newline_STAR__temp_val__27022,inst_27019,state_val_27069,c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__27007_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__27007_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__27020,_STAR_print_fn_STAR__orig_val__27021,_STAR_print_newline_STAR__temp_val__27022,inst_27019,state_val_27069,c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_27025 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_27026 = cljs.core._STAR_print_fn_STAR_ = inst_27024;
var state_27068__$1 = (function (){var statearr_27070 = state_27068;
(statearr_27070[(7)] = inst_27026);

(statearr_27070[(8)] = inst_27025);

(statearr_27070[(9)] = inst_27019);

return statearr_27070;
})();
var statearr_27071_27100 = state_27068__$1;
(statearr_27071_27100[(2)] = null);

(statearr_27071_27100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (20))){
var inst_27057 = (state_27068[(2)]);
var inst_27058 = cljs.core.get.call(null,inst_27057,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_27059 = cljs.core.get.call(null,inst_27057,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_27060 = cljs.core.second.call(null,inst_27059);
var inst_27061 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27058),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27060)].join('');
var inst_27062 = cljs.core.async.put_BANG_.call(null,c,inst_27061);
var state_27068__$1 = state_27068;
var statearr_27072_27101 = state_27068__$1;
(statearr_27072_27101[(2)] = inst_27062);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (1))){
var inst_27011 = clojure.string.blank_QMARK_.call(null,exp);
var state_27068__$1 = state_27068;
if(inst_27011){
var statearr_27073_27102 = state_27068__$1;
(statearr_27073_27102[(1)] = (2));

} else {
var statearr_27074_27103 = state_27068__$1;
(statearr_27074_27103[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (4))){
var inst_27066 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27068__$1,inst_27066);
} else {
if((state_val_27069 === (15))){
var state_27068__$1 = state_27068;
var statearr_27075_27104 = state_27068__$1;
(statearr_27075_27104[(2)] = true);

(statearr_27075_27104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (13))){
var state_27068__$1 = state_27068;
var statearr_27076_27105 = state_27068__$1;
(statearr_27076_27105[(2)] = false);

(statearr_27076_27105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (6))){
var state_27068__$1 = state_27068;
var statearr_27077_27106 = state_27068__$1;
(statearr_27077_27106[(2)] = null);

(statearr_27077_27106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (17))){
var inst_27049 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
var statearr_27078_27107 = state_27068__$1;
(statearr_27078_27107[(2)] = inst_27049);

(statearr_27078_27107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (3))){
var state_27068__$1 = state_27068;
if(cljs.core.truth_(setup_container_fn)){
var statearr_27079_27108 = state_27068__$1;
(statearr_27079_27108[(1)] = (5));

} else {
var statearr_27080_27109 = state_27068__$1;
(statearr_27080_27109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (12))){
var inst_27036 = (state_27068[(10)]);
var inst_27041 = inst_27036.cljs$lang$protocol_mask$partition0$;
var inst_27042 = (inst_27041 & (64));
var inst_27043 = inst_27036.cljs$core$ISeq$;
var inst_27044 = (cljs.core.PROTOCOL_SENTINEL === inst_27043);
var inst_27045 = ((inst_27042) || (inst_27044));
var state_27068__$1 = state_27068;
if(cljs.core.truth_(inst_27045)){
var statearr_27081_27110 = state_27068__$1;
(statearr_27081_27110[(1)] = (15));

} else {
var statearr_27082_27111 = state_27068__$1;
(statearr_27082_27111[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (2))){
var inst_27013 = cljs.core.async.put_BANG_.call(null,c,"");
var state_27068__$1 = state_27068;
var statearr_27083_27112 = state_27068__$1;
(statearr_27083_27112[(2)] = inst_27013);

(statearr_27083_27112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (19))){
var inst_27036 = (state_27068[(10)]);
var state_27068__$1 = state_27068;
var statearr_27084_27113 = state_27068__$1;
(statearr_27084_27113[(2)] = inst_27036);

(statearr_27084_27113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (11))){
var inst_27036 = (state_27068[(10)]);
var inst_27036__$1 = (state_27068[(2)]);
var inst_27038 = (inst_27036__$1 == null);
var inst_27039 = cljs.core.not.call(null,inst_27038);
var state_27068__$1 = (function (){var statearr_27085 = state_27068;
(statearr_27085[(10)] = inst_27036__$1);

return statearr_27085;
})();
if(inst_27039){
var statearr_27086_27114 = state_27068__$1;
(statearr_27086_27114[(1)] = (12));

} else {
var statearr_27087_27115 = state_27068__$1;
(statearr_27087_27115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (9))){
var inst_27027 = (state_27068[(2)]);
var inst_27028 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_27029 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_27068__$1 = (function (){var statearr_27088 = state_27068;
(statearr_27088[(11)] = inst_27028);

(statearr_27088[(12)] = inst_27027);

(statearr_27088[(13)] = inst_27029);

return statearr_27088;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (5))){
var inst_27016 = setup_container_fn.call(null,container_id);
var state_27068__$1 = state_27068;
var statearr_27089_27116 = state_27068__$1;
(statearr_27089_27116[(2)] = inst_27016);

(statearr_27089_27116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (14))){
var inst_27052 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
if(cljs.core.truth_(inst_27052)){
var statearr_27090_27117 = state_27068__$1;
(statearr_27090_27117[(1)] = (18));

} else {
var statearr_27091_27118 = state_27068__$1;
(statearr_27091_27118[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (16))){
var state_27068__$1 = state_27068;
var statearr_27092_27119 = state_27068__$1;
(statearr_27092_27119[(2)] = false);

(statearr_27092_27119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27068,null,null,(9),(8));
var inst_27034 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_27068__$1 = state_27068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27068__$1,(11),inst_27034);
} else {
if((state_val_27069 === (18))){
var inst_27036 = (state_27068[(10)]);
var inst_27054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27036);
var state_27068__$1 = state_27068;
var statearr_27093_27120 = state_27068__$1;
(statearr_27093_27120[(2)] = inst_27054);

(statearr_27093_27120[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27069 === (8))){
var inst_27064 = (state_27068[(2)]);
var state_27068__$1 = state_27068;
var statearr_27094_27121 = state_27068__$1;
(statearr_27094_27121[(2)] = inst_27064);

(statearr_27094_27121[(1)] = (4));


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
});})(c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__11669__auto__,c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____0 = (function (){
var statearr_27095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27095[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__);

(statearr_27095[(1)] = (1));

return statearr_27095;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____1 = (function (state_27068){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_27068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e27096){if((e27096 instanceof Object)){
var ex__11673__auto__ = e27096;
var statearr_27097_27122 = state_27068;
(statearr_27097_27122[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27068;
state_27068 = G__27123;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__ = function(state_27068){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____1.call(this,state_27068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__11694__auto__ = (function (){var statearr_27098 = f__11693__auto__.call(null);
(statearr_27098[(6)] = c__11692__auto___27099);

return statearr_27098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto___27099,c,map__27009,map__27009__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(s,opts){
var c__11692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11692__auto__){
return (function (){
var f__11693__auto__ = (function (){var switch__11669__auto__ = ((function (c__11692__auto__){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (1))){
var inst_27124 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_27125 = cljs.core.first.call(null,inst_27124);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(2),inst_27125);
} else {
if((state_val_27134 === (2))){
var inst_27127 = (state_27133[(2)]);
var inst_27128 = new cljs.core.Symbol(null,"$","$",-1580747756,null);
var inst_27129 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27128)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27127)].join('');
var inst_27130 = cljs.core.println.call(null,inst_27129);
var inst_27131 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_27127);
var state_27133__$1 = (function (){var statearr_27135 = state_27133;
(statearr_27135[(7)] = inst_27130);

return statearr_27135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
return null;
}
}
});})(c__11692__auto__))
;
return ((function (switch__11669__auto__,c__11692__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__ = null;
var klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____0 = (function (){
var statearr_27136 = [null,null,null,null,null,null,null,null];
(statearr_27136[(0)] = klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__);

(statearr_27136[(1)] = (1));

return statearr_27136;
});
var klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____1 = (function (state_27133){
while(true){
var ret_value__11671__auto__ = (function (){try{while(true){
var result__11672__auto__ = switch__11669__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11672__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11672__auto__;
}
break;
}
}catch (e27137){if((e27137 instanceof Object)){
var ex__11673__auto__ = e27137;
var statearr_27138_27140 = state_27133;
(statearr_27138_27140[(5)] = ex__11673__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27141 = state_27133;
state_27133 = G__27141;
continue;
} else {
return ret_value__11671__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____0;
klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto____1;
return klipse_clj$lang$clojure$eval_async_prepl_$_state_machine__11670__auto__;
})()
;})(switch__11669__auto__,c__11692__auto__))
})();
var state__11694__auto__ = (function (){var statearr_27139 = f__11693__auto__.call(null);
(statearr_27139[(6)] = c__11692__auto__);

return statearr_27139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11694__auto__);
});})(c__11692__auto__))
);

return c__11692__auto__;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
