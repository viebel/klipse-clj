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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34107){
var state_val_34108 = (state_34107[(1)]);
if((state_val_34108 === (7))){
var inst_34103 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34109_34135 = state_34107__$1;
(statearr_34109_34135[(2)] = inst_34103);

(statearr_34109_34135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (1))){
var inst_34048 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34107__$1,(2),inst_34048);
} else {
if((state_val_34108 === (4))){
var inst_34105 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34107__$1,inst_34105);
} else {
if((state_val_34108 === (15))){
var inst_34078 = (state_34107[(7)]);
var inst_34094 = (state_34107[(2)]);
var inst_34095 = cljs.core.next.call(null,inst_34078);
var inst_34059 = inst_34095;
var inst_34060 = null;
var inst_34061 = (0);
var inst_34062 = (0);
var state_34107__$1 = (function (){var statearr_34110 = state_34107;
(statearr_34110[(8)] = inst_34094);

(statearr_34110[(9)] = inst_34059);

(statearr_34110[(10)] = inst_34060);

(statearr_34110[(11)] = inst_34061);

(statearr_34110[(12)] = inst_34062);

return statearr_34110;
})();
var statearr_34111_34136 = state_34107__$1;
(statearr_34111_34136[(2)] = null);

(statearr_34111_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (13))){
var inst_34078 = (state_34107[(7)]);
var inst_34087 = cljs.core.first.call(null,inst_34078);
var inst_34088 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34089 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34090 = [inst_34089,klipse_clj.repl.current_ns_eval];
var inst_34091 = cljs.core.PersistentHashMap.fromArrays(inst_34088,inst_34090);
var inst_34092 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34087,inst_34091);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34107__$1,(15),inst_34092);
} else {
if((state_val_34108 === (6))){
var inst_34059 = (state_34107[(9)]);
var inst_34078 = (state_34107[(7)]);
var inst_34078__$1 = cljs.core.seq.call(null,inst_34059);
var state_34107__$1 = (function (){var statearr_34112 = state_34107;
(statearr_34112[(7)] = inst_34078__$1);

return statearr_34112;
})();
if(inst_34078__$1){
var statearr_34113_34137 = state_34107__$1;
(statearr_34113_34137[(1)] = (9));

} else {
var statearr_34114_34138 = state_34107__$1;
(statearr_34114_34138[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (3))){
var inst_34061 = (state_34107[(11)]);
var inst_34062 = (state_34107[(12)]);
var inst_34064 = (inst_34062 < inst_34061);
var inst_34065 = inst_34064;
var state_34107__$1 = state_34107;
if(cljs.core.truth_(inst_34065)){
var statearr_34115_34139 = state_34107__$1;
(statearr_34115_34139[(1)] = (5));

} else {
var statearr_34116_34140 = state_34107__$1;
(statearr_34116_34140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (12))){
var inst_34078 = (state_34107[(7)]);
var inst_34082 = cljs.core.chunk_first.call(null,inst_34078);
var inst_34083 = cljs.core.chunk_rest.call(null,inst_34078);
var inst_34084 = cljs.core.count.call(null,inst_34082);
var inst_34059 = inst_34083;
var inst_34060 = inst_34082;
var inst_34061 = inst_34084;
var inst_34062 = (0);
var state_34107__$1 = (function (){var statearr_34117 = state_34107;
(statearr_34117[(9)] = inst_34059);

(statearr_34117[(10)] = inst_34060);

(statearr_34117[(11)] = inst_34061);

(statearr_34117[(12)] = inst_34062);

return statearr_34117;
})();
var statearr_34118_34141 = state_34107__$1;
(statearr_34118_34141[(2)] = null);

(statearr_34118_34141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (2))){
var inst_34050 = (state_34107[(2)]);
var inst_34055 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34056 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_34057 = (new cljs.core.PersistentVector(null,2,(5),inst_34055,inst_34056,null));
var inst_34058 = cljs.core.seq.call(null,inst_34057);
var inst_34059 = inst_34058;
var inst_34060 = null;
var inst_34061 = (0);
var inst_34062 = (0);
var state_34107__$1 = (function (){var statearr_34119 = state_34107;
(statearr_34119[(9)] = inst_34059);

(statearr_34119[(10)] = inst_34060);

(statearr_34119[(11)] = inst_34061);

(statearr_34119[(12)] = inst_34062);

(statearr_34119[(13)] = inst_34050);

return statearr_34119;
})();
var statearr_34120_34142 = state_34107__$1;
(statearr_34120_34142[(2)] = null);

(statearr_34120_34142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (11))){
var inst_34101 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34121_34143 = state_34107__$1;
(statearr_34121_34143[(2)] = inst_34101);

(statearr_34121_34143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (9))){
var inst_34078 = (state_34107[(7)]);
var inst_34080 = cljs.core.chunked_seq_QMARK_.call(null,inst_34078);
var state_34107__$1 = state_34107;
if(inst_34080){
var statearr_34122_34144 = state_34107__$1;
(statearr_34122_34144[(1)] = (12));

} else {
var statearr_34123_34145 = state_34107__$1;
(statearr_34123_34145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (5))){
var inst_34060 = (state_34107[(10)]);
var inst_34062 = (state_34107[(12)]);
var inst_34067 = cljs.core._nth.call(null,inst_34060,inst_34062);
var inst_34068 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34069 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34070 = [inst_34069,klipse_clj.repl.current_ns_eval];
var inst_34071 = cljs.core.PersistentHashMap.fromArrays(inst_34068,inst_34070);
var inst_34072 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34067,inst_34071);
var state_34107__$1 = state_34107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34107__$1,(8),inst_34072);
} else {
if((state_val_34108 === (14))){
var inst_34098 = (state_34107[(2)]);
var state_34107__$1 = state_34107;
var statearr_34127_34146 = state_34107__$1;
(statearr_34127_34146[(2)] = inst_34098);

(statearr_34127_34146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (10))){
var state_34107__$1 = state_34107;
var statearr_34128_34147 = state_34107__$1;
(statearr_34128_34147[(2)] = null);

(statearr_34128_34147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34108 === (8))){
var inst_34059 = (state_34107[(9)]);
var inst_34060 = (state_34107[(10)]);
var inst_34061 = (state_34107[(11)]);
var inst_34062 = (state_34107[(12)]);
var inst_34074 = (state_34107[(2)]);
var inst_34075 = (inst_34062 + (1));
var tmp34124 = inst_34059;
var tmp34125 = inst_34060;
var tmp34126 = inst_34061;
var inst_34059__$1 = tmp34124;
var inst_34060__$1 = tmp34125;
var inst_34061__$1 = tmp34126;
var inst_34062__$1 = inst_34075;
var state_34107__$1 = (function (){var statearr_34129 = state_34107;
(statearr_34129[(9)] = inst_34059__$1);

(statearr_34129[(10)] = inst_34060__$1);

(statearr_34129[(11)] = inst_34061__$1);

(statearr_34129[(14)] = inst_34074);

(statearr_34129[(12)] = inst_34062__$1);

return statearr_34129;
})();
var statearr_34130_34148 = state_34107__$1;
(statearr_34130_34148[(2)] = null);

(statearr_34130_34148[(1)] = (3));


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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0 = (function (){
var statearr_34131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34131[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__);

(statearr_34131[(1)] = (1));

return statearr_34131;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1 = (function (state_34107){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34132){if((e34132 instanceof Object)){
var ex__14974__auto__ = e34132;
var statearr_34133_34149 = state_34107;
(statearr_34133_34149[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34150 = state_34107;
state_34107 = G__34150;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__ = function(state_34107){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1.call(this,state_34107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34134 = f__14994__auto__.call(null);
(statearr_34134[(6)] = c__14993__auto__);

return statearr_34134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34153){
var state_val_34154 = (state_34153[(1)]);
if((state_val_34154 === (1))){
var inst_34151 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_34153__$1 = state_34153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34153__$1,inst_34151);
} else {
return null;
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0 = (function (){
var statearr_34155 = [null,null,null,null,null,null,null];
(statearr_34155[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__);

(statearr_34155[(1)] = (1));

return statearr_34155;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1 = (function (state_34153){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34156){if((e34156 instanceof Object)){
var ex__14974__auto__ = e34156;
var statearr_34157_34159 = state_34153;
(statearr_34157_34159[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34160 = state_34153;
state_34153 = G__34160;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__ = function(state_34153){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1.call(this,state_34153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34158 = f__14994__auto__.call(null);
(statearr_34158[(6)] = c__14993__auto__);

return statearr_34158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
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
}catch (e34161){if((e34161 instanceof Object)){
var e = e34161;

return e;
} else {
throw e34161;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__34162){
var map__34163 = p__34162;
var map__34163__$1 = (((((!((map__34163 == null))))?(((((map__34163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34163):map__34163);
var print_length = cljs.core.get.call(null,map__34163__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__34163__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__34166 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__34167 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__34167;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34168_34172 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34169_34173 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34170_34174 = true;
var _STAR_print_fn_STAR__temp_val__34171_34175 = ((function (_STAR_print_newline_STAR__orig_val__34168_34172,_STAR_print_fn_STAR__orig_val__34169_34173,_STAR_print_newline_STAR__temp_val__34170_34174,sb__4532__auto__,_STAR_print_length_STAR__orig_val__34166,_STAR_print_length_STAR__temp_val__34167,map__34163,map__34163__$1,print_length,beautify_strings){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__34168_34172,_STAR_print_fn_STAR__orig_val__34169_34173,_STAR_print_newline_STAR__temp_val__34170_34174,sb__4532__auto__,_STAR_print_length_STAR__orig_val__34166,_STAR_print_length_STAR__temp_val__34167,map__34163,map__34163__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34170_34174;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34171_34175;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3991__auto__ = typeof value === 'string';
if(and__3991__auto__){
return beautify_strings;
} else {
return and__3991__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34169_34173;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34168_34172;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__34166;
}}catch (e34165){if((e34165 instanceof Object)){
var e = e34165;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e34165;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__34176,verbose_QMARK_,current_ns){
var map__34177 = p__34176;
var map__34177__$1 = (((((!((map__34177 == null))))?(((((map__34177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34177):map__34177);
var ns = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34177__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__34179,opts){
var map__34180 = p__34179;
var map__34180__$1 = (((((!((map__34180 == null))))?(((((map__34180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34180):map__34180);
var args = map__34180__$1;
var ns = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34180__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__34182){
var map__34183 = p__34182;
var map__34183__$1 = (((((!((map__34183 == null))))?(((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34183):map__34183);
var form = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__34185){
var map__34186 = p__34185;
var map__34186__$1 = (((((!((map__34186 == null))))?(((((map__34186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34186):map__34186);
var foo = map__34186__$1;
var value = cljs.core.get.call(null,map__34186__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__34186__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__34188){
var map__34189 = p__34188;
var map__34189__$1 = (((((!((map__34189 == null))))?(((((map__34189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34189):map__34189);
var args = map__34189__$1;
var file = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__34189__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__34191){
var map__34192 = p__34191;
var map__34192__$1 = (((((!((map__34192 == null))))?(((((map__34192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34192):map__34192);
var source = cljs.core.get.call(null,map__34192__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__34194){
var map__34195 = p__34194;
var map__34195__$1 = (((((!((map__34195 == null))))?(((((map__34195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34195):map__34195);
var static_fns = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__34195__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__34195,map__34195__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__34195,map__34195__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__34197){
var map__34198 = p__34197;
var map__34198__$1 = (((((!((map__34198 == null))))?(((((map__34198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34198):map__34198);
var static_fns = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,map__34198,map__34198__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,map__34198,map__34198__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
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
var G__34200 = cljs.core.conj.call(null,res,ch);
res = G__34200;
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
var _STAR_alias_map_STAR__orig_val__34201 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__34202 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__34203 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__34204 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__34205 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__34206 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__34207 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__34208 = ns;
var _STAR_cljs_ns_STAR__temp_val__34209 = ns;
var _STAR_compiler_STAR__temp_val__34210 = st;
var resolve_symbol_temp_val__34211 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__34212 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34207;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34208;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__34209;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34210;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34211;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34212;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__34206;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__34205;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34204;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__34203;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34202;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__34201;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__34216 = arguments.length;
switch (G__34216) {
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
var _STAR_alias_map_STAR__orig_val__34217 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__34218 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__34219 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__34220 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__34221 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__34222 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__34223 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__34224 = ns;
var _STAR_cljs_ns_STAR__temp_val__34225 = ns;
var _STAR_compiler_STAR__temp_val__34226 = st;
var resolve_symbol_temp_val__34227 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__34228 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34223;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34224;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__34225;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34226;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34227;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34228;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__34222;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__34221;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34220;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__34219;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34218;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__34217;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__34233 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__34233,(0),null);
var rest_s = cljs.core.nth.call(null,vec__34233,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__34236 = rest_s;
var G__34237 = res;
s__$1 = G__34236;
res = G__34237;
continue;
} else {
var G__34238 = rest_s;
var G__34239 = cljs.core.conj.call(null,res,exp);
s__$1 = G__34238;
res = G__34239;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__34240){
var map__34241 = p__34240;
var map__34241__$1 = (((((!((map__34241 == null))))?(((((map__34241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34241):map__34241);
var result_element = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (7))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34302_34323 = state_34300__$1;
(statearr_34302_34323[(2)] = inst_34296);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (1))){
var state_34300__$1 = state_34300;
var statearr_34303_34324 = state_34300__$1;
(statearr_34303_34324[(2)] = null);

(statearr_34303_34324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34300,(3),Object,null,(2));
var inst_34251 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34300__$1,(5),inst_34251);
} else {
if((state_val_34301 === (13))){
var inst_34273 = (state_34300[(7)]);
var inst_34281 = (state_34300[(8)]);
var inst_34286 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34287 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_34288 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_34273,inst_34286,inst_34287);
var inst_34266 = inst_34288;
var inst_34267 = inst_34281;
var state_34300__$1 = (function (){var statearr_34304 = state_34300;
(statearr_34304[(9)] = inst_34266);

(statearr_34304[(10)] = inst_34267);

return statearr_34304;
})();
var statearr_34305_34325 = state_34300__$1;
(statearr_34305_34325[(2)] = null);

(statearr_34305_34325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var inst_34272 = (state_34300[(11)]);
var inst_34266 = (state_34300[(9)]);
var inst_34272__$1 = cljs.core.nth.call(null,inst_34266,(0),null);
var inst_34273 = cljs.core.nth.call(null,inst_34266,(1),null);
var inst_34274 = cljs.core.empty_QMARK_.call(null,inst_34272__$1);
var inst_34275 = (!(inst_34274));
var state_34300__$1 = (function (){var statearr_34306 = state_34300;
(statearr_34306[(11)] = inst_34272__$1);

(statearr_34306[(7)] = inst_34273);

return statearr_34306;
})();
if(inst_34275){
var statearr_34307_34326 = state_34300__$1;
(statearr_34307_34326[(1)] = (8));

} else {
var statearr_34308_34327 = state_34300__$1;
(statearr_34308_34327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (3))){
var inst_34243 = (state_34300[(2)]);
var inst_34244 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_34245 = [inst_34243];
var inst_34246 = cljs.core.PersistentHashMap.fromArrays(inst_34244,inst_34245);
var inst_34247 = klipse_clj.lang.clojure.populate_err.call(null,inst_34246,opts);
var state_34300__$1 = state_34300;
var statearr_34309_34328 = state_34300__$1;
(statearr_34309_34328[(2)] = inst_34247);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (12))){
var inst_34281 = (state_34300[(8)]);
var inst_34284 = klipse_clj.lang.clojure.populate_err.call(null,inst_34281,opts);
var state_34300__$1 = state_34300;
var statearr_34310_34329 = state_34300__$1;
(statearr_34310_34329[(2)] = inst_34284);

(statearr_34310_34329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (2))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (11))){
var inst_34281 = (state_34300[(8)]);
var inst_34281__$1 = (state_34300[(2)]);
var inst_34282 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_34281__$1);
var state_34300__$1 = (function (){var statearr_34311 = state_34300;
(statearr_34311[(8)] = inst_34281__$1);

return statearr_34311;
})();
if(cljs.core.truth_(inst_34282)){
var statearr_34312_34330 = state_34300__$1;
(statearr_34312_34330[(1)] = (12));

} else {
var statearr_34313_34331 = state_34300__$1;
(statearr_34313_34331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (9))){
var inst_34267 = (state_34300[(10)]);
var state_34300__$1 = state_34300;
var statearr_34314_34332 = state_34300__$1;
(statearr_34314_34332[(2)] = inst_34267);

(statearr_34314_34332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var inst_34253 = (state_34300[(2)]);
var inst_34261 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34262 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_34263 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_34261,inst_34262);
var inst_34264 = cljs.core.nth.call(null,inst_34263,(0),null);
var inst_34265 = cljs.core.nth.call(null,inst_34263,(1),null);
var inst_34266 = inst_34263;
var inst_34267 = null;
var state_34300__$1 = (function (){var statearr_34315 = state_34300;
(statearr_34315[(9)] = inst_34266);

(statearr_34315[(12)] = inst_34264);

(statearr_34315[(13)] = inst_34253);

(statearr_34315[(14)] = inst_34265);

(statearr_34315[(10)] = inst_34267);

return statearr_34315;
})();
var statearr_34316_34333 = state_34300__$1;
(statearr_34316_34333[(2)] = null);

(statearr_34316_34333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (14))){
var inst_34291 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34317_34334 = state_34300__$1;
(statearr_34317_34334[(2)] = inst_34291);

(statearr_34317_34334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (10))){
var inst_34294 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34318_34335 = state_34300__$1;
(statearr_34318_34335[(2)] = inst_34294);

(statearr_34318_34335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (8))){
var inst_34272 = (state_34300[(11)]);
var inst_34277 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34278 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_34277,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_34279 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34272,inst_34278);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34300__$1,(11),inst_34279);
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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0 = (function (){
var statearr_34319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34319[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__);

(statearr_34319[(1)] = (1));

return statearr_34319;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1 = (function (state_34300){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34320){if((e34320 instanceof Object)){
var ex__14974__auto__ = e34320;
var statearr_34321_34336 = state_34300;
(statearr_34321_34336[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34337 = state_34300;
state_34300 = G__34337;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34322 = f__14994__auto__.call(null);
(statearr_34322[(6)] = c__14993__auto__);

return statearr_34322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34363 = (state_34395[(7)]);
var inst_34368 = klipse_clj.repl.create_state_compile.call(null);
var inst_34369 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_34368,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_34370 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_34363,inst_34369);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34395__$1,(10),inst_34370);
} else {
if((state_val_34396 === (1))){
var state_34395__$1 = state_34395;
var statearr_34397_34418 = state_34395__$1;
(statearr_34397_34418[(2)] = null);

(statearr_34397_34418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34395,(3),Object,null,(2));
var inst_34352 = klipse_clj.repl.create_state_compile.call(null);
var inst_34353 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_34354 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_34352,inst_34353);
var inst_34355 = cljs.core.nth.call(null,inst_34354,(0),null);
var inst_34356 = cljs.core.nth.call(null,inst_34354,(1),null);
var inst_34357 = inst_34354;
var inst_34358 = "";
var state_34395__$1 = (function (){var statearr_34398 = state_34395;
(statearr_34398[(8)] = inst_34356);

(statearr_34398[(9)] = inst_34357);

(statearr_34398[(10)] = inst_34358);

(statearr_34398[(11)] = inst_34355);

return statearr_34398;
})();
var statearr_34399_34419 = state_34395__$1;
(statearr_34399_34419[(2)] = null);

(statearr_34399_34419[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (13))){
var inst_34383 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34400_34420 = state_34395__$1;
(statearr_34400_34420[(2)] = inst_34383);

(statearr_34400_34420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (6))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34401_34421 = state_34395__$1;
(statearr_34401_34421[(2)] = inst_34391);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34338 = (state_34395[(2)]);
var inst_34339 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_34340 = [inst_34338];
var inst_34341 = cljs.core.PersistentHashMap.fromArrays(inst_34339,inst_34340);
var state_34395__$1 = state_34395;
var statearr_34402_34422 = state_34395__$1;
(statearr_34402_34422[(2)] = inst_34341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34395__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (12))){
var inst_34364 = (state_34395[(12)]);
var inst_34372 = (state_34395[(13)]);
var inst_34358 = (state_34395[(10)]);
var inst_34376 = klipse_clj.repl.create_state_compile.call(null);
var inst_34377 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_34378 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_34364,inst_34376,inst_34377);
var inst_34379 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_34372);
var inst_34380 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34358),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34379)].join('');
var inst_34357 = inst_34378;
var inst_34358__$1 = inst_34380;
var state_34395__$1 = (function (){var statearr_34403 = state_34395;
(statearr_34403[(9)] = inst_34357);

(statearr_34403[(10)] = inst_34358__$1);

return statearr_34403;
})();
var statearr_34404_34423 = state_34395__$1;
(statearr_34404_34423[(2)] = null);

(statearr_34404_34423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (2))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (11))){
var inst_34372 = (state_34395[(13)]);
var state_34395__$1 = state_34395;
var statearr_34405_34424 = state_34395__$1;
(statearr_34405_34424[(2)] = inst_34372);

(statearr_34405_34424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (9))){
var inst_34389 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34406_34425 = state_34395__$1;
(statearr_34406_34425[(2)] = inst_34389);

(statearr_34406_34425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var inst_34357 = (state_34395[(9)]);
var inst_34363 = (state_34395[(7)]);
var inst_34363__$1 = cljs.core.nth.call(null,inst_34357,(0),null);
var inst_34364 = cljs.core.nth.call(null,inst_34357,(1),null);
var inst_34365 = cljs.core.empty_QMARK_.call(null,inst_34363__$1);
var inst_34366 = (!(inst_34365));
var state_34395__$1 = (function (){var statearr_34407 = state_34395;
(statearr_34407[(12)] = inst_34364);

(statearr_34407[(7)] = inst_34363__$1);

return statearr_34407;
})();
if(inst_34366){
var statearr_34408_34426 = state_34395__$1;
(statearr_34408_34426[(1)] = (7));

} else {
var statearr_34409_34427 = state_34395__$1;
(statearr_34409_34427[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (10))){
var inst_34372 = (state_34395[(13)]);
var inst_34372__$1 = (state_34395[(2)]);
var inst_34373 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_34372__$1);
var state_34395__$1 = (function (){var statearr_34410 = state_34395;
(statearr_34410[(13)] = inst_34372__$1);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34373)){
var statearr_34411_34428 = state_34395__$1;
(statearr_34411_34428[(1)] = (11));

} else {
var statearr_34412_34429 = state_34395__$1;
(statearr_34412_34429[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (8))){
var inst_34358 = (state_34395[(10)]);
var inst_34385 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_34386 = [inst_34358];
var inst_34387 = cljs.core.PersistentHashMap.fromArrays(inst_34385,inst_34386);
var state_34395__$1 = state_34395;
var statearr_34413_34430 = state_34395__$1;
(statearr_34413_34430[(2)] = inst_34387);

(statearr_34413_34430[(1)] = (9));


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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0 = (function (){
var statearr_34414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34414[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__);

(statearr_34414[(1)] = (1));

return statearr_34414;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1 = (function (state_34395){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34415){if((e34415 instanceof Object)){
var ex__14974__auto__ = e34415;
var statearr_34416_34431 = state_34395;
(statearr_34416_34431[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34395;
state_34395 = G__34432;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34417 = f__14994__auto__.call(null);
(statearr_34417[(6)] = c__14993__auto__);

return statearr_34417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34438){
var state_val_34439 = (state_34438[(1)]);
if((state_val_34439 === (1))){
var inst_34433 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_34438__$1 = state_34438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34438__$1,(2),inst_34433);
} else {
if((state_val_34439 === (2))){
var inst_34435 = (state_34438[(2)]);
var inst_34436 = klipse_clj.lang.clojure.result_as_str.call(null,inst_34435,opts);
var state_34438__$1 = state_34438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34438__$1,inst_34436);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null];
(statearr_34440[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1 = (function (state_34438){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__14974__auto__ = e34441;
var statearr_34442_34444 = state_34438;
(statearr_34442_34444[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34445 = state_34438;
state_34438 = G__34445;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__ = function(state_34438){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1.call(this,state_34438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34443 = f__14994__auto__.call(null);
(statearr_34443[(6)] = c__14993__auto__);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__34447 = arguments.length;
switch (G__34447) {
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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34453){
var state_val_34454 = (state_34453[(1)]);
if((state_val_34454 === (1))){
var inst_34448 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34453__$1,(2),inst_34448);
} else {
if((state_val_34454 === (2))){
var inst_34450 = (state_34453[(2)]);
var inst_34451 = klipse_clj.lang.clojure.read_result.call(null,inst_34450);
var state_34453__$1 = state_34453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34453__$1,inst_34451);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14971__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null];
(statearr_34455[(0)] = klipse_clj$lang$clojure$state_machine__14971__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var klipse_clj$lang$clojure$state_machine__14971__auto____1 = (function (state_34453){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__14974__auto__ = e34456;
var statearr_34457_34460 = state_34453;
(statearr_34457_34460[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34461 = state_34453;
state_34453 = G__34461;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14971__auto__ = function(state_34453){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14971__auto____1.call(this,state_34453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14971__auto____0;
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14971__auto____1;
return klipse_clj$lang$clojure$state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34458 = f__14994__auto__.call(null);
(statearr_34458[(6)] = c__14993__auto__);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (1))){
var inst_34462 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34468__$1,(2),inst_34462);
} else {
if((state_val_34469 === (2))){
var inst_34464 = (state_34468[(2)]);
var inst_34465 = cljs.core.clj__GT_js.call(null,inst_34464);
var inst_34466 = cb.call(null,inst_34465);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34468__$1,inst_34466);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0 = (function (){
var statearr_34470 = [null,null,null,null,null,null,null];
(statearr_34470[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__);

(statearr_34470[(1)] = (1));

return statearr_34470;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1 = (function (state_34468){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34471){if((e34471 instanceof Object)){
var ex__14974__auto__ = e34471;
var statearr_34472_34474 = state_34468;
(statearr_34472_34474[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34475 = state_34468;
state_34468 = G__34475;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34473 = f__14994__auto__.call(null);
(statearr_34473[(6)] = c__14993__auto__);

return statearr_34473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__34477 = arguments.length;
switch (G__34477) {
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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (1))){
var inst_34478 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34483__$1,(2),inst_34478);
} else {
if((state_val_34484 === (2))){
var inst_34480 = (state_34483[(2)]);
var inst_34481 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_34480);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34483__$1,inst_34481);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14971__auto____0 = (function (){
var statearr_34485 = [null,null,null,null,null,null,null];
(statearr_34485[(0)] = klipse_clj$lang$clojure$state_machine__14971__auto__);

(statearr_34485[(1)] = (1));

return statearr_34485;
});
var klipse_clj$lang$clojure$state_machine__14971__auto____1 = (function (state_34483){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34486){if((e34486 instanceof Object)){
var ex__14974__auto__ = e34486;
var statearr_34487_34490 = state_34483;
(statearr_34487_34490[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_34483;
state_34483 = G__34491;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14971__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14971__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14971__auto____0;
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14971__auto____1;
return klipse_clj$lang$clojure$state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34488 = f__14994__auto__.call(null);
(statearr_34488[(6)] = c__14993__auto__);

return statearr_34488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34497){
var state_val_34498 = (state_34497[(1)]);
if((state_val_34498 === (1))){
var inst_34492 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34497__$1,(2),inst_34492);
} else {
if((state_val_34498 === (2))){
var inst_34494 = (state_34497[(2)]);
var inst_34495 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_34494);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34497__$1,inst_34495);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1 = (function (state_34497){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__14974__auto__ = e34500;
var statearr_34501_34503 = state_34497;
(statearr_34501_34503[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34504 = state_34497;
state_34497 = G__34504;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__ = function(state_34497){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1.call(this,state_34497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34502 = f__14994__auto__.call(null);
(statearr_34502[(6)] = c__14993__auto__);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_34511){
var state_val_34512 = (state_34511[(1)]);
if((state_val_34512 === (1))){
var inst_34505 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34511__$1,(2),inst_34505);
} else {
if((state_val_34512 === (2))){
var inst_34507 = (state_34511[(2)]);
var inst_34508 = cljs.core.second.call(null,inst_34507);
var inst_34509 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34508);
var state_34511__$1 = state_34511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34511__$1,inst_34509);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null];
(statearr_34513[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1 = (function (state_34511){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34514){if((e34514 instanceof Object)){
var ex__14974__auto__ = e34514;
var statearr_34515_34517 = state_34511;
(statearr_34515_34517[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34518 = state_34511;
state_34511 = G__34518;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__ = function(state_34511){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1.call(this,state_34511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_34516 = f__14994__auto__.call(null);
(statearr_34516[(6)] = c__14993__auto__);

return statearr_34516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__34520){
var map__34521 = p__34520;
var map__34521__$1 = (((((!((map__34521 == null))))?(((((map__34521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34521):map__34521);
var opts = map__34521__$1;
var container_id = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__34521__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14993__auto___34573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_34555){
var state_val_34556 = (state_34555[(1)]);
if((state_val_34556 === (7))){
var inst_34531 = (state_34555[(2)]);
var inst_34536 = (function (){var _STAR_print_newline_STAR__orig_val__34532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34534 = true;
return ((function (_STAR_print_newline_STAR__orig_val__34532,_STAR_print_fn_STAR__orig_val__34533,_STAR_print_newline_STAR__temp_val__34534,inst_34531,state_val_34556,c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__34519_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__34519_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__34532,_STAR_print_fn_STAR__orig_val__34533,_STAR_print_newline_STAR__temp_val__34534,inst_34531,state_val_34556,c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_34537 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_34538 = cljs.core._STAR_print_fn_STAR_ = inst_34536;
var state_34555__$1 = (function (){var statearr_34557 = state_34555;
(statearr_34557[(7)] = inst_34538);

(statearr_34557[(8)] = inst_34531);

(statearr_34557[(9)] = inst_34537);

return statearr_34557;
})();
var statearr_34558_34574 = state_34555__$1;
(statearr_34558_34574[(2)] = null);

(statearr_34558_34574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (1))){
var inst_34523 = clojure.string.blank_QMARK_.call(null,exp);
var state_34555__$1 = state_34555;
if(inst_34523){
var statearr_34559_34575 = state_34555__$1;
(statearr_34559_34575[(1)] = (2));

} else {
var statearr_34560_34576 = state_34555__$1;
(statearr_34560_34576[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (4))){
var inst_34553 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34555__$1,inst_34553);
} else {
if((state_val_34556 === (6))){
var state_34555__$1 = state_34555;
var statearr_34561_34577 = state_34555__$1;
(statearr_34561_34577[(2)] = null);

(statearr_34561_34577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (3))){
var state_34555__$1 = state_34555;
if(cljs.core.truth_(setup_container_fn)){
var statearr_34562_34578 = state_34555__$1;
(statearr_34562_34578[(1)] = (5));

} else {
var statearr_34563_34579 = state_34555__$1;
(statearr_34563_34579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (2))){
var inst_34525 = cljs.core.async.put_BANG_.call(null,c,"");
var state_34555__$1 = state_34555;
var statearr_34564_34580 = state_34555__$1;
(statearr_34564_34580[(2)] = inst_34525);

(statearr_34564_34580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (11))){
var inst_34547 = (state_34555[(2)]);
var inst_34548 = cljs.core.second.call(null,inst_34547);
var inst_34549 = cljs.core.async.put_BANG_.call(null,c,inst_34548);
var state_34555__$1 = state_34555;
var statearr_34565_34581 = state_34555__$1;
(statearr_34565_34581[(2)] = inst_34549);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (9))){
var inst_34539 = (state_34555[(2)]);
var inst_34540 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_34541 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_34555__$1 = (function (){var statearr_34566 = state_34555;
(statearr_34566[(10)] = inst_34540);

(statearr_34566[(11)] = inst_34541);

(statearr_34566[(12)] = inst_34539);

return statearr_34566;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (5))){
var inst_34528 = setup_container_fn.call(null,container_id);
var state_34555__$1 = state_34555;
var statearr_34567_34582 = state_34555__$1;
(statearr_34567_34582[(2)] = inst_34528);

(statearr_34567_34582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34555,null,null,(9),(8));
var inst_34545 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34555__$1,(11),inst_34545);
} else {
if((state_val_34556 === (8))){
var inst_34551 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34568_34583 = state_34555__$1;
(statearr_34568_34583[(2)] = inst_34551);

(statearr_34568_34583[(1)] = (4));


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
});})(c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__14970__auto__,c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0 = (function (){
var statearr_34569 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34569[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__);

(statearr_34569[(1)] = (1));

return statearr_34569;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1 = (function (state_34555){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_34555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e34570){if((e34570 instanceof Object)){
var ex__14974__auto__ = e34570;
var statearr_34571_34584 = state_34555;
(statearr_34571_34584[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34585 = state_34555;
state_34555 = G__34585;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__ = function(state_34555){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1.call(this,state_34555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__14995__auto__ = (function (){var statearr_34572 = f__14994__auto__.call(null);
(statearr_34572[(6)] = c__14993__auto___34573);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto___34573,c,map__34521,map__34521__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
