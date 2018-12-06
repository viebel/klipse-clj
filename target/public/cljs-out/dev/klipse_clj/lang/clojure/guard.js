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
var G__21241__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__21241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21242__i = 0, G__21242__a = new Array(arguments.length -  0);
while (G__21242__i < G__21242__a.length) {G__21242__a[G__21242__i] = arguments[G__21242__i + 0]; ++G__21242__i;}
  args = new cljs.core.IndexedSeq(G__21242__a,0,null);
} 
return G__21241__delegate.call(this,args);};
G__21241.cljs$lang$maxFixedArity = 0;
G__21241.cljs$lang$applyTo = (function (arglist__21243){
var args = cljs.core.seq(arglist__21243);
return G__21241__delegate(args);
});
G__21241.cljs$core$IFn$_invoke$arity$variadic = G__21241__delegate;
return G__21241;
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

var c__17125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17125__auto__){
return (function (){
var f__17126__auto__ = (function (){var switch__16968__auto__ = ((function (c__17125__auto__){
return (function (state_21253){
var state_val_21254 = (state_21253[(1)]);
if((state_val_21254 === (1))){
var state_21253__$1 = state_21253;
var statearr_21255_21262 = state_21253__$1;
(statearr_21255_21262[(2)] = null);

(statearr_21255_21262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (2))){
var inst_21245 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,(4),inst_21245);
} else {
if((state_val_21254 === (3))){
var inst_21251 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21253__$1,inst_21251);
} else {
if((state_val_21254 === (4))){
var inst_21247 = (state_21253[(2)]);
var inst_21248 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_21253__$1 = (function (){var statearr_21256 = state_21253;
(statearr_21256[(7)] = inst_21248);

(statearr_21256[(8)] = inst_21247);

return statearr_21256;
})();
var statearr_21257_21263 = state_21253__$1;
(statearr_21257_21263[(2)] = null);

(statearr_21257_21263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17125__auto__))
;
return ((function (switch__16968__auto__,c__17125__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____0 = (function (){
var statearr_21258 = [null,null,null,null,null,null,null,null,null];
(statearr_21258[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__);

(statearr_21258[(1)] = (1));

return statearr_21258;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____1 = (function (state_21253){
while(true){
var ret_value__16970__auto__ = (function (){try{while(true){
var result__16971__auto__ = switch__16968__auto__.call(null,state_21253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16971__auto__;
}
break;
}
}catch (e21259){if((e21259 instanceof Object)){
var ex__16972__auto__ = e21259;
var statearr_21260_21264 = state_21253;
(statearr_21260_21264[(5)] = ex__16972__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21265 = state_21253;
state_21253 = G__21265;
continue;
} else {
return ret_value__16970__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__ = function(state_21253){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____1.call(this,state_21253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__16969__auto__;
})()
;})(switch__16968__auto__,c__17125__auto__))
})();
var state__17127__auto__ = (function (){var statearr_21261 = f__17126__auto__.call(null);
(statearr_21261[(6)] = c__17125__auto__);

return statearr_21261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17127__auto__);
});})(c__17125__auto__))
);

return c__17125__auto__;
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
var len__4499__auto___21273 = arguments.length;
var i__4500__auto___21274 = (0);
while(true){
if((i__4500__auto___21274 < len__4499__auto___21273)){
args__4502__auto__.push((arguments[i__4500__auto___21274]));

var G__21275 = (i__4500__auto___21274 + (1));
i__4500__auto___21274 = G__21275;
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

var seq__21269_21276 = cljs.core.seq.call(null,xs);
var chunk__21270_21277 = null;
var count__21271_21278 = (0);
var i__21272_21279 = (0);
while(true){
if((i__21272_21279 < count__21271_21278)){
var x_21280 = cljs.core._nth.call(null,chunk__21270_21277,i__21272_21279);
if((x_21280 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_21280)){
cljs.compiler.emit.call(null,x_21280);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_21280)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_21280);
} else {
if(goog.isFunction(x_21280)){
x_21280.call(null);
} else {
var s_21281 = cljs.core.print_str.call(null,x_21280);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21269_21276,chunk__21270_21277,count__21271_21278,i__21272_21279,s_21281,x_21280){
return (function (p1__21266_SHARP_){
return (p1__21266_SHARP_ + cljs.core.count.call(null,s_21281));
});})(seq__21269_21276,chunk__21270_21277,count__21271_21278,i__21272_21279,s_21281,x_21280))
);
}

cljs.core.print.call(null,s_21281);

}
}
}
}


var G__21282 = seq__21269_21276;
var G__21283 = chunk__21270_21277;
var G__21284 = count__21271_21278;
var G__21285 = (i__21272_21279 + (1));
seq__21269_21276 = G__21282;
chunk__21270_21277 = G__21283;
count__21271_21278 = G__21284;
i__21272_21279 = G__21285;
continue;
} else {
var temp__5457__auto___21286 = cljs.core.seq.call(null,seq__21269_21276);
if(temp__5457__auto___21286){
var seq__21269_21287__$1 = temp__5457__auto___21286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21269_21287__$1)){
var c__4319__auto___21288 = cljs.core.chunk_first.call(null,seq__21269_21287__$1);
var G__21289 = cljs.core.chunk_rest.call(null,seq__21269_21287__$1);
var G__21290 = c__4319__auto___21288;
var G__21291 = cljs.core.count.call(null,c__4319__auto___21288);
var G__21292 = (0);
seq__21269_21276 = G__21289;
chunk__21270_21277 = G__21290;
count__21271_21278 = G__21291;
i__21272_21279 = G__21292;
continue;
} else {
var x_21293 = cljs.core.first.call(null,seq__21269_21287__$1);
if((x_21293 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_21293)){
cljs.compiler.emit.call(null,x_21293);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_21293)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_21293);
} else {
if(goog.isFunction(x_21293)){
x_21293.call(null);
} else {
var s_21294 = cljs.core.print_str.call(null,x_21293);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__21269_21276,chunk__21270_21277,count__21271_21278,i__21272_21279,s_21294,x_21293,seq__21269_21287__$1,temp__5457__auto___21286){
return (function (p1__21266_SHARP_){
return (p1__21266_SHARP_ + cljs.core.count.call(null,s_21294));
});})(seq__21269_21276,chunk__21270_21277,count__21271_21278,i__21272_21279,s_21294,x_21293,seq__21269_21287__$1,temp__5457__auto___21286))
);
}

cljs.core.print.call(null,s_21294);

}
}
}
}


var G__21295 = cljs.core.next.call(null,seq__21269_21287__$1);
var G__21296 = null;
var G__21297 = (0);
var G__21298 = (0);
seq__21269_21276 = G__21295;
chunk__21270_21277 = G__21296;
count__21271_21278 = G__21297;
i__21272_21279 = G__21298;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq21267){
var G__21268 = cljs.core.first.call(null,seq21267);
var seq21267__$1 = cljs.core.next.call(null,seq21267);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21268,seq21267__$1);
});


//# sourceMappingURL=guard.js.map
