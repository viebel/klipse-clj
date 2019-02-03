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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_22934){
var state_val_22935 = (state_22934[(1)]);
if((state_val_22935 === (7))){
var inst_22930 = (state_22934[(2)]);
var state_22934__$1 = state_22934;
var statearr_22936_22962 = state_22934__$1;
(statearr_22936_22962[(2)] = inst_22930);

(statearr_22936_22962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (1))){
var inst_22873 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_22934__$1 = state_22934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22934__$1,(2),inst_22873);
} else {
if((state_val_22935 === (4))){
var inst_22932 = (state_22934[(2)]);
var state_22934__$1 = state_22934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22934__$1,inst_22932);
} else {
if((state_val_22935 === (15))){
var inst_22904 = (state_22934[(7)]);
var inst_22921 = (state_22934[(2)]);
var inst_22922 = cljs.core.next.call(null,inst_22904);
var inst_22884 = inst_22922;
var inst_22885 = null;
var inst_22886 = (0);
var inst_22887 = (0);
var state_22934__$1 = (function (){var statearr_22937 = state_22934;
(statearr_22937[(8)] = inst_22885);

(statearr_22937[(9)] = inst_22921);

(statearr_22937[(10)] = inst_22884);

(statearr_22937[(11)] = inst_22886);

(statearr_22937[(12)] = inst_22887);

return statearr_22937;
})();
var statearr_22938_22963 = state_22934__$1;
(statearr_22938_22963[(2)] = null);

(statearr_22938_22963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (13))){
var inst_22904 = (state_22934[(7)]);
var inst_22913 = cljs.core.first.call(null,inst_22904);
var inst_22914 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_22915 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_22916 = [inst_22915,klipse_clj.repl.current_ns_eval];
var inst_22917 = cljs.core.PersistentHashMap.fromArrays(inst_22914,inst_22916);
var inst_22918 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_22913,inst_22917);
var inst_22919 = cljs.core.first.call(null,inst_22918);
var state_22934__$1 = state_22934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22934__$1,(15),inst_22919);
} else {
if((state_val_22935 === (6))){
var inst_22884 = (state_22934[(10)]);
var inst_22904 = (state_22934[(7)]);
var inst_22904__$1 = cljs.core.seq.call(null,inst_22884);
var state_22934__$1 = (function (){var statearr_22939 = state_22934;
(statearr_22939[(7)] = inst_22904__$1);

return statearr_22939;
})();
if(inst_22904__$1){
var statearr_22940_22964 = state_22934__$1;
(statearr_22940_22964[(1)] = (9));

} else {
var statearr_22941_22965 = state_22934__$1;
(statearr_22941_22965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (3))){
var inst_22886 = (state_22934[(11)]);
var inst_22887 = (state_22934[(12)]);
var inst_22889 = (inst_22887 < inst_22886);
var inst_22890 = inst_22889;
var state_22934__$1 = state_22934;
if(cljs.core.truth_(inst_22890)){
var statearr_22942_22966 = state_22934__$1;
(statearr_22942_22966[(1)] = (5));

} else {
var statearr_22943_22967 = state_22934__$1;
(statearr_22943_22967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (12))){
var inst_22904 = (state_22934[(7)]);
var inst_22908 = cljs.core.chunk_first.call(null,inst_22904);
var inst_22909 = cljs.core.chunk_rest.call(null,inst_22904);
var inst_22910 = cljs.core.count.call(null,inst_22908);
var inst_22884 = inst_22909;
var inst_22885 = inst_22908;
var inst_22886 = inst_22910;
var inst_22887 = (0);
var state_22934__$1 = (function (){var statearr_22944 = state_22934;
(statearr_22944[(8)] = inst_22885);

(statearr_22944[(10)] = inst_22884);

(statearr_22944[(11)] = inst_22886);

(statearr_22944[(12)] = inst_22887);

return statearr_22944;
})();
var statearr_22945_22968 = state_22934__$1;
(statearr_22945_22968[(2)] = null);

(statearr_22945_22968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (2))){
var inst_22875 = (state_22934[(2)]);
var inst_22880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22881 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_22882 = (new cljs.core.PersistentVector(null,2,(5),inst_22880,inst_22881,null));
var inst_22883 = cljs.core.seq.call(null,inst_22882);
var inst_22884 = inst_22883;
var inst_22885 = null;
var inst_22886 = (0);
var inst_22887 = (0);
var state_22934__$1 = (function (){var statearr_22946 = state_22934;
(statearr_22946[(8)] = inst_22885);

(statearr_22946[(10)] = inst_22884);

(statearr_22946[(13)] = inst_22875);

(statearr_22946[(11)] = inst_22886);

(statearr_22946[(12)] = inst_22887);

return statearr_22946;
})();
var statearr_22947_22969 = state_22934__$1;
(statearr_22947_22969[(2)] = null);

(statearr_22947_22969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (11))){
var inst_22928 = (state_22934[(2)]);
var state_22934__$1 = state_22934;
var statearr_22948_22970 = state_22934__$1;
(statearr_22948_22970[(2)] = inst_22928);

(statearr_22948_22970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (9))){
var inst_22904 = (state_22934[(7)]);
var inst_22906 = cljs.core.chunked_seq_QMARK_.call(null,inst_22904);
var state_22934__$1 = state_22934;
if(inst_22906){
var statearr_22949_22971 = state_22934__$1;
(statearr_22949_22971[(1)] = (12));

} else {
var statearr_22950_22972 = state_22934__$1;
(statearr_22950_22972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (5))){
var inst_22885 = (state_22934[(8)]);
var inst_22887 = (state_22934[(12)]);
var inst_22892 = cljs.core._nth.call(null,inst_22885,inst_22887);
var inst_22893 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_22894 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_22895 = [inst_22894,klipse_clj.repl.current_ns_eval];
var inst_22896 = cljs.core.PersistentHashMap.fromArrays(inst_22893,inst_22895);
var inst_22897 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_22892,inst_22896);
var inst_22898 = cljs.core.first.call(null,inst_22897);
var state_22934__$1 = state_22934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22934__$1,(8),inst_22898);
} else {
if((state_val_22935 === (14))){
var inst_22925 = (state_22934[(2)]);
var state_22934__$1 = state_22934;
var statearr_22954_22973 = state_22934__$1;
(statearr_22954_22973[(2)] = inst_22925);

(statearr_22954_22973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (10))){
var state_22934__$1 = state_22934;
var statearr_22955_22974 = state_22934__$1;
(statearr_22955_22974[(2)] = null);

(statearr_22955_22974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22935 === (8))){
var inst_22885 = (state_22934[(8)]);
var inst_22884 = (state_22934[(10)]);
var inst_22886 = (state_22934[(11)]);
var inst_22887 = (state_22934[(12)]);
var inst_22900 = (state_22934[(2)]);
var inst_22901 = (inst_22887 + (1));
var tmp22951 = inst_22885;
var tmp22952 = inst_22884;
var tmp22953 = inst_22886;
var inst_22884__$1 = tmp22952;
var inst_22885__$1 = tmp22951;
var inst_22886__$1 = tmp22953;
var inst_22887__$1 = inst_22901;
var state_22934__$1 = (function (){var statearr_22956 = state_22934;
(statearr_22956[(14)] = inst_22900);

(statearr_22956[(8)] = inst_22885__$1);

(statearr_22956[(10)] = inst_22884__$1);

(statearr_22956[(11)] = inst_22886__$1);

(statearr_22956[(12)] = inst_22887__$1);

return statearr_22956;
})();
var statearr_22957_22975 = state_22934__$1;
(statearr_22957_22975[(2)] = null);

(statearr_22957_22975[(1)] = (3));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____0 = (function (){
var statearr_22958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22958[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__);

(statearr_22958[(1)] = (1));

return statearr_22958;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____1 = (function (state_22934){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_22934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e22959){if((e22959 instanceof Object)){
var ex__15643__auto__ = e22959;
var statearr_22960_22976 = state_22934;
(statearr_22960_22976[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22977 = state_22934;
state_22934 = G__22977;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__ = function(state_22934){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____1.call(this,state_22934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_22961 = f__15735__auto__.call(null);
(statearr_22961[(6)] = c__15734__auto__);

return statearr_22961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_22980){
var state_val_22981 = (state_22980[(1)]);
if((state_val_22981 === (1))){
var inst_22978 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_22980__$1 = state_22980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22980__$1,inst_22978);
} else {
return null;
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____0 = (function (){
var statearr_22982 = [null,null,null,null,null,null,null];
(statearr_22982[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__);

(statearr_22982[(1)] = (1));

return statearr_22982;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____1 = (function (state_22980){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_22980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object)){
var ex__15643__auto__ = e22983;
var statearr_22984_22986 = state_22980;
(statearr_22984_22986[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22987 = state_22980;
state_22980 = G__22987;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__ = function(state_22980){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____1.call(this,state_22980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_22985 = f__15735__auto__.call(null);
(statearr_22985[(6)] = c__15734__auto__);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
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
}catch (e22988){if((e22988 instanceof Object)){
var e = e22988;

return e;
} else {
throw e22988;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__22989){
var map__22990 = p__22989;
var map__22990__$1 = (((((!((map__22990 == null))))?(((((map__22990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22990):map__22990);
var print_length = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__22990__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__22993 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__22994 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__22994;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22995_22999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22996_23000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22997_23001 = true;
var _STAR_print_fn_STAR__temp_val__22998_23002 = ((function (_STAR_print_newline_STAR__orig_val__22995_22999,_STAR_print_fn_STAR__orig_val__22996_23000,_STAR_print_newline_STAR__temp_val__22997_23001,sb__4661__auto__,_STAR_print_length_STAR__orig_val__22993,_STAR_print_length_STAR__temp_val__22994,map__22990,map__22990__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22995_22999,_STAR_print_fn_STAR__orig_val__22996_23000,_STAR_print_newline_STAR__temp_val__22997_23001,sb__4661__auto__,_STAR_print_length_STAR__orig_val__22993,_STAR_print_length_STAR__temp_val__22994,map__22990,map__22990__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22997_23001;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22998_23002;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22996_23000;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22995_22999;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__22993;
}}catch (e22992){if((e22992 instanceof Object)){
var e = e22992;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e22992;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__23003,verbose_QMARK_,current_ns){
var map__23004 = p__23003;
var map__23004__$1 = (((((!((map__23004 == null))))?(((((map__23004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23004):map__23004);
var ns = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__23004__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__23006,opts){
var map__23007 = p__23006;
var map__23007__$1 = (((((!((map__23007 == null))))?(((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);
var args = map__23007__$1;
var ns = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__23009){
var map__23010 = p__23009;
var map__23010__$1 = (((((!((map__23010 == null))))?(((((map__23010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23010):map__23010);
var form = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__23012){
var map__23013 = p__23012;
var map__23013__$1 = (((((!((map__23013 == null))))?(((((map__23013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23013):map__23013);
var foo = map__23013__$1;
var value = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__23015){
var map__23016 = p__23015;
var map__23016__$1 = (((((!((map__23016 == null))))?(((((map__23016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23016):map__23016);
var args = map__23016__$1;
var file = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__23018){
var map__23019 = p__23018;
var map__23019__$1 = (((((!((map__23019 == null))))?(((((map__23019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23019):map__23019);
var source = cljs.core.get.call(null,map__23019__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__23021){
var map__23022 = p__23021;
var map__23022__$1 = (((((!((map__23022 == null))))?(((((map__23022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23022):map__23022);
var static_fns = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__23022__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__23022,map__23022__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__23022,map__23022__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
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
var c__15734__auto___23055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___23055,d){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___23055,d){
return (function (state_23040){
var state_val_23041 = (state_23040[(1)]);
if((state_val_23041 === (1))){
var inst_23024 = cljs.core.PersistentVector.EMPTY;
var inst_23025 = inst_23024;
var state_23040__$1 = (function (){var statearr_23042 = state_23040;
(statearr_23042[(7)] = inst_23025);

return statearr_23042;
})();
var statearr_23043_23056 = state_23040__$1;
(statearr_23043_23056[(2)] = null);

(statearr_23043_23056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23041 === (2))){
var state_23040__$1 = state_23040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23040__$1,(4),c);
} else {
if((state_val_23041 === (3))){
var inst_23038 = (state_23040[(2)]);
var state_23040__$1 = state_23040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23040__$1,inst_23038);
} else {
if((state_val_23041 === (4))){
var inst_23028 = (state_23040[(8)]);
var inst_23028__$1 = (state_23040[(2)]);
var inst_23029 = (inst_23028__$1 == null);
var state_23040__$1 = (function (){var statearr_23044 = state_23040;
(statearr_23044[(8)] = inst_23028__$1);

return statearr_23044;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23045_23057 = state_23040__$1;
(statearr_23045_23057[(1)] = (5));

} else {
var statearr_23046_23058 = state_23040__$1;
(statearr_23046_23058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23041 === (5))){
var inst_23025 = (state_23040[(7)]);
var inst_23031 = cljs.core.async.put_BANG_.call(null,d,inst_23025);
var state_23040__$1 = state_23040;
var statearr_23047_23059 = state_23040__$1;
(statearr_23047_23059[(2)] = inst_23031);

(statearr_23047_23059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23041 === (6))){
var inst_23025 = (state_23040[(7)]);
var inst_23028 = (state_23040[(8)]);
var inst_23033 = cljs.core.conj.call(null,inst_23025,inst_23028);
var inst_23025__$1 = inst_23033;
var state_23040__$1 = (function (){var statearr_23048 = state_23040;
(statearr_23048[(7)] = inst_23025__$1);

return statearr_23048;
})();
var statearr_23049_23060 = state_23040__$1;
(statearr_23049_23060[(2)] = null);

(statearr_23049_23060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23041 === (7))){
var inst_23036 = (state_23040[(2)]);
var state_23040__$1 = state_23040;
var statearr_23050_23061 = state_23040__$1;
(statearr_23050_23061[(2)] = inst_23036);

(statearr_23050_23061[(1)] = (3));


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
});})(c__15734__auto___23055,d))
;
return ((function (switch__15639__auto__,c__15734__auto___23055,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____0 = (function (){
var statearr_23051 = [null,null,null,null,null,null,null,null,null];
(statearr_23051[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__);

(statearr_23051[(1)] = (1));

return statearr_23051;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____1 = (function (state_23040){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23052){if((e23052 instanceof Object)){
var ex__15643__auto__ = e23052;
var statearr_23053_23062 = state_23040;
(statearr_23053_23062[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23063 = state_23040;
state_23040 = G__23063;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__ = function(state_23040){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____1.call(this,state_23040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___23055,d))
})();
var state__15736__auto__ = (function (){var statearr_23054 = f__15735__auto__.call(null);
(statearr_23054[(6)] = c__15734__auto___23055);

return statearr_23054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___23055,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__23064){
var map__23065 = p__23064;
var map__23065__$1 = (((((!((map__23065 == null))))?(((((map__23065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23065):map__23065);
var static_fns = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__23065__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4219__auto__ = max_eval_duration;
var y__4220__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__23067 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__23068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__23068;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (state_23077){
var state_val_23078 = (state_23077[(1)]);
if((state_val_23078 === (1))){
var inst_23069 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23077__$1,(2),inst_23069);
} else {
if((state_val_23078 === (2))){
var inst_23071 = (state_23077[(2)]);
var inst_23072 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_23073 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_23074 = clojure.string.join.call(null,"",inst_23071);
var inst_23075 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_23074);
var state_23077__$1 = (function (){var statearr_23079 = state_23077;
(statearr_23079[(7)] = inst_23072);

(statearr_23079[(8)] = inst_23073);

return statearr_23079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23077__$1,inst_23075);
} else {
return null;
}
}
});})(c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
;
return ((function (switch__15639__auto__,c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____0 = (function (){
var statearr_23080 = [null,null,null,null,null,null,null,null,null];
(statearr_23080[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__);

(statearr_23080[(1)] = (1));

return statearr_23080;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____1 = (function (state_23077){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23081){if((e23081 instanceof Object)){
var ex__15643__auto__ = e23081;
var statearr_23082_23084 = state_23077;
(statearr_23082_23084[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23085 = state_23077;
state_23077 = G__23085;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__ = function(state_23077){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____1.call(this,state_23077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
})();
var state__15736__auto__ = (function (){var statearr_23083 = f__15735__auto__.call(null);
(statearr_23083[(6)] = c__15734__auto__);

return statearr_23083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return c__15734__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__23067,_STAR_cljs_warning_handlers_STAR__temp_val__23068,res_chan,warnings_chan,agg_warnings_chan,max_eval_duration__$1,map__23065,map__23065__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__23067;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__23086 = cljs.core.conj.call(null,res,ch);
res = G__23086;
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
var _STAR_alias_map_STAR__orig_val__23087 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__23088 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23089 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__23090 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__23091 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__23092 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__23093 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__23094 = ns;
var _STAR_cljs_ns_STAR__temp_val__23095 = ns;
var _STAR_compiler_STAR__temp_val__23096 = st;
var resolve_symbol_temp_val__23097 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__23098 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23093;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23094;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23095;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23096;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23097;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23098;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23092;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23091;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23090;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23089;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23088;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23087;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__23102 = arguments.length;
switch (G__23102) {
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
var _STAR_alias_map_STAR__orig_val__23103 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__23104 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__23105 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__23106 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__23107 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__23108 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__23109 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__23110 = ns;
var _STAR_cljs_ns_STAR__temp_val__23111 = ns;
var _STAR_compiler_STAR__temp_val__23112 = st;
var resolve_symbol_temp_val__23113 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__23114 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__23109;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__23110;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__23111;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__23112;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__23113;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__23114;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__23108;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__23107;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__23106;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__23105;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__23104;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__23103;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__23119 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__23119,(0),null);
var rest_s = cljs.core.nth.call(null,vec__23119,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__23122 = rest_s;
var G__23123 = res;
s__$1 = G__23122;
res = G__23123;
continue;
} else {
var G__23124 = rest_s;
var G__23125 = cljs.core.conj.call(null,res,exp);
s__$1 = G__23124;
res = G__23125;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__23126){
var map__23127 = p__23126;
var map__23127__$1 = (((((!((map__23127 == null))))?(((((map__23127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23127):map__23127);
var result_element = cljs.core.get.call(null,map__23127__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__23127__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15734__auto___23232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___23232,res_chan,warnings_chan){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___23232,res_chan,warnings_chan){
return (function (state_23204){
var state_val_23205 = (state_23204[(1)]);
if((state_val_23205 === (7))){
var inst_23200 = (state_23204[(2)]);
var state_23204__$1 = state_23204;
var statearr_23206_23233 = state_23204__$1;
(statearr_23206_23233[(2)] = inst_23200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (1))){
var state_23204__$1 = state_23204;
var statearr_23207_23234 = state_23204__$1;
(statearr_23207_23234[(2)] = null);

(statearr_23207_23234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23204,(3),Object,null,(2));
var inst_23142 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_23204__$1 = state_23204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23204__$1,(5),inst_23142);
} else {
if((state_val_23205 === (15))){
var inst_23159 = (state_23204[(7)]);
var inst_23187 = (state_23204[(8)]);
var inst_23178 = (state_23204[(9)]);
var inst_23189 = (state_23204[(2)]);
var inst_23190 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23159),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23189)].join('');
var inst_23157 = inst_23187;
var inst_23158 = inst_23178;
var inst_23159__$1 = inst_23190;
var state_23204__$1 = (function (){var statearr_23208 = state_23204;
(statearr_23208[(7)] = inst_23159__$1);

(statearr_23208[(10)] = inst_23158);

(statearr_23208[(11)] = inst_23157);

return statearr_23208;
})();
var statearr_23209_23235 = state_23204__$1;
(statearr_23209_23235[(2)] = null);

(statearr_23209_23235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (13))){
var inst_23176 = (state_23204[(12)]);
var inst_23165 = (state_23204[(13)]);
var inst_23185 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23186 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_23187 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_23165,inst_23185,inst_23186);
var state_23204__$1 = (function (){var statearr_23210 = state_23204;
(statearr_23210[(8)] = inst_23187);

return statearr_23210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23204__$1,(15),inst_23176);
} else {
if((state_val_23205 === (6))){
var inst_23164 = (state_23204[(14)]);
var inst_23157 = (state_23204[(11)]);
var inst_23164__$1 = cljs.core.nth.call(null,inst_23157,(0),null);
var inst_23165 = cljs.core.nth.call(null,inst_23157,(1),null);
var inst_23166 = cljs.core.empty_QMARK_.call(null,inst_23164__$1);
var inst_23167 = (!(inst_23166));
var state_23204__$1 = (function (){var statearr_23211 = state_23204;
(statearr_23211[(14)] = inst_23164__$1);

(statearr_23211[(13)] = inst_23165);

return statearr_23211;
})();
if(inst_23167){
var statearr_23212_23236 = state_23204__$1;
(statearr_23212_23236[(1)] = (8));

} else {
var statearr_23213_23237 = state_23204__$1;
(statearr_23213_23237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (3))){
var inst_23129 = (state_23204[(2)]);
var inst_23130 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_23131 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23132 = [inst_23129];
var inst_23133 = cljs.core.PersistentHashMap.fromArrays(inst_23131,inst_23132);
var inst_23134 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23133);
var inst_23135 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23136 = [inst_23129];
var inst_23137 = cljs.core.PersistentHashMap.fromArrays(inst_23135,inst_23136);
var inst_23138 = klipse_clj.lang.clojure.populate_err.call(null,inst_23137,opts);
var state_23204__$1 = (function (){var statearr_23214 = state_23204;
(statearr_23214[(15)] = inst_23130);

(statearr_23214[(16)] = inst_23134);

return statearr_23214;
})();
var statearr_23215_23238 = state_23204__$1;
(statearr_23215_23238[(2)] = inst_23138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23204__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (12))){
var inst_23178 = (state_23204[(9)]);
var inst_23181 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_23182 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23178);
var inst_23183 = klipse_clj.lang.clojure.populate_err.call(null,inst_23178,opts);
var state_23204__$1 = (function (){var statearr_23216 = state_23204;
(statearr_23216[(17)] = inst_23182);

(statearr_23216[(18)] = inst_23181);

return statearr_23216;
})();
var statearr_23217_23239 = state_23204__$1;
(statearr_23217_23239[(2)] = inst_23183);

(statearr_23217_23239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (2))){
var inst_23202 = (state_23204[(2)]);
var state_23204__$1 = state_23204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23204__$1,inst_23202);
} else {
if((state_val_23205 === (11))){
var inst_23178 = (state_23204[(9)]);
var inst_23178__$1 = (state_23204[(2)]);
var inst_23179 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23178__$1);
var state_23204__$1 = (function (){var statearr_23218 = state_23204;
(statearr_23218[(9)] = inst_23178__$1);

return statearr_23218;
})();
if(cljs.core.truth_(inst_23179)){
var statearr_23219_23240 = state_23204__$1;
(statearr_23219_23240[(1)] = (12));

} else {
var statearr_23220_23241 = state_23204__$1;
(statearr_23220_23241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (9))){
var inst_23159 = (state_23204[(7)]);
var inst_23158 = (state_23204[(10)]);
var inst_23195 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_23159);
var inst_23196 = cljs.core.async.put_BANG_.call(null,res_chan,inst_23158);
var state_23204__$1 = (function (){var statearr_23221 = state_23204;
(statearr_23221[(19)] = inst_23195);

return statearr_23221;
})();
var statearr_23222_23242 = state_23204__$1;
(statearr_23222_23242[(2)] = inst_23196);

(statearr_23222_23242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (5))){
var inst_23144 = (state_23204[(2)]);
var inst_23152 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23153 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_23154 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_23152,inst_23153);
var inst_23155 = cljs.core.nth.call(null,inst_23154,(0),null);
var inst_23156 = cljs.core.nth.call(null,inst_23154,(1),null);
var inst_23157 = inst_23154;
var inst_23158 = null;
var inst_23159 = "";
var state_23204__$1 = (function (){var statearr_23223 = state_23204;
(statearr_23223[(7)] = inst_23159);

(statearr_23223[(20)] = inst_23144);

(statearr_23223[(21)] = inst_23156);

(statearr_23223[(10)] = inst_23158);

(statearr_23223[(22)] = inst_23155);

(statearr_23223[(11)] = inst_23157);

return statearr_23223;
})();
var statearr_23224_23243 = state_23204__$1;
(statearr_23224_23243[(2)] = null);

(statearr_23224_23243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (14))){
var inst_23193 = (state_23204[(2)]);
var state_23204__$1 = state_23204;
var statearr_23225_23244 = state_23204__$1;
(statearr_23225_23244[(2)] = inst_23193);

(statearr_23225_23244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (10))){
var inst_23198 = (state_23204[(2)]);
var state_23204__$1 = state_23204;
var statearr_23226_23245 = state_23204__$1;
(statearr_23226_23245[(2)] = inst_23198);

(statearr_23226_23245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23205 === (8))){
var inst_23164 = (state_23204[(14)]);
var inst_23172 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_23173 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_23172,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_23174 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_23164,inst_23173);
var inst_23175 = cljs.core.nth.call(null,inst_23174,(0),null);
var inst_23176 = cljs.core.nth.call(null,inst_23174,(1),null);
var state_23204__$1 = (function (){var statearr_23227 = state_23204;
(statearr_23227[(12)] = inst_23176);

return statearr_23227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23204__$1,(11),inst_23175);
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
});})(c__15734__auto___23232,res_chan,warnings_chan))
;
return ((function (switch__15639__auto__,c__15734__auto___23232,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____0 = (function (){
var statearr_23228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23228[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__);

(statearr_23228[(1)] = (1));

return statearr_23228;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____1 = (function (state_23204){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object)){
var ex__15643__auto__ = e23229;
var statearr_23230_23246 = state_23204;
(statearr_23230_23246[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23247 = state_23204;
state_23204 = G__23247;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__ = function(state_23204){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____1.call(this,state_23204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___23232,res_chan,warnings_chan))
})();
var state__15736__auto__ = (function (){var statearr_23231 = f__15735__auto__.call(null);
(statearr_23231[(6)] = c__15734__auto___23232);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___23232,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23305){
var state_val_23306 = (state_23305[(1)]);
if((state_val_23306 === (7))){
var inst_23273 = (state_23305[(7)]);
var inst_23278 = klipse_clj.repl.create_state_compile.call(null);
var inst_23279 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_23278,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_23280 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_23273,inst_23279);
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23305__$1,(10),inst_23280);
} else {
if((state_val_23306 === (1))){
var state_23305__$1 = state_23305;
var statearr_23307_23328 = state_23305__$1;
(statearr_23307_23328[(2)] = null);

(statearr_23307_23328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23305,(3),Object,null,(2));
var inst_23262 = klipse_clj.repl.create_state_compile.call(null);
var inst_23263 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_23264 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_23262,inst_23263);
var inst_23265 = cljs.core.nth.call(null,inst_23264,(0),null);
var inst_23266 = cljs.core.nth.call(null,inst_23264,(1),null);
var inst_23267 = inst_23264;
var inst_23268 = "";
var state_23305__$1 = (function (){var statearr_23308 = state_23305;
(statearr_23308[(8)] = inst_23268);

(statearr_23308[(9)] = inst_23267);

(statearr_23308[(10)] = inst_23266);

(statearr_23308[(11)] = inst_23265);

return statearr_23308;
})();
var statearr_23309_23329 = state_23305__$1;
(statearr_23309_23329[(2)] = null);

(statearr_23309_23329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (13))){
var inst_23293 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23310_23330 = state_23305__$1;
(statearr_23310_23330[(2)] = inst_23293);

(statearr_23310_23330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (6))){
var inst_23301 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23311_23331 = state_23305__$1;
(statearr_23311_23331[(2)] = inst_23301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23305__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (3))){
var inst_23248 = (state_23305[(2)]);
var inst_23249 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23250 = [inst_23248];
var inst_23251 = cljs.core.PersistentHashMap.fromArrays(inst_23249,inst_23250);
var state_23305__$1 = state_23305;
var statearr_23312_23332 = state_23305__$1;
(statearr_23312_23332[(2)] = inst_23251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23305__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (12))){
var inst_23268 = (state_23305[(8)]);
var inst_23282 = (state_23305[(12)]);
var inst_23274 = (state_23305[(13)]);
var inst_23286 = klipse_clj.repl.create_state_compile.call(null);
var inst_23287 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_23288 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_23274,inst_23286,inst_23287);
var inst_23289 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_23282);
var inst_23290 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23268),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23289)].join('');
var inst_23267 = inst_23288;
var inst_23268__$1 = inst_23290;
var state_23305__$1 = (function (){var statearr_23313 = state_23305;
(statearr_23313[(8)] = inst_23268__$1);

(statearr_23313[(9)] = inst_23267);

return statearr_23313;
})();
var statearr_23314_23333 = state_23305__$1;
(statearr_23314_23333[(2)] = null);

(statearr_23314_23333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (2))){
var inst_23303 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23305__$1,inst_23303);
} else {
if((state_val_23306 === (11))){
var inst_23282 = (state_23305[(12)]);
var state_23305__$1 = state_23305;
var statearr_23315_23334 = state_23305__$1;
(statearr_23315_23334[(2)] = inst_23282);

(statearr_23315_23334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (9))){
var inst_23299 = (state_23305[(2)]);
var state_23305__$1 = state_23305;
var statearr_23316_23335 = state_23305__$1;
(statearr_23316_23335[(2)] = inst_23299);

(statearr_23316_23335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (5))){
var inst_23267 = (state_23305[(9)]);
var inst_23273 = (state_23305[(7)]);
var inst_23273__$1 = cljs.core.nth.call(null,inst_23267,(0),null);
var inst_23274 = cljs.core.nth.call(null,inst_23267,(1),null);
var inst_23275 = cljs.core.empty_QMARK_.call(null,inst_23273__$1);
var inst_23276 = (!(inst_23275));
var state_23305__$1 = (function (){var statearr_23317 = state_23305;
(statearr_23317[(13)] = inst_23274);

(statearr_23317[(7)] = inst_23273__$1);

return statearr_23317;
})();
if(inst_23276){
var statearr_23318_23336 = state_23305__$1;
(statearr_23318_23336[(1)] = (7));

} else {
var statearr_23319_23337 = state_23305__$1;
(statearr_23319_23337[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (10))){
var inst_23282 = (state_23305[(12)]);
var inst_23282__$1 = (state_23305[(2)]);
var inst_23283 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23282__$1);
var state_23305__$1 = (function (){var statearr_23320 = state_23305;
(statearr_23320[(12)] = inst_23282__$1);

return statearr_23320;
})();
if(cljs.core.truth_(inst_23283)){
var statearr_23321_23338 = state_23305__$1;
(statearr_23321_23338[(1)] = (11));

} else {
var statearr_23322_23339 = state_23305__$1;
(statearr_23322_23339[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23306 === (8))){
var inst_23268 = (state_23305[(8)]);
var inst_23295 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_23296 = [inst_23268];
var inst_23297 = cljs.core.PersistentHashMap.fromArrays(inst_23295,inst_23296);
var state_23305__$1 = state_23305;
var statearr_23323_23340 = state_23305__$1;
(statearr_23323_23340[(2)] = inst_23297);

(statearr_23323_23340[(1)] = (9));


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
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____0 = (function (){
var statearr_23324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23324[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__);

(statearr_23324[(1)] = (1));

return statearr_23324;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____1 = (function (state_23305){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23325){if((e23325 instanceof Object)){
var ex__15643__auto__ = e23325;
var statearr_23326_23341 = state_23305;
(statearr_23326_23341[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23342 = state_23305;
state_23305 = G__23342;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__ = function(state_23305){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____1.call(this,state_23305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23327 = f__15735__auto__.call(null);
(statearr_23327[(6)] = c__15734__auto__);

return statearr_23327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23358){
var state_val_23359 = (state_23358[(1)]);
if((state_val_23359 === (1))){
var inst_23346 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23347 = cljs.core.nth.call(null,inst_23346,(0),null);
var inst_23348 = cljs.core.nth.call(null,inst_23346,(1),null);
var state_23358__$1 = (function (){var statearr_23360 = state_23358;
(statearr_23360[(7)] = inst_23348);

return statearr_23360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23358__$1,(2),inst_23347);
} else {
if((state_val_23359 === (2))){
var inst_23348 = (state_23358[(7)]);
var inst_23350 = (state_23358[(2)]);
var inst_23351 = klipse_clj.lang.clojure.result_as_str.call(null,inst_23350,opts);
var state_23358__$1 = (function (){var statearr_23361 = state_23358;
(statearr_23361[(8)] = inst_23351);

return statearr_23361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23358__$1,(3),inst_23348);
} else {
if((state_val_23359 === (3))){
var inst_23351 = (state_23358[(8)]);
var inst_23353 = (state_23358[(2)]);
var inst_23354 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_23355 = [inst_23353,inst_23351];
var inst_23356 = cljs.core.PersistentHashMap.fromArrays(inst_23354,inst_23355);
var state_23358__$1 = state_23358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23358__$1,inst_23356);
} else {
return null;
}
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____0 = (function (){
var statearr_23362 = [null,null,null,null,null,null,null,null,null];
(statearr_23362[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__);

(statearr_23362[(1)] = (1));

return statearr_23362;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____1 = (function (state_23358){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23363){if((e23363 instanceof Object)){
var ex__15643__auto__ = e23363;
var statearr_23364_23366 = state_23358;
(statearr_23364_23366[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23367 = state_23358;
state_23358 = G__23367;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__ = function(state_23358){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____1.call(this,state_23358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23365 = f__15735__auto__.call(null);
(statearr_23365[(6)] = c__15734__auto__);

return statearr_23365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23380){
var state_val_23381 = (state_23380[(1)]);
if((state_val_23381 === (1))){
var inst_23371 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23372 = cljs.core.nth.call(null,inst_23371,(0),null);
var inst_23373 = cljs.core.nth.call(null,inst_23371,(1),null);
var state_23380__$1 = (function (){var statearr_23382 = state_23380;
(statearr_23382[(7)] = inst_23373);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23380__$1,(2),inst_23372);
} else {
if((state_val_23381 === (2))){
var inst_23373 = (state_23380[(7)]);
var inst_23375 = (state_23380[(2)]);
var inst_23376 = klipse_clj.lang.clojure.result_as_str.call(null,inst_23375,opts);
var state_23380__$1 = (function (){var statearr_23383 = state_23380;
(statearr_23383[(8)] = inst_23376);

return statearr_23383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23380__$1,(3),inst_23373);
} else {
if((state_val_23381 === (3))){
var inst_23376 = (state_23380[(8)]);
var inst_23378 = (state_23380[(2)]);
var state_23380__$1 = (function (){var statearr_23384 = state_23380;
(statearr_23384[(9)] = inst_23378);

return statearr_23384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23380__$1,inst_23376);
} else {
return null;
}
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____0 = (function (){
var statearr_23385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23385[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__);

(statearr_23385[(1)] = (1));

return statearr_23385;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____1 = (function (state_23380){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23386){if((e23386 instanceof Object)){
var ex__15643__auto__ = e23386;
var statearr_23387_23389 = state_23380;
(statearr_23387_23389[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23390 = state_23380;
state_23380 = G__23390;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__ = function(state_23380){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____1.call(this,state_23380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23388 = f__15735__auto__.call(null);
(statearr_23388[(6)] = c__15734__auto__);

return statearr_23388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__23392 = arguments.length;
switch (G__23392) {
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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23399){
var state_val_23400 = (state_23399[(1)]);
if((state_val_23400 === (1))){
var inst_23393 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_23394 = cljs.core.first.call(null,inst_23393);
var state_23399__$1 = state_23399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23399__$1,(2),inst_23394);
} else {
if((state_val_23400 === (2))){
var inst_23396 = (state_23399[(2)]);
var inst_23397 = klipse_clj.lang.clojure.read_result.call(null,inst_23396);
var state_23399__$1 = state_23399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23399__$1,inst_23397);
} else {
return null;
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15640__auto____0 = (function (){
var statearr_23401 = [null,null,null,null,null,null,null];
(statearr_23401[(0)] = klipse_clj$lang$clojure$state_machine__15640__auto__);

(statearr_23401[(1)] = (1));

return statearr_23401;
});
var klipse_clj$lang$clojure$state_machine__15640__auto____1 = (function (state_23399){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23402){if((e23402 instanceof Object)){
var ex__15643__auto__ = e23402;
var statearr_23403_23406 = state_23399;
(statearr_23403_23406[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23407 = state_23399;
state_23399 = G__23407;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15640__auto__ = function(state_23399){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15640__auto____1.call(this,state_23399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15640__auto____0;
klipse_clj$lang$clojure$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23404 = f__15735__auto__.call(null);
(statearr_23404[(6)] = c__15734__auto__);

return statearr_23404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23414){
var state_val_23415 = (state_23414[(1)]);
if((state_val_23415 === (1))){
var inst_23408 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23414__$1,(2),inst_23408);
} else {
if((state_val_23415 === (2))){
var inst_23410 = (state_23414[(2)]);
var inst_23411 = cljs.core.clj__GT_js.call(null,inst_23410);
var inst_23412 = cb.call(null,inst_23411);
var state_23414__$1 = state_23414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23414__$1,inst_23412);
} else {
return null;
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____0 = (function (){
var statearr_23416 = [null,null,null,null,null,null,null];
(statearr_23416[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__);

(statearr_23416[(1)] = (1));

return statearr_23416;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____1 = (function (state_23414){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23417){if((e23417 instanceof Object)){
var ex__15643__auto__ = e23417;
var statearr_23418_23420 = state_23414;
(statearr_23418_23420[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23421 = state_23414;
state_23414 = G__23421;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__ = function(state_23414){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____1.call(this,state_23414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23419 = f__15735__auto__.call(null);
(statearr_23419[(6)] = c__15734__auto__);

return statearr_23419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__23423 = arguments.length;
switch (G__23423) {
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
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23429){
var state_val_23430 = (state_23429[(1)]);
if((state_val_23430 === (1))){
var inst_23424 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23429__$1,(2),inst_23424);
} else {
if((state_val_23430 === (2))){
var inst_23426 = (state_23429[(2)]);
var inst_23427 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_23426);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23429__$1,inst_23427);
} else {
return null;
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15640__auto____0 = (function (){
var statearr_23431 = [null,null,null,null,null,null,null];
(statearr_23431[(0)] = klipse_clj$lang$clojure$state_machine__15640__auto__);

(statearr_23431[(1)] = (1));

return statearr_23431;
});
var klipse_clj$lang$clojure$state_machine__15640__auto____1 = (function (state_23429){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object)){
var ex__15643__auto__ = e23432;
var statearr_23433_23436 = state_23429;
(statearr_23433_23436[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23437 = state_23429;
state_23429 = G__23437;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15640__auto__ = function(state_23429){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15640__auto____1.call(this,state_23429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15640__auto____0;
klipse_clj$lang$clojure$state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15640__auto____1;
return klipse_clj$lang$clojure$state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23434 = f__15735__auto__.call(null);
(statearr_23434[(6)] = c__15734__auto__);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23443){
var state_val_23444 = (state_23443[(1)]);
if((state_val_23444 === (1))){
var inst_23438 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_23443__$1 = state_23443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23443__$1,(2),inst_23438);
} else {
if((state_val_23444 === (2))){
var inst_23440 = (state_23443[(2)]);
var inst_23441 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_23440);
var state_23443__$1 = state_23443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23443__$1,inst_23441);
} else {
return null;
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____0 = (function (){
var statearr_23445 = [null,null,null,null,null,null,null];
(statearr_23445[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__);

(statearr_23445[(1)] = (1));

return statearr_23445;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____1 = (function (state_23443){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23446){if((e23446 instanceof Object)){
var ex__15643__auto__ = e23446;
var statearr_23447_23449 = state_23443;
(statearr_23447_23449[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23450 = state_23443;
state_23443 = G__23450;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__ = function(state_23443){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____1.call(this,state_23443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23448 = f__15735__auto__.call(null);
(statearr_23448[(6)] = c__15734__auto__);

return statearr_23448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_23457){
var state_val_23458 = (state_23457[(1)]);
if((state_val_23458 === (1))){
var inst_23451 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_23457__$1 = state_23457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23457__$1,(2),inst_23451);
} else {
if((state_val_23458 === (2))){
var inst_23453 = (state_23457[(2)]);
var inst_23454 = cljs.core.second.call(null,inst_23453);
var inst_23455 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23454);
var state_23457__$1 = state_23457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23457__$1,inst_23455);
} else {
return null;
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____0 = (function (){
var statearr_23459 = [null,null,null,null,null,null,null];
(statearr_23459[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__);

(statearr_23459[(1)] = (1));

return statearr_23459;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____1 = (function (state_23457){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23460){if((e23460 instanceof Object)){
var ex__15643__auto__ = e23460;
var statearr_23461_23463 = state_23457;
(statearr_23461_23463[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23464 = state_23457;
state_23457 = G__23464;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__ = function(state_23457){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____1.call(this,state_23457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_23462 = f__15735__auto__.call(null);
(statearr_23462[(6)] = c__15734__auto__);

return statearr_23462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__23466){
var map__23467 = p__23466;
var map__23467__$1 = (((((!((map__23467 == null))))?(((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23467):map__23467);
var opts = map__23467__$1;
var container_id = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15734__auto___23557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_23526){
var state_val_23527 = (state_23526[(1)]);
if((state_val_23527 === (7))){
var inst_23477 = (state_23526[(2)]);
var inst_23482 = (function (){var _STAR_print_newline_STAR__orig_val__23478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23479 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23480 = true;
return ((function (_STAR_print_newline_STAR__orig_val__23478,_STAR_print_fn_STAR__orig_val__23479,_STAR_print_newline_STAR__temp_val__23480,inst_23477,state_val_23527,c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__23465_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__23465_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__23478,_STAR_print_fn_STAR__orig_val__23479,_STAR_print_newline_STAR__temp_val__23480,inst_23477,state_val_23527,c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_23483 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_23484 = cljs.core._STAR_print_fn_STAR_ = inst_23482;
var state_23526__$1 = (function (){var statearr_23528 = state_23526;
(statearr_23528[(7)] = inst_23483);

(statearr_23528[(8)] = inst_23477);

(statearr_23528[(9)] = inst_23484);

return statearr_23528;
})();
var statearr_23529_23558 = state_23526__$1;
(statearr_23529_23558[(2)] = null);

(statearr_23529_23558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (20))){
var inst_23515 = (state_23526[(2)]);
var inst_23516 = cljs.core.get.call(null,inst_23515,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_23517 = cljs.core.get.call(null,inst_23515,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_23518 = cljs.core.second.call(null,inst_23517);
var inst_23519 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23516),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23518)].join('');
var inst_23520 = cljs.core.async.put_BANG_.call(null,c,inst_23519);
var state_23526__$1 = state_23526;
var statearr_23530_23559 = state_23526__$1;
(statearr_23530_23559[(2)] = inst_23520);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (1))){
var inst_23469 = clojure.string.blank_QMARK_.call(null,exp);
var state_23526__$1 = state_23526;
if(inst_23469){
var statearr_23531_23560 = state_23526__$1;
(statearr_23531_23560[(1)] = (2));

} else {
var statearr_23532_23561 = state_23526__$1;
(statearr_23532_23561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (4))){
var inst_23524 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23526__$1,inst_23524);
} else {
if((state_val_23527 === (15))){
var state_23526__$1 = state_23526;
var statearr_23533_23562 = state_23526__$1;
(statearr_23533_23562[(2)] = true);

(statearr_23533_23562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (13))){
var state_23526__$1 = state_23526;
var statearr_23534_23563 = state_23526__$1;
(statearr_23534_23563[(2)] = false);

(statearr_23534_23563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (6))){
var state_23526__$1 = state_23526;
var statearr_23535_23564 = state_23526__$1;
(statearr_23535_23564[(2)] = null);

(statearr_23535_23564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (17))){
var inst_23507 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
var statearr_23536_23565 = state_23526__$1;
(statearr_23536_23565[(2)] = inst_23507);

(statearr_23536_23565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (3))){
var state_23526__$1 = state_23526;
if(cljs.core.truth_(setup_container_fn)){
var statearr_23537_23566 = state_23526__$1;
(statearr_23537_23566[(1)] = (5));

} else {
var statearr_23538_23567 = state_23526__$1;
(statearr_23538_23567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (12))){
var inst_23494 = (state_23526[(10)]);
var inst_23499 = inst_23494.cljs$lang$protocol_mask$partition0$;
var inst_23500 = (inst_23499 & (64));
var inst_23501 = inst_23494.cljs$core$ISeq$;
var inst_23502 = (cljs.core.PROTOCOL_SENTINEL === inst_23501);
var inst_23503 = ((inst_23500) || (inst_23502));
var state_23526__$1 = state_23526;
if(cljs.core.truth_(inst_23503)){
var statearr_23539_23568 = state_23526__$1;
(statearr_23539_23568[(1)] = (15));

} else {
var statearr_23540_23569 = state_23526__$1;
(statearr_23540_23569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (2))){
var inst_23471 = cljs.core.async.put_BANG_.call(null,c,"");
var state_23526__$1 = state_23526;
var statearr_23541_23570 = state_23526__$1;
(statearr_23541_23570[(2)] = inst_23471);

(statearr_23541_23570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (19))){
var inst_23494 = (state_23526[(10)]);
var state_23526__$1 = state_23526;
var statearr_23542_23571 = state_23526__$1;
(statearr_23542_23571[(2)] = inst_23494);

(statearr_23542_23571[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (11))){
var inst_23494 = (state_23526[(10)]);
var inst_23494__$1 = (state_23526[(2)]);
var inst_23496 = (inst_23494__$1 == null);
var inst_23497 = cljs.core.not.call(null,inst_23496);
var state_23526__$1 = (function (){var statearr_23543 = state_23526;
(statearr_23543[(10)] = inst_23494__$1);

return statearr_23543;
})();
if(inst_23497){
var statearr_23544_23572 = state_23526__$1;
(statearr_23544_23572[(1)] = (12));

} else {
var statearr_23545_23573 = state_23526__$1;
(statearr_23545_23573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (9))){
var inst_23485 = (state_23526[(2)]);
var inst_23486 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_23487 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_23526__$1 = (function (){var statearr_23546 = state_23526;
(statearr_23546[(11)] = inst_23486);

(statearr_23546[(12)] = inst_23485);

(statearr_23546[(13)] = inst_23487);

return statearr_23546;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23526__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (5))){
var inst_23474 = setup_container_fn.call(null,container_id);
var state_23526__$1 = state_23526;
var statearr_23547_23574 = state_23526__$1;
(statearr_23547_23574[(2)] = inst_23474);

(statearr_23547_23574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (14))){
var inst_23510 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
if(cljs.core.truth_(inst_23510)){
var statearr_23548_23575 = state_23526__$1;
(statearr_23548_23575[(1)] = (18));

} else {
var statearr_23549_23576 = state_23526__$1;
(statearr_23549_23576[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (16))){
var state_23526__$1 = state_23526;
var statearr_23550_23577 = state_23526__$1;
(statearr_23550_23577[(2)] = false);

(statearr_23550_23577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23526,null,null,(9),(8));
var inst_23492 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_23526__$1 = state_23526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23526__$1,(11),inst_23492);
} else {
if((state_val_23527 === (18))){
var inst_23494 = (state_23526[(10)]);
var inst_23512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23494);
var state_23526__$1 = state_23526;
var statearr_23551_23578 = state_23526__$1;
(statearr_23551_23578[(2)] = inst_23512);

(statearr_23551_23578[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23527 === (8))){
var inst_23522 = (state_23526[(2)]);
var state_23526__$1 = state_23526;
var statearr_23552_23579 = state_23526__$1;
(statearr_23552_23579[(2)] = inst_23522);

(statearr_23552_23579[(1)] = (4));


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
});})(c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__15639__auto__,c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____0 = (function (){
var statearr_23553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23553[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__);

(statearr_23553[(1)] = (1));

return statearr_23553;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____1 = (function (state_23526){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_23526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e23554){if((e23554 instanceof Object)){
var ex__15643__auto__ = e23554;
var statearr_23555_23580 = state_23526;
(statearr_23555_23580[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23581 = state_23526;
state_23526 = G__23581;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__ = function(state_23526){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____1.call(this,state_23526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__15736__auto__ = (function (){var statearr_23556 = f__15735__auto__.call(null);
(statearr_23556[(6)] = c__15734__auto___23557);

return statearr_23556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto___23557,c,map__23467,map__23467__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
