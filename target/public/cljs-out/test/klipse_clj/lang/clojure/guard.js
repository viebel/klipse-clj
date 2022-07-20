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
var G__20806__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__20806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20807__i = 0, G__20807__a = new Array(arguments.length -  0);
while (G__20807__i < G__20807__a.length) {G__20807__a[G__20807__i] = arguments[G__20807__i + 0]; ++G__20807__i;}
  args = new cljs.core.IndexedSeq(G__20807__a,0,null);
} 
return G__20806__delegate.call(this,args);};
G__20806.cljs$lang$maxFixedArity = 0;
G__20806.cljs$lang$applyTo = (function (arglist__20808){
var args = cljs.core.seq(arglist__20808);
return G__20806__delegate(args);
});
G__20806.cljs$core$IFn$_invoke$arity$variadic = G__20806__delegate;
return G__20806;
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
return (function (state_20818){
var state_val_20819 = (state_20818[(1)]);
if((state_val_20819 === (1))){
var state_20818__$1 = state_20818;
var statearr_20820_20827 = state_20818__$1;
(statearr_20820_20827[(2)] = null);

(statearr_20820_20827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20819 === (2))){
var inst_20810 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20818__$1,(4),inst_20810);
} else {
if((state_val_20819 === (3))){
var inst_20816 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20818__$1,inst_20816);
} else {
if((state_val_20819 === (4))){
var inst_20812 = (state_20818[(2)]);
var inst_20813 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_20818__$1 = (function (){var statearr_20821 = state_20818;
(statearr_20821[(7)] = inst_20813);

(statearr_20821[(8)] = inst_20812);

return statearr_20821;
})();
var statearr_20822_20828 = state_20818__$1;
(statearr_20822_20828[(2)] = null);

(statearr_20822_20828[(1)] = (2));


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
var statearr_20823 = [null,null,null,null,null,null,null,null,null];
(statearr_20823[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__);

(statearr_20823[(1)] = (1));

return statearr_20823;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1 = (function (state_20818){
while(true){
var ret_value__15541__auto__ = (function (){try{while(true){
var result__15542__auto__ = switch__15539__auto__.call(null,state_20818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15542__auto__;
}
break;
}
}catch (e20824){if((e20824 instanceof Object)){
var ex__15543__auto__ = e20824;
var statearr_20825_20829 = state_20818;
(statearr_20825_20829[(5)] = ex__15543__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20830 = state_20818;
state_20818 = G__20830;
continue;
} else {
return ret_value__15541__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15540__auto__;
})()
;})(switch__15539__auto__,c__15634__auto__))
})();
var state__15636__auto__ = (function (){var statearr_20826 = f__15635__auto__.call(null);
(statearr_20826[(6)] = c__15634__auto__);

return statearr_20826;
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
var len__4730__auto___20838 = arguments.length;
var i__4731__auto___20839 = (0);
while(true){
if((i__4731__auto___20839 < len__4730__auto___20838)){
args__4736__auto__.push((arguments[i__4731__auto___20839]));

var G__20840 = (i__4731__auto___20839 + (1));
i__4731__auto___20839 = G__20840;
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

var seq__20834_20841 = cljs.core.seq.call(null,xs);
var chunk__20835_20842 = null;
var count__20836_20843 = (0);
var i__20837_20844 = (0);
while(true){
if((i__20837_20844 < count__20836_20843)){
var x_20845 = cljs.core._nth.call(null,chunk__20835_20842,i__20837_20844);
if((x_20845 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20845)){
cljs.compiler.emit.call(null,x_20845);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20845)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20845);
} else {
if(goog.isFunction(x_20845)){
x_20845.call(null);
} else {
var s_20846 = cljs.core.print_str.call(null,x_20845);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20834_20841,chunk__20835_20842,count__20836_20843,i__20837_20844,s_20846,x_20845){
return (function (p1__20831_SHARP_){
return (p1__20831_SHARP_ + cljs.core.count.call(null,s_20846));
});})(seq__20834_20841,chunk__20835_20842,count__20836_20843,i__20837_20844,s_20846,x_20845))
);
}

cljs.core.print.call(null,s_20846);

}
}
}
}


var G__20847 = seq__20834_20841;
var G__20848 = chunk__20835_20842;
var G__20849 = count__20836_20843;
var G__20850 = (i__20837_20844 + (1));
seq__20834_20841 = G__20847;
chunk__20835_20842 = G__20848;
count__20836_20843 = G__20849;
i__20837_20844 = G__20850;
continue;
} else {
var temp__5804__auto___20851 = cljs.core.seq.call(null,seq__20834_20841);
if(temp__5804__auto___20851){
var seq__20834_20852__$1 = temp__5804__auto___20851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20834_20852__$1)){
var c__4550__auto___20853 = cljs.core.chunk_first.call(null,seq__20834_20852__$1);
var G__20854 = cljs.core.chunk_rest.call(null,seq__20834_20852__$1);
var G__20855 = c__4550__auto___20853;
var G__20856 = cljs.core.count.call(null,c__4550__auto___20853);
var G__20857 = (0);
seq__20834_20841 = G__20854;
chunk__20835_20842 = G__20855;
count__20836_20843 = G__20856;
i__20837_20844 = G__20857;
continue;
} else {
var x_20858 = cljs.core.first.call(null,seq__20834_20852__$1);
if((x_20858 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20858)){
cljs.compiler.emit.call(null,x_20858);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20858)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_20858);
} else {
if(goog.isFunction(x_20858)){
x_20858.call(null);
} else {
var s_20859 = cljs.core.print_str.call(null,x_20858);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20834_20841,chunk__20835_20842,count__20836_20843,i__20837_20844,s_20859,x_20858,seq__20834_20852__$1,temp__5804__auto___20851){
return (function (p1__20831_SHARP_){
return (p1__20831_SHARP_ + cljs.core.count.call(null,s_20859));
});})(seq__20834_20841,chunk__20835_20842,count__20836_20843,i__20837_20844,s_20859,x_20858,seq__20834_20852__$1,temp__5804__auto___20851))
);
}

cljs.core.print.call(null,s_20859);

}
}
}
}


var G__20860 = cljs.core.next.call(null,seq__20834_20852__$1);
var G__20861 = null;
var G__20862 = (0);
var G__20863 = (0);
seq__20834_20841 = G__20860;
chunk__20835_20842 = G__20861;
count__20836_20843 = G__20862;
i__20837_20844 = G__20863;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq20832){
var G__20833 = cljs.core.first.call(null,seq20832);
var seq20832__$1 = cljs.core.next.call(null,seq20832);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20833,seq20832__$1);
});


//# sourceMappingURL=guard.js.map
