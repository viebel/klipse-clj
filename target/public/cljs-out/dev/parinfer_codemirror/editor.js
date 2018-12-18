// Compiled by ClojureScript 0.0.668480191 {}
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
return (function (p1__37646_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__17816__auto__ = p1__37646_SHARP_;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x37647_37648 = cm;
x37647_37648.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x37647_37648.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x37647_37648,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x37647_37648,initial_state,prev_editor_state))
;

x37647_37648.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x37647_37648,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x37647_37648,initial_state,prev_editor_state))
;

x37647_37648.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x37647_37648,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x37647_37648,initial_state,prev_editor_state))
;

x37647_37648.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x37647_37648,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x37647_37648,initial_state,prev_editor_state))
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
var seq__37649 = cljs.core.seq.call(null,new_state);
var chunk__37650 = null;
var count__37651 = (0);
var i__37652 = (0);
while(true){
if((i__37652 < count__37651)){
var vec__37663 = cljs.core._nth.call(null,chunk__37650,i__37652);
var k = cljs.core.nth.call(null,vec__37663,(0),null);
var map__37666 = cljs.core.nth.call(null,vec__37663,(1),null);
var map__37666__$1 = (((((!((map__37666 == null))))?(((((map__37666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37666):map__37666);
var cm = cljs.core.get.call(null,map__37666__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37666__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37673 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37673){
cm.setValue(text);
} else {
}


var G__37674 = seq__37649;
var G__37675 = chunk__37650;
var G__37676 = count__37651;
var G__37677 = (i__37652 + (1));
seq__37649 = G__37674;
chunk__37650 = G__37675;
count__37651 = G__37676;
i__37652 = G__37677;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37649);
if(temp__5720__auto__){
var seq__37649__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37649__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__37649__$1);
var G__37678 = cljs.core.chunk_rest.call(null,seq__37649__$1);
var G__37679 = c__18773__auto__;
var G__37680 = cljs.core.count.call(null,c__18773__auto__);
var G__37681 = (0);
seq__37649 = G__37678;
chunk__37650 = G__37679;
count__37651 = G__37680;
i__37652 = G__37681;
continue;
} else {
var vec__37668 = cljs.core.first.call(null,seq__37649__$1);
var k = cljs.core.nth.call(null,vec__37668,(0),null);
var map__37671 = cljs.core.nth.call(null,vec__37668,(1),null);
var map__37671__$1 = (((((!((map__37671 == null))))?(((((map__37671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37671):map__37671);
var cm = cljs.core.get.call(null,map__37671__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37671__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37682 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37682){
cm.setValue(text);
} else {
}


var G__37683 = cljs.core.next.call(null,seq__37649__$1);
var G__37684 = null;
var G__37685 = (0);
var G__37686 = (0);
seq__37649 = G__37683;
chunk__37650 = G__37684;
count__37651 = G__37685;
i__37652 = G__37686;
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
var seq__37687 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__37688 = null;
var count__37689 = (0);
var i__37690 = (0);
while(true){
if((i__37690 < count__37689)){
var vec__37701 = cljs.core._nth.call(null,chunk__37688,i__37690);
var k = cljs.core.nth.call(null,vec__37701,(0),null);
var map__37704 = cljs.core.nth.call(null,vec__37701,(1),null);
var map__37704__$1 = (((((!((map__37704 == null))))?(((((map__37704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37704):map__37704);
var cm = cljs.core.get.call(null,map__37704__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37704__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37711 = seq__37687;
var G__37712 = chunk__37688;
var G__37713 = count__37689;
var G__37714 = (i__37690 + (1));
seq__37687 = G__37711;
chunk__37688 = G__37712;
count__37689 = G__37713;
i__37690 = G__37714;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37687);
if(temp__5720__auto__){
var seq__37687__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37687__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__37687__$1);
var G__37715 = cljs.core.chunk_rest.call(null,seq__37687__$1);
var G__37716 = c__18773__auto__;
var G__37717 = cljs.core.count.call(null,c__18773__auto__);
var G__37718 = (0);
seq__37687 = G__37715;
chunk__37688 = G__37716;
count__37689 = G__37717;
i__37690 = G__37718;
continue;
} else {
var vec__37706 = cljs.core.first.call(null,seq__37687__$1);
var k = cljs.core.nth.call(null,vec__37706,(0),null);
var map__37709 = cljs.core.nth.call(null,vec__37706,(1),null);
var map__37709__$1 = (((((!((map__37709 == null))))?(((((map__37709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37709):map__37709);
var cm = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37709__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37719 = cljs.core.next.call(null,seq__37687__$1);
var G__37720 = null;
var G__37721 = (0);
var G__37722 = (0);
seq__37687 = G__37719;
chunk__37688 = G__37720;
count__37689 = G__37721;
i__37690 = G__37722;
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
