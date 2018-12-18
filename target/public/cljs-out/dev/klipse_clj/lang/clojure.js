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
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40049){
var state_val_40050 = (state_40049[(1)]);
if((state_val_40050 === (7))){
var inst_40045 = (state_40049[(2)]);
var state_40049__$1 = state_40049;
var statearr_40051_40077 = state_40049__$1;
(statearr_40051_40077[(2)] = inst_40045);

(statearr_40051_40077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (1))){
var inst_39990 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_40049__$1 = state_40049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40049__$1,(2),inst_39990);
} else {
if((state_val_40050 === (4))){
var inst_40047 = (state_40049[(2)]);
var state_40049__$1 = state_40049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40049__$1,inst_40047);
} else {
if((state_val_40050 === (15))){
var inst_40020 = (state_40049[(7)]);
var inst_40036 = (state_40049[(2)]);
var inst_40037 = cljs.core.next.call(null,inst_40020);
var inst_40001 = inst_40037;
var inst_40002 = null;
var inst_40003 = (0);
var inst_40004 = (0);
var state_40049__$1 = (function (){var statearr_40052 = state_40049;
(statearr_40052[(8)] = inst_40004);

(statearr_40052[(9)] = inst_40003);

(statearr_40052[(10)] = inst_40002);

(statearr_40052[(11)] = inst_40001);

(statearr_40052[(12)] = inst_40036);

return statearr_40052;
})();
var statearr_40053_40078 = state_40049__$1;
(statearr_40053_40078[(2)] = null);

(statearr_40053_40078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (13))){
var inst_40020 = (state_40049[(7)]);
var inst_40029 = cljs.core.first.call(null,inst_40020);
var inst_40030 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_40031 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40032 = [inst_40031,klipse_clj.repl.current_ns_eval];
var inst_40033 = cljs.core.PersistentHashMap.fromArrays(inst_40030,inst_40032);
var inst_40034 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_40029,inst_40033);
var state_40049__$1 = state_40049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40049__$1,(15),inst_40034);
} else {
if((state_val_40050 === (6))){
var inst_40020 = (state_40049[(7)]);
var inst_40001 = (state_40049[(11)]);
var inst_40020__$1 = cljs.core.seq.call(null,inst_40001);
var state_40049__$1 = (function (){var statearr_40054 = state_40049;
(statearr_40054[(7)] = inst_40020__$1);

return statearr_40054;
})();
if(inst_40020__$1){
var statearr_40055_40079 = state_40049__$1;
(statearr_40055_40079[(1)] = (9));

} else {
var statearr_40056_40080 = state_40049__$1;
(statearr_40056_40080[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (3))){
var inst_40004 = (state_40049[(8)]);
var inst_40003 = (state_40049[(9)]);
var inst_40006 = (inst_40004 < inst_40003);
var inst_40007 = inst_40006;
var state_40049__$1 = state_40049;
if(cljs.core.truth_(inst_40007)){
var statearr_40057_40081 = state_40049__$1;
(statearr_40057_40081[(1)] = (5));

} else {
var statearr_40058_40082 = state_40049__$1;
(statearr_40058_40082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (12))){
var inst_40020 = (state_40049[(7)]);
var inst_40024 = cljs.core.chunk_first.call(null,inst_40020);
var inst_40025 = cljs.core.chunk_rest.call(null,inst_40020);
var inst_40026 = cljs.core.count.call(null,inst_40024);
var inst_40001 = inst_40025;
var inst_40002 = inst_40024;
var inst_40003 = inst_40026;
var inst_40004 = (0);
var state_40049__$1 = (function (){var statearr_40059 = state_40049;
(statearr_40059[(8)] = inst_40004);

(statearr_40059[(9)] = inst_40003);

(statearr_40059[(10)] = inst_40002);

(statearr_40059[(11)] = inst_40001);

return statearr_40059;
})();
var statearr_40060_40083 = state_40049__$1;
(statearr_40060_40083[(2)] = null);

(statearr_40060_40083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (2))){
var inst_39992 = (state_40049[(2)]);
var inst_39997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39998 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_39999 = (new cljs.core.PersistentVector(null,2,(5),inst_39997,inst_39998,null));
var inst_40000 = cljs.core.seq.call(null,inst_39999);
var inst_40001 = inst_40000;
var inst_40002 = null;
var inst_40003 = (0);
var inst_40004 = (0);
var state_40049__$1 = (function (){var statearr_40061 = state_40049;
(statearr_40061[(8)] = inst_40004);

(statearr_40061[(9)] = inst_40003);

(statearr_40061[(13)] = inst_39992);

(statearr_40061[(10)] = inst_40002);

(statearr_40061[(11)] = inst_40001);

return statearr_40061;
})();
var statearr_40062_40084 = state_40049__$1;
(statearr_40062_40084[(2)] = null);

(statearr_40062_40084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (11))){
var inst_40043 = (state_40049[(2)]);
var state_40049__$1 = state_40049;
var statearr_40063_40085 = state_40049__$1;
(statearr_40063_40085[(2)] = inst_40043);

(statearr_40063_40085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (9))){
var inst_40020 = (state_40049[(7)]);
var inst_40022 = cljs.core.chunked_seq_QMARK_.call(null,inst_40020);
var state_40049__$1 = state_40049;
if(inst_40022){
var statearr_40064_40086 = state_40049__$1;
(statearr_40064_40086[(1)] = (12));

} else {
var statearr_40065_40087 = state_40049__$1;
(statearr_40065_40087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (5))){
var inst_40004 = (state_40049[(8)]);
var inst_40002 = (state_40049[(10)]);
var inst_40009 = cljs.core._nth.call(null,inst_40002,inst_40004);
var inst_40010 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_40011 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40012 = [inst_40011,klipse_clj.repl.current_ns_eval];
var inst_40013 = cljs.core.PersistentHashMap.fromArrays(inst_40010,inst_40012);
var inst_40014 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_40009,inst_40013);
var state_40049__$1 = state_40049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40049__$1,(8),inst_40014);
} else {
if((state_val_40050 === (14))){
var inst_40040 = (state_40049[(2)]);
var state_40049__$1 = state_40049;
var statearr_40069_40088 = state_40049__$1;
(statearr_40069_40088[(2)] = inst_40040);

(statearr_40069_40088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (10))){
var state_40049__$1 = state_40049;
var statearr_40070_40089 = state_40049__$1;
(statearr_40070_40089[(2)] = null);

(statearr_40070_40089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40050 === (8))){
var inst_40004 = (state_40049[(8)]);
var inst_40003 = (state_40049[(9)]);
var inst_40002 = (state_40049[(10)]);
var inst_40001 = (state_40049[(11)]);
var inst_40016 = (state_40049[(2)]);
var inst_40017 = (inst_40004 + (1));
var tmp40066 = inst_40003;
var tmp40067 = inst_40002;
var tmp40068 = inst_40001;
var inst_40001__$1 = tmp40068;
var inst_40002__$1 = tmp40067;
var inst_40003__$1 = tmp40066;
var inst_40004__$1 = inst_40017;
var state_40049__$1 = (function (){var statearr_40071 = state_40049;
(statearr_40071[(8)] = inst_40004__$1);

(statearr_40071[(9)] = inst_40003__$1);

(statearr_40071[(10)] = inst_40002__$1);

(statearr_40071[(14)] = inst_40016);

(statearr_40071[(11)] = inst_40001__$1);

return statearr_40071;
})();
var statearr_40072_40090 = state_40049__$1;
(statearr_40072_40090[(2)] = null);

(statearr_40072_40090[(1)] = (3));


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
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____0 = (function (){
var statearr_40073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40073[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__);

(statearr_40073[(1)] = (1));

return statearr_40073;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1 = (function (state_40049){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40074){if((e40074 instanceof Object)){
var ex__24875__auto__ = e40074;
var statearr_40075_40091 = state_40049;
(statearr_40075_40091[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40092 = state_40049;
state_40049 = G__40092;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__ = function(state_40049){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1.call(this,state_40049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40076 = f__24895__auto__.call(null);
(statearr_40076[(6)] = c__24894__auto__);

return statearr_40076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40095){
var state_val_40096 = (state_40095[(1)]);
if((state_val_40096 === (1))){
var inst_40093 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_40095__$1 = state_40095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40095__$1,inst_40093);
} else {
return null;
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0 = (function (){
var statearr_40097 = [null,null,null,null,null,null,null];
(statearr_40097[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__);

(statearr_40097[(1)] = (1));

return statearr_40097;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1 = (function (state_40095){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40098){if((e40098 instanceof Object)){
var ex__24875__auto__ = e40098;
var statearr_40099_40101 = state_40095;
(statearr_40099_40101[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40102 = state_40095;
state_40095 = G__40102;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__ = function(state_40095){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1.call(this,state_40095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40100 = f__24895__auto__.call(null);
(statearr_40100[(6)] = c__24894__auto__);

return statearr_40100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__40103){
var map__40104 = p__40103;
var map__40104__$1 = (((((!((map__40104 == null))))?(((((map__40104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40104):map__40104);
var print_length = cljs.core.get.call(null,map__40104__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__40104__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__40107 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__40108 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40108;

try{var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40109_40113 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40110_40114 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40111_40115 = true;
var _STAR_print_fn_STAR__temp_val__40112_40116 = ((function (_STAR_print_newline_STAR__orig_val__40109_40113,_STAR_print_fn_STAR__orig_val__40110_40114,_STAR_print_newline_STAR__temp_val__40111_40115,sb__18969__auto__,_STAR_print_length_STAR__orig_val__40107,_STAR_print_length_STAR__temp_val__40108,map__40104,map__40104__$1,print_length,beautify_strings){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__40109_40113,_STAR_print_fn_STAR__orig_val__40110_40114,_STAR_print_newline_STAR__temp_val__40111_40115,sb__18969__auto__,_STAR_print_length_STAR__orig_val__40107,_STAR_print_length_STAR__temp_val__40108,map__40104,map__40104__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40111_40115;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40112_40116;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__17804__auto__ = typeof value === 'string';
if(and__17804__auto__){
return beautify_strings;
} else {
return and__17804__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40110_40114;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40109_40113;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40107;
}}catch (e40106){if((e40106 instanceof Object)){
var e = e40106;
return ["ERROR :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e40106;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__40117,verbose_QMARK_,current_ns){
var map__40118 = p__40117;
var map__40118__$1 = (((((!((map__40118 == null))))?(((((map__40118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40118):map__40118);
var ns = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40118__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
return cljs.repl.error__GT_str.call(null,cljs.core.ex_cause.call(null,error));
} else {
if(klipse_clj.lang.clojure.reader_error_QMARK_.call(null,error)){
return ["Syntax error reading source.","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.error_message.call(null,error))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');

}
}
}catch (e40120){if((e40120 instanceof Object)){
var e = e40120;
return e;
} else {
throw e40120;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__40121,opts){
var map__40122 = p__40121;
var map__40122__$1 = (((((!((map__40122 == null))))?(((((map__40122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40122):map__40122);
var args = map__40122__$1;
var ns = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40122__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__40124){
var map__40125 = p__40124;
var map__40125__$1 = (((((!((map__40125 == null))))?(((((map__40125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40125):map__40125);
var form = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__40125__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__40127){
var map__40128 = p__40127;
var map__40128__$1 = (((((!((map__40128 == null))))?(((((map__40128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40128):map__40128);
var foo = map__40128__$1;
var value = cljs.core.get.call(null,map__40128__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__40128__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__40130){
var map__40131 = p__40130;
var map__40131__$1 = (((((!((map__40131 == null))))?(((((map__40131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40131):map__40131);
var args = map__40131__$1;
var file = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__40131__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__40133){
var map__40134 = p__40133;
var map__40134__$1 = (((((!((map__40134 == null))))?(((((map__40134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40134):map__40134);
var source = cljs.core.get.call(null,map__40134__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__40136){
var map__40137 = p__40136;
var map__40137__$1 = (((((!((map__40137 == null))))?(((((map__40137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40137):map__40137);
var static_fns = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__40137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits_orig_val__40139_40141 = cljs.compiler.emits;
var emits_temp_val__40140_40142 = the_emits;
cljs.compiler.emits = emits_temp_val__40140_40142;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__40139_40141,emits_temp_val__40140_40142,c,max_eval_duration__$1,the_emits,map__40137,map__40137__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__40139_40141,emits_temp_val__40140_40142,c,max_eval_duration__$1,the_emits,map__40137,map__40137__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__40139_40141;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__40143){
var map__40144 = p__40143;
var map__40144__$1 = (((((!((map__40144 == null))))?(((((map__40144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40144):map__40144);
var static_fns = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__40144__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
var emits_orig_val__40146_40148 = cljs.compiler.emits;
var emits_temp_val__40147_40149 = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);
cljs.compiler.emits = emits_temp_val__40147_40149;

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__40146_40148,emits_temp_val__40147_40149,c,max_eval_duration__$1,map__40144,map__40144__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__40146_40148,emits_temp_val__40147_40149,c,max_eval_duration__$1,map__40144,map__40144__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__40146_40148;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__40150 = cljs.core.conj.call(null,res,ch);
res = G__40150;
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
var _STAR_alias_map_STAR__orig_val__40151 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__40152 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__40153 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__40154 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__40155 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__40156 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__40157 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__40158 = ns;
var _STAR_cljs_ns_STAR__temp_val__40159 = ns;
var _STAR_compiler_STAR__temp_val__40160 = st;
var resolve_symbol_temp_val__40161 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__40162 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__40157;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__40158;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__40159;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__40160;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__40161;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__40162;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__40156;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__40155;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__40154;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__40153;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__40152;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__40151;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__40166 = arguments.length;
switch (G__40166) {
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
var _STAR_alias_map_STAR__orig_val__40167 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__40168 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__40169 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__40170 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__40171 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__40172 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__40173 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__40174 = ns;
var _STAR_cljs_ns_STAR__temp_val__40175 = ns;
var _STAR_compiler_STAR__temp_val__40176 = st;
var resolve_symbol_temp_val__40177 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__40178 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__40173;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__40174;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__40175;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__40176;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__40177;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__40178;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__40172;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__40171;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__40170;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__40169;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__40168;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__40167;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__40183 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__40183,(0),null);
var rest_s = cljs.core.nth.call(null,vec__40183,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__40186 = rest_s;
var G__40187 = res;
s__$1 = G__40186;
res = G__40187;
continue;
} else {
var G__40188 = rest_s;
var G__40189 = cljs.core.conj.call(null,res,exp);
s__$1 = G__40188;
res = G__40189;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__40190){
var map__40191 = p__40190;
var map__40191__$1 = (((((!((map__40191 == null))))?(((((map__40191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40191):map__40191);
var result_element = cljs.core.get.call(null,map__40191__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__40191__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40250){
var state_val_40251 = (state_40250[(1)]);
if((state_val_40251 === (7))){
var inst_40246 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40252_40273 = state_40250__$1;
(statearr_40252_40273[(2)] = inst_40246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (1))){
var state_40250__$1 = state_40250;
var statearr_40253_40274 = state_40250__$1;
(statearr_40253_40274[(2)] = null);

(statearr_40253_40274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40250,(3),Object,null,(2));
var inst_40201 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40250__$1,(5),inst_40201);
} else {
if((state_val_40251 === (13))){
var inst_40223 = (state_40250[(7)]);
var inst_40231 = (state_40250[(8)]);
var inst_40236 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40237 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_40238 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_40223,inst_40236,inst_40237);
var inst_40216 = inst_40238;
var inst_40217 = inst_40231;
var state_40250__$1 = (function (){var statearr_40254 = state_40250;
(statearr_40254[(9)] = inst_40216);

(statearr_40254[(10)] = inst_40217);

return statearr_40254;
})();
var statearr_40255_40275 = state_40250__$1;
(statearr_40255_40275[(2)] = null);

(statearr_40255_40275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (6))){
var inst_40216 = (state_40250[(9)]);
var inst_40222 = (state_40250[(11)]);
var inst_40222__$1 = cljs.core.nth.call(null,inst_40216,(0),null);
var inst_40223 = cljs.core.nth.call(null,inst_40216,(1),null);
var inst_40224 = cljs.core.empty_QMARK_.call(null,inst_40222__$1);
var inst_40225 = (!(inst_40224));
var state_40250__$1 = (function (){var statearr_40256 = state_40250;
(statearr_40256[(7)] = inst_40223);

(statearr_40256[(11)] = inst_40222__$1);

return statearr_40256;
})();
if(inst_40225){
var statearr_40257_40276 = state_40250__$1;
(statearr_40257_40276[(1)] = (8));

} else {
var statearr_40258_40277 = state_40250__$1;
(statearr_40258_40277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (3))){
var inst_40193 = (state_40250[(2)]);
var inst_40194 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_40195 = [inst_40193];
var inst_40196 = cljs.core.PersistentHashMap.fromArrays(inst_40194,inst_40195);
var inst_40197 = klipse_clj.lang.clojure.populate_err.call(null,inst_40196,opts);
var state_40250__$1 = state_40250;
var statearr_40259_40278 = state_40250__$1;
(statearr_40259_40278[(2)] = inst_40197);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40250__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (12))){
var inst_40231 = (state_40250[(8)]);
var inst_40234 = klipse_clj.lang.clojure.populate_err.call(null,inst_40231,opts);
var state_40250__$1 = state_40250;
var statearr_40260_40279 = state_40250__$1;
(statearr_40260_40279[(2)] = inst_40234);

(statearr_40260_40279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (2))){
var inst_40248 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40250__$1,inst_40248);
} else {
if((state_val_40251 === (11))){
var inst_40231 = (state_40250[(8)]);
var inst_40231__$1 = (state_40250[(2)]);
var inst_40232 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_40231__$1);
var state_40250__$1 = (function (){var statearr_40261 = state_40250;
(statearr_40261[(8)] = inst_40231__$1);

return statearr_40261;
})();
if(cljs.core.truth_(inst_40232)){
var statearr_40262_40280 = state_40250__$1;
(statearr_40262_40280[(1)] = (12));

} else {
var statearr_40263_40281 = state_40250__$1;
(statearr_40263_40281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (9))){
var inst_40217 = (state_40250[(10)]);
var state_40250__$1 = state_40250;
var statearr_40264_40282 = state_40250__$1;
(statearr_40264_40282[(2)] = inst_40217);

(statearr_40264_40282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (5))){
var inst_40203 = (state_40250[(2)]);
var inst_40211 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40212 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_40213 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_40211,inst_40212);
var inst_40214 = cljs.core.nth.call(null,inst_40213,(0),null);
var inst_40215 = cljs.core.nth.call(null,inst_40213,(1),null);
var inst_40216 = inst_40213;
var inst_40217 = null;
var state_40250__$1 = (function (){var statearr_40265 = state_40250;
(statearr_40265[(9)] = inst_40216);

(statearr_40265[(12)] = inst_40203);

(statearr_40265[(13)] = inst_40215);

(statearr_40265[(14)] = inst_40214);

(statearr_40265[(10)] = inst_40217);

return statearr_40265;
})();
var statearr_40266_40283 = state_40250__$1;
(statearr_40266_40283[(2)] = null);

(statearr_40266_40283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (14))){
var inst_40241 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40267_40284 = state_40250__$1;
(statearr_40267_40284[(2)] = inst_40241);

(statearr_40267_40284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (10))){
var inst_40244 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40268_40285 = state_40250__$1;
(statearr_40268_40285[(2)] = inst_40244);

(statearr_40268_40285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (8))){
var inst_40222 = (state_40250[(11)]);
var inst_40227 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_40228 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_40227,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_40229 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_40222,inst_40228);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40250__$1,(11),inst_40229);
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
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____0 = (function (){
var statearr_40269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40269[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__);

(statearr_40269[(1)] = (1));

return statearr_40269;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1 = (function (state_40250){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40270){if((e40270 instanceof Object)){
var ex__24875__auto__ = e40270;
var statearr_40271_40286 = state_40250;
(statearr_40271_40286[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40287 = state_40250;
state_40250 = G__40287;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__ = function(state_40250){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1.call(this,state_40250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40272 = f__24895__auto__.call(null);
(statearr_40272[(6)] = c__24894__auto__);

return statearr_40272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40345){
var state_val_40346 = (state_40345[(1)]);
if((state_val_40346 === (7))){
var inst_40313 = (state_40345[(7)]);
var inst_40318 = klipse_clj.repl.create_state_compile.call(null);
var inst_40319 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_40318,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_40320 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_40313,inst_40319);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40345__$1,(10),inst_40320);
} else {
if((state_val_40346 === (1))){
var state_40345__$1 = state_40345;
var statearr_40347_40368 = state_40345__$1;
(statearr_40347_40368[(2)] = null);

(statearr_40347_40368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40345,(3),Object,null,(2));
var inst_40302 = klipse_clj.repl.create_state_compile.call(null);
var inst_40303 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_40304 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_40302,inst_40303);
var inst_40305 = cljs.core.nth.call(null,inst_40304,(0),null);
var inst_40306 = cljs.core.nth.call(null,inst_40304,(1),null);
var inst_40307 = inst_40304;
var inst_40308 = "";
var state_40345__$1 = (function (){var statearr_40348 = state_40345;
(statearr_40348[(8)] = inst_40305);

(statearr_40348[(9)] = inst_40308);

(statearr_40348[(10)] = inst_40307);

(statearr_40348[(11)] = inst_40306);

return statearr_40348;
})();
var statearr_40349_40369 = state_40345__$1;
(statearr_40349_40369[(2)] = null);

(statearr_40349_40369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (13))){
var inst_40333 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40350_40370 = state_40345__$1;
(statearr_40350_40370[(2)] = inst_40333);

(statearr_40350_40370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (6))){
var inst_40341 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40351_40371 = state_40345__$1;
(statearr_40351_40371[(2)] = inst_40341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (3))){
var inst_40288 = (state_40345[(2)]);
var inst_40289 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_40290 = [inst_40288];
var inst_40291 = cljs.core.PersistentHashMap.fromArrays(inst_40289,inst_40290);
var state_40345__$1 = state_40345;
var statearr_40352_40372 = state_40345__$1;
(statearr_40352_40372[(2)] = inst_40291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (12))){
var inst_40308 = (state_40345[(9)]);
var inst_40314 = (state_40345[(12)]);
var inst_40322 = (state_40345[(13)]);
var inst_40326 = klipse_clj.repl.create_state_compile.call(null);
var inst_40327 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_40328 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_40314,inst_40326,inst_40327);
var inst_40329 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_40322);
var inst_40330 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40308),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40329)].join('');
var inst_40307 = inst_40328;
var inst_40308__$1 = inst_40330;
var state_40345__$1 = (function (){var statearr_40353 = state_40345;
(statearr_40353[(9)] = inst_40308__$1);

(statearr_40353[(10)] = inst_40307);

return statearr_40353;
})();
var statearr_40354_40373 = state_40345__$1;
(statearr_40354_40373[(2)] = null);

(statearr_40354_40373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (2))){
var inst_40343 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40345__$1,inst_40343);
} else {
if((state_val_40346 === (11))){
var inst_40322 = (state_40345[(13)]);
var state_40345__$1 = state_40345;
var statearr_40355_40374 = state_40345__$1;
(statearr_40355_40374[(2)] = inst_40322);

(statearr_40355_40374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (9))){
var inst_40339 = (state_40345[(2)]);
var state_40345__$1 = state_40345;
var statearr_40356_40375 = state_40345__$1;
(statearr_40356_40375[(2)] = inst_40339);

(statearr_40356_40375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (5))){
var inst_40313 = (state_40345[(7)]);
var inst_40307 = (state_40345[(10)]);
var inst_40313__$1 = cljs.core.nth.call(null,inst_40307,(0),null);
var inst_40314 = cljs.core.nth.call(null,inst_40307,(1),null);
var inst_40315 = cljs.core.empty_QMARK_.call(null,inst_40313__$1);
var inst_40316 = (!(inst_40315));
var state_40345__$1 = (function (){var statearr_40357 = state_40345;
(statearr_40357[(7)] = inst_40313__$1);

(statearr_40357[(12)] = inst_40314);

return statearr_40357;
})();
if(inst_40316){
var statearr_40358_40376 = state_40345__$1;
(statearr_40358_40376[(1)] = (7));

} else {
var statearr_40359_40377 = state_40345__$1;
(statearr_40359_40377[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (10))){
var inst_40322 = (state_40345[(13)]);
var inst_40322__$1 = (state_40345[(2)]);
var inst_40323 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_40322__$1);
var state_40345__$1 = (function (){var statearr_40360 = state_40345;
(statearr_40360[(13)] = inst_40322__$1);

return statearr_40360;
})();
if(cljs.core.truth_(inst_40323)){
var statearr_40361_40378 = state_40345__$1;
(statearr_40361_40378[(1)] = (11));

} else {
var statearr_40362_40379 = state_40345__$1;
(statearr_40362_40379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40346 === (8))){
var inst_40308 = (state_40345[(9)]);
var inst_40335 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_40336 = [inst_40308];
var inst_40337 = cljs.core.PersistentHashMap.fromArrays(inst_40335,inst_40336);
var state_40345__$1 = state_40345;
var statearr_40363_40380 = state_40345__$1;
(statearr_40363_40380[(2)] = inst_40337);

(statearr_40363_40380[(1)] = (9));


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
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____0 = (function (){
var statearr_40364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40364[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__);

(statearr_40364[(1)] = (1));

return statearr_40364;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1 = (function (state_40345){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40365){if((e40365 instanceof Object)){
var ex__24875__auto__ = e40365;
var statearr_40366_40381 = state_40345;
(statearr_40366_40381[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40382 = state_40345;
state_40345 = G__40382;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__ = function(state_40345){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1.call(this,state_40345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40367 = f__24895__auto__.call(null);
(statearr_40367[(6)] = c__24894__auto__);

return statearr_40367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40388){
var state_val_40389 = (state_40388[(1)]);
if((state_val_40389 === (1))){
var inst_40383 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40388__$1,(2),inst_40383);
} else {
if((state_val_40389 === (2))){
var inst_40385 = (state_40388[(2)]);
var inst_40386 = klipse_clj.lang.clojure.result_as_str.call(null,inst_40385,opts);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40388__$1,inst_40386);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____0 = (function (){
var statearr_40390 = [null,null,null,null,null,null,null];
(statearr_40390[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__);

(statearr_40390[(1)] = (1));

return statearr_40390;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1 = (function (state_40388){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40391){if((e40391 instanceof Object)){
var ex__24875__auto__ = e40391;
var statearr_40392_40394 = state_40388;
(statearr_40392_40394[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40395 = state_40388;
state_40388 = G__40395;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__ = function(state_40388){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1.call(this,state_40388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40393 = f__24895__auto__.call(null);
(statearr_40393[(6)] = c__24894__auto__);

return statearr_40393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__40397 = arguments.length;
switch (G__40397) {
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
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40403){
var state_val_40404 = (state_40403[(1)]);
if((state_val_40404 === (1))){
var inst_40398 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40403__$1,(2),inst_40398);
} else {
if((state_val_40404 === (2))){
var inst_40400 = (state_40403[(2)]);
var inst_40401 = klipse_clj.lang.clojure.read_result.call(null,inst_40400);
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40403__$1,inst_40401);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$state_machine__24872__auto____0 = (function (){
var statearr_40405 = [null,null,null,null,null,null,null];
(statearr_40405[(0)] = klipse_clj$lang$clojure$state_machine__24872__auto__);

(statearr_40405[(1)] = (1));

return statearr_40405;
});
var klipse_clj$lang$clojure$state_machine__24872__auto____1 = (function (state_40403){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40406){if((e40406 instanceof Object)){
var ex__24875__auto__ = e40406;
var statearr_40407_40410 = state_40403;
(statearr_40407_40410[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40411 = state_40403;
state_40403 = G__40411;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24872__auto__ = function(state_40403){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24872__auto____1.call(this,state_40403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24872__auto____0;
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40408 = f__24895__auto__.call(null);
(statearr_40408[(6)] = c__24894__auto__);

return statearr_40408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40418){
var state_val_40419 = (state_40418[(1)]);
if((state_val_40419 === (1))){
var inst_40412 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_40418__$1 = state_40418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40418__$1,(2),inst_40412);
} else {
if((state_val_40419 === (2))){
var inst_40414 = (state_40418[(2)]);
var inst_40415 = cljs.core.clj__GT_js.call(null,inst_40414);
var inst_40416 = cb.call(null,inst_40415);
var state_40418__$1 = state_40418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40418__$1,inst_40416);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____0 = (function (){
var statearr_40420 = [null,null,null,null,null,null,null];
(statearr_40420[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__);

(statearr_40420[(1)] = (1));

return statearr_40420;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1 = (function (state_40418){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40421){if((e40421 instanceof Object)){
var ex__24875__auto__ = e40421;
var statearr_40422_40424 = state_40418;
(statearr_40422_40424[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40425 = state_40418;
state_40418 = G__40425;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__ = function(state_40418){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1.call(this,state_40418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40423 = f__24895__auto__.call(null);
(statearr_40423[(6)] = c__24894__auto__);

return statearr_40423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__40427 = arguments.length;
switch (G__40427) {
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
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40433){
var state_val_40434 = (state_40433[(1)]);
if((state_val_40434 === (1))){
var inst_40428 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40433__$1,(2),inst_40428);
} else {
if((state_val_40434 === (2))){
var inst_40430 = (state_40433[(2)]);
var inst_40431 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_40430);
var state_40433__$1 = state_40433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40433__$1,inst_40431);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$state_machine__24872__auto____0 = (function (){
var statearr_40435 = [null,null,null,null,null,null,null];
(statearr_40435[(0)] = klipse_clj$lang$clojure$state_machine__24872__auto__);

(statearr_40435[(1)] = (1));

return statearr_40435;
});
var klipse_clj$lang$clojure$state_machine__24872__auto____1 = (function (state_40433){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40436){if((e40436 instanceof Object)){
var ex__24875__auto__ = e40436;
var statearr_40437_40440 = state_40433;
(statearr_40437_40440[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40441 = state_40433;
state_40433 = G__40441;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24872__auto__ = function(state_40433){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24872__auto____1.call(this,state_40433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24872__auto____0;
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40438 = f__24895__auto__.call(null);
(statearr_40438[(6)] = c__24894__auto__);

return statearr_40438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40447){
var state_val_40448 = (state_40447[(1)]);
if((state_val_40448 === (1))){
var inst_40442 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_40447__$1 = state_40447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40447__$1,(2),inst_40442);
} else {
if((state_val_40448 === (2))){
var inst_40444 = (state_40447[(2)]);
var inst_40445 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_40444);
var state_40447__$1 = state_40447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40447__$1,inst_40445);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____0 = (function (){
var statearr_40449 = [null,null,null,null,null,null,null];
(statearr_40449[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__);

(statearr_40449[(1)] = (1));

return statearr_40449;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1 = (function (state_40447){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40450){if((e40450 instanceof Object)){
var ex__24875__auto__ = e40450;
var statearr_40451_40453 = state_40447;
(statearr_40451_40453[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40454 = state_40447;
state_40447 = G__40454;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__ = function(state_40447){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1.call(this,state_40447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40452 = f__24895__auto__.call(null);
(statearr_40452[(6)] = c__24894__auto__);

return statearr_40452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_40461){
var state_val_40462 = (state_40461[(1)]);
if((state_val_40462 === (1))){
var inst_40455 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_40461__$1 = state_40461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40461__$1,(2),inst_40455);
} else {
if((state_val_40462 === (2))){
var inst_40457 = (state_40461[(2)]);
var inst_40458 = cljs.core.second.call(null,inst_40457);
var inst_40459 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40458);
var state_40461__$1 = state_40461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40461__$1,inst_40459);
} else {
return null;
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____0 = (function (){
var statearr_40463 = [null,null,null,null,null,null,null];
(statearr_40463[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__);

(statearr_40463[(1)] = (1));

return statearr_40463;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1 = (function (state_40461){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40464){if((e40464 instanceof Object)){
var ex__24875__auto__ = e40464;
var statearr_40465_40467 = state_40461;
(statearr_40465_40467[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40468 = state_40461;
state_40461 = G__40468;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__ = function(state_40461){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1.call(this,state_40461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_40466 = f__24895__auto__.call(null);
(statearr_40466[(6)] = c__24894__auto__);

return statearr_40466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__40470){
var map__40471 = p__40470;
var map__40471__$1 = (((((!((map__40471 == null))))?(((((map__40471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40471):map__40471);
var opts = map__40471__$1;
var container_id = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__24894__auto___40523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_40505){
var state_val_40506 = (state_40505[(1)]);
if((state_val_40506 === (7))){
var inst_40481 = (state_40505[(2)]);
var inst_40486 = (function (){var _STAR_print_newline_STAR__orig_val__40482 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40483 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40484 = true;
return ((function (_STAR_print_newline_STAR__orig_val__40482,_STAR_print_fn_STAR__orig_val__40483,_STAR_print_newline_STAR__temp_val__40484,inst_40481,state_val_40506,c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__40469_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__40469_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__40482,_STAR_print_fn_STAR__orig_val__40483,_STAR_print_newline_STAR__temp_val__40484,inst_40481,state_val_40506,c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_40487 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_40488 = cljs.core._STAR_print_fn_STAR_ = inst_40486;
var state_40505__$1 = (function (){var statearr_40507 = state_40505;
(statearr_40507[(7)] = inst_40488);

(statearr_40507[(8)] = inst_40481);

(statearr_40507[(9)] = inst_40487);

return statearr_40507;
})();
var statearr_40508_40524 = state_40505__$1;
(statearr_40508_40524[(2)] = null);

(statearr_40508_40524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (1))){
var inst_40473 = clojure.string.blank_QMARK_.call(null,exp);
var state_40505__$1 = state_40505;
if(inst_40473){
var statearr_40509_40525 = state_40505__$1;
(statearr_40509_40525[(1)] = (2));

} else {
var statearr_40510_40526 = state_40505__$1;
(statearr_40510_40526[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (4))){
var inst_40503 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40505__$1,inst_40503);
} else {
if((state_val_40506 === (6))){
var state_40505__$1 = state_40505;
var statearr_40511_40527 = state_40505__$1;
(statearr_40511_40527[(2)] = null);

(statearr_40511_40527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (3))){
var state_40505__$1 = state_40505;
if(cljs.core.truth_(setup_container_fn)){
var statearr_40512_40528 = state_40505__$1;
(statearr_40512_40528[(1)] = (5));

} else {
var statearr_40513_40529 = state_40505__$1;
(statearr_40513_40529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (2))){
var inst_40475 = cljs.core.async.put_BANG_.call(null,c,"");
var state_40505__$1 = state_40505;
var statearr_40514_40530 = state_40505__$1;
(statearr_40514_40530[(2)] = inst_40475);

(statearr_40514_40530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (11))){
var inst_40497 = (state_40505[(2)]);
var inst_40498 = cljs.core.second.call(null,inst_40497);
var inst_40499 = cljs.core.async.put_BANG_.call(null,c,inst_40498);
var state_40505__$1 = state_40505;
var statearr_40515_40531 = state_40505__$1;
(statearr_40515_40531[(2)] = inst_40499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (9))){
var inst_40489 = (state_40505[(2)]);
var inst_40490 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_40491 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_40505__$1 = (function (){var statearr_40516 = state_40505;
(statearr_40516[(10)] = inst_40491);

(statearr_40516[(11)] = inst_40490);

(statearr_40516[(12)] = inst_40489);

return statearr_40516;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40505__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (5))){
var inst_40478 = setup_container_fn.call(null,container_id);
var state_40505__$1 = state_40505;
var statearr_40517_40532 = state_40505__$1;
(statearr_40517_40532[(2)] = inst_40478);

(statearr_40517_40532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40506 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40505,null,null,(9),(8));
var inst_40495 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_40505__$1 = state_40505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40505__$1,(11),inst_40495);
} else {
if((state_val_40506 === (8))){
var inst_40501 = (state_40505[(2)]);
var state_40505__$1 = state_40505;
var statearr_40518_40533 = state_40505__$1;
(statearr_40518_40533[(2)] = inst_40501);

(statearr_40518_40533[(1)] = (4));


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
});})(c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__24871__auto__,c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0 = (function (){
var statearr_40519 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40519[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__);

(statearr_40519[(1)] = (1));

return statearr_40519;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1 = (function (state_40505){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_40505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e40520){if((e40520 instanceof Object)){
var ex__24875__auto__ = e40520;
var statearr_40521_40534 = state_40505;
(statearr_40521_40534[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40535 = state_40505;
state_40505 = G__40535;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__ = function(state_40505){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1.call(this,state_40505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__24896__auto__ = (function (){var statearr_40522 = f__24895__auto__.call(null);
(statearr_40522[(6)] = c__24894__auto___40523);

return statearr_40522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto___40523,c,map__40471,map__40471__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
