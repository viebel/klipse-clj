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
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_34995){
var state_val_34996 = (state_34995[(1)]);
if((state_val_34996 === (7))){
var inst_34991 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_34997_35024 = state_34995__$1;
(statearr_34997_35024[(2)] = inst_34991);

(statearr_34997_35024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (1))){
var inst_34934 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34995__$1,(2),inst_34934);
} else {
if((state_val_34996 === (4))){
var inst_34993 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34995__$1,inst_34993);
} else {
if((state_val_34996 === (15))){
var inst_34965 = (state_34995[(7)]);
var inst_34982 = (state_34995[(2)]);
var inst_34983 = cljs.core.next.call(null,inst_34965);
var inst_34945 = inst_34983;
var inst_34946 = null;
var inst_34947 = (0);
var inst_34948 = (0);
var state_34995__$1 = (function (){var statearr_34998 = state_34995;
(statearr_34998[(8)] = inst_34982);

(statearr_34998[(9)] = inst_34945);

(statearr_34998[(10)] = inst_34946);

(statearr_34998[(11)] = inst_34947);

(statearr_34998[(12)] = inst_34948);

return statearr_34998;
})();
var statearr_34999_35025 = state_34995__$1;
(statearr_34999_35025[(2)] = null);

(statearr_34999_35025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (13))){
var inst_34965 = (state_34995[(7)]);
var inst_34974 = cljs.core.first.call(null,inst_34965);
var inst_34975 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34976 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34977 = [inst_34976,klipse_clj.repl.current_ns_eval];
var inst_34978 = cljs.core.PersistentHashMap.fromArrays(inst_34975,inst_34977);
var inst_34979 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34974,inst_34978);
var inst_34980 = cljs.core.first.call(null,inst_34979);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34995__$1,(15),inst_34980);
} else {
if((state_val_34996 === (6))){
var inst_34945 = (state_34995[(9)]);
var inst_34965 = (state_34995[(7)]);
var inst_34965__$1 = cljs.core.seq.call(null,inst_34945);
var state_34995__$1 = (function (){var statearr_35000 = state_34995;
(statearr_35000[(7)] = inst_34965__$1);

return statearr_35000;
})();
if(inst_34965__$1){
var statearr_35001_35026 = state_34995__$1;
(statearr_35001_35026[(1)] = (9));

} else {
var statearr_35002_35027 = state_34995__$1;
(statearr_35002_35027[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (3))){
var inst_34948 = (state_34995[(12)]);
var inst_34947 = (state_34995[(11)]);
var inst_34950 = (inst_34948 < inst_34947);
var inst_34951 = inst_34950;
var state_34995__$1 = state_34995;
if(cljs.core.truth_(inst_34951)){
var statearr_35003_35028 = state_34995__$1;
(statearr_35003_35028[(1)] = (5));

} else {
var statearr_35004_35029 = state_34995__$1;
(statearr_35004_35029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (12))){
var inst_34965 = (state_34995[(7)]);
var inst_34969 = cljs.core.chunk_first.call(null,inst_34965);
var inst_34970 = cljs.core.chunk_rest.call(null,inst_34965);
var inst_34971 = cljs.core.count.call(null,inst_34969);
var inst_34945 = inst_34970;
var inst_34946 = inst_34969;
var inst_34947 = inst_34971;
var inst_34948 = (0);
var state_34995__$1 = (function (){var statearr_35005 = state_34995;
(statearr_35005[(9)] = inst_34945);

(statearr_35005[(10)] = inst_34946);

(statearr_35005[(11)] = inst_34947);

(statearr_35005[(12)] = inst_34948);

return statearr_35005;
})();
var statearr_35006_35030 = state_34995__$1;
(statearr_35006_35030[(2)] = null);

(statearr_35006_35030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (2))){
var inst_34936 = (state_34995[(2)]);
var inst_34941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34942 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_34943 = (new cljs.core.PersistentVector(null,2,(5),inst_34941,inst_34942,null));
var inst_34944 = cljs.core.seq.call(null,inst_34943);
var inst_34945 = inst_34944;
var inst_34946 = null;
var inst_34947 = (0);
var inst_34948 = (0);
var state_34995__$1 = (function (){var statearr_35007 = state_34995;
(statearr_35007[(13)] = inst_34936);

(statearr_35007[(9)] = inst_34945);

(statearr_35007[(10)] = inst_34946);

(statearr_35007[(11)] = inst_34947);

(statearr_35007[(12)] = inst_34948);

return statearr_35007;
})();
var statearr_35008_35031 = state_34995__$1;
(statearr_35008_35031[(2)] = null);

(statearr_35008_35031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (11))){
var inst_34989 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35009_35032 = state_34995__$1;
(statearr_35009_35032[(2)] = inst_34989);

(statearr_35009_35032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (9))){
var inst_34965 = (state_34995[(7)]);
var inst_34967 = cljs.core.chunked_seq_QMARK_.call(null,inst_34965);
var state_34995__$1 = state_34995;
if(inst_34967){
var statearr_35010_35033 = state_34995__$1;
(statearr_35010_35033[(1)] = (12));

} else {
var statearr_35011_35034 = state_34995__$1;
(statearr_35011_35034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (5))){
var inst_34946 = (state_34995[(10)]);
var inst_34948 = (state_34995[(12)]);
var inst_34953 = cljs.core._nth.call(null,inst_34946,inst_34948);
var inst_34954 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_34955 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_34956 = [inst_34955,klipse_clj.repl.current_ns_eval];
var inst_34957 = cljs.core.PersistentHashMap.fromArrays(inst_34954,inst_34956);
var inst_34958 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_34953,inst_34957);
var inst_34959 = cljs.core.first.call(null,inst_34958);
var state_34995__$1 = state_34995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34995__$1,(8),inst_34959);
} else {
if((state_val_34996 === (14))){
var inst_34986 = (state_34995[(2)]);
var state_34995__$1 = state_34995;
var statearr_35015_35035 = state_34995__$1;
(statearr_35015_35035[(2)] = inst_34986);

(statearr_35015_35035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (10))){
var state_34995__$1 = state_34995;
var statearr_35016_35036 = state_34995__$1;
(statearr_35016_35036[(2)] = null);

(statearr_35016_35036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34996 === (8))){
var inst_34948 = (state_34995[(12)]);
var inst_34945 = (state_34995[(9)]);
var inst_34946 = (state_34995[(10)]);
var inst_34947 = (state_34995[(11)]);
var inst_34961 = (state_34995[(2)]);
var inst_34962 = (inst_34948 + (1));
var tmp35012 = inst_34946;
var tmp35013 = inst_34947;
var tmp35014 = inst_34945;
var inst_34945__$1 = tmp35014;
var inst_34946__$1 = tmp35012;
var inst_34947__$1 = tmp35013;
var inst_34948__$1 = inst_34962;
var state_34995__$1 = (function (){var statearr_35017 = state_34995;
(statearr_35017[(14)] = inst_34961);

(statearr_35017[(9)] = inst_34945__$1);

(statearr_35017[(10)] = inst_34946__$1);

(statearr_35017[(11)] = inst_34947__$1);

(statearr_35017[(12)] = inst_34948__$1);

return statearr_35017;
})();
var statearr_35018_35037 = state_34995__$1;
(statearr_35018_35037[(2)] = null);

(statearr_35018_35037[(1)] = (3));


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
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____0 = (function (){
var statearr_35019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35019[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__);

(statearr_35019[(1)] = (1));

return statearr_35019;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____1 = (function (state_34995){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_34995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35020){var ex__21987__auto__ = e35020;
var statearr_35021_35038 = state_34995;
(statearr_35021_35038[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_34995[(4)]))){
var statearr_35022_35039 = state_34995;
(statearr_35022_35039[(1)] = cljs.core.first.call(null,(state_34995[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35040 = state_34995;
state_34995 = G__35040;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__ = function(state_34995){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____1.call(this,state_34995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35023 = f__22109__auto__.call(null);
(statearr_35023[(6)] = c__22108__auto__);

return statearr_35023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35043){
var state_val_35044 = (state_35043[(1)]);
if((state_val_35044 === (1))){
var inst_35041 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_35043__$1 = state_35043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35043__$1,inst_35041);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____0 = (function (){
var statearr_35045 = [null,null,null,null,null,null,null];
(statearr_35045[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__);

(statearr_35045[(1)] = (1));

return statearr_35045;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____1 = (function (state_35043){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35046){var ex__21987__auto__ = e35046;
var statearr_35047_35050 = state_35043;
(statearr_35047_35050[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35043[(4)]))){
var statearr_35048_35051 = state_35043;
(statearr_35048_35051[(1)] = cljs.core.first.call(null,(state_35043[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35052 = state_35043;
state_35043 = G__35052;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__ = function(state_35043){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____1.call(this,state_35043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35049 = f__22109__auto__.call(null);
(statearr_35049[(6)] = c__22108__auto__);

return statearr_35049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
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
}catch (e35053){if((e35053 instanceof Object)){
var e = e35053;

return e;
} else {
throw e35053;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__35054){
var map__35055 = p__35054;
var map__35055__$1 = cljs.core.__destructure_map.call(null,map__35055);
var print_length = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__35055__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__35057 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__35058 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35058);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35059_35063 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35060_35064 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35061_35065 = true;
var _STAR_print_fn_STAR__temp_val__35062_35066 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35061_35065);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35062_35066);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5000__auto__ = typeof value === 'string';
if(and__5000__auto__){
return beautify_strings;
} else {
return and__5000__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35060_35064);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35059_35063);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35057);
}}catch (e35056){if((e35056 instanceof Object)){
var e = e35056;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e35056;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__35067,verbose_QMARK_,current_ns){
var map__35068 = p__35067;
var map__35068__$1 = cljs.core.__destructure_map.call(null,map__35068);
var ns = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var _value = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__35069,opts){
var map__35070 = p__35069;
var map__35070__$1 = cljs.core.__destructure_map.call(null,map__35070);
var args = map__35070__$1;
var _ns = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"_ns","_ns",1411120581));
var _form = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__35071,opts){
var map__35072 = p__35071;
var map__35072__$1 = cljs.core.__destructure_map.call(null,map__35072);
var args = map__35072__$1;
var ns = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var _error = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"_error","_error",-332213735));
var _value = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__35072__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var vec__35073 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__35073,(0),null);
var val = cljs.core.nth.call(null,vec__35073,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__35076){
var map__35077 = p__35076;
var map__35077__$1 = cljs.core.__destructure_map.call(null,map__35077);
var _form = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__35078){
var map__35079 = p__35078;
var map__35079__$1 = cljs.core.__destructure_map.call(null,map__35079);
var foo = map__35079__$1;
var value = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__35079__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__35080){
var map__35081 = p__35080;
var map__35081__$1 = cljs.core.__destructure_map.call(null,map__35081);
var args = map__35081__$1;
var _file = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_file","_file",-267733516));
var _source = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));
var _lang = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_lang","_lang",-796607044));
var _name = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var _path = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_path","_path",157802149));
var _cache = cljs.core.get.call(null,map__35081__$1,new cljs.core.Keyword(null,"_cache","_cache",442382032));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__35082){
var map__35083 = p__35082;
var map__35083__$1 = cljs.core.__destructure_map.call(null,map__35083);
var source = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__35084){
var map__35085 = p__35084;
var map__35085__$1 = cljs.core.__destructure_map.call(null,map__35085);
var static_fns = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
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
var c__22108__auto___35118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35102){
var state_val_35103 = (state_35102[(1)]);
if((state_val_35103 === (1))){
var inst_35086 = cljs.core.PersistentVector.EMPTY;
var inst_35087 = inst_35086;
var state_35102__$1 = (function (){var statearr_35104 = state_35102;
(statearr_35104[(7)] = inst_35087);

return statearr_35104;
})();
var statearr_35105_35119 = state_35102__$1;
(statearr_35105_35119[(2)] = null);

(statearr_35105_35119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (2))){
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35102__$1,(4),c);
} else {
if((state_val_35103 === (3))){
var inst_35100 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35102__$1,inst_35100);
} else {
if((state_val_35103 === (4))){
var inst_35090 = (state_35102[(8)]);
var inst_35090__$1 = (state_35102[(2)]);
var inst_35091 = (inst_35090__$1 == null);
var state_35102__$1 = (function (){var statearr_35106 = state_35102;
(statearr_35106[(8)] = inst_35090__$1);

return statearr_35106;
})();
if(cljs.core.truth_(inst_35091)){
var statearr_35107_35120 = state_35102__$1;
(statearr_35107_35120[(1)] = (5));

} else {
var statearr_35108_35121 = state_35102__$1;
(statearr_35108_35121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (5))){
var inst_35087 = (state_35102[(7)]);
var inst_35093 = cljs.core.async.put_BANG_.call(null,d,inst_35087);
var state_35102__$1 = state_35102;
var statearr_35109_35122 = state_35102__$1;
(statearr_35109_35122[(2)] = inst_35093);

(statearr_35109_35122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (6))){
var inst_35087 = (state_35102[(7)]);
var inst_35090 = (state_35102[(8)]);
var inst_35095 = cljs.core.conj.call(null,inst_35087,inst_35090);
var inst_35087__$1 = inst_35095;
var state_35102__$1 = (function (){var statearr_35110 = state_35102;
(statearr_35110[(7)] = inst_35087__$1);

return statearr_35110;
})();
var statearr_35111_35123 = state_35102__$1;
(statearr_35111_35123[(2)] = null);

(statearr_35111_35123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (7))){
var inst_35098 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35112_35124 = state_35102__$1;
(statearr_35112_35124[(2)] = inst_35098);

(statearr_35112_35124[(1)] = (3));


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
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____0 = (function (){
var statearr_35113 = [null,null,null,null,null,null,null,null,null];
(statearr_35113[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__);

(statearr_35113[(1)] = (1));

return statearr_35113;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____1 = (function (state_35102){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35114){var ex__21987__auto__ = e35114;
var statearr_35115_35125 = state_35102;
(statearr_35115_35125[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35102[(4)]))){
var statearr_35116_35126 = state_35102;
(statearr_35116_35126[(1)] = cljs.core.first.call(null,(state_35102[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35127 = state_35102;
state_35102 = G__35127;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__ = function(state_35102){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____1.call(this,state_35102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35117 = f__22109__auto__.call(null);
(statearr_35117[(6)] = c__22108__auto___35118);

return statearr_35117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__35128){
var map__35129 = p__35128;
var map__35129__$1 = cljs.core.__destructure_map.call(null,map__35129);
var static_fns = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__35130 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__35131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__35131);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35140){
var state_val_35141 = (state_35140[(1)]);
if((state_val_35141 === (1))){
var inst_35132 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_35140__$1 = state_35140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35140__$1,(2),inst_35132);
} else {
if((state_val_35141 === (2))){
var inst_35134 = (state_35140[(2)]);
var inst_35135 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_35136 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_35137 = clojure.string.join.call(null,"",inst_35134);
var inst_35138 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_35137);
var state_35140__$1 = (function (){var statearr_35142 = state_35140;
(statearr_35142[(7)] = inst_35135);

(statearr_35142[(8)] = inst_35136);

return statearr_35142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35140__$1,inst_35138);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____0 = (function (){
var statearr_35143 = [null,null,null,null,null,null,null,null,null];
(statearr_35143[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__);

(statearr_35143[(1)] = (1));

return statearr_35143;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____1 = (function (state_35140){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35144){var ex__21987__auto__ = e35144;
var statearr_35145_35148 = state_35140;
(statearr_35145_35148[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35140[(4)]))){
var statearr_35146_35149 = state_35140;
(statearr_35146_35149[(1)] = cljs.core.first.call(null,(state_35140[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35150 = state_35140;
state_35140 = G__35150;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__ = function(state_35140){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____1.call(this,state_35140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35147 = f__22109__auto__.call(null);
(statearr_35147[(6)] = c__22108__auto__);

return statearr_35147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__35130);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5821__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5821__auto__)){
var ch = temp__5821__auto__;
var G__35151 = cljs.core.conj.call(null,res,ch);
res = G__35151;
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
var _STAR_alias_map_STAR__orig_val__35152 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35153 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35154 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35155 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35156 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35157 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35158 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__35159 = ns;
var _STAR_cljs_ns_STAR__temp_val__35160 = ns;
var _STAR_compiler_STAR__temp_val__35161 = st;
var resolve_symbol_temp_val__35162 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35163 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35158);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35159);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35160);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35161);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35162);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35163);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35157);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35156);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35155);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35154);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35153);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35152);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__35167 = arguments.length;
switch (G__35167) {
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
var _STAR_alias_map_STAR__orig_val__35168 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35169 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35170 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35171 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35172 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35173 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35174 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__35175 = ns;
var _STAR_cljs_ns_STAR__temp_val__35176 = ns;
var _STAR_compiler_STAR__temp_val__35177 = st;
var resolve_symbol_temp_val__35178 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35179 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35174);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35175);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35176);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35177);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35178);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35179);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35173);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35172);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35171);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35170);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35169);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35168);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__35184 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__35184,(0),null);
var rest_s = cljs.core.nth.call(null,vec__35184,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__35187 = rest_s;
var G__35188 = res;
s__$1 = G__35187;
res = G__35188;
continue;
} else {
var G__35189 = rest_s;
var G__35190 = cljs.core.conj.call(null,res,exp);
s__$1 = G__35189;
res = G__35190;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__35191){
var map__35192 = p__35191;
var map__35192__$1 = cljs.core.__destructure_map.call(null,map__35192);
var result_element = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__22108__auto___35305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35270){
var state_val_35271 = (state_35270[(1)]);
if((state_val_35271 === (7))){
var inst_35223 = (state_35270[(7)]);
var inst_35230 = (state_35270[(8)]);
var inst_35230__$1 = cljs.core.nth.call(null,inst_35223,(0),null);
var inst_35231 = cljs.core.nth.call(null,inst_35223,(1),null);
var inst_35232 = cljs.core.seq.call(null,inst_35230__$1);
var state_35270__$1 = (function (){var statearr_35272 = state_35270;
(statearr_35272[(8)] = inst_35230__$1);

(statearr_35272[(9)] = inst_35231);

return statearr_35272;
})();
if(inst_35232){
var statearr_35273_35306 = state_35270__$1;
(statearr_35273_35306[(1)] = (9));

} else {
var statearr_35274_35307 = state_35270__$1;
(statearr_35274_35307[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (1))){
var state_35270__$1 = state_35270;
var statearr_35275_35308 = state_35270__$1;
(statearr_35275_35308[(2)] = null);

(statearr_35275_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (4))){
var inst_35193 = (state_35270[(2)]);
var inst_35194 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_35195 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35196 = [inst_35193];
var inst_35197 = cljs.core.PersistentHashMap.fromArrays(inst_35195,inst_35196);
var inst_35198 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35197);
var inst_35199 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35200 = [inst_35193];
var inst_35201 = cljs.core.PersistentHashMap.fromArrays(inst_35199,inst_35200);
var inst_35202 = klipse_clj.lang.clojure.populate_err.call(null,inst_35201,opts);
var state_35270__$1 = (function (){var statearr_35276 = state_35270;
(statearr_35276[(10)] = inst_35194);

(statearr_35276[(11)] = inst_35198);

return statearr_35276;
})();
var statearr_35277_35309 = state_35270__$1;
(statearr_35277_35309[(2)] = inst_35202);

(statearr_35277_35309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (15))){
var inst_35258 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
var statearr_35278_35310 = state_35270__$1;
(statearr_35278_35310[(2)] = inst_35258);

(statearr_35278_35310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (13))){
var inst_35243 = (state_35270[(12)]);
var inst_35246 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_35247 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35243);
var inst_35248 = klipse_clj.lang.clojure.populate_err.call(null,inst_35243,opts);
var state_35270__$1 = (function (){var statearr_35279 = state_35270;
(statearr_35279[(13)] = inst_35246);

(statearr_35279[(14)] = inst_35247);

return statearr_35279;
})();
var statearr_35280_35311 = state_35270__$1;
(statearr_35280_35311[(2)] = inst_35248);

(statearr_35280_35311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (6))){
var inst_35210 = (state_35270[(2)]);
var inst_35218 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35219 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35220 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35218,inst_35219);
var inst_35221 = cljs.core.nth.call(null,inst_35220,(0),null);
var inst_35222 = cljs.core.nth.call(null,inst_35220,(1),null);
var inst_35223 = inst_35220;
var inst_35224 = null;
var inst_35225 = "";
var state_35270__$1 = (function (){var statearr_35281 = state_35270;
(statearr_35281[(15)] = inst_35210);

(statearr_35281[(16)] = inst_35221);

(statearr_35281[(17)] = inst_35222);

(statearr_35281[(7)] = inst_35223);

(statearr_35281[(18)] = inst_35224);

(statearr_35281[(19)] = inst_35225);

return statearr_35281;
})();
var statearr_35282_35312 = state_35270__$1;
(statearr_35282_35312[(2)] = null);

(statearr_35282_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (3))){
var inst_35268 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
} else {
if((state_val_35271 === (12))){
var inst_35243 = (state_35270[(12)]);
var inst_35243__$1 = (state_35270[(2)]);
var inst_35244 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35243__$1);
var state_35270__$1 = (function (){var statearr_35283 = state_35270;
(statearr_35283[(12)] = inst_35243__$1);

return statearr_35283;
})();
if(cljs.core.truth_(inst_35244)){
var statearr_35284_35313 = state_35270__$1;
(statearr_35284_35313[(1)] = (13));

} else {
var statearr_35285_35314 = state_35270__$1;
(statearr_35285_35314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (2))){
var _ = (function (){var statearr_35286 = state_35270;
(statearr_35286[(4)] = cljs.core.cons.call(null,(5),(state_35270[(4)])));

return statearr_35286;
})();
var inst_35208 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(6),inst_35208);
} else {
if((state_val_35271 === (11))){
var inst_35263 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
var statearr_35288_35315 = state_35270__$1;
(statearr_35288_35315[(2)] = inst_35263);

(statearr_35288_35315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (9))){
var inst_35230 = (state_35270[(8)]);
var inst_35237 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35238 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_35237,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_35239 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35230,inst_35238);
var inst_35240 = cljs.core.nth.call(null,inst_35239,(0),null);
var inst_35241 = cljs.core.nth.call(null,inst_35239,(1),null);
var state_35270__$1 = (function (){var statearr_35289 = state_35270;
(statearr_35289[(20)] = inst_35241);

return statearr_35289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(12),inst_35240);
} else {
if((state_val_35271 === (5))){
var _ = (function (){var statearr_35290 = state_35270;
(statearr_35290[(4)] = cljs.core.rest.call(null,(state_35270[(4)])));

return statearr_35290;
})();
var state_35270__$1 = state_35270;
var ex35287 = (state_35270__$1[(2)]);
var statearr_35291_35316 = state_35270__$1;
(statearr_35291_35316[(5)] = ex35287);


if((ex35287 instanceof Object)){
var statearr_35292_35317 = state_35270__$1;
(statearr_35292_35317[(1)] = (4));

(statearr_35292_35317[(5)] = null);

} else {
throw ex35287;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (14))){
var inst_35231 = (state_35270[(9)]);
var inst_35241 = (state_35270[(20)]);
var inst_35250 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35251 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35252 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_35231,inst_35250,inst_35251);
var state_35270__$1 = (function (){var statearr_35293 = state_35270;
(statearr_35293[(21)] = inst_35252);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(16),inst_35241);
} else {
if((state_val_35271 === (16))){
var inst_35225 = (state_35270[(19)]);
var inst_35252 = (state_35270[(21)]);
var inst_35243 = (state_35270[(12)]);
var inst_35254 = (state_35270[(2)]);
var inst_35255 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35225),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35254)].join('');
var inst_35223 = inst_35252;
var inst_35224 = inst_35243;
var inst_35225__$1 = inst_35255;
var state_35270__$1 = (function (){var statearr_35294 = state_35270;
(statearr_35294[(7)] = inst_35223);

(statearr_35294[(18)] = inst_35224);

(statearr_35294[(19)] = inst_35225__$1);

return statearr_35294;
})();
var statearr_35295_35318 = state_35270__$1;
(statearr_35295_35318[(2)] = null);

(statearr_35295_35318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (10))){
var inst_35225 = (state_35270[(19)]);
var inst_35224 = (state_35270[(18)]);
var inst_35260 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_35225);
var inst_35261 = cljs.core.async.put_BANG_.call(null,res_chan,inst_35224);
var state_35270__$1 = (function (){var statearr_35296 = state_35270;
(statearr_35296[(22)] = inst_35260);

return statearr_35296;
})();
var statearr_35297_35319 = state_35270__$1;
(statearr_35297_35319[(2)] = inst_35261);

(statearr_35297_35319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (8))){
var inst_35265 = (state_35270[(2)]);
var _ = (function (){var statearr_35298 = state_35270;
(statearr_35298[(4)] = cljs.core.rest.call(null,(state_35270[(4)])));

return statearr_35298;
})();
var state_35270__$1 = state_35270;
var statearr_35299_35320 = state_35270__$1;
(statearr_35299_35320[(2)] = inst_35265);

(statearr_35299_35320[(1)] = (3));


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
var klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____0 = (function (){
var statearr_35300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35300[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__);

(statearr_35300[(1)] = (1));

return statearr_35300;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____1 = (function (state_35270){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35301){var ex__21987__auto__ = e35301;
var statearr_35302_35321 = state_35270;
(statearr_35302_35321[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35270[(4)]))){
var statearr_35303_35322 = state_35270;
(statearr_35303_35322[(1)] = cljs.core.first.call(null,(state_35270[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35323 = state_35270;
state_35270 = G__35323;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35304 = f__22109__auto__.call(null);
(statearr_35304[(6)] = c__22108__auto___35305);

return statearr_35304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35383){
var state_val_35384 = (state_35383[(1)]);
if((state_val_35384 === (7))){
var inst_35378 = (state_35383[(2)]);
var _ = (function (){var statearr_35385 = state_35383;
(statearr_35385[(4)] = cljs.core.rest.call(null,(state_35383[(4)])));

return statearr_35385;
})();
var state_35383__$1 = state_35383;
var statearr_35386_35413 = state_35383__$1;
(statearr_35386_35413[(2)] = inst_35378);

(statearr_35386_35413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (1))){
var state_35383__$1 = state_35383;
var statearr_35387_35414 = state_35383__$1;
(statearr_35387_35414[(2)] = null);

(statearr_35387_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (4))){
var inst_35324 = (state_35383[(2)]);
var inst_35325 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35326 = [inst_35324];
var inst_35327 = cljs.core.PersistentHashMap.fromArrays(inst_35325,inst_35326);
var state_35383__$1 = state_35383;
var statearr_35388_35415 = state_35383__$1;
(statearr_35388_35415[(2)] = inst_35327);

(statearr_35388_35415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (13))){
var inst_35352 = (state_35383[(7)]);
var inst_35359 = (state_35383[(8)]);
var inst_35346 = (state_35383[(9)]);
var inst_35363 = klipse_clj.repl.create_state_compile.call(null);
var inst_35364 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_35365 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_35352,inst_35363,inst_35364);
var inst_35366 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_35359);
var inst_35367 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35346),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35366)].join('');
var inst_35345 = inst_35365;
var inst_35346__$1 = inst_35367;
var state_35383__$1 = (function (){var statearr_35389 = state_35383;
(statearr_35389[(10)] = inst_35345);

(statearr_35389[(9)] = inst_35346__$1);

return statearr_35389;
})();
var statearr_35390_35416 = state_35383__$1;
(statearr_35390_35416[(2)] = null);

(statearr_35390_35416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (6))){
var inst_35345 = (state_35383[(10)]);
var inst_35351 = (state_35383[(11)]);
var inst_35351__$1 = cljs.core.nth.call(null,inst_35345,(0),null);
var inst_35352 = cljs.core.nth.call(null,inst_35345,(1),null);
var inst_35353 = cljs.core.seq.call(null,inst_35351__$1);
var state_35383__$1 = (function (){var statearr_35391 = state_35383;
(statearr_35391[(11)] = inst_35351__$1);

(statearr_35391[(7)] = inst_35352);

return statearr_35391;
})();
if(inst_35353){
var statearr_35392_35417 = state_35383__$1;
(statearr_35392_35417[(1)] = (8));

} else {
var statearr_35393_35418 = state_35383__$1;
(statearr_35393_35418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (3))){
var inst_35381 = (state_35383[(2)]);
var state_35383__$1 = state_35383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35383__$1,inst_35381);
} else {
if((state_val_35384 === (12))){
var inst_35359 = (state_35383[(8)]);
var state_35383__$1 = state_35383;
var statearr_35394_35419 = state_35383__$1;
(statearr_35394_35419[(2)] = inst_35359);

(statearr_35394_35419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (2))){
var _ = (function (){var statearr_35395 = state_35383;
(statearr_35395[(4)] = cljs.core.cons.call(null,(5),(state_35383[(4)])));

return statearr_35395;
})();
var inst_35340 = klipse_clj.repl.create_state_compile.call(null);
var inst_35341 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_35342 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35340,inst_35341);
var inst_35343 = cljs.core.nth.call(null,inst_35342,(0),null);
var inst_35344 = cljs.core.nth.call(null,inst_35342,(1),null);
var inst_35345 = inst_35342;
var inst_35346 = "";
var state_35383__$1 = (function (){var statearr_35396 = state_35383;
(statearr_35396[(12)] = inst_35343);

(statearr_35396[(13)] = inst_35344);

(statearr_35396[(10)] = inst_35345);

(statearr_35396[(9)] = inst_35346);

return statearr_35396;
})();
var statearr_35397_35420 = state_35383__$1;
(statearr_35397_35420[(2)] = null);

(statearr_35397_35420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (11))){
var inst_35359 = (state_35383[(8)]);
var inst_35359__$1 = (state_35383[(2)]);
var inst_35360 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35359__$1);
var state_35383__$1 = (function (){var statearr_35399 = state_35383;
(statearr_35399[(8)] = inst_35359__$1);

return statearr_35399;
})();
if(cljs.core.truth_(inst_35360)){
var statearr_35400_35421 = state_35383__$1;
(statearr_35400_35421[(1)] = (12));

} else {
var statearr_35401_35422 = state_35383__$1;
(statearr_35401_35422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (9))){
var inst_35346 = (state_35383[(9)]);
var inst_35372 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_35373 = [inst_35346];
var inst_35374 = cljs.core.PersistentHashMap.fromArrays(inst_35372,inst_35373);
var state_35383__$1 = state_35383;
var statearr_35402_35423 = state_35383__$1;
(statearr_35402_35423[(2)] = inst_35374);

(statearr_35402_35423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (5))){
var _ = (function (){var statearr_35403 = state_35383;
(statearr_35403[(4)] = cljs.core.rest.call(null,(state_35383[(4)])));

return statearr_35403;
})();
var state_35383__$1 = state_35383;
var ex35398 = (state_35383__$1[(2)]);
var statearr_35404_35424 = state_35383__$1;
(statearr_35404_35424[(5)] = ex35398);


if((ex35398 instanceof Object)){
var statearr_35405_35425 = state_35383__$1;
(statearr_35405_35425[(1)] = (4));

(statearr_35405_35425[(5)] = null);

} else {
throw ex35398;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (14))){
var inst_35370 = (state_35383[(2)]);
var state_35383__$1 = state_35383;
var statearr_35406_35426 = state_35383__$1;
(statearr_35406_35426[(2)] = inst_35370);

(statearr_35406_35426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (10))){
var inst_35376 = (state_35383[(2)]);
var state_35383__$1 = state_35383;
var statearr_35407_35427 = state_35383__$1;
(statearr_35407_35427[(2)] = inst_35376);

(statearr_35407_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35384 === (8))){
var inst_35351 = (state_35383[(11)]);
var inst_35355 = klipse_clj.repl.create_state_compile.call(null);
var inst_35356 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_35355,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_35357 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_35351,inst_35356);
var state_35383__$1 = state_35383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35383__$1,(11),inst_35357);
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
var klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____0 = (function (){
var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35408[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__);

(statearr_35408[(1)] = (1));

return statearr_35408;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____1 = (function (state_35383){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35409){var ex__21987__auto__ = e35409;
var statearr_35410_35428 = state_35383;
(statearr_35410_35428[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35383[(4)]))){
var statearr_35411_35429 = state_35383;
(statearr_35411_35429[(1)] = cljs.core.first.call(null,(state_35383[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35430 = state_35383;
state_35383 = G__35430;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__ = function(state_35383){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____1.call(this,state_35383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35412 = f__22109__auto__.call(null);
(statearr_35412[(6)] = c__22108__auto__);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35446){
var state_val_35447 = (state_35446[(1)]);
if((state_val_35447 === (1))){
var inst_35434 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_35435 = cljs.core.nth.call(null,inst_35434,(0),null);
var inst_35436 = cljs.core.nth.call(null,inst_35434,(1),null);
var state_35446__$1 = (function (){var statearr_35448 = state_35446;
(statearr_35448[(7)] = inst_35436);

return statearr_35448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35446__$1,(2),inst_35435);
} else {
if((state_val_35447 === (2))){
var inst_35436 = (state_35446[(7)]);
var inst_35438 = (state_35446[(2)]);
var inst_35439 = klipse_clj.lang.clojure.result_as_str.call(null,inst_35438,opts);
var state_35446__$1 = (function (){var statearr_35449 = state_35446;
(statearr_35449[(8)] = inst_35439);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35446__$1,(3),inst_35436);
} else {
if((state_val_35447 === (3))){
var inst_35439 = (state_35446[(8)]);
var inst_35441 = (state_35446[(2)]);
var inst_35442 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_35443 = [inst_35441,inst_35439];
var inst_35444 = cljs.core.PersistentHashMap.fromArrays(inst_35442,inst_35443);
var state_35446__$1 = state_35446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35446__$1,inst_35444);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____0 = (function (){
var statearr_35450 = [null,null,null,null,null,null,null,null,null];
(statearr_35450[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__);

(statearr_35450[(1)] = (1));

return statearr_35450;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____1 = (function (state_35446){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35451){var ex__21987__auto__ = e35451;
var statearr_35452_35455 = state_35446;
(statearr_35452_35455[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35446[(4)]))){
var statearr_35453_35456 = state_35446;
(statearr_35453_35456[(1)] = cljs.core.first.call(null,(state_35446[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35457 = state_35446;
state_35446 = G__35457;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__ = function(state_35446){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____1.call(this,state_35446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35454 = f__22109__auto__.call(null);
(statearr_35454[(6)] = c__22108__auto__);

return statearr_35454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35470){
var state_val_35471 = (state_35470[(1)]);
if((state_val_35471 === (1))){
var inst_35461 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_35462 = cljs.core.nth.call(null,inst_35461,(0),null);
var inst_35463 = cljs.core.nth.call(null,inst_35461,(1),null);
var state_35470__$1 = (function (){var statearr_35472 = state_35470;
(statearr_35472[(7)] = inst_35463);

return statearr_35472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35470__$1,(2),inst_35462);
} else {
if((state_val_35471 === (2))){
var inst_35463 = (state_35470[(7)]);
var inst_35465 = (state_35470[(2)]);
var inst_35466 = klipse_clj.lang.clojure.result_as_str.call(null,inst_35465,opts);
var state_35470__$1 = (function (){var statearr_35473 = state_35470;
(statearr_35473[(8)] = inst_35466);

return statearr_35473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35470__$1,(3),inst_35463);
} else {
if((state_val_35471 === (3))){
var inst_35466 = (state_35470[(8)]);
var inst_35468 = (state_35470[(2)]);
var state_35470__$1 = (function (){var statearr_35474 = state_35470;
(statearr_35474[(9)] = inst_35468);

return statearr_35474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35470__$1,inst_35466);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____1 = (function (state_35470){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35476){var ex__21987__auto__ = e35476;
var statearr_35477_35480 = state_35470;
(statearr_35477_35480[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35470[(4)]))){
var statearr_35478_35481 = state_35470;
(statearr_35478_35481[(1)] = cljs.core.first.call(null,(state_35470[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35482 = state_35470;
state_35470 = G__35482;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__ = function(state_35470){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____1.call(this,state_35470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35479 = f__22109__auto__.call(null);
(statearr_35479[(6)] = c__22108__auto__);

return statearr_35479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__35484 = arguments.length;
switch (G__35484) {
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
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35491){
var state_val_35492 = (state_35491[(1)]);
if((state_val_35492 === (1))){
var inst_35485 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_35486 = cljs.core.first.call(null,inst_35485);
var state_35491__$1 = state_35491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35491__$1,(2),inst_35486);
} else {
if((state_val_35492 === (2))){
var inst_35488 = (state_35491[(2)]);
var inst_35489 = klipse_clj.lang.clojure.read_result.call(null,inst_35488);
var state_35491__$1 = state_35491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35491__$1,inst_35489);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21984__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null];
(statearr_35493[(0)] = klipse_clj$lang$clojure$state_machine__21984__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var klipse_clj$lang$clojure$state_machine__21984__auto____1 = (function (state_35491){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35494){var ex__21987__auto__ = e35494;
var statearr_35495_35499 = state_35491;
(statearr_35495_35499[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35491[(4)]))){
var statearr_35496_35500 = state_35491;
(statearr_35496_35500[(1)] = cljs.core.first.call(null,(state_35491[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35501 = state_35491;
state_35491 = G__35501;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21984__auto__ = function(state_35491){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21984__auto____1.call(this,state_35491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21984__auto____0;
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35497 = f__22109__auto__.call(null);
(statearr_35497[(6)] = c__22108__auto__);

return statearr_35497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
}));

(klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2);

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35508){
var state_val_35509 = (state_35508[(1)]);
if((state_val_35509 === (1))){
var inst_35502 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_35508__$1 = state_35508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35508__$1,(2),inst_35502);
} else {
if((state_val_35509 === (2))){
var inst_35504 = (state_35508[(2)]);
var inst_35505 = cljs.core.clj__GT_js.call(null,inst_35504);
var inst_35506 = cb.call(null,inst_35505);
var state_35508__$1 = state_35508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35508__$1,inst_35506);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____0 = (function (){
var statearr_35510 = [null,null,null,null,null,null,null];
(statearr_35510[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__);

(statearr_35510[(1)] = (1));

return statearr_35510;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____1 = (function (state_35508){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35511){var ex__21987__auto__ = e35511;
var statearr_35512_35515 = state_35508;
(statearr_35512_35515[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35508[(4)]))){
var statearr_35513_35516 = state_35508;
(statearr_35513_35516[(1)] = cljs.core.first.call(null,(state_35508[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35508;
state_35508 = G__35517;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__ = function(state_35508){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____1.call(this,state_35508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35514 = f__22109__auto__.call(null);
(statearr_35514[(6)] = c__22108__auto__);

return statearr_35514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__35519 = arguments.length;
switch (G__35519) {
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
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35525){
var state_val_35526 = (state_35525[(1)]);
if((state_val_35526 === (1))){
var inst_35520 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35525__$1,(2),inst_35520);
} else {
if((state_val_35526 === (2))){
var inst_35522 = (state_35525[(2)]);
var inst_35523 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_35522);
var state_35525__$1 = state_35525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35525__$1,inst_35523);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21984__auto____0 = (function (){
var statearr_35527 = [null,null,null,null,null,null,null];
(statearr_35527[(0)] = klipse_clj$lang$clojure$state_machine__21984__auto__);

(statearr_35527[(1)] = (1));

return statearr_35527;
});
var klipse_clj$lang$clojure$state_machine__21984__auto____1 = (function (state_35525){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35528){var ex__21987__auto__ = e35528;
var statearr_35529_35533 = state_35525;
(statearr_35529_35533[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35525[(4)]))){
var statearr_35530_35534 = state_35525;
(statearr_35530_35534[(1)] = cljs.core.first.call(null,(state_35525[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35535 = state_35525;
state_35525 = G__35535;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21984__auto__ = function(state_35525){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21984__auto____1.call(this,state_35525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21984__auto____0;
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35531 = f__22109__auto__.call(null);
(statearr_35531[(6)] = c__22108__auto__);

return statearr_35531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35541){
var state_val_35542 = (state_35541[(1)]);
if((state_val_35542 === (1))){
var inst_35536 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,(2),inst_35536);
} else {
if((state_val_35542 === (2))){
var inst_35538 = (state_35541[(2)]);
var inst_35539 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_35538);
var state_35541__$1 = state_35541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____0 = (function (){
var statearr_35543 = [null,null,null,null,null,null,null];
(statearr_35543[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__);

(statearr_35543[(1)] = (1));

return statearr_35543;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____1 = (function (state_35541){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35544){var ex__21987__auto__ = e35544;
var statearr_35545_35548 = state_35541;
(statearr_35545_35548[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35541[(4)]))){
var statearr_35546_35549 = state_35541;
(statearr_35546_35549[(1)] = cljs.core.first.call(null,(state_35541[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_35541;
state_35541 = G__35550;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35547 = f__22109__auto__.call(null);
(statearr_35547[(6)] = c__22108__auto__);

return statearr_35547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (1))){
var inst_35551 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(2),inst_35551);
} else {
if((state_val_35558 === (2))){
var inst_35553 = (state_35557[(2)]);
var inst_35554 = cljs.core.second.call(null,inst_35553);
var inst_35555 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35554);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____0 = (function (){
var statearr_35559 = [null,null,null,null,null,null,null];
(statearr_35559[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__);

(statearr_35559[(1)] = (1));

return statearr_35559;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____1 = (function (state_35557){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35560){var ex__21987__auto__ = e35560;
var statearr_35561_35564 = state_35557;
(statearr_35561_35564[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35557[(4)]))){
var statearr_35562_35565 = state_35557;
(statearr_35562_35565[(1)] = cljs.core.first.call(null,(state_35557[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35566 = state_35557;
state_35557 = G__35566;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35563 = f__22109__auto__.call(null);
(statearr_35563[(6)] = c__22108__auto__);

return statearr_35563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__35568){
var map__35569 = p__35568;
var map__35569__$1 = cljs.core.__destructure_map.call(null,map__35569);
var opts = map__35569__$1;
var container_id = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__35569__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__22108__auto___35642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35615){
var state_val_35616 = (state_35615[(1)]);
if((state_val_35616 === (7))){
var inst_35583 = (state_35615[(7)]);
var inst_35584 = (state_35615[(8)]);
var inst_35578 = (state_35615[(2)]);
var inst_35583__$1 = cljs.core._STAR_print_newline_STAR_;
var inst_35584__$1 = cljs.core._STAR_print_fn_STAR_;
var inst_35585 = (function (){var _STAR_print_newline_STAR__orig_val__35579 = inst_35583__$1;
var _STAR_print_fn_STAR__orig_val__35580 = inst_35584__$1;
var _STAR_print_newline_STAR__temp_val__35581 = true;
return (function (p1__35567_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35567_SHARP_);
});
})();
var inst_35586 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_35587 = (cljs.core._STAR_print_fn_STAR_ = inst_35585);
var state_35615__$1 = (function (){var statearr_35617 = state_35615;
(statearr_35617[(9)] = inst_35578);

(statearr_35617[(7)] = inst_35583__$1);

(statearr_35617[(8)] = inst_35584__$1);

(statearr_35617[(10)] = inst_35586);

(statearr_35617[(11)] = inst_35587);

return statearr_35617;
})();
var statearr_35618_35643 = state_35615__$1;
(statearr_35618_35643[(2)] = null);

(statearr_35618_35643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (1))){
var inst_35570 = clojure.string.blank_QMARK_.call(null,exp);
var state_35615__$1 = state_35615;
if(inst_35570){
var statearr_35619_35644 = state_35615__$1;
(statearr_35619_35644[(1)] = (2));

} else {
var statearr_35620_35645 = state_35615__$1;
(statearr_35620_35645[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (4))){
var inst_35613 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35615__$1,inst_35613);
} else {
if((state_val_35616 === (6))){
var state_35615__$1 = state_35615;
var statearr_35621_35646 = state_35615__$1;
(statearr_35621_35646[(2)] = null);

(statearr_35621_35646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (3))){
var state_35615__$1 = state_35615;
if(cljs.core.truth_(setup_container_fn)){
var statearr_35622_35647 = state_35615__$1;
(statearr_35622_35647[(1)] = (5));

} else {
var statearr_35623_35648 = state_35615__$1;
(statearr_35623_35648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (12))){
var inst_35602 = (state_35615[(2)]);
var inst_35603 = cljs.core.__destructure_map.call(null,inst_35602);
var inst_35604 = cljs.core.get.call(null,inst_35603,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_35605 = cljs.core.get.call(null,inst_35603,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_35606 = cljs.core.second.call(null,inst_35605);
var inst_35607 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35604),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35606)].join('');
var inst_35608 = cljs.core.async.put_BANG_.call(null,c,inst_35607);
var _ = (function (){var statearr_35625 = state_35615;
(statearr_35625[(4)] = cljs.core.rest.call(null,(state_35615[(4)])));

return statearr_35625;
})();
var state_35615__$1 = state_35615;
var statearr_35626_35649 = state_35615__$1;
(statearr_35626_35649[(2)] = inst_35608);

(statearr_35626_35649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (2))){
var inst_35572 = cljs.core.async.put_BANG_.call(null,c,"");
var state_35615__$1 = state_35615;
var statearr_35627_35650 = state_35615__$1;
(statearr_35627_35650[(2)] = inst_35572);

(statearr_35627_35650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (11))){
var _ = (function (){var statearr_35628 = state_35615;
(statearr_35628[(4)] = cljs.core.rest.call(null,(state_35615[(4)])));

return statearr_35628;
})();
var state_35615__$1 = state_35615;
var ex35624 = (state_35615__$1[(2)]);
var statearr_35629_35651 = state_35615__$1;
(statearr_35629_35651[(5)] = ex35624);


throw ex35624;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (9))){
var inst_35611 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35630_35652 = state_35615__$1;
(statearr_35630_35652[(2)] = inst_35611);

(statearr_35630_35652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (5))){
var inst_35575 = setup_container_fn.call(null,container_id);
var state_35615__$1 = state_35615;
var statearr_35631_35653 = state_35615__$1;
(statearr_35631_35653[(2)] = inst_35575);

(statearr_35631_35653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (10))){
var inst_35584 = (state_35615[(8)]);
var inst_35583 = (state_35615[(7)]);
var _ = (function (){var statearr_35632 = state_35615;
(statearr_35632[(4)] = cljs.core.rest.call(null,(state_35615[(4)])));

return statearr_35632;
})();
var inst_35589 = (state_35615[(2)]);
var inst_35590 = (cljs.core._STAR_print_fn_STAR_ = inst_35584);
var inst_35591 = (cljs.core._STAR_print_newline_STAR_ = inst_35583);
var ___$1 = (function (){var temp__5823__auto__ = (state_35615[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21216__auto__ = temp__5823__auto__;
throw e__21216__auto__;
} else {
return null;
}
})();
var state_35615__$1 = (function (){var statearr_35633 = state_35615;
(statearr_35633[(12)] = inst_35590);

(statearr_35633[(13)] = inst_35591);

return statearr_35633;
})();
var statearr_35634_35654 = state_35615__$1;
(statearr_35634_35654[(2)] = inst_35589);

(statearr_35634_35654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (8))){
var _ = (function (){var statearr_35635 = state_35615;
(statearr_35635[(4)] = cljs.core.cons.call(null,(10),(state_35615[(4)])));

return statearr_35635;
})();
var ___$1 = (function (){var statearr_35636 = state_35615;
(statearr_35636[(4)] = cljs.core.cons.call(null,(11),(state_35615[(4)])));

return statearr_35636;
})();
var inst_35600 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(12),inst_35600);
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
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____0 = (function (){
var statearr_35637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35637[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__);

(statearr_35637[(1)] = (1));

return statearr_35637;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____1 = (function (state_35615){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35638){var ex__21987__auto__ = e35638;
var statearr_35639_35655 = state_35615;
(statearr_35639_35655[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35615[(4)]))){
var statearr_35640_35656 = state_35615;
(statearr_35640_35656[(1)] = cljs.core.first.call(null,(state_35615[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35657 = state_35615;
state_35615 = G__35657;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35641 = f__22109__auto__.call(null);
(statearr_35641[(6)] = c__22108__auto___35642);

return statearr_35641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return c;
});
/**
 * Returns a promise with the result of the evaluation of exp
 */
klipse_clj.lang.clojure.str_eval_prom = (function klipse_clj$lang$clojure$str_eval_prom(exp,p__35659){
var map__35660 = p__35659;
var map__35660__$1 = cljs.core.__destructure_map.call(null,map__35660);
var opts = map__35660__$1;
var verbose = cljs.core.get.call(null,map__35660__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var p = (new Promise((function (resolve,reject){
if(cljs.core.truth_(verbose)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35713){
var state_val_35714 = (state_35713[(1)]);
if((state_val_35714 === (7))){
var inst_35667 = (state_35713[(7)]);
var _ = (function (){var statearr_35715 = state_35713;
(statearr_35715[(4)] = cljs.core.rest.call(null,(state_35713[(4)])));

return statearr_35715;
})();
var inst_35670 = (state_35713[(2)]);
var inst_35671 = (cljs.core._STAR_print_newline_STAR_ = inst_35667);
var ___$1 = (function (){var temp__5823__auto__ = (state_35713[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21216__auto__ = temp__5823__auto__;
throw e__21216__auto__;
} else {
return null;
}
})();
var state_35713__$1 = (function (){var statearr_35716 = state_35713;
(statearr_35716[(8)] = inst_35671);

return statearr_35716;
})();
var statearr_35717_35751 = state_35713__$1;
(statearr_35717_35751[(2)] = inst_35670);

(statearr_35717_35751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (1))){
var inst_35661 = clojure.string.blank_QMARK_.call(null,exp);
var state_35713__$1 = state_35713;
if(inst_35661){
var statearr_35718_35752 = state_35713__$1;
(statearr_35718_35752[(1)] = (2));

} else {
var statearr_35719_35753 = state_35713__$1;
(statearr_35719_35753[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (4))){
var inst_35711 = (state_35713[(2)]);
var state_35713__$1 = state_35713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35713__$1,inst_35711);
} else {
if((state_val_35714 === (15))){
var inst_35696 = (state_35713[(2)]);
var state_35713__$1 = (function (){var statearr_35720 = state_35713;
(statearr_35720[(9)] = inst_35696);

return statearr_35720;
})();
if(cljs.core.truth_(verbose)){
var statearr_35721_35754 = state_35713__$1;
(statearr_35721_35754[(1)] = (16));

} else {
var statearr_35722_35755 = state_35713__$1;
(statearr_35722_35755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (13))){
var inst_35684 = (state_35713[(10)]);
var inst_35693 = console.warn(inst_35684);
var state_35713__$1 = state_35713;
var statearr_35723_35756 = state_35713__$1;
(statearr_35723_35756[(2)] = inst_35693);

(statearr_35723_35756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (6))){
var inst_35709 = (state_35713[(2)]);
var state_35713__$1 = state_35713;
var statearr_35724_35757 = state_35713__$1;
(statearr_35724_35757[(2)] = inst_35709);

(statearr_35724_35757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (17))){
var state_35713__$1 = state_35713;
var statearr_35725_35758 = state_35713__$1;
(statearr_35725_35758[(2)] = null);

(statearr_35725_35758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (3))){
var inst_35667 = cljs.core._STAR_print_newline_STAR_;
var inst_35668 = (cljs.core._STAR_print_newline_STAR_ = false);
var state_35713__$1 = (function (){var statearr_35726 = state_35713;
(statearr_35726[(7)] = inst_35667);

(statearr_35726[(11)] = inst_35668);

return statearr_35726;
})();
var statearr_35727_35759 = state_35713__$1;
(statearr_35727_35759[(2)] = null);

(statearr_35727_35759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (12))){
var inst_35706 = (state_35713[(2)]);
var _ = (function (){var statearr_35728 = state_35713;
(statearr_35728[(4)] = cljs.core.rest.call(null,(state_35713[(4)])));

return statearr_35728;
})();
var state_35713__$1 = state_35713;
var statearr_35729_35760 = state_35713__$1;
(statearr_35729_35760[(2)] = inst_35706);

(statearr_35729_35760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (2))){
var inst_35663 = resolve.call(null,"");
var state_35713__$1 = state_35713;
var statearr_35730_35761 = state_35713__$1;
(statearr_35730_35761[(2)] = inst_35663);

(statearr_35730_35761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (11))){
var inst_35684 = (state_35713[(10)]);
var state_35713__$1 = state_35713;
if(cljs.core.truth_(inst_35684)){
var statearr_35731_35762 = state_35713__$1;
(statearr_35731_35762[(1)] = (13));

} else {
var statearr_35732_35763 = state_35713__$1;
(statearr_35732_35763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (9))){
var inst_35685 = (state_35713[(12)]);
var inst_35682 = (state_35713[(2)]);
var inst_35683 = cljs.core.__destructure_map.call(null,inst_35682);
var inst_35684 = cljs.core.get.call(null,inst_35683,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_35685__$1 = cljs.core.get.call(null,inst_35683,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_35686 = cljs.core.first.call(null,inst_35685__$1);
var inst_35687 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_35686);
var state_35713__$1 = (function (){var statearr_35733 = state_35713;
(statearr_35733[(10)] = inst_35684);

(statearr_35733[(12)] = inst_35685__$1);

return statearr_35733;
})();
if(inst_35687){
var statearr_35734_35764 = state_35713__$1;
(statearr_35734_35764[(1)] = (10));

} else {
var statearr_35735_35765 = state_35713__$1;
(statearr_35735_35765[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (5))){
var _ = (function (){var statearr_35736 = state_35713;
(statearr_35736[(4)] = cljs.core.cons.call(null,(7),(state_35713[(4)])));

return statearr_35736;
})();
var ___$1 = (function (){var statearr_35737 = state_35713;
(statearr_35737[(4)] = cljs.core.cons.call(null,(8),(state_35713[(4)])));

return statearr_35737;
})();
var inst_35680 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_35713__$1 = state_35713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35713__$1,(9),inst_35680);
} else {
if((state_val_35714 === (14))){
var state_35713__$1 = state_35713;
var statearr_35738_35766 = state_35713__$1;
(statearr_35738_35766[(2)] = null);

(statearr_35738_35766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (16))){
var inst_35698 = console.info("[clojure] evaluated",exp);
var state_35713__$1 = state_35713;
var statearr_35739_35767 = state_35713__$1;
(statearr_35739_35767[(2)] = inst_35698);

(statearr_35739_35767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (10))){
var inst_35685 = (state_35713[(12)]);
var inst_35689 = cljs.core.second.call(null,inst_35685);
var inst_35690 = reject.call(null,inst_35689);
var state_35713__$1 = state_35713;
var statearr_35741_35768 = state_35713__$1;
(statearr_35741_35768[(2)] = inst_35690);

(statearr_35741_35768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (18))){
var inst_35685 = (state_35713[(12)]);
var inst_35701 = (state_35713[(2)]);
var inst_35702 = cljs.core.second.call(null,inst_35685);
var inst_35703 = clojure.string.trim_newline.call(null,inst_35702);
var inst_35704 = resolve.call(null,inst_35703);
var state_35713__$1 = (function (){var statearr_35742 = state_35713;
(statearr_35742[(13)] = inst_35701);

return statearr_35742;
})();
var statearr_35743_35769 = state_35713__$1;
(statearr_35743_35769[(2)] = inst_35704);

(statearr_35743_35769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35714 === (8))){
var _ = (function (){var statearr_35744 = state_35713;
(statearr_35744[(4)] = cljs.core.rest.call(null,(state_35713[(4)])));

return statearr_35744;
})();
var state_35713__$1 = state_35713;
var ex35740 = (state_35713__$1[(2)]);
var statearr_35745_35770 = state_35713__$1;
(statearr_35745_35770[(5)] = ex35740);


throw ex35740;


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
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____0 = (function (){
var statearr_35746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35746[(0)] = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__);

(statearr_35746[(1)] = (1));

return statearr_35746;
});
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____1 = (function (state_35713){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35747){var ex__21987__auto__ = e35747;
var statearr_35748_35771 = state_35713;
(statearr_35748_35771[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35713[(4)]))){
var statearr_35749_35772 = state_35713;
(statearr_35749_35772[(1)] = cljs.core.first.call(null,(state_35713[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35773 = state_35713;
state_35713 = G__35773;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__ = function(state_35713){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____1.call(this,state_35713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35750 = f__22109__auto__.call(null);
(statearr_35750[(6)] = c__22108__auto__);

return statearr_35750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
})));
return p;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__35775 = arguments.length;
switch (G__35775) {
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
var c__22108__auto___35821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_35801){
var state_val_35802 = (state_35801[(1)]);
if((state_val_35802 === (1))){
var inst_35778 = (state_35801[(7)]);
var inst_35778__$1 = cljs.core._STAR_print_fn_STAR_;
var inst_35779 = (function (){var _STAR_print_fn_STAR__orig_val__35776 = inst_35778__$1;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_35780 = (cljs.core._STAR_print_fn_STAR_ = inst_35779);
var state_35801__$1 = (function (){var statearr_35803 = state_35801;
(statearr_35803[(7)] = inst_35778__$1);

(statearr_35803[(8)] = inst_35780);

return statearr_35803;
})();
var statearr_35804_35822 = state_35801__$1;
(statearr_35804_35822[(2)] = null);

(statearr_35804_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (2))){
var _ = (function (){var statearr_35805 = state_35801;
(statearr_35805[(4)] = cljs.core.cons.call(null,(4),(state_35801[(4)])));

return statearr_35805;
})();
var ___$1 = (function (){var statearr_35806 = state_35801;
(statearr_35806[(4)] = cljs.core.cons.call(null,(5),(state_35801[(4)])));

return statearr_35806;
})();
var inst_35791 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_35792 = cljs.core.first.call(null,inst_35791);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35801__$1,(6),inst_35792);
} else {
if((state_val_35802 === (3))){
var inst_35799 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35801__$1,inst_35799);
} else {
if((state_val_35802 === (4))){
var inst_35778 = (state_35801[(7)]);
var _ = (function (){var statearr_35808 = state_35801;
(statearr_35808[(4)] = cljs.core.rest.call(null,(state_35801[(4)])));

return statearr_35808;
})();
var inst_35782 = (state_35801[(2)]);
var inst_35783 = (cljs.core._STAR_print_fn_STAR_ = inst_35778);
var ___$1 = (function (){var temp__5823__auto__ = (state_35801[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__21216__auto__ = temp__5823__auto__;
throw e__21216__auto__;
} else {
return null;
}
})();
var state_35801__$1 = (function (){var statearr_35809 = state_35801;
(statearr_35809[(9)] = inst_35783);

return statearr_35809;
})();
var statearr_35810_35823 = state_35801__$1;
(statearr_35810_35823[(2)] = inst_35782);

(statearr_35810_35823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (5))){
var _ = (function (){var statearr_35811 = state_35801;
(statearr_35811[(4)] = cljs.core.rest.call(null,(state_35801[(4)])));

return statearr_35811;
})();
var state_35801__$1 = state_35801;
var ex35807 = (state_35801__$1[(2)]);
var statearr_35812_35824 = state_35801__$1;
(statearr_35812_35824[(5)] = ex35807);


throw ex35807;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (6))){
var inst_35794 = (state_35801[(2)]);
var inst_35795 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_35794,opts);
var inst_35796 = cljs.core.async.put_BANG_.call(null,c,inst_35795);
var _ = (function (){var statearr_35813 = state_35801;
(statearr_35813[(4)] = cljs.core.rest.call(null,(state_35801[(4)])));

return statearr_35813;
})();
var state_35801__$1 = state_35801;
var statearr_35814_35825 = state_35801__$1;
(statearr_35814_35825[(2)] = inst_35796);

(statearr_35814_35825[(1)] = (4));


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
var klipse_clj$lang$clojure$state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$state_machine__21984__auto____0 = (function (){
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = klipse_clj$lang$clojure$state_machine__21984__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var klipse_clj$lang$clojure$state_machine__21984__auto____1 = (function (state_35801){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_35801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e35816){var ex__21987__auto__ = e35816;
var statearr_35817_35826 = state_35801;
(statearr_35817_35826[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_35801[(4)]))){
var statearr_35818_35827 = state_35801;
(statearr_35818_35827[(1)] = cljs.core.first.call(null,(state_35801[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35828 = state_35801;
state_35801 = G__35828;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__21984__auto__ = function(state_35801){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__21984__auto____1.call(this,state_35801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__21984__auto____0;
klipse_clj$lang$clojure$state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__21984__auto____1;
return klipse_clj$lang$clojure$state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_35819 = f__22109__auto__.call(null);
(statearr_35819[(6)] = c__22108__auto___35821);

return statearr_35819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));


return c;
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=clojure.js.map
