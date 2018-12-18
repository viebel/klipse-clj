// Compiled by ClojureScript 1.10.439 {}
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
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17631){
var state_val_17632 = (state_17631[(1)]);
if((state_val_17632 === (7))){
var inst_17627 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17633_17659 = state_17631__$1;
(statearr_17633_17659[(2)] = inst_17627);

(statearr_17633_17659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (1))){
var inst_17572 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17631__$1,(2),inst_17572);
} else {
if((state_val_17632 === (4))){
var inst_17629 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17631__$1,inst_17629);
} else {
if((state_val_17632 === (15))){
var inst_17602 = (state_17631[(7)]);
var inst_17618 = (state_17631[(2)]);
var inst_17619 = cljs.core.next.call(null,inst_17602);
var inst_17583 = inst_17619;
var inst_17584 = null;
var inst_17585 = (0);
var inst_17586 = (0);
var state_17631__$1 = (function (){var statearr_17634 = state_17631;
(statearr_17634[(8)] = inst_17584);

(statearr_17634[(9)] = inst_17586);

(statearr_17634[(10)] = inst_17583);

(statearr_17634[(11)] = inst_17618);

(statearr_17634[(12)] = inst_17585);

return statearr_17634;
})();
var statearr_17635_17660 = state_17631__$1;
(statearr_17635_17660[(2)] = null);

(statearr_17635_17660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (13))){
var inst_17602 = (state_17631[(7)]);
var inst_17611 = cljs.core.first.call(null,inst_17602);
var inst_17612 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_17613 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17614 = [inst_17613,klipse_clj.repl.current_ns_eval];
var inst_17615 = cljs.core.PersistentHashMap.fromArrays(inst_17612,inst_17614);
var inst_17616 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_17611,inst_17615);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17631__$1,(15),inst_17616);
} else {
if((state_val_17632 === (6))){
var inst_17583 = (state_17631[(10)]);
var inst_17602 = (state_17631[(7)]);
var inst_17602__$1 = cljs.core.seq.call(null,inst_17583);
var state_17631__$1 = (function (){var statearr_17636 = state_17631;
(statearr_17636[(7)] = inst_17602__$1);

return statearr_17636;
})();
if(inst_17602__$1){
var statearr_17637_17661 = state_17631__$1;
(statearr_17637_17661[(1)] = (9));

} else {
var statearr_17638_17662 = state_17631__$1;
(statearr_17638_17662[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (3))){
var inst_17586 = (state_17631[(9)]);
var inst_17585 = (state_17631[(12)]);
var inst_17588 = (inst_17586 < inst_17585);
var inst_17589 = inst_17588;
var state_17631__$1 = state_17631;
if(cljs.core.truth_(inst_17589)){
var statearr_17639_17663 = state_17631__$1;
(statearr_17639_17663[(1)] = (5));

} else {
var statearr_17640_17664 = state_17631__$1;
(statearr_17640_17664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (12))){
var inst_17602 = (state_17631[(7)]);
var inst_17606 = cljs.core.chunk_first.call(null,inst_17602);
var inst_17607 = cljs.core.chunk_rest.call(null,inst_17602);
var inst_17608 = cljs.core.count.call(null,inst_17606);
var inst_17583 = inst_17607;
var inst_17584 = inst_17606;
var inst_17585 = inst_17608;
var inst_17586 = (0);
var state_17631__$1 = (function (){var statearr_17641 = state_17631;
(statearr_17641[(8)] = inst_17584);

(statearr_17641[(9)] = inst_17586);

(statearr_17641[(10)] = inst_17583);

(statearr_17641[(12)] = inst_17585);

return statearr_17641;
})();
var statearr_17642_17665 = state_17631__$1;
(statearr_17642_17665[(2)] = null);

(statearr_17642_17665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (2))){
var inst_17574 = (state_17631[(2)]);
var inst_17579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17580 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_17581 = (new cljs.core.PersistentVector(null,2,(5),inst_17579,inst_17580,null));
var inst_17582 = cljs.core.seq.call(null,inst_17581);
var inst_17583 = inst_17582;
var inst_17584 = null;
var inst_17585 = (0);
var inst_17586 = (0);
var state_17631__$1 = (function (){var statearr_17643 = state_17631;
(statearr_17643[(8)] = inst_17584);

(statearr_17643[(9)] = inst_17586);

(statearr_17643[(10)] = inst_17583);

(statearr_17643[(12)] = inst_17585);

(statearr_17643[(13)] = inst_17574);

return statearr_17643;
})();
var statearr_17644_17666 = state_17631__$1;
(statearr_17644_17666[(2)] = null);

(statearr_17644_17666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (11))){
var inst_17625 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17645_17667 = state_17631__$1;
(statearr_17645_17667[(2)] = inst_17625);

(statearr_17645_17667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (9))){
var inst_17602 = (state_17631[(7)]);
var inst_17604 = cljs.core.chunked_seq_QMARK_.call(null,inst_17602);
var state_17631__$1 = state_17631;
if(inst_17604){
var statearr_17646_17668 = state_17631__$1;
(statearr_17646_17668[(1)] = (12));

} else {
var statearr_17647_17669 = state_17631__$1;
(statearr_17647_17669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (5))){
var inst_17584 = (state_17631[(8)]);
var inst_17586 = (state_17631[(9)]);
var inst_17591 = cljs.core._nth.call(null,inst_17584,inst_17586);
var inst_17592 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_17593 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17594 = [inst_17593,klipse_clj.repl.current_ns_eval];
var inst_17595 = cljs.core.PersistentHashMap.fromArrays(inst_17592,inst_17594);
var inst_17596 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_17591,inst_17595);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17631__$1,(8),inst_17596);
} else {
if((state_val_17632 === (14))){
var inst_17622 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17651_17670 = state_17631__$1;
(statearr_17651_17670[(2)] = inst_17622);

(statearr_17651_17670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (10))){
var state_17631__$1 = state_17631;
var statearr_17652_17671 = state_17631__$1;
(statearr_17652_17671[(2)] = null);

(statearr_17652_17671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (8))){
var inst_17584 = (state_17631[(8)]);
var inst_17586 = (state_17631[(9)]);
var inst_17583 = (state_17631[(10)]);
var inst_17585 = (state_17631[(12)]);
var inst_17598 = (state_17631[(2)]);
var inst_17599 = (inst_17586 + (1));
var tmp17648 = inst_17584;
var tmp17649 = inst_17583;
var tmp17650 = inst_17585;
var inst_17583__$1 = tmp17649;
var inst_17584__$1 = tmp17648;
var inst_17585__$1 = tmp17650;
var inst_17586__$1 = inst_17599;
var state_17631__$1 = (function (){var statearr_17653 = state_17631;
(statearr_17653[(8)] = inst_17584__$1);

(statearr_17653[(9)] = inst_17586__$1);

(statearr_17653[(14)] = inst_17598);

(statearr_17653[(10)] = inst_17583__$1);

(statearr_17653[(12)] = inst_17585__$1);

return statearr_17653;
})();
var statearr_17654_17672 = state_17631__$1;
(statearr_17654_17672[(2)] = null);

(statearr_17654_17672[(1)] = (3));


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
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____0 = (function (){
var statearr_17655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17655[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__);

(statearr_17655[(1)] = (1));

return statearr_17655;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1 = (function (state_17631){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17656){if((e17656 instanceof Object)){
var ex__14973__auto__ = e17656;
var statearr_17657_17673 = state_17631;
(statearr_17657_17673[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17674 = state_17631;
state_17631 = G__17674;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__ = function(state_17631){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1.call(this,state_17631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17658 = f__14993__auto__.call(null);
(statearr_17658[(6)] = c__14992__auto__);

return statearr_17658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17677){
var state_val_17678 = (state_17677[(1)]);
if((state_val_17678 === (1))){
var inst_17675 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_17677__$1 = state_17677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17677__$1,inst_17675);
} else {
return null;
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0 = (function (){
var statearr_17679 = [null,null,null,null,null,null,null];
(statearr_17679[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__);

(statearr_17679[(1)] = (1));

return statearr_17679;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1 = (function (state_17677){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17680){if((e17680 instanceof Object)){
var ex__14973__auto__ = e17680;
var statearr_17681_17683 = state_17677;
(statearr_17681_17683[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17684 = state_17677;
state_17677 = G__17684;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__ = function(state_17677){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1.call(this,state_17677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17682 = f__14993__auto__.call(null);
(statearr_17682[(6)] = c__14992__auto__);

return statearr_17682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__17685){
var map__17686 = p__17685;
var map__17686__$1 = (((((!((map__17686 == null))))?(((((map__17686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17686):map__17686);
var print_length = cljs.core.get.call(null,map__17686__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__17686__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__17689 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__17690 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17690;

try{var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17691_17695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17692_17696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17693_17697 = true;
var _STAR_print_fn_STAR__temp_val__17694_17698 = ((function (_STAR_print_newline_STAR__orig_val__17691_17695,_STAR_print_fn_STAR__orig_val__17692_17696,_STAR_print_newline_STAR__temp_val__17693_17697,sb__4572__auto__,_STAR_print_length_STAR__orig_val__17689,_STAR_print_length_STAR__temp_val__17690,map__17686,map__17686__$1,print_length,beautify_strings){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__17691_17695,_STAR_print_fn_STAR__orig_val__17692_17696,_STAR_print_newline_STAR__temp_val__17693_17697,sb__4572__auto__,_STAR_print_length_STAR__orig_val__17689,_STAR_print_length_STAR__temp_val__17690,map__17686,map__17686__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17693_17697;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17694_17698;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4036__auto__ = typeof value === 'string';
if(and__4036__auto__){
return beautify_strings;
} else {
return and__4036__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17692_17696;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17691_17695;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17689;
}}catch (e17688){if((e17688 instanceof Object)){
var e = e17688;
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e17688;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__17699,verbose_QMARK_,current_ns){
var map__17700 = p__17699;
var map__17700__$1 = (((((!((map__17700 == null))))?(((((map__17700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17700):map__17700);
var ns = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null))].join('');

}
}
}catch (e17702){if((e17702 instanceof Object)){
var e = e17702;

return e;
} else {
throw e17702;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__17703,opts){
var map__17704 = p__17703;
var map__17704__$1 = (((((!((map__17704 == null))))?(((((map__17704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17704):map__17704);
var args = map__17704__$1;
var ns = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__17704__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__17706){
var map__17707 = p__17706;
var map__17707__$1 = (((((!((map__17707 == null))))?(((((map__17707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17707):map__17707);
var form = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__17709){
var map__17710 = p__17709;
var map__17710__$1 = (((((!((map__17710 == null))))?(((((map__17710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17710):map__17710);
var foo = map__17710__$1;
var value = cljs.core.get.call(null,map__17710__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__17710__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__17712){
var map__17713 = p__17712;
var map__17713__$1 = (((((!((map__17713 == null))))?(((((map__17713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17713):map__17713);
var args = map__17713__$1;
var file = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__17713__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__17715){
var map__17716 = p__17715;
var map__17716__$1 = (((((!((map__17716 == null))))?(((((map__17716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17716):map__17716);
var source = cljs.core.get.call(null,map__17716__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__17718){
var map__17719 = p__17718;
var map__17719__$1 = (((((!((map__17719 == null))))?(((((map__17719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17719):map__17719);
var static_fns = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__17719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4135__auto__ = max_eval_duration;
var y__4136__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__17719,map__17719__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__17719,map__17719__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__17721){
var map__17722 = p__17721;
var map__17722__$1 = (((((!((map__17722 == null))))?(((((map__17722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17722):map__17722);
var static_fns = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__17722__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4135__auto__ = max_eval_duration;
var y__4136__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,map__17722,map__17722__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,map__17722,map__17722__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
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
var G__17724 = cljs.core.conj.call(null,res,ch);
res = G__17724;
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
var _STAR_alias_map_STAR__orig_val__17725 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__17726 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__17727 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__17728 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__17729 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__17730 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__17731 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__17732 = ns;
var _STAR_cljs_ns_STAR__temp_val__17733 = ns;
var _STAR_compiler_STAR__temp_val__17734 = st;
var resolve_symbol_temp_val__17735 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__17736 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__17731;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__17732;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__17733;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__17734;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__17735;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__17736;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__17730;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__17729;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__17728;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__17727;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__17726;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__17725;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__17740 = arguments.length;
switch (G__17740) {
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
var _STAR_alias_map_STAR__orig_val__17741 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__17742 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__17743 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__17744 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__17745 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__17746 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__17747 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__17748 = ns;
var _STAR_cljs_ns_STAR__temp_val__17749 = ns;
var _STAR_compiler_STAR__temp_val__17750 = st;
var resolve_symbol_temp_val__17751 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__17752 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__17747;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__17748;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__17749;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__17750;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__17751;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__17752;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__17746;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__17745;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__17744;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__17743;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__17742;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__17741;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__17754 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__17754,(0),null);
var rest_s = cljs.core.nth.call(null,vec__17754,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__17757 = rest_s;
var G__17758 = res;
s__$1 = G__17757;
res = G__17758;
continue;
} else {
var G__17759 = rest_s;
var G__17760 = cljs.core.conj.call(null,res,exp);
s__$1 = G__17759;
res = G__17760;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__17761){
var map__17762 = p__17761;
var map__17762__$1 = (((((!((map__17762 == null))))?(((((map__17762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17762):map__17762);
var result_element = cljs.core.get.call(null,map__17762__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__17762__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__4036__auto__ = container;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__4036__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17821){
var state_val_17822 = (state_17821[(1)]);
if((state_val_17822 === (7))){
var inst_17817 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17823_17844 = state_17821__$1;
(statearr_17823_17844[(2)] = inst_17817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (1))){
var state_17821__$1 = state_17821;
var statearr_17824_17845 = state_17821__$1;
(statearr_17824_17845[(2)] = null);

(statearr_17824_17845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17821,(3),Object,null,(2));
var inst_17772 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17821__$1,(5),inst_17772);
} else {
if((state_val_17822 === (13))){
var inst_17794 = (state_17821[(7)]);
var inst_17802 = (state_17821[(8)]);
var inst_17807 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17808 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_17809 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_17794,inst_17807,inst_17808);
var inst_17787 = inst_17809;
var inst_17788 = inst_17802;
var state_17821__$1 = (function (){var statearr_17825 = state_17821;
(statearr_17825[(9)] = inst_17787);

(statearr_17825[(10)] = inst_17788);

return statearr_17825;
})();
var statearr_17826_17846 = state_17821__$1;
(statearr_17826_17846[(2)] = null);

(statearr_17826_17846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (6))){
var inst_17787 = (state_17821[(9)]);
var inst_17793 = (state_17821[(11)]);
var inst_17793__$1 = cljs.core.nth.call(null,inst_17787,(0),null);
var inst_17794 = cljs.core.nth.call(null,inst_17787,(1),null);
var inst_17795 = cljs.core.empty_QMARK_.call(null,inst_17793__$1);
var inst_17796 = (!(inst_17795));
var state_17821__$1 = (function (){var statearr_17827 = state_17821;
(statearr_17827[(7)] = inst_17794);

(statearr_17827[(11)] = inst_17793__$1);

return statearr_17827;
})();
if(inst_17796){
var statearr_17828_17847 = state_17821__$1;
(statearr_17828_17847[(1)] = (8));

} else {
var statearr_17829_17848 = state_17821__$1;
(statearr_17829_17848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (3))){
var inst_17764 = (state_17821[(2)]);
var inst_17765 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17766 = [inst_17764];
var inst_17767 = cljs.core.PersistentHashMap.fromArrays(inst_17765,inst_17766);
var inst_17768 = klipse_clj.lang.clojure.populate_err.call(null,inst_17767,opts);
var state_17821__$1 = state_17821;
var statearr_17830_17849 = state_17821__$1;
(statearr_17830_17849[(2)] = inst_17768);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (12))){
var inst_17802 = (state_17821[(8)]);
var inst_17805 = klipse_clj.lang.clojure.populate_err.call(null,inst_17802,opts);
var state_17821__$1 = state_17821;
var statearr_17831_17850 = state_17821__$1;
(statearr_17831_17850[(2)] = inst_17805);

(statearr_17831_17850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (2))){
var inst_17819 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17821__$1,inst_17819);
} else {
if((state_val_17822 === (11))){
var inst_17802 = (state_17821[(8)]);
var inst_17802__$1 = (state_17821[(2)]);
var inst_17803 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_17802__$1);
var state_17821__$1 = (function (){var statearr_17832 = state_17821;
(statearr_17832[(8)] = inst_17802__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17803)){
var statearr_17833_17851 = state_17821__$1;
(statearr_17833_17851[(1)] = (12));

} else {
var statearr_17834_17852 = state_17821__$1;
(statearr_17834_17852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (9))){
var inst_17788 = (state_17821[(10)]);
var state_17821__$1 = state_17821;
var statearr_17835_17853 = state_17821__$1;
(statearr_17835_17853[(2)] = inst_17788);

(statearr_17835_17853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (5))){
var inst_17774 = (state_17821[(2)]);
var inst_17782 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17783 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_17784 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_17782,inst_17783);
var inst_17785 = cljs.core.nth.call(null,inst_17784,(0),null);
var inst_17786 = cljs.core.nth.call(null,inst_17784,(1),null);
var inst_17787 = inst_17784;
var inst_17788 = null;
var state_17821__$1 = (function (){var statearr_17836 = state_17821;
(statearr_17836[(9)] = inst_17787);

(statearr_17836[(12)] = inst_17785);

(statearr_17836[(13)] = inst_17786);

(statearr_17836[(10)] = inst_17788);

(statearr_17836[(14)] = inst_17774);

return statearr_17836;
})();
var statearr_17837_17854 = state_17821__$1;
(statearr_17837_17854[(2)] = null);

(statearr_17837_17854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (14))){
var inst_17812 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17838_17855 = state_17821__$1;
(statearr_17838_17855[(2)] = inst_17812);

(statearr_17838_17855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (10))){
var inst_17815 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17839_17856 = state_17821__$1;
(statearr_17839_17856[(2)] = inst_17815);

(statearr_17839_17856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (8))){
var inst_17793 = (state_17821[(11)]);
var inst_17798 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17799 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_17798,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_17800 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_17793,inst_17799);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17821__$1,(11),inst_17800);
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
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____0 = (function (){
var statearr_17840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17840[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__);

(statearr_17840[(1)] = (1));

return statearr_17840;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1 = (function (state_17821){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17841){if((e17841 instanceof Object)){
var ex__14973__auto__ = e17841;
var statearr_17842_17857 = state_17821;
(statearr_17842_17857[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17858 = state_17821;
state_17821 = G__17858;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__ = function(state_17821){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1.call(this,state_17821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17843 = f__14993__auto__.call(null);
(statearr_17843[(6)] = c__14992__auto__);

return statearr_17843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17916){
var state_val_17917 = (state_17916[(1)]);
if((state_val_17917 === (7))){
var inst_17884 = (state_17916[(7)]);
var inst_17889 = klipse_clj.repl.create_state_compile.call(null);
var inst_17890 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_17889,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_17891 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_17884,inst_17890);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17916__$1,(10),inst_17891);
} else {
if((state_val_17917 === (1))){
var state_17916__$1 = state_17916;
var statearr_17918_17939 = state_17916__$1;
(statearr_17918_17939[(2)] = null);

(statearr_17918_17939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17916,(3),Object,null,(2));
var inst_17873 = klipse_clj.repl.create_state_compile.call(null);
var inst_17874 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_17875 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_17873,inst_17874);
var inst_17876 = cljs.core.nth.call(null,inst_17875,(0),null);
var inst_17877 = cljs.core.nth.call(null,inst_17875,(1),null);
var inst_17878 = inst_17875;
var inst_17879 = "";
var state_17916__$1 = (function (){var statearr_17919 = state_17916;
(statearr_17919[(8)] = inst_17876);

(statearr_17919[(9)] = inst_17879);

(statearr_17919[(10)] = inst_17877);

(statearr_17919[(11)] = inst_17878);

return statearr_17919;
})();
var statearr_17920_17940 = state_17916__$1;
(statearr_17920_17940[(2)] = null);

(statearr_17920_17940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (13))){
var inst_17904 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17921_17941 = state_17916__$1;
(statearr_17921_17941[(2)] = inst_17904);

(statearr_17921_17941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (6))){
var inst_17912 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17922_17942 = state_17916__$1;
(statearr_17922_17942[(2)] = inst_17912);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (3))){
var inst_17859 = (state_17916[(2)]);
var inst_17860 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_17861 = [inst_17859];
var inst_17862 = cljs.core.PersistentHashMap.fromArrays(inst_17860,inst_17861);
var state_17916__$1 = state_17916;
var statearr_17923_17943 = state_17916__$1;
(statearr_17923_17943[(2)] = inst_17862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (12))){
var inst_17879 = (state_17916[(9)]);
var inst_17893 = (state_17916[(12)]);
var inst_17885 = (state_17916[(13)]);
var inst_17897 = klipse_clj.repl.create_state_compile.call(null);
var inst_17898 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_17899 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_17885,inst_17897,inst_17898);
var inst_17900 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_17893);
var inst_17901 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17879),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17900)].join('');
var inst_17878 = inst_17899;
var inst_17879__$1 = inst_17901;
var state_17916__$1 = (function (){var statearr_17924 = state_17916;
(statearr_17924[(9)] = inst_17879__$1);

(statearr_17924[(11)] = inst_17878);

return statearr_17924;
})();
var statearr_17925_17944 = state_17916__$1;
(statearr_17925_17944[(2)] = null);

(statearr_17925_17944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (2))){
var inst_17914 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17916__$1,inst_17914);
} else {
if((state_val_17917 === (11))){
var inst_17893 = (state_17916[(12)]);
var state_17916__$1 = state_17916;
var statearr_17926_17945 = state_17916__$1;
(statearr_17926_17945[(2)] = inst_17893);

(statearr_17926_17945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (9))){
var inst_17910 = (state_17916[(2)]);
var state_17916__$1 = state_17916;
var statearr_17927_17946 = state_17916__$1;
(statearr_17927_17946[(2)] = inst_17910);

(statearr_17927_17946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (5))){
var inst_17878 = (state_17916[(11)]);
var inst_17884 = (state_17916[(7)]);
var inst_17884__$1 = cljs.core.nth.call(null,inst_17878,(0),null);
var inst_17885 = cljs.core.nth.call(null,inst_17878,(1),null);
var inst_17886 = cljs.core.empty_QMARK_.call(null,inst_17884__$1);
var inst_17887 = (!(inst_17886));
var state_17916__$1 = (function (){var statearr_17928 = state_17916;
(statearr_17928[(7)] = inst_17884__$1);

(statearr_17928[(13)] = inst_17885);

return statearr_17928;
})();
if(inst_17887){
var statearr_17929_17947 = state_17916__$1;
(statearr_17929_17947[(1)] = (7));

} else {
var statearr_17930_17948 = state_17916__$1;
(statearr_17930_17948[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (10))){
var inst_17893 = (state_17916[(12)]);
var inst_17893__$1 = (state_17916[(2)]);
var inst_17894 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_17893__$1);
var state_17916__$1 = (function (){var statearr_17931 = state_17916;
(statearr_17931[(12)] = inst_17893__$1);

return statearr_17931;
})();
if(cljs.core.truth_(inst_17894)){
var statearr_17932_17949 = state_17916__$1;
(statearr_17932_17949[(1)] = (11));

} else {
var statearr_17933_17950 = state_17916__$1;
(statearr_17933_17950[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17917 === (8))){
var inst_17879 = (state_17916[(9)]);
var inst_17906 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_17907 = [inst_17879];
var inst_17908 = cljs.core.PersistentHashMap.fromArrays(inst_17906,inst_17907);
var state_17916__$1 = state_17916;
var statearr_17934_17951 = state_17916__$1;
(statearr_17934_17951[(2)] = inst_17908);

(statearr_17934_17951[(1)] = (9));


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
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____0 = (function (){
var statearr_17935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17935[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__);

(statearr_17935[(1)] = (1));

return statearr_17935;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1 = (function (state_17916){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17936){if((e17936 instanceof Object)){
var ex__14973__auto__ = e17936;
var statearr_17937_17952 = state_17916;
(statearr_17937_17952[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_17916;
state_17916 = G__17953;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__ = function(state_17916){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1.call(this,state_17916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17938 = f__14993__auto__.call(null);
(statearr_17938[(6)] = c__14992__auto__);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17959){
var state_val_17960 = (state_17959[(1)]);
if((state_val_17960 === (1))){
var inst_17954 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17959__$1,(2),inst_17954);
} else {
if((state_val_17960 === (2))){
var inst_17956 = (state_17959[(2)]);
var inst_17957 = klipse_clj.lang.clojure.result_as_str.call(null,inst_17956,opts);
var state_17959__$1 = state_17959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17959__$1,inst_17957);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null];
(statearr_17961[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1 = (function (state_17959){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17962){if((e17962 instanceof Object)){
var ex__14973__auto__ = e17962;
var statearr_17963_17965 = state_17959;
(statearr_17963_17965[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17966 = state_17959;
state_17959 = G__17966;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__ = function(state_17959){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1.call(this,state_17959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17964 = f__14993__auto__.call(null);
(statearr_17964[(6)] = c__14992__auto__);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__17968 = arguments.length;
switch (G__17968) {
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
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17974){
var state_val_17975 = (state_17974[(1)]);
if((state_val_17975 === (1))){
var inst_17969 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17974__$1,(2),inst_17969);
} else {
if((state_val_17975 === (2))){
var inst_17971 = (state_17974[(2)]);
var inst_17972 = klipse_clj.lang.clojure.read_result.call(null,inst_17971);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17974__$1,inst_17972);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14970__auto____0 = (function (){
var statearr_17976 = [null,null,null,null,null,null,null];
(statearr_17976[(0)] = klipse_clj$lang$clojure$state_machine__14970__auto__);

(statearr_17976[(1)] = (1));

return statearr_17976;
});
var klipse_clj$lang$clojure$state_machine__14970__auto____1 = (function (state_17974){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17977){if((e17977 instanceof Object)){
var ex__14973__auto__ = e17977;
var statearr_17978_17981 = state_17974;
(statearr_17978_17981[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17982 = state_17974;
state_17974 = G__17982;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14970__auto__ = function(state_17974){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14970__auto____1.call(this,state_17974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14970__auto____0;
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14970__auto____1;
return klipse_clj$lang$clojure$state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17979 = f__14993__auto__.call(null);
(statearr_17979[(6)] = c__14992__auto__);

return statearr_17979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_17989){
var state_val_17990 = (state_17989[(1)]);
if((state_val_17990 === (1))){
var inst_17983 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17989__$1,(2),inst_17983);
} else {
if((state_val_17990 === (2))){
var inst_17985 = (state_17989[(2)]);
var inst_17986 = cljs.core.clj__GT_js.call(null,inst_17985);
var inst_17987 = cb.call(null,inst_17986);
var state_17989__$1 = state_17989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17989__$1,inst_17987);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____0 = (function (){
var statearr_17991 = [null,null,null,null,null,null,null];
(statearr_17991[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__);

(statearr_17991[(1)] = (1));

return statearr_17991;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1 = (function (state_17989){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_17989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e17992){if((e17992 instanceof Object)){
var ex__14973__auto__ = e17992;
var statearr_17993_17995 = state_17989;
(statearr_17993_17995[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17996 = state_17989;
state_17989 = G__17996;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__ = function(state_17989){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1.call(this,state_17989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_17994 = f__14993__auto__.call(null);
(statearr_17994[(6)] = c__14992__auto__);

return statearr_17994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__17998 = arguments.length;
switch (G__17998) {
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
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_18004){
var state_val_18005 = (state_18004[(1)]);
if((state_val_18005 === (1))){
var inst_17999 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18004__$1,(2),inst_17999);
} else {
if((state_val_18005 === (2))){
var inst_18001 = (state_18004[(2)]);
var inst_18002 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_18001);
var state_18004__$1 = state_18004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18004__$1,inst_18002);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14970__auto____0 = (function (){
var statearr_18006 = [null,null,null,null,null,null,null];
(statearr_18006[(0)] = klipse_clj$lang$clojure$state_machine__14970__auto__);

(statearr_18006[(1)] = (1));

return statearr_18006;
});
var klipse_clj$lang$clojure$state_machine__14970__auto____1 = (function (state_18004){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_18004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e18007){if((e18007 instanceof Object)){
var ex__14973__auto__ = e18007;
var statearr_18008_18011 = state_18004;
(statearr_18008_18011[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18012 = state_18004;
state_18004 = G__18012;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14970__auto__ = function(state_18004){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14970__auto____1.call(this,state_18004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14970__auto____0;
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14970__auto____1;
return klipse_clj$lang$clojure$state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_18009 = f__14993__auto__.call(null);
(statearr_18009[(6)] = c__14992__auto__);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_18018){
var state_val_18019 = (state_18018[(1)]);
if((state_val_18019 === (1))){
var inst_18013 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18018__$1,(2),inst_18013);
} else {
if((state_val_18019 === (2))){
var inst_18015 = (state_18018[(2)]);
var inst_18016 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_18015);
var state_18018__$1 = state_18018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18018__$1,inst_18016);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____0 = (function (){
var statearr_18020 = [null,null,null,null,null,null,null];
(statearr_18020[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__);

(statearr_18020[(1)] = (1));

return statearr_18020;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1 = (function (state_18018){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_18018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e18021){if((e18021 instanceof Object)){
var ex__14973__auto__ = e18021;
var statearr_18022_18024 = state_18018;
(statearr_18022_18024[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18025 = state_18018;
state_18018 = G__18025;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__ = function(state_18018){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1.call(this,state_18018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_18023 = f__14993__auto__.call(null);
(statearr_18023[(6)] = c__14992__auto__);

return statearr_18023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__14992__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto__){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto__){
return (function (state_18032){
var state_val_18033 = (state_18032[(1)]);
if((state_val_18033 === (1))){
var inst_18026 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18032__$1,(2),inst_18026);
} else {
if((state_val_18033 === (2))){
var inst_18028 = (state_18032[(2)]);
var inst_18029 = cljs.core.second.call(null,inst_18028);
var inst_18030 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18029);
var state_18032__$1 = state_18032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18032__$1,inst_18030);
} else {
return null;
}
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____0 = (function (){
var statearr_18034 = [null,null,null,null,null,null,null];
(statearr_18034[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__);

(statearr_18034[(1)] = (1));

return statearr_18034;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1 = (function (state_18032){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_18032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e18035){if((e18035 instanceof Object)){
var ex__14973__auto__ = e18035;
var statearr_18036_18038 = state_18032;
(statearr_18036_18038[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18039 = state_18032;
state_18032 = G__18039;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__ = function(state_18032){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1.call(this,state_18032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_18037 = f__14993__auto__.call(null);
(statearr_18037[(6)] = c__14992__auto__);

return statearr_18037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__18041){
var map__18042 = p__18041;
var map__18042__$1 = (((((!((map__18042 == null))))?(((((map__18042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18042):map__18042);
var opts = map__18042__$1;
var container_id = cljs.core.get.call(null,map__18042__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__18042__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__18042__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14992__auto___18094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_18076){
var state_val_18077 = (state_18076[(1)]);
if((state_val_18077 === (7))){
var inst_18052 = (state_18076[(2)]);
var inst_18057 = (function (){var _STAR_print_newline_STAR__orig_val__18053 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18054 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18055 = true;
return ((function (_STAR_print_newline_STAR__orig_val__18053,_STAR_print_fn_STAR__orig_val__18054,_STAR_print_newline_STAR__temp_val__18055,inst_18052,state_val_18077,c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__18040_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18040_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__18053,_STAR_print_fn_STAR__orig_val__18054,_STAR_print_newline_STAR__temp_val__18055,inst_18052,state_val_18077,c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_18058 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_18059 = cljs.core._STAR_print_fn_STAR_ = inst_18057;
var state_18076__$1 = (function (){var statearr_18078 = state_18076;
(statearr_18078[(7)] = inst_18058);

(statearr_18078[(8)] = inst_18052);

(statearr_18078[(9)] = inst_18059);

return statearr_18078;
})();
var statearr_18079_18095 = state_18076__$1;
(statearr_18079_18095[(2)] = null);

(statearr_18079_18095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (1))){
var inst_18044 = clojure.string.blank_QMARK_.call(null,exp);
var state_18076__$1 = state_18076;
if(inst_18044){
var statearr_18080_18096 = state_18076__$1;
(statearr_18080_18096[(1)] = (2));

} else {
var statearr_18081_18097 = state_18076__$1;
(statearr_18081_18097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (4))){
var inst_18074 = (state_18076[(2)]);
var state_18076__$1 = state_18076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18076__$1,inst_18074);
} else {
if((state_val_18077 === (6))){
var state_18076__$1 = state_18076;
var statearr_18082_18098 = state_18076__$1;
(statearr_18082_18098[(2)] = null);

(statearr_18082_18098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (3))){
var state_18076__$1 = state_18076;
if(cljs.core.truth_(setup_container_fn)){
var statearr_18083_18099 = state_18076__$1;
(statearr_18083_18099[(1)] = (5));

} else {
var statearr_18084_18100 = state_18076__$1;
(statearr_18084_18100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (2))){
var inst_18046 = cljs.core.async.put_BANG_.call(null,c,"");
var state_18076__$1 = state_18076;
var statearr_18085_18101 = state_18076__$1;
(statearr_18085_18101[(2)] = inst_18046);

(statearr_18085_18101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (11))){
var inst_18068 = (state_18076[(2)]);
var inst_18069 = cljs.core.second.call(null,inst_18068);
var inst_18070 = cljs.core.async.put_BANG_.call(null,c,inst_18069);
var state_18076__$1 = state_18076;
var statearr_18086_18102 = state_18076__$1;
(statearr_18086_18102[(2)] = inst_18070);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18076__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (9))){
var inst_18060 = (state_18076[(2)]);
var inst_18061 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_18062 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_18076__$1 = (function (){var statearr_18087 = state_18076;
(statearr_18087[(10)] = inst_18061);

(statearr_18087[(11)] = inst_18062);

(statearr_18087[(12)] = inst_18060);

return statearr_18087;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18076__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (5))){
var inst_18049 = setup_container_fn.call(null,container_id);
var state_18076__$1 = state_18076;
var statearr_18088_18103 = state_18076__$1;
(statearr_18088_18103[(2)] = inst_18049);

(statearr_18088_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18077 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18076,null,null,(9),(8));
var inst_18066 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_18076__$1 = state_18076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18076__$1,(11),inst_18066);
} else {
if((state_val_18077 === (8))){
var inst_18072 = (state_18076[(2)]);
var state_18076__$1 = state_18076;
var statearr_18089_18104 = state_18076__$1;
(statearr_18089_18104[(2)] = inst_18072);

(statearr_18089_18104[(1)] = (4));


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
});})(c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__14969__auto__,c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0 = (function (){
var statearr_18090 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18090[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__);

(statearr_18090[(1)] = (1));

return statearr_18090;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1 = (function (state_18076){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_18076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e18091){if((e18091 instanceof Object)){
var ex__14973__auto__ = e18091;
var statearr_18092_18105 = state_18076;
(statearr_18092_18105[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18106 = state_18076;
state_18076 = G__18106;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__ = function(state_18076){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1.call(this,state_18076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__14994__auto__ = (function (){var statearr_18093 = f__14993__auto__.call(null);
(statearr_18093[(6)] = c__14992__auto___18094);

return statearr_18093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto___18094,c,map__18042,map__18042__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
