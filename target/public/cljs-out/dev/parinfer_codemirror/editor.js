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
return (function (p1__132956_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__3922__auto__ = p1__132956_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x132960_132979 = cm;
x132960_132979.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x132960_132979.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x132960_132979,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x132960_132979,initial_state,prev_editor_state))
;

x132960_132979.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x132960_132979,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x132960_132979,initial_state,prev_editor_state))
;

x132960_132979.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x132960_132979,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x132960_132979,initial_state,prev_editor_state))
;

x132960_132979.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x132960_132979,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x132960_132979,initial_state,prev_editor_state))
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
var seq__132991 = cljs.core.seq.call(null,new_state);
var chunk__132992 = null;
var count__132993 = (0);
var i__132994 = (0);
while(true){
if((i__132994 < count__132993)){
var vec__132995 = cljs.core._nth.call(null,chunk__132992,i__132994);
var k = cljs.core.nth.call(null,vec__132995,(0),null);
var map__132998 = cljs.core.nth.call(null,vec__132995,(1),null);
var map__132998__$1 = ((((!((map__132998 == null)))?(((((map__132998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__132998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132998):map__132998);
var cm = cljs.core.get.call(null,map__132998__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__132998__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__133011 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__133011){
cm.setValue(text);
} else {
}


var G__133013 = seq__132991;
var G__133014 = chunk__132992;
var G__133015 = count__132993;
var G__133016 = (i__132994 + (1));
seq__132991 = G__133013;
chunk__132992 = G__133014;
count__132993 = G__133015;
i__132994 = G__133016;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__132991);
if(temp__5457__auto__){
var seq__132991__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132991__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__132991__$1);
var G__133018 = cljs.core.chunk_rest.call(null,seq__132991__$1);
var G__133019 = c__4319__auto__;
var G__133020 = cljs.core.count.call(null,c__4319__auto__);
var G__133021 = (0);
seq__132991 = G__133018;
chunk__132992 = G__133019;
count__132993 = G__133020;
i__132994 = G__133021;
continue;
} else {
var vec__133000 = cljs.core.first.call(null,seq__132991__$1);
var k = cljs.core.nth.call(null,vec__133000,(0),null);
var map__133003 = cljs.core.nth.call(null,vec__133000,(1),null);
var map__133003__$1 = ((((!((map__133003 == null)))?(((((map__133003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133003):map__133003);
var cm = cljs.core.get.call(null,map__133003__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__133003__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__133026 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__133026){
cm.setValue(text);
} else {
}


var G__133027 = cljs.core.next.call(null,seq__132991__$1);
var G__133028 = null;
var G__133029 = (0);
var G__133030 = (0);
seq__132991 = G__133027;
chunk__132992 = G__133028;
count__132993 = G__133029;
i__132994 = G__133030;
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
var seq__133031 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__133032 = null;
var count__133033 = (0);
var i__133034 = (0);
while(true){
if((i__133034 < count__133033)){
var vec__133035 = cljs.core._nth.call(null,chunk__133032,i__133034);
var k = cljs.core.nth.call(null,vec__133035,(0),null);
var map__133038 = cljs.core.nth.call(null,vec__133035,(1),null);
var map__133038__$1 = ((((!((map__133038 == null)))?(((((map__133038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133038):map__133038);
var cm = cljs.core.get.call(null,map__133038__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__133038__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__133061 = seq__133031;
var G__133062 = chunk__133032;
var G__133063 = count__133033;
var G__133064 = (i__133034 + (1));
seq__133031 = G__133061;
chunk__133032 = G__133062;
count__133033 = G__133063;
i__133034 = G__133064;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__133031);
if(temp__5457__auto__){
var seq__133031__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__133031__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__133031__$1);
var G__133065 = cljs.core.chunk_rest.call(null,seq__133031__$1);
var G__133066 = c__4319__auto__;
var G__133067 = cljs.core.count.call(null,c__4319__auto__);
var G__133068 = (0);
seq__133031 = G__133065;
chunk__133032 = G__133066;
count__133033 = G__133067;
i__133034 = G__133068;
continue;
} else {
var vec__133042 = cljs.core.first.call(null,seq__133031__$1);
var k = cljs.core.nth.call(null,vec__133042,(0),null);
var map__133045 = cljs.core.nth.call(null,vec__133042,(1),null);
var map__133045__$1 = ((((!((map__133045 == null)))?(((((map__133045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133045):map__133045);
var cm = cljs.core.get.call(null,map__133045__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__133045__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__133072 = cljs.core.next.call(null,seq__133031__$1);
var G__133073 = null;
var G__133074 = (0);
var G__133075 = (0);
seq__133031 = G__133072;
chunk__133032 = G__133073;
count__133033 = G__133074;
i__133034 = G__133075;
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
