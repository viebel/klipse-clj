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
return (function (p1__25585_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__3922__auto__ = p1__25585_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x25586_25587 = cm;
x25586_25587.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x25586_25587.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x25586_25587,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x25586_25587,initial_state,prev_editor_state))
;

x25586_25587.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x25586_25587,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x25586_25587,initial_state,prev_editor_state))
;

x25586_25587.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x25586_25587,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x25586_25587,initial_state,prev_editor_state))
;

x25586_25587.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x25586_25587,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x25586_25587,initial_state,prev_editor_state))
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
var seq__25588 = cljs.core.seq.call(null,new_state);
var chunk__25589 = null;
var count__25590 = (0);
var i__25591 = (0);
while(true){
if((i__25591 < count__25590)){
var vec__25592 = cljs.core._nth.call(null,chunk__25589,i__25591);
var k = cljs.core.nth.call(null,vec__25592,(0),null);
var map__25595 = cljs.core.nth.call(null,vec__25592,(1),null);
var map__25595__$1 = ((((!((map__25595 == null)))?(((((map__25595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25595):map__25595);
var cm = cljs.core.get.call(null,map__25595__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25595__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__25602 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__25602){
cm.setValue(text);
} else {
}


var G__25603 = seq__25588;
var G__25604 = chunk__25589;
var G__25605 = count__25590;
var G__25606 = (i__25591 + (1));
seq__25588 = G__25603;
chunk__25589 = G__25604;
count__25590 = G__25605;
i__25591 = G__25606;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25588);
if(temp__5457__auto__){
var seq__25588__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25588__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25588__$1);
var G__25607 = cljs.core.chunk_rest.call(null,seq__25588__$1);
var G__25608 = c__4319__auto__;
var G__25609 = cljs.core.count.call(null,c__4319__auto__);
var G__25610 = (0);
seq__25588 = G__25607;
chunk__25589 = G__25608;
count__25590 = G__25609;
i__25591 = G__25610;
continue;
} else {
var vec__25597 = cljs.core.first.call(null,seq__25588__$1);
var k = cljs.core.nth.call(null,vec__25597,(0),null);
var map__25600 = cljs.core.nth.call(null,vec__25597,(1),null);
var map__25600__$1 = ((((!((map__25600 == null)))?(((((map__25600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25600):map__25600);
var cm = cljs.core.get.call(null,map__25600__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25600__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__25611 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__25611){
cm.setValue(text);
} else {
}


var G__25612 = cljs.core.next.call(null,seq__25588__$1);
var G__25613 = null;
var G__25614 = (0);
var G__25615 = (0);
seq__25588 = G__25612;
chunk__25589 = G__25613;
count__25590 = G__25614;
i__25591 = G__25615;
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
var seq__25616 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__25617 = null;
var count__25618 = (0);
var i__25619 = (0);
while(true){
if((i__25619 < count__25618)){
var vec__25620 = cljs.core._nth.call(null,chunk__25617,i__25619);
var k = cljs.core.nth.call(null,vec__25620,(0),null);
var map__25623 = cljs.core.nth.call(null,vec__25620,(1),null);
var map__25623__$1 = ((((!((map__25623 == null)))?(((((map__25623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25623):map__25623);
var cm = cljs.core.get.call(null,map__25623__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25623__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__25630 = seq__25616;
var G__25631 = chunk__25617;
var G__25632 = count__25618;
var G__25633 = (i__25619 + (1));
seq__25616 = G__25630;
chunk__25617 = G__25631;
count__25618 = G__25632;
i__25619 = G__25633;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25616);
if(temp__5457__auto__){
var seq__25616__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25616__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25616__$1);
var G__25634 = cljs.core.chunk_rest.call(null,seq__25616__$1);
var G__25635 = c__4319__auto__;
var G__25636 = cljs.core.count.call(null,c__4319__auto__);
var G__25637 = (0);
seq__25616 = G__25634;
chunk__25617 = G__25635;
count__25618 = G__25636;
i__25619 = G__25637;
continue;
} else {
var vec__25625 = cljs.core.first.call(null,seq__25616__$1);
var k = cljs.core.nth.call(null,vec__25625,(0),null);
var map__25628 = cljs.core.nth.call(null,vec__25625,(1),null);
var map__25628__$1 = ((((!((map__25628 == null)))?(((((map__25628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25628):map__25628);
var cm = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__25638 = cljs.core.next.call(null,seq__25616__$1);
var G__25639 = null;
var G__25640 = (0);
var G__25641 = (0);
seq__25616 = G__25638;
chunk__25617 = G__25639;
count__25618 = G__25640;
i__25619 = G__25641;
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
