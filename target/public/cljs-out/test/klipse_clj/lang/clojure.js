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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_22969){
var state_val_22970 = (state_22969[(1)]);
if((state_val_22970 === (7))){
var inst_22965 = (state_22969[(2)]);
var state_22969__$1 = state_22969;
var statearr_22971_22997 = state_22969__$1;
(statearr_22971_22997[(2)] = inst_22965);

(statearr_22971_22997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (1))){
var inst_22908 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22969__$1,(2),inst_22908);
} else {
if((state_val_22970 === (4))){
var inst_22967 = (state_22969[(2)]);
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22969__$1,inst_22967);
} else {
if((state_val_22970 === (15))){
var inst_22939 = (state_22969[(7)]);
var inst_22956 = (state_22969[(2)]);
var inst_22957 = cljs.core.next.call(null,inst_22939);
var inst_22919 = inst_22957;
var inst_22920 = null;
var inst_22921 = (0);
var inst_22922 = (0);
var state_22969__$1 = (function (){var statearr_22972 = state_22969;
(statearr_22972[(8)] = inst_22919);

(statearr_22972[(9)] = inst_22921);

(statearr_22972[(10)] = inst_22956);

(statearr_22972[(11)] = inst_22920);

(statearr_22972[(12)] = inst_22922);

return statearr_22972;
})();
var statearr_22973_22998 = state_22969__$1;
(statearr_22973_22998[(2)] = null);

(statearr_22973_22998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (13))){
var inst_22939 = (state_22969[(7)]);
var inst_22948 = cljs.core.first.call(null,inst_22939);
var inst_22949 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_22950 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_22951 = [inst_22950,klipse_clj.repl.current_ns_eval];
var inst_22952 = cljs.core.PersistentHashMap.fromArrays(inst_22949,inst_22951);
var inst_22953 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_22948,inst_22952);
var inst_22954 = cljs.core.first.call(null,inst_22953);
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22969__$1,(15),inst_22954);
} else {
if((state_val_22970 === (6))){
var inst_22939 = (state_22969[(7)]);
var inst_22919 = (state_22969[(8)]);
var inst_22939__$1 = cljs.core.seq.call(null,inst_22919);
var state_22969__$1 = (function (){var statearr_22974 = state_22969;
(statearr_22974[(7)] = inst_22939__$1);

return statearr_22974;
})();
if(inst_22939__$1){
var statearr_22975_22999 = state_22969__$1;
(statearr_22975_22999[(1)] = (9));

} else {
var statearr_22976_23000 = state_22969__$1;
(statearr_22976_23000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (3))){
var inst_22921 = (state_22969[(9)]);
var inst_22922 = (state_22969[(12)]);
var inst_22924 = (inst_22922 < inst_22921);
var inst_22925 = inst_22924;
var state_22969__$1 = state_22969;
if(cljs.core.truth_(inst_22925)){
var statearr_22977_23001 = state_22969__$1;
(statearr_22977_23001[(1)] = (5));

} else {
var statearr_22978_23002 = state_22969__$1;
(statearr_22978_23002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (12))){
var inst_22939 = (state_22969[(7)]);
var inst_22943 = cljs.core.chunk_first.call(null,inst_22939);
var inst_22944 = cljs.core.chunk_rest.call(null,inst_22939);
var inst_22945 = cljs.core.count.call(null,inst_22943);
var inst_22919 = inst_22944;
var inst_22920 = inst_22943;
var inst_22921 = inst_22945;
var inst_22922 = (0);
var state_22969__$1 = (function (){var statearr_22979 = state_22969;
(statearr_22979[(8)] = inst_22919);

(statearr_22979[(9)] = inst_22921);

(statearr_22979[(11)] = inst_22920);

(statearr_22979[(12)] = inst_22922);

return statearr_22979;
})();
var statearr_22980_23003 = state_22969__$1;
(statearr_22980_23003[(2)] = null);

(statearr_22980_23003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (2))){
var inst_22910 = (state_22969[(2)]);
var inst_22915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22916 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_22917 = (new cljs.core.PersistentVector(null,2,(5),inst_22915,inst_22916,null));
var inst_22918 = cljs.core.seq.call(null,inst_22917);
var inst_22919 = inst_22918;
var inst_22920 = null;
var inst_22921 = (0);
var inst_22922 = (0);
var state_22969__$1 = (function (){var statearr_22981 = state_22969;
(statearr_22981[(8)] = inst_22919);

(statearr_22981[(9)] = inst_22921);

(statearr_22981[(13)] = inst_22910);

(statearr_22981[(11)] = inst_22920);

(statearr_22981[(12)] = inst_22922);

return statearr_22981;
})();
var statearr_22982_23004 = state_22969__$1;
(statearr_22982_23004[(2)] = null);

(statearr_22982_23004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (11))){
var inst_22963 = (state_22969[(2)]);
var state_22969__$1 = state_22969;
var statearr_22983_23005 = state_22969__$1;
(statearr_22983_23005[(2)] = inst_22963);

(statearr_22983_23005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (9))){
var inst_22939 = (state_22969[(7)]);
var inst_22941 = cljs.core.chunked_seq_QMARK_.call(null,inst_22939);
var state_22969__$1 = state_22969;
if(inst_22941){
var statearr_22984_23006 = state_22969__$1;
(statearr_22984_23006[(1)] = (12));

} else {
var statearr_22985_23007 = state_22969__$1;
(statearr_22985_23007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (5))){
var inst_22920 = (state_22969[(11)]);
var inst_22922 = (state_22969[(12)]);
var inst_22927 = cljs.core._nth.call(null,inst_22920,inst_22922);
var inst_22928 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_22929 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_22930 = [inst_22929,klipse_clj.repl.current_ns_eval];
var inst_22931 = cljs.core.PersistentHashMap.fromArrays(inst_22928,inst_22930);
var inst_22932 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_22927,inst_22931);
var inst_22933 = cljs.core.first.call(null,inst_22932);
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22969__$1,(8),inst_22933);
} else {
if((state_val_22970 === (14))){
var inst_22960 = (state_22969[(2)]);
var state_22969__$1 = state_22969;
var statearr_22989_23008 = state_22969__$1;
(statearr_22989_23008[(2)] = inst_22960);

(statearr_22989_23008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (10))){
var state_22969__$1 = state_22969;
var statearr_22990_23009 = state_22969__$1;
(statearr_22990_23009[(2)] = null);

(statearr_22990_23009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22970 === (8))){
var inst_22919 = (state_22969[(8)]);
var inst_22921 = (state_22969[(9)]);
var inst_22920 = (state_22969[(11)]);
var inst_22922 = (state_22969[(12)]);
var inst_22935 = (state_22969[(2)]);
var inst_22936 = (inst_22922 + (1));
var tmp22986 = inst_22919;
var tmp22987 = inst_22921;
var tmp22988 = inst_22920;
var inst_22919__$1 = tmp22986;
var inst_22920__$1 = tmp22988;
var inst_22921__$1 = tmp22987;
var inst_22922__$1 = inst_22936;
var state_22969__$1 = (function (){var statearr_22991 = state_22969;
(statearr_22991[(8)] = inst_22919__$1);

(statearr_22991[(14)] = inst_22935);

(statearr_22991[(9)] = inst_22921__$1);

(statearr_22991[(11)] = inst_22920__$1);

(statearr_22991[(12)] = inst_22922__$1);

return statearr_22991;
})();
var statearr_22992_23010 = state_22969__$1;
(statearr_22992_23010[(2)] = null);

(statearr_22992_23010[(1)] = (3));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____0 = (function (){
var statearr_22993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22993[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__);

(statearr_22993[(1)] = (1));

return statearr_22993;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____1 = (function (state_22969){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_22969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e22994){if((e22994 instanceof Object)){
var ex__15543__auto__ = e22994;
var statearr_22995_23011 = state_22969;
(statearr_22995_23011[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23012 = state_22969;
state_22969 = G__23012;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__ = function(state_22969){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____1.call(this,state_22969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_22996 = f__15635__auto__.call(null);
(statearr_22996[(6)] = c__15634__auto__);

return statearr_22996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23015){
var state_val_23016 = (state_23015[(1)]);
if((state_val_23016 === (1))){
var inst_23013 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23015__$1,inst_23013);
} else {
return null;
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____0 = (function (){
var statearr_23017 = [null,null,null,null,null,null,null];
(statearr_23017[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__);

(statearr_23017[(1)] = (1));

return statearr_23017;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____1 = (function (state_23015){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23018){if((e23018 instanceof Object)){
var ex__15543__auto__ = e23018;
var statearr_23019_23021 = state_23015;
(statearr_23019_23021[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23022 = state_23015;
state_23015 = G__23022;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__ = function(state_23015){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____1.call(this,state_23015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23020 = f__15635__auto__.call(null);
(statearr_23020[(6)] = c__15634__auto__);

return statearr_23020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
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
}catch (e23023){if((e23023 instanceof Object)){
var e = e23023;

return e;
} else {
throw e23023;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__23024){
var map__23025 = p__23024;
var map__23025__$1 = (((((!((map__23025 == null))))?(((((map__23025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23025):map__23025);
var print_length = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__23028 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__23029 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__23029;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23030_23034 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23031_23035 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23032_23036 = true;
var _STAR_print_fn_STAR__temp_val__23033_23037 = ((function (_STAR_print_newline_STAR__orig_val__23030_23034,_STAR_print_fn_STAR__orig_val__23031_23035,_STAR_print_newline_STAR__temp_val__23032_23036,sb__4661__auto__,_STAR_print_length_STAR__orig_val__23028,_STAR_print_length_STAR__temp_val__23029,map__23025,map__23025__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__23030_23034,_STAR_print_fn_STAR__orig_val__23031_23035,_STAR_print_newline_STAR__temp_val__23032_23036,sb__4661__auto__,_STAR_print_length_STAR__orig_val__23028,_STAR_print_length_STAR__temp_val__23029,map__23025,map__23025__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23032_23036;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23033_23037;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23031_23035;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23030_23034;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__23028;
}}catch (e23027){if((e23027 instanceof Object)){
var e = e23027;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e23027;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__23038,verbose_QMARK_,current_ns){
var map__23039 = p__23038;
var map__23039__$1 = (((((!((map__23039 == null))))?(((((map__23039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23039):map__23039);
var ns = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var _value = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__23039__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__23041,opts){
var map__23042 = p__23041;
var map__23042__$1 = (((((!((map__23042 == null))))?(((((map__23042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23042):map__23042);
var args = map__23042__$1;
var _ns = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"_ns","_ns",1411120581));
var _form = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__23042__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__23044,opts){
var map__23045 = p__23044;
var map__23045__$1 = (((((!((map__23045 == null))))?(((((map__23045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23045):map__23045);
var args = map__23045__$1;
var ns = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var _error = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"_error","_error",-332213735));
var _value = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var vec__23047 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__23047,(0),null);
var val = cljs.core.nth.call(null,vec__23047,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__23050){
var map__23051 = p__23050;
var map__23051__$1 = (((((!((map__23051 == null))))?(((((map__23051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23051):map__23051);
var _form = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__23051__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__23053){
var map__23054 = p__23053;
var map__23054__$1 = (((((!((map__23054 == null))))?(((((map__23054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23054):map__23054);
var foo = map__23054__$1;
var value = cljs.core.get.call(null,map__23054__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__23054__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__23056){
var map__23057 = p__23056;
var map__23057__$1 = (((((!((map__23057 == null))))?(((((map__23057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23057):map__23057);
var args = map__23057__$1;
var _file = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_file","_file",-267733516));
var _source = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));
var _lang = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_lang","_lang",-796607044));
var _name = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var _path = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_path","_path",157802149));
var _cache = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"_cache","_cache",442382032));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__23059){
var map__23060 = p__23059;
var map__23060__$1 = (((((!((map__23060 == null))))?(((((map__23060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23060):map__23060);
var source = cljs.core.get.call(null,map__23060__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__23062){
var map__23063 = p__23062;
var map__23063__$1 = (((((!((map__23063 == null))))?(((((map__23063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23063):map__23063);
var static_fns = cljs.core.get.call(null,map__23063__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__23063__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__23063__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__23063__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__23063__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,map__23063,map__23063__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,map__23063,map__23063__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
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
var c__15634__auto___23096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___23096,d){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___23096,d){
return (function (state_23081){
var state_val_23082 = (state_23081[(1)]);
if((state_val_23082 === (1))){
var inst_23065 = cljs.core.PersistentVector.EMPTY;
var inst_23066 = inst_23065;
var state_23081__$1 = (function (){var statearr_23083 = state_23081;
(statearr_23083[(7)] = inst_23066);

return statearr_23083;
})();
var statearr_23084_23097 = state_23081__$1;
(statearr_23084_23097[(2)] = null);

(statearr_23084_23097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (2))){
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23081__$1,(4),c);
} else {
if((state_val_23082 === (3))){
var inst_23079 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23081__$1,inst_23079);
} else {
if((state_val_23082 === (4))){
var inst_23069 = (state_23081[(8)]);
var inst_23069__$1 = (state_23081[(2)]);
var inst_23070 = (inst_23069__$1 == null);
var state_23081__$1 = (function (){var statearr_23085 = state_23081;
(statearr_23085[(8)] = inst_23069__$1);

return statearr_23085;
})();
if(cljs.core.truth_(inst_23070)){
var statearr_23086_23098 = state_23081__$1;
(statearr_23086_23098[(1)] = (5));

} else {
var statearr_23087_23099 = state_23081__$1;
(statearr_23087_23099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (5))){
var inst_23066 = (state_23081[(7)]);
var inst_23072 = cljs.core.async.put_BANG_.call(null,d,inst_23066);
var state_23081__$1 = state_23081;
var statearr_23088_23100 = state_23081__$1;
(statearr_23088_23100[(2)] = inst_23072);

(statearr_23088_23100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (6))){
var inst_23069 = (state_23081[(8)]);
var inst_23066 = (state_23081[(7)]);
var inst_23074 = cljs.core.conj.call(null,inst_23066,inst_23069);
var inst_23066__$1 = inst_23074;
var state_23081__$1 = (function (){var statearr_23089 = state_23081;
(statearr_23089[(7)] = inst_23066__$1);

return statearr_23089;
})();
var statearr_23090_23101 = state_23081__$1;
(statearr_23090_23101[(2)] = null);

(statearr_23090_23101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (7))){
var inst_23077 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23091_23102 = state_23081__$1;
(statearr_23091_23102[(2)] = inst_23077);

(statearr_23091_23102[(1)] = (3));


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
});})(c__15634__auto___23096,d))
;
return ((function (switch__15539__auto__,c__15634__auto___23096,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____0 = (function (){
var statearr_23092 = [null,null,null,null,null,null,null,null,null];
(statearr_23092[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__);

(statearr_23092[(1)] = (1));

return statearr_23092;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____1 = (function (state_23081){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23093){if((e23093 instanceof Object)){
var ex__15543__auto__ = e23093;
var statearr_23094_23103 = state_23081;
(statearr_23094_23103[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23104 = state_23081;
state_23081 = G__23104;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__ = function(state_23081){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____1.call(this,state_23081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___23096,d))
})();
var state__15636__auto__ = (function (){var statearr_23095 = f__15635__auto__.call(null);
(statearr_23095[(6)] = c__15634__auto___23096);

return statearr_23095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___23096,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__23105){
var map__23106 = p__23105;
var map__23106__$1 = (((((!((map__23106 == null))))?(((((map__23106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23106):map__23106);
var static_fns = cljs.core.get.call(null,map__23106__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__23106__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__23106__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__23106__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__23106__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__23108 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__23109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__23109;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (state_23118){
var state_val_23119 = (state_23118[(1)]);
if((state_val_23119 === (1))){
var inst_23110 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_23118__$1 = state_23118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23118__$1,(2),inst_23110);
} else {
if((state_val_23119 === (2))){
var inst_23112 = (state_23118[(2)]);
var inst_23113 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_23114 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_23115 = clojure.string.join.call(null,"",inst_23112);
var inst_23116 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_23115);
var state_23118__$1 = (function (){var statearr_23120 = state_23118;
(statearr_23120[(7)] = inst_23113);

(statearr_23120[(8)] = inst_23114);

return statearr_23120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23118__$1,inst_23116);
} else {
return null;
}
}
});})(c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
;
return ((function (switch__15539__auto__,c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____0 = (function (){
var statearr_23121 = [null,null,null,null,null,null,null,null,null];
(statearr_23121[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__);

(statearr_23121[(1)] = (1));

return statearr_23121;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____1 = (function (state_23118){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23122){if((e23122 instanceof Object)){
var ex__15543__auto__ = e23122;
var statearr_23123_23125 = state_23118;
(statearr_23123_23125[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23126 = state_23118;
state_23118 = G__23126;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__ = function(state_23118){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____1.call(this,state_23118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
})();
var state__15636__auto__ = (function (){var statearr_23124 = f__15635__auto__.call(null);
(statearr_23124[(6)] = c__15634__auto__);

return statearr_23124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return c__15634__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__23108,_STAR_cljs_warning_handlers_STAR__temp_val__23109,res_chan,warnings_chan,agg_warnings_chan,map__23106,map__23106__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__23108;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__23127 = cljs.core.conj.call(null,res,ch);
res = G__23127;
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
var _STAR_alias_map_STAR__orig_val__23128 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__23129 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23130 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__23131 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__23132 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__23133 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__23134 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__23135 = ns;
var _STAR_cljs_ns_STAR__temp_val__23136 = ns;
var _STAR_compiler_STAR__temp_val__23137 = st;
var resolve_symbol_temp_val__23138 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__23139 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23134;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23135;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23136;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23137;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23138;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23139;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23133;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23132;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23131;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23130;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23129;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23128;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__23143 = arguments.length;
switch (G__23143) {
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
var _STAR_alias_map_STAR__orig_val__23144 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__23145 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23146 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__23147 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__23148 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__23149 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__23150 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__23151 = ns;
var _STAR_cljs_ns_STAR__temp_val__23152 = ns;
var _STAR_compiler_STAR__temp_val__23153 = st;
var resolve_symbol_temp_val__23154 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__23155 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23150;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23151;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23152;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23153;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23154;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23155;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23149;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23148;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23147;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23146;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23145;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23144;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__23160 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__23160,(0),null);
var rest_s = cljs.core.nth.call(null,vec__23160,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__23163 = rest_s;
var G__23164 = res;
s__$1 = G__23163;
res = G__23164;
continue;
} else {
var G__23165 = rest_s;
var G__23166 = cljs.core.conj.call(null,res,exp);
s__$1 = G__23165;
res = G__23166;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__23167){
var map__23168 = p__23167;
var map__23168__$1 = (((((!((map__23168 == null))))?(((((map__23168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23168):map__23168);
var result_element = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15634__auto___23272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___23272,res_chan,warnings_chan){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___23272,res_chan,warnings_chan){
return (function (state_23244){
var state_val_23245 = (state_23244[(1)]);
if((state_val_23245 === (7))){
var inst_23240 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23246_23273 = state_23244__$1;
(statearr_23246_23273[(2)] = inst_23240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (1))){
var state_23244__$1 = state_23244;
var statearr_23247_23274 = state_23244__$1;
(statearr_23247_23274[(2)] = null);

(statearr_23247_23274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23244,(3),Object,null,(2));
var inst_23183 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(5),inst_23183);
} else {
if((state_val_23245 === (15))){
var inst_23200 = (state_23244[(7)]);
var inst_23227 = (state_23244[(8)]);
var inst_23218 = (state_23244[(9)]);
var inst_23229 = (state_23244[(2)]);
var inst_23230 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23229)].join('');
var inst_23198 = inst_23227;
var inst_23199 = inst_23218;
var inst_23200__$1 = inst_23230;
var state_23244__$1 = (function (){var statearr_23248 = state_23244;
(statearr_23248[(7)] = inst_23200__$1);

(statearr_23248[(10)] = inst_23199);

(statearr_23248[(11)] = inst_23198);

return statearr_23248;
})();
var statearr_23249_23275 = state_23244__$1;
(statearr_23249_23275[(2)] = null);

(statearr_23249_23275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (13))){
var inst_23216 = (state_23244[(12)]);
var inst_23206 = (state_23244[(13)]);
var inst_23225 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23226 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_23227 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_23206,inst_23225,inst_23226);
var state_23244__$1 = (function (){var statearr_23250 = state_23244;
(statearr_23250[(8)] = inst_23227);

return statearr_23250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(15),inst_23216);
} else {
if((state_val_23245 === (6))){
var inst_23198 = (state_23244[(11)]);
var inst_23205 = (state_23244[(14)]);
var inst_23205__$1 = cljs.core.nth.call(null,inst_23198,(0),null);
var inst_23206 = cljs.core.nth.call(null,inst_23198,(1),null);
var inst_23207 = cljs.core.seq.call(null,inst_23205__$1);
var state_23244__$1 = (function (){var statearr_23251 = state_23244;
(statearr_23251[(13)] = inst_23206);

(statearr_23251[(14)] = inst_23205__$1);

return statearr_23251;
})();
if(inst_23207){
var statearr_23252_23276 = state_23244__$1;
(statearr_23252_23276[(1)] = (8));

} else {
var statearr_23253_23277 = state_23244__$1;
(statearr_23253_23277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (3))){
var inst_23170 = (state_23244[(2)]);
var inst_23171 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_23172 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23173 = [inst_23170];
var inst_23174 = cljs.core.PersistentHashMap.fromArrays(inst_23172,inst_23173);
var inst_23175 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23174);
var inst_23176 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23177 = [inst_23170];
var inst_23178 = cljs.core.PersistentHashMap.fromArrays(inst_23176,inst_23177);
var inst_23179 = klipse_clj.lang.clojure.populate_err.call(null,inst_23178,opts);
var state_23244__$1 = (function (){var statearr_23254 = state_23244;
(statearr_23254[(15)] = inst_23171);

(statearr_23254[(16)] = inst_23175);

return statearr_23254;
})();
var statearr_23255_23278 = state_23244__$1;
(statearr_23255_23278[(2)] = inst_23179);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (12))){
var inst_23218 = (state_23244[(9)]);
var inst_23221 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_23222 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23218);
var inst_23223 = klipse_clj.lang.clojure.populate_err.call(null,inst_23218,opts);
var state_23244__$1 = (function (){var statearr_23256 = state_23244;
(statearr_23256[(17)] = inst_23222);

(statearr_23256[(18)] = inst_23221);

return statearr_23256;
})();
var statearr_23257_23279 = state_23244__$1;
(statearr_23257_23279[(2)] = inst_23223);

(statearr_23257_23279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (2))){
var inst_23242 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23244__$1,inst_23242);
} else {
if((state_val_23245 === (11))){
var inst_23218 = (state_23244[(9)]);
var inst_23218__$1 = (state_23244[(2)]);
var inst_23219 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23218__$1);
var state_23244__$1 = (function (){var statearr_23258 = state_23244;
(statearr_23258[(9)] = inst_23218__$1);

return statearr_23258;
})();
if(cljs.core.truth_(inst_23219)){
var statearr_23259_23280 = state_23244__$1;
(statearr_23259_23280[(1)] = (12));

} else {
var statearr_23260_23281 = state_23244__$1;
(statearr_23260_23281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (9))){
var inst_23200 = (state_23244[(7)]);
var inst_23199 = (state_23244[(10)]);
var inst_23235 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_23200);
var inst_23236 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23199);
var state_23244__$1 = (function (){var statearr_23261 = state_23244;
(statearr_23261[(19)] = inst_23235);

return statearr_23261;
})();
var statearr_23262_23282 = state_23244__$1;
(statearr_23262_23282[(2)] = inst_23236);

(statearr_23262_23282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (5))){
var inst_23185 = (state_23244[(2)]);
var inst_23193 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23194 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_23195 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_23193,inst_23194);
var inst_23196 = cljs.core.nth.call(null,inst_23195,(0),null);
var inst_23197 = cljs.core.nth.call(null,inst_23195,(1),null);
var inst_23198 = inst_23195;
var inst_23199 = null;
var inst_23200 = "";
var state_23244__$1 = (function (){var statearr_23263 = state_23244;
(statearr_23263[(7)] = inst_23200);

(statearr_23263[(10)] = inst_23199);

(statearr_23263[(20)] = inst_23197);

(statearr_23263[(11)] = inst_23198);

(statearr_23263[(21)] = inst_23196);

(statearr_23263[(22)] = inst_23185);

return statearr_23263;
})();
var statearr_23264_23283 = state_23244__$1;
(statearr_23264_23283[(2)] = null);

(statearr_23264_23283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (14))){
var inst_23233 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23265_23284 = state_23244__$1;
(statearr_23265_23284[(2)] = inst_23233);

(statearr_23265_23284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (10))){
var inst_23238 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23266_23285 = state_23244__$1;
(statearr_23266_23285[(2)] = inst_23238);

(statearr_23266_23285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (8))){
var inst_23205 = (state_23244[(14)]);
var inst_23212 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23213 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_23212,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_23214 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_23205,inst_23213);
var inst_23215 = cljs.core.nth.call(null,inst_23214,(0),null);
var inst_23216 = cljs.core.nth.call(null,inst_23214,(1),null);
var state_23244__$1 = (function (){var statearr_23267 = state_23244;
(statearr_23267[(12)] = inst_23216);

return statearr_23267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(11),inst_23215);
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
});})(c__15634__auto___23272,res_chan,warnings_chan))
;
return ((function (switch__15539__auto__,c__15634__auto___23272,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____0 = (function (){
var statearr_23268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23268[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__);

(statearr_23268[(1)] = (1));

return statearr_23268;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____1 = (function (state_23244){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23269){if((e23269 instanceof Object)){
var ex__15543__auto__ = e23269;
var statearr_23270_23286 = state_23244;
(statearr_23270_23286[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23287 = state_23244;
state_23244 = G__23287;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__ = function(state_23244){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____1.call(this,state_23244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___23272,res_chan,warnings_chan))
})();
var state__15636__auto__ = (function (){var statearr_23271 = f__15635__auto__.call(null);
(statearr_23271[(6)] = c__15634__auto___23272);

return statearr_23271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___23272,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23344){
var state_val_23345 = (state_23344[(1)]);
if((state_val_23345 === (7))){
var inst_23313 = (state_23344[(7)]);
var inst_23317 = klipse_clj.repl.create_state_compile.call(null);
var inst_23318 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_23317,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_23319 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_23313,inst_23318);
var state_23344__$1 = state_23344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23344__$1,(10),inst_23319);
} else {
if((state_val_23345 === (1))){
var state_23344__$1 = state_23344;
var statearr_23346_23367 = state_23344__$1;
(statearr_23346_23367[(2)] = null);

(statearr_23346_23367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23344,(3),Object,null,(2));
var inst_23302 = klipse_clj.repl.create_state_compile.call(null);
var inst_23303 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_23304 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_23302,inst_23303);
var inst_23305 = cljs.core.nth.call(null,inst_23304,(0),null);
var inst_23306 = cljs.core.nth.call(null,inst_23304,(1),null);
var inst_23307 = inst_23304;
var inst_23308 = "";
var state_23344__$1 = (function (){var statearr_23347 = state_23344;
(statearr_23347[(8)] = inst_23307);

(statearr_23347[(9)] = inst_23308);

(statearr_23347[(10)] = inst_23306);

(statearr_23347[(11)] = inst_23305);

return statearr_23347;
})();
var statearr_23348_23368 = state_23344__$1;
(statearr_23348_23368[(2)] = null);

(statearr_23348_23368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (13))){
var inst_23332 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23349_23369 = state_23344__$1;
(statearr_23349_23369[(2)] = inst_23332);

(statearr_23349_23369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (6))){
var inst_23340 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23350_23370 = state_23344__$1;
(statearr_23350_23370[(2)] = inst_23340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23344__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (3))){
var inst_23288 = (state_23344[(2)]);
var inst_23289 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23290 = [inst_23288];
var inst_23291 = cljs.core.PersistentHashMap.fromArrays(inst_23289,inst_23290);
var state_23344__$1 = state_23344;
var statearr_23351_23371 = state_23344__$1;
(statearr_23351_23371[(2)] = inst_23291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23344__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (12))){
var inst_23321 = (state_23344[(12)]);
var inst_23308 = (state_23344[(9)]);
var inst_23314 = (state_23344[(13)]);
var inst_23325 = klipse_clj.repl.create_state_compile.call(null);
var inst_23326 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_23327 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_23314,inst_23325,inst_23326);
var inst_23328 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_23321);
var inst_23329 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23308),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23328)].join('');
var inst_23307 = inst_23327;
var inst_23308__$1 = inst_23329;
var state_23344__$1 = (function (){var statearr_23352 = state_23344;
(statearr_23352[(8)] = inst_23307);

(statearr_23352[(9)] = inst_23308__$1);

return statearr_23352;
})();
var statearr_23353_23372 = state_23344__$1;
(statearr_23353_23372[(2)] = null);

(statearr_23353_23372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (2))){
var inst_23342 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23344__$1,inst_23342);
} else {
if((state_val_23345 === (11))){
var inst_23321 = (state_23344[(12)]);
var state_23344__$1 = state_23344;
var statearr_23354_23373 = state_23344__$1;
(statearr_23354_23373[(2)] = inst_23321);

(statearr_23354_23373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (9))){
var inst_23338 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23355_23374 = state_23344__$1;
(statearr_23355_23374[(2)] = inst_23338);

(statearr_23355_23374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (5))){
var inst_23307 = (state_23344[(8)]);
var inst_23313 = (state_23344[(7)]);
var inst_23313__$1 = cljs.core.nth.call(null,inst_23307,(0),null);
var inst_23314 = cljs.core.nth.call(null,inst_23307,(1),null);
var inst_23315 = cljs.core.seq.call(null,inst_23313__$1);
var state_23344__$1 = (function (){var statearr_23356 = state_23344;
(statearr_23356[(7)] = inst_23313__$1);

(statearr_23356[(13)] = inst_23314);

return statearr_23356;
})();
if(inst_23315){
var statearr_23357_23375 = state_23344__$1;
(statearr_23357_23375[(1)] = (7));

} else {
var statearr_23358_23376 = state_23344__$1;
(statearr_23358_23376[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (10))){
var inst_23321 = (state_23344[(12)]);
var inst_23321__$1 = (state_23344[(2)]);
var inst_23322 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23321__$1);
var state_23344__$1 = (function (){var statearr_23359 = state_23344;
(statearr_23359[(12)] = inst_23321__$1);

return statearr_23359;
})();
if(cljs.core.truth_(inst_23322)){
var statearr_23360_23377 = state_23344__$1;
(statearr_23360_23377[(1)] = (11));

} else {
var statearr_23361_23378 = state_23344__$1;
(statearr_23361_23378[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (8))){
var inst_23308 = (state_23344[(9)]);
var inst_23334 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_23335 = [inst_23308];
var inst_23336 = cljs.core.PersistentHashMap.fromArrays(inst_23334,inst_23335);
var state_23344__$1 = state_23344;
var statearr_23362_23379 = state_23344__$1;
(statearr_23362_23379[(2)] = inst_23336);

(statearr_23362_23379[(1)] = (9));


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
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____0 = (function (){
var statearr_23363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23363[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__);

(statearr_23363[(1)] = (1));

return statearr_23363;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____1 = (function (state_23344){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23364){if((e23364 instanceof Object)){
var ex__15543__auto__ = e23364;
var statearr_23365_23380 = state_23344;
(statearr_23365_23380[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23381 = state_23344;
state_23344 = G__23381;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__ = function(state_23344){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____1.call(this,state_23344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23366 = f__15635__auto__.call(null);
(statearr_23366[(6)] = c__15634__auto__);

return statearr_23366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23397){
var state_val_23398 = (state_23397[(1)]);
if((state_val_23398 === (1))){
var inst_23385 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23386 = cljs.core.nth.call(null,inst_23385,(0),null);
var inst_23387 = cljs.core.nth.call(null,inst_23385,(1),null);
var state_23397__$1 = (function (){var statearr_23399 = state_23397;
(statearr_23399[(7)] = inst_23387);

return statearr_23399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23397__$1,(2),inst_23386);
} else {
if((state_val_23398 === (2))){
var inst_23387 = (state_23397[(7)]);
var inst_23389 = (state_23397[(2)]);
var inst_23390 = klipse_clj.lang.clojure.result_as_str.call(null,inst_23389,opts);
var state_23397__$1 = (function (){var statearr_23400 = state_23397;
(statearr_23400[(8)] = inst_23390);

return statearr_23400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23397__$1,(3),inst_23387);
} else {
if((state_val_23398 === (3))){
var inst_23390 = (state_23397[(8)]);
var inst_23392 = (state_23397[(2)]);
var inst_23393 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_23394 = [inst_23392,inst_23390];
var inst_23395 = cljs.core.PersistentHashMap.fromArrays(inst_23393,inst_23394);
var state_23397__$1 = state_23397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23397__$1,inst_23395);
} else {
return null;
}
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____0 = (function (){
var statearr_23401 = [null,null,null,null,null,null,null,null,null];
(statearr_23401[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__);

(statearr_23401[(1)] = (1));

return statearr_23401;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____1 = (function (state_23397){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23402){if((e23402 instanceof Object)){
var ex__15543__auto__ = e23402;
var statearr_23403_23405 = state_23397;
(statearr_23403_23405[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23406 = state_23397;
state_23397 = G__23406;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__ = function(state_23397){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____1.call(this,state_23397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23404 = f__15635__auto__.call(null);
(statearr_23404[(6)] = c__15634__auto__);

return statearr_23404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23419){
var state_val_23420 = (state_23419[(1)]);
if((state_val_23420 === (1))){
var inst_23410 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23411 = cljs.core.nth.call(null,inst_23410,(0),null);
var inst_23412 = cljs.core.nth.call(null,inst_23410,(1),null);
var state_23419__$1 = (function (){var statearr_23421 = state_23419;
(statearr_23421[(7)] = inst_23412);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(2),inst_23411);
} else {
if((state_val_23420 === (2))){
var inst_23412 = (state_23419[(7)]);
var inst_23414 = (state_23419[(2)]);
var inst_23415 = klipse_clj.lang.clojure.result_as_str.call(null,inst_23414,opts);
var state_23419__$1 = (function (){var statearr_23422 = state_23419;
(statearr_23422[(8)] = inst_23415);

return statearr_23422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(3),inst_23412);
} else {
if((state_val_23420 === (3))){
var inst_23415 = (state_23419[(8)]);
var inst_23417 = (state_23419[(2)]);
var state_23419__$1 = (function (){var statearr_23423 = state_23419;
(statearr_23423[(9)] = inst_23417);

return statearr_23423;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23419__$1,inst_23415);
} else {
return null;
}
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____1 = (function (state_23419){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__15543__auto__ = e23425;
var statearr_23426_23428 = state_23419;
(statearr_23426_23428[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23429 = state_23419;
state_23419 = G__23429;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__ = function(state_23419){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____1.call(this,state_23419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23427 = f__15635__auto__.call(null);
(statearr_23427[(6)] = c__15634__auto__);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__23431 = arguments.length;
switch (G__23431) {
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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23438){
var state_val_23439 = (state_23438[(1)]);
if((state_val_23439 === (1))){
var inst_23432 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23433 = cljs.core.first.call(null,inst_23432);
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23438__$1,(2),inst_23433);
} else {
if((state_val_23439 === (2))){
var inst_23435 = (state_23438[(2)]);
var inst_23436 = klipse_clj.lang.clojure.read_result.call(null,inst_23435);
var state_23438__$1 = state_23438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23438__$1,inst_23436);
} else {
return null;
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15540__auto____0 = (function (){
var statearr_23440 = [null,null,null,null,null,null,null];
(statearr_23440[(0)] = klipse_clj$lang$clojure$state_machine__15540__auto__);

(statearr_23440[(1)] = (1));

return statearr_23440;
});
var klipse_clj$lang$clojure$state_machine__15540__auto____1 = (function (state_23438){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23441){if((e23441 instanceof Object)){
var ex__15543__auto__ = e23441;
var statearr_23442_23445 = state_23438;
(statearr_23442_23445[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23446 = state_23438;
state_23438 = G__23446;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15540__auto__ = function(state_23438){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15540__auto____1.call(this,state_23438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15540__auto____0;
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23443 = f__15635__auto__.call(null);
(statearr_23443[(6)] = c__15634__auto__);

return statearr_23443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23453){
var state_val_23454 = (state_23453[(1)]);
if((state_val_23454 === (1))){
var inst_23447 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_23453__$1 = state_23453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23453__$1,(2),inst_23447);
} else {
if((state_val_23454 === (2))){
var inst_23449 = (state_23453[(2)]);
var inst_23450 = cljs.core.clj__GT_js.call(null,inst_23449);
var inst_23451 = cb.call(null,inst_23450);
var state_23453__$1 = state_23453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23453__$1,inst_23451);
} else {
return null;
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____0 = (function (){
var statearr_23455 = [null,null,null,null,null,null,null];
(statearr_23455[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__);

(statearr_23455[(1)] = (1));

return statearr_23455;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____1 = (function (state_23453){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23456){if((e23456 instanceof Object)){
var ex__15543__auto__ = e23456;
var statearr_23457_23459 = state_23453;
(statearr_23457_23459[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23460 = state_23453;
state_23453 = G__23460;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__ = function(state_23453){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____1.call(this,state_23453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23458 = f__15635__auto__.call(null);
(statearr_23458[(6)] = c__15634__auto__);

return statearr_23458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__23462 = arguments.length;
switch (G__23462) {
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
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23468){
var state_val_23469 = (state_23468[(1)]);
if((state_val_23469 === (1))){
var inst_23463 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23468__$1,(2),inst_23463);
} else {
if((state_val_23469 === (2))){
var inst_23465 = (state_23468[(2)]);
var inst_23466 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_23465);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23468__$1,inst_23466);
} else {
return null;
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15540__auto____0 = (function (){
var statearr_23470 = [null,null,null,null,null,null,null];
(statearr_23470[(0)] = klipse_clj$lang$clojure$state_machine__15540__auto__);

(statearr_23470[(1)] = (1));

return statearr_23470;
});
var klipse_clj$lang$clojure$state_machine__15540__auto____1 = (function (state_23468){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object)){
var ex__15543__auto__ = e23471;
var statearr_23472_23475 = state_23468;
(statearr_23472_23475[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23476 = state_23468;
state_23468 = G__23476;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15540__auto__ = function(state_23468){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15540__auto____1.call(this,state_23468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15540__auto____0;
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23473 = f__15635__auto__.call(null);
(statearr_23473[(6)] = c__15634__auto__);

return statearr_23473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23482){
var state_val_23483 = (state_23482[(1)]);
if((state_val_23483 === (1))){
var inst_23477 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23482__$1,(2),inst_23477);
} else {
if((state_val_23483 === (2))){
var inst_23479 = (state_23482[(2)]);
var inst_23480 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_23479);
var state_23482__$1 = state_23482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23482__$1,inst_23480);
} else {
return null;
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____0 = (function (){
var statearr_23484 = [null,null,null,null,null,null,null];
(statearr_23484[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__);

(statearr_23484[(1)] = (1));

return statearr_23484;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____1 = (function (state_23482){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23485){if((e23485 instanceof Object)){
var ex__15543__auto__ = e23485;
var statearr_23486_23488 = state_23482;
(statearr_23486_23488[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23489 = state_23482;
state_23482 = G__23489;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__ = function(state_23482){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____1.call(this,state_23482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23487 = f__15635__auto__.call(null);
(statearr_23487[(6)] = c__15634__auto__);

return statearr_23487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_23496){
var state_val_23497 = (state_23496[(1)]);
if((state_val_23497 === (1))){
var inst_23490 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23496__$1,(2),inst_23490);
} else {
if((state_val_23497 === (2))){
var inst_23492 = (state_23496[(2)]);
var inst_23493 = cljs.core.second.call(null,inst_23492);
var inst_23494 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23493);
var state_23496__$1 = state_23496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23496__$1,inst_23494);
} else {
return null;
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____0 = (function (){
var statearr_23498 = [null,null,null,null,null,null,null];
(statearr_23498[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__);

(statearr_23498[(1)] = (1));

return statearr_23498;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____1 = (function (state_23496){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23499){if((e23499 instanceof Object)){
var ex__15543__auto__ = e23499;
var statearr_23500_23502 = state_23496;
(statearr_23500_23502[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23503 = state_23496;
state_23496 = G__23503;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__ = function(state_23496){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____1.call(this,state_23496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_23501 = f__15635__auto__.call(null);
(statearr_23501[(6)] = c__15634__auto__);

return statearr_23501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__23505){
var map__23506 = p__23505;
var map__23506__$1 = (((((!((map__23506 == null))))?(((((map__23506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23506):map__23506);
var opts = map__23506__$1;
var container_id = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15634__auto___23596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_23565){
var state_val_23566 = (state_23565[(1)]);
if((state_val_23566 === (7))){
var inst_23516 = (state_23565[(2)]);
var inst_23521 = (function (){var _STAR_print_newline_STAR__orig_val__23517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23519 = true;
return ((function (_STAR_print_newline_STAR__orig_val__23517,_STAR_print_fn_STAR__orig_val__23518,_STAR_print_newline_STAR__temp_val__23519,inst_23516,state_val_23566,c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__23504_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__23504_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__23517,_STAR_print_fn_STAR__orig_val__23518,_STAR_print_newline_STAR__temp_val__23519,inst_23516,state_val_23566,c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_23522 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_23523 = cljs.core._STAR_print_fn_STAR_ = inst_23521;
var state_23565__$1 = (function (){var statearr_23567 = state_23565;
(statearr_23567[(7)] = inst_23522);

(statearr_23567[(8)] = inst_23516);

(statearr_23567[(9)] = inst_23523);

return statearr_23567;
})();
var statearr_23568_23597 = state_23565__$1;
(statearr_23568_23597[(2)] = null);

(statearr_23568_23597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (20))){
var inst_23554 = (state_23565[(2)]);
var inst_23555 = cljs.core.get.call(null,inst_23554,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_23556 = cljs.core.get.call(null,inst_23554,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_23557 = cljs.core.second.call(null,inst_23556);
var inst_23558 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23555),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23557)].join('');
var inst_23559 = cljs.core.async.put_BANG_.call(null,c,inst_23558);
var state_23565__$1 = state_23565;
var statearr_23569_23598 = state_23565__$1;
(statearr_23569_23598[(2)] = inst_23559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (1))){
var inst_23508 = clojure.string.blank_QMARK_.call(null,exp);
var state_23565__$1 = state_23565;
if(inst_23508){
var statearr_23570_23599 = state_23565__$1;
(statearr_23570_23599[(1)] = (2));

} else {
var statearr_23571_23600 = state_23565__$1;
(statearr_23571_23600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (4))){
var inst_23563 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23565__$1,inst_23563);
} else {
if((state_val_23566 === (15))){
var state_23565__$1 = state_23565;
var statearr_23572_23601 = state_23565__$1;
(statearr_23572_23601[(2)] = true);

(statearr_23572_23601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (13))){
var state_23565__$1 = state_23565;
var statearr_23573_23602 = state_23565__$1;
(statearr_23573_23602[(2)] = false);

(statearr_23573_23602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (6))){
var state_23565__$1 = state_23565;
var statearr_23574_23603 = state_23565__$1;
(statearr_23574_23603[(2)] = null);

(statearr_23574_23603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (17))){
var inst_23546 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
var statearr_23575_23604 = state_23565__$1;
(statearr_23575_23604[(2)] = inst_23546);

(statearr_23575_23604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (3))){
var state_23565__$1 = state_23565;
if(cljs.core.truth_(setup_container_fn)){
var statearr_23576_23605 = state_23565__$1;
(statearr_23576_23605[(1)] = (5));

} else {
var statearr_23577_23606 = state_23565__$1;
(statearr_23577_23606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (12))){
var inst_23533 = (state_23565[(10)]);
var inst_23538 = inst_23533.cljs$lang$protocol_mask$partition0$;
var inst_23539 = (inst_23538 & (64));
var inst_23540 = inst_23533.cljs$core$ISeq$;
var inst_23541 = (cljs.core.PROTOCOL_SENTINEL === inst_23540);
var inst_23542 = ((inst_23539) || (inst_23541));
var state_23565__$1 = state_23565;
if(cljs.core.truth_(inst_23542)){
var statearr_23578_23607 = state_23565__$1;
(statearr_23578_23607[(1)] = (15));

} else {
var statearr_23579_23608 = state_23565__$1;
(statearr_23579_23608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (2))){
var inst_23510 = cljs.core.async.put_BANG_.call(null,c,"");
var state_23565__$1 = state_23565;
var statearr_23580_23609 = state_23565__$1;
(statearr_23580_23609[(2)] = inst_23510);

(statearr_23580_23609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (19))){
var inst_23533 = (state_23565[(10)]);
var state_23565__$1 = state_23565;
var statearr_23581_23610 = state_23565__$1;
(statearr_23581_23610[(2)] = inst_23533);

(statearr_23581_23610[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (11))){
var inst_23533 = (state_23565[(10)]);
var inst_23533__$1 = (state_23565[(2)]);
var inst_23535 = (inst_23533__$1 == null);
var inst_23536 = cljs.core.not.call(null,inst_23535);
var state_23565__$1 = (function (){var statearr_23582 = state_23565;
(statearr_23582[(10)] = inst_23533__$1);

return statearr_23582;
})();
if(inst_23536){
var statearr_23583_23611 = state_23565__$1;
(statearr_23583_23611[(1)] = (12));

} else {
var statearr_23584_23612 = state_23565__$1;
(statearr_23584_23612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (9))){
var inst_23524 = (state_23565[(2)]);
var inst_23525 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_23526 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_23565__$1 = (function (){var statearr_23585 = state_23565;
(statearr_23585[(11)] = inst_23525);

(statearr_23585[(12)] = inst_23524);

(statearr_23585[(13)] = inst_23526);

return statearr_23585;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (5))){
var inst_23513 = setup_container_fn.call(null,container_id);
var state_23565__$1 = state_23565;
var statearr_23586_23613 = state_23565__$1;
(statearr_23586_23613[(2)] = inst_23513);

(statearr_23586_23613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (14))){
var inst_23549 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
if(cljs.core.truth_(inst_23549)){
var statearr_23587_23614 = state_23565__$1;
(statearr_23587_23614[(1)] = (18));

} else {
var statearr_23588_23615 = state_23565__$1;
(statearr_23588_23615[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (16))){
var state_23565__$1 = state_23565;
var statearr_23589_23616 = state_23565__$1;
(statearr_23589_23616[(2)] = false);

(statearr_23589_23616[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23565,null,null,(9),(8));
var inst_23531 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_23565__$1 = state_23565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23565__$1,(11),inst_23531);
} else {
if((state_val_23566 === (18))){
var inst_23533 = (state_23565[(10)]);
var inst_23551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23533);
var state_23565__$1 = state_23565;
var statearr_23590_23617 = state_23565__$1;
(statearr_23590_23617[(2)] = inst_23551);

(statearr_23590_23617[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23566 === (8))){
var inst_23561 = (state_23565[(2)]);
var state_23565__$1 = state_23565;
var statearr_23591_23618 = state_23565__$1;
(statearr_23591_23618[(2)] = inst_23561);

(statearr_23591_23618[(1)] = (4));


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
});})(c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__15539__auto__,c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____0 = (function (){
var statearr_23592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23592[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__);

(statearr_23592[(1)] = (1));

return statearr_23592;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____1 = (function (state_23565){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23593){if((e23593 instanceof Object)){
var ex__15543__auto__ = e23593;
var statearr_23594_23619 = state_23565;
(statearr_23594_23619[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23620 = state_23565;
state_23565 = G__23620;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__ = function(state_23565){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____1.call(this,state_23565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__15636__auto__ = (function (){var statearr_23595 = f__15635__auto__.call(null);
(statearr_23595[(6)] = c__15634__auto___23596);

return statearr_23595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___23596,c,map__23506,map__23506__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
/**
 * Returns a promise with the result of the evaluation of exp
 */
klipse_clj.lang.clojure.str_eval_prom = (function klipse_clj$lang$clojure$str_eval_prom(exp,p__23622){
var map__23623 = p__23622;
var map__23623__$1 = (((((!((map__23623 == null))))?(((((map__23623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23623):map__23623);
var opts = map__23623__$1;
var verbose = cljs.core.get.call(null,map__23623__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var p = (new Promise(((function (map__23623,map__23623__$1,opts,verbose){
return (function (resolve,reject){
if(cljs.core.truth_(verbose)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,map__23623,map__23623__$1,opts,verbose){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,map__23623,map__23623__$1,opts,verbose){
return (function (state_23690){
var state_val_23691 = (state_23690[(1)]);
if((state_val_23691 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23690,null,null,(6),(5));
var inst_23638 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_23690__$1 = state_23690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23690__$1,(8),inst_23638);
} else {
if((state_val_23691 === (20))){
var inst_23684 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23692_23732 = state_23690__$1;
(statearr_23692_23732[(2)] = inst_23684);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (1))){
var inst_23625 = clojure.string.blank_QMARK_.call(null,exp);
var state_23690__$1 = state_23690;
if(inst_23625){
var statearr_23693_23733 = state_23690__$1;
(statearr_23693_23733[(1)] = (2));

} else {
var statearr_23694_23734 = state_23690__$1;
(statearr_23694_23734[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (24))){
var inst_23676 = console.info("[clojure] evaluated",exp);
var state_23690__$1 = state_23690;
var statearr_23695_23735 = state_23690__$1;
(statearr_23695_23735[(2)] = inst_23676);

(statearr_23695_23735[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (4))){
var inst_23688 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23690__$1,inst_23688);
} else {
if((state_val_23691 === (15))){
var inst_23640 = (state_23690[(7)]);
var inst_23658 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23640);
var state_23690__$1 = state_23690;
var statearr_23696_23736 = state_23690__$1;
(statearr_23696_23736[(2)] = inst_23658);

(statearr_23696_23736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (21))){
var inst_23662 = (state_23690[(8)]);
var inst_23671 = console.warn(inst_23662);
var state_23690__$1 = state_23690;
var statearr_23697_23737 = state_23690__$1;
(statearr_23697_23737[(2)] = inst_23671);

(statearr_23697_23737[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (13))){
var state_23690__$1 = state_23690;
var statearr_23698_23738 = state_23690__$1;
(statearr_23698_23738[(2)] = false);

(statearr_23698_23738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (22))){
var state_23690__$1 = state_23690;
var statearr_23699_23739 = state_23690__$1;
(statearr_23699_23739[(2)] = null);

(statearr_23699_23739[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (6))){
var inst_23632 = (state_23690[(2)]);
var inst_23633 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_23690__$1 = (function (){var statearr_23700 = state_23690;
(statearr_23700[(9)] = inst_23633);

(statearr_23700[(10)] = inst_23632);

return statearr_23700;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (25))){
var state_23690__$1 = state_23690;
var statearr_23701_23740 = state_23690__$1;
(statearr_23701_23740[(2)] = null);

(statearr_23701_23740[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (17))){
var inst_23663 = (state_23690[(11)]);
var inst_23661 = (state_23690[(2)]);
var inst_23662 = cljs.core.get.call(null,inst_23661,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_23663__$1 = cljs.core.get.call(null,inst_23661,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_23664 = cljs.core.first.call(null,inst_23663__$1);
var inst_23665 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_23664);
var state_23690__$1 = (function (){var statearr_23702 = state_23690;
(statearr_23702[(8)] = inst_23662);

(statearr_23702[(11)] = inst_23663__$1);

return statearr_23702;
})();
if(inst_23665){
var statearr_23703_23741 = state_23690__$1;
(statearr_23703_23741[(1)] = (18));

} else {
var statearr_23704_23742 = state_23690__$1;
(statearr_23704_23742[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (3))){
var inst_23631 = cljs.core._STAR_print_newline_STAR_ = false;
var state_23690__$1 = (function (){var statearr_23705 = state_23690;
(statearr_23705[(12)] = inst_23631);

return statearr_23705;
})();
var statearr_23706_23743 = state_23690__$1;
(statearr_23706_23743[(2)] = null);

(statearr_23706_23743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (12))){
var state_23690__$1 = state_23690;
var statearr_23707_23744 = state_23690__$1;
(statearr_23707_23744[(2)] = true);

(statearr_23707_23744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (2))){
var inst_23627 = resolve.call(null,"");
var state_23690__$1 = state_23690;
var statearr_23708_23745 = state_23690__$1;
(statearr_23708_23745[(2)] = inst_23627);

(statearr_23708_23745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (23))){
var inst_23674 = (state_23690[(2)]);
var state_23690__$1 = (function (){var statearr_23709 = state_23690;
(statearr_23709[(13)] = inst_23674);

return statearr_23709;
})();
if(cljs.core.truth_(verbose)){
var statearr_23710_23746 = state_23690__$1;
(statearr_23710_23746[(1)] = (24));

} else {
var statearr_23711_23747 = state_23690__$1;
(statearr_23711_23747[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (19))){
var inst_23662 = (state_23690[(8)]);
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23662)){
var statearr_23712_23748 = state_23690__$1;
(statearr_23712_23748[(1)] = (21));

} else {
var statearr_23713_23749 = state_23690__$1;
(statearr_23713_23749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (11))){
var inst_23656 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23656)){
var statearr_23714_23750 = state_23690__$1;
(statearr_23714_23750[(1)] = (15));

} else {
var statearr_23715_23751 = state_23690__$1;
(statearr_23715_23751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (9))){
var inst_23640 = (state_23690[(7)]);
var inst_23645 = inst_23640.cljs$lang$protocol_mask$partition0$;
var inst_23646 = (inst_23645 & (64));
var inst_23647 = inst_23640.cljs$core$ISeq$;
var inst_23648 = (cljs.core.PROTOCOL_SENTINEL === inst_23647);
var inst_23649 = ((inst_23646) || (inst_23648));
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23649)){
var statearr_23716_23752 = state_23690__$1;
(statearr_23716_23752[(1)] = (12));

} else {
var statearr_23717_23753 = state_23690__$1;
(statearr_23717_23753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (5))){
var inst_23686 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23718_23754 = state_23690__$1;
(statearr_23718_23754[(2)] = inst_23686);

(statearr_23718_23754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (14))){
var inst_23653 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23719_23755 = state_23690__$1;
(statearr_23719_23755[(2)] = inst_23653);

(statearr_23719_23755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (26))){
var inst_23663 = (state_23690[(11)]);
var inst_23679 = (state_23690[(2)]);
var inst_23680 = cljs.core.second.call(null,inst_23663);
var inst_23681 = clojure.string.trim_newline.call(null,inst_23680);
var inst_23682 = resolve.call(null,inst_23681);
var state_23690__$1 = (function (){var statearr_23720 = state_23690;
(statearr_23720[(14)] = inst_23679);

return statearr_23720;
})();
var statearr_23721_23756 = state_23690__$1;
(statearr_23721_23756[(2)] = inst_23682);

(statearr_23721_23756[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (16))){
var inst_23640 = (state_23690[(7)]);
var state_23690__$1 = state_23690;
var statearr_23722_23757 = state_23690__$1;
(statearr_23722_23757[(2)] = inst_23640);

(statearr_23722_23757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (10))){
var state_23690__$1 = state_23690;
var statearr_23723_23758 = state_23690__$1;
(statearr_23723_23758[(2)] = false);

(statearr_23723_23758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (18))){
var inst_23663 = (state_23690[(11)]);
var inst_23667 = cljs.core.second.call(null,inst_23663);
var inst_23668 = reject.call(null,inst_23667);
var state_23690__$1 = state_23690;
var statearr_23724_23759 = state_23690__$1;
(statearr_23724_23759[(2)] = inst_23668);

(statearr_23724_23759[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23691 === (8))){
var inst_23640 = (state_23690[(7)]);
var inst_23640__$1 = (state_23690[(2)]);
var inst_23642 = (inst_23640__$1 == null);
var inst_23643 = cljs.core.not.call(null,inst_23642);
var state_23690__$1 = (function (){var statearr_23725 = state_23690;
(statearr_23725[(7)] = inst_23640__$1);

return statearr_23725;
})();
if(inst_23643){
var statearr_23726_23760 = state_23690__$1;
(statearr_23726_23760[(1)] = (9));

} else {
var statearr_23727_23761 = state_23690__$1;
(statearr_23727_23761[(1)] = (10));

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
});})(c__15634__auto__,map__23623,map__23623__$1,opts,verbose))
;
return ((function (switch__15539__auto__,c__15634__auto__,map__23623,map__23623__$1,opts,verbose){
return (function() {
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____0 = (function (){
var statearr_23728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23728[(0)] = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__);

(statearr_23728[(1)] = (1));

return statearr_23728;
});
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____1 = (function (state_23690){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23729){if((e23729 instanceof Object)){
var ex__15543__auto__ = e23729;
var statearr_23730_23762 = state_23690;
(statearr_23730_23762[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23763 = state_23690;
state_23690 = G__23763;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__ = function(state_23690){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____1.call(this,state_23690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,map__23623,map__23623__$1,opts,verbose))
})();
var state__15636__auto__ = (function (){var statearr_23731 = f__15635__auto__.call(null);
(statearr_23731[(6)] = c__15634__auto__);

return statearr_23731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,map__23623,map__23623__$1,opts,verbose))
);

return c__15634__auto__;
});})(map__23623,map__23623__$1,opts,verbose))
));
return p;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__23765 = arguments.length;
switch (G__23765) {
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
var c__15634__auto___23795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto___23795,c){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto___23795,c){
return (function (state_23784){
var state_val_23785 = (state_23784[(1)]);
if((state_val_23785 === (1))){
var inst_23768 = (function (){var _STAR_print_fn_STAR__orig_val__23766 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_fn_STAR__orig_val__23766,state_val_23785,c__15634__auto___23795,c){
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
;})(_STAR_print_fn_STAR__orig_val__23766,state_val_23785,c__15634__auto___23795,c))
})();
var inst_23769 = cljs.core._STAR_print_fn_STAR_ = inst_23768;
var state_23784__$1 = (function (){var statearr_23786 = state_23784;
(statearr_23786[(7)] = inst_23769);

return statearr_23786;
})();
var statearr_23787_23796 = state_23784__$1;
(statearr_23787_23796[(2)] = null);

(statearr_23787_23796[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (2))){
var inst_23782 = (state_23784[(2)]);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23784__$1,inst_23782);
} else {
if((state_val_23785 === (3))){
var inst_23770 = (state_23784[(2)]);
var inst_23771 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var state_23784__$1 = (function (){var statearr_23788 = state_23784;
(statearr_23788[(8)] = inst_23771);

(statearr_23788[(9)] = inst_23770);

return statearr_23788;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23785 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23784,null,null,(3),(2));
var inst_23775 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23776 = cljs.core.first.call(null,inst_23775);
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23784__$1,(5),inst_23776);
} else {
if((state_val_23785 === (5))){
var inst_23778 = (state_23784[(2)]);
var inst_23779 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_23778,opts);
var inst_23780 = cljs.core.async.put_BANG_.call(null,c,inst_23779);
var state_23784__$1 = state_23784;
var statearr_23789_23797 = state_23784__$1;
(statearr_23789_23797[(2)] = inst_23780);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__15634__auto___23795,c))
;
return ((function (switch__15539__auto__,c__15634__auto___23795,c){
return (function() {
var klipse_clj$lang$clojure$state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15540__auto____0 = (function (){
var statearr_23790 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23790[(0)] = klipse_clj$lang$clojure$state_machine__15540__auto__);

(statearr_23790[(1)] = (1));

return statearr_23790;
});
var klipse_clj$lang$clojure$state_machine__15540__auto____1 = (function (state_23784){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_23784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object)){
var ex__15543__auto__ = e23791;
var statearr_23792_23798 = state_23784;
(statearr_23792_23798[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23799 = state_23784;
state_23784 = G__23799;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15540__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15540__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15540__auto____0;
klipse_clj$lang$clojure$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15540__auto____1;
return klipse_clj$lang$clojure$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto___23795,c))
})();
var state__15636__auto__ = (function (){var statearr_23793 = f__15635__auto__.call(null);
(statearr_23793[(6)] = c__15634__auto___23795);

return statearr_23793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto___23795,c))
);


return c;
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
