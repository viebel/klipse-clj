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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35232){
var state_val_35233 = (state_35232[(1)]);
if((state_val_35233 === (7))){
var inst_35228 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
var statearr_35234_35260 = state_35232__$1;
(statearr_35234_35260[(2)] = inst_35228);

(statearr_35234_35260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (1))){
var inst_35173 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35232__$1,(2),inst_35173);
} else {
if((state_val_35233 === (4))){
var inst_35230 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35232__$1,inst_35230);
} else {
if((state_val_35233 === (15))){
var inst_35203 = (state_35232[(7)]);
var inst_35219 = (state_35232[(2)]);
var inst_35220 = cljs.core.next.call(null,inst_35203);
var inst_35184 = inst_35220;
var inst_35185 = null;
var inst_35186 = (0);
var inst_35187 = (0);
var state_35232__$1 = (function (){var statearr_35235 = state_35232;
(statearr_35235[(8)] = inst_35187);

(statearr_35235[(9)] = inst_35219);

(statearr_35235[(10)] = inst_35186);

(statearr_35235[(11)] = inst_35185);

(statearr_35235[(12)] = inst_35184);

return statearr_35235;
})();
var statearr_35236_35261 = state_35232__$1;
(statearr_35236_35261[(2)] = null);

(statearr_35236_35261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (13))){
var inst_35203 = (state_35232[(7)]);
var inst_35212 = cljs.core.first.call(null,inst_35203);
var inst_35213 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_35214 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35215 = [inst_35214,klipse_clj.repl.current_ns_eval];
var inst_35216 = cljs.core.PersistentHashMap.fromArrays(inst_35213,inst_35215);
var inst_35217 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35212,inst_35216);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35232__$1,(15),inst_35217);
} else {
if((state_val_35233 === (6))){
var inst_35203 = (state_35232[(7)]);
var inst_35184 = (state_35232[(12)]);
var inst_35203__$1 = cljs.core.seq.call(null,inst_35184);
var state_35232__$1 = (function (){var statearr_35237 = state_35232;
(statearr_35237[(7)] = inst_35203__$1);

return statearr_35237;
})();
if(inst_35203__$1){
var statearr_35238_35262 = state_35232__$1;
(statearr_35238_35262[(1)] = (9));

} else {
var statearr_35239_35263 = state_35232__$1;
(statearr_35239_35263[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (3))){
var inst_35187 = (state_35232[(8)]);
var inst_35186 = (state_35232[(10)]);
var inst_35189 = (inst_35187 < inst_35186);
var inst_35190 = inst_35189;
var state_35232__$1 = state_35232;
if(cljs.core.truth_(inst_35190)){
var statearr_35240_35264 = state_35232__$1;
(statearr_35240_35264[(1)] = (5));

} else {
var statearr_35241_35265 = state_35232__$1;
(statearr_35241_35265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (12))){
var inst_35203 = (state_35232[(7)]);
var inst_35207 = cljs.core.chunk_first.call(null,inst_35203);
var inst_35208 = cljs.core.chunk_rest.call(null,inst_35203);
var inst_35209 = cljs.core.count.call(null,inst_35207);
var inst_35184 = inst_35208;
var inst_35185 = inst_35207;
var inst_35186 = inst_35209;
var inst_35187 = (0);
var state_35232__$1 = (function (){var statearr_35242 = state_35232;
(statearr_35242[(8)] = inst_35187);

(statearr_35242[(10)] = inst_35186);

(statearr_35242[(11)] = inst_35185);

(statearr_35242[(12)] = inst_35184);

return statearr_35242;
})();
var statearr_35243_35266 = state_35232__$1;
(statearr_35243_35266[(2)] = null);

(statearr_35243_35266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (2))){
var inst_35175 = (state_35232[(2)]);
var inst_35180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35181 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg]])"];
var inst_35182 = (new cljs.core.PersistentVector(null,2,(5),inst_35180,inst_35181,null));
var inst_35183 = cljs.core.seq.call(null,inst_35182);
var inst_35184 = inst_35183;
var inst_35185 = null;
var inst_35186 = (0);
var inst_35187 = (0);
var state_35232__$1 = (function (){var statearr_35244 = state_35232;
(statearr_35244[(8)] = inst_35187);

(statearr_35244[(10)] = inst_35186);

(statearr_35244[(11)] = inst_35185);

(statearr_35244[(13)] = inst_35175);

(statearr_35244[(12)] = inst_35184);

return statearr_35244;
})();
var statearr_35245_35267 = state_35232__$1;
(statearr_35245_35267[(2)] = null);

(statearr_35245_35267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (11))){
var inst_35226 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
var statearr_35246_35268 = state_35232__$1;
(statearr_35246_35268[(2)] = inst_35226);

(statearr_35246_35268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (9))){
var inst_35203 = (state_35232[(7)]);
var inst_35205 = cljs.core.chunked_seq_QMARK_.call(null,inst_35203);
var state_35232__$1 = state_35232;
if(inst_35205){
var statearr_35247_35269 = state_35232__$1;
(statearr_35247_35269[(1)] = (12));

} else {
var statearr_35248_35270 = state_35232__$1;
(statearr_35248_35270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (5))){
var inst_35187 = (state_35232[(8)]);
var inst_35185 = (state_35232[(11)]);
var inst_35192 = cljs.core._nth.call(null,inst_35185,inst_35187);
var inst_35193 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_35194 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35195 = [inst_35194,klipse_clj.repl.current_ns_eval];
var inst_35196 = cljs.core.PersistentHashMap.fromArrays(inst_35193,inst_35195);
var inst_35197 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35192,inst_35196);
var state_35232__$1 = state_35232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35232__$1,(8),inst_35197);
} else {
if((state_val_35233 === (14))){
var inst_35223 = (state_35232[(2)]);
var state_35232__$1 = state_35232;
var statearr_35252_35271 = state_35232__$1;
(statearr_35252_35271[(2)] = inst_35223);

(statearr_35252_35271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (10))){
var state_35232__$1 = state_35232;
var statearr_35253_35272 = state_35232__$1;
(statearr_35253_35272[(2)] = null);

(statearr_35253_35272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35233 === (8))){
var inst_35187 = (state_35232[(8)]);
var inst_35186 = (state_35232[(10)]);
var inst_35185 = (state_35232[(11)]);
var inst_35184 = (state_35232[(12)]);
var inst_35199 = (state_35232[(2)]);
var inst_35200 = (inst_35187 + (1));
var tmp35249 = inst_35186;
var tmp35250 = inst_35185;
var tmp35251 = inst_35184;
var inst_35184__$1 = tmp35251;
var inst_35185__$1 = tmp35250;
var inst_35186__$1 = tmp35249;
var inst_35187__$1 = inst_35200;
var state_35232__$1 = (function (){var statearr_35254 = state_35232;
(statearr_35254[(8)] = inst_35187__$1);

(statearr_35254[(10)] = inst_35186__$1);

(statearr_35254[(14)] = inst_35199);

(statearr_35254[(11)] = inst_35185__$1);

(statearr_35254[(12)] = inst_35184__$1);

return statearr_35254;
})();
var statearr_35255_35273 = state_35232__$1;
(statearr_35255_35273[(2)] = null);

(statearr_35255_35273[(1)] = (3));


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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0 = (function (){
var statearr_35256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35256[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__);

(statearr_35256[(1)] = (1));

return statearr_35256;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1 = (function (state_35232){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35257){if((e35257 instanceof Object)){
var ex__14974__auto__ = e35257;
var statearr_35258_35274 = state_35232;
(statearr_35258_35274[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35275 = state_35232;
state_35232 = G__35275;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__ = function(state_35232){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1.call(this,state_35232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35259 = f__14994__auto__.call(null);
(statearr_35259[(6)] = c__14993__auto__);

return statearr_35259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35278){
var state_val_35279 = (state_35278[(1)]);
if((state_val_35279 === (1))){
var inst_35276 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_35278__$1 = state_35278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35278__$1,inst_35276);
} else {
return null;
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0 = (function (){
var statearr_35280 = [null,null,null,null,null,null,null];
(statearr_35280[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__);

(statearr_35280[(1)] = (1));

return statearr_35280;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1 = (function (state_35278){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35281){if((e35281 instanceof Object)){
var ex__14974__auto__ = e35281;
var statearr_35282_35284 = state_35278;
(statearr_35282_35284[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35285 = state_35278;
state_35278 = G__35285;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__ = function(state_35278){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1.call(this,state_35278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35283 = f__14994__auto__.call(null);
(statearr_35283[(6)] = c__14993__auto__);

return statearr_35283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
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
}catch (e35286){if((e35286 instanceof Object)){
var e = e35286;

return e;
} else {
throw e35286;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__35287){
var map__35288 = p__35287;
var map__35288__$1 = (((((!((map__35288 == null))))?(((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35288):map__35288);
var print_length = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__35291 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__35292 = print_length;
cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35292;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35293_35297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35294_35298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35295_35299 = true;
var _STAR_print_fn_STAR__temp_val__35296_35300 = ((function (_STAR_print_newline_STAR__orig_val__35293_35297,_STAR_print_fn_STAR__orig_val__35294_35298,_STAR_print_newline_STAR__temp_val__35295_35299,sb__4532__auto__,_STAR_print_length_STAR__orig_val__35291,_STAR_print_length_STAR__temp_val__35292,map__35288,map__35288__$1,print_length,beautify_strings){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__35293_35297,_STAR_print_fn_STAR__orig_val__35294_35298,_STAR_print_newline_STAR__temp_val__35295_35299,sb__4532__auto__,_STAR_print_length_STAR__orig_val__35291,_STAR_print_length_STAR__temp_val__35292,map__35288,map__35288__$1,print_length,beautify_strings))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35295_35299;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35296_35300;

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__3991__auto__ = typeof value === 'string';
if(and__3991__auto__){
return beautify_strings;
} else {
return and__3991__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35294_35298;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35293_35297;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
})()], null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35291;
}}catch (e35290){if((e35290 instanceof Object)){
var e = e35290;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e35290;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__35301,verbose_QMARK_,current_ns){
var map__35302 = p__35301;
var map__35302__$1 = (((((!((map__35302 == null))))?(((((map__35302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35302):map__35302);
var ns = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__35304,opts){
var map__35305 = p__35304;
var map__35305__$1 = (((((!((map__35305 == null))))?(((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var args = map__35305__$1;
var ns = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__35307){
var map__35308 = p__35307;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var form = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__35310){
var map__35311 = p__35310;
var map__35311__$1 = (((((!((map__35311 == null))))?(((((map__35311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35311):map__35311);
var foo = map__35311__$1;
var value = cljs.core.get.call(null,map__35311__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__35311__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__35313){
var map__35314 = p__35313;
var map__35314__$1 = (((((!((map__35314 == null))))?(((((map__35314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35314):map__35314);
var args = map__35314__$1;
var file = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__35314__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__35316){
var map__35317 = p__35316;
var map__35317__$1 = (((((!((map__35317 == null))))?(((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var source = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__35319){
var map__35320 = p__35319;
var map__35320__$1 = (((((!((map__35320 == null))))?(((((map__35320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35320):map__35320);
var static_fns = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,the_emits,map__35320,map__35320__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,the_emits,map__35320,map__35320__$1,static_fns,external_libs,max_eval_duration,compile_display_guard,verbose_QMARK_,st,ns))
);
}finally {}
return c;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__35322){
var map__35323 = p__35322;
var map__35323__$1 = (((((!((map__35323 == null))))?(((((map__35323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35323):map__35323);
var static_fns = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__4090__auto__ = max_eval_duration;
var y__4091__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__4090__auto__ > y__4091__auto__) ? x__4090__auto__ : y__4091__auto__);
})();
try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env._STAR_compiler_STAR_ = st,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),((function (c,max_eval_duration__$1,map__35323,map__35323__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns){
return (function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
});})(c,max_eval_duration__$1,map__35323,map__35323__$1,static_fns,external_libs,max_eval_duration,verbose_QMARK_,st,ns))
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
var G__35325 = cljs.core.conj.call(null,res,ch);
res = G__35325;
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
var _STAR_alias_map_STAR__orig_val__35326 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35327 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35328 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35329 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35330 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35331 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35332 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__35333 = ns;
var _STAR_cljs_ns_STAR__temp_val__35334 = ns;
var _STAR_compiler_STAR__temp_val__35335 = st;
var resolve_symbol_temp_val__35336 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35337 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35332;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35333;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35334;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35335;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35336;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35337;

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
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35331;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35330;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35329;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35328;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35327;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35326;
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
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
var _STAR_alias_map_STAR__orig_val__35342 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__35343 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__35344 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__35345 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__35346 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__35347 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__35348 = klipse_clj.repl.current_alias_map.call(null,ns);
var _STAR_ns_STAR__temp_val__35349 = ns;
var _STAR_cljs_ns_STAR__temp_val__35350 = ns;
var _STAR_compiler_STAR__temp_val__35351 = st;
var resolve_symbol_temp_val__35352 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__35353 = klipse_clj.lang.clojure.data_readers.call(null);
cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__35348;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__35349;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__35350;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__35351;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__35352;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__35353;

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__35347;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__35346;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__35345;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__35344;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__35343;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__35342;
}});

klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3;

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__35358 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__35358,(0),null);
var rest_s = cljs.core.nth.call(null,vec__35358,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__35361 = rest_s;
var G__35362 = res;
s__$1 = G__35361;
res = G__35362;
continue;
} else {
var G__35363 = rest_s;
var G__35364 = cljs.core.conj.call(null,res,exp);
s__$1 = G__35363;
res = G__35364;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__35365){
var map__35366 = p__35365;
var map__35366__$1 = (((((!((map__35366 == null))))?(((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var result_element = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__3991__auto__ = container;
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__3991__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35425){
var state_val_35426 = (state_35425[(1)]);
if((state_val_35426 === (7))){
var inst_35421 = (state_35425[(2)]);
var state_35425__$1 = state_35425;
var statearr_35427_35448 = state_35425__$1;
(statearr_35427_35448[(2)] = inst_35421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (1))){
var state_35425__$1 = state_35425;
var statearr_35428_35449 = state_35425__$1;
(statearr_35428_35449[(2)] = null);

(statearr_35428_35449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35425,(3),Object,null,(2));
var inst_35376 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_35425__$1 = state_35425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35425__$1,(5),inst_35376);
} else {
if((state_val_35426 === (13))){
var inst_35398 = (state_35425[(7)]);
var inst_35406 = (state_35425[(8)]);
var inst_35411 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35412 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35413 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_35398,inst_35411,inst_35412);
var inst_35391 = inst_35413;
var inst_35392 = inst_35406;
var state_35425__$1 = (function (){var statearr_35429 = state_35425;
(statearr_35429[(9)] = inst_35391);

(statearr_35429[(10)] = inst_35392);

return statearr_35429;
})();
var statearr_35430_35450 = state_35425__$1;
(statearr_35430_35450[(2)] = null);

(statearr_35430_35450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (6))){
var inst_35391 = (state_35425[(9)]);
var inst_35397 = (state_35425[(11)]);
var inst_35397__$1 = cljs.core.nth.call(null,inst_35391,(0),null);
var inst_35398 = cljs.core.nth.call(null,inst_35391,(1),null);
var inst_35399 = cljs.core.empty_QMARK_.call(null,inst_35397__$1);
var inst_35400 = (!(inst_35399));
var state_35425__$1 = (function (){var statearr_35431 = state_35425;
(statearr_35431[(7)] = inst_35398);

(statearr_35431[(11)] = inst_35397__$1);

return statearr_35431;
})();
if(inst_35400){
var statearr_35432_35451 = state_35425__$1;
(statearr_35432_35451[(1)] = (8));

} else {
var statearr_35433_35452 = state_35425__$1;
(statearr_35433_35452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (3))){
var inst_35368 = (state_35425[(2)]);
var inst_35369 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35370 = [inst_35368];
var inst_35371 = cljs.core.PersistentHashMap.fromArrays(inst_35369,inst_35370);
var inst_35372 = klipse_clj.lang.clojure.populate_err.call(null,inst_35371,opts);
var state_35425__$1 = state_35425;
var statearr_35434_35453 = state_35425__$1;
(statearr_35434_35453[(2)] = inst_35372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (12))){
var inst_35406 = (state_35425[(8)]);
var inst_35409 = klipse_clj.lang.clojure.populate_err.call(null,inst_35406,opts);
var state_35425__$1 = state_35425;
var statearr_35435_35454 = state_35425__$1;
(statearr_35435_35454[(2)] = inst_35409);

(statearr_35435_35454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (2))){
var inst_35423 = (state_35425[(2)]);
var state_35425__$1 = state_35425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35425__$1,inst_35423);
} else {
if((state_val_35426 === (11))){
var inst_35406 = (state_35425[(8)]);
var inst_35406__$1 = (state_35425[(2)]);
var inst_35407 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35406__$1);
var state_35425__$1 = (function (){var statearr_35436 = state_35425;
(statearr_35436[(8)] = inst_35406__$1);

return statearr_35436;
})();
if(cljs.core.truth_(inst_35407)){
var statearr_35437_35455 = state_35425__$1;
(statearr_35437_35455[(1)] = (12));

} else {
var statearr_35438_35456 = state_35425__$1;
(statearr_35438_35456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (9))){
var inst_35392 = (state_35425[(10)]);
var state_35425__$1 = state_35425;
var statearr_35439_35457 = state_35425__$1;
(statearr_35439_35457[(2)] = inst_35392);

(statearr_35439_35457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (5))){
var inst_35378 = (state_35425[(2)]);
var inst_35386 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35387 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_35388 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35386,inst_35387);
var inst_35389 = cljs.core.nth.call(null,inst_35388,(0),null);
var inst_35390 = cljs.core.nth.call(null,inst_35388,(1),null);
var inst_35391 = inst_35388;
var inst_35392 = null;
var state_35425__$1 = (function (){var statearr_35440 = state_35425;
(statearr_35440[(9)] = inst_35391);

(statearr_35440[(12)] = inst_35389);

(statearr_35440[(13)] = inst_35378);

(statearr_35440[(14)] = inst_35390);

(statearr_35440[(10)] = inst_35392);

return statearr_35440;
})();
var statearr_35441_35458 = state_35425__$1;
(statearr_35441_35458[(2)] = null);

(statearr_35441_35458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (14))){
var inst_35416 = (state_35425[(2)]);
var state_35425__$1 = state_35425;
var statearr_35442_35459 = state_35425__$1;
(statearr_35442_35459[(2)] = inst_35416);

(statearr_35442_35459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (10))){
var inst_35419 = (state_35425[(2)]);
var state_35425__$1 = state_35425;
var statearr_35443_35460 = state_35425__$1;
(statearr_35443_35460[(2)] = inst_35419);

(statearr_35443_35460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35426 === (8))){
var inst_35397 = (state_35425[(11)]);
var inst_35402 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_35403 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_35402,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_35404 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_35397,inst_35403);
var state_35425__$1 = state_35425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35425__$1,(11),inst_35404);
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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0 = (function (){
var statearr_35444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35444[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__);

(statearr_35444[(1)] = (1));

return statearr_35444;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1 = (function (state_35425){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35445){if((e35445 instanceof Object)){
var ex__14974__auto__ = e35445;
var statearr_35446_35461 = state_35425;
(statearr_35446_35461[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_35425;
state_35425 = G__35462;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__ = function(state_35425){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1.call(this,state_35425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35447 = f__14994__auto__.call(null);
(statearr_35447[(6)] = c__14993__auto__);

return statearr_35447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35520){
var state_val_35521 = (state_35520[(1)]);
if((state_val_35521 === (7))){
var inst_35488 = (state_35520[(7)]);
var inst_35493 = klipse_clj.repl.create_state_compile.call(null);
var inst_35494 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_35493,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_35495 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_35488,inst_35494);
var state_35520__$1 = state_35520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35520__$1,(10),inst_35495);
} else {
if((state_val_35521 === (1))){
var state_35520__$1 = state_35520;
var statearr_35522_35543 = state_35520__$1;
(statearr_35522_35543[(2)] = null);

(statearr_35522_35543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35520,(3),Object,null,(2));
var inst_35477 = klipse_clj.repl.create_state_compile.call(null);
var inst_35478 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_35479 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_35477,inst_35478);
var inst_35480 = cljs.core.nth.call(null,inst_35479,(0),null);
var inst_35481 = cljs.core.nth.call(null,inst_35479,(1),null);
var inst_35482 = inst_35479;
var inst_35483 = "";
var state_35520__$1 = (function (){var statearr_35523 = state_35520;
(statearr_35523[(8)] = inst_35480);

(statearr_35523[(9)] = inst_35481);

(statearr_35523[(10)] = inst_35482);

(statearr_35523[(11)] = inst_35483);

return statearr_35523;
})();
var statearr_35524_35544 = state_35520__$1;
(statearr_35524_35544[(2)] = null);

(statearr_35524_35544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (13))){
var inst_35508 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
var statearr_35525_35545 = state_35520__$1;
(statearr_35525_35545[(2)] = inst_35508);

(statearr_35525_35545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (6))){
var inst_35516 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
var statearr_35526_35546 = state_35520__$1;
(statearr_35526_35546[(2)] = inst_35516);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (3))){
var inst_35463 = (state_35520[(2)]);
var inst_35464 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_35465 = [inst_35463];
var inst_35466 = cljs.core.PersistentHashMap.fromArrays(inst_35464,inst_35465);
var state_35520__$1 = state_35520;
var statearr_35527_35547 = state_35520__$1;
(statearr_35527_35547[(2)] = inst_35466);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (12))){
var inst_35497 = (state_35520[(12)]);
var inst_35489 = (state_35520[(13)]);
var inst_35483 = (state_35520[(11)]);
var inst_35501 = klipse_clj.repl.create_state_compile.call(null);
var inst_35502 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_35503 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_35489,inst_35501,inst_35502);
var inst_35504 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_35497);
var inst_35505 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35483),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35504)].join('');
var inst_35482 = inst_35503;
var inst_35483__$1 = inst_35505;
var state_35520__$1 = (function (){var statearr_35528 = state_35520;
(statearr_35528[(10)] = inst_35482);

(statearr_35528[(11)] = inst_35483__$1);

return statearr_35528;
})();
var statearr_35529_35548 = state_35520__$1;
(statearr_35529_35548[(2)] = null);

(statearr_35529_35548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (2))){
var inst_35518 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35520__$1,inst_35518);
} else {
if((state_val_35521 === (11))){
var inst_35497 = (state_35520[(12)]);
var state_35520__$1 = state_35520;
var statearr_35530_35549 = state_35520__$1;
(statearr_35530_35549[(2)] = inst_35497);

(statearr_35530_35549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (9))){
var inst_35514 = (state_35520[(2)]);
var state_35520__$1 = state_35520;
var statearr_35531_35550 = state_35520__$1;
(statearr_35531_35550[(2)] = inst_35514);

(statearr_35531_35550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (5))){
var inst_35488 = (state_35520[(7)]);
var inst_35482 = (state_35520[(10)]);
var inst_35488__$1 = cljs.core.nth.call(null,inst_35482,(0),null);
var inst_35489 = cljs.core.nth.call(null,inst_35482,(1),null);
var inst_35490 = cljs.core.empty_QMARK_.call(null,inst_35488__$1);
var inst_35491 = (!(inst_35490));
var state_35520__$1 = (function (){var statearr_35532 = state_35520;
(statearr_35532[(7)] = inst_35488__$1);

(statearr_35532[(13)] = inst_35489);

return statearr_35532;
})();
if(inst_35491){
var statearr_35533_35551 = state_35520__$1;
(statearr_35533_35551[(1)] = (7));

} else {
var statearr_35534_35552 = state_35520__$1;
(statearr_35534_35552[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (10))){
var inst_35497 = (state_35520[(12)]);
var inst_35497__$1 = (state_35520[(2)]);
var inst_35498 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35497__$1);
var state_35520__$1 = (function (){var statearr_35535 = state_35520;
(statearr_35535[(12)] = inst_35497__$1);

return statearr_35535;
})();
if(cljs.core.truth_(inst_35498)){
var statearr_35536_35553 = state_35520__$1;
(statearr_35536_35553[(1)] = (11));

} else {
var statearr_35537_35554 = state_35520__$1;
(statearr_35537_35554[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35521 === (8))){
var inst_35483 = (state_35520[(11)]);
var inst_35510 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_35511 = [inst_35483];
var inst_35512 = cljs.core.PersistentHashMap.fromArrays(inst_35510,inst_35511);
var state_35520__$1 = state_35520;
var statearr_35538_35555 = state_35520__$1;
(statearr_35538_35555[(2)] = inst_35512);

(statearr_35538_35555[(1)] = (9));


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
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0 = (function (){
var statearr_35539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35539[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__);

(statearr_35539[(1)] = (1));

return statearr_35539;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1 = (function (state_35520){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35540){if((e35540 instanceof Object)){
var ex__14974__auto__ = e35540;
var statearr_35541_35556 = state_35520;
(statearr_35541_35556[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35557 = state_35520;
state_35520 = G__35557;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__ = function(state_35520){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1.call(this,state_35520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35542 = f__14994__auto__.call(null);
(statearr_35542[(6)] = c__14993__auto__);

return statearr_35542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35563){
var state_val_35564 = (state_35563[(1)]);
if((state_val_35564 === (1))){
var inst_35558 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35563__$1,(2),inst_35558);
} else {
if((state_val_35564 === (2))){
var inst_35560 = (state_35563[(2)]);
var inst_35561 = klipse_clj.lang.clojure.result_as_str.call(null,inst_35560,opts);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35563__$1,inst_35561);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0 = (function (){
var statearr_35565 = [null,null,null,null,null,null,null];
(statearr_35565[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__);

(statearr_35565[(1)] = (1));

return statearr_35565;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1 = (function (state_35563){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35566){if((e35566 instanceof Object)){
var ex__14974__auto__ = e35566;
var statearr_35567_35569 = state_35563;
(statearr_35567_35569[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35570 = state_35563;
state_35563 = G__35570;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__ = function(state_35563){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1.call(this,state_35563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35568 = f__14994__auto__.call(null);
(statearr_35568[(6)] = c__14993__auto__);

return statearr_35568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__35572 = arguments.length;
switch (G__35572) {
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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35578){
var state_val_35579 = (state_35578[(1)]);
if((state_val_35579 === (1))){
var inst_35573 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35578__$1,(2),inst_35573);
} else {
if((state_val_35579 === (2))){
var inst_35575 = (state_35578[(2)]);
var inst_35576 = klipse_clj.lang.clojure.read_result.call(null,inst_35575);
var state_35578__$1 = state_35578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35578__$1,inst_35576);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14971__auto____0 = (function (){
var statearr_35580 = [null,null,null,null,null,null,null];
(statearr_35580[(0)] = klipse_clj$lang$clojure$state_machine__14971__auto__);

(statearr_35580[(1)] = (1));

return statearr_35580;
});
var klipse_clj$lang$clojure$state_machine__14971__auto____1 = (function (state_35578){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35581){if((e35581 instanceof Object)){
var ex__14974__auto__ = e35581;
var statearr_35582_35585 = state_35578;
(statearr_35582_35585[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35586 = state_35578;
state_35578 = G__35586;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14971__auto__ = function(state_35578){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14971__auto____1.call(this,state_35578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14971__auto____0;
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14971__auto____1;
return klipse_clj$lang$clojure$state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35583 = f__14994__auto__.call(null);
(statearr_35583[(6)] = c__14993__auto__);

return statearr_35583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});

klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2;

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35593){
var state_val_35594 = (state_35593[(1)]);
if((state_val_35594 === (1))){
var inst_35587 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35593__$1,(2),inst_35587);
} else {
if((state_val_35594 === (2))){
var inst_35589 = (state_35593[(2)]);
var inst_35590 = cljs.core.clj__GT_js.call(null,inst_35589);
var inst_35591 = cb.call(null,inst_35590);
var state_35593__$1 = state_35593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35593__$1,inst_35591);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0 = (function (){
var statearr_35595 = [null,null,null,null,null,null,null];
(statearr_35595[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__);

(statearr_35595[(1)] = (1));

return statearr_35595;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1 = (function (state_35593){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35596){if((e35596 instanceof Object)){
var ex__14974__auto__ = e35596;
var statearr_35597_35599 = state_35593;
(statearr_35597_35599[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35600 = state_35593;
state_35593 = G__35600;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__ = function(state_35593){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1.call(this,state_35593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35598 = f__14994__auto__.call(null);
(statearr_35598[(6)] = c__14993__auto__);

return statearr_35598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__35602 = arguments.length;
switch (G__35602) {
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
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35608){
var state_val_35609 = (state_35608[(1)]);
if((state_val_35609 === (1))){
var inst_35603 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_35608__$1 = state_35608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35608__$1,(2),inst_35603);
} else {
if((state_val_35609 === (2))){
var inst_35605 = (state_35608[(2)]);
var inst_35606 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_35605);
var state_35608__$1 = state_35608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35608__$1,inst_35606);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$state_machine__14971__auto____0 = (function (){
var statearr_35610 = [null,null,null,null,null,null,null];
(statearr_35610[(0)] = klipse_clj$lang$clojure$state_machine__14971__auto__);

(statearr_35610[(1)] = (1));

return statearr_35610;
});
var klipse_clj$lang$clojure$state_machine__14971__auto____1 = (function (state_35608){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35611){if((e35611 instanceof Object)){
var ex__14974__auto__ = e35611;
var statearr_35612_35615 = state_35608;
(statearr_35612_35615[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35616 = state_35608;
state_35608 = G__35616;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__14971__auto__ = function(state_35608){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__14971__auto____1.call(this,state_35608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__14971__auto____0;
klipse_clj$lang$clojure$state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__14971__auto____1;
return klipse_clj$lang$clojure$state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35613 = f__14994__auto__.call(null);
(statearr_35613[(6)] = c__14993__auto__);

return statearr_35613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});

klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2;

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35622){
var state_val_35623 = (state_35622[(1)]);
if((state_val_35623 === (1))){
var inst_35617 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35622__$1,(2),inst_35617);
} else {
if((state_val_35623 === (2))){
var inst_35619 = (state_35622[(2)]);
var inst_35620 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_35619);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35622__$1,inst_35620);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0 = (function (){
var statearr_35624 = [null,null,null,null,null,null,null];
(statearr_35624[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__);

(statearr_35624[(1)] = (1));

return statearr_35624;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1 = (function (state_35622){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object)){
var ex__14974__auto__ = e35625;
var statearr_35626_35628 = state_35622;
(statearr_35626_35628[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35629 = state_35622;
state_35622 = G__35629;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35627 = f__14994__auto__.call(null);
(statearr_35627[(6)] = c__14993__auto__);

return statearr_35627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__14993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto__){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto__){
return (function (state_35636){
var state_val_35637 = (state_35636[(1)]);
if((state_val_35637 === (1))){
var inst_35630 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_35636__$1 = state_35636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35636__$1,(2),inst_35630);
} else {
if((state_val_35637 === (2))){
var inst_35632 = (state_35636[(2)]);
var inst_35633 = cljs.core.second.call(null,inst_35632);
var inst_35634 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35633);
var state_35636__$1 = state_35636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35636__$1,inst_35634);
} else {
return null;
}
}
});})(c__14993__auto__))
;
return ((function (switch__14970__auto__,c__14993__auto__){
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0 = (function (){
var statearr_35638 = [null,null,null,null,null,null,null];
(statearr_35638[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__);

(statearr_35638[(1)] = (1));

return statearr_35638;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1 = (function (state_35636){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35639){if((e35639 instanceof Object)){
var ex__14974__auto__ = e35639;
var statearr_35640_35642 = state_35636;
(statearr_35640_35642[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35643 = state_35636;
state_35636 = G__35643;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__ = function(state_35636){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1.call(this,state_35636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto__))
})();
var state__14995__auto__ = (function (){var statearr_35641 = f__14994__auto__.call(null);
(statearr_35641[(6)] = c__14993__auto__);

return statearr_35641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto__))
);

return c__14993__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__35645){
var map__35646 = p__35645;
var map__35646__$1 = (((((!((map__35646 == null))))?(((((map__35646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35646):map__35646);
var opts = map__35646__$1;
var container_id = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__14993__auto___35698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (){
var f__14994__auto__ = (function (){var switch__14970__auto__ = ((function (c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (state_35680){
var state_val_35681 = (state_35680[(1)]);
if((state_val_35681 === (7))){
var inst_35656 = (state_35680[(2)]);
var inst_35661 = (function (){var _STAR_print_newline_STAR__orig_val__35657 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35658 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35659 = true;
return ((function (_STAR_print_newline_STAR__orig_val__35657,_STAR_print_fn_STAR__orig_val__35658,_STAR_print_newline_STAR__temp_val__35659,inst_35656,state_val_35681,c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function (p1__35644_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__35644_SHARP_);
});
;})(_STAR_print_newline_STAR__orig_val__35657,_STAR_print_fn_STAR__orig_val__35658,_STAR_print_newline_STAR__temp_val__35659,inst_35656,state_val_35681,c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var inst_35662 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_35663 = cljs.core._STAR_print_fn_STAR_ = inst_35661;
var state_35680__$1 = (function (){var statearr_35682 = state_35680;
(statearr_35682[(7)] = inst_35662);

(statearr_35682[(8)] = inst_35663);

(statearr_35682[(9)] = inst_35656);

return statearr_35682;
})();
var statearr_35683_35699 = state_35680__$1;
(statearr_35683_35699[(2)] = null);

(statearr_35683_35699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (1))){
var inst_35648 = clojure.string.blank_QMARK_.call(null,exp);
var state_35680__$1 = state_35680;
if(inst_35648){
var statearr_35684_35700 = state_35680__$1;
(statearr_35684_35700[(1)] = (2));

} else {
var statearr_35685_35701 = state_35680__$1;
(statearr_35685_35701[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (4))){
var inst_35678 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35680__$1,inst_35678);
} else {
if((state_val_35681 === (6))){
var state_35680__$1 = state_35680;
var statearr_35686_35702 = state_35680__$1;
(statearr_35686_35702[(2)] = null);

(statearr_35686_35702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (3))){
var state_35680__$1 = state_35680;
if(cljs.core.truth_(setup_container_fn)){
var statearr_35687_35703 = state_35680__$1;
(statearr_35687_35703[(1)] = (5));

} else {
var statearr_35688_35704 = state_35680__$1;
(statearr_35688_35704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (2))){
var inst_35650 = cljs.core.async.put_BANG_.call(null,c,"");
var state_35680__$1 = state_35680;
var statearr_35689_35705 = state_35680__$1;
(statearr_35689_35705[(2)] = inst_35650);

(statearr_35689_35705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (11))){
var inst_35672 = (state_35680[(2)]);
var inst_35673 = cljs.core.second.call(null,inst_35672);
var inst_35674 = cljs.core.async.put_BANG_.call(null,c,inst_35673);
var state_35680__$1 = state_35680;
var statearr_35690_35706 = state_35680__$1;
(statearr_35690_35706[(2)] = inst_35674);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35680__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (9))){
var inst_35664 = (state_35680[(2)]);
var inst_35665 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_35666 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_35680__$1 = (function (){var statearr_35691 = state_35680;
(statearr_35691[(10)] = inst_35666);

(statearr_35691[(11)] = inst_35665);

(statearr_35691[(12)] = inst_35664);

return statearr_35691;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35680__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (5))){
var inst_35653 = setup_container_fn.call(null,container_id);
var state_35680__$1 = state_35680;
var statearr_35692_35707 = state_35680__$1;
(statearr_35692_35707[(2)] = inst_35653);

(statearr_35692_35707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35681 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35680,null,null,(9),(8));
var inst_35670 = klipse_clj.lang.clojure.eval_async.call(null,exp,opts);
var state_35680__$1 = state_35680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35680__$1,(11),inst_35670);
} else {
if((state_val_35681 === (8))){
var inst_35676 = (state_35680[(2)]);
var state_35680__$1 = state_35680;
var statearr_35693_35708 = state_35680__$1;
(statearr_35693_35708[(2)] = inst_35676);

(statearr_35693_35708[(1)] = (4));


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
});})(c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
;
return ((function (switch__14970__auto__,c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_){
return (function() {
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0 = (function (){
var statearr_35694 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35694[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__);

(statearr_35694[(1)] = (1));

return statearr_35694;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1 = (function (state_35680){
while(true){
var ret_value__14972__auto__ = (function (){try{while(true){
var result__14973__auto__ = switch__14970__auto__.call(null,state_35680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14973__auto__;
}
break;
}
}catch (e35695){if((e35695 instanceof Object)){
var ex__14974__auto__ = e35695;
var statearr_35696_35709 = state_35680;
(statearr_35696_35709[(5)] = ex__14974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35680;
state_35680 = G__35710;
continue;
} else {
return ret_value__14972__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__ = function(state_35680){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1.call(this,state_35680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__14971__auto__;
})()
;})(switch__14970__auto__,c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
})();
var state__14995__auto__ = (function (){var statearr_35697 = f__14994__auto__.call(null);
(statearr_35697[(6)] = c__14993__auto___35698);

return statearr_35697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14995__auto__);
});})(c__14993__auto___35698,c,map__35646,map__35646__$1,opts,container_id,setup_container_fn,verbose_QMARK_))
);


return c;
});
klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map
