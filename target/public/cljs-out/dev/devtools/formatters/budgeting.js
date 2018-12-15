// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41747__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41747__auto__["add"]).call(o__41747__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41747__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41747__auto__["delete"]).call(o__41747__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__41747__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41747__auto__["has"]).call(o__41747__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__45471 = data;
var target__41752__auto__ = G__45471;
if(cljs.core.truth_(target__41752__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45471)].join(''),"\n","target__41752__auto__"].join('')));
}

(target__41752__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__45471;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_45476 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_45476);
} else {
var seq__45472_45477 = cljs.core.seq.call(null,json_ml);
var chunk__45473_45478 = null;
var count__45474_45479 = (0);
var i__45475_45480 = (0);
while(true){
if((i__45475_45480 < count__45474_45479)){
var item_45481 = cljs.core._nth.call(null,chunk__45473_45478,i__45475_45480);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_45481,new_depth_budget_45476);


var G__45482 = seq__45472_45477;
var G__45483 = chunk__45473_45478;
var G__45484 = count__45474_45479;
var G__45485 = (i__45475_45480 + (1));
seq__45472_45477 = G__45482;
chunk__45473_45478 = G__45483;
count__45474_45479 = G__45484;
i__45475_45480 = G__45485;
continue;
} else {
var temp__5457__auto___45486 = cljs.core.seq.call(null,seq__45472_45477);
if(temp__5457__auto___45486){
var seq__45472_45487__$1 = temp__5457__auto___45486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45472_45487__$1)){
var c__18782__auto___45488 = cljs.core.chunk_first.call(null,seq__45472_45487__$1);
var G__45489 = cljs.core.chunk_rest.call(null,seq__45472_45487__$1);
var G__45490 = c__18782__auto___45488;
var G__45491 = cljs.core.count.call(null,c__18782__auto___45488);
var G__45492 = (0);
seq__45472_45477 = G__45489;
chunk__45473_45478 = G__45490;
count__45474_45479 = G__45491;
i__45475_45480 = G__45492;
continue;
} else {
var item_45493 = cljs.core.first.call(null,seq__45472_45487__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_45493,new_depth_budget_45476);


var G__45494 = cljs.core.next.call(null,seq__45472_45487__$1);
var G__45495 = null;
var G__45496 = (0);
var G__45497 = (0);
seq__45472_45477 = G__45494;
chunk__45473_45478 = G__45495;
count__45474_45479 = G__45496;
i__45475_45480 = G__45497;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__17825__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
