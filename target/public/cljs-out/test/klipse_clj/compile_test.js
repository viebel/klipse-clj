// Compiled by ClojureScript 1.10.520 {}
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
}catch (e30910){if((e30910 instanceof Object)){
var e = e30910;
cljs.core.println.call(null,"error in remove-chars ",s);

throw e;
} else {
throw e30910;

}
}});
klipse_clj.compile_test.a_EQ_ = (function klipse_clj$compile_test$a_EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30912 = arguments.length;
var i__4731__auto___30913 = (0);
while(true){
if((i__4731__auto___30913 < len__4730__auto___30912)){
args__4736__auto__.push((arguments[i__4731__auto___30913]));

var G__30914 = (i__4731__auto___30913 + (1));
i__4731__auto___30913 = G__30914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return klipse_clj.compile_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

klipse_clj.compile_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse_clj.compile_test.remove_chars,args));
});

klipse_clj.compile_test.a_EQ_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
klipse_clj.compile_test.a_EQ_.cljs$lang$applyTo = (function (seq30911){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30911));
});

klipse_clj.compile_test.error__GT_clj = (function klipse_clj$compile_test$error__GT_clj(p__30915){
var vec__30916 = p__30915;
var status = cljs.core.nth.call(null,vec__30916,(0),null);
var error = cljs.core.nth.call(null,vec__30916,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});
klipse_clj.compile_test.success = (function klipse_clj$compile_test$success(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.success.cljs$lang$var);
});
klipse_clj.compile_test.success.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test30919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test30919 = (function (meta30920){
this.meta30920 = meta30920;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30921,meta30920__$1){
var self__ = this;
var _30921__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test30919(meta30920__$1));
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30921){
var self__ = this;
var _30921__$1 = this;
return self__.meta30920;
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_31077){
var state_val_31078 = (state_31077[(1)]);
if((state_val_31078 === (7))){
var inst_30937 = (state_31077[(7)]);
var inst_30947 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30948 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_30949 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30950 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30951 = cljs.core.cons.call(null,inst_30950,inst_30937);
var inst_30952 = (new cljs.core.List(null,inst_30951,null,(1),null));
var inst_30953 = (new cljs.core.List(null,inst_30949,inst_30952,(2),null));
var inst_30954 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30948,inst_30953,null];
var inst_30955 = cljs.core.PersistentHashMap.fromArrays(inst_30947,inst_30954);
var inst_30956 = cljs.test.do_report.call(null,inst_30955);
var state_31077__$1 = state_31077;
var statearr_31079_31323 = state_31077__$1;
(statearr_31079_31323[(2)] = inst_30956);

(statearr_31079_31323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (20))){
var inst_31013 = (state_31077[(8)]);
var inst_31016 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31017 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31018 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31013);
var inst_31019 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31017,inst_31018,null];
var inst_31020 = cljs.core.PersistentHashMap.fromArrays(inst_31016,inst_31019);
var inst_31021 = cljs.test.do_report.call(null,inst_31020);
var state_31077__$1 = state_31077;
var statearr_31080_31324 = state_31077__$1;
(statearr_31080_31324[(2)] = inst_31021);

(statearr_31080_31324[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (27))){
var inst_31051 = (state_31077[(9)]);
var inst_31054 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31055 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31056 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31051);
var inst_31057 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31055,inst_31056,null];
var inst_31058 = cljs.core.PersistentHashMap.fromArrays(inst_31054,inst_31057);
var inst_31059 = cljs.test.do_report.call(null,inst_31058);
var state_31077__$1 = state_31077;
var statearr_31081_31325 = state_31077__$1;
(statearr_31081_31325[(2)] = inst_31059);

(statearr_31081_31325[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (1))){
var state_31077__$1 = state_31077;
var statearr_31082_31326 = state_31077__$1;
(statearr_31082_31326[(2)] = null);

(statearr_31082_31326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (24))){
var inst_31037 = (state_31077[(2)]);
var inst_31038 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31039 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31040 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31039,inst_31037,null];
var inst_31041 = cljs.core.PersistentHashMap.fromArrays(inst_31038,inst_31040);
var inst_31042 = cljs.test.do_report.call(null,inst_31041);
var state_31077__$1 = state_31077;
var statearr_31083_31327 = state_31077__$1;
(statearr_31083_31327[(2)] = inst_31042);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31077,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30932 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31077__$1,(5),inst_30932);
} else {
if((state_val_31078 === (15))){
var inst_30976 = (state_31077[(10)]);
var inst_30996 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31084 = state_31077;
(statearr_31084[(11)] = inst_30996);

return statearr_31084;
})();
var statearr_31085_31328 = state_31077__$1;
(statearr_31085_31328[(2)] = inst_30976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (21))){
var inst_31013 = (state_31077[(8)]);
var inst_31023 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31024 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31025 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31026 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31027 = cljs.core.cons.call(null,inst_31026,inst_31013);
var inst_31028 = (new cljs.core.List(null,inst_31027,null,(1),null));
var inst_31029 = (new cljs.core.List(null,inst_31025,inst_31028,(2),null));
var inst_31030 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31024,inst_31029,null];
var inst_31031 = cljs.core.PersistentHashMap.fromArrays(inst_31023,inst_31030);
var inst_31032 = cljs.test.do_report.call(null,inst_31031);
var state_31077__$1 = state_31077;
var statearr_31086_31329 = state_31077__$1;
(statearr_31086_31329[(2)] = inst_31032);

(statearr_31086_31329[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (13))){
var inst_30975 = (state_31077[(12)]);
var inst_30978 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30979 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_30980 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_30975);
var inst_30981 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30979,inst_30980,null];
var inst_30982 = cljs.core.PersistentHashMap.fromArrays(inst_30978,inst_30981);
var inst_30983 = cljs.test.do_report.call(null,inst_30982);
var state_31077__$1 = state_31077;
var statearr_31087_31330 = state_31077__$1;
(statearr_31087_31330[(2)] = inst_30983);

(statearr_31087_31330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (22))){
var inst_31014 = (state_31077[(13)]);
var inst_31034 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31088 = state_31077;
(statearr_31088[(14)] = inst_31034);

return statearr_31088;
})();
var statearr_31089_31331 = state_31077__$1;
(statearr_31089_31331[(2)] = inst_31014);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (29))){
var inst_31052 = (state_31077[(15)]);
var inst_31072 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31090 = state_31077;
(statearr_31090[(16)] = inst_31072);

return statearr_31090;
})();
var statearr_31091_31332 = state_31077__$1;
(statearr_31091_31332[(2)] = inst_31052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (6))){
var inst_30937 = (state_31077[(7)]);
var inst_30940 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30941 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_30942 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_30937);
var inst_30943 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30941,inst_30942,null];
var inst_30944 = cljs.core.PersistentHashMap.fromArrays(inst_30940,inst_30943);
var inst_30945 = cljs.test.do_report.call(null,inst_30944);
var state_31077__$1 = state_31077;
var statearr_31092_31333 = state_31077__$1;
(statearr_31092_31333[(2)] = inst_30945);

(statearr_31092_31333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (28))){
var inst_31051 = (state_31077[(9)]);
var inst_31061 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31062 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31063 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31064 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31065 = cljs.core.cons.call(null,inst_31064,inst_31051);
var inst_31066 = (new cljs.core.List(null,inst_31065,null,(1),null));
var inst_31067 = (new cljs.core.List(null,inst_31063,inst_31066,(2),null));
var inst_31068 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31062,inst_31067,null];
var inst_31069 = cljs.core.PersistentHashMap.fromArrays(inst_31061,inst_31068);
var inst_31070 = cljs.test.do_report.call(null,inst_31069);
var state_31077__$1 = state_31077;
var statearr_31093_31334 = state_31077__$1;
(statearr_31093_31334[(2)] = inst_31070);

(statearr_31093_31334[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31077,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_31046 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def a ::a)");
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31077__$1,(26),inst_31046);
} else {
if((state_val_31078 === (17))){
var inst_30999 = (state_31077[(2)]);
var inst_31000 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31001 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31002 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31001,inst_30999,null];
var inst_31003 = cljs.core.PersistentHashMap.fromArrays(inst_31000,inst_31002);
var inst_31004 = cljs.test.do_report.call(null,inst_31003);
var state_31077__$1 = state_31077;
var statearr_31094_31335 = state_31077__$1;
(statearr_31094_31335[(2)] = inst_31004);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (3))){
var inst_30923 = (state_31077[(2)]);
var inst_30924 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30925 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_30926 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30925,inst_30923,null];
var inst_30927 = cljs.core.PersistentHashMap.fromArrays(inst_30924,inst_30926);
var inst_30928 = cljs.test.do_report.call(null,inst_30927);
var state_31077__$1 = state_31077;
var statearr_31095_31336 = state_31077__$1;
(statearr_31095_31336[(2)] = inst_30928);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (12))){
var inst_30976 = (state_31077[(10)]);
var inst_30975 = (state_31077[(12)]);
var inst_30972 = (state_31077[(2)]);
var inst_30973 = cljs.core.second.call(null,inst_30972);
var inst_30974 = (new cljs.core.List(null,"my_project.my_ns.x= (3);",null,(1),null));
var inst_30975__$1 = (new cljs.core.List(null,inst_30973,inst_30974,(2),null));
var inst_30976__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_30975__$1);
var state_31077__$1 = (function (){var statearr_31096 = state_31077;
(statearr_31096[(10)] = inst_30976__$1);

(statearr_31096[(12)] = inst_30975__$1);

return statearr_31096;
})();
if(cljs.core.truth_(inst_30976__$1)){
var statearr_31097_31337 = state_31077__$1;
(statearr_31097_31337[(1)] = (13));

} else {
var statearr_31098_31338 = state_31077__$1;
(statearr_31098_31338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (2))){
var inst_30960 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31099 = state_31077;
(statearr_31099[(17)] = inst_30960);

return statearr_31099;
})();
var statearr_31100_31339 = state_31077__$1;
(statearr_31100_31339[(2)] = null);

