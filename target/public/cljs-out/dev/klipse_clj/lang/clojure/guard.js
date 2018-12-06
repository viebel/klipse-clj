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
var G__39115__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__39115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39116__i = 0, G__39116__a = new Array(arguments.length -  0);
while (G__39116__i < G__39116__a.length) {G__39116__a[G__39116__i] = arguments[G__39116__i + 0]; ++G__39116__i;}
  args = new cljs.core.IndexedSeq(G__39116__a,0,null);
} 
return G__39115__delegate.call(this,args);};
G__39115.cljs$lang$maxFixedArity = 0;
G__39115.cljs$lang$applyTo = (function (arglist__39117){
var args = cljs.core.seq(arglist__39117);
return G__39115__delegate(args);
});
G__39115.cljs$core$IFn$_invoke$arity$variadic = G__39115__delegate;
return G__39115;
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

var c__13946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13946__auto__){
return (function (){
var f__13947__auto__ = (function (){var switch__13856__auto__ = ((function (c__13946__auto__){
return (function (state_39127){
var state_val_39128 = (state_39127[(1)]);
if((state_val_39128 === (1))){
var state_39127__$1 = state_39127;
var statearr_39129_39136 = state_39127__$1;
(statearr_39129_39136[(2)] = null);

(statearr_39129_39136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (2))){
var inst_39119 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39127__$1,(4),inst_39119);
} else {
if((state_val_39128 === (3))){
var inst_39125 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39127__$1,inst_39125);
} else {
if((state_val_39128 === (4))){
var inst_39121 = (state_39127[(2)]);
var inst_39122 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_39127__$1 = (function (){var statearr_39130 = state_39127;
(statearr_39130[(7)] = inst_39121);

(statearr_39130[(8)] = inst_39122);

return statearr_39130;
})();
var statearr_39131_39137 = state_39127__$1;
(statearr_39131_39137[(2)] = null);

(statearr_39131_39137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__13946__auto__))
;
return ((function (switch__13856__auto__,c__13946__auto__){
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____0 = (function (){
var statearr_39132 = [null,null,null,null,null,null,null,null,null];
(statearr_39132[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__);

(statearr_39132[(1)] = (1));

return statearr_39132;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1 = (function (state_39127){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_39127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e39133){if((e39133 instanceof Object)){
var ex__13860__auto__ = e39133;
var statearr_39134_39138 = state_39127;
(statearr_39134_39138[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39139 = state_39127;
state_39127 = G__39139;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__ = function(state_39127){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1.call(this,state_39127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_39135 = f__13947__auto__.call(null);
(statearr_39135[(6)] = c__13946__auto__);

return statearr_39135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13948__auto__);
});})(c__13946__auto__))
);

return c__13946__auto__;
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
var len__4499__auto___39147 = arguments.length;
var i__4500__auto___39148 = (0);
while(true){
if((i__4500__auto___39148 < len__4499__auto___39147)){
args__4502__auto__.push((arguments[i__4500__auto___39148]));

var G__39149 = (i__4500__auto___39148 + (1));
i__4500__auto___39148 = G__39149;
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

var seq__39143_39150 = cljs.core.seq.call(null,xs);
var chunk__39144_39151 = null;
var count__39145_39152 = (0);
var i__39146_39153 = (0);
while(true){
if((i__39146_39153 < count__39145_39152)){
var x_39154 = cljs.core._nth.call(null,chunk__39144_39151,i__39146_39153);
if((x_39154 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_39154)){
cljs.compiler.emit.call(null,x_39154);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_39154)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_39154);
} else {
if(goog.isFunction(x_39154)){
x_39154.call(null);
} else {
var s_39155 = cljs.core.print_str.call(null,x_39154);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__39143_39150,chunk__39144_39151,count__39145_39152,i__39146_39153,s_39155,x_39154){
return (function (p1__39140_SHARP_){
return (p1__39140_SHARP_ + cljs.core.count.call(null,s_39155));
});})(seq__39143_39150,chunk__39144_39151,count__39145_39152,i__39146_39153,s_39155,x_39154))
);
}

cljs.core.print.call(null,s_39155);

}
}
}
}


var G__39156 = seq__39143_39150;
var G__39157 = chunk__39144_39151;
var G__39158 = count__39145_39152;
var G__39159 = (i__39146_39153 + (1));
seq__39143_39150 = G__39156;
chunk__39144_39151 = G__39157;
count__39145_39152 = G__39158;
i__39146_39153 = G__39159;
continue;
} else {
var temp__5457__auto___39160 = cljs.core.seq.call(null,seq__39143_39150);
if(temp__5457__auto___39160){
var seq__39143_39161__$1 = temp__5457__auto___39160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39143_39161__$1)){
var c__4319__auto___39162 = cljs.core.chunk_first.call(null,seq__39143_39161__$1);
var G__39163 = cljs.core.chunk_rest.call(null,seq__39143_39161__$1);
var G__39164 = c__4319__auto___39162;
var G__39165 = cljs.core.count.call(null,c__4319__auto___39162);
var G__39166 = (0);
seq__39143_39150 = G__39163;
chunk__39144_39151 = G__39164;
count__39145_39152 = G__39165;
i__39146_39153 = G__39166;
continue;
} else {
var x_39167 = cljs.core.first.call(null,seq__39143_39161__$1);
if((x_39167 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_39167)){
cljs.compiler.emit.call(null,x_39167);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_39167)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_39167);
} else {
if(goog.isFunction(x_39167)){
x_39167.call(null);
} else {
var s_39168 = cljs.core.print_str.call(null,x_39167);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__39143_39150,chunk__39144_39151,count__39145_39152,i__39146_39153,s_39168,x_39167,seq__39143_39161__$1,temp__5457__auto___39160){
return (function (p1__39140_SHARP_){
return (p1__39140_SHARP_ + cljs.core.count.call(null,s_39168));
});})(seq__39143_39150,chunk__39144_39151,count__39145_39152,i__39146_39153,s_39168,x_39167,seq__39143_39161__$1,temp__5457__auto___39160))
);
}

cljs.core.print.call(null,s_39168);

}
}
}
}


var G__39169 = cljs.core.next.call(null,seq__39143_39161__$1);
var G__39170 = null;
var G__39171 = (0);
var G__39172 = (0);
seq__39143_39150 = G__39169;
chunk__39144_39151 = G__39170;
count__39145_39152 = G__39171;
i__39146_39153 = G__39172;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq39141){
var G__39142 = cljs.core.first.call(null,seq39141);
var seq39141__$1 = cljs.core.next.call(null,seq39141);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39142,seq39141__$1);
});


//# sourceMappingURL=guard.js.map
