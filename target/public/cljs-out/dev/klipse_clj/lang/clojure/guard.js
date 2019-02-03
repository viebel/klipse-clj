// Compiled by ClojureScript 1.10.516 {}
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
var G__30386__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__30386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30387__i = 0, G__30387__a = new Array(arguments.length -  0);
while (G__30387__i < G__30387__a.length) {G__30387__a[G__30387__i] = arguments[G__30387__i + 0]; ++G__30387__i;}
  args = new cljs.core.IndexedSeq(G__30387__a,0,null);
} 
return G__30386__delegate.call(this,args);};
G__30386.cljs$lang$maxFixedArity = 0;
G__30386.cljs$lang$applyTo = (function (arglist__30388){
var args = cljs.core.seq(arglist__30388);
return G__30386__delegate(args);
});
G__30386.cljs$core$IFn$_invoke$arity$variadic = G__30386__delegate;
return G__30386;
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

var c__20882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20882__auto__){
return (function (){
var f__20883__auto__ = (function (){var switch__20715__auto__ = ((function (c__20882__auto__){
return (function (state_30398){
var state_val_30399 = (state_30398[(1)]);
if((state_val_30399 === (1))){
var state_30398__$1 = state_30398;
var statearr_30400_30407 = state_30398__$1;
(statearr_30400_30407[(2)] = null);

(statearr_30400_30407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (2))){
var inst_30390 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30398__$1,(4),inst_30390);
} else {
if((state_val_30399 === (3))){
var inst_30396 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30398__$1,inst_30396);
} else {
if((state_val_30399 === (4))){
var inst_30392 = (state_30398[(2)]);
var inst_30393 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_30398__$1 = (function (){var statearr_30401 = state_30398;
(statearr_30401[(7)] = inst_30392);

(statearr_30401[(8)] = inst_30393);

return statearr_30401;
})();
var statearr_30402_30408 = state_30398__$1;
(statearr_30402_30408[(2)] = null);

(statearr_30402_30408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20882__auto__))
;
return ((function (switch__20715__auto__,c__20882__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____0 = (function (){
var statearr_30403 = [null,null,null,null,null,null,null,null,null];
(statearr_30403[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__);

(statearr_30403[(1)] = (1));

return statearr_30403;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____1 = (function (state_30398){
while(true){
var ret_value__20717__auto__ = (function (){try{while(true){
var result__20718__auto__ = switch__20715__auto__.call(null,state_30398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20718__auto__;
}
break;
}
}catch (e30404){if((e30404 instanceof Object)){
var ex__20719__auto__ = e30404;
var statearr_30405_30409 = state_30398;
(statearr_30405_30409[(5)] = ex__20719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30410 = state_30398;
state_30398 = G__30410;
continue;
} else {
return ret_value__20717__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__ = function(state_30398){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____1.call(this,state_30398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20716__auto__;
})()
;})(switch__20715__auto__,c__20882__auto__))
})();
var state__20884__auto__ = (function (){var statearr_30406 = f__20883__auto__.call(null);
(statearr_30406[(6)] = c__20882__auto__);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20884__auto__);
});})(c__20882__auto__))
);

return c__20882__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___30418 = arguments.length;
var i__4731__auto___30419 = (0);
while(true){
if((i__4731__auto___30419 < len__4730__auto___30418)){
args__4736__auto__.push((arguments[i__4731__auto___30419]));

var G__30420 = (i__4731__auto___30419 + (1));
i__4731__auto___30419 = G__30420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__4120__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__4120__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__30414_30421 = cljs.core.seq.call(null,xs);
var chunk__30415_30422 = null;
var count__30416_30423 = (0);
var i__30417_30424 = (0);
while(true){
if((i__30417_30424 < count__30416_30423)){
var x_30425 = cljs.core._nth.call(null,chunk__30415_30422,i__30417_30424);
if((x_30425 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30425)){
cljs.compiler.emit.call(null,x_30425);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30425)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_30425);
} else {
if(goog.isFunction(x_30425)){
x_30425.call(null);
} else {
var s_30426 = cljs.core.print_str.call(null,x_30425);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30414_30421,chunk__30415_30422,count__30416_30423,i__30417_30424,s_30426,x_30425){
return (function (p1__30411_SHARP_){
return (p1__30411_SHARP_ + cljs.core.count.call(null,s_30426));
});})(seq__30414_30421,chunk__30415_30422,count__30416_30423,i__30417_30424,s_30426,x_30425))
);
}

cljs.core.print.call(null,s_30426);

}
}
}
}


var G__30427 = seq__30414_30421;
var G__30428 = chunk__30415_30422;
var G__30429 = count__30416_30423;
var G__30430 = (i__30417_30424 + (1));
seq__30414_30421 = G__30427;
chunk__30415_30422 = G__30428;
count__30416_30423 = G__30429;
i__30417_30424 = G__30430;
continue;
} else {
var temp__5720__auto___30431 = cljs.core.seq.call(null,seq__30414_30421);
if(temp__5720__auto___30431){
var seq__30414_30432__$1 = temp__5720__auto___30431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30414_30432__$1)){
var c__4550__auto___30433 = cljs.core.chunk_first.call(null,seq__30414_30432__$1);
var G__30434 = cljs.core.chunk_rest.call(null,seq__30414_30432__$1);
var G__30435 = c__4550__auto___30433;
var G__30436 = cljs.core.count.call(null,c__4550__auto___30433);
var G__30437 = (0);
seq__30414_30421 = G__30434;
chunk__30415_30422 = G__30435;
count__30416_30423 = G__30436;
i__30417_30424 = G__30437;
continue;
} else {
var x_30438 = cljs.core.first.call(null,seq__30414_30432__$1);
if((x_30438 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30438)){
cljs.compiler.emit.call(null,x_30438);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30438)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_30438);
} else {
if(goog.isFunction(x_30438)){
x_30438.call(null);
} else {
var s_30439 = cljs.core.print_str.call(null,x_30438);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30414_30421,chunk__30415_30422,count__30416_30423,i__30417_30424,s_30439,x_30438,seq__30414_30432__$1,temp__5720__auto___30431){
return (function (p1__30411_SHARP_){
return (p1__30411_SHARP_ + cljs.core.count.call(null,s_30439));
});})(seq__30414_30421,chunk__30415_30422,count__30416_30423,i__30417_30424,s_30439,x_30438,seq__30414_30432__$1,temp__5720__auto___30431))
);
}

cljs.core.print.call(null,s_30439);

}
}
}
}


var G__30440 = cljs.core.next.call(null,seq__30414_30432__$1);
var G__30441 = null;
var G__30442 = (0);
var G__30443 = (0);
seq__30414_30421 = G__30440;
chunk__30415_30422 = G__30441;
count__30416_30423 = G__30442;
i__30417_30424 = G__30443;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq30412){
var G__30413 = cljs.core.first.call(null,seq30412);
var seq30412__$1 = cljs.core.next.call(null,seq30412);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30413,seq30412__$1);
});


//# sourceMappingURL=guard.js.map
