// Compiled by ClojureScript 1.10.439 {}
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
return (function (p1__25160_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4047__auto__ = p1__25160_SHARP_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x25161_25162 = cm;
x25161_25162.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x25161_25162.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x25161_25162,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x25161_25162,initial_state,prev_editor_state))
;

x25161_25162.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x25161_25162,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x25161_25162,initial_state,prev_editor_state))
;

x25161_25162.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x25161_25162,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x25161_25162,initial_state,prev_editor_state))
;

x25161_25162.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x25161_25162,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x25161_25162,initial_state,prev_editor_state))
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
var seq__25163 = cljs.core.seq.call(null,new_state);
var chunk__25164 = null;
var count__25165 = (0);
var i__25166 = (0);
while(true){
if((i__25166 < count__25165)){
var vec__25167 = cljs.core._nth.call(null,chunk__25164,i__25166);
var k = cljs.core.nth.call(null,vec__25167,(0),null);
var map__25170 = cljs.core.nth.call(null,vec__25167,(1),null);
var map__25170__$1 = (((((!((map__25170 == null))))?(((((map__25170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25170):map__25170);
var cm = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25170__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__25177 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__25177){
cm.setValue(text);
} else {
}


var G__25178 = seq__25163;
var G__25179 = chunk__25164;
var G__25180 = count__25165;
var G__25181 = (i__25166 + (1));
seq__25163 = G__25178;
chunk__25164 = G__25179;
count__25165 = G__25180;
i__25166 = G__25181;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25163);
if(temp__5720__auto__){
var seq__25163__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25163__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25163__$1);
var G__25182 = cljs.core.chunk_rest.call(null,seq__25163__$1);
var G__25183 = c__4461__auto__;
var G__25184 = cljs.core.count.call(null,c__4461__auto__);
var G__25185 = (0);
seq__25163 = G__25182;
chunk__25164 = G__25183;
count__25165 = G__25184;
i__25166 = G__25185;
continue;
} else {
var vec__25172 = cljs.core.first.call(null,seq__25163__$1);
var k = cljs.core.nth.call(null,vec__25172,(0),null);
var map__25175 = cljs.core.nth.call(null,vec__25172,(1),null);
var map__25175__$1 = (((((!((map__25175 == null))))?(((((map__25175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25175):map__25175);
var cm = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__25186 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__25186){
cm.setValue(text);
} else {
}


var G__25187 = cljs.core.next.call(null,seq__25163__$1);
var G__25188 = null;
var G__25189 = (0);
var G__25190 = (0);
seq__25163 = G__25187;
chunk__25164 = G__25188;
count__25165 = G__25189;
i__25166 = G__25190;
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
var seq__25191 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__25192 = null;
var count__25193 = (0);
var i__25194 = (0);
while(true){
if((i__25194 < count__25193)){
var vec__25195 = cljs.core._nth.call(null,chunk__25192,i__25194);
var k = cljs.core.nth.call(null,vec__25195,(0),null);
var map__25198 = cljs.core.nth.call(null,vec__25195,(1),null);
var map__25198__$1 = (((((!((map__25198 == null))))?(((((map__25198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25198):map__25198);
var cm = cljs.core.get.call(null,map__25198__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25198__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__25205 = seq__25191;
var G__25206 = chunk__25192;
var G__25207 = count__25193;
var G__25208 = (i__25194 + (1));
seq__25191 = G__25205;
chunk__25192 = G__25206;
count__25193 = G__25207;
i__25194 = G__25208;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25191);
if(temp__5720__auto__){
var seq__25191__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25191__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__25191__$1);
var G__25209 = cljs.core.chunk_rest.call(null,seq__25191__$1);
var G__25210 = c__4461__auto__;
var G__25211 = cljs.core.count.call(null,c__4461__auto__);
var G__25212 = (0);
seq__25191 = G__25209;
chunk__25192 = G__25210;
count__25193 = G__25211;
i__25194 = G__25212;
continue;
} else {
var vec__25200 = cljs.core.first.call(null,seq__25191__$1);
var k = cljs.core.nth.call(null,vec__25200,(0),null);
var map__25203 = cljs.core.nth.call(null,vec__25200,(1),null);
var map__25203__$1 = (((((!((map__25203 == null))))?(((((map__25203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25203):map__25203);
var cm = cljs.core.get.call(null,map__25203__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__25203__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__25213 = cljs.core.next.call(null,seq__25191__$1);
var G__25214 = null;
var G__25215 = (0);
var G__25216 = (0);
seq__25191 = G__25213;
chunk__25192 = G__25214;
count__25193 = G__25215;
i__25194 = G__25216;
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
