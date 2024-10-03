// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('klipse_clj.compile_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('klipse_clj.lang.clojure');
klipse_clj.compile_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
klipse_clj.repl.reset_state_compile_BANG_.call(null);

return klipse_clj.repl.reset_ns_compile_BANG_.call(null);
})], null)], null);
klipse_clj.compile_test.remove_chars = (function klipse_clj$compile_test$remove_chars(s){
try{return clojure.string.replace.call(null,s,/\n|\s/,"");
}catch (e45062){if((e45062 instanceof Object)){
var e = e45062;
cljs.core.println.call(null,"error in remove-chars ",s);

throw e;
} else {
throw e45062;

}
}});
klipse_clj.compile_test.a_EQ_ = (function klipse_clj$compile_test$a_EQ_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___45064 = arguments.length;
var i__5727__auto___45065 = (0);
while(true){
if((i__5727__auto___45065 < len__5726__auto___45064)){
args__5732__auto__.push((arguments[i__5727__auto___45065]));

var G__45066 = (i__5727__auto___45065 + (1));
i__5727__auto___45065 = G__45066;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return klipse_clj.compile_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(klipse_clj.compile_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse_clj.compile_test.remove_chars,args));
}));

(klipse_clj.compile_test.a_EQ_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(klipse_clj.compile_test.a_EQ_.cljs$lang$applyTo = (function (seq45063){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45063));
}));

klipse_clj.compile_test.error__GT_clj = (function klipse_clj$compile_test$error__GT_clj(p__45067){
var vec__45068 = p__45067;
var status = cljs.core.nth.call(null,vec__45068,(0),null);
var error = cljs.core.nth.call(null,vec__45068,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});
klipse_clj.compile_test.success = (function klipse_clj$compile_test$success(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.success.cljs$lang$var);
});
klipse_clj.compile_test.success.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test45071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test45071 = (function (meta45072){
this.meta45072 = meta45072;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45073,meta45072__$1){
var self__ = this;
var _45073__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45071(meta45072__$1));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45073){
var self__ = this;
var _45073__$1 = this;
return self__.meta45072;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___34935__auto__ = self____$1;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_45245){
var state_val_45246 = (state_45245[(1)]);
if((state_val_45246 === (7))){
var inst_45091 = (state_45245[(7)]);
var inst_45094 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45095 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45096 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45097 = cljs.core.cons.call(null,inst_45096,inst_45091);
var inst_45098 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45095,34,inst_45097,null];
var inst_45099 = cljs.core.PersistentHashMap.fromArrays(inst_45094,inst_45098);
var inst_45100 = cljs.test.report.call(null,inst_45099);
var state_45245__$1 = state_45245;
var statearr_45247_45558 = state_45245__$1;
(statearr_45247_45558[(2)] = inst_45100);

(statearr_45247_45558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (20))){
var inst_45159 = (state_45245[(2)]);
var inst_45160 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45161 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45162 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45161,34,inst_45159,null];
var inst_45163 = cljs.core.PersistentHashMap.fromArrays(inst_45160,inst_45162);
var inst_45164 = cljs.test.report.call(null,inst_45163);
var state_45245__$1 = state_45245;
var statearr_45248_45559 = state_45245__$1;
(statearr_45248_45559[(2)] = inst_45164);

(statearr_45248_45559[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (27))){
var inst_45242 = (state_45245[(2)]);
var inst_45243 = done.call(null);
var state_45245__$1 = (function (){var statearr_45249 = state_45245;
(statearr_45249[(8)] = inst_45242);

return statearr_45249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45245__$1,inst_45243);
} else {
if((state_val_45246 === (1))){
var state_45245__$1 = state_45245;
var statearr_45250_45560 = state_45245__$1;
(statearr_45250_45560[(2)] = null);

(statearr_45250_45560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (24))){
var inst_45175 = (state_45245[(9)]);
var inst_45186 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45187 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45188 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45189 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45190 = cljs.core.cons.call(null,inst_45189,inst_45175);
var inst_45191 = (new cljs.core.List(null,inst_45190,null,(1),null));
var inst_45192 = (new cljs.core.List(null,inst_45188,inst_45191,(2),null));
var inst_45193 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45187,34,inst_45192,null];
var inst_45194 = cljs.core.PersistentHashMap.fromArrays(inst_45186,inst_45193);
var inst_45195 = cljs.test.report.call(null,inst_45194);
var state_45245__$1 = state_45245;
var statearr_45251_45561 = state_45245__$1;
(statearr_45251_45561[(2)] = inst_45195);

(statearr_45251_45561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (4))){
var inst_45075 = (state_45245[(2)]);
var inst_45076 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45077 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45078 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45077,34,inst_45075,null];
var inst_45079 = cljs.core.PersistentHashMap.fromArrays(inst_45076,inst_45078);
var inst_45080 = cljs.test.report.call(null,inst_45079);
var state_45245__$1 = state_45245;
var statearr_45253_45562 = state_45245__$1;
(statearr_45253_45562[(2)] = inst_45080);

(statearr_45253_45562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (15))){
var inst_45133 = (state_45245[(10)]);
var inst_45136 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45137 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45138 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45139 = cljs.core.cons.call(null,inst_45138,inst_45133);
var inst_45140 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45137,34,inst_45139,null];
var inst_45141 = cljs.core.PersistentHashMap.fromArrays(inst_45136,inst_45140);
var inst_45142 = cljs.test.report.call(null,inst_45141);
var state_45245__$1 = state_45245;
var statearr_45254_45563 = state_45245__$1;
(statearr_45254_45563[(2)] = inst_45142);

