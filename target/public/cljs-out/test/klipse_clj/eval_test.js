// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.eval_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('klipse_clj.lang.clojure.io');
goog.require('klipse_clj.repl');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('klipse_clj.lang.clojure');
klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verbose","verbose",1694226060),true], null);
klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_ = true;
klipse_clj.eval_test.remove_chars = (function klipse_clj$eval_test$remove_chars(s){
if(typeof s === 'string'){
return clojure.string.replace.call(null,s,/\n|\s/,"");
} else {
return s;
}
});
klipse_clj.eval_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test24112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test24112 = (function (meta24113){
this.meta24113 = meta24113;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24114,meta24113__$1){
var self__ = this;
var _24114__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24112(meta24113__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24114){
var self__ = this;
var _24114__$1 = this;
return self__.meta24113;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_24123){
var state_val_24124 = (state_24123[(1)]);
if((state_val_24124 === (1))){
var inst_24116 = klipse_clj.repl.reset_state_eval_BANG_.call(null);
var inst_24117 = klipse_clj.repl.reset_ns_eval_BANG_.call(null);
var inst_24118 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_24123__$1 = (function (){var statearr_24125 = state_24123;
(statearr_24125[(7)] = inst_24117);

(statearr_24125[(8)] = inst_24116);

return statearr_24125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24123__$1,(2),inst_24118);
} else {
if((state_val_24124 === (2))){
var inst_24120 = (state_24123[(2)]);
var inst_24121 = done.call(null);
var state_24123__$1 = (function (){var statearr_24126 = state_24123;
(statearr_24126[(9)] = inst_24120);

return statearr_24126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24123__$1,inst_24121);
} else {
return null;
}
}
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24127 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24127[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24127[(1)] = (1));

return statearr_24127;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24123){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24128){if((e24128 instanceof Object)){
var ex__15543__auto__ = e24128;
var statearr_24129_24146 = state_24123;
(statearr_24129_24146[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24147 = state_24123;
state_24123 = G__24147;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24123){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_24130 = f__15635__auto__.call(null);
(statearr_24130[(6)] = c__15634__auto__);

return statearr_24130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.apply = (function (self__,args24115){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24115)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_24138){
var state_val_24139 = (state_24138[(1)]);
if((state_val_24139 === (1))){
var inst_24131 = klipse_clj.repl.reset_state_eval_BANG_.call(null);
var inst_24132 = klipse_clj.repl.reset_ns_eval_BANG_.call(null);
var inst_24133 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_24138__$1 = (function (){var statearr_24140 = state_24138;
(statearr_24140[(7)] = inst_24131);

(statearr_24140[(8)] = inst_24132);

return statearr_24140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24138__$1,(2),inst_24133);
} else {
if((state_val_24139 === (2))){
var inst_24135 = (state_24138[(2)]);
var inst_24136 = done.call(null);
var state_24138__$1 = (function (){var statearr_24141 = state_24138;
(statearr_24141[(9)] = inst_24135);

return statearr_24141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24138__$1,inst_24136);
} else {
return null;
}
}
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24142[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24142[(1)] = (1));

return statearr_24142;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24138){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object)){
var ex__15543__auto__ = e24143;
var statearr_24144_24148 = state_24138;
(statearr_24144_24148[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24149 = state_24138;
state_24138 = G__24149;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24138){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_24145 = f__15635__auto__.call(null);
(statearr_24145[(6)] = c__15634__auto__);

return statearr_24145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24113","meta24113",-166653517,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test24112.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test24112.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test24112";

klipse_clj.eval_test.t_klipse_clj$eval_test24112.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test24112");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test24112.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test24112 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test24112(meta24113){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24112(meta24113));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test24112(null));
})], null)], null);
klipse_clj.eval_test.a_EQ_ = (function klipse_clj$eval_test$a_EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24151 = arguments.length;
var i__4731__auto___24152 = (0);
while(true){
if((i__4731__auto___24152 < len__4730__auto___24151)){
args__4736__auto__.push((arguments[i__4731__auto___24152]));

var G__24153 = (i__4731__auto___24152 + (1));
i__4731__auto___24152 = G__24153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return klipse_clj.eval_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

klipse_clj.eval_test.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse_clj.eval_test.remove_chars,args));
});

klipse_clj.eval_test.a_EQ_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
klipse_clj.eval_test.a_EQ_.cljs$lang$applyTo = (function (seq24150){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24150));
});

klipse_clj.eval_test.b_EQ_ = (function klipse_clj$eval_test$b_EQ_(p__24154,p__24155){
var vec__24156 = p__24154;
var status_a = cljs.core.nth.call(null,vec__24156,(0),null);
var a = cljs.core.nth.call(null,vec__24156,(1),null);
var vec__24159 = p__24155;
var status_b = cljs.core.nth.call(null,vec__24159,(0),null);
var b = cljs.core.nth.call(null,vec__24159,(1),null);
var and__4120__auto__ = cljs.core._EQ_.call(null,status_a,status_b);
if(and__4120__auto__){
return klipse_clj.eval_test.a_EQ_.call(null,a,b);
} else {
return and__4120__auto__;
}
});
klipse_clj.eval_test.doc_test = (function klipse_clj$eval_test$doc_test(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.doc_test.cljs$lang$var);
});
klipse_clj.eval_test.doc_test.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test24162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test24162 = (function (meta24163){
this.meta24163 = meta24163;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24164,meta24163__$1){
var self__ = this;
var _24164__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24162(meta24163__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24164){
var self__ = this;
var _24164__$1 = this;
return self__.meta24163;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_24285){
var state_val_24286 = (state_24285[(1)]);
if((state_val_24286 === (7))){
var inst_24181 = (state_24285[(7)]);
var inst_24191 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24192 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24193 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24194 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24195 = cljs.core.cons.call(null,inst_24194,inst_24181);
var inst_24196 = (new cljs.core.List(null,inst_24195,null,(1),null));
var inst_24197 = (new cljs.core.List(null,inst_24193,inst_24196,(2),null));
var inst_24198 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24192,inst_24197,null];
var inst_24199 = cljs.core.PersistentHashMap.fromArrays(inst_24191,inst_24198);
var inst_24200 = cljs.test.do_report.call(null,inst_24199);
var state_24285__$1 = state_24285;
var statearr_24287_24476 = state_24285__$1;
(statearr_24287_24476[(2)] = inst_24200);

(statearr_24287_24476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (20))){
var inst_24259 = (state_24285[(8)]);
var inst_24262 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24263 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24264 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24259);
var inst_24265 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24263,inst_24264,null];
var inst_24266 = cljs.core.PersistentHashMap.fromArrays(inst_24262,inst_24265);
var inst_24267 = cljs.test.do_report.call(null,inst_24266);
var state_24285__$1 = state_24285;
var statearr_24288_24477 = state_24285__$1;
(statearr_24288_24477[(2)] = inst_24267);

(statearr_24288_24477[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (1))){
var state_24285__$1 = state_24285;
var statearr_24289_24478 = state_24285__$1;
(statearr_24289_24478[(2)] = null);

(statearr_24289_24478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24285,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24175 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (doc map))");
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(5),inst_24175);
} else {
if((state_val_24286 === (15))){
var inst_24221 = (state_24285[(9)]);
var inst_24241 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24290 = state_24285;
(statearr_24290[(10)] = inst_24241);

return statearr_24290;
})();
var statearr_24291_24479 = state_24285__$1;
(statearr_24291_24479[(2)] = inst_24221);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (21))){
var inst_24259 = (state_24285[(8)]);
var inst_24269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24270 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24271 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24272 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24273 = cljs.core.cons.call(null,inst_24272,inst_24259);
var inst_24274 = (new cljs.core.List(null,inst_24273,null,(1),null));
var inst_24275 = (new cljs.core.List(null,inst_24271,inst_24274,(2),null));
var inst_24276 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24270,inst_24275,null];
var inst_24277 = cljs.core.PersistentHashMap.fromArrays(inst_24269,inst_24276);
var inst_24278 = cljs.test.do_report.call(null,inst_24277);
var state_24285__$1 = state_24285;
var statearr_24292_24480 = state_24285__$1;
(statearr_24292_24480[(2)] = inst_24278);

(statearr_24292_24480[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (13))){
var inst_24220 = (state_24285[(11)]);
var inst_24223 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24224 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24225 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24220);
var inst_24226 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24224,inst_24225,null];
var inst_24227 = cljs.core.PersistentHashMap.fromArrays(inst_24223,inst_24226);
var inst_24228 = cljs.test.do_report.call(null,inst_24227);
var state_24285__$1 = state_24285;
var statearr_24293_24481 = state_24285__$1;
(statearr_24293_24481[(2)] = inst_24228);

(statearr_24293_24481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (22))){
var inst_24260 = (state_24285[(12)]);
var inst_24280 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24294 = state_24285;
(statearr_24294[(13)] = inst_24280);

return statearr_24294;
})();
var statearr_24295_24482 = state_24285__$1;
(statearr_24295_24482[(2)] = inst_24260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (6))){
var inst_24181 = (state_24285[(7)]);
var inst_24184 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24185 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24186 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24181);
var inst_24187 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24185,inst_24186,null];
var inst_24188 = cljs.core.PersistentHashMap.fromArrays(inst_24184,inst_24187);
var inst_24189 = cljs.test.do_report.call(null,inst_24188);
var state_24285__$1 = state_24285;
var statearr_24296_24483 = state_24285__$1;
(statearr_24296_24483[(2)] = inst_24189);

(statearr_24296_24483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (17))){
var inst_24244 = (state_24285[(2)]);
var inst_24245 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24246 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24247 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24246,inst_24244,null];
var inst_24248 = cljs.core.PersistentHashMap.fromArrays(inst_24245,inst_24247);
var inst_24249 = cljs.test.do_report.call(null,inst_24248);
var state_24285__$1 = state_24285;
var statearr_24297_24484 = state_24285__$1;
(statearr_24297_24484[(2)] = inst_24249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (3))){
var inst_24166 = (state_24285[(2)]);
var inst_24167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24168 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24169 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24168,inst_24166,null];
var inst_24170 = cljs.core.PersistentHashMap.fromArrays(inst_24167,inst_24169);
var inst_24171 = cljs.test.do_report.call(null,inst_24170);
var state_24285__$1 = state_24285;
var statearr_24298_24485 = state_24285__$1;
(statearr_24298_24485[(2)] = inst_24171);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (12))){
var inst_24220 = (state_24285[(11)]);
var inst_24221 = (state_24285[(9)]);
var inst_24216 = (state_24285[(2)]);
var inst_24217 = cljs.core.second.call(null,inst_24216);
var inst_24218 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24217);
var inst_24219 = (new cljs.core.List(null,"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n",null,(1),null));
var inst_24220__$1 = (new cljs.core.List(null,inst_24218,inst_24219,(2),null));
var inst_24221__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24220__$1);
var state_24285__$1 = (function (){var statearr_24299 = state_24285;
(statearr_24299[(11)] = inst_24220__$1);

(statearr_24299[(9)] = inst_24221__$1);

return statearr_24299;
})();
if(cljs.core.truth_(inst_24221__$1)){
var statearr_24300_24486 = state_24285__$1;
(statearr_24300_24486[(1)] = (13));

} else {
var statearr_24301_24487 = state_24285__$1;
(statearr_24301_24487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (2))){
var inst_24204 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24302 = state_24285;
(statearr_24302[(14)] = inst_24204);

return statearr_24302;
})();
var statearr_24303_24488 = state_24285__$1;
(statearr_24303_24488[(2)] = null);

(statearr_24303_24488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (19))){
var inst_24259 = (state_24285[(8)]);
var inst_24260 = (state_24285[(12)]);
var inst_24255 = (state_24285[(2)]);
var inst_24256 = cljs.core.second.call(null,inst_24255);
var inst_24257 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24256);
var inst_24258 = (new cljs.core.List(null,"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n",null,(1),null));
var inst_24259__$1 = (new cljs.core.List(null,inst_24257,inst_24258,(2),null));
var inst_24260__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24259__$1);
var state_24285__$1 = (function (){var statearr_24304 = state_24285;
(statearr_24304[(8)] = inst_24259__$1);

(statearr_24304[(12)] = inst_24260__$1);

return statearr_24304;
})();
if(cljs.core.truth_(inst_24260__$1)){
var statearr_24305_24489 = state_24285__$1;
(statearr_24305_24489[(1)] = (20));

} else {
var statearr_24306_24490 = state_24285__$1;
(statearr_24306_24490[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24285,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24214 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (doc when))");
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(12),inst_24214);
} else {
if((state_val_24286 === (9))){
var inst_24243 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24307 = state_24285;
(statearr_24307[(15)] = inst_24243);

return statearr_24307;
})();
var statearr_24308_24491 = state_24285__$1;
(statearr_24308_24491[(2)] = null);

(statearr_24308_24491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (5))){
var inst_24182 = (state_24285[(16)]);
var inst_24181 = (state_24285[(7)]);
var inst_24177 = (state_24285[(2)]);
var inst_24178 = cljs.core.second.call(null,inst_24177);
var inst_24179 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24178);
var inst_24180 = (new cljs.core.List(null,"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n",null,(1),null));
var inst_24181__$1 = (new cljs.core.List(null,inst_24179,inst_24180,(2),null));
var inst_24182__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24181__$1);
var state_24285__$1 = (function (){var statearr_24309 = state_24285;
(statearr_24309[(16)] = inst_24182__$1);

(statearr_24309[(7)] = inst_24181__$1);

return statearr_24309;
})();
if(cljs.core.truth_(inst_24182__$1)){
var statearr_24310_24492 = state_24285__$1;
(statearr_24310_24492[(1)] = (6));

} else {
var statearr_24311_24493 = state_24285__$1;
(statearr_24311_24493[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (14))){
var inst_24220 = (state_24285[(11)]);
var inst_24230 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24231 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24232 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24233 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24234 = cljs.core.cons.call(null,inst_24233,inst_24220);
var inst_24235 = (new cljs.core.List(null,inst_24234,null,(1),null));
var inst_24236 = (new cljs.core.List(null,inst_24232,inst_24235,(2),null));
var inst_24237 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24231,inst_24236,null];
var inst_24238 = cljs.core.PersistentHashMap.fromArrays(inst_24230,inst_24237);
var inst_24239 = cljs.test.do_report.call(null,inst_24238);
var state_24285__$1 = state_24285;
var statearr_24312_24494 = state_24285__$1;
(statearr_24312_24494[(2)] = inst_24239);

(statearr_24312_24494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (16))){
var inst_24282 = (state_24285[(2)]);
var inst_24283 = done.call(null);
var state_24285__$1 = (function (){var statearr_24313 = state_24285;
(statearr_24313[(17)] = inst_24282);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24285__$1,inst_24283);
} else {
if((state_val_24286 === (10))){
var inst_24205 = (state_24285[(2)]);
var inst_24206 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24207 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24208 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24207,inst_24205,null];
var inst_24209 = cljs.core.PersistentHashMap.fromArrays(inst_24206,inst_24208);
var inst_24210 = cljs.test.do_report.call(null,inst_24209);
var state_24285__$1 = state_24285;
var statearr_24314_24495 = state_24285__$1;
(statearr_24314_24495[(2)] = inst_24210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24286 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24285,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_24253 = klipse_clj.lang.clojure.the_eval.call(null,"(require 'clojure.set) (with-out-str (doc clojure.set))");
var state_24285__$1 = state_24285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24285__$1,(19),inst_24253);
} else {
if((state_val_24286 === (8))){
var inst_24182 = (state_24285[(16)]);
var inst_24202 = (state_24285[(2)]);
var state_24285__$1 = (function (){var statearr_24315 = state_24285;
(statearr_24315[(18)] = inst_24202);

return statearr_24315;
})();
var statearr_24316_24496 = state_24285__$1;
(statearr_24316_24496[(2)] = inst_24182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24317[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24317[(1)] = (1));

return statearr_24317;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24285){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24318){if((e24318 instanceof Object)){
var ex__15543__auto__ = e24318;
var statearr_24319_24497 = state_24285;
(statearr_24319_24497[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24498 = state_24285;
state_24285 = G__24498;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24285){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_24320 = f__15635__auto__.call(null);
(statearr_24320[(6)] = c__15634__auto__);

return statearr_24320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.apply = (function (self__,args24165){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24165)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_24440){
var state_val_24441 = (state_24440[(1)]);
if((state_val_24441 === (7))){
var inst_24336 = (state_24440[(7)]);
var inst_24346 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24347 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24348 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24349 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24350 = cljs.core.cons.call(null,inst_24349,inst_24336);
var inst_24351 = (new cljs.core.List(null,inst_24350,null,(1),null));
var inst_24352 = (new cljs.core.List(null,inst_24348,inst_24351,(2),null));
var inst_24353 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24347,inst_24352,null];
var inst_24354 = cljs.core.PersistentHashMap.fromArrays(inst_24346,inst_24353);
var inst_24355 = cljs.test.do_report.call(null,inst_24354);
var state_24440__$1 = state_24440;
var statearr_24442_24499 = state_24440__$1;
(statearr_24442_24499[(2)] = inst_24355);

(statearr_24442_24499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (20))){
var inst_24414 = (state_24440[(8)]);
var inst_24417 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24418 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24419 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24414);
var inst_24420 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24418,inst_24419,null];
var inst_24421 = cljs.core.PersistentHashMap.fromArrays(inst_24417,inst_24420);
var inst_24422 = cljs.test.do_report.call(null,inst_24421);
var state_24440__$1 = state_24440;
var statearr_24443_24500 = state_24440__$1;
(statearr_24443_24500[(2)] = inst_24422);

(statearr_24443_24500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (1))){
var state_24440__$1 = state_24440;
var statearr_24444_24501 = state_24440__$1;
(statearr_24444_24501[(2)] = null);

(statearr_24444_24501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24440,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24330 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (doc map))");
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24440__$1,(5),inst_24330);
} else {
if((state_val_24441 === (15))){
var inst_24376 = (state_24440[(9)]);
var inst_24396 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24445 = state_24440;
(statearr_24445[(10)] = inst_24396);

return statearr_24445;
})();
var statearr_24446_24502 = state_24440__$1;
(statearr_24446_24502[(2)] = inst_24376);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (21))){
var inst_24414 = (state_24440[(8)]);
var inst_24424 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24425 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24426 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24427 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24428 = cljs.core.cons.call(null,inst_24427,inst_24414);
var inst_24429 = (new cljs.core.List(null,inst_24428,null,(1),null));
var inst_24430 = (new cljs.core.List(null,inst_24426,inst_24429,(2),null));
var inst_24431 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24425,inst_24430,null];
var inst_24432 = cljs.core.PersistentHashMap.fromArrays(inst_24424,inst_24431);
var inst_24433 = cljs.test.do_report.call(null,inst_24432);
var state_24440__$1 = state_24440;
var statearr_24447_24503 = state_24440__$1;
(statearr_24447_24503[(2)] = inst_24433);

(statearr_24447_24503[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (13))){
var inst_24375 = (state_24440[(11)]);
var inst_24378 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24379 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24380 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24375);
var inst_24381 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24379,inst_24380,null];
var inst_24382 = cljs.core.PersistentHashMap.fromArrays(inst_24378,inst_24381);
var inst_24383 = cljs.test.do_report.call(null,inst_24382);
var state_24440__$1 = state_24440;
var statearr_24448_24504 = state_24440__$1;
(statearr_24448_24504[(2)] = inst_24383);

(statearr_24448_24504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (22))){
var inst_24415 = (state_24440[(12)]);
var inst_24435 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24449 = state_24440;
(statearr_24449[(13)] = inst_24435);

return statearr_24449;
})();
var statearr_24450_24505 = state_24440__$1;
(statearr_24450_24505[(2)] = inst_24415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (6))){
var inst_24336 = (state_24440[(7)]);
var inst_24339 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24340 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24341 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24336);
var inst_24342 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24340,inst_24341,null];
var inst_24343 = cljs.core.PersistentHashMap.fromArrays(inst_24339,inst_24342);
var inst_24344 = cljs.test.do_report.call(null,inst_24343);
var state_24440__$1 = state_24440;
var statearr_24451_24506 = state_24440__$1;
(statearr_24451_24506[(2)] = inst_24344);

(statearr_24451_24506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (17))){
var inst_24399 = (state_24440[(2)]);
var inst_24400 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24401 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require 'clojure.set) (with-out-str (doc clojure.set))")))),"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n");
var inst_24402 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24401,inst_24399,null];
var inst_24403 = cljs.core.PersistentHashMap.fromArrays(inst_24400,inst_24402);
var inst_24404 = cljs.test.do_report.call(null,inst_24403);
var state_24440__$1 = state_24440;
var statearr_24452_24507 = state_24440__$1;
(statearr_24452_24507[(2)] = inst_24404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (3))){
var inst_24321 = (state_24440[(2)]);
var inst_24322 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24323 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc map))")))),"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n");
var inst_24324 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24323,inst_24321,null];
var inst_24325 = cljs.core.PersistentHashMap.fromArrays(inst_24322,inst_24324);
var inst_24326 = cljs.test.do_report.call(null,inst_24325);
var state_24440__$1 = state_24440;
var statearr_24453_24508 = state_24440__$1;
(statearr_24453_24508[(2)] = inst_24326);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (12))){
var inst_24375 = (state_24440[(11)]);
var inst_24376 = (state_24440[(9)]);
var inst_24371 = (state_24440[(2)]);
var inst_24372 = cljs.core.second.call(null,inst_24371);
var inst_24373 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24372);
var inst_24374 = (new cljs.core.List(null,"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n",null,(1),null));
var inst_24375__$1 = (new cljs.core.List(null,inst_24373,inst_24374,(2),null));
var inst_24376__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24375__$1);
var state_24440__$1 = (function (){var statearr_24454 = state_24440;
(statearr_24454[(11)] = inst_24375__$1);

(statearr_24454[(9)] = inst_24376__$1);

return statearr_24454;
})();
if(cljs.core.truth_(inst_24376__$1)){
var statearr_24455_24509 = state_24440__$1;
(statearr_24455_24509[(1)] = (13));

} else {
var statearr_24456_24510 = state_24440__$1;
(statearr_24456_24510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (2))){
var inst_24359 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24457 = state_24440;
(statearr_24457[(14)] = inst_24359);

return statearr_24457;
})();
var statearr_24458_24511 = state_24440__$1;
(statearr_24458_24511[(2)] = null);

(statearr_24458_24511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (19))){
var inst_24415 = (state_24440[(12)]);
var inst_24414 = (state_24440[(8)]);
var inst_24410 = (state_24440[(2)]);
var inst_24411 = cljs.core.second.call(null,inst_24410);
var inst_24412 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24411);
var inst_24413 = (new cljs.core.List(null,"-------------------------\nclojure.set\n  Set operations such as union/intersection.\n",null,(1),null));
var inst_24414__$1 = (new cljs.core.List(null,inst_24412,inst_24413,(2),null));
var inst_24415__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24414__$1);
var state_24440__$1 = (function (){var statearr_24459 = state_24440;
(statearr_24459[(12)] = inst_24415__$1);

(statearr_24459[(8)] = inst_24414__$1);

return statearr_24459;
})();
if(cljs.core.truth_(inst_24415__$1)){
var statearr_24460_24512 = state_24440__$1;
(statearr_24460_24512[(1)] = (20));

} else {
var statearr_24461_24513 = state_24440__$1;
(statearr_24461_24513[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24440,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24369 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (doc when))");
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24440__$1,(12),inst_24369);
} else {
if((state_val_24441 === (9))){
var inst_24398 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24462 = state_24440;
(statearr_24462[(15)] = inst_24398);

return statearr_24462;
})();
var statearr_24463_24514 = state_24440__$1;
(statearr_24463_24514[(2)] = null);

(statearr_24463_24514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (5))){
var inst_24337 = (state_24440[(16)]);
var inst_24336 = (state_24440[(7)]);
var inst_24332 = (state_24440[(2)]);
var inst_24333 = cljs.core.second.call(null,inst_24332);
var inst_24334 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24333);
var inst_24335 = (new cljs.core.List(null,"-------------------------\ncljs.core/map\n([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])\n  Returns a lazy sequence consisting of the result of applying f to\n  the set of first items of each coll, followed by applying f to the\n  set of second items in each coll, until any one of the colls is\n  exhausted.  Any remaining items in other colls are ignored. Function\n  f should accept number-of-colls arguments. Returns a transducer when\n  no collection is provided.\n",null,(1),null));
var inst_24336__$1 = (new cljs.core.List(null,inst_24334,inst_24335,(2),null));
var inst_24337__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24336__$1);
var state_24440__$1 = (function (){var statearr_24464 = state_24440;
(statearr_24464[(16)] = inst_24337__$1);

(statearr_24464[(7)] = inst_24336__$1);

return statearr_24464;
})();
if(cljs.core.truth_(inst_24337__$1)){
var statearr_24465_24515 = state_24440__$1;
(statearr_24465_24515[(1)] = (6));

} else {
var statearr_24466_24516 = state_24440__$1;
(statearr_24466_24516[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (14))){
var inst_24375 = (state_24440[(11)]);
var inst_24385 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24386 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24387 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24388 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24389 = cljs.core.cons.call(null,inst_24388,inst_24375);
var inst_24390 = (new cljs.core.List(null,inst_24389,null,(1),null));
var inst_24391 = (new cljs.core.List(null,inst_24387,inst_24390,(2),null));
var inst_24392 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24386,inst_24391,null];
var inst_24393 = cljs.core.PersistentHashMap.fromArrays(inst_24385,inst_24392);
var inst_24394 = cljs.test.do_report.call(null,inst_24393);
var state_24440__$1 = state_24440;
var statearr_24467_24517 = state_24440__$1;
(statearr_24467_24517[(2)] = inst_24394);

(statearr_24467_24517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (16))){
var inst_24437 = (state_24440[(2)]);
var inst_24438 = done.call(null);
var state_24440__$1 = (function (){var statearr_24468 = state_24440;
(statearr_24468[(17)] = inst_24437);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24440__$1,inst_24438);
} else {
if((state_val_24441 === (10))){
var inst_24360 = (state_24440[(2)]);
var inst_24361 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24362 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (doc when))")))),"-------------------------\ncljs.core/when\n([test & body])\nMacro\n  Evaluates test. If logical true, evaluates body in an implicit do.\n");
var inst_24363 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24362,inst_24360,null];
var inst_24364 = cljs.core.PersistentHashMap.fromArrays(inst_24361,inst_24363);
var inst_24365 = cljs.test.do_report.call(null,inst_24364);
var state_24440__$1 = state_24440;
var statearr_24469_24518 = state_24440__$1;
(statearr_24469_24518[(2)] = inst_24365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24441 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24440,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_24408 = klipse_clj.lang.clojure.the_eval.call(null,"(require 'clojure.set) (with-out-str (doc clojure.set))");
var state_24440__$1 = state_24440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24440__$1,(19),inst_24408);
} else {
if((state_val_24441 === (8))){
var inst_24337 = (state_24440[(16)]);
var inst_24357 = (state_24440[(2)]);
var state_24440__$1 = (function (){var statearr_24470 = state_24440;
(statearr_24470[(18)] = inst_24357);

return statearr_24470;
})();
var statearr_24471_24519 = state_24440__$1;
(statearr_24471_24519[(2)] = inst_24337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24472[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24472[(1)] = (1));

return statearr_24472;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24440){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object)){
var ex__15543__auto__ = e24473;
var statearr_24474_24520 = state_24440;
(statearr_24474_24520[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24521 = state_24440;
state_24440 = G__24521;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24440){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_24475 = f__15635__auto__.call(null);
(statearr_24475[(6)] = c__15634__auto__);

return statearr_24475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24163","meta24163",2051802457,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test24162.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test24162.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test24162";

klipse_clj.eval_test.t_klipse_clj$eval_test24162.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test24162");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test24162.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test24162 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test24162(meta24163){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24162(meta24163));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test24162(null));
});

klipse_clj.eval_test.doc_test.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.doc_test;},new cljs.core.Symbol("klipse-clj.eval-test","doc-test","klipse-clj.eval-test/doc-test",724746111,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"doc-test","doc-test",298429148,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",18,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.doc_test)?klipse_clj.eval_test.doc_test.cljs$lang$test:null)]));
klipse_clj.eval_test.dbg_test = (function klipse_clj$eval_test$dbg_test(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.dbg_test.cljs$lang$var);
});
klipse_clj.eval_test.dbg_test.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test24522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test24522 = (function (meta24523){
this.meta24523 = meta24523;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24524,meta24523__$1){
var self__ = this;
var _24524__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24522(meta24523__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24524){
var self__ = this;
var _24524__$1 = this;
return self__.meta24523;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_24606){
var state_val_24607 = (state_24606[(1)]);
if((state_val_24607 === (7))){
var inst_24541 = (state_24606[(7)]);
var inst_24551 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24552 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24553 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24554 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24555 = cljs.core.cons.call(null,inst_24554,inst_24541);
var inst_24556 = (new cljs.core.List(null,inst_24555,null,(1),null));
var inst_24557 = (new cljs.core.List(null,inst_24553,inst_24556,(2),null));
var inst_24558 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24552,inst_24557,null];
var inst_24559 = cljs.core.PersistentHashMap.fromArrays(inst_24551,inst_24558);
var inst_24560 = cljs.test.do_report.call(null,inst_24559);
var state_24606__$1 = state_24606;
var statearr_24608_24738 = state_24606__$1;
(statearr_24608_24738[(2)] = inst_24560);

(statearr_24608_24738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (1))){
var state_24606__$1 = state_24606;
var statearr_24609_24739 = state_24606__$1;
(statearr_24609_24739[(2)] = null);

(statearr_24609_24739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24606,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24535 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (dbg (map inc [1 2 3])))");
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24606__$1,(5),inst_24535);
} else {
if((state_val_24607 === (15))){
var inst_24581 = (state_24606[(8)]);
var inst_24601 = (state_24606[(2)]);
var state_24606__$1 = (function (){var statearr_24610 = state_24606;
(statearr_24610[(9)] = inst_24601);

return statearr_24610;
})();
var statearr_24611_24740 = state_24606__$1;
(statearr_24611_24740[(2)] = inst_24581);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (13))){
var inst_24580 = (state_24606[(10)]);
var inst_24583 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24584 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24585 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24580);
var inst_24586 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24584,inst_24585,null];
var inst_24587 = cljs.core.PersistentHashMap.fromArrays(inst_24583,inst_24586);
var inst_24588 = cljs.test.do_report.call(null,inst_24587);
var state_24606__$1 = state_24606;
var statearr_24612_24741 = state_24606__$1;
(statearr_24612_24741[(2)] = inst_24588);

(statearr_24612_24741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (6))){
var inst_24541 = (state_24606[(7)]);
var inst_24544 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24545 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24546 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24541);
var inst_24547 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24545,inst_24546,null];
var inst_24548 = cljs.core.PersistentHashMap.fromArrays(inst_24544,inst_24547);
var inst_24549 = cljs.test.do_report.call(null,inst_24548);
var state_24606__$1 = state_24606;
var statearr_24613_24742 = state_24606__$1;
(statearr_24613_24742[(2)] = inst_24549);

(statearr_24613_24742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (3))){
var inst_24526 = (state_24606[(2)]);
var inst_24527 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24528 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24529 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24528,inst_24526,null];
var inst_24530 = cljs.core.PersistentHashMap.fromArrays(inst_24527,inst_24529);
var inst_24531 = cljs.test.do_report.call(null,inst_24530);
var state_24606__$1 = state_24606;
var statearr_24614_24743 = state_24606__$1;
(statearr_24614_24743[(2)] = inst_24531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (12))){
var inst_24581 = (state_24606[(8)]);
var inst_24580 = (state_24606[(10)]);
var inst_24576 = (state_24606[(2)]);
var inst_24577 = cljs.core.second.call(null,inst_24576);
var inst_24578 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24577);
var inst_24579 = (new cljs.core.List(null,"(2 3 4)",null,(1),null));
var inst_24580__$1 = (new cljs.core.List(null,inst_24578,inst_24579,(2),null));
var inst_24581__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24580__$1);
var state_24606__$1 = (function (){var statearr_24615 = state_24606;
(statearr_24615[(8)] = inst_24581__$1);

(statearr_24615[(10)] = inst_24580__$1);

return statearr_24615;
})();
if(cljs.core.truth_(inst_24581__$1)){
var statearr_24616_24744 = state_24606__$1;
(statearr_24616_24744[(1)] = (13));

} else {
var statearr_24617_24745 = state_24606__$1;
(statearr_24617_24745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (2))){
var inst_24564 = (state_24606[(2)]);
var state_24606__$1 = (function (){var statearr_24618 = state_24606;
(statearr_24618[(11)] = inst_24564);

return statearr_24618;
})();
var statearr_24619_24746 = state_24606__$1;
(statearr_24619_24746[(2)] = null);

(statearr_24619_24746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24606,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24574 = klipse_clj.lang.clojure.the_eval.call(null,"(dbg (map inc [1 2 3]))");
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24606__$1,(12),inst_24574);
} else {
if((state_val_24607 === (9))){
var inst_24603 = (state_24606[(2)]);
var inst_24604 = done.call(null);
var state_24606__$1 = (function (){var statearr_24620 = state_24606;
(statearr_24620[(12)] = inst_24603);

return statearr_24620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24606__$1,inst_24604);
} else {
if((state_val_24607 === (5))){
var inst_24541 = (state_24606[(7)]);
var inst_24542 = (state_24606[(13)]);
var inst_24537 = (state_24606[(2)]);
var inst_24538 = cljs.core.second.call(null,inst_24537);
var inst_24539 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24538);
var inst_24540 = (new cljs.core.List(null,"(map inc [1 2 3]):  (2 3 4)\n",null,(1),null));
var inst_24541__$1 = (new cljs.core.List(null,inst_24539,inst_24540,(2),null));
var inst_24542__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24541__$1);
var state_24606__$1 = (function (){var statearr_24621 = state_24606;
(statearr_24621[(7)] = inst_24541__$1);

(statearr_24621[(13)] = inst_24542__$1);

return statearr_24621;
})();
if(cljs.core.truth_(inst_24542__$1)){
var statearr_24622_24747 = state_24606__$1;
(statearr_24622_24747[(1)] = (6));

} else {
var statearr_24623_24748 = state_24606__$1;
(statearr_24623_24748[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (14))){
var inst_24580 = (state_24606[(10)]);
var inst_24590 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24591 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24592 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24593 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24594 = cljs.core.cons.call(null,inst_24593,inst_24580);
var inst_24595 = (new cljs.core.List(null,inst_24594,null,(1),null));
var inst_24596 = (new cljs.core.List(null,inst_24592,inst_24595,(2),null));
var inst_24597 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24591,inst_24596,null];
var inst_24598 = cljs.core.PersistentHashMap.fromArrays(inst_24590,inst_24597);
var inst_24599 = cljs.test.do_report.call(null,inst_24598);
var state_24606__$1 = state_24606;
var statearr_24624_24749 = state_24606__$1;
(statearr_24624_24749[(2)] = inst_24599);

(statearr_24624_24749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (10))){
var inst_24565 = (state_24606[(2)]);
var inst_24566 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24567 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24568 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24567,inst_24565,null];
var inst_24569 = cljs.core.PersistentHashMap.fromArrays(inst_24566,inst_24568);
var inst_24570 = cljs.test.do_report.call(null,inst_24569);
var state_24606__$1 = state_24606;
var statearr_24625_24750 = state_24606__$1;
(statearr_24625_24750[(2)] = inst_24570);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (8))){
var inst_24542 = (state_24606[(13)]);
var inst_24562 = (state_24606[(2)]);
var state_24606__$1 = (function (){var statearr_24626 = state_24606;
(statearr_24626[(14)] = inst_24562);

return statearr_24626;
})();
var statearr_24627_24751 = state_24606__$1;
(statearr_24627_24751[(2)] = inst_24542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24628[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24628[(1)] = (1));

return statearr_24628;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24606){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24629){if((e24629 instanceof Object)){
var ex__15543__auto__ = e24629;
var statearr_24630_24752 = state_24606;
(statearr_24630_24752[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24753 = state_24606;
state_24606 = G__24753;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24606){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_24631 = f__15635__auto__.call(null);
(statearr_24631[(6)] = c__15634__auto__);

return statearr_24631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.apply = (function (self__,args24525){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24525)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (7))){
var inst_24647 = (state_24712[(7)]);
var inst_24657 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24658 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24659 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24660 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24661 = cljs.core.cons.call(null,inst_24660,inst_24647);
var inst_24662 = (new cljs.core.List(null,inst_24661,null,(1),null));
var inst_24663 = (new cljs.core.List(null,inst_24659,inst_24662,(2),null));
var inst_24664 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24658,inst_24663,null];
var inst_24665 = cljs.core.PersistentHashMap.fromArrays(inst_24657,inst_24664);
var inst_24666 = cljs.test.do_report.call(null,inst_24665);
var state_24712__$1 = state_24712;
var statearr_24714_24754 = state_24712__$1;
(statearr_24714_24754[(2)] = inst_24666);

(statearr_24714_24754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (1))){
var state_24712__$1 = state_24712;
var statearr_24715_24755 = state_24712__$1;
(statearr_24715_24755[(2)] = null);

(statearr_24715_24755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24712,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24641 = klipse_clj.lang.clojure.the_eval.call(null,"(with-out-str (dbg (map inc [1 2 3])))");
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(5),inst_24641);
} else {
if((state_val_24713 === (15))){
var inst_24687 = (state_24712[(8)]);
var inst_24707 = (state_24712[(2)]);
var state_24712__$1 = (function (){var statearr_24716 = state_24712;
(statearr_24716[(9)] = inst_24707);

return statearr_24716;
})();
var statearr_24717_24756 = state_24712__$1;
(statearr_24717_24756[(2)] = inst_24687);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (13))){
var inst_24686 = (state_24712[(10)]);
var inst_24689 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24690 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24691 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24686);
var inst_24692 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24690,inst_24691,null];
var inst_24693 = cljs.core.PersistentHashMap.fromArrays(inst_24689,inst_24692);
var inst_24694 = cljs.test.do_report.call(null,inst_24693);
var state_24712__$1 = state_24712;
var statearr_24718_24757 = state_24712__$1;
(statearr_24718_24757[(2)] = inst_24694);

(statearr_24718_24757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (6))){
var inst_24647 = (state_24712[(7)]);
var inst_24650 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24651 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24652 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_24647);
var inst_24653 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24651,inst_24652,null];
var inst_24654 = cljs.core.PersistentHashMap.fromArrays(inst_24650,inst_24653);
var inst_24655 = cljs.test.do_report.call(null,inst_24654);
var state_24712__$1 = state_24712;
var statearr_24719_24758 = state_24712__$1;
(statearr_24719_24758[(2)] = inst_24655);

(statearr_24719_24758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (3))){
var inst_24632 = (state_24712[(2)]);
var inst_24633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24634 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(with-out-str (dbg (map inc [1 2 3])))")))),"(map inc [1 2 3]):  (2 3 4)\n");
var inst_24635 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24634,inst_24632,null];
var inst_24636 = cljs.core.PersistentHashMap.fromArrays(inst_24633,inst_24635);
var inst_24637 = cljs.test.do_report.call(null,inst_24636);
var state_24712__$1 = state_24712;
var statearr_24720_24759 = state_24712__$1;
(statearr_24720_24759[(2)] = inst_24637);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (12))){
var inst_24687 = (state_24712[(8)]);
var inst_24686 = (state_24712[(10)]);
var inst_24682 = (state_24712[(2)]);
var inst_24683 = cljs.core.second.call(null,inst_24682);
var inst_24684 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24683);
var inst_24685 = (new cljs.core.List(null,"(2 3 4)",null,(1),null));
var inst_24686__$1 = (new cljs.core.List(null,inst_24684,inst_24685,(2),null));
var inst_24687__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24686__$1);
var state_24712__$1 = (function (){var statearr_24721 = state_24712;
(statearr_24721[(8)] = inst_24687__$1);

(statearr_24721[(10)] = inst_24686__$1);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24687__$1)){
var statearr_24722_24760 = state_24712__$1;
(statearr_24722_24760[(1)] = (13));

} else {
var statearr_24723_24761 = state_24712__$1;
(statearr_24723_24761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (2))){
var inst_24670 = (state_24712[(2)]);
var state_24712__$1 = (function (){var statearr_24724 = state_24712;
(statearr_24724[(11)] = inst_24670);

return statearr_24724;
})();
var statearr_24725_24762 = state_24712__$1;
(statearr_24725_24762[(2)] = null);

(statearr_24725_24762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24712,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24680 = klipse_clj.lang.clojure.the_eval.call(null,"(dbg (map inc [1 2 3]))");
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(12),inst_24680);
} else {
if((state_val_24713 === (9))){
var inst_24709 = (state_24712[(2)]);
var inst_24710 = done.call(null);
var state_24712__$1 = (function (){var statearr_24726 = state_24712;
(statearr_24726[(12)] = inst_24709);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
if((state_val_24713 === (5))){
var inst_24647 = (state_24712[(7)]);
var inst_24648 = (state_24712[(13)]);
var inst_24643 = (state_24712[(2)]);
var inst_24644 = cljs.core.second.call(null,inst_24643);
var inst_24645 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24644);
var inst_24646 = (new cljs.core.List(null,"(map inc [1 2 3]):  (2 3 4)\n",null,(1),null));
var inst_24647__$1 = (new cljs.core.List(null,inst_24645,inst_24646,(2),null));
var inst_24648__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_24647__$1);
var state_24712__$1 = (function (){var statearr_24727 = state_24712;
(statearr_24727[(7)] = inst_24647__$1);

(statearr_24727[(13)] = inst_24648__$1);

return statearr_24727;
})();
if(cljs.core.truth_(inst_24648__$1)){
var statearr_24728_24763 = state_24712__$1;
(statearr_24728_24763[(1)] = (6));

} else {
var statearr_24729_24764 = state_24712__$1;
(statearr_24729_24764[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (14))){
var inst_24686 = (state_24712[(10)]);
var inst_24696 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24697 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24698 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24699 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_24700 = cljs.core.cons.call(null,inst_24699,inst_24686);
var inst_24701 = (new cljs.core.List(null,inst_24700,null,(1),null));
var inst_24702 = (new cljs.core.List(null,inst_24698,inst_24701,(2),null));
var inst_24703 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24697,inst_24702,null];
var inst_24704 = cljs.core.PersistentHashMap.fromArrays(inst_24696,inst_24703);
var inst_24705 = cljs.test.do_report.call(null,inst_24704);
var state_24712__$1 = state_24712;
var statearr_24730_24765 = state_24712__$1;
(statearr_24730_24765[(2)] = inst_24705);

(statearr_24730_24765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (10))){
var inst_24671 = (state_24712[(2)]);
var inst_24672 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24673 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(dbg (map inc [1 2 3]))")))),"(2 3 4)");
var inst_24674 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24673,inst_24671,null];
var inst_24675 = cljs.core.PersistentHashMap.fromArrays(inst_24672,inst_24674);
var inst_24676 = cljs.test.do_report.call(null,inst_24675);
var state_24712__$1 = state_24712;
var statearr_24731_24766 = state_24712__$1;
(statearr_24731_24766[(2)] = inst_24676);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (8))){
var inst_24648 = (state_24712[(13)]);
var inst_24668 = (state_24712[(2)]);
var state_24712__$1 = (function (){var statearr_24732 = state_24712;
(statearr_24732[(14)] = inst_24668);

return statearr_24732;
})();
var statearr_24733_24767 = state_24712__$1;
(statearr_24733_24767[(2)] = inst_24648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24734[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24734[(1)] = (1));

return statearr_24734;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24712){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24735){if((e24735 instanceof Object)){
var ex__15543__auto__ = e24735;
var statearr_24736_24768 = state_24712;
(statearr_24736_24768[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24769 = state_24712;
state_24712 = G__24769;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_24737 = f__15635__auto__.call(null);
(statearr_24737[(6)] = c__15634__auto__);

return statearr_24737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24523","meta24523",1288543763,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test24522.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test24522.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test24522";

klipse_clj.eval_test.t_klipse_clj$eval_test24522.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test24522");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test24522.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test24522 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test24522(meta24523){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24522(meta24523));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test24522(null));
});

klipse_clj.eval_test.dbg_test.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.dbg_test;},new cljs.core.Symbol("klipse-clj.eval-test","dbg-test","klipse-clj.eval-test/dbg-test",-1891598893,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"dbg-test","dbg-test",-526685826,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",18,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.dbg_test)?klipse_clj.eval_test.dbg_test.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_error = (function klipse_clj$eval_test$test_eval_error(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_error.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_error.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test24770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test24770 = (function (meta24771){
this.meta24771 = meta24771;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24772,meta24771__$1){
var self__ = this;
var _24772__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24770(meta24771__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24772){
var self__ = this;
var _24772__$1 = this;
return self__.meta24771;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_24852){
var state_val_24853 = (state_24852[(1)]);
if((state_val_24853 === (7))){
var inst_24788 = (state_24852[(7)]);
var inst_24798 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24799 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24800 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24801 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_24802 = cljs.core.cons.call(null,inst_24801,inst_24788);
var inst_24803 = (new cljs.core.List(null,inst_24802,null,(1),null));
var inst_24804 = (new cljs.core.List(null,inst_24800,inst_24803,(2),null));
var inst_24805 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24799,inst_24804,null];
var inst_24806 = cljs.core.PersistentHashMap.fromArrays(inst_24798,inst_24805);
var inst_24807 = cljs.test.do_report.call(null,inst_24806);
var state_24852__$1 = state_24852;
var statearr_24854_24982 = state_24852__$1;
(statearr_24854_24982[(2)] = inst_24807);

(statearr_24854_24982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (1))){
var state_24852__$1 = state_24852;
var statearr_24855_24983 = state_24852__$1;
(statearr_24855_24983[(2)] = null);

(statearr_24855_24983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24852,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24783 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2");
var state_24852__$1 = state_24852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24852__$1,(5),inst_24783);
} else {
if((state_val_24853 === (15))){
var inst_24827 = (state_24852[(8)]);
var inst_24847 = (state_24852[(2)]);
var state_24852__$1 = (function (){var statearr_24856 = state_24852;
(statearr_24856[(9)] = inst_24847);

return statearr_24856;
})();
var statearr_24857_24984 = state_24852__$1;
(statearr_24857_24984[(2)] = inst_24827);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (13))){
var inst_24826 = (state_24852[(10)]);
var inst_24829 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24830 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24831 = cljs.core.cons.call(null,cljs.core._EQ_,inst_24826);
var inst_24832 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24830,inst_24831,null];
var inst_24833 = cljs.core.PersistentHashMap.fromArrays(inst_24829,inst_24832);
var inst_24834 = cljs.test.do_report.call(null,inst_24833);
var state_24852__$1 = state_24852;
var statearr_24858_24985 = state_24852__$1;
(statearr_24858_24985[(2)] = inst_24834);

(statearr_24858_24985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (6))){
var inst_24788 = (state_24852[(7)]);
var inst_24791 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24792 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24793 = cljs.core.cons.call(null,cljs.core._EQ_,inst_24788);
var inst_24794 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24792,inst_24793,null];
var inst_24795 = cljs.core.PersistentHashMap.fromArrays(inst_24791,inst_24794);
var inst_24796 = cljs.test.do_report.call(null,inst_24795);
var state_24852__$1 = state_24852;
var statearr_24859_24986 = state_24852__$1;
(statearr_24859_24986[(2)] = inst_24796);

(statearr_24859_24986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (3))){
var inst_24774 = (state_24852[(2)]);
var inst_24775 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24776 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24777 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24776,inst_24774,null];
var inst_24778 = cljs.core.PersistentHashMap.fromArrays(inst_24775,inst_24777);
var inst_24779 = cljs.test.do_report.call(null,inst_24778);
var state_24852__$1 = state_24852;
var statearr_24860_24987 = state_24852__$1;
(statearr_24860_24987[(2)] = inst_24779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (12))){
var inst_24827 = (state_24852[(8)]);
var inst_24826 = (state_24852[(10)]);
var inst_24823 = (state_24852[(2)]);
var inst_24824 = cljs.core.first.call(null,inst_24823);
var inst_24825 = (new cljs.core.List(null,inst_24824,null,(1),null));
var inst_24826__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_24825,(2),null));
var inst_24827__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_24826__$1);
var state_24852__$1 = (function (){var statearr_24861 = state_24852;
(statearr_24861[(8)] = inst_24827__$1);

(statearr_24861[(10)] = inst_24826__$1);

return statearr_24861;
})();
if(cljs.core.truth_(inst_24827__$1)){
var statearr_24862_24988 = state_24852__$1;
(statearr_24862_24988[(1)] = (13));

} else {
var statearr_24863_24989 = state_24852__$1;
(statearr_24863_24989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (2))){
var inst_24811 = (state_24852[(2)]);
var state_24852__$1 = (function (){var statearr_24864 = state_24852;
(statearr_24864[(11)] = inst_24811);

return statearr_24864;
})();
var statearr_24865_24990 = state_24852__$1;
(statearr_24865_24990[(2)] = null);

(statearr_24865_24990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24852,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24821 = klipse_clj.lang.clojure.the_eval.call(null,"(a)");
var state_24852__$1 = state_24852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24852__$1,(12),inst_24821);
} else {
if((state_val_24853 === (9))){
var inst_24849 = (state_24852[(2)]);
var inst_24850 = done.call(null);
var state_24852__$1 = (function (){var statearr_24866 = state_24852;
(statearr_24866[(12)] = inst_24849);

return statearr_24866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24852__$1,inst_24850);
} else {
if((state_val_24853 === (5))){
var inst_24789 = (state_24852[(13)]);
var inst_24788 = (state_24852[(7)]);
var inst_24785 = (state_24852[(2)]);
var inst_24786 = cljs.core.first.call(null,inst_24785);
var inst_24787 = (new cljs.core.List(null,inst_24786,null,(1),null));
var inst_24788__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_24787,(2),null));
var inst_24789__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_24788__$1);
var state_24852__$1 = (function (){var statearr_24867 = state_24852;
(statearr_24867[(13)] = inst_24789__$1);

(statearr_24867[(7)] = inst_24788__$1);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24789__$1)){
var statearr_24868_24991 = state_24852__$1;
(statearr_24868_24991[(1)] = (6));

} else {
var statearr_24869_24992 = state_24852__$1;
(statearr_24869_24992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (14))){
var inst_24826 = (state_24852[(10)]);
var inst_24836 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24837 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24838 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24839 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_24840 = cljs.core.cons.call(null,inst_24839,inst_24826);
var inst_24841 = (new cljs.core.List(null,inst_24840,null,(1),null));
var inst_24842 = (new cljs.core.List(null,inst_24838,inst_24841,(2),null));
var inst_24843 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24837,inst_24842,null];
var inst_24844 = cljs.core.PersistentHashMap.fromArrays(inst_24836,inst_24843);
var inst_24845 = cljs.test.do_report.call(null,inst_24844);
var state_24852__$1 = state_24852;
var statearr_24870_24993 = state_24852__$1;
(statearr_24870_24993[(2)] = inst_24845);

(statearr_24870_24993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (10))){
var inst_24812 = (state_24852[(2)]);
var inst_24813 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24814 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24815 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24814,inst_24812,null];
var inst_24816 = cljs.core.PersistentHashMap.fromArrays(inst_24813,inst_24815);
var inst_24817 = cljs.test.do_report.call(null,inst_24816);
var state_24852__$1 = state_24852;
var statearr_24871_24994 = state_24852__$1;
(statearr_24871_24994[(2)] = inst_24817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24853 === (8))){
var inst_24789 = (state_24852[(13)]);
var inst_24809 = (state_24852[(2)]);
var state_24852__$1 = (function (){var statearr_24872 = state_24852;
(statearr_24872[(14)] = inst_24809);

return statearr_24872;
})();
var statearr_24873_24995 = state_24852__$1;
(statearr_24873_24995[(2)] = inst_24789);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24874[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24874[(1)] = (1));

return statearr_24874;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24852){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24875){if((e24875 instanceof Object)){
var ex__15543__auto__ = e24875;
var statearr_24876_24996 = state_24852;
(statearr_24876_24996[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24997 = state_24852;
state_24852 = G__24997;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24852){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_24877 = f__15635__auto__.call(null);
(statearr_24877[(6)] = c__15634__auto__);

return statearr_24877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.apply = (function (self__,args24773){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args24773)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_24956){
var state_val_24957 = (state_24956[(1)]);
if((state_val_24957 === (7))){
var inst_24892 = (state_24956[(7)]);
var inst_24902 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24903 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24904 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24905 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_24906 = cljs.core.cons.call(null,inst_24905,inst_24892);
var inst_24907 = (new cljs.core.List(null,inst_24906,null,(1),null));
var inst_24908 = (new cljs.core.List(null,inst_24904,inst_24907,(2),null));
var inst_24909 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24903,inst_24908,null];
var inst_24910 = cljs.core.PersistentHashMap.fromArrays(inst_24902,inst_24909);
var inst_24911 = cljs.test.do_report.call(null,inst_24910);
var state_24956__$1 = state_24956;
var statearr_24958_24998 = state_24956__$1;
(statearr_24958_24998[(2)] = inst_24911);

(statearr_24958_24998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (1))){
var state_24956__$1 = state_24956;
var statearr_24959_24999 = state_24956__$1;
(statearr_24959_24999[(2)] = null);

(statearr_24959_24999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24956,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_24887 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2");
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24956__$1,(5),inst_24887);
} else {
if((state_val_24957 === (15))){
var inst_24931 = (state_24956[(8)]);
var inst_24951 = (state_24956[(2)]);
var state_24956__$1 = (function (){var statearr_24960 = state_24956;
(statearr_24960[(9)] = inst_24951);

return statearr_24960;
})();
var statearr_24961_25000 = state_24956__$1;
(statearr_24961_25000[(2)] = inst_24931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (13))){
var inst_24930 = (state_24956[(10)]);
var inst_24933 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24934 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24935 = cljs.core.cons.call(null,cljs.core._EQ_,inst_24930);
var inst_24936 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24934,inst_24935,null];
var inst_24937 = cljs.core.PersistentHashMap.fromArrays(inst_24933,inst_24936);
var inst_24938 = cljs.test.do_report.call(null,inst_24937);
var state_24956__$1 = state_24956;
var statearr_24962_25001 = state_24956__$1;
(statearr_24962_25001[(2)] = inst_24938);

(statearr_24962_25001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (6))){
var inst_24892 = (state_24956[(7)]);
var inst_24895 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24896 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24897 = cljs.core.cons.call(null,cljs.core._EQ_,inst_24892);
var inst_24898 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_24896,inst_24897,null];
var inst_24899 = cljs.core.PersistentHashMap.fromArrays(inst_24895,inst_24898);
var inst_24900 = cljs.test.do_report.call(null,inst_24899);
var state_24956__$1 = state_24956;
var statearr_24963_25002 = state_24956__$1;
(statearr_24963_25002[(2)] = inst_24900);

(statearr_24963_25002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (3))){
var inst_24878 = (state_24956[(2)]);
var inst_24879 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24880 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2"))));
var inst_24881 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24880,inst_24878,null];
var inst_24882 = cljs.core.PersistentHashMap.fromArrays(inst_24879,inst_24881);
var inst_24883 = cljs.test.do_report.call(null,inst_24882);
var state_24956__$1 = state_24956;
var statearr_24964_25003 = state_24956__$1;
(statearr_24964_25003[(2)] = inst_24883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (12))){
var inst_24930 = (state_24956[(10)]);
var inst_24931 = (state_24956[(8)]);
var inst_24927 = (state_24956[(2)]);
var inst_24928 = cljs.core.first.call(null,inst_24927);
var inst_24929 = (new cljs.core.List(null,inst_24928,null,(1),null));
var inst_24930__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_24929,(2),null));
var inst_24931__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_24930__$1);
var state_24956__$1 = (function (){var statearr_24965 = state_24956;
(statearr_24965[(10)] = inst_24930__$1);

(statearr_24965[(8)] = inst_24931__$1);

return statearr_24965;
})();
if(cljs.core.truth_(inst_24931__$1)){
var statearr_24966_25004 = state_24956__$1;
(statearr_24966_25004[(1)] = (13));

} else {
var statearr_24967_25005 = state_24956__$1;
(statearr_24967_25005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (2))){
var inst_24915 = (state_24956[(2)]);
var state_24956__$1 = (function (){var statearr_24968 = state_24956;
(statearr_24968[(11)] = inst_24915);

return statearr_24968;
})();
var statearr_24969_25006 = state_24956__$1;
(statearr_24969_25006[(2)] = null);

(statearr_24969_25006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24956,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_24925 = klipse_clj.lang.clojure.the_eval.call(null,"(a)");
var state_24956__$1 = state_24956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24956__$1,(12),inst_24925);
} else {
if((state_val_24957 === (9))){
var inst_24953 = (state_24956[(2)]);
var inst_24954 = done.call(null);
var state_24956__$1 = (function (){var statearr_24970 = state_24956;
(statearr_24970[(12)] = inst_24953);

return statearr_24970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24956__$1,inst_24954);
} else {
if((state_val_24957 === (5))){
var inst_24893 = (state_24956[(13)]);
var inst_24892 = (state_24956[(7)]);
var inst_24889 = (state_24956[(2)]);
var inst_24890 = cljs.core.first.call(null,inst_24889);
var inst_24891 = (new cljs.core.List(null,inst_24890,null,(1),null));
var inst_24892__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_24891,(2),null));
var inst_24893__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_24892__$1);
var state_24956__$1 = (function (){var statearr_24971 = state_24956;
(statearr_24971[(13)] = inst_24893__$1);

(statearr_24971[(7)] = inst_24892__$1);

return statearr_24971;
})();
if(cljs.core.truth_(inst_24893__$1)){
var statearr_24972_25007 = state_24956__$1;
(statearr_24972_25007[(1)] = (6));

} else {
var statearr_24973_25008 = state_24956__$1;
(statearr_24973_25008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (14))){
var inst_24930 = (state_24956[(10)]);
var inst_24940 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24941 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24942 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_24943 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_24944 = cljs.core.cons.call(null,inst_24943,inst_24930);
var inst_24945 = (new cljs.core.List(null,inst_24944,null,(1),null));
var inst_24946 = (new cljs.core.List(null,inst_24942,inst_24945,(2),null));
var inst_24947 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_24941,inst_24946,null];
var inst_24948 = cljs.core.PersistentHashMap.fromArrays(inst_24940,inst_24947);
var inst_24949 = cljs.test.do_report.call(null,inst_24948);
var state_24956__$1 = state_24956;
var statearr_24974_25009 = state_24956__$1;
(statearr_24974_25009[(2)] = inst_24949);

(statearr_24974_25009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (10))){
var inst_24916 = (state_24956[(2)]);
var inst_24917 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_24918 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(a)"))));
var inst_24919 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_24918,inst_24916,null];
var inst_24920 = cljs.core.PersistentHashMap.fromArrays(inst_24917,inst_24919);
var inst_24921 = cljs.test.do_report.call(null,inst_24920);
var state_24956__$1 = state_24956;
var statearr_24975_25010 = state_24956__$1;
(statearr_24975_25010[(2)] = inst_24921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24957 === (8))){
var inst_24893 = (state_24956[(13)]);
var inst_24913 = (state_24956[(2)]);
var state_24956__$1 = (function (){var statearr_24976 = state_24956;
(statearr_24976[(14)] = inst_24913);

return statearr_24976;
})();
var statearr_24977_25011 = state_24956__$1;
(statearr_24977_25011[(2)] = inst_24893);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24956__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_24978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24978[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_24978[(1)] = (1));

return statearr_24978;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_24956){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_24956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e24979){if((e24979 instanceof Object)){
var ex__15543__auto__ = e24979;
var statearr_24980_25012 = state_24956;
(statearr_24980_25012[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25013 = state_24956;
state_24956 = G__25013;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_24956){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_24956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_24981 = f__15635__auto__.call(null);
(statearr_24981[(6)] = c__15634__auto__);

return statearr_24981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24771","meta24771",1419532911,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test24770.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test24770.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test24770";

klipse_clj.eval_test.t_klipse_clj$eval_test24770.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test24770");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test24770.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test24770 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test24770(meta24771){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test24770(meta24771));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test24770(null));
});

klipse_clj.eval_test.test_eval_error.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_error;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-error","klipse-clj.eval-test/test-eval-error",-1151935720,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-error","test-eval-error",-870465355,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",25,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_error)?klipse_clj.eval_test.test_eval_error.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_2 = (function klipse_clj$eval_test$test_eval_2(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_2.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_2.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test25014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test25014 = (function (meta25015){
this.meta25015 = meta25015;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25016,meta25015__$1){
var self__ = this;
var _25016__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test25014(meta25015__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25016){
var self__ = this;
var _25016__$1 = this;
return self__.meta25015;
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_25464){
var state_val_25465 = (state_25464[(1)]);
if((state_val_25465 === (65))){
var inst_25420 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25466 = state_25464;
(statearr_25466[(7)] = inst_25420);

return statearr_25466;
})();
var statearr_25467_26142 = state_25464__$1;
(statearr_25467_26142[(2)] = null);

(statearr_25467_26142[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (70))){
var inst_25397 = (state_25464[(8)]);
var inst_25407 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25408 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25409 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25410 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25411 = cljs.core.cons.call(null,inst_25410,inst_25397);
var inst_25412 = (new cljs.core.List(null,inst_25411,null,(1),null));
var inst_25413 = (new cljs.core.List(null,inst_25409,inst_25412,(2),null));
var inst_25414 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25408,inst_25413,null];
var inst_25415 = cljs.core.PersistentHashMap.fromArrays(inst_25407,inst_25414);
var inst_25416 = cljs.test.do_report.call(null,inst_25415);
var state_25464__$1 = state_25464;
var statearr_25468_26143 = state_25464__$1;
(statearr_25468_26143[(2)] = inst_25416);

(statearr_25468_26143[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (62))){
var inst_25356 = (state_25464[(9)]);
var inst_25359 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25360 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25361 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25356);
var inst_25362 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25360,inst_25361,null];
var inst_25363 = cljs.core.PersistentHashMap.fromArrays(inst_25359,inst_25362);
var inst_25364 = cljs.test.do_report.call(null,inst_25363);
var state_25464__$1 = state_25464;
var statearr_25469_26144 = state_25464__$1;
(statearr_25469_26144[(2)] = inst_25364);

(statearr_25469_26144[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (74))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(73),new cljs.core.Keyword(null,"default","default",-1987822328),null,(72));
var inst_25430 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.bb) (def a 1) `(1 a)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(75),inst_25430);
} else {
if((state_val_25465 === (7))){
var inst_25034 = (state_25464[(10)]);
var inst_25044 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25045 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25046 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25047 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25048 = cljs.core.cons.call(null,inst_25047,inst_25034);
var inst_25049 = (new cljs.core.List(null,inst_25048,null,(1),null));
var inst_25050 = (new cljs.core.List(null,inst_25046,inst_25049,(2),null));
var inst_25051 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25045,inst_25050,null];
var inst_25052 = cljs.core.PersistentHashMap.fromArrays(inst_25044,inst_25051);
var inst_25053 = cljs.test.do_report.call(null,inst_25052);
var state_25464__$1 = state_25464;
var statearr_25470_26145 = state_25464__$1;
(statearr_25470_26145[(2)] = inst_25053);

(statearr_25470_26145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (59))){
var inst_25340 = (state_25464[(2)]);
var inst_25341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25342 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25343 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25342,inst_25340,null];
var inst_25344 = cljs.core.PersistentHashMap.fromArrays(inst_25341,inst_25343);
var inst_25345 = cljs.test.do_report.call(null,inst_25344);
var state_25464__$1 = state_25464;
var statearr_25471_26146 = state_25464__$1;
(statearr_25471_26146[(2)] = inst_25345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (20))){
var inst_25114 = (state_25464[(11)]);
var inst_25117 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25118 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25119 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25114);
var inst_25120 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25118,inst_25119,null];
var inst_25121 = cljs.core.PersistentHashMap.fromArrays(inst_25117,inst_25120);
var inst_25122 = cljs.test.do_report.call(null,inst_25121);
var state_25464__$1 = state_25464;
var statearr_25472_26147 = state_25464__$1;
(statearr_25472_26147[(2)] = inst_25122);

(statearr_25472_26147[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (72))){
var inst_25461 = (state_25464[(2)]);
var inst_25462 = done.call(null);
var state_25464__$1 = (function (){var statearr_25473 = state_25464;
(statearr_25473[(12)] = inst_25461);

return statearr_25473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25464__$1,inst_25462);
} else {
if((state_val_25465 === (58))){
var inst_25379 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25474 = state_25464;
(statearr_25474[(13)] = inst_25379);

return statearr_25474;
})();
var statearr_25475_26148 = state_25464__$1;
(statearr_25475_26148[(2)] = null);

(statearr_25475_26148[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (60))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(59),new cljs.core.Keyword(null,"default","default",-1987822328),null,(58));
var inst_25349 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.aa) (+ 1 2)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(61),inst_25349);
} else {
if((state_val_25465 === (27))){
var inst_25154 = (state_25464[(14)]);
var inst_25157 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25158 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25159 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25154);
var inst_25160 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25158,inst_25159,null];
var inst_25161 = cljs.core.PersistentHashMap.fromArrays(inst_25157,inst_25160);
var inst_25162 = cljs.test.do_report.call(null,inst_25161);
var state_25464__$1 = state_25464;
var statearr_25476_26149 = state_25464__$1;
(statearr_25476_26149[(2)] = inst_25162);

(statearr_25476_26149[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (1))){
var state_25464__$1 = state_25464;
var statearr_25477_26150 = state_25464__$1;
(statearr_25477_26150[(2)] = null);

(statearr_25477_26150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (69))){
var inst_25397 = (state_25464[(8)]);
var inst_25400 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25401 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25402 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25397);
var inst_25403 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25401,inst_25402,null];
var inst_25404 = cljs.core.PersistentHashMap.fromArrays(inst_25400,inst_25403);
var inst_25405 = cljs.test.do_report.call(null,inst_25404);
var state_25464__$1 = state_25464;
var statearr_25478_26151 = state_25464__$1;
(statearr_25478_26151[(2)] = inst_25405);

(statearr_25478_26151[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (24))){
var inst_25138 = (state_25464[(2)]);
var inst_25139 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25140 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25141 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25140,inst_25138,null];
var inst_25142 = cljs.core.PersistentHashMap.fromArrays(inst_25139,inst_25141);
var inst_25143 = cljs.test.do_report.call(null,inst_25142);
var state_25464__$1 = state_25464;
var statearr_25479_26152 = state_25464__$1;
(statearr_25479_26152[(2)] = inst_25143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (55))){
var inst_25316 = (state_25464[(15)]);
var inst_25319 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25320 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25321 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25316);
var inst_25322 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25320,inst_25321,null];
var inst_25323 = cljs.core.PersistentHashMap.fromArrays(inst_25319,inst_25322);
var inst_25324 = cljs.test.do_report.call(null,inst_25323);
var state_25464__$1 = state_25464;
var statearr_25480_26153 = state_25464__$1;
(statearr_25480_26153[(2)] = inst_25324);

(statearr_25480_26153[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_25227 = klipse_clj.lang.clojure.the_eval.call(null,"(map inc [1 2 3])");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(40),inst_25227);
} else {
if((state_val_25465 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_25268 = klipse_clj.lang.clojure.the_eval.call(null,"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(47),inst_25268);
} else {
if((state_val_25465 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25027 = klipse_clj.lang.clojure.the_eval.call(null,"(if (> 100 10) 1 2)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(5),inst_25027);
} else {
if((state_val_25465 === (77))){
var inst_25438 = (state_25464[(16)]);
var inst_25448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25449 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_25450 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25451 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25452 = cljs.core.cons.call(null,inst_25451,inst_25438);
var inst_25453 = (new cljs.core.List(null,inst_25452,null,(1),null));
var inst_25454 = (new cljs.core.List(null,inst_25450,inst_25453,(2),null));
var inst_25455 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25449,inst_25454,null];
var inst_25456 = cljs.core.PersistentHashMap.fromArrays(inst_25448,inst_25455);
var inst_25457 = cljs.test.do_report.call(null,inst_25456);
var state_25464__$1 = state_25464;
var statearr_25481_26154 = state_25464__$1;
(statearr_25481_26154[(2)] = inst_25457);

(statearr_25481_26154[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (54))){
var inst_25316 = (state_25464[(15)]);
var inst_25317 = (state_25464[(17)]);
var inst_25311 = (state_25464[(2)]);
var inst_25312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25313 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)];
var inst_25314 = (new cljs.core.PersistentVector(null,2,(5),inst_25312,inst_25313,null));
var inst_25315 = (new cljs.core.List(null,inst_25314,null,(1),null));
var inst_25316__$1 = (new cljs.core.List(null,inst_25311,inst_25315,(2),null));
var inst_25317__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25316__$1);
var state_25464__$1 = (function (){var statearr_25482 = state_25464;
(statearr_25482[(15)] = inst_25316__$1);

(statearr_25482[(17)] = inst_25317__$1);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25317__$1)){
var statearr_25483_26155 = state_25464__$1;
(statearr_25483_26155[(1)] = (55));

} else {
var statearr_25484_26156 = state_25464__$1;
(statearr_25484_26156[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (15))){
var inst_25075 = (state_25464[(18)]);
var inst_25095 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25485 = state_25464;
(statearr_25485[(19)] = inst_25095);

return statearr_25485;
})();
var statearr_25486_26157 = state_25464__$1;
(statearr_25486_26157[(2)] = inst_25075);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (48))){
var inst_25276 = (state_25464[(20)]);
var inst_25279 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25280 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25281 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25276);
var inst_25282 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25280,inst_25281,null];
var inst_25283 = cljs.core.PersistentHashMap.fromArrays(inst_25279,inst_25282);
var inst_25284 = cljs.test.do_report.call(null,inst_25283);
var state_25464__$1 = state_25464;
var statearr_25487_26158 = state_25464__$1;
(statearr_25487_26158[(2)] = inst_25284);

(statearr_25487_26158[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (50))){
var inst_25277 = (state_25464[(21)]);
var inst_25297 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25488 = state_25464;
(statearr_25488[(22)] = inst_25297);

return statearr_25488;
})();
var statearr_25489_26159 = state_25464__$1;
(statearr_25489_26159[(2)] = inst_25277);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (75))){
var inst_25438 = (state_25464[(16)]);
var inst_25439 = (state_25464[(23)]);
var inst_25432 = (state_25464[(2)]);
var inst_25433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25434 = cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null));
var inst_25435 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25434];
var inst_25436 = (new cljs.core.PersistentVector(null,2,(5),inst_25433,inst_25435,null));
var inst_25437 = (new cljs.core.List(null,inst_25436,null,(1),null));
var inst_25438__$1 = (new cljs.core.List(null,inst_25432,inst_25437,(2),null));
var inst_25439__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25438__$1);
var state_25464__$1 = (function (){var statearr_25490 = state_25464;
(statearr_25490[(16)] = inst_25438__$1);

(statearr_25490[(23)] = inst_25439__$1);

return statearr_25490;
})();
if(cljs.core.truth_(inst_25439__$1)){
var statearr_25491_26160 = state_25464__$1;
(statearr_25491_26160[(1)] = (76));

} else {
var statearr_25492_26161 = state_25464__$1;
(statearr_25492_26161[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (21))){
var inst_25114 = (state_25464[(11)]);
var inst_25124 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25125 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25126 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25127 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25128 = cljs.core.cons.call(null,inst_25127,inst_25114);
var inst_25129 = (new cljs.core.List(null,inst_25128,null,(1),null));
var inst_25130 = (new cljs.core.List(null,inst_25126,inst_25129,(2),null));
var inst_25131 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25125,inst_25130,null];
var inst_25132 = cljs.core.PersistentHashMap.fromArrays(inst_25124,inst_25131);
var inst_25133 = cljs.test.do_report.call(null,inst_25132);
var state_25464__$1 = state_25464;
var statearr_25493_26162 = state_25464__$1;
(statearr_25493_26162[(2)] = inst_25133);

(statearr_25493_26162[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (31))){
var inst_25178 = (state_25464[(2)]);
var inst_25179 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25180 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25181 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25180,inst_25178,null];
var inst_25182 = cljs.core.PersistentHashMap.fromArrays(inst_25179,inst_25181);
var inst_25183 = cljs.test.do_report.call(null,inst_25182);
var state_25464__$1 = state_25464;
var statearr_25494_26163 = state_25464__$1;
(statearr_25494_26163[(2)] = inst_25183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_25187 = klipse_clj.lang.clojure.the_eval.call(null,"(if 1 2 3)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(33),inst_25187);
} else {
if((state_val_25465 === (40))){
var inst_25235 = (state_25464[(24)]);
var inst_25236 = (state_25464[(25)]);
var inst_25229 = (state_25464[(2)]);
var inst_25230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25231 = cljs.core.list((2),(3),(4));
var inst_25232 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25231];
var inst_25233 = (new cljs.core.PersistentVector(null,2,(5),inst_25230,inst_25232,null));
var inst_25234 = (new cljs.core.List(null,inst_25233,null,(1),null));
var inst_25235__$1 = (new cljs.core.List(null,inst_25229,inst_25234,(2),null));
var inst_25236__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25235__$1);
var state_25464__$1 = (function (){var statearr_25495 = state_25464;
(statearr_25495[(24)] = inst_25235__$1);

(statearr_25495[(25)] = inst_25236__$1);

return statearr_25495;
})();
if(cljs.core.truth_(inst_25236__$1)){
var statearr_25496_26164 = state_25464__$1;
(statearr_25496_26164[(1)] = (41));

} else {
var statearr_25497_26165 = state_25464__$1;
(statearr_25497_26165[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (56))){
var inst_25316 = (state_25464[(15)]);
var inst_25326 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25327 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25328 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25329 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25330 = cljs.core.cons.call(null,inst_25329,inst_25316);
var inst_25331 = (new cljs.core.List(null,inst_25330,null,(1),null));
var inst_25332 = (new cljs.core.List(null,inst_25328,inst_25331,(2),null));
var inst_25333 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25327,inst_25332,null];
var inst_25334 = cljs.core.PersistentHashMap.fromArrays(inst_25326,inst_25333);
var inst_25335 = cljs.test.do_report.call(null,inst_25334);
var state_25464__$1 = state_25464;
var statearr_25498_26166 = state_25464__$1;
(statearr_25498_26166[(2)] = inst_25335);

(statearr_25498_26166[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (33))){
var inst_25194 = (state_25464[(26)]);
var inst_25195 = (state_25464[(27)]);
var inst_25189 = (state_25464[(2)]);
var inst_25190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25191 = [new cljs.core.Keyword(null,"ok","ok",967785236),(2)];
var inst_25192 = (new cljs.core.PersistentVector(null,2,(5),inst_25190,inst_25191,null));
var inst_25193 = (new cljs.core.List(null,inst_25192,null,(1),null));
var inst_25194__$1 = (new cljs.core.List(null,inst_25189,inst_25193,(2),null));
var inst_25195__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25194__$1);
var state_25464__$1 = (function (){var statearr_25499 = state_25464;
(statearr_25499[(26)] = inst_25194__$1);

(statearr_25499[(27)] = inst_25195__$1);

return statearr_25499;
})();
if(cljs.core.truth_(inst_25195__$1)){
var statearr_25500_26167 = state_25464__$1;
(statearr_25500_26167[(1)] = (34));

} else {
var statearr_25501_26168 = state_25464__$1;
(statearr_25501_26168[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (13))){
var inst_25074 = (state_25464[(28)]);
var inst_25077 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25078 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25079 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25074);
var inst_25080 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25078,inst_25079,null];
var inst_25081 = cljs.core.PersistentHashMap.fromArrays(inst_25077,inst_25080);
var inst_25082 = cljs.test.do_report.call(null,inst_25081);
var state_25464__$1 = state_25464;
var statearr_25502_26169 = state_25464__$1;
(statearr_25502_26169[(2)] = inst_25082);

(statearr_25502_26169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (22))){
var inst_25115 = (state_25464[(29)]);
var inst_25135 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25503 = state_25464;
(statearr_25503[(30)] = inst_25135);

return statearr_25503;
})();
var statearr_25504_26170 = state_25464__$1;
(statearr_25504_26170[(2)] = inst_25115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (36))){
var inst_25195 = (state_25464[(27)]);
var inst_25215 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25505 = state_25464;
(statearr_25505[(31)] = inst_25215);

return statearr_25505;
})();
var statearr_25506_26171 = state_25464__$1;
(statearr_25506_26171[(2)] = inst_25195);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (41))){
var inst_25235 = (state_25464[(24)]);
var inst_25238 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25239 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25240 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25235);
var inst_25241 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25239,inst_25240,null];
var inst_25242 = cljs.core.PersistentHashMap.fromArrays(inst_25238,inst_25241);
var inst_25243 = cljs.test.do_report.call(null,inst_25242);
var state_25464__$1 = state_25464;
var statearr_25507_26172 = state_25464__$1;
(statearr_25507_26172[(2)] = inst_25243);

(statearr_25507_26172[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (43))){
var inst_25236 = (state_25464[(25)]);
var inst_25256 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25508 = state_25464;
(statearr_25508[(32)] = inst_25256);

return statearr_25508;
})();
var statearr_25509_26173 = state_25464__$1;
(statearr_25509_26173[(2)] = inst_25236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (61))){
var inst_25356 = (state_25464[(9)]);
var inst_25357 = (state_25464[(33)]);
var inst_25351 = (state_25464[(2)]);
var inst_25352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25353 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25354 = (new cljs.core.PersistentVector(null,2,(5),inst_25352,inst_25353,null));
var inst_25355 = (new cljs.core.List(null,inst_25354,null,(1),null));
var inst_25356__$1 = (new cljs.core.List(null,inst_25351,inst_25355,(2),null));
var inst_25357__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25356__$1);
var state_25464__$1 = (function (){var statearr_25510 = state_25464;
(statearr_25510[(9)] = inst_25356__$1);

(statearr_25510[(33)] = inst_25357__$1);

return statearr_25510;
})();
if(cljs.core.truth_(inst_25357__$1)){
var statearr_25511_26174 = state_25464__$1;
(statearr_25511_26174[(1)] = (62));

} else {
var statearr_25512_26175 = state_25464__$1;
(statearr_25512_26175[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (29))){
var inst_25155 = (state_25464[(34)]);
var inst_25175 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25513 = state_25464;
(statearr_25513[(35)] = inst_25175);

return statearr_25513;
})();
var statearr_25514_26176 = state_25464__$1;
(statearr_25514_26176[(2)] = inst_25155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (44))){
var inst_25299 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25515 = state_25464;
(statearr_25515[(36)] = inst_25299);

return statearr_25515;
})();
var statearr_25516_26177 = state_25464__$1;
(statearr_25516_26177[(2)] = null);

(statearr_25516_26177[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (6))){
var inst_25034 = (state_25464[(10)]);
var inst_25037 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25038 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25039 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25034);
var inst_25040 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25038,inst_25039,null];
var inst_25041 = cljs.core.PersistentHashMap.fromArrays(inst_25037,inst_25040);
var inst_25042 = cljs.test.do_report.call(null,inst_25041);
var state_25464__$1 = state_25464;
var statearr_25517_26178 = state_25464__$1;
(statearr_25517_26178[(2)] = inst_25042);

(statearr_25517_26178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (28))){
var inst_25154 = (state_25464[(14)]);
var inst_25164 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25165 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25166 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25167 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25168 = cljs.core.cons.call(null,inst_25167,inst_25154);
var inst_25169 = (new cljs.core.List(null,inst_25168,null,(1),null));
var inst_25170 = (new cljs.core.List(null,inst_25166,inst_25169,(2),null));
var inst_25171 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25165,inst_25170,null];
var inst_25172 = cljs.core.PersistentHashMap.fromArrays(inst_25164,inst_25171);
var inst_25173 = cljs.test.do_report.call(null,inst_25172);
var state_25464__$1 = state_25464;
var statearr_25518_26179 = state_25464__$1;
(statearr_25518_26179[(2)] = inst_25173);

(statearr_25518_26179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (64))){
var inst_25357 = (state_25464[(33)]);
var inst_25377 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25519 = state_25464;
(statearr_25519[(37)] = inst_25377);

return statearr_25519;
})();
var statearr_25520_26180 = state_25464__$1;
(statearr_25520_26180[(2)] = inst_25357);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (51))){
var inst_25339 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25521 = state_25464;
(statearr_25521[(38)] = inst_25339);

return statearr_25521;
})();
var statearr_25522_26181 = state_25464__$1;
(statearr_25522_26181[(2)] = null);

(statearr_25522_26181[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_25147 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2)\n\n   \n");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(26),inst_25147);
} else {
if((state_val_25465 === (34))){
var inst_25194 = (state_25464[(26)]);
var inst_25197 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25198 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25199 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25194);
var inst_25200 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25198,inst_25199,null];
var inst_25201 = cljs.core.PersistentHashMap.fromArrays(inst_25197,inst_25200);
var inst_25202 = cljs.test.do_report.call(null,inst_25201);
var state_25464__$1 = state_25464;
var statearr_25523_26182 = state_25464__$1;
(statearr_25523_26182[(2)] = inst_25202);

(statearr_25523_26182[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (17))){
var inst_25098 = (state_25464[(2)]);
var inst_25099 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25100 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25101 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25100,inst_25098,null];
var inst_25102 = cljs.core.PersistentHashMap.fromArrays(inst_25099,inst_25101);
var inst_25103 = cljs.test.do_report.call(null,inst_25102);
var state_25464__$1 = state_25464;
var statearr_25524_26183 = state_25464__$1;
(statearr_25524_26183[(2)] = inst_25103);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (3))){
var inst_25018 = (state_25464[(2)]);
var inst_25019 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25020 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25021 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25020,inst_25018,null];
var inst_25022 = cljs.core.PersistentHashMap.fromArrays(inst_25019,inst_25021);
var inst_25023 = cljs.test.do_report.call(null,inst_25022);
var state_25464__$1 = state_25464;
var statearr_25525_26184 = state_25464__$1;
(statearr_25525_26184[(2)] = inst_25023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (12))){
var inst_25074 = (state_25464[(28)]);
var inst_25075 = (state_25464[(18)]);
var inst_25069 = (state_25464[(2)]);
var inst_25070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25071 = [new cljs.core.Keyword(null,"ok","ok",967785236),(17)];
var inst_25072 = (new cljs.core.PersistentVector(null,2,(5),inst_25070,inst_25071,null));
var inst_25073 = (new cljs.core.List(null,inst_25072,null,(1),null));
var inst_25074__$1 = (new cljs.core.List(null,inst_25069,inst_25073,(2),null));
var inst_25075__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25074__$1);
var state_25464__$1 = (function (){var statearr_25526 = state_25464;
(statearr_25526[(28)] = inst_25074__$1);

(statearr_25526[(18)] = inst_25075__$1);

return statearr_25526;
})();
if(cljs.core.truth_(inst_25075__$1)){
var statearr_25527_26185 = state_25464__$1;
(statearr_25527_26185[(1)] = (13));

} else {
var statearr_25528_26186 = state_25464__$1;
(statearr_25528_26186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (2))){
var inst_25057 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25529 = state_25464;
(statearr_25529[(39)] = inst_25057);

return statearr_25529;
})();
var statearr_25530_26187 = state_25464__$1;
(statearr_25530_26187[(2)] = null);

(statearr_25530_26187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (66))){
var inst_25380 = (state_25464[(2)]);
var inst_25381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25382 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25383 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25382,inst_25380,null];
var inst_25384 = cljs.core.PersistentHashMap.fromArrays(inst_25381,inst_25383);
var inst_25385 = cljs.test.do_report.call(null,inst_25384);
var state_25464__$1 = state_25464;
var statearr_25531_26188 = state_25464__$1;
(statearr_25531_26188[(2)] = inst_25385);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (23))){
var inst_25177 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25532 = state_25464;
(statearr_25532[(40)] = inst_25177);

return statearr_25532;
})();
var statearr_25533_26189 = state_25464__$1;
(statearr_25533_26189[(2)] = null);

(statearr_25533_26189[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (47))){
var inst_25276 = (state_25464[(20)]);
var inst_25277 = (state_25464[(21)]);
var inst_25270 = (state_25464[(2)]);
var inst_25271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25272 = cljs.core.list((10),(11),(12));
var inst_25273 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25272];
var inst_25274 = (new cljs.core.PersistentVector(null,2,(5),inst_25271,inst_25273,null));
var inst_25275 = (new cljs.core.List(null,inst_25274,null,(1),null));
var inst_25276__$1 = (new cljs.core.List(null,inst_25270,inst_25275,(2),null));
var inst_25277__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25276__$1);
var state_25464__$1 = (function (){var statearr_25534 = state_25464;
(statearr_25534[(20)] = inst_25276__$1);

(statearr_25534[(21)] = inst_25277__$1);

return statearr_25534;
})();
if(cljs.core.truth_(inst_25277__$1)){
var statearr_25535_26190 = state_25464__$1;
(statearr_25535_26190[(1)] = (48));

} else {
var statearr_25536_26191 = state_25464__$1;
(statearr_25536_26191[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (35))){
var inst_25194 = (state_25464[(26)]);
var inst_25204 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25205 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25206 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25207 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25208 = cljs.core.cons.call(null,inst_25207,inst_25194);
var inst_25209 = (new cljs.core.List(null,inst_25208,null,(1),null));
var inst_25210 = (new cljs.core.List(null,inst_25206,inst_25209,(2),null));
var inst_25211 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25205,inst_25210,null];
var inst_25212 = cljs.core.PersistentHashMap.fromArrays(inst_25204,inst_25211);
var inst_25213 = cljs.test.do_report.call(null,inst_25212);
var state_25464__$1 = state_25464;
var statearr_25537_26192 = state_25464__$1;
(statearr_25537_26192[(2)] = inst_25213);

(statearr_25537_26192[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (76))){
var inst_25438 = (state_25464[(16)]);
var inst_25441 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25442 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_25443 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25438);
var inst_25444 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25442,inst_25443,null];
var inst_25445 = cljs.core.PersistentHashMap.fromArrays(inst_25441,inst_25444);
var inst_25446 = cljs.test.do_report.call(null,inst_25445);
var state_25464__$1 = state_25464;
var statearr_25538_26193 = state_25464__$1;
(statearr_25538_26193[(2)] = inst_25446);

(statearr_25538_26193[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (19))){
var inst_25114 = (state_25464[(11)]);
var inst_25115 = (state_25464[(29)]);
var inst_25109 = (state_25464[(2)]);
var inst_25110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25111 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25112 = (new cljs.core.PersistentVector(null,2,(5),inst_25110,inst_25111,null));
var inst_25113 = (new cljs.core.List(null,inst_25112,null,(1),null));
var inst_25114__$1 = (new cljs.core.List(null,inst_25109,inst_25113,(2),null));
var inst_25115__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25114__$1);
var state_25464__$1 = (function (){var statearr_25539 = state_25464;
(statearr_25539[(11)] = inst_25114__$1);

(statearr_25539[(29)] = inst_25115__$1);

return statearr_25539;
})();
if(cljs.core.truth_(inst_25115__$1)){
var statearr_25540_26194 = state_25464__$1;
(statearr_25540_26194[(1)] = (20));

} else {
var statearr_25541_26195 = state_25464__$1;
(statearr_25541_26195[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (57))){
var inst_25317 = (state_25464[(17)]);
var inst_25337 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25542 = state_25464;
(statearr_25542[(41)] = inst_25337);

return statearr_25542;
})();
var statearr_25543_26196 = state_25464__$1;
(statearr_25543_26196[(2)] = inst_25317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (68))){
var inst_25397 = (state_25464[(8)]);
var inst_25398 = (state_25464[(42)]);
var inst_25391 = (state_25464[(2)]);
var inst_25392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25393 = cljs.core.list((1),(2));
var inst_25394 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25393];
var inst_25395 = (new cljs.core.PersistentVector(null,2,(5),inst_25392,inst_25394,null));
var inst_25396 = (new cljs.core.List(null,inst_25395,null,(1),null));
var inst_25397__$1 = (new cljs.core.List(null,inst_25391,inst_25396,(2),null));
var inst_25398__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25397__$1);
var state_25464__$1 = (function (){var statearr_25544 = state_25464;
(statearr_25544[(8)] = inst_25397__$1);

(statearr_25544[(42)] = inst_25398__$1);

return statearr_25544;
})();
if(cljs.core.truth_(inst_25398__$1)){
var statearr_25545_26197 = state_25464__$1;
(statearr_25545_26197[(1)] = (69));

} else {
var statearr_25546_26198 = state_25464__$1;
(statearr_25546_26198[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_25067 = klipse_clj.lang.clojure.the_eval.call(null,"(ns aa.cc) (def x 12)\n          (+ x 5)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(12),inst_25067);
} else {
if((state_val_25465 === (9))){
var inst_25097 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25547 = state_25464;
(statearr_25547[(43)] = inst_25097);

return statearr_25547;
})();
var statearr_25548_26199 = state_25464__$1;
(statearr_25548_26199[(2)] = null);

(statearr_25548_26199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (5))){
var inst_25035 = (state_25464[(44)]);
var inst_25034 = (state_25464[(10)]);
var inst_25029 = (state_25464[(2)]);
var inst_25030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25031 = [new cljs.core.Keyword(null,"ok","ok",967785236),(1)];
var inst_25032 = (new cljs.core.PersistentVector(null,2,(5),inst_25030,inst_25031,null));
var inst_25033 = (new cljs.core.List(null,inst_25032,null,(1),null));
var inst_25034__$1 = (new cljs.core.List(null,inst_25029,inst_25033,(2),null));
var inst_25035__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25034__$1);
var state_25464__$1 = (function (){var statearr_25549 = state_25464;
(statearr_25549[(44)] = inst_25035__$1);

(statearr_25549[(10)] = inst_25034__$1);

return statearr_25549;
})();
if(cljs.core.truth_(inst_25035__$1)){
var statearr_25550_26200 = state_25464__$1;
(statearr_25550_26200[(1)] = (6));

} else {
var statearr_25551_26201 = state_25464__$1;
(statearr_25551_26201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (14))){
var inst_25074 = (state_25464[(28)]);
var inst_25084 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25085 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25086 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25087 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25088 = cljs.core.cons.call(null,inst_25087,inst_25074);
var inst_25089 = (new cljs.core.List(null,inst_25088,null,(1),null));
var inst_25090 = (new cljs.core.List(null,inst_25086,inst_25089,(2),null));
var inst_25091 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25085,inst_25090,null];
var inst_25092 = cljs.core.PersistentHashMap.fromArrays(inst_25084,inst_25091);
var inst_25093 = cljs.test.do_report.call(null,inst_25092);
var state_25464__$1 = state_25464;
var statearr_25552_26202 = state_25464__$1;
(statearr_25552_26202[(2)] = inst_25093);

(statearr_25552_26202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (45))){
var inst_25259 = (state_25464[(2)]);
var inst_25260 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25261 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25262 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25261,inst_25259,null];
var inst_25263 = cljs.core.PersistentHashMap.fromArrays(inst_25260,inst_25262);
var inst_25264 = cljs.test.do_report.call(null,inst_25263);
var state_25464__$1 = state_25464;
var statearr_25553_26203 = state_25464__$1;
(statearr_25553_26203[(2)] = inst_25264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (53))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(52),new cljs.core.Keyword(null,"default","default",-1987822328),null,(51));
var inst_25309 = klipse_clj.lang.clojure.the_eval.call(null,"(ns foo.core) ::aa");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(54),inst_25309);
} else {
if((state_val_25465 === (78))){
var inst_25439 = (state_25464[(23)]);
var inst_25459 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25554 = state_25464;
(statearr_25554[(45)] = inst_25459);

return statearr_25554;
})();
var statearr_25555_26204 = state_25464__$1;
(statearr_25555_26204[(2)] = inst_25439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (26))){
var inst_25155 = (state_25464[(34)]);
var inst_25154 = (state_25464[(14)]);
var inst_25149 = (state_25464[(2)]);
var inst_25150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25151 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25152 = (new cljs.core.PersistentVector(null,2,(5),inst_25150,inst_25151,null));
var inst_25153 = (new cljs.core.List(null,inst_25152,null,(1),null));
var inst_25154__$1 = (new cljs.core.List(null,inst_25149,inst_25153,(2),null));
var inst_25155__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25154__$1);
var state_25464__$1 = (function (){var statearr_25556 = state_25464;
(statearr_25556[(34)] = inst_25155__$1);

(statearr_25556[(14)] = inst_25154__$1);

return statearr_25556;
})();
if(cljs.core.truth_(inst_25155__$1)){
var statearr_25557_26205 = state_25464__$1;
(statearr_25557_26205[(1)] = (27));

} else {
var statearr_25558_26206 = state_25464__$1;
(statearr_25558_26206[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (16))){
var inst_25137 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25559 = state_25464;
(statearr_25559[(46)] = inst_25137);

return statearr_25559;
})();
var statearr_25560_26207 = state_25464__$1;
(statearr_25560_26207[(2)] = null);

(statearr_25560_26207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (38))){
var inst_25218 = (state_25464[(2)]);
var inst_25219 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25220 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25221 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25220,inst_25218,null];
var inst_25222 = cljs.core.PersistentHashMap.fromArrays(inst_25219,inst_25221);
var inst_25223 = cljs.test.do_report.call(null,inst_25222);
var state_25464__$1 = state_25464;
var statearr_25561_26208 = state_25464__$1;
(statearr_25561_26208[(2)] = inst_25223);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (30))){
var inst_25217 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25562 = state_25464;
(statearr_25562[(47)] = inst_25217);

return statearr_25562;
})();
var statearr_25563_26209 = state_25464__$1;
(statearr_25563_26209[(2)] = null);

(statearr_25563_26209[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (73))){
var inst_25421 = (state_25464[(2)]);
var inst_25422 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25423 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_25424 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25423,inst_25421,null];
var inst_25425 = cljs.core.PersistentHashMap.fromArrays(inst_25422,inst_25424);
var inst_25426 = cljs.test.do_report.call(null,inst_25425);
var state_25464__$1 = state_25464;
var statearr_25564_26210 = state_25464__$1;
(statearr_25564_26210[(2)] = inst_25426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (10))){
var inst_25058 = (state_25464[(2)]);
var inst_25059 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25060 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25061 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25060,inst_25058,null];
var inst_25062 = cljs.core.PersistentHashMap.fromArrays(inst_25059,inst_25061);
var inst_25063 = cljs.test.do_report.call(null,inst_25062);
var state_25464__$1 = state_25464;
var statearr_25565_26211 = state_25464__$1;
(statearr_25565_26211[(2)] = inst_25063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_25107 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(19),inst_25107);
} else {
if((state_val_25465 === (52))){
var inst_25300 = (state_25464[(2)]);
var inst_25301 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25302 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25303 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25302,inst_25300,null];
var inst_25304 = cljs.core.PersistentHashMap.fromArrays(inst_25301,inst_25303);
var inst_25305 = cljs.test.do_report.call(null,inst_25304);
var state_25464__$1 = state_25464;
var statearr_25566_26212 = state_25464__$1;
(statearr_25566_26212[(2)] = inst_25305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (67))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25464,(66),new cljs.core.Keyword(null,"default","default",-1987822328),null,(65));
var inst_25389 = klipse_clj.lang.clojure.the_eval.call(null,"`(1 2)");
var state_25464__$1 = state_25464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25464__$1,(68),inst_25389);
} else {
if((state_val_25465 === (71))){
var inst_25398 = (state_25464[(42)]);
var inst_25418 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25567 = state_25464;
(statearr_25567[(48)] = inst_25418);

return statearr_25567;
})();
var statearr_25568_26213 = state_25464__$1;
(statearr_25568_26213[(2)] = inst_25398);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (42))){
var inst_25235 = (state_25464[(24)]);
var inst_25245 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25246 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25247 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25248 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25249 = cljs.core.cons.call(null,inst_25248,inst_25235);
var inst_25250 = (new cljs.core.List(null,inst_25249,null,(1),null));
var inst_25251 = (new cljs.core.List(null,inst_25247,inst_25250,(2),null));
var inst_25252 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25246,inst_25251,null];
var inst_25253 = cljs.core.PersistentHashMap.fromArrays(inst_25245,inst_25252);
var inst_25254 = cljs.test.do_report.call(null,inst_25253);
var state_25464__$1 = state_25464;
var statearr_25569_26214 = state_25464__$1;
(statearr_25569_26214[(2)] = inst_25254);

(statearr_25569_26214[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (37))){
var inst_25258 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25570 = state_25464;
(statearr_25570[(49)] = inst_25258);

return statearr_25570;
})();
var statearr_25571_26215 = state_25464__$1;
(statearr_25571_26215[(2)] = null);

(statearr_25571_26215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (63))){
var inst_25356 = (state_25464[(9)]);
var inst_25366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25367 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25368 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25369 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25370 = cljs.core.cons.call(null,inst_25369,inst_25356);
var inst_25371 = (new cljs.core.List(null,inst_25370,null,(1),null));
var inst_25372 = (new cljs.core.List(null,inst_25368,inst_25371,(2),null));
var inst_25373 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25367,inst_25372,null];
var inst_25374 = cljs.core.PersistentHashMap.fromArrays(inst_25366,inst_25373);
var inst_25375 = cljs.test.do_report.call(null,inst_25374);
var state_25464__$1 = state_25464;
var statearr_25572_26216 = state_25464__$1;
(statearr_25572_26216[(2)] = inst_25375);

(statearr_25572_26216[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (8))){
var inst_25035 = (state_25464[(44)]);
var inst_25055 = (state_25464[(2)]);
var state_25464__$1 = (function (){var statearr_25573 = state_25464;
(statearr_25573[(50)] = inst_25055);

return statearr_25573;
})();
var statearr_25574_26217 = state_25464__$1;
(statearr_25574_26217[(2)] = inst_25035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25465 === (49))){
var inst_25276 = (state_25464[(20)]);
var inst_25286 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25287 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25288 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25289 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25290 = cljs.core.cons.call(null,inst_25289,inst_25276);
var inst_25291 = (new cljs.core.List(null,inst_25290,null,(1),null));
var inst_25292 = (new cljs.core.List(null,inst_25288,inst_25291,(2),null));
var inst_25293 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25287,inst_25292,null];
var inst_25294 = cljs.core.PersistentHashMap.fromArrays(inst_25286,inst_25293);
var inst_25295 = cljs.test.do_report.call(null,inst_25294);
var state_25464__$1 = state_25464;
var statearr_25575_26218 = state_25464__$1;
(statearr_25575_26218[(2)] = inst_25295);

(statearr_25575_26218[(1)] = (50));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_25576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25576[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_25576[(1)] = (1));

return statearr_25576;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_25464){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_25464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e25577){if((e25577 instanceof Object)){
var ex__15543__auto__ = e25577;
var statearr_25578_26219 = state_25464;
(statearr_25578_26219[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26220 = state_25464;
state_25464 = G__26220;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_25464){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_25464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_25579 = f__15635__auto__.call(null);
(statearr_25579[(6)] = c__15634__auto__);

return statearr_25579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.apply = (function (self__,args25017){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25017)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_26026){
var state_val_26027 = (state_26026[(1)]);
if((state_val_26027 === (65))){
var inst_25982 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26028 = state_26026;
(statearr_26028[(7)] = inst_25982);

return statearr_26028;
})();
var statearr_26029_26221 = state_26026__$1;
(statearr_26029_26221[(2)] = null);

(statearr_26029_26221[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (70))){
var inst_25959 = (state_26026[(8)]);
var inst_25969 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25970 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25971 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25972 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25973 = cljs.core.cons.call(null,inst_25972,inst_25959);
var inst_25974 = (new cljs.core.List(null,inst_25973,null,(1),null));
var inst_25975 = (new cljs.core.List(null,inst_25971,inst_25974,(2),null));
var inst_25976 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25970,inst_25975,null];
var inst_25977 = cljs.core.PersistentHashMap.fromArrays(inst_25969,inst_25976);
var inst_25978 = cljs.test.do_report.call(null,inst_25977);
var state_26026__$1 = state_26026;
var statearr_26030_26222 = state_26026__$1;
(statearr_26030_26222[(2)] = inst_25978);

(statearr_26030_26222[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (62))){
var inst_25918 = (state_26026[(9)]);
var inst_25921 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25922 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25923 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25918);
var inst_25924 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25922,inst_25923,null];
var inst_25925 = cljs.core.PersistentHashMap.fromArrays(inst_25921,inst_25924);
var inst_25926 = cljs.test.do_report.call(null,inst_25925);
var state_26026__$1 = state_26026;
var statearr_26031_26223 = state_26026__$1;
(statearr_26031_26223[(2)] = inst_25926);

(statearr_26031_26223[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (74))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(73),new cljs.core.Keyword(null,"default","default",-1987822328),null,(72));
var inst_25992 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.bb) (def a 1) `(1 a)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(75),inst_25992);
} else {
if((state_val_26027 === (7))){
var inst_25596 = (state_26026[(10)]);
var inst_25606 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25607 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25608 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25609 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25610 = cljs.core.cons.call(null,inst_25609,inst_25596);
var inst_25611 = (new cljs.core.List(null,inst_25610,null,(1),null));
var inst_25612 = (new cljs.core.List(null,inst_25608,inst_25611,(2),null));
var inst_25613 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25607,inst_25612,null];
var inst_25614 = cljs.core.PersistentHashMap.fromArrays(inst_25606,inst_25613);
var inst_25615 = cljs.test.do_report.call(null,inst_25614);
var state_26026__$1 = state_26026;
var statearr_26032_26224 = state_26026__$1;
(statearr_26032_26224[(2)] = inst_25615);

(statearr_26032_26224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (59))){
var inst_25902 = (state_26026[(2)]);
var inst_25903 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25904 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25905 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25904,inst_25902,null];
var inst_25906 = cljs.core.PersistentHashMap.fromArrays(inst_25903,inst_25905);
var inst_25907 = cljs.test.do_report.call(null,inst_25906);
var state_26026__$1 = state_26026;
var statearr_26033_26225 = state_26026__$1;
(statearr_26033_26225[(2)] = inst_25907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (20))){
var inst_25676 = (state_26026[(11)]);
var inst_25679 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25680 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25681 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25676);
var inst_25682 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25680,inst_25681,null];
var inst_25683 = cljs.core.PersistentHashMap.fromArrays(inst_25679,inst_25682);
var inst_25684 = cljs.test.do_report.call(null,inst_25683);
var state_26026__$1 = state_26026;
var statearr_26034_26226 = state_26026__$1;
(statearr_26034_26226[(2)] = inst_25684);

(statearr_26034_26226[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (72))){
var inst_26023 = (state_26026[(2)]);
var inst_26024 = done.call(null);
var state_26026__$1 = (function (){var statearr_26035 = state_26026;
(statearr_26035[(12)] = inst_26023);

return statearr_26035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26026__$1,inst_26024);
} else {
if((state_val_26027 === (58))){
var inst_25941 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26036 = state_26026;
(statearr_26036[(13)] = inst_25941);

return statearr_26036;
})();
var statearr_26037_26227 = state_26026__$1;
(statearr_26037_26227[(2)] = null);

(statearr_26037_26227[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (60))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(59),new cljs.core.Keyword(null,"default","default",-1987822328),null,(58));
var inst_25911 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.aa) (+ 1 2)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(61),inst_25911);
} else {
if((state_val_26027 === (27))){
var inst_25716 = (state_26026[(14)]);
var inst_25719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25720 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25721 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25716);
var inst_25722 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25720,inst_25721,null];
var inst_25723 = cljs.core.PersistentHashMap.fromArrays(inst_25719,inst_25722);
var inst_25724 = cljs.test.do_report.call(null,inst_25723);
var state_26026__$1 = state_26026;
var statearr_26038_26228 = state_26026__$1;
(statearr_26038_26228[(2)] = inst_25724);

(statearr_26038_26228[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (1))){
var state_26026__$1 = state_26026;
var statearr_26039_26229 = state_26026__$1;
(statearr_26039_26229[(2)] = null);

(statearr_26039_26229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (69))){
var inst_25959 = (state_26026[(8)]);
var inst_25962 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25963 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25964 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25959);
var inst_25965 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25963,inst_25964,null];
var inst_25966 = cljs.core.PersistentHashMap.fromArrays(inst_25962,inst_25965);
var inst_25967 = cljs.test.do_report.call(null,inst_25966);
var state_26026__$1 = state_26026;
var statearr_26040_26230 = state_26026__$1;
(statearr_26040_26230[(2)] = inst_25967);

(statearr_26040_26230[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (24))){
var inst_25700 = (state_26026[(2)]);
var inst_25701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25702 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25703 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25702,inst_25700,null];
var inst_25704 = cljs.core.PersistentHashMap.fromArrays(inst_25701,inst_25703);
var inst_25705 = cljs.test.do_report.call(null,inst_25704);
var state_26026__$1 = state_26026;
var statearr_26041_26231 = state_26026__$1;
(statearr_26041_26231[(2)] = inst_25705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (55))){
var inst_25878 = (state_26026[(15)]);
var inst_25881 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25882 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25883 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25878);
var inst_25884 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25882,inst_25883,null];
var inst_25885 = cljs.core.PersistentHashMap.fromArrays(inst_25881,inst_25884);
var inst_25886 = cljs.test.do_report.call(null,inst_25885);
var state_26026__$1 = state_26026;
var statearr_26042_26232 = state_26026__$1;
(statearr_26042_26232[(2)] = inst_25886);

(statearr_26042_26232[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_25789 = klipse_clj.lang.clojure.the_eval.call(null,"(map inc [1 2 3])");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(40),inst_25789);
} else {
if((state_val_26027 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_25830 = klipse_clj.lang.clojure.the_eval.call(null,"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(47),inst_25830);
} else {
if((state_val_26027 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25589 = klipse_clj.lang.clojure.the_eval.call(null,"(if (> 100 10) 1 2)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(5),inst_25589);
} else {
if((state_val_26027 === (77))){
var inst_26000 = (state_26026[(16)]);
var inst_26010 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26011 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_26012 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26013 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26014 = cljs.core.cons.call(null,inst_26013,inst_26000);
var inst_26015 = (new cljs.core.List(null,inst_26014,null,(1),null));
var inst_26016 = (new cljs.core.List(null,inst_26012,inst_26015,(2),null));
var inst_26017 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26011,inst_26016,null];
var inst_26018 = cljs.core.PersistentHashMap.fromArrays(inst_26010,inst_26017);
var inst_26019 = cljs.test.do_report.call(null,inst_26018);
var state_26026__$1 = state_26026;
var statearr_26043_26233 = state_26026__$1;
(statearr_26043_26233[(2)] = inst_26019);

(statearr_26043_26233[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (54))){
var inst_25878 = (state_26026[(15)]);
var inst_25879 = (state_26026[(17)]);
var inst_25873 = (state_26026[(2)]);
var inst_25874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25875 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)];
var inst_25876 = (new cljs.core.PersistentVector(null,2,(5),inst_25874,inst_25875,null));
var inst_25877 = (new cljs.core.List(null,inst_25876,null,(1),null));
var inst_25878__$1 = (new cljs.core.List(null,inst_25873,inst_25877,(2),null));
var inst_25879__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25878__$1);
var state_26026__$1 = (function (){var statearr_26044 = state_26026;
(statearr_26044[(15)] = inst_25878__$1);

(statearr_26044[(17)] = inst_25879__$1);

return statearr_26044;
})();
if(cljs.core.truth_(inst_25879__$1)){
var statearr_26045_26234 = state_26026__$1;
(statearr_26045_26234[(1)] = (55));

} else {
var statearr_26046_26235 = state_26026__$1;
(statearr_26046_26235[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (15))){
var inst_25637 = (state_26026[(18)]);
var inst_25657 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26047 = state_26026;
(statearr_26047[(19)] = inst_25657);

return statearr_26047;
})();
var statearr_26048_26236 = state_26026__$1;
(statearr_26048_26236[(2)] = inst_25637);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (48))){
var inst_25838 = (state_26026[(20)]);
var inst_25841 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25842 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25843 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25838);
var inst_25844 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25842,inst_25843,null];
var inst_25845 = cljs.core.PersistentHashMap.fromArrays(inst_25841,inst_25844);
var inst_25846 = cljs.test.do_report.call(null,inst_25845);
var state_26026__$1 = state_26026;
var statearr_26049_26237 = state_26026__$1;
(statearr_26049_26237[(2)] = inst_25846);

(statearr_26049_26237[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (50))){
var inst_25839 = (state_26026[(21)]);
var inst_25859 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26050 = state_26026;
(statearr_26050[(22)] = inst_25859);

return statearr_26050;
})();
var statearr_26051_26238 = state_26026__$1;
(statearr_26051_26238[(2)] = inst_25839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (75))){
var inst_26001 = (state_26026[(23)]);
var inst_26000 = (state_26026[(16)]);
var inst_25994 = (state_26026[(2)]);
var inst_25995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25996 = cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null));
var inst_25997 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25996];
var inst_25998 = (new cljs.core.PersistentVector(null,2,(5),inst_25995,inst_25997,null));
var inst_25999 = (new cljs.core.List(null,inst_25998,null,(1),null));
var inst_26000__$1 = (new cljs.core.List(null,inst_25994,inst_25999,(2),null));
var inst_26001__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26000__$1);
var state_26026__$1 = (function (){var statearr_26052 = state_26026;
(statearr_26052[(23)] = inst_26001__$1);

(statearr_26052[(16)] = inst_26000__$1);

return statearr_26052;
})();
if(cljs.core.truth_(inst_26001__$1)){
var statearr_26053_26239 = state_26026__$1;
(statearr_26053_26239[(1)] = (76));

} else {
var statearr_26054_26240 = state_26026__$1;
(statearr_26054_26240[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (21))){
var inst_25676 = (state_26026[(11)]);
var inst_25686 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25687 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25688 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25689 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25690 = cljs.core.cons.call(null,inst_25689,inst_25676);
var inst_25691 = (new cljs.core.List(null,inst_25690,null,(1),null));
var inst_25692 = (new cljs.core.List(null,inst_25688,inst_25691,(2),null));
var inst_25693 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25687,inst_25692,null];
var inst_25694 = cljs.core.PersistentHashMap.fromArrays(inst_25686,inst_25693);
var inst_25695 = cljs.test.do_report.call(null,inst_25694);
var state_26026__$1 = state_26026;
var statearr_26055_26241 = state_26026__$1;
(statearr_26055_26241[(2)] = inst_25695);

(statearr_26055_26241[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (31))){
var inst_25740 = (state_26026[(2)]);
var inst_25741 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25742 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25743 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25742,inst_25740,null];
var inst_25744 = cljs.core.PersistentHashMap.fromArrays(inst_25741,inst_25743);
var inst_25745 = cljs.test.do_report.call(null,inst_25744);
var state_26026__$1 = state_26026;
var statearr_26056_26242 = state_26026__$1;
(statearr_26056_26242[(2)] = inst_25745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_25749 = klipse_clj.lang.clojure.the_eval.call(null,"(if 1 2 3)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(33),inst_25749);
} else {
if((state_val_26027 === (40))){
var inst_25797 = (state_26026[(24)]);
var inst_25798 = (state_26026[(25)]);
var inst_25791 = (state_26026[(2)]);
var inst_25792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25793 = cljs.core.list((2),(3),(4));
var inst_25794 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25793];
var inst_25795 = (new cljs.core.PersistentVector(null,2,(5),inst_25792,inst_25794,null));
var inst_25796 = (new cljs.core.List(null,inst_25795,null,(1),null));
var inst_25797__$1 = (new cljs.core.List(null,inst_25791,inst_25796,(2),null));
var inst_25798__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25797__$1);
var state_26026__$1 = (function (){var statearr_26057 = state_26026;
(statearr_26057[(24)] = inst_25797__$1);

(statearr_26057[(25)] = inst_25798__$1);

return statearr_26057;
})();
if(cljs.core.truth_(inst_25798__$1)){
var statearr_26058_26243 = state_26026__$1;
(statearr_26058_26243[(1)] = (41));

} else {
var statearr_26059_26244 = state_26026__$1;
(statearr_26059_26244[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (56))){
var inst_25878 = (state_26026[(15)]);
var inst_25888 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25889 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25890 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25891 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25892 = cljs.core.cons.call(null,inst_25891,inst_25878);
var inst_25893 = (new cljs.core.List(null,inst_25892,null,(1),null));
var inst_25894 = (new cljs.core.List(null,inst_25890,inst_25893,(2),null));
var inst_25895 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25889,inst_25894,null];
var inst_25896 = cljs.core.PersistentHashMap.fromArrays(inst_25888,inst_25895);
var inst_25897 = cljs.test.do_report.call(null,inst_25896);
var state_26026__$1 = state_26026;
var statearr_26060_26245 = state_26026__$1;
(statearr_26060_26245[(2)] = inst_25897);

(statearr_26060_26245[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (33))){
var inst_25756 = (state_26026[(26)]);
var inst_25757 = (state_26026[(27)]);
var inst_25751 = (state_26026[(2)]);
var inst_25752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25753 = [new cljs.core.Keyword(null,"ok","ok",967785236),(2)];
var inst_25754 = (new cljs.core.PersistentVector(null,2,(5),inst_25752,inst_25753,null));
var inst_25755 = (new cljs.core.List(null,inst_25754,null,(1),null));
var inst_25756__$1 = (new cljs.core.List(null,inst_25751,inst_25755,(2),null));
var inst_25757__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25756__$1);
var state_26026__$1 = (function (){var statearr_26061 = state_26026;
(statearr_26061[(26)] = inst_25756__$1);

(statearr_26061[(27)] = inst_25757__$1);

return statearr_26061;
})();
if(cljs.core.truth_(inst_25757__$1)){
var statearr_26062_26246 = state_26026__$1;
(statearr_26062_26246[(1)] = (34));

} else {
var statearr_26063_26247 = state_26026__$1;
(statearr_26063_26247[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (13))){
var inst_25636 = (state_26026[(28)]);
var inst_25639 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25640 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25641 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25636);
var inst_25642 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25640,inst_25641,null];
var inst_25643 = cljs.core.PersistentHashMap.fromArrays(inst_25639,inst_25642);
var inst_25644 = cljs.test.do_report.call(null,inst_25643);
var state_26026__$1 = state_26026;
var statearr_26064_26248 = state_26026__$1;
(statearr_26064_26248[(2)] = inst_25644);

(statearr_26064_26248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (22))){
var inst_25677 = (state_26026[(29)]);
var inst_25697 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26065 = state_26026;
(statearr_26065[(30)] = inst_25697);

return statearr_26065;
})();
var statearr_26066_26249 = state_26026__$1;
(statearr_26066_26249[(2)] = inst_25677);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (36))){
var inst_25757 = (state_26026[(27)]);
var inst_25777 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26067 = state_26026;
(statearr_26067[(31)] = inst_25777);

return statearr_26067;
})();
var statearr_26068_26250 = state_26026__$1;
(statearr_26068_26250[(2)] = inst_25757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (41))){
var inst_25797 = (state_26026[(24)]);
var inst_25800 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25801 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25802 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25797);
var inst_25803 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25801,inst_25802,null];
var inst_25804 = cljs.core.PersistentHashMap.fromArrays(inst_25800,inst_25803);
var inst_25805 = cljs.test.do_report.call(null,inst_25804);
var state_26026__$1 = state_26026;
var statearr_26069_26251 = state_26026__$1;
(statearr_26069_26251[(2)] = inst_25805);

(statearr_26069_26251[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (43))){
var inst_25798 = (state_26026[(25)]);
var inst_25818 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26070 = state_26026;
(statearr_26070[(32)] = inst_25818);

return statearr_26070;
})();
var statearr_26071_26252 = state_26026__$1;
(statearr_26071_26252[(2)] = inst_25798);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (61))){
var inst_25919 = (state_26026[(33)]);
var inst_25918 = (state_26026[(9)]);
var inst_25913 = (state_26026[(2)]);
var inst_25914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25915 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25916 = (new cljs.core.PersistentVector(null,2,(5),inst_25914,inst_25915,null));
var inst_25917 = (new cljs.core.List(null,inst_25916,null,(1),null));
var inst_25918__$1 = (new cljs.core.List(null,inst_25913,inst_25917,(2),null));
var inst_25919__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25918__$1);
var state_26026__$1 = (function (){var statearr_26072 = state_26026;
(statearr_26072[(33)] = inst_25919__$1);

(statearr_26072[(9)] = inst_25918__$1);

return statearr_26072;
})();
if(cljs.core.truth_(inst_25919__$1)){
var statearr_26073_26253 = state_26026__$1;
(statearr_26073_26253[(1)] = (62));

} else {
var statearr_26074_26254 = state_26026__$1;
(statearr_26074_26254[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (29))){
var inst_25717 = (state_26026[(34)]);
var inst_25737 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26075 = state_26026;
(statearr_26075[(35)] = inst_25737);

return statearr_26075;
})();
var statearr_26076_26255 = state_26026__$1;
(statearr_26076_26255[(2)] = inst_25717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (44))){
var inst_25861 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26077 = state_26026;
(statearr_26077[(36)] = inst_25861);

return statearr_26077;
})();
var statearr_26078_26256 = state_26026__$1;
(statearr_26078_26256[(2)] = null);

(statearr_26078_26256[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (6))){
var inst_25596 = (state_26026[(10)]);
var inst_25599 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25600 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25601 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25596);
var inst_25602 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25600,inst_25601,null];
var inst_25603 = cljs.core.PersistentHashMap.fromArrays(inst_25599,inst_25602);
var inst_25604 = cljs.test.do_report.call(null,inst_25603);
var state_26026__$1 = state_26026;
var statearr_26079_26257 = state_26026__$1;
(statearr_26079_26257[(2)] = inst_25604);

(statearr_26079_26257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (28))){
var inst_25716 = (state_26026[(14)]);
var inst_25726 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25727 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)\n\n   \n")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25728 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25729 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25730 = cljs.core.cons.call(null,inst_25729,inst_25716);
var inst_25731 = (new cljs.core.List(null,inst_25730,null,(1),null));
var inst_25732 = (new cljs.core.List(null,inst_25728,inst_25731,(2),null));
var inst_25733 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25727,inst_25732,null];
var inst_25734 = cljs.core.PersistentHashMap.fromArrays(inst_25726,inst_25733);
var inst_25735 = cljs.test.do_report.call(null,inst_25734);
var state_26026__$1 = state_26026;
var statearr_26080_26258 = state_26026__$1;
(statearr_26080_26258[(2)] = inst_25735);

(statearr_26080_26258[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (64))){
var inst_25919 = (state_26026[(33)]);
var inst_25939 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26081 = state_26026;
(statearr_26081[(37)] = inst_25939);

return statearr_26081;
})();
var statearr_26082_26259 = state_26026__$1;
(statearr_26082_26259[(2)] = inst_25919);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (51))){
var inst_25901 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26083 = state_26026;
(statearr_26083[(38)] = inst_25901);

return statearr_26083;
})();
var statearr_26084_26260 = state_26026__$1;
(statearr_26084_26260[(2)] = null);

(statearr_26084_26260[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_25709 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2)\n\n   \n");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(26),inst_25709);
} else {
if((state_val_26027 === (34))){
var inst_25756 = (state_26026[(26)]);
var inst_25759 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25760 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25761 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_25756);
var inst_25762 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25760,inst_25761,null];
var inst_25763 = cljs.core.PersistentHashMap.fromArrays(inst_25759,inst_25762);
var inst_25764 = cljs.test.do_report.call(null,inst_25763);
var state_26026__$1 = state_26026;
var statearr_26085_26261 = state_26026__$1;
(statearr_26085_26261[(2)] = inst_25764);

(statearr_26085_26261[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (17))){
var inst_25660 = (state_26026[(2)]);
var inst_25661 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25662 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25663 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25662,inst_25660,null];
var inst_25664 = cljs.core.PersistentHashMap.fromArrays(inst_25661,inst_25663);
var inst_25665 = cljs.test.do_report.call(null,inst_25664);
var state_26026__$1 = state_26026;
var statearr_26086_26262 = state_26026__$1;
(statearr_26086_26262[(2)] = inst_25665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (3))){
var inst_25580 = (state_26026[(2)]);
var inst_25581 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25582 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if (> 100 10) 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_25583 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25582,inst_25580,null];
var inst_25584 = cljs.core.PersistentHashMap.fromArrays(inst_25581,inst_25583);
var inst_25585 = cljs.test.do_report.call(null,inst_25584);
var state_26026__$1 = state_26026;
var statearr_26087_26263 = state_26026__$1;
(statearr_26087_26263[(2)] = inst_25585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (12))){
var inst_25637 = (state_26026[(18)]);
var inst_25636 = (state_26026[(28)]);
var inst_25631 = (state_26026[(2)]);
var inst_25632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25633 = [new cljs.core.Keyword(null,"ok","ok",967785236),(17)];
var inst_25634 = (new cljs.core.PersistentVector(null,2,(5),inst_25632,inst_25633,null));
var inst_25635 = (new cljs.core.List(null,inst_25634,null,(1),null));
var inst_25636__$1 = (new cljs.core.List(null,inst_25631,inst_25635,(2),null));
var inst_25637__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25636__$1);
var state_26026__$1 = (function (){var statearr_26088 = state_26026;
(statearr_26088[(18)] = inst_25637__$1);

(statearr_26088[(28)] = inst_25636__$1);

return statearr_26088;
})();
if(cljs.core.truth_(inst_25637__$1)){
var statearr_26089_26264 = state_26026__$1;
(statearr_26089_26264[(1)] = (13));

} else {
var statearr_26090_26265 = state_26026__$1;
(statearr_26090_26265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (2))){
var inst_25619 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26091 = state_26026;
(statearr_26091[(39)] = inst_25619);

return statearr_26091;
})();
var statearr_26092_26266 = state_26026__$1;
(statearr_26092_26266[(2)] = null);

(statearr_26092_26266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (66))){
var inst_25942 = (state_26026[(2)]);
var inst_25943 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25944 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"`(1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2)))], null));
var inst_25945 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25944,inst_25942,null];
var inst_25946 = cljs.core.PersistentHashMap.fromArrays(inst_25943,inst_25945);
var inst_25947 = cljs.test.do_report.call(null,inst_25946);
var state_26026__$1 = state_26026;
var statearr_26093_26267 = state_26026__$1;
(statearr_26093_26267[(2)] = inst_25947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (23))){
var inst_25739 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26094 = state_26026;
(statearr_26094[(40)] = inst_25739);

return statearr_26094;
})();
var statearr_26095_26268 = state_26026__$1;
(statearr_26095_26268[(2)] = null);

(statearr_26095_26268[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (47))){
var inst_25839 = (state_26026[(21)]);
var inst_25838 = (state_26026[(20)]);
var inst_25832 = (state_26026[(2)]);
var inst_25833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25834 = cljs.core.list((10),(11),(12));
var inst_25835 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25834];
var inst_25836 = (new cljs.core.PersistentVector(null,2,(5),inst_25833,inst_25835,null));
var inst_25837 = (new cljs.core.List(null,inst_25836,null,(1),null));
var inst_25838__$1 = (new cljs.core.List(null,inst_25832,inst_25837,(2),null));
var inst_25839__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25838__$1);
var state_26026__$1 = (function (){var statearr_26096 = state_26026;
(statearr_26096[(21)] = inst_25839__$1);

(statearr_26096[(20)] = inst_25838__$1);

return statearr_26096;
})();
if(cljs.core.truth_(inst_25839__$1)){
var statearr_26097_26269 = state_26026__$1;
(statearr_26097_26269[(1)] = (48));

} else {
var statearr_26098_26270 = state_26026__$1;
(statearr_26098_26270[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (35))){
var inst_25756 = (state_26026[(26)]);
var inst_25766 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25767 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(if 1 2 3)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(2)], null));
var inst_25768 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25769 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25770 = cljs.core.cons.call(null,inst_25769,inst_25756);
var inst_25771 = (new cljs.core.List(null,inst_25770,null,(1),null));
var inst_25772 = (new cljs.core.List(null,inst_25768,inst_25771,(2),null));
var inst_25773 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25767,inst_25772,null];
var inst_25774 = cljs.core.PersistentHashMap.fromArrays(inst_25766,inst_25773);
var inst_25775 = cljs.test.do_report.call(null,inst_25774);
var state_26026__$1 = state_26026;
var statearr_26099_26271 = state_26026__$1;
(statearr_26099_26271[(2)] = inst_25775);

(statearr_26099_26271[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (76))){
var inst_26000 = (state_26026[(16)]);
var inst_26003 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26004 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_26005 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26000);
var inst_26006 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26004,inst_26005,null];
var inst_26007 = cljs.core.PersistentHashMap.fromArrays(inst_26003,inst_26006);
var inst_26008 = cljs.test.do_report.call(null,inst_26007);
var state_26026__$1 = state_26026;
var statearr_26100_26272 = state_26026__$1;
(statearr_26100_26272[(2)] = inst_26008);

(statearr_26100_26272[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (19))){
var inst_25677 = (state_26026[(29)]);
var inst_25676 = (state_26026[(11)]);
var inst_25671 = (state_26026[(2)]);
var inst_25672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25673 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25674 = (new cljs.core.PersistentVector(null,2,(5),inst_25672,inst_25673,null));
var inst_25675 = (new cljs.core.List(null,inst_25674,null,(1),null));
var inst_25676__$1 = (new cljs.core.List(null,inst_25671,inst_25675,(2),null));
var inst_25677__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25676__$1);
var state_26026__$1 = (function (){var statearr_26101 = state_26026;
(statearr_26101[(29)] = inst_25677__$1);

(statearr_26101[(11)] = inst_25676__$1);

return statearr_26101;
})();
if(cljs.core.truth_(inst_25677__$1)){
var statearr_26102_26273 = state_26026__$1;
(statearr_26102_26273[(1)] = (20));

} else {
var statearr_26103_26274 = state_26026__$1;
(statearr_26103_26274[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (57))){
var inst_25879 = (state_26026[(17)]);
var inst_25899 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26104 = state_26026;
(statearr_26104[(41)] = inst_25899);

return statearr_26104;
})();
var statearr_26105_26275 = state_26026__$1;
(statearr_26105_26275[(2)] = inst_25879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (68))){
var inst_25959 = (state_26026[(8)]);
var inst_25960 = (state_26026[(42)]);
var inst_25953 = (state_26026[(2)]);
var inst_25954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25955 = cljs.core.list((1),(2));
var inst_25956 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_25955];
var inst_25957 = (new cljs.core.PersistentVector(null,2,(5),inst_25954,inst_25956,null));
var inst_25958 = (new cljs.core.List(null,inst_25957,null,(1),null));
var inst_25959__$1 = (new cljs.core.List(null,inst_25953,inst_25958,(2),null));
var inst_25960__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25959__$1);
var state_26026__$1 = (function (){var statearr_26106 = state_26026;
(statearr_26106[(8)] = inst_25959__$1);

(statearr_26106[(42)] = inst_25960__$1);

return statearr_26106;
})();
if(cljs.core.truth_(inst_25960__$1)){
var statearr_26107_26276 = state_26026__$1;
(statearr_26107_26276[(1)] = (69));

} else {
var statearr_26108_26277 = state_26026__$1;
(statearr_26108_26277[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_25629 = klipse_clj.lang.clojure.the_eval.call(null,"(ns aa.cc) (def x 12)\n          (+ x 5)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(12),inst_25629);
} else {
if((state_val_26027 === (9))){
var inst_25659 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26109 = state_26026;
(statearr_26109[(43)] = inst_25659);

return statearr_26109;
})();
var statearr_26110_26278 = state_26026__$1;
(statearr_26110_26278[(2)] = null);

(statearr_26110_26278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (5))){
var inst_25597 = (state_26026[(44)]);
var inst_25596 = (state_26026[(10)]);
var inst_25591 = (state_26026[(2)]);
var inst_25592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25593 = [new cljs.core.Keyword(null,"ok","ok",967785236),(1)];
var inst_25594 = (new cljs.core.PersistentVector(null,2,(5),inst_25592,inst_25593,null));
var inst_25595 = (new cljs.core.List(null,inst_25594,null,(1),null));
var inst_25596__$1 = (new cljs.core.List(null,inst_25591,inst_25595,(2),null));
var inst_25597__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25596__$1);
var state_26026__$1 = (function (){var statearr_26111 = state_26026;
(statearr_26111[(44)] = inst_25597__$1);

(statearr_26111[(10)] = inst_25596__$1);

return statearr_26111;
})();
if(cljs.core.truth_(inst_25597__$1)){
var statearr_26112_26279 = state_26026__$1;
(statearr_26112_26279[(1)] = (6));

} else {
var statearr_26113_26280 = state_26026__$1;
(statearr_26113_26280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (14))){
var inst_25636 = (state_26026[(28)]);
var inst_25646 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25647 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25648 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25649 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25650 = cljs.core.cons.call(null,inst_25649,inst_25636);
var inst_25651 = (new cljs.core.List(null,inst_25650,null,(1),null));
var inst_25652 = (new cljs.core.List(null,inst_25648,inst_25651,(2),null));
var inst_25653 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25647,inst_25652,null];
var inst_25654 = cljs.core.PersistentHashMap.fromArrays(inst_25646,inst_25653);
var inst_25655 = cljs.test.do_report.call(null,inst_25654);
var state_26026__$1 = state_26026;
var statearr_26114_26281 = state_26026__$1;
(statearr_26114_26281[(2)] = inst_25655);

(statearr_26114_26281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (45))){
var inst_25821 = (state_26026[(2)]);
var inst_25822 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25823 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25824 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25823,inst_25821,null];
var inst_25825 = cljs.core.PersistentHashMap.fromArrays(inst_25822,inst_25824);
var inst_25826 = cljs.test.do_report.call(null,inst_25825);
var state_26026__$1 = state_26026;
var statearr_26115_26282 = state_26026__$1;
(statearr_26115_26282[(2)] = inst_25826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (53))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(52),new cljs.core.Keyword(null,"default","default",-1987822328),null,(51));
var inst_25871 = klipse_clj.lang.clojure.the_eval.call(null,"(ns foo.core) ::aa");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(54),inst_25871);
} else {
if((state_val_26027 === (78))){
var inst_26001 = (state_26026[(23)]);
var inst_26021 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26116 = state_26026;
(statearr_26116[(45)] = inst_26021);

return statearr_26116;
})();
var statearr_26117_26283 = state_26026__$1;
(statearr_26117_26283[(2)] = inst_26001);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (26))){
var inst_25717 = (state_26026[(34)]);
var inst_25716 = (state_26026[(14)]);
var inst_25711 = (state_26026[(2)]);
var inst_25712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25713 = [new cljs.core.Keyword(null,"ok","ok",967785236),(3)];
var inst_25714 = (new cljs.core.PersistentVector(null,2,(5),inst_25712,inst_25713,null));
var inst_25715 = (new cljs.core.List(null,inst_25714,null,(1),null));
var inst_25716__$1 = (new cljs.core.List(null,inst_25711,inst_25715,(2),null));
var inst_25717__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_25716__$1);
var state_26026__$1 = (function (){var statearr_26118 = state_26026;
(statearr_26118[(34)] = inst_25717__$1);

(statearr_26118[(14)] = inst_25716__$1);

return statearr_26118;
})();
if(cljs.core.truth_(inst_25717__$1)){
var statearr_26119_26284 = state_26026__$1;
(statearr_26119_26284[(1)] = (27));

} else {
var statearr_26120_26285 = state_26026__$1;
(statearr_26120_26285[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (16))){
var inst_25699 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26121 = state_26026;
(statearr_26121[(46)] = inst_25699);

return statearr_26121;
})();
var statearr_26122_26286 = state_26026__$1;
(statearr_26122_26286[(2)] = null);

(statearr_26122_26286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (38))){
var inst_25780 = (state_26026[(2)]);
var inst_25781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25782 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25783 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25782,inst_25780,null];
var inst_25784 = cljs.core.PersistentHashMap.fromArrays(inst_25781,inst_25783);
var inst_25785 = cljs.test.do_report.call(null,inst_25784);
var state_26026__$1 = state_26026;
var statearr_26123_26287 = state_26026__$1;
(statearr_26123_26287[(2)] = inst_25785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (30))){
var inst_25779 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26124 = state_26026;
(statearr_26124[(47)] = inst_25779);

return statearr_26124;
})();
var statearr_26125_26288 = state_26026__$1;
(statearr_26125_26288[(2)] = null);

(statearr_26125_26288[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (73))){
var inst_25983 = (state_26026[(2)]);
var inst_25984 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25985 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.bb) (def a 1) `(1 a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),new cljs.core.Symbol("my.bb","a","my.bb/a",-33808037,null)))], null));
var inst_25986 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25985,inst_25983,null];
var inst_25987 = cljs.core.PersistentHashMap.fromArrays(inst_25984,inst_25986);
var inst_25988 = cljs.test.do_report.call(null,inst_25987);
var state_26026__$1 = state_26026;
var statearr_26126_26289 = state_26026__$1;
(statearr_26126_26289[(2)] = inst_25988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (10))){
var inst_25620 = (state_26026[(2)]);
var inst_25621 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25622 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns aa.cc) (def x 12)\n          (+ x 5)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null));
var inst_25623 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25622,inst_25620,null];
var inst_25624 = cljs.core.PersistentHashMap.fromArrays(inst_25621,inst_25623);
var inst_25625 = cljs.test.do_report.call(null,inst_25624);
var state_26026__$1 = state_26026;
var statearr_26127_26290 = state_26026__$1;
(statearr_26127_26290[(2)] = inst_25625);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_25669 = klipse_clj.lang.clojure.the_eval.call(null,"(+ 1 2)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(19),inst_25669);
} else {
if((state_val_26027 === (52))){
var inst_25862 = (state_26026[(2)]);
var inst_25863 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25864 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns foo.core) ::aa")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("foo.core","aa","foo.core/aa",-1917255961)], null));
var inst_25865 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25864,inst_25862,null];
var inst_25866 = cljs.core.PersistentHashMap.fromArrays(inst_25863,inst_25865);
var inst_25867 = cljs.test.do_report.call(null,inst_25866);
var state_26026__$1 = state_26026;
var statearr_26128_26291 = state_26026__$1;
(statearr_26128_26291[(2)] = inst_25867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (67))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26026,(66),new cljs.core.Keyword(null,"default","default",-1987822328),null,(65));
var inst_25951 = klipse_clj.lang.clojure.the_eval.call(null,"`(1 2)");
var state_26026__$1 = state_26026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26026__$1,(68),inst_25951);
} else {
if((state_val_26027 === (71))){
var inst_25960 = (state_26026[(42)]);
var inst_25980 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26129 = state_26026;
(statearr_26129[(48)] = inst_25980);

return statearr_26129;
})();
var statearr_26130_26292 = state_26026__$1;
(statearr_26130_26292[(2)] = inst_25960);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (42))){
var inst_25797 = (state_26026[(24)]);
var inst_25807 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25808 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(map inc [1 2 3])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null));
var inst_25809 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25810 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25811 = cljs.core.cons.call(null,inst_25810,inst_25797);
var inst_25812 = (new cljs.core.List(null,inst_25811,null,(1),null));
var inst_25813 = (new cljs.core.List(null,inst_25809,inst_25812,(2),null));
var inst_25814 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25808,inst_25813,null];
var inst_25815 = cljs.core.PersistentHashMap.fromArrays(inst_25807,inst_25814);
var inst_25816 = cljs.test.do_report.call(null,inst_25815);
var state_26026__$1 = state_26026;
var statearr_26131_26293 = state_26026__$1;
(statearr_26131_26293[(2)] = inst_25816);

(statearr_26131_26293[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (37))){
var inst_25820 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26132 = state_26026;
(statearr_26132[(49)] = inst_25820);

return statearr_26132;
})();
var statearr_26133_26294 = state_26026__$1;
(statearr_26133_26294[(2)] = null);

(statearr_26133_26294[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (63))){
var inst_25918 = (state_26026[(9)]);
var inst_25928 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25929 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.aa) (+ 1 2)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null));
var inst_25930 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25931 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25932 = cljs.core.cons.call(null,inst_25931,inst_25918);
var inst_25933 = (new cljs.core.List(null,inst_25932,null,(1),null));
var inst_25934 = (new cljs.core.List(null,inst_25930,inst_25933,(2),null));
var inst_25935 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25929,inst_25934,null];
var inst_25936 = cljs.core.PersistentHashMap.fromArrays(inst_25928,inst_25935);
var inst_25937 = cljs.test.do_report.call(null,inst_25936);
var state_26026__$1 = state_26026;
var statearr_26134_26295 = state_26026__$1;
(statearr_26134_26295[(2)] = inst_25937);

(statearr_26134_26295[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (8))){
var inst_25597 = (state_26026[(44)]);
var inst_25617 = (state_26026[(2)]);
var state_26026__$1 = (function (){var statearr_26135 = state_26026;
(statearr_26135[(50)] = inst_25617);

return statearr_26135;
})();
var statearr_26136_26296 = state_26026__$1;
(statearr_26136_26296[(2)] = inst_25597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26027 === (49))){
var inst_25838 = (state_26026[(20)]);
var inst_25848 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25849 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn append-cyclic[lst a] (concat (rest lst) [a]))\n          (-> (repeat 3 nil)\n              (append-cyclic  9)\n              (append-cyclic  10)\n              (append-cyclic  11)\n              (append-cyclic  12))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null));
var inst_25850 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25851 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_25852 = cljs.core.cons.call(null,inst_25851,inst_25838);
var inst_25853 = (new cljs.core.List(null,inst_25852,null,(1),null));
var inst_25854 = (new cljs.core.List(null,inst_25850,inst_25853,(2),null));
var inst_25855 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25849,inst_25854,null];
var inst_25856 = cljs.core.PersistentHashMap.fromArrays(inst_25848,inst_25855);
var inst_25857 = cljs.test.do_report.call(null,inst_25856);
var state_26026__$1 = state_26026;
var statearr_26137_26297 = state_26026__$1;
(statearr_26137_26297[(2)] = inst_25857);

(statearr_26137_26297[(1)] = (50));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_26138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26138[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_26138[(1)] = (1));

return statearr_26138;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26026){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e26139){if((e26139 instanceof Object)){
var ex__15543__auto__ = e26139;
var statearr_26140_26298 = state_26026;
(statearr_26140_26298[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26299 = state_26026;
state_26026 = G__26299;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26026){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_26141 = f__15635__auto__.call(null);
(statearr_26141[(6)] = c__15634__auto__);

return statearr_26141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25015","meta25015",523656880,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test25014.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test25014.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test25014";

klipse_clj.eval_test.t_klipse_clj$eval_test25014.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test25014");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test25014.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test25014 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test25014(meta25015){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test25014(meta25015));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test25014(null));
});

klipse_clj.eval_test.test_eval_2.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_2;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-2","klipse-clj.eval-test/test-eval-2",902753178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-2","test-eval-2",1863055047,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",21,1,70,70,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_2)?klipse_clj.eval_test.test_eval_2.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_macros = (function klipse_clj$eval_test$test_eval_macros(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_macros.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_macros.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test26300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test26300 = (function (meta26301){
this.meta26301 = meta26301;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26302,meta26301__$1){
var self__ = this;
var _26302__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26300(meta26301__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26302){
var self__ = this;
var _26302__$1 = this;
return self__.meta26301;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_26346){
var state_val_26347 = (state_26346[(1)]);
if((state_val_26347 === (1))){
var state_26346__$1 = state_26346;
var statearr_26348_26420 = state_26346__$1;
(statearr_26348_26420[(2)] = null);

(statearr_26348_26420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (2))){
var inst_26343 = (state_26346[(2)]);
var inst_26344 = done.call(null);
var state_26346__$1 = (function (){var statearr_26349 = state_26346;
(statearr_26349[(7)] = inst_26343);

return statearr_26349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26346__$1,inst_26344);
} else {
if((state_val_26347 === (3))){
var inst_26304 = (state_26346[(2)]);
var inst_26305 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26306 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26307 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26306,inst_26304,null];
var inst_26308 = cljs.core.PersistentHashMap.fromArrays(inst_26305,inst_26307);
var inst_26309 = cljs.test.do_report.call(null,inst_26308);
var state_26346__$1 = state_26346;
var statearr_26350_26421 = state_26346__$1;
(statearr_26350_26421[(2)] = inst_26309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26346,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26313 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)");
var state_26346__$1 = state_26346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26346__$1,(5),inst_26313);
} else {
if((state_val_26347 === (5))){
var inst_26320 = (state_26346[(8)]);
var inst_26321 = (state_26346[(9)]);
var inst_26315 = (state_26346[(2)]);
var inst_26316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26317 = [new cljs.core.Keyword(null,"ok","ok",967785236),(13)];
var inst_26318 = (new cljs.core.PersistentVector(null,2,(5),inst_26316,inst_26317,null));
var inst_26319 = (new cljs.core.List(null,inst_26318,null,(1),null));
var inst_26320__$1 = (new cljs.core.List(null,inst_26315,inst_26319,(2),null));
var inst_26321__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26320__$1);
var state_26346__$1 = (function (){var statearr_26351 = state_26346;
(statearr_26351[(8)] = inst_26320__$1);

(statearr_26351[(9)] = inst_26321__$1);

return statearr_26351;
})();
if(cljs.core.truth_(inst_26321__$1)){
var statearr_26352_26422 = state_26346__$1;
(statearr_26352_26422[(1)] = (6));

} else {
var statearr_26353_26423 = state_26346__$1;
(statearr_26353_26423[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (6))){
var inst_26320 = (state_26346[(8)]);
var inst_26323 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26324 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26325 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26320);
var inst_26326 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26324,inst_26325,null];
var inst_26327 = cljs.core.PersistentHashMap.fromArrays(inst_26323,inst_26326);
var inst_26328 = cljs.test.do_report.call(null,inst_26327);
var state_26346__$1 = state_26346;
var statearr_26354_26424 = state_26346__$1;
(statearr_26354_26424[(2)] = inst_26328);

(statearr_26354_26424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (7))){
var inst_26320 = (state_26346[(8)]);
var inst_26330 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26331 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26332 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26333 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26334 = cljs.core.cons.call(null,inst_26333,inst_26320);
var inst_26335 = (new cljs.core.List(null,inst_26334,null,(1),null));
var inst_26336 = (new cljs.core.List(null,inst_26332,inst_26335,(2),null));
var inst_26337 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26331,inst_26336,null];
var inst_26338 = cljs.core.PersistentHashMap.fromArrays(inst_26330,inst_26337);
var inst_26339 = cljs.test.do_report.call(null,inst_26338);
var state_26346__$1 = state_26346;
var statearr_26355_26425 = state_26346__$1;
(statearr_26355_26425[(2)] = inst_26339);

(statearr_26355_26425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26347 === (8))){
var inst_26321 = (state_26346[(9)]);
var inst_26341 = (state_26346[(2)]);
var state_26346__$1 = (function (){var statearr_26356 = state_26346;
(statearr_26356[(10)] = inst_26341);

return statearr_26356;
})();
var statearr_26357_26426 = state_26346__$1;
(statearr_26357_26426[(2)] = inst_26321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26346__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_26358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26358[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_26358[(1)] = (1));

return statearr_26358;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26346){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e26359){if((e26359 instanceof Object)){
var ex__15543__auto__ = e26359;
var statearr_26360_26427 = state_26346;
(statearr_26360_26427[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26428 = state_26346;
state_26346 = G__26428;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26346){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_26361 = f__15635__auto__.call(null);
(statearr_26361[(6)] = c__15634__auto__);

return statearr_26361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.apply = (function (self__,args26303){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26303)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_26404){
var state_val_26405 = (state_26404[(1)]);
if((state_val_26405 === (1))){
var state_26404__$1 = state_26404;
var statearr_26406_26429 = state_26404__$1;
(statearr_26406_26429[(2)] = null);

(statearr_26406_26429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (2))){
var inst_26401 = (state_26404[(2)]);
var inst_26402 = done.call(null);
var state_26404__$1 = (function (){var statearr_26407 = state_26404;
(statearr_26407[(7)] = inst_26401);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26404__$1,inst_26402);
} else {
if((state_val_26405 === (3))){
var inst_26362 = (state_26404[(2)]);
var inst_26363 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26364 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26365 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26364,inst_26362,null];
var inst_26366 = cljs.core.PersistentHashMap.fromArrays(inst_26363,inst_26365);
var inst_26367 = cljs.test.do_report.call(null,inst_26366);
var state_26404__$1 = state_26404;
var statearr_26408_26430 = state_26404__$1;
(statearr_26408_26430[(2)] = inst_26367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26404,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26371 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)");
var state_26404__$1 = state_26404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26404__$1,(5),inst_26371);
} else {
if((state_val_26405 === (5))){
var inst_26379 = (state_26404[(8)]);
var inst_26378 = (state_26404[(9)]);
var inst_26373 = (state_26404[(2)]);
var inst_26374 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26375 = [new cljs.core.Keyword(null,"ok","ok",967785236),(13)];
var inst_26376 = (new cljs.core.PersistentVector(null,2,(5),inst_26374,inst_26375,null));
var inst_26377 = (new cljs.core.List(null,inst_26376,null,(1),null));
var inst_26378__$1 = (new cljs.core.List(null,inst_26373,inst_26377,(2),null));
var inst_26379__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26378__$1);
var state_26404__$1 = (function (){var statearr_26409 = state_26404;
(statearr_26409[(8)] = inst_26379__$1);

(statearr_26409[(9)] = inst_26378__$1);

return statearr_26409;
})();
if(cljs.core.truth_(inst_26379__$1)){
var statearr_26410_26431 = state_26404__$1;
(statearr_26410_26431[(1)] = (6));

} else {
var statearr_26411_26432 = state_26404__$1;
(statearr_26411_26432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (6))){
var inst_26378 = (state_26404[(9)]);
var inst_26381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26382 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26383 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26378);
var inst_26384 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26382,inst_26383,null];
var inst_26385 = cljs.core.PersistentHashMap.fromArrays(inst_26381,inst_26384);
var inst_26386 = cljs.test.do_report.call(null,inst_26385);
var state_26404__$1 = state_26404;
var statearr_26412_26433 = state_26404__$1;
(statearr_26412_26433[(2)] = inst_26386);

(statearr_26412_26433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (7))){
var inst_26378 = (state_26404[(9)]);
var inst_26388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26389 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.hello$macros)\n            (defmacro hello\n            [x]\n            `(inc ~x))\n            (my.hello/hello 12)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(13)], null));
var inst_26390 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26391 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26392 = cljs.core.cons.call(null,inst_26391,inst_26378);
var inst_26393 = (new cljs.core.List(null,inst_26392,null,(1),null));
var inst_26394 = (new cljs.core.List(null,inst_26390,inst_26393,(2),null));
var inst_26395 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26389,inst_26394,null];
var inst_26396 = cljs.core.PersistentHashMap.fromArrays(inst_26388,inst_26395);
var inst_26397 = cljs.test.do_report.call(null,inst_26396);
var state_26404__$1 = state_26404;
var statearr_26413_26434 = state_26404__$1;
(statearr_26413_26434[(2)] = inst_26397);

(statearr_26413_26434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26405 === (8))){
var inst_26379 = (state_26404[(8)]);
var inst_26399 = (state_26404[(2)]);
var state_26404__$1 = (function (){var statearr_26414 = state_26404;
(statearr_26414[(10)] = inst_26399);

return statearr_26414;
})();
var statearr_26415_26435 = state_26404__$1;
(statearr_26415_26435[(2)] = inst_26379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_26416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26416[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_26416[(1)] = (1));

return statearr_26416;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26404){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e26417){if((e26417 instanceof Object)){
var ex__15543__auto__ = e26417;
var statearr_26418_26436 = state_26404;
(statearr_26418_26436[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26437 = state_26404;
state_26404 = G__26437;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26404){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_26419 = f__15635__auto__.call(null);
(statearr_26419[(6)] = c__15634__auto__);

return statearr_26419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26301","meta26301",1986038161,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test26300.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test26300.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test26300";

klipse_clj.eval_test.t_klipse_clj$eval_test26300.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test26300");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test26300.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test26300 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test26300(meta26301){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26300(meta26301));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test26300(null));
});

klipse_clj.eval_test.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_macros;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-macros","klipse-clj.eval-test/test-eval-macros",-1393041204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",26,1,96,96,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_macros)?klipse_clj.eval_test.test_eval_macros.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_3 = (function klipse_clj$eval_test$test_eval_3(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_3.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_3.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test26438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test26438 = (function (meta26439){
this.meta26439 = meta26439;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26440,meta26439__$1){
var self__ = this;
var _26440__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26438(meta26439__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26440){
var self__ = this;
var _26440__$1 = this;
return self__.meta26439;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_26484){
var state_val_26485 = (state_26484[(1)]);
if((state_val_26485 === (1))){
var state_26484__$1 = state_26484;
var statearr_26486_26558 = state_26484__$1;
(statearr_26486_26558[(2)] = null);

(statearr_26486_26558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26485 === (2))){
var inst_26481 = (state_26484[(2)]);
var inst_26482 = done.call(null);
var state_26484__$1 = (function (){var statearr_26487 = state_26484;
(statearr_26487[(7)] = inst_26481);

return statearr_26487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26484__$1,inst_26482);
} else {
if((state_val_26485 === (3))){
var inst_26442 = (state_26484[(2)]);
var inst_26443 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26444 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26445 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26444,inst_26442,null];
var inst_26446 = cljs.core.PersistentHashMap.fromArrays(inst_26443,inst_26445);
var inst_26447 = cljs.test.do_report.call(null,inst_26446);
var state_26484__$1 = state_26484;
var statearr_26488_26559 = state_26484__$1;
(statearr_26488_26559[(2)] = inst_26447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26484__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26485 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26484,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26451 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")");
var state_26484__$1 = state_26484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26484__$1,(5),inst_26451);
} else {
if((state_val_26485 === (5))){
var inst_26458 = (state_26484[(8)]);
var inst_26459 = (state_26484[(9)]);
var inst_26453 = (state_26484[(2)]);
var inst_26454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26455 = [new cljs.core.Keyword(null,"ok","ok",967785236),false];
var inst_26456 = (new cljs.core.PersistentVector(null,2,(5),inst_26454,inst_26455,null));
var inst_26457 = (new cljs.core.List(null,inst_26456,null,(1),null));
var inst_26458__$1 = (new cljs.core.List(null,inst_26453,inst_26457,(2),null));
var inst_26459__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26458__$1);
var state_26484__$1 = (function (){var statearr_26489 = state_26484;
(statearr_26489[(8)] = inst_26458__$1);

(statearr_26489[(9)] = inst_26459__$1);

return statearr_26489;
})();
if(cljs.core.truth_(inst_26459__$1)){
var statearr_26490_26560 = state_26484__$1;
(statearr_26490_26560[(1)] = (6));

} else {
var statearr_26491_26561 = state_26484__$1;
(statearr_26491_26561[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26485 === (6))){
var inst_26458 = (state_26484[(8)]);
var inst_26461 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26462 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26463 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26458);
var inst_26464 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26462,inst_26463,null];
var inst_26465 = cljs.core.PersistentHashMap.fromArrays(inst_26461,inst_26464);
var inst_26466 = cljs.test.do_report.call(null,inst_26465);
var state_26484__$1 = state_26484;
var statearr_26492_26562 = state_26484__$1;
(statearr_26492_26562[(2)] = inst_26466);

(statearr_26492_26562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26485 === (7))){
var inst_26458 = (state_26484[(8)]);
var inst_26468 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26469 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26470 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26471 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26472 = cljs.core.cons.call(null,inst_26471,inst_26458);
var inst_26473 = (new cljs.core.List(null,inst_26472,null,(1),null));
var inst_26474 = (new cljs.core.List(null,inst_26470,inst_26473,(2),null));
var inst_26475 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26469,inst_26474,null];
var inst_26476 = cljs.core.PersistentHashMap.fromArrays(inst_26468,inst_26475);
var inst_26477 = cljs.test.do_report.call(null,inst_26476);
var state_26484__$1 = state_26484;
var statearr_26493_26563 = state_26484__$1;
(statearr_26493_26563[(2)] = inst_26477);

(statearr_26493_26563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26485 === (8))){
var inst_26459 = (state_26484[(9)]);
var inst_26479 = (state_26484[(2)]);
var state_26484__$1 = (function (){var statearr_26494 = state_26484;
(statearr_26494[(10)] = inst_26479);

return statearr_26494;
})();
var statearr_26495_26564 = state_26484__$1;
(statearr_26495_26564[(2)] = inst_26459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26484__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_26496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26496[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_26496[(1)] = (1));

return statearr_26496;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26484){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e26497){if((e26497 instanceof Object)){
var ex__15543__auto__ = e26497;
var statearr_26498_26565 = state_26484;
(statearr_26498_26565[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26566 = state_26484;
state_26484 = G__26566;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26484){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_26499 = f__15635__auto__.call(null);
(statearr_26499[(6)] = c__15634__auto__);

return statearr_26499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.apply = (function (self__,args26441){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26441)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_26542){
var state_val_26543 = (state_26542[(1)]);
if((state_val_26543 === (1))){
var state_26542__$1 = state_26542;
var statearr_26544_26567 = state_26542__$1;
(statearr_26544_26567[(2)] = null);

(statearr_26544_26567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (2))){
var inst_26539 = (state_26542[(2)]);
var inst_26540 = done.call(null);
var state_26542__$1 = (function (){var statearr_26545 = state_26542;
(statearr_26545[(7)] = inst_26539);

return statearr_26545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26542__$1,inst_26540);
} else {
if((state_val_26543 === (3))){
var inst_26500 = (state_26542[(2)]);
var inst_26501 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26502 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26503 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26502,inst_26500,null];
var inst_26504 = cljs.core.PersistentHashMap.fromArrays(inst_26501,inst_26503);
var inst_26505 = cljs.test.do_report.call(null,inst_26504);
var state_26542__$1 = state_26542;
var statearr_26546_26568 = state_26542__$1;
(statearr_26546_26568[(2)] = inst_26505);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26542,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26509 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")");
var state_26542__$1 = state_26542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26542__$1,(5),inst_26509);
} else {
if((state_val_26543 === (5))){
var inst_26517 = (state_26542[(8)]);
var inst_26516 = (state_26542[(9)]);
var inst_26511 = (state_26542[(2)]);
var inst_26512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26513 = [new cljs.core.Keyword(null,"ok","ok",967785236),false];
var inst_26514 = (new cljs.core.PersistentVector(null,2,(5),inst_26512,inst_26513,null));
var inst_26515 = (new cljs.core.List(null,inst_26514,null,(1),null));
var inst_26516__$1 = (new cljs.core.List(null,inst_26511,inst_26515,(2),null));
var inst_26517__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26516__$1);
var state_26542__$1 = (function (){var statearr_26547 = state_26542;
(statearr_26547[(8)] = inst_26517__$1);

(statearr_26547[(9)] = inst_26516__$1);

return statearr_26547;
})();
if(cljs.core.truth_(inst_26517__$1)){
var statearr_26548_26569 = state_26542__$1;
(statearr_26548_26569[(1)] = (6));

} else {
var statearr_26549_26570 = state_26542__$1;
(statearr_26549_26570[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (6))){
var inst_26516 = (state_26542[(9)]);
var inst_26519 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26520 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26521 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26516);
var inst_26522 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26520,inst_26521,null];
var inst_26523 = cljs.core.PersistentHashMap.fromArrays(inst_26519,inst_26522);
var inst_26524 = cljs.test.do_report.call(null,inst_26523);
var state_26542__$1 = state_26542;
var statearr_26550_26571 = state_26542__$1;
(statearr_26550_26571[(2)] = inst_26524);

(statearr_26550_26571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (7))){
var inst_26516 = (state_26542[(9)]);
var inst_26526 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26527 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my-ns.core (:require [clojure.string :as string])) (string/blank? \"HELLO!!\")")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),false], null));
var inst_26528 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26529 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26530 = cljs.core.cons.call(null,inst_26529,inst_26516);
var inst_26531 = (new cljs.core.List(null,inst_26530,null,(1),null));
var inst_26532 = (new cljs.core.List(null,inst_26528,inst_26531,(2),null));
var inst_26533 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26527,inst_26532,null];
var inst_26534 = cljs.core.PersistentHashMap.fromArrays(inst_26526,inst_26533);
var inst_26535 = cljs.test.do_report.call(null,inst_26534);
var state_26542__$1 = state_26542;
var statearr_26551_26572 = state_26542__$1;
(statearr_26551_26572[(2)] = inst_26535);

(statearr_26551_26572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26543 === (8))){
var inst_26517 = (state_26542[(8)]);
var inst_26537 = (state_26542[(2)]);
var state_26542__$1 = (function (){var statearr_26552 = state_26542;
(statearr_26552[(10)] = inst_26537);

return statearr_26552;
})();
var statearr_26553_26573 = state_26542__$1;
(statearr_26553_26573[(2)] = inst_26517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_26554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26554[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_26554[(1)] = (1));

return statearr_26554;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26542){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e26555){if((e26555 instanceof Object)){
var ex__15543__auto__ = e26555;
var statearr_26556_26574 = state_26542;
(statearr_26556_26574[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26575 = state_26542;
state_26542 = G__26575;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26542){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_26557 = f__15635__auto__.call(null);
(statearr_26557[(6)] = c__15634__auto__);

return statearr_26557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26439","meta26439",260728260,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test26438.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test26438.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test26438";

klipse_clj.eval_test.t_klipse_clj$eval_test26438.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test26438");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test26438.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test26438 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test26438(meta26439){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26438(meta26439));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test26438(null));
});

klipse_clj.eval_test.test_eval_3.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_3;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-3","klipse-clj.eval-test/test-eval-3",-1148599017,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-3","test-eval-3",-498280376,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",21,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_3)?klipse_clj.eval_test.test_eval_3.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_spec_alpha = (function klipse_clj$eval_test$test_eval_spec_alpha(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_spec_alpha.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_spec_alpha.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test26576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test26576 = (function (meta26577){
this.meta26577 = meta26577;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26578,meta26577__$1){
var self__ = this;
var _26578__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26576(meta26577__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26578){
var self__ = this;
var _26578__$1 = this;
return self__.meta26577;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_26952){
var state_val_26953 = (state_26952[(1)]);
if((state_val_26953 === (62))){
var inst_26926 = (state_26952[(7)]);
var inst_26929 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26930 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_26931 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26926);
var inst_26932 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26930,inst_26931,null];
var inst_26933 = cljs.core.PersistentHashMap.fromArrays(inst_26929,inst_26932);
var inst_26934 = cljs.test.do_report.call(null,inst_26933);
var state_26952__$1 = state_26952;
var statearr_26954_27516 = state_26952__$1;
(statearr_26954_27516[(2)] = inst_26934);

(statearr_26954_27516[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (7))){
var inst_26596 = (state_26952[(8)]);
var inst_26606 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26607 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26608 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26609 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26610 = cljs.core.cons.call(null,inst_26609,inst_26596);
var inst_26611 = (new cljs.core.List(null,inst_26610,null,(1),null));
var inst_26612 = (new cljs.core.List(null,inst_26608,inst_26611,(2),null));
var inst_26613 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26607,inst_26612,null];
var inst_26614 = cljs.core.PersistentHashMap.fromArrays(inst_26606,inst_26613);
var inst_26615 = cljs.test.do_report.call(null,inst_26614);
var state_26952__$1 = state_26952;
var statearr_26955_27517 = state_26952__$1;
(statearr_26955_27517[(2)] = inst_26615);

(statearr_26955_27517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (59))){
var inst_26910 = (state_26952[(2)]);
var inst_26911 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26912 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_26913 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26912,inst_26910,null];
var inst_26914 = cljs.core.PersistentHashMap.fromArrays(inst_26911,inst_26913);
var inst_26915 = cljs.test.do_report.call(null,inst_26914);
var state_26952__$1 = state_26952;
var statearr_26956_27518 = state_26952__$1;
(statearr_26956_27518[(2)] = inst_26915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (20))){
var inst_26676 = (state_26952[(9)]);
var inst_26679 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26680 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26681 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26676);
var inst_26682 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26680,inst_26681,null];
var inst_26683 = cljs.core.PersistentHashMap.fromArrays(inst_26679,inst_26682);
var inst_26684 = cljs.test.do_report.call(null,inst_26683);
var state_26952__$1 = state_26952;
var statearr_26957_27519 = state_26952__$1;
(statearr_26957_27519[(2)] = inst_26684);

(statearr_26957_27519[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (58))){
var inst_26949 = (state_26952[(2)]);
var inst_26950 = done.call(null);
var state_26952__$1 = (function (){var statearr_26958 = state_26952;
(statearr_26958[(10)] = inst_26949);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26952__$1,inst_26950);
} else {
if((state_val_26953 === (60))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(59),new cljs.core.Keyword(null,"default","default",-1987822328),null,(58));
var inst_26919 = klipse_clj.lang.clojure.the_eval.call(null,"(foo :a)");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(61),inst_26919);
} else {
if((state_val_26953 === (27))){
var inst_26717 = (state_26952[(11)]);
var inst_26720 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26721 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_26722 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26717);
var inst_26723 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26721,inst_26722,null];
var inst_26724 = cljs.core.PersistentHashMap.fromArrays(inst_26720,inst_26723);
var inst_26725 = cljs.test.do_report.call(null,inst_26724);
var state_26952__$1 = state_26952;
var statearr_26959_27520 = state_26952__$1;
(statearr_26959_27520[(2)] = inst_26725);

(statearr_26959_27520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (1))){
var state_26952__$1 = state_26952;
var statearr_26960_27521 = state_26952__$1;
(statearr_26960_27521[(2)] = null);

(statearr_26960_27521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (24))){
var inst_26700 = (state_26952[(2)]);
var inst_26701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26702 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_26703 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26702,inst_26700,null];
var inst_26704 = cljs.core.PersistentHashMap.fromArrays(inst_26701,inst_26703);
var inst_26705 = cljs.test.do_report.call(null,inst_26704);
var state_26952__$1 = state_26952;
var statearr_26961_27522 = state_26952__$1;
(statearr_26961_27522[(2)] = inst_26705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (55))){
var inst_26886 = (state_26952[(12)]);
var inst_26889 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26890 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26891 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26886);
var inst_26892 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26890,inst_26891,null];
var inst_26893 = cljs.core.PersistentHashMap.fromArrays(inst_26889,inst_26892);
var inst_26894 = cljs.test.do_report.call(null,inst_26893);
var state_26952__$1 = state_26952;
var statearr_26962_27523 = state_26952__$1;
(statearr_26962_27523[(2)] = inst_26894);

(statearr_26962_27523[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_26791 = klipse_clj.lang.clojure.the_eval.call(null,"(stest/instrument `foo)");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(40),inst_26791);
} else {
if((state_val_26953 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_26835 = klipse_clj.lang.clojure.the_eval.call(null,"(foo 1)");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(47),inst_26835);
} else {
if((state_val_26953 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26589 = klipse_clj.lang.clojure.the_eval.call(null,"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(5),inst_26589);
} else {
if((state_val_26953 === (54))){
var inst_26887 = (state_26952[(13)]);
var inst_26886 = (state_26952[(12)]);
var inst_26877 = (state_26952[(2)]);
var inst_26878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26880 = new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null);
var inst_26881 = [inst_26880];
var inst_26882 = (new cljs.core.PersistentVector(null,1,(5),inst_26879,inst_26881,null));
var inst_26883 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_26882];
var inst_26884 = (new cljs.core.PersistentVector(null,2,(5),inst_26878,inst_26883,null));
var inst_26885 = (new cljs.core.List(null,inst_26884,null,(1),null));
var inst_26886__$1 = (new cljs.core.List(null,inst_26877,inst_26885,(2),null));
var inst_26887__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26886__$1);
var state_26952__$1 = (function (){var statearr_26963 = state_26952;
(statearr_26963[(13)] = inst_26887__$1);

(statearr_26963[(12)] = inst_26886__$1);

return statearr_26963;
})();
if(cljs.core.truth_(inst_26887__$1)){
var statearr_26964_27524 = state_26952__$1;
(statearr_26964_27524[(1)] = (55));

} else {
var statearr_26965_27525 = state_26952__$1;
(statearr_26965_27525[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (15))){
var inst_26637 = (state_26952[(14)]);
var inst_26657 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26966 = state_26952;
(statearr_26966[(15)] = inst_26657);

return statearr_26966;
})();
var statearr_26967_27526 = state_26952__$1;
(statearr_26967_27526[(2)] = inst_26637);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (48))){
var inst_26842 = (state_26952[(16)]);
var inst_26845 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26846 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_26847 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26842);
var inst_26848 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26846,inst_26847,null];
var inst_26849 = cljs.core.PersistentHashMap.fromArrays(inst_26845,inst_26848);
var inst_26850 = cljs.test.do_report.call(null,inst_26849);
var state_26952__$1 = state_26952;
var statearr_26968_27527 = state_26952__$1;
(statearr_26968_27527[(2)] = inst_26850);

(statearr_26968_27527[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (50))){
var inst_26843 = (state_26952[(17)]);
var inst_26863 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26969 = state_26952;
(statearr_26969[(18)] = inst_26863);

return statearr_26969;
})();
var statearr_26970_27528 = state_26952__$1;
(statearr_26970_27528[(2)] = inst_26843);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (21))){
var inst_26676 = (state_26952[(9)]);
var inst_26686 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26687 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26688 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26689 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26690 = cljs.core.cons.call(null,inst_26689,inst_26676);
var inst_26691 = (new cljs.core.List(null,inst_26690,null,(1),null));
var inst_26692 = (new cljs.core.List(null,inst_26688,inst_26691,(2),null));
var inst_26693 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26687,inst_26692,null];
var inst_26694 = cljs.core.PersistentHashMap.fromArrays(inst_26686,inst_26693);
var inst_26695 = cljs.test.do_report.call(null,inst_26694);
var state_26952__$1 = state_26952;
var statearr_26971_27529 = state_26952__$1;
(statearr_26971_27529[(2)] = inst_26695);

(statearr_26971_27529[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (31))){
var inst_26741 = (state_26952[(2)]);
var inst_26742 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26743 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_26744 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26743,inst_26741,null];
var inst_26745 = cljs.core.PersistentHashMap.fromArrays(inst_26742,inst_26744);
var inst_26746 = cljs.test.do_report.call(null,inst_26745);
var state_26952__$1 = state_26952;
var statearr_26972_27530 = state_26952__$1;
(statearr_26972_27530[(2)] = inst_26746);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_26750 = klipse_clj.lang.clojure.the_eval.call(null,"(s/describe (:args (s/get-spec `foo)))");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(33),inst_26750);
} else {
if((state_val_26953 === (40))){
var inst_26802 = (state_26952[(19)]);
var inst_26803 = (state_26952[(20)]);
var inst_26793 = (state_26952[(2)]);
var inst_26794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26796 = new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null);
var inst_26797 = [inst_26796];
var inst_26798 = (new cljs.core.PersistentVector(null,1,(5),inst_26795,inst_26797,null));
var inst_26799 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_26798];
var inst_26800 = (new cljs.core.PersistentVector(null,2,(5),inst_26794,inst_26799,null));
var inst_26801 = (new cljs.core.List(null,inst_26800,null,(1),null));
var inst_26802__$1 = (new cljs.core.List(null,inst_26793,inst_26801,(2),null));
var inst_26803__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26802__$1);
var state_26952__$1 = (function (){var statearr_26973 = state_26952;
(statearr_26973[(19)] = inst_26802__$1);

(statearr_26973[(20)] = inst_26803__$1);

return statearr_26973;
})();
if(cljs.core.truth_(inst_26803__$1)){
var statearr_26974_27531 = state_26952__$1;
(statearr_26974_27531[(1)] = (41));

} else {
var statearr_26975_27532 = state_26952__$1;
(statearr_26975_27532[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (56))){
var inst_26886 = (state_26952[(12)]);
var inst_26896 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26897 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26898 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26899 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26900 = cljs.core.cons.call(null,inst_26899,inst_26886);
var inst_26901 = (new cljs.core.List(null,inst_26900,null,(1),null));
var inst_26902 = (new cljs.core.List(null,inst_26898,inst_26901,(2),null));
var inst_26903 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26897,inst_26902,null];
var inst_26904 = cljs.core.PersistentHashMap.fromArrays(inst_26896,inst_26903);
var inst_26905 = cljs.test.do_report.call(null,inst_26904);
var state_26952__$1 = state_26952;
var statearr_26976_27533 = state_26952__$1;
(statearr_26976_27533[(2)] = inst_26905);

(statearr_26976_27533[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (33))){
var inst_26759 = (state_26952[(21)]);
var inst_26758 = (state_26952[(22)]);
var inst_26752 = (state_26952[(2)]);
var inst_26753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26754 = cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295));
var inst_26755 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_26754];
var inst_26756 = (new cljs.core.PersistentVector(null,2,(5),inst_26753,inst_26755,null));
var inst_26757 = (new cljs.core.List(null,inst_26756,null,(1),null));
var inst_26758__$1 = (new cljs.core.List(null,inst_26752,inst_26757,(2),null));
var inst_26759__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26758__$1);
var state_26952__$1 = (function (){var statearr_26977 = state_26952;
(statearr_26977[(21)] = inst_26759__$1);

(statearr_26977[(22)] = inst_26758__$1);

return statearr_26977;
})();
if(cljs.core.truth_(inst_26759__$1)){
var statearr_26978_27534 = state_26952__$1;
(statearr_26978_27534[(1)] = (34));

} else {
var statearr_26979_27535 = state_26952__$1;
(statearr_26979_27535[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (13))){
var inst_26636 = (state_26952[(23)]);
var inst_26639 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26640 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_26641 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26636);
var inst_26642 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26640,inst_26641,null];
var inst_26643 = cljs.core.PersistentHashMap.fromArrays(inst_26639,inst_26642);
var inst_26644 = cljs.test.do_report.call(null,inst_26643);
var state_26952__$1 = state_26952;
var statearr_26980_27536 = state_26952__$1;
(statearr_26980_27536[(2)] = inst_26644);

(statearr_26980_27536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (22))){
var inst_26677 = (state_26952[(24)]);
var inst_26697 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26981 = state_26952;
(statearr_26981[(25)] = inst_26697);

return statearr_26981;
})();
var statearr_26982_27537 = state_26952__$1;
(statearr_26982_27537[(2)] = inst_26677);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (36))){
var inst_26759 = (state_26952[(21)]);
var inst_26779 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26983 = state_26952;
(statearr_26983[(26)] = inst_26779);

return statearr_26983;
})();
var statearr_26984_27538 = state_26952__$1;
(statearr_26984_27538[(2)] = inst_26759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (41))){
var inst_26802 = (state_26952[(19)]);
var inst_26805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26806 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26807 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26802);
var inst_26808 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26806,inst_26807,null];
var inst_26809 = cljs.core.PersistentHashMap.fromArrays(inst_26805,inst_26808);
var inst_26810 = cljs.test.do_report.call(null,inst_26809);
var state_26952__$1 = state_26952;
var statearr_26985_27539 = state_26952__$1;
(statearr_26985_27539[(2)] = inst_26810);

(statearr_26985_27539[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (43))){
var inst_26803 = (state_26952[(20)]);
var inst_26823 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26986 = state_26952;
(statearr_26986[(27)] = inst_26823);

return statearr_26986;
})();
var statearr_26987_27540 = state_26952__$1;
(statearr_26987_27540[(2)] = inst_26803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (61))){
var inst_26926 = (state_26952[(7)]);
var inst_26927 = (state_26952[(28)]);
var inst_26921 = (state_26952[(2)]);
var inst_26922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26923 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_26924 = (new cljs.core.PersistentVector(null,2,(5),inst_26922,inst_26923,null));
var inst_26925 = (new cljs.core.List(null,inst_26924,null,(1),null));
var inst_26926__$1 = (new cljs.core.List(null,inst_26921,inst_26925,(2),null));
var inst_26927__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26926__$1);
var state_26952__$1 = (function (){var statearr_26988 = state_26952;
(statearr_26988[(7)] = inst_26926__$1);

(statearr_26988[(28)] = inst_26927__$1);

return statearr_26988;
})();
if(cljs.core.truth_(inst_26927__$1)){
var statearr_26989_27541 = state_26952__$1;
(statearr_26989_27541[(1)] = (62));

} else {
var statearr_26990_27542 = state_26952__$1;
(statearr_26990_27542[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (29))){
var inst_26718 = (state_26952[(29)]);
var inst_26738 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26991 = state_26952;
(statearr_26991[(30)] = inst_26738);

return statearr_26991;
})();
var statearr_26992_27543 = state_26952__$1;
(statearr_26992_27543[(2)] = inst_26718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (44))){
var inst_26865 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26993 = state_26952;
(statearr_26993[(31)] = inst_26865);

return statearr_26993;
})();
var statearr_26994_27544 = state_26952__$1;
(statearr_26994_27544[(2)] = null);

(statearr_26994_27544[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (6))){
var inst_26596 = (state_26952[(8)]);
var inst_26599 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26600 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26601 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26596);
var inst_26602 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26600,inst_26601,null];
var inst_26603 = cljs.core.PersistentHashMap.fromArrays(inst_26599,inst_26602);
var inst_26604 = cljs.test.do_report.call(null,inst_26603);
var state_26952__$1 = state_26952;
var statearr_26995_27545 = state_26952__$1;
(statearr_26995_27545[(2)] = inst_26604);

(statearr_26995_27545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (28))){
var inst_26717 = (state_26952[(11)]);
var inst_26727 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26728 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_26729 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26730 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26731 = cljs.core.cons.call(null,inst_26730,inst_26717);
var inst_26732 = (new cljs.core.List(null,inst_26731,null,(1),null));
var inst_26733 = (new cljs.core.List(null,inst_26729,inst_26732,(2),null));
var inst_26734 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26728,inst_26733,null];
var inst_26735 = cljs.core.PersistentHashMap.fromArrays(inst_26727,inst_26734);
var inst_26736 = cljs.test.do_report.call(null,inst_26735);
var state_26952__$1 = state_26952;
var statearr_26996_27546 = state_26952__$1;
(statearr_26996_27546[(2)] = inst_26736);

(statearr_26996_27546[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (64))){
var inst_26927 = (state_26952[(28)]);
var inst_26947 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26997 = state_26952;
(statearr_26997[(32)] = inst_26947);

return statearr_26997;
})();
var statearr_26998_27547 = state_26952__$1;
(statearr_26998_27547[(2)] = inst_26927);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (51))){
var inst_26909 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26999 = state_26952;
(statearr_26999[(33)] = inst_26909);

return statearr_26999;
})();
var statearr_27000_27548 = state_26952__$1;
(statearr_27000_27548[(2)] = null);

(statearr_27000_27548[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_26709 = klipse_clj.lang.clojure.the_eval.call(null,"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(26),inst_26709);
} else {
if((state_val_26953 === (34))){
var inst_26758 = (state_26952[(22)]);
var inst_26761 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26762 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_26763 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_26758);
var inst_26764 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26762,inst_26763,null];
var inst_26765 = cljs.core.PersistentHashMap.fromArrays(inst_26761,inst_26764);
var inst_26766 = cljs.test.do_report.call(null,inst_26765);
var state_26952__$1 = state_26952;
var statearr_27001_27549 = state_26952__$1;
(statearr_27001_27549[(2)] = inst_26766);

(statearr_27001_27549[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (17))){
var inst_26660 = (state_26952[(2)]);
var inst_26661 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26662 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26663 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26662,inst_26660,null];
var inst_26664 = cljs.core.PersistentHashMap.fromArrays(inst_26661,inst_26663);
var inst_26665 = cljs.test.do_report.call(null,inst_26664);
var state_26952__$1 = state_26952;
var statearr_27002_27550 = state_26952__$1;
(statearr_27002_27550[(2)] = inst_26665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (3))){
var inst_26580 = (state_26952[(2)]);
var inst_26581 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26582 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_26583 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26582,inst_26580,null];
var inst_26584 = cljs.core.PersistentHashMap.fromArrays(inst_26581,inst_26583);
var inst_26585 = cljs.test.do_report.call(null,inst_26584);
var state_26952__$1 = state_26952;
var statearr_27003_27551 = state_26952__$1;
(statearr_27003_27551[(2)] = inst_26585);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (12))){
var inst_26637 = (state_26952[(14)]);
var inst_26636 = (state_26952[(23)]);
var inst_26631 = (state_26952[(2)]);
var inst_26632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26633 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)];
var inst_26634 = (new cljs.core.PersistentVector(null,2,(5),inst_26632,inst_26633,null));
var inst_26635 = (new cljs.core.List(null,inst_26634,null,(1),null));
var inst_26636__$1 = (new cljs.core.List(null,inst_26631,inst_26635,(2),null));
var inst_26637__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26636__$1);
var state_26952__$1 = (function (){var statearr_27004 = state_26952;
(statearr_27004[(14)] = inst_26637__$1);

(statearr_27004[(23)] = inst_26636__$1);

return statearr_27004;
})();
if(cljs.core.truth_(inst_26637__$1)){
var statearr_27005_27552 = state_26952__$1;
(statearr_27005_27552[(1)] = (13));

} else {
var statearr_27006_27553 = state_26952__$1;
(statearr_27006_27553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (2))){
var inst_26619 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27007 = state_26952;
(statearr_27007[(34)] = inst_26619);

return statearr_27007;
})();
var statearr_27008_27554 = state_26952__$1;
(statearr_27008_27554[(2)] = null);

(statearr_27008_27554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (23))){
var inst_26740 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27009 = state_26952;
(statearr_27009[(35)] = inst_26740);

return statearr_27009;
})();
var statearr_27010_27555 = state_26952__$1;
(statearr_27010_27555[(2)] = null);

(statearr_27010_27555[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (47))){
var inst_26843 = (state_26952[(17)]);
var inst_26842 = (state_26952[(16)]);
var inst_26837 = (state_26952[(2)]);
var inst_26838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26839 = [new cljs.core.Keyword(null,"ok","ok",967785236),(1)];
var inst_26840 = (new cljs.core.PersistentVector(null,2,(5),inst_26838,inst_26839,null));
var inst_26841 = (new cljs.core.List(null,inst_26840,null,(1),null));
var inst_26842__$1 = (new cljs.core.List(null,inst_26837,inst_26841,(2),null));
var inst_26843__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26842__$1);
var state_26952__$1 = (function (){var statearr_27011 = state_26952;
(statearr_27011[(17)] = inst_26843__$1);

(statearr_27011[(16)] = inst_26842__$1);

return statearr_27011;
})();
if(cljs.core.truth_(inst_26843__$1)){
var statearr_27012_27556 = state_26952__$1;
(statearr_27012_27556[(1)] = (48));

} else {
var statearr_27013_27557 = state_26952__$1;
(statearr_27013_27557[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (35))){
var inst_26758 = (state_26952[(22)]);
var inst_26768 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26769 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_26770 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26771 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26772 = cljs.core.cons.call(null,inst_26771,inst_26758);
var inst_26773 = (new cljs.core.List(null,inst_26772,null,(1),null));
var inst_26774 = (new cljs.core.List(null,inst_26770,inst_26773,(2),null));
var inst_26775 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26769,inst_26774,null];
var inst_26776 = cljs.core.PersistentHashMap.fromArrays(inst_26768,inst_26775);
var inst_26777 = cljs.test.do_report.call(null,inst_26776);
var state_26952__$1 = state_26952;
var statearr_27014_27558 = state_26952__$1;
(statearr_27014_27558[(2)] = inst_26777);

(statearr_27014_27558[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (19))){
var inst_26677 = (state_26952[(24)]);
var inst_26676 = (state_26952[(9)]);
var inst_26671 = (state_26952[(2)]);
var inst_26672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26673 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_26674 = (new cljs.core.PersistentVector(null,2,(5),inst_26672,inst_26673,null));
var inst_26675 = (new cljs.core.List(null,inst_26674,null,(1),null));
var inst_26676__$1 = (new cljs.core.List(null,inst_26671,inst_26675,(2),null));
var inst_26677__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26676__$1);
var state_26952__$1 = (function (){var statearr_27015 = state_26952;
(statearr_27015[(24)] = inst_26677__$1);

(statearr_27015[(9)] = inst_26676__$1);

return statearr_27015;
})();
if(cljs.core.truth_(inst_26677__$1)){
var statearr_27016_27559 = state_26952__$1;
(statearr_27016_27559[(1)] = (20));

} else {
var statearr_27017_27560 = state_26952__$1;
(statearr_27017_27560[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (57))){
var inst_26887 = (state_26952[(13)]);
var inst_26907 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27018 = state_26952;
(statearr_27018[(36)] = inst_26907);

return statearr_27018;
})();
var statearr_27019_27561 = state_26952__$1;
(statearr_27019_27561[(2)] = inst_26887);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_26629 = klipse_clj.lang.clojure.the_eval.call(null,"(s/def ::x integer?)");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(12),inst_26629);
} else {
if((state_val_26953 === (9))){
var inst_26659 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27020 = state_26952;
(statearr_27020[(37)] = inst_26659);

return statearr_27020;
})();
var statearr_27021_27562 = state_26952__$1;
(statearr_27021_27562[(2)] = null);

(statearr_27021_27562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (5))){
var inst_26596 = (state_26952[(8)]);
var inst_26597 = (state_26952[(38)]);
var inst_26591 = (state_26952[(2)]);
var inst_26592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26593 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_26594 = (new cljs.core.PersistentVector(null,2,(5),inst_26592,inst_26593,null));
var inst_26595 = (new cljs.core.List(null,inst_26594,null,(1),null));
var inst_26596__$1 = (new cljs.core.List(null,inst_26591,inst_26595,(2),null));
var inst_26597__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26596__$1);
var state_26952__$1 = (function (){var statearr_27022 = state_26952;
(statearr_27022[(8)] = inst_26596__$1);

(statearr_27022[(38)] = inst_26597__$1);

return statearr_27022;
})();
if(cljs.core.truth_(inst_26597__$1)){
var statearr_27023_27563 = state_26952__$1;
(statearr_27023_27563[(1)] = (6));

} else {
var statearr_27024_27564 = state_26952__$1;
(statearr_27024_27564[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (14))){
var inst_26636 = (state_26952[(23)]);
var inst_26646 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26647 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_26648 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26649 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26650 = cljs.core.cons.call(null,inst_26649,inst_26636);
var inst_26651 = (new cljs.core.List(null,inst_26650,null,(1),null));
var inst_26652 = (new cljs.core.List(null,inst_26648,inst_26651,(2),null));
var inst_26653 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26647,inst_26652,null];
var inst_26654 = cljs.core.PersistentHashMap.fromArrays(inst_26646,inst_26653);
var inst_26655 = cljs.test.do_report.call(null,inst_26654);
var state_26952__$1 = state_26952;
var statearr_27025_27565 = state_26952__$1;
(statearr_27025_27565[(2)] = inst_26655);

(statearr_27025_27565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (45))){
var inst_26826 = (state_26952[(2)]);
var inst_26827 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26828 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_26829 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26828,inst_26826,null];
var inst_26830 = cljs.core.PersistentHashMap.fromArrays(inst_26827,inst_26829);
var inst_26831 = cljs.test.do_report.call(null,inst_26830);
var state_26952__$1 = state_26952;
var statearr_27026_27566 = state_26952__$1;
(statearr_27026_27566[(2)] = inst_26831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (53))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(52),new cljs.core.Keyword(null,"default","default",-1987822328),null,(51));
var inst_26875 = klipse_clj.lang.clojure.the_eval.call(null,"(stest/unstrument `foo)");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(54),inst_26875);
} else {
if((state_val_26953 === (26))){
var inst_26717 = (state_26952[(11)]);
var inst_26718 = (state_26952[(29)]);
var inst_26711 = (state_26952[(2)]);
var inst_26712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26713 = cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null);
var inst_26714 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_26713];
var inst_26715 = (new cljs.core.PersistentVector(null,2,(5),inst_26712,inst_26714,null));
var inst_26716 = (new cljs.core.List(null,inst_26715,null,(1),null));
var inst_26717__$1 = (new cljs.core.List(null,inst_26711,inst_26716,(2),null));
var inst_26718__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_26717__$1);
var state_26952__$1 = (function (){var statearr_27027 = state_26952;
(statearr_27027[(11)] = inst_26717__$1);

(statearr_27027[(29)] = inst_26718__$1);

return statearr_27027;
})();
if(cljs.core.truth_(inst_26718__$1)){
var statearr_27028_27567 = state_26952__$1;
(statearr_27028_27567[(1)] = (27));

} else {
var statearr_27029_27568 = state_26952__$1;
(statearr_27029_27568[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (16))){
var inst_26699 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27030 = state_26952;
(statearr_27030[(39)] = inst_26699);

return statearr_27030;
})();
var statearr_27031_27569 = state_26952__$1;
(statearr_27031_27569[(2)] = null);

(statearr_27031_27569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (38))){
var inst_26782 = (state_26952[(2)]);
var inst_26783 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26784 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26785 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26784,inst_26782,null];
var inst_26786 = cljs.core.PersistentHashMap.fromArrays(inst_26783,inst_26785);
var inst_26787 = cljs.test.do_report.call(null,inst_26786);
var state_26952__$1 = state_26952;
var statearr_27032_27570 = state_26952__$1;
(statearr_27032_27570[(2)] = inst_26787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (30))){
var inst_26781 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27033 = state_26952;
(statearr_27033[(40)] = inst_26781);

return statearr_27033;
})();
var statearr_27034_27571 = state_26952__$1;
(statearr_27034_27571[(2)] = null);

(statearr_27034_27571[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (10))){
var inst_26620 = (state_26952[(2)]);
var inst_26621 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26622 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_26623 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26622,inst_26620,null];
var inst_26624 = cljs.core.PersistentHashMap.fromArrays(inst_26621,inst_26623);
var inst_26625 = cljs.test.do_report.call(null,inst_26624);
var state_26952__$1 = state_26952;
var statearr_27035_27572 = state_26952__$1;
(statearr_27035_27572[(2)] = inst_26625);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26952,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_26669 = klipse_clj.lang.clojure.the_eval.call(null,"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])");
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(19),inst_26669);
} else {
if((state_val_26953 === (52))){
var inst_26866 = (state_26952[(2)]);
var inst_26867 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26868 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26869 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26868,inst_26866,null];
var inst_26870 = cljs.core.PersistentHashMap.fromArrays(inst_26867,inst_26869);
var inst_26871 = cljs.test.do_report.call(null,inst_26870);
var state_26952__$1 = state_26952;
var statearr_27036_27573 = state_26952__$1;
(statearr_27036_27573[(2)] = inst_26871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (42))){
var inst_26802 = (state_26952[(19)]);
var inst_26812 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26813 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_26814 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26815 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26816 = cljs.core.cons.call(null,inst_26815,inst_26802);
var inst_26817 = (new cljs.core.List(null,inst_26816,null,(1),null));
var inst_26818 = (new cljs.core.List(null,inst_26814,inst_26817,(2),null));
var inst_26819 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26813,inst_26818,null];
var inst_26820 = cljs.core.PersistentHashMap.fromArrays(inst_26812,inst_26819);
var inst_26821 = cljs.test.do_report.call(null,inst_26820);
var state_26952__$1 = state_26952;
var statearr_27037_27574 = state_26952__$1;
(statearr_27037_27574[(2)] = inst_26821);

(statearr_27037_27574[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (37))){
var inst_26825 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27038 = state_26952;
(statearr_27038[(41)] = inst_26825);

return statearr_27038;
})();
var statearr_27039_27575 = state_26952__$1;
(statearr_27039_27575[(2)] = null);

(statearr_27039_27575[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (63))){
var inst_26926 = (state_26952[(7)]);
var inst_26936 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26937 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_26938 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26939 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26940 = cljs.core.cons.call(null,inst_26939,inst_26926);
var inst_26941 = (new cljs.core.List(null,inst_26940,null,(1),null));
var inst_26942 = (new cljs.core.List(null,inst_26938,inst_26941,(2),null));
var inst_26943 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26937,inst_26942,null];
var inst_26944 = cljs.core.PersistentHashMap.fromArrays(inst_26936,inst_26943);
var inst_26945 = cljs.test.do_report.call(null,inst_26944);
var state_26952__$1 = state_26952;
var statearr_27040_27576 = state_26952__$1;
(statearr_27040_27576[(2)] = inst_26945);

(statearr_27040_27576[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (8))){
var inst_26597 = (state_26952[(38)]);
var inst_26617 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_27041 = state_26952;
(statearr_27041[(42)] = inst_26617);

return statearr_27041;
})();
var statearr_27042_27577 = state_26952__$1;
(statearr_27042_27577[(2)] = inst_26597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (49))){
var inst_26842 = (state_26952[(16)]);
var inst_26852 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26853 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_26854 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26855 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_26856 = cljs.core.cons.call(null,inst_26855,inst_26842);
var inst_26857 = (new cljs.core.List(null,inst_26856,null,(1),null));
var inst_26858 = (new cljs.core.List(null,inst_26854,inst_26857,(2),null));
var inst_26859 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26853,inst_26858,null];
var inst_26860 = cljs.core.PersistentHashMap.fromArrays(inst_26852,inst_26859);
var inst_26861 = cljs.test.do_report.call(null,inst_26860);
var state_26952__$1 = state_26952;
var statearr_27043_27578 = state_26952__$1;
(statearr_27043_27578[(2)] = inst_26861);

(statearr_27043_27578[(1)] = (50));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_26952){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_26952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__15543__auto__ = e27045;
var statearr_27046_27579 = state_26952;
(statearr_27046_27579[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27580 = state_26952;
state_26952 = G__27580;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_26952){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_26952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_27047 = f__15635__auto__.call(null);
(statearr_27047[(6)] = c__15634__auto__);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.apply = (function (self__,args26579){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26579)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_27420){
var state_val_27421 = (state_27420[(1)]);
if((state_val_27421 === (62))){
var inst_27394 = (state_27420[(7)]);
var inst_27397 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27398 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_27399 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27394);
var inst_27400 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27398,inst_27399,null];
var inst_27401 = cljs.core.PersistentHashMap.fromArrays(inst_27397,inst_27400);
var inst_27402 = cljs.test.do_report.call(null,inst_27401);
var state_27420__$1 = state_27420;
var statearr_27422_27581 = state_27420__$1;
(statearr_27422_27581[(2)] = inst_27402);

(statearr_27422_27581[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (7))){
var inst_27064 = (state_27420[(8)]);
var inst_27074 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27075 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27076 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27077 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27078 = cljs.core.cons.call(null,inst_27077,inst_27064);
var inst_27079 = (new cljs.core.List(null,inst_27078,null,(1),null));
var inst_27080 = (new cljs.core.List(null,inst_27076,inst_27079,(2),null));
var inst_27081 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27075,inst_27080,null];
var inst_27082 = cljs.core.PersistentHashMap.fromArrays(inst_27074,inst_27081);
var inst_27083 = cljs.test.do_report.call(null,inst_27082);
var state_27420__$1 = state_27420;
var statearr_27423_27582 = state_27420__$1;
(statearr_27423_27582[(2)] = inst_27083);

(statearr_27423_27582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (59))){
var inst_27378 = (state_27420[(2)]);
var inst_27379 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27380 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_27381 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27380,inst_27378,null];
var inst_27382 = cljs.core.PersistentHashMap.fromArrays(inst_27379,inst_27381);
var inst_27383 = cljs.test.do_report.call(null,inst_27382);
var state_27420__$1 = state_27420;
var statearr_27424_27583 = state_27420__$1;
(statearr_27424_27583[(2)] = inst_27383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (20))){
var inst_27144 = (state_27420[(9)]);
var inst_27147 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27148 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27149 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27144);
var inst_27150 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27148,inst_27149,null];
var inst_27151 = cljs.core.PersistentHashMap.fromArrays(inst_27147,inst_27150);
var inst_27152 = cljs.test.do_report.call(null,inst_27151);
var state_27420__$1 = state_27420;
var statearr_27425_27584 = state_27420__$1;
(statearr_27425_27584[(2)] = inst_27152);

(statearr_27425_27584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (58))){
var inst_27417 = (state_27420[(2)]);
var inst_27418 = done.call(null);
var state_27420__$1 = (function (){var statearr_27426 = state_27420;
(statearr_27426[(10)] = inst_27417);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27420__$1,inst_27418);
} else {
if((state_val_27421 === (60))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(59),new cljs.core.Keyword(null,"default","default",-1987822328),null,(58));
var inst_27387 = klipse_clj.lang.clojure.the_eval.call(null,"(foo :a)");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(61),inst_27387);
} else {
if((state_val_27421 === (27))){
var inst_27185 = (state_27420[(11)]);
var inst_27188 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27189 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_27190 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27185);
var inst_27191 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27189,inst_27190,null];
var inst_27192 = cljs.core.PersistentHashMap.fromArrays(inst_27188,inst_27191);
var inst_27193 = cljs.test.do_report.call(null,inst_27192);
var state_27420__$1 = state_27420;
var statearr_27427_27585 = state_27420__$1;
(statearr_27427_27585[(2)] = inst_27193);

(statearr_27427_27585[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (1))){
var state_27420__$1 = state_27420;
var statearr_27428_27586 = state_27420__$1;
(statearr_27428_27586[(2)] = null);

(statearr_27428_27586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (24))){
var inst_27168 = (state_27420[(2)]);
var inst_27169 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27170 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_27171 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27170,inst_27168,null];
var inst_27172 = cljs.core.PersistentHashMap.fromArrays(inst_27169,inst_27171);
var inst_27173 = cljs.test.do_report.call(null,inst_27172);
var state_27420__$1 = state_27420;
var statearr_27429_27587 = state_27420__$1;
(statearr_27429_27587[(2)] = inst_27173);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (55))){
var inst_27354 = (state_27420[(12)]);
var inst_27357 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27358 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27359 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27354);
var inst_27360 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27358,inst_27359,null];
var inst_27361 = cljs.core.PersistentHashMap.fromArrays(inst_27357,inst_27360);
var inst_27362 = cljs.test.do_report.call(null,inst_27361);
var state_27420__$1 = state_27420;
var statearr_27430_27588 = state_27420__$1;
(statearr_27430_27588[(2)] = inst_27362);

(statearr_27430_27588[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (39))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_27259 = klipse_clj.lang.clojure.the_eval.call(null,"(stest/instrument `foo)");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(40),inst_27259);
} else {
if((state_val_27421 === (46))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_27303 = klipse_clj.lang.clojure.the_eval.call(null,"(foo 1)");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(47),inst_27303);
} else {
if((state_val_27421 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27057 = klipse_clj.lang.clojure.the_eval.call(null,"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(5),inst_27057);
} else {
if((state_val_27421 === (54))){
var inst_27355 = (state_27420[(13)]);
var inst_27354 = (state_27420[(12)]);
var inst_27345 = (state_27420[(2)]);
var inst_27346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27348 = new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null);
var inst_27349 = [inst_27348];
var inst_27350 = (new cljs.core.PersistentVector(null,1,(5),inst_27347,inst_27349,null));
var inst_27351 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_27350];
var inst_27352 = (new cljs.core.PersistentVector(null,2,(5),inst_27346,inst_27351,null));
var inst_27353 = (new cljs.core.List(null,inst_27352,null,(1),null));
var inst_27354__$1 = (new cljs.core.List(null,inst_27345,inst_27353,(2),null));
var inst_27355__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27354__$1);
var state_27420__$1 = (function (){var statearr_27431 = state_27420;
(statearr_27431[(13)] = inst_27355__$1);

(statearr_27431[(12)] = inst_27354__$1);

return statearr_27431;
})();
if(cljs.core.truth_(inst_27355__$1)){
var statearr_27432_27589 = state_27420__$1;
(statearr_27432_27589[(1)] = (55));

} else {
var statearr_27433_27590 = state_27420__$1;
(statearr_27433_27590[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (15))){
var inst_27105 = (state_27420[(14)]);
var inst_27125 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27434 = state_27420;
(statearr_27434[(15)] = inst_27125);

return statearr_27434;
})();
var statearr_27435_27591 = state_27420__$1;
(statearr_27435_27591[(2)] = inst_27105);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (48))){
var inst_27310 = (state_27420[(16)]);
var inst_27313 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27314 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_27315 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27310);
var inst_27316 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27314,inst_27315,null];
var inst_27317 = cljs.core.PersistentHashMap.fromArrays(inst_27313,inst_27316);
var inst_27318 = cljs.test.do_report.call(null,inst_27317);
var state_27420__$1 = state_27420;
var statearr_27436_27592 = state_27420__$1;
(statearr_27436_27592[(2)] = inst_27318);

(statearr_27436_27592[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (50))){
var inst_27311 = (state_27420[(17)]);
var inst_27331 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27437 = state_27420;
(statearr_27437[(18)] = inst_27331);

return statearr_27437;
})();
var statearr_27438_27593 = state_27420__$1;
(statearr_27438_27593[(2)] = inst_27311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (21))){
var inst_27144 = (state_27420[(9)]);
var inst_27154 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27155 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27156 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27157 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27158 = cljs.core.cons.call(null,inst_27157,inst_27144);
var inst_27159 = (new cljs.core.List(null,inst_27158,null,(1),null));
var inst_27160 = (new cljs.core.List(null,inst_27156,inst_27159,(2),null));
var inst_27161 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27155,inst_27160,null];
var inst_27162 = cljs.core.PersistentHashMap.fromArrays(inst_27154,inst_27161);
var inst_27163 = cljs.test.do_report.call(null,inst_27162);
var state_27420__$1 = state_27420;
var statearr_27439_27594 = state_27420__$1;
(statearr_27439_27594[(2)] = inst_27163);

(statearr_27439_27594[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (31))){
var inst_27209 = (state_27420[(2)]);
var inst_27210 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27211 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_27212 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27211,inst_27209,null];
var inst_27213 = cljs.core.PersistentHashMap.fromArrays(inst_27210,inst_27212);
var inst_27214 = cljs.test.do_report.call(null,inst_27213);
var state_27420__$1 = state_27420;
var statearr_27440_27595 = state_27420__$1;
(statearr_27440_27595[(2)] = inst_27214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (32))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_27218 = klipse_clj.lang.clojure.the_eval.call(null,"(s/describe (:args (s/get-spec `foo)))");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(33),inst_27218);
} else {
if((state_val_27421 === (40))){
var inst_27270 = (state_27420[(19)]);
var inst_27271 = (state_27420[(20)]);
var inst_27261 = (state_27420[(2)]);
var inst_27262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27264 = new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null);
var inst_27265 = [inst_27264];
var inst_27266 = (new cljs.core.PersistentVector(null,1,(5),inst_27263,inst_27265,null));
var inst_27267 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_27266];
var inst_27268 = (new cljs.core.PersistentVector(null,2,(5),inst_27262,inst_27267,null));
var inst_27269 = (new cljs.core.List(null,inst_27268,null,(1),null));
var inst_27270__$1 = (new cljs.core.List(null,inst_27261,inst_27269,(2),null));
var inst_27271__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27270__$1);
var state_27420__$1 = (function (){var statearr_27441 = state_27420;
(statearr_27441[(19)] = inst_27270__$1);

(statearr_27441[(20)] = inst_27271__$1);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27271__$1)){
var statearr_27442_27596 = state_27420__$1;
(statearr_27442_27596[(1)] = (41));

} else {
var statearr_27443_27597 = state_27420__$1;
(statearr_27443_27597[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (56))){
var inst_27354 = (state_27420[(12)]);
var inst_27364 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27365 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27366 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27367 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27368 = cljs.core.cons.call(null,inst_27367,inst_27354);
var inst_27369 = (new cljs.core.List(null,inst_27368,null,(1),null));
var inst_27370 = (new cljs.core.List(null,inst_27366,inst_27369,(2),null));
var inst_27371 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27365,inst_27370,null];
var inst_27372 = cljs.core.PersistentHashMap.fromArrays(inst_27364,inst_27371);
var inst_27373 = cljs.test.do_report.call(null,inst_27372);
var state_27420__$1 = state_27420;
var statearr_27444_27598 = state_27420__$1;
(statearr_27444_27598[(2)] = inst_27373);

(statearr_27444_27598[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (33))){
var inst_27226 = (state_27420[(21)]);
var inst_27227 = (state_27420[(22)]);
var inst_27220 = (state_27420[(2)]);
var inst_27221 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27222 = cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295));
var inst_27223 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_27222];
var inst_27224 = (new cljs.core.PersistentVector(null,2,(5),inst_27221,inst_27223,null));
var inst_27225 = (new cljs.core.List(null,inst_27224,null,(1),null));
var inst_27226__$1 = (new cljs.core.List(null,inst_27220,inst_27225,(2),null));
var inst_27227__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27226__$1);
var state_27420__$1 = (function (){var statearr_27445 = state_27420;
(statearr_27445[(21)] = inst_27226__$1);

(statearr_27445[(22)] = inst_27227__$1);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27227__$1)){
var statearr_27446_27599 = state_27420__$1;
(statearr_27446_27599[(1)] = (34));

} else {
var statearr_27447_27600 = state_27420__$1;
(statearr_27447_27600[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (13))){
var inst_27104 = (state_27420[(23)]);
var inst_27107 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27108 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_27109 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27104);
var inst_27110 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27108,inst_27109,null];
var inst_27111 = cljs.core.PersistentHashMap.fromArrays(inst_27107,inst_27110);
var inst_27112 = cljs.test.do_report.call(null,inst_27111);
var state_27420__$1 = state_27420;
var statearr_27448_27601 = state_27420__$1;
(statearr_27448_27601[(2)] = inst_27112);

(statearr_27448_27601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (22))){
var inst_27145 = (state_27420[(24)]);
var inst_27165 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27449 = state_27420;
(statearr_27449[(25)] = inst_27165);

return statearr_27449;
})();
var statearr_27450_27602 = state_27420__$1;
(statearr_27450_27602[(2)] = inst_27145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (36))){
var inst_27227 = (state_27420[(22)]);
var inst_27247 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27451 = state_27420;
(statearr_27451[(26)] = inst_27247);

return statearr_27451;
})();
var statearr_27452_27603 = state_27420__$1;
(statearr_27452_27603[(2)] = inst_27227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (41))){
var inst_27270 = (state_27420[(19)]);
var inst_27273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27274 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27275 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27270);
var inst_27276 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27274,inst_27275,null];
var inst_27277 = cljs.core.PersistentHashMap.fromArrays(inst_27273,inst_27276);
var inst_27278 = cljs.test.do_report.call(null,inst_27277);
var state_27420__$1 = state_27420;
var statearr_27453_27604 = state_27420__$1;
(statearr_27453_27604[(2)] = inst_27278);

(statearr_27453_27604[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (43))){
var inst_27271 = (state_27420[(20)]);
var inst_27291 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27454 = state_27420;
(statearr_27454[(27)] = inst_27291);

return statearr_27454;
})();
var statearr_27455_27605 = state_27420__$1;
(statearr_27455_27605[(2)] = inst_27271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (61))){
var inst_27394 = (state_27420[(7)]);
var inst_27395 = (state_27420[(28)]);
var inst_27389 = (state_27420[(2)]);
var inst_27390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27391 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)];
var inst_27392 = (new cljs.core.PersistentVector(null,2,(5),inst_27390,inst_27391,null));
var inst_27393 = (new cljs.core.List(null,inst_27392,null,(1),null));
var inst_27394__$1 = (new cljs.core.List(null,inst_27389,inst_27393,(2),null));
var inst_27395__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27394__$1);
var state_27420__$1 = (function (){var statearr_27456 = state_27420;
(statearr_27456[(7)] = inst_27394__$1);

(statearr_27456[(28)] = inst_27395__$1);

return statearr_27456;
})();
if(cljs.core.truth_(inst_27395__$1)){
var statearr_27457_27606 = state_27420__$1;
(statearr_27457_27606[(1)] = (62));

} else {
var statearr_27458_27607 = state_27420__$1;
(statearr_27458_27607[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (29))){
var inst_27186 = (state_27420[(29)]);
var inst_27206 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27459 = state_27420;
(statearr_27459[(30)] = inst_27206);

return statearr_27459;
})();
var statearr_27460_27608 = state_27420__$1;
(statearr_27460_27608[(2)] = inst_27186);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (44))){
var inst_27333 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27461 = state_27420;
(statearr_27461[(31)] = inst_27333);

return statearr_27461;
})();
var statearr_27462_27609 = state_27420__$1;
(statearr_27462_27609[(2)] = null);

(statearr_27462_27609[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (6))){
var inst_27064 = (state_27420[(8)]);
var inst_27067 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27068 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27069 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27064);
var inst_27070 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27068,inst_27069,null];
var inst_27071 = cljs.core.PersistentHashMap.fromArrays(inst_27067,inst_27070);
var inst_27072 = cljs.test.do_report.call(null,inst_27071);
var state_27420__$1 = state_27420;
var statearr_27463_27610 = state_27420__$1;
(statearr_27463_27610[(2)] = inst_27072);

(statearr_27463_27610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (28))){
var inst_27185 = (state_27420[(11)]);
var inst_27195 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27196 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null))], null));
var inst_27197 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27198 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27199 = cljs.core.cons.call(null,inst_27198,inst_27185);
var inst_27200 = (new cljs.core.List(null,inst_27199,null,(1),null));
var inst_27201 = (new cljs.core.List(null,inst_27197,inst_27200,(2),null));
var inst_27202 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27196,inst_27201,null];
var inst_27203 = cljs.core.PersistentHashMap.fromArrays(inst_27195,inst_27202);
var inst_27204 = cljs.test.do_report.call(null,inst_27203);
var state_27420__$1 = state_27420;
var statearr_27464_27611 = state_27420__$1;
(statearr_27464_27611[(2)] = inst_27204);

(statearr_27464_27611[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (64))){
var inst_27395 = (state_27420[(28)]);
var inst_27415 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27465 = state_27420;
(statearr_27465[(32)] = inst_27415);

return statearr_27465;
})();
var statearr_27466_27612 = state_27420__$1;
(statearr_27466_27612[(2)] = inst_27395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (51))){
var inst_27377 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27467 = state_27420;
(statearr_27467[(33)] = inst_27377);

return statearr_27467;
})();
var statearr_27468_27613 = state_27420__$1;
(statearr_27468_27613[(2)] = null);

(statearr_27468_27613[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_27177 = klipse_clj.lang.clojure.the_eval.call(null,"(defn foo [x] x)\n          (s/fdef foo :args (s/cat :x ::x)\n           :ret string?)\n           (s/describe (s/get-spec `foo))");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(26),inst_27177);
} else {
if((state_val_27421 === (34))){
var inst_27226 = (state_27420[(21)]);
var inst_27229 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27230 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_27231 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27226);
var inst_27232 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27230,inst_27231,null];
var inst_27233 = cljs.core.PersistentHashMap.fromArrays(inst_27229,inst_27232);
var inst_27234 = cljs.test.do_report.call(null,inst_27233);
var state_27420__$1 = state_27420;
var statearr_27469_27614 = state_27420__$1;
(statearr_27469_27614[(2)] = inst_27234);

(statearr_27469_27614[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (17))){
var inst_27128 = (state_27420[(2)]);
var inst_27129 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27130 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27131 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27130,inst_27128,null];
var inst_27132 = cljs.core.PersistentHashMap.fromArrays(inst_27129,inst_27131);
var inst_27133 = cljs.test.do_report.call(null,inst_27132);
var state_27420__$1 = state_27420;
var statearr_27470_27615 = state_27420__$1;
(statearr_27470_27615[(2)] = inst_27133);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (3))){
var inst_27048 = (state_27420[(2)]);
var inst_27049 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27050 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns your.spec)\n          (require '[clojure.spec.alpha :as s])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27051 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27050,inst_27048,null];
var inst_27052 = cljs.core.PersistentHashMap.fromArrays(inst_27049,inst_27051);
var inst_27053 = cljs.test.do_report.call(null,inst_27052);
var state_27420__$1 = state_27420;
var statearr_27471_27616 = state_27420__$1;
(statearr_27471_27616[(2)] = inst_27053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (12))){
var inst_27105 = (state_27420[(14)]);
var inst_27104 = (state_27420[(23)]);
var inst_27099 = (state_27420[(2)]);
var inst_27100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27101 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)];
var inst_27102 = (new cljs.core.PersistentVector(null,2,(5),inst_27100,inst_27101,null));
var inst_27103 = (new cljs.core.List(null,inst_27102,null,(1),null));
var inst_27104__$1 = (new cljs.core.List(null,inst_27099,inst_27103,(2),null));
var inst_27105__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27104__$1);
var state_27420__$1 = (function (){var statearr_27472 = state_27420;
(statearr_27472[(14)] = inst_27105__$1);

(statearr_27472[(23)] = inst_27104__$1);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27105__$1)){
var statearr_27473_27617 = state_27420__$1;
(statearr_27473_27617[(1)] = (13));

} else {
var statearr_27474_27618 = state_27420__$1;
(statearr_27474_27618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (2))){
var inst_27087 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27475 = state_27420;
(statearr_27475[(34)] = inst_27087);

return statearr_27475;
})();
var statearr_27476_27619 = state_27420__$1;
(statearr_27476_27619[(2)] = null);

(statearr_27476_27619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (23))){
var inst_27208 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27477 = state_27420;
(statearr_27477[(35)] = inst_27208);

return statearr_27477;
})();
var statearr_27478_27620 = state_27420__$1;
(statearr_27478_27620[(2)] = null);

(statearr_27478_27620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (47))){
var inst_27311 = (state_27420[(17)]);
var inst_27310 = (state_27420[(16)]);
var inst_27305 = (state_27420[(2)]);
var inst_27306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27307 = [new cljs.core.Keyword(null,"ok","ok",967785236),(1)];
var inst_27308 = (new cljs.core.PersistentVector(null,2,(5),inst_27306,inst_27307,null));
var inst_27309 = (new cljs.core.List(null,inst_27308,null,(1),null));
var inst_27310__$1 = (new cljs.core.List(null,inst_27305,inst_27309,(2),null));
var inst_27311__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27310__$1);
var state_27420__$1 = (function (){var statearr_27479 = state_27420;
(statearr_27479[(17)] = inst_27311__$1);

(statearr_27479[(16)] = inst_27310__$1);

return statearr_27479;
})();
if(cljs.core.truth_(inst_27311__$1)){
var statearr_27480_27621 = state_27420__$1;
(statearr_27480_27621[(1)] = (48));

} else {
var statearr_27481_27622 = state_27420__$1;
(statearr_27481_27622[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (35))){
var inst_27226 = (state_27420[(21)]);
var inst_27236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27237 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/describe (:args (s/get-spec `foo)))")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)))], null));
var inst_27238 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27239 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27240 = cljs.core.cons.call(null,inst_27239,inst_27226);
var inst_27241 = (new cljs.core.List(null,inst_27240,null,(1),null));
var inst_27242 = (new cljs.core.List(null,inst_27238,inst_27241,(2),null));
var inst_27243 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27237,inst_27242,null];
var inst_27244 = cljs.core.PersistentHashMap.fromArrays(inst_27236,inst_27243);
var inst_27245 = cljs.test.do_report.call(null,inst_27244);
var state_27420__$1 = state_27420;
var statearr_27482_27623 = state_27420__$1;
(statearr_27482_27623[(2)] = inst_27245);

(statearr_27482_27623[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (19))){
var inst_27144 = (state_27420[(9)]);
var inst_27145 = (state_27420[(24)]);
var inst_27139 = (state_27420[(2)]);
var inst_27140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27141 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_27142 = (new cljs.core.PersistentVector(null,2,(5),inst_27140,inst_27141,null));
var inst_27143 = (new cljs.core.List(null,inst_27142,null,(1),null));
var inst_27144__$1 = (new cljs.core.List(null,inst_27139,inst_27143,(2),null));
var inst_27145__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27144__$1);
var state_27420__$1 = (function (){var statearr_27483 = state_27420;
(statearr_27483[(9)] = inst_27144__$1);

(statearr_27483[(24)] = inst_27145__$1);

return statearr_27483;
})();
if(cljs.core.truth_(inst_27145__$1)){
var statearr_27484_27624 = state_27420__$1;
(statearr_27484_27624[(1)] = (20));

} else {
var statearr_27485_27625 = state_27420__$1;
(statearr_27485_27625[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (57))){
var inst_27355 = (state_27420[(13)]);
var inst_27375 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27486 = state_27420;
(statearr_27486[(36)] = inst_27375);

return statearr_27486;
})();
var statearr_27487_27626 = state_27420__$1;
(statearr_27487_27626[(2)] = inst_27355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_27097 = klipse_clj.lang.clojure.the_eval.call(null,"(s/def ::x integer?)");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(12),inst_27097);
} else {
if((state_val_27421 === (9))){
var inst_27127 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27488 = state_27420;
(statearr_27488[(37)] = inst_27127);

return statearr_27488;
})();
var statearr_27489_27627 = state_27420__$1;
(statearr_27489_27627[(2)] = null);

(statearr_27489_27627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (5))){
var inst_27065 = (state_27420[(38)]);
var inst_27064 = (state_27420[(8)]);
var inst_27059 = (state_27420[(2)]);
var inst_27060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27061 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_27062 = (new cljs.core.PersistentVector(null,2,(5),inst_27060,inst_27061,null));
var inst_27063 = (new cljs.core.List(null,inst_27062,null,(1),null));
var inst_27064__$1 = (new cljs.core.List(null,inst_27059,inst_27063,(2),null));
var inst_27065__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27064__$1);
var state_27420__$1 = (function (){var statearr_27490 = state_27420;
(statearr_27490[(38)] = inst_27065__$1);

(statearr_27490[(8)] = inst_27064__$1);

return statearr_27490;
})();
if(cljs.core.truth_(inst_27065__$1)){
var statearr_27491_27628 = state_27420__$1;
(statearr_27491_27628[(1)] = (6));

} else {
var statearr_27492_27629 = state_27420__$1;
(statearr_27492_27629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (14))){
var inst_27104 = (state_27420[(23)]);
var inst_27114 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27115 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_27116 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27117 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27118 = cljs.core.cons.call(null,inst_27117,inst_27104);
var inst_27119 = (new cljs.core.List(null,inst_27118,null,(1),null));
var inst_27120 = (new cljs.core.List(null,inst_27116,inst_27119,(2),null));
var inst_27121 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27115,inst_27120,null];
var inst_27122 = cljs.core.PersistentHashMap.fromArrays(inst_27114,inst_27121);
var inst_27123 = cljs.test.do_report.call(null,inst_27122);
var state_27420__$1 = state_27420;
var statearr_27493_27630 = state_27420__$1;
(statearr_27493_27630[(2)] = inst_27123);

(statearr_27493_27630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (45))){
var inst_27294 = (state_27420[(2)]);
var inst_27295 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27296 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_27297 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27296,inst_27294,null];
var inst_27298 = cljs.core.PersistentHashMap.fromArrays(inst_27295,inst_27297);
var inst_27299 = cljs.test.do_report.call(null,inst_27298);
var state_27420__$1 = state_27420;
var statearr_27494_27631 = state_27420__$1;
(statearr_27494_27631[(2)] = inst_27299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (53))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(52),new cljs.core.Keyword(null,"default","default",-1987822328),null,(51));
var inst_27343 = klipse_clj.lang.clojure.the_eval.call(null,"(stest/unstrument `foo)");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(54),inst_27343);
} else {
if((state_val_27421 === (26))){
var inst_27185 = (state_27420[(11)]);
var inst_27186 = (state_27420[(29)]);
var inst_27179 = (state_27420[(2)]);
var inst_27180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27181 = cljs.core.list(new cljs.core.Symbol(null,"fspec","fspec",1380883392,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),null);
var inst_27182 = [new cljs.core.Keyword(null,"ok","ok",967785236),inst_27181];
var inst_27183 = (new cljs.core.PersistentVector(null,2,(5),inst_27180,inst_27182,null));
var inst_27184 = (new cljs.core.List(null,inst_27183,null,(1),null));
var inst_27185__$1 = (new cljs.core.List(null,inst_27179,inst_27184,(2),null));
var inst_27186__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27185__$1);
var state_27420__$1 = (function (){var statearr_27495 = state_27420;
(statearr_27495[(11)] = inst_27185__$1);

(statearr_27495[(29)] = inst_27186__$1);

return statearr_27495;
})();
if(cljs.core.truth_(inst_27186__$1)){
var statearr_27496_27632 = state_27420__$1;
(statearr_27496_27632[(1)] = (27));

} else {
var statearr_27497_27633 = state_27420__$1;
(statearr_27497_27633[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (16))){
var inst_27167 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27498 = state_27420;
(statearr_27498[(39)] = inst_27167);

return statearr_27498;
})();
var statearr_27499_27634 = state_27420__$1;
(statearr_27499_27634[(2)] = null);

(statearr_27499_27634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (38))){
var inst_27250 = (state_27420[(2)]);
var inst_27251 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27252 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27253 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27252,inst_27250,null];
var inst_27254 = cljs.core.PersistentHashMap.fromArrays(inst_27251,inst_27253);
var inst_27255 = cljs.test.do_report.call(null,inst_27254);
var state_27420__$1 = state_27420;
var statearr_27500_27635 = state_27420__$1;
(statearr_27500_27635[(2)] = inst_27255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (30))){
var inst_27249 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27501 = state_27420;
(statearr_27501[(40)] = inst_27249);

return statearr_27501;
})();
var statearr_27502_27636 = state_27420__$1;
(statearr_27502_27636[(2)] = null);

(statearr_27502_27636[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (10))){
var inst_27088 = (state_27420[(2)]);
var inst_27089 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27090 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(s/def ::x integer?)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword("your.spec","x","your.spec/x",1301812295)], null));
var inst_27091 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27090,inst_27088,null];
var inst_27092 = cljs.core.PersistentHashMap.fromArrays(inst_27089,inst_27091);
var inst_27093 = cljs.test.do_report.call(null,inst_27092);
var state_27420__$1 = state_27420;
var statearr_27503_27637 = state_27420__$1;
(statearr_27503_27637[(2)] = inst_27093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27420,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_27137 = klipse_clj.lang.clojure.the_eval.call(null,"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])");
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27420__$1,(19),inst_27137);
} else {
if((state_val_27421 === (52))){
var inst_27334 = (state_27420[(2)]);
var inst_27335 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27336 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/unstrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27337 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27336,inst_27334,null];
var inst_27338 = cljs.core.PersistentHashMap.fromArrays(inst_27335,inst_27337);
var inst_27339 = cljs.test.do_report.call(null,inst_27338);
var state_27420__$1 = state_27420;
var statearr_27504_27638 = state_27420__$1;
(statearr_27504_27638[(2)] = inst_27339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (42))){
var inst_27270 = (state_27420[(19)]);
var inst_27280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27281 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(stest/instrument `foo)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol("your.spec","foo","your.spec/foo",-1630489039,null))], null)], null));
var inst_27282 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27283 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27284 = cljs.core.cons.call(null,inst_27283,inst_27270);
var inst_27285 = (new cljs.core.List(null,inst_27284,null,(1),null));
var inst_27286 = (new cljs.core.List(null,inst_27282,inst_27285,(2),null));
var inst_27287 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27281,inst_27286,null];
var inst_27288 = cljs.core.PersistentHashMap.fromArrays(inst_27280,inst_27287);
var inst_27289 = cljs.test.do_report.call(null,inst_27288);
var state_27420__$1 = state_27420;
var statearr_27505_27639 = state_27420__$1;
(statearr_27505_27639[(2)] = inst_27289);

(statearr_27505_27639[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (37))){
var inst_27293 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27506 = state_27420;
(statearr_27506[(41)] = inst_27293);

return statearr_27506;
})();
var statearr_27507_27640 = state_27420__$1;
(statearr_27507_27640[(2)] = null);

(statearr_27507_27640[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (63))){
var inst_27394 = (state_27420[(7)]);
var inst_27404 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27405 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo :a)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"a","a",-2123407586)], null));
var inst_27406 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27407 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27408 = cljs.core.cons.call(null,inst_27407,inst_27394);
var inst_27409 = (new cljs.core.List(null,inst_27408,null,(1),null));
var inst_27410 = (new cljs.core.List(null,inst_27406,inst_27409,(2),null));
var inst_27411 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27405,inst_27410,null];
var inst_27412 = cljs.core.PersistentHashMap.fromArrays(inst_27404,inst_27411);
var inst_27413 = cljs.test.do_report.call(null,inst_27412);
var state_27420__$1 = state_27420;
var statearr_27508_27641 = state_27420__$1;
(statearr_27508_27641[(2)] = inst_27413);

(statearr_27508_27641[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (8))){
var inst_27065 = (state_27420[(38)]);
var inst_27085 = (state_27420[(2)]);
var state_27420__$1 = (function (){var statearr_27509 = state_27420;
(statearr_27509[(42)] = inst_27085);

return statearr_27509;
})();
var statearr_27510_27642 = state_27420__$1;
(statearr_27510_27642[(2)] = inst_27065);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27421 === (49))){
var inst_27310 = (state_27420[(16)]);
var inst_27320 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27321 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(foo 1)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(1)], null));
var inst_27322 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27323 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27324 = cljs.core.cons.call(null,inst_27323,inst_27310);
var inst_27325 = (new cljs.core.List(null,inst_27324,null,(1),null));
var inst_27326 = (new cljs.core.List(null,inst_27322,inst_27325,(2),null));
var inst_27327 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27321,inst_27326,null];
var inst_27328 = cljs.core.PersistentHashMap.fromArrays(inst_27320,inst_27327);
var inst_27329 = cljs.test.do_report.call(null,inst_27328);
var state_27420__$1 = state_27420;
var statearr_27511_27643 = state_27420__$1;
(statearr_27511_27643[(2)] = inst_27329);

(statearr_27511_27643[(1)] = (50));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_27512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27512[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_27512[(1)] = (1));

return statearr_27512;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_27420){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_27420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e27513){if((e27513 instanceof Object)){
var ex__15543__auto__ = e27513;
var statearr_27514_27644 = state_27420;
(statearr_27514_27644[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27645 = state_27420;
state_27420 = G__27645;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_27420){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_27420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_27515 = f__15635__auto__.call(null);
(statearr_27515[(6)] = c__15634__auto__);

return statearr_27515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26577","meta26577",1575442916,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test26576.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test26576.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test26576";

klipse_clj.eval_test.t_klipse_clj$eval_test26576.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test26576");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test26576.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test26576 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test26576(meta26577){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test26576(meta26577));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test26576(null));
});

klipse_clj.eval_test.test_eval_spec_alpha.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_spec_alpha;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-spec-alpha","klipse-clj.eval-test/test-eval-spec-alpha",-204532213,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-spec-alpha","test-eval-spec-alpha",225717160,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",30,1,119,119,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_spec_alpha)?klipse_clj.eval_test.test_eval_spec_alpha.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_require_cljsjs = (function klipse_clj$eval_test$test_eval_require_cljsjs(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_require_cljsjs.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_require_cljsjs.cljs$lang$test = (function (){
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test27646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test27646 = (function (meta27647){
this.meta27647 = meta27647;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27648,meta27647__$1){
var self__ = this;
var _27648__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test27646(meta27647__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27648){
var self__ = this;
var _27648__$1 = this;
return self__.meta27647;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_27732){
var state_val_27733 = (state_27732[(1)]);
if((state_val_27733 === (7))){
var inst_27666 = (state_27732[(7)]);
var inst_27676 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27677 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27678 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27679 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27680 = cljs.core.cons.call(null,inst_27679,inst_27666);
var inst_27681 = (new cljs.core.List(null,inst_27680,null,(1),null));
var inst_27682 = (new cljs.core.List(null,inst_27678,inst_27681,(2),null));
var inst_27683 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27677,inst_27682,null];
var inst_27684 = cljs.core.PersistentHashMap.fromArrays(inst_27676,inst_27683);
var inst_27685 = cljs.test.do_report.call(null,inst_27684);
var state_27732__$1 = state_27732;
var statearr_27734_27866 = state_27732__$1;
(statearr_27734_27866[(2)] = inst_27685);

(statearr_27734_27866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (1))){
var state_27732__$1 = state_27732;
var statearr_27735_27867 = state_27732__$1;
(statearr_27735_27867[(2)] = null);

(statearr_27735_27867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27732,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27659 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.ns) (require '[cljsjs.react])");
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27732__$1,(5),inst_27659);
} else {
if((state_val_27733 === (15))){
var inst_27707 = (state_27732[(8)]);
var inst_27727 = (state_27732[(2)]);
var state_27732__$1 = (function (){var statearr_27736 = state_27732;
(statearr_27736[(9)] = inst_27727);

return statearr_27736;
})();
var statearr_27737_27868 = state_27732__$1;
(statearr_27737_27868[(2)] = inst_27707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (13))){
var inst_27706 = (state_27732[(10)]);
var inst_27709 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27710 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27711 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27706);
var inst_27712 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27710,inst_27711,null];
var inst_27713 = cljs.core.PersistentHashMap.fromArrays(inst_27709,inst_27712);
var inst_27714 = cljs.test.do_report.call(null,inst_27713);
var state_27732__$1 = state_27732;
var statearr_27738_27869 = state_27732__$1;
(statearr_27738_27869[(2)] = inst_27714);

(statearr_27738_27869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (6))){
var inst_27666 = (state_27732[(7)]);
var inst_27669 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27670 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27671 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27666);
var inst_27672 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27670,inst_27671,null];
var inst_27673 = cljs.core.PersistentHashMap.fromArrays(inst_27669,inst_27672);
var inst_27674 = cljs.test.do_report.call(null,inst_27673);
var state_27732__$1 = state_27732;
var statearr_27739_27870 = state_27732__$1;
(statearr_27739_27870[(2)] = inst_27674);

(statearr_27739_27870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (3))){
var inst_27650 = (state_27732[(2)]);
var inst_27651 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27652 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27653 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27652,inst_27650,null];
var inst_27654 = cljs.core.PersistentHashMap.fromArrays(inst_27651,inst_27653);
var inst_27655 = cljs.test.do_report.call(null,inst_27654);
var state_27732__$1 = state_27732;
var statearr_27740_27871 = state_27732__$1;
(statearr_27740_27871[(2)] = inst_27655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (12))){
var inst_27706 = (state_27732[(10)]);
var inst_27707 = (state_27732[(8)]);
var inst_27701 = (state_27732[(2)]);
var inst_27702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27703 = [new cljs.core.Keyword(null,"ok","ok",967785236),true];
var inst_27704 = (new cljs.core.PersistentVector(null,2,(5),inst_27702,inst_27703,null));
var inst_27705 = (new cljs.core.List(null,inst_27704,null,(1),null));
var inst_27706__$1 = (new cljs.core.List(null,inst_27701,inst_27705,(2),null));
var inst_27707__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27706__$1);
var state_27732__$1 = (function (){var statearr_27741 = state_27732;
(statearr_27741[(10)] = inst_27706__$1);

(statearr_27741[(8)] = inst_27707__$1);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27707__$1)){
var statearr_27742_27872 = state_27732__$1;
(statearr_27742_27872[(1)] = (13));

} else {
var statearr_27743_27873 = state_27732__$1;
(statearr_27743_27873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (2))){
var inst_27689 = (state_27732[(2)]);
var state_27732__$1 = (function (){var statearr_27744 = state_27732;
(statearr_27744[(11)] = inst_27689);

return statearr_27744;
})();
var statearr_27745_27874 = state_27732__$1;
(statearr_27745_27874[(2)] = null);

(statearr_27745_27874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27732,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_27699 = klipse_clj.lang.clojure.the_eval.call(null,"(some? js/React)");
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27732__$1,(12),inst_27699);
} else {
if((state_val_27733 === (9))){
var inst_27729 = (state_27732[(2)]);
var inst_27730 = done.call(null);
var state_27732__$1 = (function (){var statearr_27746 = state_27732;
(statearr_27746[(12)] = inst_27729);

return statearr_27746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27732__$1,inst_27730);
} else {
if((state_val_27733 === (5))){
var inst_27667 = (state_27732[(13)]);
var inst_27666 = (state_27732[(7)]);
var inst_27661 = (state_27732[(2)]);
var inst_27662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27663 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_27664 = (new cljs.core.PersistentVector(null,2,(5),inst_27662,inst_27663,null));
var inst_27665 = (new cljs.core.List(null,inst_27664,null,(1),null));
var inst_27666__$1 = (new cljs.core.List(null,inst_27661,inst_27665,(2),null));
var inst_27667__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27666__$1);
var state_27732__$1 = (function (){var statearr_27747 = state_27732;
(statearr_27747[(13)] = inst_27667__$1);

(statearr_27747[(7)] = inst_27666__$1);

return statearr_27747;
})();
if(cljs.core.truth_(inst_27667__$1)){
var statearr_27748_27875 = state_27732__$1;
(statearr_27748_27875[(1)] = (6));

} else {
var statearr_27749_27876 = state_27732__$1;
(statearr_27749_27876[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (14))){
var inst_27706 = (state_27732[(10)]);
var inst_27716 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27717 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27718 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27719 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27720 = cljs.core.cons.call(null,inst_27719,inst_27706);
var inst_27721 = (new cljs.core.List(null,inst_27720,null,(1),null));
var inst_27722 = (new cljs.core.List(null,inst_27718,inst_27721,(2),null));
var inst_27723 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27717,inst_27722,null];
var inst_27724 = cljs.core.PersistentHashMap.fromArrays(inst_27716,inst_27723);
var inst_27725 = cljs.test.do_report.call(null,inst_27724);
var state_27732__$1 = state_27732;
var statearr_27750_27877 = state_27732__$1;
(statearr_27750_27877[(2)] = inst_27725);

(statearr_27750_27877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (10))){
var inst_27690 = (state_27732[(2)]);
var inst_27691 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27692 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27693 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27692,inst_27690,null];
var inst_27694 = cljs.core.PersistentHashMap.fromArrays(inst_27691,inst_27693);
var inst_27695 = cljs.test.do_report.call(null,inst_27694);
var state_27732__$1 = state_27732;
var statearr_27751_27878 = state_27732__$1;
(statearr_27751_27878[(2)] = inst_27695);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (8))){
var inst_27667 = (state_27732[(13)]);
var inst_27687 = (state_27732[(2)]);
var state_27732__$1 = (function (){var statearr_27752 = state_27732;
(statearr_27752[(14)] = inst_27687);

return statearr_27752;
})();
var statearr_27753_27879 = state_27732__$1;
(statearr_27753_27879[(2)] = inst_27667);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27754[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_27732){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_27732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object)){
var ex__15543__auto__ = e27755;
var statearr_27756_27880 = state_27732;
(statearr_27756_27880[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27881 = state_27732;
state_27732 = G__27881;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_27732){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_27732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_27757 = f__15635__auto__.call(null);
(statearr_27757[(6)] = c__15634__auto__);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.apply = (function (self__,args27649){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27649)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_27840){
var state_val_27841 = (state_27840[(1)]);
if((state_val_27841 === (7))){
var inst_27774 = (state_27840[(7)]);
var inst_27784 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27785 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27786 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27787 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27788 = cljs.core.cons.call(null,inst_27787,inst_27774);
var inst_27789 = (new cljs.core.List(null,inst_27788,null,(1),null));
var inst_27790 = (new cljs.core.List(null,inst_27786,inst_27789,(2),null));
var inst_27791 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27785,inst_27790,null];
var inst_27792 = cljs.core.PersistentHashMap.fromArrays(inst_27784,inst_27791);
var inst_27793 = cljs.test.do_report.call(null,inst_27792);
var state_27840__$1 = state_27840;
var statearr_27842_27882 = state_27840__$1;
(statearr_27842_27882[(2)] = inst_27793);

(statearr_27842_27882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (1))){
var state_27840__$1 = state_27840;
var statearr_27843_27883 = state_27840__$1;
(statearr_27843_27883[(2)] = null);

(statearr_27843_27883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27840,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27767 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.ns) (require '[cljsjs.react])");
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,(5),inst_27767);
} else {
if((state_val_27841 === (15))){
var inst_27815 = (state_27840[(8)]);
var inst_27835 = (state_27840[(2)]);
var state_27840__$1 = (function (){var statearr_27844 = state_27840;
(statearr_27844[(9)] = inst_27835);

return statearr_27844;
})();
var statearr_27845_27884 = state_27840__$1;
(statearr_27845_27884[(2)] = inst_27815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (13))){
var inst_27814 = (state_27840[(10)]);
var inst_27817 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27818 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27819 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27814);
var inst_27820 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27818,inst_27819,null];
var inst_27821 = cljs.core.PersistentHashMap.fromArrays(inst_27817,inst_27820);
var inst_27822 = cljs.test.do_report.call(null,inst_27821);
var state_27840__$1 = state_27840;
var statearr_27846_27885 = state_27840__$1;
(statearr_27846_27885[(2)] = inst_27822);

(statearr_27846_27885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (6))){
var inst_27774 = (state_27840[(7)]);
var inst_27777 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27778 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27779 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_27774);
var inst_27780 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27778,inst_27779,null];
var inst_27781 = cljs.core.PersistentHashMap.fromArrays(inst_27777,inst_27780);
var inst_27782 = cljs.test.do_report.call(null,inst_27781);
var state_27840__$1 = state_27840;
var statearr_27847_27886 = state_27840__$1;
(statearr_27847_27886[(2)] = inst_27782);

(statearr_27847_27886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (3))){
var inst_27758 = (state_27840[(2)]);
var inst_27759 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27760 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.ns) (require '[cljsjs.react])")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),null], null));
var inst_27761 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27760,inst_27758,null];
var inst_27762 = cljs.core.PersistentHashMap.fromArrays(inst_27759,inst_27761);
var inst_27763 = cljs.test.do_report.call(null,inst_27762);
var state_27840__$1 = state_27840;
var statearr_27848_27887 = state_27840__$1;
(statearr_27848_27887[(2)] = inst_27763);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (12))){
var inst_27815 = (state_27840[(8)]);
var inst_27814 = (state_27840[(10)]);
var inst_27809 = (state_27840[(2)]);
var inst_27810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27811 = [new cljs.core.Keyword(null,"ok","ok",967785236),true];
var inst_27812 = (new cljs.core.PersistentVector(null,2,(5),inst_27810,inst_27811,null));
var inst_27813 = (new cljs.core.List(null,inst_27812,null,(1),null));
var inst_27814__$1 = (new cljs.core.List(null,inst_27809,inst_27813,(2),null));
var inst_27815__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27814__$1);
var state_27840__$1 = (function (){var statearr_27849 = state_27840;
(statearr_27849[(8)] = inst_27815__$1);

(statearr_27849[(10)] = inst_27814__$1);

return statearr_27849;
})();
if(cljs.core.truth_(inst_27815__$1)){
var statearr_27850_27888 = state_27840__$1;
(statearr_27850_27888[(1)] = (13));

} else {
var statearr_27851_27889 = state_27840__$1;
(statearr_27851_27889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (2))){
var inst_27797 = (state_27840[(2)]);
var state_27840__$1 = (function (){var statearr_27852 = state_27840;
(statearr_27852[(11)] = inst_27797);

return statearr_27852;
})();
var statearr_27853_27890 = state_27840__$1;
(statearr_27853_27890[(2)] = null);

(statearr_27853_27890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27840,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_27807 = klipse_clj.lang.clojure.the_eval.call(null,"(some? js/React)");
var state_27840__$1 = state_27840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27840__$1,(12),inst_27807);
} else {
if((state_val_27841 === (9))){
var inst_27837 = (state_27840[(2)]);
var inst_27838 = done.call(null);
var state_27840__$1 = (function (){var statearr_27854 = state_27840;
(statearr_27854[(12)] = inst_27837);

return statearr_27854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27840__$1,inst_27838);
} else {
if((state_val_27841 === (5))){
var inst_27774 = (state_27840[(7)]);
var inst_27775 = (state_27840[(13)]);
var inst_27769 = (state_27840[(2)]);
var inst_27770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27771 = [new cljs.core.Keyword(null,"ok","ok",967785236),null];
var inst_27772 = (new cljs.core.PersistentVector(null,2,(5),inst_27770,inst_27771,null));
var inst_27773 = (new cljs.core.List(null,inst_27772,null,(1),null));
var inst_27774__$1 = (new cljs.core.List(null,inst_27769,inst_27773,(2),null));
var inst_27775__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_27774__$1);
var state_27840__$1 = (function (){var statearr_27855 = state_27840;
(statearr_27855[(7)] = inst_27774__$1);

(statearr_27855[(13)] = inst_27775__$1);

return statearr_27855;
})();
if(cljs.core.truth_(inst_27775__$1)){
var statearr_27856_27891 = state_27840__$1;
(statearr_27856_27891[(1)] = (6));

} else {
var statearr_27857_27892 = state_27840__$1;
(statearr_27857_27892[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (14))){
var inst_27814 = (state_27840[(10)]);
var inst_27824 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27825 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27826 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27827 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_27828 = cljs.core.cons.call(null,inst_27827,inst_27814);
var inst_27829 = (new cljs.core.List(null,inst_27828,null,(1),null));
var inst_27830 = (new cljs.core.List(null,inst_27826,inst_27829,(2),null));
var inst_27831 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27825,inst_27830,null];
var inst_27832 = cljs.core.PersistentHashMap.fromArrays(inst_27824,inst_27831);
var inst_27833 = cljs.test.do_report.call(null,inst_27832);
var state_27840__$1 = state_27840;
var statearr_27858_27893 = state_27840__$1;
(statearr_27858_27893[(2)] = inst_27833);

(statearr_27858_27893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (10))){
var inst_27798 = (state_27840[(2)]);
var inst_27799 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27800 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(some? js/React)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null));
var inst_27801 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27800,inst_27798,null];
var inst_27802 = cljs.core.PersistentHashMap.fromArrays(inst_27799,inst_27801);
var inst_27803 = cljs.test.do_report.call(null,inst_27802);
var state_27840__$1 = state_27840;
var statearr_27859_27894 = state_27840__$1;
(statearr_27859_27894[(2)] = inst_27803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27841 === (8))){
var inst_27775 = (state_27840[(13)]);
var inst_27795 = (state_27840[(2)]);
var state_27840__$1 = (function (){var statearr_27860 = state_27840;
(statearr_27860[(14)] = inst_27795);

return statearr_27860;
})();
var statearr_27861_27895 = state_27840__$1;
(statearr_27861_27895[(2)] = inst_27775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_27862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27862[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_27862[(1)] = (1));

return statearr_27862;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_27840){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_27840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e27863){if((e27863 instanceof Object)){
var ex__15543__auto__ = e27863;
var statearr_27864_27896 = state_27840;
(statearr_27864_27896[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27897 = state_27840;
state_27840 = G__27897;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_27840){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_27840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_27865 = f__15635__auto__.call(null);
(statearr_27865[(6)] = c__15634__auto__);

return statearr_27865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27647","meta27647",1880390610,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test27646.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test27646.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test27646";

klipse_clj.eval_test.t_klipse_clj$eval_test27646.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test27646");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test27646.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test27646 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test27646(meta27647){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test27646(meta27647));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test27646(null));
});

klipse_clj.eval_test.test_eval_require_cljsjs.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_require_cljsjs;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-require-cljsjs","klipse-clj.eval-test/test-eval-require-cljsjs",-1813493781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-require-cljsjs","test-eval-require-cljsjs",-1389536426,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",34,1,142,142,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_require_cljsjs)?klipse_clj.eval_test.test_eval_require_cljsjs.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_spec_errors = (function klipse_clj$eval_test$test_eval_spec_errors(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_spec_errors.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_spec_errors.cljs$lang$test = (function (){
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test27898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test27898 = (function (meta27899){
this.meta27899 = meta27899;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27900,meta27899__$1){
var self__ = this;
var _27900__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test27898(meta27899__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27900){
var self__ = this;
var _27900__$1 = this;
return self__.meta27899;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_27942){
var state_val_27943 = (state_27942[(1)]);
if((state_val_27943 === (1))){
var state_27942__$1 = state_27942;
var statearr_27944_28014 = state_27942__$1;
(statearr_27944_28014[(2)] = null);

(statearr_27944_28014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (2))){
var inst_27939 = (state_27942[(2)]);
var inst_27940 = done.call(null);
var state_27942__$1 = (function (){var statearr_27945 = state_27942;
(statearr_27945[(7)] = inst_27939);

return statearr_27945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27942__$1,inst_27940);
} else {
if((state_val_27943 === (3))){
var inst_27902 = (state_27942[(2)]);
var inst_27903 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27904 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27905 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27904,inst_27902,null];
var inst_27906 = cljs.core.PersistentHashMap.fromArrays(inst_27903,inst_27905);
var inst_27907 = cljs.test.do_report.call(null,inst_27906);
var state_27942__$1 = state_27942;
var statearr_27946_28015 = state_27942__$1;
(statearr_27946_28015[(2)] = inst_27907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27942,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27911 = klipse_clj.lang.clojure.the_eval.call(null,"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)");
var state_27942__$1 = state_27942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27942__$1,(5),inst_27911);
} else {
if((state_val_27943 === (5))){
var inst_27917 = (state_27942[(8)]);
var inst_27916 = (state_27942[(9)]);
var inst_27913 = (state_27942[(2)]);
var inst_27914 = cljs.core.first.call(null,inst_27913);
var inst_27915 = (new cljs.core.List(null,inst_27914,null,(1),null));
var inst_27916__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_27915,(2),null));
var inst_27917__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27916__$1);
var state_27942__$1 = (function (){var statearr_27947 = state_27942;
(statearr_27947[(8)] = inst_27917__$1);

(statearr_27947[(9)] = inst_27916__$1);

return statearr_27947;
})();
if(cljs.core.truth_(inst_27917__$1)){
var statearr_27948_28016 = state_27942__$1;
(statearr_27948_28016[(1)] = (6));

} else {
var statearr_27949_28017 = state_27942__$1;
(statearr_27949_28017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (6))){
var inst_27916 = (state_27942[(9)]);
var inst_27919 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27920 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27921 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27916);
var inst_27922 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27920,inst_27921,null];
var inst_27923 = cljs.core.PersistentHashMap.fromArrays(inst_27919,inst_27922);
var inst_27924 = cljs.test.do_report.call(null,inst_27923);
var state_27942__$1 = state_27942;
var statearr_27950_28018 = state_27942__$1;
(statearr_27950_28018[(2)] = inst_27924);

(statearr_27950_28018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (7))){
var inst_27916 = (state_27942[(9)]);
var inst_27926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27927 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27928 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27929 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27930 = cljs.core.cons.call(null,inst_27929,inst_27916);
var inst_27931 = (new cljs.core.List(null,inst_27930,null,(1),null));
var inst_27932 = (new cljs.core.List(null,inst_27928,inst_27931,(2),null));
var inst_27933 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27927,inst_27932,null];
var inst_27934 = cljs.core.PersistentHashMap.fromArrays(inst_27926,inst_27933);
var inst_27935 = cljs.test.do_report.call(null,inst_27934);
var state_27942__$1 = state_27942;
var statearr_27951_28019 = state_27942__$1;
(statearr_27951_28019[(2)] = inst_27935);

(statearr_27951_28019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27943 === (8))){
var inst_27917 = (state_27942[(8)]);
var inst_27937 = (state_27942[(2)]);
var state_27942__$1 = (function (){var statearr_27952 = state_27942;
(statearr_27952[(10)] = inst_27937);

return statearr_27952;
})();
var statearr_27953_28020 = state_27942__$1;
(statearr_27953_28020[(2)] = inst_27917);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27942__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_27954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27954[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_27954[(1)] = (1));

return statearr_27954;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_27942){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_27942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e27955){if((e27955 instanceof Object)){
var ex__15543__auto__ = e27955;
var statearr_27956_28021 = state_27942;
(statearr_27956_28021[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28022 = state_27942;
state_27942 = G__28022;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_27942){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_27942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_27957 = f__15635__auto__.call(null);
(statearr_27957[(6)] = c__15634__auto__);

return statearr_27957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.apply = (function (self__,args27901){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27901)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_27998){
var state_val_27999 = (state_27998[(1)]);
if((state_val_27999 === (1))){
var state_27998__$1 = state_27998;
var statearr_28000_28023 = state_27998__$1;
(statearr_28000_28023[(2)] = null);

(statearr_28000_28023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (2))){
var inst_27995 = (state_27998[(2)]);
var inst_27996 = done.call(null);
var state_27998__$1 = (function (){var statearr_28001 = state_27998;
(statearr_28001[(7)] = inst_27995);

return statearr_28001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27998__$1,inst_27996);
} else {
if((state_val_27999 === (3))){
var inst_27958 = (state_27998[(2)]);
var inst_27959 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27960 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27961 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27960,inst_27958,null];
var inst_27962 = cljs.core.PersistentHashMap.fromArrays(inst_27959,inst_27961);
var inst_27963 = cljs.test.do_report.call(null,inst_27962);
var state_27998__$1 = state_27998;
var statearr_28002_28024 = state_27998__$1;
(statearr_28002_28024[(2)] = inst_27963);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27998,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27967 = klipse_clj.lang.clojure.the_eval.call(null,"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)");
var state_27998__$1 = state_27998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27998__$1,(5),inst_27967);
} else {
if((state_val_27999 === (5))){
var inst_27973 = (state_27998[(8)]);
var inst_27972 = (state_27998[(9)]);
var inst_27969 = (state_27998[(2)]);
var inst_27970 = cljs.core.first.call(null,inst_27969);
var inst_27971 = (new cljs.core.List(null,inst_27970,null,(1),null));
var inst_27972__$1 = (new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),inst_27971,(2),null));
var inst_27973__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27972__$1);
var state_27998__$1 = (function (){var statearr_28003 = state_27998;
(statearr_28003[(8)] = inst_27973__$1);

(statearr_28003[(9)] = inst_27972__$1);

return statearr_28003;
})();
if(cljs.core.truth_(inst_27973__$1)){
var statearr_28004_28025 = state_27998__$1;
(statearr_28004_28025[(1)] = (6));

} else {
var statearr_28005_28026 = state_27998__$1;
(statearr_28005_28026[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (6))){
var inst_27972 = (state_27998[(9)]);
var inst_27975 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27976 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27977 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27972);
var inst_27978 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27976,inst_27977,null];
var inst_27979 = cljs.core.PersistentHashMap.fromArrays(inst_27975,inst_27978);
var inst_27980 = cljs.test.do_report.call(null,inst_27979);
var state_27998__$1 = state_27998;
var statearr_28006_28027 = state_27998__$1;
(statearr_28006_28027[(2)] = inst_27980);

(statearr_28006_28027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (7))){
var inst_27972 = (state_27998[(9)]);
var inst_27982 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27983 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(require '[clojure.spec.alpha :as s]\n             '[cljs.spec.test.alpha :as stest]\n             '[clojure.spec.gen.alpha :as gen])\n         (defn foo [x] x)\n        (s/fdef foo :args (s/cat :x ::x)\n                :ret string?)\n         (stest/instrument `foo) (foo :a)"))));
var inst_27984 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27985 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27986 = cljs.core.cons.call(null,inst_27985,inst_27972);
var inst_27987 = (new cljs.core.List(null,inst_27986,null,(1),null));
var inst_27988 = (new cljs.core.List(null,inst_27984,inst_27987,(2),null));
var inst_27989 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27983,inst_27988,null];
var inst_27990 = cljs.core.PersistentHashMap.fromArrays(inst_27982,inst_27989);
var inst_27991 = cljs.test.do_report.call(null,inst_27990);
var state_27998__$1 = state_27998;
var statearr_28007_28028 = state_27998__$1;
(statearr_28007_28028[(2)] = inst_27991);

(statearr_28007_28028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27999 === (8))){
var inst_27973 = (state_27998[(8)]);
var inst_27993 = (state_27998[(2)]);
var state_27998__$1 = (function (){var statearr_28008 = state_27998;
(statearr_28008[(10)] = inst_27993);

return statearr_28008;
})();
var statearr_28009_28029 = state_27998__$1;
(statearr_28009_28029[(2)] = inst_27973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27998__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28010[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28010[(1)] = (1));

return statearr_28010;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_27998){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_27998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object)){
var ex__15543__auto__ = e28011;
var statearr_28012_28030 = state_27998;
(statearr_28012_28030[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28031 = state_27998;
state_27998 = G__28031;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_27998){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_27998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_28013 = f__15635__auto__.call(null);
(statearr_28013[(6)] = c__15634__auto__);

return statearr_28013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27899","meta27899",1420408249,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test27898.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test27898.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test27898";

klipse_clj.eval_test.t_klipse_clj$eval_test27898.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test27898");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test27898.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test27898 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test27898(meta27899){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test27898(meta27899));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test27898(null));
});

klipse_clj.eval_test.test_eval_spec_errors.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_spec_errors;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-spec-errors","klipse-clj.eval-test/test-eval-spec-errors",-622145199,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-spec-errors","test-eval-spec-errors",-265426180,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",31,1,151,151,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_spec_errors)?klipse_clj.eval_test.test_eval_spec_errors.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_with_types_4 = (function klipse_clj$eval_test$test_eval_with_types_4(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_with_types_4.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_with_types_4.cljs$lang$test = (function (){
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test28032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test28032 = (function (meta28033){
this.meta28033 = meta28033;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28034,meta28033__$1){
var self__ = this;
var _28034__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28032(meta28033__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28034){
var self__ = this;
var _28034__$1 = this;
return self__.meta28033;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_28077){
var state_val_28078 = (state_28077[(1)]);
if((state_val_28078 === (1))){
var state_28077__$1 = state_28077;
var statearr_28079_28150 = state_28077__$1;
(statearr_28079_28150[(2)] = null);

(statearr_28079_28150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (2))){
var inst_28074 = (state_28077[(2)]);
var inst_28075 = done.call(null);
var state_28077__$1 = (function (){var statearr_28080 = state_28077;
(statearr_28080[(7)] = inst_28074);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28077__$1,inst_28075);
} else {
if((state_val_28078 === (3))){
var inst_28036 = (state_28077[(2)]);
var inst_28037 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28038 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28039 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28038,inst_28036,null];
var inst_28040 = cljs.core.PersistentHashMap.fromArrays(inst_28037,inst_28039);
var inst_28041 = cljs.test.do_report.call(null,inst_28040);
var state_28077__$1 = state_28077;
var statearr_28081_28151 = state_28077__$1;
(statearr_28081_28151[(2)] = inst_28041);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28077,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28045 = klipse_clj.lang.clojure.the_eval.call(null,"(type 1)");
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28077__$1,(5),inst_28045);
} else {
if((state_val_28078 === (5))){
var inst_28052 = (state_28077[(8)]);
var inst_28051 = (state_28077[(9)]);
var inst_28047 = (state_28077[(2)]);
var inst_28048 = cljs.core.second.call(null,inst_28047);
var inst_28049 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28048);
var inst_28050 = (new cljs.core.List(null,"function Number() {[native code]}",null,(1),null));
var inst_28051__$1 = (new cljs.core.List(null,inst_28049,inst_28050,(2),null));
var inst_28052__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_28051__$1);
var state_28077__$1 = (function (){var statearr_28082 = state_28077;
(statearr_28082[(8)] = inst_28052__$1);

(statearr_28082[(9)] = inst_28051__$1);

return statearr_28082;
})();
if(cljs.core.truth_(inst_28052__$1)){
var statearr_28083_28152 = state_28077__$1;
(statearr_28083_28152[(1)] = (6));

} else {
var statearr_28084_28153 = state_28077__$1;
(statearr_28084_28153[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (6))){
var inst_28051 = (state_28077[(9)]);
var inst_28054 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28055 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28056 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_28051);
var inst_28057 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28055,inst_28056,null];
var inst_28058 = cljs.core.PersistentHashMap.fromArrays(inst_28054,inst_28057);
var inst_28059 = cljs.test.do_report.call(null,inst_28058);
var state_28077__$1 = state_28077;
var statearr_28085_28154 = state_28077__$1;
(statearr_28085_28154[(2)] = inst_28059);

(statearr_28085_28154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (7))){
var inst_28051 = (state_28077[(9)]);
var inst_28061 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28062 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28063 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28064 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_28065 = cljs.core.cons.call(null,inst_28064,inst_28051);
var inst_28066 = (new cljs.core.List(null,inst_28065,null,(1),null));
var inst_28067 = (new cljs.core.List(null,inst_28063,inst_28066,(2),null));
var inst_28068 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28062,inst_28067,null];
var inst_28069 = cljs.core.PersistentHashMap.fromArrays(inst_28061,inst_28068);
var inst_28070 = cljs.test.do_report.call(null,inst_28069);
var state_28077__$1 = state_28077;
var statearr_28086_28155 = state_28077__$1;
(statearr_28086_28155[(2)] = inst_28070);

(statearr_28086_28155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (8))){
var inst_28052 = (state_28077[(8)]);
var inst_28072 = (state_28077[(2)]);
var state_28077__$1 = (function (){var statearr_28087 = state_28077;
(statearr_28087[(10)] = inst_28072);

return statearr_28087;
})();
var statearr_28088_28156 = state_28077__$1;
(statearr_28088_28156[(2)] = inst_28052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28089[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28089[(1)] = (1));

return statearr_28089;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28077){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28090){if((e28090 instanceof Object)){
var ex__15543__auto__ = e28090;
var statearr_28091_28157 = state_28077;
(statearr_28091_28157[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28158 = state_28077;
state_28077 = G__28158;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_28092 = f__15635__auto__.call(null);
(statearr_28092[(6)] = c__15634__auto__);

return statearr_28092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.apply = (function (self__,args28035){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28035)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_28134){
var state_val_28135 = (state_28134[(1)]);
if((state_val_28135 === (1))){
var state_28134__$1 = state_28134;
var statearr_28136_28159 = state_28134__$1;
(statearr_28136_28159[(2)] = null);

(statearr_28136_28159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (2))){
var inst_28131 = (state_28134[(2)]);
var inst_28132 = done.call(null);
var state_28134__$1 = (function (){var statearr_28137 = state_28134;
(statearr_28137[(7)] = inst_28131);

return statearr_28137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28134__$1,inst_28132);
} else {
if((state_val_28135 === (3))){
var inst_28093 = (state_28134[(2)]);
var inst_28094 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28095 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28096 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28095,inst_28093,null];
var inst_28097 = cljs.core.PersistentHashMap.fromArrays(inst_28094,inst_28096);
var inst_28098 = cljs.test.do_report.call(null,inst_28097);
var state_28134__$1 = state_28134;
var statearr_28138_28160 = state_28134__$1;
(statearr_28138_28160[(2)] = inst_28098);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28134__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28134,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28102 = klipse_clj.lang.clojure.the_eval.call(null,"(type 1)");
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28134__$1,(5),inst_28102);
} else {
if((state_val_28135 === (5))){
var inst_28108 = (state_28134[(8)]);
var inst_28109 = (state_28134[(9)]);
var inst_28104 = (state_28134[(2)]);
var inst_28105 = cljs.core.second.call(null,inst_28104);
var inst_28106 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28105);
var inst_28107 = (new cljs.core.List(null,"function Number() {[native code]}",null,(1),null));
var inst_28108__$1 = (new cljs.core.List(null,inst_28106,inst_28107,(2),null));
var inst_28109__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_28108__$1);
var state_28134__$1 = (function (){var statearr_28139 = state_28134;
(statearr_28139[(8)] = inst_28108__$1);

(statearr_28139[(9)] = inst_28109__$1);

return statearr_28139;
})();
if(cljs.core.truth_(inst_28109__$1)){
var statearr_28140_28161 = state_28134__$1;
(statearr_28140_28161[(1)] = (6));

} else {
var statearr_28141_28162 = state_28134__$1;
(statearr_28141_28162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (6))){
var inst_28108 = (state_28134[(8)]);
var inst_28111 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28112 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28113 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_28108);
var inst_28114 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28112,inst_28113,null];
var inst_28115 = cljs.core.PersistentHashMap.fromArrays(inst_28111,inst_28114);
var inst_28116 = cljs.test.do_report.call(null,inst_28115);
var state_28134__$1 = state_28134;
var statearr_28142_28163 = state_28134__$1;
(statearr_28142_28163[(2)] = inst_28116);

(statearr_28142_28163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (7))){
var inst_28108 = (state_28134[(8)]);
var inst_28118 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28119 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(type 1)")))),"function Number() {[native code]}");
var inst_28120 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28121 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_28122 = cljs.core.cons.call(null,inst_28121,inst_28108);
var inst_28123 = (new cljs.core.List(null,inst_28122,null,(1),null));
var inst_28124 = (new cljs.core.List(null,inst_28120,inst_28123,(2),null));
var inst_28125 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28119,inst_28124,null];
var inst_28126 = cljs.core.PersistentHashMap.fromArrays(inst_28118,inst_28125);
var inst_28127 = cljs.test.do_report.call(null,inst_28126);
var state_28134__$1 = state_28134;
var statearr_28143_28164 = state_28134__$1;
(statearr_28143_28164[(2)] = inst_28127);

(statearr_28143_28164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (8))){
var inst_28109 = (state_28134[(9)]);
var inst_28129 = (state_28134[(2)]);
var state_28134__$1 = (function (){var statearr_28144 = state_28134;
(statearr_28144[(10)] = inst_28129);

return statearr_28144;
})();
var statearr_28145_28165 = state_28134__$1;
(statearr_28145_28165[(2)] = inst_28109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28134__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28146 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28146[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28146[(1)] = (1));

return statearr_28146;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28134){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28147){if((e28147 instanceof Object)){
var ex__15543__auto__ = e28147;
var statearr_28148_28166 = state_28134;
(statearr_28148_28166[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28134;
state_28134 = G__28167;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28134){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_28149 = f__15635__auto__.call(null);
(statearr_28149[(6)] = c__15634__auto__);

return statearr_28149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28033","meta28033",-1439731159,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test28032.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test28032.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test28032";

klipse_clj.eval_test.t_klipse_clj$eval_test28032.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test28032");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test28032.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test28032 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test28032(meta28033){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28032(meta28033));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test28032(null));
});

klipse_clj.eval_test.test_eval_with_types_4.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_with_types_4;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-with-types-4","klipse-clj.eval-test/test-eval-with-types-4",617195539,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-with-types-4","test-eval-with-types-4",1938996592,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",32,1,165,165,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_with_types_4)?klipse_clj.eval_test.test_eval_with_types_4.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_macro_chars = (function klipse_clj$eval_test$test_eval_macro_chars(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_macro_chars.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_macro_chars.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test28168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test28168 = (function (meta28169){
this.meta28169 = meta28169;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28170,meta28169__$1){
var self__ = this;
var _28170__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28168(meta28169__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28170){
var self__ = this;
var _28170__$1 = this;
return self__.meta28169;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_28330){
var state_val_28331 = (state_28330[(1)]);
if((state_val_28331 === (7))){
var inst_28187 = (state_28330[(7)]);
var inst_28197 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28198 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28199 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28200 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28201 = cljs.core.cons.call(null,inst_28200,inst_28187);
var inst_28202 = (new cljs.core.List(null,inst_28201,null,(1),null));
var inst_28203 = (new cljs.core.List(null,inst_28199,inst_28202,(2),null));
var inst_28204 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28198,inst_28203,null];
var inst_28205 = cljs.core.PersistentHashMap.fromArrays(inst_28197,inst_28204);
var inst_28206 = cljs.test.do_report.call(null,inst_28205);
var state_28330__$1 = state_28330;
var statearr_28332_28580 = state_28330__$1;
(statearr_28332_28580[(2)] = inst_28206);

(statearr_28332_28580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (20))){
var inst_28265 = (state_28330[(8)]);
var inst_28268 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28269 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28270 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28265);
var inst_28271 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28269,inst_28270,null];
var inst_28272 = cljs.core.PersistentHashMap.fromArrays(inst_28268,inst_28271);
var inst_28273 = cljs.test.do_report.call(null,inst_28272);
var state_28330__$1 = state_28330;
var statearr_28333_28581 = state_28330__$1;
(statearr_28333_28581[(2)] = inst_28273);

(statearr_28333_28581[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (27))){
var inst_28304 = (state_28330[(9)]);
var inst_28307 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28308 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28309 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28304);
var inst_28310 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28308,inst_28309,null];
var inst_28311 = cljs.core.PersistentHashMap.fromArrays(inst_28307,inst_28310);
var inst_28312 = cljs.test.do_report.call(null,inst_28311);
var state_28330__$1 = state_28330;
var statearr_28334_28582 = state_28330__$1;
(statearr_28334_28582[(2)] = inst_28312);

(statearr_28334_28582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (1))){
var state_28330__$1 = state_28330;
var statearr_28335_28583 = state_28330__$1;
(statearr_28335_28583[(2)] = null);

(statearr_28335_28583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (24))){
var inst_28289 = (state_28330[(2)]);
var inst_28290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28292 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28291,inst_28289,null];
var inst_28293 = cljs.core.PersistentHashMap.fromArrays(inst_28290,inst_28292);
var inst_28294 = cljs.test.do_report.call(null,inst_28293);
var state_28330__$1 = state_28330;
var statearr_28336_28584 = state_28330__$1;
(statearr_28336_28584[(2)] = inst_28294);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28330,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28181 = klipse_clj.lang.clojure.the_eval.call(null,"#queue [1]");
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(5),inst_28181);
} else {
if((state_val_28331 === (15))){
var inst_28227 = (state_28330[(10)]);
var inst_28247 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28337 = state_28330;
(statearr_28337[(11)] = inst_28247);

return statearr_28337;
})();
var statearr_28338_28585 = state_28330__$1;
(statearr_28338_28585[(2)] = inst_28227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (21))){
var inst_28265 = (state_28330[(8)]);
var inst_28275 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28276 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28277 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28278 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28279 = cljs.core.cons.call(null,inst_28278,inst_28265);
var inst_28280 = (new cljs.core.List(null,inst_28279,null,(1),null));
var inst_28281 = (new cljs.core.List(null,inst_28277,inst_28280,(2),null));
var inst_28282 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28276,inst_28281,null];
var inst_28283 = cljs.core.PersistentHashMap.fromArrays(inst_28275,inst_28282);
var inst_28284 = cljs.test.do_report.call(null,inst_28283);
var state_28330__$1 = state_28330;
var statearr_28339_28586 = state_28330__$1;
(statearr_28339_28586[(2)] = inst_28284);

(statearr_28339_28586[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (13))){
var inst_28226 = (state_28330[(12)]);
var inst_28229 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28230 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28231 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28226);
var inst_28232 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28230,inst_28231,null];
var inst_28233 = cljs.core.PersistentHashMap.fromArrays(inst_28229,inst_28232);
var inst_28234 = cljs.test.do_report.call(null,inst_28233);
var state_28330__$1 = state_28330;
var statearr_28340_28587 = state_28330__$1;
(statearr_28340_28587[(2)] = inst_28234);

(statearr_28340_28587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (22))){
var inst_28266 = (state_28330[(13)]);
var inst_28286 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28341 = state_28330;
(statearr_28341[(14)] = inst_28286);

return statearr_28341;
})();
var statearr_28342_28588 = state_28330__$1;
(statearr_28342_28588[(2)] = inst_28266);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (29))){
var inst_28305 = (state_28330[(15)]);
var inst_28325 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28343 = state_28330;
(statearr_28343[(16)] = inst_28325);

return statearr_28343;
})();
var statearr_28344_28589 = state_28330__$1;
(statearr_28344_28589[(2)] = inst_28305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (6))){
var inst_28187 = (state_28330[(7)]);
var inst_28190 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28191 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28192 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28187);
var inst_28193 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28191,inst_28192,null];
var inst_28194 = cljs.core.PersistentHashMap.fromArrays(inst_28190,inst_28193);
var inst_28195 = cljs.test.do_report.call(null,inst_28194);
var state_28330__$1 = state_28330;
var statearr_28345_28590 = state_28330__$1;
(statearr_28345_28590[(2)] = inst_28195);

(statearr_28345_28590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (28))){
var inst_28304 = (state_28330[(9)]);
var inst_28314 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28315 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28316 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28317 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28318 = cljs.core.cons.call(null,inst_28317,inst_28304);
var inst_28319 = (new cljs.core.List(null,inst_28318,null,(1),null));
var inst_28320 = (new cljs.core.List(null,inst_28316,inst_28319,(2),null));
var inst_28321 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28315,inst_28320,null];
var inst_28322 = cljs.core.PersistentHashMap.fromArrays(inst_28314,inst_28321);
var inst_28323 = cljs.test.do_report.call(null,inst_28322);
var state_28330__$1 = state_28330;
var statearr_28346_28591 = state_28330__$1;
(statearr_28346_28591[(2)] = inst_28323);

(statearr_28346_28591[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28330,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_28298 = klipse_clj.lang.clojure.the_eval.call(null,"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"");
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(26),inst_28298);
} else {
if((state_val_28331 === (17))){
var inst_28250 = (state_28330[(2)]);
var inst_28251 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28252 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28253 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28252,inst_28250,null];
var inst_28254 = cljs.core.PersistentHashMap.fromArrays(inst_28251,inst_28253);
var inst_28255 = cljs.test.do_report.call(null,inst_28254);
var state_28330__$1 = state_28330;
var statearr_28347_28592 = state_28330__$1;
(statearr_28347_28592[(2)] = inst_28255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (3))){
var inst_28172 = (state_28330[(2)]);
var inst_28173 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28174 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28175 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28174,inst_28172,null];
var inst_28176 = cljs.core.PersistentHashMap.fromArrays(inst_28173,inst_28175);
var inst_28177 = cljs.test.do_report.call(null,inst_28176);
var state_28330__$1 = state_28330;
var statearr_28348_28593 = state_28330__$1;
(statearr_28348_28593[(2)] = inst_28177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (12))){
var inst_28227 = (state_28330[(10)]);
var inst_28226 = (state_28330[(12)]);
var inst_28222 = (state_28330[(2)]);
var inst_28223 = cljs.core.second.call(null,inst_28222);
var inst_28224 = cljs.core.type.call(null,inst_28223);
var inst_28225 = (new cljs.core.List(null,Array,null,(1),null));
var inst_28226__$1 = (new cljs.core.List(null,inst_28224,inst_28225,(2),null));
var inst_28227__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28226__$1);
var state_28330__$1 = (function (){var statearr_28349 = state_28330;
(statearr_28349[(10)] = inst_28227__$1);

(statearr_28349[(12)] = inst_28226__$1);

return statearr_28349;
})();
if(cljs.core.truth_(inst_28227__$1)){
var statearr_28350_28594 = state_28330__$1;
(statearr_28350_28594[(1)] = (13));

} else {
var statearr_28351_28595 = state_28330__$1;
(statearr_28351_28595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (2))){
var inst_28210 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28352 = state_28330;
(statearr_28352[(17)] = inst_28210);

return statearr_28352;
})();
var statearr_28353_28596 = state_28330__$1;
(statearr_28353_28596[(2)] = null);

(statearr_28353_28596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (23))){
var inst_28327 = (state_28330[(2)]);
var inst_28328 = done.call(null);
var state_28330__$1 = (function (){var statearr_28354 = state_28330;
(statearr_28354[(18)] = inst_28327);

return statearr_28354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28330__$1,inst_28328);
} else {
if((state_val_28331 === (19))){
var inst_28265 = (state_28330[(8)]);
var inst_28266 = (state_28330[(13)]);
var inst_28261 = (state_28330[(2)]);
var inst_28262 = cljs.core.second.call(null,inst_28261);
var inst_28263 = cljs.core.type.call(null,inst_28262);
var inst_28264 = (new cljs.core.List(null,Date,null,(1),null));
var inst_28265__$1 = (new cljs.core.List(null,inst_28263,inst_28264,(2),null));
var inst_28266__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28265__$1);
var state_28330__$1 = (function (){var statearr_28355 = state_28330;
(statearr_28355[(8)] = inst_28265__$1);

(statearr_28355[(13)] = inst_28266__$1);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28266__$1)){
var statearr_28356_28597 = state_28330__$1;
(statearr_28356_28597[(1)] = (20));

} else {
var statearr_28357_28598 = state_28330__$1;
(statearr_28357_28598[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28330,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_28220 = klipse_clj.lang.clojure.the_eval.call(null,"#js []");
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(12),inst_28220);
} else {
if((state_val_28331 === (9))){
var inst_28249 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28358 = state_28330;
(statearr_28358[(19)] = inst_28249);

return statearr_28358;
})();
var statearr_28359_28599 = state_28330__$1;
(statearr_28359_28599[(2)] = null);

(statearr_28359_28599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (5))){
var inst_28188 = (state_28330[(20)]);
var inst_28187 = (state_28330[(7)]);
var inst_28183 = (state_28330[(2)]);
var inst_28184 = cljs.core.second.call(null,inst_28183);
var inst_28185 = cljs.core.type.call(null,inst_28184);
var inst_28186 = (new cljs.core.List(null,cljs.core.PersistentQueue,null,(1),null));
var inst_28187__$1 = (new cljs.core.List(null,inst_28185,inst_28186,(2),null));
var inst_28188__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28187__$1);
var state_28330__$1 = (function (){var statearr_28360 = state_28330;
(statearr_28360[(20)] = inst_28188__$1);

(statearr_28360[(7)] = inst_28187__$1);

return statearr_28360;
})();
if(cljs.core.truth_(inst_28188__$1)){
var statearr_28361_28600 = state_28330__$1;
(statearr_28361_28600[(1)] = (6));

} else {
var statearr_28362_28601 = state_28330__$1;
(statearr_28362_28601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (14))){
var inst_28226 = (state_28330[(12)]);
var inst_28236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28237 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28238 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28239 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28240 = cljs.core.cons.call(null,inst_28239,inst_28226);
var inst_28241 = (new cljs.core.List(null,inst_28240,null,(1),null));
var inst_28242 = (new cljs.core.List(null,inst_28238,inst_28241,(2),null));
var inst_28243 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28237,inst_28242,null];
var inst_28244 = cljs.core.PersistentHashMap.fromArrays(inst_28236,inst_28243);
var inst_28245 = cljs.test.do_report.call(null,inst_28244);
var state_28330__$1 = state_28330;
var statearr_28363_28602 = state_28330__$1;
(statearr_28363_28602[(2)] = inst_28245);

(statearr_28363_28602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (26))){
var inst_28304 = (state_28330[(9)]);
var inst_28305 = (state_28330[(15)]);
var inst_28300 = (state_28330[(2)]);
var inst_28301 = cljs.core.second.call(null,inst_28300);
var inst_28302 = cljs.core.type.call(null,inst_28301);
var inst_28303 = (new cljs.core.List(null,cljs.core.UUID,null,(1),null));
var inst_28304__$1 = (new cljs.core.List(null,inst_28302,inst_28303,(2),null));
var inst_28305__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28304__$1);
var state_28330__$1 = (function (){var statearr_28364 = state_28330;
(statearr_28364[(9)] = inst_28304__$1);

(statearr_28364[(15)] = inst_28305__$1);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28305__$1)){
var statearr_28365_28603 = state_28330__$1;
(statearr_28365_28603[(1)] = (27));

} else {
var statearr_28366_28604 = state_28330__$1;
(statearr_28366_28604[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (16))){
var inst_28288 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28367 = state_28330;
(statearr_28367[(21)] = inst_28288);

return statearr_28367;
})();
var statearr_28368_28605 = state_28330__$1;
(statearr_28368_28605[(2)] = null);

(statearr_28368_28605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (10))){
var inst_28211 = (state_28330[(2)]);
var inst_28212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28213 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28214 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28213,inst_28211,null];
var inst_28215 = cljs.core.PersistentHashMap.fromArrays(inst_28212,inst_28214);
var inst_28216 = cljs.test.do_report.call(null,inst_28215);
var state_28330__$1 = state_28330;
var statearr_28369_28606 = state_28330__$1;
(statearr_28369_28606[(2)] = inst_28216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28331 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28330,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_28259 = klipse_clj.lang.clojure.the_eval.call(null,"#inst \"2018-09-08\"");
var state_28330__$1 = state_28330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28330__$1,(19),inst_28259);
} else {
if((state_val_28331 === (8))){
var inst_28188 = (state_28330[(20)]);
var inst_28208 = (state_28330[(2)]);
var state_28330__$1 = (function (){var statearr_28370 = state_28330;
(statearr_28370[(22)] = inst_28208);

return statearr_28370;
})();
var statearr_28371_28607 = state_28330__$1;
(statearr_28371_28607[(2)] = inst_28188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28372[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28372[(1)] = (1));

return statearr_28372;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28330){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28373){if((e28373 instanceof Object)){
var ex__15543__auto__ = e28373;
var statearr_28374_28608 = state_28330;
(statearr_28374_28608[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28609 = state_28330;
state_28330 = G__28609;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28330){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_28375 = f__15635__auto__.call(null);
(statearr_28375[(6)] = c__15634__auto__);

return statearr_28375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.apply = (function (self__,args28171){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28171)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_28534){
var state_val_28535 = (state_28534[(1)]);
if((state_val_28535 === (7))){
var inst_28391 = (state_28534[(7)]);
var inst_28401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28403 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28404 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28405 = cljs.core.cons.call(null,inst_28404,inst_28391);
var inst_28406 = (new cljs.core.List(null,inst_28405,null,(1),null));
var inst_28407 = (new cljs.core.List(null,inst_28403,inst_28406,(2),null));
var inst_28408 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28402,inst_28407,null];
var inst_28409 = cljs.core.PersistentHashMap.fromArrays(inst_28401,inst_28408);
var inst_28410 = cljs.test.do_report.call(null,inst_28409);
var state_28534__$1 = state_28534;
var statearr_28536_28610 = state_28534__$1;
(statearr_28536_28610[(2)] = inst_28410);

(statearr_28536_28610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (20))){
var inst_28469 = (state_28534[(8)]);
var inst_28472 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28473 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28474 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28469);
var inst_28475 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28473,inst_28474,null];
var inst_28476 = cljs.core.PersistentHashMap.fromArrays(inst_28472,inst_28475);
var inst_28477 = cljs.test.do_report.call(null,inst_28476);
var state_28534__$1 = state_28534;
var statearr_28537_28611 = state_28534__$1;
(statearr_28537_28611[(2)] = inst_28477);

(statearr_28537_28611[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (27))){
var inst_28508 = (state_28534[(9)]);
var inst_28511 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28512 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28513 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28508);
var inst_28514 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28512,inst_28513,null];
var inst_28515 = cljs.core.PersistentHashMap.fromArrays(inst_28511,inst_28514);
var inst_28516 = cljs.test.do_report.call(null,inst_28515);
var state_28534__$1 = state_28534;
var statearr_28538_28612 = state_28534__$1;
(statearr_28538_28612[(2)] = inst_28516);

(statearr_28538_28612[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (1))){
var state_28534__$1 = state_28534;
var statearr_28539_28613 = state_28534__$1;
(statearr_28539_28613[(2)] = null);

(statearr_28539_28613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (24))){
var inst_28493 = (state_28534[(2)]);
var inst_28494 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28495 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28496 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28495,inst_28493,null];
var inst_28497 = cljs.core.PersistentHashMap.fromArrays(inst_28494,inst_28496);
var inst_28498 = cljs.test.do_report.call(null,inst_28497);
var state_28534__$1 = state_28534;
var statearr_28540_28614 = state_28534__$1;
(statearr_28540_28614[(2)] = inst_28498);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28534,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28385 = klipse_clj.lang.clojure.the_eval.call(null,"#queue [1]");
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(5),inst_28385);
} else {
if((state_val_28535 === (15))){
var inst_28431 = (state_28534[(10)]);
var inst_28451 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28541 = state_28534;
(statearr_28541[(11)] = inst_28451);

return statearr_28541;
})();
var statearr_28542_28615 = state_28534__$1;
(statearr_28542_28615[(2)] = inst_28431);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (21))){
var inst_28469 = (state_28534[(8)]);
var inst_28479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28480 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28481 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28482 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28483 = cljs.core.cons.call(null,inst_28482,inst_28469);
var inst_28484 = (new cljs.core.List(null,inst_28483,null,(1),null));
var inst_28485 = (new cljs.core.List(null,inst_28481,inst_28484,(2),null));
var inst_28486 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28480,inst_28485,null];
var inst_28487 = cljs.core.PersistentHashMap.fromArrays(inst_28479,inst_28486);
var inst_28488 = cljs.test.do_report.call(null,inst_28487);
var state_28534__$1 = state_28534;
var statearr_28543_28616 = state_28534__$1;
(statearr_28543_28616[(2)] = inst_28488);

(statearr_28543_28616[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (13))){
var inst_28430 = (state_28534[(12)]);
var inst_28433 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28434 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28435 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28430);
var inst_28436 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28434,inst_28435,null];
var inst_28437 = cljs.core.PersistentHashMap.fromArrays(inst_28433,inst_28436);
var inst_28438 = cljs.test.do_report.call(null,inst_28437);
var state_28534__$1 = state_28534;
var statearr_28544_28617 = state_28534__$1;
(statearr_28544_28617[(2)] = inst_28438);

(statearr_28544_28617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (22))){
var inst_28470 = (state_28534[(13)]);
var inst_28490 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28545 = state_28534;
(statearr_28545[(14)] = inst_28490);

return statearr_28545;
})();
var statearr_28546_28618 = state_28534__$1;
(statearr_28546_28618[(2)] = inst_28470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (29))){
var inst_28509 = (state_28534[(15)]);
var inst_28529 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28547 = state_28534;
(statearr_28547[(16)] = inst_28529);

return statearr_28547;
})();
var statearr_28548_28619 = state_28534__$1;
(statearr_28548_28619[(2)] = inst_28509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (6))){
var inst_28391 = (state_28534[(7)]);
var inst_28394 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28396 = cljs.core.cons.call(null,cljs.core._EQ_,inst_28391);
var inst_28397 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28395,inst_28396,null];
var inst_28398 = cljs.core.PersistentHashMap.fromArrays(inst_28394,inst_28397);
var inst_28399 = cljs.test.do_report.call(null,inst_28398);
var state_28534__$1 = state_28534;
var statearr_28549_28620 = state_28534__$1;
(statearr_28549_28620[(2)] = inst_28399);

(statearr_28549_28620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (28))){
var inst_28508 = (state_28534[(9)]);
var inst_28518 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28519 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"")))),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));
var inst_28520 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28521 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28522 = cljs.core.cons.call(null,inst_28521,inst_28508);
var inst_28523 = (new cljs.core.List(null,inst_28522,null,(1),null));
var inst_28524 = (new cljs.core.List(null,inst_28520,inst_28523,(2),null));
var inst_28525 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28519,inst_28524,null];
var inst_28526 = cljs.core.PersistentHashMap.fromArrays(inst_28518,inst_28525);
var inst_28527 = cljs.test.do_report.call(null,inst_28526);
var state_28534__$1 = state_28534;
var statearr_28550_28621 = state_28534__$1;
(statearr_28550_28621[(2)] = inst_28527);

(statearr_28550_28621[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28534,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_28502 = klipse_clj.lang.clojure.the_eval.call(null,"#uuid \"f81d4fae-7dec-11d0-a765-00a0c91e6bf6\"");
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(26),inst_28502);
} else {
if((state_val_28535 === (17))){
var inst_28454 = (state_28534[(2)]);
var inst_28455 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28456 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#inst \"2018-09-08\"")))),new cljs.core.Symbol("js","Date","js/Date",946858373,null));
var inst_28457 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28456,inst_28454,null];
var inst_28458 = cljs.core.PersistentHashMap.fromArrays(inst_28455,inst_28457);
var inst_28459 = cljs.test.do_report.call(null,inst_28458);
var state_28534__$1 = state_28534;
var statearr_28551_28622 = state_28534__$1;
(statearr_28551_28622[(2)] = inst_28459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (3))){
var inst_28376 = (state_28534[(2)]);
var inst_28377 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28378 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#queue [1]")))),new cljs.core.Symbol("cljs.core","PersistentQueue","cljs.core/PersistentQueue",-1909468475,null));
var inst_28379 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28378,inst_28376,null];
var inst_28380 = cljs.core.PersistentHashMap.fromArrays(inst_28377,inst_28379);
var inst_28381 = cljs.test.do_report.call(null,inst_28380);
var state_28534__$1 = state_28534;
var statearr_28552_28623 = state_28534__$1;
(statearr_28552_28623[(2)] = inst_28381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (12))){
var inst_28430 = (state_28534[(12)]);
var inst_28431 = (state_28534[(10)]);
var inst_28426 = (state_28534[(2)]);
var inst_28427 = cljs.core.second.call(null,inst_28426);
var inst_28428 = cljs.core.type.call(null,inst_28427);
var inst_28429 = (new cljs.core.List(null,Array,null,(1),null));
var inst_28430__$1 = (new cljs.core.List(null,inst_28428,inst_28429,(2),null));
var inst_28431__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28430__$1);
var state_28534__$1 = (function (){var statearr_28553 = state_28534;
(statearr_28553[(12)] = inst_28430__$1);

(statearr_28553[(10)] = inst_28431__$1);

return statearr_28553;
})();
if(cljs.core.truth_(inst_28431__$1)){
var statearr_28554_28624 = state_28534__$1;
(statearr_28554_28624[(1)] = (13));

} else {
var statearr_28555_28625 = state_28534__$1;
(statearr_28555_28625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (2))){
var inst_28414 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28556 = state_28534;
(statearr_28556[(17)] = inst_28414);

return statearr_28556;
})();
var statearr_28557_28626 = state_28534__$1;
(statearr_28557_28626[(2)] = null);

(statearr_28557_28626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (23))){
var inst_28531 = (state_28534[(2)]);
var inst_28532 = done.call(null);
var state_28534__$1 = (function (){var statearr_28558 = state_28534;
(statearr_28558[(18)] = inst_28531);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28534__$1,inst_28532);
} else {
if((state_val_28535 === (19))){
var inst_28470 = (state_28534[(13)]);
var inst_28469 = (state_28534[(8)]);
var inst_28465 = (state_28534[(2)]);
var inst_28466 = cljs.core.second.call(null,inst_28465);
var inst_28467 = cljs.core.type.call(null,inst_28466);
var inst_28468 = (new cljs.core.List(null,Date,null,(1),null));
var inst_28469__$1 = (new cljs.core.List(null,inst_28467,inst_28468,(2),null));
var inst_28470__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28469__$1);
var state_28534__$1 = (function (){var statearr_28559 = state_28534;
(statearr_28559[(13)] = inst_28470__$1);

(statearr_28559[(8)] = inst_28469__$1);

return statearr_28559;
})();
if(cljs.core.truth_(inst_28470__$1)){
var statearr_28560_28627 = state_28534__$1;
(statearr_28560_28627[(1)] = (20));

} else {
var statearr_28561_28628 = state_28534__$1;
(statearr_28561_28628[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28534,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_28424 = klipse_clj.lang.clojure.the_eval.call(null,"#js []");
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(12),inst_28424);
} else {
if((state_val_28535 === (9))){
var inst_28453 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28562 = state_28534;
(statearr_28562[(19)] = inst_28453);

return statearr_28562;
})();
var statearr_28563_28629 = state_28534__$1;
(statearr_28563_28629[(2)] = null);

(statearr_28563_28629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (5))){
var inst_28391 = (state_28534[(7)]);
var inst_28392 = (state_28534[(20)]);
var inst_28387 = (state_28534[(2)]);
var inst_28388 = cljs.core.second.call(null,inst_28387);
var inst_28389 = cljs.core.type.call(null,inst_28388);
var inst_28390 = (new cljs.core.List(null,cljs.core.PersistentQueue,null,(1),null));
var inst_28391__$1 = (new cljs.core.List(null,inst_28389,inst_28390,(2),null));
var inst_28392__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28391__$1);
var state_28534__$1 = (function (){var statearr_28564 = state_28534;
(statearr_28564[(7)] = inst_28391__$1);

(statearr_28564[(20)] = inst_28392__$1);

return statearr_28564;
})();
if(cljs.core.truth_(inst_28392__$1)){
var statearr_28565_28630 = state_28534__$1;
(statearr_28565_28630[(1)] = (6));

} else {
var statearr_28566_28631 = state_28534__$1;
(statearr_28566_28631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (14))){
var inst_28430 = (state_28534[(12)]);
var inst_28440 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28441 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28442 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28443 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_28444 = cljs.core.cons.call(null,inst_28443,inst_28430);
var inst_28445 = (new cljs.core.List(null,inst_28444,null,(1),null));
var inst_28446 = (new cljs.core.List(null,inst_28442,inst_28445,(2),null));
var inst_28447 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28441,inst_28446,null];
var inst_28448 = cljs.core.PersistentHashMap.fromArrays(inst_28440,inst_28447);
var inst_28449 = cljs.test.do_report.call(null,inst_28448);
var state_28534__$1 = state_28534;
var statearr_28567_28632 = state_28534__$1;
(statearr_28567_28632[(2)] = inst_28449);

(statearr_28567_28632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (26))){
var inst_28508 = (state_28534[(9)]);
var inst_28509 = (state_28534[(15)]);
var inst_28504 = (state_28534[(2)]);
var inst_28505 = cljs.core.second.call(null,inst_28504);
var inst_28506 = cljs.core.type.call(null,inst_28505);
var inst_28507 = (new cljs.core.List(null,cljs.core.UUID,null,(1),null));
var inst_28508__$1 = (new cljs.core.List(null,inst_28506,inst_28507,(2),null));
var inst_28509__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_28508__$1);
var state_28534__$1 = (function (){var statearr_28568 = state_28534;
(statearr_28568[(9)] = inst_28508__$1);

(statearr_28568[(15)] = inst_28509__$1);

return statearr_28568;
})();
if(cljs.core.truth_(inst_28509__$1)){
var statearr_28569_28633 = state_28534__$1;
(statearr_28569_28633[(1)] = (27));

} else {
var statearr_28570_28634 = state_28534__$1;
(statearr_28570_28634[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (16))){
var inst_28492 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28571 = state_28534;
(statearr_28571[(21)] = inst_28492);

return statearr_28571;
})();
var statearr_28572_28635 = state_28534__$1;
(statearr_28572_28635[(2)] = null);

(statearr_28572_28635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (10))){
var inst_28415 = (state_28534[(2)]);
var inst_28416 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28417 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"#js []")))),new cljs.core.Symbol("js","Array","js/Array",-423508366,null));
var inst_28418 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28417,inst_28415,null];
var inst_28419 = cljs.core.PersistentHashMap.fromArrays(inst_28416,inst_28418);
var inst_28420 = cljs.test.do_report.call(null,inst_28419);
var state_28534__$1 = state_28534;
var statearr_28573_28636 = state_28534__$1;
(statearr_28573_28636[(2)] = inst_28420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28534,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_28463 = klipse_clj.lang.clojure.the_eval.call(null,"#inst \"2018-09-08\"");
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(19),inst_28463);
} else {
if((state_val_28535 === (8))){
var inst_28392 = (state_28534[(20)]);
var inst_28412 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28574 = state_28534;
(statearr_28574[(22)] = inst_28412);

return statearr_28574;
})();
var statearr_28575_28637 = state_28534__$1;
(statearr_28575_28637[(2)] = inst_28392);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28576[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28576[(1)] = (1));

return statearr_28576;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28534){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28577){if((e28577 instanceof Object)){
var ex__15543__auto__ = e28577;
var statearr_28578_28638 = state_28534;
(statearr_28578_28638[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28639 = state_28534;
state_28534 = G__28639;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28534){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_28579 = f__15635__auto__.call(null);
(statearr_28579[(6)] = c__15634__auto__);

return statearr_28579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28169","meta28169",1129344915,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test28168.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test28168.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test28168";

klipse_clj.eval_test.t_klipse_clj$eval_test28168.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test28168");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test28168.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test28168 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test28168(meta28169){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28168(meta28169));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test28168(null));
});

klipse_clj.eval_test.test_eval_macro_chars.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_macro_chars;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-macro-chars","klipse-clj.eval-test/test-eval-macro-chars",1038557825,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-macro-chars","test-eval-macro-chars",1386219900,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",31,1,173,173,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_macro_chars)?klipse_clj.eval_test.test_eval_macro_chars.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_functions = (function klipse_clj$eval_test$test_eval_functions(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_functions.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_functions.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test28640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test28640 = (function (meta28641){
this.meta28641 = meta28641;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28642,meta28641__$1){
var self__ = this;
var _28642__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28640(meta28641__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28642){
var self__ = this;
var _28642__$1 = this;
return self__.meta28641;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_28685){
var state_val_28686 = (state_28685[(1)]);
if((state_val_28686 === (1))){
var state_28685__$1 = state_28685;
var statearr_28687_28758 = state_28685__$1;
(statearr_28687_28758[(2)] = null);

(statearr_28687_28758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (2))){
var inst_28682 = (state_28685[(2)]);
var inst_28683 = done.call(null);
var state_28685__$1 = (function (){var statearr_28688 = state_28685;
(statearr_28688[(7)] = inst_28682);

return statearr_28688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28685__$1,inst_28683);
} else {
if((state_val_28686 === (3))){
var inst_28644 = (state_28685[(2)]);
var inst_28645 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28646 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28647 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28646,inst_28644,null];
var inst_28648 = cljs.core.PersistentHashMap.fromArrays(inst_28645,inst_28647);
var inst_28649 = cljs.test.do_report.call(null,inst_28648);
var state_28685__$1 = state_28685;
var statearr_28689_28759 = state_28685__$1;
(statearr_28689_28759[(2)] = inst_28649);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28685,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28653 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.func) (defn foo [] 1)");
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28685__$1,(5),inst_28653);
} else {
if((state_val_28686 === (5))){
var inst_28659 = (state_28685[(8)]);
var inst_28660 = (state_28685[(9)]);
var inst_28655 = (state_28685[(2)]);
var inst_28656 = cljs.core.second.call(null,inst_28655);
var inst_28657 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28656);
var inst_28658 = (new cljs.core.List(null,"#'my.func/foo",null,(1),null));
var inst_28659__$1 = (new cljs.core.List(null,inst_28657,inst_28658,(2),null));
var inst_28660__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_28659__$1);
var state_28685__$1 = (function (){var statearr_28690 = state_28685;
(statearr_28690[(8)] = inst_28659__$1);

(statearr_28690[(9)] = inst_28660__$1);

return statearr_28690;
})();
if(cljs.core.truth_(inst_28660__$1)){
var statearr_28691_28760 = state_28685__$1;
(statearr_28691_28760[(1)] = (6));

} else {
var statearr_28692_28761 = state_28685__$1;
(statearr_28692_28761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (6))){
var inst_28659 = (state_28685[(8)]);
var inst_28662 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28663 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28664 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_28659);
var inst_28665 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28663,inst_28664,null];
var inst_28666 = cljs.core.PersistentHashMap.fromArrays(inst_28662,inst_28665);
var inst_28667 = cljs.test.do_report.call(null,inst_28666);
var state_28685__$1 = state_28685;
var statearr_28693_28762 = state_28685__$1;
(statearr_28693_28762[(2)] = inst_28667);

(statearr_28693_28762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (7))){
var inst_28659 = (state_28685[(8)]);
var inst_28669 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28670 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28671 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28672 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_28673 = cljs.core.cons.call(null,inst_28672,inst_28659);
var inst_28674 = (new cljs.core.List(null,inst_28673,null,(1),null));
var inst_28675 = (new cljs.core.List(null,inst_28671,inst_28674,(2),null));
var inst_28676 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28670,inst_28675,null];
var inst_28677 = cljs.core.PersistentHashMap.fromArrays(inst_28669,inst_28676);
var inst_28678 = cljs.test.do_report.call(null,inst_28677);
var state_28685__$1 = state_28685;
var statearr_28694_28763 = state_28685__$1;
(statearr_28694_28763[(2)] = inst_28678);

(statearr_28694_28763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (8))){
var inst_28660 = (state_28685[(9)]);
var inst_28680 = (state_28685[(2)]);
var state_28685__$1 = (function (){var statearr_28695 = state_28685;
(statearr_28695[(10)] = inst_28680);

return statearr_28695;
})();
var statearr_28696_28764 = state_28685__$1;
(statearr_28696_28764[(2)] = inst_28660);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28685){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__15543__auto__ = e28698;
var statearr_28699_28765 = state_28685;
(statearr_28699_28765[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28766 = state_28685;
state_28685 = G__28766;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28685){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_28700 = f__15635__auto__.call(null);
(statearr_28700[(6)] = c__15634__auto__);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.apply = (function (self__,args28643){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28643)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_28742){
var state_val_28743 = (state_28742[(1)]);
if((state_val_28743 === (1))){
var state_28742__$1 = state_28742;
var statearr_28744_28767 = state_28742__$1;
(statearr_28744_28767[(2)] = null);

(statearr_28744_28767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (2))){
var inst_28739 = (state_28742[(2)]);
var inst_28740 = done.call(null);
var state_28742__$1 = (function (){var statearr_28745 = state_28742;
(statearr_28745[(7)] = inst_28739);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28742__$1,inst_28740);
} else {
if((state_val_28743 === (3))){
var inst_28701 = (state_28742[(2)]);
var inst_28702 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28703 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28704 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28703,inst_28701,null];
var inst_28705 = cljs.core.PersistentHashMap.fromArrays(inst_28702,inst_28704);
var inst_28706 = cljs.test.do_report.call(null,inst_28705);
var state_28742__$1 = state_28742;
var statearr_28746_28768 = state_28742__$1;
(statearr_28746_28768[(2)] = inst_28706);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28742,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28710 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.func) (defn foo [] 1)");
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28742__$1,(5),inst_28710);
} else {
if((state_val_28743 === (5))){
var inst_28717 = (state_28742[(8)]);
var inst_28716 = (state_28742[(9)]);
var inst_28712 = (state_28742[(2)]);
var inst_28713 = cljs.core.second.call(null,inst_28712);
var inst_28714 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28713);
var inst_28715 = (new cljs.core.List(null,"#'my.func/foo",null,(1),null));
var inst_28716__$1 = (new cljs.core.List(null,inst_28714,inst_28715,(2),null));
var inst_28717__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_28716__$1);
var state_28742__$1 = (function (){var statearr_28747 = state_28742;
(statearr_28747[(8)] = inst_28717__$1);

(statearr_28747[(9)] = inst_28716__$1);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28717__$1)){
var statearr_28748_28769 = state_28742__$1;
(statearr_28748_28769[(1)] = (6));

} else {
var statearr_28749_28770 = state_28742__$1;
(statearr_28749_28770[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (6))){
var inst_28716 = (state_28742[(9)]);
var inst_28719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28720 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28721 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_28716);
var inst_28722 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28720,inst_28721,null];
var inst_28723 = cljs.core.PersistentHashMap.fromArrays(inst_28719,inst_28722);
var inst_28724 = cljs.test.do_report.call(null,inst_28723);
var state_28742__$1 = state_28742;
var statearr_28750_28771 = state_28742__$1;
(statearr_28750_28771[(2)] = inst_28724);

(statearr_28750_28771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (7))){
var inst_28716 = (state_28742[(9)]);
var inst_28726 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28727 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.func) (defn foo [] 1)")))),"#'my.func/foo");
var inst_28728 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28729 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_28730 = cljs.core.cons.call(null,inst_28729,inst_28716);
var inst_28731 = (new cljs.core.List(null,inst_28730,null,(1),null));
var inst_28732 = (new cljs.core.List(null,inst_28728,inst_28731,(2),null));
var inst_28733 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28727,inst_28732,null];
var inst_28734 = cljs.core.PersistentHashMap.fromArrays(inst_28726,inst_28733);
var inst_28735 = cljs.test.do_report.call(null,inst_28734);
var state_28742__$1 = state_28742;
var statearr_28751_28772 = state_28742__$1;
(statearr_28751_28772[(2)] = inst_28735);

(statearr_28751_28772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (8))){
var inst_28717 = (state_28742[(8)]);
var inst_28737 = (state_28742[(2)]);
var state_28742__$1 = (function (){var statearr_28752 = state_28742;
(statearr_28752[(10)] = inst_28737);

return statearr_28752;
})();
var statearr_28753_28773 = state_28742__$1;
(statearr_28753_28773[(2)] = inst_28717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28754[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28754[(1)] = (1));

return statearr_28754;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28742){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28755){if((e28755 instanceof Object)){
var ex__15543__auto__ = e28755;
var statearr_28756_28774 = state_28742;
(statearr_28756_28774[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28775 = state_28742;
state_28742 = G__28775;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28742){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_28757 = f__15635__auto__.call(null);
(statearr_28757[(6)] = c__15634__auto__);

return statearr_28757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28641","meta28641",654978595,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test28640.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test28640.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test28640";

klipse_clj.eval_test.t_klipse_clj$eval_test28640.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test28640");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test28640.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test28640 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test28640(meta28641){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28640(meta28641));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test28640(null));
});

klipse_clj.eval_test.test_eval_functions.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_functions;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-functions","klipse-clj.eval-test/test-eval-functions",187008830,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-functions","test-eval-functions",844692125,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",29,1,186,186,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_functions)?klipse_clj.eval_test.test_eval_functions.cljs$lang$test:null)]));
klipse_clj.eval_test.test_eval_vars = (function klipse_clj$eval_test$test_eval_vars(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.test_eval_vars.cljs$lang$var);
});
klipse_clj.eval_test.test_eval_vars.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test28776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test28776 = (function (meta28777){
this.meta28777 = meta28777;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28778,meta28777__$1){
var self__ = this;
var _28778__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28776(meta28777__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28778){
var self__ = this;
var _28778__$1 = this;
return self__.meta28777;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_28860){
var state_val_28861 = (state_28860[(1)]);
if((state_val_28861 === (7))){
var inst_28795 = (state_28860[(7)]);
var inst_28805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28806 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28807 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28808 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_28809 = cljs.core.cons.call(null,inst_28808,inst_28795);
var inst_28810 = (new cljs.core.List(null,inst_28809,null,(1),null));
var inst_28811 = (new cljs.core.List(null,inst_28807,inst_28810,(2),null));
var inst_28812 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28806,inst_28811,null];
var inst_28813 = cljs.core.PersistentHashMap.fromArrays(inst_28805,inst_28812);
var inst_28814 = cljs.test.do_report.call(null,inst_28813);
var state_28860__$1 = state_28860;
var statearr_28862_28992 = state_28860__$1;
(statearr_28862_28992[(2)] = inst_28814);

(statearr_28862_28992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (1))){
var state_28860__$1 = state_28860;
var statearr_28863_28993 = state_28860__$1;
(statearr_28863_28993[(2)] = null);

(statearr_28863_28993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28860,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28789 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.vars) (def a 1)");
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28860__$1,(5),inst_28789);
} else {
if((state_val_28861 === (15))){
var inst_28835 = (state_28860[(8)]);
var inst_28855 = (state_28860[(2)]);
var state_28860__$1 = (function (){var statearr_28864 = state_28860;
(statearr_28864[(9)] = inst_28855);

return statearr_28864;
})();
var statearr_28865_28994 = state_28860__$1;
(statearr_28865_28994[(2)] = inst_28835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (13))){
var inst_28834 = (state_28860[(10)]);
var inst_28837 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28838 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28839 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_28834);
var inst_28840 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28838,inst_28839,null];
var inst_28841 = cljs.core.PersistentHashMap.fromArrays(inst_28837,inst_28840);
var inst_28842 = cljs.test.do_report.call(null,inst_28841);
var state_28860__$1 = state_28860;
var statearr_28866_28995 = state_28860__$1;
(statearr_28866_28995[(2)] = inst_28842);

(statearr_28866_28995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (6))){
var inst_28795 = (state_28860[(7)]);
var inst_28798 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28799 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28800 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_28795);
var inst_28801 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28799,inst_28800,null];
var inst_28802 = cljs.core.PersistentHashMap.fromArrays(inst_28798,inst_28801);
var inst_28803 = cljs.test.do_report.call(null,inst_28802);
var state_28860__$1 = state_28860;
var statearr_28867_28996 = state_28860__$1;
(statearr_28867_28996[(2)] = inst_28803);

(statearr_28867_28996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (3))){
var inst_28780 = (state_28860[(2)]);
var inst_28781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28782 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28783 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28782,inst_28780,null];
var inst_28784 = cljs.core.PersistentHashMap.fromArrays(inst_28781,inst_28783);
var inst_28785 = cljs.test.do_report.call(null,inst_28784);
var state_28860__$1 = state_28860;
var statearr_28868_28997 = state_28860__$1;
(statearr_28868_28997[(2)] = inst_28785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (12))){
var inst_28835 = (state_28860[(8)]);
var inst_28834 = (state_28860[(10)]);
var inst_28830 = (state_28860[(2)]);
var inst_28831 = cljs.core.second.call(null,inst_28830);
var inst_28832 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28831);
var inst_28833 = (new cljs.core.List(null,"1",null,(1),null));
var inst_28834__$1 = (new cljs.core.List(null,inst_28832,inst_28833,(2),null));
var inst_28835__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_28834__$1);
var state_28860__$1 = (function (){var statearr_28869 = state_28860;
(statearr_28869[(8)] = inst_28835__$1);

(statearr_28869[(10)] = inst_28834__$1);

return statearr_28869;
})();
if(cljs.core.truth_(inst_28835__$1)){
var statearr_28870_28998 = state_28860__$1;
(statearr_28870_28998[(1)] = (13));

} else {
var statearr_28871_28999 = state_28860__$1;
(statearr_28871_28999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (2))){
var inst_28818 = (state_28860[(2)]);
var state_28860__$1 = (function (){var statearr_28872 = state_28860;
(statearr_28872[(11)] = inst_28818);

return statearr_28872;
})();
var statearr_28873_29000 = state_28860__$1;
(statearr_28873_29000[(2)] = null);

(statearr_28873_29000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28860,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_28828 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.vars2) (def b 1) b");
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28860__$1,(12),inst_28828);
} else {
if((state_val_28861 === (9))){
var inst_28857 = (state_28860[(2)]);
var inst_28858 = done.call(null);
var state_28860__$1 = (function (){var statearr_28874 = state_28860;
(statearr_28874[(12)] = inst_28857);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28860__$1,inst_28858);
} else {
if((state_val_28861 === (5))){
var inst_28796 = (state_28860[(13)]);
var inst_28795 = (state_28860[(7)]);
var inst_28791 = (state_28860[(2)]);
var inst_28792 = cljs.core.second.call(null,inst_28791);
var inst_28793 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28792);
var inst_28794 = (new cljs.core.List(null,"#'my.vars/a",null,(1),null));
var inst_28795__$1 = (new cljs.core.List(null,inst_28793,inst_28794,(2),null));
var inst_28796__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_28795__$1);
var state_28860__$1 = (function (){var statearr_28875 = state_28860;
(statearr_28875[(13)] = inst_28796__$1);

(statearr_28875[(7)] = inst_28795__$1);

return statearr_28875;
})();
if(cljs.core.truth_(inst_28796__$1)){
var statearr_28876_29001 = state_28860__$1;
(statearr_28876_29001[(1)] = (6));

} else {
var statearr_28877_29002 = state_28860__$1;
(statearr_28877_29002[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (14))){
var inst_28834 = (state_28860[(10)]);
var inst_28844 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28845 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28846 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28847 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_28848 = cljs.core.cons.call(null,inst_28847,inst_28834);
var inst_28849 = (new cljs.core.List(null,inst_28848,null,(1),null));
var inst_28850 = (new cljs.core.List(null,inst_28846,inst_28849,(2),null));
var inst_28851 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28845,inst_28850,null];
var inst_28852 = cljs.core.PersistentHashMap.fromArrays(inst_28844,inst_28851);
var inst_28853 = cljs.test.do_report.call(null,inst_28852);
var state_28860__$1 = state_28860;
var statearr_28878_29003 = state_28860__$1;
(statearr_28878_29003[(2)] = inst_28853);

(statearr_28878_29003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (10))){
var inst_28819 = (state_28860[(2)]);
var inst_28820 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28821 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28822 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28821,inst_28819,null];
var inst_28823 = cljs.core.PersistentHashMap.fromArrays(inst_28820,inst_28822);
var inst_28824 = cljs.test.do_report.call(null,inst_28823);
var state_28860__$1 = state_28860;
var statearr_28879_29004 = state_28860__$1;
(statearr_28879_29004[(2)] = inst_28824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (8))){
var inst_28796 = (state_28860[(13)]);
var inst_28816 = (state_28860[(2)]);
var state_28860__$1 = (function (){var statearr_28880 = state_28860;
(statearr_28880[(14)] = inst_28816);

return statearr_28880;
})();
var statearr_28881_29005 = state_28860__$1;
(statearr_28881_29005[(2)] = inst_28796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860__$1);

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
});})(c__15634__auto__,___22472__auto__,self____$1))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28882[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28882[(1)] = (1));

return statearr_28882;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28860){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28883){if((e28883 instanceof Object)){
var ex__15543__auto__ = e28883;
var statearr_28884_29006 = state_28860;
(statearr_28884_29006[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29007 = state_28860;
state_28860 = G__29007;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28860){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_28885 = f__15635__auto__.call(null);
(statearr_28885[(6)] = c__15634__auto__);

return statearr_28885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.apply = (function (self__,args28779){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args28779)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_28966){
var state_val_28967 = (state_28966[(1)]);
if((state_val_28967 === (7))){
var inst_28901 = (state_28966[(7)]);
var inst_28911 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28912 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28913 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28914 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_28915 = cljs.core.cons.call(null,inst_28914,inst_28901);
var inst_28916 = (new cljs.core.List(null,inst_28915,null,(1),null));
var inst_28917 = (new cljs.core.List(null,inst_28913,inst_28916,(2),null));
var inst_28918 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28912,inst_28917,null];
var inst_28919 = cljs.core.PersistentHashMap.fromArrays(inst_28911,inst_28918);
var inst_28920 = cljs.test.do_report.call(null,inst_28919);
var state_28966__$1 = state_28966;
var statearr_28968_29008 = state_28966__$1;
(statearr_28968_29008[(2)] = inst_28920);

(statearr_28968_29008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (1))){
var state_28966__$1 = state_28966;
var statearr_28969_29009 = state_28966__$1;
(statearr_28969_29009[(2)] = null);

(statearr_28969_29009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28966,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28895 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.vars) (def a 1)");
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(5),inst_28895);
} else {
if((state_val_28967 === (15))){
var inst_28941 = (state_28966[(8)]);
var inst_28961 = (state_28966[(2)]);
var state_28966__$1 = (function (){var statearr_28970 = state_28966;
(statearr_28970[(9)] = inst_28961);

return statearr_28970;
})();
var statearr_28971_29010 = state_28966__$1;
(statearr_28971_29010[(2)] = inst_28941);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (13))){
var inst_28940 = (state_28966[(10)]);
var inst_28943 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28944 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28945 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_28940);
var inst_28946 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28944,inst_28945,null];
var inst_28947 = cljs.core.PersistentHashMap.fromArrays(inst_28943,inst_28946);
var inst_28948 = cljs.test.do_report.call(null,inst_28947);
var state_28966__$1 = state_28966;
var statearr_28972_29011 = state_28966__$1;
(statearr_28972_29011[(2)] = inst_28948);

(statearr_28972_29011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (6))){
var inst_28901 = (state_28966[(7)]);
var inst_28904 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28905 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28906 = cljs.core.cons.call(null,klipse_clj.eval_test.b_EQ_,inst_28901);
var inst_28907 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_28905,inst_28906,null];
var inst_28908 = cljs.core.PersistentHashMap.fromArrays(inst_28904,inst_28907);
var inst_28909 = cljs.test.do_report.call(null,inst_28908);
var state_28966__$1 = state_28966;
var statearr_28973_29012 = state_28966__$1;
(statearr_28973_29012[(2)] = inst_28909);

(statearr_28973_29012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (3))){
var inst_28886 = (state_28966[(2)]);
var inst_28887 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28888 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars) (def a 1)")))),"#'my.vars/a");
var inst_28889 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28888,inst_28886,null];
var inst_28890 = cljs.core.PersistentHashMap.fromArrays(inst_28887,inst_28889);
var inst_28891 = cljs.test.do_report.call(null,inst_28890);
var state_28966__$1 = state_28966;
var statearr_28974_29013 = state_28966__$1;
(statearr_28974_29013[(2)] = inst_28891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (12))){
var inst_28941 = (state_28966[(8)]);
var inst_28940 = (state_28966[(10)]);
var inst_28936 = (state_28966[(2)]);
var inst_28937 = cljs.core.second.call(null,inst_28936);
var inst_28938 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28937);
var inst_28939 = (new cljs.core.List(null,"1",null,(1),null));
var inst_28940__$1 = (new cljs.core.List(null,inst_28938,inst_28939,(2),null));
var inst_28941__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_28940__$1);
var state_28966__$1 = (function (){var statearr_28975 = state_28966;
(statearr_28975[(8)] = inst_28941__$1);

(statearr_28975[(10)] = inst_28940__$1);

return statearr_28975;
})();
if(cljs.core.truth_(inst_28941__$1)){
var statearr_28976_29014 = state_28966__$1;
(statearr_28976_29014[(1)] = (13));

} else {
var statearr_28977_29015 = state_28966__$1;
(statearr_28977_29015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (2))){
var inst_28924 = (state_28966[(2)]);
var state_28966__$1 = (function (){var statearr_28978 = state_28966;
(statearr_28978[(11)] = inst_28924);

return statearr_28978;
})();
var statearr_28979_29016 = state_28966__$1;
(statearr_28979_29016[(2)] = null);

(statearr_28979_29016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28966,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_28934 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.vars2) (def b 1) b");
var state_28966__$1 = state_28966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(12),inst_28934);
} else {
if((state_val_28967 === (9))){
var inst_28963 = (state_28966[(2)]);
var inst_28964 = done.call(null);
var state_28966__$1 = (function (){var statearr_28980 = state_28966;
(statearr_28980[(12)] = inst_28963);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28966__$1,inst_28964);
} else {
if((state_val_28967 === (5))){
var inst_28902 = (state_28966[(13)]);
var inst_28901 = (state_28966[(7)]);
var inst_28897 = (state_28966[(2)]);
var inst_28898 = cljs.core.second.call(null,inst_28897);
var inst_28899 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28898);
var inst_28900 = (new cljs.core.List(null,"#'my.vars/a",null,(1),null));
var inst_28901__$1 = (new cljs.core.List(null,inst_28899,inst_28900,(2),null));
var inst_28902__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.b_EQ_,inst_28901__$1);
var state_28966__$1 = (function (){var statearr_28981 = state_28966;
(statearr_28981[(13)] = inst_28902__$1);

(statearr_28981[(7)] = inst_28901__$1);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28902__$1)){
var statearr_28982_29017 = state_28966__$1;
(statearr_28982_29017[(1)] = (6));

} else {
var statearr_28983_29018 = state_28966__$1;
(statearr_28983_29018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (14))){
var inst_28940 = (state_28966[(10)]);
var inst_28950 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28951 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28952 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_28953 = new cljs.core.Symbol(null,"b=","b=",212711809,null);
var inst_28954 = cljs.core.cons.call(null,inst_28953,inst_28940);
var inst_28955 = (new cljs.core.List(null,inst_28954,null,(1),null));
var inst_28956 = (new cljs.core.List(null,inst_28952,inst_28955,(2),null));
var inst_28957 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_28951,inst_28956,null];
var inst_28958 = cljs.core.PersistentHashMap.fromArrays(inst_28950,inst_28957);
var inst_28959 = cljs.test.do_report.call(null,inst_28958);
var state_28966__$1 = state_28966;
var statearr_28984_29019 = state_28966__$1;
(statearr_28984_29019[(2)] = inst_28959);

(statearr_28984_29019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (10))){
var inst_28925 = (state_28966[(2)]);
var inst_28926 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_28927 = cljs.core.list(new cljs.core.Symbol(null,"b=","b=",212711809,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.vars2) (def b 1) b")))),"1");
var inst_28928 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_28927,inst_28925,null];
var inst_28929 = cljs.core.PersistentHashMap.fromArrays(inst_28926,inst_28928);
var inst_28930 = cljs.test.do_report.call(null,inst_28929);
var state_28966__$1 = state_28966;
var statearr_28985_29020 = state_28966__$1;
(statearr_28985_29020[(2)] = inst_28930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28967 === (8))){
var inst_28902 = (state_28966[(13)]);
var inst_28922 = (state_28966[(2)]);
var state_28966__$1 = (function (){var statearr_28986 = state_28966;
(statearr_28986[(14)] = inst_28922);

return statearr_28986;
})();
var statearr_28987_29021 = state_28966__$1;
(statearr_28987_29021[(2)] = inst_28902);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966__$1);

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
});})(c__15634__auto__,___22472__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__,___22472__auto__){
return (function() {
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_28988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28988[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_28988[(1)] = (1));

return statearr_28988;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_28966){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_28966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e28989){if((e28989 instanceof Object)){
var ex__15543__auto__ = e28989;
var statearr_28990_29022 = state_28966;
(statearr_28990_29022[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29023 = state_28966;
state_28966 = G__29023;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_28966){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_28966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_28991 = f__15635__auto__.call(null);
(statearr_28991[(6)] = c__15634__auto__);

return statearr_28991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28777","meta28777",496420228,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test28776.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test28776.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test28776";

klipse_clj.eval_test.t_klipse_clj$eval_test28776.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test28776");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test28776.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test28776 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test28776(meta28777){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test28776(meta28777));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test28776(null));
});

klipse_clj.eval_test.test_eval_vars.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.test_eval_vars;},new cljs.core.Symbol("klipse-clj.eval-test","test-eval-vars","klipse-clj.eval-test/test-eval-vars",-1619093862,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"test-eval-vars","test-eval-vars",1882948151,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",24,1,195,195,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.test_eval_vars)?klipse_clj.eval_test.test_eval_vars.cljs$lang$test:null)]));
klipse_clj.eval_test.eval_in_ns = (function klipse_clj$eval_test$eval_in_ns(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.eval_in_ns.cljs$lang$var);
});
klipse_clj.eval_test.eval_in_ns.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test29024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test29024 = (function (meta29025){
this.meta29025 = meta29025;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29026,meta29025__$1){
var self__ = this;
var _29026__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test29024(meta29025__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29026){
var self__ = this;
var _29026__$1 = this;
return self__.meta29025;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_29068){
var state_val_29069 = (state_29068[(1)]);
if((state_val_29069 === (1))){
var state_29068__$1 = state_29068;
var statearr_29070_29140 = state_29068__$1;
(statearr_29070_29140[(2)] = null);

(statearr_29070_29140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (2))){
var inst_29065 = (state_29068[(2)]);
var inst_29066 = done.call(null);
var state_29068__$1 = (function (){var statearr_29071 = state_29068;
(statearr_29071[(7)] = inst_29065);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29068__$1,inst_29066);
} else {
if((state_val_29069 === (3))){
var inst_29028 = (state_29068[(2)]);
var inst_29029 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29030 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29031 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29030,inst_29028,null];
var inst_29032 = cljs.core.PersistentHashMap.fromArrays(inst_29029,inst_29031);
var inst_29033 = cljs.test.do_report.call(null,inst_29032);
var state_29068__$1 = state_29068;
var statearr_29072_29141 = state_29068__$1;
(statearr_29072_29141[(2)] = inst_29033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29068,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29037 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.foo) ::foo");
var state_29068__$1 = state_29068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29068__$1,(5),inst_29037);
} else {
if((state_val_29069 === (5))){
var inst_29043 = (state_29068[(8)]);
var inst_29042 = (state_29068[(9)]);
var inst_29039 = (state_29068[(2)]);
var inst_29040 = cljs.core.second.call(null,inst_29039);
var inst_29041 = (new cljs.core.List(null,new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848),null,(1),null));
var inst_29042__$1 = (new cljs.core.List(null,inst_29040,inst_29041,(2),null));
var inst_29043__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29042__$1);
var state_29068__$1 = (function (){var statearr_29073 = state_29068;
(statearr_29073[(8)] = inst_29043__$1);

(statearr_29073[(9)] = inst_29042__$1);

return statearr_29073;
})();
if(cljs.core.truth_(inst_29043__$1)){
var statearr_29074_29142 = state_29068__$1;
(statearr_29074_29142[(1)] = (6));

} else {
var statearr_29075_29143 = state_29068__$1;
(statearr_29075_29143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (6))){
var inst_29042 = (state_29068[(9)]);
var inst_29045 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29046 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29047 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29042);
var inst_29048 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29046,inst_29047,null];
var inst_29049 = cljs.core.PersistentHashMap.fromArrays(inst_29045,inst_29048);
var inst_29050 = cljs.test.do_report.call(null,inst_29049);
var state_29068__$1 = state_29068;
var statearr_29076_29144 = state_29068__$1;
(statearr_29076_29144[(2)] = inst_29050);

(statearr_29076_29144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (7))){
var inst_29042 = (state_29068[(9)]);
var inst_29052 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29053 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29054 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29055 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29056 = cljs.core.cons.call(null,inst_29055,inst_29042);
var inst_29057 = (new cljs.core.List(null,inst_29056,null,(1),null));
var inst_29058 = (new cljs.core.List(null,inst_29054,inst_29057,(2),null));
var inst_29059 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29053,inst_29058,null];
var inst_29060 = cljs.core.PersistentHashMap.fromArrays(inst_29052,inst_29059);
var inst_29061 = cljs.test.do_report.call(null,inst_29060);
var state_29068__$1 = state_29068;
var statearr_29077_29145 = state_29068__$1;
(statearr_29077_29145[(2)] = inst_29061);

(statearr_29077_29145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (8))){
var inst_29043 = (state_29068[(8)]);
var inst_29063 = (state_29068[(2)]);
var state_29068__$1 = (function (){var statearr_29078 = state_29068;
(statearr_29078[(10)] = inst_29063);

return statearr_29078;
})();
var statearr_29079_29146 = state_29068__$1;
(statearr_29079_29146[(2)] = inst_29043);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_29080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29080[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_29080[(1)] = (1));

return statearr_29080;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_29068){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_29068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e29081){if((e29081 instanceof Object)){
var ex__15543__auto__ = e29081;
var statearr_29082_29147 = state_29068;
(statearr_29082_29147[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29148 = state_29068;
state_29068 = G__29148;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_29068){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_29068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_29083 = f__15635__auto__.call(null);
(statearr_29083[(6)] = c__15634__auto__);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.apply = (function (self__,args29027){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29027)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (1))){
var state_29124__$1 = state_29124;
var statearr_29126_29149 = state_29124__$1;
(statearr_29126_29149[(2)] = null);

(statearr_29126_29149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (2))){
var inst_29121 = (state_29124[(2)]);
var inst_29122 = done.call(null);
var state_29124__$1 = (function (){var statearr_29127 = state_29124;
(statearr_29127[(7)] = inst_29121);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (3))){
var inst_29084 = (state_29124[(2)]);
var inst_29085 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29086 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29087 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29086,inst_29084,null];
var inst_29088 = cljs.core.PersistentHashMap.fromArrays(inst_29085,inst_29087);
var inst_29089 = cljs.test.do_report.call(null,inst_29088);
var state_29124__$1 = state_29124;
var statearr_29128_29150 = state_29124__$1;
(statearr_29128_29150[(2)] = inst_29089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29124,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29093 = klipse_clj.lang.clojure.the_eval.call(null,"(ns my.foo) ::foo");
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29124__$1,(5),inst_29093);
} else {
if((state_val_29125 === (5))){
var inst_29098 = (state_29124[(8)]);
var inst_29099 = (state_29124[(9)]);
var inst_29095 = (state_29124[(2)]);
var inst_29096 = cljs.core.second.call(null,inst_29095);
var inst_29097 = (new cljs.core.List(null,new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848),null,(1),null));
var inst_29098__$1 = (new cljs.core.List(null,inst_29096,inst_29097,(2),null));
var inst_29099__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29098__$1);
var state_29124__$1 = (function (){var statearr_29129 = state_29124;
(statearr_29129[(8)] = inst_29098__$1);

(statearr_29129[(9)] = inst_29099__$1);

return statearr_29129;
})();
if(cljs.core.truth_(inst_29099__$1)){
var statearr_29130_29151 = state_29124__$1;
(statearr_29130_29151[(1)] = (6));

} else {
var statearr_29131_29152 = state_29124__$1;
(statearr_29131_29152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (6))){
var inst_29098 = (state_29124[(8)]);
var inst_29101 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29102 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29103 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29098);
var inst_29104 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29102,inst_29103,null];
var inst_29105 = cljs.core.PersistentHashMap.fromArrays(inst_29101,inst_29104);
var inst_29106 = cljs.test.do_report.call(null,inst_29105);
var state_29124__$1 = state_29124;
var statearr_29132_29153 = state_29124__$1;
(statearr_29132_29153[(2)] = inst_29106);

(statearr_29132_29153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (7))){
var inst_29098 = (state_29124[(8)]);
var inst_29108 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29109 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"the-eval","the-eval",-1171497707,null),"(ns my.foo) ::foo"))),new cljs.core.Keyword("my.foo","foo","my.foo/foo",-1948054848));
var inst_29110 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29111 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29112 = cljs.core.cons.call(null,inst_29111,inst_29098);
var inst_29113 = (new cljs.core.List(null,inst_29112,null,(1),null));
var inst_29114 = (new cljs.core.List(null,inst_29110,inst_29113,(2),null));
var inst_29115 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29109,inst_29114,null];
var inst_29116 = cljs.core.PersistentHashMap.fromArrays(inst_29108,inst_29115);
var inst_29117 = cljs.test.do_report.call(null,inst_29116);
var state_29124__$1 = state_29124;
var statearr_29133_29154 = state_29124__$1;
(statearr_29133_29154[(2)] = inst_29117);

(statearr_29133_29154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (8))){
var inst_29099 = (state_29124[(9)]);
var inst_29119 = (state_29124[(2)]);
var state_29124__$1 = (function (){var statearr_29134 = state_29124;
(statearr_29134[(10)] = inst_29119);

return statearr_29134;
})();
var statearr_29135_29155 = state_29124__$1;
(statearr_29135_29155[(2)] = inst_29099);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124__$1);

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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_29136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29136[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_29136[(1)] = (1));

return statearr_29136;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_29124){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e29137){if((e29137 instanceof Object)){
var ex__15543__auto__ = e29137;
var statearr_29138_29156 = state_29124;
(statearr_29138_29156[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29157 = state_29124;
state_29124 = G__29157;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_29139 = f__15635__auto__.call(null);
(statearr_29139[(6)] = c__15634__auto__);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29025","meta29025",-1165807187,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test29024.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test29024.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test29024";

klipse_clj.eval_test.t_klipse_clj$eval_test29024.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test29024");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test29024.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test29024 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test29024(meta29025){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test29024(meta29025));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test29024(null));
});

klipse_clj.eval_test.eval_in_ns.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.eval_in_ns;},new cljs.core.Symbol("klipse-clj.eval-test","eval-in-ns","klipse-clj.eval-test/eval-in-ns",685444611,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"eval-in-ns","eval-in-ns",530324192,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",20,1,205,205,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.eval_in_ns)?klipse_clj.eval_test.eval_in_ns.cljs$lang$test:null)]));
klipse_clj.eval_test.split_expressions_test = (function klipse_clj$eval_test$split_expressions_test(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.split_expressions_test.cljs$lang$var);
});
klipse_clj.eval_test.split_expressions_test.cljs$lang$test = (function (){
try{var values__22397__auto___29162 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)"], null),(new cljs.core.List(null,klipse_clj.lang.clojure.split_expressions.call(null,"(+ 1 2)"),null,(1),null)),(2),null));
var result__22398__auto___29163 = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto___29162);
if(cljs.core.truth_(result__22398__auto___29163)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto___29162),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto___29162),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29158){var t__22442__auto___29164 = e29158;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto___29164,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22397__auto___29165 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)","(+ 2 3)"], null),(new cljs.core.List(null,klipse_clj.lang.clojure.split_expressions.call(null,"(+ 1 2)    (+ 2 3)"),null,(1),null)),(2),null));
var result__22398__auto___29166 = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto___29165);
if(cljs.core.truth_(result__22398__auto___29166)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)","(+ 2 3)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)    (+ 2 3)")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto___29165),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)","(+ 2 3)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)    (+ 2 3)")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto___29165),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29159){var t__22442__auto___29167 = e29159;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(+ 1 2)","(+ 2 3)"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"(+ 1 2)    (+ 2 3)")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto___29167,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22397__auto___29168 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":foo"], null),(new cljs.core.List(null,klipse_clj.lang.clojure.split_expressions.call(null,":foo"),null,(1),null)),(2),null));
var result__22398__auto___29169 = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto___29168);
if(cljs.core.truth_(result__22398__auto___29169)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),":foo")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto___29168),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),":foo")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto___29168),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29160){var t__22442__auto___29170 = e29160;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),":foo")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto___29170,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22397__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::foo"], null),(new cljs.core.List(null,klipse_clj.lang.clojure.split_expressions.call(null,"::foo"),null,(1),null)),(2),null));
var result__22398__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto__);
if(cljs.core.truth_(result__22398__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"::foo")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"::foo")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22398__auto__;
}catch (e29161){var t__22442__auto__ = e29161;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::foo"], null),cljs.core.list(new cljs.core.Symbol(null,"split-expressions","split-expressions",739475461,null),"::foo")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse_clj.eval_test.split_expressions_test.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.split_expressions_test;},new cljs.core.Symbol("klipse-clj.eval-test","split-expressions-test","klipse-clj.eval-test/split-expressions-test",-241606556,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"split-expressions-test","split-expressions-test",-657296121,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",32,1,215,215,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.split_expressions_test)?klipse_clj.eval_test.split_expressions_test.cljs$lang$test:null)]));
klipse_clj.eval_test.read_string_test = (function klipse_clj$eval_test$read_string_test(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.read_string_test.cljs$lang$var);
});
klipse_clj.eval_test.read_string_test.cljs$lang$test = (function (){
try{var values__22397__auto___29174 = (new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),(1)),(new cljs.core.List(null,klipse_clj.lang.clojure.read_string.call(null,"(def a 1)"),null,(1),null)),(2),null));
var result__22398__auto___29175 = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto___29174);
if(cljs.core.truth_(result__22398__auto___29175)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),(1))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a 1)")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto___29174),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),(1))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a 1)")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto___29174),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29171){var t__22442__auto___29176 = e29171;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),(1))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a 1)")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto___29176,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22397__auto___29177 = (new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1))),(new cljs.core.List(null,klipse_clj.lang.clojure.read_string.call(null,"(def a (atom 1))"),null,(1),null)),(2),null));
var result__22398__auto___29178 = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto___29177);
if(cljs.core.truth_(result__22398__auto___29178)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a (atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto___29177),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a (atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto___29177),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e29172){var t__22442__auto___29179 = e29172;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1)))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a (atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto___29179,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__22397__auto__ = (new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1)))),(new cljs.core.List(null,klipse_clj.lang.clojure.read_string.call(null,"(def a @(atom 1))"),null,(1),null)),(2),null));
var result__22398__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__22397__auto__);
if(cljs.core.truth_(result__22398__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1))))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a @(atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__22397__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1))))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a @(atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__22397__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__22398__auto__;
}catch (e29173){var t__22442__auto__ = e29173;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(1))))),cljs.core.list(new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),"(def a @(atom 1))")),new cljs.core.Keyword(null,"actual","actual",107306363),t__22442__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse_clj.eval_test.read_string_test.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.read_string_test;},new cljs.core.Symbol("klipse-clj.eval-test","read-string-test","klipse-clj.eval-test/read-string-test",1690140501,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"read-string-test","read-string-test",1341526922,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",26,1,223,223,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.read_string_test)?klipse_clj.eval_test.read_string_test.cljs$lang$test:null)]));
klipse_clj.eval_test.display_evaluation_and_beautify = (function klipse_clj$eval_test$display_evaluation_and_beautify(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.display_evaluation_and_beautify.cljs$lang$var);
});
klipse_clj.eval_test.display_evaluation_and_beautify.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test29180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test29180 = (function (meta29181){
this.meta29181 = meta29181;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29182,meta29181__$1){
var self__ = this;
var _29182__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test29180(meta29181__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29182){
var self__ = this;
var _29182__$1 = this;
return self__.meta29181;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_29487){
var state_val_29488 = (state_29487[(1)]);
if((state_val_29488 === (7))){
var inst_29203 = (state_29487[(7)]);
var inst_29223 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29489 = state_29487;
(statearr_29489[(8)] = inst_29223);

return statearr_29489;
})();
var statearr_29490_29942 = state_29487__$1;
(statearr_29490_29942[(2)] = inst_29203);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (20))){
var inst_29354 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29491 = state_29487;
(statearr_29491[(9)] = inst_29354);

return statearr_29491;
})();
var statearr_29492_29943 = state_29487__$1;
(statearr_29492_29943[(2)] = null);

(statearr_29492_29943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (27))){
var inst_29355 = (state_29487[(2)]);
var inst_29356 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29357 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29358 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29357,inst_29355,null];
var inst_29359 = cljs.core.PersistentHashMap.fromArrays(inst_29356,inst_29358);
var inst_29360 = cljs.test.do_report.call(null,inst_29359);
var state_29487__$1 = state_29487;
var statearr_29493_29944 = state_29487__$1;
(statearr_29493_29944[(2)] = inst_29360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (1))){
var state_29487__$1 = state_29487;
var statearr_29494_29945 = state_29487__$1;
(statearr_29494_29945[(2)] = null);

(statearr_29494_29945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (24))){
var inst_29331 = (state_29487[(10)]);
var inst_29341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29342 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29343 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29344 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29345 = cljs.core.cons.call(null,inst_29344,inst_29331);
var inst_29346 = (new cljs.core.List(null,inst_29345,null,(1),null));
var inst_29347 = (new cljs.core.List(null,inst_29343,inst_29346,(2),null));
var inst_29348 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29342,inst_29347,null];
var inst_29349 = cljs.core.PersistentHashMap.fromArrays(inst_29341,inst_29348);
var inst_29350 = cljs.test.do_report.call(null,inst_29349);
var state_29487__$1 = state_29487;
var statearr_29495_29946 = state_29487__$1;
(statearr_29495_29946[(2)] = inst_29350);

(statearr_29495_29946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (39))){
var inst_29442 = (state_29487[(2)]);
var inst_29443 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29444 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29445 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29444,inst_29442,null];
var inst_29446 = cljs.core.PersistentHashMap.fromArrays(inst_29443,inst_29445);
var inst_29447 = cljs.test.do_report.call(null,inst_29446);
var state_29487__$1 = state_29487;
var statearr_29496_29947 = state_29487__$1;
(statearr_29496_29947[(2)] = inst_29447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (4))){
var inst_29202 = (state_29487[(11)]);
var inst_29203 = (state_29487[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29193 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29194 = [true,null];
var inst_29195 = cljs.core.PersistentHashMap.fromArrays(inst_29193,inst_29194);
var inst_29196 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29197 = [true,(2)];
var inst_29198 = cljs.core.PersistentHashMap.fromArrays(inst_29196,inst_29197);
var inst_29199 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29195,inst_29198);
var inst_29200 = cljs.core.second.call(null,inst_29199);
var inst_29201 = (new cljs.core.List(null,"nil",null,(1),null));
var inst_29202__$1 = (new cljs.core.List(null,inst_29200,inst_29201,(2),null));
var inst_29203__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29202__$1);
var state_29487__$1 = (function (){var statearr_29497 = state_29487;
(statearr_29497[(11)] = inst_29202__$1);

(statearr_29497[(7)] = inst_29203__$1);

return statearr_29497;
})();
if(cljs.core.truth_(inst_29203__$1)){
var statearr_29498_29948 = state_29487__$1;
(statearr_29498_29948[(1)] = (5));

} else {
var statearr_29499_29949 = state_29487__$1;
(statearr_29499_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (15))){
var inst_29268 = (state_29487[(2)]);
var inst_29269 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29270 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29271 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29270,inst_29268,null];
var inst_29272 = cljs.core.PersistentHashMap.fromArrays(inst_29269,inst_29271);
var inst_29273 = cljs.test.do_report.call(null,inst_29272);
var state_29487__$1 = state_29487;
var statearr_29500_29950 = state_29487__$1;
(statearr_29500_29950[(2)] = inst_29273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (21))){
var inst_29310 = (state_29487[(2)]);
var inst_29311 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29312 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29313 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29312,inst_29310,null];
var inst_29314 = cljs.core.PersistentHashMap.fromArrays(inst_29311,inst_29313);
var inst_29315 = cljs.test.do_report.call(null,inst_29314);
var state_29487__$1 = state_29487;
var statearr_29501_29951 = state_29487__$1;
(statearr_29501_29951[(2)] = inst_29315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (31))){
var inst_29377 = (state_29487[(12)]);
var inst_29397 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29502 = state_29487;
(statearr_29502[(13)] = inst_29397);

return statearr_29502;
})();
var statearr_29503_29952 = state_29487__$1;
(statearr_29503_29952[(2)] = inst_29377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (32))){
var inst_29441 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29504 = state_29487;
(statearr_29504[(14)] = inst_29441);

return statearr_29504;
})();
var statearr_29505_29953 = state_29487__$1;
(statearr_29505_29953[(2)] = null);

(statearr_29505_29953[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (40))){
var inst_29461 = (state_29487[(15)]);
var inst_29462 = (state_29487[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_29451 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29452 = cljs.core.range.call(null);
var inst_29453 = [true,inst_29452];
var inst_29454 = cljs.core.PersistentHashMap.fromArrays(inst_29451,inst_29453);
var inst_29455 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29456 = [true,(2)];
var inst_29457 = cljs.core.PersistentHashMap.fromArrays(inst_29455,inst_29456);
var inst_29458 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29454,inst_29457);
var inst_29459 = cljs.core.second.call(null,inst_29458);
var inst_29460 = (new cljs.core.List(null,"(0 1 ...)",null,(1),null));
var inst_29461__$1 = (new cljs.core.List(null,inst_29459,inst_29460,(2),null));
var inst_29462__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29461__$1);
var state_29487__$1 = (function (){var statearr_29506 = state_29487;
(statearr_29506[(15)] = inst_29461__$1);

(statearr_29506[(16)] = inst_29462__$1);

return statearr_29506;
})();
if(cljs.core.truth_(inst_29462__$1)){
var statearr_29507_29954 = state_29487__$1;
(statearr_29507_29954[(1)] = (41));

} else {
var statearr_29508_29955 = state_29487__$1;
(statearr_29508_29955[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (33))){
var inst_29400 = (state_29487[(2)]);
var inst_29401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29402 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29403 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29402,inst_29400,null];
var inst_29404 = cljs.core.PersistentHashMap.fromArrays(inst_29401,inst_29403);
var inst_29405 = cljs.test.do_report.call(null,inst_29404);
var state_29487__$1 = state_29487;
var statearr_29509_29956 = state_29487__$1;
(statearr_29509_29956[(2)] = inst_29405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (13))){
var inst_29245 = (state_29487[(17)]);
var inst_29265 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29510 = state_29487;
(statearr_29510[(18)] = inst_29265);

return statearr_29510;
})();
var statearr_29511_29957 = state_29487__$1;
(statearr_29511_29957[(2)] = inst_29245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (22))){
var inst_29331 = (state_29487[(10)]);
var inst_29332 = (state_29487[(19)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_29319 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29321 = [(1),(2)];
var inst_29322 = (new cljs.core.PersistentVector(null,2,(5),inst_29320,inst_29321,null));
var inst_29323 = [true,inst_29322];
var inst_29324 = cljs.core.PersistentHashMap.fromArrays(inst_29319,inst_29323);
var inst_29325 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29326 = [true,(2)];
var inst_29327 = cljs.core.PersistentHashMap.fromArrays(inst_29325,inst_29326);
var inst_29328 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29324,inst_29327);
var inst_29329 = cljs.core.second.call(null,inst_29328);
var inst_29330 = (new cljs.core.List(null,"[1 2]",null,(1),null));
var inst_29331__$1 = (new cljs.core.List(null,inst_29329,inst_29330,(2),null));
var inst_29332__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29331__$1);
var state_29487__$1 = (function (){var statearr_29512 = state_29487;
(statearr_29512[(10)] = inst_29331__$1);

(statearr_29512[(19)] = inst_29332__$1);

return statearr_29512;
})();
if(cljs.core.truth_(inst_29332__$1)){
var statearr_29513_29958 = state_29487__$1;
(statearr_29513_29958[(1)] = (23));

} else {
var statearr_29514_29959 = state_29487__$1;
(statearr_29514_29959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (36))){
var inst_29418 = (state_29487[(20)]);
var inst_29428 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29429 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29430 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29431 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29432 = cljs.core.cons.call(null,inst_29431,inst_29418);
var inst_29433 = (new cljs.core.List(null,inst_29432,null,(1),null));
var inst_29434 = (new cljs.core.List(null,inst_29430,inst_29433,(2),null));
var inst_29435 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29429,inst_29434,null];
var inst_29436 = cljs.core.PersistentHashMap.fromArrays(inst_29428,inst_29435);
var inst_29437 = cljs.test.do_report.call(null,inst_29436);
var state_29487__$1 = state_29487;
var statearr_29515_29960 = state_29487__$1;
(statearr_29515_29960[(2)] = inst_29437);

(statearr_29515_29960[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (41))){
var inst_29461 = (state_29487[(15)]);
var inst_29464 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29465 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29466 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29461);
var inst_29467 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29465,inst_29466,null];
var inst_29468 = cljs.core.PersistentHashMap.fromArrays(inst_29464,inst_29467);
var inst_29469 = cljs.test.do_report.call(null,inst_29468);
var state_29487__$1 = state_29487;
var statearr_29516_29961 = state_29487__$1;
(statearr_29516_29961[(2)] = inst_29469);

(statearr_29516_29961[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (43))){
var inst_29462 = (state_29487[(16)]);
var inst_29482 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29517 = state_29487;
(statearr_29517[(21)] = inst_29482);

return statearr_29517;
})();
var statearr_29518_29962 = state_29487__$1;
(statearr_29518_29962[(2)] = inst_29462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (29))){
var inst_29376 = (state_29487[(22)]);
var inst_29379 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29380 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29381 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29376);
var inst_29382 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29380,inst_29381,null];
var inst_29383 = cljs.core.PersistentHashMap.fromArrays(inst_29379,inst_29382);
var inst_29384 = cljs.test.do_report.call(null,inst_29383);
var state_29487__$1 = state_29487;
var statearr_29519_29963 = state_29487__$1;
(statearr_29519_29963[(2)] = inst_29384);

(statearr_29519_29963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (6))){
var inst_29202 = (state_29487[(11)]);
var inst_29212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29213 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29214 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29215 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29216 = cljs.core.cons.call(null,inst_29215,inst_29202);
var inst_29217 = (new cljs.core.List(null,inst_29216,null,(1),null));
var inst_29218 = (new cljs.core.List(null,inst_29214,inst_29217,(2),null));
var inst_29219 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29213,inst_29218,null];
var inst_29220 = cljs.core.PersistentHashMap.fromArrays(inst_29212,inst_29219);
var inst_29221 = cljs.test.do_report.call(null,inst_29220);
var state_29487__$1 = state_29487;
var statearr_29520_29964 = state_29487__$1;
(statearr_29520_29964[(2)] = inst_29221);

(statearr_29520_29964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (28))){
var inst_29377 = (state_29487[(12)]);
var inst_29376 = (state_29487[(22)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_29364 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29366 = [(1),(2),(3),(4),(5)];
var inst_29367 = (new cljs.core.PersistentVector(null,5,(5),inst_29365,inst_29366,null));
var inst_29368 = [true,inst_29367];
var inst_29369 = cljs.core.PersistentHashMap.fromArrays(inst_29364,inst_29368);
var inst_29370 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29371 = [true,(2)];
var inst_29372 = cljs.core.PersistentHashMap.fromArrays(inst_29370,inst_29371);
var inst_29373 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29369,inst_29372);
var inst_29374 = cljs.core.second.call(null,inst_29373);
var inst_29375 = (new cljs.core.List(null,"[1 2 ...]",null,(1),null));
var inst_29376__$1 = (new cljs.core.List(null,inst_29374,inst_29375,(2),null));
var inst_29377__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29376__$1);
var state_29487__$1 = (function (){var statearr_29521 = state_29487;
(statearr_29521[(12)] = inst_29377__$1);

(statearr_29521[(22)] = inst_29376__$1);

return statearr_29521;
})();
if(cljs.core.truth_(inst_29377__$1)){
var statearr_29522_29965 = state_29487__$1;
(statearr_29522_29965[(1)] = (29));

} else {
var statearr_29523_29966 = state_29487__$1;
(statearr_29523_29966[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (25))){
var inst_29332 = (state_29487[(19)]);
var inst_29352 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29524 = state_29487;
(statearr_29524[(23)] = inst_29352);

return statearr_29524;
})();
var statearr_29525_29967 = state_29487__$1;
(statearr_29525_29967[(2)] = inst_29332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (34))){
var inst_29418 = (state_29487[(20)]);
var inst_29419 = (state_29487[(24)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_29409 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29410 = [true,"abcdef"];
var inst_29411 = cljs.core.PersistentHashMap.fromArrays(inst_29409,inst_29410);
var inst_29412 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29413 = [true,(2)];
var inst_29414 = cljs.core.PersistentHashMap.fromArrays(inst_29412,inst_29413);
var inst_29415 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29411,inst_29414);
var inst_29416 = cljs.core.second.call(null,inst_29415);
var inst_29417 = (new cljs.core.List(null,"abcdef",null,(1),null));
var inst_29418__$1 = (new cljs.core.List(null,inst_29416,inst_29417,(2),null));
var inst_29419__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29418__$1);
var state_29487__$1 = (function (){var statearr_29526 = state_29487;
(statearr_29526[(20)] = inst_29418__$1);

(statearr_29526[(24)] = inst_29419__$1);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29419__$1)){
var statearr_29527_29968 = state_29487__$1;
(statearr_29527_29968[(1)] = (35));

} else {
var statearr_29528_29969 = state_29487__$1;
(statearr_29528_29969[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (17))){
var inst_29286 = (state_29487[(25)]);
var inst_29289 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29290 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29291 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29286);
var inst_29292 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29290,inst_29291,null];
var inst_29293 = cljs.core.PersistentHashMap.fromArrays(inst_29289,inst_29292);
var inst_29294 = cljs.test.do_report.call(null,inst_29293);
var state_29487__$1 = state_29487;
var statearr_29529_29970 = state_29487__$1;
(statearr_29529_29970[(2)] = inst_29294);

(statearr_29529_29970[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (3))){
var inst_29184 = (state_29487[(2)]);
var inst_29185 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29186 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29187 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29186,inst_29184,null];
var inst_29188 = cljs.core.PersistentHashMap.fromArrays(inst_29185,inst_29187);
var inst_29189 = cljs.test.do_report.call(null,inst_29188);
var state_29487__$1 = state_29487;
var statearr_29530_29971 = state_29487__$1;
(statearr_29530_29971[(2)] = inst_29189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (12))){
var inst_29244 = (state_29487[(26)]);
var inst_29254 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29255 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29256 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29257 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29258 = cljs.core.cons.call(null,inst_29257,inst_29244);
var inst_29259 = (new cljs.core.List(null,inst_29258,null,(1),null));
var inst_29260 = (new cljs.core.List(null,inst_29256,inst_29259,(2),null));
var inst_29261 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29255,inst_29260,null];
var inst_29262 = cljs.core.PersistentHashMap.fromArrays(inst_29254,inst_29261);
var inst_29263 = cljs.test.do_report.call(null,inst_29262);
var state_29487__$1 = state_29487;
var statearr_29531_29972 = state_29487__$1;
(statearr_29531_29972[(2)] = inst_29263);

(statearr_29531_29972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (2))){
var inst_29225 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29532 = state_29487;
(statearr_29532[(27)] = inst_29225);

return statearr_29532;
})();
var statearr_29533_29973 = state_29487__$1;
(statearr_29533_29973[(2)] = null);

(statearr_29533_29973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (23))){
var inst_29331 = (state_29487[(10)]);
var inst_29334 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29335 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29336 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29331);
var inst_29337 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29335,inst_29336,null];
var inst_29338 = cljs.core.PersistentHashMap.fromArrays(inst_29334,inst_29337);
var inst_29339 = cljs.test.do_report.call(null,inst_29338);
var state_29487__$1 = state_29487;
var statearr_29534_29974 = state_29487__$1;
(statearr_29534_29974[(2)] = inst_29339);

(statearr_29534_29974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (35))){
var inst_29418 = (state_29487[(20)]);
var inst_29421 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29422 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29423 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29418);
var inst_29424 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29422,inst_29423,null];
var inst_29425 = cljs.core.PersistentHashMap.fromArrays(inst_29421,inst_29424);
var inst_29426 = cljs.test.do_report.call(null,inst_29425);
var state_29487__$1 = state_29487;
var statearr_29535_29975 = state_29487__$1;
(statearr_29535_29975[(2)] = inst_29426);

(statearr_29535_29975[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (19))){
var inst_29287 = (state_29487[(28)]);
var inst_29307 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29536 = state_29487;
(statearr_29536[(29)] = inst_29307);

return statearr_29536;
})();
var statearr_29537_29976 = state_29487__$1;
(statearr_29537_29976[(2)] = inst_29287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (11))){
var inst_29244 = (state_29487[(26)]);
var inst_29247 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29248 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29249 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29244);
var inst_29250 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29248,inst_29249,null];
var inst_29251 = cljs.core.PersistentHashMap.fromArrays(inst_29247,inst_29250);
var inst_29252 = cljs.test.do_report.call(null,inst_29251);
var state_29487__$1 = state_29487;
var statearr_29538_29977 = state_29487__$1;
(statearr_29538_29977[(2)] = inst_29252);

(statearr_29538_29977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (9))){
var inst_29226 = (state_29487[(2)]);
var inst_29227 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29228 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29229 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29228,inst_29226,null];
var inst_29230 = cljs.core.PersistentHashMap.fromArrays(inst_29227,inst_29229);
var inst_29231 = cljs.test.do_report.call(null,inst_29230);
var state_29487__$1 = state_29487;
var statearr_29539_29978 = state_29487__$1;
(statearr_29539_29978[(2)] = inst_29231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (5))){
var inst_29202 = (state_29487[(11)]);
var inst_29205 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29206 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29207 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29202);
var inst_29208 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29206,inst_29207,null];
var inst_29209 = cljs.core.PersistentHashMap.fromArrays(inst_29205,inst_29208);
var inst_29210 = cljs.test.do_report.call(null,inst_29209);
var state_29487__$1 = state_29487;
var statearr_29540_29979 = state_29487__$1;
(statearr_29540_29979[(2)] = inst_29210);

(statearr_29540_29979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (14))){
var inst_29309 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29541 = state_29487;
(statearr_29541[(30)] = inst_29309);

return statearr_29541;
})();
var statearr_29542_29980 = state_29487__$1;
(statearr_29542_29980[(2)] = null);

(statearr_29542_29980[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (26))){
var inst_29399 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29543 = state_29487;
(statearr_29543[(31)] = inst_29399);

return statearr_29543;
})();
var statearr_29544_29981 = state_29487__$1;
(statearr_29544_29981[(2)] = null);

(statearr_29544_29981[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (16))){
var inst_29287 = (state_29487[(28)]);
var inst_29286 = (state_29487[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_29277 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29278 = [true,"ab"];
var inst_29279 = cljs.core.PersistentHashMap.fromArrays(inst_29277,inst_29278);
var inst_29280 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29281 = [true,(2)];
var inst_29282 = cljs.core.PersistentHashMap.fromArrays(inst_29280,inst_29281);
var inst_29283 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29279,inst_29282);
var inst_29284 = cljs.core.second.call(null,inst_29283);
var inst_29285 = (new cljs.core.List(null,"ab",null,(1),null));
var inst_29286__$1 = (new cljs.core.List(null,inst_29284,inst_29285,(2),null));
var inst_29287__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29286__$1);
var state_29487__$1 = (function (){var statearr_29545 = state_29487;
(statearr_29545[(28)] = inst_29287__$1);

(statearr_29545[(25)] = inst_29286__$1);

return statearr_29545;
})();
if(cljs.core.truth_(inst_29287__$1)){
var statearr_29546_29982 = state_29487__$1;
(statearr_29546_29982[(1)] = (17));

} else {
var statearr_29547_29983 = state_29487__$1;
(statearr_29547_29983[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (38))){
var inst_29484 = (state_29487[(2)]);
var inst_29485 = done.call(null);
var state_29487__$1 = (function (){var statearr_29548 = state_29487;
(statearr_29548[(32)] = inst_29484);

return statearr_29548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29487__$1,inst_29485);
} else {
if((state_val_29488 === (30))){
var inst_29376 = (state_29487[(22)]);
var inst_29386 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29387 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29388 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29389 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29390 = cljs.core.cons.call(null,inst_29389,inst_29376);
var inst_29391 = (new cljs.core.List(null,inst_29390,null,(1),null));
var inst_29392 = (new cljs.core.List(null,inst_29388,inst_29391,(2),null));
var inst_29393 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29387,inst_29392,null];
var inst_29394 = cljs.core.PersistentHashMap.fromArrays(inst_29386,inst_29393);
var inst_29395 = cljs.test.do_report.call(null,inst_29394);
var state_29487__$1 = state_29487;
var statearr_29549_29984 = state_29487__$1;
(statearr_29549_29984[(2)] = inst_29395);

(statearr_29549_29984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (10))){
var inst_29244 = (state_29487[(26)]);
var inst_29245 = (state_29487[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29487,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_29235 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29236 = [true,"\n1"];
var inst_29237 = cljs.core.PersistentHashMap.fromArrays(inst_29235,inst_29236);
var inst_29238 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29239 = [true,(2)];
var inst_29240 = cljs.core.PersistentHashMap.fromArrays(inst_29238,inst_29239);
var inst_29241 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29237,inst_29240);
var inst_29242 = cljs.core.second.call(null,inst_29241);
var inst_29243 = (new cljs.core.List(null,"\n1",null,(1),null));
var inst_29244__$1 = (new cljs.core.List(null,inst_29242,inst_29243,(2),null));
var inst_29245__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29244__$1);
var state_29487__$1 = (function (){var statearr_29550 = state_29487;
(statearr_29550[(26)] = inst_29244__$1);

(statearr_29550[(17)] = inst_29245__$1);

return statearr_29550;
})();
if(cljs.core.truth_(inst_29245__$1)){
var statearr_29551_29985 = state_29487__$1;
(statearr_29551_29985[(1)] = (11));

} else {
var statearr_29552_29986 = state_29487__$1;
(statearr_29552_29986[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (18))){
var inst_29286 = (state_29487[(25)]);
var inst_29296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29297 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29298 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29299 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29300 = cljs.core.cons.call(null,inst_29299,inst_29286);
var inst_29301 = (new cljs.core.List(null,inst_29300,null,(1),null));
var inst_29302 = (new cljs.core.List(null,inst_29298,inst_29301,(2),null));
var inst_29303 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29297,inst_29302,null];
var inst_29304 = cljs.core.PersistentHashMap.fromArrays(inst_29296,inst_29303);
var inst_29305 = cljs.test.do_report.call(null,inst_29304);
var state_29487__$1 = state_29487;
var statearr_29553_29987 = state_29487__$1;
(statearr_29553_29987[(2)] = inst_29305);

(statearr_29553_29987[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (42))){
var inst_29461 = (state_29487[(15)]);
var inst_29471 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29472 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29473 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29474 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29475 = cljs.core.cons.call(null,inst_29474,inst_29461);
var inst_29476 = (new cljs.core.List(null,inst_29475,null,(1),null));
var inst_29477 = (new cljs.core.List(null,inst_29473,inst_29476,(2),null));
var inst_29478 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29472,inst_29477,null];
var inst_29479 = cljs.core.PersistentHashMap.fromArrays(inst_29471,inst_29478);
var inst_29480 = cljs.test.do_report.call(null,inst_29479);
var state_29487__$1 = state_29487;
var statearr_29554_29988 = state_29487__$1;
(statearr_29554_29988[(2)] = inst_29480);

(statearr_29554_29988[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (37))){
var inst_29419 = (state_29487[(24)]);
var inst_29439 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29555 = state_29487;
(statearr_29555[(33)] = inst_29439);

return statearr_29555;
})();
var statearr_29556_29989 = state_29487__$1;
(statearr_29556_29989[(2)] = inst_29419);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (8))){
var inst_29267 = (state_29487[(2)]);
var state_29487__$1 = (function (){var statearr_29557 = state_29487;
(statearr_29557[(34)] = inst_29267);

return statearr_29557;
})();
var statearr_29558_29990 = state_29487__$1;
(statearr_29558_29990[(2)] = null);

(statearr_29558_29990[(1)] = (16));


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
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_29559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29559[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_29559[(1)] = (1));

return statearr_29559;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_29487){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_29487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e29560){if((e29560 instanceof Object)){
var ex__15543__auto__ = e29560;
var statearr_29561_29991 = state_29487;
(statearr_29561_29991[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29992 = state_29487;
state_29487 = G__29992;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_29487){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_29487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_29562 = f__15635__auto__.call(null);
(statearr_29562[(6)] = c__15634__auto__);

return statearr_29562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.apply = (function (self__,args29183){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29183)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_29866){
var state_val_29867 = (state_29866[(1)]);
if((state_val_29867 === (7))){
var inst_29582 = (state_29866[(7)]);
var inst_29602 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29868 = state_29866;
(statearr_29868[(8)] = inst_29602);

return statearr_29868;
})();
var statearr_29869_29993 = state_29866__$1;
(statearr_29869_29993[(2)] = inst_29582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (20))){
var inst_29733 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29870 = state_29866;
(statearr_29870[(9)] = inst_29733);

return statearr_29870;
})();
var statearr_29871_29994 = state_29866__$1;
(statearr_29871_29994[(2)] = null);

(statearr_29871_29994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (27))){
var inst_29734 = (state_29866[(2)]);
var inst_29735 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29736 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29737 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29736,inst_29734,null];
var inst_29738 = cljs.core.PersistentHashMap.fromArrays(inst_29735,inst_29737);
var inst_29739 = cljs.test.do_report.call(null,inst_29738);
var state_29866__$1 = state_29866;
var statearr_29872_29995 = state_29866__$1;
(statearr_29872_29995[(2)] = inst_29739);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (1))){
var state_29866__$1 = state_29866;
var statearr_29873_29996 = state_29866__$1;
(statearr_29873_29996[(2)] = null);

(statearr_29873_29996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (24))){
var inst_29710 = (state_29866[(10)]);
var inst_29720 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29721 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29722 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29723 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29724 = cljs.core.cons.call(null,inst_29723,inst_29710);
var inst_29725 = (new cljs.core.List(null,inst_29724,null,(1),null));
var inst_29726 = (new cljs.core.List(null,inst_29722,inst_29725,(2),null));
var inst_29727 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29721,inst_29726,null];
var inst_29728 = cljs.core.PersistentHashMap.fromArrays(inst_29720,inst_29727);
var inst_29729 = cljs.test.do_report.call(null,inst_29728);
var state_29866__$1 = state_29866;
var statearr_29874_29997 = state_29866__$1;
(statearr_29874_29997[(2)] = inst_29729);

(statearr_29874_29997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (39))){
var inst_29821 = (state_29866[(2)]);
var inst_29822 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29823 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29824 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29823,inst_29821,null];
var inst_29825 = cljs.core.PersistentHashMap.fromArrays(inst_29822,inst_29824);
var inst_29826 = cljs.test.do_report.call(null,inst_29825);
var state_29866__$1 = state_29866;
var statearr_29875_29998 = state_29866__$1;
(statearr_29875_29998[(2)] = inst_29826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (4))){
var inst_29581 = (state_29866[(11)]);
var inst_29582 = (state_29866[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29572 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29573 = [true,null];
var inst_29574 = cljs.core.PersistentHashMap.fromArrays(inst_29572,inst_29573);
var inst_29575 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29576 = [true,(2)];
var inst_29577 = cljs.core.PersistentHashMap.fromArrays(inst_29575,inst_29576);
var inst_29578 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29574,inst_29577);
var inst_29579 = cljs.core.second.call(null,inst_29578);
var inst_29580 = (new cljs.core.List(null,"nil",null,(1),null));
var inst_29581__$1 = (new cljs.core.List(null,inst_29579,inst_29580,(2),null));
var inst_29582__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29581__$1);
var state_29866__$1 = (function (){var statearr_29876 = state_29866;
(statearr_29876[(11)] = inst_29581__$1);

(statearr_29876[(7)] = inst_29582__$1);

return statearr_29876;
})();
if(cljs.core.truth_(inst_29582__$1)){
var statearr_29877_29999 = state_29866__$1;
(statearr_29877_29999[(1)] = (5));

} else {
var statearr_29878_30000 = state_29866__$1;
(statearr_29878_30000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (15))){
var inst_29647 = (state_29866[(2)]);
var inst_29648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29649 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29650 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29649,inst_29647,null];
var inst_29651 = cljs.core.PersistentHashMap.fromArrays(inst_29648,inst_29650);
var inst_29652 = cljs.test.do_report.call(null,inst_29651);
var state_29866__$1 = state_29866;
var statearr_29879_30001 = state_29866__$1;
(statearr_29879_30001[(2)] = inst_29652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (21))){
var inst_29689 = (state_29866[(2)]);
var inst_29690 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29691 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29692 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29691,inst_29689,null];
var inst_29693 = cljs.core.PersistentHashMap.fromArrays(inst_29690,inst_29692);
var inst_29694 = cljs.test.do_report.call(null,inst_29693);
var state_29866__$1 = state_29866;
var statearr_29880_30002 = state_29866__$1;
(statearr_29880_30002[(2)] = inst_29694);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (31))){
var inst_29756 = (state_29866[(12)]);
var inst_29776 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29881 = state_29866;
(statearr_29881[(13)] = inst_29776);

return statearr_29881;
})();
var statearr_29882_30003 = state_29866__$1;
(statearr_29882_30003[(2)] = inst_29756);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (32))){
var inst_29820 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29883 = state_29866;
(statearr_29883[(14)] = inst_29820);

return statearr_29883;
})();
var statearr_29884_30004 = state_29866__$1;
(statearr_29884_30004[(2)] = null);

(statearr_29884_30004[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (40))){
var inst_29841 = (state_29866[(15)]);
var inst_29840 = (state_29866[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_29830 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29831 = cljs.core.range.call(null);
var inst_29832 = [true,inst_29831];
var inst_29833 = cljs.core.PersistentHashMap.fromArrays(inst_29830,inst_29832);
var inst_29834 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29835 = [true,(2)];
var inst_29836 = cljs.core.PersistentHashMap.fromArrays(inst_29834,inst_29835);
var inst_29837 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29833,inst_29836);
var inst_29838 = cljs.core.second.call(null,inst_29837);
var inst_29839 = (new cljs.core.List(null,"(0 1 ...)",null,(1),null));
var inst_29840__$1 = (new cljs.core.List(null,inst_29838,inst_29839,(2),null));
var inst_29841__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29840__$1);
var state_29866__$1 = (function (){var statearr_29885 = state_29866;
(statearr_29885[(15)] = inst_29841__$1);

(statearr_29885[(16)] = inst_29840__$1);

return statearr_29885;
})();
if(cljs.core.truth_(inst_29841__$1)){
var statearr_29886_30005 = state_29866__$1;
(statearr_29886_30005[(1)] = (41));

} else {
var statearr_29887_30006 = state_29866__$1;
(statearr_29887_30006[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (33))){
var inst_29779 = (state_29866[(2)]);
var inst_29780 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29781 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29782 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29781,inst_29779,null];
var inst_29783 = cljs.core.PersistentHashMap.fromArrays(inst_29780,inst_29782);
var inst_29784 = cljs.test.do_report.call(null,inst_29783);
var state_29866__$1 = state_29866;
var statearr_29888_30007 = state_29866__$1;
(statearr_29888_30007[(2)] = inst_29784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (13))){
var inst_29624 = (state_29866[(17)]);
var inst_29644 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29889 = state_29866;
(statearr_29889[(18)] = inst_29644);

return statearr_29889;
})();
var statearr_29890_30008 = state_29866__$1;
(statearr_29890_30008[(2)] = inst_29624);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (22))){
var inst_29710 = (state_29866[(10)]);
var inst_29711 = (state_29866[(19)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_29698 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29700 = [(1),(2)];
var inst_29701 = (new cljs.core.PersistentVector(null,2,(5),inst_29699,inst_29700,null));
var inst_29702 = [true,inst_29701];
var inst_29703 = cljs.core.PersistentHashMap.fromArrays(inst_29698,inst_29702);
var inst_29704 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29705 = [true,(2)];
var inst_29706 = cljs.core.PersistentHashMap.fromArrays(inst_29704,inst_29705);
var inst_29707 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29703,inst_29706);
var inst_29708 = cljs.core.second.call(null,inst_29707);
var inst_29709 = (new cljs.core.List(null,"[1 2]",null,(1),null));
var inst_29710__$1 = (new cljs.core.List(null,inst_29708,inst_29709,(2),null));
var inst_29711__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29710__$1);
var state_29866__$1 = (function (){var statearr_29891 = state_29866;
(statearr_29891[(10)] = inst_29710__$1);

(statearr_29891[(19)] = inst_29711__$1);

return statearr_29891;
})();
if(cljs.core.truth_(inst_29711__$1)){
var statearr_29892_30009 = state_29866__$1;
(statearr_29892_30009[(1)] = (23));

} else {
var statearr_29893_30010 = state_29866__$1;
(statearr_29893_30010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (36))){
var inst_29797 = (state_29866[(20)]);
var inst_29807 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29808 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29809 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29810 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29811 = cljs.core.cons.call(null,inst_29810,inst_29797);
var inst_29812 = (new cljs.core.List(null,inst_29811,null,(1),null));
var inst_29813 = (new cljs.core.List(null,inst_29809,inst_29812,(2),null));
var inst_29814 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29808,inst_29813,null];
var inst_29815 = cljs.core.PersistentHashMap.fromArrays(inst_29807,inst_29814);
var inst_29816 = cljs.test.do_report.call(null,inst_29815);
var state_29866__$1 = state_29866;
var statearr_29894_30011 = state_29866__$1;
(statearr_29894_30011[(2)] = inst_29816);

(statearr_29894_30011[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (41))){
var inst_29840 = (state_29866[(16)]);
var inst_29843 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29844 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29845 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29840);
var inst_29846 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29844,inst_29845,null];
var inst_29847 = cljs.core.PersistentHashMap.fromArrays(inst_29843,inst_29846);
var inst_29848 = cljs.test.do_report.call(null,inst_29847);
var state_29866__$1 = state_29866;
var statearr_29895_30012 = state_29866__$1;
(statearr_29895_30012[(2)] = inst_29848);

(statearr_29895_30012[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (43))){
var inst_29841 = (state_29866[(15)]);
var inst_29861 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29896 = state_29866;
(statearr_29896[(21)] = inst_29861);

return statearr_29896;
})();
var statearr_29897_30013 = state_29866__$1;
(statearr_29897_30013[(2)] = inst_29841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (29))){
var inst_29755 = (state_29866[(22)]);
var inst_29758 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29759 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29760 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29755);
var inst_29761 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29759,inst_29760,null];
var inst_29762 = cljs.core.PersistentHashMap.fromArrays(inst_29758,inst_29761);
var inst_29763 = cljs.test.do_report.call(null,inst_29762);
var state_29866__$1 = state_29866;
var statearr_29898_30014 = state_29866__$1;
(statearr_29898_30014[(2)] = inst_29763);

(statearr_29898_30014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (6))){
var inst_29581 = (state_29866[(11)]);
var inst_29591 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29592 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29593 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29594 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29595 = cljs.core.cons.call(null,inst_29594,inst_29581);
var inst_29596 = (new cljs.core.List(null,inst_29595,null,(1),null));
var inst_29597 = (new cljs.core.List(null,inst_29593,inst_29596,(2),null));
var inst_29598 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29592,inst_29597,null];
var inst_29599 = cljs.core.PersistentHashMap.fromArrays(inst_29591,inst_29598);
var inst_29600 = cljs.test.do_report.call(null,inst_29599);
var state_29866__$1 = state_29866;
var statearr_29899_30015 = state_29866__$1;
(statearr_29899_30015[(2)] = inst_29600);

(statearr_29899_30015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (28))){
var inst_29755 = (state_29866[(22)]);
var inst_29756 = (state_29866[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_29743 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29745 = [(1),(2),(3),(4),(5)];
var inst_29746 = (new cljs.core.PersistentVector(null,5,(5),inst_29744,inst_29745,null));
var inst_29747 = [true,inst_29746];
var inst_29748 = cljs.core.PersistentHashMap.fromArrays(inst_29743,inst_29747);
var inst_29749 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29750 = [true,(2)];
var inst_29751 = cljs.core.PersistentHashMap.fromArrays(inst_29749,inst_29750);
var inst_29752 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29748,inst_29751);
var inst_29753 = cljs.core.second.call(null,inst_29752);
var inst_29754 = (new cljs.core.List(null,"[1 2 ...]",null,(1),null));
var inst_29755__$1 = (new cljs.core.List(null,inst_29753,inst_29754,(2),null));
var inst_29756__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29755__$1);
var state_29866__$1 = (function (){var statearr_29900 = state_29866;
(statearr_29900[(22)] = inst_29755__$1);

(statearr_29900[(12)] = inst_29756__$1);

return statearr_29900;
})();
if(cljs.core.truth_(inst_29756__$1)){
var statearr_29901_30016 = state_29866__$1;
(statearr_29901_30016[(1)] = (29));

} else {
var statearr_29902_30017 = state_29866__$1;
(statearr_29902_30017[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (25))){
var inst_29711 = (state_29866[(19)]);
var inst_29731 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29903 = state_29866;
(statearr_29903[(23)] = inst_29731);

return statearr_29903;
})();
var statearr_29904_30018 = state_29866__$1;
(statearr_29904_30018[(2)] = inst_29711);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (34))){
var inst_29797 = (state_29866[(20)]);
var inst_29798 = (state_29866[(24)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_29788 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29789 = [true,"abcdef"];
var inst_29790 = cljs.core.PersistentHashMap.fromArrays(inst_29788,inst_29789);
var inst_29791 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29792 = [true,(2)];
var inst_29793 = cljs.core.PersistentHashMap.fromArrays(inst_29791,inst_29792);
var inst_29794 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29790,inst_29793);
var inst_29795 = cljs.core.second.call(null,inst_29794);
var inst_29796 = (new cljs.core.List(null,"abcdef",null,(1),null));
var inst_29797__$1 = (new cljs.core.List(null,inst_29795,inst_29796,(2),null));
var inst_29798__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29797__$1);
var state_29866__$1 = (function (){var statearr_29905 = state_29866;
(statearr_29905[(20)] = inst_29797__$1);

(statearr_29905[(24)] = inst_29798__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29798__$1)){
var statearr_29906_30019 = state_29866__$1;
(statearr_29906_30019[(1)] = (35));

} else {
var statearr_29907_30020 = state_29866__$1;
(statearr_29907_30020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (17))){
var inst_29665 = (state_29866[(25)]);
var inst_29668 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29669 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29670 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29665);
var inst_29671 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29669,inst_29670,null];
var inst_29672 = cljs.core.PersistentHashMap.fromArrays(inst_29668,inst_29671);
var inst_29673 = cljs.test.do_report.call(null,inst_29672);
var state_29866__$1 = state_29866;
var statearr_29908_30021 = state_29866__$1;
(statearr_29908_30021[(2)] = inst_29673);

(statearr_29908_30021[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (3))){
var inst_29563 = (state_29866[(2)]);
var inst_29564 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29565 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29566 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29565,inst_29563,null];
var inst_29567 = cljs.core.PersistentHashMap.fromArrays(inst_29564,inst_29566);
var inst_29568 = cljs.test.do_report.call(null,inst_29567);
var state_29866__$1 = state_29866;
var statearr_29909_30022 = state_29866__$1;
(statearr_29909_30022[(2)] = inst_29568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (12))){
var inst_29623 = (state_29866[(26)]);
var inst_29633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29634 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29635 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29636 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29637 = cljs.core.cons.call(null,inst_29636,inst_29623);
var inst_29638 = (new cljs.core.List(null,inst_29637,null,(1),null));
var inst_29639 = (new cljs.core.List(null,inst_29635,inst_29638,(2),null));
var inst_29640 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29634,inst_29639,null];
var inst_29641 = cljs.core.PersistentHashMap.fromArrays(inst_29633,inst_29640);
var inst_29642 = cljs.test.do_report.call(null,inst_29641);
var state_29866__$1 = state_29866;
var statearr_29910_30023 = state_29866__$1;
(statearr_29910_30023[(2)] = inst_29642);

(statearr_29910_30023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (2))){
var inst_29604 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29911 = state_29866;
(statearr_29911[(27)] = inst_29604);

return statearr_29911;
})();
var statearr_29912_30024 = state_29866__$1;
(statearr_29912_30024[(2)] = null);

(statearr_29912_30024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (23))){
var inst_29710 = (state_29866[(10)]);
var inst_29713 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29714 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_29715 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29710);
var inst_29716 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29714,inst_29715,null];
var inst_29717 = cljs.core.PersistentHashMap.fromArrays(inst_29713,inst_29716);
var inst_29718 = cljs.test.do_report.call(null,inst_29717);
var state_29866__$1 = state_29866;
var statearr_29913_30025 = state_29866__$1;
(statearr_29913_30025[(2)] = inst_29718);

(statearr_29913_30025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (35))){
var inst_29797 = (state_29866[(20)]);
var inst_29800 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29801 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"abcdef");
var inst_29802 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29797);
var inst_29803 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29801,inst_29802,null];
var inst_29804 = cljs.core.PersistentHashMap.fromArrays(inst_29800,inst_29803);
var inst_29805 = cljs.test.do_report.call(null,inst_29804);
var state_29866__$1 = state_29866;
var statearr_29914_30026 = state_29866__$1;
(statearr_29914_30026[(2)] = inst_29805);

(statearr_29914_30026[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (19))){
var inst_29666 = (state_29866[(28)]);
var inst_29686 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29915 = state_29866;
(statearr_29915[(29)] = inst_29686);

return statearr_29915;
})();
var statearr_29916_30027 = state_29866__$1;
(statearr_29916_30027[(2)] = inst_29666);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (11))){
var inst_29623 = (state_29866[(26)]);
var inst_29626 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29627 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29628 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29623);
var inst_29629 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29627,inst_29628,null];
var inst_29630 = cljs.core.PersistentHashMap.fromArrays(inst_29626,inst_29629);
var inst_29631 = cljs.test.do_report.call(null,inst_29630);
var state_29866__$1 = state_29866;
var statearr_29917_30028 = state_29866__$1;
(statearr_29917_30028[(2)] = inst_29631);

(statearr_29917_30028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (9))){
var inst_29605 = (state_29866[(2)]);
var inst_29606 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29607 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\n1");
var inst_29608 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29607,inst_29605,null];
var inst_29609 = cljs.core.PersistentHashMap.fromArrays(inst_29606,inst_29608);
var inst_29610 = cljs.test.do_report.call(null,inst_29609);
var state_29866__$1 = state_29866;
var statearr_29918_30029 = state_29866__$1;
(statearr_29918_30029[(2)] = inst_29610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (5))){
var inst_29581 = (state_29866[(11)]);
var inst_29584 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29585 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_29586 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_29581);
var inst_29587 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29585,inst_29586,null];
var inst_29588 = cljs.core.PersistentHashMap.fromArrays(inst_29584,inst_29587);
var inst_29589 = cljs.test.do_report.call(null,inst_29588);
var state_29866__$1 = state_29866;
var statearr_29919_30030 = state_29866__$1;
(statearr_29919_30030[(2)] = inst_29589);

(statearr_29919_30030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (14))){
var inst_29688 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29920 = state_29866;
(statearr_29920[(30)] = inst_29688);

return statearr_29920;
})();
var statearr_29921_30031 = state_29866__$1;
(statearr_29921_30031[(2)] = null);

(statearr_29921_30031[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (26))){
var inst_29778 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29922 = state_29866;
(statearr_29922[(31)] = inst_29778);

return statearr_29922;
})();
var statearr_29923_30032 = state_29866__$1;
(statearr_29923_30032[(2)] = null);

(statearr_29923_30032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (16))){
var inst_29666 = (state_29866[(28)]);
var inst_29665 = (state_29866[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_29656 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29657 = [true,"ab"];
var inst_29658 = cljs.core.PersistentHashMap.fromArrays(inst_29656,inst_29657);
var inst_29659 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29660 = [true,(2)];
var inst_29661 = cljs.core.PersistentHashMap.fromArrays(inst_29659,inst_29660);
var inst_29662 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29658,inst_29661);
var inst_29663 = cljs.core.second.call(null,inst_29662);
var inst_29664 = (new cljs.core.List(null,"ab",null,(1),null));
var inst_29665__$1 = (new cljs.core.List(null,inst_29663,inst_29664,(2),null));
var inst_29666__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29665__$1);
var state_29866__$1 = (function (){var statearr_29924 = state_29866;
(statearr_29924[(28)] = inst_29666__$1);

(statearr_29924[(25)] = inst_29665__$1);

return statearr_29924;
})();
if(cljs.core.truth_(inst_29666__$1)){
var statearr_29925_30033 = state_29866__$1;
(statearr_29925_30033[(1)] = (17));

} else {
var statearr_29926_30034 = state_29866__$1;
(statearr_29926_30034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (38))){
var inst_29863 = (state_29866[(2)]);
var inst_29864 = done.call(null);
var state_29866__$1 = (function (){var statearr_29927 = state_29866;
(statearr_29927[(32)] = inst_29863);

return statearr_29927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29866__$1,inst_29864);
} else {
if((state_val_29867 === (30))){
var inst_29755 = (state_29866[(22)]);
var inst_29765 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29766 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_29767 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29768 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29769 = cljs.core.cons.call(null,inst_29768,inst_29755);
var inst_29770 = (new cljs.core.List(null,inst_29769,null,(1),null));
var inst_29771 = (new cljs.core.List(null,inst_29767,inst_29770,(2),null));
var inst_29772 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29766,inst_29771,null];
var inst_29773 = cljs.core.PersistentHashMap.fromArrays(inst_29765,inst_29772);
var inst_29774 = cljs.test.do_report.call(null,inst_29773);
var state_29866__$1 = state_29866;
var statearr_29928_30035 = state_29866__$1;
(statearr_29928_30035[(2)] = inst_29774);

(statearr_29928_30035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (10))){
var inst_29623 = (state_29866[(26)]);
var inst_29624 = (state_29866[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29866,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_29614 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_29615 = [true,"\n1"];
var inst_29616 = cljs.core.PersistentHashMap.fromArrays(inst_29614,inst_29615);
var inst_29617 = [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_29618 = [true,(2)];
var inst_29619 = cljs.core.PersistentHashMap.fromArrays(inst_29617,inst_29618);
var inst_29620 = klipse_clj.lang.clojure.result_as_str.call(null,inst_29616,inst_29619);
var inst_29621 = cljs.core.second.call(null,inst_29620);
var inst_29622 = (new cljs.core.List(null,"\n1",null,(1),null));
var inst_29623__$1 = (new cljs.core.List(null,inst_29621,inst_29622,(2),null));
var inst_29624__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_29623__$1);
var state_29866__$1 = (function (){var statearr_29929 = state_29866;
(statearr_29929[(26)] = inst_29623__$1);

(statearr_29929[(17)] = inst_29624__$1);

return statearr_29929;
})();
if(cljs.core.truth_(inst_29624__$1)){
var statearr_29930_30036 = state_29866__$1;
(statearr_29930_30036[(1)] = (11));

} else {
var statearr_29931_30037 = state_29866__$1;
(statearr_29931_30037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (18))){
var inst_29665 = (state_29866[(25)]);
var inst_29675 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29676 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"ab");
var inst_29677 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29678 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29679 = cljs.core.cons.call(null,inst_29678,inst_29665);
var inst_29680 = (new cljs.core.List(null,inst_29679,null,(1),null));
var inst_29681 = (new cljs.core.List(null,inst_29677,inst_29680,(2),null));
var inst_29682 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29676,inst_29681,null];
var inst_29683 = cljs.core.PersistentHashMap.fromArrays(inst_29675,inst_29682);
var inst_29684 = cljs.test.do_report.call(null,inst_29683);
var state_29866__$1 = state_29866;
var statearr_29932_30038 = state_29866__$1;
(statearr_29932_30038[(2)] = inst_29684);

(statearr_29932_30038[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (42))){
var inst_29840 = (state_29866[(16)]);
var inst_29850 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29851 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),true,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_29852 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29853 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_29854 = cljs.core.cons.call(null,inst_29853,inst_29840);
var inst_29855 = (new cljs.core.List(null,inst_29854,null,(1),null));
var inst_29856 = (new cljs.core.List(null,inst_29852,inst_29855,(2),null));
var inst_29857 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29851,inst_29856,null];
var inst_29858 = cljs.core.PersistentHashMap.fromArrays(inst_29850,inst_29857);
var inst_29859 = cljs.test.do_report.call(null,inst_29858);
var state_29866__$1 = state_29866;
var statearr_29933_30039 = state_29866__$1;
(statearr_29933_30039[(2)] = inst_29859);

(statearr_29933_30039[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (37))){
var inst_29798 = (state_29866[(24)]);
var inst_29818 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29934 = state_29866;
(statearr_29934[(33)] = inst_29818);

return statearr_29934;
})();
var statearr_29935_30040 = state_29866__$1;
(statearr_29935_30040[(2)] = inst_29798);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (8))){
var inst_29646 = (state_29866[(2)]);
var state_29866__$1 = (function (){var statearr_29936 = state_29866;
(statearr_29936[(34)] = inst_29646);

return statearr_29936;
})();
var statearr_29937_30041 = state_29866__$1;
(statearr_29937_30041[(2)] = null);

(statearr_29937_30041[(1)] = (16));


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
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_29938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29938[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_29938[(1)] = (1));

return statearr_29938;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_29866){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_29866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e29939){if((e29939 instanceof Object)){
var ex__15543__auto__ = e29939;
var statearr_29940_30042 = state_29866;
(statearr_29940_30042[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30043 = state_29866;
state_29866 = G__30043;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_29866){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_29866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_29941 = f__15635__auto__.call(null);
(statearr_29941[(6)] = c__15634__auto__);

return statearr_29941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29181","meta29181",1079164497,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test29180.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test29180.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test29180";

klipse_clj.eval_test.t_klipse_clj$eval_test29180.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test29180");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test29180.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test29180 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test29180(meta29181){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test29180(meta29181));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test29180(null));
});

klipse_clj.eval_test.display_evaluation_and_beautify.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.display_evaluation_and_beautify;},new cljs.core.Symbol("klipse-clj.eval-test","display-evaluation-and-beautify","klipse-clj.eval-test/display-evaluation-and-beautify",-754583455,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"display-evaluation-and-beautify","display-evaluation-and-beautify",-1975511930,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",41,1,234,234,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.display_evaluation_and_beautify)?klipse_clj.eval_test.display_evaluation_and_beautify.cljs$lang$test:null)]));
klipse_clj.eval_test.display_evaluation_and_crop = (function klipse_clj$eval_test$display_evaluation_and_crop(){
return cljs.test.test_var.call(null,klipse_clj.eval_test.display_evaluation_and_crop.cljs$lang$var);
});
klipse_clj.eval_test.display_evaluation_and_crop.cljs$lang$test = (function (){

if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.eval_test !== 'undefined') && (typeof klipse_clj.eval_test.t_klipse_clj$eval_test30044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
klipse_clj.eval_test.t_klipse_clj$eval_test30044 = (function (meta30045){
this.meta30045 = meta30045;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30046,meta30045__$1){
var self__ = this;
var _30046__$1 = this;
return (new klipse_clj.eval_test.t_klipse_clj$eval_test30044(meta30045__$1));
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30046){
var self__ = this;
var _30046__$1 = this;
return self__.meta30045;
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___22472__auto__ = self____$1;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__,self____$1){
return (function (state_30351){
var state_val_30352 = (state_30351[(1)]);
if((state_val_30352 === (7))){
var inst_30067 = (state_30351[(7)]);
var inst_30087 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30353 = state_30351;
(statearr_30353[(8)] = inst_30087);

return statearr_30353;
})();
var statearr_30354_30806 = state_30351__$1;
(statearr_30354_30806[(2)] = inst_30067);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (20))){
var inst_30218 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30355 = state_30351;
(statearr_30355[(9)] = inst_30218);

return statearr_30355;
})();
var statearr_30356_30807 = state_30351__$1;
(statearr_30356_30807[(2)] = null);

(statearr_30356_30807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (27))){
var inst_30219 = (state_30351[(2)]);
var inst_30220 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30221 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30222 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30221,inst_30219,null];
var inst_30223 = cljs.core.PersistentHashMap.fromArrays(inst_30220,inst_30222);
var inst_30224 = cljs.test.do_report.call(null,inst_30223);
var state_30351__$1 = state_30351;
var statearr_30357_30808 = state_30351__$1;
(statearr_30357_30808[(2)] = inst_30224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (1))){
var state_30351__$1 = state_30351;
var statearr_30358_30809 = state_30351__$1;
(statearr_30358_30809[(2)] = null);

(statearr_30358_30809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (24))){
var inst_30195 = (state_30351[(10)]);
var inst_30205 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30206 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30207 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30208 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30209 = cljs.core.cons.call(null,inst_30208,inst_30195);
var inst_30210 = (new cljs.core.List(null,inst_30209,null,(1),null));
var inst_30211 = (new cljs.core.List(null,inst_30207,inst_30210,(2),null));
var inst_30212 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30206,inst_30211,null];
var inst_30213 = cljs.core.PersistentHashMap.fromArrays(inst_30205,inst_30212);
var inst_30214 = cljs.test.do_report.call(null,inst_30213);
var state_30351__$1 = state_30351;
var statearr_30359_30810 = state_30351__$1;
(statearr_30359_30810[(2)] = inst_30214);

(statearr_30359_30810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (39))){
var inst_30306 = (state_30351[(2)]);
var inst_30307 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30308 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30309 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30308,inst_30306,null];
var inst_30310 = cljs.core.PersistentHashMap.fromArrays(inst_30307,inst_30309);
var inst_30311 = cljs.test.do_report.call(null,inst_30310);
var state_30351__$1 = state_30351;
var statearr_30360_30811 = state_30351__$1;
(statearr_30360_30811[(2)] = inst_30311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (4))){
var inst_30066 = (state_30351[(11)]);
var inst_30067 = (state_30351[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30057 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30058 = [true,null];
var inst_30059 = cljs.core.PersistentHashMap.fromArrays(inst_30057,inst_30058);
var inst_30060 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30061 = [(2)];
var inst_30062 = cljs.core.PersistentHashMap.fromArrays(inst_30060,inst_30061);
var inst_30063 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30059,inst_30062);
var inst_30064 = cljs.core.second.call(null,inst_30063);
var inst_30065 = (new cljs.core.List(null,"nil",null,(1),null));
var inst_30066__$1 = (new cljs.core.List(null,inst_30064,inst_30065,(2),null));
var inst_30067__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30066__$1);
var state_30351__$1 = (function (){var statearr_30361 = state_30351;
(statearr_30361[(11)] = inst_30066__$1);

(statearr_30361[(7)] = inst_30067__$1);

return statearr_30361;
})();
if(cljs.core.truth_(inst_30067__$1)){
var statearr_30362_30812 = state_30351__$1;
(statearr_30362_30812[(1)] = (5));

} else {
var statearr_30363_30813 = state_30351__$1;
(statearr_30363_30813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (15))){
var inst_30132 = (state_30351[(2)]);
var inst_30133 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30134 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30135 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30134,inst_30132,null];
var inst_30136 = cljs.core.PersistentHashMap.fromArrays(inst_30133,inst_30135);
var inst_30137 = cljs.test.do_report.call(null,inst_30136);
var state_30351__$1 = state_30351;
var statearr_30364_30814 = state_30351__$1;
(statearr_30364_30814[(2)] = inst_30137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (21))){
var inst_30174 = (state_30351[(2)]);
var inst_30175 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30176 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30177 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30176,inst_30174,null];
var inst_30178 = cljs.core.PersistentHashMap.fromArrays(inst_30175,inst_30177);
var inst_30179 = cljs.test.do_report.call(null,inst_30178);
var state_30351__$1 = state_30351;
var statearr_30365_30815 = state_30351__$1;
(statearr_30365_30815[(2)] = inst_30179);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (31))){
var inst_30241 = (state_30351[(12)]);
var inst_30261 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30366 = state_30351;
(statearr_30366[(13)] = inst_30261);

return statearr_30366;
})();
var statearr_30367_30816 = state_30351__$1;
(statearr_30367_30816[(2)] = inst_30241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (32))){
var inst_30305 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30368 = state_30351;
(statearr_30368[(14)] = inst_30305);

return statearr_30368;
})();
var statearr_30369_30817 = state_30351__$1;
(statearr_30369_30817[(2)] = null);

(statearr_30369_30817[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (40))){
var inst_30326 = (state_30351[(15)]);
var inst_30325 = (state_30351[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_30315 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30316 = cljs.core.range.call(null);
var inst_30317 = [true,inst_30316];
var inst_30318 = cljs.core.PersistentHashMap.fromArrays(inst_30315,inst_30317);
var inst_30319 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30320 = [(2)];
var inst_30321 = cljs.core.PersistentHashMap.fromArrays(inst_30319,inst_30320);
var inst_30322 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30318,inst_30321);
var inst_30323 = cljs.core.second.call(null,inst_30322);
var inst_30324 = (new cljs.core.List(null,"(0 1 ...)",null,(1),null));
var inst_30325__$1 = (new cljs.core.List(null,inst_30323,inst_30324,(2),null));
var inst_30326__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30325__$1);
var state_30351__$1 = (function (){var statearr_30370 = state_30351;
(statearr_30370[(15)] = inst_30326__$1);

(statearr_30370[(16)] = inst_30325__$1);

return statearr_30370;
})();
if(cljs.core.truth_(inst_30326__$1)){
var statearr_30371_30818 = state_30351__$1;
(statearr_30371_30818[(1)] = (41));

} else {
var statearr_30372_30819 = state_30351__$1;
(statearr_30372_30819[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (33))){
var inst_30264 = (state_30351[(2)]);
var inst_30265 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30266 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30267 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30266,inst_30264,null];
var inst_30268 = cljs.core.PersistentHashMap.fromArrays(inst_30265,inst_30267);
var inst_30269 = cljs.test.do_report.call(null,inst_30268);
var state_30351__$1 = state_30351;
var statearr_30373_30820 = state_30351__$1;
(statearr_30373_30820[(2)] = inst_30269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (13))){
var inst_30109 = (state_30351[(17)]);
var inst_30129 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30374 = state_30351;
(statearr_30374[(18)] = inst_30129);

return statearr_30374;
})();
var statearr_30375_30821 = state_30351__$1;
(statearr_30375_30821[(2)] = inst_30109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (22))){
var inst_30196 = (state_30351[(19)]);
var inst_30195 = (state_30351[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_30183 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30184 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30185 = [(1),(2)];
var inst_30186 = (new cljs.core.PersistentVector(null,2,(5),inst_30184,inst_30185,null));
var inst_30187 = [true,inst_30186];
var inst_30188 = cljs.core.PersistentHashMap.fromArrays(inst_30183,inst_30187);
var inst_30189 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30190 = [(2)];
var inst_30191 = cljs.core.PersistentHashMap.fromArrays(inst_30189,inst_30190);
var inst_30192 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30188,inst_30191);
var inst_30193 = cljs.core.second.call(null,inst_30192);
var inst_30194 = (new cljs.core.List(null,"[1 2]",null,(1),null));
var inst_30195__$1 = (new cljs.core.List(null,inst_30193,inst_30194,(2),null));
var inst_30196__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30195__$1);
var state_30351__$1 = (function (){var statearr_30376 = state_30351;
(statearr_30376[(19)] = inst_30196__$1);

(statearr_30376[(10)] = inst_30195__$1);

return statearr_30376;
})();
if(cljs.core.truth_(inst_30196__$1)){
var statearr_30377_30822 = state_30351__$1;
(statearr_30377_30822[(1)] = (23));

} else {
var statearr_30378_30823 = state_30351__$1;
(statearr_30378_30823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (36))){
var inst_30282 = (state_30351[(20)]);
var inst_30292 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30293 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30294 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30295 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30296 = cljs.core.cons.call(null,inst_30295,inst_30282);
var inst_30297 = (new cljs.core.List(null,inst_30296,null,(1),null));
var inst_30298 = (new cljs.core.List(null,inst_30294,inst_30297,(2),null));
var inst_30299 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30293,inst_30298,null];
var inst_30300 = cljs.core.PersistentHashMap.fromArrays(inst_30292,inst_30299);
var inst_30301 = cljs.test.do_report.call(null,inst_30300);
var state_30351__$1 = state_30351;
var statearr_30379_30824 = state_30351__$1;
(statearr_30379_30824[(2)] = inst_30301);

(statearr_30379_30824[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (41))){
var inst_30325 = (state_30351[(16)]);
var inst_30328 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30329 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30330 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30325);
var inst_30331 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30329,inst_30330,null];
var inst_30332 = cljs.core.PersistentHashMap.fromArrays(inst_30328,inst_30331);
var inst_30333 = cljs.test.do_report.call(null,inst_30332);
var state_30351__$1 = state_30351;
var statearr_30380_30825 = state_30351__$1;
(statearr_30380_30825[(2)] = inst_30333);

(statearr_30380_30825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (43))){
var inst_30326 = (state_30351[(15)]);
var inst_30346 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30381 = state_30351;
(statearr_30381[(21)] = inst_30346);

return statearr_30381;
})();
var statearr_30382_30826 = state_30351__$1;
(statearr_30382_30826[(2)] = inst_30326);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (29))){
var inst_30240 = (state_30351[(22)]);
var inst_30243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30244 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30245 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30240);
var inst_30246 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30244,inst_30245,null];
var inst_30247 = cljs.core.PersistentHashMap.fromArrays(inst_30243,inst_30246);
var inst_30248 = cljs.test.do_report.call(null,inst_30247);
var state_30351__$1 = state_30351;
var statearr_30383_30827 = state_30351__$1;
(statearr_30383_30827[(2)] = inst_30248);

(statearr_30383_30827[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (6))){
var inst_30066 = (state_30351[(11)]);
var inst_30076 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30077 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30078 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30079 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30080 = cljs.core.cons.call(null,inst_30079,inst_30066);
var inst_30081 = (new cljs.core.List(null,inst_30080,null,(1),null));
var inst_30082 = (new cljs.core.List(null,inst_30078,inst_30081,(2),null));
var inst_30083 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30077,inst_30082,null];
var inst_30084 = cljs.core.PersistentHashMap.fromArrays(inst_30076,inst_30083);
var inst_30085 = cljs.test.do_report.call(null,inst_30084);
var state_30351__$1 = state_30351;
var statearr_30384_30828 = state_30351__$1;
(statearr_30384_30828[(2)] = inst_30085);

(statearr_30384_30828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (28))){
var inst_30240 = (state_30351[(22)]);
var inst_30241 = (state_30351[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_30228 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30230 = [(1),(2),(3),(4),(5)];
var inst_30231 = (new cljs.core.PersistentVector(null,5,(5),inst_30229,inst_30230,null));
var inst_30232 = [true,inst_30231];
var inst_30233 = cljs.core.PersistentHashMap.fromArrays(inst_30228,inst_30232);
var inst_30234 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30235 = [(2)];
var inst_30236 = cljs.core.PersistentHashMap.fromArrays(inst_30234,inst_30235);
var inst_30237 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30233,inst_30236);
var inst_30238 = cljs.core.second.call(null,inst_30237);
var inst_30239 = (new cljs.core.List(null,"[1 2 ...]",null,(1),null));
var inst_30240__$1 = (new cljs.core.List(null,inst_30238,inst_30239,(2),null));
var inst_30241__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30240__$1);
var state_30351__$1 = (function (){var statearr_30385 = state_30351;
(statearr_30385[(22)] = inst_30240__$1);

(statearr_30385[(12)] = inst_30241__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30241__$1)){
var statearr_30386_30829 = state_30351__$1;
(statearr_30386_30829[(1)] = (29));

} else {
var statearr_30387_30830 = state_30351__$1;
(statearr_30387_30830[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (25))){
var inst_30196 = (state_30351[(19)]);
var inst_30216 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30388 = state_30351;
(statearr_30388[(23)] = inst_30216);

return statearr_30388;
})();
var statearr_30389_30831 = state_30351__$1;
(statearr_30389_30831[(2)] = inst_30196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (34))){
var inst_30282 = (state_30351[(20)]);
var inst_30283 = (state_30351[(24)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_30273 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30274 = [true,"abcdef"];
var inst_30275 = cljs.core.PersistentHashMap.fromArrays(inst_30273,inst_30274);
var inst_30276 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30277 = [(2)];
var inst_30278 = cljs.core.PersistentHashMap.fromArrays(inst_30276,inst_30277);
var inst_30279 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30275,inst_30278);
var inst_30280 = cljs.core.second.call(null,inst_30279);
var inst_30281 = (new cljs.core.List(null,"\"abcdef\"",null,(1),null));
var inst_30282__$1 = (new cljs.core.List(null,inst_30280,inst_30281,(2),null));
var inst_30283__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30282__$1);
var state_30351__$1 = (function (){var statearr_30390 = state_30351;
(statearr_30390[(20)] = inst_30282__$1);

(statearr_30390[(24)] = inst_30283__$1);

return statearr_30390;
})();
if(cljs.core.truth_(inst_30283__$1)){
var statearr_30391_30832 = state_30351__$1;
(statearr_30391_30832[(1)] = (35));

} else {
var statearr_30392_30833 = state_30351__$1;
(statearr_30392_30833[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (17))){
var inst_30150 = (state_30351[(25)]);
var inst_30153 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30154 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30155 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30150);
var inst_30156 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30154,inst_30155,null];
var inst_30157 = cljs.core.PersistentHashMap.fromArrays(inst_30153,inst_30156);
var inst_30158 = cljs.test.do_report.call(null,inst_30157);
var state_30351__$1 = state_30351;
var statearr_30393_30834 = state_30351__$1;
(statearr_30393_30834[(2)] = inst_30158);

(statearr_30393_30834[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (3))){
var inst_30048 = (state_30351[(2)]);
var inst_30049 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30050 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30051 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30050,inst_30048,null];
var inst_30052 = cljs.core.PersistentHashMap.fromArrays(inst_30049,inst_30051);
var inst_30053 = cljs.test.do_report.call(null,inst_30052);
var state_30351__$1 = state_30351;
var statearr_30394_30835 = state_30351__$1;
(statearr_30394_30835[(2)] = inst_30053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (12))){
var inst_30108 = (state_30351[(26)]);
var inst_30118 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30119 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30120 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30121 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30122 = cljs.core.cons.call(null,inst_30121,inst_30108);
var inst_30123 = (new cljs.core.List(null,inst_30122,null,(1),null));
var inst_30124 = (new cljs.core.List(null,inst_30120,inst_30123,(2),null));
var inst_30125 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30119,inst_30124,null];
var inst_30126 = cljs.core.PersistentHashMap.fromArrays(inst_30118,inst_30125);
var inst_30127 = cljs.test.do_report.call(null,inst_30126);
var state_30351__$1 = state_30351;
var statearr_30395_30836 = state_30351__$1;
(statearr_30395_30836[(2)] = inst_30127);

(statearr_30395_30836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (2))){
var inst_30089 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30396 = state_30351;
(statearr_30396[(27)] = inst_30089);

return statearr_30396;
})();
var statearr_30397_30837 = state_30351__$1;
(statearr_30397_30837[(2)] = null);

(statearr_30397_30837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (23))){
var inst_30195 = (state_30351[(10)]);
var inst_30198 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30199 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30200 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30195);
var inst_30201 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30199,inst_30200,null];
var inst_30202 = cljs.core.PersistentHashMap.fromArrays(inst_30198,inst_30201);
var inst_30203 = cljs.test.do_report.call(null,inst_30202);
var state_30351__$1 = state_30351;
var statearr_30398_30838 = state_30351__$1;
(statearr_30398_30838[(2)] = inst_30203);

(statearr_30398_30838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (35))){
var inst_30282 = (state_30351[(20)]);
var inst_30285 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30286 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30287 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30282);
var inst_30288 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30286,inst_30287,null];
var inst_30289 = cljs.core.PersistentHashMap.fromArrays(inst_30285,inst_30288);
var inst_30290 = cljs.test.do_report.call(null,inst_30289);
var state_30351__$1 = state_30351;
var statearr_30399_30839 = state_30351__$1;
(statearr_30399_30839[(2)] = inst_30290);

(statearr_30399_30839[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (19))){
var inst_30151 = (state_30351[(28)]);
var inst_30171 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30400 = state_30351;
(statearr_30400[(29)] = inst_30171);

return statearr_30400;
})();
var statearr_30401_30840 = state_30351__$1;
(statearr_30401_30840[(2)] = inst_30151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (11))){
var inst_30108 = (state_30351[(26)]);
var inst_30111 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30112 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30113 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30108);
var inst_30114 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30112,inst_30113,null];
var inst_30115 = cljs.core.PersistentHashMap.fromArrays(inst_30111,inst_30114);
var inst_30116 = cljs.test.do_report.call(null,inst_30115);
var state_30351__$1 = state_30351;
var statearr_30402_30841 = state_30351__$1;
(statearr_30402_30841[(2)] = inst_30116);

(statearr_30402_30841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (9))){
var inst_30090 = (state_30351[(2)]);
var inst_30091 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30092 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30093 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30092,inst_30090,null];
var inst_30094 = cljs.core.PersistentHashMap.fromArrays(inst_30091,inst_30093);
var inst_30095 = cljs.test.do_report.call(null,inst_30094);
var state_30351__$1 = state_30351;
var statearr_30403_30842 = state_30351__$1;
(statearr_30403_30842[(2)] = inst_30095);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (5))){
var inst_30066 = (state_30351[(11)]);
var inst_30069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30070 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30071 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30066);
var inst_30072 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30070,inst_30071,null];
var inst_30073 = cljs.core.PersistentHashMap.fromArrays(inst_30069,inst_30072);
var inst_30074 = cljs.test.do_report.call(null,inst_30073);
var state_30351__$1 = state_30351;
var statearr_30404_30843 = state_30351__$1;
(statearr_30404_30843[(2)] = inst_30074);

(statearr_30404_30843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (14))){
var inst_30173 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30405 = state_30351;
(statearr_30405[(30)] = inst_30173);

return statearr_30405;
})();
var statearr_30406_30844 = state_30351__$1;
(statearr_30406_30844[(2)] = null);

(statearr_30406_30844[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (26))){
var inst_30263 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30407 = state_30351;
(statearr_30407[(31)] = inst_30263);

return statearr_30407;
})();
var statearr_30408_30845 = state_30351__$1;
(statearr_30408_30845[(2)] = null);

(statearr_30408_30845[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (16))){
var inst_30150 = (state_30351[(25)]);
var inst_30151 = (state_30351[(28)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_30141 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30142 = [true,"ab"];
var inst_30143 = cljs.core.PersistentHashMap.fromArrays(inst_30141,inst_30142);
var inst_30144 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30145 = [(2)];
var inst_30146 = cljs.core.PersistentHashMap.fromArrays(inst_30144,inst_30145);
var inst_30147 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30143,inst_30146);
var inst_30148 = cljs.core.second.call(null,inst_30147);
var inst_30149 = (new cljs.core.List(null,"\"ab\"",null,(1),null));
var inst_30150__$1 = (new cljs.core.List(null,inst_30148,inst_30149,(2),null));
var inst_30151__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30150__$1);
var state_30351__$1 = (function (){var statearr_30409 = state_30351;
(statearr_30409[(25)] = inst_30150__$1);

(statearr_30409[(28)] = inst_30151__$1);

return statearr_30409;
})();
if(cljs.core.truth_(inst_30151__$1)){
var statearr_30410_30846 = state_30351__$1;
(statearr_30410_30846[(1)] = (17));

} else {
var statearr_30411_30847 = state_30351__$1;
(statearr_30411_30847[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (38))){
var inst_30348 = (state_30351[(2)]);
var inst_30349 = done.call(null);
var state_30351__$1 = (function (){var statearr_30412 = state_30351;
(statearr_30412[(32)] = inst_30348);

return statearr_30412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30351__$1,inst_30349);
} else {
if((state_val_30352 === (30))){
var inst_30240 = (state_30351[(22)]);
var inst_30250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30251 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30252 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30253 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30254 = cljs.core.cons.call(null,inst_30253,inst_30240);
var inst_30255 = (new cljs.core.List(null,inst_30254,null,(1),null));
var inst_30256 = (new cljs.core.List(null,inst_30252,inst_30255,(2),null));
var inst_30257 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30251,inst_30256,null];
var inst_30258 = cljs.core.PersistentHashMap.fromArrays(inst_30250,inst_30257);
var inst_30259 = cljs.test.do_report.call(null,inst_30258);
var state_30351__$1 = state_30351;
var statearr_30413_30848 = state_30351__$1;
(statearr_30413_30848[(2)] = inst_30259);

(statearr_30413_30848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (10))){
var inst_30108 = (state_30351[(26)]);
var inst_30109 = (state_30351[(17)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30351,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_30099 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30100 = [true,"\n1"];
var inst_30101 = cljs.core.PersistentHashMap.fromArrays(inst_30099,inst_30100);
var inst_30102 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30103 = [(2)];
var inst_30104 = cljs.core.PersistentHashMap.fromArrays(inst_30102,inst_30103);
var inst_30105 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30101,inst_30104);
var inst_30106 = cljs.core.second.call(null,inst_30105);
var inst_30107 = (new cljs.core.List(null,"\"\\n1\"",null,(1),null));
var inst_30108__$1 = (new cljs.core.List(null,inst_30106,inst_30107,(2),null));
var inst_30109__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30108__$1);
var state_30351__$1 = (function (){var statearr_30414 = state_30351;
(statearr_30414[(26)] = inst_30108__$1);

(statearr_30414[(17)] = inst_30109__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30109__$1)){
var statearr_30415_30849 = state_30351__$1;
(statearr_30415_30849[(1)] = (11));

} else {
var statearr_30416_30850 = state_30351__$1;
(statearr_30416_30850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (18))){
var inst_30150 = (state_30351[(25)]);
var inst_30160 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30161 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30162 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30163 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30164 = cljs.core.cons.call(null,inst_30163,inst_30150);
var inst_30165 = (new cljs.core.List(null,inst_30164,null,(1),null));
var inst_30166 = (new cljs.core.List(null,inst_30162,inst_30165,(2),null));
var inst_30167 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30161,inst_30166,null];
var inst_30168 = cljs.core.PersistentHashMap.fromArrays(inst_30160,inst_30167);
var inst_30169 = cljs.test.do_report.call(null,inst_30168);
var state_30351__$1 = state_30351;
var statearr_30417_30851 = state_30351__$1;
(statearr_30417_30851[(2)] = inst_30169);

(statearr_30417_30851[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (42))){
var inst_30325 = (state_30351[(16)]);
var inst_30335 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30336 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30337 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30338 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30339 = cljs.core.cons.call(null,inst_30338,inst_30325);
var inst_30340 = (new cljs.core.List(null,inst_30339,null,(1),null));
var inst_30341 = (new cljs.core.List(null,inst_30337,inst_30340,(2),null));
var inst_30342 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30336,inst_30341,null];
var inst_30343 = cljs.core.PersistentHashMap.fromArrays(inst_30335,inst_30342);
var inst_30344 = cljs.test.do_report.call(null,inst_30343);
var state_30351__$1 = state_30351;
var statearr_30418_30852 = state_30351__$1;
(statearr_30418_30852[(2)] = inst_30344);

(statearr_30418_30852[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (37))){
var inst_30283 = (state_30351[(24)]);
var inst_30303 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30419 = state_30351;
(statearr_30419[(33)] = inst_30303);

return statearr_30419;
})();
var statearr_30420_30853 = state_30351__$1;
(statearr_30420_30853[(2)] = inst_30283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30352 === (8))){
var inst_30131 = (state_30351[(2)]);
var state_30351__$1 = (function (){var statearr_30421 = state_30351;
(statearr_30421[(34)] = inst_30131);

return statearr_30421;
})();
var statearr_30422_30854 = state_30351__$1;
(statearr_30422_30854[(2)] = null);

(statearr_30422_30854[(1)] = (16));


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
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_30423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30423[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_30423[(1)] = (1));

return statearr_30423;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_30351){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_30351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object)){
var ex__15543__auto__ = e30424;
var statearr_30425_30855 = state_30351;
(statearr_30425_30855[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30856 = state_30351;
state_30351 = G__30856;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_30351){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_30351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__,self____$1))
})();
var state__15636__auto__ = (function (){var statearr_30426 = f__15635__auto__.call(null);
(statearr_30426[(6)] = c__15634__auto__);

return statearr_30426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__,self____$1))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.apply = (function (self__,args30047){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30047)));
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___22472__auto__ = this;
var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__,___22472__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__,___22472__auto__){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (7))){
var inst_30446 = (state_30730[(7)]);
var inst_30466 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30732 = state_30730;
(statearr_30732[(8)] = inst_30466);

return statearr_30732;
})();
var statearr_30733_30857 = state_30730__$1;
(statearr_30733_30857[(2)] = inst_30446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (20))){
var inst_30597 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30734 = state_30730;
(statearr_30734[(9)] = inst_30597);

return statearr_30734;
})();
var statearr_30735_30858 = state_30730__$1;
(statearr_30735_30858[(2)] = null);

(statearr_30735_30858[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (27))){
var inst_30598 = (state_30730[(2)]);
var inst_30599 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30600 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30601 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30600,inst_30598,null];
var inst_30602 = cljs.core.PersistentHashMap.fromArrays(inst_30599,inst_30601);
var inst_30603 = cljs.test.do_report.call(null,inst_30602);
var state_30730__$1 = state_30730;
var statearr_30736_30859 = state_30730__$1;
(statearr_30736_30859[(2)] = inst_30603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (1))){
var state_30730__$1 = state_30730;
var statearr_30737_30860 = state_30730__$1;
(statearr_30737_30860[(2)] = null);

(statearr_30737_30860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (24))){
var inst_30574 = (state_30730[(10)]);
var inst_30584 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30585 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30586 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30587 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30588 = cljs.core.cons.call(null,inst_30587,inst_30574);
var inst_30589 = (new cljs.core.List(null,inst_30588,null,(1),null));
var inst_30590 = (new cljs.core.List(null,inst_30586,inst_30589,(2),null));
var inst_30591 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30585,inst_30590,null];
var inst_30592 = cljs.core.PersistentHashMap.fromArrays(inst_30584,inst_30591);
var inst_30593 = cljs.test.do_report.call(null,inst_30592);
var state_30730__$1 = state_30730;
var statearr_30738_30861 = state_30730__$1;
(statearr_30738_30861[(2)] = inst_30593);

(statearr_30738_30861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (39))){
var inst_30685 = (state_30730[(2)]);
var inst_30686 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30687 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30688 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30687,inst_30685,null];
var inst_30689 = cljs.core.PersistentHashMap.fromArrays(inst_30686,inst_30688);
var inst_30690 = cljs.test.do_report.call(null,inst_30689);
var state_30730__$1 = state_30730;
var statearr_30739_30862 = state_30730__$1;
(statearr_30739_30862[(2)] = inst_30690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (4))){
var inst_30445 = (state_30730[(11)]);
var inst_30446 = (state_30730[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30436 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30437 = [true,null];
var inst_30438 = cljs.core.PersistentHashMap.fromArrays(inst_30436,inst_30437);
var inst_30439 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30440 = [(2)];
var inst_30441 = cljs.core.PersistentHashMap.fromArrays(inst_30439,inst_30440);
var inst_30442 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30438,inst_30441);
var inst_30443 = cljs.core.second.call(null,inst_30442);
var inst_30444 = (new cljs.core.List(null,"nil",null,(1),null));
var inst_30445__$1 = (new cljs.core.List(null,inst_30443,inst_30444,(2),null));
var inst_30446__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30445__$1);
var state_30730__$1 = (function (){var statearr_30740 = state_30730;
(statearr_30740[(11)] = inst_30445__$1);

(statearr_30740[(7)] = inst_30446__$1);

return statearr_30740;
})();
if(cljs.core.truth_(inst_30446__$1)){
var statearr_30741_30863 = state_30730__$1;
(statearr_30741_30863[(1)] = (5));

} else {
var statearr_30742_30864 = state_30730__$1;
(statearr_30742_30864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (15))){
var inst_30511 = (state_30730[(2)]);
var inst_30512 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30513 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30514 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30513,inst_30511,null];
var inst_30515 = cljs.core.PersistentHashMap.fromArrays(inst_30512,inst_30514);
var inst_30516 = cljs.test.do_report.call(null,inst_30515);
var state_30730__$1 = state_30730;
var statearr_30743_30865 = state_30730__$1;
(statearr_30743_30865[(2)] = inst_30516);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (21))){
var inst_30553 = (state_30730[(2)]);
var inst_30554 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30555 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30556 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30555,inst_30553,null];
var inst_30557 = cljs.core.PersistentHashMap.fromArrays(inst_30554,inst_30556);
var inst_30558 = cljs.test.do_report.call(null,inst_30557);
var state_30730__$1 = state_30730;
var statearr_30744_30866 = state_30730__$1;
(statearr_30744_30866[(2)] = inst_30558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (31))){
var inst_30620 = (state_30730[(12)]);
var inst_30640 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30745 = state_30730;
(statearr_30745[(13)] = inst_30640);

return statearr_30745;
})();
var statearr_30746_30867 = state_30730__$1;
(statearr_30746_30867[(2)] = inst_30620);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (32))){
var inst_30684 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30747 = state_30730;
(statearr_30747[(14)] = inst_30684);

return statearr_30747;
})();
var statearr_30748_30868 = state_30730__$1;
(statearr_30748_30868[(2)] = null);

(statearr_30748_30868[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (40))){
var inst_30704 = (state_30730[(15)]);
var inst_30705 = (state_30730[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(39),new cljs.core.Keyword(null,"default","default",-1987822328),null,(38));
var inst_30694 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30695 = cljs.core.range.call(null);
var inst_30696 = [true,inst_30695];
var inst_30697 = cljs.core.PersistentHashMap.fromArrays(inst_30694,inst_30696);
var inst_30698 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30699 = [(2)];
var inst_30700 = cljs.core.PersistentHashMap.fromArrays(inst_30698,inst_30699);
var inst_30701 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30697,inst_30700);
var inst_30702 = cljs.core.second.call(null,inst_30701);
var inst_30703 = (new cljs.core.List(null,"(0 1 ...)",null,(1),null));
var inst_30704__$1 = (new cljs.core.List(null,inst_30702,inst_30703,(2),null));
var inst_30705__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30704__$1);
var state_30730__$1 = (function (){var statearr_30749 = state_30730;
(statearr_30749[(15)] = inst_30704__$1);

(statearr_30749[(16)] = inst_30705__$1);

return statearr_30749;
})();
if(cljs.core.truth_(inst_30705__$1)){
var statearr_30750_30869 = state_30730__$1;
(statearr_30750_30869[(1)] = (41));

} else {
var statearr_30751_30870 = state_30730__$1;
(statearr_30751_30870[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (33))){
var inst_30643 = (state_30730[(2)]);
var inst_30644 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30645 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30646 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30645,inst_30643,null];
var inst_30647 = cljs.core.PersistentHashMap.fromArrays(inst_30644,inst_30646);
var inst_30648 = cljs.test.do_report.call(null,inst_30647);
var state_30730__$1 = state_30730;
var statearr_30752_30871 = state_30730__$1;
(statearr_30752_30871[(2)] = inst_30648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (13))){
var inst_30488 = (state_30730[(17)]);
var inst_30508 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30753 = state_30730;
(statearr_30753[(18)] = inst_30508);

return statearr_30753;
})();
var statearr_30754_30872 = state_30730__$1;
(statearr_30754_30872[(2)] = inst_30488);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (22))){
var inst_30574 = (state_30730[(10)]);
var inst_30575 = (state_30730[(19)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(21),new cljs.core.Keyword(null,"default","default",-1987822328),null,(20));
var inst_30562 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30563 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30564 = [(1),(2)];
var inst_30565 = (new cljs.core.PersistentVector(null,2,(5),inst_30563,inst_30564,null));
var inst_30566 = [true,inst_30565];
var inst_30567 = cljs.core.PersistentHashMap.fromArrays(inst_30562,inst_30566);
var inst_30568 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30569 = [(2)];
var inst_30570 = cljs.core.PersistentHashMap.fromArrays(inst_30568,inst_30569);
var inst_30571 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30567,inst_30570);
var inst_30572 = cljs.core.second.call(null,inst_30571);
var inst_30573 = (new cljs.core.List(null,"[1 2]",null,(1),null));
var inst_30574__$1 = (new cljs.core.List(null,inst_30572,inst_30573,(2),null));
var inst_30575__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30574__$1);
var state_30730__$1 = (function (){var statearr_30755 = state_30730;
(statearr_30755[(10)] = inst_30574__$1);

(statearr_30755[(19)] = inst_30575__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30575__$1)){
var statearr_30756_30873 = state_30730__$1;
(statearr_30756_30873[(1)] = (23));

} else {
var statearr_30757_30874 = state_30730__$1;
(statearr_30757_30874[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (36))){
var inst_30661 = (state_30730[(20)]);
var inst_30671 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30672 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30673 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30674 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30675 = cljs.core.cons.call(null,inst_30674,inst_30661);
var inst_30676 = (new cljs.core.List(null,inst_30675,null,(1),null));
var inst_30677 = (new cljs.core.List(null,inst_30673,inst_30676,(2),null));
var inst_30678 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30672,inst_30677,null];
var inst_30679 = cljs.core.PersistentHashMap.fromArrays(inst_30671,inst_30678);
var inst_30680 = cljs.test.do_report.call(null,inst_30679);
var state_30730__$1 = state_30730;
var statearr_30758_30875 = state_30730__$1;
(statearr_30758_30875[(2)] = inst_30680);

(statearr_30758_30875[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (41))){
var inst_30704 = (state_30730[(15)]);
var inst_30707 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30708 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30709 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30704);
var inst_30710 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30708,inst_30709,null];
var inst_30711 = cljs.core.PersistentHashMap.fromArrays(inst_30707,inst_30710);
var inst_30712 = cljs.test.do_report.call(null,inst_30711);
var state_30730__$1 = state_30730;
var statearr_30759_30876 = state_30730__$1;
(statearr_30759_30876[(2)] = inst_30712);

(statearr_30759_30876[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (43))){
var inst_30705 = (state_30730[(16)]);
var inst_30725 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30760 = state_30730;
(statearr_30760[(21)] = inst_30725);

return statearr_30760;
})();
var statearr_30761_30877 = state_30730__$1;
(statearr_30761_30877[(2)] = inst_30705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (29))){
var inst_30619 = (state_30730[(22)]);
var inst_30622 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30623 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30624 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30619);
var inst_30625 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30623,inst_30624,null];
var inst_30626 = cljs.core.PersistentHashMap.fromArrays(inst_30622,inst_30625);
var inst_30627 = cljs.test.do_report.call(null,inst_30626);
var state_30730__$1 = state_30730;
var statearr_30762_30878 = state_30730__$1;
(statearr_30762_30878[(2)] = inst_30627);

(statearr_30762_30878[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (6))){
var inst_30445 = (state_30730[(11)]);
var inst_30455 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30456 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30457 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30458 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30459 = cljs.core.cons.call(null,inst_30458,inst_30445);
var inst_30460 = (new cljs.core.List(null,inst_30459,null,(1),null));
var inst_30461 = (new cljs.core.List(null,inst_30457,inst_30460,(2),null));
var inst_30462 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30456,inst_30461,null];
var inst_30463 = cljs.core.PersistentHashMap.fromArrays(inst_30455,inst_30462);
var inst_30464 = cljs.test.do_report.call(null,inst_30463);
var state_30730__$1 = state_30730;
var statearr_30763_30879 = state_30730__$1;
(statearr_30763_30879[(2)] = inst_30464);

(statearr_30763_30879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (28))){
var inst_30619 = (state_30730[(22)]);
var inst_30620 = (state_30730[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(27),new cljs.core.Keyword(null,"default","default",-1987822328),null,(26));
var inst_30607 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30609 = [(1),(2),(3),(4),(5)];
var inst_30610 = (new cljs.core.PersistentVector(null,5,(5),inst_30608,inst_30609,null));
var inst_30611 = [true,inst_30610];
var inst_30612 = cljs.core.PersistentHashMap.fromArrays(inst_30607,inst_30611);
var inst_30613 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30614 = [(2)];
var inst_30615 = cljs.core.PersistentHashMap.fromArrays(inst_30613,inst_30614);
var inst_30616 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30612,inst_30615);
var inst_30617 = cljs.core.second.call(null,inst_30616);
var inst_30618 = (new cljs.core.List(null,"[1 2 ...]",null,(1),null));
var inst_30619__$1 = (new cljs.core.List(null,inst_30617,inst_30618,(2),null));
var inst_30620__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30619__$1);
var state_30730__$1 = (function (){var statearr_30764 = state_30730;
(statearr_30764[(22)] = inst_30619__$1);

(statearr_30764[(12)] = inst_30620__$1);

return statearr_30764;
})();
if(cljs.core.truth_(inst_30620__$1)){
var statearr_30765_30880 = state_30730__$1;
(statearr_30765_30880[(1)] = (29));

} else {
var statearr_30766_30881 = state_30730__$1;
(statearr_30766_30881[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (25))){
var inst_30575 = (state_30730[(19)]);
var inst_30595 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30767 = state_30730;
(statearr_30767[(23)] = inst_30595);

return statearr_30767;
})();
var statearr_30768_30882 = state_30730__$1;
(statearr_30768_30882[(2)] = inst_30575);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (34))){
var inst_30661 = (state_30730[(20)]);
var inst_30662 = (state_30730[(24)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(33),new cljs.core.Keyword(null,"default","default",-1987822328),null,(32));
var inst_30652 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30653 = [true,"abcdef"];
var inst_30654 = cljs.core.PersistentHashMap.fromArrays(inst_30652,inst_30653);
var inst_30655 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30656 = [(2)];
var inst_30657 = cljs.core.PersistentHashMap.fromArrays(inst_30655,inst_30656);
var inst_30658 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30654,inst_30657);
var inst_30659 = cljs.core.second.call(null,inst_30658);
var inst_30660 = (new cljs.core.List(null,"\"abcdef\"",null,(1),null));
var inst_30661__$1 = (new cljs.core.List(null,inst_30659,inst_30660,(2),null));
var inst_30662__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30661__$1);
var state_30730__$1 = (function (){var statearr_30769 = state_30730;
(statearr_30769[(20)] = inst_30661__$1);

(statearr_30769[(24)] = inst_30662__$1);

return statearr_30769;
})();
if(cljs.core.truth_(inst_30662__$1)){
var statearr_30770_30883 = state_30730__$1;
(statearr_30770_30883[(1)] = (35));

} else {
var statearr_30771_30884 = state_30730__$1;
(statearr_30771_30884[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (17))){
var inst_30529 = (state_30730[(25)]);
var inst_30532 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30533 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30534 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30529);
var inst_30535 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30533,inst_30534,null];
var inst_30536 = cljs.core.PersistentHashMap.fromArrays(inst_30532,inst_30535);
var inst_30537 = cljs.test.do_report.call(null,inst_30536);
var state_30730__$1 = state_30730;
var statearr_30772_30885 = state_30730__$1;
(statearr_30772_30885[(2)] = inst_30537);

(statearr_30772_30885[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (3))){
var inst_30427 = (state_30730[(2)]);
var inst_30428 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30429 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30430 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30429,inst_30427,null];
var inst_30431 = cljs.core.PersistentHashMap.fromArrays(inst_30428,inst_30430);
var inst_30432 = cljs.test.do_report.call(null,inst_30431);
var state_30730__$1 = state_30730;
var statearr_30773_30886 = state_30730__$1;
(statearr_30773_30886[(2)] = inst_30432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (12))){
var inst_30487 = (state_30730[(26)]);
var inst_30497 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30498 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30499 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30500 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30501 = cljs.core.cons.call(null,inst_30500,inst_30487);
var inst_30502 = (new cljs.core.List(null,inst_30501,null,(1),null));
var inst_30503 = (new cljs.core.List(null,inst_30499,inst_30502,(2),null));
var inst_30504 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30498,inst_30503,null];
var inst_30505 = cljs.core.PersistentHashMap.fromArrays(inst_30497,inst_30504);
var inst_30506 = cljs.test.do_report.call(null,inst_30505);
var state_30730__$1 = state_30730;
var statearr_30774_30887 = state_30730__$1;
(statearr_30774_30887[(2)] = inst_30506);

(statearr_30774_30887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (2))){
var inst_30468 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30775 = state_30730;
(statearr_30775[(27)] = inst_30468);

return statearr_30775;
})();
var statearr_30776_30888 = state_30730__$1;
(statearr_30776_30888[(2)] = null);

(statearr_30776_30888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (23))){
var inst_30574 = (state_30730[(10)]);
var inst_30577 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30578 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2]");
var inst_30579 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30574);
var inst_30580 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30578,inst_30579,null];
var inst_30581 = cljs.core.PersistentHashMap.fromArrays(inst_30577,inst_30580);
var inst_30582 = cljs.test.do_report.call(null,inst_30581);
var state_30730__$1 = state_30730;
var statearr_30777_30889 = state_30730__$1;
(statearr_30777_30889[(2)] = inst_30582);

(statearr_30777_30889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (35))){
var inst_30661 = (state_30730[(20)]);
var inst_30664 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30665 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"abcdef"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"abcdef\"");
var inst_30666 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30661);
var inst_30667 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30665,inst_30666,null];
var inst_30668 = cljs.core.PersistentHashMap.fromArrays(inst_30664,inst_30667);
var inst_30669 = cljs.test.do_report.call(null,inst_30668);
var state_30730__$1 = state_30730;
var statearr_30778_30890 = state_30730__$1;
(statearr_30778_30890[(2)] = inst_30669);

(statearr_30778_30890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (19))){
var inst_30530 = (state_30730[(28)]);
var inst_30550 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30779 = state_30730;
(statearr_30779[(29)] = inst_30550);

return statearr_30779;
})();
var statearr_30780_30891 = state_30730__$1;
(statearr_30780_30891[(2)] = inst_30530);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (11))){
var inst_30487 = (state_30730[(26)]);
var inst_30490 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30491 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30492 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30487);
var inst_30493 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30491,inst_30492,null];
var inst_30494 = cljs.core.PersistentHashMap.fromArrays(inst_30490,inst_30493);
var inst_30495 = cljs.test.do_report.call(null,inst_30494);
var state_30730__$1 = state_30730;
var statearr_30781_30892 = state_30730__$1;
(statearr_30781_30892[(2)] = inst_30495);

(statearr_30781_30892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (9))){
var inst_30469 = (state_30730[(2)]);
var inst_30470 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30471 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"\n1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"\\n1\"");
var inst_30472 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30471,inst_30469,null];
var inst_30473 = cljs.core.PersistentHashMap.fromArrays(inst_30470,inst_30472);
var inst_30474 = cljs.test.do_report.call(null,inst_30473);
var state_30730__$1 = state_30730;
var statearr_30782_30893 = state_30730__$1;
(statearr_30782_30893[(2)] = inst_30474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (5))){
var inst_30445 = (state_30730[(11)]);
var inst_30448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30449 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"nil");
var inst_30450 = cljs.core.cons.call(null,klipse_clj.eval_test.a_EQ_,inst_30445);
var inst_30451 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30449,inst_30450,null];
var inst_30452 = cljs.core.PersistentHashMap.fromArrays(inst_30448,inst_30451);
var inst_30453 = cljs.test.do_report.call(null,inst_30452);
var state_30730__$1 = state_30730;
var statearr_30783_30894 = state_30730__$1;
(statearr_30783_30894[(2)] = inst_30453);

(statearr_30783_30894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (14))){
var inst_30552 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30784 = state_30730;
(statearr_30784[(30)] = inst_30552);

return statearr_30784;
})();
var statearr_30785_30895 = state_30730__$1;
(statearr_30785_30895[(2)] = null);

(statearr_30785_30895[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (26))){
var inst_30642 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30786 = state_30730;
(statearr_30786[(31)] = inst_30642);

return statearr_30786;
})();
var statearr_30787_30896 = state_30730__$1;
(statearr_30787_30896[(2)] = null);

(statearr_30787_30896[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (16))){
var inst_30530 = (state_30730[(28)]);
var inst_30529 = (state_30730[(25)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(15),new cljs.core.Keyword(null,"default","default",-1987822328),null,(14));
var inst_30520 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30521 = [true,"ab"];
var inst_30522 = cljs.core.PersistentHashMap.fromArrays(inst_30520,inst_30521);
var inst_30523 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30524 = [(2)];
var inst_30525 = cljs.core.PersistentHashMap.fromArrays(inst_30523,inst_30524);
var inst_30526 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30522,inst_30525);
var inst_30527 = cljs.core.second.call(null,inst_30526);
var inst_30528 = (new cljs.core.List(null,"\"ab\"",null,(1),null));
var inst_30529__$1 = (new cljs.core.List(null,inst_30527,inst_30528,(2),null));
var inst_30530__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30529__$1);
var state_30730__$1 = (function (){var statearr_30788 = state_30730;
(statearr_30788[(28)] = inst_30530__$1);

(statearr_30788[(25)] = inst_30529__$1);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30530__$1)){
var statearr_30789_30897 = state_30730__$1;
(statearr_30789_30897[(1)] = (17));

} else {
var statearr_30790_30898 = state_30730__$1;
(statearr_30790_30898[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (38))){
var inst_30727 = (state_30730[(2)]);
var inst_30728 = done.call(null);
var state_30730__$1 = (function (){var statearr_30791 = state_30730;
(statearr_30791[(32)] = inst_30727);

return statearr_30791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else {
if((state_val_30731 === (30))){
var inst_30619 = (state_30730[(22)]);
var inst_30629 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30630 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"[1 2 ...]");
var inst_30631 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30632 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30633 = cljs.core.cons.call(null,inst_30632,inst_30619);
var inst_30634 = (new cljs.core.List(null,inst_30633,null,(1),null));
var inst_30635 = (new cljs.core.List(null,inst_30631,inst_30634,(2),null));
var inst_30636 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30630,inst_30635,null];
var inst_30637 = cljs.core.PersistentHashMap.fromArrays(inst_30629,inst_30636);
var inst_30638 = cljs.test.do_report.call(null,inst_30637);
var state_30730__$1 = state_30730;
var statearr_30792_30899 = state_30730__$1;
(statearr_30792_30899[(2)] = inst_30638);

(statearr_30792_30899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (10))){
var inst_30488 = (state_30730[(17)]);
var inst_30487 = (state_30730[(26)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30730,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_30478 = [new cljs.core.Keyword(null,"success?","success?",-122854052),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30479 = [true,"\n1"];
var inst_30480 = cljs.core.PersistentHashMap.fromArrays(inst_30478,inst_30479);
var inst_30481 = [new cljs.core.Keyword(null,"print-length","print-length",1931866356)];
var inst_30482 = [(2)];
var inst_30483 = cljs.core.PersistentHashMap.fromArrays(inst_30481,inst_30482);
var inst_30484 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30480,inst_30483);
var inst_30485 = cljs.core.second.call(null,inst_30484);
var inst_30486 = (new cljs.core.List(null,"\"\\n1\"",null,(1),null));
var inst_30487__$1 = (new cljs.core.List(null,inst_30485,inst_30486,(2),null));
var inst_30488__$1 = cljs.core.apply.call(null,klipse_clj.eval_test.a_EQ_,inst_30487__$1);
var state_30730__$1 = (function (){var statearr_30793 = state_30730;
(statearr_30793[(17)] = inst_30488__$1);

(statearr_30793[(26)] = inst_30487__$1);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30488__$1)){
var statearr_30794_30900 = state_30730__$1;
(statearr_30794_30900[(1)] = (11));

} else {
var statearr_30795_30901 = state_30730__$1;
(statearr_30795_30901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (18))){
var inst_30529 = (state_30730[(25)]);
var inst_30539 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30540 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),"ab"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"\"ab\"");
var inst_30541 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30542 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30543 = cljs.core.cons.call(null,inst_30542,inst_30529);
var inst_30544 = (new cljs.core.List(null,inst_30543,null,(1),null));
var inst_30545 = (new cljs.core.List(null,inst_30541,inst_30544,(2),null));
var inst_30546 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30540,inst_30545,null];
var inst_30547 = cljs.core.PersistentHashMap.fromArrays(inst_30539,inst_30546);
var inst_30548 = cljs.test.do_report.call(null,inst_30547);
var state_30730__$1 = state_30730;
var statearr_30796_30902 = state_30730__$1;
(statearr_30796_30902[(2)] = inst_30548);

(statearr_30796_30902[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (42))){
var inst_30704 = (state_30730[(15)]);
var inst_30714 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30715 = cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"result-as-str","result-as-str",-907987766,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"print-length","print-length",1931866356),(2)], null))),"(0 1 ...)");
var inst_30716 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30717 = new cljs.core.Symbol(null,"a=","a=",1533554587,null);
var inst_30718 = cljs.core.cons.call(null,inst_30717,inst_30704);
var inst_30719 = (new cljs.core.List(null,inst_30718,null,(1),null));
var inst_30720 = (new cljs.core.List(null,inst_30716,inst_30719,(2),null));
var inst_30721 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30715,inst_30720,null];
var inst_30722 = cljs.core.PersistentHashMap.fromArrays(inst_30714,inst_30721);
var inst_30723 = cljs.test.do_report.call(null,inst_30722);
var state_30730__$1 = state_30730;
var statearr_30797_30903 = state_30730__$1;
(statearr_30797_30903[(2)] = inst_30723);

(statearr_30797_30903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (37))){
var inst_30662 = (state_30730[(24)]);
var inst_30682 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30798 = state_30730;
(statearr_30798[(33)] = inst_30682);

return statearr_30798;
})();
var statearr_30799_30904 = state_30730__$1;
(statearr_30799_30904[(2)] = inst_30662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (8))){
var inst_30510 = (state_30730[(2)]);
var state_30730__$1 = (function (){var statearr_30800 = state_30730;
(statearr_30800[(34)] = inst_30510);

return statearr_30800;
})();
var statearr_30801_30905 = state_30730__$1;
(statearr_30801_30905[(2)] = null);

(statearr_30801_30905[(1)] = (16));


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
}
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
var klipse_clj$eval_test$state_machine__15540__auto__ = null;
var klipse_clj$eval_test$state_machine__15540__auto____0 = (function (){
var statearr_30802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30802[(0)] = klipse_clj$eval_test$state_machine__15540__auto__);

(statearr_30802[(1)] = (1));

return statearr_30802;
});
var klipse_clj$eval_test$state_machine__15540__auto____1 = (function (state_30730){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_30730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__15543__auto__ = e30803;
var statearr_30804_30906 = state_30730;
(statearr_30804_30906[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30907 = state_30730;
state_30730 = G__30907;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$eval_test$state_machine__15540__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return klipse_clj$eval_test$state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$eval_test$state_machine__15540__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$eval_test$state_machine__15540__auto____0;
klipse_clj$eval_test$state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$eval_test$state_machine__15540__auto____1;
return klipse_clj$eval_test$state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__,___22472__auto__))
})();
var state__15636__auto__ = (function (){var statearr_30805 = f__15635__auto__.call(null);
(statearr_30805[(6)] = c__15634__auto__);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__,___22472__auto__))
);

return c__15634__auto__;
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30045","meta30045",811566666,null)], null);
});

klipse_clj.eval_test.t_klipse_clj$eval_test30044.cljs$lang$type = true;

klipse_clj.eval_test.t_klipse_clj$eval_test30044.cljs$lang$ctorStr = "klipse-clj.eval-test/t_klipse_clj$eval_test30044";

klipse_clj.eval_test.t_klipse_clj$eval_test30044.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"klipse-clj.eval-test/t_klipse_clj$eval_test30044");
});

/**
 * Positional factory function for klipse-clj.eval-test/t_klipse_clj$eval_test30044.
 */
klipse_clj.eval_test.__GT_t_klipse_clj$eval_test30044 = (function klipse_clj$eval_test$__GT_t_klipse_clj$eval_test30044(meta30045){
return (new klipse_clj.eval_test.t_klipse_clj$eval_test30044(meta30045));
});

}

return (new klipse_clj.eval_test.t_klipse_clj$eval_test30044(null));
});

klipse_clj.eval_test.display_evaluation_and_crop.cljs$lang$var = new cljs.core.Var(function(){return klipse_clj.eval_test.display_evaluation_and_crop;},new cljs.core.Symbol("klipse-clj.eval-test","display-evaluation-and-crop","klipse-clj.eval-test/display-evaluation-and-crop",-309055398,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse-clj.eval-test","klipse-clj.eval-test",-431345801,null),new cljs.core.Symbol(null,"display-evaluation-and-crop","display-evaluation-and-crop",81339527,null),"/Users/viebel/prj/klipse-clj/test/klipse_clj/eval_test.cljs",37,1,248,248,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse_clj.eval_test.display_evaluation_and_crop)?klipse_clj.eval_test.display_evaluation_and_crop.cljs$lang$test:null)]));

//# sourceMappingURL=eval_test.js.map
