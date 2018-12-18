// Compiled by ClojureScript 1.10.439 {}
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
var G__28469__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__28469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28470__i = 0, G__28470__a = new Array(arguments.length -  0);
while (G__28470__i < G__28470__a.length) {G__28470__a[G__28470__i] = arguments[G__28470__i + 0]; ++G__28470__i;}
  args = new cljs.core.IndexedSeq(G__28470__a,0,null);
} 
return G__28469__delegate.call(this,args);};
G__28469.cljs$lang$maxFixedArity = 0;
G__28469.cljs$lang$applyTo = (function (arglist__28471){
var args = cljs.core.seq(arglist__28471);
return G__28469__delegate(args);
});
G__28469.cljs$core$IFn$_invoke$arity$variadic = G__28469__delegate;
return G__28469;
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

var c__19107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19107__auto__){
return (function (){
var f__19108__auto__ = (function (){var switch__18940__auto__ = ((function (c__19107__auto__){
return (function (state_28481){
var state_val_28482 = (state_28481[(1)]);
if((state_val_28482 === (1))){
var state_28481__$1 = state_28481;
var statearr_28483_28490 = state_28481__$1;
(statearr_28483_28490[(2)] = null);

(statearr_28483_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (2))){
var inst_28473 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(4),inst_28473);
} else {
if((state_val_28482 === (3))){
var inst_28479 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else {
if((state_val_28482 === (4))){
var inst_28475 = (state_28481[(2)]);
var inst_28476 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_28481__$1 = (function (){var statearr_28484 = state_28481;
(statearr_28484[(7)] = inst_28476);

(statearr_28484[(8)] = inst_28475);

return statearr_28484;
})();
var statearr_28485_28491 = state_28481__$1;
(statearr_28485_28491[(2)] = null);

(statearr_28485_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19107__auto__))
;
return ((function (switch__18940__auto__,c__19107__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____0 = (function (){
var statearr_28486 = [null,null,null,null,null,null,null,null,null];
(statearr_28486[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__);

(statearr_28486[(1)] = (1));

return statearr_28486;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____1 = (function (state_28481){
while(true){
var ret_value__18942__auto__ = (function (){try{while(true){
var result__18943__auto__ = switch__18940__auto__.call(null,state_28481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18943__auto__;
}
break;
}
}catch (e28487){if((e28487 instanceof Object)){
var ex__18944__auto__ = e28487;
var statearr_28488_28492 = state_28481;
(statearr_28488_28492[(5)] = ex__18944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28493 = state_28481;
state_28481 = G__28493;
continue;
} else {
return ret_value__18942__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__18941__auto__;
})()
;})(switch__18940__auto__,c__19107__auto__))
})();
var state__19109__auto__ = (function (){var statearr_28489 = f__19108__auto__.call(null);
(statearr_28489[(6)] = c__19107__auto__);

return statearr_28489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19109__auto__);
});})(c__19107__auto__))
);

return c__19107__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___28501 = arguments.length;
var i__4642__auto___28502 = (0);
while(true){
if((i__4642__auto___28502 < len__4641__auto___28501)){
args__4647__auto__.push((arguments[i__4642__auto___28502]));

var G__28503 = (i__4642__auto___28502 + (1));
i__4642__auto___28502 = G__28503;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__4036__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__4036__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__4036__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__28497_28504 = cljs.core.seq.call(null,xs);
var chunk__28498_28505 = null;
var count__28499_28506 = (0);
var i__28500_28507 = (0);
while(true){
if((i__28500_28507 < count__28499_28506)){
var x_28508 = cljs.core._nth.call(null,chunk__28498_28505,i__28500_28507);
if((x_28508 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28508)){
cljs.compiler.emit.call(null,x_28508);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28508)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28508);
} else {
if(goog.isFunction(x_28508)){
x_28508.call(null);
} else {
var s_28509 = cljs.core.print_str.call(null,x_28508);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28497_28504,chunk__28498_28505,count__28499_28506,i__28500_28507,s_28509,x_28508){
return (function (p1__28494_SHARP_){
return (p1__28494_SHARP_ + cljs.core.count.call(null,s_28509));
});})(seq__28497_28504,chunk__28498_28505,count__28499_28506,i__28500_28507,s_28509,x_28508))
);
}

cljs.core.print.call(null,s_28509);

}
}
}
}


var G__28510 = seq__28497_28504;
var G__28511 = chunk__28498_28505;
var G__28512 = count__28499_28506;
var G__28513 = (i__28500_28507 + (1));
seq__28497_28504 = G__28510;
chunk__28498_28505 = G__28511;
count__28499_28506 = G__28512;
i__28500_28507 = G__28513;
continue;
} else {
var temp__5720__auto___28514 = cljs.core.seq.call(null,seq__28497_28504);
if(temp__5720__auto___28514){
var seq__28497_28515__$1 = temp__5720__auto___28514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28497_28515__$1)){
var c__4461__auto___28516 = cljs.core.chunk_first.call(null,seq__28497_28515__$1);
var G__28517 = cljs.core.chunk_rest.call(null,seq__28497_28515__$1);
var G__28518 = c__4461__auto___28516;
var G__28519 = cljs.core.count.call(null,c__4461__auto___28516);
var G__28520 = (0);
seq__28497_28504 = G__28517;
chunk__28498_28505 = G__28518;
count__28499_28506 = G__28519;
i__28500_28507 = G__28520;
continue;
} else {
var x_28521 = cljs.core.first.call(null,seq__28497_28515__$1);
if((x_28521 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28521)){
cljs.compiler.emit.call(null,x_28521);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28521)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28521);
} else {
if(goog.isFunction(x_28521)){
x_28521.call(null);
} else {
var s_28522 = cljs.core.print_str.call(null,x_28521);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28497_28504,chunk__28498_28505,count__28499_28506,i__28500_28507,s_28522,x_28521,seq__28497_28515__$1,temp__5720__auto___28514){
return (function (p1__28494_SHARP_){
return (p1__28494_SHARP_ + cljs.core.count.call(null,s_28522));
});})(seq__28497_28504,chunk__28498_28505,count__28499_28506,i__28500_28507,s_28522,x_28521,seq__28497_28515__$1,temp__5720__auto___28514))
);
}

cljs.core.print.call(null,s_28522);

}
}
}
}


var G__28523 = cljs.core.next.call(null,seq__28497_28515__$1);
var G__28524 = null;
var G__28525 = (0);
var G__28526 = (0);
seq__28497_28504 = G__28523;
chunk__28498_28505 = G__28524;
count__28499_28506 = G__28525;
i__28500_28507 = G__28526;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq28495){
var G__28496 = cljs.core.first.call(null,seq28495);
var seq28495__$1 = cljs.core.next.call(null,seq28495);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28496,seq28495__$1);
});


//# sourceMappingURL=guard.js.map
