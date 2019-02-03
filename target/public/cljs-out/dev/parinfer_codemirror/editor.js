// Compiled by ClojureScript 1.10.516 {}
goog.provide('parinfer_codemirror.editor');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer_codemirror.state');
goog.require('parinfer_codemirror.editor_support');
parinfer_codemirror.editor.frame_updates = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Called before any change is applied to the editor.
 */
parinfer_codemirror.editor.before_change = (function parinfer_codemirror$editor$before_change(cm,change){
if(((cljs.core._EQ_.call(null,"setValue",change.origin)) && (cljs.core._EQ_.call(null,cm.getValue(),clojure.string.join.call(null,"\n",change.text))))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
parinfer_codemirror.editor.on_change = (function parinfer_codemirror$editor$on_change(cm,change){
if(cljs.core.not_EQ_.call(null,"setValue",change.origin)){
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm,new cljs.core.Keyword(null,"change","change",-1163046502),change);

parinfer_codemirror.editor_support.update_cursor_BANG_.call(null,cm,change);

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,true);
} else {
return null;
}
});
/**
 * Called after the cursor moves in the editor.
 */
parinfer_codemirror.editor.on_cursor_activity = (function parinfer_codemirror$editor$on_cursor_activity(cm){
if(cljs.core.truth_(parinfer_codemirror.editor_support.frame_updated_QMARK_.call(null,cm))){
} else {
parinfer_codemirror.editor_support.fix_text_BANG_.call(null,cm);
}

return parinfer_codemirror.editor_support.set_frame_updated_BANG_.call(null,cm,false);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
parinfer_codemirror.editor.parinferize_BANG_ = (function parinfer_codemirror$editor$parinferize_BANG_(cm,key_,parinfer_mode,initial_value){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
return null;
} else {
var initial_state = cljs.core.assoc.call(null,parinfer_codemirror.state.empty_editor_state,new cljs.core.Keyword(null,"mode","mode",654403691),parinfer_mode,new cljs.core.Keyword(null,"text","text",-1790561697),initial_value);
var prev_editor_state = cljs.core.atom.call(null,null);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),key_))){
} else {
cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc,key_,cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),((function (initial_state,prev_editor_state){
return (function (p1__19466_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = p1__19466_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x19467_19468 = cm;
x19467_19468.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x19467_19468.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x19467_19468,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x19467_19468,initial_state,prev_editor_state))
;

x19467_19468.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x19467_19468,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x19467_19468,initial_state,prev_editor_state))
;

x19467_19468.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x19467_19468,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x19467_19468,initial_state,prev_editor_state))
;

x19467_19468.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x19467_19468,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x19467_19468,initial_state,prev_editor_state))
;


cm.on("change",parinfer_codemirror.editor.on_change);

cm.on("beforeChange",parinfer_codemirror.editor.before_change);

cm.on("cursorActivity",parinfer_codemirror.editor.on_cursor_activity);

return cm;
}
});
/**
 * Called every time the state changes to sync the code editor.
 */
