// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('klipse_clj.lang.clojure.guard');
goog.require('cljs.core');
goog.require('cljs.analyzer.impl');
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
return (function() { 
var G__31781__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__31781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31782__i = 0, G__31782__a = new Array(arguments.length -  0);
while (G__31782__i < G__31782__a.length) {G__31782__a[G__31782__i] = arguments[G__31782__i + 0]; ++G__31782__i;}
  args = new cljs.core.IndexedSeq(G__31782__a,0,null);
} 
return G__31781__delegate.call(this,args);};
G__31781.cljs$lang$maxFixedArity = 0;
G__31781.cljs$lang$applyTo = (function (arglist__31783){
var args = cljs.core.seq(arglist__31783);
return G__31781__delegate(args);
});
G__31781.cljs$core$IFn$_invoke$arity$variadic = G__31781__delegate;
return G__31781;
})()
;
});
klipse_clj.lang.clojure.guard.tick = (function klipse_clj$lang$clojure$guard$tick(){
return (klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null));
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse_clj.lang.clojure.guard.run_watchdog_STAR_ = (function klipse_clj$lang$clojure$guard$run_watchdog_STAR_(){
klipse_clj.lang.clojure.guard.tick.call(null);

var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22024__auto__ = (function (){var switch__21898__auto__ = (function (state_31793){
var state_val_31794 = (state_31793[(1)]);
if((state_val_31794 === (1))){
var state_31793__$1 = state_31793;
var statearr_31795_31803 = state_31793__$1;
(statearr_31795_31803[(2)] = null);

(statearr_31795_31803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31794 === (2))){
var inst_31785 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31793__$1,(4),inst_31785);
} else {
if((state_val_31794 === (3))){
var inst_31791 = (state_31793[(2)]);
var state_31793__$1 = state_31793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31793__$1,inst_31791);
} else {
if((state_val_31794 === (4))){
var inst_31787 = (state_31793[(2)]);
var inst_31788 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_31793__$1 = (function (){var statearr_31796 = state_31793;
(statearr_31796[(7)] = inst_31787);

(statearr_31796[(8)] = inst_31788);

return statearr_31796;
})();
var statearr_31797_31804 = state_31793__$1;
(statearr_31797_31804[(2)] = null);

(statearr_31797_31804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____1 = (function (state_31793){
while(true){
var ret_value__21900__auto__ = (function (){try{while(true){
var result__21901__auto__ = switch__21898__auto__.call(null,state_31793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21901__auto__;
}
break;
}
}catch (e31799){var ex__21902__auto__ = e31799;
var statearr_31800_31805 = state_31793;
(statearr_31800_31805[(2)] = ex__21902__auto__);


if(cljs.core.seq.call(null,(state_31793[(4)]))){
var statearr_31801_31806 = state_31793;
(statearr_31801_31806[(1)] = cljs.core.first.call(null,(state_31793[(4)])));

} else {
throw ex__21902__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31807 = state_31793;
state_31793 = G__31807;
continue;
} else {
return ret_value__21900__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__ = function(state_31793){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____1.call(this,state_31793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21899__auto__;
})()
})();
var state__22025__auto__ = (function (){var statearr_31802 = f__22024__auto__.call(null);
(statearr_31802[(6)] = c__22023__auto__);

return statearr_31802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
}));

return c__22023__auto__;
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

return (klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null));
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
var args__5732__auto__ = [];
var len__5726__auto___31815 = arguments.length;
var i__5727__auto___31816 = (0);
while(true){
if((i__5727__auto___31816 < len__5726__auto___31815)){
args__5732__auto__.push((arguments[i__5727__auto___31816]));

var G__31817 = (i__5727__auto___31816 + (1));
i__5727__auto___31816 = G__31817;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__5000__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__5000__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__5000__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__31811_31818 = cljs.core.seq.call(null,xs);
var chunk__31812_31819 = null;
var count__31813_31820 = (0);
var i__31814_31821 = (0);
while(true){
if((i__31814_31821 < count__31813_31820)){
var x_31822 = cljs.core._nth.call(null,chunk__31812_31819,i__31814_31821);
if((x_31822 == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x_31822)){
cljs.compiler.emit.call(null,x_31822);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x_31822)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_31822);
} else {
if(goog.isFunction(x_31822)){
x_31822.call(null);
} else {
var s_31823 = cljs.core.print_str.call(null,x_31822);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31811_31818,chunk__31812_31819,count__31813_31820,i__31814_31821,s_31823,x_31822){
return (function (p1__31808_SHARP_){
return (p1__31808_SHARP_ + ((s_31823).length));
});})(seq__31811_31818,chunk__31812_31819,count__31813_31820,i__31814_31821,s_31823,x_31822))
);
}

cljs.core.print.call(null,s_31823);

}
}
}
}


var G__31824 = seq__31811_31818;
var G__31825 = chunk__31812_31819;
var G__31826 = count__31813_31820;
var G__31827 = (i__31814_31821 + (1));
seq__31811_31818 = G__31824;
chunk__31812_31819 = G__31825;
count__31813_31820 = G__31826;
i__31814_31821 = G__31827;
continue;
} else {
var temp__5823__auto___31828 = cljs.core.seq.call(null,seq__31811_31818);
if(temp__5823__auto___31828){
var seq__31811_31829__$1 = temp__5823__auto___31828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31811_31829__$1)){
var c__5525__auto___31830 = cljs.core.chunk_first.call(null,seq__31811_31829__$1);
var G__31831 = cljs.core.chunk_rest.call(null,seq__31811_31829__$1);
var G__31832 = c__5525__auto___31830;
var G__31833 = cljs.core.count.call(null,c__5525__auto___31830);
var G__31834 = (0);
seq__31811_31818 = G__31831;
chunk__31812_31819 = G__31832;
count__31813_31820 = G__31833;
i__31814_31821 = G__31834;
continue;
} else {
var x_31835 = cljs.core.first.call(null,seq__31811_31829__$1);
if((x_31835 == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x_31835)){
cljs.compiler.emit.call(null,x_31835);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x_31835)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_31835);
} else {
if(goog.isFunction(x_31835)){
x_31835.call(null);
} else {
var s_31836 = cljs.core.print_str.call(null,x_31835);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31811_31818,chunk__31812_31819,count__31813_31820,i__31814_31821,s_31836,x_31835,seq__31811_31829__$1,temp__5823__auto___31828){
return (function (p1__31808_SHARP_){
return (p1__31808_SHARP_ + ((s_31836).length));
});})(seq__31811_31818,chunk__31812_31819,count__31813_31820,i__31814_31821,s_31836,x_31835,seq__31811_31829__$1,temp__5823__auto___31828))
);
}

cljs.core.print.call(null,s_31836);

}
}
}
}


var G__31837 = cljs.core.next.call(null,seq__31811_31829__$1);
var G__31838 = null;
var G__31839 = (0);
var G__31840 = (0);
seq__31811_31818 = G__31837;
chunk__31812_31819 = G__31838;
count__31813_31820 = G__31839;
i__31814_31821 = G__31840;
continue;
}
} else {
}
}
break;
}

return null;
}));

(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq31809){
var G__31810 = cljs.core.first.call(null,seq31809);
var seq31809__$1 = cljs.core.next.call(null,seq31809);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31810,seq31809__$1);
}));


//# sourceMappingURL=guard.js.map