(statearr_31100_31339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (23))){
var inst_31074 = (state_31077[(2)]);
var inst_31075 = done.call(null);
var state_31077__$1 = (function (){var statearr_31101 = state_31077;
(statearr_31101[(18)] = inst_31074);

return statearr_31101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31077__$1,inst_31075);
} else {
if((state_val_31078 === (19))){
var inst_31014 = (state_31077[(13)]);
var inst_31013 = (state_31077[(8)]);
var inst_31010 = (state_31077[(2)]);
var inst_31011 = cljs.core.second.call(null,inst_31010);
var inst_31012 = (new cljs.core.List(null,"cljs.core._EQ_.call(null,(1),(2));",null,(1),null));
var inst_31013__$1 = (new cljs.core.List(null,inst_31011,inst_31012,(2),null));
var inst_31014__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31013__$1);
var state_31077__$1 = (function (){var statearr_31102 = state_31077;
(statearr_31102[(13)] = inst_31014__$1);

(statearr_31102[(8)] = inst_31013__$1);

return statearr_31102;
})();
if(cljs.core.truth_(inst_31014__$1)){
var statearr_31103_31340 = state_31077__$1;
(statearr_31103_31340[(1)] = (20));

} else {
var statearr_31104_31341 = state_31077__$1;
(statearr_31104_31341[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31077,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_30970 = klipse_clj.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31077__$1,(12),inst_30970);
} else {
if((state_val_31078 === (9))){
var inst_30998 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31105 = state_31077;
(statearr_31105[(19)] = inst_30998);

return statearr_31105;
})();
var statearr_31106_31342 = state_31077__$1;
(statearr_31106_31342[(2)] = null);

(statearr_31106_31342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (5))){
var inst_30938 = (state_31077[(20)]);
var inst_30937 = (state_31077[(7)]);
var inst_30934 = (state_31077[(2)]);
var inst_30935 = cljs.core.second.call(null,inst_30934);
var inst_30936 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);",null,(1),null));
var inst_30937__$1 = (new cljs.core.List(null,inst_30935,inst_30936,(2),null));
var inst_30938__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_30937__$1);
var state_31077__$1 = (function (){var statearr_31107 = state_31077;
(statearr_31107[(20)] = inst_30938__$1);

(statearr_31107[(7)] = inst_30937__$1);

return statearr_31107;
})();
if(cljs.core.truth_(inst_30938__$1)){
var statearr_31108_31343 = state_31077__$1;
(statearr_31108_31343[(1)] = (6));

} else {
var statearr_31109_31344 = state_31077__$1;
(statearr_31109_31344[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (14))){
var inst_30975 = (state_31077[(12)]);
var inst_30985 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30986 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_30987 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30988 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30989 = cljs.core.cons.call(null,inst_30988,inst_30975);
var inst_30990 = (new cljs.core.List(null,inst_30989,null,(1),null));
var inst_30991 = (new cljs.core.List(null,inst_30987,inst_30990,(2),null));
var inst_30992 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30986,inst_30991,null];
var inst_30993 = cljs.core.PersistentHashMap.fromArrays(inst_30985,inst_30992);
var inst_30994 = cljs.test.do_report.call(null,inst_30993);
var state_31077__$1 = state_31077;
var statearr_31110_31345 = state_31077__$1;
(statearr_31110_31345[(2)] = inst_30994);

(statearr_31110_31345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (26))){
var inst_31051 = (state_31077[(9)]);
var inst_31052 = (state_31077[(15)]);
var inst_31048 = (state_31077[(2)]);
var inst_31049 = cljs.core.second.call(null,inst_31048);
var inst_31050 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));",null,(1),null));
var inst_31051__$1 = (new cljs.core.List(null,inst_31049,inst_31050,(2),null));
var inst_31052__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31051__$1);
var state_31077__$1 = (function (){var statearr_31111 = state_31077;
(statearr_31111[(9)] = inst_31051__$1);

(statearr_31111[(15)] = inst_31052__$1);

return statearr_31111;
})();
if(cljs.core.truth_(inst_31052__$1)){
var statearr_31112_31346 = state_31077__$1;
(statearr_31112_31346[(1)] = (27));

} else {
var statearr_31113_31347 = state_31077__$1;
(statearr_31113_31347[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (16))){
var inst_31036 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31114 = state_31077;
(statearr_31114[(21)] = inst_31036);

return statearr_31114;
})();
var statearr_31115_31348 = state_31077__$1;
(statearr_31115_31348[(2)] = null);

(statearr_31115_31348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (10))){
var inst_30961 = (state_31077[(2)]);
var inst_30962 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30963 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_30964 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30963,inst_30961,null];
var inst_30965 = cljs.core.PersistentHashMap.fromArrays(inst_30962,inst_30964);
var inst_30966 = cljs.test.do_report.call(null,inst_30965);
var state_31077__$1 = state_31077;
var statearr_31116_31349 = state_31077__$1;
(statearr_31116_31349[(2)] = inst_30966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31078 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31077,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31008 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_31077__$1 = state_31077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31077__$1,(19),inst_31008);
} else {
if((state_val_31078 === (8))){
var inst_30938 = (state_31077[(20)]);
var inst_30958 = (state_31077[(2)]);
var state_31077__$1 = (function (){var statearr_31117 = state_31077;
(statearr_31117[(22)] = inst_30958);

return statearr_31117;
})();
var statearr_31118_31350 = state_31077__$1;
(statearr_31118_31350[(2)] = inst_30938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31119[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31077){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object)){
var ex__15543__auto__ = e31120;
var statearr_31121_31351 = state_31077;
(statearr_31121_31351[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31352 = state_31077;
state_31077 = G__31352;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31077){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_31122 = f__15635__auto__.call(null);
(statearr_31122[(6)] = c__15634__auto__);

return statearr_31122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.apply = (function (self__,args30922){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30922)));
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_31277){
var state_val_31278 = (state_31277[(1)]);
if((state_val_31278 === (7))){
var inst_31137 = (state_31277[(7)]);
var inst_31147 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31148 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_31149 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31150 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31151 = cljs.core.cons.call(null,inst_31150,inst_31137);
var inst_31152 = (new cljs.core.List(null,inst_31151,null,(1),null));
var inst_31153 = (new cljs.core.List(null,inst_31149,inst_31152,(2),null));
var inst_31154 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31148,inst_31153,null];
var inst_31155 = cljs.core.PersistentHashMap.fromArrays(inst_31147,inst_31154);
var inst_31156 = cljs.test.do_report.call(null,inst_31155);
var state_31277__$1 = state_31277;
var statearr_31279_31353 = state_31277__$1;
(statearr_31279_31353[(2)] = inst_31156);

(statearr_31279_31353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (20))){
var inst_31213 = (state_31277[(8)]);
var inst_31216 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31217 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31218 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31213);
var inst_31219 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31217,inst_31218,null];
var inst_31220 = cljs.core.PersistentHashMap.fromArrays(inst_31216,inst_31219);
var inst_31221 = cljs.test.do_report.call(null,inst_31220);
var state_31277__$1 = state_31277;
var statearr_31280_31354 = state_31277__$1;
(statearr_31280_31354[(2)] = inst_31221);

(statearr_31280_31354[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (27))){
var inst_31251 = (state_31277[(9)]);
var inst_31254 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31255 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31256 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31251);
var inst_31257 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31255,inst_31256,null];
var inst_31258 = cljs.core.PersistentHashMap.fromArrays(inst_31254,inst_31257);
var inst_31259 = cljs.test.do_report.call(null,inst_31258);
var state_31277__$1 = state_31277;
var statearr_31281_31355 = state_31277__$1;
(statearr_31281_31355[(2)] = inst_31259);

(statearr_31281_31355[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (1))){
var state_31277__$1 = state_31277;
var statearr_31282_31356 = state_31277__$1;
(statearr_31282_31356[(2)] = null);

(statearr_31282_31356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (24))){
var inst_31237 = (state_31277[(2)]);
var inst_31238 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31239 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31240 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31239,inst_31237,null];
var inst_31241 = cljs.core.PersistentHashMap.fromArrays(inst_31238,inst_31240);
var inst_31242 = cljs.test.do_report.call(null,inst_31241);
var state_31277__$1 = state_31277;
var statearr_31283_31357 = state_31277__$1;
(statearr_31283_31357[(2)] = inst_31242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31277,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31132 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)");
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31277__$1,(5),inst_31132);
} else {
if((state_val_31278 === (15))){
var inst_31176 = (state_31277[(10)]);
var inst_31196 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31284 = state_31277;
(statearr_31284[(11)] = inst_31196);

return statearr_31284;
})();
var statearr_31285_31358 = state_31277__$1;
(statearr_31285_31358[(2)] = inst_31176);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (21))){
var inst_31213 = (state_31277[(8)]);
var inst_31223 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31224 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31225 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31226 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31227 = cljs.core.cons.call(null,inst_31226,inst_31213);
var inst_31228 = (new cljs.core.List(null,inst_31227,null,(1),null));
var inst_31229 = (new cljs.core.List(null,inst_31225,inst_31228,(2),null));
var inst_31230 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31224,inst_31229,null];
var inst_31231 = cljs.core.PersistentHashMap.fromArrays(inst_31223,inst_31230);
var inst_31232 = cljs.test.do_report.call(null,inst_31231);
var state_31277__$1 = state_31277;
var statearr_31286_31359 = state_31277__$1;
(statearr_31286_31359[(2)] = inst_31232);

(statearr_31286_31359[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (13))){
var inst_31175 = (state_31277[(12)]);
var inst_31178 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31179 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_31180 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31175);
var inst_31181 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31179,inst_31180,null];
var inst_31182 = cljs.core.PersistentHashMap.fromArrays(inst_31178,inst_31181);
var inst_31183 = cljs.test.do_report.call(null,inst_31182);
var state_31277__$1 = state_31277;
var statearr_31287_31360 = state_31277__$1;
(statearr_31287_31360[(2)] = inst_31183);

(statearr_31287_31360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (22))){
var inst_31214 = (state_31277[(13)]);
var inst_31234 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31288 = state_31277;
(statearr_31288[(14)] = inst_31234);

return statearr_31288;
})();
var statearr_31289_31361 = state_31277__$1;
(statearr_31289_31361[(2)] = inst_31214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (29))){
var inst_31252 = (state_31277[(15)]);
var inst_31272 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31290 = state_31277;
(statearr_31290[(16)] = inst_31272);

return statearr_31290;
})();
var statearr_31291_31362 = state_31277__$1;
(statearr_31291_31362[(2)] = inst_31252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (6))){
var inst_31137 = (state_31277[(7)]);
var inst_31140 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31141 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_31142 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31137);
var inst_31143 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31141,inst_31142,null];
var inst_31144 = cljs.core.PersistentHashMap.fromArrays(inst_31140,inst_31143);
var inst_31145 = cljs.test.do_report.call(null,inst_31144);
var state_31277__$1 = state_31277;
var statearr_31292_31363 = state_31277__$1;
(statearr_31292_31363[(2)] = inst_31145);

