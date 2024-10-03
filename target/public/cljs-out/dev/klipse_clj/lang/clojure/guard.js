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
var G__31866__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__31866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31867__i = 0, G__31867__a = new Array(arguments.length -  0);
while (G__31867__i < G__31867__a.length) {G__31867__a[G__31867__i] = arguments[G__31867__i + 0]; ++G__31867__i;}
  args = new cljs.core.IndexedSeq(G__31867__a,0,null);
} 
return G__31866__delegate.call(this,args);};
G__31866.cljs$lang$maxFixedArity = 0;
G__31866.cljs$lang$applyTo = (function (arglist__31868){
var args = cljs.core.seq(arglist__31868);
return G__31866__delegate(args);
});
G__31866.cljs$core$IFn$_invoke$arity$variadic = G__31866__delegate;
return G__31866;
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

var c__22108__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22109__auto__ = (function (){var switch__21983__auto__ = (function (state_31878){
var state_val_31879 = (state_31878[(1)]);
if((state_val_31879 === (1))){
var state_31878__$1 = state_31878;
var statearr_31880_31888 = state_31878__$1;
(statearr_31880_31888[(2)] = null);

(statearr_31880_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31879 === (2))){
var inst_31870 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31878__$1,(4),inst_31870);
} else {
if((state_val_31879 === (3))){
var inst_31876 = (state_31878[(2)]);
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31878__$1,inst_31876);
} else {
if((state_val_31879 === (4))){
var inst_31872 = (state_31878[(2)]);
var inst_31873 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_31878__$1 = (function (){var statearr_31881 = state_31878;
(statearr_31881[(7)] = inst_31872);

(statearr_31881[(8)] = inst_31873);

return statearr_31881;
})();
var statearr_31882_31889 = state_31878__$1;
(statearr_31882_31889[(2)] = null);

(statearr_31882_31889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____0 = (function (){
var statearr_31883 = [null,null,null,null,null,null,null,null,null];
(statearr_31883[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__);

(statearr_31883[(1)] = (1));

return statearr_31883;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____1 = (function (state_31878){
while(true){
var ret_value__21985__auto__ = (function (){try{while(true){
var result__21986__auto__ = switch__21983__auto__.call(null,state_31878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21986__auto__;
}
break;
}
}catch (e31884){var ex__21987__auto__ = e31884;
var statearr_31885_31890 = state_31878;
(statearr_31885_31890[(2)] = ex__21987__auto__);


if(cljs.core.seq.call(null,(state_31878[(4)]))){
var statearr_31886_31891 = state_31878;
(statearr_31886_31891[(1)] = cljs.core.first.call(null,(state_31878[(4)])));

} else {
throw ex__21987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31892 = state_31878;
state_31878 = G__31892;
continue;
} else {
return ret_value__21985__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__ = function(state_31878){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____1.call(this,state_31878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__21984__auto__;
})()
})();
var state__22110__auto__ = (function (){var statearr_31887 = f__22109__auto__.call(null);
(statearr_31887[(6)] = c__22108__auto__);

return statearr_31887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22110__auto__);
}));

return c__22108__auto__;
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
var len__5726__auto___31900 = arguments.length;
var i__5727__auto___31901 = (0);
while(true){
if((i__5727__auto___31901 < len__5726__auto___31900)){
args__5732__auto__.push((arguments[i__5727__auto___31901]));

var G__31902 = (i__5727__auto___31901 + (1));
i__5727__auto___31901 = G__31902;
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

var seq__31896_31903 = cljs.core.seq.call(null,xs);
var chunk__31897_31904 = null;
var count__31898_31905 = (0);
var i__31899_31906 = (0);
while(true){
if((i__31899_31906 < count__31898_31905)){
var x_31907 = cljs.core._nth.call(null,chunk__31897_31904,i__31899_31906);
if((x_31907 == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x_31907)){
cljs.compiler.emit.call(null,x_31907);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x_31907)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_31907);
} else {
if(goog.isFunction(x_31907)){
x_31907.call(null);
} else {
var s_31908 = cljs.core.print_str.call(null,x_31907);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31896_31903,chunk__31897_31904,count__31898_31905,i__31899_31906,s_31908,x_31907){
return (function (p1__31893_SHARP_){
return (p1__31893_SHARP_ + ((s_31908).length));
});})(seq__31896_31903,chunk__31897_31904,count__31898_31905,i__31899_31906,s_31908,x_31907))
);
}

cljs.core.print.call(null,s_31908);

}
}
}
}


var G__31909 = seq__31896_31903;
var G__31910 = chunk__31897_31904;
var G__31911 = count__31898_31905;
var G__31912 = (i__31899_31906 + (1));
seq__31896_31903 = G__31909;
chunk__31897_31904 = G__31910;
count__31898_31905 = G__31911;
i__31899_31906 = G__31912;
continue;
} else {
var temp__5823__auto___31913 = cljs.core.seq.call(null,seq__31896_31903);
if(temp__5823__auto___31913){
var seq__31896_31914__$1 = temp__5823__auto___31913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31896_31914__$1)){
var c__5525__auto___31915 = cljs.core.chunk_first.call(null,seq__31896_31914__$1);
var G__31916 = cljs.core.chunk_rest.call(null,seq__31896_31914__$1);
var G__31917 = c__5525__auto___31915;
var G__31918 = cljs.core.count.call(null,c__5525__auto___31915);
var G__31919 = (0);
seq__31896_31903 = G__31916;
chunk__31897_31904 = G__31917;
count__31898_31905 = G__31918;
i__31899_31906 = G__31919;
continue;
} else {
var x_31920 = cljs.core.first.call(null,seq__31896_31914__$1);
if((x_31920 == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x_31920)){
cljs.compiler.emit.call(null,x_31920);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x_31920)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_31920);
} else {
if(goog.isFunction(x_31920)){
x_31920.call(null);
} else {
var s_31921 = cljs.core.print_str.call(null,x_31920);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__31896_31903,chunk__31897_31904,count__31898_31905,i__31899_31906,s_31921,x_31920,seq__31896_31914__$1,temp__5823__auto___31913){
return (function (p1__31893_SHARP_){
return (p1__31893_SHARP_ + ((s_31921).length));
});})(seq__31896_31903,chunk__31897_31904,count__31898_31905,i__31899_31906,s_31921,x_31920,seq__31896_31914__$1,temp__5823__auto___31913))
);
}

cljs.core.print.call(null,s_31921);

}
}
}
}


var G__31922 = cljs.core.next.call(null,seq__31896_31914__$1);
var G__31923 = null;
var G__31924 = (0);
var G__31925 = (0);
seq__31896_31903 = G__31922;
chunk__31897_31904 = G__31923;
count__31898_31905 = G__31924;
i__31899_31906 = G__31925;
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
(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq31894){
var G__31895 = cljs.core.first.call(null,seq31894);
var seq31894__$1 = cljs.core.next.call(null,seq31894);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31895,seq31894__$1);
}));


//# sourceMappingURL=guard.js.map
