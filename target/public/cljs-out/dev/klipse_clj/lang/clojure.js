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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31367){
var state_val_31368 = (state_31367[(1)]);
if((state_val_31368 === (7))){
var inst_31363 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31369_31395 = state_31367__$1;
(statearr_31369_31395[(2)] = inst_31363);

(statearr_31369_31395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (1))){
var inst_31308 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(2),inst_31308);
} else {
if((state_val_31368 === (4))){
var inst_31365 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31367__$1,inst_31365);
} else {
if((state_val_31368 === (15))){
var inst_31338 = (state_31367[(7)]);
var inst_31354 = (state_31367[(2)]);
var inst_31355 = cljs.core.next.call(null,inst_31338);
var inst_31319 = inst_31355;
var inst_31320 = null;
var inst_31321 = (0);
var inst_31322 = (0);
var state_31367__$1 = (function (){var statearr_31370 = state_31367;
(statearr_31370[(8)] = inst_31322);

(statearr_31370[(9)] = inst_31319);

(statearr_31370[(10)] = inst_31354);

(statearr_31370[(11)] = inst_31320);

(statearr_31370[(12)] = inst_31321);

return statearr_31370;
})();
var statearr_31371_31396 = state_31367__$1;
(statearr_31371_31396[(2)] = null);

(statearr_31371_31396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (13))){
var inst_31338 = (state_31367[(7)]);
var inst_31347 = cljs.core.first.call(null,inst_31338);
var inst_31348 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31349 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31350 = [inst_31349,klipse_clj.repl.current_ns_eval];
var inst_31351 = cljs.core.PersistentHashMap.fromArrays(inst_31348,inst_31350);
var inst_31352 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31347,inst_31351);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(15),inst_31352);
} else {
if((state_val_31368 === (6))){
var inst_31338 = (state_31367[(7)]);
var inst_31319 = (state_31367[(9)]);
var inst_31338__$1 = cljs.core.seq.call(null,inst_31319);
var state_31367__$1 = (function (){var statearr_31372 = state_31367;
(statearr_31372[(7)] = inst_31338__$1);

return statearr_31372;
})();
if(inst_31338__$1){
var statearr_31373_31397 = state_31367__$1;
(statearr_31373_31397[(1)] = (9));

} else {
var statearr_31374_31398 = state_31367__$1;
(statearr_31374_31398[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (3))){
var inst_31322 = (state_31367[(8)]);
var inst_31321 = (state_31367[(12)]);
var inst_31324 = (inst_31322 < inst_31321);
var inst_31325 = inst_31324;
var state_31367__$1 = state_31367;
if(cljs.core.truth_(inst_31325)){
var statearr_31375_31399 = state_31367__$1;
(statearr_31375_31399[(1)] = (5));

} else {
var statearr_31376_31400 = state_31367__$1;
(statearr_31376_31400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (12))){
var inst_31338 = (state_31367[(7)]);
var inst_31342 = cljs.core.chunk_first.call(null,inst_31338);
var inst_31343 = cljs.core.chunk_rest.call(null,inst_31338);
var inst_31344 = cljs.core.count.call(null,inst_31342);
var inst_31319 = inst_31343;
var inst_31320 = inst_31342;
var inst_31321 = inst_31344;
var inst_31322 = (0);
var state_31367__$1 = (function (){var statearr_31377 = state_31367;
(statearr_31377[(8)] = inst_31322);

(statearr_31377[(9)] = inst_31319);

(statearr_31377[(11)] = inst_31320);

(statearr_31377[(12)] = inst_31321);

return statearr_31377;
})();
var statearr_31378_31401 = state_31367__$1;
(statearr_31378_31401[(2)] = null);

(statearr_31378_31401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (2))){
var inst_31310 = (state_31367[(2)]);
var inst_31315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31316 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_31317 = (new cljs.core.PersistentVector(null,2,(5),inst_31315,inst_31316,null));
var inst_31318 = cljs.core.seq.call(null,inst_31317);
var inst_31319 = inst_31318;
var inst_31320 = null;
var inst_31321 = (0);
var inst_31322 = (0);
var state_31367__$1 = (function (){var statearr_31379 = state_31367;
(statearr_31379[(8)] = inst_31322);

(statearr_31379[(9)] = inst_31319);

(statearr_31379[(11)] = inst_31320);

(statearr_31379[(13)] = inst_31310);

(statearr_31379[(12)] = inst_31321);

return statearr_31379;
})();
var statearr_31380_31402 = state_31367__$1;
(statearr_31380_31402[(2)] = null);

(statearr_31380_31402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (11))){
var inst_31361 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31381_31403 = state_31367__$1;
(statearr_31381_31403[(2)] = inst_31361);

(statearr_31381_31403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (9))){
var inst_31338 = (state_31367[(7)]);
var inst_31340 = cljs.core.chunked_seq_QMARK_.call(null,inst_31338);
var state_31367__$1 = state_31367;
if(inst_31340){
var statearr_31382_31404 = state_31367__$1;
(statearr_31382_31404[(1)] = (12));

} else {
var statearr_31383_31405 = state_31367__$1;
(statearr_31383_31405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (5))){
var inst_31322 = (state_31367[(8)]);
var inst_31320 = (state_31367[(11)]);
var inst_31327 = cljs.core._nth.call(null,inst_31320,inst_31322);
var inst_31328 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31329 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31330 = [inst_31329,klipse_clj.repl.current_ns_eval];
var inst_31331 = cljs.core.PersistentHashMap.fromArrays(inst_31328,inst_31330);
var inst_31332 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31327,inst_31331);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31367__$1,(8),inst_31332);
} else {
if((state_val_31368 === (14))){
var inst_31358 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31387_31406 = state_31367__$1;
(statearr_31387_31406[(2)] = inst_31358);

(statearr_31387_31406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (10))){
var state_31367__$1 = state_31367;
var statearr_31388_31407 = state_31367__$1;
(statearr_31388_31407[(2)] = null);

(statearr_31388_31407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31368 === (8))){
var inst_31322 = (state_31367[(8)]);
var inst_31319 = (state_31367[(9)]);
var inst_31320 = (state_31367[(11)]);
var inst_31321 = (state_31367[(12)]);
var inst_31334 = (state_31367[(2)]);
var inst_31335 = (inst_31322 + (1));
var tmp31384 = inst_31319;
var tmp31385 = inst_31320;
var tmp31386 = inst_31321;
var inst_31319__$1 = tmp31384;
var inst_31320__$1 = tmp31385;
var inst_31321__$1 = tmp31386;
var inst_31322__$1 = inst_31335;
var state_31367__$1 = (function (){var statearr_31389 = state_31367;
(statearr_31389[(8)] = inst_31322__$1);

(statearr_31389[(14)] = inst_31334);

(statearr_31389[(9)] = inst_31319__$1);

(statearr_31389[(11)] = inst_31320__$1);

(statearr_31389[(12)] = inst_31321__$1);

return statearr_31389;
})();
var statearr_31390_31408 = state_31367__$1;
(statearr_31390_31408[(2)] = null);

(statearr_31390_31408[(1)] = (3));


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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____0 = (function (){
var statearr_31391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31391[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__);

(statearr_31391[(1)] = (1));

return statearr_31391;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____1 = (function (state_31367){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31392){if((e31392 instanceof Object)){
var ex__16972__auto__ = e31392;
var statearr_31393_31409 = state_31367;
(statearr_31393_31409[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31410 = state_31367;
state_31367 = G__31410;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__ = function(state_31367){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____1.call(this,state_31367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31394 = f__17126__auto__.call(null);
(statearr_31394[(6)] = c__17125__auto__);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31413){
var state_val_31414 = (state_31413[(1)]);
if((state_val_31414 === (1))){
var inst_31411 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_31413__$1 = state_31413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31413__$1,inst_31411);
} else {
return null;
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____0 = (function (){
var statearr_31415 = [null,null,null,null,null,null,null];
(statearr_31415[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__);

(statearr_31415[(1)] = (1));

return statearr_31415;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____1 = (function (state_31413){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31416){if((e31416 instanceof Object)){
var ex__16972__auto__ = e31416;
var statearr_31417_31419 = state_31413;
(statearr_31417_31419[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31420 = state_31413;
state_31413 = G__31420;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__ = function(state_31413){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____1.call(this,state_31413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31418 = f__17126__auto__.call(null);
(statearr_31418[(6)] = c__17125__auto__);

return statearr_31418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__31421){
var map__31422 = p__31421;
var map__31422__$1 = ((((!((map__31422 == null)))?(((((map__31422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var print_length = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_31424 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31425_31427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31426_31428 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31425_31427,_STAR_print_fn_STAR_31426_31428,sb__4430__auto__,_STAR_print_length_STAR_31424,map__31422,map__31422__$1,print_length,beautify_strings){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_31425_31427,_STAR_print_fn_STAR_31426_31428,sb__4430__auto__,_STAR_print_length_STAR_31424,map__31422,map__31422__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = typeof value === 'string';
if(and__3911__auto__){
return beautify_strings;
} else {
return and__3911__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31426_31428;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31425_31427;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_31424;
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__31429,verbose_QMARK_,current_ns){
var map__31430 = p__31429;
var map__31430__$1 = ((((!((map__31430 == null)))?(((((map__31430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31430):map__31430);
var ns = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__31432,opts){
var map__31433 = p__31432;
var map__31433__$1 = ((((!((map__31433 == null)))?(((((map__31433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31433):map__31433);
var args = map__31433__$1;
var ns = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__31435){
var map__31436 = p__31435;
var map__31436__$1 = ((((!((map__31436 == null)))?(((((map__31436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var form = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__31438){
var map__31439 = p__31438;
var map__31439__$1 = ((((!((map__31439 == null)))?(((((map__31439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31439):map__31439);
var foo = map__31439__$1;
var value = cljs.core.get.call(null,map__31439__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__31439__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__31441){
var map__31442 = p__31441;
var map__31442__$1 = ((((!((map__31442 == null)))?(((((map__31442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31442):map__31442);
var args = map__31442__$1;
var file = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__31442__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__31444){
var map__31445 = p__31444;
var map__31445__$1 = ((((!((map__31445 == null)))?(((((map__31445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31445):map__31445);
var source = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__31447){
var map__31448 = p__31447;
var map__31448__$1 = ((((!((map__31448 == null)))?(((((map__31448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);
var static_fns = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits31450_31451 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits31450_31451,c,max_eval_duration__$1,the_emits,map__31448,map__31448__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits31450_31451,c,max_eval_duration__$1,the_emits,map__31448,map__31448__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits31450_31451;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__31452){
var map__31453 = p__31452;
var map__31453__$1 = ((((!((map__31453 == null)))?(((((map__31453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453):map__31453);
var static_fns = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__31453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var emits31455_31456 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits31455_31456,c,max_eval_duration__$1,map__31453,map__31453__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits31455_31456,c,max_eval_duration__$1,map__31453,map__31453__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits31455_31456;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5455__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var ch = temp__5455__auto__;
var G__31457 = cljs.core.conj.call(null,res,ch);
res = G__31457;
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
var _STAR_alias_map_STAR_31458 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_31459 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_31460 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_31461 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol31462 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_31463 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.repl.current_alias_map.call(null,ns);

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_31463;

cljs.tools.reader.resolve_symbol = resolve_symbol31462;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_31461;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_31460;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_31459;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_31458;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__31467 = arguments.length;
switch (G__31467) {
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
var _STAR_alias_map_STAR_31468 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_31469 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_31470 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_31471 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol31472 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_31473 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.repl.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_31473;

cljs.tools.reader.resolve_symbol = resolve_symbol31472;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_31471;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_31470;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_31469;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_31468;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__31475 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__31475,(0),null);
var rest_s = cljs.core.nth.call(null,vec__31475,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__31478 = rest_s;
var G__31479 = res;
s__$1 = G__31478;
res = G__31479;
continue;
} else {
var G__31480 = rest_s;
var G__31481 = cljs.core.conj.call(null,res,exp);
s__$1 = G__31480;
res = G__31481;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(res,p__31482){
var map__31483 = p__31482;
var map__31483__$1 = ((((!((map__31483 == null)))?(((((map__31483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31483):map__31483);
var result_element = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31542){
var state_val_31543 = (state_31542[(1)]);
if((state_val_31543 === (7))){
var inst_31538 = (state_31542[(2)]);
var state_31542__$1 = state_31542;
var statearr_31544_31565 = state_31542__$1;
(statearr_31544_31565[(2)] = inst_31538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (1))){
var state_31542__$1 = state_31542;
var statearr_31545_31566 = state_31542__$1;
(statearr_31545_31566[(2)] = null);

(statearr_31545_31566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31542,(3),Object,null,(2));
var inst_31493 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_31542__$1 = state_31542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31542__$1,(5),inst_31493);
} else {
if((state_val_31543 === (13))){
var inst_31523 = (state_31542[(7)]);
var inst_31515 = (state_31542[(8)]);
var inst_31528 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31529 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_31530 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_31515,inst_31528,inst_31529);
var inst_31508 = inst_31530;
var inst_31509 = inst_31523;
var state_31542__$1 = (function (){var statearr_31546 = state_31542;
(statearr_31546[(9)] = inst_31508);

(statearr_31546[(10)] = inst_31509);

return statearr_31546;
})();
var statearr_31547_31567 = state_31542__$1;
(statearr_31547_31567[(2)] = null);

(statearr_31547_31567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (6))){
var inst_31508 = (state_31542[(9)]);
var inst_31514 = (state_31542[(11)]);
var inst_31514__$1 = cljs.core.nth.call(null,inst_31508,(0),null);
var inst_31515 = cljs.core.nth.call(null,inst_31508,(1),null);
var inst_31516 = cljs.core.empty_QMARK_.call(null,inst_31514__$1);
var inst_31517 = !(inst_31516);
var state_31542__$1 = (function (){var statearr_31548 = state_31542;
(statearr_31548[(8)] = inst_31515);

(statearr_31548[(11)] = inst_31514__$1);

return statearr_31548;
})();
if(inst_31517){
var statearr_31549_31568 = state_31542__$1;
(statearr_31549_31568[(1)] = (8));

} else {
var statearr_31550_31569 = state_31542__$1;
(statearr_31550_31569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (3))){
var inst_31485 = (state_31542[(2)]);
var inst_31486 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_31487 = [inst_31485];
var inst_31488 = cljs.core.PersistentHashMap.fromArrays(inst_31486,inst_31487);
var inst_31489 = klipse_clj.lang.clojure.populate_err.call(null,inst_31488,opts);
var state_31542__$1 = state_31542;
var statearr_31551_31570 = state_31542__$1;
(statearr_31551_31570[(2)] = inst_31489);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (12))){
var inst_31523 = (state_31542[(7)]);
var inst_31526 = klipse_clj.lang.clojure.populate_err.call(null,inst_31523,opts);
var state_31542__$1 = state_31542;
var statearr_31552_31571 = state_31542__$1;
(statearr_31552_31571[(2)] = inst_31526);

(statearr_31552_31571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (2))){
var inst_31540 = (state_31542[(2)]);
var state_31542__$1 = state_31542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31542__$1,inst_31540);
} else {
if((state_val_31543 === (11))){
var inst_31523 = (state_31542[(7)]);
var inst_31523__$1 = (state_31542[(2)]);
var inst_31524 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_31523__$1);
var state_31542__$1 = (function (){var statearr_31553 = state_31542;
(statearr_31553[(7)] = inst_31523__$1);

return statearr_31553;
})();
if(cljs.core.truth_(inst_31524)){
var statearr_31554_31572 = state_31542__$1;
(statearr_31554_31572[(1)] = (12));

} else {
var statearr_31555_31573 = state_31542__$1;
(statearr_31555_31573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (9))){
var inst_31509 = (state_31542[(10)]);
var state_31542__$1 = state_31542;
var statearr_31556_31574 = state_31542__$1;
(statearr_31556_31574[(2)] = inst_31509);

(statearr_31556_31574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (5))){
var inst_31495 = (state_31542[(2)]);
var inst_31503 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31504 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_31505 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_31503,inst_31504);
var inst_31506 = cljs.core.nth.call(null,inst_31505,(0),null);
var inst_31507 = cljs.core.nth.call(null,inst_31505,(1),null);
var inst_31508 = inst_31505;
var inst_31509 = null;
var state_31542__$1 = (function (){var statearr_31557 = state_31542;
(statearr_31557[(9)] = inst_31508);

(statearr_31557[(12)] = inst_31507);

(statearr_31557[(13)] = inst_31495);

(statearr_31557[(14)] = inst_31506);

(statearr_31557[(10)] = inst_31509);

return statearr_31557;
})();
var statearr_31558_31575 = state_31542__$1;
(statearr_31558_31575[(2)] = null);

(statearr_31558_31575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (14))){
var inst_31533 = (state_31542[(2)]);
var state_31542__$1 = state_31542;
var statearr_31559_31576 = state_31542__$1;
(statearr_31559_31576[(2)] = inst_31533);

(statearr_31559_31576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (10))){
var inst_31536 = (state_31542[(2)]);
var state_31542__$1 = state_31542;
var statearr_31560_31577 = state_31542__$1;
(statearr_31560_31577[(2)] = inst_31536);

(statearr_31560_31577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31543 === (8))){
var inst_31514 = (state_31542[(11)]);
var inst_31519 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31520 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_31519,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_31521 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31514,inst_31520);
var state_31542__$1 = state_31542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31542__$1,(11),inst_31521);
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
var klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____1 = (function (state_31542){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31562){if((e31562 instanceof Object)){
var ex__16972__auto__ = e31562;
var statearr_31563_31578 = state_31542;
(statearr_31563_31578[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31579 = state_31542;
state_31542 = G__31579;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__ = function(state_31542){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____1.call(this,state_31542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31564 = f__17126__auto__.call(null);
(statearr_31564[(6)] = c__17125__auto__);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31637){
var state_val_31638 = (state_31637[(1)]);
if((state_val_31638 === (7))){
var inst_31605 = (state_31637[(7)]);
var inst_31610 = klipse_clj.repl.create_state_compile.call(null);
var inst_31611 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_31610,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_31612 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_31605,inst_31611);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31637__$1,(10),inst_31612);
} else {
if((state_val_31638 === (1))){
var state_31637__$1 = state_31637;
var statearr_31639_31660 = state_31637__$1;
(statearr_31639_31660[(2)] = null);

(statearr_31639_31660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31637,(3),Object,null,(2));
var inst_31594 = klipse_clj.repl.create_state_compile.call(null);
var inst_31595 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_31596 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_31594,inst_31595);
var inst_31597 = cljs.core.nth.call(null,inst_31596,(0),null);
var inst_31598 = cljs.core.nth.call(null,inst_31596,(1),null);
var inst_31599 = inst_31596;
var inst_31600 = "";
var state_31637__$1 = (function (){var statearr_31640 = state_31637;
(statearr_31640[(8)] = inst_31599);

(statearr_31640[(9)] = inst_31597);

(statearr_31640[(10)] = inst_31598);

(statearr_31640[(11)] = inst_31600);

return statearr_31640;
})();
var statearr_31641_31661 = state_31637__$1;
(statearr_31641_31661[(2)] = null);

(statearr_31641_31661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (13))){
var inst_31625 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31642_31662 = state_31637__$1;
(statearr_31642_31662[(2)] = inst_31625);

(statearr_31642_31662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (6))){
var inst_31633 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31643_31663 = state_31637__$1;
(statearr_31643_31663[(2)] = inst_31633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (3))){
var inst_31580 = (state_31637[(2)]);
var inst_31581 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_31582 = [inst_31580];
var inst_31583 = cljs.core.PersistentHashMap.fromArrays(inst_31581,inst_31582);
var state_31637__$1 = state_31637;
var statearr_31644_31664 = state_31637__$1;
(statearr_31644_31664[(2)] = inst_31583);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (12))){
var inst_31606 = (state_31637[(12)]);
var inst_31614 = (state_31637[(13)]);
var inst_31600 = (state_31637[(11)]);
var inst_31618 = klipse_clj.repl.create_state_compile.call(null);
var inst_31619 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_31620 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_31606,inst_31618,inst_31619);
var inst_31621 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_31614);
var inst_31622 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31600),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31621)].join('');
var inst_31599 = inst_31620;
var inst_31600__$1 = inst_31622;
var state_31637__$1 = (function (){var statearr_31645 = state_31637;
(statearr_31645[(8)] = inst_31599);

(statearr_31645[(11)] = inst_31600__$1);

return statearr_31645;
})();
var statearr_31646_31665 = state_31637__$1;
(statearr_31646_31665[(2)] = null);

(statearr_31646_31665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (2))){
var inst_31635 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31637__$1,inst_31635);
} else {
if((state_val_31638 === (11))){
var inst_31614 = (state_31637[(13)]);
var state_31637__$1 = state_31637;
var statearr_31647_31666 = state_31637__$1;
(statearr_31647_31666[(2)] = inst_31614);

(statearr_31647_31666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (9))){
var inst_31631 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31648_31667 = state_31637__$1;
(statearr_31648_31667[(2)] = inst_31631);

(statearr_31648_31667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (5))){
var inst_31599 = (state_31637[(8)]);
var inst_31605 = (state_31637[(7)]);
var inst_31605__$1 = cljs.core.nth.call(null,inst_31599,(0),null);
var inst_31606 = cljs.core.nth.call(null,inst_31599,(1),null);
var inst_31607 = cljs.core.empty_QMARK_.call(null,inst_31605__$1);
var inst_31608 = !(inst_31607);
var state_31637__$1 = (function (){var statearr_31649 = state_31637;
(statearr_31649[(12)] = inst_31606);

(statearr_31649[(7)] = inst_31605__$1);

return statearr_31649;
})();
if(inst_31608){
var statearr_31650_31668 = state_31637__$1;
(statearr_31650_31668[(1)] = (7));

} else {
var statearr_31651_31669 = state_31637__$1;
(statearr_31651_31669[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (10))){
var inst_31614 = (state_31637[(13)]);
var inst_31614__$1 = (state_31637[(2)]);
var inst_31615 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_31614__$1);
var state_31637__$1 = (function (){var statearr_31652 = state_31637;
(statearr_31652[(13)] = inst_31614__$1);

return statearr_31652;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_31653_31670 = state_31637__$1;
(statearr_31653_31670[(1)] = (11));

} else {
var statearr_31654_31671 = state_31637__$1;
(statearr_31654_31671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (8))){
var inst_31600 = (state_31637[(11)]);
var inst_31627 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_31628 = [inst_31600];
var inst_31629 = cljs.core.PersistentHashMap.fromArrays(inst_31627,inst_31628);
var state_31637__$1 = state_31637;
var statearr_31655_31672 = state_31637__$1;
(statearr_31655_31672[(2)] = inst_31629);

(statearr_31655_31672[(1)] = (9));


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
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____0 = (function (){
var statearr_31656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31656[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__);

(statearr_31656[(1)] = (1));

return statearr_31656;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____1 = (function (state_31637){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31657){if((e31657 instanceof Object)){
var ex__16972__auto__ = e31657;
var statearr_31658_31673 = state_31637;
(statearr_31658_31673[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31674 = state_31637;
state_31637 = G__31674;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__ = function(state_31637){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____1.call(this,state_31637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31659 = f__17126__auto__.call(null);
(statearr_31659[(6)] = c__17125__auto__);

return statearr_31659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31680){
var state_val_31681 = (state_31680[(1)]);
if((state_val_31681 === (1))){
var inst_31675 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_31680__$1 = state_31680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31680__$1,(2),inst_31675);
} else {
if((state_val_31681 === (2))){
var inst_31677 = (state_31680[(2)]);
var inst_31678 = klipse_clj.lang.clojure.result_as_str.call(null,inst_31677,opts);
var state_31680__$1 = state_31680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31680__$1,inst_31678);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null];
(statearr_31682[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____1 = (function (state_31680){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__16972__auto__ = e31683;
var statearr_31684_31686 = state_31680;
(statearr_31684_31686[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31687 = state_31680;
state_31680 = G__31687;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__ = function(state_31680){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____1.call(this,state_31680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31685 = f__17126__auto__.call(null);
(statearr_31685[(6)] = c__17125__auto__);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__31689 = arguments.length;
switch (G__31689) {
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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (1))){
var inst_31690 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31695__$1,(2),inst_31690);
} else {
if((state_val_31696 === (2))){
var inst_31692 = (state_31695[(2)]);
var inst_31693 = klipse_clj.lang.clojure.read_result.call(null,inst_31692);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31695__$1,inst_31693);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$state_machine__16969__auto____0 = (function (){
var statearr_31697 = [null,null,null,null,null,null,null];
(statearr_31697[(0)] = klipse_clj$lang$clojure$state_machine__16969__auto__);

(statearr_31697[(1)] = (1));

return statearr_31697;
});
var klipse_clj$lang$clojure$state_machine__16969__auto____1 = (function (state_31695){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31698){if((e31698 instanceof Object)){
var ex__16972__auto__ = e31698;
var statearr_31699_31702 = state_31695;
(statearr_31699_31702[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31703 = state_31695;
state_31695 = G__31703;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__16969__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__16969__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__16969__auto____0;
klipse_clj$lang$clojure$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31700 = f__17126__auto__.call(null);
(statearr_31700[(6)] = c__17125__auto__);

return statearr_31700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31710){
var state_val_31711 = (state_31710[(1)]);
if((state_val_31711 === (1))){
var inst_31704 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31710__$1,(2),inst_31704);
} else {
if((state_val_31711 === (2))){
var inst_31706 = (state_31710[(2)]);
var inst_31707 = cljs.core.clj__GT_js.call(null,inst_31706);
var inst_31708 = cb.call(null,inst_31707);
var state_31710__$1 = state_31710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31710__$1,inst_31708);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____0 = (function (){
var statearr_31712 = [null,null,null,null,null,null,null];
(statearr_31712[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__);

(statearr_31712[(1)] = (1));

return statearr_31712;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____1 = (function (state_31710){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object)){
var ex__16972__auto__ = e31713;
var statearr_31714_31716 = state_31710;
(statearr_31714_31716[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31717 = state_31710;
state_31710 = G__31717;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__ = function(state_31710){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____1.call(this,state_31710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31715 = f__17126__auto__.call(null);
(statearr_31715[(6)] = c__17125__auto__);

return statearr_31715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__31719 = arguments.length;
switch (G__31719) {
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
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31725){
var state_val_31726 = (state_31725[(1)]);
if((state_val_31726 === (1))){
var inst_31720 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_31725__$1 = state_31725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31725__$1,(2),inst_31720);
} else {
if((state_val_31726 === (2))){
var inst_31722 = (state_31725[(2)]);
var inst_31723 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_31722);
var state_31725__$1 = state_31725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31725__$1,inst_31723);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$state_machine__16969__auto____0 = (function (){
var statearr_31727 = [null,null,null,null,null,null,null];
(statearr_31727[(0)] = klipse_clj$lang$clojure$state_machine__16969__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var klipse_clj$lang$clojure$state_machine__16969__auto____1 = (function (state_31725){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object)){
var ex__16972__auto__ = e31728;
var statearr_31729_31732 = state_31725;
(statearr_31729_31732[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31733 = state_31725;
state_31725 = G__31733;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__16969__auto__ = function(state_31725){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__16969__auto____1.call(this,state_31725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__16969__auto____0;
klipse_clj$lang$clojure$state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__16969__auto____1;
return klipse_clj$lang$clojure$state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31730 = f__17126__auto__.call(null);
(statearr_31730[(6)] = c__17125__auto__);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (1))){
var inst_31734 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(2),inst_31734);
} else {
if((state_val_31740 === (2))){
var inst_31736 = (state_31739[(2)]);
var inst_31737 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_31736);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____0 = (function (){
var statearr_31741 = [null,null,null,null,null,null,null];
(statearr_31741[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__);

(statearr_31741[(1)] = (1));

return statearr_31741;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____1 = (function (state_31739){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31742){if((e31742 instanceof Object)){
var ex__16972__auto__ = e31742;
var statearr_31743_31745 = state_31739;
(statearr_31743_31745[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31746 = state_31739;
state_31739 = G__31746;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31744 = f__17126__auto__.call(null);
(statearr_31744[(6)] = c__17125__auto__);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (1))){
var inst_31747 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,(2),inst_31747);
} else {
if((state_val_31754 === (2))){
var inst_31749 = (state_31753[(2)]);
var inst_31750 = cljs.core.second.call(null,inst_31749);
var inst_31751 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31750)].join('');
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
return null;
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null];
(statearr_31755[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____1 = (function (state_31753){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31756){if((e31756 instanceof Object)){
var ex__16972__auto__ = e31756;
var statearr_31757_31759 = state_31753;
(statearr_31757_31759[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31760 = state_31753;
state_31753 = G__31760;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_31758 = f__17126__auto__.call(null);
(statearr_31758[(6)] = c__17125__auto__);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__31762){
var map__31763 = p__31762;
var map__31763__$1 = ((((!((map__31763 == null)))?(((((map__31763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);
var opts = map__31763__$1;
var container_id = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__17125__auto___31813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_31795){
var state_val_31796 = (state_31795[(1)]);
if((state_val_31796 === (7))){
var inst_31773 = (state_31795[(2)]);
var inst_31776 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_31777 = (function (){var _STAR_print_newline_STAR_31774 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31775 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_31774,_STAR_print_fn_STAR_31775,inst_31773,inst_31776,state_val_31796,c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__31761_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31761_SHARP_);
});
;})(_STAR_print_newline_STAR_31774,_STAR_print_fn_STAR_31775,inst_31773,inst_31776,state_val_31796,c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_31778 = cljs.core._STAR_print_fn_STAR_ = inst_31777;
var state_31795__$1 = (function (){var statearr_31797 = state_31795;
(statearr_31797[(7)] = inst_31773);

(statearr_31797[(8)] = inst_31778);

(statearr_31797[(9)] = inst_31776);

return statearr_31797;
})();
var statearr_31798_31814 = state_31795__$1;
(statearr_31798_31814[(2)] = null);

(statearr_31798_31814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (1))){
var inst_31765 = clojure.string.blank_QMARK_.call(null,exp);
var state_31795__$1 = state_31795;
if(inst_31765){
var statearr_31799_31815 = state_31795__$1;
(statearr_31799_31815[(1)] = (2));

} else {
var statearr_31800_31816 = state_31795__$1;
(statearr_31800_31816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (4))){
var inst_31793 = (state_31795[(2)]);
var state_31795__$1 = state_31795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31795__$1,inst_31793);
} else {
if((state_val_31796 === (6))){
var state_31795__$1 = state_31795;
var statearr_31801_31817 = state_31795__$1;
(statearr_31801_31817[(2)] = null);

(statearr_31801_31817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (3))){
var state_31795__$1 = state_31795;
if(cljs.core.truth_(setup_container_fn)){
var statearr_31802_31818 = state_31795__$1;
(statearr_31802_31818[(1)] = (5));

} else {
var statearr_31803_31819 = state_31795__$1;
(statearr_31803_31819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (2))){
var inst_31767 = cljs.core.async.put_BANG_.call(null,c,"");
var state_31795__$1 = state_31795;
var statearr_31804_31820 = state_31795__$1;
(statearr_31804_31820[(2)] = inst_31767);

(statearr_31804_31820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (11))){
var inst_31787 = (state_31795[(2)]);
var inst_31788 = cljs.core.second.call(null,inst_31787);
var inst_31789 = cljs.core.async.put_BANG_.call(null,c,inst_31788);
var state_31795__$1 = state_31795;
var statearr_31805_31821 = state_31795__$1;
(statearr_31805_31821[(2)] = inst_31789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (9))){
var inst_31779 = (state_31795[(2)]);
var inst_31780 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_31781 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_31795__$1 = (function (){var statearr_31806 = state_31795;
(statearr_31806[(10)] = inst_31779);

(statearr_31806[(11)] = inst_31780);

(statearr_31806[(12)] = inst_31781);

return statearr_31806;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31795__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (5))){
var inst_31770 = setup_container_fn.call(null,container_id);
var state_31795__$1 = state_31795;
var statearr_31807_31822 = state_31795__$1;
(statearr_31807_31822[(2)] = inst_31770);

(statearr_31807_31822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31796 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31795,null,null,(9),(8));
var inst_31785 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_31795__$1 = state_31795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31795__$1,(11),inst_31785);
} else {
if((state_val_31796 === (8))){
var inst_31791 = (state_31795[(2)]);
var state_31795__$1 = state_31795;
var statearr_31808_31823 = state_31795__$1;
(statearr_31808_31823[(2)] = inst_31791);

(statearr_31808_31823[(1)] = (4));


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
});})(c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__16968__auto__,c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____0 = (function (){
var statearr_31809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31809[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__);

(statearr_31809[(1)] = (1));

return statearr_31809;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____1 = (function (state_31795){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_31795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e31810){if((e31810 instanceof Object)){
var ex__16972__auto__ = e31810;
var statearr_31811_31824 = state_31795;
(statearr_31811_31824[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31825 = state_31795;
state_31795 = G__31825;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__ = function(state_31795){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____1.call(this,state_31795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__17127__auto__ = (function (){var statearr_31812 = f__17126__auto__.call(null);
(statearr_31812[(6)] = c__17125__auto___31813);

return statearr_31812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto___31813,c,map__31763,map__31763__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
