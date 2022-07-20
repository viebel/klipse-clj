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
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_17910){
var state_val_17911 = (state_17910[(1)]);
if((state_val_17911 === (7))){
var inst_17906 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17912_17938 = state_17910__$1;
(statearr_17912_17938[(2)] = inst_17906);

(statearr_17912_17938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (1))){
var inst_17849 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(2),inst_17849);
} else {
if((state_val_17911 === (4))){
var inst_17908 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17910__$1,inst_17908);
} else {
if((state_val_17911 === (15))){
var inst_17880 = (state_17910[(7)]);
var inst_17897 = (state_17910[(2)]);
var inst_17898 = cljs.core.next.call(null,inst_17880);
var inst_17860 = inst_17898;
var inst_17861 = null;
var inst_17862 = (0);
var inst_17863 = (0);
var state_17910__$1 = (function (){var statearr_17913 = state_17910;
(statearr_17913[(8)] = inst_17897);

(statearr_17913[(9)] = inst_17862);

(statearr_17913[(10)] = inst_17861);

(statearr_17913[(11)] = inst_17860);

(statearr_17913[(12)] = inst_17863);

return statearr_17913;
})();
var statearr_17914_17939 = state_17910__$1;
(statearr_17914_17939[(2)] = null);

(statearr_17914_17939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (13))){
var inst_17880 = (state_17910[(7)]);
var inst_17889 = cljs.core.first.call(null,inst_17880);
var inst_17890 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_17891 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17892 = [inst_17891,klipse_clj.repl.current_ns_eval];
var inst_17893 = cljs.core.PersistentHashMap.fromArrays(inst_17890,inst_17892);
var inst_17894 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_17889,inst_17893);
var inst_17895 = cljs.core.first.call(null,inst_17894);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(15),inst_17895);
} else {
if((state_val_17911 === (6))){
var inst_17880 = (state_17910[(7)]);
var inst_17860 = (state_17910[(11)]);
var inst_17880__$1 = cljs.core.seq.call(null,inst_17860);
var state_17910__$1 = (function (){var statearr_17915 = state_17910;
(statearr_17915[(7)] = inst_17880__$1);

return statearr_17915;
})();
if(inst_17880__$1){
var statearr_17916_17940 = state_17910__$1;
(statearr_17916_17940[(1)] = (9));

} else {
var statearr_17917_17941 = state_17910__$1;
(statearr_17917_17941[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (3))){
var inst_17862 = (state_17910[(9)]);
var inst_17863 = (state_17910[(12)]);
var inst_17865 = (inst_17863 < inst_17862);
var inst_17866 = inst_17865;
var state_17910__$1 = state_17910;
if(cljs.core.truth_(inst_17866)){
var statearr_17918_17942 = state_17910__$1;
(statearr_17918_17942[(1)] = (5));

} else {
var statearr_17919_17943 = state_17910__$1;
(statearr_17919_17943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (12))){
var inst_17880 = (state_17910[(7)]);
var inst_17884 = cljs.core.chunk_first.call(null,inst_17880);
var inst_17885 = cljs.core.chunk_rest.call(null,inst_17880);
var inst_17886 = cljs.core.count.call(null,inst_17884);
var inst_17860 = inst_17885;
var inst_17861 = inst_17884;
var inst_17862 = inst_17886;
var inst_17863 = (0);
var state_17910__$1 = (function (){var statearr_17920 = state_17910;
(statearr_17920[(9)] = inst_17862);

(statearr_17920[(10)] = inst_17861);

(statearr_17920[(11)] = inst_17860);

(statearr_17920[(12)] = inst_17863);

return statearr_17920;
})();
var statearr_17921_17944 = state_17910__$1;
(statearr_17921_17944[(2)] = null);

(statearr_17921_17944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (2))){
var inst_17851 = (state_17910[(2)]);
var inst_17856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17857 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_17858 = (new cljs.core.PersistentVector(null,2,(5),inst_17856,inst_17857,null));
var inst_17859 = cljs.core.seq.call(null,inst_17858);
var inst_17860 = inst_17859;
var inst_17861 = null;
var inst_17862 = (0);
var inst_17863 = (0);
var state_17910__$1 = (function (){var statearr_17922 = state_17910;
(statearr_17922[(9)] = inst_17862);

(statearr_17922[(13)] = inst_17851);

(statearr_17922[(10)] = inst_17861);

(statearr_17922[(11)] = inst_17860);

(statearr_17922[(12)] = inst_17863);

return statearr_17922;
})();
var statearr_17923_17945 = state_17910__$1;
(statearr_17923_17945[(2)] = null);

(statearr_17923_17945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (11))){
var inst_17904 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17924_17946 = state_17910__$1;
(statearr_17924_17946[(2)] = inst_17904);

(statearr_17924_17946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (9))){
var inst_17880 = (state_17910[(7)]);
var inst_17882 = cljs.core.chunked_seq_QMARK_.call(null,inst_17880);
var state_17910__$1 = state_17910;
if(inst_17882){
var statearr_17925_17947 = state_17910__$1;
(statearr_17925_17947[(1)] = (12));

} else {
var statearr_17926_17948 = state_17910__$1;
(statearr_17926_17948[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (5))){
var inst_17861 = (state_17910[(10)]);
var inst_17863 = (state_17910[(12)]);
var inst_17868 = cljs.core._nth.call(null,inst_17861,inst_17863);
var inst_17869 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_17870 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_17871 = [inst_17870,klipse_clj.repl.current_ns_eval];
var inst_17872 = cljs.core.PersistentHashMap.fromArrays(inst_17869,inst_17871);
var inst_17873 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_17868,inst_17872);
var inst_17874 = cljs.core.first.call(null,inst_17873);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(8),inst_17874);
} else {
if((state_val_17911 === (14))){
var inst_17901 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17930_17949 = state_17910__$1;
(statearr_17930_17949[(2)] = inst_17901);

(statearr_17930_17949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (10))){
var state_17910__$1 = state_17910;
var statearr_17931_17950 = state_17910__$1;
(statearr_17931_17950[(2)] = null);

(statearr_17931_17950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (8))){
var inst_17862 = (state_17910[(9)]);
var inst_17861 = (state_17910[(10)]);
var inst_17860 = (state_17910[(11)]);
var inst_17863 = (state_17910[(12)]);
var inst_17876 = (state_17910[(2)]);
var inst_17877 = (inst_17863 + (1));
var tmp17927 = inst_17862;
var tmp17928 = inst_17861;
var tmp17929 = inst_17860;
var inst_17860__$1 = tmp17929;
var inst_17861__$1 = tmp17928;
var inst_17862__$1 = tmp17927;
var inst_17863__$1 = inst_17877;
var state_17910__$1 = (function (){var statearr_17932 = state_17910;
(statearr_17932[(14)] = inst_17876);

(statearr_17932[(9)] = inst_17862__$1);

(statearr_17932[(10)] = inst_17861__$1);

(statearr_17932[(11)] = inst_17860__$1);

(statearr_17932[(12)] = inst_17863__$1);

return statearr_17932;
})();
var statearr_17933_17951 = state_17910__$1;
(statearr_17933_17951[(2)] = null);

(statearr_17933_17951[(1)] = (3));


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
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____0 = (function (){
var statearr_17934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17934[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__);

(statearr_17934[(1)] = (1));

return statearr_17934;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____1 = (function (state_17910){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_17910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e17935){if((e17935 instanceof Object)){
var ex__14480__auto__ = e17935;
var statearr_17936_17952 = state_17910;
(statearr_17936_17952[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_17910;
state_17910 = G__17953;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_17937 = f__14528__auto__.call(null);
(statearr_17937[(6)] = c__14527__auto__);

return statearr_17937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_17956){
var state_val_17957 = (state_17956[(1)]);
if((state_val_17957 === (1))){
var inst_17954 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17956__$1,inst_17954);
} else {
return null;
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____0 = (function (){
var statearr_17958 = [null,null,null,null,null,null,null];
(statearr_17958[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__);

(statearr_17958[(1)] = (1));

return statearr_17958;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____1 = (function (state_17956){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_17956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e17959){if((e17959 instanceof Object)){
var ex__14480__auto__ = e17959;
var statearr_17960_17962 = state_17956;
(statearr_17960_17962[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17963 = state_17956;
state_17956 = G__17963;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__ = function(state_17956){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____1.call(this,state_17956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_17961 = f__14528__auto__.call(null);
(statearr_17961[(6)] = c__14527__auto__);

return statearr_17961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
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
}catch (e17964){if((e17964 instanceof Object)){
var e = e17964;

return e;
} else {
throw e17964;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__17965){
var map__17966 = p__17965;
var map__17966__$1 = (((((!((map__17966 == null))))?(((((map__17966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17966):map__17966);
var print_length = cljs.core.get.call(null,map__17966__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__17966__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__17969 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__17970 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__17970;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17971_17975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17972_17976 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17973_17977 = true;
var _STAR_print_fn_STAR__temp_val__17974_17978 = ((function (_STAR_print_newline_STAR__orig_val__17971_17975,_STAR_print_fn_STAR__orig_val__17972_17976,_STAR_print_newline_STAR__temp_val__17973_17977,sb__4661__auto__,_STAR_print_length_STAR__orig_val__17969,_STAR_print_length_STAR__temp_val__17970,map__17966,map__17966__$1,print_length,beautify_strings){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17971_17975,_STAR_print_fn_STAR__orig_val__17972_17976,_STAR_print_newline_STAR__temp_val__17973_17977,sb__4661__auto__,_STAR_print_length_STAR__orig_val__17969,_STAR_print_length_STAR__temp_val__17970,map__17966,map__17966__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17973_17977;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17974_17978;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = typeof value === 'string';
if(and__4120__auto__){
return beautify_strings;
} else {
return and__4120__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17972_17976;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17971_17975;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__17969;
}}catch (e17968){if((e17968 instanceof Object)){
var e = e17968;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e17968;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__17979,verbose_QMARK_,current_ns){
var map__17980 = p__17979;
var map__17980__$1 = (((((!((map__17980 == null))))?(((((map__17980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17980):map__17980);
var ns = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var _value = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__17980__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__17982,opts){
var map__17983 = p__17982;
var map__17983__$1 = (((((!((map__17983 == null))))?(((((map__17983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17983):map__17983);
var args = map__17983__$1;
var _ns = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"_ns","_ns",1411120581));
var _form = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__17983__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__17985,opts){
var map__17986 = p__17985;
var map__17986__$1 = (((((!((map__17986 == null))))?(((((map__17986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17986):map__17986);
var args = map__17986__$1;
var ns = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _form = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var _error = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"_error","_error",-332213735));
var _value = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var _success_QMARK_ = cljs.core.get.call(null,map__17986__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var vec__17988 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__17988,(0),null);
var val = cljs.core.nth.call(null,vec__17988,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__17991){
var map__17992 = p__17991;
var map__17992__$1 = (((((!((map__17992 == null))))?(((((map__17992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17992):map__17992);
var _form = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"_form","_form",-548236624));
var _warning = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"_warning","_warning",-1480614643));
var error = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _success_QMARK_ = cljs.core.get.call(null,map__17992__$1,new cljs.core.Keyword(null,"_success?","_success?",1206497483));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__17994){
var map__17995 = p__17994;
var map__17995__$1 = (((((!((map__17995 == null))))?(((((map__17995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17995):map__17995);
var foo = map__17995__$1;
var value = cljs.core.get.call(null,map__17995__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__17995__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__17997){
var map__17998 = p__17997;
var map__17998__$1 = (((((!((map__17998 == null))))?(((((map__17998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17998):map__17998);
var args = map__17998__$1;
var _file = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_file","_file",-267733516));
var _source = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_source","_source",-812884485));
var _lang = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_lang","_lang",-796607044));
var _name = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_name","_name",-1979660747));
var _path = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_path","_path",157802149));
var _cache = cljs.core.get.call(null,map__17998__$1,new cljs.core.Keyword(null,"_cache","_cache",442382032));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__18000){
var map__18001 = p__18000;
var map__18001__$1 = (((((!((map__18001 == null))))?(((((map__18001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18001):map__18001);
var source = cljs.core.get.call(null,map__18001__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__18003){
var map__18004 = p__18003;
var map__18004__$1 = (((((!((map__18004 == null))))?(((((map__18004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18004):map__18004);
var static_fns = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__18004__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,map__18004,map__18004__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,map__18004,map__18004__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
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
var c__14527__auto___18037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___18037,d){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto___18037,d){
return (function (state_18022){
var state_val_18023 = (state_18022[(1)]);
if((state_val_18023 === (1))){
var inst_18006 = cljs.core.PersistentVector.EMPTY;
var inst_18007 = inst_18006;
var state_18022__$1 = (function (){var statearr_18024 = state_18022;
(statearr_18024[(7)] = inst_18007);

return statearr_18024;
})();
var statearr_18025_18038 = state_18022__$1;
(statearr_18025_18038[(2)] = null);

(statearr_18025_18038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18023 === (2))){
var state_18022__$1 = state_18022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18022__$1,(4),c);
} else {
if((state_val_18023 === (3))){
var inst_18020 = (state_18022[(2)]);
var state_18022__$1 = state_18022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18022__$1,inst_18020);
} else {
if((state_val_18023 === (4))){
var inst_18010 = (state_18022[(8)]);
var inst_18010__$1 = (state_18022[(2)]);
var inst_18011 = (inst_18010__$1 == null);
var state_18022__$1 = (function (){var statearr_18026 = state_18022;
(statearr_18026[(8)] = inst_18010__$1);

return statearr_18026;
})();
if(cljs.core.truth_(inst_18011)){
var statearr_18027_18039 = state_18022__$1;
(statearr_18027_18039[(1)] = (5));

} else {
var statearr_18028_18040 = state_18022__$1;
(statearr_18028_18040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18023 === (5))){
var inst_18007 = (state_18022[(7)]);
var inst_18013 = cljs.core.async.put_BANG_.call(null,d,inst_18007);
var state_18022__$1 = state_18022;
var statearr_18029_18041 = state_18022__$1;
(statearr_18029_18041[(2)] = inst_18013);

(statearr_18029_18041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18023 === (6))){
var inst_18010 = (state_18022[(8)]);
var inst_18007 = (state_18022[(7)]);
var inst_18015 = cljs.core.conj.call(null,inst_18007,inst_18010);
var inst_18007__$1 = inst_18015;
var state_18022__$1 = (function (){var statearr_18030 = state_18022;
(statearr_18030[(7)] = inst_18007__$1);

return statearr_18030;
})();
var statearr_18031_18042 = state_18022__$1;
(statearr_18031_18042[(2)] = null);

(statearr_18031_18042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18023 === (7))){
var inst_18018 = (state_18022[(2)]);
var state_18022__$1 = state_18022;
var statearr_18032_18043 = state_18022__$1;
(statearr_18032_18043[(2)] = inst_18018);

(statearr_18032_18043[(1)] = (3));


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
});})(c__14527__auto___18037,d))
;
return ((function (switch__14476__auto__,c__14527__auto___18037,d){
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____0 = (function (){
var statearr_18033 = [null,null,null,null,null,null,null,null,null];
(statearr_18033[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__);

(statearr_18033[(1)] = (1));

return statearr_18033;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____1 = (function (state_18022){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18034){if((e18034 instanceof Object)){
var ex__14480__auto__ = e18034;
var statearr_18035_18044 = state_18022;
(statearr_18035_18044[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18045 = state_18022;
state_18022 = G__18045;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__ = function(state_18022){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____1.call(this,state_18022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto___18037,d))
})();
var state__14529__auto__ = (function (){var statearr_18036 = f__14528__auto__.call(null);
(statearr_18036[(6)] = c__14527__auto___18037);

return statearr_18036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___18037,d))
);


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__18046){
var map__18047 = p__18046;
var map__18047__$1 = (((((!((map__18047 == null))))?(((((map__18047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18047):map__18047);
var static_fns = cljs.core.get.call(null,map__18047__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__18047__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var verbose_QMARK_ = cljs.core.get.call(null,map__18047__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__18047__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__18047__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var _STAR_cljs_warning_handlers_STAR__orig_val__18049 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__18050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__18050;

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function (state_18059){
var state_val_18060 = (state_18059[(1)]);
if((state_val_18060 === (1))){
var inst_18051 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_18059__$1 = state_18059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18059__$1,(2),inst_18051);
} else {
if((state_val_18060 === (2))){
var inst_18053 = (state_18059[(2)]);
var inst_18054 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_18055 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_18056 = clojure.string.join.call(null,"",inst_18053);
var inst_18057 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_18056);
var state_18059__$1 = (function (){var statearr_18061 = state_18059;
(statearr_18061[(7)] = inst_18054);

(statearr_18061[(8)] = inst_18055);

return statearr_18061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18059__$1,inst_18057);
} else {
return null;
}
}
});})(c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
;
return ((function (switch__14476__auto__,c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns){
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____1 = (function (state_18059){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__14480__auto__ = e18063;
var statearr_18064_18066 = state_18059;
(statearr_18064_18066[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18067 = state_18059;
state_18059 = G__18067;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__ = function(state_18059){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____1.call(this,state_18059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
})();
var state__14529__auto__ = (function (){var statearr_18065 = f__14528__auto__.call(null);
(statearr_18065[(6)] = c__14527__auto__);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return c__14527__auto__;
});})(_STAR_cljs_warning_handlers_STAR__orig_val__18049,_STAR_cljs_warning_handlers_STAR__temp_val__18050,res_chan,warnings_chan,agg_warnings_chan,map__18047,map__18047__$1,static_fns,external_libs,verbose_QMARK_,st,ns))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__18049;
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__18068 = cljs.core.conj.call(null,res,ch);
res = G__18068;
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
var _STAR_alias_map_STAR__orig_val__18069 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__18070 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__18071 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__18072 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__18073 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__18074 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__18075 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__18076 = ns;
var _STAR_cljs_ns_STAR__temp_val__18077 = ns;
var _STAR_compiler_STAR__temp_val__18078 = st;
var resolve_symbol_temp_val__18079 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__18080 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__18075;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__18076;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__18077;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18078;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__18079;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__18080;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__18074;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__18073;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18072;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__18071;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__18070;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__18069;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__18084 = arguments.length;
switch (G__18084) {
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
var _STAR_alias_map_STAR__orig_val__18085 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__18086 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__18087 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__18088 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__18089 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__18090 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__18091 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__18092 = ns;
var _STAR_cljs_ns_STAR__temp_val__18093 = ns;
var _STAR_compiler_STAR__temp_val__18094 = st;
var resolve_symbol_temp_val__18095 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__18096 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__18091;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__18092;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__18093;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18094;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__18095;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__18096;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__18090;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__18089;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18088;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__18087;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__18086;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__18085;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__18101 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__18101,(0),null);
var rest_s = cljs.core.nth.call(null,vec__18101,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__18104 = rest_s;
var G__18105 = res;
s__$1 = G__18104;
res = G__18105;
continue;
} else {
var G__18106 = rest_s;
var G__18107 = cljs.core.conj.call(null,res,exp);
s__$1 = G__18106;
res = G__18107;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__18108){
var map__18109 = p__18108;
var map__18109__$1 = (((((!((map__18109 == null))))?(((((map__18109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18109):map__18109);
var result_element = cljs.core.get.call(null,map__18109__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__18109__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__14527__auto___18213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___18213,res_chan,warnings_chan){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto___18213,res_chan,warnings_chan){
return (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (7))){
var inst_18181 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18187_18214 = state_18185__$1;
(statearr_18187_18214[(2)] = inst_18181);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18185__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (1))){
var state_18185__$1 = state_18185;
var statearr_18188_18215 = state_18185__$1;
(statearr_18188_18215[(2)] = null);

(statearr_18188_18215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18185,(3),Object,null,(2));
var inst_18124 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18185__$1,(5),inst_18124);
} else {
if((state_val_18186 === (15))){
var inst_18159 = (state_18185[(7)]);
var inst_18141 = (state_18185[(8)]);
var inst_18168 = (state_18185[(9)]);
var inst_18170 = (state_18185[(2)]);
var inst_18171 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18141),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18170)].join('');
var inst_18139 = inst_18168;
var inst_18140 = inst_18159;
var inst_18141__$1 = inst_18171;
var state_18185__$1 = (function (){var statearr_18189 = state_18185;
(statearr_18189[(10)] = inst_18139);

(statearr_18189[(8)] = inst_18141__$1);

(statearr_18189[(11)] = inst_18140);

return statearr_18189;
})();
var statearr_18190_18216 = state_18185__$1;
(statearr_18190_18216[(2)] = null);

(statearr_18190_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (13))){
var inst_18157 = (state_18185[(12)]);
var inst_18147 = (state_18185[(13)]);
var inst_18166 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_18167 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_18168 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_18147,inst_18166,inst_18167);
var state_18185__$1 = (function (){var statearr_18191 = state_18185;
(statearr_18191[(9)] = inst_18168);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18185__$1,(15),inst_18157);
} else {
if((state_val_18186 === (6))){
var inst_18139 = (state_18185[(10)]);
var inst_18146 = (state_18185[(14)]);
var inst_18146__$1 = cljs.core.nth.call(null,inst_18139,(0),null);
var inst_18147 = cljs.core.nth.call(null,inst_18139,(1),null);
var inst_18148 = cljs.core.seq.call(null,inst_18146__$1);
var state_18185__$1 = (function (){var statearr_18192 = state_18185;
(statearr_18192[(14)] = inst_18146__$1);

(statearr_18192[(13)] = inst_18147);

return statearr_18192;
})();
if(inst_18148){
var statearr_18193_18217 = state_18185__$1;
(statearr_18193_18217[(1)] = (8));

} else {
var statearr_18194_18218 = state_18185__$1;
(statearr_18194_18218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (3))){
var inst_18111 = (state_18185[(2)]);
var inst_18112 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_18113 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18114 = [inst_18111];
var inst_18115 = cljs.core.PersistentHashMap.fromArrays(inst_18113,inst_18114);
var inst_18116 = cljs.core.async.put_BANG_.call(null,res_chan,inst_18115);
var inst_18117 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18118 = [inst_18111];
var inst_18119 = cljs.core.PersistentHashMap.fromArrays(inst_18117,inst_18118);
var inst_18120 = klipse_clj.lang.clojure.populate_err.call(null,inst_18119,opts);
var state_18185__$1 = (function (){var statearr_18195 = state_18185;
(statearr_18195[(15)] = inst_18116);

(statearr_18195[(16)] = inst_18112);

return statearr_18195;
})();
var statearr_18196_18219 = state_18185__$1;
(statearr_18196_18219[(2)] = inst_18120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18185__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (12))){
var inst_18159 = (state_18185[(7)]);
var inst_18162 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_18163 = cljs.core.async.put_BANG_.call(null,res_chan,inst_18159);
var inst_18164 = klipse_clj.lang.clojure.populate_err.call(null,inst_18159,opts);
var state_18185__$1 = (function (){var statearr_18197 = state_18185;
(statearr_18197[(17)] = inst_18162);

(statearr_18197[(18)] = inst_18163);

return statearr_18197;
})();
var statearr_18198_18220 = state_18185__$1;
(statearr_18198_18220[(2)] = inst_18164);

(statearr_18198_18220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (2))){
var inst_18183 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18185__$1,inst_18183);
} else {
if((state_val_18186 === (11))){
var inst_18159 = (state_18185[(7)]);
var inst_18159__$1 = (state_18185[(2)]);
var inst_18160 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_18159__$1);
var state_18185__$1 = (function (){var statearr_18199 = state_18185;
(statearr_18199[(7)] = inst_18159__$1);

return statearr_18199;
})();
if(cljs.core.truth_(inst_18160)){
var statearr_18200_18221 = state_18185__$1;
(statearr_18200_18221[(1)] = (12));

} else {
var statearr_18201_18222 = state_18185__$1;
(statearr_18201_18222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (9))){
var inst_18141 = (state_18185[(8)]);
var inst_18140 = (state_18185[(11)]);
var inst_18176 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_18141);
var inst_18177 = cljs.core.async.put_BANG_.call(null,res_chan,inst_18140);
var state_18185__$1 = (function (){var statearr_18202 = state_18185;
(statearr_18202[(19)] = inst_18176);

return statearr_18202;
})();
var statearr_18203_18223 = state_18185__$1;
(statearr_18203_18223[(2)] = inst_18177);

(statearr_18203_18223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (5))){
var inst_18126 = (state_18185[(2)]);
var inst_18134 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_18135 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_18136 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_18134,inst_18135);
var inst_18137 = cljs.core.nth.call(null,inst_18136,(0),null);
var inst_18138 = cljs.core.nth.call(null,inst_18136,(1),null);
var inst_18139 = inst_18136;
var inst_18140 = null;
var inst_18141 = "";
var state_18185__$1 = (function (){var statearr_18204 = state_18185;
(statearr_18204[(10)] = inst_18139);

(statearr_18204[(8)] = inst_18141);

(statearr_18204[(20)] = inst_18137);

(statearr_18204[(21)] = inst_18138);

(statearr_18204[(22)] = inst_18126);

(statearr_18204[(11)] = inst_18140);

return statearr_18204;
})();
var statearr_18205_18224 = state_18185__$1;
(statearr_18205_18224[(2)] = null);

(statearr_18205_18224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (14))){
var inst_18174 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18206_18225 = state_18185__$1;
(statearr_18206_18225[(2)] = inst_18174);

(statearr_18206_18225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (10))){
var inst_18179 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18207_18226 = state_18185__$1;
(statearr_18207_18226[(2)] = inst_18179);

(statearr_18207_18226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (8))){
var inst_18146 = (state_18185[(14)]);
var inst_18153 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_18154 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_18153,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_18155 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_18146,inst_18154);
var inst_18156 = cljs.core.nth.call(null,inst_18155,(0),null);
var inst_18157 = cljs.core.nth.call(null,inst_18155,(1),null);
var state_18185__$1 = (function (){var statearr_18208 = state_18185;
(statearr_18208[(12)] = inst_18157);

return statearr_18208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18185__$1,(11),inst_18156);
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
});})(c__14527__auto___18213,res_chan,warnings_chan))
;
return ((function (switch__14476__auto__,c__14527__auto___18213,res_chan,warnings_chan){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____0 = (function (){
var statearr_18209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18209[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__);

(statearr_18209[(1)] = (1));

return statearr_18209;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____1 = (function (state_18185){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18210){if((e18210 instanceof Object)){
var ex__14480__auto__ = e18210;
var statearr_18211_18227 = state_18185;
(statearr_18211_18227[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18228 = state_18185;
state_18185 = G__18228;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto___18213,res_chan,warnings_chan))
})();
var state__14529__auto__ = (function (){var statearr_18212 = f__14528__auto__.call(null);
(statearr_18212[(6)] = c__14527__auto___18213);

return statearr_18212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___18213,res_chan,warnings_chan))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18285){
var state_val_18286 = (state_18285[(1)]);
if((state_val_18286 === (7))){
var inst_18254 = (state_18285[(7)]);
var inst_18258 = klipse_clj.repl.create_state_compile.call(null);
var inst_18259 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_18258,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_18260 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_18254,inst_18259);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18285__$1,(10),inst_18260);
} else {
if((state_val_18286 === (1))){
var state_18285__$1 = state_18285;
var statearr_18287_18308 = state_18285__$1;
(statearr_18287_18308[(2)] = null);

(statearr_18287_18308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18285,(3),Object,null,(2));
var inst_18243 = klipse_clj.repl.create_state_compile.call(null);
var inst_18244 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_18245 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_18243,inst_18244);
var inst_18246 = cljs.core.nth.call(null,inst_18245,(0),null);
var inst_18247 = cljs.core.nth.call(null,inst_18245,(1),null);
var inst_18248 = inst_18245;
var inst_18249 = "";
var state_18285__$1 = (function (){var statearr_18288 = state_18285;
(statearr_18288[(8)] = inst_18249);

(statearr_18288[(9)] = inst_18248);

(statearr_18288[(10)] = inst_18246);

(statearr_18288[(11)] = inst_18247);

return statearr_18288;
})();
var statearr_18289_18309 = state_18285__$1;
(statearr_18289_18309[(2)] = null);

(statearr_18289_18309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (13))){
var inst_18273 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18290_18310 = state_18285__$1;
(statearr_18290_18310[(2)] = inst_18273);

(statearr_18290_18310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (6))){
var inst_18281 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18291_18311 = state_18285__$1;
(statearr_18291_18311[(2)] = inst_18281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (3))){
var inst_18229 = (state_18285[(2)]);
var inst_18230 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18231 = [inst_18229];
var inst_18232 = cljs.core.PersistentHashMap.fromArrays(inst_18230,inst_18231);
var state_18285__$1 = state_18285;
var statearr_18292_18312 = state_18285__$1;
(statearr_18292_18312[(2)] = inst_18232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (12))){
var inst_18249 = (state_18285[(8)]);
var inst_18262 = (state_18285[(12)]);
var inst_18255 = (state_18285[(13)]);
var inst_18266 = klipse_clj.repl.create_state_compile.call(null);
var inst_18267 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_18268 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_18255,inst_18266,inst_18267);
var inst_18269 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_18262);
var inst_18270 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18249),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18269)].join('');
var inst_18248 = inst_18268;
var inst_18249__$1 = inst_18270;
var state_18285__$1 = (function (){var statearr_18293 = state_18285;
(statearr_18293[(8)] = inst_18249__$1);

(statearr_18293[(9)] = inst_18248);

return statearr_18293;
})();
var statearr_18294_18313 = state_18285__$1;
(statearr_18294_18313[(2)] = null);

(statearr_18294_18313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (2))){
var inst_18283 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18285__$1,inst_18283);
} else {
if((state_val_18286 === (11))){
var inst_18262 = (state_18285[(12)]);
var state_18285__$1 = state_18285;
var statearr_18295_18314 = state_18285__$1;
(statearr_18295_18314[(2)] = inst_18262);

(statearr_18295_18314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (9))){
var inst_18279 = (state_18285[(2)]);
var state_18285__$1 = state_18285;
var statearr_18296_18315 = state_18285__$1;
(statearr_18296_18315[(2)] = inst_18279);

(statearr_18296_18315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (5))){
var inst_18248 = (state_18285[(9)]);
var inst_18254 = (state_18285[(7)]);
var inst_18254__$1 = cljs.core.nth.call(null,inst_18248,(0),null);
var inst_18255 = cljs.core.nth.call(null,inst_18248,(1),null);
var inst_18256 = cljs.core.seq.call(null,inst_18254__$1);
var state_18285__$1 = (function (){var statearr_18297 = state_18285;
(statearr_18297[(13)] = inst_18255);

(statearr_18297[(7)] = inst_18254__$1);

return statearr_18297;
})();
if(inst_18256){
var statearr_18298_18316 = state_18285__$1;
(statearr_18298_18316[(1)] = (7));

} else {
var statearr_18299_18317 = state_18285__$1;
(statearr_18299_18317[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (10))){
var inst_18262 = (state_18285[(12)]);
var inst_18262__$1 = (state_18285[(2)]);
var inst_18263 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_18262__$1);
var state_18285__$1 = (function (){var statearr_18300 = state_18285;
(statearr_18300[(12)] = inst_18262__$1);

return statearr_18300;
})();
if(cljs.core.truth_(inst_18263)){
var statearr_18301_18318 = state_18285__$1;
(statearr_18301_18318[(1)] = (11));

} else {
var statearr_18302_18319 = state_18285__$1;
(statearr_18302_18319[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18286 === (8))){
var inst_18249 = (state_18285[(8)]);
var inst_18275 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_18276 = [inst_18249];
var inst_18277 = cljs.core.PersistentHashMap.fromArrays(inst_18275,inst_18276);
var state_18285__$1 = state_18285;
var statearr_18303_18320 = state_18285__$1;
(statearr_18303_18320[(2)] = inst_18277);

(statearr_18303_18320[(1)] = (9));


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
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____0 = (function (){
var statearr_18304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18304[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__);

(statearr_18304[(1)] = (1));

return statearr_18304;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____1 = (function (state_18285){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18305){if((e18305 instanceof Object)){
var ex__14480__auto__ = e18305;
var statearr_18306_18321 = state_18285;
(statearr_18306_18321[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18322 = state_18285;
state_18285 = G__18322;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__ = function(state_18285){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____1.call(this,state_18285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18307 = f__14528__auto__.call(null);
(statearr_18307[(6)] = c__14527__auto__);

return statearr_18307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18338){
var state_val_18339 = (state_18338[(1)]);
if((state_val_18339 === (1))){
var inst_18326 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_18327 = cljs.core.nth.call(null,inst_18326,(0),null);
var inst_18328 = cljs.core.nth.call(null,inst_18326,(1),null);
var state_18338__$1 = (function (){var statearr_18340 = state_18338;
(statearr_18340[(7)] = inst_18328);

return statearr_18340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18338__$1,(2),inst_18327);
} else {
if((state_val_18339 === (2))){
var inst_18328 = (state_18338[(7)]);
var inst_18330 = (state_18338[(2)]);
var inst_18331 = klipse_clj.lang.clojure.result_as_str.call(null,inst_18330,opts);
var state_18338__$1 = (function (){var statearr_18341 = state_18338;
(statearr_18341[(8)] = inst_18331);

return statearr_18341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18338__$1,(3),inst_18328);
} else {
if((state_val_18339 === (3))){
var inst_18331 = (state_18338[(8)]);
var inst_18333 = (state_18338[(2)]);
var inst_18334 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_18335 = [inst_18333,inst_18331];
var inst_18336 = cljs.core.PersistentHashMap.fromArrays(inst_18334,inst_18335);
var state_18338__$1 = state_18338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18338__$1,inst_18336);
} else {
return null;
}
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____0 = (function (){
var statearr_18342 = [null,null,null,null,null,null,null,null,null];
(statearr_18342[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__);

(statearr_18342[(1)] = (1));

return statearr_18342;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____1 = (function (state_18338){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18343){if((e18343 instanceof Object)){
var ex__14480__auto__ = e18343;
var statearr_18344_18346 = state_18338;
(statearr_18344_18346[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18347 = state_18338;
state_18338 = G__18347;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__ = function(state_18338){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____1.call(this,state_18338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18345 = f__14528__auto__.call(null);
(statearr_18345[(6)] = c__14527__auto__);

return statearr_18345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18360){
var state_val_18361 = (state_18360[(1)]);
if((state_val_18361 === (1))){
var inst_18351 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_18352 = cljs.core.nth.call(null,inst_18351,(0),null);
var inst_18353 = cljs.core.nth.call(null,inst_18351,(1),null);
var state_18360__$1 = (function (){var statearr_18362 = state_18360;
(statearr_18362[(7)] = inst_18353);

return statearr_18362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18360__$1,(2),inst_18352);
} else {
if((state_val_18361 === (2))){
var inst_18353 = (state_18360[(7)]);
var inst_18355 = (state_18360[(2)]);
var inst_18356 = klipse_clj.lang.clojure.result_as_str.call(null,inst_18355,opts);
var state_18360__$1 = (function (){var statearr_18363 = state_18360;
(statearr_18363[(8)] = inst_18356);

return statearr_18363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18360__$1,(3),inst_18353);
} else {
if((state_val_18361 === (3))){
var inst_18356 = (state_18360[(8)]);
var inst_18358 = (state_18360[(2)]);
var state_18360__$1 = (function (){var statearr_18364 = state_18360;
(statearr_18364[(9)] = inst_18358);

return statearr_18364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18360__$1,inst_18356);
} else {
return null;
}
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____0 = (function (){
var statearr_18365 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18365[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__);

(statearr_18365[(1)] = (1));

return statearr_18365;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____1 = (function (state_18360){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18366){if((e18366 instanceof Object)){
var ex__14480__auto__ = e18366;
var statearr_18367_18369 = state_18360;
(statearr_18367_18369[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18370 = state_18360;
state_18360 = G__18370;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__ = function(state_18360){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____1.call(this,state_18360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18368 = f__14528__auto__.call(null);
(statearr_18368[(6)] = c__14527__auto__);

return statearr_18368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__18372 = arguments.length;
switch (G__18372) {
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
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18379){
var state_val_18380 = (state_18379[(1)]);
if((state_val_18380 === (1))){
var inst_18373 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_18374 = cljs.core.first.call(null,inst_18373);
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18379__$1,(2),inst_18374);
} else {
if((state_val_18380 === (2))){
var inst_18376 = (state_18379[(2)]);
var inst_18377 = klipse_clj.lang.clojure.read_result.call(null,inst_18376);
var state_18379__$1 = state_18379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18379__$1,inst_18377);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14477__auto____0 = (function (){
var statearr_18381 = [null,null,null,null,null,null,null];
(statearr_18381[(0)] = klipse_clj$lang$clojure$state_machine__14477__auto__);

(statearr_18381[(1)] = (1));

return statearr_18381;
});
var klipse_clj$lang$clojure$state_machine__14477__auto____1 = (function (state_18379){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18382){if((e18382 instanceof Object)){
var ex__14480__auto__ = e18382;
var statearr_18383_18386 = state_18379;
(statearr_18383_18386[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18387 = state_18379;
state_18379 = G__18387;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14477__auto__ = function(state_18379){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14477__auto____1.call(this,state_18379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14477__auto____0;
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14477__auto____1;
return klipse_clj$lang$clojure$state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18384 = f__14528__auto__.call(null);
(statearr_18384[(6)] = c__14527__auto__);

return statearr_18384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18394){
var state_val_18395 = (state_18394[(1)]);
if((state_val_18395 === (1))){
var inst_18388 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18394__$1,(2),inst_18388);
} else {
if((state_val_18395 === (2))){
var inst_18390 = (state_18394[(2)]);
var inst_18391 = cljs.core.clj__GT_js.call(null,inst_18390);
var inst_18392 = cb.call(null,inst_18391);
var state_18394__$1 = state_18394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18394__$1,inst_18392);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____0 = (function (){
var statearr_18396 = [null,null,null,null,null,null,null];
(statearr_18396[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__);

(statearr_18396[(1)] = (1));

return statearr_18396;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____1 = (function (state_18394){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18397){if((e18397 instanceof Object)){
var ex__14480__auto__ = e18397;
var statearr_18398_18400 = state_18394;
(statearr_18398_18400[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18401 = state_18394;
state_18394 = G__18401;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__ = function(state_18394){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____1.call(this,state_18394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18399 = f__14528__auto__.call(null);
(statearr_18399[(6)] = c__14527__auto__);

return statearr_18399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__18403 = arguments.length;
switch (G__18403) {
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
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18409){
var state_val_18410 = (state_18409[(1)]);
if((state_val_18410 === (1))){
var inst_18404 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18409__$1,(2),inst_18404);
} else {
if((state_val_18410 === (2))){
var inst_18406 = (state_18409[(2)]);
var inst_18407 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_18406);
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18409__$1,inst_18407);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14477__auto____0 = (function (){
var statearr_18411 = [null,null,null,null,null,null,null];
(statearr_18411[(0)] = klipse_clj$lang$clojure$state_machine__14477__auto__);

(statearr_18411[(1)] = (1));

return statearr_18411;
});
var klipse_clj$lang$clojure$state_machine__14477__auto____1 = (function (state_18409){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18412){if((e18412 instanceof Object)){
var ex__14480__auto__ = e18412;
var statearr_18413_18416 = state_18409;
(statearr_18413_18416[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18417 = state_18409;
state_18409 = G__18417;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14477__auto__ = function(state_18409){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14477__auto____1.call(this,state_18409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14477__auto____0;
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14477__auto____1;
return klipse_clj$lang$clojure$state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18414 = f__14528__auto__.call(null);
(statearr_18414[(6)] = c__14527__auto__);

return statearr_18414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (1))){
var inst_18418 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18423__$1,(2),inst_18418);
} else {
if((state_val_18424 === (2))){
var inst_18420 = (state_18423[(2)]);
var inst_18421 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_18420);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18423__$1,inst_18421);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____0 = (function (){
var statearr_18425 = [null,null,null,null,null,null,null];
(statearr_18425[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__);

(statearr_18425[(1)] = (1));

return statearr_18425;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____1 = (function (state_18423){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object)){
var ex__14480__auto__ = e18426;
var statearr_18427_18429 = state_18423;
(statearr_18427_18429[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18430 = state_18423;
state_18423 = G__18430;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18428 = f__14528__auto__.call(null);
(statearr_18428[(6)] = c__14527__auto__);

return statearr_18428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__){
return (function (state_18437){
var state_val_18438 = (state_18437[(1)]);
if((state_val_18438 === (1))){
var inst_18431 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18437__$1,(2),inst_18431);
} else {
if((state_val_18438 === (2))){
var inst_18433 = (state_18437[(2)]);
var inst_18434 = cljs.core.second.call(null,inst_18433);
var inst_18435 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18434);
var state_18437__$1 = state_18437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18437__$1,inst_18435);
} else {
return null;
}
}
});})(c__14527__auto__))
;
return ((function (switch__14476__auto__,c__14527__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____0 = (function (){
var statearr_18439 = [null,null,null,null,null,null,null];
(statearr_18439[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__);

(statearr_18439[(1)] = (1));

return statearr_18439;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____1 = (function (state_18437){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18440){if((e18440 instanceof Object)){
var ex__14480__auto__ = e18440;
var statearr_18441_18443 = state_18437;
(statearr_18441_18443[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18444 = state_18437;
state_18437 = G__18444;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__ = function(state_18437){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____1.call(this,state_18437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__))
})();
var state__14529__auto__ = (function (){var statearr_18442 = f__14528__auto__.call(null);
(statearr_18442[(6)] = c__14527__auto__);

return statearr_18442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__))
);

return c__14527__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__18446){
var map__18447 = p__18446;
var map__18447__$1 = (((((!((map__18447 == null))))?(((((map__18447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18447):map__18447);
var opts = map__18447__$1;
var container_id = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__18447__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14527__auto___18537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_18506){
var state_val_18507 = (state_18506[(1)]);
if((state_val_18507 === (7))){
var inst_18457 = (state_18506[(2)]);
var inst_18462 = (function (){var _STAR_print_newline_STAR__orig_val__18458 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18459 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18460 = true;
return ((function (_STAR_print_newline_STAR__orig_val__18458,_STAR_print_fn_STAR__orig_val__18459,_STAR_print_newline_STAR__temp_val__18460,inst_18457,state_val_18507,c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__18445_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18445_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__18458,_STAR_print_fn_STAR__orig_val__18459,_STAR_print_newline_STAR__temp_val__18460,inst_18457,state_val_18507,c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_18463 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_18464 = cljs.core._STAR_print_fn_STAR_ = inst_18462;
var state_18506__$1 = (function (){var statearr_18508 = state_18506;
(statearr_18508[(7)] = inst_18457);

(statearr_18508[(8)] = inst_18464);

(statearr_18508[(9)] = inst_18463);

return statearr_18508;
})();
var statearr_18509_18538 = state_18506__$1;
(statearr_18509_18538[(2)] = null);

(statearr_18509_18538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (20))){
var inst_18495 = (state_18506[(2)]);
var inst_18496 = cljs.core.get.call(null,inst_18495,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_18497 = cljs.core.get.call(null,inst_18495,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_18498 = cljs.core.second.call(null,inst_18497);
var inst_18499 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18496),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18498)].join('');
var inst_18500 = cljs.core.async.put_BANG_.call(null,c,inst_18499);
var state_18506__$1 = state_18506;
var statearr_18510_18539 = state_18506__$1;
(statearr_18510_18539[(2)] = inst_18500);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18506__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (1))){
var inst_18449 = clojure.string.blank_QMARK_.call(null,exp);
var state_18506__$1 = state_18506;
if(inst_18449){
var statearr_18511_18540 = state_18506__$1;
(statearr_18511_18540[(1)] = (2));

} else {
var statearr_18512_18541 = state_18506__$1;
(statearr_18512_18541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (4))){
var inst_18504 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18506__$1,inst_18504);
} else {
if((state_val_18507 === (15))){
var state_18506__$1 = state_18506;
var statearr_18513_18542 = state_18506__$1;
(statearr_18513_18542[(2)] = true);

(statearr_18513_18542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (13))){
var state_18506__$1 = state_18506;
var statearr_18514_18543 = state_18506__$1;
(statearr_18514_18543[(2)] = false);

(statearr_18514_18543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (6))){
var state_18506__$1 = state_18506;
var statearr_18515_18544 = state_18506__$1;
(statearr_18515_18544[(2)] = null);

(statearr_18515_18544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (17))){
var inst_18487 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18516_18545 = state_18506__$1;
(statearr_18516_18545[(2)] = inst_18487);

(statearr_18516_18545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (3))){
var state_18506__$1 = state_18506;
if(cljs.core.truth_(setup_container_fn)){
var statearr_18517_18546 = state_18506__$1;
(statearr_18517_18546[(1)] = (5));

} else {
var statearr_18518_18547 = state_18506__$1;
(statearr_18518_18547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (12))){
var inst_18474 = (state_18506[(10)]);
var inst_18479 = inst_18474.cljs$lang$protocol_mask$partition0$;
var inst_18480 = (inst_18479 & (64));
var inst_18481 = inst_18474.cljs$core$ISeq$;
var inst_18482 = (cljs.core.PROTOCOL_SENTINEL === inst_18481);
var inst_18483 = ((inst_18480) || (inst_18482));
var state_18506__$1 = state_18506;
if(cljs.core.truth_(inst_18483)){
var statearr_18519_18548 = state_18506__$1;
(statearr_18519_18548[(1)] = (15));

} else {
var statearr_18520_18549 = state_18506__$1;
(statearr_18520_18549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (2))){
var inst_18451 = cljs.core.async.put_BANG_.call(null,c,"");
var state_18506__$1 = state_18506;
var statearr_18521_18550 = state_18506__$1;
(statearr_18521_18550[(2)] = inst_18451);

(statearr_18521_18550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (19))){
var inst_18474 = (state_18506[(10)]);
var state_18506__$1 = state_18506;
var statearr_18522_18551 = state_18506__$1;
(statearr_18522_18551[(2)] = inst_18474);

(statearr_18522_18551[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (11))){
var inst_18474 = (state_18506[(10)]);
var inst_18474__$1 = (state_18506[(2)]);
var inst_18476 = (inst_18474__$1 == null);
var inst_18477 = cljs.core.not.call(null,inst_18476);
var state_18506__$1 = (function (){var statearr_18523 = state_18506;
(statearr_18523[(10)] = inst_18474__$1);

return statearr_18523;
})();
if(inst_18477){
var statearr_18524_18552 = state_18506__$1;
(statearr_18524_18552[(1)] = (12));

} else {
var statearr_18525_18553 = state_18506__$1;
(statearr_18525_18553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (9))){
var inst_18465 = (state_18506[(2)]);
var inst_18466 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_18467 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_18506__$1 = (function (){var statearr_18526 = state_18506;
(statearr_18526[(11)] = inst_18465);

(statearr_18526[(12)] = inst_18467);

(statearr_18526[(13)] = inst_18466);

return statearr_18526;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18506__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (5))){
var inst_18454 = setup_container_fn.call(null,container_id);
var state_18506__$1 = state_18506;
var statearr_18527_18554 = state_18506__$1;
(statearr_18527_18554[(2)] = inst_18454);

(statearr_18527_18554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (14))){
var inst_18490 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
if(cljs.core.truth_(inst_18490)){
var statearr_18528_18555 = state_18506__$1;
(statearr_18528_18555[(1)] = (18));

} else {
var statearr_18529_18556 = state_18506__$1;
(statearr_18529_18556[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (16))){
var state_18506__$1 = state_18506;
var statearr_18530_18557 = state_18506__$1;
(statearr_18530_18557[(2)] = false);

(statearr_18530_18557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18506,null,null,(9),(8));
var inst_18472 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_18506__$1 = state_18506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18506__$1,(11),inst_18472);
} else {
if((state_val_18507 === (18))){
var inst_18474 = (state_18506[(10)]);
var inst_18492 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18474);
var state_18506__$1 = state_18506;
var statearr_18531_18558 = state_18506__$1;
(statearr_18531_18558[(2)] = inst_18492);

(statearr_18531_18558[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18507 === (8))){
var inst_18502 = (state_18506[(2)]);
var state_18506__$1 = state_18506;
var statearr_18532_18559 = state_18506__$1;
(statearr_18532_18559[(2)] = inst_18502);

(statearr_18532_18559[(1)] = (4));


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
});})(c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__14476__auto__,c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____0 = (function (){
var statearr_18533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18533[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__);

(statearr_18533[(1)] = (1));

return statearr_18533;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____1 = (function (state_18506){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18534){if((e18534 instanceof Object)){
var ex__14480__auto__ = e18534;
var statearr_18535_18560 = state_18506;
(statearr_18535_18560[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18561 = state_18506;
state_18506 = G__18561;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__ = function(state_18506){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____1.call(this,state_18506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__14529__auto__ = (function (){var statearr_18536 = f__14528__auto__.call(null);
(statearr_18536[(6)] = c__14527__auto___18537);

return statearr_18536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___18537,c,map__18447,map__18447__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
/**
 * Returns a promise with the result of the evaluation of exp
 */
klipse_clj.lang.clojure.str_eval_prom = (function klipse_clj$lang$clojure$str_eval_prom(exp,p__18563){
var map__18564 = p__18563;
var map__18564__$1 = (((((!((map__18564 == null))))?(((((map__18564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18564):map__18564);
var opts = map__18564__$1;
var verbose = cljs.core.get.call(null,map__18564__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var p = (new Promise(((function (map__18564,map__18564__$1,opts,verbose){
return (function (resolve,reject){
if(cljs.core.truth_(verbose)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto__,map__18564,map__18564__$1,opts,verbose){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto__,map__18564,map__18564__$1,opts,verbose){
return (function (state_18631){
var state_val_18632 = (state_18631[(1)]);
if((state_val_18632 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18631,null,null,(6),(5));
var inst_18579 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18631__$1,(8),inst_18579);
} else {
if((state_val_18632 === (20))){
var inst_18625 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18633_18673 = state_18631__$1;
(statearr_18633_18673[(2)] = inst_18625);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (1))){
var inst_18566 = clojure.string.blank_QMARK_.call(null,exp);
var state_18631__$1 = state_18631;
if(inst_18566){
var statearr_18634_18674 = state_18631__$1;
(statearr_18634_18674[(1)] = (2));

} else {
var statearr_18635_18675 = state_18631__$1;
(statearr_18635_18675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (24))){
var inst_18617 = console.info("[clojure] evaluated",exp);
var state_18631__$1 = state_18631;
var statearr_18636_18676 = state_18631__$1;
(statearr_18636_18676[(2)] = inst_18617);

(statearr_18636_18676[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (4))){
var inst_18629 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18631__$1,inst_18629);
} else {
if((state_val_18632 === (15))){
var inst_18581 = (state_18631[(7)]);
var inst_18599 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18581);
var state_18631__$1 = state_18631;
var statearr_18637_18677 = state_18631__$1;
(statearr_18637_18677[(2)] = inst_18599);

(statearr_18637_18677[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (21))){
var inst_18603 = (state_18631[(8)]);
var inst_18612 = console.warn(inst_18603);
var state_18631__$1 = state_18631;
var statearr_18638_18678 = state_18631__$1;
(statearr_18638_18678[(2)] = inst_18612);

(statearr_18638_18678[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (13))){
var state_18631__$1 = state_18631;
var statearr_18639_18679 = state_18631__$1;
(statearr_18639_18679[(2)] = false);

(statearr_18639_18679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (22))){
var state_18631__$1 = state_18631;
var statearr_18640_18680 = state_18631__$1;
(statearr_18640_18680[(2)] = null);

(statearr_18640_18680[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (6))){
var inst_18573 = (state_18631[(2)]);
var inst_18574 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_18631__$1 = (function (){var statearr_18641 = state_18631;
(statearr_18641[(9)] = inst_18573);

(statearr_18641[(10)] = inst_18574);

return statearr_18641;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (25))){
var state_18631__$1 = state_18631;
var statearr_18642_18681 = state_18631__$1;
(statearr_18642_18681[(2)] = null);

(statearr_18642_18681[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (17))){
var inst_18604 = (state_18631[(11)]);
var inst_18602 = (state_18631[(2)]);
var inst_18603 = cljs.core.get.call(null,inst_18602,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_18604__$1 = cljs.core.get.call(null,inst_18602,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_18605 = cljs.core.first.call(null,inst_18604__$1);
var inst_18606 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_18605);
var state_18631__$1 = (function (){var statearr_18643 = state_18631;
(statearr_18643[(11)] = inst_18604__$1);

(statearr_18643[(8)] = inst_18603);

return statearr_18643;
})();
if(inst_18606){
var statearr_18644_18682 = state_18631__$1;
(statearr_18644_18682[(1)] = (18));

} else {
var statearr_18645_18683 = state_18631__$1;
(statearr_18645_18683[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (3))){
var inst_18572 = cljs.core._STAR_print_newline_STAR_ = false;
var state_18631__$1 = (function (){var statearr_18646 = state_18631;
(statearr_18646[(12)] = inst_18572);

return statearr_18646;
})();
var statearr_18647_18684 = state_18631__$1;
(statearr_18647_18684[(2)] = null);

(statearr_18647_18684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (12))){
var state_18631__$1 = state_18631;
var statearr_18648_18685 = state_18631__$1;
(statearr_18648_18685[(2)] = true);

(statearr_18648_18685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (2))){
var inst_18568 = resolve.call(null,"");
var state_18631__$1 = state_18631;
var statearr_18649_18686 = state_18631__$1;
(statearr_18649_18686[(2)] = inst_18568);

(statearr_18649_18686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (23))){
var inst_18615 = (state_18631[(2)]);
var state_18631__$1 = (function (){var statearr_18650 = state_18631;
(statearr_18650[(13)] = inst_18615);

return statearr_18650;
})();
if(cljs.core.truth_(verbose)){
var statearr_18651_18687 = state_18631__$1;
(statearr_18651_18687[(1)] = (24));

} else {
var statearr_18652_18688 = state_18631__$1;
(statearr_18652_18688[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (19))){
var inst_18603 = (state_18631[(8)]);
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18603)){
var statearr_18653_18689 = state_18631__$1;
(statearr_18653_18689[(1)] = (21));

} else {
var statearr_18654_18690 = state_18631__$1;
(statearr_18654_18690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (11))){
var inst_18597 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18597)){
var statearr_18655_18691 = state_18631__$1;
(statearr_18655_18691[(1)] = (15));

} else {
var statearr_18656_18692 = state_18631__$1;
(statearr_18656_18692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (9))){
var inst_18581 = (state_18631[(7)]);
var inst_18586 = inst_18581.cljs$lang$protocol_mask$partition0$;
var inst_18587 = (inst_18586 & (64));
var inst_18588 = inst_18581.cljs$core$ISeq$;
var inst_18589 = (cljs.core.PROTOCOL_SENTINEL === inst_18588);
var inst_18590 = ((inst_18587) || (inst_18589));
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18590)){
var statearr_18657_18693 = state_18631__$1;
(statearr_18657_18693[(1)] = (12));

} else {
var statearr_18658_18694 = state_18631__$1;
(statearr_18658_18694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (5))){
var inst_18627 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18659_18695 = state_18631__$1;
(statearr_18659_18695[(2)] = inst_18627);

(statearr_18659_18695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (14))){
var inst_18594 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18660_18696 = state_18631__$1;
(statearr_18660_18696[(2)] = inst_18594);

(statearr_18660_18696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (26))){
var inst_18604 = (state_18631[(11)]);
var inst_18620 = (state_18631[(2)]);
var inst_18621 = cljs.core.second.call(null,inst_18604);
var inst_18622 = clojure.string.trim_newline.call(null,inst_18621);
var inst_18623 = resolve.call(null,inst_18622);
var state_18631__$1 = (function (){var statearr_18661 = state_18631;
(statearr_18661[(14)] = inst_18620);

return statearr_18661;
})();
var statearr_18662_18697 = state_18631__$1;
(statearr_18662_18697[(2)] = inst_18623);

(statearr_18662_18697[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (16))){
var inst_18581 = (state_18631[(7)]);
var state_18631__$1 = state_18631;
var statearr_18663_18698 = state_18631__$1;
(statearr_18663_18698[(2)] = inst_18581);

(statearr_18663_18698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (10))){
var state_18631__$1 = state_18631;
var statearr_18664_18699 = state_18631__$1;
(statearr_18664_18699[(2)] = false);

(statearr_18664_18699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (18))){
var inst_18604 = (state_18631[(11)]);
var inst_18608 = cljs.core.second.call(null,inst_18604);
var inst_18609 = reject.call(null,inst_18608);
var state_18631__$1 = state_18631;
var statearr_18665_18700 = state_18631__$1;
(statearr_18665_18700[(2)] = inst_18609);

(statearr_18665_18700[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (8))){
var inst_18581 = (state_18631[(7)]);
var inst_18581__$1 = (state_18631[(2)]);
var inst_18583 = (inst_18581__$1 == null);
var inst_18584 = cljs.core.not.call(null,inst_18583);
var state_18631__$1 = (function (){var statearr_18666 = state_18631;
(statearr_18666[(7)] = inst_18581__$1);

return statearr_18666;
})();
if(inst_18584){
var statearr_18667_18701 = state_18631__$1;
(statearr_18667_18701[(1)] = (9));

} else {
var statearr_18668_18702 = state_18631__$1;
(statearr_18668_18702[(1)] = (10));

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
});})(c__14527__auto__,map__18564,map__18564__$1,opts,verbose))
;
return ((function (switch__14476__auto__,c__14527__auto__,map__18564,map__18564__$1,opts,verbose){
return (function() {
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____0 = (function (){
var statearr_18669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18669[(0)] = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__);

(statearr_18669[(1)] = (1));

return statearr_18669;
});
var klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____1 = (function (state_18631){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18670){if((e18670 instanceof Object)){
var ex__14480__auto__ = e18670;
var statearr_18671_18703 = state_18631;
(statearr_18671_18703[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18704 = state_18631;
state_18631 = G__18704;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__ = function(state_18631){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____1.call(this,state_18631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____0;
klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto____1;
return klipse_clj$lang$clojure$str_eval_prom_$_state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto__,map__18564,map__18564__$1,opts,verbose))
})();
var state__14529__auto__ = (function (){var statearr_18672 = f__14528__auto__.call(null);
(statearr_18672[(6)] = c__14527__auto__);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto__,map__18564,map__18564__$1,opts,verbose))
);

return c__14527__auto__;
});})(map__18564,map__18564__$1,opts,verbose))
));
return p;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__18706 = arguments.length;
switch (G__18706) {
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
var c__14527__auto___18736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14527__auto___18736,c){
return (function (){
var f__14528__auto__ = (function (){var switch__14476__auto__ = ((function (c__14527__auto___18736,c){
return (function (state_18725){
var state_val_18726 = (state_18725[(1)]);
if((state_val_18726 === (1))){
var inst_18709 = (function (){var _STAR_print_fn_STAR__orig_val__18707 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_fn_STAR__orig_val__18707,state_val_18726,c__14527__auto___18736,c){
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
;})(_STAR_print_fn_STAR__orig_val__18707,state_val_18726,c__14527__auto___18736,c))
})();
var inst_18710 = cljs.core._STAR_print_fn_STAR_ = inst_18709;
var state_18725__$1 = (function (){var statearr_18727 = state_18725;
(statearr_18727[(7)] = inst_18710);

return statearr_18727;
})();
var statearr_18728_18737 = state_18725__$1;
(statearr_18728_18737[(2)] = null);

(statearr_18728_18737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (2))){
var inst_18723 = (state_18725[(2)]);
var state_18725__$1 = state_18725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18725__$1,inst_18723);
} else {
if((state_val_18726 === (3))){
var inst_18711 = (state_18725[(2)]);
var inst_18712 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var state_18725__$1 = (function (){var statearr_18729 = state_18725;
(statearr_18729[(8)] = inst_18711);

(statearr_18729[(9)] = inst_18712);

return statearr_18729;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18726 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18725,null,null,(3),(2));
var inst_18716 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_18717 = cljs.core.first.call(null,inst_18716);
var state_18725__$1 = state_18725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18725__$1,(5),inst_18717);
} else {
if((state_val_18726 === (5))){
var inst_18719 = (state_18725[(2)]);
var inst_18720 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_18719,opts);
var inst_18721 = cljs.core.async.put_BANG_.call(null,c,inst_18720);
var state_18725__$1 = state_18725;
var statearr_18730_18738 = state_18725__$1;
(statearr_18730_18738[(2)] = inst_18721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__14527__auto___18736,c))
;
return ((function (switch__14476__auto__,c__14527__auto___18736,c){
return (function() {
var klipse_clj$lang$clojure$state_machine__14477__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14477__auto____0 = (function (){
var statearr_18731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18731[(0)] = klipse_clj$lang$clojure$state_machine__14477__auto__);

(statearr_18731[(1)] = (1));

return statearr_18731;
});
var klipse_clj$lang$clojure$state_machine__14477__auto____1 = (function (state_18725){
while(true){
var ret_value__14478__auto__ = (function (){try{while(true){
var result__14479__auto__ = switch__14476__auto__.call(null,state_18725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14479__auto__;
}
break;
}
}catch (e18732){if((e18732 instanceof Object)){
var ex__14480__auto__ = e18732;
var statearr_18733_18739 = state_18725;
(statearr_18733_18739[(5)] = ex__14480__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18740 = state_18725;
state_18725 = G__18740;
continue;
} else {
return ret_value__14478__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14477__auto__ = function(state_18725){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14477__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14477__auto____1.call(this,state_18725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14477__auto____0;
klipse_clj$lang$clojure$state_machine__14477__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14477__auto____1;
return klipse_clj$lang$clojure$state_machine__14477__auto__;
})()
;})(switch__14476__auto__,c__14527__auto___18736,c))
})();
var state__14529__auto__ = (function (){var statearr_18734 = f__14528__auto__.call(null);
(statearr_18734[(6)] = c__14527__auto___18736);

return statearr_18734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14529__auto__);
});})(c__14527__auto___18736,c))
);


return c;
});

klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2;

