// Compiled by ClojureScript 0.0.668480191 {}
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
goog.require('cljs.repl');
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
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28108){
var state_val_28109 = (state_28108[(1)]);
if((state_val_28109 === (7))){
var inst_28104 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
var statearr_28110_28136 = state_28108__$1;
(statearr_28110_28136[(2)] = inst_28104);

(statearr_28110_28136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (1))){
var inst_28049 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28108__$1,(2),inst_28049);
} else {
if((state_val_28109 === (4))){
var inst_28106 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28108__$1,inst_28106);
} else {
if((state_val_28109 === (15))){
var inst_28079 = (state_28108[(7)]);
var inst_28095 = (state_28108[(2)]);
var inst_28096 = cljs.core.next.call(null,inst_28079);
var inst_28060 = inst_28096;
var inst_28061 = null;
var inst_28062 = (0);
var inst_28063 = (0);
var state_28108__$1 = (function (){var statearr_28111 = state_28108;
(statearr_28111[(8)] = inst_28060);

(statearr_28111[(9)] = inst_28061);

(statearr_28111[(10)] = inst_28095);

(statearr_28111[(11)] = inst_28062);

(statearr_28111[(12)] = inst_28063);

return statearr_28111;
})();
var statearr_28112_28137 = state_28108__$1;
(statearr_28112_28137[(2)] = null);

(statearr_28112_28137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (13))){
var inst_28079 = (state_28108[(7)]);
var inst_28088 = cljs.core.first.call(null,inst_28079);
var inst_28089 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_28090 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28091 = [inst_28090,klipse_clj.repl.current_ns_eval];
var inst_28092 = cljs.core.PersistentHashMap.fromArrays(inst_28089,inst_28091);
var inst_28093 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_28088,inst_28092);
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28108__$1,(15),inst_28093);
} else {
if((state_val_28109 === (6))){
var inst_28060 = (state_28108[(8)]);
var inst_28079 = (state_28108[(7)]);
var inst_28079__$1 = cljs.core.seq.call(null,inst_28060);
var state_28108__$1 = (function (){var statearr_28113 = state_28108;
(statearr_28113[(7)] = inst_28079__$1);

return statearr_28113;
})();
if(inst_28079__$1){
var statearr_28114_28138 = state_28108__$1;
(statearr_28114_28138[(1)] = (9));

} else {
var statearr_28115_28139 = state_28108__$1;
(statearr_28115_28139[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (3))){
var inst_28062 = (state_28108[(11)]);
var inst_28063 = (state_28108[(12)]);
var inst_28065 = (inst_28063 < inst_28062);
var inst_28066 = inst_28065;
var state_28108__$1 = state_28108;
if(cljs.core.truth_(inst_28066)){
var statearr_28116_28140 = state_28108__$1;
(statearr_28116_28140[(1)] = (5));

} else {
var statearr_28117_28141 = state_28108__$1;
(statearr_28117_28141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (12))){
var inst_28079 = (state_28108[(7)]);
var inst_28083 = cljs.core.chunk_first.call(null,inst_28079);
var inst_28084 = cljs.core.chunk_rest.call(null,inst_28079);
var inst_28085 = cljs.core.count.call(null,inst_28083);
var inst_28060 = inst_28084;
var inst_28061 = inst_28083;
var inst_28062 = inst_28085;
var inst_28063 = (0);
var state_28108__$1 = (function (){var statearr_28118 = state_28108;
(statearr_28118[(8)] = inst_28060);

(statearr_28118[(9)] = inst_28061);

(statearr_28118[(11)] = inst_28062);

(statearr_28118[(12)] = inst_28063);

return statearr_28118;
})();
var statearr_28119_28142 = state_28108__$1;
(statearr_28119_28142[(2)] = null);

(statearr_28119_28142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (2))){
var inst_28051 = (state_28108[(2)]);
var inst_28056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28057 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_28058 = (new cljs.core.PersistentVector(null,2,(5),inst_28056,inst_28057,null));
var inst_28059 = cljs.core.seq.call(null,inst_28058);
var inst_28060 = inst_28059;
var inst_28061 = null;
var inst_28062 = (0);
var inst_28063 = (0);
var state_28108__$1 = (function (){var statearr_28120 = state_28108;
(statearr_28120[(8)] = inst_28060);

(statearr_28120[(9)] = inst_28061);

(statearr_28120[(13)] = inst_28051);

(statearr_28120[(11)] = inst_28062);

(statearr_28120[(12)] = inst_28063);

return statearr_28120;
})();
var statearr_28121_28143 = state_28108__$1;
(statearr_28121_28143[(2)] = null);

(statearr_28121_28143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (11))){
var inst_28102 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
var statearr_28122_28144 = state_28108__$1;
(statearr_28122_28144[(2)] = inst_28102);

(statearr_28122_28144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (9))){
var inst_28079 = (state_28108[(7)]);
var inst_28081 = cljs.core.chunked_seq_QMARK_.call(null,inst_28079);
var state_28108__$1 = state_28108;
if(inst_28081){
var statearr_28123_28145 = state_28108__$1;
(statearr_28123_28145[(1)] = (12));

} else {
var statearr_28124_28146 = state_28108__$1;
(statearr_28124_28146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (5))){
var inst_28061 = (state_28108[(9)]);
var inst_28063 = (state_28108[(12)]);
var inst_28068 = cljs.core._nth.call(null,inst_28061,inst_28063);
var inst_28069 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_28070 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28071 = [inst_28070,klipse_clj.repl.current_ns_eval];
var inst_28072 = cljs.core.PersistentHashMap.fromArrays(inst_28069,inst_28071);
var inst_28073 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_28068,inst_28072);
var state_28108__$1 = state_28108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28108__$1,(8),inst_28073);
} else {
if((state_val_28109 === (14))){
var inst_28099 = (state_28108[(2)]);
var state_28108__$1 = state_28108;
var statearr_28128_28147 = state_28108__$1;
(statearr_28128_28147[(2)] = inst_28099);

(statearr_28128_28147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (10))){
var state_28108__$1 = state_28108;
var statearr_28129_28148 = state_28108__$1;
(statearr_28129_28148[(2)] = null);

(statearr_28129_28148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28109 === (8))){
var inst_28060 = (state_28108[(8)]);
var inst_28061 = (state_28108[(9)]);
var inst_28062 = (state_28108[(11)]);
var inst_28063 = (state_28108[(12)]);
var inst_28075 = (state_28108[(2)]);
var inst_28076 = (inst_28063 + (1));
var tmp28125 = inst_28060;
var tmp28126 = inst_28061;
var tmp28127 = inst_28062;
var inst_28060__$1 = tmp28125;
var inst_28061__$1 = tmp28126;
var inst_28062__$1 = tmp28127;
var inst_28063__$1 = inst_28076;
var state_28108__$1 = (function (){var statearr_28130 = state_28108;
(statearr_28130[(8)] = inst_28060__$1);

(statearr_28130[(9)] = inst_28061__$1);

(statearr_28130[(14)] = inst_28075);

(statearr_28130[(11)] = inst_28062__$1);

(statearr_28130[(12)] = inst_28063__$1);

return statearr_28130;
})();
var statearr_28131_28149 = state_28108__$1;
(statearr_28131_28149[(2)] = null);

(statearr_28131_28149[(1)] = (3));


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
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____0 = (function (){
var statearr_28132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28132[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__);

(statearr_28132[(1)] = (1));

return statearr_28132;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____1 = (function (state_28108){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28133){if((e28133 instanceof Object)){
var ex__21399__auto__ = e28133;
var statearr_28134_28150 = state_28108;
(statearr_28134_28150[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28151 = state_28108;
state_28108 = G__28151;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__ = function(state_28108){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____1.call(this,state_28108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28135 = f__21419__auto__.call(null);
(statearr_28135[(6)] = c__21418__auto__);

return statearr_28135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (1))){
var inst_28152 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
return null;
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____0 = (function (){
var statearr_28156 = [null,null,null,null,null,null,null];
(statearr_28156[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__);

(statearr_28156[(1)] = (1));

return statearr_28156;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____1 = (function (state_28154){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28157){if((e28157 instanceof Object)){
var ex__21399__auto__ = e28157;
var statearr_28158_28160 = state_28154;
(statearr_28158_28160[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28161 = state_28154;
state_28154 = G__28161;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28159 = f__21419__auto__.call(null);
(statearr_28159[(6)] = c__21418__auto__);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__28162){
var map__28163 = p__28162;
var map__28163__$1 = (((((!((map__28163 == null))))?(((((map__28163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28163):map__28163);
var print_length = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__28166 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__28167 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28167;

try{var sb__18966__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28168_28172 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28169_28173 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28170_28174 = true;
var _STAR_print_fn_STAR__temp_val__28171_28175 = ((function (_STAR_print_newline_STAR__orig_val__28168_28172,_STAR_print_fn_STAR__orig_val__28169_28173,_STAR_print_newline_STAR__temp_val__28170_28174,sb__18966__auto__,_STAR_print_length_STAR__orig_val__28166,_STAR_print_length_STAR__temp_val__28167,map__28163,map__28163__$1,print_length,beautify_strings){
return (function (x__18967__auto__){
return sb__18966__auto__.append(x__18967__auto__);
});})(_STAR_print_newline_STAR__orig_val__28168_28172,_STAR_print_fn_STAR__orig_val__28169_28173,_STAR_print_newline_STAR__temp_val__28170_28174,sb__18966__auto__,_STAR_print_length_STAR__orig_val__28166,_STAR_print_length_STAR__temp_val__28167,map__28163,map__28163__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28170_28174;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28171_28175;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__17801__auto__ = typeof value === 'string';
if(and__17801__auto__){
return beautify_strings;
} else {
return and__17801__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28169_28173;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28168_28172;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18966__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28166;
}}catch (e28165){if((e28165 instanceof Object)){
var e = e28165;
return ["ERROR :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e28165;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__28176,verbose_QMARK_,current_ns){
var map__28177 = p__28176;
var map__28177__$1 = (((((!((map__28177 == null))))?(((((map__28177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28177):map__28177);
var ns = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__28177__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.display_err = (function klipse_clj$lang$clojure$display_err(error){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return cljs.repl.error__GT_str.call(null,cljs.core.ex_cause.call(null,error));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');
}
}catch (e28179){if((e28179 instanceof Object)){
var e = e28179;
return e;
} else {
throw e28179;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__28180,opts){
var map__28181 = p__28180;
var map__28181__$1 = (((((!((map__28181 == null))))?(((((map__28181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28181):map__28181);
var args = map__28181__$1;
var ns = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__28181__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__28183){
var map__28184 = p__28183;
var map__28184__$1 = (((((!((map__28184 == null))))?(((((map__28184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28184):map__28184);
var form = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__28184__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__28186){
var map__28187 = p__28186;
var map__28187__$1 = (((((!((map__28187 == null))))?(((((map__28187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28187):map__28187);
var foo = map__28187__$1;
var value = cljs.core.get.call(null,map__28187__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__28187__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__28189){
var map__28190 = p__28189;
var map__28190__$1 = (((((!((map__28190 == null))))?(((((map__28190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28190):map__28190);
var args = map__28190__$1;
var file = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__28190__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__28192){
var map__28193 = p__28192;
var map__28193__$1 = (((((!((map__28193 == null))))?(((((map__28193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var source = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__28195){
var map__28196 = p__28195;
var map__28196__$1 = (((((!((map__28196 == null))))?(((((map__28196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28196):map__28196);
var static_fns = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__28196__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18174__auto__ = max_eval_duration;
var y__18175__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits_orig_val__28198_28200 = cljs.compiler.emits;
var emits_temp_val__28199_28201 = the_emits;
cljs.compiler.emits = emits_temp_val__28199_28201;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__28198_28200,emits_temp_val__28199_28201,c,max_eval_duration__$1,the_emits,map__28196,map__28196__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__28198_28200,emits_temp_val__28199_28201,c,max_eval_duration__$1,the_emits,map__28196,map__28196__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__28198_28200;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__28202){
var map__28203 = p__28202;
var map__28203__$1 = (((((!((map__28203 == null))))?(((((map__28203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28203):map__28203);
var static_fns = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18174__auto__ = max_eval_duration;
var y__18175__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18174__auto__ > y__18175__auto__) ? x__18174__auto__ : y__18175__auto__);
})();
var emits_orig_val__28205_28207 = cljs.compiler.emits;
var emits_temp_val__28206_28208 = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);
cljs.compiler.emits = emits_temp_val__28206_28208;

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__28205_28207,emits_temp_val__28206_28208,c,max_eval_duration__$1,map__28203,map__28203__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__28205_28207,emits_temp_val__28206_28208,c,max_eval_duration__$1,map__28203,map__28203__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__28205_28207;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__28209 = cljs.core.conj.call(null,res,ch);
res = G__28209;
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
var _STAR_alias_map_STAR__orig_val__28210 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__28211 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__28212 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__28213 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__28214 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__28215 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__28216 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__28217 = ns;
var _STAR_cljs_ns_STAR__temp_val__28218 = ns;
var _STAR_compiler_STAR__temp_val__28219 = st;
var resolve_symbol_temp_val__28220 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__28221 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__28216;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__28217;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__28218;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__28219;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__28220;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__28221;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__28215;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__28214;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__28213;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__28212;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__28211;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__28210;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__28225 = arguments.length;
switch (G__28225) {
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
var _STAR_alias_map_STAR__orig_val__28226 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__28227 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__28228 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__28229 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__28230 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__28231 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__28232 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__28233 = ns;
var _STAR_cljs_ns_STAR__temp_val__28234 = ns;
var _STAR_compiler_STAR__temp_val__28235 = st;
var resolve_symbol_temp_val__28236 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__28237 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__28232;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__28233;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__28234;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__28235;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__28236;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__28237;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__28231;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__28230;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__28229;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__28228;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__28227;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__28226;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__28242 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__28242,(0),null);
var rest_s = cljs.core.nth.call(null,vec__28242,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__28245 = rest_s;
var G__28246 = res;
s__$1 = G__28245;
res = G__28246;
continue;
} else {
var G__28247 = rest_s;
var G__28248 = cljs.core.conj.call(null,res,exp);
s__$1 = G__28247;
res = G__28248;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__28249){
var map__28250 = p__28249;
var map__28250__$1 = (((((!((map__28250 == null))))?(((((map__28250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28250):map__28250);
var result_element = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__17801__auto__ = container;
if(cljs.core.truth_(and__17801__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__17801__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28309){
var state_val_28310 = (state_28309[(1)]);
if((state_val_28310 === (7))){
var inst_28305 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28311_28332 = state_28309__$1;
(statearr_28311_28332[(2)] = inst_28305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (1))){
var state_28309__$1 = state_28309;
var statearr_28312_28333 = state_28309__$1;
(statearr_28312_28333[(2)] = null);

(statearr_28312_28333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28309,(3),Object,null,(2));
var inst_28260 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(5),inst_28260);
} else {
if((state_val_28310 === (13))){
var inst_28282 = (state_28309[(7)]);
var inst_28290 = (state_28309[(8)]);
var inst_28295 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28296 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_28297 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_28282,inst_28295,inst_28296);
var inst_28275 = inst_28297;
var inst_28276 = inst_28290;
var state_28309__$1 = (function (){var statearr_28313 = state_28309;
(statearr_28313[(9)] = inst_28276);

(statearr_28313[(10)] = inst_28275);

return statearr_28313;
})();
var statearr_28314_28334 = state_28309__$1;
(statearr_28314_28334[(2)] = null);

(statearr_28314_28334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (6))){
var inst_28275 = (state_28309[(10)]);
var inst_28281 = (state_28309[(11)]);
var inst_28281__$1 = cljs.core.nth.call(null,inst_28275,(0),null);
var inst_28282 = cljs.core.nth.call(null,inst_28275,(1),null);
var inst_28283 = cljs.core.empty_QMARK_.call(null,inst_28281__$1);
var inst_28284 = (!(inst_28283));
var state_28309__$1 = (function (){var statearr_28315 = state_28309;
(statearr_28315[(11)] = inst_28281__$1);

(statearr_28315[(7)] = inst_28282);

return statearr_28315;
})();
if(inst_28284){
var statearr_28316_28335 = state_28309__$1;
(statearr_28316_28335[(1)] = (8));

} else {
var statearr_28317_28336 = state_28309__$1;
(statearr_28317_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (3))){
var inst_28252 = (state_28309[(2)]);
var inst_28253 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_28254 = [inst_28252];
var inst_28255 = cljs.core.PersistentHashMap.fromArrays(inst_28253,inst_28254);
var inst_28256 = klipse_clj.lang.clojure.populate_err.call(null,inst_28255,opts);
var state_28309__$1 = state_28309;
var statearr_28318_28337 = state_28309__$1;
(statearr_28318_28337[(2)] = inst_28256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (12))){
var inst_28290 = (state_28309[(8)]);
var inst_28293 = klipse_clj.lang.clojure.populate_err.call(null,inst_28290,opts);
var state_28309__$1 = state_28309;
var statearr_28319_28338 = state_28309__$1;
(statearr_28319_28338[(2)] = inst_28293);

(statearr_28319_28338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (2))){
var inst_28307 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else {
if((state_val_28310 === (11))){
var inst_28290 = (state_28309[(8)]);
var inst_28290__$1 = (state_28309[(2)]);
var inst_28291 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28290__$1);
var state_28309__$1 = (function (){var statearr_28320 = state_28309;
(statearr_28320[(8)] = inst_28290__$1);

return statearr_28320;
})();
if(cljs.core.truth_(inst_28291)){
var statearr_28321_28339 = state_28309__$1;
(statearr_28321_28339[(1)] = (12));

} else {
var statearr_28322_28340 = state_28309__$1;
(statearr_28322_28340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (9))){
var inst_28276 = (state_28309[(9)]);
var state_28309__$1 = state_28309;
var statearr_28323_28341 = state_28309__$1;
(statearr_28323_28341[(2)] = inst_28276);

(statearr_28323_28341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (5))){
var inst_28262 = (state_28309[(2)]);
var inst_28270 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28271 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_28272 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_28270,inst_28271);
var inst_28273 = cljs.core.nth.call(null,inst_28272,(0),null);
var inst_28274 = cljs.core.nth.call(null,inst_28272,(1),null);
var inst_28275 = inst_28272;
var inst_28276 = null;
var state_28309__$1 = (function (){var statearr_28324 = state_28309;
(statearr_28324[(9)] = inst_28276);

(statearr_28324[(10)] = inst_28275);

(statearr_28324[(12)] = inst_28273);

(statearr_28324[(13)] = inst_28262);

(statearr_28324[(14)] = inst_28274);

return statearr_28324;
})();
var statearr_28325_28342 = state_28309__$1;
(statearr_28325_28342[(2)] = null);

(statearr_28325_28342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (14))){
var inst_28300 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28326_28343 = state_28309__$1;
(statearr_28326_28343[(2)] = inst_28300);

(statearr_28326_28343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (10))){
var inst_28303 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28327_28344 = state_28309__$1;
(statearr_28327_28344[(2)] = inst_28303);

(statearr_28327_28344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (8))){
var inst_28281 = (state_28309[(11)]);
var inst_28286 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28287 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_28286,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_28288 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_28281,inst_28287);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(11),inst_28288);
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
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28328[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____1 = (function (state_28309){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__21399__auto__ = e28329;
var statearr_28330_28345 = state_28309;
(statearr_28330_28345[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28346 = state_28309;
state_28309 = G__28346;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28331 = f__21419__auto__.call(null);
(statearr_28331[(6)] = c__21418__auto__);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28404){
var state_val_28405 = (state_28404[(1)]);
if((state_val_28405 === (7))){
var inst_28372 = (state_28404[(7)]);
var inst_28377 = klipse_clj.repl.create_state_compile.call(null);
var inst_28378 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_28377,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_28379 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_28372,inst_28378);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28404__$1,(10),inst_28379);
} else {
if((state_val_28405 === (1))){
var state_28404__$1 = state_28404;
var statearr_28406_28427 = state_28404__$1;
(statearr_28406_28427[(2)] = null);

(statearr_28406_28427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28404,(3),Object,null,(2));
var inst_28361 = klipse_clj.repl.create_state_compile.call(null);
var inst_28362 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_28363 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_28361,inst_28362);
var inst_28364 = cljs.core.nth.call(null,inst_28363,(0),null);
var inst_28365 = cljs.core.nth.call(null,inst_28363,(1),null);
var inst_28366 = inst_28363;
var inst_28367 = "";
var state_28404__$1 = (function (){var statearr_28407 = state_28404;
(statearr_28407[(8)] = inst_28366);

(statearr_28407[(9)] = inst_28367);

(statearr_28407[(10)] = inst_28365);

(statearr_28407[(11)] = inst_28364);

return statearr_28407;
})();
var statearr_28408_28428 = state_28404__$1;
(statearr_28408_28428[(2)] = null);

(statearr_28408_28428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (13))){
var inst_28392 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28409_28429 = state_28404__$1;
(statearr_28409_28429[(2)] = inst_28392);

(statearr_28409_28429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (6))){
var inst_28400 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28410_28430 = state_28404__$1;
(statearr_28410_28430[(2)] = inst_28400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (3))){
var inst_28347 = (state_28404[(2)]);
var inst_28348 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_28349 = [inst_28347];
var inst_28350 = cljs.core.PersistentHashMap.fromArrays(inst_28348,inst_28349);
var state_28404__$1 = state_28404;
var statearr_28411_28431 = state_28404__$1;
(statearr_28411_28431[(2)] = inst_28350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (12))){
var inst_28373 = (state_28404[(12)]);
var inst_28367 = (state_28404[(9)]);
var inst_28381 = (state_28404[(13)]);
var inst_28385 = klipse_clj.repl.create_state_compile.call(null);
var inst_28386 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_28387 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_28373,inst_28385,inst_28386);
var inst_28388 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_28381);
var inst_28389 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28367),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28388)].join('');
var inst_28366 = inst_28387;
var inst_28367__$1 = inst_28389;
var state_28404__$1 = (function (){var statearr_28412 = state_28404;
(statearr_28412[(8)] = inst_28366);

(statearr_28412[(9)] = inst_28367__$1);

return statearr_28412;
})();
var statearr_28413_28432 = state_28404__$1;
(statearr_28413_28432[(2)] = null);

(statearr_28413_28432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (2))){
var inst_28402 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28404__$1,inst_28402);
} else {
if((state_val_28405 === (11))){
var inst_28381 = (state_28404[(13)]);
var state_28404__$1 = state_28404;
var statearr_28414_28433 = state_28404__$1;
(statearr_28414_28433[(2)] = inst_28381);

(statearr_28414_28433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (9))){
var inst_28398 = (state_28404[(2)]);
var state_28404__$1 = state_28404;
var statearr_28415_28434 = state_28404__$1;
(statearr_28415_28434[(2)] = inst_28398);

(statearr_28415_28434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (5))){
var inst_28366 = (state_28404[(8)]);
var inst_28372 = (state_28404[(7)]);
var inst_28372__$1 = cljs.core.nth.call(null,inst_28366,(0),null);
var inst_28373 = cljs.core.nth.call(null,inst_28366,(1),null);
var inst_28374 = cljs.core.empty_QMARK_.call(null,inst_28372__$1);
var inst_28375 = (!(inst_28374));
var state_28404__$1 = (function (){var statearr_28416 = state_28404;
(statearr_28416[(7)] = inst_28372__$1);

(statearr_28416[(12)] = inst_28373);

return statearr_28416;
})();
if(inst_28375){
var statearr_28417_28435 = state_28404__$1;
(statearr_28417_28435[(1)] = (7));

} else {
var statearr_28418_28436 = state_28404__$1;
(statearr_28418_28436[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (10))){
var inst_28381 = (state_28404[(13)]);
var inst_28381__$1 = (state_28404[(2)]);
var inst_28382 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28381__$1);
var state_28404__$1 = (function (){var statearr_28419 = state_28404;
(statearr_28419[(13)] = inst_28381__$1);

return statearr_28419;
})();
if(cljs.core.truth_(inst_28382)){
var statearr_28420_28437 = state_28404__$1;
(statearr_28420_28437[(1)] = (11));

} else {
var statearr_28421_28438 = state_28404__$1;
(statearr_28421_28438[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28405 === (8))){
var inst_28367 = (state_28404[(9)]);
var inst_28394 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_28395 = [inst_28367];
var inst_28396 = cljs.core.PersistentHashMap.fromArrays(inst_28394,inst_28395);
var state_28404__$1 = state_28404;
var statearr_28422_28439 = state_28404__$1;
(statearr_28422_28439[(2)] = inst_28396);

(statearr_28422_28439[(1)] = (9));


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
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____0 = (function (){
var statearr_28423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28423[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__);

(statearr_28423[(1)] = (1));

return statearr_28423;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____1 = (function (state_28404){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28424){if((e28424 instanceof Object)){
var ex__21399__auto__ = e28424;
var statearr_28425_28440 = state_28404;
(statearr_28425_28440[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28441 = state_28404;
state_28404 = G__28441;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__ = function(state_28404){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____1.call(this,state_28404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28426 = f__21419__auto__.call(null);
(statearr_28426[(6)] = c__21418__auto__);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28447){
var state_val_28448 = (state_28447[(1)]);
if((state_val_28448 === (1))){
var inst_28442 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,(2),inst_28442);
} else {
if((state_val_28448 === (2))){
var inst_28444 = (state_28447[(2)]);
var inst_28445 = klipse_clj.lang.clojure.result_as_str.call(null,inst_28444,opts);
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____0 = (function (){
var statearr_28449 = [null,null,null,null,null,null,null];
(statearr_28449[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__);

(statearr_28449[(1)] = (1));

return statearr_28449;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____1 = (function (state_28447){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28450){if((e28450 instanceof Object)){
var ex__21399__auto__ = e28450;
var statearr_28451_28453 = state_28447;
(statearr_28451_28453[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28454 = state_28447;
state_28447 = G__28454;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28452 = f__21419__auto__.call(null);
(statearr_28452[(6)] = c__21418__auto__);

return statearr_28452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__28456 = arguments.length;
switch (G__28456) {
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
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28462){
var state_val_28463 = (state_28462[(1)]);
if((state_val_28463 === (1))){
var inst_28457 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28462__$1,(2),inst_28457);
} else {
if((state_val_28463 === (2))){
var inst_28459 = (state_28462[(2)]);
var inst_28460 = klipse_clj.lang.clojure.read_result.call(null,inst_28459);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28462__$1,inst_28460);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21396__auto____0 = (function (){
var statearr_28464 = [null,null,null,null,null,null,null];
(statearr_28464[(0)] = klipse_clj$lang$clojure$state_machine__21396__auto__);

(statearr_28464[(1)] = (1));

return statearr_28464;
});
var klipse_clj$lang$clojure$state_machine__21396__auto____1 = (function (state_28462){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28465){if((e28465 instanceof Object)){
var ex__21399__auto__ = e28465;
var statearr_28466_28469 = state_28462;
(statearr_28466_28469[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28470 = state_28462;
state_28462 = G__28470;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21396__auto__ = function(state_28462){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21396__auto____1.call(this,state_28462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21396__auto____0;
klipse_clj$lang$clojure$state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21396__auto____1;
return klipse_clj$lang$clojure$state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28467 = f__21419__auto__.call(null);
(statearr_28467[(6)] = c__21418__auto__);

return statearr_28467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28477){
var state_val_28478 = (state_28477[(1)]);
if((state_val_28478 === (1))){
var inst_28471 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_28477__$1 = state_28477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28477__$1,(2),inst_28471);
} else {
if((state_val_28478 === (2))){
var inst_28473 = (state_28477[(2)]);
var inst_28474 = cljs.core.clj__GT_js.call(null,inst_28473);
var inst_28475 = cb.call(null,inst_28474);
var state_28477__$1 = state_28477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28477__$1,inst_28475);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____0 = (function (){
var statearr_28479 = [null,null,null,null,null,null,null];
(statearr_28479[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__);

(statearr_28479[(1)] = (1));

return statearr_28479;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____1 = (function (state_28477){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28480){if((e28480 instanceof Object)){
var ex__21399__auto__ = e28480;
var statearr_28481_28483 = state_28477;
(statearr_28481_28483[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28484 = state_28477;
state_28477 = G__28484;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__ = function(state_28477){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____1.call(this,state_28477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28482 = f__21419__auto__.call(null);
(statearr_28482[(6)] = c__21418__auto__);

return statearr_28482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__28486 = arguments.length;
switch (G__28486) {
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
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28492){
var state_val_28493 = (state_28492[(1)]);
if((state_val_28493 === (1))){
var inst_28487 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28492__$1,(2),inst_28487);
} else {
if((state_val_28493 === (2))){
var inst_28489 = (state_28492[(2)]);
var inst_28490 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_28489);
var state_28492__$1 = state_28492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28492__$1,inst_28490);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21396__auto____0 = (function (){
var statearr_28494 = [null,null,null,null,null,null,null];
(statearr_28494[(0)] = klipse_clj$lang$clojure$state_machine__21396__auto__);

(statearr_28494[(1)] = (1));

return statearr_28494;
});
var klipse_clj$lang$clojure$state_machine__21396__auto____1 = (function (state_28492){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28495){if((e28495 instanceof Object)){
var ex__21399__auto__ = e28495;
var statearr_28496_28499 = state_28492;
(statearr_28496_28499[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28500 = state_28492;
state_28492 = G__28500;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21396__auto__ = function(state_28492){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21396__auto____1.call(this,state_28492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21396__auto____0;
klipse_clj$lang$clojure$state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21396__auto____1;
return klipse_clj$lang$clojure$state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28497 = f__21419__auto__.call(null);
(statearr_28497[(6)] = c__21418__auto__);

return statearr_28497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28506){
var state_val_28507 = (state_28506[(1)]);
if((state_val_28507 === (1))){
var inst_28501 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28506__$1,(2),inst_28501);
} else {
if((state_val_28507 === (2))){
var inst_28503 = (state_28506[(2)]);
var inst_28504 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_28503);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28506__$1,inst_28504);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null];
(statearr_28508[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____1 = (function (state_28506){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__21399__auto__ = e28509;
var statearr_28510_28512 = state_28506;
(statearr_28510_28512[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28506;
state_28506 = G__28513;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__ = function(state_28506){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____1.call(this,state_28506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28511 = f__21419__auto__.call(null);
(statearr_28511[(6)] = c__21418__auto__);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__21418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto__){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto__){
return (function (state_28520){
var state_val_28521 = (state_28520[(1)]);
if((state_val_28521 === (1))){
var inst_28514 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28520__$1,(2),inst_28514);
} else {
if((state_val_28521 === (2))){
var inst_28516 = (state_28520[(2)]);
var inst_28517 = cljs.core.second.call(null,inst_28516);
var inst_28518 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28517);
var state_28520__$1 = state_28520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28520__$1,inst_28518);
} else {
return null;
}
}
});})(c__21418__auto__))
;
return ((function (switch__21395__auto__,c__21418__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____0 = (function (){
var statearr_28522 = [null,null,null,null,null,null,null];
(statearr_28522[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__);

(statearr_28522[(1)] = (1));

return statearr_28522;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____1 = (function (state_28520){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28523){if((e28523 instanceof Object)){
var ex__21399__auto__ = e28523;
var statearr_28524_28526 = state_28520;
(statearr_28524_28526[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28527 = state_28520;
state_28520 = G__28527;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__ = function(state_28520){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____1.call(this,state_28520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto__))
})();
var state__21420__auto__ = (function (){var statearr_28525 = f__21419__auto__.call(null);
(statearr_28525[(6)] = c__21418__auto__);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto__))
);

return c__21418__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__28529){
var map__28530 = p__28529;
var map__28530__$1 = (((((!((map__28530 == null))))?(((((map__28530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);
var opts = map__28530__$1;
var container_id = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__21418__auto___28582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__21419__auto__ = (function (){var switch__21395__auto__ = ((function (c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_28564){
var state_val_28565 = (state_28564[(1)]);
if((state_val_28565 === (7))){
var inst_28540 = (state_28564[(2)]);
var inst_28545 = (function (){var _STAR_print_newline_STAR__orig_val__28541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28543 = true;
return ((function (_STAR_print_newline_STAR__orig_val__28541,_STAR_print_fn_STAR__orig_val__28542,_STAR_print_newline_STAR__temp_val__28543,inst_28540,state_val_28565,c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__28528_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28528_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__28541,_STAR_print_fn_STAR__orig_val__28542,_STAR_print_newline_STAR__temp_val__28543,inst_28540,state_val_28565,c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_28546 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_28547 = cljs.core._STAR_print_fn_STAR_ = inst_28545;
var state_28564__$1 = (function (){var statearr_28566 = state_28564;
(statearr_28566[(7)] = inst_28547);

(statearr_28566[(8)] = inst_28546);

(statearr_28566[(9)] = inst_28540);

return statearr_28566;
})();
var statearr_28567_28583 = state_28564__$1;
(statearr_28567_28583[(2)] = null);

(statearr_28567_28583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (1))){
var inst_28532 = clojure.string.blank_QMARK_.call(null,exp);
var state_28564__$1 = state_28564;
if(inst_28532){
var statearr_28568_28584 = state_28564__$1;
(statearr_28568_28584[(1)] = (2));

} else {
var statearr_28569_28585 = state_28564__$1;
(statearr_28569_28585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (4))){
var inst_28562 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28564__$1,inst_28562);
} else {
if((state_val_28565 === (6))){
var state_28564__$1 = state_28564;
var statearr_28570_28586 = state_28564__$1;
(statearr_28570_28586[(2)] = null);

(statearr_28570_28586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (3))){
var state_28564__$1 = state_28564;
if(cljs.core.truth_(setup_container_fn)){
var statearr_28571_28587 = state_28564__$1;
(statearr_28571_28587[(1)] = (5));

} else {
var statearr_28572_28588 = state_28564__$1;
(statearr_28572_28588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (2))){
var inst_28534 = cljs.core.async.put_BANG_.call(null,c,"");
var state_28564__$1 = state_28564;
var statearr_28573_28589 = state_28564__$1;
(statearr_28573_28589[(2)] = inst_28534);

(statearr_28573_28589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (11))){
var inst_28556 = (state_28564[(2)]);
var inst_28557 = cljs.core.second.call(null,inst_28556);
var inst_28558 = cljs.core.async.put_BANG_.call(null,c,inst_28557);
var state_28564__$1 = state_28564;
var statearr_28574_28590 = state_28564__$1;
(statearr_28574_28590[(2)] = inst_28558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28564__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (9))){
var inst_28548 = (state_28564[(2)]);
var inst_28549 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_28550 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_28564__$1 = (function (){var statearr_28575 = state_28564;
(statearr_28575[(10)] = inst_28548);

(statearr_28575[(11)] = inst_28550);

(statearr_28575[(12)] = inst_28549);

return statearr_28575;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28564__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (5))){
var inst_28537 = setup_container_fn.call(null,container_id);
var state_28564__$1 = state_28564;
var statearr_28576_28591 = state_28564__$1;
(statearr_28576_28591[(2)] = inst_28537);

(statearr_28576_28591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28565 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28564,null,null,(9),(8));
var inst_28554 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_28564__$1 = state_28564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28564__$1,(11),inst_28554);
} else {
if((state_val_28565 === (8))){
var inst_28560 = (state_28564[(2)]);
var state_28564__$1 = state_28564;
var statearr_28577_28592 = state_28564__$1;
(statearr_28577_28592[(2)] = inst_28560);

(statearr_28577_28592[(1)] = (4));


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
});})(c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__21395__auto__,c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____0 = (function (){
var statearr_28578 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28578[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__);

(statearr_28578[(1)] = (1));

return statearr_28578;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____1 = (function (state_28564){
while(true){
var ret_value__21397__auto__ = (function (){try{while(true){
var result__21398__auto__ = switch__21395__auto__.call(null,state_28564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21398__auto__;
}
break;
}
}catch (e28579){if((e28579 instanceof Object)){
var ex__21399__auto__ = e28579;
var statearr_28580_28593 = state_28564;
(statearr_28580_28593[(5)] = ex__21399__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28594 = state_28564;
state_28564 = G__28594;
continue;
} else {
return ret_value__21397__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__ = function(state_28564){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____1.call(this,state_28564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21396__auto__;
})()
;})(switch__21395__auto__,c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__21420__auto__ = (function (){var statearr_28581 = f__21419__auto__.call(null);
(statearr_28581[(6)] = c__21418__auto___28582);

return statearr_28581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21420__auto__);
});})(c__21418__auto___28582,c,map__28530,map__28530__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