parinfer_codemirror.editor.on_state_change = (function parinfer_codemirror$editor$on_state_change(_,___$1,old_state,new_state){
var seq__19469 = cljs.core.seq.call(null,new_state);
var chunk__19470 = null;
var count__19471 = (0);
var i__19472 = (0);
while(true){
if((i__19472 < count__19471)){
var vec__19483 = cljs.core._nth.call(null,chunk__19470,i__19472);
var k = cljs.core.nth.call(null,vec__19483,(0),null);
var map__19486 = cljs.core.nth.call(null,vec__19483,(1),null);
var map__19486__$1 = (((((!((map__19486 == null))))?(((((map__19486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19486):map__19486);
var cm = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19493 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19493){
cm.setValue(text);
} else {
}


var G__19494 = seq__19469;
var G__19495 = chunk__19470;
var G__19496 = count__19471;
var G__19497 = (i__19472 + (1));
seq__19469 = G__19494;
chunk__19470 = G__19495;
count__19471 = G__19496;
i__19472 = G__19497;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19469);
if(temp__5720__auto__){
var seq__19469__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19469__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19469__$1);
var G__19498 = cljs.core.chunk_rest.call(null,seq__19469__$1);
var G__19499 = c__4550__auto__;
var G__19500 = cljs.core.count.call(null,c__4550__auto__);
var G__19501 = (0);
seq__19469 = G__19498;
chunk__19470 = G__19499;
count__19471 = G__19500;
i__19472 = G__19501;
continue;
} else {
var vec__19488 = cljs.core.first.call(null,seq__19469__$1);
var k = cljs.core.nth.call(null,vec__19488,(0),null);
var map__19491 = cljs.core.nth.call(null,vec__19488,(1),null);
var map__19491__$1 = (((((!((map__19491 == null))))?(((((map__19491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19491):map__19491);
var cm = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19491__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19502 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19502){
cm.setValue(text);
} else {
}


var G__19503 = cljs.core.next.call(null,seq__19469__$1);
var G__19504 = null;
var G__19505 = (0);
var G__19506 = (0);
seq__19469 = G__19503;
chunk__19470 = G__19504;
count__19471 = G__19505;
i__19472 = G__19506;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.force_editor_sync_BANG_ = (function parinfer_codemirror$editor$force_editor_sync_BANG_(){
var seq__19507 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__19508 = null;
var count__19509 = (0);
var i__19510 = (0);
while(true){
if((i__19510 < count__19509)){
var vec__19521 = cljs.core._nth.call(null,chunk__19508,i__19510);
var k = cljs.core.nth.call(null,vec__19521,(0),null);
var map__19524 = cljs.core.nth.call(null,vec__19521,(1),null);
var map__19524__$1 = (((((!((map__19524 == null))))?(((((map__19524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19524):map__19524);
var cm = cljs.core.get.call(null,map__19524__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19524__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19531 = seq__19507;
var G__19532 = chunk__19508;
var G__19533 = count__19509;
var G__19534 = (i__19510 + (1));
seq__19507 = G__19531;
chunk__19508 = G__19532;
count__19509 = G__19533;
i__19510 = G__19534;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19507);
if(temp__5720__auto__){
var seq__19507__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19507__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19507__$1);
var G__19535 = cljs.core.chunk_rest.call(null,seq__19507__$1);
var G__19536 = c__4550__auto__;
var G__19537 = cljs.core.count.call(null,c__4550__auto__);
var G__19538 = (0);
seq__19507 = G__19535;
chunk__19508 = G__19536;
count__19509 = G__19537;
i__19510 = G__19538;
continue;
} else {
var vec__19526 = cljs.core.first.call(null,seq__19507__$1);
var k = cljs.core.nth.call(null,vec__19526,(0),null);
var map__19529 = cljs.core.nth.call(null,vec__19526,(1),null);
var map__19529__$1 = (((((!((map__19529 == null))))?(((((map__19529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19529):map__19529);
var cm = cljs.core.get.call(null,map__19529__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19529__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19539 = cljs.core.next.call(null,seq__19507__$1);
var G__19540 = null;
var G__19541 = (0);
var G__19542 = (0);
seq__19507 = G__19539;
chunk__19508 = G__19540;
count__19509 = G__19541;
i__19510 = G__19542;
continue;
}
} else {
return null;
}
}
break;
}
});
parinfer_codemirror.editor.start_editor_sync_BANG_ = (function parinfer_codemirror$editor$start_editor_sync_BANG_(){
cljs.core.add_watch.call(null,parinfer_codemirror.state.state,new cljs.core.Keyword(null,"editor-updater","editor-updater",-323951652),parinfer_codemirror.editor.on_state_change);

return parinfer_codemirror.editor.force_editor_sync_BANG_.call(null);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
parinfer_codemirror.editor.parinferize_and_sync_BANG_ = (function parinfer_codemirror$editor$parinferize_and_sync_BANG_(cm,key_,parinfer_mode,initial_value){
parinfer_codemirror.editor.parinferize_BANG_.call(null,cm,key_,parinfer_mode,initial_value);

return parinfer_codemirror.editor.start_editor_sync_BANG_.call(null);
});
goog.exportSymbol('parinfer_codemirror.editor.parinferize_and_sync_BANG_', parinfer_codemirror.editor.parinferize_and_sync_BANG_);

//# sourceMappingURL=editor.js.map
