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
return (function (p1__19034_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = p1__19034_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x19035_19036 = cm;
x19035_19036.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x19035_19036.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x19035_19036,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x19035_19036,initial_state,prev_editor_state))
;

x19035_19036.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x19035_19036,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x19035_19036,initial_state,prev_editor_state))
;

x19035_19036.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x19035_19036,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x19035_19036,initial_state,prev_editor_state))
;

x19035_19036.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x19035_19036,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x19035_19036,initial_state,prev_editor_state))
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
var seq__19037 = cljs.core.seq.call(null,new_state);
var chunk__19038 = null;
var count__19039 = (0);
var i__19040 = (0);
while(true){
if((i__19040 < count__19039)){
var vec__19051 = cljs.core._nth.call(null,chunk__19038,i__19040);
var k = cljs.core.nth.call(null,vec__19051,(0),null);
var map__19054 = cljs.core.nth.call(null,vec__19051,(1),null);
var map__19054__$1 = (((((!((map__19054 == null))))?(((((map__19054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19054):map__19054);
var cm = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19061 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19061){
cm.setValue(text);
} else {
}


var G__19062 = seq__19037;
var G__19063 = chunk__19038;
var G__19064 = count__19039;
var G__19065 = (i__19040 + (1));
seq__19037 = G__19062;
chunk__19038 = G__19063;
count__19039 = G__19064;
i__19040 = G__19065;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19037);
if(temp__5804__auto__){
var seq__19037__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19037__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19037__$1);
var G__19066 = cljs.core.chunk_rest.call(null,seq__19037__$1);
var G__19067 = c__4550__auto__;
var G__19068 = cljs.core.count.call(null,c__4550__auto__);
var G__19069 = (0);
seq__19037 = G__19066;
chunk__19038 = G__19067;
count__19039 = G__19068;
i__19040 = G__19069;
continue;
} else {
var vec__19056 = cljs.core.first.call(null,seq__19037__$1);
var k = cljs.core.nth.call(null,vec__19056,(0),null);
var map__19059 = cljs.core.nth.call(null,vec__19056,(1),null);
var map__19059__$1 = (((((!((map__19059 == null))))?(((((map__19059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19059):map__19059);
var cm = cljs.core.get.call(null,map__19059__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19059__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__19070 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__19070){
cm.setValue(text);
} else {
}


var G__19071 = cljs.core.next.call(null,seq__19037__$1);
var G__19072 = null;
var G__19073 = (0);
var G__19074 = (0);
seq__19037 = G__19071;
chunk__19038 = G__19072;
count__19039 = G__19073;
i__19040 = G__19074;
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
var seq__19075 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__19076 = null;
var count__19077 = (0);
var i__19078 = (0);
while(true){
if((i__19078 < count__19077)){
var vec__19089 = cljs.core._nth.call(null,chunk__19076,i__19078);
var k = cljs.core.nth.call(null,vec__19089,(0),null);
var map__19092 = cljs.core.nth.call(null,vec__19089,(1),null);
var map__19092__$1 = (((((!((map__19092 == null))))?(((((map__19092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19092):map__19092);
var cm = cljs.core.get.call(null,map__19092__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19092__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19099 = seq__19075;
var G__19100 = chunk__19076;
var G__19101 = count__19077;
var G__19102 = (i__19078 + (1));
seq__19075 = G__19099;
chunk__19076 = G__19100;
count__19077 = G__19101;
i__19078 = G__19102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19075);
if(temp__5804__auto__){
var seq__19075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19075__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19075__$1);
var G__19103 = cljs.core.chunk_rest.call(null,seq__19075__$1);
var G__19104 = c__4550__auto__;
var G__19105 = cljs.core.count.call(null,c__4550__auto__);
var G__19106 = (0);
seq__19075 = G__19103;
chunk__19076 = G__19104;
count__19077 = G__19105;
i__19078 = G__19106;
continue;
} else {
var vec__19094 = cljs.core.first.call(null,seq__19075__$1);
var k = cljs.core.nth.call(null,vec__19094,(0),null);
var map__19097 = cljs.core.nth.call(null,vec__19094,(1),null);
var map__19097__$1 = (((((!((map__19097 == null))))?(((((map__19097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19097):map__19097);
var cm = cljs.core.get.call(null,map__19097__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__19097__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__19107 = cljs.core.next.call(null,seq__19075__$1);
var G__19108 = null;
var G__19109 = (0);
var G__19110 = (0);
seq__19075 = G__19107;
chunk__19076 = G__19108;
count__19077 = G__19109;
i__19078 = G__19110;
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
