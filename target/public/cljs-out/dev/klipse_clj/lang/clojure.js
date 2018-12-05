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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_149992){
var state_val_149993 = (state_149992[(1)]);
if((state_val_149993 === (7))){
var inst_149988 = (state_149992[(2)]);
var state_149992__$1 = state_149992;
var statearr_149994_150020 = state_149992__$1;
(statearr_149994_150020[(2)] = inst_149988);

(statearr_149994_150020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (1))){
var inst_149933 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_149992__$1 = state_149992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149992__$1,(2),inst_149933);
} else {
if((state_val_149993 === (4))){
var inst_149990 = (state_149992[(2)]);
var state_149992__$1 = state_149992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_149992__$1,inst_149990);
} else {
if((state_val_149993 === (15))){
var inst_149963 = (state_149992[(7)]);
var inst_149979 = (state_149992[(2)]);
var inst_149980 = cljs.core.next.call(null,inst_149963);
var inst_149944 = inst_149980;
var inst_149945 = null;
var inst_149946 = (0);
var inst_149947 = (0);
var state_149992__$1 = (function (){var statearr_149995 = state_149992;
(statearr_149995[(8)] = inst_149944);

(statearr_149995[(9)] = inst_149946);

(statearr_149995[(10)] = inst_149947);

(statearr_149995[(11)] = inst_149979);

(statearr_149995[(12)] = inst_149945);

return statearr_149995;
})();
var statearr_149996_150021 = state_149992__$1;
(statearr_149996_150021[(2)] = null);

(statearr_149996_150021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (13))){
var inst_149963 = (state_149992[(7)]);
var inst_149972 = cljs.core.first.call(null,inst_149963);
var inst_149973 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_149974 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_149975 = [inst_149974,klipse_clj.repl.current_ns_eval];
var inst_149976 = cljs.core.PersistentHashMap.fromArrays(inst_149973,inst_149975);
var inst_149977 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_149972,inst_149976);
var state_149992__$1 = state_149992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149992__$1,(15),inst_149977);
} else {
if((state_val_149993 === (6))){
var inst_149944 = (state_149992[(8)]);
var inst_149963 = (state_149992[(7)]);
var inst_149963__$1 = cljs.core.seq.call(null,inst_149944);
var state_149992__$1 = (function (){var statearr_149997 = state_149992;
(statearr_149997[(7)] = inst_149963__$1);

return statearr_149997;
})();
if(inst_149963__$1){
var statearr_149998_150022 = state_149992__$1;
(statearr_149998_150022[(1)] = (9));

} else {
var statearr_149999_150023 = state_149992__$1;
(statearr_149999_150023[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (3))){
var inst_149946 = (state_149992[(9)]);
var inst_149947 = (state_149992[(10)]);
var inst_149949 = (inst_149947 < inst_149946);
var inst_149950 = inst_149949;
var state_149992__$1 = state_149992;
if(cljs.core.truth_(inst_149950)){
var statearr_150000_150024 = state_149992__$1;
(statearr_150000_150024[(1)] = (5));

} else {
var statearr_150001_150025 = state_149992__$1;
(statearr_150001_150025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (12))){
var inst_149963 = (state_149992[(7)]);
var inst_149967 = cljs.core.chunk_first.call(null,inst_149963);
var inst_149968 = cljs.core.chunk_rest.call(null,inst_149963);
var inst_149969 = cljs.core.count.call(null,inst_149967);
var inst_149944 = inst_149968;
var inst_149945 = inst_149967;
var inst_149946 = inst_149969;
var inst_149947 = (0);
var state_149992__$1 = (function (){var statearr_150002 = state_149992;
(statearr_150002[(8)] = inst_149944);

(statearr_150002[(9)] = inst_149946);

(statearr_150002[(10)] = inst_149947);

(statearr_150002[(12)] = inst_149945);

return statearr_150002;
})();
var statearr_150003_150026 = state_149992__$1;
(statearr_150003_150026[(2)] = null);

(statearr_150003_150026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (2))){
var inst_149935 = (state_149992[(2)]);
var inst_149940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_149941 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_149942 = (new cljs.core.PersistentVector(null,2,(5),inst_149940,inst_149941,null));
var inst_149943 = cljs.core.seq.call(null,inst_149942);
var inst_149944 = inst_149943;
var inst_149945 = null;
var inst_149946 = (0);
var inst_149947 = (0);
var state_149992__$1 = (function (){var statearr_150004 = state_149992;
(statearr_150004[(8)] = inst_149944);

(statearr_150004[(9)] = inst_149946);

(statearr_150004[(13)] = inst_149935);

(statearr_150004[(10)] = inst_149947);

(statearr_150004[(12)] = inst_149945);

return statearr_150004;
})();
var statearr_150005_150027 = state_149992__$1;
(statearr_150005_150027[(2)] = null);

(statearr_150005_150027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (11))){
var inst_149986 = (state_149992[(2)]);
var state_149992__$1 = state_149992;
var statearr_150006_150028 = state_149992__$1;
(statearr_150006_150028[(2)] = inst_149986);

(statearr_150006_150028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (9))){
var inst_149963 = (state_149992[(7)]);
var inst_149965 = cljs.core.chunked_seq_QMARK_.call(null,inst_149963);
var state_149992__$1 = state_149992;
if(inst_149965){
var statearr_150007_150029 = state_149992__$1;
(statearr_150007_150029[(1)] = (12));

} else {
var statearr_150008_150030 = state_149992__$1;
(statearr_150008_150030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (5))){
var inst_149947 = (state_149992[(10)]);
var inst_149945 = (state_149992[(12)]);
var inst_149952 = cljs.core._nth.call(null,inst_149945,inst_149947);
var inst_149953 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_149954 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_149955 = [inst_149954,klipse_clj.repl.current_ns_eval];
var inst_149956 = cljs.core.PersistentHashMap.fromArrays(inst_149953,inst_149955);
var inst_149957 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_149952,inst_149956);
var state_149992__$1 = state_149992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_149992__$1,(8),inst_149957);
} else {
if((state_val_149993 === (14))){
var inst_149983 = (state_149992[(2)]);
var state_149992__$1 = state_149992;
var statearr_150012_150031 = state_149992__$1;
(statearr_150012_150031[(2)] = inst_149983);

(statearr_150012_150031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (10))){
var state_149992__$1 = state_149992;
var statearr_150013_150032 = state_149992__$1;
(statearr_150013_150032[(2)] = null);

(statearr_150013_150032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_149993 === (8))){
var inst_149944 = (state_149992[(8)]);
var inst_149946 = (state_149992[(9)]);
var inst_149947 = (state_149992[(10)]);
var inst_149945 = (state_149992[(12)]);
var inst_149959 = (state_149992[(2)]);
var inst_149960 = (inst_149947 + (1));
var tmp150009 = inst_149944;
var tmp150010 = inst_149946;
var tmp150011 = inst_149945;
var inst_149944__$1 = tmp150009;
var inst_149945__$1 = tmp150011;
var inst_149946__$1 = tmp150010;
var inst_149947__$1 = inst_149960;
var state_149992__$1 = (function (){var statearr_150014 = state_149992;
(statearr_150014[(8)] = inst_149944__$1);

(statearr_150014[(9)] = inst_149946__$1);

(statearr_150014[(14)] = inst_149959);

(statearr_150014[(10)] = inst_149947__$1);

(statearr_150014[(12)] = inst_149945__$1);

return statearr_150014;
})();
var statearr_150015_150033 = state_149992__$1;
(statearr_150015_150033[(2)] = null);

(statearr_150015_150033[(1)] = (3));


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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____0 = (function (){
var statearr_150016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150016[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__);

(statearr_150016[(1)] = (1));

return statearr_150016;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____1 = (function (state_149992){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_149992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150017){if((e150017 instanceof Object)){
var ex__15810__auto__ = e150017;
var statearr_150018_150034 = state_149992;
(statearr_150018_150034[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_149992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150035 = state_149992;
state_149992 = G__150035;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__ = function(state_149992){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____1.call(this,state_149992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150019 = f__15830__auto__.call(null);
(statearr_150019[(6)] = c__15829__auto__);

return statearr_150019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150038){
var state_val_150039 = (state_150038[(1)]);
if((state_val_150039 === (1))){
var inst_150036 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_150038__$1 = state_150038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150038__$1,inst_150036);
} else {
return null;
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____0 = (function (){
var statearr_150040 = [null,null,null,null,null,null,null];
(statearr_150040[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__);

(statearr_150040[(1)] = (1));

return statearr_150040;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____1 = (function (state_150038){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150041){if((e150041 instanceof Object)){
var ex__15810__auto__ = e150041;
var statearr_150042_150044 = state_150038;
(statearr_150042_150044[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150045 = state_150038;
state_150038 = G__150045;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__ = function(state_150038){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____1.call(this,state_150038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150043 = f__15830__auto__.call(null);
(statearr_150043[(6)] = c__15829__auto__);

return statearr_150043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__150046){
var map__150047 = p__150046;
var map__150047__$1 = ((((!((map__150047 == null)))?(((((map__150047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150047):map__150047);
var print_length = cljs.core.get.call(null,map__150047__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__150047__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_150049 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_150050_150052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_150051_150053 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_150050_150052,_STAR_print_fn_STAR_150051_150053,sb__4430__auto__,_STAR_print_length_STAR_150049,map__150047,map__150047__$1,print_length,beautify_strings){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_150050_150052,_STAR_print_fn_STAR_150051_150053,sb__4430__auto__,_STAR_print_length_STAR_150049,map__150047,map__150047__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = typeof value === 'string';
if(and__3911__auto__){
return beautify_strings;
} else {
return and__3911__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_150051_150053;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_150050_150052;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_150049;
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__150054,verbose_QMARK_,current_ns){
var map__150055 = p__150054;
var map__150055__$1 = ((((!((map__150055 == null)))?(((((map__150055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150055):map__150055);
var ns = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__150055__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__150057,opts){
var map__150058 = p__150057;
var map__150058__$1 = ((((!((map__150058 == null)))?(((((map__150058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150058):map__150058);
var args = map__150058__$1;
var ns = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__150058__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__150060){
var map__150061 = p__150060;
var map__150061__$1 = ((((!((map__150061 == null)))?(((((map__150061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150061):map__150061);
var form = cljs.core.get.call(null,map__150061__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__150061__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__150061__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__150061__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__150061__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__150063){
var map__150064 = p__150063;
var map__150064__$1 = ((((!((map__150064 == null)))?(((((map__150064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150064):map__150064);
var foo = map__150064__$1;
var value = cljs.core.get.call(null,map__150064__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__150064__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__150066){
var map__150067 = p__150066;
var map__150067__$1 = ((((!((map__150067 == null)))?(((((map__150067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150067):map__150067);
var args = map__150067__$1;
var file = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__150067__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__150069){
var map__150070 = p__150069;
var map__150070__$1 = ((((!((map__150070 == null)))?(((((map__150070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150070):map__150070);
var source = cljs.core.get.call(null,map__150070__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__150072){
var map__150073 = p__150072;
var map__150073__$1 = ((((!((map__150073 == null)))?(((((map__150073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150073):map__150073);
var static_fns = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__150073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits150075_150076 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits150075_150076,c,max_eval_duration__$1,the_emits,map__150073,map__150073__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits150075_150076,c,max_eval_duration__$1,the_emits,map__150073,map__150073__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits150075_150076;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__150077){
var map__150078 = p__150077;
var map__150078__$1 = ((((!((map__150078 == null)))?(((((map__150078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150078):map__150078);
var static_fns = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__150078__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var emits150080_150081 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits150080_150081,c,max_eval_duration__$1,map__150078,map__150078__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits150080_150081,c,max_eval_duration__$1,map__150078,map__150078__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits150080_150081;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5455__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var ch = temp__5455__auto__;
var G__150082 = cljs.core.conj.call(null,res,ch);
res = G__150082;
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
var _STAR_alias_map_STAR_150083 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_150084 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_150085 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_150086 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol150087 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_150088 = cljs.tools.reader._STAR_data_readers_STAR_;
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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_150088;

cljs.tools.reader.resolve_symbol = resolve_symbol150087;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_150086;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_150085;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_150084;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_150083;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__150092 = arguments.length;
switch (G__150092) {
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
var _STAR_alias_map_STAR_150093 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_150094 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_150095 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_150096 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol150097 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_150098 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.repl.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_150098;

cljs.tools.reader.resolve_symbol = resolve_symbol150097;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_150096;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_150095;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_150094;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_150093;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__150100 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__150100,(0),null);
var rest_s = cljs.core.nth.call(null,vec__150100,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__150103 = rest_s;
var G__150104 = res;
s__$1 = G__150103;
res = G__150104;
continue;
} else {
var G__150105 = rest_s;
var G__150106 = cljs.core.conj.call(null,res,exp);
s__$1 = G__150105;
res = G__150106;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(res,p__150107){
var map__150108 = p__150107;
var map__150108__$1 = ((((!((map__150108 == null)))?(((((map__150108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150108):map__150108);
var result_element = cljs.core.get.call(null,map__150108__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__150108__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150167){
var state_val_150168 = (state_150167[(1)]);
if((state_val_150168 === (7))){
var inst_150163 = (state_150167[(2)]);
var state_150167__$1 = state_150167;
var statearr_150169_150190 = state_150167__$1;
(statearr_150169_150190[(2)] = inst_150163);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150167__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (1))){
var state_150167__$1 = state_150167;
var statearr_150170_150191 = state_150167__$1;
(statearr_150170_150191[(2)] = null);

(statearr_150170_150191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_150167,(3),Object,null,(2));
var inst_150118 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_150167__$1 = state_150167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150167__$1,(5),inst_150118);
} else {
if((state_val_150168 === (13))){
var inst_150140 = (state_150167[(7)]);
var inst_150148 = (state_150167[(8)]);
var inst_150153 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_150154 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_150155 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_150140,inst_150153,inst_150154);
var inst_150133 = inst_150155;
var inst_150134 = inst_150148;
var state_150167__$1 = (function (){var statearr_150171 = state_150167;
(statearr_150171[(9)] = inst_150134);

(statearr_150171[(10)] = inst_150133);

return statearr_150171;
})();
var statearr_150172_150192 = state_150167__$1;
(statearr_150172_150192[(2)] = null);

(statearr_150172_150192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (6))){
var inst_150133 = (state_150167[(10)]);
var inst_150139 = (state_150167[(11)]);
var inst_150139__$1 = cljs.core.nth.call(null,inst_150133,(0),null);
var inst_150140 = cljs.core.nth.call(null,inst_150133,(1),null);
var inst_150141 = cljs.core.empty_QMARK_.call(null,inst_150139__$1);
var inst_150142 = !(inst_150141);
var state_150167__$1 = (function (){var statearr_150173 = state_150167;
(statearr_150173[(7)] = inst_150140);

(statearr_150173[(11)] = inst_150139__$1);

return statearr_150173;
})();
if(inst_150142){
var statearr_150174_150193 = state_150167__$1;
(statearr_150174_150193[(1)] = (8));

} else {
var statearr_150175_150194 = state_150167__$1;
(statearr_150175_150194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (3))){
var inst_150110 = (state_150167[(2)]);
var inst_150111 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_150112 = [inst_150110];
var inst_150113 = cljs.core.PersistentHashMap.fromArrays(inst_150111,inst_150112);
var inst_150114 = klipse_clj.lang.clojure.populate_err.call(null,inst_150113,opts);
var state_150167__$1 = state_150167;
var statearr_150176_150195 = state_150167__$1;
(statearr_150176_150195[(2)] = inst_150114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150167__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (12))){
var inst_150148 = (state_150167[(8)]);
var inst_150151 = klipse_clj.lang.clojure.populate_err.call(null,inst_150148,opts);
var state_150167__$1 = state_150167;
var statearr_150177_150196 = state_150167__$1;
(statearr_150177_150196[(2)] = inst_150151);

(statearr_150177_150196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (2))){
var inst_150165 = (state_150167[(2)]);
var state_150167__$1 = state_150167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150167__$1,inst_150165);
} else {
if((state_val_150168 === (11))){
var inst_150148 = (state_150167[(8)]);
var inst_150148__$1 = (state_150167[(2)]);
var inst_150149 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_150148__$1);
var state_150167__$1 = (function (){var statearr_150178 = state_150167;
(statearr_150178[(8)] = inst_150148__$1);

return statearr_150178;
})();
if(cljs.core.truth_(inst_150149)){
var statearr_150179_150197 = state_150167__$1;
(statearr_150179_150197[(1)] = (12));

} else {
var statearr_150180_150198 = state_150167__$1;
(statearr_150180_150198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (9))){
var inst_150134 = (state_150167[(9)]);
var state_150167__$1 = state_150167;
var statearr_150181_150199 = state_150167__$1;
(statearr_150181_150199[(2)] = inst_150134);

(statearr_150181_150199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (5))){
var inst_150120 = (state_150167[(2)]);
var inst_150128 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_150129 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_150130 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_150128,inst_150129);
var inst_150131 = cljs.core.nth.call(null,inst_150130,(0),null);
var inst_150132 = cljs.core.nth.call(null,inst_150130,(1),null);
var inst_150133 = inst_150130;
var inst_150134 = null;
var state_150167__$1 = (function (){var statearr_150182 = state_150167;
(statearr_150182[(12)] = inst_150132);

(statearr_150182[(9)] = inst_150134);

(statearr_150182[(13)] = inst_150131);

(statearr_150182[(10)] = inst_150133);

(statearr_150182[(14)] = inst_150120);

return statearr_150182;
})();
var statearr_150183_150200 = state_150167__$1;
(statearr_150183_150200[(2)] = null);

(statearr_150183_150200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (14))){
var inst_150158 = (state_150167[(2)]);
var state_150167__$1 = state_150167;
var statearr_150184_150201 = state_150167__$1;
(statearr_150184_150201[(2)] = inst_150158);

(statearr_150184_150201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (10))){
var inst_150161 = (state_150167[(2)]);
var state_150167__$1 = state_150167;
var statearr_150185_150202 = state_150167__$1;
(statearr_150185_150202[(2)] = inst_150161);

(statearr_150185_150202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150168 === (8))){
var inst_150139 = (state_150167[(11)]);
var inst_150144 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_150145 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_150144,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_150146 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_150139,inst_150145);
var state_150167__$1 = state_150167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150167__$1,(11),inst_150146);
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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____0 = (function (){
var statearr_150186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150186[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__);

(statearr_150186[(1)] = (1));

return statearr_150186;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____1 = (function (state_150167){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150187){if((e150187 instanceof Object)){
var ex__15810__auto__ = e150187;
var statearr_150188_150203 = state_150167;
(statearr_150188_150203[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150204 = state_150167;
state_150167 = G__150204;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__ = function(state_150167){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____1.call(this,state_150167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150189 = f__15830__auto__.call(null);
(statearr_150189[(6)] = c__15829__auto__);

return statearr_150189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150262){
var state_val_150263 = (state_150262[(1)]);
if((state_val_150263 === (7))){
var inst_150230 = (state_150262[(7)]);
var inst_150235 = klipse_clj.repl.create_state_compile.call(null);
var inst_150236 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_150235,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_150237 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_150230,inst_150236);
var state_150262__$1 = state_150262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150262__$1,(10),inst_150237);
} else {
if((state_val_150263 === (1))){
var state_150262__$1 = state_150262;
var statearr_150264_150285 = state_150262__$1;
(statearr_150264_150285[(2)] = null);

(statearr_150264_150285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_150262,(3),Object,null,(2));
var inst_150219 = klipse_clj.repl.create_state_compile.call(null);
var inst_150220 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_150221 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_150219,inst_150220);
var inst_150222 = cljs.core.nth.call(null,inst_150221,(0),null);
var inst_150223 = cljs.core.nth.call(null,inst_150221,(1),null);
var inst_150224 = inst_150221;
var inst_150225 = "";
var state_150262__$1 = (function (){var statearr_150265 = state_150262;
(statearr_150265[(8)] = inst_150225);

(statearr_150265[(9)] = inst_150224);

(statearr_150265[(10)] = inst_150223);

(statearr_150265[(11)] = inst_150222);

return statearr_150265;
})();
var statearr_150266_150286 = state_150262__$1;
(statearr_150266_150286[(2)] = null);

(statearr_150266_150286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (13))){
var inst_150250 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
var statearr_150267_150287 = state_150262__$1;
(statearr_150267_150287[(2)] = inst_150250);

(statearr_150267_150287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (6))){
var inst_150258 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
var statearr_150268_150288 = state_150262__$1;
(statearr_150268_150288[(2)] = inst_150258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (3))){
var inst_150205 = (state_150262[(2)]);
var inst_150206 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_150207 = [inst_150205];
var inst_150208 = cljs.core.PersistentHashMap.fromArrays(inst_150206,inst_150207);
var state_150262__$1 = state_150262;
var statearr_150269_150289 = state_150262__$1;
(statearr_150269_150289[(2)] = inst_150208);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (12))){
var inst_150225 = (state_150262[(8)]);
var inst_150231 = (state_150262[(12)]);
var inst_150239 = (state_150262[(13)]);
var inst_150243 = klipse_clj.repl.create_state_compile.call(null);
var inst_150244 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_150245 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_150231,inst_150243,inst_150244);
var inst_150246 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_150239);
var inst_150247 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150225),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150246)].join('');
var inst_150224 = inst_150245;
var inst_150225__$1 = inst_150247;
var state_150262__$1 = (function (){var statearr_150270 = state_150262;
(statearr_150270[(8)] = inst_150225__$1);

(statearr_150270[(9)] = inst_150224);

return statearr_150270;
})();
var statearr_150271_150290 = state_150262__$1;
(statearr_150271_150290[(2)] = null);

(statearr_150271_150290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (2))){
var inst_150260 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150262__$1,inst_150260);
} else {
if((state_val_150263 === (11))){
var inst_150239 = (state_150262[(13)]);
var state_150262__$1 = state_150262;
var statearr_150272_150291 = state_150262__$1;
(statearr_150272_150291[(2)] = inst_150239);

(statearr_150272_150291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (9))){
var inst_150256 = (state_150262[(2)]);
var state_150262__$1 = state_150262;
var statearr_150273_150292 = state_150262__$1;
(statearr_150273_150292[(2)] = inst_150256);

(statearr_150273_150292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (5))){
var inst_150224 = (state_150262[(9)]);
var inst_150230 = (state_150262[(7)]);
var inst_150230__$1 = cljs.core.nth.call(null,inst_150224,(0),null);
var inst_150231 = cljs.core.nth.call(null,inst_150224,(1),null);
var inst_150232 = cljs.core.empty_QMARK_.call(null,inst_150230__$1);
var inst_150233 = !(inst_150232);
var state_150262__$1 = (function (){var statearr_150274 = state_150262;
(statearr_150274[(7)] = inst_150230__$1);

(statearr_150274[(12)] = inst_150231);

return statearr_150274;
})();
if(inst_150233){
var statearr_150275_150293 = state_150262__$1;
(statearr_150275_150293[(1)] = (7));

} else {
var statearr_150276_150294 = state_150262__$1;
(statearr_150276_150294[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (10))){
var inst_150239 = (state_150262[(13)]);
var inst_150239__$1 = (state_150262[(2)]);
var inst_150240 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_150239__$1);
var state_150262__$1 = (function (){var statearr_150277 = state_150262;
(statearr_150277[(13)] = inst_150239__$1);

return statearr_150277;
})();
if(cljs.core.truth_(inst_150240)){
var statearr_150278_150295 = state_150262__$1;
(statearr_150278_150295[(1)] = (11));

} else {
var statearr_150279_150296 = state_150262__$1;
(statearr_150279_150296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150263 === (8))){
var inst_150225 = (state_150262[(8)]);
var inst_150252 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_150253 = [inst_150225];
var inst_150254 = cljs.core.PersistentHashMap.fromArrays(inst_150252,inst_150253);
var state_150262__$1 = state_150262;
var statearr_150280_150297 = state_150262__$1;
(statearr_150280_150297[(2)] = inst_150254);

(statearr_150280_150297[(1)] = (9));


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
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____0 = (function (){
var statearr_150281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150281[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__);

(statearr_150281[(1)] = (1));

return statearr_150281;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____1 = (function (state_150262){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150282){if((e150282 instanceof Object)){
var ex__15810__auto__ = e150282;
var statearr_150283_150298 = state_150262;
(statearr_150283_150298[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150299 = state_150262;
state_150262 = G__150299;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__ = function(state_150262){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____1.call(this,state_150262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150284 = f__15830__auto__.call(null);
(statearr_150284[(6)] = c__15829__auto__);

return statearr_150284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150305){
var state_val_150306 = (state_150305[(1)]);
if((state_val_150306 === (1))){
var inst_150300 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_150305__$1 = state_150305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150305__$1,(2),inst_150300);
} else {
if((state_val_150306 === (2))){
var inst_150302 = (state_150305[(2)]);
var inst_150303 = klipse_clj.lang.clojure.result_as_str.call(null,inst_150302,opts);
var state_150305__$1 = state_150305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150305__$1,inst_150303);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____0 = (function (){
var statearr_150307 = [null,null,null,null,null,null,null];
(statearr_150307[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__);

(statearr_150307[(1)] = (1));

return statearr_150307;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____1 = (function (state_150305){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150308){if((e150308 instanceof Object)){
var ex__15810__auto__ = e150308;
var statearr_150309_150311 = state_150305;
(statearr_150309_150311[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150312 = state_150305;
state_150305 = G__150312;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__ = function(state_150305){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____1.call(this,state_150305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150310 = f__15830__auto__.call(null);
(statearr_150310[(6)] = c__15829__auto__);

return statearr_150310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__150314 = arguments.length;
switch (G__150314) {
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150320){
var state_val_150321 = (state_150320[(1)]);
if((state_val_150321 === (1))){
var inst_150315 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_150320__$1 = state_150320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150320__$1,(2),inst_150315);
} else {
if((state_val_150321 === (2))){
var inst_150317 = (state_150320[(2)]);
var inst_150318 = klipse_clj.lang.clojure.read_result.call(null,inst_150317);
var state_150320__$1 = state_150320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150320__$1,inst_150318);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15807__auto____0 = (function (){
var statearr_150322 = [null,null,null,null,null,null,null];
(statearr_150322[(0)] = klipse_clj$lang$clojure$state_machine__15807__auto__);

(statearr_150322[(1)] = (1));

return statearr_150322;
});
var klipse_clj$lang$clojure$state_machine__15807__auto____1 = (function (state_150320){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150323){if((e150323 instanceof Object)){
var ex__15810__auto__ = e150323;
var statearr_150324_150327 = state_150320;
(statearr_150324_150327[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150328 = state_150320;
state_150320 = G__150328;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15807__auto__ = function(state_150320){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15807__auto____1.call(this,state_150320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15807__auto____0;
klipse_clj$lang$clojure$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150325 = f__15830__auto__.call(null);
(statearr_150325[(6)] = c__15829__auto__);

return statearr_150325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150335){
var state_val_150336 = (state_150335[(1)]);
if((state_val_150336 === (1))){
var inst_150329 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_150335__$1 = state_150335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150335__$1,(2),inst_150329);
} else {
if((state_val_150336 === (2))){
var inst_150331 = (state_150335[(2)]);
var inst_150332 = cljs.core.clj__GT_js.call(null,inst_150331);
var inst_150333 = cb.call(null,inst_150332);
var state_150335__$1 = state_150335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150335__$1,inst_150333);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____0 = (function (){
var statearr_150337 = [null,null,null,null,null,null,null];
(statearr_150337[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__);

(statearr_150337[(1)] = (1));

return statearr_150337;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____1 = (function (state_150335){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150338){if((e150338 instanceof Object)){
var ex__15810__auto__ = e150338;
var statearr_150339_150341 = state_150335;
(statearr_150339_150341[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150342 = state_150335;
state_150335 = G__150342;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__ = function(state_150335){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____1.call(this,state_150335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150340 = f__15830__auto__.call(null);
(statearr_150340[(6)] = c__15829__auto__);

return statearr_150340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__150344 = arguments.length;
switch (G__150344) {
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
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150350){
var state_val_150351 = (state_150350[(1)]);
if((state_val_150351 === (1))){
var inst_150345 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150350__$1,(2),inst_150345);
} else {
if((state_val_150351 === (2))){
var inst_150347 = (state_150350[(2)]);
var inst_150348 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_150347);
var state_150350__$1 = state_150350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150350__$1,inst_150348);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15807__auto____0 = (function (){
var statearr_150352 = [null,null,null,null,null,null,null];
(statearr_150352[(0)] = klipse_clj$lang$clojure$state_machine__15807__auto__);

(statearr_150352[(1)] = (1));

return statearr_150352;
});
var klipse_clj$lang$clojure$state_machine__15807__auto____1 = (function (state_150350){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150353){if((e150353 instanceof Object)){
var ex__15810__auto__ = e150353;
var statearr_150354_150357 = state_150350;
(statearr_150354_150357[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150358 = state_150350;
state_150350 = G__150358;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15807__auto__ = function(state_150350){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15807__auto____1.call(this,state_150350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15807__auto____0;
klipse_clj$lang$clojure$state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15807__auto____1;
return klipse_clj$lang$clojure$state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150355 = f__15830__auto__.call(null);
(statearr_150355[(6)] = c__15829__auto__);

return statearr_150355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150364){
var state_val_150365 = (state_150364[(1)]);
if((state_val_150365 === (1))){
var inst_150359 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_150364__$1 = state_150364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150364__$1,(2),inst_150359);
} else {
if((state_val_150365 === (2))){
var inst_150361 = (state_150364[(2)]);
var inst_150362 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_150361);
var state_150364__$1 = state_150364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150364__$1,inst_150362);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____0 = (function (){
var statearr_150366 = [null,null,null,null,null,null,null];
(statearr_150366[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__);

(statearr_150366[(1)] = (1));

return statearr_150366;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____1 = (function (state_150364){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150367){if((e150367 instanceof Object)){
var ex__15810__auto__ = e150367;
var statearr_150368_150370 = state_150364;
(statearr_150368_150370[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150371 = state_150364;
state_150364 = G__150371;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__ = function(state_150364){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____1.call(this,state_150364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150369 = f__15830__auto__.call(null);
(statearr_150369[(6)] = c__15829__auto__);

return statearr_150369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_150378){
var state_val_150379 = (state_150378[(1)]);
if((state_val_150379 === (1))){
var inst_150372 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_150378__$1 = state_150378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150378__$1,(2),inst_150372);
} else {
if((state_val_150379 === (2))){
var inst_150374 = (state_150378[(2)]);
var inst_150375 = cljs.core.second.call(null,inst_150374);
var inst_150376 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_150375)].join('');
var state_150378__$1 = state_150378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150378__$1,inst_150376);
} else {
return null;
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____0 = (function (){
var statearr_150380 = [null,null,null,null,null,null,null];
(statearr_150380[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__);

(statearr_150380[(1)] = (1));

return statearr_150380;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____1 = (function (state_150378){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150381){if((e150381 instanceof Object)){
var ex__15810__auto__ = e150381;
var statearr_150382_150384 = state_150378;
(statearr_150382_150384[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150385 = state_150378;
state_150378 = G__150385;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__ = function(state_150378){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____1.call(this,state_150378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_150383 = f__15830__auto__.call(null);
(statearr_150383[(6)] = c__15829__auto__);

return statearr_150383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__150387){
var map__150388 = p__150387;
var map__150388__$1 = ((((!((map__150388 == null)))?(((((map__150388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__150388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__150388):map__150388);
var opts = map__150388__$1;
var container_id = cljs.core.get.call(null,map__150388__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__150388__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__150388__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15829__auto___150438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_150420){
var state_val_150421 = (state_150420[(1)]);
if((state_val_150421 === (7))){
var inst_150398 = (state_150420[(2)]);
var inst_150401 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_150402 = (function (){var _STAR_print_newline_STAR_150399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_150400 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_150399,_STAR_print_fn_STAR_150400,inst_150398,inst_150401,state_val_150421,c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__150386_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__150386_SHARP_);
});
;})(_STAR_print_newline_STAR_150399,_STAR_print_fn_STAR_150400,inst_150398,inst_150401,state_val_150421,c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_150403 = cljs.core._STAR_print_fn_STAR_ = inst_150402;
var state_150420__$1 = (function (){var statearr_150422 = state_150420;
(statearr_150422[(7)] = inst_150398);

(statearr_150422[(8)] = inst_150403);

(statearr_150422[(9)] = inst_150401);

return statearr_150422;
})();
var statearr_150423_150439 = state_150420__$1;
(statearr_150423_150439[(2)] = null);

(statearr_150423_150439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (1))){
var inst_150390 = clojure.string.blank_QMARK_.call(null,exp);
var state_150420__$1 = state_150420;
if(inst_150390){
var statearr_150424_150440 = state_150420__$1;
(statearr_150424_150440[(1)] = (2));

} else {
var statearr_150425_150441 = state_150420__$1;
(statearr_150425_150441[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (4))){
var inst_150418 = (state_150420[(2)]);
var state_150420__$1 = state_150420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_150420__$1,inst_150418);
} else {
if((state_val_150421 === (6))){
var state_150420__$1 = state_150420;
var statearr_150426_150442 = state_150420__$1;
(statearr_150426_150442[(2)] = null);

(statearr_150426_150442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (3))){
var state_150420__$1 = state_150420;
if(cljs.core.truth_(setup_container_fn)){
var statearr_150427_150443 = state_150420__$1;
(statearr_150427_150443[(1)] = (5));

} else {
var statearr_150428_150444 = state_150420__$1;
(statearr_150428_150444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (2))){
var inst_150392 = cljs.core.async.put_BANG_.call(null,c,"");
var state_150420__$1 = state_150420;
var statearr_150429_150445 = state_150420__$1;
(statearr_150429_150445[(2)] = inst_150392);

(statearr_150429_150445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (11))){
var inst_150412 = (state_150420[(2)]);
var inst_150413 = cljs.core.second.call(null,inst_150412);
var inst_150414 = cljs.core.async.put_BANG_.call(null,c,inst_150413);
var state_150420__$1 = state_150420;
var statearr_150430_150446 = state_150420__$1;
(statearr_150430_150446[(2)] = inst_150414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (9))){
var inst_150404 = (state_150420[(2)]);
var inst_150405 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_150406 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_150420__$1 = (function (){var statearr_150431 = state_150420;
(statearr_150431[(10)] = inst_150404);

(statearr_150431[(11)] = inst_150406);

(statearr_150431[(12)] = inst_150405);

return statearr_150431;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (5))){
var inst_150395 = setup_container_fn.call(null,container_id);
var state_150420__$1 = state_150420;
var statearr_150432_150447 = state_150420__$1;
(statearr_150432_150447[(2)] = inst_150395);

(statearr_150432_150447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_150421 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_150420,null,null,(9),(8));
var inst_150410 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_150420__$1 = state_150420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_150420__$1,(11),inst_150410);
} else {
if((state_val_150421 === (8))){
var inst_150416 = (state_150420[(2)]);
var state_150420__$1 = state_150420;
var statearr_150433_150448 = state_150420__$1;
(statearr_150433_150448[(2)] = inst_150416);

(statearr_150433_150448[(1)] = (4));


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
});})(c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__15806__auto__,c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____0 = (function (){
var statearr_150434 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_150434[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__);

(statearr_150434[(1)] = (1));

return statearr_150434;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____1 = (function (state_150420){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_150420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e150435){if((e150435 instanceof Object)){
var ex__15810__auto__ = e150435;
var statearr_150436_150449 = state_150420;
(statearr_150436_150449[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_150420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e150435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__150450 = state_150420;
state_150420 = G__150450;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__ = function(state_150420){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____1.call(this,state_150420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__15831__auto__ = (function (){var statearr_150437 = f__15830__auto__.call(null);
(statearr_150437[(6)] = c__15829__auto___150438);

return statearr_150437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto___150438,c,map__150388,map__150388__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