(statearr_31292_31363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (28))){
var inst_31251 = (state_31277[(9)]);
var inst_31261 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31262 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def a ::a)"))),"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));");
var inst_31263 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31264 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31265 = cljs.core.cons.call(null,inst_31264,inst_31251);
var inst_31266 = (new cljs.core.List(null,inst_31265,null,(1),null));
var inst_31267 = (new cljs.core.List(null,inst_31263,inst_31266,(2),null));
var inst_31268 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31262,inst_31267,null];
var inst_31269 = cljs.core.PersistentHashMap.fromArrays(inst_31261,inst_31268);
var inst_31270 = cljs.test.do_report.call(null,inst_31269);
var state_31277__$1 = state_31277;
var statearr_31293_31364 = state_31277__$1;
(statearr_31293_31364[(2)] = inst_31270);

(statearr_31293_31364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31277,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_31246 = klipse_clj.lang.clojure.str_compile.call(null,"(ns my-project.my-ns) (def a ::a)");
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31277__$1,(26),inst_31246);
} else {
if((state_val_31278 === (17))){
var inst_31199 = (state_31277[(2)]);
var inst_31200 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31201 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)"))),"cljs.core._EQ_.call(null,(1),(2));");
var inst_31202 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31201,inst_31199,null];
var inst_31203 = cljs.core.PersistentHashMap.fromArrays(inst_31200,inst_31202);
var inst_31204 = cljs.test.do_report.call(null,inst_31203);
var state_31277__$1 = state_31277;
var statearr_31294_31365 = state_31277__$1;
(statearr_31294_31365[(2)] = inst_31204);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (3))){
var inst_31123 = (state_31277[(2)]);
var inst_31124 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31125 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(ns my-project.my-ns) (def x 1) (def y 2)"))),"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);");
var inst_31126 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31125,inst_31123,null];
var inst_31127 = cljs.core.PersistentHashMap.fromArrays(inst_31124,inst_31126);
var inst_31128 = cljs.test.do_report.call(null,inst_31127);
var state_31277__$1 = state_31277;
var statearr_31295_31366 = state_31277__$1;
(statearr_31295_31366[(2)] = inst_31128);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (12))){
var inst_31176 = (state_31277[(10)]);
var inst_31175 = (state_31277[(12)]);
var inst_31172 = (state_31277[(2)]);
var inst_31173 = cljs.core.second.call(null,inst_31172);
var inst_31174 = (new cljs.core.List(null,"my_project.my_ns.x= (3);",null,(1),null));
var inst_31175__$1 = (new cljs.core.List(null,inst_31173,inst_31174,(2),null));
var inst_31176__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31175__$1);
var state_31277__$1 = (function (){var statearr_31296 = state_31277;
(statearr_31296[(10)] = inst_31176__$1);

(statearr_31296[(12)] = inst_31175__$1);

return statearr_31296;
})();
if(cljs.core.truth_(inst_31176__$1)){
var statearr_31297_31367 = state_31277__$1;
(statearr_31297_31367[(1)] = (13));

} else {
var statearr_31298_31368 = state_31277__$1;
(statearr_31298_31368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (2))){
var inst_31160 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31299 = state_31277;
(statearr_31299[(17)] = inst_31160);

return statearr_31299;
})();
var statearr_31300_31369 = state_31277__$1;
(statearr_31300_31369[(2)] = null);

(statearr_31300_31369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (23))){
var inst_31274 = (state_31277[(2)]);
var inst_31275 = done.call(null);
var state_31277__$1 = (function (){var statearr_31301 = state_31277;
(statearr_31301[(18)] = inst_31274);

return statearr_31301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31277__$1,inst_31275);
} else {
if((state_val_31278 === (19))){
var inst_31213 = (state_31277[(8)]);
var inst_31214 = (state_31277[(13)]);
var inst_31210 = (state_31277[(2)]);
var inst_31211 = cljs.core.second.call(null,inst_31210);
var inst_31212 = (new cljs.core.List(null,"cljs.core._EQ_.call(null,(1),(2));",null,(1),null));
var inst_31213__$1 = (new cljs.core.List(null,inst_31211,inst_31212,(2),null));
var inst_31214__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31213__$1);
var state_31277__$1 = (function (){var statearr_31302 = state_31277;
(statearr_31302[(8)] = inst_31213__$1);

(statearr_31302[(13)] = inst_31214__$1);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31214__$1)){
var statearr_31303_31370 = state_31277__$1;
(statearr_31303_31370[(1)] = (20));

} else {
var statearr_31304_31371 = state_31277__$1;
(statearr_31304_31371[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31277,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31170 = klipse_clj.lang.clojure.str_compile.call(null,"(if 2 3) (def x (if 2 3))");
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31277__$1,(12),inst_31170);
} else {
if((state_val_31278 === (9))){
var inst_31198 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31305 = state_31277;
(statearr_31305[(19)] = inst_31198);

return statearr_31305;
})();
var statearr_31306_31372 = state_31277__$1;
(statearr_31306_31372[(2)] = null);

(statearr_31306_31372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (5))){
var inst_31137 = (state_31277[(7)]);
var inst_31138 = (state_31277[(20)]);
var inst_31134 = (state_31277[(2)]);
var inst_31135 = cljs.core.second.call(null,inst_31134);
var inst_31136 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\");my_project.my_ns.x = (1); my_project.my_ns.y = (2);",null,(1),null));
var inst_31137__$1 = (new cljs.core.List(null,inst_31135,inst_31136,(2),null));
var inst_31138__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31137__$1);
var state_31277__$1 = (function (){var statearr_31307 = state_31277;
(statearr_31307[(7)] = inst_31137__$1);

(statearr_31307[(20)] = inst_31138__$1);

return statearr_31307;
})();
if(cljs.core.truth_(inst_31138__$1)){
var statearr_31308_31373 = state_31277__$1;
(statearr_31308_31373[(1)] = (6));

} else {
var statearr_31309_31374 = state_31277__$1;
(statearr_31309_31374[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (14))){
var inst_31175 = (state_31277[(12)]);
var inst_31185 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31186 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_31187 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31188 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31189 = cljs.core.cons.call(null,inst_31188,inst_31175);
var inst_31190 = (new cljs.core.List(null,inst_31189,null,(1),null));
var inst_31191 = (new cljs.core.List(null,inst_31187,inst_31190,(2),null));
var inst_31192 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31186,inst_31191,null];
var inst_31193 = cljs.core.PersistentHashMap.fromArrays(inst_31185,inst_31192);
var inst_31194 = cljs.test.do_report.call(null,inst_31193);
var state_31277__$1 = state_31277;
var statearr_31310_31375 = state_31277__$1;
(statearr_31310_31375[(2)] = inst_31194);

(statearr_31310_31375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (26))){
var inst_31251 = (state_31277[(9)]);
var inst_31252 = (state_31277[(15)]);
var inst_31248 = (state_31277[(2)]);
var inst_31249 = cljs.core.second.call(null,inst_31248);
var inst_31250 = (new cljs.core.List(null,"goog.provide(\"my_project.my_ns\"); my_project.my_ns.a = new cljs.core.Keyword(\"my-project.my-ns\",\"a\",\"my-project.my-ns/a\",(-178816178));",null,(1),null));
var inst_31251__$1 = (new cljs.core.List(null,inst_31249,inst_31250,(2),null));
var inst_31252__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31251__$1);
var state_31277__$1 = (function (){var statearr_31311 = state_31277;
(statearr_31311[(9)] = inst_31251__$1);

(statearr_31311[(15)] = inst_31252__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31252__$1)){
var statearr_31312_31376 = state_31277__$1;
(statearr_31312_31376[(1)] = (27));

} else {
var statearr_31313_31377 = state_31277__$1;
(statearr_31313_31377[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (16))){
var inst_31236 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31314 = state_31277;
(statearr_31314[(21)] = inst_31236);

return statearr_31314;
})();
var statearr_31315_31378 = state_31277__$1;
(statearr_31315_31378[(2)] = null);

(statearr_31315_31378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (10))){
var inst_31161 = (state_31277[(2)]);
var inst_31162 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31163 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(if 2 3) (def x (if 2 3))"))),"my_project.my_ns.x= (3);");
var inst_31164 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31163,inst_31161,null];
var inst_31165 = cljs.core.PersistentHashMap.fromArrays(inst_31162,inst_31164);
var inst_31166 = cljs.test.do_report.call(null,inst_31165);
var state_31277__$1 = state_31277;
var statearr_31316_31379 = state_31277__$1;
(statearr_31316_31379[(2)] = inst_31166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31278 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31277,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31208 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)");
var state_31277__$1 = state_31277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31277__$1,(19),inst_31208);
} else {
if((state_val_31278 === (8))){
var inst_31138 = (state_31277[(20)]);
var inst_31158 = (state_31277[(2)]);
var state_31277__$1 = (function (){var statearr_31317 = state_31277;
(statearr_31317[(22)] = inst_31158);

return statearr_31317;
})();
var statearr_31318_31380 = state_31277__$1;
(statearr_31318_31380[(2)] = inst_31138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31319[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31277){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31320){if((e31320 instanceof Object)){
var ex__15543__auto__ = e31320;
var statearr_31321_31381 = state_31277;
(statearr_31321_31381[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31382 = state_31277;
state_31277 = G__31382;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31277){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_31322 = f__15635__auto__.call(null);
(statearr_31322[(6)] = c__15634__auto__);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30920","meta30920",-2125169832,null)], null);
});

klipse_clj.compile_test.t_klipse_clj$compile_test30919.cljs$lang$type = true;

klipse_clj.compile_test.t_klipse_clj$compile_test30919.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test30919";

klipse_clj.compile_test.t_klipse_clj$compile_test30919.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test30919");
});

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test30919.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test30919 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test30919(meta30920){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test30919(meta30920));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test30919(null));
});

