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
return (function (p1__52036_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__3922__auto__ = p1__52036_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x52037_52038 = cm;
x52037_52038.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x52037_52038.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x52037_52038,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x52037_52038,initial_state,prev_editor_state))
;

x52037_52038.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x52037_52038,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x52037_52038,initial_state,prev_editor_state))
;

x52037_52038.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x52037_52038,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x52037_52038,initial_state,prev_editor_state))
;

x52037_52038.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x52037_52038,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x52037_52038,initial_state,prev_editor_state))
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
var seq__52039 = cljs.core.seq.call(null,new_state);
var chunk__52040 = null;
var count__52041 = (0);
var i__52042 = (0);
while(true){
if((i__52042 < count__52041)){
var vec__52043 = cljs.core._nth.call(null,chunk__52040,i__52042);
var k = cljs.core.nth.call(null,vec__52043,(0),null);
var map__52046 = cljs.core.nth.call(null,vec__52043,(1),null);
var map__52046__$1 = ((((!((map__52046 == null)))?(((((map__52046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52046):map__52046);
var cm = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__52046__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__52053 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__52053){
cm.setValue(text);
} else {
}


var G__52054 = seq__52039;
var G__52055 = chunk__52040;
var G__52056 = count__52041;
var G__52057 = (i__52042 + (1));
seq__52039 = G__52054;
chunk__52040 = G__52055;
count__52041 = G__52056;
i__52042 = G__52057;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52039);
if(temp__5457__auto__){
var seq__52039__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52039__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__52039__$1);
var G__52058 = cljs.core.chunk_rest.call(null,seq__52039__$1);
var G__52059 = c__4319__auto__;
var G__52060 = cljs.core.count.call(null,c__4319__auto__);
var G__52061 = (0);
seq__52039 = G__52058;
chunk__52040 = G__52059;
count__52041 = G__52060;
i__52042 = G__52061;
continue;
} else {
var vec__52048 = cljs.core.first.call(null,seq__52039__$1);
var k = cljs.core.nth.call(null,vec__52048,(0),null);
var map__52051 = cljs.core.nth.call(null,vec__52048,(1),null);
var map__52051__$1 = ((((!((map__52051 == null)))?(((((map__52051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52051):map__52051);
var cm = cljs.core.get.call(null,map__52051__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__52051__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__52062 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__52062){
cm.setValue(text);
} else {
}


var G__52063 = cljs.core.next.call(null,seq__52039__$1);
var G__52064 = null;
var G__52065 = (0);
var G__52066 = (0);
seq__52039 = G__52063;
chunk__52040 = G__52064;
count__52041 = G__52065;
i__52042 = G__52066;
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
var seq__52067 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__52068 = null;
var count__52069 = (0);
var i__52070 = (0);
while(true){
if((i__52070 < count__52069)){
var vec__52071 = cljs.core._nth.call(null,chunk__52068,i__52070);
var k = cljs.core.nth.call(null,vec__52071,(0),null);
var map__52074 = cljs.core.nth.call(null,vec__52071,(1),null);
var map__52074__$1 = ((((!((map__52074 == null)))?(((((map__52074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52074):map__52074);
var cm = cljs.core.get.call(null,map__52074__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__52074__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__52081 = seq__52067;
var G__52082 = chunk__52068;
var G__52083 = count__52069;
var G__52084 = (i__52070 + (1));
seq__52067 = G__52081;
chunk__52068 = G__52082;
count__52069 = G__52083;
i__52070 = G__52084;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52067);
if(temp__5457__auto__){
var seq__52067__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52067__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__52067__$1);
var G__52085 = cljs.core.chunk_rest.call(null,seq__52067__$1);
var G__52086 = c__4319__auto__;
var G__52087 = cljs.core.count.call(null,c__4319__auto__);
var G__52088 = (0);
seq__52067 = G__52085;
chunk__52068 = G__52086;
count__52069 = G__52087;
i__52070 = G__52088;
continue;
} else {
var vec__52076 = cljs.core.first.call(null,seq__52067__$1);
var k = cljs.core.nth.call(null,vec__52076,(0),null);
var map__52079 = cljs.core.nth.call(null,vec__52076,(1),null);
var map__52079__$1 = ((((!((map__52079 == null)))?(((((map__52079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52079):map__52079);
var cm = cljs.core.get.call(null,map__52079__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__52079__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__52089 = cljs.core.next.call(null,seq__52067__$1);
var G__52090 = null;
var G__52091 = (0);
var G__52092 = (0);
seq__52067 = G__52089;
chunk__52068 = G__52090;
count__52069 = G__52091;
i__52070 = G__52092;
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
