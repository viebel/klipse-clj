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
var G__21238__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__21238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21239__i = 0, G__21239__a = new Array(arguments.length -  0);
while (G__21239__i < G__21239__a.length) {G__21239__a[G__21239__i] = arguments[G__21239__i + 0]; ++G__21239__i;}
  args = new cljs.core.IndexedSeq(G__21239__a,0,null);
} 
return G__21238__delegate.call(this,args);};
G__21238.cljs$lang$maxFixedArity = 0;
G__21238.cljs$lang$applyTo = (function (arglist__21240){
var args = cljs.core.seq(arglist__21240);
return G__21238__delegate(args);
});
G__21238.cljs$core$IFn$_invoke$arity$variadic = G__21238__delegate;
return G__21238;
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

var c__15734__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15734__auto__){
return (function (){
var f__15735__auto__ = (function (){var switch__15639__auto__ = ((function (c__15734__auto__){
return (function (state_21250){
var state_val_21251 = (state_21250[(1)]);
if((state_val_21251 === (1))){
var state_21250__$1 = state_21250;
var statearr_21252_21259 = state_21250__$1;
(statearr_21252_21259[(2)] = null);

(statearr_21252_21259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21251 === (2))){
var inst_21242 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_21250__$1 = state_21250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21250__$1,(4),inst_21242);
} else {
if((state_val_21251 === (3))){
var inst_21248 = (state_21250[(2)]);
var state_21250__$1 = state_21250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21250__$1,inst_21248);
} else {
if((state_val_21251 === (4))){
var inst_21244 = (state_21250[(2)]);
var inst_21245 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_21250__$1 = (function (){var statearr_21253 = state_21250;
(statearr_21253[(7)] = inst_21244);

(statearr_21253[(8)] = inst_21245);

return statearr_21253;
})();
var statearr_21254_21260 = state_21250__$1;
(statearr_21254_21260[(2)] = null);

(statearr_21254_21260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15734__auto__))
;
return ((function (switch__15639__auto__,c__15734__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____0 = (function (){
var statearr_21255 = [null,null,null,null,null,null,null,null,null];
(statearr_21255[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__);

(statearr_21255[(1)] = (1));

return statearr_21255;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____1 = (function (state_21250){
while(true){
var ret_value__15641__auto__ = (function (){try{while(true){
var result__15642__auto__ = switch__15639__auto__.call(null,state_21250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15642__auto__;
}
break;
}
}catch (e21256){if((e21256 instanceof Object)){
var ex__15643__auto__ = e21256;
var statearr_21257_21261 = state_21250;
(statearr_21257_21261[(5)] = ex__15643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21262 = state_21250;
state_21250 = G__21262;
continue;
} else {
return ret_value__15641__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__ = function(state_21250){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____1.call(this,state_21250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15640__auto__;
})()
;})(switch__15639__auto__,c__15734__auto__))
})();
var state__15736__auto__ = (function (){var statearr_21258 = f__15735__auto__.call(null);
(statearr_21258[(6)] = c__15734__auto__);

return statearr_21258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15736__auto__);
});})(c__15734__auto__))
);

return c__15734__auto__;
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
var len__4730__auto___21270 = arguments.length;
var i__4731__auto___21271 = (0);
while(true){
if((i__4731__auto___21271 < len__4730__auto___21270)){
args__4736__auto__.push((arguments[i__4731__auto___21271]));

var G__21272 = (i__4731__auto___21271 + (1));
i__4731__auto___21271 = G__21272;
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

var seq__21266_21273 = cljs.core.seq.call(null,xs);
var chunk__21267_21274 = null;
var count__21268_21275 = (0);
var i__21269_21276 = (0);
while(true){
if((i__21269_21276 < count__21268_21275)){
var x_21277 = cljs.core._nth.call(null,chunk__21267_21274,i__21269_21276);
if((x_21277 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_21277)){
cljs.compiler.emit.call(null,x_21277);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_21277)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_21277);
} else {
if(goog.isFunction(x_21277)){
x_21277.call(null);
} else {
var s_21278 = cljs.core.print_str.call(null,x_21277);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21266_21273,chunk__21267_21274,count__21268_21275,i__21269_21276,s_21278,x_21277){
return (function (p1__21263_SHARP_){
return (p1__21263_SHARP_ + cljs.core.count.call(null,s_21278));
});})(seq__21266_21273,chunk__21267_21274,count__21268_21275,i__21269_21276,s_21278,x_21277))
);
}

cljs.core.print.call(null,s_21278);

}
}
}
}


var G__21279 = seq__21266_21273;
var G__21280 = chunk__21267_21274;
var G__21281 = count__21268_21275;
var G__21282 = (i__21269_21276 + (1));
seq__21266_21273 = G__21279;
chunk__21267_21274 = G__21280;
count__21268_21275 = G__21281;
i__21269_21276 = G__21282;
continue;
} else {
var temp__5720__auto___21283 = cljs.core.seq.call(null,seq__21266_21273);
if(temp__5720__auto___21283){
var seq__21266_21284__$1 = temp__5720__auto___21283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21266_21284__$1)){
var c__4550__auto___21285 = cljs.core.chunk_first.call(null,seq__21266_21284__$1);
var G__21286 = cljs.core.chunk_rest.call(null,seq__21266_21284__$1);
var G__21287 = c__4550__auto___21285;
var G__21288 = cljs.core.count.call(null,c__4550__auto___21285);
var G__21289 = (0);
seq__21266_21273 = G__21286;
chunk__21267_21274 = G__21287;
count__21268_21275 = G__21288;
i__21269_21276 = G__21289;
continue;
} else {
var x_21290 = cljs.core.first.call(null,seq__21266_21284__$1);
if((x_21290 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_21290)){
cljs.compiler.emit.call(null,x_21290);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_21290)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_21290);
} else {
if(goog.isFunction(x_21290)){
x_21290.call(null);
} else {
var s_21291 = cljs.core.print_str.call(null,x_21290);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21266_21273,chunk__21267_21274,count__21268_21275,i__21269_21276,s_21291,x_21290,seq__21266_21284__$1,temp__5720__auto___21283){
return (function (p1__21263_SHARP_){
return (p1__21263_SHARP_ + cljs.core.count.call(null,s_21291));
});})(seq__21266_21273,chunk__21267_21274,count__21268_21275,i__21269_21276,s_21291,x_21290,seq__21266_21284__$1,temp__5720__auto___21283))
);
}

cljs.core.print.call(null,s_21291);

}
}
}
}


var G__21292 = cljs.core.next.call(null,seq__21266_21284__$1);
var G__21293 = null;
var G__21294 = (0);
var G__21295 = (0);
seq__21266_21273 = G__21292;
chunk__21267_21274 = G__21293;
count__21268_21275 = G__21294;
i__21269_21276 = G__21295;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq21264){
var G__21265 = cljs.core.first.call(null,seq21264);
var seq21264__$1 = cljs.core.next.call(null,seq21264);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21265,seq21264__$1);
});


//# sourceMappingURL=guard.js.map
