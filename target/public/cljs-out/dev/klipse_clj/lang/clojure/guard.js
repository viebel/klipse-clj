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
var G__20803__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__20803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20804__i = 0, G__20804__a = new Array(arguments.length -  0);
while (G__20804__i < G__20804__a.length) {G__20804__a[G__20804__i] = arguments[G__20804__i + 0]; ++G__20804__i;}
  args = new cljs.core.IndexedSeq(G__20804__a,0,null);
} 
return G__20803__delegate.call(this,args);};
G__20803.cljs$lang$maxFixedArity = 0;
G__20803.cljs$lang$applyTo = (function (arglist__20805){
var args = cljs.core.seq(arglist__20805);
return G__20803__delegate(args);
});
G__20803.cljs$core$IFn$_invoke$arity$variadic = G__20803__delegate;
return G__20803;
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

var c__15631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15631__auto__){
return (function (){
var f__15632__auto__ = (function (){var switch__15536__auto__ = ((function (c__15631__auto__){
return (function (state_20815){
var state_val_20816 = (state_20815[(1)]);
if((state_val_20816 === (1))){
var state_20815__$1 = state_20815;
var statearr_20817_20824 = state_20815__$1;
(statearr_20817_20824[(2)] = null);

(statearr_20817_20824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20816 === (2))){
var inst_20807 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20815__$1,(4),inst_20807);
} else {
if((state_val_20816 === (3))){
var inst_20813 = (state_20815[(2)]);
var state_20815__$1 = state_20815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20815__$1,inst_20813);
} else {
if((state_val_20816 === (4))){
var inst_20809 = (state_20815[(2)]);
var inst_20810 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_20815__$1 = (function (){var statearr_20818 = state_20815;
(statearr_20818[(7)] = inst_20810);

(statearr_20818[(8)] = inst_20809);

return statearr_20818;
})();
var statearr_20819_20825 = state_20815__$1;
(statearr_20819_20825[(2)] = null);

(statearr_20819_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15631__auto__))
;
return ((function (switch__15536__auto__,c__15631__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____0 = (function (){
var statearr_20820 = [null,null,null,null,null,null,null,null,null];
(statearr_20820[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__);

(statearr_20820[(1)] = (1));

return statearr_20820;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____1 = (function (state_20815){
while(true){
var ret_value__15538__auto__ = (function (){try{while(true){
var result__15539__auto__ = switch__15536__auto__.call(null,state_20815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15539__auto__;
}
break;
}
}catch (e20821){if((e20821 instanceof Object)){
var ex__15540__auto__ = e20821;
var statearr_20822_20826 = state_20815;
(statearr_20822_20826[(5)] = ex__15540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20827 = state_20815;
state_20815 = G__20827;
continue;
} else {
return ret_value__15538__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__ = function(state_20815){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____1.call(this,state_20815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15537__auto__;
})()
;})(switch__15536__auto__,c__15631__auto__))
})();
var state__15633__auto__ = (function (){var statearr_20823 = f__15632__auto__.call(null);
(statearr_20823[(6)] = c__15631__auto__);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15633__auto__);
});})(c__15631__auto__))
);

return c__15631__auto__;
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
var len__4730__auto___20835 = arguments.length;
var i__4731__auto___20836 = (0);
while(true){
if((i__4731__auto___20836 < len__4730__auto___20835)){
args__4736__auto__.push((arguments[i__4731__auto___20836]));

var G__20837 = (i__4731__auto___20836 + (1));
i__4731__auto___20836 = G__20837;
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

var seq__20831_20838 = cljs.core.seq.call(null,xs);
var chunk__20832_20839 = null;
var count__20833_20840 = (0);
var i__20834_20841 = (0);
while(true){
if((i__20834_20841 < count__20833_20840)){
var x_20842 = cljs.core._nth.call(null,chunk__20832_20839,i__20834_20841);
if((x_20842 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20842)){
cljs.compiler.emit.call(null,x_20842);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20842)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20842);
} else {
if(goog.isFunction(x_20842)){
x_20842.call(null);
} else {
var s_20843 = cljs.core.print_str.call(null,x_20842);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20831_20838,chunk__20832_20839,count__20833_20840,i__20834_20841,s_20843,x_20842){
return (function (p1__20828_SHARP_){
return (p1__20828_SHARP_ + cljs.core.count.call(null,s_20843));
});})(seq__20831_20838,chunk__20832_20839,count__20833_20840,i__20834_20841,s_20843,x_20842))
);
}

cljs.core.print.call(null,s_20843);

}
}
}
}


var G__20844 = seq__20831_20838;
var G__20845 = chunk__20832_20839;
var G__20846 = count__20833_20840;
var G__20847 = (i__20834_20841 + (1));
seq__20831_20838 = G__20844;
chunk__20832_20839 = G__20845;
count__20833_20840 = G__20846;
i__20834_20841 = G__20847;
continue;
} else {
var temp__5720__auto___20848 = cljs.core.seq.call(null,seq__20831_20838);
if(temp__5720__auto___20848){
var seq__20831_20849__$1 = temp__5720__auto___20848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20831_20849__$1)){
var c__4550__auto___20850 = cljs.core.chunk_first.call(null,seq__20831_20849__$1);
var G__20851 = cljs.core.chunk_rest.call(null,seq__20831_20849__$1);
var G__20852 = c__4550__auto___20850;
var G__20853 = cljs.core.count.call(null,c__4550__auto___20850);
var G__20854 = (0);
seq__20831_20838 = G__20851;
chunk__20832_20839 = G__20852;
count__20833_20840 = G__20853;
i__20834_20841 = G__20854;
continue;
} else {
var x_20855 = cljs.core.first.call(null,seq__20831_20849__$1);
if((x_20855 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20855)){
cljs.compiler.emit.call(null,x_20855);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20855)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20855);
} else {
if(goog.isFunction(x_20855)){
x_20855.call(null);
} else {
var s_20856 = cljs.core.print_str.call(null,x_20855);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20831_20838,chunk__20832_20839,count__20833_20840,i__20834_20841,s_20856,x_20855,seq__20831_20849__$1,temp__5720__auto___20848){
return (function (p1__20828_SHARP_){
return (p1__20828_SHARP_ + cljs.core.count.call(null,s_20856));
});})(seq__20831_20838,chunk__20832_20839,count__20833_20840,i__20834_20841,s_20856,x_20855,seq__20831_20849__$1,temp__5720__auto___20848))
);
}

cljs.core.print.call(null,s_20856);

}
}
}
}


var G__20857 = cljs.core.next.call(null,seq__20831_20849__$1);
var G__20858 = null;
var G__20859 = (0);
var G__20860 = (0);
seq__20831_20838 = G__20857;
chunk__20832_20839 = G__20858;
count__20833_20840 = G__20859;
i__20834_20841 = G__20860;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq20829){
var G__20830 = cljs.core.first.call(null,seq20829);
var seq20829__$1 = cljs.core.next.call(null,seq20829);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20830,seq20829__$1);
});


//# sourceMappingURL=guard.js.map
