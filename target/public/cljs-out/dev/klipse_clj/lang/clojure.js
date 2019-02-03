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
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34094){
var state_val_34095 = (state_34094[(1)]);
if((state_val_34095 === (7))){
var inst_34090 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34096_34122 = state_34094__$1;
(statearr_34096_34122[(2)] = inst_34090);

(statearr_34096_34122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (1))){
var inst_34035 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(2),inst_34035);
} else {
if((state_val_34095 === (4))){
var inst_34092 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34094__$1,inst_34092);
} else {
if((state_val_34095 === (15))){
var inst_34065 = (state_34094[(7)]);
var inst_34081 = (state_34094[(2)]);
var inst_34082 = cljs.core.next.call(null,inst_34065);
var inst_34046 = inst_34082;
var inst_34047 = null;
var inst_34048 = (0);
var inst_34049 = (0);
var state_34094__$1 = (function (){var statearr_34097 = state_34094;
(statearr_34097[(8)] = inst_34081);

(statearr_34097[(9)] = inst_34047);

(statearr_34097[(10)] = inst_34046);

(statearr_34097[(11)] = inst_34049);

(statearr_34097[(12)] = inst_34048);

return statearr_34097;
})();
var statearr_34098_34123 = state_34094__$1;
(statearr_34098_34123[(2)] = null);

(statearr_34098_34123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (13))){
var inst_34065 = (state_34094[(7)]);
var inst_34074 = cljs.core.first.call(null,inst_34065);
var inst_34075 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34076 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34077 = [inst_34076,klipse_clj.repl.current_ns_eval];
var inst_34078 = cljs.core.PersistentHashMap.fromArrays(inst_34075,inst_34077);
var inst_34079 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34074,inst_34078);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(15),inst_34079);
} else {
if((state_val_34095 === (6))){
var inst_34046 = (state_34094[(10)]);
var inst_34065 = (state_34094[(7)]);
var inst_34065__$1 = cljs.core.seq.call(null,inst_34046);
var state_34094__$1 = (function (){var statearr_34099 = state_34094;
(statearr_34099[(7)] = inst_34065__$1);

return statearr_34099;
})();
if(inst_34065__$1){
var statearr_34100_34124 = state_34094__$1;
(statearr_34100_34124[(1)] = (9));

} else {
var statearr_34101_34125 = state_34094__$1;
(statearr_34101_34125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (3))){
var inst_34049 = (state_34094[(11)]);
var inst_34048 = (state_34094[(12)]);
var inst_34051 = (inst_34049 < inst_34048);
var inst_34052 = inst_34051;
var state_34094__$1 = state_34094;
if(cljs.core.truth_(inst_34052)){
var statearr_34102_34126 = state_34094__$1;
(statearr_34102_34126[(1)] = (5));

} else {
var statearr_34103_34127 = state_34094__$1;
(statearr_34103_34127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (12))){
var inst_34065 = (state_34094[(7)]);
var inst_34069 = cljs.core.chunk_first.call(null,inst_34065);
var inst_34070 = cljs.core.chunk_rest.call(null,inst_34065);
var inst_34071 = cljs.core.count.call(null,inst_34069);
var inst_34046 = inst_34070;
var inst_34047 = inst_34069;
var inst_34048 = inst_34071;
var inst_34049 = (0);
var state_34094__$1 = (function (){var statearr_34104 = state_34094;
(statearr_34104[(9)] = inst_34047);

(statearr_34104[(10)] = inst_34046);

(statearr_34104[(11)] = inst_34049);

(statearr_34104[(12)] = inst_34048);

return statearr_34104;
})();
var statearr_34105_34128 = state_34094__$1;
(statearr_34105_34128[(2)] = null);

(statearr_34105_34128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (2))){
var inst_34037 = (state_34094[(2)]);
var inst_34042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34043 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_34044 = (new cljs.core.PersistentVector(null,2,(5),inst_34042,inst_34043,null));
var inst_34045 = cljs.core.seq.call(null,inst_34044);
var inst_34046 = inst_34045;
var inst_34047 = null;
var inst_34048 = (0);
var inst_34049 = (0);
var state_34094__$1 = (function (){var statearr_34106 = state_34094;
(statearr_34106[(9)] = inst_34047);

(statearr_34106[(13)] = inst_34037);

(statearr_34106[(10)] = inst_34046);

(statearr_34106[(11)] = inst_34049);

(statearr_34106[(12)] = inst_34048);

return statearr_34106;
})();
var statearr_34107_34129 = state_34094__$1;
(statearr_34107_34129[(2)] = null);

(statearr_34107_34129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (11))){
var inst_34088 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34108_34130 = state_34094__$1;
(statearr_34108_34130[(2)] = inst_34088);

(statearr_34108_34130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (9))){
var inst_34065 = (state_34094[(7)]);
var inst_34067 = cljs.core.chunked_seq_QMARK_.call(null,inst_34065);
var state_34094__$1 = state_34094;
if(inst_34067){
var statearr_34109_34131 = state_34094__$1;
(statearr_34109_34131[(1)] = (12));

} else {
var statearr_34110_34132 = state_34094__$1;
(statearr_34110_34132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (5))){
var inst_34047 = (state_34094[(9)]);
var inst_34049 = (state_34094[(11)]);
var inst_34054 = cljs.core._nth.call(null,inst_34047,inst_34049);
var inst_34055 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34056 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34057 = [inst_34056,klipse_clj.repl.current_ns_eval];
var inst_34058 = cljs.core.PersistentHashMap.fromArrays(inst_34055,inst_34057);
var inst_34059 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34054,inst_34058);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(8),inst_34059);
} else {
if((state_val_34095 === (14))){
var inst_34085 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34114_34133 = state_34094__$1;
(statearr_34114_34133[(2)] = inst_34085);

(statearr_34114_34133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (10))){
var state_34094__$1 = state_34094;
var statearr_34115_34134 = state_34094__$1;
(statearr_34115_34134[(2)] = null);

(statearr_34115_34134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (8))){
var inst_34047 = (state_34094[(9)]);
var inst_34046 = (state_34094[(10)]);
var inst_34049 = (state_34094[(11)]);
var inst_34048 = (state_34094[(12)]);
var inst_34061 = (state_34094[(2)]);
var inst_34062 = (inst_34049 + (1));
var tmp34111 = inst_34047;
var tmp34112 = inst_34046;
var tmp34113 = inst_34048;
var inst_34046__$1 = tmp34112;
var inst_34047__$1 = tmp34111;
var inst_34048__$1 = tmp34113;
var inst_34049__$1 = inst_34062;
var state_34094__$1 = (function (){var statearr_34116 = state_34094;
(statearr_34116[(9)] = inst_34047__$1);

(statearr_34116[(14)] = inst_34061);

(statearr_34116[(10)] = inst_34046__$1);

(statearr_34116[(11)] = inst_34049__$1);

(statearr_34116[(12)] = inst_34048__$1);

return statearr_34116;
})();
var statearr_34117_34135 = state_34094__$1;
(statearr_34117_34135[(2)] = null);

(statearr_34117_34135[(1)] = (3));


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
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____0 = (function (){
var statearr_34118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34118[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__);

(statearr_34118[(1)] = (1));

return statearr_34118;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____1 = (function (state_34094){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34119){if((e34119 instanceof Object)){
var ex__24071__auto__ = e34119;
var statearr_34120_34136 = state_34094;
(statearr_34120_34136[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34137 = state_34094;
state_34094 = G__34137;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__ = function(state_34094){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____1.call(this,state_34094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34121 = f__24235__auto__.call(null);
(statearr_34121[(6)] = c__24234__auto__);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34140){
var state_val_34141 = (state_34140[(1)]);
if((state_val_34141 === (1))){
var inst_34138 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34140__$1,inst_34138);
} else {
return null;
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____0 = (function (){
var statearr_34142 = [null,null,null,null,null,null,null];
(statearr_34142[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__);

(statearr_34142[(1)] = (1));

return statearr_34142;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____1 = (function (state_34140){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34143){if((e34143 instanceof Object)){
var ex__24071__auto__ = e34143;
var statearr_34144_34146 = state_34140;
(statearr_34144_34146[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34147 = state_34140;
state_34140 = G__34147;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34145 = f__24235__auto__.call(null);
(statearr_34145[(6)] = c__24234__auto__);

return statearr_34145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
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
}catch (e34148){if((e34148 instanceof Object)){
var e = e34148;

return e;
} else {
throw e34148;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__34149){
var map__34150 = p__34149;
var map__34150__$1 = (((((!((map__34150 == null))))?(((((map__34150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34150):map__34150);
var print_length = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__34150__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__34153 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__34154 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__34154;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34155_34159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34156_34160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34157_34161 = true;
var _STAR_print_fn_STAR__temp_val__34158_34162 = ((function (_STAR_print_newline_STAR__orig_val__34155_34159,_STAR_print_fn_STAR__orig_val__34156_34160,_STAR_print_newline_STAR__temp_val__34157_34161,sb__18969__auto__,_STAR_print_length_STAR__orig_val__34153,_STAR_print_length_STAR__temp_val__34154,map__34150,map__34150__$1,print_length,beautify_strings){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__34155_34159,_STAR_print_fn_STAR__orig_val__34156_34160,_STAR_print_newline_STAR__temp_val__34157_34161,sb__18969__auto__,_STAR_print_length_STAR__orig_val__34153,_STAR_print_length_STAR__temp_val__34154,map__34150,map__34150__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34157_34161;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34158_34162;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__17804__auto__ = typeof value === 'string';
if(and__17804__auto__){
return beautify_strings;
} else {
return and__17804__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34156_34160;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34155_34159;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__34153;
}}catch (e34152){if((e34152 instanceof Object)){
var e = e34152;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e34152;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__34163,verbose_QMARK_,current_ns){
var map__34164 = p__34163;
var map__34164__$1 = (((((!((map__34164 == null))))?(((((map__34164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34164):map__34164);
var ns = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34164__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__34166,opts){
var map__34167 = p__34166;
var map__34167__$1 = (((((!((map__34167 == null))))?(((((map__34167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34167):map__34167);
var args = map__34167__$1;
var ns = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__34169){
var map__34170 = p__34169;
var map__34170__$1 = (((((!((map__34170 == null))))?(((((map__34170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34170):map__34170);
var form = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__34172){
var map__34173 = p__34172;
var map__34173__$1 = (((((!((map__34173 == null))))?(((((map__34173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34173):map__34173);
var foo = map__34173__$1;
var value = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__34173__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__34175){
var map__34176 = p__34175;
var map__34176__$1 = (((((!((map__34176 == null))))?(((((map__34176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34176):map__34176);
var args = map__34176__$1;
var file = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__34176__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__34178){
var map__34179 = p__34178;
var map__34179__$1 = (((((!((map__34179 == null))))?(((((map__34179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34179):map__34179);
var source = cljs.core.get.call(null,map__34179__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__34181){
var map__34182 = p__34181;
var map__34182__$1 = (((((!((map__34182 == null))))?(((((map__34182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34182):map__34182);
var static_fns = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__34182__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__34182,map__34182__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__34182,map__34182__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__34184){
var map__34185 = p__34184;
var map__34185__$1 = (((((!((map__34185 == null))))?(((((map__34185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34185):map__34185);
var static_fns = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,map__34185,map__34185__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,map__34185,map__34185__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
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
var G__34187 = cljs.core.conj.call(null,res,ch);
res = G__34187;
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
var _STAR_alias_map_STAR__orig_val__34188 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__34189 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__34190 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__34191 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__34192 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__34193 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__34194 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__34195 = ns;
var _STAR_cljs_ns_STAR__temp_val__34196 = ns;
var _STAR_compiler_STAR__temp_val__34197 = st;
var resolve_symbol_temp_val__34198 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__34199 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34194;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34195;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__34196;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34197;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34198;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34199;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__34193;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__34192;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34191;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__34190;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34189;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__34188;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__34203 = arguments.length;
switch (G__34203) {
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
var _STAR_alias_map_STAR__orig_val__34204 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__34205 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__34206 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__34207 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__34208 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__34209 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__34210 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__34211 = ns;
var _STAR_cljs_ns_STAR__temp_val__34212 = ns;
var _STAR_compiler_STAR__temp_val__34213 = st;
var resolve_symbol_temp_val__34214 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__34215 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__34210;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__34211;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__34212;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__34213;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__34214;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__34215;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__34209;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__34208;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__34207;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__34206;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__34205;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__34204;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__34220 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__34220,(0),null);
var rest_s = cljs.core.nth.call(null,vec__34220,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__34223 = rest_s;
var G__34224 = res;
s__$1 = G__34223;
res = G__34224;
continue;
} else {
var G__34225 = rest_s;
var G__34226 = cljs.core.conj.call(null,res,exp);
s__$1 = G__34225;
res = G__34226;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__34227){
var map__34228 = p__34227;
var map__34228__$1 = (((((!((map__34228 == null))))?(((((map__34228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34228):map__34228);
var result_element = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__17804__auto__ = container;
if(cljs.core.truth_(and__17804__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__17804__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (7))){
var inst_34283 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34289_34310 = state_34287__$1;
(statearr_34289_34310[(2)] = inst_34283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (1))){
var state_34287__$1 = state_34287;
var statearr_34290_34311 = state_34287__$1;
(statearr_34290_34311[(2)] = null);

(statearr_34290_34311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34287,(3),Object,null,(2));
var inst_34238 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34287__$1,(5),inst_34238);
} else {
if((state_val_34288 === (13))){
var inst_34268 = (state_34287[(7)]);
var inst_34260 = (state_34287[(8)]);
var inst_34273 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34274 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_34275 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_34260,inst_34273,inst_34274);
var inst_34253 = inst_34275;
var inst_34254 = inst_34268;
var state_34287__$1 = (function (){var statearr_34291 = state_34287;
(statearr_34291[(9)] = inst_34254);

(statearr_34291[(10)] = inst_34253);

return statearr_34291;
})();
var statearr_34292_34312 = state_34287__$1;
(statearr_34292_34312[(2)] = null);

(statearr_34292_34312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var inst_34259 = (state_34287[(11)]);
var inst_34253 = (state_34287[(10)]);
var inst_34259__$1 = cljs.core.nth.call(null,inst_34253,(0),null);
var inst_34260 = cljs.core.nth.call(null,inst_34253,(1),null);
var inst_34261 = cljs.core.empty_QMARK_.call(null,inst_34259__$1);
var inst_34262 = (!(inst_34261));
var state_34287__$1 = (function (){var statearr_34293 = state_34287;
(statearr_34293[(11)] = inst_34259__$1);

(statearr_34293[(8)] = inst_34260);

return statearr_34293;
})();
if(inst_34262){
var statearr_34294_34313 = state_34287__$1;
(statearr_34294_34313[(1)] = (8));

} else {
var statearr_34295_34314 = state_34287__$1;
(statearr_34295_34314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (3))){
var inst_34230 = (state_34287[(2)]);
var inst_34231 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_34232 = [inst_34230];
var inst_34233 = cljs.core.PersistentHashMap.fromArrays(inst_34231,inst_34232);
var inst_34234 = klipse_clj.lang.clojure.populate_err.call(null,inst_34233,opts);
var state_34287__$1 = state_34287;
var statearr_34296_34315 = state_34287__$1;
(statearr_34296_34315[(2)] = inst_34234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (12))){
var inst_34268 = (state_34287[(7)]);
var inst_34271 = klipse_clj.lang.clojure.populate_err.call(null,inst_34268,opts);
var state_34287__$1 = state_34287;
var statearr_34297_34316 = state_34287__$1;
(statearr_34297_34316[(2)] = inst_34271);

(statearr_34297_34316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (2))){
var inst_34285 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34287__$1,inst_34285);
} else {
if((state_val_34288 === (11))){
var inst_34268 = (state_34287[(7)]);
var inst_34268__$1 = (state_34287[(2)]);
var inst_34269 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_34268__$1);
var state_34287__$1 = (function (){var statearr_34298 = state_34287;
(statearr_34298[(7)] = inst_34268__$1);

return statearr_34298;
})();
if(cljs.core.truth_(inst_34269)){
var statearr_34299_34317 = state_34287__$1;
(statearr_34299_34317[(1)] = (12));

} else {
var statearr_34300_34318 = state_34287__$1;
(statearr_34300_34318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (9))){
var inst_34254 = (state_34287[(9)]);
var state_34287__$1 = state_34287;
var statearr_34301_34319 = state_34287__$1;
(statearr_34301_34319[(2)] = inst_34254);

(statearr_34301_34319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (5))){
var inst_34240 = (state_34287[(2)]);
var inst_34248 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34249 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_34250 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_34248,inst_34249);
var inst_34251 = cljs.core.nth.call(null,inst_34250,(0),null);
var inst_34252 = cljs.core.nth.call(null,inst_34250,(1),null);
var inst_34253 = inst_34250;
var inst_34254 = null;
var state_34287__$1 = (function (){var statearr_34302 = state_34287;
(statearr_34302[(9)] = inst_34254);

(statearr_34302[(12)] = inst_34240);

(statearr_34302[(10)] = inst_34253);

(statearr_34302[(13)] = inst_34251);

(statearr_34302[(14)] = inst_34252);

return statearr_34302;
})();
var statearr_34303_34320 = state_34287__$1;
(statearr_34303_34320[(2)] = null);

(statearr_34303_34320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (14))){
var inst_34278 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34304_34321 = state_34287__$1;
(statearr_34304_34321[(2)] = inst_34278);

(statearr_34304_34321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (10))){
var inst_34281 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34305_34322 = state_34287__$1;
(statearr_34305_34322[(2)] = inst_34281);

(statearr_34305_34322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (8))){
var inst_34259 = (state_34287[(11)]);
var inst_34264 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34265 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_34264,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_34266 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34259,inst_34265);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34287__$1,(11),inst_34266);
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
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____0 = (function (){
var statearr_34306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34306[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__);

(statearr_34306[(1)] = (1));

return statearr_34306;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____1 = (function (state_34287){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34307){if((e34307 instanceof Object)){
var ex__24071__auto__ = e34307;
var statearr_34308_34323 = state_34287;
(statearr_34308_34323[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34324 = state_34287;
state_34287 = G__34324;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34309 = f__24235__auto__.call(null);
(statearr_34309[(6)] = c__24234__auto__);

return statearr_34309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34382){
var state_val_34383 = (state_34382[(1)]);
if((state_val_34383 === (7))){
var inst_34350 = (state_34382[(7)]);
var inst_34355 = klipse_clj.repl.create_state_compile.call(null);
var inst_34356 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_34355,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_34357 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_34350,inst_34356);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34382__$1,(10),inst_34357);
} else {
if((state_val_34383 === (1))){
var state_34382__$1 = state_34382;
var statearr_34384_34405 = state_34382__$1;
(statearr_34384_34405[(2)] = null);

(statearr_34384_34405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34382,(3),Object,null,(2));
var inst_34339 = klipse_clj.repl.create_state_compile.call(null);
var inst_34340 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_34341 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_34339,inst_34340);
var inst_34342 = cljs.core.nth.call(null,inst_34341,(0),null);
var inst_34343 = cljs.core.nth.call(null,inst_34341,(1),null);
var inst_34344 = inst_34341;
var inst_34345 = "";
var state_34382__$1 = (function (){var statearr_34385 = state_34382;
(statearr_34385[(8)] = inst_34345);

(statearr_34385[(9)] = inst_34344);

(statearr_34385[(10)] = inst_34342);

(statearr_34385[(11)] = inst_34343);

return statearr_34385;
})();
var statearr_34386_34406 = state_34382__$1;
(statearr_34386_34406[(2)] = null);

(statearr_34386_34406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (13))){
var inst_34370 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34387_34407 = state_34382__$1;
(statearr_34387_34407[(2)] = inst_34370);

(statearr_34387_34407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (6))){
var inst_34378 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34388_34408 = state_34382__$1;
(statearr_34388_34408[(2)] = inst_34378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (3))){
var inst_34325 = (state_34382[(2)]);
var inst_34326 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_34327 = [inst_34325];
var inst_34328 = cljs.core.PersistentHashMap.fromArrays(inst_34326,inst_34327);
var state_34382__$1 = state_34382;
var statearr_34389_34409 = state_34382__$1;
(statearr_34389_34409[(2)] = inst_34328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (12))){
var inst_34345 = (state_34382[(8)]);
var inst_34359 = (state_34382[(12)]);
var inst_34351 = (state_34382[(13)]);
var inst_34363 = klipse_clj.repl.create_state_compile.call(null);
var inst_34364 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_34365 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_34351,inst_34363,inst_34364);
var inst_34366 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_34359);
var inst_34367 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34345),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34366)].join('');
var inst_34344 = inst_34365;
var inst_34345__$1 = inst_34367;
var state_34382__$1 = (function (){var statearr_34390 = state_34382;
(statearr_34390[(8)] = inst_34345__$1);

(statearr_34390[(9)] = inst_34344);

return statearr_34390;
})();
var statearr_34391_34410 = state_34382__$1;
(statearr_34391_34410[(2)] = null);

(statearr_34391_34410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (2))){
var inst_34380 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34382__$1,inst_34380);
} else {
if((state_val_34383 === (11))){
var inst_34359 = (state_34382[(12)]);
var state_34382__$1 = state_34382;
var statearr_34392_34411 = state_34382__$1;
(statearr_34392_34411[(2)] = inst_34359);

(statearr_34392_34411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (9))){
var inst_34376 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34393_34412 = state_34382__$1;
(statearr_34393_34412[(2)] = inst_34376);

(statearr_34393_34412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (5))){
var inst_34344 = (state_34382[(9)]);
var inst_34350 = (state_34382[(7)]);
var inst_34350__$1 = cljs.core.nth.call(null,inst_34344,(0),null);
var inst_34351 = cljs.core.nth.call(null,inst_34344,(1),null);
var inst_34352 = cljs.core.empty_QMARK_.call(null,inst_34350__$1);
var inst_34353 = (!(inst_34352));
var state_34382__$1 = (function (){var statearr_34394 = state_34382;
(statearr_34394[(13)] = inst_34351);

(statearr_34394[(7)] = inst_34350__$1);

return statearr_34394;
})();
if(inst_34353){
var statearr_34395_34413 = state_34382__$1;
(statearr_34395_34413[(1)] = (7));

} else {
var statearr_34396_34414 = state_34382__$1;
(statearr_34396_34414[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (10))){
var inst_34359 = (state_34382[(12)]);
var inst_34359__$1 = (state_34382[(2)]);
var inst_34360 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_34359__$1);
var state_34382__$1 = (function (){var statearr_34397 = state_34382;
(statearr_34397[(12)] = inst_34359__$1);

return statearr_34397;
})();
if(cljs.core.truth_(inst_34360)){
var statearr_34398_34415 = state_34382__$1;
(statearr_34398_34415[(1)] = (11));

} else {
var statearr_34399_34416 = state_34382__$1;
(statearr_34399_34416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (8))){
var inst_34345 = (state_34382[(8)]);
var inst_34372 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_34373 = [inst_34345];
var inst_34374 = cljs.core.PersistentHashMap.fromArrays(inst_34372,inst_34373);
var state_34382__$1 = state_34382;
var statearr_34400_34417 = state_34382__$1;
(statearr_34400_34417[(2)] = inst_34374);

(statearr_34400_34417[(1)] = (9));


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
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____0 = (function (){
var statearr_34401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34401[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__);

(statearr_34401[(1)] = (1));

return statearr_34401;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____1 = (function (state_34382){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34402){if((e34402 instanceof Object)){
var ex__24071__auto__ = e34402;
var statearr_34403_34418 = state_34382;
(statearr_34403_34418[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34419 = state_34382;
state_34382 = G__34419;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34404 = f__24235__auto__.call(null);
(statearr_34404[(6)] = c__24234__auto__);

return statearr_34404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34425){
var state_val_34426 = (state_34425[(1)]);
if((state_val_34426 === (1))){
var inst_34420 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34425__$1,(2),inst_34420);
} else {
if((state_val_34426 === (2))){
var inst_34422 = (state_34425[(2)]);
var inst_34423 = klipse_clj.lang.clojure.result_as_str.call(null,inst_34422,opts);
var state_34425__$1 = state_34425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34425__$1,inst_34423);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____0 = (function (){
var statearr_34427 = [null,null,null,null,null,null,null];
(statearr_34427[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__);

(statearr_34427[(1)] = (1));

return statearr_34427;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____1 = (function (state_34425){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object)){
var ex__24071__auto__ = e34428;
var statearr_34429_34431 = state_34425;
(statearr_34429_34431[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_34425;
state_34425 = G__34432;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__ = function(state_34425){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____1.call(this,state_34425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34430 = f__24235__auto__.call(null);
(statearr_34430[(6)] = c__24234__auto__);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__34434 = arguments.length;
switch (G__34434) {
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
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34440){
var state_val_34441 = (state_34440[(1)]);
if((state_val_34441 === (1))){
var inst_34435 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34440__$1,(2),inst_34435);
} else {
if((state_val_34441 === (2))){
var inst_34437 = (state_34440[(2)]);
var inst_34438 = klipse_clj.lang.clojure.read_result.call(null,inst_34437);
var state_34440__$1 = state_34440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34440__$1,inst_34438);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$state_machine__24068__auto____0 = (function (){
var statearr_34442 = [null,null,null,null,null,null,null];
(statearr_34442[(0)] = klipse_clj$lang$clojure$state_machine__24068__auto__);

(statearr_34442[(1)] = (1));

return statearr_34442;
});
var klipse_clj$lang$clojure$state_machine__24068__auto____1 = (function (state_34440){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34443){if((e34443 instanceof Object)){
var ex__24071__auto__ = e34443;
var statearr_34444_34447 = state_34440;
(statearr_34444_34447[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_34440;
state_34440 = G__34448;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24068__auto__ = function(state_34440){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24068__auto____1.call(this,state_34440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24068__auto____0;
klipse_clj$lang$clojure$state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24068__auto____1;
return klipse_clj$lang$clojure$state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34445 = f__24235__auto__.call(null);
(statearr_34445[(6)] = c__24234__auto__);

return statearr_34445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34455){
var state_val_34456 = (state_34455[(1)]);
if((state_val_34456 === (1))){
var inst_34449 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_34455__$1 = state_34455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34455__$1,(2),inst_34449);
} else {
if((state_val_34456 === (2))){
var inst_34451 = (state_34455[(2)]);
var inst_34452 = cljs.core.clj__GT_js.call(null,inst_34451);
var inst_34453 = cb.call(null,inst_34452);
var state_34455__$1 = state_34455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34455__$1,inst_34453);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____0 = (function (){
var statearr_34457 = [null,null,null,null,null,null,null];
(statearr_34457[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__);

(statearr_34457[(1)] = (1));

return statearr_34457;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____1 = (function (state_34455){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34458){if((e34458 instanceof Object)){
var ex__24071__auto__ = e34458;
var statearr_34459_34461 = state_34455;
(statearr_34459_34461[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_34455;
state_34455 = G__34462;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__ = function(state_34455){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____1.call(this,state_34455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34460 = f__24235__auto__.call(null);
(statearr_34460[(6)] = c__24234__auto__);

return statearr_34460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__34464 = arguments.length;
switch (G__34464) {
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
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34470){
var state_val_34471 = (state_34470[(1)]);
if((state_val_34471 === (1))){
var inst_34465 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_34470__$1 = state_34470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34470__$1,(2),inst_34465);
} else {
if((state_val_34471 === (2))){
var inst_34467 = (state_34470[(2)]);
var inst_34468 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_34467);
var state_34470__$1 = state_34470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34470__$1,inst_34468);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$state_machine__24068__auto____0 = (function (){
var statearr_34472 = [null,null,null,null,null,null,null];
(statearr_34472[(0)] = klipse_clj$lang$clojure$state_machine__24068__auto__);

(statearr_34472[(1)] = (1));

return statearr_34472;
});
var klipse_clj$lang$clojure$state_machine__24068__auto____1 = (function (state_34470){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34473){if((e34473 instanceof Object)){
var ex__24071__auto__ = e34473;
var statearr_34474_34477 = state_34470;
(statearr_34474_34477[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34478 = state_34470;
state_34470 = G__34478;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24068__auto__ = function(state_34470){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24068__auto____1.call(this,state_34470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24068__auto____0;
klipse_clj$lang$clojure$state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24068__auto____1;
return klipse_clj$lang$clojure$state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34475 = f__24235__auto__.call(null);
(statearr_34475[(6)] = c__24234__auto__);

return statearr_34475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var inst_34479 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,(2),inst_34479);
} else {
if((state_val_34485 === (2))){
var inst_34481 = (state_34484[(2)]);
var inst_34482 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_34481);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34484__$1,inst_34482);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____0 = (function (){
var statearr_34486 = [null,null,null,null,null,null,null];
(statearr_34486[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__);

(statearr_34486[(1)] = (1));

return statearr_34486;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____1 = (function (state_34484){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34487){if((e34487 instanceof Object)){
var ex__24071__auto__ = e34487;
var statearr_34488_34490 = state_34484;
(statearr_34488_34490[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_34484;
state_34484 = G__34491;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34489 = f__24235__auto__.call(null);
(statearr_34489[(6)] = c__24234__auto__);

return statearr_34489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__24234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto__){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto__){
return (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (1))){
var inst_34492 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34498__$1,(2),inst_34492);
} else {
if((state_val_34499 === (2))){
var inst_34494 = (state_34498[(2)]);
var inst_34495 = cljs.core.second.call(null,inst_34494);
var inst_34496 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34495);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34498__$1,inst_34496);
} else {
return null;
}
}
});})(c__24234__auto__))
;
return ((function (switch__24067__auto__,c__24234__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____1 = (function (state_34498){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__24071__auto__ = e34501;
var statearr_34502_34504 = state_34498;
(statearr_34502_34504[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34505 = state_34498;
state_34498 = G__34505;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto__))
})();
var state__24236__auto__ = (function (){var statearr_34503 = f__24235__auto__.call(null);
(statearr_34503[(6)] = c__24234__auto__);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto__))
);

return c__24234__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__34507){
var map__34508 = p__34507;
var map__34508__$1 = (((((!((map__34508 == null))))?(((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508):map__34508);
var opts = map__34508__$1;
var container_id = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__24234__auto___34560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__24235__auto__ = (function (){var switch__24067__auto__ = ((function (c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_34542){
var state_val_34543 = (state_34542[(1)]);
if((state_val_34543 === (7))){
var inst_34518 = (state_34542[(2)]);
var inst_34523 = (function (){var _STAR_print_newline_STAR__orig_val__34519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34521 = true;
return ((function (_STAR_print_newline_STAR__orig_val__34519,_STAR_print_fn_STAR__orig_val__34520,_STAR_print_newline_STAR__temp_val__34521,inst_34518,state_val_34543,c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__34506_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__34506_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__34519,_STAR_print_fn_STAR__orig_val__34520,_STAR_print_newline_STAR__temp_val__34521,inst_34518,state_val_34543,c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_34524 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_34525 = cljs.core._STAR_print_fn_STAR_ = inst_34523;
var state_34542__$1 = (function (){var statearr_34544 = state_34542;
(statearr_34544[(7)] = inst_34524);

(statearr_34544[(8)] = inst_34525);

(statearr_34544[(9)] = inst_34518);

return statearr_34544;
})();
var statearr_34545_34561 = state_34542__$1;
(statearr_34545_34561[(2)] = null);

(statearr_34545_34561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (1))){
var inst_34510 = clojure.string.blank_QMARK_.call(null,exp);
var state_34542__$1 = state_34542;
if(inst_34510){
var statearr_34546_34562 = state_34542__$1;
(statearr_34546_34562[(1)] = (2));

} else {
var statearr_34547_34563 = state_34542__$1;
(statearr_34547_34563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (4))){
var inst_34540 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34542__$1,inst_34540);
} else {
if((state_val_34543 === (6))){
var state_34542__$1 = state_34542;
var statearr_34548_34564 = state_34542__$1;
(statearr_34548_34564[(2)] = null);

(statearr_34548_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (3))){
var state_34542__$1 = state_34542;
if(cljs.core.truth_(setup_container_fn)){
var statearr_34549_34565 = state_34542__$1;
(statearr_34549_34565[(1)] = (5));

} else {
var statearr_34550_34566 = state_34542__$1;
(statearr_34550_34566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (2))){
var inst_34512 = cljs.core.async.put_BANG_.call(null,c,"");
var state_34542__$1 = state_34542;
var statearr_34551_34567 = state_34542__$1;
(statearr_34551_34567[(2)] = inst_34512);

(statearr_34551_34567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (11))){
var inst_34534 = (state_34542[(2)]);
var inst_34535 = cljs.core.second.call(null,inst_34534);
var inst_34536 = cljs.core.async.put_BANG_.call(null,c,inst_34535);
var state_34542__$1 = state_34542;
var statearr_34552_34568 = state_34542__$1;
(statearr_34552_34568[(2)] = inst_34536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (9))){
var inst_34526 = (state_34542[(2)]);
var inst_34527 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_34528 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_34542__$1 = (function (){var statearr_34553 = state_34542;
(statearr_34553[(10)] = inst_34527);

(statearr_34553[(11)] = inst_34526);

(statearr_34553[(12)] = inst_34528);

return statearr_34553;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (5))){
var inst_34515 = setup_container_fn.call(null,container_id);
var state_34542__$1 = state_34542;
var statearr_34554_34569 = state_34542__$1;
(statearr_34554_34569[(2)] = inst_34515);

(statearr_34554_34569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34543 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34542,null,null,(9),(8));
var inst_34532 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_34542__$1 = state_34542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34542__$1,(11),inst_34532);
} else {
if((state_val_34543 === (8))){
var inst_34538 = (state_34542[(2)]);
var state_34542__$1 = state_34542;
var statearr_34555_34570 = state_34542__$1;
(statearr_34555_34570[(2)] = inst_34538);

(statearr_34555_34570[(1)] = (4));


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
});})(c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__24067__auto__,c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____0 = (function (){
var statearr_34556 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34556[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__);

(statearr_34556[(1)] = (1));

return statearr_34556;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____1 = (function (state_34542){
while(true){
var ret_value__24069__auto__ = (function (){try{while(true){
var result__24070__auto__ = switch__24067__auto__.call(null,state_34542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24070__auto__;
}
break;
}
}catch (e34557){if((e34557 instanceof Object)){
var ex__24071__auto__ = e34557;
var statearr_34558_34571 = state_34542;
(statearr_34558_34571[(5)] = ex__24071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34572 = state_34542;
state_34542 = G__34572;
continue;
} else {
return ret_value__24069__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__ = function(state_34542){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____1.call(this,state_34542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24068__auto__;
})()
;})(switch__24067__auto__,c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__24236__auto__ = (function (){var statearr_34559 = f__24235__auto__.call(null);
(statearr_34559[(6)] = c__24234__auto___34560);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24236__auto__);
});})(c__24234__auto___34560,c,map__34508,map__34508__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
