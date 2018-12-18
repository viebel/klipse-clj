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
return (function (state_16010){
var state_val_16011 = (state_16010[(1)]);
if((state_val_16011 === (7))){
var inst_16006 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16012_16038 = state_16010__$1;
(statearr_16012_16038[(2)] = inst_16006);

(statearr_16012_16038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (1))){
var inst_15951 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16010__$1,(2),inst_15951);
} else {
if((state_val_16011 === (4))){
var inst_16008 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16010__$1,inst_16008);
} else {
if((state_val_16011 === (15))){
var inst_15981 = (state_16010[(7)]);
var inst_15997 = (state_16010[(2)]);
var inst_15998 = cljs.core.next.call(null,inst_15981);
var inst_15962 = inst_15998;
var inst_15963 = null;
var inst_15964 = (0);
var inst_15965 = (0);
var state_16010__$1 = (function (){var statearr_16013 = state_16010;
(statearr_16013[(8)] = inst_15963);

(statearr_16013[(9)] = inst_15962);

(statearr_16013[(10)] = inst_15964);

(statearr_16013[(11)] = inst_15965);

(statearr_16013[(12)] = inst_15997);

return statearr_16013;
})();
var statearr_16014_16039 = state_16010__$1;
(statearr_16014_16039[(2)] = null);

(statearr_16014_16039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (13))){
var inst_15981 = (state_16010[(7)]);
var inst_15990 = cljs.core.first.call(null,inst_15981);
var inst_15991 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_15992 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_15993 = [inst_15992,klipse_clj.repl.current_ns_eval];
var inst_15994 = cljs.core.PersistentHashMap.fromArrays(inst_15991,inst_15993);
var inst_15995 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_15990,inst_15994);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16010__$1,(15),inst_15995);
} else {
if((state_val_16011 === (6))){
var inst_15981 = (state_16010[(7)]);
var inst_15962 = (state_16010[(9)]);
var inst_15981__$1 = cljs.core.seq.call(null,inst_15962);
var state_16010__$1 = (function (){var statearr_16015 = state_16010;
(statearr_16015[(7)] = inst_15981__$1);

return statearr_16015;
})();
if(inst_15981__$1){
var statearr_16016_16040 = state_16010__$1;
(statearr_16016_16040[(1)] = (9));

} else {
var statearr_16017_16041 = state_16010__$1;
(statearr_16017_16041[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (3))){
var inst_15964 = (state_16010[(10)]);
var inst_15965 = (state_16010[(11)]);
var inst_15967 = (inst_15965 < inst_15964);
var inst_15968 = inst_15967;
var state_16010__$1 = state_16010;
if(cljs.core.truth_(inst_15968)){
var statearr_16018_16042 = state_16010__$1;
(statearr_16018_16042[(1)] = (5));

} else {
var statearr_16019_16043 = state_16010__$1;
(statearr_16019_16043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (12))){
var inst_15981 = (state_16010[(7)]);
var inst_15985 = cljs.core.chunk_first.call(null,inst_15981);
var inst_15986 = cljs.core.chunk_rest.call(null,inst_15981);
var inst_15987 = cljs.core.count.call(null,inst_15985);
var inst_15962 = inst_15986;
var inst_15963 = inst_15985;
var inst_15964 = inst_15987;
var inst_15965 = (0);
var state_16010__$1 = (function (){var statearr_16020 = state_16010;
(statearr_16020[(8)] = inst_15963);

(statearr_16020[(9)] = inst_15962);

(statearr_16020[(10)] = inst_15964);

(statearr_16020[(11)] = inst_15965);

return statearr_16020;
})();
var statearr_16021_16044 = state_16010__$1;
(statearr_16021_16044[(2)] = null);

(statearr_16021_16044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (2))){
var inst_15953 = (state_16010[(2)]);
var inst_15958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15959 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_15960 = (new cljs.core.PersistentVector(null,2,(5),inst_15958,inst_15959,null));
var inst_15961 = cljs.core.seq.call(null,inst_15960);
var inst_15962 = inst_15961;
var inst_15963 = null;
var inst_15964 = (0);
var inst_15965 = (0);
var state_16010__$1 = (function (){var statearr_16022 = state_16010;
(statearr_16022[(13)] = inst_15953);

(statearr_16022[(8)] = inst_15963);

(statearr_16022[(9)] = inst_15962);

(statearr_16022[(10)] = inst_15964);

(statearr_16022[(11)] = inst_15965);

return statearr_16022;
})();
var statearr_16023_16045 = state_16010__$1;
(statearr_16023_16045[(2)] = null);

(statearr_16023_16045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (11))){
var inst_16004 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16024_16046 = state_16010__$1;
(statearr_16024_16046[(2)] = inst_16004);

(statearr_16024_16046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (9))){
var inst_15981 = (state_16010[(7)]);
var inst_15983 = cljs.core.chunked_seq_QMARK_.call(null,inst_15981);
var state_16010__$1 = state_16010;
if(inst_15983){
var statearr_16025_16047 = state_16010__$1;
(statearr_16025_16047[(1)] = (12));

} else {
var statearr_16026_16048 = state_16010__$1;
(statearr_16026_16048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (5))){
var inst_15963 = (state_16010[(8)]);
var inst_15965 = (state_16010[(11)]);
var inst_15970 = cljs.core._nth.call(null,inst_15963,inst_15965);
var inst_15971 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_15972 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_15973 = [inst_15972,klipse_clj.repl.current_ns_eval];
var inst_15974 = cljs.core.PersistentHashMap.fromArrays(inst_15971,inst_15973);
var inst_15975 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_15970,inst_15974);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16010__$1,(8),inst_15975);
} else {
if((state_val_16011 === (14))){
var inst_16001 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16030_16049 = state_16010__$1;
(statearr_16030_16049[(2)] = inst_16001);

(statearr_16030_16049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (10))){
var state_16010__$1 = state_16010;
var statearr_16031_16050 = state_16010__$1;
(statearr_16031_16050[(2)] = null);

(statearr_16031_16050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16011 === (8))){
var inst_15963 = (state_16010[(8)]);
var inst_15962 = (state_16010[(9)]);
var inst_15964 = (state_16010[(10)]);
var inst_15965 = (state_16010[(11)]);
var inst_15977 = (state_16010[(2)]);
var inst_15978 = (inst_15965 + (1));
var tmp16027 = inst_15963;
var tmp16028 = inst_15962;
var tmp16029 = inst_15964;
var inst_15962__$1 = tmp16028;
var inst_15963__$1 = tmp16027;
var inst_15964__$1 = tmp16029;
var inst_15965__$1 = inst_15978;
var state_16010__$1 = (function (){var statearr_16032 = state_16010;
(statearr_16032[(14)] = inst_15977);

(statearr_16032[(8)] = inst_15963__$1);

(statearr_16032[(9)] = inst_15962__$1);

(statearr_16032[(10)] = inst_15964__$1);

(statearr_16032[(11)] = inst_15965__$1);

return statearr_16032;
})();
var statearr_16033_16051 = state_16010__$1;
(statearr_16033_16051[(2)] = null);

(statearr_16033_16051[(1)] = (3));


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
var statearr_16034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16034[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__);

(statearr_16034[(1)] = (1));

return statearr_16034;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1 = (function (state_16010){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16035){if((e16035 instanceof Object)){
var ex__14973__auto__ = e16035;
var statearr_16036_16052 = state_16010;
(statearr_16036_16052[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16053 = state_16010;
state_16010 = G__16053;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__ = function(state_16010){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1.call(this,state_16010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16037 = f__14993__auto__.call(null);
(statearr_16037[(6)] = c__14992__auto__);

return statearr_16037;
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
return (function (state_16056){
var state_val_16057 = (state_16056[(1)]);
if((state_val_16057 === (1))){
var inst_16054 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_16056__$1 = state_16056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16056__$1,inst_16054);
} else {
return null;
}
});})(c__14992__auto__))
;
return ((function (switch__14969__auto__,c__14992__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0 = (function (){
var statearr_16058 = [null,null,null,null,null,null,null];
(statearr_16058[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__);

(statearr_16058[(1)] = (1));

return statearr_16058;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1 = (function (state_16056){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16059){if((e16059 instanceof Object)){
var ex__14973__auto__ = e16059;
var statearr_16060_16062 = state_16056;
(statearr_16060_16062[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16063 = state_16056;
state_16056 = G__16063;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__ = function(state_16056){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1.call(this,state_16056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16061 = f__14993__auto__.call(null);
(statearr_16061[(6)] = c__14992__auto__);

return statearr_16061;
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
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__16064){
var map__16065 = p__16064;
var map__16065__$1 = (((((!((map__16065 == null))))?(((((map__16065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16065):map__16065);
var print_length = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__16065__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__16068 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__16069 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__16069;

try{var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16070_16074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16071_16075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16072_16076 = true;
var _STAR_print_fn_STAR__temp_val__16073_16077 = ((function (_STAR_print_newline_STAR__orig_val__16070_16074,_STAR_print_fn_STAR__orig_val__16071_16075,_STAR_print_newline_STAR__temp_val__16072_16076,sb__4572__auto__,_STAR_print_length_STAR__orig_val__16068,_STAR_print_length_STAR__temp_val__16069,map__16065,map__16065__$1,print_length,beautify_strings){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__16070_16074,_STAR_print_fn_STAR__orig_val__16071_16075,_STAR_print_newline_STAR__temp_val__16072_16076,sb__4572__auto__,_STAR_print_length_STAR__orig_val__16068,_STAR_print_length_STAR__temp_val__16069,map__16065,map__16065__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16072_16076;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16073_16077;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__4036__auto__ = typeof value === 'string';
if(and__4036__auto__){
return beautify_strings;
} else {
return and__4036__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16071_16075;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16070_16074;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__16068;
}}catch (e16067){if((e16067 instanceof Object)){
var e = e16067;
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e16067;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__16078,verbose_QMARK_,current_ns){
var map__16079 = p__16078;
var map__16079__$1 = (((((!((map__16079 == null))))?(((((map__16079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16079):map__16079);
var ns = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16079__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
}catch (e16081){if((e16081 instanceof Object)){
var e = e16081;
return e;
} else {
throw e16081;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__16082,opts){
var map__16083 = p__16082;
var map__16083__$1 = (((((!((map__16083 == null))))?(((((map__16083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16083):map__16083);
var args = map__16083__$1;
var ns = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16083__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__16085){
var map__16086 = p__16085;
var map__16086__$1 = (((((!((map__16086 == null))))?(((((map__16086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16086):map__16086);
var form = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__16088){
var map__16089 = p__16088;
var map__16089__$1 = (((((!((map__16089 == null))))?(((((map__16089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16089):map__16089);
var foo = map__16089__$1;
var value = cljs.core.get.call(null,map__16089__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__16089__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__16091){
var map__16092 = p__16091;
var map__16092__$1 = (((((!((map__16092 == null))))?(((((map__16092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16092):map__16092);
var args = map__16092__$1;
var file = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__16092__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__16094){
var map__16095 = p__16094;
var map__16095__$1 = (((((!((map__16095 == null))))?(((((map__16095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16095):map__16095);
var source = cljs.core.get.call(null,map__16095__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__16097){
var map__16098 = p__16097;
var map__16098__$1 = (((((!((map__16098 == null))))?(((((map__16098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16098):map__16098);
var static_fns = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__16098__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4135__auto__ = max_eval_duration;
var y__4136__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits_orig_val__16100_16102 = cljs.compiler.emits;
var emits_temp_val__16101_16103 = the_emits;
cljs.compiler.emits = emits_temp_val__16101_16103;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__16100_16102,emits_temp_val__16101_16103,c,max_eval_duration__$1,the_emits,map__16098,map__16098__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__16100_16102,emits_temp_val__16101_16103,c,max_eval_duration__$1,the_emits,map__16098,map__16098__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__16100_16102;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__16104){
var map__16105 = p__16104;
var map__16105__$1 = (((((!((map__16105 == null))))?(((((map__16105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16105):map__16105);
var static_fns = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__16105__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4135__auto__ = max_eval_duration;
var y__4136__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var emits_orig_val__16107_16109 = cljs.compiler.emits;
var emits_temp_val__16108_16110 = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);
cljs.compiler.emits = emits_temp_val__16108_16110;

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__16107_16109,emits_temp_val__16108_16110,c,max_eval_duration__$1,map__16105,map__16105__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__16107_16109,emits_temp_val__16108_16110,c,max_eval_duration__$1,map__16105,map__16105__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__16107_16109;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__16111 = cljs.core.conj.call(null,res,ch);
res = G__16111;
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
var _STAR_alias_map_STAR__orig_val__16112 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__16113 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__16114 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__16115 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__16116 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__16117 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__16118 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__16119 = ns;
var _STAR_cljs_ns_STAR__temp_val__16120 = ns;
var _STAR_compiler_STAR__temp_val__16121 = st;
var resolve_symbol_temp_val__16122 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__16123 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__16118;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__16119;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__16120;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__16121;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__16122;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__16123;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__16117;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__16116;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__16115;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__16114;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__16113;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__16112;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__16127 = arguments.length;
switch (G__16127) {
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
var _STAR_alias_map_STAR__orig_val__16128 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__16129 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__16130 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__16131 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__16132 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__16133 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__16134 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__16135 = ns;
var _STAR_cljs_ns_STAR__temp_val__16136 = ns;
var _STAR_compiler_STAR__temp_val__16137 = st;
var resolve_symbol_temp_val__16138 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__16139 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__16134;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__16135;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__16136;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__16137;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__16138;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__16139;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__16133;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__16132;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__16131;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__16130;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__16129;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__16128;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__16141 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__16141,(0),null);
var rest_s = cljs.core.nth.call(null,vec__16141,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__16144 = rest_s;
var G__16145 = res;
s__$1 = G__16144;
res = G__16145;
continue;
} else {
var G__16146 = rest_s;
var G__16147 = cljs.core.conj.call(null,res,exp);
s__$1 = G__16146;
res = G__16147;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__16148){
var map__16149 = p__16148;
var map__16149__$1 = (((((!((map__16149 == null))))?(((((map__16149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16149):map__16149);
var result_element = cljs.core.get.call(null,map__16149__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__16149__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
return (function (state_16208){
var state_val_16209 = (state_16208[(1)]);
if((state_val_16209 === (7))){
var inst_16204 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16210_16231 = state_16208__$1;
(statearr_16210_16231[(2)] = inst_16204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (1))){
var state_16208__$1 = state_16208;
var statearr_16211_16232 = state_16208__$1;
(statearr_16211_16232[(2)] = null);

(statearr_16211_16232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16208,(3),Object,null,(2));
var inst_16159 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16208__$1,(5),inst_16159);
} else {
if((state_val_16209 === (13))){
var inst_16181 = (state_16208[(7)]);
var inst_16189 = (state_16208[(8)]);
var inst_16194 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_16195 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_16196 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_16181,inst_16194,inst_16195);
var inst_16174 = inst_16196;
var inst_16175 = inst_16189;
var state_16208__$1 = (function (){var statearr_16212 = state_16208;
(statearr_16212[(9)] = inst_16175);

(statearr_16212[(10)] = inst_16174);

return statearr_16212;
})();
var statearr_16213_16233 = state_16208__$1;
(statearr_16213_16233[(2)] = null);

(statearr_16213_16233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (6))){
var inst_16180 = (state_16208[(11)]);
var inst_16174 = (state_16208[(10)]);
var inst_16180__$1 = cljs.core.nth.call(null,inst_16174,(0),null);
var inst_16181 = cljs.core.nth.call(null,inst_16174,(1),null);
var inst_16182 = cljs.core.empty_QMARK_.call(null,inst_16180__$1);
var inst_16183 = (!(inst_16182));
var state_16208__$1 = (function (){var statearr_16214 = state_16208;
(statearr_16214[(11)] = inst_16180__$1);

(statearr_16214[(7)] = inst_16181);

return statearr_16214;
})();
if(inst_16183){
var statearr_16215_16234 = state_16208__$1;
(statearr_16215_16234[(1)] = (8));

} else {
var statearr_16216_16235 = state_16208__$1;
(statearr_16216_16235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (3))){
var inst_16151 = (state_16208[(2)]);
var inst_16152 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_16153 = [inst_16151];
var inst_16154 = cljs.core.PersistentHashMap.fromArrays(inst_16152,inst_16153);
var inst_16155 = klipse_clj.lang.clojure.populate_err.call(null,inst_16154,opts);
var state_16208__$1 = state_16208;
var statearr_16217_16236 = state_16208__$1;
(statearr_16217_16236[(2)] = inst_16155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (12))){
var inst_16189 = (state_16208[(8)]);
var inst_16192 = klipse_clj.lang.clojure.populate_err.call(null,inst_16189,opts);
var state_16208__$1 = state_16208;
var statearr_16218_16237 = state_16208__$1;
(statearr_16218_16237[(2)] = inst_16192);

(statearr_16218_16237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (2))){
var inst_16206 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16208__$1,inst_16206);
} else {
if((state_val_16209 === (11))){
var inst_16189 = (state_16208[(8)]);
var inst_16189__$1 = (state_16208[(2)]);
var inst_16190 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_16189__$1);
var state_16208__$1 = (function (){var statearr_16219 = state_16208;
(statearr_16219[(8)] = inst_16189__$1);

return statearr_16219;
})();
if(cljs.core.truth_(inst_16190)){
var statearr_16220_16238 = state_16208__$1;
(statearr_16220_16238[(1)] = (12));

} else {
var statearr_16221_16239 = state_16208__$1;
(statearr_16221_16239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (9))){
var inst_16175 = (state_16208[(9)]);
var state_16208__$1 = state_16208;
var statearr_16222_16240 = state_16208__$1;
(statearr_16222_16240[(2)] = inst_16175);

(statearr_16222_16240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (5))){
var inst_16161 = (state_16208[(2)]);
var inst_16169 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_16170 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_16171 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_16169,inst_16170);
var inst_16172 = cljs.core.nth.call(null,inst_16171,(0),null);
var inst_16173 = cljs.core.nth.call(null,inst_16171,(1),null);
var inst_16174 = inst_16171;
var inst_16175 = null;
var state_16208__$1 = (function (){var statearr_16223 = state_16208;
(statearr_16223[(12)] = inst_16173);

(statearr_16223[(13)] = inst_16161);

(statearr_16223[(14)] = inst_16172);

(statearr_16223[(9)] = inst_16175);

(statearr_16223[(10)] = inst_16174);

return statearr_16223;
})();
var statearr_16224_16241 = state_16208__$1;
(statearr_16224_16241[(2)] = null);

(statearr_16224_16241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (14))){
var inst_16199 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16225_16242 = state_16208__$1;
(statearr_16225_16242[(2)] = inst_16199);

(statearr_16225_16242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (10))){
var inst_16202 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16226_16243 = state_16208__$1;
(statearr_16226_16243[(2)] = inst_16202);

(statearr_16226_16243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16209 === (8))){
var inst_16180 = (state_16208[(11)]);
var inst_16185 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_16186 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_16185,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_16187 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_16180,inst_16186);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16208__$1,(11),inst_16187);
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
var statearr_16227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16227[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__);

(statearr_16227[(1)] = (1));

return statearr_16227;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1 = (function (state_16208){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16228){if((e16228 instanceof Object)){
var ex__14973__auto__ = e16228;
var statearr_16229_16244 = state_16208;
(statearr_16229_16244[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16245 = state_16208;
state_16208 = G__16245;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16230 = f__14993__auto__.call(null);
(statearr_16230[(6)] = c__14992__auto__);

return statearr_16230;
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
return (function (state_16303){
var state_val_16304 = (state_16303[(1)]);
if((state_val_16304 === (7))){
var inst_16271 = (state_16303[(7)]);
var inst_16276 = klipse_clj.repl.create_state_compile.call(null);
var inst_16277 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_16276,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_16278 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_16271,inst_16277);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16303__$1,(10),inst_16278);
} else {
if((state_val_16304 === (1))){
var state_16303__$1 = state_16303;
var statearr_16305_16326 = state_16303__$1;
(statearr_16305_16326[(2)] = null);

(statearr_16305_16326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16303,(3),Object,null,(2));
var inst_16260 = klipse_clj.repl.create_state_compile.call(null);
var inst_16261 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_16262 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_16260,inst_16261);
var inst_16263 = cljs.core.nth.call(null,inst_16262,(0),null);
var inst_16264 = cljs.core.nth.call(null,inst_16262,(1),null);
var inst_16265 = inst_16262;
var inst_16266 = "";
var state_16303__$1 = (function (){var statearr_16306 = state_16303;
(statearr_16306[(8)] = inst_16265);

(statearr_16306[(9)] = inst_16263);

(statearr_16306[(10)] = inst_16264);

(statearr_16306[(11)] = inst_16266);

return statearr_16306;
})();
var statearr_16307_16327 = state_16303__$1;
(statearr_16307_16327[(2)] = null);

(statearr_16307_16327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (13))){
var inst_16291 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16308_16328 = state_16303__$1;
(statearr_16308_16328[(2)] = inst_16291);

(statearr_16308_16328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (6))){
var inst_16299 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16309_16329 = state_16303__$1;
(statearr_16309_16329[(2)] = inst_16299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (3))){
var inst_16246 = (state_16303[(2)]);
var inst_16247 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_16248 = [inst_16246];
var inst_16249 = cljs.core.PersistentHashMap.fromArrays(inst_16247,inst_16248);
var state_16303__$1 = state_16303;
var statearr_16310_16330 = state_16303__$1;
(statearr_16310_16330[(2)] = inst_16249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (12))){
var inst_16272 = (state_16303[(12)]);
var inst_16280 = (state_16303[(13)]);
var inst_16266 = (state_16303[(11)]);
var inst_16284 = klipse_clj.repl.create_state_compile.call(null);
var inst_16285 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_16286 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_16272,inst_16284,inst_16285);
var inst_16287 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_16280);
var inst_16288 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16266),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16287)].join('');
var inst_16265 = inst_16286;
var inst_16266__$1 = inst_16288;
var state_16303__$1 = (function (){var statearr_16311 = state_16303;
(statearr_16311[(8)] = inst_16265);

(statearr_16311[(11)] = inst_16266__$1);

return statearr_16311;
})();
var statearr_16312_16331 = state_16303__$1;
(statearr_16312_16331[(2)] = null);

(statearr_16312_16331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (2))){
var inst_16301 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16303__$1,inst_16301);
} else {
if((state_val_16304 === (11))){
var inst_16280 = (state_16303[(13)]);
var state_16303__$1 = state_16303;
var statearr_16313_16332 = state_16303__$1;
(statearr_16313_16332[(2)] = inst_16280);

(statearr_16313_16332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (9))){
var inst_16297 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16314_16333 = state_16303__$1;
(statearr_16314_16333[(2)] = inst_16297);

(statearr_16314_16333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (5))){
var inst_16265 = (state_16303[(8)]);
var inst_16271 = (state_16303[(7)]);
var inst_16271__$1 = cljs.core.nth.call(null,inst_16265,(0),null);
var inst_16272 = cljs.core.nth.call(null,inst_16265,(1),null);
var inst_16273 = cljs.core.empty_QMARK_.call(null,inst_16271__$1);
var inst_16274 = (!(inst_16273));
var state_16303__$1 = (function (){var statearr_16315 = state_16303;
(statearr_16315[(12)] = inst_16272);

(statearr_16315[(7)] = inst_16271__$1);

return statearr_16315;
})();
if(inst_16274){
var statearr_16316_16334 = state_16303__$1;
(statearr_16316_16334[(1)] = (7));

} else {
var statearr_16317_16335 = state_16303__$1;
(statearr_16317_16335[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (10))){
var inst_16280 = (state_16303[(13)]);
var inst_16280__$1 = (state_16303[(2)]);
var inst_16281 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_16280__$1);
var state_16303__$1 = (function (){var statearr_16318 = state_16303;
(statearr_16318[(13)] = inst_16280__$1);

return statearr_16318;
})();
if(cljs.core.truth_(inst_16281)){
var statearr_16319_16336 = state_16303__$1;
(statearr_16319_16336[(1)] = (11));

} else {
var statearr_16320_16337 = state_16303__$1;
(statearr_16320_16337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (8))){
var inst_16266 = (state_16303[(11)]);
var inst_16293 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_16294 = [inst_16266];
var inst_16295 = cljs.core.PersistentHashMap.fromArrays(inst_16293,inst_16294);
var state_16303__$1 = state_16303;
var statearr_16321_16338 = state_16303__$1;
(statearr_16321_16338[(2)] = inst_16295);

(statearr_16321_16338[(1)] = (9));


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
var statearr_16322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16322[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__);

(statearr_16322[(1)] = (1));

return statearr_16322;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1 = (function (state_16303){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16323){if((e16323 instanceof Object)){
var ex__14973__auto__ = e16323;
var statearr_16324_16339 = state_16303;
(statearr_16324_16339[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16340 = state_16303;
state_16303 = G__16340;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__ = function(state_16303){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1.call(this,state_16303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16325 = f__14993__auto__.call(null);
(statearr_16325[(6)] = c__14992__auto__);

return statearr_16325;
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
return (function (state_16346){
var state_val_16347 = (state_16346[(1)]);
if((state_val_16347 === (1))){
var inst_16341 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16346__$1,(2),inst_16341);
} else {
if((state_val_16347 === (2))){
var inst_16343 = (state_16346[(2)]);
var inst_16344 = klipse_clj.lang.clojure.result_as_str.call(null,inst_16343,opts);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16346__$1,inst_16344);
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
var statearr_16348 = [null,null,null,null,null,null,null];
(statearr_16348[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__);

(statearr_16348[(1)] = (1));

return statearr_16348;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1 = (function (state_16346){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16349){if((e16349 instanceof Object)){
var ex__14973__auto__ = e16349;
var statearr_16350_16352 = state_16346;
(statearr_16350_16352[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16353 = state_16346;
state_16346 = G__16353;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__ = function(state_16346){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1.call(this,state_16346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16351 = f__14993__auto__.call(null);
(statearr_16351[(6)] = c__14992__auto__);

return statearr_16351;
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
var G__16355 = arguments.length;
switch (G__16355) {
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
return (function (state_16361){
var state_val_16362 = (state_16361[(1)]);
if((state_val_16362 === (1))){
var inst_16356 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_16361__$1 = state_16361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16361__$1,(2),inst_16356);
} else {
if((state_val_16362 === (2))){
var inst_16358 = (state_16361[(2)]);
var inst_16359 = klipse_clj.lang.clojure.read_result.call(null,inst_16358);
var state_16361__$1 = state_16361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16361__$1,inst_16359);
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
var statearr_16363 = [null,null,null,null,null,null,null];
(statearr_16363[(0)] = klipse_clj$lang$clojure$state_machine__14970__auto__);

(statearr_16363[(1)] = (1));

return statearr_16363;
});
var klipse_clj$lang$clojure$state_machine__14970__auto____1 = (function (state_16361){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16364){if((e16364 instanceof Object)){
var ex__14973__auto__ = e16364;
var statearr_16365_16368 = state_16361;
(statearr_16365_16368[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16369 = state_16361;
state_16361 = G__16369;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14970__auto__ = function(state_16361){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14970__auto____1.call(this,state_16361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14970__auto____0;
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14970__auto____1;
return klipse_clj$lang$clojure$state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16366 = f__14993__auto__.call(null);
(statearr_16366[(6)] = c__14992__auto__);

return statearr_16366;
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
return (function (state_16376){
var state_val_16377 = (state_16376[(1)]);
if((state_val_16377 === (1))){
var inst_16370 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16376__$1,(2),inst_16370);
} else {
if((state_val_16377 === (2))){
var inst_16372 = (state_16376[(2)]);
var inst_16373 = cljs.core.clj__GT_js.call(null,inst_16372);
var inst_16374 = cb.call(null,inst_16373);
var state_16376__$1 = state_16376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16376__$1,inst_16374);
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
var statearr_16378 = [null,null,null,null,null,null,null];
(statearr_16378[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__);

(statearr_16378[(1)] = (1));

return statearr_16378;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1 = (function (state_16376){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16379){if((e16379 instanceof Object)){
var ex__14973__auto__ = e16379;
var statearr_16380_16382 = state_16376;
(statearr_16380_16382[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16383 = state_16376;
state_16376 = G__16383;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__ = function(state_16376){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1.call(this,state_16376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16381 = f__14993__auto__.call(null);
(statearr_16381[(6)] = c__14992__auto__);

return statearr_16381;
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
var G__16385 = arguments.length;
switch (G__16385) {
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
return (function (state_16391){
var state_val_16392 = (state_16391[(1)]);
if((state_val_16392 === (1))){
var inst_16386 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_16391__$1 = state_16391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16391__$1,(2),inst_16386);
} else {
if((state_val_16392 === (2))){
var inst_16388 = (state_16391[(2)]);
var inst_16389 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_16388);
var state_16391__$1 = state_16391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16391__$1,inst_16389);
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
var statearr_16393 = [null,null,null,null,null,null,null];
(statearr_16393[(0)] = klipse_clj$lang$clojure$state_machine__14970__auto__);

(statearr_16393[(1)] = (1));

return statearr_16393;
});
var klipse_clj$lang$clojure$state_machine__14970__auto____1 = (function (state_16391){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16394){if((e16394 instanceof Object)){
var ex__14973__auto__ = e16394;
var statearr_16395_16398 = state_16391;
(statearr_16395_16398[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16399 = state_16391;
state_16391 = G__16399;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14970__auto__ = function(state_16391){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14970__auto____1.call(this,state_16391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14970__auto____0;
klipse_clj$lang$clojure$state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14970__auto____1;
return klipse_clj$lang$clojure$state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16396 = f__14993__auto__.call(null);
(statearr_16396[(6)] = c__14992__auto__);

return statearr_16396;
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
return (function (state_16405){
var state_val_16406 = (state_16405[(1)]);
if((state_val_16406 === (1))){
var inst_16400 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16405__$1,(2),inst_16400);
} else {
if((state_val_16406 === (2))){
var inst_16402 = (state_16405[(2)]);
var inst_16403 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_16402);
var state_16405__$1 = state_16405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16405__$1,inst_16403);
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
var statearr_16407 = [null,null,null,null,null,null,null];
(statearr_16407[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__);

(statearr_16407[(1)] = (1));

return statearr_16407;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1 = (function (state_16405){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16408){if((e16408 instanceof Object)){
var ex__14973__auto__ = e16408;
var statearr_16409_16411 = state_16405;
(statearr_16409_16411[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16412 = state_16405;
state_16405 = G__16412;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__ = function(state_16405){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1.call(this,state_16405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16410 = f__14993__auto__.call(null);
(statearr_16410[(6)] = c__14992__auto__);

return statearr_16410;
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
return (function (state_16419){
var state_val_16420 = (state_16419[(1)]);
if((state_val_16420 === (1))){
var inst_16413 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_16419__$1 = state_16419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16419__$1,(2),inst_16413);
} else {
if((state_val_16420 === (2))){
var inst_16415 = (state_16419[(2)]);
var inst_16416 = cljs.core.second.call(null,inst_16415);
var inst_16417 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16416);
var state_16419__$1 = state_16419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16419__$1,inst_16417);
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
var statearr_16421 = [null,null,null,null,null,null,null];
(statearr_16421[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__);

(statearr_16421[(1)] = (1));

return statearr_16421;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1 = (function (state_16419){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16422){if((e16422 instanceof Object)){
var ex__14973__auto__ = e16422;
var statearr_16423_16425 = state_16419;
(statearr_16423_16425[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16426 = state_16419;
state_16419 = G__16426;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__ = function(state_16419){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1.call(this,state_16419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto__))
})();
var state__14994__auto__ = (function (){var statearr_16424 = f__14993__auto__.call(null);
(statearr_16424[(6)] = c__14992__auto__);

return statearr_16424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto__))
);

return c__14992__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__16428){
var map__16429 = p__16428;
var map__16429__$1 = (((((!((map__16429 == null))))?(((((map__16429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16429):map__16429);
var opts = map__16429__$1;
var container_id = cljs.core.get.call(null,map__16429__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__16429__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__16429__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14992__auto___16481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__14993__auto__ = (function (){var switch__14969__auto__ = ((function (c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_16463){
var state_val_16464 = (state_16463[(1)]);
if((state_val_16464 === (7))){
var inst_16439 = (state_16463[(2)]);
var inst_16444 = (function (){var _STAR_print_newline_STAR__orig_val__16440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16442 = true;
return ((function (_STAR_print_newline_STAR__orig_val__16440,_STAR_print_fn_STAR__orig_val__16441,_STAR_print_newline_STAR__temp_val__16442,inst_16439,state_val_16464,c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__16427_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__16427_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__16440,_STAR_print_fn_STAR__orig_val__16441,_STAR_print_newline_STAR__temp_val__16442,inst_16439,state_val_16464,c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_16445 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_16446 = cljs.core._STAR_print_fn_STAR_ = inst_16444;
var state_16463__$1 = (function (){var statearr_16465 = state_16463;
(statearr_16465[(7)] = inst_16439);

(statearr_16465[(8)] = inst_16446);

(statearr_16465[(9)] = inst_16445);

return statearr_16465;
})();
var statearr_16466_16482 = state_16463__$1;
(statearr_16466_16482[(2)] = null);

(statearr_16466_16482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (1))){
var inst_16431 = clojure.string.blank_QMARK_.call(null,exp);
var state_16463__$1 = state_16463;
if(inst_16431){
var statearr_16467_16483 = state_16463__$1;
(statearr_16467_16483[(1)] = (2));

} else {
var statearr_16468_16484 = state_16463__$1;
(statearr_16468_16484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (4))){
var inst_16461 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16463__$1,inst_16461);
} else {
if((state_val_16464 === (6))){
var state_16463__$1 = state_16463;
var statearr_16469_16485 = state_16463__$1;
(statearr_16469_16485[(2)] = null);

(statearr_16469_16485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (3))){
var state_16463__$1 = state_16463;
if(cljs.core.truth_(setup_container_fn)){
var statearr_16470_16486 = state_16463__$1;
(statearr_16470_16486[(1)] = (5));

} else {
var statearr_16471_16487 = state_16463__$1;
(statearr_16471_16487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (2))){
var inst_16433 = cljs.core.async.put_BANG_.call(null,c,"");
var state_16463__$1 = state_16463;
var statearr_16472_16488 = state_16463__$1;
(statearr_16472_16488[(2)] = inst_16433);

(statearr_16472_16488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (11))){
var inst_16455 = (state_16463[(2)]);
var inst_16456 = cljs.core.second.call(null,inst_16455);
var inst_16457 = cljs.core.async.put_BANG_.call(null,c,inst_16456);
var state_16463__$1 = state_16463;
var statearr_16473_16489 = state_16463__$1;
(statearr_16473_16489[(2)] = inst_16457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (9))){
var inst_16447 = (state_16463[(2)]);
var inst_16448 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_16449 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_16463__$1 = (function (){var statearr_16474 = state_16463;
(statearr_16474[(10)] = inst_16449);

(statearr_16474[(11)] = inst_16448);

(statearr_16474[(12)] = inst_16447);

return statearr_16474;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (5))){
var inst_16436 = setup_container_fn.call(null,container_id);
var state_16463__$1 = state_16463;
var statearr_16475_16490 = state_16463__$1;
(statearr_16475_16490[(2)] = inst_16436);

(statearr_16475_16490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16464 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16463,null,null,(9),(8));
var inst_16453 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_16463__$1 = state_16463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16463__$1,(11),inst_16453);
} else {
if((state_val_16464 === (8))){
var inst_16459 = (state_16463[(2)]);
var state_16463__$1 = state_16463;
var statearr_16476_16491 = state_16463__$1;
(statearr_16476_16491[(2)] = inst_16459);

(statearr_16476_16491[(1)] = (4));


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
});})(c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__14969__auto__,c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0 = (function (){
var statearr_16477 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16477[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__);

(statearr_16477[(1)] = (1));

return statearr_16477;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1 = (function (state_16463){
while(true){
var ret_value__14971__auto__ = (function (){try{while(true){
var result__14972__auto__ = switch__14969__auto__.call(null,state_16463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14972__auto__;
}
break;
}
}catch (e16478){if((e16478 instanceof Object)){
var ex__14973__auto__ = e16478;
var statearr_16479_16492 = state_16463;
(statearr_16479_16492[(5)] = ex__14973__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16493 = state_16463;
state_16463 = G__16493;
continue;
} else {
return ret_value__14971__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__ = function(state_16463){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1.call(this,state_16463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14970__auto__;
})()
;})(switch__14969__auto__,c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__14994__auto__ = (function (){var statearr_16480 = f__14993__auto__.call(null);
(statearr_16480[(6)] = c__14992__auto___16481);

return statearr_16480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14994__auto__);
});})(c__14992__auto___16481,c,map__16429,map__16429__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
