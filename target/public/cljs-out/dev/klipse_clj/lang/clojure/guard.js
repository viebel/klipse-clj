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
var G__58233__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__58233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58239__i = 0, G__58239__a = new Array(arguments.length -  0);
while (G__58239__i < G__58239__a.length) {G__58239__a[G__58239__i] = arguments[G__58239__i + 0]; ++G__58239__i;}
  args = new cljs.core.IndexedSeq(G__58239__a,0,null);
} 
return G__58233__delegate.call(this,args);};
G__58233.cljs$lang$maxFixedArity = 0;
G__58233.cljs$lang$applyTo = (function (arglist__58241){
var args = cljs.core.seq(arglist__58241);
return G__58233__delegate(args);
});
G__58233.cljs$core$IFn$_invoke$arity$variadic = G__58233__delegate;
return G__58233;
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
return (function (state_58252){
var state_val_58253 = (state_58252[(1)]);
if((state_val_58253 === (1))){
var state_58252__$1 = state_58252;
var statearr_58254_58265 = state_58252__$1;
(statearr_58254_58265[(2)] = null);

(statearr_58254_58265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58253 === (2))){
var inst_58244 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_58252__$1 = state_58252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58252__$1,(4),inst_58244);
} else {
if((state_val_58253 === (3))){
var inst_58250 = (state_58252[(2)]);
var state_58252__$1 = state_58252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58252__$1,inst_58250);
} else {
if((state_val_58253 === (4))){
var inst_58246 = (state_58252[(2)]);
var inst_58247 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_58252__$1 = (function (){var statearr_58259 = state_58252;
(statearr_58259[(7)] = inst_58247);

(statearr_58259[(8)] = inst_58246);

return statearr_58259;
})();
var statearr_58260_58266 = state_58252__$1;
(statearr_58260_58266[(2)] = null);

(statearr_58260_58266[(1)] = (2));


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
var statearr_58261 = [null,null,null,null,null,null,null,null,null];
(statearr_58261[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__);

(statearr_58261[(1)] = (1));

return statearr_58261;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1 = (function (state_58252){
while(true){
var ret_value__13858__auto__ = (function (){try{while(true){
var result__13859__auto__ = switch__13856__auto__.call(null,state_58252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13859__auto__;
}
break;
}
}catch (e58262){if((e58262 instanceof Object)){
var ex__13860__auto__ = e58262;
var statearr_58263_58267 = state_58252;
(statearr_58263_58267[(5)] = ex__13860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58268 = state_58252;
state_58252 = G__58268;
continue;
} else {
return ret_value__13858__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__ = function(state_58252){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1.call(this,state_58252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13857__auto__;
})()
;})(switch__13856__auto__,c__13946__auto__))
})();
var state__13948__auto__ = (function (){var statearr_58264 = f__13947__auto__.call(null);
(statearr_58264[(6)] = c__13946__auto__);

return statearr_58264;
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
var len__4499__auto___58282 = arguments.length;
var i__4500__auto___58283 = (0);
while(true){
if((i__4500__auto___58283 < len__4499__auto___58282)){
args__4502__auto__.push((arguments[i__4500__auto___58283]));

var G__58284 = (i__4500__auto___58283 + (1));
i__4500__auto___58283 = G__58284;
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

var seq__58274_58286 = cljs.core.seq.call(null,xs);
var chunk__58275_58287 = null;
var count__58276_58288 = (0);
var i__58277_58289 = (0);
while(true){
if((i__58277_58289 < count__58276_58288)){
var x_58292 = cljs.core._nth.call(null,chunk__58275_58287,i__58277_58289);
if((x_58292 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_58292)){
cljs.compiler.emit.call(null,x_58292);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_58292)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_58292);
} else {
if(goog.isFunction(x_58292)){
x_58292.call(null);
} else {
var s_58294 = cljs.core.print_str.call(null,x_58292);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__58274_58286,chunk__58275_58287,count__58276_58288,i__58277_58289,s_58294,x_58292){
return (function (p1__58269_SHARP_){
return (p1__58269_SHARP_ + cljs.core.count.call(null,s_58294));
});})(seq__58274_58286,chunk__58275_58287,count__58276_58288,i__58277_58289,s_58294,x_58292))
);
}

cljs.core.print.call(null,s_58294);

}
}
}
}


var G__58295 = seq__58274_58286;
var G__58296 = chunk__58275_58287;
var G__58297 = count__58276_58288;
var G__58298 = (i__58277_58289 + (1));
seq__58274_58286 = G__58295;
chunk__58275_58287 = G__58296;
count__58276_58288 = G__58297;
i__58277_58289 = G__58298;
continue;
} else {
var temp__5457__auto___58299 = cljs.core.seq.call(null,seq__58274_58286);
if(temp__5457__auto___58299){
var seq__58274_58300__$1 = temp__5457__auto___58299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58274_58300__$1)){
var c__4319__auto___58301 = cljs.core.chunk_first.call(null,seq__58274_58300__$1);
var G__58302 = cljs.core.chunk_rest.call(null,seq__58274_58300__$1);
var G__58303 = c__4319__auto___58301;
var G__58304 = cljs.core.count.call(null,c__4319__auto___58301);
var G__58305 = (0);
seq__58274_58286 = G__58302;
chunk__58275_58287 = G__58303;
count__58276_58288 = G__58304;
i__58277_58289 = G__58305;
continue;
} else {
var x_58306 = cljs.core.first.call(null,seq__58274_58300__$1);
if((x_58306 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_58306)){
cljs.compiler.emit.call(null,x_58306);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_58306)){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_58306);
} else {
if(goog.isFunction(x_58306)){
x_58306.call(null);
} else {
var s_58307 = cljs.core.print_str.call(null,x_58306);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__58274_58286,chunk__58275_58287,count__58276_58288,i__58277_58289,s_58307,x_58306,seq__58274_58300__$1,temp__5457__auto___58299){
return (function (p1__58269_SHARP_){
return (p1__58269_SHARP_ + cljs.core.count.call(null,s_58307));
});})(seq__58274_58286,chunk__58275_58287,count__58276_58288,i__58277_58289,s_58307,x_58306,seq__58274_58300__$1,temp__5457__auto___58299))
);
}

cljs.core.print.call(null,s_58307);

}
}
}
}


var G__58310 = cljs.core.next.call(null,seq__58274_58300__$1);
var G__58311 = null;
var G__58312 = (0);
var G__58313 = (0);
seq__58274_58286 = G__58310;
chunk__58275_58287 = G__58311;
count__58276_58288 = G__58312;
i__58277_58289 = G__58313;
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
klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq58270){
var G__58271 = cljs.core.first.call(null,seq58270);
var seq58270__$1 = cljs.core.next.call(null,seq58270);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58271,seq58270__$1);
});


//# sourceMappingURL=guard.js.map
