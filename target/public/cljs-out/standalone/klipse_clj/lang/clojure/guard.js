// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.clojure.guard');
goog.require('cljs.core');
goog.require('cljs.analyzer');
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
var G__20525__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__20525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20526__i = 0, G__20526__a = new Array(arguments.length -  0);
while (G__20526__i < G__20526__a.length) {G__20526__a[G__20526__i] = arguments[G__20526__i + 0]; ++G__20526__i;}
  args = new cljs.core.IndexedSeq(G__20526__a,0,null);
} 
return G__20525__delegate.call(this,args);};
G__20525.cljs$lang$maxFixedArity = 0;
G__20525.cljs$lang$applyTo = (function (arglist__20527){
var args = cljs.core.seq(arglist__20527);
return G__20525__delegate(args);
});
G__20525.cljs$core$IFn$_invoke$arity$variadic = G__20525__delegate;
return G__20525;
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

var c__15634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15634__auto__){
return (function (){
var f__15635__auto__ = (function (){var switch__15539__auto__ = ((function (c__15634__auto__){
return (function (state_20537){
var state_val_20538 = (state_20537[(1)]);
if((state_val_20538 === (1))){
var state_20537__$1 = state_20537;
var statearr_20539_20546 = state_20537__$1;
(statearr_20539_20546[(2)] = null);

(statearr_20539_20546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20538 === (2))){
var inst_20529 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_20537__$1 = state_20537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20537__$1,(4),inst_20529);
} else {
if((state_val_20538 === (3))){
var inst_20535 = (state_20537[(2)]);
var state_20537__$1 = state_20537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20537__$1,inst_20535);
} else {
if((state_val_20538 === (4))){
var inst_20531 = (state_20537[(2)]);
var inst_20532 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_20537__$1 = (function (){var statearr_20540 = state_20537;
(statearr_20540[(7)] = inst_20531);

(statearr_20540[(8)] = inst_20532);

return statearr_20540;
})();
var statearr_20541_20547 = state_20537__$1;
(statearr_20541_20547[(2)] = null);

(statearr_20541_20547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15634__auto__))
;
return ((function (switch__15539__auto__,c__15634__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____0 = (function (){
var statearr_20542 = [null,null,null,null,null,null,null,null,null];
(statearr_20542[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__);

(statearr_20542[(1)] = (1));

return statearr_20542;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1 = (function (state_20537){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_20537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e20543){if((e20543 instanceof Object)){
var ex__15543__auto__ = e20543;
var statearr_20544_20548 = state_20537;
(statearr_20544_20548[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20549 = state_20537;
state_20537 = G__20549;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__ = function(state_20537){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1.call(this,state_20537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_20545 = f__15635__auto__.call(null);
(statearr_20545[(6)] = c__15634__auto__);

return statearr_20545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15636__auto__);
});})(c__15634__auto__))
);

return c__15634__auto__;
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
var len__4730__auto___20557 = arguments.length;
var i__4731__auto___20558 = (0);
while(true){
if((i__4731__auto___20558 < len__4730__auto___20557)){
args__4736__auto__.push((arguments[i__4731__auto___20558]));

var G__20559 = (i__4731__auto___20558 + (1));
i__4731__auto___20558 = G__20559;
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

var seq__20553_20560 = cljs.core.seq.call(null,xs);
var chunk__20554_20561 = null;
var count__20555_20562 = (0);
var i__20556_20563 = (0);
while(true){
if((i__20556_20563 < count__20555_20562)){
var x_20564 = cljs.core._nth.call(null,chunk__20554_20561,i__20556_20563);
if((x_20564 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20564)){
cljs.compiler.emit.call(null,x_20564);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20564)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20564);
} else {
if(goog.isFunction(x_20564)){
x_20564.call(null);
} else {
var s_20565 = cljs.core.print_str.call(null,x_20564);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20553_20560,chunk__20554_20561,count__20555_20562,i__20556_20563,s_20565,x_20564){
return (function (p1__20550_SHARP_){
return (p1__20550_SHARP_ + cljs.core.count.call(null,s_20565));
});})(seq__20553_20560,chunk__20554_20561,count__20555_20562,i__20556_20563,s_20565,x_20564))
);
}

cljs.core.print.call(null,s_20565);

}
}
}
}


var G__20566 = seq__20553_20560;
var G__20567 = chunk__20554_20561;
var G__20568 = count__20555_20562;
var G__20569 = (i__20556_20563 + (1));
seq__20553_20560 = G__20566;
chunk__20554_20561 = G__20567;
count__20555_20562 = G__20568;
i__20556_20563 = G__20569;
continue;
} else {
var temp__5804__auto___20570 = cljs.core.seq.call(null,seq__20553_20560);
if(temp__5804__auto___20570){
var seq__20553_20571__$1 = temp__5804__auto___20570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20553_20571__$1)){
var c__4550__auto___20572 = cljs.core.chunk_first.call(null,seq__20553_20571__$1);
var G__20573 = cljs.core.chunk_rest.call(null,seq__20553_20571__$1);
var G__20574 = c__4550__auto___20572;
var G__20575 = cljs.core.count.call(null,c__4550__auto___20572);
var G__20576 = (0);
seq__20553_20560 = G__20573;
chunk__20554_20561 = G__20574;
count__20555_20562 = G__20575;
i__20556_20563 = G__20576;
continue;
} else {
var x_20577 = cljs.core.first.call(null,seq__20553_20571__$1);
if((x_20577 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20577)){
cljs.compiler.emit.call(null,x_20577);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20577)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20577);
} else {
if(goog.isFunction(x_20577)){
x_20577.call(null);
} else {
var s_20578 = cljs.core.print_str.call(null,x_20577);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20553_20560,chunk__20554_20561,count__20555_20562,i__20556_20563,s_20578,x_20577,seq__20553_20571__$1,temp__5804__auto___20570){
return (function (p1__20550_SHARP_){
return (p1__20550_SHARP_ + cljs.core.count.call(null,s_20578));
});})(seq__20553_20560,chunk__20554_20561,count__20555_20562,i__20556_20563,s_20578,x_20577,seq__20553_20571__$1,temp__5804__auto___20570))
);
}

cljs.core.print.call(null,s_20578);

}
}
}
}


var G__20579 = cljs.core.next.call(null,seq__20553_20571__$1);
var G__20580 = null;
var G__20581 = (0);
var G__20582 = (0);
seq__20553_20560 = G__20579;
chunk__20554_20561 = G__20580;
count__20555_20562 = G__20581;
i__20556_20563 = G__20582;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq20551){
var G__20552 = cljs.core.first.call(null,seq20551);
var seq20551__$1 = cljs.core.next.call(null,seq20551);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20552,seq20551__$1);
});


//# sourceMappingURL=guard.js.map