klipse_clj.compile_test.success.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.success;},new cljs.core.Symbol("klipse-clj.compile-test","success","klipse-clj.compile-test/success",-1132354739,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"success","success",-763789863,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/compile_test.cljs",17,1,29,29,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.success)?klipse_clj.compile_test.success.cljs$lang$test:null)]));
klipse_clj.compile_test.success2 = (function klipse_clj$compile_test$success2(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.success2.cljs$lang$var);
});
klipse_clj.compile_test.success2.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test31383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test31383 = (function (meta31384){
this.meta31384 = meta31384;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31385,meta31384__$1){
var self__ = this;
var _31385__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test31383(meta31384__$1));
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31385){
var self__ = this;
var _31385__$1 = this;
return self__.meta31384;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_31430){
var state_val_31431 = (state_31430[(1)]);
if((state_val_31431 === (1))){
var state_31430__$1 = state_31430;
var statearr_31432_31505 = state_31430__$1;
(statearr_31432_31505[(2)] = null);

(statearr_31432_31505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31431 === (2))){
var inst_31427 = (state_31430[(2)]);
var inst_31428 = done.call(null);
var state_31430__$1 = (function (){var statearr_31433 = state_31430;
(statearr_31433[(7)] = inst_31427);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31430__$1,inst_31428);
} else {
if((state_val_31431 === (3))){
var inst_31387 = (state_31430[(2)]);
var inst_31388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31389 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31390 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31389,inst_31387,null];
var inst_31391 = cljs.core.PersistentHashMap.fromArrays(inst_31388,inst_31390);
var inst_31392 = cljs.test.do_report.call(null,inst_31391);
var state_31430__$1 = state_31430;
var statearr_31434_31506 = state_31430__$1;
(statearr_31434_31506[(2)] = inst_31392);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31431 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31430,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31396 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31397 = [true];
var inst_31398 = cljs.core.PersistentHashMap.fromArrays(inst_31396,inst_31397);
var inst_31399 = klipse_clj.lang.clojure.str_compile.call(null,"(def abb ::a)",inst_31398);
var state_31430__$1 = state_31430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31430__$1,(5),inst_31399);
} else {
if((state_val_31431 === (5))){
var inst_31404 = (state_31430[(8)]);
var inst_31405 = (state_31430[(9)]);
var inst_31401 = (state_31430[(2)]);
var inst_31402 = cljs.core.second.call(null,inst_31401);
var inst_31403 = (new cljs.core.List(null,"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n",null,(1),null));
var inst_31404__$1 = (new cljs.core.List(null,inst_31402,inst_31403,(2),null));
var inst_31405__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31404__$1);
var state_31430__$1 = (function (){var statearr_31435 = state_31430;
(statearr_31435[(8)] = inst_31404__$1);

(statearr_31435[(9)] = inst_31405__$1);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31405__$1)){
var statearr_31436_31507 = state_31430__$1;
(statearr_31436_31507[(1)] = (6));

} else {
var statearr_31437_31508 = state_31430__$1;
(statearr_31437_31508[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31431 === (6))){
var inst_31404 = (state_31430[(8)]);
var inst_31407 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31408 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31409 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31404);
var inst_31410 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31408,inst_31409,null];
var inst_31411 = cljs.core.PersistentHashMap.fromArrays(inst_31407,inst_31410);
var inst_31412 = cljs.test.do_report.call(null,inst_31411);
var state_31430__$1 = state_31430;
var statearr_31438_31509 = state_31430__$1;
(statearr_31438_31509[(2)] = inst_31412);

(statearr_31438_31509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31431 === (7))){
var inst_31404 = (state_31430[(8)]);
var inst_31414 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31415 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31416 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31417 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31418 = cljs.core.cons.call(null,inst_31417,inst_31404);
var inst_31419 = (new cljs.core.List(null,inst_31418,null,(1),null));
var inst_31420 = (new cljs.core.List(null,inst_31416,inst_31419,(2),null));
var inst_31421 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31415,inst_31420,null];
var inst_31422 = cljs.core.PersistentHashMap.fromArrays(inst_31414,inst_31421);
var inst_31423 = cljs.test.do_report.call(null,inst_31422);
var state_31430__$1 = state_31430;
var statearr_31439_31510 = state_31430__$1;
(statearr_31439_31510[(2)] = inst_31423);

(statearr_31439_31510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31431 === (8))){
var inst_31405 = (state_31430[(9)]);
var inst_31425 = (state_31430[(2)]);
var state_31430__$1 = (function (){var statearr_31440 = state_31430;
(statearr_31440[(10)] = inst_31425);

return statearr_31440;
})();
var statearr_31441_31511 = state_31430__$1;
(statearr_31441_31511[(2)] = inst_31405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31430__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31430){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__15543__auto__ = e31443;
var statearr_31444_31512 = state_31430;
(statearr_31444_31512[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31513 = state_31430;
state_31430 = G__31513;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31430){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_31445 = f__15635__auto__.call(null);
(statearr_31445[(6)] = c__15634__auto__);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.apply = (function (self__,args31386){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31386)));
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31491_31514 = state_31489__$1;
(statearr_31491_31514[(2)] = null);

(statearr_31491_31514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var inst_31486 = (state_31489[(2)]);
var inst_31487 = done.call(null);
var state_31489__$1 = (function (){var statearr_31492 = state_31489;
(statearr_31492[(7)] = inst_31486);

return statearr_31492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (3))){
var inst_31446 = (state_31489[(2)]);
var inst_31447 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31448 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31449 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31448,inst_31446,null];
var inst_31450 = cljs.core.PersistentHashMap.fromArrays(inst_31447,inst_31449);
var inst_31451 = cljs.test.do_report.call(null,inst_31450);
var state_31489__$1 = state_31489;
var statearr_31493_31515 = state_31489__$1;
(statearr_31493_31515[(2)] = inst_31451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31489__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31489,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31455 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31456 = [true];
var inst_31457 = cljs.core.PersistentHashMap.fromArrays(inst_31455,inst_31456);
var inst_31458 = klipse_clj.lang.clojure.str_compile.call(null,"(def abb ::a)",inst_31457);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31489__$1,(5),inst_31458);
} else {
if((state_val_31490 === (5))){
var inst_31464 = (state_31489[(8)]);
var inst_31463 = (state_31489[(9)]);
var inst_31460 = (state_31489[(2)]);
var inst_31461 = cljs.core.second.call(null,inst_31460);
var inst_31462 = (new cljs.core.List(null,"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n",null,(1),null));
var inst_31463__$1 = (new cljs.core.List(null,inst_31461,inst_31462,(2),null));
var inst_31464__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31463__$1);
var state_31489__$1 = (function (){var statearr_31494 = state_31489;
(statearr_31494[(8)] = inst_31464__$1);

(statearr_31494[(9)] = inst_31463__$1);

return statearr_31494;
})();
if(cljs.core.truth_(inst_31464__$1)){
var statearr_31495_31516 = state_31489__$1;
(statearr_31495_31516[(1)] = (6));

} else {
var statearr_31496_31517 = state_31489__$1;
(statearr_31496_31517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var inst_31463 = (state_31489[(9)]);
var inst_31466 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31467 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31468 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31463);
var inst_31469 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31467,inst_31468,null];
var inst_31470 = cljs.core.PersistentHashMap.fromArrays(inst_31466,inst_31469);
var inst_31471 = cljs.test.do_report.call(null,inst_31470);
var state_31489__$1 = state_31489;
var statearr_31497_31518 = state_31489__$1;
(statearr_31497_31518[(2)] = inst_31471);

(statearr_31497_31518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (7))){
var inst_31463 = (state_31489[(9)]);
var inst_31473 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31474 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def abb ::a)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.abb = new cljs.core.Keyword(\"cljs.user\",\"a\",\"cljs.user/a\",(-1455139307));\n");
var inst_31475 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31476 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31477 = cljs.core.cons.call(null,inst_31476,inst_31463);
var inst_31478 = (new cljs.core.List(null,inst_31477,null,(1),null));
var inst_31479 = (new cljs.core.List(null,inst_31475,inst_31478,(2),null));
var inst_31480 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31474,inst_31479,null];
var inst_31481 = cljs.core.PersistentHashMap.fromArrays(inst_31473,inst_31480);
var inst_31482 = cljs.test.do_report.call(null,inst_31481);
var state_31489__$1 = state_31489;
var statearr_31498_31519 = state_31489__$1;
(statearr_31498_31519[(2)] = inst_31482);

(statearr_31498_31519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (8))){
var inst_31464 = (state_31489[(8)]);
var inst_31484 = (state_31489[(2)]);
var state_31489__$1 = (function (){var statearr_31499 = state_31489;
(statearr_31499[(10)] = inst_31484);

return statearr_31499;
})();
var statearr_31500_31520 = state_31489__$1;
(statearr_31500_31520[(2)] = inst_31464);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31489__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31501[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31501[(1)] = (1));

return statearr_31501;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31489){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31502){if((e31502 instanceof Object)){
var ex__15543__auto__ = e31502;
var statearr_31503_31521 = state_31489;
(statearr_31503_31521[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31522 = state_31489;
state_31489 = G__31522;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_31504 = f__15635__auto__.call(null);
(statearr_31504[(6)] = c__15634__auto__);

return statearr_31504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31384","meta31384",1476276533,null)], null);
});

klipse_clj.compile_test.t_klipse_clj$compile_test31383.cljs$lang$type = true;

klipse_clj.compile_test.t_klipse_clj$compile_test31383.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test31383";

klipse_clj.compile_test.t_klipse_clj$compile_test31383.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test31383");
});

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test31383.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test31383 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test31383(meta31384){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test31383(meta31384));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test31383(null));
});

klipse_clj.compile_test.success2.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.success2;},new cljs.core.Symbol("klipse-clj.compile-test","success2","klipse-clj.compile-test/success2",147799257,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"success2","success2",375674189,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/compile_test.cljs",18,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.success2)?klipse_clj.compile_test.success2.cljs$lang$test:null)]));
klipse_clj.compile_test.test_tagged_literals = (function klipse_clj$compile_test$test_tagged_literals(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.test_tagged_literals.cljs$lang$var);
});
klipse_clj.compile_test.test_tagged_literals.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test31523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test31523 = (function (meta31524){
this.meta31524 = meta31524;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31525,meta31524__$1){
var self__ = this;
var _31525__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test31523(meta31524__$1));
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31525){
var self__ = this;
var _31525__$1 = this;
return self__.meta31524;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_31693){
var state_val_31694 = (state_31693[(1)]);
if((state_val_31694 === (7))){
var inst_31544 = (state_31693[(7)]);
var inst_31554 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31555 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31556 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31557 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31558 = cljs.core.cons.call(null,inst_31557,inst_31544);
var inst_31559 = (new cljs.core.List(null,inst_31558,null,(1),null));
var inst_31560 = (new cljs.core.List(null,inst_31556,inst_31559,(2),null));
var inst_31561 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31555,inst_31560,null];
var inst_31562 = cljs.core.PersistentHashMap.fromArrays(inst_31554,inst_31561);
var inst_31563 = cljs.test.do_report.call(null,inst_31562);
var state_31693__$1 = state_31693;
var statearr_31695_31951 = state_31693__$1;
(statearr_31695_31951[(2)] = inst_31563);

(statearr_31695_31951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (20))){
var inst_31626 = (state_31693[(8)]);
var inst_31629 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31630 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31631 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31626);
var inst_31632 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31630,inst_31631,null];
var inst_31633 = cljs.core.PersistentHashMap.fromArrays(inst_31629,inst_31632);
var inst_31634 = cljs.test.do_report.call(null,inst_31633);
var state_31693__$1 = state_31693;
var statearr_31696_31952 = state_31693__$1;
(statearr_31696_31952[(2)] = inst_31634);

