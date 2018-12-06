// Compiled by ClojureScript 1.10.238 {}
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
return (function (p1__37434_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__3922__auto__ = p1__37434_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x37435_37436 = cm;
x37435_37436.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x37435_37436.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x37435_37436,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x37435_37436,initial_state,prev_editor_state))
;

x37435_37436.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x37435_37436,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x37435_37436,initial_state,prev_editor_state))
;

x37435_37436.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x37435_37436,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x37435_37436,initial_state,prev_editor_state))
;

x37435_37436.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x37435_37436,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x37435_37436,initial_state,prev_editor_state))
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
var seq__37437 = cljs.core.seq.call(null,new_state);
var chunk__37438 = null;
var count__37439 = (0);
var i__37440 = (0);
while(true){
if((i__37440 < count__37439)){
var vec__37441 = cljs.core._nth.call(null,chunk__37438,i__37440);
var k = cljs.core.nth.call(null,vec__37441,(0),null);
var map__37444 = cljs.core.nth.call(null,vec__37441,(1),null);
var map__37444__$1 = ((((!((map__37444 == null)))?(((((map__37444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37444):map__37444);
var cm = cljs.core.get.call(null,map__37444__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37444__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37451 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37451){
cm.setValue(text);
} else {
}


var G__37452 = seq__37437;
var G__37453 = chunk__37438;
var G__37454 = count__37439;
var G__37455 = (i__37440 + (1));
seq__37437 = G__37452;
chunk__37438 = G__37453;
count__37439 = G__37454;
i__37440 = G__37455;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37437);
if(temp__5457__auto__){
var seq__37437__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37437__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37437__$1);
var G__37456 = cljs.core.chunk_rest.call(null,seq__37437__$1);
var G__37457 = c__4319__auto__;
var G__37458 = cljs.core.count.call(null,c__4319__auto__);
var G__37459 = (0);
seq__37437 = G__37456;
chunk__37438 = G__37457;
count__37439 = G__37458;
i__37440 = G__37459;
continue;
} else {
var vec__37446 = cljs.core.first.call(null,seq__37437__$1);
var k = cljs.core.nth.call(null,vec__37446,(0),null);
var map__37449 = cljs.core.nth.call(null,vec__37446,(1),null);
var map__37449__$1 = ((((!((map__37449 == null)))?(((((map__37449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37449):map__37449);
var cm = cljs.core.get.call(null,map__37449__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37449__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37460 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37460){
cm.setValue(text);
} else {
}


var G__37461 = cljs.core.next.call(null,seq__37437__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__37437 = G__37461;
chunk__37438 = G__37462;
count__37439 = G__37463;
i__37440 = G__37464;
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
var seq__37465 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__37466 = null;
var count__37467 = (0);
var i__37468 = (0);
while(true){
if((i__37468 < count__37467)){
var vec__37469 = cljs.core._nth.call(null,chunk__37466,i__37468);
var k = cljs.core.nth.call(null,vec__37469,(0),null);
var map__37472 = cljs.core.nth.call(null,vec__37469,(1),null);
var map__37472__$1 = ((((!((map__37472 == null)))?(((((map__37472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37472):map__37472);
var cm = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37479 = seq__37465;
var G__37480 = chunk__37466;
var G__37481 = count__37467;
var G__37482 = (i__37468 + (1));
seq__37465 = G__37479;
chunk__37466 = G__37480;
count__37467 = G__37481;
i__37468 = G__37482;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37465);
if(temp__5457__auto__){
var seq__37465__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37465__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37465__$1);
var G__37483 = cljs.core.chunk_rest.call(null,seq__37465__$1);
var G__37484 = c__4319__auto__;
var G__37485 = cljs.core.count.call(null,c__4319__auto__);
var G__37486 = (0);
seq__37465 = G__37483;
chunk__37466 = G__37484;
count__37467 = G__37485;
i__37468 = G__37486;
continue;
} else {
var vec__37474 = cljs.core.first.call(null,seq__37465__$1);
var k = cljs.core.nth.call(null,vec__37474,(0),null);
var map__37477 = cljs.core.nth.call(null,vec__37474,(1),null);
var map__37477__$1 = ((((!((map__37477 == null)))?(((((map__37477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37477):map__37477);
var cm = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37487 = cljs.core.next.call(null,seq__37465__$1);
var G__37488 = null;
var G__37489 = (0);
var G__37490 = (0);
seq__37465 = G__37487;
chunk__37466 = G__37488;
count__37467 = G__37489;
i__37468 = G__37490;
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
