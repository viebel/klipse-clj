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
var o__41740__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41740__auto__["add"]).call(o__41740__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41740__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41740__auto__["delete"]).call(o__41740__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__41740__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41740__auto__["has"]).call(o__41740__auto__,value);
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
var G__45464 = data;
var target__41745__auto__ = G__45464;
if(cljs.core.truth_(target__41745__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45464)].join(''),"\n","target__41745__auto__"].join('')));
}

(target__41745__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__45464;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_45469 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_45469);
} else {
var seq__45465_45470 = cljs.core.seq.call(null,json_ml);
var chunk__45466_45471 = null;
var count__45467_45472 = (0);
var i__45468_45473 = (0);
while(true){
if((i__45468_45473 < count__45467_45472)){
var item_45474 = cljs.core._nth.call(null,chunk__45466_45471,i__45468_45473);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_45474,new_depth_budget_45469);


var G__45475 = seq__45465_45470;
var G__45476 = chunk__45466_45471;
var G__45477 = count__45467_45472;
var G__45478 = (i__45468_45473 + (1));
seq__45465_45470 = G__45475;
chunk__45466_45471 = G__45476;
count__45467_45472 = G__45477;
i__45468_45473 = G__45478;
continue;
} else {
var temp__5720__auto___45479 = cljs.core.seq.call(null,seq__45465_45470);
if(temp__5720__auto___45479){
var seq__45465_45480__$1 = temp__5720__auto___45479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45465_45480__$1)){
var c__18773__auto___45481 = cljs.core.chunk_first.call(null,seq__45465_45480__$1);
var G__45482 = cljs.core.chunk_rest.call(null,seq__45465_45480__$1);
var G__45483 = c__18773__auto___45481;
var G__45484 = cljs.core.count.call(null,c__18773__auto___45481);
var G__45485 = (0);
seq__45465_45470 = G__45482;
chunk__45466_45471 = G__45483;
count__45467_45472 = G__45484;
i__45468_45473 = G__45485;
continue;
} else {
var item_45486 = cljs.core.first.call(null,seq__45465_45480__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_45486,new_depth_budget_45469);


var G__45487 = cljs.core.next.call(null,seq__45465_45480__$1);
var G__45488 = null;
var G__45489 = (0);
var G__45490 = (0);
seq__45465_45470 = G__45487;
chunk__45466_45471 = G__45488;
count__45467_45472 = G__45489;
i__45468_45473 = G__45490;
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
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__17816__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