(statearr_31696_31952[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (27))){
var inst_31667 = (state_31693[(9)]);
var inst_31670 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31671 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31672 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31667);
var inst_31673 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31671,inst_31672,null];
var inst_31674 = cljs.core.PersistentHashMap.fromArrays(inst_31670,inst_31673);
var inst_31675 = cljs.test.do_report.call(null,inst_31674);
var state_31693__$1 = state_31693;
var statearr_31697_31953 = state_31693__$1;
(statearr_31697_31953[(2)] = inst_31675);

(statearr_31697_31953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (1))){
var state_31693__$1 = state_31693;
var statearr_31698_31954 = state_31693__$1;
(statearr_31698_31954[(2)] = null);

(statearr_31698_31954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (24))){
var inst_31650 = (state_31693[(2)]);
var inst_31651 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31652 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31653 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31652,inst_31650,null];
var inst_31654 = cljs.core.PersistentHashMap.fromArrays(inst_31651,inst_31653);
var inst_31655 = cljs.test.do_report.call(null,inst_31654);
var state_31693__$1 = state_31693;
var statearr_31699_31955 = state_31693__$1;
(statearr_31699_31955[(2)] = inst_31655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31693,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31536 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31537 = [true];
var inst_31538 = cljs.core.PersistentHashMap.fromArrays(inst_31536,inst_31537);
var inst_31539 = klipse_clj.lang.clojure.str_compile.call(null,"#js []",inst_31538);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(5),inst_31539);
} else {
if((state_val_31694 === (15))){
var inst_31586 = (state_31693[(10)]);
var inst_31606 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31700 = state_31693;
(statearr_31700[(11)] = inst_31606);

return statearr_31700;
})();
var statearr_31701_31956 = state_31693__$1;
(statearr_31701_31956[(2)] = inst_31586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (21))){
var inst_31626 = (state_31693[(8)]);
var inst_31636 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31637 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31638 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31639 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31640 = cljs.core.cons.call(null,inst_31639,inst_31626);
var inst_31641 = (new cljs.core.List(null,inst_31640,null,(1),null));
var inst_31642 = (new cljs.core.List(null,inst_31638,inst_31641,(2),null));
var inst_31643 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31637,inst_31642,null];
var inst_31644 = cljs.core.PersistentHashMap.fromArrays(inst_31636,inst_31643);
var inst_31645 = cljs.test.do_report.call(null,inst_31644);
var state_31693__$1 = state_31693;
var statearr_31702_31957 = state_31693__$1;
(statearr_31702_31957[(2)] = inst_31645);

(statearr_31702_31957[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (13))){
var inst_31585 = (state_31693[(12)]);
var inst_31588 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31589 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31590 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31585);
var inst_31591 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31589,inst_31590,null];
var inst_31592 = cljs.core.PersistentHashMap.fromArrays(inst_31588,inst_31591);
var inst_31593 = cljs.test.do_report.call(null,inst_31592);
var state_31693__$1 = state_31693;
var statearr_31703_31958 = state_31693__$1;
(statearr_31703_31958[(2)] = inst_31593);

(statearr_31703_31958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (22))){
var inst_31627 = (state_31693[(13)]);
var inst_31647 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31704 = state_31693;
(statearr_31704[(14)] = inst_31647);

return statearr_31704;
})();
var statearr_31705_31959 = state_31693__$1;
(statearr_31705_31959[(2)] = inst_31627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (29))){
var inst_31668 = (state_31693[(15)]);
var inst_31688 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31706 = state_31693;
(statearr_31706[(16)] = inst_31688);

return statearr_31706;
})();
var statearr_31707_31960 = state_31693__$1;
(statearr_31707_31960[(2)] = inst_31668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (6))){
var inst_31544 = (state_31693[(7)]);
var inst_31547 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31548 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31549 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31544);
var inst_31550 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31548,inst_31549,null];
var inst_31551 = cljs.core.PersistentHashMap.fromArrays(inst_31547,inst_31550);
var inst_31552 = cljs.test.do_report.call(null,inst_31551);
var state_31693__$1 = state_31693;
var statearr_31708_31961 = state_31693__$1;
(statearr_31708_31961[(2)] = inst_31552);

(statearr_31708_31961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (28))){
var inst_31667 = (state_31693[(9)]);
var inst_31677 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31678 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31679 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31680 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31681 = cljs.core.cons.call(null,inst_31680,inst_31667);
var inst_31682 = (new cljs.core.List(null,inst_31681,null,(1),null));
var inst_31683 = (new cljs.core.List(null,inst_31679,inst_31682,(2),null));
var inst_31684 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31678,inst_31683,null];
var inst_31685 = cljs.core.PersistentHashMap.fromArrays(inst_31677,inst_31684);
var inst_31686 = cljs.test.do_report.call(null,inst_31685);
var state_31693__$1 = state_31693;
var statearr_31709_31962 = state_31693__$1;
(statearr_31709_31962[(2)] = inst_31686);

(statearr_31709_31962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31693,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_31659 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31660 = [true];
var inst_31661 = cljs.core.PersistentHashMap.fromArrays(inst_31659,inst_31660);
var inst_31662 = klipse_clj.lang.clojure.str_compile.call(null,"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",inst_31661);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(26),inst_31662);
} else {
if((state_val_31694 === (17))){
var inst_31609 = (state_31693[(2)]);
var inst_31610 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31611 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31612 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31611,inst_31609,null];
var inst_31613 = cljs.core.PersistentHashMap.fromArrays(inst_31610,inst_31612);
var inst_31614 = cljs.test.do_report.call(null,inst_31613);
var state_31693__$1 = state_31693;
var statearr_31710_31963 = state_31693__$1;
(statearr_31710_31963[(2)] = inst_31614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (3))){
var inst_31527 = (state_31693[(2)]);
var inst_31528 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31529 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31530 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31529,inst_31527,null];
var inst_31531 = cljs.core.PersistentHashMap.fromArrays(inst_31528,inst_31530);
var inst_31532 = cljs.test.do_report.call(null,inst_31531);
var state_31693__$1 = state_31693;
var statearr_31711_31964 = state_31693__$1;
(statearr_31711_31964[(2)] = inst_31532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (12))){
var inst_31586 = (state_31693[(10)]);
var inst_31585 = (state_31693[(12)]);
var inst_31582 = (state_31693[(2)]);
var inst_31583 = cljs.core.second.call(null,inst_31582);
var inst_31584 = (new cljs.core.List(null,"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n",null,(1),null));
var inst_31585__$1 = (new cljs.core.List(null,inst_31583,inst_31584,(2),null));
var inst_31586__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31585__$1);
var state_31693__$1 = (function (){var statearr_31712 = state_31693;
(statearr_31712[(10)] = inst_31586__$1);

(statearr_31712[(12)] = inst_31585__$1);

return statearr_31712;
})();
if(cljs.core.truth_(inst_31586__$1)){
var statearr_31713_31965 = state_31693__$1;
(statearr_31713_31965[(1)] = (13));

} else {
var statearr_31714_31966 = state_31693__$1;
(statearr_31714_31966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (2))){
var inst_31567 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31715 = state_31693;
(statearr_31715[(17)] = inst_31567);

return statearr_31715;
})();
var statearr_31716_31967 = state_31693__$1;
(statearr_31716_31967[(2)] = null);

