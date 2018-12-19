// Compiled by ClojureScript 1.10.492 {}
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
var G__30124__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__30124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30125__i = 0, G__30125__a = new Array(arguments.length -  0);
while (G__30125__i < G__30125__a.length) {G__30125__a[G__30125__i] = arguments[G__30125__i + 0]; ++G__30125__i;}
  args = new cljs.core.IndexedSeq(G__30125__a,0,null);
} 
return G__30124__delegate.call(this,args);};
G__30124.cljs$lang$maxFixedArity = 0;
G__30124.cljs$lang$applyTo = (function (arglist__30126){
var args = cljs.core.seq(arglist__30126);
return G__30124__delegate(args);
});
G__30124.cljs$core$IFn$_invoke$arity$variadic = G__30124__delegate;
return G__30124;
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

var c__20620__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20620__auto__){
return (function (){
var f__20621__auto__ = (function (){var switch__20453__auto__ = ((function (c__20620__auto__){
return (function (state_30136){
var state_val_30137 = (state_30136[(1)]);
if((state_val_30137 === (1))){
var state_30136__$1 = state_30136;
var statearr_30138_30145 = state_30136__$1;
(statearr_30138_30145[(2)] = null);

(statearr_30138_30145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (2))){
var inst_30128 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30136__$1,(4),inst_30128);
} else {
if((state_val_30137 === (3))){
var inst_30134 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30136__$1,inst_30134);
} else {
if((state_val_30137 === (4))){
var inst_30130 = (state_30136[(2)]);
var inst_30131 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_30136__$1 = (function (){var statearr_30139 = state_30136;
(statearr_30139[(7)] = inst_30130);

(statearr_30139[(8)] = inst_30131);

return statearr_30139;
})();
var statearr_30140_30146 = state_30136__$1;
(statearr_30140_30146[(2)] = null);

(statearr_30140_30146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20620__auto__))
;
return ((function (switch__20453__auto__,c__20620__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____1 = (function (state_30136){
while(true){
var ret_value__20455__auto__ = (function (){try{while(true){
var result__20456__auto__ = switch__20453__auto__.call(null,state_30136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20456__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__20457__auto__ = e30142;
var statearr_30143_30147 = state_30136;
(statearr_30143_30147[(5)] = ex__20457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30148 = state_30136;
state_30136 = G__30148;
continue;
} else {
return ret_value__20455__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__ = function(state_30136){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____1.call(this,state_30136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__20454__auto__;
})()
;})(switch__20453__auto__,c__20620__auto__))
})();
var state__20622__auto__ = (function (){var statearr_30144 = f__20621__auto__.call(null);
(statearr_30144[(6)] = c__20620__auto__);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20622__auto__);
});})(c__20620__auto__))
);

return c__20620__auto__;
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
var args__4607__auto__ = [];
var len__4601__auto___30156 = arguments.length;
var i__4602__auto___30157 = (0);
while(true){
if((i__4602__auto___30157 < len__4601__auto___30156)){
args__4607__auto__.push((arguments[i__4602__auto___30157]));

var G__30158 = (i__4602__auto___30157 + (1));
i__4602__auto___30157 = G__30158;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__3991__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__3991__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__3991__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__30152_30159 = cljs.core.seq.call(null,xs);
var chunk__30153_30160 = null;
var count__30154_30161 = (0);
var i__30155_30162 = (0);
while(true){
if((i__30155_30162 < count__30154_30161)){
var x_30163 = cljs.core._nth.call(null,chunk__30153_30160,i__30155_30162);
if((x_30163 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30163)){
cljs.compiler.emit.call(null,x_30163);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30163)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_30163);
} else {
if(goog.isFunction(x_30163)){
x_30163.call(null);
} else {
var s_30164 = cljs.core.print_str.call(null,x_30163);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30152_30159,chunk__30153_30160,count__30154_30161,i__30155_30162,s_30164,x_30163){
return (function (p1__30149_SHARP_){
return (p1__30149_SHARP_ + cljs.core.count.call(null,s_30164));
});})(seq__30152_30159,chunk__30153_30160,count__30154_30161,i__30155_30162,s_30164,x_30163))
);
}

cljs.core.print.call(null,s_30164);

}
}
}
}


var G__30165 = seq__30152_30159;
var G__30166 = chunk__30153_30160;
var G__30167 = count__30154_30161;
var G__30168 = (i__30155_30162 + (1));
seq__30152_30159 = G__30165;
chunk__30153_30160 = G__30166;
count__30154_30161 = G__30167;
i__30155_30162 = G__30168;
continue;
} else {
var temp__5720__auto___30169 = cljs.core.seq.call(null,seq__30152_30159);
if(temp__5720__auto___30169){
var seq__30152_30170__$1 = temp__5720__auto___30169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30152_30170__$1)){
var c__4421__auto___30171 = cljs.core.chunk_first.call(null,seq__30152_30170__$1);
var G__30172 = cljs.core.chunk_rest.call(null,seq__30152_30170__$1);
var G__30173 = c__4421__auto___30171;
var G__30174 = cljs.core.count.call(null,c__4421__auto___30171);
var G__30175 = (0);
seq__30152_30159 = G__30172;
chunk__30153_30160 = G__30173;
count__30154_30161 = G__30174;
i__30155_30162 = G__30175;
continue;
} else {
var x_30176 = cljs.core.first.call(null,seq__30152_30170__$1);
if((x_30176 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_30176)){
cljs.compiler.emit.call(null,x_30176);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_30176)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_30176);
} else {
if(goog.isFunction(x_30176)){
x_30176.call(null);
} else {
var s_30177 = cljs.core.print_str.call(null,x_30176);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__30152_30159,chunk__30153_30160,count__30154_30161,i__30155_30162,s_30177,x_30176,seq__30152_30170__$1,temp__5720__auto___30169){
return (function (p1__30149_SHARP_){
return (p1__30149_SHARP_ + cljs.core.count.call(null,s_30177));
});})(seq__30152_30159,chunk__30153_30160,count__30154_30161,i__30155_30162,s_30177,x_30176,seq__30152_30170__$1,temp__5720__auto___30169))
);
}

cljs.core.print.call(null,s_30177);

}
}
}
}


var G__30178 = cljs.core.next.call(null,seq__30152_30170__$1);
var G__30179 = null;
var G__30180 = (0);
var G__30181 = (0);
seq__30152_30159 = G__30178;
chunk__30153_30160 = G__30179;
count__30154_30161 = G__30180;
i__30155_30162 = G__30181;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq30150){
var G__30151 = cljs.core.first.call(null,seq30150);
var seq30150__$1 = cljs.core.next.call(null,seq30150);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30151,seq30150__$1);
});


//# sourceMappingURL=guard.js.map
