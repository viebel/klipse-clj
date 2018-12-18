// Compiled by ClojureScript 1.10.439 {}
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
var o__31927__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__31927__auto__["add"]).call(o__31927__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__31927__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__31927__auto__["delete"]).call(o__31927__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__31927__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__31927__auto__["has"]).call(o__31927__auto__,value);
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
var G__36392 = data;
var target__31932__auto__ = G__36392;
if(cljs.core.truth_(target__31932__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36392)].join('')),"\n","target__31932__auto__"].join('')));
}

(target__31932__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__36392;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_36397 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_36397);
} else {
var seq__36393_36398 = cljs.core.seq.call(null,json_ml);
var chunk__36394_36399 = null;
var count__36395_36400 = (0);
var i__36396_36401 = (0);
while(true){
if((i__36396_36401 < count__36395_36400)){
var item_36402 = cljs.core._nth.call(null,chunk__36394_36399,i__36396_36401);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_36402,new_depth_budget_36397);


var G__36403 = seq__36393_36398;
var G__36404 = chunk__36394_36399;
var G__36405 = count__36395_36400;
var G__36406 = (i__36396_36401 + (1));
seq__36393_36398 = G__36403;
chunk__36394_36399 = G__36404;
count__36395_36400 = G__36405;
i__36396_36401 = G__36406;
continue;
} else {
var temp__5720__auto___36407 = cljs.core.seq.call(null,seq__36393_36398);
if(temp__5720__auto___36407){
var seq__36393_36408__$1 = temp__5720__auto___36407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36393_36408__$1)){
var c__4461__auto___36409 = cljs.core.chunk_first.call(null,seq__36393_36408__$1);
var G__36410 = cljs.core.chunk_rest.call(null,seq__36393_36408__$1);
var G__36411 = c__4461__auto___36409;
var G__36412 = cljs.core.count.call(null,c__4461__auto___36409);
var G__36413 = (0);
seq__36393_36398 = G__36410;
chunk__36394_36399 = G__36411;
count__36395_36400 = G__36412;
i__36396_36401 = G__36413;
continue;
} else {
var item_36414 = cljs.core.first.call(null,seq__36393_36408__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_36414,new_depth_budget_36397);


var G__36415 = cljs.core.next.call(null,seq__36393_36408__$1);
var G__36416 = null;
var G__36417 = (0);
var G__36418 = (0);
seq__36393_36398 = G__36415;
chunk__36394_36399 = G__36416;
count__36395_36400 = G__36417;
i__36396_36401 = G__36418;
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
var remaining_depth_budget = (function (){var or__4047__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