(statearr_31716_31967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (23))){
var inst_31690 = (state_31693[(2)]);
var inst_31691 = done.call(null);
var state_31693__$1 = (function (){var statearr_31717 = state_31693;
(statearr_31717[(18)] = inst_31690);

return statearr_31717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31693__$1,inst_31691);
} else {
if((state_val_31694 === (19))){
var inst_31626 = (state_31693[(8)]);
var inst_31627 = (state_31693[(13)]);
var inst_31623 = (state_31693[(2)]);
var inst_31624 = cljs.core.second.call(null,inst_31623);
var inst_31625 = (new cljs.core.List(null,"cljs.user.b = new Date(1535760000000);\n",null,(1),null));
var inst_31626__$1 = (new cljs.core.List(null,inst_31624,inst_31625,(2),null));
var inst_31627__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31626__$1);
var state_31693__$1 = (function (){var statearr_31718 = state_31693;
(statearr_31718[(8)] = inst_31626__$1);

(statearr_31718[(13)] = inst_31627__$1);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31627__$1)){
var statearr_31719_31968 = state_31693__$1;
(statearr_31719_31968[(1)] = (20));

} else {
var statearr_31720_31969 = state_31693__$1;
(statearr_31720_31969[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31693,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31577 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31578 = [true];
var inst_31579 = cljs.core.PersistentHashMap.fromArrays(inst_31577,inst_31578);
var inst_31580 = klipse_clj.lang.clojure.str_compile.call(null,"(def c #queue [1])",inst_31579);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(12),inst_31580);
} else {
if((state_val_31694 === (9))){
var inst_31608 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31721 = state_31693;
(statearr_31721[(19)] = inst_31608);

return statearr_31721;
})();
var statearr_31722_31970 = state_31693__$1;
(statearr_31722_31970[(2)] = null);

(statearr_31722_31970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (5))){
var inst_31545 = (state_31693[(20)]);
var inst_31544 = (state_31693[(7)]);
var inst_31541 = (state_31693[(2)]);
var inst_31542 = cljs.core.second.call(null,inst_31541);
var inst_31543 = (new cljs.core.List(null,"[];",null,(1),null));
var inst_31544__$1 = (new cljs.core.List(null,inst_31542,inst_31543,(2),null));
var inst_31545__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31544__$1);
var state_31693__$1 = (function (){var statearr_31723 = state_31693;
(statearr_31723[(20)] = inst_31545__$1);

(statearr_31723[(7)] = inst_31544__$1);

return statearr_31723;
})();
if(cljs.core.truth_(inst_31545__$1)){
var statearr_31724_31971 = state_31693__$1;
(statearr_31724_31971[(1)] = (6));

} else {
var statearr_31725_31972 = state_31693__$1;
(statearr_31725_31972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (14))){
var inst_31585 = (state_31693[(12)]);
var inst_31595 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31596 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31597 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31598 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31599 = cljs.core.cons.call(null,inst_31598,inst_31585);
var inst_31600 = (new cljs.core.List(null,inst_31599,null,(1),null));
var inst_31601 = (new cljs.core.List(null,inst_31597,inst_31600,(2),null));
var inst_31602 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31596,inst_31601,null];
var inst_31603 = cljs.core.PersistentHashMap.fromArrays(inst_31595,inst_31602);
var inst_31604 = cljs.test.do_report.call(null,inst_31603);
var state_31693__$1 = state_31693;
var statearr_31726_31973 = state_31693__$1;
(statearr_31726_31973[(2)] = inst_31604);

(statearr_31726_31973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (26))){
var inst_31668 = (state_31693[(15)]);
var inst_31667 = (state_31693[(9)]);
var inst_31664 = (state_31693[(2)]);
var inst_31665 = cljs.core.second.call(null,inst_31664);
var inst_31666 = (new cljs.core.List(null,"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n",null,(1),null));
var inst_31667__$1 = (new cljs.core.List(null,inst_31665,inst_31666,(2),null));
var inst_31668__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31667__$1);
var state_31693__$1 = (function (){var statearr_31727 = state_31693;
(statearr_31727[(15)] = inst_31668__$1);

(statearr_31727[(9)] = inst_31667__$1);

return statearr_31727;
})();
if(cljs.core.truth_(inst_31668__$1)){
var statearr_31728_31974 = state_31693__$1;
(statearr_31728_31974[(1)] = (27));

} else {
var statearr_31729_31975 = state_31693__$1;
(statearr_31729_31975[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (16))){
var inst_31649 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31730 = state_31693;
(statearr_31730[(21)] = inst_31649);

return statearr_31730;
})();
var statearr_31731_31976 = state_31693__$1;
(statearr_31731_31976[(2)] = null);

(statearr_31731_31976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (10))){
var inst_31568 = (state_31693[(2)]);
var inst_31569 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31570 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31571 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31570,inst_31568,null];
var inst_31572 = cljs.core.PersistentHashMap.fromArrays(inst_31569,inst_31571);
var inst_31573 = cljs.test.do_report.call(null,inst_31572);
var state_31693__$1 = state_31693;
var statearr_31732_31977 = state_31693__$1;
(statearr_31732_31977[(2)] = inst_31573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31694 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31693,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31618 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31619 = [true];
var inst_31620 = cljs.core.PersistentHashMap.fromArrays(inst_31618,inst_31619);
var inst_31621 = klipse_clj.lang.clojure.str_compile.call(null,"(def b #inst \"2018-09-01\")",inst_31620);
var state_31693__$1 = state_31693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31693__$1,(19),inst_31621);
} else {
if((state_val_31694 === (8))){
var inst_31545 = (state_31693[(20)]);
var inst_31565 = (state_31693[(2)]);
var state_31693__$1 = (function (){var statearr_31733 = state_31693;
(statearr_31733[(22)] = inst_31565);

return statearr_31733;
})();
var statearr_31734_31978 = state_31693__$1;
(statearr_31734_31978[(2)] = inst_31545);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31693){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31736){if((e31736 instanceof Object)){
var ex__15543__auto__ = e31736;
var statearr_31737_31979 = state_31693;
(statearr_31737_31979[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31980 = state_31693;
state_31693 = G__31980;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31693){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_31738 = f__15635__auto__.call(null);
(statearr_31738[(6)] = c__15634__auto__);

return statearr_31738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.apply = (function (self__,args31526){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31526)));
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_31905){
var state_val_31906 = (state_31905[(1)]);
if((state_val_31906 === (7))){
var inst_31756 = (state_31905[(7)]);
var inst_31766 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31767 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31768 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31769 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31770 = cljs.core.cons.call(null,inst_31769,inst_31756);
var inst_31771 = (new cljs.core.List(null,inst_31770,null,(1),null));
var inst_31772 = (new cljs.core.List(null,inst_31768,inst_31771,(2),null));
var inst_31773 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31767,inst_31772,null];
var inst_31774 = cljs.core.PersistentHashMap.fromArrays(inst_31766,inst_31773);
var inst_31775 = cljs.test.do_report.call(null,inst_31774);
var state_31905__$1 = state_31905;
var statearr_31907_31981 = state_31905__$1;
(statearr_31907_31981[(2)] = inst_31775);

(statearr_31907_31981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (20))){
var inst_31838 = (state_31905[(8)]);
var inst_31841 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31842 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31843 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31838);
var inst_31844 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31842,inst_31843,null];
var inst_31845 = cljs.core.PersistentHashMap.fromArrays(inst_31841,inst_31844);
var inst_31846 = cljs.test.do_report.call(null,inst_31845);
var state_31905__$1 = state_31905;
var statearr_31908_31982 = state_31905__$1;
(statearr_31908_31982[(2)] = inst_31846);

(statearr_31908_31982[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (27))){
var inst_31879 = (state_31905[(9)]);
var inst_31882 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31883 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31884 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31879);
var inst_31885 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31883,inst_31884,null];
var inst_31886 = cljs.core.PersistentHashMap.fromArrays(inst_31882,inst_31885);
var inst_31887 = cljs.test.do_report.call(null,inst_31886);
var state_31905__$1 = state_31905;
var statearr_31909_31983 = state_31905__$1;
(statearr_31909_31983[(2)] = inst_31887);

(statearr_31909_31983[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (1))){
var state_31905__$1 = state_31905;
var statearr_31910_31984 = state_31905__$1;
(statearr_31910_31984[(2)] = null);

(statearr_31910_31984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (24))){
var inst_31862 = (state_31905[(2)]);
var inst_31863 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31864 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31865 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31864,inst_31862,null];
var inst_31866 = cljs.core.PersistentHashMap.fromArrays(inst_31863,inst_31865);
var inst_31867 = cljs.test.do_report.call(null,inst_31866);
var state_31905__$1 = state_31905;
var statearr_31911_31985 = state_31905__$1;
(statearr_31911_31985[(2)] = inst_31867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31905,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31748 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31749 = [true];
var inst_31750 = cljs.core.PersistentHashMap.fromArrays(inst_31748,inst_31749);
var inst_31751 = klipse_clj.lang.clojure.str_compile.call(null,"#js []",inst_31750);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31905__$1,(5),inst_31751);
} else {
if((state_val_31906 === (15))){
var inst_31798 = (state_31905[(10)]);
var inst_31818 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31912 = state_31905;
(statearr_31912[(11)] = inst_31818);

return statearr_31912;
})();
var statearr_31913_31986 = state_31905__$1;
(statearr_31913_31986[(2)] = inst_31798);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (21))){
var inst_31838 = (state_31905[(8)]);
var inst_31848 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31849 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31850 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31851 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31852 = cljs.core.cons.call(null,inst_31851,inst_31838);
var inst_31853 = (new cljs.core.List(null,inst_31852,null,(1),null));
var inst_31854 = (new cljs.core.List(null,inst_31850,inst_31853,(2),null));
var inst_31855 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31849,inst_31854,null];
var inst_31856 = cljs.core.PersistentHashMap.fromArrays(inst_31848,inst_31855);
var inst_31857 = cljs.test.do_report.call(null,inst_31856);
var state_31905__$1 = state_31905;
var statearr_31914_31987 = state_31905__$1;
(statearr_31914_31987[(2)] = inst_31857);

(statearr_31914_31987[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (13))){
var inst_31797 = (state_31905[(12)]);
var inst_31800 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31801 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31802 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31797);
var inst_31803 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31801,inst_31802,null];
var inst_31804 = cljs.core.PersistentHashMap.fromArrays(inst_31800,inst_31803);
var inst_31805 = cljs.test.do_report.call(null,inst_31804);
var state_31905__$1 = state_31905;
var statearr_31915_31988 = state_31905__$1;
(statearr_31915_31988[(2)] = inst_31805);

(statearr_31915_31988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (22))){
var inst_31839 = (state_31905[(13)]);
var inst_31859 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31916 = state_31905;
(statearr_31916[(14)] = inst_31859);

return statearr_31916;
})();
var statearr_31917_31989 = state_31905__$1;
(statearr_31917_31989[(2)] = inst_31839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (29))){
var inst_31880 = (state_31905[(15)]);
var inst_31900 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31918 = state_31905;
(statearr_31918[(16)] = inst_31900);

return statearr_31918;
})();
var statearr_31919_31990 = state_31905__$1;
(statearr_31919_31990[(2)] = inst_31880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (6))){
var inst_31756 = (state_31905[(7)]);
var inst_31759 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31760 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31761 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_31756);
var inst_31762 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31760,inst_31761,null];
var inst_31763 = cljs.core.PersistentHashMap.fromArrays(inst_31759,inst_31762);
var inst_31764 = cljs.test.do_report.call(null,inst_31763);
var state_31905__$1 = state_31905;
var statearr_31920_31991 = state_31905__$1;
(statearr_31920_31991[(2)] = inst_31764);

(statearr_31920_31991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (28))){
var inst_31879 = (state_31905[(9)]);
var inst_31889 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31890 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n");
var inst_31891 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31892 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31893 = cljs.core.cons.call(null,inst_31892,inst_31879);
var inst_31894 = (new cljs.core.List(null,inst_31893,null,(1),null));
var inst_31895 = (new cljs.core.List(null,inst_31891,inst_31894,(2),null));
var inst_31896 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31890,inst_31895,null];
var inst_31897 = cljs.core.PersistentHashMap.fromArrays(inst_31889,inst_31896);
var inst_31898 = cljs.test.do_report.call(null,inst_31897);
var state_31905__$1 = state_31905;
var statearr_31921_31992 = state_31905__$1;
(statearr_31921_31992[(2)] = inst_31898);

