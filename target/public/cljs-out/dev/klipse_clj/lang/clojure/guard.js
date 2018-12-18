// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('klipse_clj.lang.clojure.guard');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
/**
 * each time the watchdog has a chance to run, this var is set with the current time
 */
klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = (0);
klipse_clj.lang.clojure.guard.min_max_eval_duration = (3000);
/**
 * The number of msec for the watchdog period.
 *          This value has to be much lower than min-max-eval-duration.
 */
klipse_clj.lang.clojure.guard.watchdog_period = (klipse_clj.lang.clojure.guard.min_max_eval_duration / (10));
klipse_clj.lang.clojure.guard.runonce = (function klipse_clj$lang$clojure$guard$runonce(f){
var ran = cljs.core.atom.call(null,false);
return ((function (ran){
return (function() { 
var G__28310__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__28310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28311__i = 0, G__28311__a = new Array(arguments.length -  0);
while (G__28311__i < G__28311__a.length) {G__28311__a[G__28311__i] = arguments[G__28311__i + 0]; ++G__28311__i;}
  args = new cljs.core.IndexedSeq(G__28311__a,0,null);
} 
return G__28310__delegate.call(this,args);};
G__28310.cljs$lang$maxFixedArity = 0;
G__28310.cljs$lang$applyTo = (function (arglist__28312){
var args = cljs.core.seq(arglist__28312);
return G__28310__delegate(args);
});
G__28310.cljs$core$IFn$_invoke$arity$variadic = G__28310__delegate;
return G__28310;
})()
;
;})(ran))
});
klipse_clj.lang.clojure.guard.tick = (function klipse_clj$lang$clojure$guard$tick(){
return klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse_clj.lang.clojure.guard.run_watchdog_STAR_ = (function klipse_clj$lang$clojure$guard$run_watchdog_STAR_(){
klipse_clj.lang.clojure.guard.tick.call(null);

var c__24894__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24894__auto__){
return (function (){
var f__24895__auto__ = (function (){var switch__24871__auto__ = ((function (c__24894__auto__){
return (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (1))){
var state_28322__$1 = state_28322;
var statearr_28324_28331 = state_28322__$1;
(statearr_28324_28331[(2)] = null);

(statearr_28324_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (2))){
var inst_28314 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28322__$1,(4),inst_28314);
} else {
if((state_val_28323 === (3))){
var inst_28320 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
if((state_val_28323 === (4))){
var inst_28316 = (state_28322[(2)]);
var inst_28317 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_28322__$1 = (function (){var statearr_28325 = state_28322;
(statearr_28325[(7)] = inst_28317);

(statearr_28325[(8)] = inst_28316);

return statearr_28325;
})();
var statearr_28326_28332 = state_28322__$1;
(statearr_28326_28332[(2)] = null);

(statearr_28326_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24894__auto__))
;
return ((function (switch__24871__auto__,c__24894__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____1 = (function (state_28322){
while(true){
var ret_value__24873__auto__ = (function (){try{while(true){
var result__24874__auto__ = switch__24871__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24874__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__24875__auto__ = e28328;
var statearr_28329_28333 = state_28322;
(statearr_28329_28333[(5)] = ex__24875__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24873__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28334 = state_28322;
state_28322 = G__28334;
continue;
} else {
return ret_value__24873__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__24872__auto__;
})()
;})(switch__24871__auto__,c__24894__auto__))
})();
var state__24896__auto__ = (function (){var statearr_28330 = f__24895__auto__.call(null);
(statearr_28330[(6)] = c__24894__auto__);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24896__auto__);
});})(c__24894__auto__))
);

return c__24894__auto__;
});
klipse_clj.lang.clojure.guard.run_watchdog_once = klipse_clj.lang.clojure.guard.runonce.call(null,klipse_clj.lang.clojure.guard.run_watchdog_STAR_);
klipse_clj.lang.clojure.guard.watchdog = (function klipse_clj$lang$clojure$guard$watchdog(){
klipse_clj.lang.clojure.guard.tick.call(null);

return klipse_clj.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse_clj.lang.clojure.guard.guard = (function klipse_clj$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw "Infinite Loop";
} else {
}

return klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null);
} else {
return null;
}
});
goog.exportSymbol('klipse_clj.lang.clojure.guard.guard', klipse_clj.lang.clojure.guard.guard);
/**
 * same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.
 * 
 *   Limitations:
 *   1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
 *   
 */
klipse_clj.lang.clojure.guard.my_emits = (function klipse_clj$lang$clojure$guard$my_emits(var_args){
var args__19138__auto__ = [];
var len__19128__auto___28342 = arguments.length;
var i__19129__auto___28343 = (0);
while(true){
if((i__19129__auto___28343 < len__19128__auto___28342)){
args__19138__auto__.push((arguments[i__19129__auto___28343]));

var G__28344 = (i__19129__auto___28343 + (1));
i__19129__auto___28343 = G__28344;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__17804__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__17804__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__17804__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__28338_28345 = cljs.core.seq.call(null,xs);
var chunk__28339_28346 = null;
var count__28340_28347 = (0);
var i__28341_28348 = (0);
while(true){
if((i__28341_28348 < count__28340_28347)){
var x_28349 = cljs.core._nth.call(null,chunk__28339_28346,i__28341_28348);
if((x_28349 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28349)){
cljs.compiler.emit.call(null,x_28349);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28349)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28349);
} else {
if(goog.isFunction(x_28349)){
x_28349.call(null);
} else {
var s_28350 = cljs.core.print_str.call(null,x_28349);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28338_28345,chunk__28339_28346,count__28340_28347,i__28341_28348,s_28350,x_28349){
return (function (p1__28335_SHARP_){
return (p1__28335_SHARP_ + cljs.core.count.call(null,s_28350));
});})(seq__28338_28345,chunk__28339_28346,count__28340_28347,i__28341_28348,s_28350,x_28349))
);
}

cljs.core.print.call(null,s_28350);

}
}
}
}


var G__28351 = seq__28338_28345;
var G__28352 = chunk__28339_28346;
var G__28353 = count__28340_28347;
var G__28354 = (i__28341_28348 + (1));
seq__28338_28345 = G__28351;
chunk__28339_28346 = G__28352;
count__28340_28347 = G__28353;
i__28341_28348 = G__28354;
continue;
} else {
var temp__5720__auto___28355 = cljs.core.seq.call(null,seq__28338_28345);
if(temp__5720__auto___28355){
var seq__28338_28356__$1 = temp__5720__auto___28355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28338_28356__$1)){
var c__18776__auto___28357 = cljs.core.chunk_first.call(null,seq__28338_28356__$1);
var G__28358 = cljs.core.chunk_rest.call(null,seq__28338_28356__$1);
var G__28359 = c__18776__auto___28357;
var G__28360 = cljs.core.count.call(null,c__18776__auto___28357);
var G__28361 = (0);
seq__28338_28345 = G__28358;
chunk__28339_28346 = G__28359;
count__28340_28347 = G__28360;
i__28341_28348 = G__28361;
continue;
} else {
var x_28362 = cljs.core.first.call(null,seq__28338_28356__$1);
if((x_28362 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28362)){
cljs.compiler.emit.call(null,x_28362);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28362)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28362);
} else {
if(goog.isFunction(x_28362)){
x_28362.call(null);
} else {
var s_28363 = cljs.core.print_str.call(null,x_28362);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28338_28345,chunk__28339_28346,count__28340_28347,i__28341_28348,s_28363,x_28362,seq__28338_28356__$1,temp__5720__auto___28355){
return (function (p1__28335_SHARP_){
return (p1__28335_SHARP_ + cljs.core.count.call(null,s_28363));
});})(seq__28338_28345,chunk__28339_28346,count__28340_28347,i__28341_28348,s_28363,x_28362,seq__28338_28356__$1,temp__5720__auto___28355))
);
}

cljs.core.print.call(null,s_28363);

}
}
}
}


var G__28364 = cljs.core.next.call(null,seq__28338_28356__$1);
var G__28365 = null;
var G__28366 = (0);
var G__28367 = (0);
seq__28338_28345 = G__28364;
chunk__28339_28346 = G__28365;
count__28340_28347 = G__28366;
i__28341_28348 = G__28367;
continue;
}
} else {
}
}
break;
}

return null;
});

klipse_clj.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq28336){
var G__28337 = cljs.core.first.call(null,seq28336);
var seq28336__$1 = cljs.core.next.call(null,seq28336);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28337,seq28336__$1);
});


//# sourceMappingURL=guard.js.map
