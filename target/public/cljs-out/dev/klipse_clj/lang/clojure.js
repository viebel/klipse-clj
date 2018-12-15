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
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_29941){
var state_val_29942 = (state_29941[(1)]);
if((state_val_29942 === (7))){
var inst_29937 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29943_29969 = state_29941__$1;
(statearr_29943_29969[(2)] = inst_29937);

(statearr_29943_29969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (1))){
var inst_29882 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29941__$1,(2),inst_29882);
} else {
if((state_val_29942 === (4))){
var inst_29939 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29941__$1,inst_29939);
} else {
if((state_val_29942 === (15))){
var inst_29912 = (state_29941[(7)]);
var inst_29928 = (state_29941[(2)]);
var inst_29929 = cljs.core.next.call(null,inst_29912);
var inst_29893 = inst_29929;
var inst_29894 = null;
var inst_29895 = (0);
var inst_29896 = (0);
var state_29941__$1 = (function (){var statearr_29944 = state_29941;
(statearr_29944[(8)] = inst_29896);

(statearr_29944[(9)] = inst_29928);

(statearr_29944[(10)] = inst_29893);

(statearr_29944[(11)] = inst_29895);

(statearr_29944[(12)] = inst_29894);

return statearr_29944;
})();
var statearr_29945_29970 = state_29941__$1;
(statearr_29945_29970[(2)] = null);

(statearr_29945_29970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (13))){
var inst_29912 = (state_29941[(7)]);
var inst_29921 = cljs.core.first.call(null,inst_29912);
var inst_29922 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_29923 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_29924 = [inst_29923,klipse_clj.repl.current_ns_eval];
var inst_29925 = cljs.core.PersistentHashMap.fromArrays(inst_29922,inst_29924);
var inst_29926 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_29921,inst_29925);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29941__$1,(15),inst_29926);
} else {
if((state_val_29942 === (6))){
var inst_29912 = (state_29941[(7)]);
var inst_29893 = (state_29941[(10)]);
var inst_29912__$1 = cljs.core.seq.call(null,inst_29893);
var state_29941__$1 = (function (){var statearr_29946 = state_29941;
(statearr_29946[(7)] = inst_29912__$1);

return statearr_29946;
})();
if(inst_29912__$1){
var statearr_29947_29971 = state_29941__$1;
(statearr_29947_29971[(1)] = (9));

} else {
var statearr_29948_29972 = state_29941__$1;
(statearr_29948_29972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (3))){
var inst_29896 = (state_29941[(8)]);
var inst_29895 = (state_29941[(11)]);
var inst_29898 = (inst_29896 < inst_29895);
var inst_29899 = inst_29898;
var state_29941__$1 = state_29941;
if(cljs.core.truth_(inst_29899)){
var statearr_29949_29973 = state_29941__$1;
(statearr_29949_29973[(1)] = (5));

} else {
var statearr_29950_29974 = state_29941__$1;
(statearr_29950_29974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (12))){
var inst_29912 = (state_29941[(7)]);
var inst_29916 = cljs.core.chunk_first.call(null,inst_29912);
var inst_29917 = cljs.core.chunk_rest.call(null,inst_29912);
var inst_29918 = cljs.core.count.call(null,inst_29916);
var inst_29893 = inst_29917;
var inst_29894 = inst_29916;
var inst_29895 = inst_29918;
var inst_29896 = (0);
var state_29941__$1 = (function (){var statearr_29951 = state_29941;
(statearr_29951[(8)] = inst_29896);

(statearr_29951[(10)] = inst_29893);

(statearr_29951[(11)] = inst_29895);

(statearr_29951[(12)] = inst_29894);

return statearr_29951;
})();
var statearr_29952_29975 = state_29941__$1;
(statearr_29952_29975[(2)] = null);

(statearr_29952_29975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (2))){
var inst_29884 = (state_29941[(2)]);
var inst_29889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29890 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_29891 = (new cljs.core.PersistentVector(null,2,(5),inst_29889,inst_29890,null));
var inst_29892 = cljs.core.seq.call(null,inst_29891);
var inst_29893 = inst_29892;
var inst_29894 = null;
var inst_29895 = (0);
var inst_29896 = (0);
var state_29941__$1 = (function (){var statearr_29953 = state_29941;
(statearr_29953[(8)] = inst_29896);

(statearr_29953[(13)] = inst_29884);

(statearr_29953[(10)] = inst_29893);

(statearr_29953[(11)] = inst_29895);

(statearr_29953[(12)] = inst_29894);

return statearr_29953;
})();
var statearr_29954_29976 = state_29941__$1;
(statearr_29954_29976[(2)] = null);

(statearr_29954_29976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (11))){
var inst_29935 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29955_29977 = state_29941__$1;
(statearr_29955_29977[(2)] = inst_29935);

(statearr_29955_29977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (9))){
var inst_29912 = (state_29941[(7)]);
var inst_29914 = cljs.core.chunked_seq_QMARK_.call(null,inst_29912);
var state_29941__$1 = state_29941;
if(inst_29914){
var statearr_29956_29978 = state_29941__$1;
(statearr_29956_29978[(1)] = (12));

} else {
var statearr_29957_29979 = state_29941__$1;
(statearr_29957_29979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (5))){
var inst_29896 = (state_29941[(8)]);
var inst_29894 = (state_29941[(12)]);
var inst_29901 = cljs.core._nth.call(null,inst_29894,inst_29896);
var inst_29902 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_29903 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_29904 = [inst_29903,klipse_clj.repl.current_ns_eval];
var inst_29905 = cljs.core.PersistentHashMap.fromArrays(inst_29902,inst_29904);
var inst_29906 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_29901,inst_29905);
var state_29941__$1 = state_29941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29941__$1,(8),inst_29906);
} else {
if((state_val_29942 === (14))){
var inst_29932 = (state_29941[(2)]);
var state_29941__$1 = state_29941;
var statearr_29961_29980 = state_29941__$1;
(statearr_29961_29980[(2)] = inst_29932);

(statearr_29961_29980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (10))){
var state_29941__$1 = state_29941;
var statearr_29962_29981 = state_29941__$1;
(statearr_29962_29981[(2)] = null);

(statearr_29962_29981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29942 === (8))){
var inst_29896 = (state_29941[(8)]);
var inst_29893 = (state_29941[(10)]);
var inst_29895 = (state_29941[(11)]);
var inst_29894 = (state_29941[(12)]);
var inst_29908 = (state_29941[(2)]);
var inst_29909 = (inst_29896 + (1));
var tmp29958 = inst_29893;
var tmp29959 = inst_29895;
var tmp29960 = inst_29894;
var inst_29893__$1 = tmp29958;
var inst_29894__$1 = tmp29960;
var inst_29895__$1 = tmp29959;
var inst_29896__$1 = inst_29909;
var state_29941__$1 = (function (){var statearr_29963 = state_29941;
(statearr_29963[(8)] = inst_29896__$1);

(statearr_29963[(14)] = inst_29908);

(statearr_29963[(10)] = inst_29893__$1);

(statearr_29963[(11)] = inst_29895__$1);

(statearr_29963[(12)] = inst_29894__$1);

return statearr_29963;
})();
var statearr_29964_29982 = state_29941__$1;
(statearr_29964_29982[(2)] = null);

(statearr_29964_29982[(1)] = (3));


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
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____0 = (function (){
var statearr_29965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29965[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__);

(statearr_29965[(1)] = (1));

return statearr_29965;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____1 = (function (state_29941){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_29941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e29966){if((e29966 instanceof Object)){
var ex__26536__auto__ = e29966;
var statearr_29967_29983 = state_29941;
(statearr_29967_29983[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29984 = state_29941;
state_29941 = G__29984;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__ = function(state_29941){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____1.call(this,state_29941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_29968 = f__26556__auto__.call(null);
(statearr_29968[(6)] = c__26555__auto__);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_29987){
var state_val_29988 = (state_29987[(1)]);
if((state_val_29988 === (1))){
var inst_29985 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else {
return null;
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____0 = (function (){
var statearr_29989 = [null,null,null,null,null,null,null];
(statearr_29989[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__);

(statearr_29989[(1)] = (1));

return statearr_29989;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____1 = (function (state_29987){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_29987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e29990){if((e29990 instanceof Object)){
var ex__26536__auto__ = e29990;
var statearr_29991_29993 = state_29987;
(statearr_29991_29993[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29994 = state_29987;
state_29987 = G__29994;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_29992 = f__26556__auto__.call(null);
(statearr_29992[(6)] = c__26555__auto__);

return statearr_29992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__29995){
var map__29996 = p__29995;
var map__29996__$1 = (((((!((map__29996 == null))))?(((((map__29996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29996):map__29996);
var print_length = cljs.core.get.call(null,map__29996__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__29996__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__29999 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__30000 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__30000;

try{var sb__21438__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30001_30005 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30002_30006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30003_30007 = true;
var _STAR_print_fn_STAR__temp_val__30004_30008 = ((function (_STAR_print_newline_STAR__orig_val__30001_30005,_STAR_print_fn_STAR__orig_val__30002_30006,_STAR_print_newline_STAR__temp_val__30003_30007,sb__21438__auto__,_STAR_print_length_STAR__orig_val__29999,_STAR_print_length_STAR__temp_val__30000,map__29996,map__29996__$1,print_length,beautify_strings){
return (function (x__21439__auto__){
return sb__21438__auto__.append(x__21439__auto__);
});})(_STAR_print_newline_STAR__orig_val__30001_30005,_STAR_print_fn_STAR__orig_val__30002_30006,_STAR_print_newline_STAR__temp_val__30003_30007,sb__21438__auto__,_STAR_print_length_STAR__orig_val__29999,_STAR_print_length_STAR__temp_val__30000,map__29996,map__29996__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30003_30007;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30004_30008;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__19399__auto__ = typeof value === 'string';
if(and__19399__auto__){
return beautify_strings;
} else {
return and__19399__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30002_30006;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30001_30005;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21438__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__29999;
}}catch (e29998){if((e29998 instanceof Object)){
var e = e29998;
return ["ERROR :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e29998;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__30009,verbose_QMARK_,current_ns){
var map__30010 = p__30009;
var map__30010__$1 = (((((!((map__30010 == null))))?(((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var ns = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
}catch (e30012){if((e30012 instanceof Object)){
var e = e30012;
return e;
} else {
throw e30012;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__30013,opts){
var map__30014 = p__30013;
var map__30014__$1 = (((((!((map__30014 == null))))?(((((map__30014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);
var args = map__30014__$1;
var ns = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30014__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__30016){
var map__30017 = p__30016;
var map__30017__$1 = (((((!((map__30017 == null))))?(((((map__30017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);
var form = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__30019){
var map__30020 = p__30019;
var map__30020__$1 = (((((!((map__30020 == null))))?(((((map__30020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);
var foo = map__30020__$1;
var value = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__30022){
var map__30023 = p__30022;
var map__30023__$1 = (((((!((map__30023 == null))))?(((((map__30023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);
var args = map__30023__$1;
var file = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__30025){
var map__30026 = p__30025;
var map__30026__$1 = (((((!((map__30026 == null))))?(((((map__30026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30026):map__30026);
var source = cljs.core.get.call(null,map__30026__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__30028){
var map__30029 = p__30028;
var map__30029__$1 = (((((!((map__30029 == null))))?(((((map__30029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30029):map__30029);
var static_fns = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__30029__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__20038__auto__ = max_eval_duration;
var y__20039__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__20038__auto__ > y__20039__auto__) ? x__20038__auto__ : y__20039__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits_orig_val__30031_30033 = cljs.compiler.emits;
var emits_temp_val__30032_30034 = the_emits;
cljs.compiler.emits = emits_temp_val__30032_30034;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__30031_30033,emits_temp_val__30032_30034,c,max_eval_duration__$1,the_emits,map__30029,map__30029__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__30031_30033,emits_temp_val__30032_30034,c,max_eval_duration__$1,the_emits,map__30029,map__30029__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__30031_30033;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__30035){
var map__30036 = p__30035;
var map__30036__$1 = (((((!((map__30036 == null))))?(((((map__30036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30036):map__30036);
var static_fns = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__20038__auto__ = max_eval_duration;
var y__20039__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__20038__auto__ > y__20039__auto__) ? x__20038__auto__ : y__20039__auto__);
})();
var emits_orig_val__30038_30040 = cljs.compiler.emits;
var emits_temp_val__30039_30041 = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);
cljs.compiler.emits = emits_temp_val__30039_30041;

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__30038_30040,emits_temp_val__30039_30041,c,max_eval_duration__$1,map__30036,map__30036__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__30038_30040,emits_temp_val__30039_30041,c,max_eval_duration__$1,map__30036,map__30036__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__30038_30040;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__30042 = cljs.core.conj.call(null,res,ch);
res = G__30042;
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
var _STAR_alias_map_STAR__orig_val__30043 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__30044 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__30045 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__30046 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__30047 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__30048 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__30049 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__30050 = ns;
var _STAR_cljs_ns_STAR__temp_val__30051 = ns;
var _STAR_compiler_STAR__temp_val__30052 = st;
var resolve_symbol_temp_val__30053 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__30054 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__30049;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__30050;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__30051;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__30052;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__30053;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__30054;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__30048;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__30047;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__30046;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__30045;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__30044;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__30043;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__30058 = arguments.length;
switch (G__30058) {
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
var _STAR_alias_map_STAR__orig_val__30059 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__30060 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__30061 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__30062 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__30063 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__30064 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__30065 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__30066 = ns;
var _STAR_cljs_ns_STAR__temp_val__30067 = ns;
var _STAR_compiler_STAR__temp_val__30068 = st;
var resolve_symbol_temp_val__30069 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__30070 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__30065;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__30066;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__30067;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__30068;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__30069;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__30070;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__30064;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__30063;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__30062;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__30061;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__30060;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__30059;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__30075 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__30075,(0),null);
var rest_s = cljs.core.nth.call(null,vec__30075,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__30078 = rest_s;
var G__30079 = res;
s__$1 = G__30078;
res = G__30079;
continue;
} else {
var G__30080 = rest_s;
var G__30081 = cljs.core.conj.call(null,res,exp);
s__$1 = G__30080;
res = G__30081;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__30082){
var map__30083 = p__30082;
var map__30083__$1 = (((((!((map__30083 == null))))?(((((map__30083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30083):map__30083);
var result_element = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__19399__auto__ = container;
if(cljs.core.truth_(and__19399__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__19399__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30142){
var state_val_30143 = (state_30142[(1)]);
if((state_val_30143 === (7))){
var inst_30138 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30144_30165 = state_30142__$1;
(statearr_30144_30165[(2)] = inst_30138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (1))){
var state_30142__$1 = state_30142;
var statearr_30145_30166 = state_30142__$1;
(statearr_30145_30166[(2)] = null);

(statearr_30145_30166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30142,(3),Object,null,(2));
var inst_30093 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30142__$1,(5),inst_30093);
} else {
if((state_val_30143 === (13))){
var inst_30123 = (state_30142[(7)]);
var inst_30115 = (state_30142[(8)]);
var inst_30128 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30129 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_30130 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_30115,inst_30128,inst_30129);
var inst_30108 = inst_30130;
var inst_30109 = inst_30123;
var state_30142__$1 = (function (){var statearr_30146 = state_30142;
(statearr_30146[(9)] = inst_30108);

(statearr_30146[(10)] = inst_30109);

return statearr_30146;
})();
var statearr_30147_30167 = state_30142__$1;
(statearr_30147_30167[(2)] = null);

(statearr_30147_30167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (6))){
var inst_30114 = (state_30142[(11)]);
var inst_30108 = (state_30142[(9)]);
var inst_30114__$1 = cljs.core.nth.call(null,inst_30108,(0),null);
var inst_30115 = cljs.core.nth.call(null,inst_30108,(1),null);
var inst_30116 = cljs.core.empty_QMARK_.call(null,inst_30114__$1);
var inst_30117 = (!(inst_30116));
var state_30142__$1 = (function (){var statearr_30148 = state_30142;
(statearr_30148[(11)] = inst_30114__$1);

(statearr_30148[(8)] = inst_30115);

return statearr_30148;
})();
if(inst_30117){
var statearr_30149_30168 = state_30142__$1;
(statearr_30149_30168[(1)] = (8));

} else {
var statearr_30150_30169 = state_30142__$1;
(statearr_30150_30169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (3))){
var inst_30085 = (state_30142[(2)]);
var inst_30086 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30087 = [inst_30085];
var inst_30088 = cljs.core.PersistentHashMap.fromArrays(inst_30086,inst_30087);
var inst_30089 = klipse_clj.lang.clojure.populate_err.call(null,inst_30088,opts);
var state_30142__$1 = state_30142;
var statearr_30151_30170 = state_30142__$1;
(statearr_30151_30170[(2)] = inst_30089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (12))){
var inst_30123 = (state_30142[(7)]);
var inst_30126 = klipse_clj.lang.clojure.populate_err.call(null,inst_30123,opts);
var state_30142__$1 = state_30142;
var statearr_30152_30171 = state_30142__$1;
(statearr_30152_30171[(2)] = inst_30126);

(statearr_30152_30171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (2))){
var inst_30140 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30142__$1,inst_30140);
} else {
if((state_val_30143 === (11))){
var inst_30123 = (state_30142[(7)]);
var inst_30123__$1 = (state_30142[(2)]);
var inst_30124 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_30123__$1);
var state_30142__$1 = (function (){var statearr_30153 = state_30142;
(statearr_30153[(7)] = inst_30123__$1);

return statearr_30153;
})();
if(cljs.core.truth_(inst_30124)){
var statearr_30154_30172 = state_30142__$1;
(statearr_30154_30172[(1)] = (12));

} else {
var statearr_30155_30173 = state_30142__$1;
(statearr_30155_30173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (9))){
var inst_30109 = (state_30142[(10)]);
var state_30142__$1 = state_30142;
var statearr_30156_30174 = state_30142__$1;
(statearr_30156_30174[(2)] = inst_30109);

(statearr_30156_30174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (5))){
var inst_30095 = (state_30142[(2)]);
var inst_30103 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30104 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_30105 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_30103,inst_30104);
var inst_30106 = cljs.core.nth.call(null,inst_30105,(0),null);
var inst_30107 = cljs.core.nth.call(null,inst_30105,(1),null);
var inst_30108 = inst_30105;
var inst_30109 = null;
var state_30142__$1 = (function (){var statearr_30157 = state_30142;
(statearr_30157[(12)] = inst_30095);

(statearr_30157[(9)] = inst_30108);

(statearr_30157[(10)] = inst_30109);

(statearr_30157[(13)] = inst_30107);

(statearr_30157[(14)] = inst_30106);

return statearr_30157;
})();
var statearr_30158_30175 = state_30142__$1;
(statearr_30158_30175[(2)] = null);

(statearr_30158_30175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (14))){
var inst_30133 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30159_30176 = state_30142__$1;
(statearr_30159_30176[(2)] = inst_30133);

(statearr_30159_30176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (10))){
var inst_30136 = (state_30142[(2)]);
var state_30142__$1 = state_30142;
var statearr_30160_30177 = state_30142__$1;
(statearr_30160_30177[(2)] = inst_30136);

(statearr_30160_30177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30143 === (8))){
var inst_30114 = (state_30142[(11)]);
var inst_30119 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30120 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_30119,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_30121 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_30114,inst_30120);
var state_30142__$1 = state_30142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30142__$1,(11),inst_30121);
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
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____0 = (function (){
var statearr_30161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30161[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__);

(statearr_30161[(1)] = (1));

return statearr_30161;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____1 = (function (state_30142){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30162){if((e30162 instanceof Object)){
var ex__26536__auto__ = e30162;
var statearr_30163_30178 = state_30142;
(statearr_30163_30178[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30179 = state_30142;
state_30142 = G__30179;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__ = function(state_30142){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____1.call(this,state_30142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30164 = f__26556__auto__.call(null);
(statearr_30164[(6)] = c__26555__auto__);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30237){
var state_val_30238 = (state_30237[(1)]);
if((state_val_30238 === (7))){
var inst_30205 = (state_30237[(7)]);
var inst_30210 = klipse_clj.repl.create_state_compile.call(null);
var inst_30211 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_30210,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_30212 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_30205,inst_30211);
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30237__$1,(10),inst_30212);
} else {
if((state_val_30238 === (1))){
var state_30237__$1 = state_30237;
var statearr_30239_30260 = state_30237__$1;
(statearr_30239_30260[(2)] = null);

(statearr_30239_30260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30237,(3),Object,null,(2));
var inst_30194 = klipse_clj.repl.create_state_compile.call(null);
var inst_30195 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_30196 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_30194,inst_30195);
var inst_30197 = cljs.core.nth.call(null,inst_30196,(0),null);
var inst_30198 = cljs.core.nth.call(null,inst_30196,(1),null);
var inst_30199 = inst_30196;
var inst_30200 = "";
var state_30237__$1 = (function (){var statearr_30240 = state_30237;
(statearr_30240[(8)] = inst_30197);

(statearr_30240[(9)] = inst_30200);

(statearr_30240[(10)] = inst_30198);

(statearr_30240[(11)] = inst_30199);

return statearr_30240;
})();
var statearr_30241_30261 = state_30237__$1;
(statearr_30241_30261[(2)] = null);

(statearr_30241_30261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (13))){
var inst_30225 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30242_30262 = state_30237__$1;
(statearr_30242_30262[(2)] = inst_30225);

(statearr_30242_30262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (6))){
var inst_30233 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30243_30263 = state_30237__$1;
(statearr_30243_30263[(2)] = inst_30233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30237__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (3))){
var inst_30180 = (state_30237[(2)]);
var inst_30181 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30182 = [inst_30180];
var inst_30183 = cljs.core.PersistentHashMap.fromArrays(inst_30181,inst_30182);
var state_30237__$1 = state_30237;
var statearr_30244_30264 = state_30237__$1;
(statearr_30244_30264[(2)] = inst_30183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30237__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (12))){
var inst_30214 = (state_30237[(12)]);
var inst_30200 = (state_30237[(9)]);
var inst_30206 = (state_30237[(13)]);
var inst_30218 = klipse_clj.repl.create_state_compile.call(null);
var inst_30219 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_30220 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_30206,inst_30218,inst_30219);
var inst_30221 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_30214);
var inst_30222 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30221)].join('');
var inst_30199 = inst_30220;
var inst_30200__$1 = inst_30222;
var state_30237__$1 = (function (){var statearr_30245 = state_30237;
(statearr_30245[(9)] = inst_30200__$1);

(statearr_30245[(11)] = inst_30199);

return statearr_30245;
})();
var statearr_30246_30265 = state_30237__$1;
(statearr_30246_30265[(2)] = null);

(statearr_30246_30265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (2))){
var inst_30235 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30237__$1,inst_30235);
} else {
if((state_val_30238 === (11))){
var inst_30214 = (state_30237[(12)]);
var state_30237__$1 = state_30237;
var statearr_30247_30266 = state_30237__$1;
(statearr_30247_30266[(2)] = inst_30214);

(statearr_30247_30266[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (9))){
var inst_30231 = (state_30237[(2)]);
var state_30237__$1 = state_30237;
var statearr_30248_30267 = state_30237__$1;
(statearr_30248_30267[(2)] = inst_30231);

(statearr_30248_30267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (5))){
var inst_30205 = (state_30237[(7)]);
var inst_30199 = (state_30237[(11)]);
var inst_30205__$1 = cljs.core.nth.call(null,inst_30199,(0),null);
var inst_30206 = cljs.core.nth.call(null,inst_30199,(1),null);
var inst_30207 = cljs.core.empty_QMARK_.call(null,inst_30205__$1);
var inst_30208 = (!(inst_30207));
var state_30237__$1 = (function (){var statearr_30249 = state_30237;
(statearr_30249[(7)] = inst_30205__$1);

(statearr_30249[(13)] = inst_30206);

return statearr_30249;
})();
if(inst_30208){
var statearr_30250_30268 = state_30237__$1;
(statearr_30250_30268[(1)] = (7));

} else {
var statearr_30251_30269 = state_30237__$1;
(statearr_30251_30269[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (10))){
var inst_30214 = (state_30237[(12)]);
var inst_30214__$1 = (state_30237[(2)]);
var inst_30215 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_30214__$1);
var state_30237__$1 = (function (){var statearr_30252 = state_30237;
(statearr_30252[(12)] = inst_30214__$1);

return statearr_30252;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30253_30270 = state_30237__$1;
(statearr_30253_30270[(1)] = (11));

} else {
var statearr_30254_30271 = state_30237__$1;
(statearr_30254_30271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30238 === (8))){
var inst_30200 = (state_30237[(9)]);
var inst_30227 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30228 = [inst_30200];
var inst_30229 = cljs.core.PersistentHashMap.fromArrays(inst_30227,inst_30228);
var state_30237__$1 = state_30237;
var statearr_30255_30272 = state_30237__$1;
(statearr_30255_30272[(2)] = inst_30229);

(statearr_30255_30272[(1)] = (9));


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
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____0 = (function (){
var statearr_30256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30256[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__);

(statearr_30256[(1)] = (1));

return statearr_30256;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____1 = (function (state_30237){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30257){if((e30257 instanceof Object)){
var ex__26536__auto__ = e30257;
var statearr_30258_30273 = state_30237;
(statearr_30258_30273[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30274 = state_30237;
state_30237 = G__30274;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__ = function(state_30237){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____1.call(this,state_30237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30259 = f__26556__auto__.call(null);
(statearr_30259[(6)] = c__26555__auto__);

return statearr_30259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30280){
var state_val_30281 = (state_30280[(1)]);
if((state_val_30281 === (1))){
var inst_30275 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30280__$1,(2),inst_30275);
} else {
if((state_val_30281 === (2))){
var inst_30277 = (state_30280[(2)]);
var inst_30278 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30277,opts);
var state_30280__$1 = state_30280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30280__$1,inst_30278);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____0 = (function (){
var statearr_30282 = [null,null,null,null,null,null,null];
(statearr_30282[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__);

(statearr_30282[(1)] = (1));

return statearr_30282;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____1 = (function (state_30280){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30283){if((e30283 instanceof Object)){
var ex__26536__auto__ = e30283;
var statearr_30284_30286 = state_30280;
(statearr_30284_30286[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30287 = state_30280;
state_30280 = G__30287;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__ = function(state_30280){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____1.call(this,state_30280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30285 = f__26556__auto__.call(null);
(statearr_30285[(6)] = c__26555__auto__);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__30289 = arguments.length;
switch (G__30289) {
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
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30295){
var state_val_30296 = (state_30295[(1)]);
if((state_val_30296 === (1))){
var inst_30290 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30295__$1,(2),inst_30290);
} else {
if((state_val_30296 === (2))){
var inst_30292 = (state_30295[(2)]);
var inst_30293 = klipse_clj.lang.clojure.read_result.call(null,inst_30292);
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30295__$1,inst_30293);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$state_machine__26533__auto____0 = (function (){
var statearr_30297 = [null,null,null,null,null,null,null];
(statearr_30297[(0)] = klipse_clj$lang$clojure$state_machine__26533__auto__);

(statearr_30297[(1)] = (1));

return statearr_30297;
});
var klipse_clj$lang$clojure$state_machine__26533__auto____1 = (function (state_30295){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30298){if((e30298 instanceof Object)){
var ex__26536__auto__ = e30298;
var statearr_30299_30302 = state_30295;
(statearr_30299_30302[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30303 = state_30295;
state_30295 = G__30303;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__26533__auto__ = function(state_30295){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__26533__auto____1.call(this,state_30295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__26533__auto____0;
klipse_clj$lang$clojure$state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__26533__auto____1;
return klipse_clj$lang$clojure$state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30300 = f__26556__auto__.call(null);
(statearr_30300[(6)] = c__26555__auto__);

return statearr_30300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30310){
var state_val_30311 = (state_30310[(1)]);
if((state_val_30311 === (1))){
var inst_30304 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30310__$1,(2),inst_30304);
} else {
if((state_val_30311 === (2))){
var inst_30306 = (state_30310[(2)]);
var inst_30307 = cljs.core.clj__GT_js.call(null,inst_30306);
var inst_30308 = cb.call(null,inst_30307);
var state_30310__$1 = state_30310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30310__$1,inst_30308);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____0 = (function (){
var statearr_30312 = [null,null,null,null,null,null,null];
(statearr_30312[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__);

(statearr_30312[(1)] = (1));

return statearr_30312;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____1 = (function (state_30310){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30313){if((e30313 instanceof Object)){
var ex__26536__auto__ = e30313;
var statearr_30314_30316 = state_30310;
(statearr_30314_30316[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30317 = state_30310;
state_30310 = G__30317;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__ = function(state_30310){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____1.call(this,state_30310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30315 = f__26556__auto__.call(null);
(statearr_30315[(6)] = c__26555__auto__);

return statearr_30315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__30319 = arguments.length;
switch (G__30319) {
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
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30325){
var state_val_30326 = (state_30325[(1)]);
if((state_val_30326 === (1))){
var inst_30320 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30325__$1,(2),inst_30320);
} else {
if((state_val_30326 === (2))){
var inst_30322 = (state_30325[(2)]);
var inst_30323 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_30322);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30325__$1,inst_30323);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$state_machine__26533__auto____0 = (function (){
var statearr_30327 = [null,null,null,null,null,null,null];
(statearr_30327[(0)] = klipse_clj$lang$clojure$state_machine__26533__auto__);

(statearr_30327[(1)] = (1));

return statearr_30327;
});
var klipse_clj$lang$clojure$state_machine__26533__auto____1 = (function (state_30325){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30328){if((e30328 instanceof Object)){
var ex__26536__auto__ = e30328;
var statearr_30329_30332 = state_30325;
(statearr_30329_30332[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30333 = state_30325;
state_30325 = G__30333;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__26533__auto__ = function(state_30325){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__26533__auto____1.call(this,state_30325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__26533__auto____0;
klipse_clj$lang$clojure$state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__26533__auto____1;
return klipse_clj$lang$clojure$state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30330 = f__26556__auto__.call(null);
(statearr_30330[(6)] = c__26555__auto__);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30339){
var state_val_30340 = (state_30339[(1)]);
if((state_val_30340 === (1))){
var inst_30334 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30339__$1,(2),inst_30334);
} else {
if((state_val_30340 === (2))){
var inst_30336 = (state_30339[(2)]);
var inst_30337 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_30336);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30339__$1,inst_30337);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null];
(statearr_30341[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____1 = (function (state_30339){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__26536__auto__ = e30342;
var statearr_30343_30345 = state_30339;
(statearr_30343_30345[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30339;
state_30339 = G__30346;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__ = function(state_30339){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____1.call(this,state_30339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30344 = f__26556__auto__.call(null);
(statearr_30344[(6)] = c__26555__auto__);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__26555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto__){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto__){
return (function (state_30353){
var state_val_30354 = (state_30353[(1)]);
if((state_val_30354 === (1))){
var inst_30347 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30353__$1,(2),inst_30347);
} else {
if((state_val_30354 === (2))){
var inst_30349 = (state_30353[(2)]);
var inst_30350 = cljs.core.second.call(null,inst_30349);
var inst_30351 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30350);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30353__$1,inst_30351);
} else {
return null;
}
}
});})(c__26555__auto__))
;
return ((function (switch__26532__auto__,c__26555__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____0 = (function (){
var statearr_30355 = [null,null,null,null,null,null,null];
(statearr_30355[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__);

(statearr_30355[(1)] = (1));

return statearr_30355;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____1 = (function (state_30353){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30356){if((e30356 instanceof Object)){
var ex__26536__auto__ = e30356;
var statearr_30357_30359 = state_30353;
(statearr_30357_30359[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30360 = state_30353;
state_30353 = G__30360;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__ = function(state_30353){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____1.call(this,state_30353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto__))
})();
var state__26557__auto__ = (function (){var statearr_30358 = f__26556__auto__.call(null);
(statearr_30358[(6)] = c__26555__auto__);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto__))
);

return c__26555__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__30362){
var map__30363 = p__30362;
var map__30363__$1 = (((((!((map__30363 == null))))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var opts = map__30363__$1;
var container_id = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__26555__auto___30415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__26556__auto__ = (function (){var switch__26532__auto__ = ((function (c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_30397){
var state_val_30398 = (state_30397[(1)]);
if((state_val_30398 === (7))){
var inst_30373 = (state_30397[(2)]);
var inst_30378 = (function (){var _STAR_print_newline_STAR__orig_val__30374 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30375 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30376 = true;
return ((function (_STAR_print_newline_STAR__orig_val__30374,_STAR_print_fn_STAR__orig_val__30375,_STAR_print_newline_STAR__temp_val__30376,inst_30373,state_val_30398,c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__30361_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__30361_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__30374,_STAR_print_fn_STAR__orig_val__30375,_STAR_print_newline_STAR__temp_val__30376,inst_30373,state_val_30398,c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_30379 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_30380 = cljs.core._STAR_print_fn_STAR_ = inst_30378;
var state_30397__$1 = (function (){var statearr_30399 = state_30397;
(statearr_30399[(7)] = inst_30380);

(statearr_30399[(8)] = inst_30379);

(statearr_30399[(9)] = inst_30373);

return statearr_30399;
})();
var statearr_30400_30416 = state_30397__$1;
(statearr_30400_30416[(2)] = null);

(statearr_30400_30416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (1))){
var inst_30365 = clojure.string.blank_QMARK_.call(null,exp);
var state_30397__$1 = state_30397;
if(inst_30365){
var statearr_30401_30417 = state_30397__$1;
(statearr_30401_30417[(1)] = (2));

} else {
var statearr_30402_30418 = state_30397__$1;
(statearr_30402_30418[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (4))){
var inst_30395 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30397__$1,inst_30395);
} else {
if((state_val_30398 === (6))){
var state_30397__$1 = state_30397;
var statearr_30403_30419 = state_30397__$1;
(statearr_30403_30419[(2)] = null);

(statearr_30403_30419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (3))){
var state_30397__$1 = state_30397;
if(cljs.core.truth_(setup_container_fn)){
var statearr_30404_30420 = state_30397__$1;
(statearr_30404_30420[(1)] = (5));

} else {
var statearr_30405_30421 = state_30397__$1;
(statearr_30405_30421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (2))){
var inst_30367 = cljs.core.async.put_BANG_.call(null,c,"");
var state_30397__$1 = state_30397;
var statearr_30406_30422 = state_30397__$1;
(statearr_30406_30422[(2)] = inst_30367);

(statearr_30406_30422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (11))){
var inst_30389 = (state_30397[(2)]);
var inst_30390 = cljs.core.second.call(null,inst_30389);
var inst_30391 = cljs.core.async.put_BANG_.call(null,c,inst_30390);
var state_30397__$1 = state_30397;
var statearr_30407_30423 = state_30397__$1;
(statearr_30407_30423[(2)] = inst_30391);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (9))){
var inst_30381 = (state_30397[(2)]);
var inst_30382 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_30383 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_30397__$1 = (function (){var statearr_30408 = state_30397;
(statearr_30408[(10)] = inst_30382);

(statearr_30408[(11)] = inst_30381);

(statearr_30408[(12)] = inst_30383);

return statearr_30408;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (5))){
var inst_30370 = setup_container_fn.call(null,container_id);
var state_30397__$1 = state_30397;
var statearr_30409_30424 = state_30397__$1;
(statearr_30409_30424[(2)] = inst_30370);

(statearr_30409_30424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30398 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30397,null,null,(9),(8));
var inst_30387 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_30397__$1 = state_30397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30397__$1,(11),inst_30387);
} else {
if((state_val_30398 === (8))){
var inst_30393 = (state_30397[(2)]);
var state_30397__$1 = state_30397;
var statearr_30410_30425 = state_30397__$1;
(statearr_30410_30425[(2)] = inst_30393);

(statearr_30410_30425[(1)] = (4));


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
});})(c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__26532__auto__,c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____0 = (function (){
var statearr_30411 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30411[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__);

(statearr_30411[(1)] = (1));

return statearr_30411;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____1 = (function (state_30397){
while(true){
var ret_value__26534__auto__ = (function (){try{while(true){
var result__26535__auto__ = switch__26532__auto__.call(null,state_30397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26535__auto__;
}
break;
}
}catch (e30412){if((e30412 instanceof Object)){
var ex__26536__auto__ = e30412;
var statearr_30413_30426 = state_30397;
(statearr_30413_30426[(5)] = ex__26536__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30427 = state_30397;
state_30397 = G__30427;
continue;
} else {
return ret_value__26534__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__ = function(state_30397){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____1.call(this,state_30397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__26533__auto__;
})()
;})(switch__26532__auto__,c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__26557__auto__ = (function (){var statearr_30414 = f__26556__auto__.call(null);
(statearr_30414[(6)] = c__26555__auto___30415);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26557__auto__);
});})(c__26555__auto___30415,c,map__30363,map__30363__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