(statearr_31921_31992[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31905,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_31871 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31872 = [true];
var inst_31873 = cljs.core.PersistentHashMap.fromArrays(inst_31871,inst_31872);
var inst_31874 = klipse_clj.lang.clojure.str_compile.call(null,"(def a #uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\")",inst_31873);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31905__$1,(26),inst_31874);
} else {
if((state_val_31906 === (17))){
var inst_31821 = (state_31905[(2)]);
var inst_31822 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31823 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def b #inst \"2018-09-01\")",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.b = new Date(1535760000000);\n");
var inst_31824 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31823,inst_31821,null];
var inst_31825 = cljs.core.PersistentHashMap.fromArrays(inst_31822,inst_31824);
var inst_31826 = cljs.test.do_report.call(null,inst_31825);
var state_31905__$1 = state_31905;
var statearr_31922_31993 = state_31905__$1;
(statearr_31922_31993[(2)] = inst_31826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (3))){
var inst_31739 = (state_31905[(2)]);
var inst_31740 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31741 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"#js []",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"[];");
var inst_31742 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31741,inst_31739,null];
var inst_31743 = cljs.core.PersistentHashMap.fromArrays(inst_31740,inst_31742);
var inst_31744 = cljs.test.do_report.call(null,inst_31743);
var state_31905__$1 = state_31905;
var statearr_31923_31994 = state_31905__$1;
(statearr_31923_31994[(2)] = inst_31744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (12))){
var inst_31797 = (state_31905[(12)]);
var inst_31798 = (state_31905[(10)]);
var inst_31794 = (state_31905[(2)]);
var inst_31795 = cljs.core.second.call(null,inst_31794);
var inst_31796 = (new cljs.core.List(null,"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n",null,(1),null));
var inst_31797__$1 = (new cljs.core.List(null,inst_31795,inst_31796,(2),null));
var inst_31798__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31797__$1);
var state_31905__$1 = (function (){var statearr_31924 = state_31905;
(statearr_31924[(12)] = inst_31797__$1);

(statearr_31924[(10)] = inst_31798__$1);

return statearr_31924;
})();
if(cljs.core.truth_(inst_31798__$1)){
var statearr_31925_31995 = state_31905__$1;
(statearr_31925_31995[(1)] = (13));

} else {
var statearr_31926_31996 = state_31905__$1;
(statearr_31926_31996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (2))){
var inst_31779 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31927 = state_31905;
(statearr_31927[(17)] = inst_31779);

return statearr_31927;
})();
var statearr_31928_31997 = state_31905__$1;
(statearr_31928_31997[(2)] = null);

(statearr_31928_31997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (23))){
var inst_31902 = (state_31905[(2)]);
var inst_31903 = done.call(null);
var state_31905__$1 = (function (){var statearr_31929 = state_31905;
(statearr_31929[(18)] = inst_31902);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31905__$1,inst_31903);
} else {
if((state_val_31906 === (19))){
var inst_31838 = (state_31905[(8)]);
var inst_31839 = (state_31905[(13)]);
var inst_31835 = (state_31905[(2)]);
var inst_31836 = cljs.core.second.call(null,inst_31835);
var inst_31837 = (new cljs.core.List(null,"cljs.user.b = new Date(1535760000000);\n",null,(1),null));
var inst_31838__$1 = (new cljs.core.List(null,inst_31836,inst_31837,(2),null));
var inst_31839__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31838__$1);
var state_31905__$1 = (function (){var statearr_31930 = state_31905;
(statearr_31930[(8)] = inst_31838__$1);

(statearr_31930[(13)] = inst_31839__$1);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31839__$1)){
var statearr_31931_31998 = state_31905__$1;
(statearr_31931_31998[(1)] = (20));

} else {
var statearr_31932_31999 = state_31905__$1;
(statearr_31932_31999[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31905,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31789 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31790 = [true];
var inst_31791 = cljs.core.PersistentHashMap.fromArrays(inst_31789,inst_31790);
var inst_31792 = klipse_clj.lang.clojure.str_compile.call(null,"(def c #queue [1])",inst_31791);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31905__$1,(12),inst_31792);
} else {
if((state_val_31906 === (9))){
var inst_31820 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31933 = state_31905;
(statearr_31933[(19)] = inst_31820);

return statearr_31933;
})();
var statearr_31934_32000 = state_31905__$1;
(statearr_31934_32000[(2)] = null);

(statearr_31934_32000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (5))){
var inst_31756 = (state_31905[(7)]);
var inst_31757 = (state_31905[(20)]);
var inst_31753 = (state_31905[(2)]);
var inst_31754 = cljs.core.second.call(null,inst_31753);
var inst_31755 = (new cljs.core.List(null,"[];",null,(1),null));
var inst_31756__$1 = (new cljs.core.List(null,inst_31754,inst_31755,(2),null));
var inst_31757__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31756__$1);
var state_31905__$1 = (function (){var statearr_31935 = state_31905;
(statearr_31935[(7)] = inst_31756__$1);

(statearr_31935[(20)] = inst_31757__$1);

return statearr_31935;
})();
if(cljs.core.truth_(inst_31757__$1)){
var statearr_31936_32001 = state_31905__$1;
(statearr_31936_32001[(1)] = (6));

} else {
var statearr_31937_32002 = state_31905__$1;
(statearr_31937_32002[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (14))){
var inst_31797 = (state_31905[(12)]);
var inst_31807 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31808 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31809 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31810 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_31811 = cljs.core.cons.call(null,inst_31810,inst_31797);
var inst_31812 = (new cljs.core.List(null,inst_31811,null,(1),null));
var inst_31813 = (new cljs.core.List(null,inst_31809,inst_31812,(2),null));
var inst_31814 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31808,inst_31813,null];
var inst_31815 = cljs.core.PersistentHashMap.fromArrays(inst_31807,inst_31814);
var inst_31816 = cljs.test.do_report.call(null,inst_31815);
var state_31905__$1 = state_31905;
var statearr_31938_32003 = state_31905__$1;
(statearr_31938_32003[(2)] = inst_31816);

(statearr_31938_32003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (26))){
var inst_31879 = (state_31905[(9)]);
var inst_31880 = (state_31905[(15)]);
var inst_31876 = (state_31905[(2)]);
var inst_31877 = cljs.core.second.call(null,inst_31876);
var inst_31878 = (new cljs.core.List(null,"cljs.user.a = new cljs.core.UUID(\"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\", 1954290834);\n",null,(1),null));
var inst_31879__$1 = (new cljs.core.List(null,inst_31877,inst_31878,(2),null));
var inst_31880__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_31879__$1);
var state_31905__$1 = (function (){var statearr_31939 = state_31905;
(statearr_31939[(9)] = inst_31879__$1);

(statearr_31939[(15)] = inst_31880__$1);

return statearr_31939;
})();
if(cljs.core.truth_(inst_31880__$1)){
var statearr_31940_32004 = state_31905__$1;
(statearr_31940_32004[(1)] = (27));

} else {
var statearr_31941_32005 = state_31905__$1;
(statearr_31941_32005[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (16))){
var inst_31861 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31942 = state_31905;
(statearr_31942[(21)] = inst_31861);

return statearr_31942;
})();
var statearr_31943_32006 = state_31905__$1;
(statearr_31943_32006[(2)] = null);

(statearr_31943_32006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (10))){
var inst_31780 = (state_31905[(2)]);
var inst_31781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31782 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(def c #queue [1])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),true], null)))),"cljs.user.c = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));\n");
var inst_31783 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31782,inst_31780,null];
var inst_31784 = cljs.core.PersistentHashMap.fromArrays(inst_31781,inst_31783);
var inst_31785 = cljs.test.do_report.call(null,inst_31784);
var state_31905__$1 = state_31905;
var statearr_31944_32007 = state_31905__$1;
(statearr_31944_32007[(2)] = inst_31785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31905,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31830 = [new cljs.core.Keyword(null,"verbose?","verbose?",1244836832)];
var inst_31831 = [true];
var inst_31832 = cljs.core.PersistentHashMap.fromArrays(inst_31830,inst_31831);
var inst_31833 = klipse_clj.lang.clojure.str_compile.call(null,"(def b #inst \"2018-09-01\")",inst_31832);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31905__$1,(19),inst_31833);
} else {
if((state_val_31906 === (8))){
var inst_31757 = (state_31905[(20)]);
var inst_31777 = (state_31905[(2)]);
var state_31905__$1 = (function (){var statearr_31945 = state_31905;
(statearr_31945[(22)] = inst_31777);

return statearr_31945;
})();
var statearr_31946_32008 = state_31905__$1;
(statearr_31946_32008[(2)] = inst_31757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_31947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31947[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_31947[(1)] = (1));

return statearr_31947;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_31905){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_31905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e31948){if((e31948 instanceof Object)){
var ex__15543__auto__ = e31948;
var statearr_31949_32009 = state_31905;
(statearr_31949_32009[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32010 = state_31905;
state_31905 = G__32010;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_31905){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_31905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_31950 = f__15635__auto__.call(null);
(statearr_31950[(6)] = c__15634__auto__);

return statearr_31950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31524","meta31524",185192552,null)], null);
});

klipse_clj.compile_test.t_klipse_clj$compile_test31523.cljs$lang$type = true;

klipse_clj.compile_test.t_klipse_clj$compile_test31523.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test31523";

klipse_clj.compile_test.t_klipse_clj$compile_test31523.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test31523");
});

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test31523.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test31523 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test31523(meta31524){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test31523(meta31524));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test31523(null));
});

