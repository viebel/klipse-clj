// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_35650){
var state_val_35651 = (state_35650[(1)]);
if((state_val_35651 === (7))){
var inst_35646 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35652_35679 = state_35650__$1;
(statearr_35652_35679[(2)] = inst_35646);

(statearr_35652_35679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (1))){
var inst_35589 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35650__$1,(2),inst_35589);
} else {
if((state_val_35651 === (4))){
var inst_35648 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35650__$1,inst_35648);
} else {
if((state_val_35651 === (15))){
var inst_35620 = (state_35650[(7)]);
var inst_35637 = (state_35650[(2)]);
var inst_35638 = cljs.core.next.call(null,inst_35620);
var inst_35600 = inst_35638;
var inst_35601 = null;
var inst_35602 = (0);
var inst_35603 = (0);
var state_35650__$1 = (function (){var statearr_35653 = state_35650;
(statearr_35653[(8)] = inst_35637);

(statearr_35653[(9)] = inst_35600);

(statearr_35653[(10)] = inst_35601);

(statearr_35653[(11)] = inst_35602);

(statearr_35653[(12)] = inst_35603);

return statearr_35653;
})();
var statearr_35654_35680 = state_35650__$1;
(statearr_35654_35680[(2)] = null);

(statearr_35654_35680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (13))){
var inst_35620 = (state_35650[(7)]);
var inst_35629 = cljs.core.first.call(null,inst_35620);
var inst_35630 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_35631 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35632 = [inst_35631,klipse_clj.repl.current_ns_eval];
var inst_35633 = cljs.core.PersistentHashMap.fromArrays(inst_35630,inst_35632);
var inst_35634 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35629,inst_35633);
var inst_35635 = cljs.core.first.call(null,inst_35634);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35650__$1,(15),inst_35635);
} else {
if((state_val_35651 === (6))){
var inst_35600 = (state_35650[(9)]);
var inst_35620 = (state_35650[(7)]);
var inst_35620__$1 = cljs.core.seq.call(null,inst_35600);
var state_35650__$1 = (function (){var statearr_35655 = state_35650;
(statearr_35655[(7)] = inst_35620__$1);

return statearr_35655;
})();
if(inst_35620__$1){
var statearr_35656_35681 = state_35650__$1;
(statearr_35656_35681[(1)] = (9));

} else {
var statearr_35657_35682 = state_35650__$1;
(statearr_35657_35682[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (3))){
var inst_35603 = (state_35650[(12)]);
var inst_35602 = (state_35650[(11)]);
var inst_35605 = (inst_35603 < inst_35602);
var inst_35606 = inst_35605;
var state_35650__$1 = state_35650;
if(cljs.core.truth_(inst_35606)){
var statearr_35658_35683 = state_35650__$1;
(statearr_35658_35683[(1)] = (5));

} else {
var statearr_35659_35684 = state_35650__$1;
(statearr_35659_35684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (12))){
var inst_35620 = (state_35650[(7)]);
var inst_35624 = cljs.core.chunk_first.call(null,inst_35620);
var inst_35625 = cljs.core.chunk_rest.call(null,inst_35620);
var inst_35626 = cljs.core.count.call(null,inst_35624);
var inst_35600 = inst_35625;
var inst_35601 = inst_35624;
var inst_35602 = inst_35626;
var inst_35603 = (0);
var state_35650__$1 = (function (){var statearr_35660 = state_35650;
(statearr_35660[(9)] = inst_35600);

(statearr_35660[(10)] = inst_35601);

(statearr_35660[(11)] = inst_35602);

(statearr_35660[(12)] = inst_35603);

return statearr_35660;
})();
var statearr_35661_35685 = state_35650__$1;
(statearr_35661_35685[(2)] = null);

(statearr_35661_35685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (2))){
var inst_35591 = (state_35650[(2)]);
var inst_35596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35597 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_35598 = (new cljs.core.PersistentVector(null,2,(5),inst_35596,inst_35597,null));
var inst_35599 = cljs.core.seq.call(null,inst_35598);
var inst_35600 = inst_35599;
var inst_35601 = null;
var inst_35602 = (0);
var inst_35603 = (0);
var state_35650__$1 = (function (){var statearr_35662 = state_35650;
(statearr_35662[(13)] = inst_35591);

(statearr_35662[(9)] = inst_35600);

(statearr_35662[(10)] = inst_35601);

(statearr_35662[(11)] = inst_35602);

(statearr_35662[(12)] = inst_35603);

return statearr_35662;
})();
var statearr_35663_35686 = state_35650__$1;
(statearr_35663_35686[(2)] = null);

(statearr_35663_35686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (11))){
var inst_35644 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35664_35687 = state_35650__$1;
(statearr_35664_35687[(2)] = inst_35644);

(statearr_35664_35687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (9))){
var inst_35620 = (state_35650[(7)]);
var inst_35622 = cljs.core.chunked_seq_QMARK_.call(null,inst_35620);
var state_35650__$1 = state_35650;
if(inst_35622){
var statearr_35665_35688 = state_35650__$1;
(statearr_35665_35688[(1)] = (12));

} else {
var statearr_35666_35689 = state_35650__$1;
(statearr_35666_35689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (5))){
var inst_35601 = (state_35650[(10)]);
var inst_35603 = (state_35650[(12)]);
var inst_35608 = cljs.core._nth.call(null,inst_35601,inst_35603);
var inst_35609 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_35610 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35611 = [inst_35610,klipse_clj.repl.current_ns_eval];
var inst_35612 = cljs.core.PersistentHashMap.fromArrays(inst_35609,inst_35611);
var inst_35613 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35608,inst_35612);
var inst_35614 = cljs.core.first.call(null,inst_35613);
var state_35650__$1 = state_35650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35650__$1,(8),inst_35614);
} else {
if((state_val_35651 === (14))){
var inst_35641 = (state_35650[(2)]);
var state_35650__$1 = state_35650;
var statearr_35670_35690 = state_35650__$1;
(statearr_35670_35690[(2)] = inst_35641);

(statearr_35670_35690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (10))){
var state_35650__$1 = state_35650;
var statearr_35671_35691 = state_35650__$1;
(statearr_35671_35691[(2)] = null);

(statearr_35671_35691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35651 === (8))){
var inst_35603 = (state_35650[(12)]);
var inst_35600 = (state_35650[(9)]);
var inst_35601 = (state_35650[(10)]);
var inst_35602 = (state_35650[(11)]);
var inst_35616 = (state_35650[(2)]);
var inst_35617 = (inst_35603 + (1));
var tmp35667 = inst_35600;
var tmp35668 = inst_35602;
var tmp35669 = inst_35601;
var inst_35600__$1 = tmp35667;
var inst_35601__$1 = tmp35669;
var inst_35602__$1 = tmp35668;
var inst_35603__$1 = inst_35617;
var state_35650__$1 = (function (){var statearr_35672 = state_35650;
(statearr_35672[(14)] = inst_35616);

(statearr_35672[(9)] = inst_35600__$1);

(statearr_35672[(10)] = inst_35601__$1);

(statearr_35672[(11)] = inst_35602__$1);

(statearr_35672[(12)] = inst_35603__$1);

return statearr_35672;
})();
var statearr_35673_35692 = state_35650__$1;
(statearr_35673_35692[(2)] = null);

(statearr_35673_35692[(1)] = (3));


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
});
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____0 = (function (){
var statearr_35674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35674[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__);

(statearr_35674[(1)] = (1));

return statearr_35674;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____1 = (function (state_35650){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_35650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e35675){var ex__21902__auto__ = e35675;
var statearr_35676_35693 = state_35650;
(statearr_35676_35693[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_35650[(4)]))){
var statearr_35677_35694 = state_35650;
(statearr_35677_35694[(1)] = cljs.core.first.call(null,(state_35650[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35695 = state_35650;
state_35650 = G__35695;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__ = function(state_35650){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____1.call(this,state_35650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_35678 = f__22024__auto__.call(null);
(statearr_35678[(6)] = c__22023__auto__);

return statearr_35678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_35698){
var state_val_35699 = (state_35698[(1)]);
if((state_val_35699 === (1))){
var inst_35696 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_35698__$1 = state_35698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35698__$1,inst_35696);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____0 = (function (){
var statearr_35700 = [null,null,null,null,null,null,null];
(statearr_35700[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__);

(statearr_35700[(1)] = (1));

return statearr_35700;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____1 = (function (state_35698){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_35698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e35701){var ex__21902__auto__ = e35701;
var statearr_35702_35705 = state_35698;
(statearr_35702_35705[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_35698[(4)]))){
var statearr_35703_35706 = state_35698;
(statearr_35703_35706[(1)] = cljs.core.first.call(null,(state_35698[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35707 = state_35698;
state_35698 = G__35707;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__ = function(state_35698){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____1.call(this,state_35698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_35704 = f__22024__auto__.call(null);
(statearr_35704[(6)] = c__22023__auto__);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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
}catch (e35708){if((e35708 instanceof Object)){
var e = e35708;

return e;
} else {
throw e35708;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__35709){
var map__35710 = p__35709;
var map__35710__$1 = cljs.core.__destructure_map.call(null,map__35710);
var print_length = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__35712 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__35713 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35713);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35714_35718 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35715_35719 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35716_35720 = true;
var _STAR_print_fn_STAR__temp_val__35717_35721 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35716_35720);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35717_35721);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5000__auto__ = typeof value === 'string';
if(and__5000__auto__){
return beautify_strings;
} else {
return and__5000__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35715_35719);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35714_35718);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35712);
}}catch (e35711){if((e35711 instanceof Object)){
var e = e35711;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e35711;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__35722,verbose_QMARK_,current_ns){
var map__35723 = p__35722;
var map__35723__$1 = cljs.core.__destructure_map.call(null,map__35723);
var ns = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var _value = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__35724,opts){
var map__35725 = p__35724;
var map__35725__$1 = cljs.core.__destructure_map.call(null,map__35725);
var args = map__35725__$1;
var _ns = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"_ns","_ns",1411120581));
var _form = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__35725__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__35726,opts){
var map__35727 = p__35726;
var map__35727__$1 = cljs.core.__destructure_map.call(null,map__35727);
var args = map__35727__$1;
var ns = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var _error = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"_error","_error",-332213735));
var _value = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var vec__35728 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__35728,(0),null);
var val = cljs.core.nth.call(null,vec__35728,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__35731){
var map__35732 = p__35731;
var map__35732__$1 = cljs.core.__destructure_map.call(null,map__35732);
var _form = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__35733){
var map__35734 = p__35733;
var map__35734__$1 = cljs.core.__destructure_map.call(null,map__35734);
var foo = map__35734__$1;
var value = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__35734__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__35735){
var map__35736 = p__35735;
var map__35736__$1 = cljs.core.__destructure_map.call(null,map__35736);
var args = map__35736__$1;
var _file = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_file","_file",-267733516));
var _source = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));
var _lang = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_lang","_lang",-796607044));
var _name = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var _path = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_path","_path",157802149));
var _cache = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"_cache","_cache",442382032));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__35737){
var map__35738 = p__35737;
var map__35738__$1 = cljs.core.__destructure_map.call(null,map__35738);
var source = cljs.core.get.call(null,map__35738__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__35739){
var map__35740 = p__35739;
var map__35740__$1 = cljs.core.__destructure_map.call(null,map__35740);
var static_fns = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
}));

return c;
});
klipse_clj.lang.clojure.warning_handler = (function klipse_clj$lang$clojure$warning_handler(c,warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5823__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
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
var c__22023__auto___35773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_35757){
var state_val_35758 = (state_35757[(1)]);
if((state_val_35758 === (1))){
var inst_35741 = cljs.core.PersistentVector.EMPTY;
var inst_35742 = inst_35741;
var state_35757__$1 = (function (){var statearr_35759 = state_35757;
(statearr_35759[(7)] = inst_35742);

return statearr_35759;
})();
var statearr_35760_35774 = state_35757__$1;
(statearr_35760_35774[(2)] = null);

(statearr_35760_35774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35758 === (2))){
var state_35757__$1 = state_35757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35757__$1,(4),c);
} else {
if((state_val_35758 === (3))){
var inst_35755 = (state_35757[(2)]);
var state_35757__$1 = state_35757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35757__$1,inst_35755);
} else {
if((state_val_35758 === (4))){
var inst_35745 = (state_35757[(8)]);
var inst_35745__$1 = (state_35757[(2)]);
var inst_35746 = (inst_35745__$1 == null);
var state_35757__$1 = (function (){var statearr_35761 = state_35757;
(statearr_35761[(8)] = inst_35745__$1);

return statearr_35761;
})();
if(cljs.core.truth_(inst_35746)){
var statearr_35762_35775 = state_35757__$1;
(statearr_35762_35775[(1)] = (5));

} else {
var statearr_35763_35776 = state_35757__$1;
(statearr_35763_35776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35758 === (5))){
var inst_35742 = (state_35757[(7)]);
var inst_35748 = cljs.core.async.put_BANG_.call(null,d,inst_35742);
var state_35757__$1 = state_35757;
var statearr_35764_35777 = state_35757__$1;
(statearr_35764_35777[(2)] = inst_35748);

(statearr_35764_35777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35758 === (6))){
var inst_35742 = (state_35757[(7)]);
var inst_35745 = (state_35757[(8)]);
var inst_35750 = cljs.core.conj.call(null,inst_35742,inst_35745);
var inst_35742__$1 = inst_35750;
var state_35757__$1 = (function (){var statearr_35765 = state_35757;
(statearr_35765[(7)] = inst_35742__$1);

return statearr_35765;
})();
var statearr_35766_35778 = state_35757__$1;
(statearr_35766_35778[(2)] = null);

(statearr_35766_35778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35758 === (7))){
var inst_35753 = (state_35757[(2)]);
var state_35757__$1 = state_35757;
var statearr_35767_35779 = state_35757__$1;
(statearr_35767_35779[(2)] = inst_35753);

(statearr_35767_35779[(1)] = (3));


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
});
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____0 = (function (){
var statearr_35768 = [null,null,null,null,null,null,null,null,null];
(statearr_35768[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__);

(statearr_35768[(1)] = (1));

return statearr_35768;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____1 = (function (state_35757){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_35757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e35769){var ex__21902__auto__ = e35769;
var statearr_35770_35780 = state_35757;
(statearr_35770_35780[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_35757[(4)]))){
var statearr_35771_35781 = state_35757;
(statearr_35771_35781[(1)] = cljs.core.first.call(null,(state_35757[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35782 = state_35757;
state_35757 = G__35782;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__ = function(state_35757){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____1.call(this,state_35757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_35772 = f__22024__auto__.call(null);
(statearr_35772[(6)] = c__22023__auto___35773);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__35783){
var map__35784 = p__35783;
var map__35784__$1 = cljs.core.__destructure_map.call(null,map__35784);
var static_fns = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__35785 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__35786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__35786);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_35795){
var state_val_35796 = (state_35795[(1)]);
if((state_val_35796 === (1))){
var inst_35787 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_35795__$1 = state_35795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35795__$1,(2),inst_35787);
} else {
if((state_val_35796 === (2))){
var inst_35789 = (state_35795[(2)]);
var inst_35790 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_35791 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_35792 = clojure.string.join.call(null,"",inst_35789);
var inst_35793 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_35792);
var state_35795__$1 = (function (){var statearr_35797 = state_35795;
(statearr_35797[(7)] = inst_35790);

(statearr_35797[(8)] = inst_35791);

return statearr_35797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35795__$1,inst_35793);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____0 = (function (){
var statearr_35798 = [null,null,null,null,null,null,null,null,null];
(statearr_35798[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__);

(statearr_35798[(1)] = (1));

return statearr_35798;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____1 = (function (state_35795){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_35795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e35799){var ex__21902__auto__ = e35799;
var statearr_35800_35803 = state_35795;
(statearr_35800_35803[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_35795[(4)]))){
var statearr_35801_35804 = state_35795;
(statearr_35801_35804[(1)] = cljs.core.first.call(null,(state_35795[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35805 = state_35795;
state_35795 = G__35805;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__ = function(state_35795){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____1.call(this,state_35795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_35802 = f__22024__auto__.call(null);
(statearr_35802[(6)] = c__22023__auto__);

return statearr_35802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__35785);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5821__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5821__auto__)){
var ch = temp__5821__auto__;
var G__35806 = cljs.core.conj.call(null,res,ch);
res = G__35806;
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
var _STAR_alias_map_STAR__orig_val__35807 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35808 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35809 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35810 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35811 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35812 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35813 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__35814 = ns;
var _STAR_cljs_ns_STAR__temp_val__35815 = ns;
var _STAR_compiler_STAR__temp_val__35816 = st;
var resolve_symbol_temp_val__35817 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35818 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35813);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35814);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35815);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35816);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35817);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35818);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35812);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35811);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35810);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35809);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35808);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35807);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__35822 = arguments.length;
switch (G__35822) {
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

(klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.read_string.call(null,s,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
}));

(klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3 = (function (s,st,ns){
var _STAR_alias_map_STAR__orig_val__35823 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35824 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35825 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35826 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35827 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35828 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35829 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__35830 = ns;
var _STAR_cljs_ns_STAR__temp_val__35831 = ns;
var _STAR_compiler_STAR__temp_val__35832 = st;
var resolve_symbol_temp_val__35833 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35834 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35829);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35830);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35831);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35832);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35833);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35834);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35828);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35827);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35826);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35825);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35824);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35823);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__35839 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__35839,(0),null);
var rest_s = cljs.core.nth.call(null,vec__35839,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__35842 = rest_s;
var G__35843 = res;
s__$1 = G__35842;
res = G__35843;
continue;
} else {
var G__35844 = rest_s;
var G__35845 = cljs.core.conj.call(null,res,exp);
s__$1 = G__35844;
res = G__35845;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__35846){
var map__35847 = p__35846;
var map__35847__$1 = cljs.core.__destructure_map.call(null,map__35847);
var result_element = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__35847__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__5000__auto__ = container;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__5000__auto__;
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
var c__22023__auto___35960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_35925){
var state_val_35926 = (state_35925[(1)]);
if((state_val_35926 === (7))){
var inst_35878 = (state_35925[(7)]);
var inst_35885 = (state_35925[(8)]);
var inst_35885__$1 = cljs.core.nth.call(null,inst_35878,(0),null);
var inst_35886 = cljs.core.nth.call(null,inst_35878,(1),null);
var inst_35887 = cljs.core.seq.call(null,inst_35885__$1);
var state_35925__$1 = (function (){var statearr_35927 = state_35925;
(statearr_35927[(8)] = inst_35885__$1);

(statearr_35927[(9)] = inst_35886);

return statearr_35927;
})();
if(inst_35887){
var statearr_35928_35961 = state_35925__$1;
(statearr_35928_35961[(1)] = (9));

} else {
var statearr_35929_35962 = state_35925__$1;
(statearr_35929_35962[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (1))){
var state_35925__$1 = state_35925;
var statearr_35930_35963 = state_35925__$1;
(statearr_35930_35963[(2)] = null);

(statearr_35930_35963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (4))){
var inst_35848 = (state_35925[(2)]);
var inst_35849 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_35850 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35851 = [inst_35848];
var inst_35852 = cljs.core.PersistentHashMap.fromArrays(inst_35850,inst_35851);
var inst_35853 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35852);
var inst_35854 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35855 = [inst_35848];
var inst_35856 = cljs.core.PersistentHashMap.fromArrays(inst_35854,inst_35855);
var inst_35857 = klipse_clj.lang.clojure.populate_err.call(null,inst_35856,opts);
var state_35925__$1 = (function (){var statearr_35931 = state_35925;
(statearr_35931[(10)] = inst_35849);

(statearr_35931[(11)] = inst_35853);

return statearr_35931;
})();
var statearr_35932_35964 = state_35925__$1;
(statearr_35932_35964[(2)] = inst_35857);

(statearr_35932_35964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (15))){
var inst_35913 = (state_35925[(2)]);
var state_35925__$1 = state_35925;
var statearr_35933_35965 = state_35925__$1;
(statearr_35933_35965[(2)] = inst_35913);

(statearr_35933_35965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (13))){
var inst_35898 = (state_35925[(12)]);
var inst_35901 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_35902 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35898);
var inst_35903 = klipse_clj.lang.clojure.populate_err.call(null,inst_35898,opts);
var state_35925__$1 = (function (){var statearr_35934 = state_35925;
(statearr_35934[(13)] = inst_35901);

(statearr_35934[(14)] = inst_35902);

return statearr_35934;
})();
var statearr_35935_35966 = state_35925__$1;
(statearr_35935_35966[(2)] = inst_35903);

(statearr_35935_35966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (6))){
var inst_35865 = (state_35925[(2)]);
var inst_35873 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35874 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35875 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35873,inst_35874);
var inst_35876 = cljs.core.nth.call(null,inst_35875,(0),null);
var inst_35877 = cljs.core.nth.call(null,inst_35875,(1),null);
var inst_35878 = inst_35875;
var inst_35879 = null;
var inst_35880 = "";
var state_35925__$1 = (function (){var statearr_35936 = state_35925;
(statearr_35936[(15)] = inst_35865);

(statearr_35936[(16)] = inst_35876);

(statearr_35936[(17)] = inst_35877);

(statearr_35936[(7)] = inst_35878);

(statearr_35936[(18)] = inst_35879);

(statearr_35936[(19)] = inst_35880);

return statearr_35936;
})();
var statearr_35937_35967 = state_35925__$1;
(statearr_35937_35967[(2)] = null);

(statearr_35937_35967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (3))){
var inst_35923 = (state_35925[(2)]);
var state_35925__$1 = state_35925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35925__$1,inst_35923);
} else {
if((state_val_35926 === (12))){
var inst_35898 = (state_35925[(12)]);
var inst_35898__$1 = (state_35925[(2)]);
var inst_35899 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35898__$1);
var state_35925__$1 = (function (){var statearr_35938 = state_35925;
(statearr_35938[(12)] = inst_35898__$1);

return statearr_35938;
})();
if(cljs.core.truth_(inst_35899)){
var statearr_35939_35968 = state_35925__$1;
(statearr_35939_35968[(1)] = (13));

} else {
var statearr_35940_35969 = state_35925__$1;
(statearr_35940_35969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (2))){
var _ = (function (){var statearr_35941 = state_35925;
(statearr_35941[(4)] = cljs.core.cons.call(null,(5),(state_35925[(4)])));

return statearr_35941;
})();
var inst_35863 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_35925__$1 = state_35925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35925__$1,(6),inst_35863);
} else {
if((state_val_35926 === (11))){
var inst_35918 = (state_35925[(2)]);
var state_35925__$1 = state_35925;
var statearr_35943_35970 = state_35925__$1;
(statearr_35943_35970[(2)] = inst_35918);

(statearr_35943_35970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (9))){
var inst_35885 = (state_35925[(8)]);
var inst_35892 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35893 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_35892,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_35894 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35885,inst_35893);
var inst_35895 = cljs.core.nth.call(null,inst_35894,(0),null);
var inst_35896 = cljs.core.nth.call(null,inst_35894,(1),null);
var state_35925__$1 = (function (){var statearr_35944 = state_35925;
(statearr_35944[(20)] = inst_35896);

return statearr_35944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35925__$1,(12),inst_35895);
} else {
if((state_val_35926 === (5))){
var _ = (function (){var statearr_35945 = state_35925;
(statearr_35945[(4)] = cljs.core.rest.call(null,(state_35925[(4)])));

return statearr_35945;
})();
var state_35925__$1 = state_35925;
var ex35942 = (state_35925__$1[(2)]);
var statearr_35946_35971 = state_35925__$1;
(statearr_35946_35971[(5)] = ex35942);


if((ex35942 instanceof Object)){
var statearr_35947_35972 = state_35925__$1;
(statearr_35947_35972[(1)] = (4));

(statearr_35947_35972[(5)] = null);

} else {
throw ex35942;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (14))){
var inst_35886 = (state_35925[(9)]);
var inst_35896 = (state_35925[(20)]);
var inst_35905 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35906 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35907 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_35886,inst_35905,inst_35906);
var state_35925__$1 = (function (){var statearr_35948 = state_35925;
(statearr_35948[(21)] = inst_35907);

return statearr_35948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35925__$1,(16),inst_35896);
} else {
if((state_val_35926 === (16))){
var inst_35880 = (state_35925[(19)]);
var inst_35907 = (state_35925[(21)]);
var inst_35898 = (state_35925[(12)]);
var inst_35909 = (state_35925[(2)]);
var inst_35910 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35880),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35909)].join('');
var inst_35878 = inst_35907;
var inst_35879 = inst_35898;
var inst_35880__$1 = inst_35910;
var state_35925__$1 = (function (){var statearr_35949 = state_35925;
(statearr_35949[(7)] = inst_35878);

(statearr_35949[(18)] = inst_35879);

(statearr_35949[(19)] = inst_35880__$1);

return statearr_35949;
})();
var statearr_35950_35973 = state_35925__$1;
(statearr_35950_35973[(2)] = null);

(statearr_35950_35973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (10))){
var inst_35880 = (state_35925[(19)]);
var inst_35879 = (state_35925[(18)]);
var inst_35915 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_35880);
var inst_35916 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35879);
var state_35925__$1 = (function (){var statearr_35951 = state_35925;
(statearr_35951[(22)] = inst_35915);

return statearr_35951;
})();
var statearr_35952_35974 = state_35925__$1;
(statearr_35952_35974[(2)] = inst_35916);

(statearr_35952_35974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35926 === (8))){
var inst_35920 = (state_35925[(2)]);
var _ = (function (){var statearr_35953 = state_35925;
(statearr_35953[(4)] = cljs.core.rest.call(null,(state_35925[(4)])));

return statearr_35953;
})();
var state_35925__$1 = state_35925;
var statearr_35954_35975 = state_35925__$1;
(statearr_35954_35975[(2)] = inst_35920);

(statearr_35954_35975[(1)] = (3));


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
});
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____0 = (function (){
var statearr_35955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35955[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__);

(statearr_35955[(1)] = (1));

return statearr_35955;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____1 = (function (state_35925){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_35925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e35956){var ex__21902__auto__ = e35956;
var statearr_35957_35976 = state_35925;
(statearr_35957_35976[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_35925[(4)]))){
var statearr_35958_35977 = state_35925;
(statearr_35958_35977[(1)] = cljs.core.first.call(null,(state_35925[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35978 = state_35925;
state_35925 = G__35978;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__ = function(state_35925){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____1.call(this,state_35925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_35959 = f__22024__auto__.call(null);
(statearr_35959[(6)] = c__22023__auto___35960);

return statearr_35959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36038){
var state_val_36039 = (state_36038[(1)]);
if((state_val_36039 === (7))){
var inst_36033 = (state_36038[(2)]);
var _ = (function (){var statearr_36040 = state_36038;
(statearr_36040[(4)] = cljs.core.rest.call(null,(state_36038[(4)])));

return statearr_36040;
})();
var state_36038__$1 = state_36038;
var statearr_36041_36068 = state_36038__$1;
(statearr_36041_36068[(2)] = inst_36033);

(statearr_36041_36068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (1))){
var state_36038__$1 = state_36038;
var statearr_36042_36069 = state_36038__$1;
(statearr_36042_36069[(2)] = null);

(statearr_36042_36069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (4))){
var inst_35979 = (state_36038[(2)]);
var inst_35980 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35981 = [inst_35979];
var inst_35982 = cljs.core.PersistentHashMap.fromArrays(inst_35980,inst_35981);
var state_36038__$1 = state_36038;
var statearr_36043_36070 = state_36038__$1;
(statearr_36043_36070[(2)] = inst_35982);

(statearr_36043_36070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (13))){
var inst_36007 = (state_36038[(7)]);
var inst_36014 = (state_36038[(8)]);
var inst_36001 = (state_36038[(9)]);
var inst_36018 = klipse_clj.repl.create_state_compile.call(null);
var inst_36019 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_36020 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_36007,inst_36018,inst_36019);
var inst_36021 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_36014);
var inst_36022 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36001),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36021)].join('');
var inst_36000 = inst_36020;
var inst_36001__$1 = inst_36022;
var state_36038__$1 = (function (){var statearr_36044 = state_36038;
(statearr_36044[(10)] = inst_36000);

(statearr_36044[(9)] = inst_36001__$1);

return statearr_36044;
})();
var statearr_36045_36071 = state_36038__$1;
(statearr_36045_36071[(2)] = null);

(statearr_36045_36071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (6))){
var inst_36000 = (state_36038[(10)]);
var inst_36006 = (state_36038[(11)]);
var inst_36006__$1 = cljs.core.nth.call(null,inst_36000,(0),null);
var inst_36007 = cljs.core.nth.call(null,inst_36000,(1),null);
var inst_36008 = cljs.core.seq.call(null,inst_36006__$1);
var state_36038__$1 = (function (){var statearr_36046 = state_36038;
(statearr_36046[(11)] = inst_36006__$1);

(statearr_36046[(7)] = inst_36007);

return statearr_36046;
})();
if(inst_36008){
var statearr_36047_36072 = state_36038__$1;
(statearr_36047_36072[(1)] = (8));

} else {
var statearr_36048_36073 = state_36038__$1;
(statearr_36048_36073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (3))){
var inst_36036 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36038__$1,inst_36036);
} else {
if((state_val_36039 === (12))){
var inst_36014 = (state_36038[(8)]);
var state_36038__$1 = state_36038;
var statearr_36049_36074 = state_36038__$1;
(statearr_36049_36074[(2)] = inst_36014);

(statearr_36049_36074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (2))){
var _ = (function (){var statearr_36050 = state_36038;
(statearr_36050[(4)] = cljs.core.cons.call(null,(5),(state_36038[(4)])));

return statearr_36050;
})();
var inst_35995 = klipse_clj.repl.create_state_compile.call(null);
var inst_35996 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_35997 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35995,inst_35996);
var inst_35998 = cljs.core.nth.call(null,inst_35997,(0),null);
var inst_35999 = cljs.core.nth.call(null,inst_35997,(1),null);
var inst_36000 = inst_35997;
var inst_36001 = "";
var state_36038__$1 = (function (){var statearr_36051 = state_36038;
(statearr_36051[(12)] = inst_35998);

(statearr_36051[(13)] = inst_35999);

(statearr_36051[(10)] = inst_36000);

(statearr_36051[(9)] = inst_36001);

return statearr_36051;
})();
var statearr_36052_36075 = state_36038__$1;
(statearr_36052_36075[(2)] = null);

(statearr_36052_36075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (11))){
var inst_36014 = (state_36038[(8)]);
var inst_36014__$1 = (state_36038[(2)]);
var inst_36015 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_36014__$1);
var state_36038__$1 = (function (){var statearr_36054 = state_36038;
(statearr_36054[(8)] = inst_36014__$1);

return statearr_36054;
})();
if(cljs.core.truth_(inst_36015)){
var statearr_36055_36076 = state_36038__$1;
(statearr_36055_36076[(1)] = (12));

} else {
var statearr_36056_36077 = state_36038__$1;
(statearr_36056_36077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (9))){
var inst_36001 = (state_36038[(9)]);
var inst_36027 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_36028 = [inst_36001];
var inst_36029 = cljs.core.PersistentHashMap.fromArrays(inst_36027,inst_36028);
var state_36038__$1 = state_36038;
var statearr_36057_36078 = state_36038__$1;
(statearr_36057_36078[(2)] = inst_36029);

(statearr_36057_36078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (5))){
var _ = (function (){var statearr_36058 = state_36038;
(statearr_36058[(4)] = cljs.core.rest.call(null,(state_36038[(4)])));

return statearr_36058;
})();
var state_36038__$1 = state_36038;
var ex36053 = (state_36038__$1[(2)]);
var statearr_36059_36079 = state_36038__$1;
(statearr_36059_36079[(5)] = ex36053);


if((ex36053 instanceof Object)){
var statearr_36060_36080 = state_36038__$1;
(statearr_36060_36080[(1)] = (4));

(statearr_36060_36080[(5)] = null);

} else {
throw ex36053;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (14))){
var inst_36025 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36061_36081 = state_36038__$1;
(statearr_36061_36081[(2)] = inst_36025);

(statearr_36061_36081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (10))){
var inst_36031 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36062_36082 = state_36038__$1;
(statearr_36062_36082[(2)] = inst_36031);

(statearr_36062_36082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (8))){
var inst_36006 = (state_36038[(11)]);
var inst_36010 = klipse_clj.repl.create_state_compile.call(null);
var inst_36011 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_36010,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_36012 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_36006,inst_36011);
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36038__$1,(11),inst_36012);
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
});
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____0 = (function (){
var statearr_36063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36063[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__);

(statearr_36063[(1)] = (1));

return statearr_36063;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____1 = (function (state_36038){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36064){var ex__21902__auto__ = e36064;
var statearr_36065_36083 = state_36038;
(statearr_36065_36083[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36038[(4)]))){
var statearr_36066_36084 = state_36038;
(statearr_36066_36084[(1)] = cljs.core.first.call(null,(state_36038[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36085 = state_36038;
state_36038 = G__36085;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__ = function(state_36038){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____1.call(this,state_36038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36067 = f__22024__auto__.call(null);
(statearr_36067[(6)] = c__22023__auto__);

return statearr_36067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36101){
var state_val_36102 = (state_36101[(1)]);
if((state_val_36102 === (1))){
var inst_36089 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_36090 = cljs.core.nth.call(null,inst_36089,(0),null);
var inst_36091 = cljs.core.nth.call(null,inst_36089,(1),null);
var state_36101__$1 = (function (){var statearr_36103 = state_36101;
(statearr_36103[(7)] = inst_36091);

return statearr_36103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36101__$1,(2),inst_36090);
} else {
if((state_val_36102 === (2))){
var inst_36091 = (state_36101[(7)]);
var inst_36093 = (state_36101[(2)]);
var inst_36094 = klipse_clj.lang.clojure.result_as_str.call(null,inst_36093,opts);
var state_36101__$1 = (function (){var statearr_36104 = state_36101;
(statearr_36104[(8)] = inst_36094);

return statearr_36104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36101__$1,(3),inst_36091);
} else {
if((state_val_36102 === (3))){
var inst_36094 = (state_36101[(8)]);
var inst_36096 = (state_36101[(2)]);
var inst_36097 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_36098 = [inst_36096,inst_36094];
var inst_36099 = cljs.core.PersistentHashMap.fromArrays(inst_36097,inst_36098);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36101__$1,inst_36099);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____0 = (function (){
var statearr_36105 = [null,null,null,null,null,null,null,null,null];
(statearr_36105[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__);

(statearr_36105[(1)] = (1));

return statearr_36105;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____1 = (function (state_36101){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36106){var ex__21902__auto__ = e36106;
var statearr_36107_36110 = state_36101;
(statearr_36107_36110[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36101[(4)]))){
var statearr_36108_36111 = state_36101;
(statearr_36108_36111[(1)] = cljs.core.first.call(null,(state_36101[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36112 = state_36101;
state_36101 = G__36112;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__ = function(state_36101){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____1.call(this,state_36101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36109 = f__22024__auto__.call(null);
(statearr_36109[(6)] = c__22023__auto__);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36125){
var state_val_36126 = (state_36125[(1)]);
if((state_val_36126 === (1))){
var inst_36116 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_36117 = cljs.core.nth.call(null,inst_36116,(0),null);
var inst_36118 = cljs.core.nth.call(null,inst_36116,(1),null);
var state_36125__$1 = (function (){var statearr_36127 = state_36125;
(statearr_36127[(7)] = inst_36118);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36125__$1,(2),inst_36117);
} else {
if((state_val_36126 === (2))){
var inst_36118 = (state_36125[(7)]);
var inst_36120 = (state_36125[(2)]);
var inst_36121 = klipse_clj.lang.clojure.result_as_str.call(null,inst_36120,opts);
var state_36125__$1 = (function (){var statearr_36128 = state_36125;
(statearr_36128[(8)] = inst_36121);

return statearr_36128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36125__$1,(3),inst_36118);
} else {
if((state_val_36126 === (3))){
var inst_36121 = (state_36125[(8)]);
var inst_36123 = (state_36125[(2)]);
var state_36125__$1 = (function (){var statearr_36129 = state_36125;
(statearr_36129[(9)] = inst_36123);

return statearr_36129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36125__$1,inst_36121);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____0 = (function (){
var statearr_36130 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36130[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__);

(statearr_36130[(1)] = (1));

return statearr_36130;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____1 = (function (state_36125){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36131){var ex__21902__auto__ = e36131;
var statearr_36132_36135 = state_36125;
(statearr_36132_36135[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36125[(4)]))){
var statearr_36133_36136 = state_36125;
(statearr_36133_36136[(1)] = cljs.core.first.call(null,(state_36125[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36137 = state_36125;
state_36125 = G__36137;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__ = function(state_36125){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____1.call(this,state_36125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36134 = f__22024__auto__.call(null);
(statearr_36134[(6)] = c__22023__auto__);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__36139 = arguments.length;
switch (G__36139) {
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

(klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.the_eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36146){
var state_val_36147 = (state_36146[(1)]);
if((state_val_36147 === (1))){
var inst_36140 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_36141 = cljs.core.first.call(null,inst_36140);
var state_36146__$1 = state_36146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36146__$1,(2),inst_36141);
} else {
if((state_val_36147 === (2))){
var inst_36143 = (state_36146[(2)]);
var inst_36144 = klipse_clj.lang.clojure.read_result.call(null,inst_36143);
var state_36146__$1 = state_36146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36146__$1,inst_36144);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21899__auto____0 = (function (){
var statearr_36148 = [null,null,null,null,null,null,null];
(statearr_36148[(0)] = klipse_clj$lang$clojure$state_machine__21899__auto__);

(statearr_36148[(1)] = (1));

return statearr_36148;
});
var klipse_clj$lang$clojure$state_machine__21899__auto____1 = (function (state_36146){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36149){var ex__21902__auto__ = e36149;
var statearr_36150_36154 = state_36146;
(statearr_36150_36154[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36146[(4)]))){
var statearr_36151_36155 = state_36146;
(statearr_36151_36155[(1)] = cljs.core.first.call(null,(state_36146[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36156 = state_36146;
state_36146 = G__36156;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21899__auto__ = function(state_36146){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21899__auto____1.call(this,state_36146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21899__auto____0;
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36152 = f__22024__auto__.call(null);
(statearr_36152[(6)] = c__22023__auto__);

return statearr_36152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2);

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36163){
var state_val_36164 = (state_36163[(1)]);
if((state_val_36164 === (1))){
var inst_36157 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36163__$1,(2),inst_36157);
} else {
if((state_val_36164 === (2))){
var inst_36159 = (state_36163[(2)]);
var inst_36160 = cljs.core.clj__GT_js.call(null,inst_36159);
var inst_36161 = cb.call(null,inst_36160);
var state_36163__$1 = state_36163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36163__$1,inst_36161);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____0 = (function (){
var statearr_36165 = [null,null,null,null,null,null,null];
(statearr_36165[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__);

(statearr_36165[(1)] = (1));

return statearr_36165;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____1 = (function (state_36163){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36166){var ex__21902__auto__ = e36166;
var statearr_36167_36170 = state_36163;
(statearr_36167_36170[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36163[(4)]))){
var statearr_36168_36171 = state_36163;
(statearr_36168_36171[(1)] = cljs.core.first.call(null,(state_36163[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36172 = state_36163;
state_36163 = G__36172;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__ = function(state_36163){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____1.call(this,state_36163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36169 = f__22024__auto__.call(null);
(statearr_36169[(6)] = c__22023__auto__);

return statearr_36169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__36174 = arguments.length;
switch (G__36174) {
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

(klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse_clj.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36180){
var state_val_36181 = (state_36180[(1)]);
if((state_val_36181 === (1))){
var inst_36175 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36180__$1,(2),inst_36175);
} else {
if((state_val_36181 === (2))){
var inst_36177 = (state_36180[(2)]);
var inst_36178 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_36177);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36180__$1,inst_36178);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21899__auto____0 = (function (){
var statearr_36182 = [null,null,null,null,null,null,null];
(statearr_36182[(0)] = klipse_clj$lang$clojure$state_machine__21899__auto__);

(statearr_36182[(1)] = (1));

return statearr_36182;
});
var klipse_clj$lang$clojure$state_machine__21899__auto____1 = (function (state_36180){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36183){var ex__21902__auto__ = e36183;
var statearr_36184_36188 = state_36180;
(statearr_36184_36188[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36180[(4)]))){
var statearr_36185_36189 = state_36180;
(statearr_36185_36189[(1)] = cljs.core.first.call(null,(state_36180[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36190 = state_36180;
state_36180 = G__36190;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21899__auto__ = function(state_36180){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21899__auto____1.call(this,state_36180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21899__auto____0;
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36186 = f__22024__auto__.call(null);
(statearr_36186[(6)] = c__22023__auto__);

return statearr_36186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36196){
var state_val_36197 = (state_36196[(1)]);
if((state_val_36197 === (1))){
var inst_36191 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36196__$1,(2),inst_36191);
} else {
if((state_val_36197 === (2))){
var inst_36193 = (state_36196[(2)]);
var inst_36194 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_36193);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36196__$1,inst_36194);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____0 = (function (){
var statearr_36198 = [null,null,null,null,null,null,null];
(statearr_36198[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__);

(statearr_36198[(1)] = (1));

return statearr_36198;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____1 = (function (state_36196){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36199){var ex__21902__auto__ = e36199;
var statearr_36200_36203 = state_36196;
(statearr_36200_36203[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36196[(4)]))){
var statearr_36201_36204 = state_36196;
(statearr_36201_36204[(1)] = cljs.core.first.call(null,(state_36196[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36205 = state_36196;
state_36196 = G__36205;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__ = function(state_36196){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____1.call(this,state_36196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36202 = f__22024__auto__.call(null);
(statearr_36202[(6)] = c__22023__auto__);

return statearr_36202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36212){
var state_val_36213 = (state_36212[(1)]);
if((state_val_36213 === (1))){
var inst_36206 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36212__$1,(2),inst_36206);
} else {
if((state_val_36213 === (2))){
var inst_36208 = (state_36212[(2)]);
var inst_36209 = cljs.core.second.call(null,inst_36208);
var inst_36210 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36209);
var state_36212__$1 = state_36212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36212__$1,inst_36210);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____0 = (function (){
var statearr_36214 = [null,null,null,null,null,null,null];
(statearr_36214[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____1 = (function (state_36212){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36215){var ex__21902__auto__ = e36215;
var statearr_36216_36219 = state_36212;
(statearr_36216_36219[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36212[(4)]))){
var statearr_36217_36220 = state_36212;
(statearr_36217_36220[(1)] = cljs.core.first.call(null,(state_36212[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36221 = state_36212;
state_36212 = G__36221;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__ = function(state_36212){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____1.call(this,state_36212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36218 = f__22024__auto__.call(null);
(statearr_36218[(6)] = c__22023__auto__);

return statearr_36218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__36223){
var map__36224 = p__36223;
var map__36224__$1 = cljs.core.__destructure_map.call(null,map__36224);
var opts = map__36224__$1;
var container_id = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__22023__auto___36297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36270){
var state_val_36271 = (state_36270[(1)]);
if((state_val_36271 === (7))){
var inst_36238 = (state_36270[(7)]);
var inst_36239 = (state_36270[(8)]);
var inst_36233 = (state_36270[(2)]);
var inst_36238__$1 = cljs.core._STAR_print_newline_STAR_;
var inst_36239__$1 = cljs.core._STAR_print_fn_STAR_;
var inst_36240 = (function (){var _STAR_print_newline_STAR__orig_val__36234 = inst_36238__$1;
var _STAR_print_fn_STAR__orig_val__36235 = inst_36239__$1;
var _STAR_print_newline_STAR__temp_val__36236 = true;
return (function (p1__36222_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__36222_SHARP_);
});
})();
var inst_36241 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_36242 = (cljs.core._STAR_print_fn_STAR_ = inst_36240);
var state_36270__$1 = (function (){var statearr_36272 = state_36270;
(statearr_36272[(9)] = inst_36233);

(statearr_36272[(7)] = inst_36238__$1);

(statearr_36272[(8)] = inst_36239__$1);

(statearr_36272[(10)] = inst_36241);

(statearr_36272[(11)] = inst_36242);

return statearr_36272;
})();
var statearr_36273_36298 = state_36270__$1;
(statearr_36273_36298[(2)] = null);

(statearr_36273_36298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (1))){
var inst_36225 = clojure.string.blank_QMARK_.call(null,exp);
var state_36270__$1 = state_36270;
if(inst_36225){
var statearr_36274_36299 = state_36270__$1;
(statearr_36274_36299[(1)] = (2));

} else {
var statearr_36275_36300 = state_36270__$1;
(statearr_36275_36300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (4))){
var inst_36268 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36270__$1,inst_36268);
} else {
if((state_val_36271 === (6))){
var state_36270__$1 = state_36270;
var statearr_36276_36301 = state_36270__$1;
(statearr_36276_36301[(2)] = null);

(statearr_36276_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (3))){
var state_36270__$1 = state_36270;
if(cljs.core.truth_(setup_container_fn)){
var statearr_36277_36302 = state_36270__$1;
(statearr_36277_36302[(1)] = (5));

} else {
var statearr_36278_36303 = state_36270__$1;
(statearr_36278_36303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (12))){
var inst_36257 = (state_36270[(2)]);
var inst_36258 = cljs.core.__destructure_map.call(null,inst_36257);
var inst_36259 = cljs.core.get.call(null,inst_36258,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_36260 = cljs.core.get.call(null,inst_36258,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_36261 = cljs.core.second.call(null,inst_36260);
var inst_36262 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36261)].join('');
var inst_36263 = cljs.core.async.put_BANG_.call(null,c,inst_36262);
var _ = (function (){var statearr_36280 = state_36270;
(statearr_36280[(4)] = cljs.core.rest.call(null,(state_36270[(4)])));

return statearr_36280;
})();
var state_36270__$1 = state_36270;
var statearr_36281_36304 = state_36270__$1;
(statearr_36281_36304[(2)] = inst_36263);

(statearr_36281_36304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (2))){
var inst_36227 = cljs.core.async.put_BANG_.call(null,c,"");
var state_36270__$1 = state_36270;
var statearr_36282_36305 = state_36270__$1;
(statearr_36282_36305[(2)] = inst_36227);

(statearr_36282_36305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (11))){
var _ = (function (){var statearr_36283 = state_36270;
(statearr_36283[(4)] = cljs.core.rest.call(null,(state_36270[(4)])));

return statearr_36283;
})();
var state_36270__$1 = state_36270;
var ex36279 = (state_36270__$1[(2)]);
var statearr_36284_36306 = state_36270__$1;
(statearr_36284_36306[(5)] = ex36279);


throw ex36279;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (9))){
var inst_36266 = (state_36270[(2)]);
var state_36270__$1 = state_36270;
var statearr_36285_36307 = state_36270__$1;
(statearr_36285_36307[(2)] = inst_36266);

(statearr_36285_36307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (5))){
var inst_36230 = setup_container_fn.call(null,container_id);
var state_36270__$1 = state_36270;
var statearr_36286_36308 = state_36270__$1;
(statearr_36286_36308[(2)] = inst_36230);

(statearr_36286_36308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (10))){
var inst_36239 = (state_36270[(8)]);
var inst_36238 = (state_36270[(7)]);
var _ = (function (){var statearr_36287 = state_36270;
(statearr_36287[(4)] = cljs.core.rest.call(null,(state_36270[(4)])));

return statearr_36287;
})();
var inst_36244 = (state_36270[(2)]);
var inst_36245 = (cljs.core._STAR_print_fn_STAR_ = inst_36239);
var inst_36246 = (cljs.core._STAR_print_newline_STAR_ = inst_36238);
var ___$1 = (function (){var temp__5823__auto__ = (state_36270[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21131__auto__ = temp__5823__auto__;
throw e__21131__auto__;
} else {
return null;
}
})();
var state_36270__$1 = (function (){var statearr_36288 = state_36270;
(statearr_36288[(12)] = inst_36245);

(statearr_36288[(13)] = inst_36246);

return statearr_36288;
})();
var statearr_36289_36309 = state_36270__$1;
(statearr_36289_36309[(2)] = inst_36244);

(statearr_36289_36309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36271 === (8))){
var _ = (function (){var statearr_36290 = state_36270;
(statearr_36290[(4)] = cljs.core.cons.call(null,(10),(state_36270[(4)])));

return statearr_36290;
})();
var ___$1 = (function (){var statearr_36291 = state_36270;
(statearr_36291[(4)] = cljs.core.cons.call(null,(11),(state_36270[(4)])));

return statearr_36291;
})();
var inst_36255 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_36270__$1 = state_36270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36270__$1,(12),inst_36255);
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
});
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____0 = (function (){
var statearr_36292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36292[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__);

(statearr_36292[(1)] = (1));

return statearr_36292;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____1 = (function (state_36270){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36293){var ex__21902__auto__ = e36293;
var statearr_36294_36310 = state_36270;
(statearr_36294_36310[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36270[(4)]))){
var statearr_36295_36311 = state_36270;
(statearr_36295_36311[(1)] = cljs.core.first.call(null,(state_36270[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36312 = state_36270;
state_36270 = G__36312;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__ = function(state_36270){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____1.call(this,state_36270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36296 = f__22024__auto__.call(null);
(statearr_36296[(6)] = c__22023__auto___36297);

return statearr_36296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return c;
});
/**
 * Returns a promise with the result of the evaluation of exp
 */
klipse_clj.lang.clojure.str_eval_prom = (function klipse_clj$lang$clojure$str_eval_prom(exp,p__36314){
var map__36315 = p__36314;
var map__36315__$1 = cljs.core.__destructure_map.call(null,map__36315);
var opts = map__36315__$1;
var verbose = cljs.core.get.call(null,map__36315__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var p = (new Promise((function (resolve,reject){
if(cljs.core.truth_(verbose)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36368){
var state_val_36369 = (state_36368[(1)]);
if((state_val_36369 === (7))){
var inst_36322 = (state_36368[(7)]);
var _ = (function (){var statearr_36370 = state_36368;
(statearr_36370[(4)] = cljs.core.rest.call(null,(state_36368[(4)])));

return statearr_36370;
})();
var inst_36325 = (state_36368[(2)]);
var inst_36326 = (cljs.core._STAR_print_newline_STAR_ = inst_36322);
var ___$1 = (function (){var temp__5823__auto__ = (state_36368[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21131__auto__ = temp__5823__auto__;
throw e__21131__auto__;
} else {
return null;
}
})();
var state_36368__$1 = (function (){var statearr_36371 = state_36368;
(statearr_36371[(8)] = inst_36326);

return statearr_36371;
})();
var statearr_36372_36406 = state_36368__$1;
(statearr_36372_36406[(2)] = inst_36325);

(statearr_36372_36406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (1))){
var inst_36316 = clojure.string.blank_QMARK_.call(null,exp);
var state_36368__$1 = state_36368;
if(inst_36316){
var statearr_36373_36407 = state_36368__$1;
(statearr_36373_36407[(1)] = (2));

} else {
var statearr_36374_36408 = state_36368__$1;
(statearr_36374_36408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (4))){
var inst_36366 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36368__$1,inst_36366);
} else {
if((state_val_36369 === (15))){
var inst_36351 = (state_36368[(2)]);
var state_36368__$1 = (function (){var statearr_36375 = state_36368;
(statearr_36375[(9)] = inst_36351);

return statearr_36375;
})();
if(cljs.core.truth_(verbose)){
var statearr_36376_36409 = state_36368__$1;
(statearr_36376_36409[(1)] = (16));

} else {
var statearr_36377_36410 = state_36368__$1;
(statearr_36377_36410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (13))){
var inst_36339 = (state_36368[(10)]);
var inst_36348 = console.warn(inst_36339);
var state_36368__$1 = state_36368;
var statearr_36378_36411 = state_36368__$1;
(statearr_36378_36411[(2)] = inst_36348);

(statearr_36378_36411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (6))){
var inst_36364 = (state_36368[(2)]);
var state_36368__$1 = state_36368;
var statearr_36379_36412 = state_36368__$1;
(statearr_36379_36412[(2)] = inst_36364);

(statearr_36379_36412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (17))){
var state_36368__$1 = state_36368;
var statearr_36380_36413 = state_36368__$1;
(statearr_36380_36413[(2)] = null);

(statearr_36380_36413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (3))){
var inst_36322 = cljs.core._STAR_print_newline_STAR_;
var inst_36323 = (cljs.core._STAR_print_newline_STAR_ = false);
var state_36368__$1 = (function (){var statearr_36381 = state_36368;
(statearr_36381[(7)] = inst_36322);

(statearr_36381[(11)] = inst_36323);

return statearr_36381;
})();
var statearr_36382_36414 = state_36368__$1;
(statearr_36382_36414[(2)] = null);

(statearr_36382_36414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (12))){
var inst_36361 = (state_36368[(2)]);
var _ = (function (){var statearr_36383 = state_36368;
(statearr_36383[(4)] = cljs.core.rest.call(null,(state_36368[(4)])));

return statearr_36383;
})();
var state_36368__$1 = state_36368;
var statearr_36384_36415 = state_36368__$1;
(statearr_36384_36415[(2)] = inst_36361);

(statearr_36384_36415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (2))){
var inst_36318 = resolve.call(null,"");
var state_36368__$1 = state_36368;
var statearr_36385_36416 = state_36368__$1;
(statearr_36385_36416[(2)] = inst_36318);

(statearr_36385_36416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (11))){
var inst_36339 = (state_36368[(10)]);
var state_36368__$1 = state_36368;
if(cljs.core.truth_(inst_36339)){
var statearr_36386_36417 = state_36368__$1;
(statearr_36386_36417[(1)] = (13));

} else {
var statearr_36387_36418 = state_36368__$1;
(statearr_36387_36418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (9))){
var inst_36340 = (state_36368[(12)]);
var inst_36337 = (state_36368[(2)]);
var inst_36338 = cljs.core.__destructure_map.call(null,inst_36337);
var inst_36339 = cljs.core.get.call(null,inst_36338,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_36340__$1 = cljs.core.get.call(null,inst_36338,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_36341 = cljs.core.first.call(null,inst_36340__$1);
var inst_36342 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_36341);
var state_36368__$1 = (function (){var statearr_36388 = state_36368;
(statearr_36388[(10)] = inst_36339);

(statearr_36388[(12)] = inst_36340__$1);

return statearr_36388;
})();
if(inst_36342){
var statearr_36389_36419 = state_36368__$1;
(statearr_36389_36419[(1)] = (10));

} else {
var statearr_36390_36420 = state_36368__$1;
(statearr_36390_36420[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (5))){
var _ = (function (){var statearr_36391 = state_36368;
(statearr_36391[(4)] = cljs.core.cons.call(null,(7),(state_36368[(4)])));

return statearr_36391;
})();
var ___$1 = (function (){var statearr_36392 = state_36368;
(statearr_36392[(4)] = cljs.core.cons.call(null,(8),(state_36368[(4)])));

return statearr_36392;
})();
var inst_36335 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_36368__$1 = state_36368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36368__$1,(9),inst_36335);
} else {
if((state_val_36369 === (14))){
var state_36368__$1 = state_36368;
var statearr_36393_36421 = state_36368__$1;
(statearr_36393_36421[(2)] = null);

(statearr_36393_36421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (16))){
var inst_36353 = console.info("[clojure] evaluated",exp);
var state_36368__$1 = state_36368;
var statearr_36394_36422 = state_36368__$1;
(statearr_36394_36422[(2)] = inst_36353);

(statearr_36394_36422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (10))){
var inst_36340 = (state_36368[(12)]);
var inst_36344 = cljs.core.second.call(null,inst_36340);
var inst_36345 = reject.call(null,inst_36344);
var state_36368__$1 = state_36368;
var statearr_36396_36423 = state_36368__$1;
(statearr_36396_36423[(2)] = inst_36345);

(statearr_36396_36423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (18))){
var inst_36340 = (state_36368[(12)]);
var inst_36356 = (state_36368[(2)]);
var inst_36357 = cljs.core.second.call(null,inst_36340);
var inst_36358 = clojure.string.trim_newline.call(null,inst_36357);
var inst_36359 = resolve.call(null,inst_36358);
var state_36368__$1 = (function (){var statearr_36397 = state_36368;
(statearr_36397[(13)] = inst_36356);

return statearr_36397;
})();
var statearr_36398_36424 = state_36368__$1;
(statearr_36398_36424[(2)] = inst_36359);

(statearr_36398_36424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36369 === (8))){
var _ = (function (){var statearr_36399 = state_36368;
(statearr_36399[(4)] = cljs.core.rest.call(null,(state_36368[(4)])));

return statearr_36399;
})();
var state_36368__$1 = state_36368;
var ex36395 = (state_36368__$1[(2)]);
var statearr_36400_36425 = state_36368__$1;
(statearr_36400_36425[(5)] = ex36395);


throw ex36395;


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
});
return (function() {
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____0 = (function (){
var statearr_36401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36401[(0)] = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__);

(statearr_36401[(1)] = (1));

return statearr_36401;
});
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____1 = (function (state_36368){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36402){var ex__21902__auto__ = e36402;
var statearr_36403_36426 = state_36368;
(statearr_36403_36426[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36368[(4)]))){
var statearr_36404_36427 = state_36368;
(statearr_36404_36427[(1)] = cljs.core.first.call(null,(state_36368[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36428 = state_36368;
state_36368 = G__36428;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__ = function(state_36368){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____1.call(this,state_36368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36405 = f__22024__auto__.call(null);
(statearr_36405[(6)] = c__22023__auto__);

return statearr_36405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
})));
return p;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__36430 = arguments.length;
switch (G__36430) {
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

(klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.eval_async_prepl.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c = cljs.core.async.chan.call(null);
var c__22023__auto___36476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_36456){
var state_val_36457 = (state_36456[(1)]);
if((state_val_36457 === (1))){
var inst_36433 = (state_36456[(7)]);
var inst_36433__$1 = cljs.core._STAR_print_fn_STAR_;
var inst_36434 = (function (){var _STAR_print_fn_STAR__orig_val__36431 = inst_36433__$1;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_36435 = (cljs.core._STAR_print_fn_STAR_ = inst_36434);
var state_36456__$1 = (function (){var statearr_36458 = state_36456;
(statearr_36458[(7)] = inst_36433__$1);

(statearr_36458[(8)] = inst_36435);

return statearr_36458;
})();
var statearr_36459_36477 = state_36456__$1;
(statearr_36459_36477[(2)] = null);

(statearr_36459_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (2))){
var _ = (function (){var statearr_36460 = state_36456;
(statearr_36460[(4)] = cljs.core.cons.call(null,(4),(state_36456[(4)])));

return statearr_36460;
})();
var ___$1 = (function (){var statearr_36461 = state_36456;
(statearr_36461[(4)] = cljs.core.cons.call(null,(5),(state_36456[(4)])));

return statearr_36461;
})();
var inst_36446 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_36447 = cljs.core.first.call(null,inst_36446);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36456__$1,(6),inst_36447);
} else {
if((state_val_36457 === (3))){
var inst_36454 = (state_36456[(2)]);
var state_36456__$1 = state_36456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36456__$1,inst_36454);
} else {
if((state_val_36457 === (4))){
var inst_36433 = (state_36456[(7)]);
var _ = (function (){var statearr_36463 = state_36456;
(statearr_36463[(4)] = cljs.core.rest.call(null,(state_36456[(4)])));

return statearr_36463;
})();
var inst_36437 = (state_36456[(2)]);
var inst_36438 = (cljs.core._STAR_print_fn_STAR_ = inst_36433);
var ___$1 = (function (){var temp__5823__auto__ = (state_36456[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21131__auto__ = temp__5823__auto__;
throw e__21131__auto__;
} else {
return null;
}
})();
var state_36456__$1 = (function (){var statearr_36464 = state_36456;
(statearr_36464[(9)] = inst_36438);

return statearr_36464;
})();
var statearr_36465_36478 = state_36456__$1;
(statearr_36465_36478[(2)] = inst_36437);

(statearr_36465_36478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (5))){
var _ = (function (){var statearr_36466 = state_36456;
(statearr_36466[(4)] = cljs.core.rest.call(null,(state_36456[(4)])));

return statearr_36466;
})();
var state_36456__$1 = state_36456;
var ex36462 = (state_36456__$1[(2)]);
var statearr_36467_36479 = state_36456__$1;
(statearr_36467_36479[(5)] = ex36462);


throw ex36462;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36457 === (6))){
var inst_36449 = (state_36456[(2)]);
var inst_36450 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_36449,opts);
var inst_36451 = cljs.core.async.put_BANG_.call(null,c,inst_36450);
var _ = (function (){var statearr_36468 = state_36456;
(statearr_36468[(4)] = cljs.core.rest.call(null,(state_36456[(4)])));

return statearr_36468;
})();
var state_36456__$1 = state_36456;
var statearr_36469_36480 = state_36456__$1;
(statearr_36469_36480[(2)] = inst_36451);

(statearr_36469_36480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21899__auto____0 = (function (){
var statearr_36470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36470[(0)] = klipse_clj$lang$clojure$state_machine__21899__auto__);

(statearr_36470[(1)] = (1));

return statearr_36470;
});
var klipse_clj$lang$clojure$state_machine__21899__auto____1 = (function (state_36456){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_36456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e36471){var ex__21902__auto__ = e36471;
var statearr_36472_36481 = state_36456;
(statearr_36472_36481[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_36456[(4)]))){
var statearr_36473_36482 = state_36456;
(statearr_36473_36482[(1)] = cljs.core.first.call(null,(state_36456[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36483 = state_36456;
state_36456 = G__36483;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21899__auto__ = function(state_36456){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21899__auto____1.call(this,state_36456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21899__auto____0;
klipse_clj$lang$clojure$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21899__auto____1;
return klipse_clj$lang$clojure$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_36474 = f__22024__auto__.call(null);
(statearr_36474[(6)] = c__22023__auto___36476);

return statearr_36474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));


return c;
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=clojure.js.map
