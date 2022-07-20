// Compiled by ClojureScript 1.10.520 {}
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
return (function (p1__19031_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = p1__19031_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x19032_19033 = cm;
x19032_19033.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x19032_19033.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x19032_19033,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x19032_19033,initial_state,prev_editor_state))
;

x19032_19033.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x19032_19033,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x19032_19033,initial_state,prev_editor_state))
;

x19032_19033.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x19032_19033,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x19032_19033,initial_state,prev_editor_state))
;

x19032_19033.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x19032_19033,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x19032_19033,initial_state,prev_editor_state))
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
var seq__19034 = cljs.core.seq.call(null,new_state);
var chunk__19035 = null;
var count__19036 = (0);
var i__19037 = (0);
while(true){
if((i__19037 < count__19036)){
var vec__19048 = cljs.core._nth.call(null,chunk__19035,i__19037);
var k = cljs.core.nth.call(null,vec__19048,(0),null);
var map__19051 = cljs.core.nth.call(null,vec__19048,(1),null);
var map__19051__$1 = (((((!((map__19051 == null))))?(((((map__19051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19051):map__19051);
var cm = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19051__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19058 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19058){
cm.setValue(text);
} else {
}


var G__19059 = seq__19034;
var G__19060 = chunk__19035;
var G__19061 = count__19036;
var G__19062 = (i__19037 + (1));
seq__19034 = G__19059;
chunk__19035 = G__19060;
count__19036 = G__19061;
i__19037 = G__19062;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19034);
if(temp__5720__auto__){
var seq__19034__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19034__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19034__$1);
var G__19063 = cljs.core.chunk_rest.call(null,seq__19034__$1);
var G__19064 = c__4550__auto__;
var G__19065 = cljs.core.count.call(null,c__4550__auto__);
var G__19066 = (0);
seq__19034 = G__19063;
chunk__19035 = G__19064;
count__19036 = G__19065;
i__19037 = G__19066;
continue;
} else {
var vec__19053 = cljs.core.first.call(null,seq__19034__$1);
var k = cljs.core.nth.call(null,vec__19053,(0),null);
var map__19056 = cljs.core.nth.call(null,vec__19053,(1),null);
var map__19056__$1 = (((((!((map__19056 == null))))?(((((map__19056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19056):map__19056);
var cm = cljs.core.get.call(null,map__19056__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19056__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19067 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19067){
cm.setValue(text);
} else {
}


var G__19068 = cljs.core.next.call(null,seq__19034__$1);
var G__19069 = null;
var G__19070 = (0);
var G__19071 = (0);
seq__19034 = G__19068;
chunk__19035 = G__19069;
count__19036 = G__19070;
i__19037 = G__19071;
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
var seq__19072 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__19073 = null;
var count__19074 = (0);
var i__19075 = (0);
while(true){
if((i__19075 < count__19074)){
var vec__19086 = cljs.core._nth.call(null,chunk__19073,i__19075);
var k = cljs.core.nth.call(null,vec__19086,(0),null);
var map__19089 = cljs.core.nth.call(null,vec__19086,(1),null);
var map__19089__$1 = (((((!((map__19089 == null))))?(((((map__19089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19089):map__19089);
var cm = cljs.core.get.call(null,map__19089__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19089__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19096 = seq__19072;
var G__19097 = chunk__19073;
var G__19098 = count__19074;
var G__19099 = (i__19075 + (1));
seq__19072 = G__19096;
chunk__19073 = G__19097;
count__19074 = G__19098;
i__19075 = G__19099;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19072);
if(temp__5720__auto__){
var seq__19072__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19072__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19072__$1);
var G__19100 = cljs.core.chunk_rest.call(null,seq__19072__$1);
var G__19101 = c__4550__auto__;
var G__19102 = cljs.core.count.call(null,c__4550__auto__);
var G__19103 = (0);
seq__19072 = G__19100;
chunk__19073 = G__19101;
count__19074 = G__19102;
i__19075 = G__19103;
continue;
} else {
var vec__19091 = cljs.core.first.call(null,seq__19072__$1);
var k = cljs.core.nth.call(null,vec__19091,(0),null);
var map__19094 = cljs.core.nth.call(null,vec__19091,(1),null);
var map__19094__$1 = (((((!((map__19094 == null))))?(((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19094):map__19094);
var cm = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19094__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19104 = cljs.core.next.call(null,seq__19072__$1);
var G__19105 = null;
var G__19106 = (0);
var G__19107 = (0);
seq__19072 = G__19104;
chunk__19073 = G__19105;
count__19074 = G__19106;
i__19075 = G__19107;
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