klipse_clj.compile_test.test_tagged_literals.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.test_tagged_literals;},new cljs.core.Symbol("klipse-clj.compile-test","test-tagged-literals","klipse-clj.compile-test/test-tagged-literals",484248384,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"test-tagged-literals","test-tagged-literals",800337388,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/compile_test.cljs",30,1,51,51,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.test_tagged_literals)?klipse_clj.compile_test.test_tagged_literals.cljs$lang$test:null)]));
klipse_clj.compile_test.static_fn = (function klipse_clj$compile_test$static_fn(){
return cljs.test.test_var.call(null,klipse_clj.compile_test.static_fn.cljs$lang$var);
});
klipse_clj.compile_test.static_fn.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.compile_test !== 'undefined') && (typeof klipse_clj.compile_test.t_klipse_clj$compile_test32011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.compile_test.t_klipse_clj$compile_test32011 = (function (meta32012){
this.meta32012 = meta32012;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32013,meta32012__$1){
var self__ = this;
var _32013__$1 = this;
return (new klipse_clj.compile_test.t_klipse_clj$compile_test32011(meta32012__$1));
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32013){
var self__ = this;
var _32013__$1 = this;
return self__.meta32012;
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_32058){
var state_val_32059 = (state_32058[(1)]);
if((state_val_32059 === (1))){
var state_32058__$1 = state_32058;
var statearr_32060_32133 = state_32058__$1;
(statearr_32060_32133[(2)] = null);

(statearr_32060_32133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (2))){
var inst_32055 = (state_32058[(2)]);
var inst_32056 = done.call(null);
var state_32058__$1 = (function (){var statearr_32061 = state_32058;
(statearr_32061[(7)] = inst_32055);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32058__$1,inst_32056);
} else {
if((state_val_32059 === (3))){
var inst_32015 = (state_32058[(2)]);
var inst_32016 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32017 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32018 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32017,inst_32015,null];
var inst_32019 = cljs.core.PersistentHashMap.fromArrays(inst_32016,inst_32018);
var inst_32020 = cljs.test.do_report.call(null,inst_32019);
var state_32058__$1 = state_32058;
var statearr_32062_32134 = state_32058__$1;
(statearr_32062_32134[(2)] = inst_32020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32058,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_32024 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_32025 = [true];
var inst_32026 = cljs.core.PersistentHashMap.fromArrays(inst_32024,inst_32025);
var inst_32027 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)",inst_32026);
var state_32058__$1 = state_32058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32058__$1,(5),inst_32027);
} else {
if((state_val_32059 === (5))){
var inst_32032 = (state_32058[(8)]);
var inst_32033 = (state_32058[(9)]);
var inst_32029 = (state_32058[(2)]);
var inst_32030 = cljs.core.second.call(null,inst_32029);
var inst_32031 = (new cljs.core.List(null,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));",null,(1),null));
var inst_32032__$1 = (new cljs.core.List(null,inst_32030,inst_32031,(2),null));
var inst_32033__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_32032__$1);
var state_32058__$1 = (function (){var statearr_32063 = state_32058;
(statearr_32063[(8)] = inst_32032__$1);

(statearr_32063[(9)] = inst_32033__$1);

return statearr_32063;
})();
if(cljs.core.truth_(inst_32033__$1)){
var statearr_32064_32135 = state_32058__$1;
(statearr_32064_32135[(1)] = (6));

} else {
var statearr_32065_32136 = state_32058__$1;
(statearr_32065_32136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (6))){
var inst_32032 = (state_32058[(8)]);
var inst_32035 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32036 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32037 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_32032);
var inst_32038 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32036,inst_32037,null];
var inst_32039 = cljs.core.PersistentHashMap.fromArrays(inst_32035,inst_32038);
var inst_32040 = cljs.test.do_report.call(null,inst_32039);
var state_32058__$1 = state_32058;
var statearr_32066_32137 = state_32058__$1;
(statearr_32066_32137[(2)] = inst_32040);

(statearr_32066_32137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (7))){
var inst_32032 = (state_32058[(8)]);
var inst_32042 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32043 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32044 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32045 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_32046 = cljs.core.cons.call(null,inst_32045,inst_32032);
var inst_32047 = (new cljs.core.List(null,inst_32046,null,(1),null));
var inst_32048 = (new cljs.core.List(null,inst_32044,inst_32047,(2),null));
var inst_32049 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32043,inst_32048,null];
var inst_32050 = cljs.core.PersistentHashMap.fromArrays(inst_32042,inst_32049);
var inst_32051 = cljs.test.do_report.call(null,inst_32050);
var state_32058__$1 = state_32058;
var statearr_32067_32138 = state_32058__$1;
(statearr_32067_32138[(2)] = inst_32051);

(statearr_32067_32138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32059 === (8))){
var inst_32033 = (state_32058[(9)]);
var inst_32053 = (state_32058[(2)]);
var state_32058__$1 = (function (){var statearr_32068 = state_32058;
(statearr_32068[(10)] = inst_32053);

return statearr_32068;
})();
var statearr_32069_32139 = state_32058__$1;
(statearr_32069_32139[(2)] = inst_32033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32058__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_32070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32070[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_32070[(1)] = (1));

return statearr_32070;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_32058){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_32058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e32071){if((e32071 instanceof Object)){
var ex__15543__auto__ = e32071;
var statearr_32072_32140 = state_32058;
(statearr_32072_32140[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32141 = state_32058;
state_32058 = G__32141;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_32058){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_32058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_32073 = f__15635__auto__.call(null);
(statearr_32073[(6)] = c__15634__auto__);

return statearr_32073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.apply = (function (self__,args32014){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32014)));
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_32117){
var state_val_32118 = (state_32117[(1)]);
if((state_val_32118 === (1))){
var state_32117__$1 = state_32117;
var statearr_32119_32142 = state_32117__$1;
(statearr_32119_32142[(2)] = null);

(statearr_32119_32142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (2))){
var inst_32114 = (state_32117[(2)]);
var inst_32115 = done.call(null);
var state_32117__$1 = (function (){var statearr_32120 = state_32117;
(statearr_32120[(7)] = inst_32114);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32117__$1,inst_32115);
} else {
if((state_val_32118 === (3))){
var inst_32074 = (state_32117[(2)]);
var inst_32075 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32076 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32077 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32076,inst_32074,null];
var inst_32078 = cljs.core.PersistentHashMap.fromArrays(inst_32075,inst_32077);
var inst_32079 = cljs.test.do_report.call(null,inst_32078);
var state_32117__$1 = state_32117;
var statearr_32121_32143 = state_32117__$1;
(statearr_32121_32143[(2)] = inst_32079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32117,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_32083 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_32084 = [true];
var inst_32085 = cljs.core.PersistentHashMap.fromArrays(inst_32083,inst_32084);
var inst_32086 = klipse_clj.lang.clojure.str_compile.call(null,"(= 1 2)",inst_32085);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32117__$1,(5),inst_32086);
} else {
if((state_val_32118 === (5))){
var inst_32091 = (state_32117[(8)]);
var inst_32092 = (state_32117[(9)]);
var inst_32088 = (state_32117[(2)]);
var inst_32089 = cljs.core.second.call(null,inst_32088);
var inst_32090 = (new cljs.core.List(null,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));",null,(1),null));
var inst_32091__$1 = (new cljs.core.List(null,inst_32089,inst_32090,(2),null));
var inst_32092__$1 = cljs.core.apply.call(null,klipse_clj.compile_test.a_EQ_,inst_32091__$1);
var state_32117__$1 = (function (){var statearr_32122 = state_32117;
(statearr_32122[(8)] = inst_32091__$1);

(statearr_32122[(9)] = inst_32092__$1);

return statearr_32122;
})();
if(cljs.core.truth_(inst_32092__$1)){
var statearr_32123_32144 = state_32117__$1;
(statearr_32123_32144[(1)] = (6));

} else {
var statearr_32124_32145 = state_32117__$1;
(statearr_32124_32145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (6))){
var inst_32091 = (state_32117[(8)]);
var inst_32094 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32095 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32096 = cljs.core.cons.call(null,klipse_clj.compile_test.a_EQ_,inst_32091);
var inst_32097 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32095,inst_32096,null];
var inst_32098 = cljs.core.PersistentHashMap.fromArrays(inst_32094,inst_32097);
var inst_32099 = cljs.test.do_report.call(null,inst_32098);
var state_32117__$1 = state_32117;
var statearr_32125_32146 = state_32117__$1;
(statearr_32125_32146[(2)] = inst_32099);

(statearr_32125_32146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (7))){
var inst_32091 = (state_32117[(8)]);
var inst_32101 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32102 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(= 1 2)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true], null)))),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));");
var inst_32103 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32104 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_32105 = cljs.core.cons.call(null,inst_32104,inst_32091);
var inst_32106 = (new cljs.core.List(null,inst_32105,null,(1),null));
var inst_32107 = (new cljs.core.List(null,inst_32103,inst_32106,(2),null));
var inst_32108 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32102,inst_32107,null];
var inst_32109 = cljs.core.PersistentHashMap.fromArrays(inst_32101,inst_32108);
var inst_32110 = cljs.test.do_report.call(null,inst_32109);
var state_32117__$1 = state_32117;
var statearr_32126_32147 = state_32117__$1;
(statearr_32126_32147[(2)] = inst_32110);

(statearr_32126_32147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (8))){
var inst_32092 = (state_32117[(9)]);
var inst_32112 = (state_32117[(2)]);
var state_32117__$1 = (function (){var statearr_32127 = state_32117;
(statearr_32127[(10)] = inst_32112);

return statearr_32127;
})();
var statearr_32128_32148 = state_32117__$1;
(statearr_32128_32148[(2)] = inst_32092);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32117__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$compile_test$state_machine__15540__auto__ = null;
var klipse_clj$compile_test$state_machine__15540__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = klipse_clj$compile_test$state_machine__15540__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var klipse_clj$compile_test$state_machine__15540__auto____1 = (function (state_32117){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_32117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e32130){if((e32130 instanceof Object)){
var ex__15543__auto__ = e32130;
var statearr_32131_32149 = state_32117;
(statearr_32131_32149[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32150 = state_32117;
state_32117 = G__32150;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$compile_test$state_machine__15540__auto__ = function(state_32117){
switch(arguments.length){
case 0:
return klipse_clj$compile_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$compile_test$state_machine__15540__auto____1.call(this,state_32117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$compile_test$state_machine__15540__auto____0;
klipse_clj$compile_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$compile_test$state_machine__15540__auto____1;
return klipse_clj$compile_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_32132 = f__15635__auto__.call(null);
(statearr_32132[(6)] = c__15634__auto__);

return statearr_32132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32012","meta32012",-1434908881,null)], null);
});

klipse_clj.compile_test.t_klipse_clj$compile_test32011.cljs$lang$type = true;

klipse_clj.compile_test.t_klipse_clj$compile_test32011.cljs$lang$ctorStr = "klipse-clj.compile-test/t_klipse_clj$compile_test32011";

klipse_clj.compile_test.t_klipse_clj$compile_test32011.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.compile-test/t_klipse_clj$compile_test32011");
});

/**
 * Positional factory function for klipse-clj.compile-test/t_klipse_clj$compile_test32011.
 */
klipse_clj.compile_test.__GT_t_klipse_clj$compile_test32011 = (function klipse_clj$compile_test$__GT_t_klipse_clj$compile_test32011(meta32012){
return (new klipse_clj.compile_test.t_klipse_clj$compile_test32011(meta32012));
});

}

return (new klipse_clj.compile_test.t_klipse_clj$compile_test32011(null));
});

klipse_clj.compile_test.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.compile_test.static_fn;},new cljs.core.Symbol("klipse-clj.compile-test","static-fn","klipse-clj.compile-test/static-fn",-1107566514,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.compile-test","klipse-clj.compile-test",-1702259877,null),new cljs.core.Symbol(null,"static-fn","static-fn",-1353545006,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/compile_test.cljs",19,1,63,63,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.compile_test.static_fn)?klipse_clj.compile_test.static_fn.cljs$lang$test:null)]));

//# sourceMappingURL=compile_test.js.map
