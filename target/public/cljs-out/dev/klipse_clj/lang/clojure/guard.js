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
var G__39558__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__39558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39559__i = 0, G__39559__a = new Array(arguments.length -  0);
while (G__39559__i < G__39559__a.length) {G__39559__a[G__39559__i] = arguments[G__39559__i + 0]; ++G__39559__i;}
  args = new cljs.core.IndexedSeq(G__39559__a,0,null);
} 
return G__39558__delegate.call(this,args);};
G__39558.cljs$lang$maxFixedArity = 0;
G__39558.cljs$lang$applyTo = (function (arglist__39560){
var args = cljs.core.seq(arglist__39560);
return G__39558__delegate(args);
});
G__39558.cljs$core$IFn$_invoke$arity$variadic = G__39558__delegate;
return G__39558;
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

var c__31524__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31524__auto__){
return (function (){
var f__31525__auto__ = (function (){var switch__31357__auto__ = ((function (c__31524__auto__){
return (function (state_39570){
var state_val_39571 = (state_39570[(1)]);
if((state_val_39571 === (1))){
var state_39570__$1 = state_39570;
var statearr_39572_39579 = state_39570__$1;
(statearr_39572_39579[(2)] = null);

(statearr_39572_39579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39571 === (2))){
var inst_39562 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_39570__$1 = state_39570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39570__$1,(4),inst_39562);
} else {
if((state_val_39571 === (3))){
var inst_39568 = (state_39570[(2)]);
var state_39570__$1 = state_39570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39570__$1,inst_39568);
} else {
if((state_val_39571 === (4))){
var inst_39564 = (state_39570[(2)]);
var inst_39565 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_39570__$1 = (function (){var statearr_39573 = state_39570;
(statearr_39573[(7)] = inst_39565);

(statearr_39573[(8)] = inst_39564);

return statearr_39573;
})();
var statearr_39574_39580 = state_39570__$1;
(statearr_39574_39580[(2)] = null);

(statearr_39574_39580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__31524__auto__))
;
return ((function (switch__31357__auto__,c__31524__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____0 = (function (){
var statearr_39575 = [null,null,null,null,null,null,null,null,null];
(statearr_39575[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__);

(statearr_39575[(1)] = (1));

return statearr_39575;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____1 = (function (state_39570){
while(true){
var ret_value__31359__auto__ = (function (){try{while(true){
var result__31360__auto__ = switch__31357__auto__.call(null,state_39570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31360__auto__;
}
break;
}
}catch (e39576){if((e39576 instanceof Object)){
var ex__31361__auto__ = e39576;
var statearr_39577_39581 = state_39570;
(statearr_39577_39581[(5)] = ex__31361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39582 = state_39570;
state_39570 = G__39582;
continue;
} else {
return ret_value__31359__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__ = function(state_39570){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____1.call(this,state_39570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__31358__auto__;
})()
;})(switch__31357__auto__,c__31524__auto__))
})();
var state__31526__auto__ = (function (){var statearr_39578 = f__31525__auto__.call(null);
(statearr_39578[(6)] = c__31524__auto__);

return statearr_39578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31526__auto__);
});})(c__31524__auto__))
);

return c__31524__auto__;
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
var args__19144__auto__ = [];
var len__19134__auto___39590 = arguments.length;
var i__19135__auto___39591 = (0);
while(true){
if((i__19135__auto___39591 < len__19134__auto___39590)){
args__19144__auto__.push((arguments[i__19135__auto___39591]));

var G__39592 = (i__19135__auto___39591 + (1));
i__19135__auto___39591 = G__39592;
continue;
} else {
}
break;
}

var argseq__19145__auto__ = ((((1) < args__19144__auto__.length))?(new cljs.core.IndexedSeq(args__19144__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19145__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__17810__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__17810__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__17810__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__39586_39593 = cljs.core.seq.call(null,xs);
var chunk__39587_39594 = null;
var count__39588_39595 = (0);
var i__39589_39596 = (0);
while(true){
if((i__39589_39596 < count__39588_39595)){
var x_39597 = cljs.core._nth.call(null,chunk__39587_39594,i__39589_39596);
if((x_39597 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_39597)){
cljs.compiler.emit.call(null,x_39597);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_39597)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_39597);
} else {
if(goog.isFunction(x_39597)){
x_39597.call(null);
} else {
var s_39598 = cljs.core.print_str.call(null,x_39597);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__39586_39593,chunk__39587_39594,count__39588_39595,i__39589_39596,s_39598,x_39597){
return (function (p1__39583_SHARP_){
return (p1__39583_SHARP_ + cljs.core.count.call(null,s_39598));
});})(seq__39586_39593,chunk__39587_39594,count__39588_39595,i__39589_39596,s_39598,x_39597))
);
}

cljs.core.print.call(null,s_39598);

}
}
}
}


var G__39599 = seq__39586_39593;
var G__39600 = chunk__39587_39594;
var G__39601 = count__39588_39595;
var G__39602 = (i__39589_39596 + (1));
seq__39586_39593 = G__39599;
chunk__39587_39594 = G__39600;
count__39588_39595 = G__39601;
i__39589_39596 = G__39602;
continue;
} else {
var temp__5457__auto___39603 = cljs.core.seq.call(null,seq__39586_39593);
if(temp__5457__auto___39603){
var seq__39586_39604__$1 = temp__5457__auto___39603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39586_39604__$1)){
var c__18782__auto___39605 = cljs.core.chunk_first.call(null,seq__39586_39604__$1);
var G__39606 = cljs.core.chunk_rest.call(null,seq__39586_39604__$1);
var G__39607 = c__18782__auto___39605;
var G__39608 = cljs.core.count.call(null,c__18782__auto___39605);
var G__39609 = (0);
seq__39586_39593 = G__39606;
chunk__39587_39594 = G__39607;
count__39588_39595 = G__39608;
i__39589_39596 = G__39609;
continue;
} else {
var x_39610 = cljs.core.first.call(null,seq__39586_39604__$1);
if((x_39610 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_39610)){
cljs.compiler.emit.call(null,x_39610);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_39610)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_39610);
} else {
if(goog.isFunction(x_39610)){
x_39610.call(null);
} else {
var s_39611 = cljs.core.print_str.call(null,x_39610);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__39586_39593,chunk__39587_39594,count__39588_39595,i__39589_39596,s_39611,x_39610,seq__39586_39604__$1,temp__5457__auto___39603){
return (function (p1__39583_SHARP_){
return (p1__39583_SHARP_ + cljs.core.count.call(null,s_39611));
});})(seq__39586_39593,chunk__39587_39594,count__39588_39595,i__39589_39596,s_39611,x_39610,seq__39586_39604__$1,temp__5457__auto___39603))
);
}

cljs.core.print.call(null,s_39611);

}
}
}
}


var G__39612 = cljs.core.next.call(null,seq__39586_39604__$1);
var G__39613 = null;
var G__39614 = (0);
var G__39615 = (0);
seq__39586_39593 = G__39612;
chunk__39587_39594 = G__39613;
count__39588_39595 = G__39614;
i__39589_39596 = G__39615;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq39584){
var G__39585 = cljs.core.first.call(null,seq39584);
var seq39584__$1 = cljs.core.next.call(null,seq39584);
var self__19119__auto__ = this;
return self__19119__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39585,seq39584__$1);
});


//# sourceMappingURL=guard.js.map