(statearr_45254_45563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (21))){
var _ = (function (){var statearr_45255 = state_45245;
(statearr_45255[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45255;
})();
var state_45245__$1 = state_45245;
var ex45252 = (state_45245__$1[(2)]);
var statearr_45256_45564 = state_45245__$1;
(statearr_45256_45564[(5)] = ex45252);


var statearr_45257_45565 = state_45245__$1;
(statearr_45257_45565[(1)] = (20));

(statearr_45257_45565[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (31))){
var inst_45217 = (state_45245[(11)]);
var inst_45220 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45221 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45222 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45223 = cljs.core.cons.call(null,inst_45222,inst_45217);
var inst_45224 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45221,34,inst_45223,null];
var inst_45225 = cljs.core.PersistentHashMap.fromArrays(inst_45220,inst_45224);
var inst_45226 = cljs.test.report.call(null,inst_45225);
var state_45245__$1 = state_45245;
var statearr_45258_45566 = state_45245__$1;
(statearr_45258_45566[(2)] = inst_45226);

(statearr_45258_45566[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (32))){
var inst_45217 = (state_45245[(11)]);
var inst_45228 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45229 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45230 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45231 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45232 = cljs.core.cons.call(null,inst_45231,inst_45217);
var inst_45233 = (new cljs.core.List(null,inst_45232,null,(1),null));
var inst_45234 = (new cljs.core.List(null,inst_45230,inst_45233,(2),null));
var inst_45235 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45229,34,inst_45234,null];
var inst_45236 = cljs.core.PersistentHashMap.fromArrays(inst_45228,inst_45235);
var inst_45237 = cljs.test.report.call(null,inst_45236);
var state_45245__$1 = state_45245;
var statearr_45260_45567 = state_45245__$1;
(statearr_45260_45567[(2)] = inst_45237);

(statearr_45260_45567[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (33))){
var inst_45218 = (state_45245[(12)]);
var inst_45239 = (state_45245[(2)]);
var _ = (function (){var statearr_45261 = state_45245;
(statearr_45261[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45261;
})();
var state_45245__$1 = (function (){var statearr_45262 = state_45245;
(statearr_45262[(13)] = inst_45239);

return statearr_45262;
})();
var statearr_45263_45568 = state_45245__$1;
(statearr_45263_45568[(2)] = inst_45218);

(statearr_45263_45568[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (13))){
var _ = (function (){var statearr_45265 = state_45245;
(statearr_45265[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45265;
})();
var state_45245__$1 = state_45245;
var ex45259 = (state_45245__$1[(2)]);
var statearr_45266_45569 = state_45245__$1;
(statearr_45266_45569[(5)] = ex45259);


var statearr_45267_45570 = state_45245__$1;
(statearr_45267_45570[(1)] = (12));

(statearr_45267_45570[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (22))){
var inst_45175 = (state_45245[(9)]);
var inst_45176 = (state_45245[(14)]);
var inst_45172 = (state_45245[(2)]);
var inst_45173 = cljs.core.second.call(null,inst_45172);
var inst_45174 = (new cljs.core.List(null,"cljs.core._EQ_.call(null,(1),(2));",null,(1),null));
var inst_45175__$1 = (new cljs.core.List(null,inst_45173,inst_45174,(2),null));
var inst_45176__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45175__$1);
var state_45245__$1 = (function (){var statearr_45268 = state_45245;
(statearr_45268[(9)] = inst_45175__$1);

(statearr_45268[(14)] = inst_45176__$1);

return statearr_45268;
})();
if(cljs.core.truth_(inst_45176__$1)){
var statearr_45269_45571 = state_45245__$1;
(statearr_45269_45571[(1)] = (23));

} else {
var statearr_45270_45572 = state_45245__$1;
(statearr_45270_45572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (29))){
var _ = (function (){var statearr_45271 = state_45245;
(statearr_45271[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45271;
})();
var state_45245__$1 = state_45245;
var ex45264 = (state_45245__$1[(2)]);
var statearr_45272_45573 = state_45245__$1;
(statearr_45272_45573[(5)] = ex45264);


var statearr_45273_45574 = state_45245__$1;
(statearr_45273_45574[(1)] = (28));

(statearr_45273_45574[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (6))){
var inst_45091 = (state_45245[(7)]);
var inst_45092 = (state_45245[(15)]);
var inst_45088 = (state_45245[(2)]);
var inst_45089 = cljs.core.second.call(null,inst_45088);
var inst_45090 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);",null,(1),null));
var inst_45091__$1 = (new cljs.core.List(null,inst_45089,inst_45090,(2),null));
var inst_45092__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45091__$1);
var state_45245__$1 = (function (){var statearr_45274 = state_45245;
(statearr_45274[(7)] = inst_45091__$1);

(statearr_45274[(15)] = inst_45092__$1);

return statearr_45274;
})();
if(cljs.core.truth_(inst_45092__$1)){
var statearr_45275_45575 = state_45245__$1;
(statearr_45275_45575[(1)] = (7));

} else {
var statearr_45276_45576 = state_45245__$1;
(statearr_45276_45576[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (28))){
var inst_45201 = (state_45245[(2)]);
var inst_45202 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45203 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45204 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45203,34,inst_45201,null];
var inst_45205 = cljs.core.PersistentHashMap.fromArrays(inst_45202,inst_45204);
var inst_45206 = cljs.test.report.call(null,inst_45205);
var state_45245__$1 = state_45245;
var statearr_45277_45577 = state_45245__$1;
(statearr_45277_45577[(2)] = inst_45206);

(statearr_45277_45577[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (25))){
var inst_45176 = (state_45245[(14)]);
var inst_45197 = (state_45245[(2)]);
var _ = (function (){var statearr_45278 = state_45245;
(statearr_45278[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45278;
})();
var state_45245__$1 = (function (){var statearr_45279 = state_45245;
(statearr_45279[(16)] = inst_45197);

return statearr_45279;
})();
var statearr_45280_45578 = state_45245__$1;
(statearr_45280_45578[(2)] = inst_45176);

(statearr_45280_45578[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (17))){
var inst_45134 = (state_45245[(17)]);
var inst_45155 = (state_45245[(2)]);
var _ = (function (){var statearr_45281 = state_45245;
(statearr_45281[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45281;
})();
var state_45245__$1 = (function (){var statearr_45282 = state_45245;
(statearr_45282[(18)] = inst_45155);

return statearr_45282;
})();
var statearr_45283_45579 = state_45245__$1;
(statearr_45283_45579[(2)] = inst_45134);

(statearr_45283_45579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (3))){
var inst_45116 = (state_45245[(2)]);
var state_45245__$1 = (function (){var statearr_45284 = state_45245;
(statearr_45284[(19)] = inst_45116);

return statearr_45284;
})();
var statearr_45285_45580 = state_45245__$1;
(statearr_45285_45580[(2)] = null);

(statearr_45285_45580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (12))){
var inst_45117 = (state_45245[(2)]);
var inst_45118 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45119 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45120 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45119,34,inst_45117,null];
var inst_45121 = cljs.core.PersistentHashMap.fromArrays(inst_45118,inst_45120);
var inst_45122 = cljs.test.report.call(null,inst_45121);
var state_45245__$1 = state_45245;
var statearr_45286_45581 = state_45245__$1;
(statearr_45286_45581[(2)] = inst_45122);

(statearr_45286_45581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (2))){
var _ = (function (){var statearr_45287 = state_45245;
(statearr_45287[(4)] = cljs.core.cons.call(null,(5),(state_45245[(4)])));

return statearr_45287;
})();
var inst_45086 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_45245__$1 = state_45245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45245__$1,(6),inst_45086);
} else {
if((state_val_45246 === (23))){
var inst_45175 = (state_45245[(9)]);
var inst_45178 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45179 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45180 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45181 = cljs.core.cons.call(null,inst_45180,inst_45175);
var inst_45182 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45179,34,inst_45181,null];
var inst_45183 = cljs.core.PersistentHashMap.fromArrays(inst_45178,inst_45182);
var inst_45184 = cljs.test.report.call(null,inst_45183);
var state_45245__$1 = state_45245;
var statearr_45288_45582 = state_45245__$1;
(statearr_45288_45582[(2)] = inst_45184);

(statearr_45288_45582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (19))){
var inst_45200 = (state_45245[(2)]);
var state_45245__$1 = (function (){var statearr_45289 = state_45245;
(statearr_45289[(20)] = inst_45200);

return statearr_45289;
})();
var statearr_45290_45583 = state_45245__$1;
(statearr_45290_45583[(2)] = null);

(statearr_45290_45583[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (11))){
var inst_45158 = (state_45245[(2)]);
var state_45245__$1 = (function (){var statearr_45292 = state_45245;
(statearr_45292[(21)] = inst_45158);

return statearr_45292;
})();
var statearr_45293_45584 = state_45245__$1;
(statearr_45293_45584[(2)] = null);

(statearr_45293_45584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (9))){
var inst_45092 = (state_45245[(15)]);
var inst_45113 = (state_45245[(2)]);
var _ = (function (){var statearr_45294 = state_45245;
(statearr_45294[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45294;
})();
var state_45245__$1 = (function (){var statearr_45295 = state_45245;
(statearr_45295[(22)] = inst_45113);

return statearr_45295;
})();
var statearr_45296_45585 = state_45245__$1;
(statearr_45296_45585[(2)] = inst_45092);

(statearr_45296_45585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (5))){
var _ = (function (){var statearr_45297 = state_45245;
(statearr_45297[(4)] = cljs.core.rest.call(null,(state_45245[(4)])));

return statearr_45297;
})();
var state_45245__$1 = state_45245;
var ex45291 = (state_45245__$1[(2)]);
var statearr_45298_45586 = state_45245__$1;
(statearr_45298_45586[(5)] = ex45291);


var statearr_45299_45587 = state_45245__$1;
(statearr_45299_45587[(1)] = (4));

(statearr_45299_45587[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (14))){
var inst_45133 = (state_45245[(10)]);
var inst_45134 = (state_45245[(17)]);
var inst_45130 = (state_45245[(2)]);
var inst_45131 = cljs.core.second.call(null,inst_45130);
var inst_45132 = (new cljs.core.List(null,"my_project.my_ns.x= (3);",null,(1),null));
var inst_45133__$1 = (new cljs.core.List(null,inst_45131,inst_45132,(2),null));
var inst_45134__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45133__$1);
var state_45245__$1 = (function (){var statearr_45300 = state_45245;
(statearr_45300[(10)] = inst_45133__$1);

(statearr_45300[(17)] = inst_45134__$1);

return statearr_45300;
})();
if(cljs.core.truth_(inst_45134__$1)){
var statearr_45301_45588 = state_45245__$1;
(statearr_45301_45588[(1)] = (15));

} else {
var statearr_45302_45589 = state_45245__$1;
(statearr_45302_45589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (26))){
var _ = (function (){var statearr_45303 = state_45245;
(statearr_45303[(4)] = cljs.core.cons.call(null,(29),(state_45245[(4)])));

return statearr_45303;
})();
var inst_45212 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def a ::a)");
var state_45245__$1 = state_45245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45245__$1,(30),inst_45212);
} else {
if((state_val_45246 === (16))){
var inst_45133 = (state_45245[(10)]);
var inst_45144 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45145 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45146 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45147 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45148 = cljs.core.cons.call(null,inst_45147,inst_45133);
var inst_45149 = (new cljs.core.List(null,inst_45148,null,(1),null));
var inst_45150 = (new cljs.core.List(null,inst_45146,inst_45149,(2),null));
var inst_45151 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45145,34,inst_45150,null];
var inst_45152 = cljs.core.PersistentHashMap.fromArrays(inst_45144,inst_45151);
var inst_45153 = cljs.test.report.call(null,inst_45152);
var state_45245__$1 = state_45245;
var statearr_45304_45590 = state_45245__$1;
(statearr_45304_45590[(2)] = inst_45153);

(statearr_45304_45590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (30))){
var inst_45217 = (state_45245[(11)]);
var inst_45218 = (state_45245[(12)]);
var inst_45214 = (state_45245[(2)]);
var inst_45215 = cljs.core.second.call(null,inst_45214);
var inst_45216 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));",null,(1),null));
var inst_45217__$1 = (new cljs.core.List(null,inst_45215,inst_45216,(2),null));
var inst_45218__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45217__$1);
var state_45245__$1 = (function (){var statearr_45305 = state_45245;
(statearr_45305[(11)] = inst_45217__$1);

(statearr_45305[(12)] = inst_45218__$1);

return statearr_45305;
})();
if(cljs.core.truth_(inst_45218__$1)){
var statearr_45306_45591 = state_45245__$1;
(statearr_45306_45591[(1)] = (31));

} else {
var statearr_45307_45592 = state_45245__$1;
(statearr_45307_45592[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45246 === (10))){
var _ = (function (){var statearr_45308 = state_45245;
(statearr_45308[(4)] = cljs.core.cons.call(null,(13),(state_45245[(4)])));

return statearr_45308;
})();
var inst_45128 = klipse_clj.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_45245__$1 = state_45245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45245__$1,(14),inst_45128);
} else {
if((state_val_45246 === (18))){
var _ = (function (){var statearr_45309 = state_45245;
(statearr_45309[(4)] = cljs.core.cons.call(null,(21),(state_45245[(4)])));

return statearr_45309;
})();
var inst_45170 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_45245__$1 = state_45245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45245__$1,(22),inst_45170);
} else {
if((state_val_45246 === (8))){
var inst_45091 = (state_45245[(7)]);
var inst_45102 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45103 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45104 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45105 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45106 = cljs.core.cons.call(null,inst_45105,inst_45091);
var inst_45107 = (new cljs.core.List(null,inst_45106,null,(1),null));
var inst_45108 = (new cljs.core.List(null,inst_45104,inst_45107,(2),null));
var inst_45109 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45103,34,inst_45108,null];
var inst_45110 = cljs.core.PersistentHashMap.fromArrays(inst_45102,inst_45109);
var inst_45111 = cljs.test.report.call(null,inst_45110);
var state_45245__$1 = state_45245;
var statearr_45310_45593 = state_45245__$1;
(statearr_45310_45593[(2)] = inst_45111);

(statearr_45310_45593[(1)] = (9));


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
}
}
}
}
}
}
}
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_45311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45311[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_45311[(1)] = (1));

return statearr_45311;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_45245){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_45245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e45312){var ex__21902__auto__ = e45312;
var statearr_45313_45594 = state_45245;
(statearr_45313_45594[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_45245[(4)]))){
var statearr_45314_45595 = state_45245;
(statearr_45314_45595[(1)] = cljs.core.first.call(null,(state_45245[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45596 = state_45245;
state_45245 = G__45596;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_45245){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_45245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_45315 = f__22024__auto__.call(null);
(statearr_45315[(6)] = c__22023__auto__);

return statearr_45315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.apply = (function (self__,args45074){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args45074);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__45316 = args__5217__auto__.slice((0),(20));
G__45316.push(args__5217__auto__.slice((20)));

return G__45316;
})():args__5217__auto__)));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___34935__auto__ = this;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_45487){
var state_val_45488 = (state_45487[(1)]);
if((state_val_45488 === (7))){
var inst_45333 = (state_45487[(7)]);
var inst_45336 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45337 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45338 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45339 = cljs.core.cons.call(null,inst_45338,inst_45333);
var inst_45340 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45337,34,inst_45339,null];
var inst_45341 = cljs.core.PersistentHashMap.fromArrays(inst_45336,inst_45340);
var inst_45342 = cljs.test.report.call(null,inst_45341);
var state_45487__$1 = state_45487;
var statearr_45489_45597 = state_45487__$1;
(statearr_45489_45597[(2)] = inst_45342);

(statearr_45489_45597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (20))){
var inst_45401 = (state_45487[(2)]);
var inst_45402 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45403 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45404 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45403,34,inst_45401,null];
var inst_45405 = cljs.core.PersistentHashMap.fromArrays(inst_45402,inst_45404);
var inst_45406 = cljs.test.report.call(null,inst_45405);
var state_45487__$1 = state_45487;
var statearr_45490_45598 = state_45487__$1;
(statearr_45490_45598[(2)] = inst_45406);

(statearr_45490_45598[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (27))){
var inst_45484 = (state_45487[(2)]);
var inst_45485 = done.call(null);
var state_45487__$1 = (function (){var statearr_45491 = state_45487;
(statearr_45491[(8)] = inst_45484);

return statearr_45491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45487__$1,inst_45485);
} else {
if((state_val_45488 === (1))){
var state_45487__$1 = state_45487;
var statearr_45492_45599 = state_45487__$1;
(statearr_45492_45599[(2)] = null);

(statearr_45492_45599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (24))){
var inst_45417 = (state_45487[(9)]);
var inst_45428 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45429 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45430 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45431 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45432 = cljs.core.cons.call(null,inst_45431,inst_45417);
var inst_45433 = (new cljs.core.List(null,inst_45432,null,(1),null));
var inst_45434 = (new cljs.core.List(null,inst_45430,inst_45433,(2),null));
var inst_45435 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45429,34,inst_45434,null];
var inst_45436 = cljs.core.PersistentHashMap.fromArrays(inst_45428,inst_45435);
var inst_45437 = cljs.test.report.call(null,inst_45436);
var state_45487__$1 = state_45487;
var statearr_45493_45600 = state_45487__$1;
(statearr_45493_45600[(2)] = inst_45437);

(statearr_45493_45600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (4))){
var inst_45317 = (state_45487[(2)]);
var inst_45318 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45319 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45320 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45319,34,inst_45317,null];
var inst_45321 = cljs.core.PersistentHashMap.fromArrays(inst_45318,inst_45320);
var inst_45322 = cljs.test.report.call(null,inst_45321);
var state_45487__$1 = state_45487;
var statearr_45495_45601 = state_45487__$1;
(statearr_45495_45601[(2)] = inst_45322);

(statearr_45495_45601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (15))){
var inst_45375 = (state_45487[(10)]);
var inst_45378 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45379 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45380 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45381 = cljs.core.cons.call(null,inst_45380,inst_45375);
var inst_45382 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45379,34,inst_45381,null];
var inst_45383 = cljs.core.PersistentHashMap.fromArrays(inst_45378,inst_45382);
var inst_45384 = cljs.test.report.call(null,inst_45383);
var state_45487__$1 = state_45487;
var statearr_45496_45602 = state_45487__$1;
(statearr_45496_45602[(2)] = inst_45384);

(statearr_45496_45602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (21))){
var _ = (function (){var statearr_45497 = state_45487;
(statearr_45497[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45497;
})();
var state_45487__$1 = state_45487;
var ex45494 = (state_45487__$1[(2)]);
var statearr_45498_45603 = state_45487__$1;
(statearr_45498_45603[(5)] = ex45494);


var statearr_45499_45604 = state_45487__$1;
(statearr_45499_45604[(1)] = (20));

(statearr_45499_45604[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (31))){
var inst_45459 = (state_45487[(11)]);
var inst_45462 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45463 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45464 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45465 = cljs.core.cons.call(null,inst_45464,inst_45459);
var inst_45466 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45463,34,inst_45465,null];
var inst_45467 = cljs.core.PersistentHashMap.fromArrays(inst_45462,inst_45466);
var inst_45468 = cljs.test.report.call(null,inst_45467);
var state_45487__$1 = state_45487;
var statearr_45500_45605 = state_45487__$1;
(statearr_45500_45605[(2)] = inst_45468);

(statearr_45500_45605[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (32))){
var inst_45459 = (state_45487[(11)]);
var inst_45470 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45471 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45472 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45473 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45474 = cljs.core.cons.call(null,inst_45473,inst_45459);
var inst_45475 = (new cljs.core.List(null,inst_45474,null,(1),null));
var inst_45476 = (new cljs.core.List(null,inst_45472,inst_45475,(2),null));
var inst_45477 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45471,34,inst_45476,null];
var inst_45478 = cljs.core.PersistentHashMap.fromArrays(inst_45470,inst_45477);
var inst_45479 = cljs.test.report.call(null,inst_45478);
var state_45487__$1 = state_45487;
var statearr_45502_45606 = state_45487__$1;
(statearr_45502_45606[(2)] = inst_45479);

(statearr_45502_45606[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (33))){
var inst_45460 = (state_45487[(12)]);
var inst_45481 = (state_45487[(2)]);
var _ = (function (){var statearr_45503 = state_45487;
(statearr_45503[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45503;
})();
var state_45487__$1 = (function (){var statearr_45504 = state_45487;
(statearr_45504[(13)] = inst_45481);

return statearr_45504;
})();
var statearr_45505_45607 = state_45487__$1;
(statearr_45505_45607[(2)] = inst_45460);

(statearr_45505_45607[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (13))){
var _ = (function (){var statearr_45507 = state_45487;
(statearr_45507[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45507;
})();
var state_45487__$1 = state_45487;
var ex45501 = (state_45487__$1[(2)]);
var statearr_45508_45608 = state_45487__$1;
(statearr_45508_45608[(5)] = ex45501);


var statearr_45509_45609 = state_45487__$1;
(statearr_45509_45609[(1)] = (12));

(statearr_45509_45609[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (22))){
var inst_45417 = (state_45487[(9)]);
var inst_45418 = (state_45487[(14)]);
var inst_45414 = (state_45487[(2)]);
var inst_45415 = cljs.core.second.call(null,inst_45414);
var inst_45416 = (new cljs.core.List(null,"cljs.core._EQ_.call(null,(1),(2));",null,(1),null));
var inst_45417__$1 = (new cljs.core.List(null,inst_45415,inst_45416,(2),null));
var inst_45418__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45417__$1);
var state_45487__$1 = (function (){var statearr_45510 = state_45487;
(statearr_45510[(9)] = inst_45417__$1);

(statearr_45510[(14)] = inst_45418__$1);

return statearr_45510;
})();
if(cljs.core.truth_(inst_45418__$1)){
var statearr_45511_45610 = state_45487__$1;
(statearr_45511_45610[(1)] = (23));

} else {
var statearr_45512_45611 = state_45487__$1;
(statearr_45512_45611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (29))){
var _ = (function (){var statearr_45513 = state_45487;
(statearr_45513[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45513;
})();
var state_45487__$1 = state_45487;
var ex45506 = (state_45487__$1[(2)]);
var statearr_45514_45612 = state_45487__$1;
(statearr_45514_45612[(5)] = ex45506);


var statearr_45515_45613 = state_45487__$1;
(statearr_45515_45613[(1)] = (28));

(statearr_45515_45613[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (6))){
var inst_45333 = (state_45487[(7)]);
var inst_45334 = (state_45487[(15)]);
var inst_45330 = (state_45487[(2)]);
var inst_45331 = cljs.core.second.call(null,inst_45330);
var inst_45332 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);",null,(1),null));
var inst_45333__$1 = (new cljs.core.List(null,inst_45331,inst_45332,(2),null));
var inst_45334__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45333__$1);
var state_45487__$1 = (function (){var statearr_45516 = state_45487;
(statearr_45516[(7)] = inst_45333__$1);

(statearr_45516[(15)] = inst_45334__$1);

return statearr_45516;
})();
if(cljs.core.truth_(inst_45334__$1)){
var statearr_45517_45614 = state_45487__$1;
(statearr_45517_45614[(1)] = (7));

} else {
var statearr_45518_45615 = state_45487__$1;
(statearr_45518_45615[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (28))){
var inst_45443 = (state_45487[(2)]);
var inst_45444 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45445 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_45446 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45445,34,inst_45443,null];
var inst_45447 = cljs.core.PersistentHashMap.fromArrays(inst_45444,inst_45446);
var inst_45448 = cljs.test.report.call(null,inst_45447);
var state_45487__$1 = state_45487;
var statearr_45519_45616 = state_45487__$1;
(statearr_45519_45616[(2)] = inst_45448);

(statearr_45519_45616[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (25))){
var inst_45418 = (state_45487[(14)]);
var inst_45439 = (state_45487[(2)]);
var _ = (function (){var statearr_45520 = state_45487;
(statearr_45520[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45520;
})();
var state_45487__$1 = (function (){var statearr_45521 = state_45487;
(statearr_45521[(16)] = inst_45439);

return statearr_45521;
})();
var statearr_45522_45617 = state_45487__$1;
(statearr_45522_45617[(2)] = inst_45418);

(statearr_45522_45617[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (17))){
var inst_45376 = (state_45487[(17)]);
var inst_45397 = (state_45487[(2)]);
var _ = (function (){var statearr_45523 = state_45487;
(statearr_45523[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45523;
})();
var state_45487__$1 = (function (){var statearr_45524 = state_45487;
(statearr_45524[(18)] = inst_45397);

return statearr_45524;
})();
var statearr_45525_45618 = state_45487__$1;
(statearr_45525_45618[(2)] = inst_45376);

(statearr_45525_45618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (3))){
var inst_45358 = (state_45487[(2)]);
var state_45487__$1 = (function (){var statearr_45526 = state_45487;
(statearr_45526[(19)] = inst_45358);

return statearr_45526;
})();
var statearr_45527_45619 = state_45487__$1;
(statearr_45527_45619[(2)] = null);

(statearr_45527_45619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (12))){
var inst_45359 = (state_45487[(2)]);
var inst_45360 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45361 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45362 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),9,34,inst_45361,34,inst_45359,null];
var inst_45363 = cljs.core.PersistentHashMap.fromArrays(inst_45360,inst_45362);
var inst_45364 = cljs.test.report.call(null,inst_45363);
var state_45487__$1 = state_45487;
var statearr_45528_45620 = state_45487__$1;
(statearr_45528_45620[(2)] = inst_45364);

(statearr_45528_45620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (2))){
var _ = (function (){var statearr_45529 = state_45487;
(statearr_45529[(4)] = cljs.core.cons.call(null,(5),(state_45487[(4)])));

return statearr_45529;
})();
var inst_45328 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45487__$1,(6),inst_45328);
} else {
if((state_val_45488 === (23))){
var inst_45417 = (state_45487[(9)]);
var inst_45420 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45421 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_45422 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45423 = cljs.core.cons.call(null,inst_45422,inst_45417);
var inst_45424 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,inst_45421,34,inst_45423,null];
var inst_45425 = cljs.core.PersistentHashMap.fromArrays(inst_45420,inst_45424);
var inst_45426 = cljs.test.report.call(null,inst_45425);
var state_45487__$1 = state_45487;
var statearr_45530_45621 = state_45487__$1;
(statearr_45530_45621[(2)] = inst_45426);

(statearr_45530_45621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (19))){
var inst_45442 = (state_45487[(2)]);
var state_45487__$1 = (function (){var statearr_45531 = state_45487;
(statearr_45531[(20)] = inst_45442);

return statearr_45531;
})();
var statearr_45532_45622 = state_45487__$1;
(statearr_45532_45622[(2)] = null);

(statearr_45532_45622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (11))){
var inst_45400 = (state_45487[(2)]);
var state_45487__$1 = (function (){var statearr_45534 = state_45487;
(statearr_45534[(21)] = inst_45400);

return statearr_45534;
})();
var statearr_45535_45623 = state_45487__$1;
(statearr_45535_45623[(2)] = null);

(statearr_45535_45623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (9))){
var inst_45334 = (state_45487[(15)]);
var inst_45355 = (state_45487[(2)]);
var _ = (function (){var statearr_45536 = state_45487;
(statearr_45536[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45536;
})();
var state_45487__$1 = (function (){var statearr_45537 = state_45487;
(statearr_45537[(22)] = inst_45355);

return statearr_45537;
})();
var statearr_45538_45624 = state_45487__$1;
(statearr_45538_45624[(2)] = inst_45334);

(statearr_45538_45624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (5))){
var _ = (function (){var statearr_45539 = state_45487;
(statearr_45539[(4)] = cljs.core.rest.call(null,(state_45487[(4)])));

return statearr_45539;
})();
var state_45487__$1 = state_45487;
var ex45533 = (state_45487__$1[(2)]);
var statearr_45540_45625 = state_45487__$1;
(statearr_45540_45625[(5)] = ex45533);


var statearr_45541_45626 = state_45487__$1;
(statearr_45541_45626[(1)] = (4));

(statearr_45541_45626[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (14))){
var inst_45375 = (state_45487[(10)]);
var inst_45376 = (state_45487[(17)]);
var inst_45372 = (state_45487[(2)]);
var inst_45373 = cljs.core.second.call(null,inst_45372);
var inst_45374 = (new cljs.core.List(null,"my_project.my_ns.x= (3);",null,(1),null));
var inst_45375__$1 = (new cljs.core.List(null,inst_45373,inst_45374,(2),null));
var inst_45376__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45375__$1);
var state_45487__$1 = (function (){var statearr_45542 = state_45487;
(statearr_45542[(10)] = inst_45375__$1);

(statearr_45542[(17)] = inst_45376__$1);

return statearr_45542;
})();
if(cljs.core.truth_(inst_45376__$1)){
var statearr_45543_45627 = state_45487__$1;
(statearr_45543_45627[(1)] = (15));

} else {
var statearr_45544_45628 = state_45487__$1;
(statearr_45544_45628[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (26))){
var _ = (function (){var statearr_45545 = state_45487;
(statearr_45545[(4)] = cljs.core.cons.call(null,(29),(state_45487[(4)])));

return statearr_45545;
})();
var inst_45454 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def a ::a)");
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45487__$1,(30),inst_45454);
} else {
if((state_val_45488 === (16))){
var inst_45375 = (state_45487[(10)]);
var inst_45386 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45387 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_45388 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45389 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45390 = cljs.core.cons.call(null,inst_45389,inst_45375);
var inst_45391 = (new cljs.core.List(null,inst_45390,null,(1),null));
var inst_45392 = (new cljs.core.List(null,inst_45388,inst_45391,(2),null));
var inst_45393 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45387,34,inst_45392,null];
var inst_45394 = cljs.core.PersistentHashMap.fromArrays(inst_45386,inst_45393);
var inst_45395 = cljs.test.report.call(null,inst_45394);
var state_45487__$1 = state_45487;
var statearr_45546_45629 = state_45487__$1;
(statearr_45546_45629[(2)] = inst_45395);

(statearr_45546_45629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (30))){
var inst_45459 = (state_45487[(11)]);
var inst_45460 = (state_45487[(12)]);
var inst_45456 = (state_45487[(2)]);
var inst_45457 = cljs.core.second.call(null,inst_45456);
var inst_45458 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));",null,(1),null));
var inst_45459__$1 = (new cljs.core.List(null,inst_45457,inst_45458,(2),null));
var inst_45460__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45459__$1);
var state_45487__$1 = (function (){var statearr_45547 = state_45487;
(statearr_45547[(11)] = inst_45459__$1);

(statearr_45547[(12)] = inst_45460__$1);

return statearr_45547;
})();
if(cljs.core.truth_(inst_45460__$1)){
var statearr_45548_45630 = state_45487__$1;
(statearr_45548_45630[(1)] = (31));

} else {
var statearr_45549_45631 = state_45487__$1;
(statearr_45549_45631[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (10))){
var _ = (function (){var statearr_45550 = state_45487;
(statearr_45550[(4)] = cljs.core.cons.call(null,(13),(state_45487[(4)])));

return statearr_45550;
})();
var inst_45370 = klipse_clj.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45487__$1,(14),inst_45370);
} else {
if((state_val_45488 === (18))){
var _ = (function (){var statearr_45551 = state_45487;
(statearr_45551[(4)] = cljs.core.cons.call(null,(21),(state_45487[(4)])));

return statearr_45551;
})();
var inst_45412 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45487__$1,(22),inst_45412);
} else {
if((state_val_45488 === (8))){
var inst_45333 = (state_45487[(7)]);
var inst_45344 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45345 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_45346 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45347 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45348 = cljs.core.cons.call(null,inst_45347,inst_45333);
var inst_45349 = (new cljs.core.List(null,inst_45348,null,(1),null));
var inst_45350 = (new cljs.core.List(null,inst_45346,inst_45349,(2),null));
var inst_45351 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,inst_45345,34,inst_45350,null];
var inst_45352 = cljs.core.PersistentHashMap.fromArrays(inst_45344,inst_45351);
var inst_45353 = cljs.test.report.call(null,inst_45352);
var state_45487__$1 = state_45487;
var statearr_45552_45632 = state_45487__$1;
(statearr_45552_45632[(2)] = inst_45353);

(statearr_45552_45632[(1)] = (9));


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
}
}
}
}
}
}
}
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_45553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45553[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_45553[(1)] = (1));

return statearr_45553;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_45487){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_45487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e45554){var ex__21902__auto__ = e45554;
var statearr_45555_45633 = state_45487;
(statearr_45555_45633[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_45487[(4)]))){
var statearr_45556_45634 = state_45487;
(statearr_45556_45634[(1)] = cljs.core.first.call(null,(state_45487[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45635 = state_45487;
state_45487 = G__45635;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_45487){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_45487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_45557 = f__22024__auto__.call(null);
(statearr_45557[(6)] = c__22023__auto__);

return statearr_45557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45072","meta45072",-1089339490,null)], null);
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.cljs$lang$type = true);

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test45071");

(klipse_clj.compile_test.t_klipse_clj$compile_test45071.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test45071");
}));

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test45071.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test45071 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test45071(meta45072){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45071(meta45072));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test45071(null));
});

(klipse_clj.compile_test.success.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.success;},new cljs.core.Symbol("klipse-clj.compile-test","success","klipse-clj.compile-test/success",-1132354739,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"success","success",-763789863,null),"test/klipse_clj/compile_test.cljs",17,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.success)?klipse_clj.compile_test.success.cljs$lang$test:null)])));
klipse_clj.compile_test.success2 = (function klipse_clj$compile_test$success2(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.success2.cljs$lang$var);
});
klipse_clj.compile_test.success2.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test45636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test45636 = (function (meta45637){
this.meta45637 = meta45637;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45638,meta45637__$1){
var self__ = this;
var _45638__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45636(meta45637__$1));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45638){
var self__ = this;
var _45638__$1 = this;
return self__.meta45637;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___34935__auto__ = self____$1;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_45687){
var state_val_45688 = (state_45687[(1)]);
if((state_val_45688 === (7))){
var inst_45659 = (state_45687[(7)]);
var inst_45662 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45663 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45664 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45665 = cljs.core.cons.call(null,inst_45664,inst_45659);
var inst_45666 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,47,inst_45663,47,inst_45665,null];
var inst_45667 = cljs.core.PersistentHashMap.fromArrays(inst_45662,inst_45666);
var inst_45668 = cljs.test.report.call(null,inst_45667);
var state_45687__$1 = state_45687;
var statearr_45689_45781 = state_45687__$1;
(statearr_45689_45781[(2)] = inst_45668);

(statearr_45689_45781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (1))){
var state_45687__$1 = state_45687;
var statearr_45690_45782 = state_45687__$1;
(statearr_45690_45782[(2)] = null);

(statearr_45690_45782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (4))){
var inst_45640 = (state_45687[(2)]);
var inst_45641 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45642 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45643 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,47,inst_45642,47,inst_45640,null];
var inst_45644 = cljs.core.PersistentHashMap.fromArrays(inst_45641,inst_45643);
var inst_45645 = cljs.test.report.call(null,inst_45644);
var state_45687__$1 = state_45687;
var statearr_45691_45783 = state_45687__$1;
(statearr_45691_45783[(2)] = inst_45645);

(statearr_45691_45783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (6))){
var inst_45659 = (state_45687[(7)]);
var inst_45660 = (state_45687[(8)]);
var inst_45656 = (state_45687[(2)]);
var inst_45657 = cljs.core.second.call(null,inst_45656);
var inst_45658 = (new cljs.core.List(null,"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n",null,(1),null));
var inst_45659__$1 = (new cljs.core.List(null,inst_45657,inst_45658,(2),null));
var inst_45660__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45659__$1);
var state_45687__$1 = (function (){var statearr_45692 = state_45687;
(statearr_45692[(7)] = inst_45659__$1);

(statearr_45692[(8)] = inst_45660__$1);

return statearr_45692;
})();
if(cljs.core.truth_(inst_45660__$1)){
var statearr_45693_45784 = state_45687__$1;
(statearr_45693_45784[(1)] = (7));

} else {
var statearr_45694_45785 = state_45687__$1;
(statearr_45694_45785[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (3))){
var inst_45684 = (state_45687[(2)]);
var inst_45685 = done.call(null);
var state_45687__$1 = (function (){var statearr_45695 = state_45687;
(statearr_45695[(9)] = inst_45684);

return statearr_45695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45687__$1,inst_45685);
} else {
if((state_val_45688 === (2))){
var _ = (function (){var statearr_45697 = state_45687;
(statearr_45697[(4)] = cljs.core.cons.call(null,(5),(state_45687[(4)])));

return statearr_45697;
})();
var inst_45651 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45652 = [true];
var inst_45653 = cljs.core.PersistentHashMap.fromArrays(inst_45651,inst_45652);
var inst_45654 = klipse_clj.lang.clojure.str_compile.call(null,"(def abb ::a)",inst_45653);
var state_45687__$1 = state_45687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45687__$1,(6),inst_45654);
} else {
if((state_val_45688 === (9))){
var inst_45660 = (state_45687[(8)]);
var inst_45681 = (state_45687[(2)]);
var _ = (function (){var statearr_45698 = state_45687;
(statearr_45698[(4)] = cljs.core.rest.call(null,(state_45687[(4)])));

return statearr_45698;
})();
var state_45687__$1 = (function (){var statearr_45699 = state_45687;
(statearr_45699[(10)] = inst_45681);

return statearr_45699;
})();
var statearr_45700_45786 = state_45687__$1;
(statearr_45700_45786[(2)] = inst_45660);

(statearr_45700_45786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (5))){
var _ = (function (){var statearr_45701 = state_45687;
(statearr_45701[(4)] = cljs.core.rest.call(null,(state_45687[(4)])));

return statearr_45701;
})();
var state_45687__$1 = state_45687;
var ex45696 = (state_45687__$1[(2)]);
var statearr_45702_45787 = state_45687__$1;
(statearr_45702_45787[(5)] = ex45696);


var statearr_45703_45788 = state_45687__$1;
(statearr_45703_45788[(1)] = (4));

(statearr_45703_45788[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45688 === (8))){
var inst_45659 = (state_45687[(7)]);
var inst_45670 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45671 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45672 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45673 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45674 = cljs.core.cons.call(null,inst_45673,inst_45659);
var inst_45675 = (new cljs.core.List(null,inst_45674,null,(1),null));
var inst_45676 = (new cljs.core.List(null,inst_45672,inst_45675,(2),null));
var inst_45677 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,47,inst_45671,47,inst_45676,null];
var inst_45678 = cljs.core.PersistentHashMap.fromArrays(inst_45670,inst_45677);
var inst_45679 = cljs.test.report.call(null,inst_45678);
var state_45687__$1 = state_45687;
var statearr_45704_45789 = state_45687__$1;
(statearr_45704_45789[(2)] = inst_45679);

(statearr_45704_45789[(1)] = (9));


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
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_45705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45705[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_45705[(1)] = (1));

return statearr_45705;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_45687){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_45687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e45706){var ex__21902__auto__ = e45706;
var statearr_45707_45790 = state_45687;
(statearr_45707_45790[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_45687[(4)]))){
var statearr_45708_45791 = state_45687;
(statearr_45708_45791[(1)] = cljs.core.first.call(null,(state_45687[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45792 = state_45687;
state_45687 = G__45792;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_45687){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_45687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_45709 = f__22024__auto__.call(null);
(statearr_45709[(6)] = c__22023__auto__);

return statearr_45709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.apply = (function (self__,args45639){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args45639);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__45710 = args__5217__auto__.slice((0),(20));
G__45710.push(args__5217__auto__.slice((20)));

return G__45710;
})():args__5217__auto__)));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___34935__auto__ = this;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_45758){
var state_val_45759 = (state_45758[(1)]);
if((state_val_45759 === (7))){
var inst_45730 = (state_45758[(7)]);
var inst_45733 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45734 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45735 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45736 = cljs.core.cons.call(null,inst_45735,inst_45730);
var inst_45737 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,47,inst_45734,47,inst_45736,null];
var inst_45738 = cljs.core.PersistentHashMap.fromArrays(inst_45733,inst_45737);
var inst_45739 = cljs.test.report.call(null,inst_45738);
var state_45758__$1 = state_45758;
var statearr_45760_45793 = state_45758__$1;
(statearr_45760_45793[(2)] = inst_45739);

(statearr_45760_45793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (1))){
var state_45758__$1 = state_45758;
var statearr_45761_45794 = state_45758__$1;
(statearr_45761_45794[(2)] = null);

(statearr_45761_45794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (4))){
var inst_45711 = (state_45758[(2)]);
var inst_45712 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45713 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45714 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,47,inst_45713,47,inst_45711,null];
var inst_45715 = cljs.core.PersistentHashMap.fromArrays(inst_45712,inst_45714);
var inst_45716 = cljs.test.report.call(null,inst_45715);
var state_45758__$1 = state_45758;
var statearr_45762_45795 = state_45758__$1;
(statearr_45762_45795[(2)] = inst_45716);

(statearr_45762_45795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (6))){
var inst_45730 = (state_45758[(7)]);
var inst_45731 = (state_45758[(8)]);
var inst_45727 = (state_45758[(2)]);
var inst_45728 = cljs.core.second.call(null,inst_45727);
var inst_45729 = (new cljs.core.List(null,"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n",null,(1),null));
var inst_45730__$1 = (new cljs.core.List(null,inst_45728,inst_45729,(2),null));
var inst_45731__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45730__$1);
var state_45758__$1 = (function (){var statearr_45763 = state_45758;
(statearr_45763[(7)] = inst_45730__$1);

(statearr_45763[(8)] = inst_45731__$1);

return statearr_45763;
})();
if(cljs.core.truth_(inst_45731__$1)){
var statearr_45764_45796 = state_45758__$1;
(statearr_45764_45796[(1)] = (7));

} else {
var statearr_45765_45797 = state_45758__$1;
(statearr_45765_45797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (3))){
var inst_45755 = (state_45758[(2)]);
var inst_45756 = done.call(null);
var state_45758__$1 = (function (){var statearr_45766 = state_45758;
(statearr_45766[(9)] = inst_45755);

return statearr_45766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45758__$1,inst_45756);
} else {
if((state_val_45759 === (2))){
var _ = (function (){var statearr_45768 = state_45758;
(statearr_45768[(4)] = cljs.core.cons.call(null,(5),(state_45758[(4)])));

return statearr_45768;
})();
var inst_45722 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45723 = [true];
var inst_45724 = cljs.core.PersistentHashMap.fromArrays(inst_45722,inst_45723);
var inst_45725 = klipse_clj.lang.clojure.str_compile.call(null,"(def abb ::a)",inst_45724);
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45758__$1,(6),inst_45725);
} else {
if((state_val_45759 === (9))){
var inst_45731 = (state_45758[(8)]);
var inst_45752 = (state_45758[(2)]);
var _ = (function (){var statearr_45769 = state_45758;
(statearr_45769[(4)] = cljs.core.rest.call(null,(state_45758[(4)])));

return statearr_45769;
})();
var state_45758__$1 = (function (){var statearr_45770 = state_45758;
(statearr_45770[(10)] = inst_45752);

return statearr_45770;
})();
var statearr_45771_45798 = state_45758__$1;
(statearr_45771_45798[(2)] = inst_45731);

(statearr_45771_45798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (5))){
var _ = (function (){var statearr_45772 = state_45758;
(statearr_45772[(4)] = cljs.core.rest.call(null,(state_45758[(4)])));

return statearr_45772;
})();
var state_45758__$1 = state_45758;
var ex45767 = (state_45758__$1[(2)]);
var statearr_45773_45799 = state_45758__$1;
(statearr_45773_45799[(5)] = ex45767);


var statearr_45774_45800 = state_45758__$1;
(statearr_45774_45800[(1)] = (4));

(statearr_45774_45800[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (8))){
var inst_45730 = (state_45758[(7)]);
var inst_45741 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45742 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_45743 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45744 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45745 = cljs.core.cons.call(null,inst_45744,inst_45730);
var inst_45746 = (new cljs.core.List(null,inst_45745,null,(1),null));
var inst_45747 = (new cljs.core.List(null,inst_45743,inst_45746,(2),null));
var inst_45748 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,47,inst_45742,47,inst_45747,null];
var inst_45749 = cljs.core.PersistentHashMap.fromArrays(inst_45741,inst_45748);
var inst_45750 = cljs.test.report.call(null,inst_45749);
var state_45758__$1 = state_45758;
var statearr_45775_45801 = state_45758__$1;
(statearr_45775_45801[(2)] = inst_45750);

(statearr_45775_45801[(1)] = (9));


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
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_45776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45776[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_45776[(1)] = (1));

return statearr_45776;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_45758){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_45758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e45777){var ex__21902__auto__ = e45777;
var statearr_45778_45802 = state_45758;
(statearr_45778_45802[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_45758[(4)]))){
var statearr_45779_45803 = state_45758;
(statearr_45779_45803[(1)] = cljs.core.first.call(null,(state_45758[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45804 = state_45758;
state_45758 = G__45804;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_45758){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_45758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_45780 = f__22024__auto__.call(null);
(statearr_45780[(6)] = c__22023__auto__);

return statearr_45780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45637","meta45637",-1339802560,null)], null);
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.cljs$lang$type = true);

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test45636");

(klipse_clj.compile_test.t_klipse_clj$compile_test45636.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test45636");
}));

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test45636.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test45636 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test45636(meta45637){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45636(meta45637));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test45636(null));
});

(klipse_clj.compile_test.success2.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.success2;},new cljs.core.Symbol("klipse-clj.compile-test","success2","klipse-clj.compile-test/success2",147799257,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"success2","success2",375674189,null),"test/klipse_clj/compile_test.cljs",18,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.success2)?klipse_clj.compile_test.success2.cljs$lang$test:null)])));
klipse_clj.compile_test.test_tagged_literals = (function klipse_clj$compile_test$test_tagged_literals(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.test_tagged_literals.cljs$lang$var);
});
klipse_clj.compile_test.test_tagged_literals.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test45805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test45805 = (function (meta45806){
this.meta45806 = meta45806;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45807,meta45806__$1){
var self__ = this;
var _45807__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45805(meta45806__$1));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45807){
var self__ = this;
var _45807__$1 = this;
return self__.meta45806;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___34935__auto__ = self____$1;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_45991){
var state_val_45992 = (state_45991[(1)]);
if((state_val_45992 === (7))){
var inst_45828 = (state_45991[(7)]);
var inst_45831 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45832 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_45833 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45834 = cljs.core.cons.call(null,inst_45833,inst_45828);
var inst_45835 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_45832,56,inst_45834,null];
var inst_45836 = cljs.core.PersistentHashMap.fromArrays(inst_45831,inst_45835);
var inst_45837 = cljs.test.report.call(null,inst_45836);
var state_45991__$1 = state_45991;
var statearr_45993_46316 = state_45991__$1;
(statearr_45993_46316[(2)] = inst_45837);

(statearr_45993_46316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (20))){
var inst_45899 = (state_45991[(2)]);
var inst_45900 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45901 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_45902 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_45901,56,inst_45899,null];
var inst_45903 = cljs.core.PersistentHashMap.fromArrays(inst_45900,inst_45902);
var inst_45904 = cljs.test.report.call(null,inst_45903);
var state_45991__$1 = state_45991;
var statearr_45994_46317 = state_45991__$1;
(statearr_45994_46317[(2)] = inst_45904);

(statearr_45994_46317[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (27))){
var inst_45988 = (state_45991[(2)]);
var inst_45989 = done.call(null);
var state_45991__$1 = (function (){var statearr_45995 = state_45991;
(statearr_45995[(8)] = inst_45988);

return statearr_45995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45991__$1,inst_45989);
} else {
if((state_val_45992 === (1))){
var state_45991__$1 = state_45991;
var statearr_45996_46318 = state_45991__$1;
(statearr_45996_46318[(2)] = null);

(statearr_45996_46318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (24))){
var inst_45918 = (state_45991[(9)]);
var inst_45929 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45930 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_45931 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45932 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45933 = cljs.core.cons.call(null,inst_45932,inst_45918);
var inst_45934 = (new cljs.core.List(null,inst_45933,null,(1),null));
var inst_45935 = (new cljs.core.List(null,inst_45931,inst_45934,(2),null));
var inst_45936 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_45930,56,inst_45935,null];
var inst_45937 = cljs.core.PersistentHashMap.fromArrays(inst_45929,inst_45936);
var inst_45938 = cljs.test.report.call(null,inst_45937);
var state_45991__$1 = state_45991;
var statearr_45997_46319 = state_45991__$1;
(statearr_45997_46319[(2)] = inst_45938);

(statearr_45997_46319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (4))){
var inst_45809 = (state_45991[(2)]);
var inst_45810 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45811 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_45812 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_45811,56,inst_45809,null];
var inst_45813 = cljs.core.PersistentHashMap.fromArrays(inst_45810,inst_45812);
var inst_45814 = cljs.test.report.call(null,inst_45813);
var state_45991__$1 = state_45991;
var statearr_45999_46320 = state_45991__$1;
(statearr_45999_46320[(2)] = inst_45814);

(statearr_45999_46320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (15))){
var inst_45873 = (state_45991[(10)]);
var inst_45876 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45877 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_45878 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45879 = cljs.core.cons.call(null,inst_45878,inst_45873);
var inst_45880 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_45877,56,inst_45879,null];
var inst_45881 = cljs.core.PersistentHashMap.fromArrays(inst_45876,inst_45880);
var inst_45882 = cljs.test.report.call(null,inst_45881);
var state_45991__$1 = state_45991;
var statearr_46000_46321 = state_45991__$1;
(statearr_46000_46321[(2)] = inst_45882);

(statearr_46000_46321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (21))){
var _ = (function (){var statearr_46001 = state_45991;
(statearr_46001[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46001;
})();
var state_45991__$1 = state_45991;
var ex45998 = (state_45991__$1[(2)]);
var statearr_46002_46322 = state_45991__$1;
(statearr_46002_46322[(5)] = ex45998);


var statearr_46003_46323 = state_45991__$1;
(statearr_46003_46323[(1)] = (20));

(statearr_46003_46323[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (31))){
var inst_45963 = (state_45991[(11)]);
var inst_45966 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45967 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_45968 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45969 = cljs.core.cons.call(null,inst_45968,inst_45963);
var inst_45970 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_45967,56,inst_45969,null];
var inst_45971 = cljs.core.PersistentHashMap.fromArrays(inst_45966,inst_45970);
var inst_45972 = cljs.test.report.call(null,inst_45971);
var state_45991__$1 = state_45991;
var statearr_46004_46324 = state_45991__$1;
(statearr_46004_46324[(2)] = inst_45972);

(statearr_46004_46324[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (32))){
var inst_45963 = (state_45991[(11)]);
var inst_45974 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45975 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_45976 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45977 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45978 = cljs.core.cons.call(null,inst_45977,inst_45963);
var inst_45979 = (new cljs.core.List(null,inst_45978,null,(1),null));
var inst_45980 = (new cljs.core.List(null,inst_45976,inst_45979,(2),null));
var inst_45981 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_45975,56,inst_45980,null];
var inst_45982 = cljs.core.PersistentHashMap.fromArrays(inst_45974,inst_45981);
var inst_45983 = cljs.test.report.call(null,inst_45982);
var state_45991__$1 = state_45991;
var statearr_46006_46325 = state_45991__$1;
(statearr_46006_46325[(2)] = inst_45983);

(statearr_46006_46325[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (33))){
var inst_45964 = (state_45991[(12)]);
var inst_45985 = (state_45991[(2)]);
var _ = (function (){var statearr_46007 = state_45991;
(statearr_46007[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46007;
})();
var state_45991__$1 = (function (){var statearr_46008 = state_45991;
(statearr_46008[(13)] = inst_45985);

return statearr_46008;
})();
var statearr_46009_46326 = state_45991__$1;
(statearr_46009_46326[(2)] = inst_45964);

(statearr_46009_46326[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (13))){
var _ = (function (){var statearr_46011 = state_45991;
(statearr_46011[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46011;
})();
var state_45991__$1 = state_45991;
var ex46005 = (state_45991__$1[(2)]);
var statearr_46012_46327 = state_45991__$1;
(statearr_46012_46327[(5)] = ex46005);


var statearr_46013_46328 = state_45991__$1;
(statearr_46013_46328[(1)] = (12));

(statearr_46013_46328[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (22))){
var inst_45918 = (state_45991[(9)]);
var inst_45919 = (state_45991[(14)]);
var inst_45915 = (state_45991[(2)]);
var inst_45916 = cljs.core.second.call(null,inst_45915);
var inst_45917 = (new cljs.core.List(null,"cljs.user.b = new Date(1535760000000);\n",null,(1),null));
var inst_45918__$1 = (new cljs.core.List(null,inst_45916,inst_45917,(2),null));
var inst_45919__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45918__$1);
var state_45991__$1 = (function (){var statearr_46014 = state_45991;
(statearr_46014[(9)] = inst_45918__$1);

(statearr_46014[(14)] = inst_45919__$1);

return statearr_46014;
})();
if(cljs.core.truth_(inst_45919__$1)){
var statearr_46015_46329 = state_45991__$1;
(statearr_46015_46329[(1)] = (23));

} else {
var statearr_46016_46330 = state_45991__$1;
(statearr_46016_46330[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (29))){
var _ = (function (){var statearr_46017 = state_45991;
(statearr_46017[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46017;
})();
var state_45991__$1 = state_45991;
var ex46010 = (state_45991__$1[(2)]);
var statearr_46018_46331 = state_45991__$1;
(statearr_46018_46331[(5)] = ex46010);


var statearr_46019_46332 = state_45991__$1;
(statearr_46019_46332[(1)] = (28));

(statearr_46019_46332[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (6))){
var inst_45828 = (state_45991[(7)]);
var inst_45829 = (state_45991[(15)]);
var inst_45825 = (state_45991[(2)]);
var inst_45826 = cljs.core.second.call(null,inst_45825);
var inst_45827 = (new cljs.core.List(null,"[];",null,(1),null));
var inst_45828__$1 = (new cljs.core.List(null,inst_45826,inst_45827,(2),null));
var inst_45829__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45828__$1);
var state_45991__$1 = (function (){var statearr_46020 = state_45991;
(statearr_46020[(7)] = inst_45828__$1);

(statearr_46020[(15)] = inst_45829__$1);

return statearr_46020;
})();
if(cljs.core.truth_(inst_45829__$1)){
var statearr_46021_46333 = state_45991__$1;
(statearr_46021_46333[(1)] = (7));

} else {
var statearr_46022_46334 = state_45991__$1;
(statearr_46022_46334[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (28))){
var inst_45944 = (state_45991[(2)]);
var inst_45945 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45946 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_45947 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_45946,56,inst_45944,null];
var inst_45948 = cljs.core.PersistentHashMap.fromArrays(inst_45945,inst_45947);
var inst_45949 = cljs.test.report.call(null,inst_45948);
var state_45991__$1 = state_45991;
var statearr_46023_46335 = state_45991__$1;
(statearr_46023_46335[(2)] = inst_45949);

(statearr_46023_46335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (25))){
var inst_45919 = (state_45991[(14)]);
var inst_45940 = (state_45991[(2)]);
var _ = (function (){var statearr_46024 = state_45991;
(statearr_46024[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46024;
})();
var state_45991__$1 = (function (){var statearr_46025 = state_45991;
(statearr_46025[(16)] = inst_45940);

return statearr_46025;
})();
var statearr_46026_46336 = state_45991__$1;
(statearr_46026_46336[(2)] = inst_45919);

(statearr_46026_46336[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (17))){
var inst_45874 = (state_45991[(17)]);
var inst_45895 = (state_45991[(2)]);
var _ = (function (){var statearr_46027 = state_45991;
(statearr_46027[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46027;
})();
var state_45991__$1 = (function (){var statearr_46028 = state_45991;
(statearr_46028[(18)] = inst_45895);

return statearr_46028;
})();
var statearr_46029_46337 = state_45991__$1;
(statearr_46029_46337[(2)] = inst_45874);

(statearr_46029_46337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (3))){
var inst_45853 = (state_45991[(2)]);
var state_45991__$1 = (function (){var statearr_46030 = state_45991;
(statearr_46030[(19)] = inst_45853);

return statearr_46030;
})();
var statearr_46031_46338 = state_45991__$1;
(statearr_46031_46338[(2)] = null);

(statearr_46031_46338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (12))){
var inst_45854 = (state_45991[(2)]);
var inst_45855 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45856 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_45857 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_45856,56,inst_45854,null];
var inst_45858 = cljs.core.PersistentHashMap.fromArrays(inst_45855,inst_45857);
var inst_45859 = cljs.test.report.call(null,inst_45858);
var state_45991__$1 = state_45991;
var statearr_46032_46339 = state_45991__$1;
(statearr_46032_46339[(2)] = inst_45859);

(statearr_46032_46339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (2))){
var _ = (function (){var statearr_46033 = state_45991;
(statearr_46033[(4)] = cljs.core.cons.call(null,(5),(state_45991[(4)])));

return statearr_46033;
})();
var inst_45820 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45821 = [true];
var inst_45822 = cljs.core.PersistentHashMap.fromArrays(inst_45820,inst_45821);
var inst_45823 = klipse_clj.lang.clojure.str_compile.call(null,"#js []",inst_45822);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45991__$1,(6),inst_45823);
} else {
if((state_val_45992 === (23))){
var inst_45918 = (state_45991[(9)]);
var inst_45921 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45922 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_45923 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45924 = cljs.core.cons.call(null,inst_45923,inst_45918);
var inst_45925 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_45922,56,inst_45924,null];
var inst_45926 = cljs.core.PersistentHashMap.fromArrays(inst_45921,inst_45925);
var inst_45927 = cljs.test.report.call(null,inst_45926);
var state_45991__$1 = state_45991;
var statearr_46034_46340 = state_45991__$1;
(statearr_46034_46340[(2)] = inst_45927);

(statearr_46034_46340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (19))){
var inst_45943 = (state_45991[(2)]);
var state_45991__$1 = (function (){var statearr_46035 = state_45991;
(statearr_46035[(20)] = inst_45943);

return statearr_46035;
})();
var statearr_46036_46341 = state_45991__$1;
(statearr_46036_46341[(2)] = null);

(statearr_46036_46341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (11))){
var inst_45898 = (state_45991[(2)]);
var state_45991__$1 = (function (){var statearr_46038 = state_45991;
(statearr_46038[(21)] = inst_45898);

return statearr_46038;
})();
var statearr_46039_46342 = state_45991__$1;
(statearr_46039_46342[(2)] = null);

(statearr_46039_46342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (9))){
var inst_45829 = (state_45991[(15)]);
var inst_45850 = (state_45991[(2)]);
var _ = (function (){var statearr_46040 = state_45991;
(statearr_46040[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46040;
})();
var state_45991__$1 = (function (){var statearr_46041 = state_45991;
(statearr_46041[(22)] = inst_45850);

return statearr_46041;
})();
var statearr_46042_46343 = state_45991__$1;
(statearr_46042_46343[(2)] = inst_45829);

(statearr_46042_46343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (5))){
var _ = (function (){var statearr_46043 = state_45991;
(statearr_46043[(4)] = cljs.core.rest.call(null,(state_45991[(4)])));

return statearr_46043;
})();
var state_45991__$1 = state_45991;
var ex46037 = (state_45991__$1[(2)]);
var statearr_46044_46344 = state_45991__$1;
(statearr_46044_46344[(5)] = ex46037);


var statearr_46045_46345 = state_45991__$1;
(statearr_46045_46345[(1)] = (4));

(statearr_46045_46345[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (14))){
var inst_45873 = (state_45991[(10)]);
var inst_45874 = (state_45991[(17)]);
var inst_45870 = (state_45991[(2)]);
var inst_45871 = cljs.core.second.call(null,inst_45870);
var inst_45872 = (new cljs.core.List(null,"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n",null,(1),null));
var inst_45873__$1 = (new cljs.core.List(null,inst_45871,inst_45872,(2),null));
var inst_45874__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45873__$1);
var state_45991__$1 = (function (){var statearr_46046 = state_45991;
(statearr_46046[(10)] = inst_45873__$1);

(statearr_46046[(17)] = inst_45874__$1);

return statearr_46046;
})();
if(cljs.core.truth_(inst_45874__$1)){
var statearr_46047_46346 = state_45991__$1;
(statearr_46047_46346[(1)] = (15));

} else {
var statearr_46048_46347 = state_45991__$1;
(statearr_46048_46347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (26))){
var _ = (function (){var statearr_46049 = state_45991;
(statearr_46049[(4)] = cljs.core.cons.call(null,(29),(state_45991[(4)])));

return statearr_46049;
})();
var inst_45955 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45956 = [true];
var inst_45957 = cljs.core.PersistentHashMap.fromArrays(inst_45955,inst_45956);
var inst_45958 = klipse_clj.lang.clojure.str_compile.call(null,"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",inst_45957);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45991__$1,(30),inst_45958);
} else {
if((state_val_45992 === (16))){
var inst_45873 = (state_45991[(10)]);
var inst_45884 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45885 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_45886 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45887 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45888 = cljs.core.cons.call(null,inst_45887,inst_45873);
var inst_45889 = (new cljs.core.List(null,inst_45888,null,(1),null));
var inst_45890 = (new cljs.core.List(null,inst_45886,inst_45889,(2),null));
var inst_45891 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_45885,56,inst_45890,null];
var inst_45892 = cljs.core.PersistentHashMap.fromArrays(inst_45884,inst_45891);
var inst_45893 = cljs.test.report.call(null,inst_45892);
var state_45991__$1 = state_45991;
var statearr_46050_46348 = state_45991__$1;
(statearr_46050_46348[(2)] = inst_45893);

(statearr_46050_46348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (30))){
var inst_45963 = (state_45991[(11)]);
var inst_45964 = (state_45991[(12)]);
var inst_45960 = (state_45991[(2)]);
var inst_45961 = cljs.core.second.call(null,inst_45960);
var inst_45962 = (new cljs.core.List(null,"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n",null,(1),null));
var inst_45963__$1 = (new cljs.core.List(null,inst_45961,inst_45962,(2),null));
var inst_45964__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_45963__$1);
var state_45991__$1 = (function (){var statearr_46051 = state_45991;
(statearr_46051[(11)] = inst_45963__$1);

(statearr_46051[(12)] = inst_45964__$1);

return statearr_46051;
})();
if(cljs.core.truth_(inst_45964__$1)){
var statearr_46052_46349 = state_45991__$1;
(statearr_46052_46349[(1)] = (31));

} else {
var statearr_46053_46350 = state_45991__$1;
(statearr_46053_46350[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (10))){
var _ = (function (){var statearr_46054 = state_45991;
(statearr_46054[(4)] = cljs.core.cons.call(null,(13),(state_45991[(4)])));

return statearr_46054;
})();
var inst_45865 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45866 = [true];
var inst_45867 = cljs.core.PersistentHashMap.fromArrays(inst_45865,inst_45866);
var inst_45868 = klipse_clj.lang.clojure.str_compile.call(null,"(def c #queue [1])",inst_45867);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45991__$1,(14),inst_45868);
} else {
if((state_val_45992 === (18))){
var _ = (function (){var statearr_46055 = state_45991;
(statearr_46055[(4)] = cljs.core.cons.call(null,(21),(state_45991[(4)])));

return statearr_46055;
})();
var inst_45910 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_45911 = [true];
var inst_45912 = cljs.core.PersistentHashMap.fromArrays(inst_45910,inst_45911);
var inst_45913 = klipse_clj.lang.clojure.str_compile.call(null,"(def b #inst \"2018-09-01\")",inst_45912);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45991__$1,(22),inst_45913);
} else {
if((state_val_45992 === (8))){
var inst_45828 = (state_45991[(7)]);
var inst_45839 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_45840 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_45841 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_45842 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_45843 = cljs.core.cons.call(null,inst_45842,inst_45828);
var inst_45844 = (new cljs.core.List(null,inst_45843,null,(1),null));
var inst_45845 = (new cljs.core.List(null,inst_45841,inst_45844,(2),null));
var inst_45846 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_45840,56,inst_45845,null];
var inst_45847 = cljs.core.PersistentHashMap.fromArrays(inst_45839,inst_45846);
var inst_45848 = cljs.test.report.call(null,inst_45847);
var state_45991__$1 = state_45991;
var statearr_46056_46351 = state_45991__$1;
(statearr_46056_46351[(2)] = inst_45848);

(statearr_46056_46351[(1)] = (9));


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
}
}
}
}
}
}
}
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_46057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46057[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_46057[(1)] = (1));

return statearr_46057;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_45991){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_45991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e46058){var ex__21902__auto__ = e46058;
var statearr_46059_46352 = state_45991;
(statearr_46059_46352[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_45991[(4)]))){
var statearr_46060_46353 = state_45991;
(statearr_46060_46353[(1)] = cljs.core.first.call(null,(state_45991[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46354 = state_45991;
state_45991 = G__46354;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_45991){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_45991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_46061 = f__22024__auto__.call(null);
(statearr_46061[(6)] = c__22023__auto__);

return statearr_46061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.apply = (function (self__,args45808){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args45808);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__46062 = args__5217__auto__.slice((0),(20));
G__46062.push(args__5217__auto__.slice((20)));

return G__46062;
})():args__5217__auto__)));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___34935__auto__ = this;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_46245){
var state_val_46246 = (state_46245[(1)]);
if((state_val_46246 === (7))){
var inst_46082 = (state_46245[(7)]);
var inst_46085 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46086 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_46087 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46088 = cljs.core.cons.call(null,inst_46087,inst_46082);
var inst_46089 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_46086,56,inst_46088,null];
var inst_46090 = cljs.core.PersistentHashMap.fromArrays(inst_46085,inst_46089);
var inst_46091 = cljs.test.report.call(null,inst_46090);
var state_46245__$1 = state_46245;
var statearr_46247_46355 = state_46245__$1;
(statearr_46247_46355[(2)] = inst_46091);

(statearr_46247_46355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (20))){
var inst_46153 = (state_46245[(2)]);
var inst_46154 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46155 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_46156 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_46155,56,inst_46153,null];
var inst_46157 = cljs.core.PersistentHashMap.fromArrays(inst_46154,inst_46156);
var inst_46158 = cljs.test.report.call(null,inst_46157);
var state_46245__$1 = state_46245;
var statearr_46248_46356 = state_46245__$1;
(statearr_46248_46356[(2)] = inst_46158);

(statearr_46248_46356[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (27))){
var inst_46242 = (state_46245[(2)]);
var inst_46243 = done.call(null);
var state_46245__$1 = (function (){var statearr_46249 = state_46245;
(statearr_46249[(8)] = inst_46242);

return statearr_46249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46245__$1,inst_46243);
} else {
if((state_val_46246 === (1))){
var state_46245__$1 = state_46245;
var statearr_46250_46357 = state_46245__$1;
(statearr_46250_46357[(2)] = null);

(statearr_46250_46357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (24))){
var inst_46172 = (state_46245[(9)]);
var inst_46183 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46184 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_46185 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46186 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46187 = cljs.core.cons.call(null,inst_46186,inst_46172);
var inst_46188 = (new cljs.core.List(null,inst_46187,null,(1),null));
var inst_46189 = (new cljs.core.List(null,inst_46185,inst_46188,(2),null));
var inst_46190 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_46184,56,inst_46189,null];
var inst_46191 = cljs.core.PersistentHashMap.fromArrays(inst_46183,inst_46190);
var inst_46192 = cljs.test.report.call(null,inst_46191);
var state_46245__$1 = state_46245;
var statearr_46251_46358 = state_46245__$1;
(statearr_46251_46358[(2)] = inst_46192);

(statearr_46251_46358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (4))){
var inst_46063 = (state_46245[(2)]);
var inst_46064 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46065 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_46066 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_46065,56,inst_46063,null];
var inst_46067 = cljs.core.PersistentHashMap.fromArrays(inst_46064,inst_46066);
var inst_46068 = cljs.test.report.call(null,inst_46067);
var state_46245__$1 = state_46245;
var statearr_46253_46359 = state_46245__$1;
(statearr_46253_46359[(2)] = inst_46068);

(statearr_46253_46359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (15))){
var inst_46127 = (state_46245[(10)]);
var inst_46130 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46131 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_46132 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46133 = cljs.core.cons.call(null,inst_46132,inst_46127);
var inst_46134 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_46131,56,inst_46133,null];
var inst_46135 = cljs.core.PersistentHashMap.fromArrays(inst_46130,inst_46134);
var inst_46136 = cljs.test.report.call(null,inst_46135);
var state_46245__$1 = state_46245;
var statearr_46254_46360 = state_46245__$1;
(statearr_46254_46360[(2)] = inst_46136);

(statearr_46254_46360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (21))){
var _ = (function (){var statearr_46255 = state_46245;
(statearr_46255[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46255;
})();
var state_46245__$1 = state_46245;
var ex46252 = (state_46245__$1[(2)]);
var statearr_46256_46361 = state_46245__$1;
(statearr_46256_46361[(5)] = ex46252);


var statearr_46257_46362 = state_46245__$1;
(statearr_46257_46362[(1)] = (20));

(statearr_46257_46362[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (31))){
var inst_46217 = (state_46245[(11)]);
var inst_46220 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46221 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_46222 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46223 = cljs.core.cons.call(null,inst_46222,inst_46217);
var inst_46224 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_46221,56,inst_46223,null];
var inst_46225 = cljs.core.PersistentHashMap.fromArrays(inst_46220,inst_46224);
var inst_46226 = cljs.test.report.call(null,inst_46225);
var state_46245__$1 = state_46245;
var statearr_46258_46363 = state_46245__$1;
(statearr_46258_46363[(2)] = inst_46226);

(statearr_46258_46363[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (32))){
var inst_46217 = (state_46245[(11)]);
var inst_46228 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46229 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_46230 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46231 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46232 = cljs.core.cons.call(null,inst_46231,inst_46217);
var inst_46233 = (new cljs.core.List(null,inst_46232,null,(1),null));
var inst_46234 = (new cljs.core.List(null,inst_46230,inst_46233,(2),null));
var inst_46235 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_46229,56,inst_46234,null];
var inst_46236 = cljs.core.PersistentHashMap.fromArrays(inst_46228,inst_46235);
var inst_46237 = cljs.test.report.call(null,inst_46236);
var state_46245__$1 = state_46245;
var statearr_46260_46364 = state_46245__$1;
(statearr_46260_46364[(2)] = inst_46237);

(statearr_46260_46364[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (33))){
var inst_46218 = (state_46245[(12)]);
var inst_46239 = (state_46245[(2)]);
var _ = (function (){var statearr_46261 = state_46245;
(statearr_46261[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46261;
})();
var state_46245__$1 = (function (){var statearr_46262 = state_46245;
(statearr_46262[(13)] = inst_46239);

return statearr_46262;
})();
var statearr_46263_46365 = state_46245__$1;
(statearr_46263_46365[(2)] = inst_46218);

(statearr_46263_46365[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (13))){
var _ = (function (){var statearr_46265 = state_46245;
(statearr_46265[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46265;
})();
var state_46245__$1 = state_46245;
var ex46259 = (state_46245__$1[(2)]);
var statearr_46266_46366 = state_46245__$1;
(statearr_46266_46366[(5)] = ex46259);


var statearr_46267_46367 = state_46245__$1;
(statearr_46267_46367[(1)] = (12));

(statearr_46267_46367[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (22))){
var inst_46172 = (state_46245[(9)]);
var inst_46173 = (state_46245[(14)]);
var inst_46169 = (state_46245[(2)]);
var inst_46170 = cljs.core.second.call(null,inst_46169);
var inst_46171 = (new cljs.core.List(null,"cljs.user.b = new Date(1535760000000);\n",null,(1),null));
var inst_46172__$1 = (new cljs.core.List(null,inst_46170,inst_46171,(2),null));
var inst_46173__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46172__$1);
var state_46245__$1 = (function (){var statearr_46268 = state_46245;
(statearr_46268[(9)] = inst_46172__$1);

(statearr_46268[(14)] = inst_46173__$1);

return statearr_46268;
})();
if(cljs.core.truth_(inst_46173__$1)){
var statearr_46269_46368 = state_46245__$1;
(statearr_46269_46368[(1)] = (23));

} else {
var statearr_46270_46369 = state_46245__$1;
(statearr_46270_46369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (29))){
var _ = (function (){var statearr_46271 = state_46245;
(statearr_46271[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46271;
})();
var state_46245__$1 = state_46245;
var ex46264 = (state_46245__$1[(2)]);
var statearr_46272_46370 = state_46245__$1;
(statearr_46272_46370[(5)] = ex46264);


var statearr_46273_46371 = state_46245__$1;
(statearr_46273_46371[(1)] = (28));

(statearr_46273_46371[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (6))){
var inst_46082 = (state_46245[(7)]);
var inst_46083 = (state_46245[(15)]);
var inst_46079 = (state_46245[(2)]);
var inst_46080 = cljs.core.second.call(null,inst_46079);
var inst_46081 = (new cljs.core.List(null,"[];",null,(1),null));
var inst_46082__$1 = (new cljs.core.List(null,inst_46080,inst_46081,(2),null));
var inst_46083__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46082__$1);
var state_46245__$1 = (function (){var statearr_46274 = state_46245;
(statearr_46274[(7)] = inst_46082__$1);

(statearr_46274[(15)] = inst_46083__$1);

return statearr_46274;
})();
if(cljs.core.truth_(inst_46083__$1)){
var statearr_46275_46372 = state_46245__$1;
(statearr_46275_46372[(1)] = (7));

} else {
var statearr_46276_46373 = state_46245__$1;
(statearr_46276_46373[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (28))){
var inst_46198 = (state_46245[(2)]);
var inst_46199 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46200 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_46201 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_46200,56,inst_46198,null];
var inst_46202 = cljs.core.PersistentHashMap.fromArrays(inst_46199,inst_46201);
var inst_46203 = cljs.test.report.call(null,inst_46202);
var state_46245__$1 = state_46245;
var statearr_46277_46374 = state_46245__$1;
(statearr_46277_46374[(2)] = inst_46203);

(statearr_46277_46374[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (25))){
var inst_46173 = (state_46245[(14)]);
var inst_46194 = (state_46245[(2)]);
var _ = (function (){var statearr_46278 = state_46245;
(statearr_46278[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46278;
})();
var state_46245__$1 = (function (){var statearr_46279 = state_46245;
(statearr_46279[(16)] = inst_46194);

return statearr_46279;
})();
var statearr_46280_46375 = state_46245__$1;
(statearr_46280_46375[(2)] = inst_46173);

(statearr_46280_46375[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (17))){
var inst_46128 = (state_46245[(17)]);
var inst_46149 = (state_46245[(2)]);
var _ = (function (){var statearr_46281 = state_46245;
(statearr_46281[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46281;
})();
var state_46245__$1 = (function (){var statearr_46282 = state_46245;
(statearr_46282[(18)] = inst_46149);

return statearr_46282;
})();
var statearr_46283_46376 = state_46245__$1;
(statearr_46283_46376[(2)] = inst_46128);

(statearr_46283_46376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (3))){
var inst_46107 = (state_46245[(2)]);
var state_46245__$1 = (function (){var statearr_46284 = state_46245;
(statearr_46284[(19)] = inst_46107);

return statearr_46284;
})();
var statearr_46285_46377 = state_46245__$1;
(statearr_46285_46377[(2)] = null);

(statearr_46285_46377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (12))){
var inst_46108 = (state_46245[(2)]);
var inst_46109 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46110 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_46111 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),9,56,inst_46110,56,inst_46108,null];
var inst_46112 = cljs.core.PersistentHashMap.fromArrays(inst_46109,inst_46111);
var inst_46113 = cljs.test.report.call(null,inst_46112);
var state_46245__$1 = state_46245;
var statearr_46286_46378 = state_46245__$1;
(statearr_46286_46378[(2)] = inst_46113);

(statearr_46286_46378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (2))){
var _ = (function (){var statearr_46287 = state_46245;
(statearr_46287[(4)] = cljs.core.cons.call(null,(5),(state_46245[(4)])));

return statearr_46287;
})();
var inst_46074 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_46075 = [true];
var inst_46076 = cljs.core.PersistentHashMap.fromArrays(inst_46074,inst_46075);
var inst_46077 = klipse_clj.lang.clojure.str_compile.call(null,"#js []",inst_46076);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46245__$1,(6),inst_46077);
} else {
if((state_val_46246 === (23))){
var inst_46172 = (state_46245[(9)]);
var inst_46175 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46176 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_46177 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46178 = cljs.core.cons.call(null,inst_46177,inst_46172);
var inst_46179 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),9,56,inst_46176,56,inst_46178,null];
var inst_46180 = cljs.core.PersistentHashMap.fromArrays(inst_46175,inst_46179);
var inst_46181 = cljs.test.report.call(null,inst_46180);
var state_46245__$1 = state_46245;
var statearr_46288_46379 = state_46245__$1;
(statearr_46288_46379[(2)] = inst_46181);

(statearr_46288_46379[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (19))){
var inst_46197 = (state_46245[(2)]);
var state_46245__$1 = (function (){var statearr_46289 = state_46245;
(statearr_46289[(20)] = inst_46197);

return statearr_46289;
})();
var statearr_46290_46380 = state_46245__$1;
(statearr_46290_46380[(2)] = null);

(statearr_46290_46380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (11))){
var inst_46152 = (state_46245[(2)]);
var state_46245__$1 = (function (){var statearr_46292 = state_46245;
(statearr_46292[(21)] = inst_46152);

return statearr_46292;
})();
var statearr_46293_46381 = state_46245__$1;
(statearr_46293_46381[(2)] = null);

(statearr_46293_46381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (9))){
var inst_46083 = (state_46245[(15)]);
var inst_46104 = (state_46245[(2)]);
var _ = (function (){var statearr_46294 = state_46245;
(statearr_46294[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46294;
})();
var state_46245__$1 = (function (){var statearr_46295 = state_46245;
(statearr_46295[(22)] = inst_46104);

return statearr_46295;
})();
var statearr_46296_46382 = state_46245__$1;
(statearr_46296_46382[(2)] = inst_46083);

(statearr_46296_46382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (5))){
var _ = (function (){var statearr_46297 = state_46245;
(statearr_46297[(4)] = cljs.core.rest.call(null,(state_46245[(4)])));

return statearr_46297;
})();
var state_46245__$1 = state_46245;
var ex46291 = (state_46245__$1[(2)]);
var statearr_46298_46383 = state_46245__$1;
(statearr_46298_46383[(5)] = ex46291);


var statearr_46299_46384 = state_46245__$1;
(statearr_46299_46384[(1)] = (4));

(statearr_46299_46384[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (14))){
var inst_46127 = (state_46245[(10)]);
var inst_46128 = (state_46245[(17)]);
var inst_46124 = (state_46245[(2)]);
var inst_46125 = cljs.core.second.call(null,inst_46124);
var inst_46126 = (new cljs.core.List(null,"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n",null,(1),null));
var inst_46127__$1 = (new cljs.core.List(null,inst_46125,inst_46126,(2),null));
var inst_46128__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46127__$1);
var state_46245__$1 = (function (){var statearr_46300 = state_46245;
(statearr_46300[(10)] = inst_46127__$1);

(statearr_46300[(17)] = inst_46128__$1);

return statearr_46300;
})();
if(cljs.core.truth_(inst_46128__$1)){
var statearr_46301_46385 = state_46245__$1;
(statearr_46301_46385[(1)] = (15));

} else {
var statearr_46302_46386 = state_46245__$1;
(statearr_46302_46386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (26))){
var _ = (function (){var statearr_46303 = state_46245;
(statearr_46303[(4)] = cljs.core.cons.call(null,(29),(state_46245[(4)])));

return statearr_46303;
})();
var inst_46209 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_46210 = [true];
var inst_46211 = cljs.core.PersistentHashMap.fromArrays(inst_46209,inst_46210);
var inst_46212 = klipse_clj.lang.clojure.str_compile.call(null,"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",inst_46211);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46245__$1,(30),inst_46212);
} else {
if((state_val_46246 === (16))){
var inst_46127 = (state_46245[(10)]);
var inst_46138 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46139 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_46140 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46141 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46142 = cljs.core.cons.call(null,inst_46141,inst_46127);
var inst_46143 = (new cljs.core.List(null,inst_46142,null,(1),null));
var inst_46144 = (new cljs.core.List(null,inst_46140,inst_46143,(2),null));
var inst_46145 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_46139,56,inst_46144,null];
var inst_46146 = cljs.core.PersistentHashMap.fromArrays(inst_46138,inst_46145);
var inst_46147 = cljs.test.report.call(null,inst_46146);
var state_46245__$1 = state_46245;
var statearr_46304_46387 = state_46245__$1;
(statearr_46304_46387[(2)] = inst_46147);

(statearr_46304_46387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (30))){
var inst_46217 = (state_46245[(11)]);
var inst_46218 = (state_46245[(12)]);
var inst_46214 = (state_46245[(2)]);
var inst_46215 = cljs.core.second.call(null,inst_46214);
var inst_46216 = (new cljs.core.List(null,"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n",null,(1),null));
var inst_46217__$1 = (new cljs.core.List(null,inst_46215,inst_46216,(2),null));
var inst_46218__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46217__$1);
var state_46245__$1 = (function (){var statearr_46305 = state_46245;
(statearr_46305[(11)] = inst_46217__$1);

(statearr_46305[(12)] = inst_46218__$1);

return statearr_46305;
})();
if(cljs.core.truth_(inst_46218__$1)){
var statearr_46306_46388 = state_46245__$1;
(statearr_46306_46388[(1)] = (31));

} else {
var statearr_46307_46389 = state_46245__$1;
(statearr_46307_46389[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46246 === (10))){
var _ = (function (){var statearr_46308 = state_46245;
(statearr_46308[(4)] = cljs.core.cons.call(null,(13),(state_46245[(4)])));

return statearr_46308;
})();
var inst_46119 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_46120 = [true];
var inst_46121 = cljs.core.PersistentHashMap.fromArrays(inst_46119,inst_46120);
var inst_46122 = klipse_clj.lang.clojure.str_compile.call(null,"(def c #queue [1])",inst_46121);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46245__$1,(14),inst_46122);
} else {
if((state_val_46246 === (18))){
var _ = (function (){var statearr_46309 = state_46245;
(statearr_46309[(4)] = cljs.core.cons.call(null,(21),(state_46245[(4)])));

return statearr_46309;
})();
var inst_46164 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_46165 = [true];
var inst_46166 = cljs.core.PersistentHashMap.fromArrays(inst_46164,inst_46165);
var inst_46167 = klipse_clj.lang.clojure.str_compile.call(null,"(def b #inst \"2018-09-01\")",inst_46166);
var state_46245__$1 = state_46245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46245__$1,(22),inst_46167);
} else {
if((state_val_46246 === (8))){
var inst_46082 = (state_46245[(7)]);
var inst_46093 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46094 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_46095 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46096 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46097 = cljs.core.cons.call(null,inst_46096,inst_46082);
var inst_46098 = (new cljs.core.List(null,inst_46097,null,(1),null));
var inst_46099 = (new cljs.core.List(null,inst_46095,inst_46098,(2),null));
var inst_46100 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),9,56,inst_46094,56,inst_46099,null];
var inst_46101 = cljs.core.PersistentHashMap.fromArrays(inst_46093,inst_46100);
var inst_46102 = cljs.test.report.call(null,inst_46101);
var state_46245__$1 = state_46245;
var statearr_46310_46390 = state_46245__$1;
(statearr_46310_46390[(2)] = inst_46102);

(statearr_46310_46390[(1)] = (9));


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
}
}
}
}
}
}
}
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_46311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46311[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_46311[(1)] = (1));

return statearr_46311;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_46245){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_46245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e46312){var ex__21902__auto__ = e46312;
var statearr_46313_46391 = state_46245;
(statearr_46313_46391[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_46245[(4)]))){
var statearr_46314_46392 = state_46245;
(statearr_46314_46392[(1)] = cljs.core.first.call(null,(state_46245[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46393 = state_46245;
state_46245 = G__46393;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_46245){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_46245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_46315 = f__22024__auto__.call(null);
(statearr_46315[(6)] = c__22023__auto__);

return statearr_46315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45806","meta45806",1648965568,null)], null);
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.cljs$lang$type = true);

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test45805");

(klipse_clj.compile_test.t_klipse_clj$compile_test45805.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test45805");
}));

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test45805.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test45805 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test45805(meta45806){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test45805(meta45806));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test45805(null));
});

(klipse_clj.compile_test.test_tagged_literals.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.test_tagged_literals;},new cljs.core.Symbol("klipse-clj.compile-test","test-tagged-literals","klipse-clj.compile-test/test-tagged-literals",484248384,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"test-tagged-literals","test-tagged-literals",800337388,null),"test/klipse_clj/compile_test.cljs",30,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.test_tagged_literals)?klipse_clj.compile_test.test_tagged_literals.cljs$lang$test:null)])));
klipse_clj.compile_test.static_fn = (function klipse_clj$compile_test$static_fn(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.static_fn.cljs$lang$var);
});
klipse_clj.compile_test.static_fn.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test46394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test46394 = (function (meta46395){
this.meta46395 = meta46395;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46396,meta46395__$1){
var self__ = this;
var _46396__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test46394(meta46395__$1));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46396){
var self__ = this;
var _46396__$1 = this;
return self__.meta46395;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___34935__auto__ = self____$1;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_46445){
var state_val_46446 = (state_46445[(1)]);
if((state_val_46446 === (7))){
var inst_46417 = (state_46445[(7)]);
var inst_46420 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46421 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46422 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46423 = cljs.core.cons.call(null,inst_46422,inst_46417);
var inst_46424 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"pass","pass",1574159993),18,67,inst_46421,67,inst_46423,null];
var inst_46425 = cljs.core.PersistentHashMap.fromArrays(inst_46420,inst_46424);
var inst_46426 = cljs.test.report.call(null,inst_46425);
var state_46445__$1 = state_46445;
var statearr_46447_46539 = state_46445__$1;
(statearr_46447_46539[(2)] = inst_46426);

(statearr_46447_46539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (1))){
var state_46445__$1 = state_46445;
var statearr_46448_46540 = state_46445__$1;
(statearr_46448_46540[(2)] = null);

(statearr_46448_46540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (4))){
var inst_46398 = (state_46445[(2)]);
var inst_46399 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46400 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46401 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"error","error",-978969032),18,67,inst_46400,67,inst_46398,null];
var inst_46402 = cljs.core.PersistentHashMap.fromArrays(inst_46399,inst_46401);
var inst_46403 = cljs.test.report.call(null,inst_46402);
var state_46445__$1 = state_46445;
var statearr_46449_46541 = state_46445__$1;
(statearr_46449_46541[(2)] = inst_46403);

(statearr_46449_46541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (6))){
var inst_46417 = (state_46445[(7)]);
var inst_46418 = (state_46445[(8)]);
var inst_46414 = (state_46445[(2)]);
var inst_46415 = cljs.core.second.call(null,inst_46414);
var inst_46416 = (new cljs.core.List(null,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));",null,(1),null));
var inst_46417__$1 = (new cljs.core.List(null,inst_46415,inst_46416,(2),null));
var inst_46418__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46417__$1);
var state_46445__$1 = (function (){var statearr_46450 = state_46445;
(statearr_46450[(7)] = inst_46417__$1);

(statearr_46450[(8)] = inst_46418__$1);

return statearr_46450;
})();
if(cljs.core.truth_(inst_46418__$1)){
var statearr_46451_46542 = state_46445__$1;
(statearr_46451_46542[(1)] = (7));

} else {
var statearr_46452_46543 = state_46445__$1;
(statearr_46452_46543[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (3))){
var inst_46442 = (state_46445[(2)]);
var inst_46443 = done.call(null);
var state_46445__$1 = (function (){var statearr_46453 = state_46445;
(statearr_46453[(9)] = inst_46442);

return statearr_46453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46445__$1,inst_46443);
} else {
if((state_val_46446 === (2))){
var _ = (function (){var statearr_46455 = state_46445;
(statearr_46455[(4)] = cljs.core.cons.call(null,(5),(state_46445[(4)])));

return statearr_46455;
})();
var inst_46409 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_46410 = [true];
var inst_46411 = cljs.core.PersistentHashMap.fromArrays(inst_46409,inst_46410);
var inst_46412 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)",inst_46411);
var state_46445__$1 = state_46445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46445__$1,(6),inst_46412);
} else {
if((state_val_46446 === (9))){
var inst_46418 = (state_46445[(8)]);
var inst_46439 = (state_46445[(2)]);
var _ = (function (){var statearr_46456 = state_46445;
(statearr_46456[(4)] = cljs.core.rest.call(null,(state_46445[(4)])));

return statearr_46456;
})();
var state_46445__$1 = (function (){var statearr_46457 = state_46445;
(statearr_46457[(10)] = inst_46439);

return statearr_46457;
})();
var statearr_46458_46544 = state_46445__$1;
(statearr_46458_46544[(2)] = inst_46418);

(statearr_46458_46544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (5))){
var _ = (function (){var statearr_46459 = state_46445;
(statearr_46459[(4)] = cljs.core.rest.call(null,(state_46445[(4)])));

return statearr_46459;
})();
var state_46445__$1 = state_46445;
var ex46454 = (state_46445__$1[(2)]);
var statearr_46460_46545 = state_46445__$1;
(statearr_46460_46545[(5)] = ex46454);


var statearr_46461_46546 = state_46445__$1;
(statearr_46461_46546[(1)] = (4));

(statearr_46461_46546[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46446 === (8))){
var inst_46417 = (state_46445[(7)]);
var inst_46428 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46429 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46430 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46431 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46432 = cljs.core.cons.call(null,inst_46431,inst_46417);
var inst_46433 = (new cljs.core.List(null,inst_46432,null,(1),null));
var inst_46434 = (new cljs.core.List(null,inst_46430,inst_46433,(2),null));
var inst_46435 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"fail","fail",1706214930),18,67,inst_46429,67,inst_46434,null];
var inst_46436 = cljs.core.PersistentHashMap.fromArrays(inst_46428,inst_46435);
var inst_46437 = cljs.test.report.call(null,inst_46436);
var state_46445__$1 = state_46445;
var statearr_46462_46547 = state_46445__$1;
(statearr_46462_46547[(2)] = inst_46437);

(statearr_46462_46547[(1)] = (9));


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
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_46463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46463[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_46463[(1)] = (1));

return statearr_46463;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_46445){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_46445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e46464){var ex__21902__auto__ = e46464;
var statearr_46465_46548 = state_46445;
(statearr_46465_46548[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_46445[(4)]))){
var statearr_46466_46549 = state_46445;
(statearr_46466_46549[(1)] = cljs.core.first.call(null,(state_46445[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46550 = state_46445;
state_46445 = G__46550;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_46445){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_46445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_46467 = f__22024__auto__.call(null);
(statearr_46467[(6)] = c__22023__auto__);

return statearr_46467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.apply = (function (self__,args46397){
var self__ = this;
var self____$1 = this;
var args__5217__auto__ = cljs.core.aclone.call(null,args46397);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5217__auto__.length > (20)))?(function (){var G__46468 = args__5217__auto__.slice((0),(20));
G__46468.push(args__5217__auto__.slice((20)));

return G__46468;
})():args__5217__auto__)));
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___34935__auto__ = this;
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_46516){
var state_val_46517 = (state_46516[(1)]);
if((state_val_46517 === (7))){
var inst_46488 = (state_46516[(7)]);
var inst_46491 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46492 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46493 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46494 = cljs.core.cons.call(null,inst_46493,inst_46488);
var inst_46495 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"pass","pass",1574159993),18,67,inst_46492,67,inst_46494,null];
var inst_46496 = cljs.core.PersistentHashMap.fromArrays(inst_46491,inst_46495);
var inst_46497 = cljs.test.report.call(null,inst_46496);
var state_46516__$1 = state_46516;
var statearr_46518_46551 = state_46516__$1;
(statearr_46518_46551[(2)] = inst_46497);

(statearr_46518_46551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (1))){
var state_46516__$1 = state_46516;
var statearr_46519_46552 = state_46516__$1;
(statearr_46519_46552[(2)] = null);

(statearr_46519_46552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (4))){
var inst_46469 = (state_46516[(2)]);
var inst_46470 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46471 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46472 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"error","error",-978969032),18,67,inst_46471,67,inst_46469,null];
var inst_46473 = cljs.core.PersistentHashMap.fromArrays(inst_46470,inst_46472);
var inst_46474 = cljs.test.report.call(null,inst_46473);
var state_46516__$1 = state_46516;
var statearr_46520_46553 = state_46516__$1;
(statearr_46520_46553[(2)] = inst_46474);

(statearr_46520_46553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (6))){
var inst_46488 = (state_46516[(7)]);
var inst_46489 = (state_46516[(8)]);
var inst_46485 = (state_46516[(2)]);
var inst_46486 = cljs.core.second.call(null,inst_46485);
var inst_46487 = (new cljs.core.List(null,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));",null,(1),null));
var inst_46488__$1 = (new cljs.core.List(null,inst_46486,inst_46487,(2),null));
var inst_46489__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_46488__$1);
var state_46516__$1 = (function (){var statearr_46521 = state_46516;
(statearr_46521[(7)] = inst_46488__$1);

(statearr_46521[(8)] = inst_46489__$1);

return statearr_46521;
})();
if(cljs.core.truth_(inst_46489__$1)){
var statearr_46522_46554 = state_46516__$1;
(statearr_46522_46554[(1)] = (7));

} else {
var statearr_46523_46555 = state_46516__$1;
(statearr_46523_46555[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (3))){
var inst_46513 = (state_46516[(2)]);
var inst_46514 = done.call(null);
var state_46516__$1 = (function (){var statearr_46524 = state_46516;
(statearr_46524[(9)] = inst_46513);

return statearr_46524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46516__$1,inst_46514);
} else {
if((state_val_46517 === (2))){
var _ = (function (){var statearr_46526 = state_46516;
(statearr_46526[(4)] = cljs.core.cons.call(null,(5),(state_46516[(4)])));

return statearr_46526;
})();
var inst_46480 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_46481 = [true];
var inst_46482 = cljs.core.PersistentHashMap.fromArrays(inst_46480,inst_46481);
var inst_46483 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)",inst_46482);
var state_46516__$1 = state_46516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46516__$1,(6),inst_46483);
} else {
if((state_val_46517 === (9))){
var inst_46489 = (state_46516[(8)]);
var inst_46510 = (state_46516[(2)]);
var _ = (function (){var statearr_46527 = state_46516;
(statearr_46527[(4)] = cljs.core.rest.call(null,(state_46516[(4)])));

return statearr_46527;
})();
var state_46516__$1 = (function (){var statearr_46528 = state_46516;
(statearr_46528[(10)] = inst_46510);

return statearr_46528;
})();
var statearr_46529_46556 = state_46516__$1;
(statearr_46529_46556[(2)] = inst_46489);

(statearr_46529_46556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (5))){
var _ = (function (){var statearr_46530 = state_46516;
(statearr_46530[(4)] = cljs.core.rest.call(null,(state_46516[(4)])));

return statearr_46530;
})();
var state_46516__$1 = state_46516;
var ex46525 = (state_46516__$1[(2)]);
var statearr_46531_46557 = state_46516__$1;
(statearr_46531_46557[(5)] = ex46525);


var statearr_46532_46558 = state_46516__$1;
(statearr_46532_46558[(1)] = (4));

(statearr_46532_46558[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46517 === (8))){
var inst_46488 = (state_46516[(7)]);
var inst_46499 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46500 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_46501 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46502 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_46503 = cljs.core.cons.call(null,inst_46502,inst_46488);
var inst_46504 = (new cljs.core.List(null,inst_46503,null,(1),null));
var inst_46505 = (new cljs.core.List(null,inst_46501,inst_46504,(2),null));
var inst_46506 = ["/Users/penryu/code/github/klipse-clj/test/klipse_clj/compile_test.cljs",82,new cljs.core.Keyword(null,"fail","fail",1706214930),18,67,inst_46500,67,inst_46505,null];
var inst_46507 = cljs.core.PersistentHashMap.fromArrays(inst_46499,inst_46506);
var inst_46508 = cljs.test.report.call(null,inst_46507);
var state_46516__$1 = state_46516;
var statearr_46533_46559 = state_46516__$1;
(statearr_46533_46559[(2)] = inst_46508);

(statearr_46533_46559[(1)] = (9));


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
});
return (function() {
var klipse_clj$compile_test$state_machine__21899__auto__ = null;
var klipse_clj$compile_test$state_machine__21899__auto____0 = (function (){
var statearr_46534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46534[(0)] = klipse_clj$compile_test$state_machine__21899__auto__);

(statearr_46534[(1)] = (1));

return statearr_46534;
});
var klipse_clj$compile_test$state_machine__21899__auto____1 = (function (state_46516){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_46516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e46535){var ex__21902__auto__ = e46535;
var statearr_46536_46560 = state_46516;
(statearr_46536_46560[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_46516[(4)]))){
var statearr_46537_46561 = state_46516;
(statearr_46537_46561[(1)] = cljs.core.first.call(null,(state_46516[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46562 = state_46516;
state_46516 = G__46562;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__21899__auto__ = function(state_46516){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__21899__auto____1.call(this,state_46516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__21899__auto____0;
klipse_clj$compile_test$state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__21899__auto____1;
return klipse_clj$compile_test$state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_46538 = f__22024__auto__.call(null);
(statearr_46538[(6)] = c__22023__auto__);

return statearr_46538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46395","meta46395",-220724438,null)], null);
}));

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.cljs$lang$type = true);

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test46394");

(klipse_clj.compile_test.t_klipse_clj$compile_test46394.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test46394");
}));

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test46394.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test46394 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test46394(meta46395){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test46394(meta46395));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test46394(null));
});

(klipse_clj.compile_test.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.static_fn;},new cljs.core.Symbol("klipse-clj.compile-test","static-fn","klipse-clj.compile-test/static-fn",-1107566514,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"static-fn","static-fn",-1353545006,null),"test/klipse_clj/compile_test.cljs",19,1,63,63,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.static_fn)?klipse_clj.compile_test.static_fn.cljs$lang$test:null)])));

//# sourceMappingURL=compile_test.js.map
