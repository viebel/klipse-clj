// Compiled by ClojureScript 1.10.238 {}
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
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
klipse_clj.lang.clojure.load_core_macros_cache = (function klipse_clj$lang$clojure$load_core_macros_cache(){
return klipse_clj.lang.clojure.io.load_ns_from_file.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"cljs-out/dev/cljs/core$macros.cljc.cache.json");
});
klipse_clj.lang.clojure.init_custom_macros = (function klipse_clj$lang$clojure$init_custom_macros(){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48054){
var state_val_48055 = (state_48054[(1)]);
if((state_val_48055 === (7))){
var inst_48050 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48056_48082 = state_48054__$1;
(statearr_48056_48082[(2)] = inst_48050);

(statearr_48056_48082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (1))){
var inst_47995 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48054__$1,(2),inst_47995);
} else {
if((state_val_48055 === (4))){
var inst_48052 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48054__$1,inst_48052);
} else {
if((state_val_48055 === (15))){
var inst_48025 = (state_48054[(7)]);
var inst_48041 = (state_48054[(2)]);
var inst_48042 = cljs.core.next.call(null,inst_48025);
var inst_48006 = inst_48042;
var inst_48007 = null;
var inst_48008 = (0);
var inst_48009 = (0);
var state_48054__$1 = (function (){var statearr_48057 = state_48054;
(statearr_48057[(8)] = inst_48006);

(statearr_48057[(9)] = inst_48008);

(statearr_48057[(10)] = inst_48041);

(statearr_48057[(11)] = inst_48007);

(statearr_48057[(12)] = inst_48009);

return statearr_48057;
})();
var statearr_48058_48083 = state_48054__$1;
(statearr_48058_48083[(2)] = null);

(statearr_48058_48083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (13))){
var inst_48025 = (state_48054[(7)]);
var inst_48034 = cljs.core.first.call(null,inst_48025);
var inst_48035 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_48036 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48037 = [inst_48036,klipse_clj.repl.current_ns_eval];
var inst_48038 = cljs.core.PersistentHashMap.fromArrays(inst_48035,inst_48037);
var inst_48039 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48034,inst_48038);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48054__$1,(15),inst_48039);
} else {
if((state_val_48055 === (6))){
var inst_48006 = (state_48054[(8)]);
var inst_48025 = (state_48054[(7)]);
var inst_48025__$1 = cljs.core.seq.call(null,inst_48006);
var state_48054__$1 = (function (){var statearr_48059 = state_48054;
(statearr_48059[(7)] = inst_48025__$1);

return statearr_48059;
})();
if(inst_48025__$1){
var statearr_48060_48084 = state_48054__$1;
(statearr_48060_48084[(1)] = (9));

} else {
var statearr_48061_48085 = state_48054__$1;
(statearr_48061_48085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (3))){
var inst_48008 = (state_48054[(9)]);
var inst_48009 = (state_48054[(12)]);
var inst_48011 = (inst_48009 < inst_48008);
var inst_48012 = inst_48011;
var state_48054__$1 = state_48054;
if(cljs.core.truth_(inst_48012)){
var statearr_48062_48086 = state_48054__$1;
(statearr_48062_48086[(1)] = (5));

} else {
var statearr_48063_48087 = state_48054__$1;
(statearr_48063_48087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (12))){
var inst_48025 = (state_48054[(7)]);
var inst_48029 = cljs.core.chunk_first.call(null,inst_48025);
var inst_48030 = cljs.core.chunk_rest.call(null,inst_48025);
var inst_48031 = cljs.core.count.call(null,inst_48029);
var inst_48006 = inst_48030;
var inst_48007 = inst_48029;
var inst_48008 = inst_48031;
var inst_48009 = (0);
var state_48054__$1 = (function (){var statearr_48064 = state_48054;
(statearr_48064[(8)] = inst_48006);

(statearr_48064[(9)] = inst_48008);

(statearr_48064[(11)] = inst_48007);

(statearr_48064[(12)] = inst_48009);

return statearr_48064;
})();
var statearr_48065_48088 = state_48054__$1;
(statearr_48065_48088[(2)] = null);

(statearr_48065_48088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (2))){
var inst_47997 = (state_48054[(2)]);
var inst_48002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48003 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_48004 = (new cljs.core.PersistentVector(null,2,(5),inst_48002,inst_48003,null));
var inst_48005 = cljs.core.seq.call(null,inst_48004);
var inst_48006 = inst_48005;
var inst_48007 = null;
var inst_48008 = (0);
var inst_48009 = (0);
var state_48054__$1 = (function (){var statearr_48066 = state_48054;
(statearr_48066[(8)] = inst_48006);

(statearr_48066[(9)] = inst_48008);

(statearr_48066[(13)] = inst_47997);

(statearr_48066[(11)] = inst_48007);

(statearr_48066[(12)] = inst_48009);

return statearr_48066;
})();
var statearr_48067_48089 = state_48054__$1;
(statearr_48067_48089[(2)] = null);

(statearr_48067_48089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (11))){
var inst_48048 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48068_48090 = state_48054__$1;
(statearr_48068_48090[(2)] = inst_48048);

(statearr_48068_48090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (9))){
var inst_48025 = (state_48054[(7)]);
var inst_48027 = cljs.core.chunked_seq_QMARK_.call(null,inst_48025);
var state_48054__$1 = state_48054;
if(inst_48027){
var statearr_48069_48091 = state_48054__$1;
(statearr_48069_48091[(1)] = (12));

} else {
var statearr_48070_48092 = state_48054__$1;
(statearr_48070_48092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (5))){
var inst_48007 = (state_48054[(11)]);
var inst_48009 = (state_48054[(12)]);
var inst_48014 = cljs.core._nth.call(null,inst_48007,inst_48009);
var inst_48015 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_48016 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48017 = [inst_48016,klipse_clj.repl.current_ns_eval];
var inst_48018 = cljs.core.PersistentHashMap.fromArrays(inst_48015,inst_48017);
var inst_48019 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48014,inst_48018);
var state_48054__$1 = state_48054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48054__$1,(8),inst_48019);
} else {
if((state_val_48055 === (14))){
var inst_48045 = (state_48054[(2)]);
var state_48054__$1 = state_48054;
var statearr_48074_48093 = state_48054__$1;
(statearr_48074_48093[(2)] = inst_48045);

(statearr_48074_48093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (10))){
var state_48054__$1 = state_48054;
var statearr_48075_48094 = state_48054__$1;
(statearr_48075_48094[(2)] = null);

(statearr_48075_48094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48055 === (8))){
var inst_48006 = (state_48054[(8)]);
var inst_48008 = (state_48054[(9)]);
var inst_48007 = (state_48054[(11)]);
var inst_48009 = (state_48054[(12)]);
var inst_48021 = (state_48054[(2)]);
var inst_48022 = (inst_48009 + (1));
var tmp48071 = inst_48006;
var tmp48072 = inst_48008;
var tmp48073 = inst_48007;
var inst_48006__$1 = tmp48071;
var inst_48007__$1 = tmp48073;
var inst_48008__$1 = tmp48072;
var inst_48009__$1 = inst_48022;
var state_48054__$1 = (function (){var statearr_48076 = state_48054;
(statearr_48076[(8)] = inst_48006__$1);

(statearr_48076[(9)] = inst_48008__$1);

(statearr_48076[(14)] = inst_48021);

(statearr_48076[(11)] = inst_48007__$1);

(statearr_48076[(12)] = inst_48009__$1);

return statearr_48076;
})();
var statearr_48077_48095 = state_48054__$1;
(statearr_48077_48095[(2)] = null);

(statearr_48077_48095[(1)] = (3));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0 = (function (){
var statearr_48078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48078[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__);

(statearr_48078[(1)] = (1));

return statearr_48078;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1 = (function (state_48054){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48079){if((e48079 instanceof Object)){
var ex__13860__auto__ = e48079;
var statearr_48080_48096 = state_48054;
(statearr_48080_48096[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48097 = state_48054;
state_48054 = G__48097;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__ = function(state_48054){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1.call(this,state_48054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48081 = f__13947__auto__.call(null);
(statearr_48081[(6)] = c__13946__auto__);

return statearr_48081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48111){
var state_val_48112 = (state_48111[(1)]);
if((state_val_48112 === (1))){
var inst_48098 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48099 = (inst_48098 == null);
var state_48111__$1 = state_48111;
if(cljs.core.truth_(inst_48099)){
var statearr_48113_48123 = state_48111__$1;
(statearr_48113_48123[(1)] = (2));

} else {
var statearr_48114_48124 = state_48111__$1;
(statearr_48114_48124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48112 === (2))){
var inst_48101 = cljs.js.empty_state.call(null);
var inst_48102 = cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,inst_48101);
var inst_48103 = klipse_clj.lang.clojure.init_custom_macros.call(null);
var state_48111__$1 = (function (){var statearr_48115 = state_48111;
(statearr_48115[(7)] = inst_48102);

return statearr_48115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48111__$1,(5),inst_48103);
} else {
if((state_val_48112 === (3))){
var state_48111__$1 = state_48111;
var statearr_48116_48125 = state_48111__$1;
(statearr_48116_48125[(2)] = null);

(statearr_48116_48125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48112 === (4))){
var inst_48108 = (state_48111[(2)]);
var inst_48109 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_48111__$1 = (function (){var statearr_48117 = state_48111;
(statearr_48117[(8)] = inst_48108);

return statearr_48117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48111__$1,inst_48109);
} else {
if((state_val_48112 === (5))){
var inst_48105 = (state_48111[(2)]);
var state_48111__$1 = state_48111;
var statearr_48118_48126 = state_48111__$1;
(statearr_48118_48126[(2)] = inst_48105);

(statearr_48118_48126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0 = (function (){
var statearr_48119 = [null,null,null,null,null,null,null,null,null];
(statearr_48119[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__);

(statearr_48119[(1)] = (1));

return statearr_48119;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1 = (function (state_48111){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48120){if((e48120 instanceof Object)){
var ex__13860__auto__ = e48120;
var statearr_48121_48127 = state_48111;
(statearr_48121_48127[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48128 = state_48111;
state_48111 = G__48128;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__ = function(state_48111){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1.call(this,state_48111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48122 = f__13947__auto__.call(null);
(statearr_48122[(6)] = c__13946__auto__);

return statearr_48122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.current_alias_map = (function klipse_clj$lang$clojure$current_alias_map(ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__48129){
var vec__48130 = p__48129;
var k = cljs.core.nth.call(null,vec__48130,(0),null);
var v = cljs.core.nth.call(null,vec__48130,(1),null);
return cljs.core._EQ_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__48133){
var map__48134 = p__48133;
var map__48134__$1 = ((((!((map__48134 == null)))?(((((map__48134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48134):map__48134);
var print_length = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var _STAR_print_length_STAR_48136 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = print_length;

try{var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48137_48139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48138_48140 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48137_48139,_STAR_print_fn_STAR_48138_48140,sb__4430__auto__,_STAR_print_length_STAR_48136,map__48134,map__48134__$1,print_length,beautify_strings){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_48137_48139,_STAR_print_fn_STAR_48138_48140,sb__4430__auto__,_STAR_print_length_STAR_48136,map__48134,map__48134__$1,print_length,beautify_strings))
;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = typeof value === 'string';
if(and__3911__auto__){
return beautify_strings;
} else {
return and__3911__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48138_48140;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48137_48139;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_48136;
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__48141,verbose_QMARK_,current_ns){
var map__48142 = p__48141;
var map__48142__$1 = ((((!((map__48142 == null)))?(((((map__48142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48142):map__48142);
var ns = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(verbose_QMARK_)){
console.info("update-current-ns:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''));
} else {
}

return cljs.core.reset_BANG_.call(null,current_ns,ns);
}
});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__48144,opts){
var map__48145 = p__48144;
var map__48145__$1 = ((((!((map__48145 == null)))?(((((map__48145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48145):map__48145);
var args = map__48145__$1;
var ns = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48145__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):cljs.core.pr_str.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__48147){
var map__48148 = p__48147;
var map__48148__$1 = ((((!((map__48148 == null)))?(((((map__48148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48148):map__48148);
var form = cljs.core.get.call(null,map__48148__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__48148__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__48148__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__48148__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__48148__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__48150){
var map__48151 = p__48150;
var map__48151__$1 = ((((!((map__48151 == null)))?(((((map__48151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48151):map__48151);
var foo = map__48151__$1;
var value = cljs.core.get.call(null,map__48151__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__48151__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__48153){
var map__48154 = p__48153;
var map__48154__$1 = ((((!((map__48154 == null)))?(((((map__48154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48154):map__48154);
var args = map__48154__$1;
var file = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__48154__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__48156){
var map__48157 = p__48156;
var map__48157__$1 = ((((!((map__48157 == null)))?(((((map__48157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48157):map__48157);
var source = cljs.core.get.call(null,map__48157__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__48159){
var map__48160 = p__48159;
var map__48160__$1 = ((((!((map__48160 == null)))?(((((map__48160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48160):map__48160);
var static_fns = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__48160__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits48162_48163 = cljs.compiler.emits;
cljs.compiler.emits = the_emits;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits48162_48163,c,max_eval_duration__$1,the_emits,map__48160,map__48160__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits48162_48163,c,max_eval_duration__$1,the_emits,map__48160,map__48160__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits48162_48163;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__48164){
var map__48165 = p__48164;
var map__48165__$1 = ((((!((map__48165 == null)))?(((((map__48165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48165):map__48165);
var static_fns = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__48165__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4006__auto__ = max_eval_duration;
var y__4007__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var emits48167_48168 = cljs.compiler.emits;
cljs.compiler.emits = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits48167_48168,c,max_eval_duration__$1,map__48165,map__48165__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits48167_48168,c,max_eval_duration__$1,map__48165,map__48165__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits48167_48168;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5455__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5455__auto__)){
var ch = temp__5455__auto__;
var G__48169 = cljs.core.conj.call(null,res,ch);
res = G__48169;
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
var _STAR_alias_map_STAR_48170 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_48171 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_48172 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_48173 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol48174 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_48175 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.lang.clojure.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_48175;

cljs.tools.reader.resolve_symbol = resolve_symbol48174;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_48173;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_48172;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_48171;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_48170;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__48179 = arguments.length;
switch (G__48179) {
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
var _STAR_alias_map_STAR_48180 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR_48181 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR_48182 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR_48183 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol48184 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR_48185 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = klipse_clj.lang.clojure.current_alias_map.call(null,ns);

cljs.core._STAR_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.env._STAR_compiler_STAR_ = st;

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.tools.reader._STAR_data_readers_STAR_ = klipse_clj.lang.clojure.data_readers.call(null);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_48185;

cljs.tools.reader.resolve_symbol = resolve_symbol48184;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_48183;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_48182;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_48181;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_48180;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__48187 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__48187,(0),null);
var rest_s = cljs.core.nth.call(null,vec__48187,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__48190 = rest_s;
var G__48191 = res;
s__$1 = G__48190;
res = G__48191;
continue;
} else {
var G__48192 = rest_s;
var G__48193 = cljs.core.conj.call(null,res,exp);
s__$1 = G__48192;
res = G__48193;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(res,p__48194){
var map__48195 = p__48194;
var map__48195__$1 = ((((!((map__48195 == null)))?(((((map__48195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48195):map__48195);
var result_element = cljs.core.get.call(null,map__48195__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__48195__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__3911__auto__ = container;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__3911__auto__;
}
})())){
goog.dom.setTextContent(container,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))].join(''));
} else {
}

return res;
});
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48254){
var state_val_48255 = (state_48254[(1)]);
if((state_val_48255 === (7))){
var inst_48250 = (state_48254[(2)]);
var state_48254__$1 = state_48254;
var statearr_48256_48277 = state_48254__$1;
(statearr_48256_48277[(2)] = inst_48250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48254__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (1))){
var state_48254__$1 = state_48254;
var statearr_48257_48278 = state_48254__$1;
(statearr_48257_48278[(2)] = null);

(statearr_48257_48278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48254,(3),Object,null,(2));
var inst_48205 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_48254__$1 = state_48254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48254__$1,(5),inst_48205);
} else {
if((state_val_48255 === (13))){
var inst_48227 = (state_48254[(7)]);
var inst_48235 = (state_48254[(8)]);
var inst_48240 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48241 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_48242 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_48227,inst_48240,inst_48241);
var inst_48220 = inst_48242;
var inst_48221 = inst_48235;
var state_48254__$1 = (function (){var statearr_48258 = state_48254;
(statearr_48258[(9)] = inst_48221);

(statearr_48258[(10)] = inst_48220);

return statearr_48258;
})();
var statearr_48259_48279 = state_48254__$1;
(statearr_48259_48279[(2)] = null);

(statearr_48259_48279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (6))){
var inst_48220 = (state_48254[(10)]);
var inst_48226 = (state_48254[(11)]);
var inst_48226__$1 = cljs.core.nth.call(null,inst_48220,(0),null);
var inst_48227 = cljs.core.nth.call(null,inst_48220,(1),null);
var inst_48228 = cljs.core.empty_QMARK_.call(null,inst_48226__$1);
var inst_48229 = !(inst_48228);
var state_48254__$1 = (function (){var statearr_48260 = state_48254;
(statearr_48260[(7)] = inst_48227);

(statearr_48260[(11)] = inst_48226__$1);

return statearr_48260;
})();
if(inst_48229){
var statearr_48261_48280 = state_48254__$1;
(statearr_48261_48280[(1)] = (8));

} else {
var statearr_48262_48281 = state_48254__$1;
(statearr_48262_48281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (3))){
var inst_48197 = (state_48254[(2)]);
var inst_48198 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_48199 = [inst_48197];
var inst_48200 = cljs.core.PersistentHashMap.fromArrays(inst_48198,inst_48199);
var inst_48201 = klipse_clj.lang.clojure.populate_err.call(null,inst_48200,opts);
var state_48254__$1 = state_48254;
var statearr_48263_48282 = state_48254__$1;
(statearr_48263_48282[(2)] = inst_48201);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48254__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (12))){
var inst_48235 = (state_48254[(8)]);
var inst_48238 = klipse_clj.lang.clojure.populate_err.call(null,inst_48235,opts);
var state_48254__$1 = state_48254;
var statearr_48264_48283 = state_48254__$1;
(statearr_48264_48283[(2)] = inst_48238);

(statearr_48264_48283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (2))){
var inst_48252 = (state_48254[(2)]);
var state_48254__$1 = state_48254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48254__$1,inst_48252);
} else {
if((state_val_48255 === (11))){
var inst_48235 = (state_48254[(8)]);
var inst_48235__$1 = (state_48254[(2)]);
var inst_48236 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48235__$1);
var state_48254__$1 = (function (){var statearr_48265 = state_48254;
(statearr_48265[(8)] = inst_48235__$1);

return statearr_48265;
})();
if(cljs.core.truth_(inst_48236)){
var statearr_48266_48284 = state_48254__$1;
(statearr_48266_48284[(1)] = (12));

} else {
var statearr_48267_48285 = state_48254__$1;
(statearr_48267_48285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (9))){
var inst_48221 = (state_48254[(9)]);
var state_48254__$1 = state_48254;
var statearr_48268_48286 = state_48254__$1;
(statearr_48268_48286[(2)] = inst_48221);

(statearr_48268_48286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (5))){
var inst_48207 = (state_48254[(2)]);
var inst_48215 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48216 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_48217 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_48215,inst_48216);
var inst_48218 = cljs.core.nth.call(null,inst_48217,(0),null);
var inst_48219 = cljs.core.nth.call(null,inst_48217,(1),null);
var inst_48220 = inst_48217;
var inst_48221 = null;
var state_48254__$1 = (function (){var statearr_48269 = state_48254;
(statearr_48269[(9)] = inst_48221);

(statearr_48269[(12)] = inst_48218);

(statearr_48269[(10)] = inst_48220);

(statearr_48269[(13)] = inst_48219);

(statearr_48269[(14)] = inst_48207);

return statearr_48269;
})();
var statearr_48270_48287 = state_48254__$1;
(statearr_48270_48287[(2)] = null);

(statearr_48270_48287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (14))){
var inst_48245 = (state_48254[(2)]);
var state_48254__$1 = state_48254;
var statearr_48271_48288 = state_48254__$1;
(statearr_48271_48288[(2)] = inst_48245);

(statearr_48271_48288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (10))){
var inst_48248 = (state_48254[(2)]);
var state_48254__$1 = state_48254;
var statearr_48272_48289 = state_48254__$1;
(statearr_48272_48289[(2)] = inst_48248);

(statearr_48272_48289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48255 === (8))){
var inst_48226 = (state_48254[(11)]);
var inst_48231 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_48232 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_48231,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_48233 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_48226,inst_48232);
var state_48254__$1 = state_48254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48254__$1,(11),inst_48233);
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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0 = (function (){
var statearr_48273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48273[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__);

(statearr_48273[(1)] = (1));

return statearr_48273;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1 = (function (state_48254){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48274){if((e48274 instanceof Object)){
var ex__13860__auto__ = e48274;
var statearr_48275_48290 = state_48254;
(statearr_48275_48290[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48291 = state_48254;
state_48254 = G__48291;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__ = function(state_48254){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1.call(this,state_48254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48276 = f__13947__auto__.call(null);
(statearr_48276[(6)] = c__13946__auto__);

return statearr_48276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48349){
var state_val_48350 = (state_48349[(1)]);
if((state_val_48350 === (7))){
var inst_48317 = (state_48349[(7)]);
var inst_48322 = klipse_clj.repl.create_state_compile.call(null);
var inst_48323 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_48322,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_48324 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_48317,inst_48323);
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48349__$1,(10),inst_48324);
} else {
if((state_val_48350 === (1))){
var state_48349__$1 = state_48349;
var statearr_48351_48372 = state_48349__$1;
(statearr_48351_48372[(2)] = null);

(statearr_48351_48372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48349,(3),Object,null,(2));
var inst_48306 = klipse_clj.repl.create_state_compile.call(null);
var inst_48307 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_48308 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_48306,inst_48307);
var inst_48309 = cljs.core.nth.call(null,inst_48308,(0),null);
var inst_48310 = cljs.core.nth.call(null,inst_48308,(1),null);
var inst_48311 = inst_48308;
var inst_48312 = "";
var state_48349__$1 = (function (){var statearr_48352 = state_48349;
(statearr_48352[(8)] = inst_48309);

(statearr_48352[(9)] = inst_48311);

(statearr_48352[(10)] = inst_48310);

(statearr_48352[(11)] = inst_48312);

return statearr_48352;
})();
var statearr_48353_48373 = state_48349__$1;
(statearr_48353_48373[(2)] = null);

(statearr_48353_48373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (13))){
var inst_48337 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48354_48374 = state_48349__$1;
(statearr_48354_48374[(2)] = inst_48337);

(statearr_48354_48374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (6))){
var inst_48345 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48355_48375 = state_48349__$1;
(statearr_48355_48375[(2)] = inst_48345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (3))){
var inst_48292 = (state_48349[(2)]);
var inst_48293 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_48294 = [inst_48292];
var inst_48295 = cljs.core.PersistentHashMap.fromArrays(inst_48293,inst_48294);
var state_48349__$1 = state_48349;
var statearr_48356_48376 = state_48349__$1;
(statearr_48356_48376[(2)] = inst_48295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (12))){
var inst_48326 = (state_48349[(12)]);
var inst_48318 = (state_48349[(13)]);
var inst_48312 = (state_48349[(11)]);
var inst_48330 = klipse_clj.repl.create_state_compile.call(null);
var inst_48331 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_48332 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_48318,inst_48330,inst_48331);
var inst_48333 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_48326);
var inst_48334 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48312),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48333)].join('');
var inst_48311 = inst_48332;
var inst_48312__$1 = inst_48334;
var state_48349__$1 = (function (){var statearr_48357 = state_48349;
(statearr_48357[(9)] = inst_48311);

(statearr_48357[(11)] = inst_48312__$1);

return statearr_48357;
})();
var statearr_48358_48377 = state_48349__$1;
(statearr_48358_48377[(2)] = null);

(statearr_48358_48377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (2))){
var inst_48347 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48349__$1,inst_48347);
} else {
if((state_val_48350 === (11))){
var inst_48326 = (state_48349[(12)]);
var state_48349__$1 = state_48349;
var statearr_48359_48378 = state_48349__$1;
(statearr_48359_48378[(2)] = inst_48326);

(statearr_48359_48378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (9))){
var inst_48343 = (state_48349[(2)]);
var state_48349__$1 = state_48349;
var statearr_48360_48379 = state_48349__$1;
(statearr_48360_48379[(2)] = inst_48343);

(statearr_48360_48379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (5))){
var inst_48311 = (state_48349[(9)]);
var inst_48317 = (state_48349[(7)]);
var inst_48317__$1 = cljs.core.nth.call(null,inst_48311,(0),null);
var inst_48318 = cljs.core.nth.call(null,inst_48311,(1),null);
var inst_48319 = cljs.core.empty_QMARK_.call(null,inst_48317__$1);
var inst_48320 = !(inst_48319);
var state_48349__$1 = (function (){var statearr_48361 = state_48349;
(statearr_48361[(13)] = inst_48318);

(statearr_48361[(7)] = inst_48317__$1);

return statearr_48361;
})();
if(inst_48320){
var statearr_48362_48380 = state_48349__$1;
(statearr_48362_48380[(1)] = (7));

} else {
var statearr_48363_48381 = state_48349__$1;
(statearr_48363_48381[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (10))){
var inst_48326 = (state_48349[(12)]);
var inst_48326__$1 = (state_48349[(2)]);
var inst_48327 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48326__$1);
var state_48349__$1 = (function (){var statearr_48364 = state_48349;
(statearr_48364[(12)] = inst_48326__$1);

return statearr_48364;
})();
if(cljs.core.truth_(inst_48327)){
var statearr_48365_48382 = state_48349__$1;
(statearr_48365_48382[(1)] = (11));

} else {
var statearr_48366_48383 = state_48349__$1;
(statearr_48366_48383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48350 === (8))){
var inst_48312 = (state_48349[(11)]);
var inst_48339 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_48340 = [inst_48312];
var inst_48341 = cljs.core.PersistentHashMap.fromArrays(inst_48339,inst_48340);
var state_48349__$1 = state_48349;
var statearr_48367_48384 = state_48349__$1;
(statearr_48367_48384[(2)] = inst_48341);

(statearr_48367_48384[(1)] = (9));


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
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0 = (function (){
var statearr_48368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48368[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__);

(statearr_48368[(1)] = (1));

return statearr_48368;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1 = (function (state_48349){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48369){if((e48369 instanceof Object)){
var ex__13860__auto__ = e48369;
var statearr_48370_48385 = state_48349;
(statearr_48370_48385[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48386 = state_48349;
state_48349 = G__48386;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__ = function(state_48349){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1.call(this,state_48349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48371 = f__13947__auto__.call(null);
(statearr_48371[(6)] = c__13946__auto__);

return statearr_48371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48392){
var state_val_48393 = (state_48392[(1)]);
if((state_val_48393 === (1))){
var inst_48387 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_48392__$1 = state_48392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48392__$1,(2),inst_48387);
} else {
if((state_val_48393 === (2))){
var inst_48389 = (state_48392[(2)]);
var inst_48390 = klipse_clj.lang.clojure.result_as_str.call(null,inst_48389,opts);
var state_48392__$1 = state_48392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48392__$1,inst_48390);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0 = (function (){
var statearr_48394 = [null,null,null,null,null,null,null];
(statearr_48394[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__);

(statearr_48394[(1)] = (1));

return statearr_48394;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1 = (function (state_48392){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48395){if((e48395 instanceof Object)){
var ex__13860__auto__ = e48395;
var statearr_48396_48398 = state_48392;
(statearr_48396_48398[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48399 = state_48392;
state_48392 = G__48399;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__ = function(state_48392){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1.call(this,state_48392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48397 = f__13947__auto__.call(null);
(statearr_48397[(6)] = c__13946__auto__);

return statearr_48397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__48401 = arguments.length;
switch (G__48401) {
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
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48407){
var state_val_48408 = (state_48407[(1)]);
if((state_val_48408 === (1))){
var inst_48402 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_48407__$1 = state_48407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48407__$1,(2),inst_48402);
} else {
if((state_val_48408 === (2))){
var inst_48404 = (state_48407[(2)]);
var inst_48405 = klipse_clj.lang.clojure.read_result.call(null,inst_48404);
var state_48407__$1 = state_48407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48407__$1,inst_48405);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13857__auto____0 = (function (){
var statearr_48409 = [null,null,null,null,null,null,null];
(statearr_48409[(0)] = klipse_clj$lang$clojure$state_machine__13857__auto__);

(statearr_48409[(1)] = (1));

return statearr_48409;
});
var klipse_clj$lang$clojure$state_machine__13857__auto____1 = (function (state_48407){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48410){if((e48410 instanceof Object)){
var ex__13860__auto__ = e48410;
var statearr_48411_48414 = state_48407;
(statearr_48411_48414[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48415 = state_48407;
state_48407 = G__48415;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13857__auto__ = function(state_48407){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13857__auto____1.call(this,state_48407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13857__auto____0;
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48412 = f__13947__auto__.call(null);
(statearr_48412[(6)] = c__13946__auto__);

return statearr_48412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48422){
var state_val_48423 = (state_48422[(1)]);
if((state_val_48423 === (1))){
var inst_48416 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_48422__$1 = state_48422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48422__$1,(2),inst_48416);
} else {
if((state_val_48423 === (2))){
var inst_48418 = (state_48422[(2)]);
var inst_48419 = cljs.core.clj__GT_js.call(null,inst_48418);
var inst_48420 = cb.call(null,inst_48419);
var state_48422__$1 = state_48422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48422__$1,inst_48420);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0 = (function (){
var statearr_48424 = [null,null,null,null,null,null,null];
(statearr_48424[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__);

(statearr_48424[(1)] = (1));

return statearr_48424;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1 = (function (state_48422){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48425){if((e48425 instanceof Object)){
var ex__13860__auto__ = e48425;
var statearr_48426_48428 = state_48422;
(statearr_48426_48428[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48429 = state_48422;
state_48422 = G__48429;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__ = function(state_48422){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1.call(this,state_48422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48427 = f__13947__auto__.call(null);
(statearr_48427[(6)] = c__13946__auto__);

return statearr_48427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__48431 = arguments.length;
switch (G__48431) {
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
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48437){
var state_val_48438 = (state_48437[(1)]);
if((state_val_48438 === (1))){
var inst_48432 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_48437__$1 = state_48437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48437__$1,(2),inst_48432);
} else {
if((state_val_48438 === (2))){
var inst_48434 = (state_48437[(2)]);
var inst_48435 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_48434);
var state_48437__$1 = state_48437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48437__$1,inst_48435);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13857__auto____0 = (function (){
var statearr_48439 = [null,null,null,null,null,null,null];
(statearr_48439[(0)] = klipse_clj$lang$clojure$state_machine__13857__auto__);

(statearr_48439[(1)] = (1));

return statearr_48439;
});
var klipse_clj$lang$clojure$state_machine__13857__auto____1 = (function (state_48437){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48440){if((e48440 instanceof Object)){
var ex__13860__auto__ = e48440;
var statearr_48441_48444 = state_48437;
(statearr_48441_48444[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48445 = state_48437;
state_48437 = G__48445;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13857__auto__ = function(state_48437){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13857__auto____1.call(this,state_48437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13857__auto____0;
klipse_clj$lang$clojure$state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13857__auto____1;
return klipse_clj$lang$clojure$state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48442 = f__13947__auto__.call(null);
(statearr_48442[(6)] = c__13946__auto__);

return statearr_48442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48451){
var state_val_48452 = (state_48451[(1)]);
if((state_val_48452 === (1))){
var inst_48446 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_48451__$1 = state_48451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48451__$1,(2),inst_48446);
} else {
if((state_val_48452 === (2))){
var inst_48448 = (state_48451[(2)]);
var inst_48449 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_48448);
var state_48451__$1 = state_48451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48451__$1,inst_48449);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0 = (function (){
var statearr_48453 = [null,null,null,null,null,null,null];
(statearr_48453[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__);

(statearr_48453[(1)] = (1));

return statearr_48453;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1 = (function (state_48451){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48454){if((e48454 instanceof Object)){
var ex__13860__auto__ = e48454;
var statearr_48455_48457 = state_48451;
(statearr_48455_48457[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48458 = state_48451;
state_48451 = G__48458;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__ = function(state_48451){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1.call(this,state_48451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48456 = f__13947__auto__.call(null);
(statearr_48456[(6)] = c__13946__auto__);

return statearr_48456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_48465){
var state_val_48466 = (state_48465[(1)]);
if((state_val_48466 === (1))){
var inst_48459 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48465__$1,(2),inst_48459);
} else {
if((state_val_48466 === (2))){
var inst_48461 = (state_48465[(2)]);
var inst_48462 = cljs.core.second.call(null,inst_48461);
var inst_48463 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48462)].join('');
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48465__$1,inst_48463);
} else {
return null;
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0 = (function (){
var statearr_48467 = [null,null,null,null,null,null,null];
(statearr_48467[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__);

(statearr_48467[(1)] = (1));

return statearr_48467;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1 = (function (state_48465){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48468){if((e48468 instanceof Object)){
var ex__13860__auto__ = e48468;
var statearr_48469_48471 = state_48465;
(statearr_48469_48471[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48472 = state_48465;
state_48465 = G__48472;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__ = function(state_48465){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1.call(this,state_48465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_48470 = f__13947__auto__.call(null);
(statearr_48470[(6)] = c__13946__auto__);

return statearr_48470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__48474){
var map__48475 = p__48474;
var map__48475__$1 = ((((!((map__48475 == null)))?(((((map__48475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48475):map__48475);
var opts = map__48475__$1;
var container_id = cljs.core.get.call(null,map__48475__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__48475__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__48475__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13946__auto___48525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_48507){
var state_val_48508 = (state_48507[(1)]);
if((state_val_48508 === (7))){
var inst_48485 = (state_48507[(2)]);
var inst_48488 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_48489 = (function (){var _STAR_print_newline_STAR_48486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48487 = cljs.core._STAR_print_fn_STAR_;
return ((function (_STAR_print_newline_STAR_48486,_STAR_print_fn_STAR_48487,inst_48485,inst_48488,state_val_48508,c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__48473_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__48473_SHARP_);
});
;})(_STAR_print_newline_STAR_48486,_STAR_print_fn_STAR_48487,inst_48485,inst_48488,state_val_48508,c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_48490 = cljs.core._STAR_print_fn_STAR_ = inst_48489;
var state_48507__$1 = (function (){var statearr_48509 = state_48507;
(statearr_48509[(7)] = inst_48488);

(statearr_48509[(8)] = inst_48485);

(statearr_48509[(9)] = inst_48490);

return statearr_48509;
})();
var statearr_48510_48526 = state_48507__$1;
(statearr_48510_48526[(2)] = null);

(statearr_48510_48526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (1))){
var inst_48477 = clojure.string.blank_QMARK_.call(null,exp);
var state_48507__$1 = state_48507;
if(inst_48477){
var statearr_48511_48527 = state_48507__$1;
(statearr_48511_48527[(1)] = (2));

} else {
var statearr_48512_48528 = state_48507__$1;
(statearr_48512_48528[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (4))){
var inst_48505 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48507__$1,inst_48505);
} else {
if((state_val_48508 === (6))){
var state_48507__$1 = state_48507;
var statearr_48513_48529 = state_48507__$1;
(statearr_48513_48529[(2)] = null);

(statearr_48513_48529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (3))){
var state_48507__$1 = state_48507;
if(cljs.core.truth_(setup_container_fn)){
var statearr_48514_48530 = state_48507__$1;
(statearr_48514_48530[(1)] = (5));

} else {
var statearr_48515_48531 = state_48507__$1;
(statearr_48515_48531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (2))){
var inst_48479 = cljs.core.async.put_BANG_.call(null,c,"");
var state_48507__$1 = state_48507;
var statearr_48516_48532 = state_48507__$1;
(statearr_48516_48532[(2)] = inst_48479);

(statearr_48516_48532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (11))){
var inst_48499 = (state_48507[(2)]);
var inst_48500 = cljs.core.second.call(null,inst_48499);
var inst_48501 = cljs.core.async.put_BANG_.call(null,c,inst_48500);
var state_48507__$1 = state_48507;
var statearr_48517_48533 = state_48507__$1;
(statearr_48517_48533[(2)] = inst_48501);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48507__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (9))){
var inst_48491 = (state_48507[(2)]);
var inst_48492 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_48493 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_48507__$1 = (function (){var statearr_48518 = state_48507;
(statearr_48518[(10)] = inst_48492);

(statearr_48518[(11)] = inst_48491);

(statearr_48518[(12)] = inst_48493);

return statearr_48518;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48507__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (5))){
var inst_48482 = setup_container_fn.call(null,container_id);
var state_48507__$1 = state_48507;
var statearr_48519_48534 = state_48507__$1;
(statearr_48519_48534[(2)] = inst_48482);

(statearr_48519_48534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48508 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48507,null,null,(9),(8));
var inst_48497 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_48507__$1 = state_48507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48507__$1,(11),inst_48497);
} else {
if((state_val_48508 === (8))){
var inst_48503 = (state_48507[(2)]);
var state_48507__$1 = state_48507;
var statearr_48520_48535 = state_48507__$1;
(statearr_48520_48535[(2)] = inst_48503);

(statearr_48520_48535[(1)] = (4));


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
});})(c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__13856__auto__,c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0 = (function (){
var statearr_48521 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48521[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__);

(statearr_48521[(1)] = (1));

return statearr_48521;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1 = (function (state_48507){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_48507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e48522){if((e48522 instanceof Object)){
var ex__13860__auto__ = e48522;
var statearr_48523_48536 = state_48507;
(statearr_48523_48536[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48537 = state_48507;
state_48507 = G__48537;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__ = function(state_48507){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1.call(this,state_48507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__13948__auto__ = (function (){var statearr_48524 = f__13947__auto__.call(null);
(statearr_48524[(6)] = c__13946__auto___48525);

return statearr_48524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto___48525,c,map__48475,map__48475__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
