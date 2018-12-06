// Compiled by ClojureScript 1.10.238 {}
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
var G__143657__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__143657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__143658__i = 0, G__143658__a = new Array(arguments.length -  0);
while (G__143658__i < G__143658__a.length) {G__143658__a[G__143658__i] = arguments[G__143658__i + 0]; ++G__143658__i;}
  args = new cljs.core.IndexedSeq(G__143658__a,0,null);
} 
return G__143657__delegate.call(this,args);};
G__143657.cljs$lang$maxFixedArity = 0;
G__143657.cljs$lang$applyTo = (function (arglist__143659){
var args = cljs.core.seq(arglist__143659);
return G__143657__delegate(args);
});
G__143657.cljs$core$IFn$_invoke$arity$variadic = G__143657__delegate;
return G__143657;
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

var c__15829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15829__auto__){
return (function (){
var f__15830__auto__ = (function (){var switch__15806__auto__ = ((function (c__15829__auto__){
return (function (state_143669){
var state_val_143670 = (state_143669[(1)]);
if((state_val_143670 === (1))){
var state_143669__$1 = state_143669;
var statearr_143671_143678 = state_143669__$1;
(statearr_143671_143678[(2)] = null);

(statearr_143671_143678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_143670 === (2))){
var inst_143661 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_143669__$1 = state_143669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_143669__$1,(4),inst_143661);
} else {
if((state_val_143670 === (3))){
var inst_143667 = (state_143669[(2)]);
var state_143669__$1 = state_143669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_143669__$1,inst_143667);
} else {
if((state_val_143670 === (4))){
var inst_143663 = (state_143669[(2)]);
var inst_143664 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_143669__$1 = (function (){var statearr_143672 = state_143669;
(statearr_143672[(7)] = inst_143663);

(statearr_143672[(8)] = inst_143664);

return statearr_143672;
})();
var statearr_143673_143679 = state_143669__$1;
(statearr_143673_143679[(2)] = null);

(statearr_143673_143679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__15829__auto__))
;
return ((function (switch__15806__auto__,c__15829__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____0 = (function (){
var statearr_143674 = [null,null,null,null,null,null,null,null,null];
(statearr_143674[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__);

(statearr_143674[(1)] = (1));

return statearr_143674;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____1 = (function (state_143669){
while(true){
var ret_value__15808__auto__ = (function (){try{while(true){
var result__15809__auto__ = switch__15806__auto__.call(null,state_143669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15809__auto__;
}
break;
}
}catch (e143675){if((e143675 instanceof Object)){
var ex__15810__auto__ = e143675;
var statearr_143676_143680 = state_143669;
(statearr_143676_143680[(5)] = ex__15810__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_143669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e143675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__143681 = state_143669;
state_143669 = G__143681;
continue;
} else {
return ret_value__15808__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__ = function(state_143669){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____1.call(this,state_143669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15807__auto__;
})()
;})(switch__15806__auto__,c__15829__auto__))
})();
var state__15831__auto__ = (function (){var statearr_143677 = f__15830__auto__.call(null);
(statearr_143677[(6)] = c__15829__auto__);

return statearr_143677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15831__auto__);
});})(c__15829__auto__))
);

return c__15829__auto__;
});
klipse_clj.lang.clojure.guard.run_watchdog_once = klipse_clj.lang.clojure.guard.runonce.call(null,klipse_clj.lang.clojure.guard.run_watchdog_STAR_);
klipse_clj.lang.clojure.guard.watchdog = (function klipse_clj$lang$clojure$guard$watchdog(){
klipse_clj.lang.clojure.guard.tick.call(null);

return klipse_clj.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse_clj.lang.clojure.guard.guard = (function klipse_clj$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw ["Infinite Loop"].join('');
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
var args__4502__auto__ = [];
var len__4499__auto___143695 = arguments.length;
var i__4500__auto___143696 = (0);
while(true){
if((i__4500__auto___143696 < len__4499__auto___143695)){
args__4502__auto__.push((arguments[i__4500__auto___143696]));

var G__143699 = (i__4500__auto___143696 + (1));
i__4500__auto___143696 = G__143699;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__3911__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__3911__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__3911__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__143691_143713 = cljs.core.seq.call(null,xs);
var chunk__143692_143714 = null;
var count__143693_143715 = (0);
var i__143694_143716 = (0);
while(true){
if((i__143694_143716 < count__143693_143715)){
var x_143720 = cljs.core._nth.call(null,chunk__143692_143714,i__143694_143716);
if((x_143720 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_143720)){
cljs.compiler.emit.call(null,x_143720);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_143720)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_143720);
} else {
if(goog.isFunction(x_143720)){
x_143720.call(null);
} else {
var s_143723 = cljs.core.print_str.call(null,x_143720);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__143691_143713,chunk__143692_143714,count__143693_143715,i__143694_143716,s_143723,x_143720){
return (function (p1__143686_SHARP_){
return (p1__143686_SHARP_ + cljs.core.count.call(null,s_143723));
});})(seq__143691_143713,chunk__143692_143714,count__143693_143715,i__143694_143716,s_143723,x_143720))
);
}

cljs.core.print.call(null,s_143723);

}
}
}
}


var G__143724 = seq__143691_143713;
var G__143725 = chunk__143692_143714;
var G__143726 = count__143693_143715;
var G__143727 = (i__143694_143716 + (1));
seq__143691_143713 = G__143724;
chunk__143692_143714 = G__143725;
count__143693_143715 = G__143726;
i__143694_143716 = G__143727;
continue;
} else {
var temp__5457__auto___143728 = cljs.core.seq.call(null,seq__143691_143713);
if(temp__5457__auto___143728){
var seq__143691_143729__$1 = temp__5457__auto___143728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__143691_143729__$1)){
var c__4319__auto___143730 = cljs.core.chunk_first.call(null,seq__143691_143729__$1);
var G__143731 = cljs.core.chunk_rest.call(null,seq__143691_143729__$1);
var G__143732 = c__4319__auto___143730;
var G__143733 = cljs.core.count.call(null,c__4319__auto___143730);
var G__143734 = (0);
seq__143691_143713 = G__143731;
chunk__143692_143714 = G__143732;
count__143693_143715 = G__143733;
i__143694_143716 = G__143734;
continue;
} else {
var x_143735 = cljs.core.first.call(null,seq__143691_143729__$1);
if((x_143735 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_143735)){
cljs.compiler.emit.call(null,x_143735);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_143735)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_143735);
} else {
if(goog.isFunction(x_143735)){
x_143735.call(null);
} else {
var s_143736 = cljs.core.print_str.call(null,x_143735);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__143691_143713,chunk__143692_143714,count__143693_143715,i__143694_143716,s_143736,x_143735,seq__143691_143729__$1,temp__5457__auto___143728){
return (function (p1__143686_SHARP_){
return (p1__143686_SHARP_ + cljs.core.count.call(null,s_143736));
});})(seq__143691_143713,chunk__143692_143714,count__143693_143715,i__143694_143716,s_143736,x_143735,seq__143691_143729__$1,temp__5457__auto___143728))
);
}

cljs.core.print.call(null,s_143736);

}
}
}
}


var G__143737 = cljs.core.next.call(null,seq__143691_143729__$1);
var G__143738 = null;
var G__143739 = (0);
var G__143740 = (0);
seq__143691_143713 = G__143737;
chunk__143692_143714 = G__143738;
count__143693_143715 = G__143739;
i__143694_143716 = G__143740;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq143687){
var G__143688 = cljs.core.first.call(null,seq143687);
var seq143687__$1 = cljs.core.next.call(null,seq143687);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__143688,seq143687__$1);
});


//# sourceMappingURL=guard.js.map
