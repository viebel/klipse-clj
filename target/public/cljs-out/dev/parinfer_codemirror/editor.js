// Compiled by ClojureScript 1.10.492 {}
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
return (function (p1__26723_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4002__auto__ = p1__26723_SHARP_;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x26724_26725 = cm;
x26724_26725.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x26724_26725.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x26724_26725,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x26724_26725,initial_state,prev_editor_state))
;

x26724_26725.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x26724_26725,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x26724_26725,initial_state,prev_editor_state))
;

x26724_26725.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x26724_26725,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x26724_26725,initial_state,prev_editor_state))
;

x26724_26725.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x26724_26725,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x26724_26725,initial_state,prev_editor_state))
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
var seq__26726 = cljs.core.seq.call(null,new_state);
var chunk__26727 = null;
var count__26728 = (0);
var i__26729 = (0);
while(true){
if((i__26729 < count__26728)){
var vec__26740 = cljs.core._nth.call(null,chunk__26727,i__26729);
var k = cljs.core.nth.call(null,vec__26740,(0),null);
var map__26743 = cljs.core.nth.call(null,vec__26740,(1),null);
var map__26743__$1 = (((((!((map__26743 == null))))?(((((map__26743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26743):map__26743);
var cm = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__26750 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__26750){
cm.setValue(text);
} else {
}


var G__26751 = seq__26726;
var G__26752 = chunk__26727;
var G__26753 = count__26728;
var G__26754 = (i__26729 + (1));
seq__26726 = G__26751;
chunk__26727 = G__26752;
count__26728 = G__26753;
i__26729 = G__26754;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26726);
if(temp__5720__auto__){
var seq__26726__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26726__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__26726__$1);
var G__26755 = cljs.core.chunk_rest.call(null,seq__26726__$1);
var G__26756 = c__4421__auto__;
var G__26757 = cljs.core.count.call(null,c__4421__auto__);
var G__26758 = (0);
seq__26726 = G__26755;
chunk__26727 = G__26756;
count__26728 = G__26757;
i__26729 = G__26758;
continue;
} else {
var vec__26745 = cljs.core.first.call(null,seq__26726__$1);
var k = cljs.core.nth.call(null,vec__26745,(0),null);
var map__26748 = cljs.core.nth.call(null,vec__26745,(1),null);
var map__26748__$1 = (((((!((map__26748 == null))))?(((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var cm = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__26759 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__26759){
cm.setValue(text);
} else {
}


var G__26760 = cljs.core.next.call(null,seq__26726__$1);
var G__26761 = null;
var G__26762 = (0);
var G__26763 = (0);
seq__26726 = G__26760;
chunk__26727 = G__26761;
count__26728 = G__26762;
i__26729 = G__26763;
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
var seq__26764 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__26765 = null;
var count__26766 = (0);
var i__26767 = (0);
while(true){
if((i__26767 < count__26766)){
var vec__26778 = cljs.core._nth.call(null,chunk__26765,i__26767);
var k = cljs.core.nth.call(null,vec__26778,(0),null);
var map__26781 = cljs.core.nth.call(null,vec__26778,(1),null);
var map__26781__$1 = (((((!((map__26781 == null))))?(((((map__26781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781):map__26781);
var cm = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__26788 = seq__26764;
var G__26789 = chunk__26765;
var G__26790 = count__26766;
var G__26791 = (i__26767 + (1));
seq__26764 = G__26788;
chunk__26765 = G__26789;
count__26766 = G__26790;
i__26767 = G__26791;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26764);
if(temp__5720__auto__){
var seq__26764__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26764__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__26764__$1);
var G__26792 = cljs.core.chunk_rest.call(null,seq__26764__$1);
var G__26793 = c__4421__auto__;
var G__26794 = cljs.core.count.call(null,c__4421__auto__);
var G__26795 = (0);
seq__26764 = G__26792;
chunk__26765 = G__26793;
count__26766 = G__26794;
i__26767 = G__26795;
continue;
} else {
var vec__26783 = cljs.core.first.call(null,seq__26764__$1);
var k = cljs.core.nth.call(null,vec__26783,(0),null);
var map__26786 = cljs.core.nth.call(null,vec__26783,(1),null);
var map__26786__$1 = (((((!((map__26786 == null))))?(((((map__26786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26786):map__26786);
var cm = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__26796 = cljs.core.next.call(null,seq__26764__$1);
var G__26797 = null;
var G__26798 = (0);
var G__26799 = (0);
seq__26764 = G__26796;
chunk__26765 = G__26797;
count__26766 = G__26798;
i__26767 = G__26799;
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
