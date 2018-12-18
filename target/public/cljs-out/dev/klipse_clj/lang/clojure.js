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
return (function (state_41235){
var state_val_41236 = (state_41235[(1)]);
if((state_val_41236 === (7))){
var inst_41231 = (state_41235[(2)]);
var state_41235__$1 = state_41235;
var statearr_41237_41263 = state_41235__$1;
(statearr_41237_41263[(2)] = inst_41231);

(statearr_41237_41263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (1))){
var inst_41176 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_41235__$1 = state_41235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41235__$1,(2),inst_41176);
} else {
if((state_val_41236 === (4))){
var inst_41233 = (state_41235[(2)]);
var state_41235__$1 = state_41235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41235__$1,inst_41233);
} else {
if((state_val_41236 === (15))){
var inst_41206 = (state_41235[(7)]);
var inst_41222 = (state_41235[(2)]);
var inst_41223 = cljs.core.next.call(null,inst_41206);
var inst_41187 = inst_41223;
var inst_41188 = null;
var inst_41189 = (0);
var inst_41190 = (0);
var state_41235__$1 = (function (){var statearr_41238 = state_41235;
(statearr_41238[(8)] = inst_41190);

(statearr_41238[(9)] = inst_41187);

(statearr_41238[(10)] = inst_41189);

(statearr_41238[(11)] = inst_41222);

(statearr_41238[(12)] = inst_41188);

return statearr_41238;
})();
var statearr_41239_41264 = state_41235__$1;
(statearr_41239_41264[(2)] = null);

(statearr_41239_41264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (13))){
var inst_41206 = (state_41235[(7)]);
var inst_41215 = cljs.core.first.call(null,inst_41206);
var inst_41216 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_41217 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41218 = [inst_41217,klipse_clj.repl.current_ns_eval];
var inst_41219 = cljs.core.PersistentHashMap.fromArrays(inst_41216,inst_41218);
var inst_41220 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_41215,inst_41219);
var state_41235__$1 = state_41235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41235__$1,(15),inst_41220);
} else {
if((state_val_41236 === (6))){
var inst_41187 = (state_41235[(9)]);
var inst_41206 = (state_41235[(7)]);
var inst_41206__$1 = cljs.core.seq.call(null,inst_41187);
var state_41235__$1 = (function (){var statearr_41240 = state_41235;
(statearr_41240[(7)] = inst_41206__$1);

return statearr_41240;
})();
if(inst_41206__$1){
var statearr_41241_41265 = state_41235__$1;
(statearr_41241_41265[(1)] = (9));

} else {
var statearr_41242_41266 = state_41235__$1;
(statearr_41242_41266[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (3))){
var inst_41190 = (state_41235[(8)]);
var inst_41189 = (state_41235[(10)]);
var inst_41192 = (inst_41190 < inst_41189);
var inst_41193 = inst_41192;
var state_41235__$1 = state_41235;
if(cljs.core.truth_(inst_41193)){
var statearr_41243_41267 = state_41235__$1;
(statearr_41243_41267[(1)] = (5));

} else {
var statearr_41244_41268 = state_41235__$1;
(statearr_41244_41268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (12))){
var inst_41206 = (state_41235[(7)]);
var inst_41210 = cljs.core.chunk_first.call(null,inst_41206);
var inst_41211 = cljs.core.chunk_rest.call(null,inst_41206);
var inst_41212 = cljs.core.count.call(null,inst_41210);
var inst_41187 = inst_41211;
var inst_41188 = inst_41210;
var inst_41189 = inst_41212;
var inst_41190 = (0);
var state_41235__$1 = (function (){var statearr_41245 = state_41235;
(statearr_41245[(8)] = inst_41190);

(statearr_41245[(9)] = inst_41187);

(statearr_41245[(10)] = inst_41189);

(statearr_41245[(12)] = inst_41188);

return statearr_41245;
})();
var statearr_41246_41269 = state_41235__$1;
(statearr_41246_41269[(2)] = null);

(statearr_41246_41269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (2))){
var inst_41178 = (state_41235[(2)]);
var inst_41183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41184 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_41185 = (new cljs.core.PersistentVector(null,2,(5),inst_41183,inst_41184,null));
var inst_41186 = cljs.core.seq.call(null,inst_41185);
var inst_41187 = inst_41186;
var inst_41188 = null;
var inst_41189 = (0);
var inst_41190 = (0);
var state_41235__$1 = (function (){var statearr_41247 = state_41235;
(statearr_41247[(8)] = inst_41190);

(statearr_41247[(9)] = inst_41187);

(statearr_41247[(13)] = inst_41178);

(statearr_41247[(10)] = inst_41189);

(statearr_41247[(12)] = inst_41188);

return statearr_41247;
})();
var statearr_41248_41270 = state_41235__$1;
(statearr_41248_41270[(2)] = null);

(statearr_41248_41270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (11))){
var inst_41229 = (state_41235[(2)]);
var state_41235__$1 = state_41235;
var statearr_41249_41271 = state_41235__$1;
(statearr_41249_41271[(2)] = inst_41229);

(statearr_41249_41271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (9))){
var inst_41206 = (state_41235[(7)]);
var inst_41208 = cljs.core.chunked_seq_QMARK_.call(null,inst_41206);
var state_41235__$1 = state_41235;
if(inst_41208){
var statearr_41250_41272 = state_41235__$1;
(statearr_41250_41272[(1)] = (12));

} else {
var statearr_41251_41273 = state_41235__$1;
(statearr_41251_41273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (5))){
var inst_41190 = (state_41235[(8)]);
var inst_41188 = (state_41235[(12)]);
var inst_41195 = cljs.core._nth.call(null,inst_41188,inst_41190);
var inst_41196 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_41197 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41198 = [inst_41197,klipse_clj.repl.current_ns_eval];
var inst_41199 = cljs.core.PersistentHashMap.fromArrays(inst_41196,inst_41198);
var inst_41200 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_41195,inst_41199);
var state_41235__$1 = state_41235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41235__$1,(8),inst_41200);
} else {
if((state_val_41236 === (14))){
var inst_41226 = (state_41235[(2)]);
var state_41235__$1 = state_41235;
var statearr_41255_41274 = state_41235__$1;
(statearr_41255_41274[(2)] = inst_41226);

(statearr_41255_41274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (10))){
var state_41235__$1 = state_41235;
var statearr_41256_41275 = state_41235__$1;
(statearr_41256_41275[(2)] = null);

(statearr_41256_41275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41236 === (8))){
var inst_41190 = (state_41235[(8)]);
var inst_41187 = (state_41235[(9)]);
var inst_41189 = (state_41235[(10)]);
var inst_41188 = (state_41235[(12)]);
var inst_41202 = (state_41235[(2)]);
var inst_41203 = (inst_41190 + (1));
var tmp41252 = inst_41187;
var tmp41253 = inst_41189;
var tmp41254 = inst_41188;
var inst_41187__$1 = tmp41252;
var inst_41188__$1 = tmp41254;
var inst_41189__$1 = tmp41253;
var inst_41190__$1 = inst_41203;
var state_41235__$1 = (function (){var statearr_41257 = state_41235;
(statearr_41257[(8)] = inst_41190__$1);

(statearr_41257[(9)] = inst_41187__$1);

(statearr_41257[(14)] = inst_41202);

(statearr_41257[(10)] = inst_41189__$1);

(statearr_41257[(12)] = inst_41188__$1);

return statearr_41257;
})();
var statearr_41258_41276 = state_41235__$1;
(statearr_41258_41276[(2)] = null);

(statearr_41258_41276[(1)] = (3));


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
var statearr_41259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41259[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__);

(statearr_41259[(1)] = (1));

return statearr_41259;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1 = (function (state_41235){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41260){if((e41260 instanceof Object)){
var ex__24875__auto__ = e41260;
var statearr_41261_41277 = state_41235;
(statearr_41261_41277[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41278 = state_41235;
state_41235 = G__41278;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__ = function(state_41235){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1.call(this,state_41235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41262 = f__24895__auto__.call(null);
(statearr_41262[(6)] = c__24894__auto__);

return statearr_41262;
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
return (function (state_41281){
var state_val_41282 = (state_41281[(1)]);
if((state_val_41282 === (1))){
var inst_41279 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_41281__$1 = state_41281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41281__$1,inst_41279);
} else {
return null;
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0 = (function (){
var statearr_41283 = [null,null,null,null,null,null,null];
(statearr_41283[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__);

(statearr_41283[(1)] = (1));

return statearr_41283;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1 = (function (state_41281){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41284){if((e41284 instanceof Object)){
var ex__24875__auto__ = e41284;
var statearr_41285_41287 = state_41281;
(statearr_41285_41287[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41288 = state_41281;
state_41281 = G__41288;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__ = function(state_41281){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1.call(this,state_41281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41286 = f__24895__auto__.call(null);
(statearr_41286[(6)] = c__24894__auto__);

return statearr_41286;
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
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__41289){
var map__41290 = p__41289;
var map__41290__$1 = (((((!((map__41290 == null))))?(((((map__41290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41290):map__41290);
var print_length = cljs.core.get.call(null,map__41290__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__41290__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__41293 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__41294 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__41294;

try{var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41295_41299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41296_41300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41297_41301 = true;
var _STAR_print_fn_STAR__temp_val__41298_41302 = ((function (_STAR_print_newline_STAR__orig_val__41295_41299,_STAR_print_fn_STAR__orig_val__41296_41300,_STAR_print_newline_STAR__temp_val__41297_41301,sb__18969__auto__,_STAR_print_length_STAR__orig_val__41293,_STAR_print_length_STAR__temp_val__41294,map__41290,map__41290__$1,print_length,beautify_strings){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__41295_41299,_STAR_print_fn_STAR__orig_val__41296_41300,_STAR_print_newline_STAR__temp_val__41297_41301,sb__18969__auto__,_STAR_print_length_STAR__orig_val__41293,_STAR_print_length_STAR__temp_val__41294,map__41290,map__41290__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41297_41301;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41298_41302;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__17804__auto__ = typeof value === 'string';
if(and__17804__auto__){
return beautify_strings;
} else {
return and__17804__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41296_41300;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41295_41299;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__41293;
}}catch (e41292){if((e41292 instanceof Object)){
var e = e41292;
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
} else {
throw e41292;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__41303,verbose_QMARK_,current_ns){
var map__41304 = p__41303;
var map__41304__$1 = (((((!((map__41304 == null))))?(((((map__41304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41304):map__41304);
var ns = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__41304__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');

}
}
}catch (e41306){if((e41306 instanceof Object)){
var e = e41306;
return e;
} else {
throw e41306;

}
}});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__41307,opts){
var map__41308 = p__41307;
var map__41308__$1 = (((((!((map__41308 == null))))?(((((map__41308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41308):map__41308);
var args = map__41308__$1;
var ns = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__41308__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?klipse_clj.lang.clojure.display.call(null,value,opts):klipse_clj.lang.clojure.display_err.call(null,error));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__41310){
var map__41311 = p__41310;
var map__41311__$1 = (((((!((map__41311 == null))))?(((((map__41311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41311):map__41311);
var form = cljs.core.get.call(null,map__41311__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__41311__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__41311__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__41311__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__41311__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__41313){
var map__41314 = p__41313;
var map__41314__$1 = (((((!((map__41314 == null))))?(((((map__41314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41314):map__41314);
var foo = map__41314__$1;
var value = cljs.core.get.call(null,map__41314__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__41314__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__41316){
var map__41317 = p__41316;
var map__41317__$1 = (((((!((map__41317 == null))))?(((((map__41317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41317):map__41317);
var args = map__41317__$1;
var file = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__41317__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__41319){
var map__41320 = p__41319;
var map__41320__$1 = (((((!((map__41320 == null))))?(((((map__41320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41320):map__41320);
var source = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__41322){
var map__41323 = p__41322;
var map__41323__$1 = (((((!((map__41323 == null))))?(((((map__41323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41323):map__41323);
var static_fns = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__41323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
var emits_orig_val__41325_41327 = cljs.compiler.emits;
var emits_temp_val__41326_41328 = the_emits;
cljs.compiler.emits = emits_temp_val__41326_41328;

try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__41325_41327,emits_temp_val__41326_41328,c,max_eval_duration__$1,the_emits,map__41323,map__41323__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__41325_41327,emits_temp_val__41326_41328,c,max_eval_duration__$1,the_emits,map__41323,map__41323__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__41325_41327;
}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__41329){
var map__41330 = p__41329;
var map__41330__$1 = (((((!((map__41330 == null))))?(((((map__41330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41330):map__41330);
var static_fns = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__41330__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__18177__auto__ = max_eval_duration;
var y__18178__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__18177__auto__ > y__18178__auto__) ? x__18177__auto__ : y__18178__auto__);
})();
var emits_orig_val__41332_41334 = cljs.compiler.emits;
var emits_temp_val__41333_41335 = cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1);
cljs.compiler.emits = emits_temp_val__41333_41335;

try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (emits_orig_val__41332_41334,emits_temp_val__41333_41335,c,max_eval_duration__$1,map__41330,map__41330__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(emits_orig_val__41332_41334,emits_temp_val__41333_41335,c,max_eval_duration__$1,map__41330,map__41330__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
);
}finally {cljs.compiler.emits = emits_orig_val__41332_41334;
}
return c;
});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5718__auto__)){
var ch = temp__5718__auto__;
var G__41336 = cljs.core.conj.call(null,res,ch);
res = G__41336;
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
var _STAR_alias_map_STAR__orig_val__41337 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__41338 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__41339 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__41340 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__41341 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__41342 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__41343 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__41344 = ns;
var _STAR_cljs_ns_STAR__temp_val__41345 = ns;
var _STAR_compiler_STAR__temp_val__41346 = st;
var resolve_symbol_temp_val__41347 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__41348 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__41343;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__41344;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__41345;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__41346;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__41347;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__41348;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__41342;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__41341;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__41340;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__41339;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__41338;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__41337;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__41352 = arguments.length;
switch (G__41352) {
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
var _STAR_alias_map_STAR__orig_val__41353 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__41354 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__41355 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__41356 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__41357 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__41358 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__41359 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__41360 = ns;
var _STAR_cljs_ns_STAR__temp_val__41361 = ns;
var _STAR_compiler_STAR__temp_val__41362 = st;
var resolve_symbol_temp_val__41363 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__41364 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__41359;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__41360;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__41361;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__41362;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__41363;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__41364;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__41358;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__41357;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__41356;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__41355;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__41354;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__41353;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__41369 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__41369,(0),null);
var rest_s = cljs.core.nth.call(null,vec__41369,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__41372 = rest_s;
var G__41373 = res;
s__$1 = G__41372;
res = G__41373;
continue;
} else {
var G__41374 = rest_s;
var G__41375 = cljs.core.conj.call(null,res,exp);
s__$1 = G__41374;
res = G__41375;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__41376){
var map__41377 = p__41376;
var map__41377__$1 = (((((!((map__41377 == null))))?(((((map__41377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41377):map__41377);
var result_element = cljs.core.get.call(null,map__41377__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__41377__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
return (function (state_41436){
var state_val_41437 = (state_41436[(1)]);
if((state_val_41437 === (7))){
var inst_41432 = (state_41436[(2)]);
var state_41436__$1 = state_41436;
var statearr_41438_41459 = state_41436__$1;
(statearr_41438_41459[(2)] = inst_41432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (1))){
var state_41436__$1 = state_41436;
var statearr_41439_41460 = state_41436__$1;
(statearr_41439_41460[(2)] = null);

(statearr_41439_41460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41436,(3),Object,null,(2));
var inst_41387 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_41436__$1 = state_41436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41436__$1,(5),inst_41387);
} else {
if((state_val_41437 === (13))){
var inst_41409 = (state_41436[(7)]);
var inst_41417 = (state_41436[(8)]);
var inst_41422 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41423 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_41424 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_41409,inst_41422,inst_41423);
var inst_41402 = inst_41424;
var inst_41403 = inst_41417;
var state_41436__$1 = (function (){var statearr_41440 = state_41436;
(statearr_41440[(9)] = inst_41402);

(statearr_41440[(10)] = inst_41403);

return statearr_41440;
})();
var statearr_41441_41461 = state_41436__$1;
(statearr_41441_41461[(2)] = null);

(statearr_41441_41461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (6))){
var inst_41408 = (state_41436[(11)]);
var inst_41402 = (state_41436[(9)]);
var inst_41408__$1 = cljs.core.nth.call(null,inst_41402,(0),null);
var inst_41409 = cljs.core.nth.call(null,inst_41402,(1),null);
var inst_41410 = cljs.core.empty_QMARK_.call(null,inst_41408__$1);
var inst_41411 = (!(inst_41410));
var state_41436__$1 = (function (){var statearr_41442 = state_41436;
(statearr_41442[(11)] = inst_41408__$1);

(statearr_41442[(7)] = inst_41409);

return statearr_41442;
})();
if(inst_41411){
var statearr_41443_41462 = state_41436__$1;
(statearr_41443_41462[(1)] = (8));

} else {
var statearr_41444_41463 = state_41436__$1;
(statearr_41444_41463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (3))){
var inst_41379 = (state_41436[(2)]);
var inst_41380 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_41381 = [inst_41379];
var inst_41382 = cljs.core.PersistentHashMap.fromArrays(inst_41380,inst_41381);
var inst_41383 = klipse_clj.lang.clojure.populate_err.call(null,inst_41382,opts);
var state_41436__$1 = state_41436;
var statearr_41445_41464 = state_41436__$1;
(statearr_41445_41464[(2)] = inst_41383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (12))){
var inst_41417 = (state_41436[(8)]);
var inst_41420 = klipse_clj.lang.clojure.populate_err.call(null,inst_41417,opts);
var state_41436__$1 = state_41436;
var statearr_41446_41465 = state_41436__$1;
(statearr_41446_41465[(2)] = inst_41420);

(statearr_41446_41465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (2))){
var inst_41434 = (state_41436[(2)]);
var state_41436__$1 = state_41436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41436__$1,inst_41434);
} else {
if((state_val_41437 === (11))){
var inst_41417 = (state_41436[(8)]);
var inst_41417__$1 = (state_41436[(2)]);
var inst_41418 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41417__$1);
var state_41436__$1 = (function (){var statearr_41447 = state_41436;
(statearr_41447[(8)] = inst_41417__$1);

return statearr_41447;
})();
if(cljs.core.truth_(inst_41418)){
var statearr_41448_41466 = state_41436__$1;
(statearr_41448_41466[(1)] = (12));

} else {
var statearr_41449_41467 = state_41436__$1;
(statearr_41449_41467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (9))){
var inst_41403 = (state_41436[(10)]);
var state_41436__$1 = state_41436;
var statearr_41450_41468 = state_41436__$1;
(statearr_41450_41468[(2)] = inst_41403);

(statearr_41450_41468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (5))){
var inst_41389 = (state_41436[(2)]);
var inst_41397 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41398 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_41399 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_41397,inst_41398);
var inst_41400 = cljs.core.nth.call(null,inst_41399,(0),null);
var inst_41401 = cljs.core.nth.call(null,inst_41399,(1),null);
var inst_41402 = inst_41399;
var inst_41403 = null;
var state_41436__$1 = (function (){var statearr_41451 = state_41436;
(statearr_41451[(12)] = inst_41389);

(statearr_41451[(9)] = inst_41402);

(statearr_41451[(13)] = inst_41400);

(statearr_41451[(14)] = inst_41401);

(statearr_41451[(10)] = inst_41403);

return statearr_41451;
})();
var statearr_41452_41469 = state_41436__$1;
(statearr_41452_41469[(2)] = null);

(statearr_41452_41469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (14))){
var inst_41427 = (state_41436[(2)]);
var state_41436__$1 = state_41436;
var statearr_41453_41470 = state_41436__$1;
(statearr_41453_41470[(2)] = inst_41427);

(statearr_41453_41470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (10))){
var inst_41430 = (state_41436[(2)]);
var state_41436__$1 = state_41436;
var statearr_41454_41471 = state_41436__$1;
(statearr_41454_41471[(2)] = inst_41430);

(statearr_41454_41471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41437 === (8))){
var inst_41408 = (state_41436[(11)]);
var inst_41413 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_41414 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_41413,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_41415 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_41408,inst_41414);
var state_41436__$1 = state_41436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41436__$1,(11),inst_41415);
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
var statearr_41455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41455[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__);

(statearr_41455[(1)] = (1));

return statearr_41455;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1 = (function (state_41436){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41456){if((e41456 instanceof Object)){
var ex__24875__auto__ = e41456;
var statearr_41457_41472 = state_41436;
(statearr_41457_41472[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41473 = state_41436;
state_41436 = G__41473;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__ = function(state_41436){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1.call(this,state_41436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41458 = f__24895__auto__.call(null);
(statearr_41458[(6)] = c__24894__auto__);

return statearr_41458;
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
return (function (state_41531){
var state_val_41532 = (state_41531[(1)]);
if((state_val_41532 === (7))){
var inst_41499 = (state_41531[(7)]);
var inst_41504 = klipse_clj.repl.create_state_compile.call(null);
var inst_41505 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_41504,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_41506 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_41499,inst_41505);
var state_41531__$1 = state_41531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41531__$1,(10),inst_41506);
} else {
if((state_val_41532 === (1))){
var state_41531__$1 = state_41531;
var statearr_41533_41554 = state_41531__$1;
(statearr_41533_41554[(2)] = null);

(statearr_41533_41554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41531,(3),Object,null,(2));
var inst_41488 = klipse_clj.repl.create_state_compile.call(null);
var inst_41489 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_41490 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_41488,inst_41489);
var inst_41491 = cljs.core.nth.call(null,inst_41490,(0),null);
var inst_41492 = cljs.core.nth.call(null,inst_41490,(1),null);
var inst_41493 = inst_41490;
var inst_41494 = "";
var state_41531__$1 = (function (){var statearr_41534 = state_41531;
(statearr_41534[(8)] = inst_41491);

(statearr_41534[(9)] = inst_41494);

(statearr_41534[(10)] = inst_41493);

(statearr_41534[(11)] = inst_41492);

return statearr_41534;
})();
var statearr_41535_41555 = state_41531__$1;
(statearr_41535_41555[(2)] = null);

(statearr_41535_41555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (13))){
var inst_41519 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
var statearr_41536_41556 = state_41531__$1;
(statearr_41536_41556[(2)] = inst_41519);

(statearr_41536_41556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (6))){
var inst_41527 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
var statearr_41537_41557 = state_41531__$1;
(statearr_41537_41557[(2)] = inst_41527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (3))){
var inst_41474 = (state_41531[(2)]);
var inst_41475 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_41476 = [inst_41474];
var inst_41477 = cljs.core.PersistentHashMap.fromArrays(inst_41475,inst_41476);
var state_41531__$1 = state_41531;
var statearr_41538_41558 = state_41531__$1;
(statearr_41538_41558[(2)] = inst_41477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (12))){
var inst_41508 = (state_41531[(12)]);
var inst_41494 = (state_41531[(9)]);
var inst_41500 = (state_41531[(13)]);
var inst_41512 = klipse_clj.repl.create_state_compile.call(null);
var inst_41513 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_41514 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_41500,inst_41512,inst_41513);
var inst_41515 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_41508);
var inst_41516 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41494),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41515)].join('');
var inst_41493 = inst_41514;
var inst_41494__$1 = inst_41516;
var state_41531__$1 = (function (){var statearr_41539 = state_41531;
(statearr_41539[(9)] = inst_41494__$1);

(statearr_41539[(10)] = inst_41493);

return statearr_41539;
})();
var statearr_41540_41559 = state_41531__$1;
(statearr_41540_41559[(2)] = null);

(statearr_41540_41559[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (2))){
var inst_41529 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41531__$1,inst_41529);
} else {
if((state_val_41532 === (11))){
var inst_41508 = (state_41531[(12)]);
var state_41531__$1 = state_41531;
var statearr_41541_41560 = state_41531__$1;
(statearr_41541_41560[(2)] = inst_41508);

(statearr_41541_41560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (9))){
var inst_41525 = (state_41531[(2)]);
var state_41531__$1 = state_41531;
var statearr_41542_41561 = state_41531__$1;
(statearr_41542_41561[(2)] = inst_41525);

(statearr_41542_41561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (5))){
var inst_41499 = (state_41531[(7)]);
var inst_41493 = (state_41531[(10)]);
var inst_41499__$1 = cljs.core.nth.call(null,inst_41493,(0),null);
var inst_41500 = cljs.core.nth.call(null,inst_41493,(1),null);
var inst_41501 = cljs.core.empty_QMARK_.call(null,inst_41499__$1);
var inst_41502 = (!(inst_41501));
var state_41531__$1 = (function (){var statearr_41543 = state_41531;
(statearr_41543[(7)] = inst_41499__$1);

(statearr_41543[(13)] = inst_41500);

return statearr_41543;
})();
if(inst_41502){
var statearr_41544_41562 = state_41531__$1;
(statearr_41544_41562[(1)] = (7));

} else {
var statearr_41545_41563 = state_41531__$1;
(statearr_41545_41563[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (10))){
var inst_41508 = (state_41531[(12)]);
var inst_41508__$1 = (state_41531[(2)]);
var inst_41509 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_41508__$1);
var state_41531__$1 = (function (){var statearr_41546 = state_41531;
(statearr_41546[(12)] = inst_41508__$1);

return statearr_41546;
})();
if(cljs.core.truth_(inst_41509)){
var statearr_41547_41564 = state_41531__$1;
(statearr_41547_41564[(1)] = (11));

} else {
var statearr_41548_41565 = state_41531__$1;
(statearr_41548_41565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41532 === (8))){
var inst_41494 = (state_41531[(9)]);
var inst_41521 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_41522 = [inst_41494];
var inst_41523 = cljs.core.PersistentHashMap.fromArrays(inst_41521,inst_41522);
var state_41531__$1 = state_41531;
var statearr_41549_41566 = state_41531__$1;
(statearr_41549_41566[(2)] = inst_41523);

(statearr_41549_41566[(1)] = (9));


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
var statearr_41550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41550[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__);

(statearr_41550[(1)] = (1));

return statearr_41550;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1 = (function (state_41531){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41551){if((e41551 instanceof Object)){
var ex__24875__auto__ = e41551;
var statearr_41552_41567 = state_41531;
(statearr_41552_41567[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41568 = state_41531;
state_41531 = G__41568;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__ = function(state_41531){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1.call(this,state_41531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41553 = f__24895__auto__.call(null);
(statearr_41553[(6)] = c__24894__auto__);

return statearr_41553;
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
return (function (state_41574){
var state_val_41575 = (state_41574[(1)]);
if((state_val_41575 === (1))){
var inst_41569 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_41574__$1 = state_41574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41574__$1,(2),inst_41569);
} else {
if((state_val_41575 === (2))){
var inst_41571 = (state_41574[(2)]);
var inst_41572 = klipse_clj.lang.clojure.result_as_str.call(null,inst_41571,opts);
var state_41574__$1 = state_41574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41574__$1,inst_41572);
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
var statearr_41576 = [null,null,null,null,null,null,null];
(statearr_41576[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__);

(statearr_41576[(1)] = (1));

return statearr_41576;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1 = (function (state_41574){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41577){if((e41577 instanceof Object)){
var ex__24875__auto__ = e41577;
var statearr_41578_41580 = state_41574;
(statearr_41578_41580[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41581 = state_41574;
state_41574 = G__41581;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__ = function(state_41574){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1.call(this,state_41574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41579 = f__24895__auto__.call(null);
(statearr_41579[(6)] = c__24894__auto__);

return statearr_41579;
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
var G__41583 = arguments.length;
switch (G__41583) {
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
return (function (state_41589){
var state_val_41590 = (state_41589[(1)]);
if((state_val_41590 === (1))){
var inst_41584 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_41589__$1 = state_41589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41589__$1,(2),inst_41584);
} else {
if((state_val_41590 === (2))){
var inst_41586 = (state_41589[(2)]);
var inst_41587 = klipse_clj.lang.clojure.read_result.call(null,inst_41586);
var state_41589__$1 = state_41589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41589__$1,inst_41587);
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
var statearr_41591 = [null,null,null,null,null,null,null];
(statearr_41591[(0)] = klipse_clj$lang$clojure$state_machine__24872__auto__);

(statearr_41591[(1)] = (1));

return statearr_41591;
});
var klipse_clj$lang$clojure$state_machine__24872__auto____1 = (function (state_41589){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41592){if((e41592 instanceof Object)){
var ex__24875__auto__ = e41592;
var statearr_41593_41596 = state_41589;
(statearr_41593_41596[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41597 = state_41589;
state_41589 = G__41597;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24872__auto__ = function(state_41589){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24872__auto____1.call(this,state_41589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24872__auto____0;
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41594 = f__24895__auto__.call(null);
(statearr_41594[(6)] = c__24894__auto__);

return statearr_41594;
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
return (function (state_41604){
var state_val_41605 = (state_41604[(1)]);
if((state_val_41605 === (1))){
var inst_41598 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_41604__$1 = state_41604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41604__$1,(2),inst_41598);
} else {
if((state_val_41605 === (2))){
var inst_41600 = (state_41604[(2)]);
var inst_41601 = cljs.core.clj__GT_js.call(null,inst_41600);
var inst_41602 = cb.call(null,inst_41601);
var state_41604__$1 = state_41604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41604__$1,inst_41602);
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
var statearr_41606 = [null,null,null,null,null,null,null];
(statearr_41606[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__);

(statearr_41606[(1)] = (1));

return statearr_41606;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1 = (function (state_41604){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41607){if((e41607 instanceof Object)){
var ex__24875__auto__ = e41607;
var statearr_41608_41610 = state_41604;
(statearr_41608_41610[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41611 = state_41604;
state_41604 = G__41611;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__ = function(state_41604){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1.call(this,state_41604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41609 = f__24895__auto__.call(null);
(statearr_41609[(6)] = c__24894__auto__);

return statearr_41609;
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
var G__41613 = arguments.length;
switch (G__41613) {
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
return (function (state_41619){
var state_val_41620 = (state_41619[(1)]);
if((state_val_41620 === (1))){
var inst_41614 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41619__$1,(2),inst_41614);
} else {
if((state_val_41620 === (2))){
var inst_41616 = (state_41619[(2)]);
var inst_41617 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_41616);
var state_41619__$1 = state_41619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41619__$1,inst_41617);
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
var statearr_41621 = [null,null,null,null,null,null,null];
(statearr_41621[(0)] = klipse_clj$lang$clojure$state_machine__24872__auto__);

(statearr_41621[(1)] = (1));

return statearr_41621;
});
var klipse_clj$lang$clojure$state_machine__24872__auto____1 = (function (state_41619){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41622){if((e41622 instanceof Object)){
var ex__24875__auto__ = e41622;
var statearr_41623_41626 = state_41619;
(statearr_41623_41626[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41627 = state_41619;
state_41619 = G__41627;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__24872__auto__ = function(state_41619){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__24872__auto____1.call(this,state_41619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__24872__auto____0;
klipse_clj$lang$clojure$state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__24872__auto____1;
return klipse_clj$lang$clojure$state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41624 = f__24895__auto__.call(null);
(statearr_41624[(6)] = c__24894__auto__);

return statearr_41624;
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
return (function (state_41633){
var state_val_41634 = (state_41633[(1)]);
if((state_val_41634 === (1))){
var inst_41628 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_41633__$1 = state_41633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41633__$1,(2),inst_41628);
} else {
if((state_val_41634 === (2))){
var inst_41630 = (state_41633[(2)]);
var inst_41631 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_41630);
var state_41633__$1 = state_41633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41633__$1,inst_41631);
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
var statearr_41635 = [null,null,null,null,null,null,null];
(statearr_41635[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__);

(statearr_41635[(1)] = (1));

return statearr_41635;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1 = (function (state_41633){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41636){if((e41636 instanceof Object)){
var ex__24875__auto__ = e41636;
var statearr_41637_41639 = state_41633;
(statearr_41637_41639[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41640 = state_41633;
state_41633 = G__41640;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__ = function(state_41633){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1.call(this,state_41633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41638 = f__24895__auto__.call(null);
(statearr_41638[(6)] = c__24894__auto__);

return statearr_41638;
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
return (function (state_41647){
var state_val_41648 = (state_41647[(1)]);
if((state_val_41648 === (1))){
var inst_41641 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41647__$1,(2),inst_41641);
} else {
if((state_val_41648 === (2))){
var inst_41643 = (state_41647[(2)]);
var inst_41644 = cljs.core.second.call(null,inst_41643);
var inst_41645 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41644);
var state_41647__$1 = state_41647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41647__$1,inst_41645);
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
var statearr_41649 = [null,null,null,null,null,null,null];
(statearr_41649[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__);

(statearr_41649[(1)] = (1));

return statearr_41649;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1 = (function (state_41647){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41650){if((e41650 instanceof Object)){
var ex__24875__auto__ = e41650;
var statearr_41651_41653 = state_41647;
(statearr_41651_41653[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41654 = state_41647;
state_41647 = G__41654;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__ = function(state_41647){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1.call(this,state_41647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_41652 = f__24895__auto__.call(null);
(statearr_41652[(6)] = c__24894__auto__);

return statearr_41652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__41656){
var map__41657 = p__41656;
var map__41657__$1 = (((((!((map__41657 == null))))?(((((map__41657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41657):map__41657);
var opts = map__41657__$1;
var container_id = cljs.core.get.call(null,map__41657__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__41657__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__41657__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__24894__auto___41709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_41691){
var state_val_41692 = (state_41691[(1)]);
if((state_val_41692 === (7))){
var inst_41667 = (state_41691[(2)]);
var inst_41672 = (function (){var _STAR_print_newline_STAR__orig_val__41668 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41669 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41670 = true;
return ((function (_STAR_print_newline_STAR__orig_val__41668,_STAR_print_fn_STAR__orig_val__41669,_STAR_print_newline_STAR__temp_val__41670,inst_41667,state_val_41692,c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__41655_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__41655_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__41668,_STAR_print_fn_STAR__orig_val__41669,_STAR_print_newline_STAR__temp_val__41670,inst_41667,state_val_41692,c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_41673 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_41674 = cljs.core._STAR_print_fn_STAR_ = inst_41672;
var state_41691__$1 = (function (){var statearr_41693 = state_41691;
(statearr_41693[(7)] = inst_41674);

(statearr_41693[(8)] = inst_41667);

(statearr_41693[(9)] = inst_41673);

return statearr_41693;
})();
var statearr_41694_41710 = state_41691__$1;
(statearr_41694_41710[(2)] = null);

(statearr_41694_41710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (1))){
var inst_41659 = clojure.string.blank_QMARK_.call(null,exp);
var state_41691__$1 = state_41691;
if(inst_41659){
var statearr_41695_41711 = state_41691__$1;
(statearr_41695_41711[(1)] = (2));

} else {
var statearr_41696_41712 = state_41691__$1;
(statearr_41696_41712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (4))){
var inst_41689 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41691__$1,inst_41689);
} else {
if((state_val_41692 === (6))){
var state_41691__$1 = state_41691;
var statearr_41697_41713 = state_41691__$1;
(statearr_41697_41713[(2)] = null);

(statearr_41697_41713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (3))){
var state_41691__$1 = state_41691;
if(cljs.core.truth_(setup_container_fn)){
var statearr_41698_41714 = state_41691__$1;
(statearr_41698_41714[(1)] = (5));

} else {
var statearr_41699_41715 = state_41691__$1;
(statearr_41699_41715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (2))){
var inst_41661 = cljs.core.async.put_BANG_.call(null,c,"");
var state_41691__$1 = state_41691;
var statearr_41700_41716 = state_41691__$1;
(statearr_41700_41716[(2)] = inst_41661);

(statearr_41700_41716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (11))){
var inst_41683 = (state_41691[(2)]);
var inst_41684 = cljs.core.second.call(null,inst_41683);
var inst_41685 = cljs.core.async.put_BANG_.call(null,c,inst_41684);
var state_41691__$1 = state_41691;
var statearr_41701_41717 = state_41691__$1;
(statearr_41701_41717[(2)] = inst_41685);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41691__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (9))){
var inst_41675 = (state_41691[(2)]);
var inst_41676 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_41677 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_41691__$1 = (function (){var statearr_41702 = state_41691;
(statearr_41702[(10)] = inst_41676);

(statearr_41702[(11)] = inst_41677);

(statearr_41702[(12)] = inst_41675);

return statearr_41702;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41691__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (5))){
var inst_41664 = setup_container_fn.call(null,container_id);
var state_41691__$1 = state_41691;
var statearr_41703_41718 = state_41691__$1;
(statearr_41703_41718[(2)] = inst_41664);

(statearr_41703_41718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41691,null,null,(9),(8));
var inst_41681 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(11),inst_41681);
} else {
if((state_val_41692 === (8))){
var inst_41687 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41704_41719 = state_41691__$1;
(statearr_41704_41719[(2)] = inst_41687);

(statearr_41704_41719[(1)] = (4));


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
});})(c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__24871__auto__,c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0 = (function (){
var statearr_41705 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41705[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__);

(statearr_41705[(1)] = (1));

return statearr_41705;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1 = (function (state_41691){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_41691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e41706){if((e41706 instanceof Object)){
var ex__24875__auto__ = e41706;
var statearr_41707_41720 = state_41691;
(statearr_41707_41720[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41721 = state_41691;
state_41691 = G__41721;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__ = function(state_41691){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1.call(this,state_41691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__24896__auto__ = (function (){var statearr_41708 = f__24895__auto__.call(null);
(statearr_41708[(6)] = c__24894__auto___41709);

return statearr_41708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto___41709,c,map__41657,map__41657__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
