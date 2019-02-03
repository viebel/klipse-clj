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
return (function (p1__26985_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__4131__auto__ = p1__26985_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x26986_26987 = cm;
x26986_26987.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x26986_26987.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x26986_26987,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x26986_26987,initial_state,prev_editor_state))
;

x26986_26987.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x26986_26987,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x26986_26987,initial_state,prev_editor_state))
;

x26986_26987.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x26986_26987,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x26986_26987,initial_state,prev_editor_state))
;

x26986_26987.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x26986_26987,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x26986_26987,initial_state,prev_editor_state))
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
var seq__26988 = cljs.core.seq.call(null,new_state);
var chunk__26989 = null;
var count__26990 = (0);
var i__26991 = (0);
while(true){
if((i__26991 < count__26990)){
var vec__27002 = cljs.core._nth.call(null,chunk__26989,i__26991);
var k = cljs.core.nth.call(null,vec__27002,(0),null);
var map__27005 = cljs.core.nth.call(null,vec__27002,(1),null);
var map__27005__$1 = (((((!((map__27005 == null))))?(((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var cm = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__27012 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__27012){
cm.setValue(text);
} else {
}


var G__27013 = seq__26988;
var G__27014 = chunk__26989;
var G__27015 = count__26990;
var G__27016 = (i__26991 + (1));
seq__26988 = G__27013;
chunk__26989 = G__27014;
count__26990 = G__27015;
i__26991 = G__27016;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26988);
if(temp__5720__auto__){
var seq__26988__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26988__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26988__$1);
var G__27017 = cljs.core.chunk_rest.call(null,seq__26988__$1);
var G__27018 = c__4550__auto__;
var G__27019 = cljs.core.count.call(null,c__4550__auto__);
var G__27020 = (0);
seq__26988 = G__27017;
chunk__26989 = G__27018;
count__26990 = G__27019;
i__26991 = G__27020;
continue;
} else {
var vec__27007 = cljs.core.first.call(null,seq__26988__$1);
var k = cljs.core.nth.call(null,vec__27007,(0),null);
var map__27010 = cljs.core.nth.call(null,vec__27007,(1),null);
var map__27010__$1 = (((((!((map__27010 == null))))?(((((map__27010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27010):map__27010);
var cm = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__27010__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__27021 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__27021){
cm.setValue(text);
} else {
}


var G__27022 = cljs.core.next.call(null,seq__26988__$1);
var G__27023 = null;
var G__27024 = (0);
var G__27025 = (0);
seq__26988 = G__27022;
chunk__26989 = G__27023;
count__26990 = G__27024;
i__26991 = G__27025;
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
var seq__27026 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__27027 = null;
var count__27028 = (0);
var i__27029 = (0);
while(true){
if((i__27029 < count__27028)){
var vec__27040 = cljs.core._nth.call(null,chunk__27027,i__27029);
var k = cljs.core.nth.call(null,vec__27040,(0),null);
var map__27043 = cljs.core.nth.call(null,vec__27040,(1),null);
var map__27043__$1 = (((((!((map__27043 == null))))?(((((map__27043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27043):map__27043);
var cm = cljs.core.get.call(null,map__27043__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__27043__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__27050 = seq__27026;
var G__27051 = chunk__27027;
var G__27052 = count__27028;
var G__27053 = (i__27029 + (1));
seq__27026 = G__27050;
chunk__27027 = G__27051;
count__27028 = G__27052;
i__27029 = G__27053;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27026);
if(temp__5720__auto__){
var seq__27026__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27026__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27026__$1);
var G__27054 = cljs.core.chunk_rest.call(null,seq__27026__$1);
var G__27055 = c__4550__auto__;
var G__27056 = cljs.core.count.call(null,c__4550__auto__);
var G__27057 = (0);
seq__27026 = G__27054;
chunk__27027 = G__27055;
count__27028 = G__27056;
i__27029 = G__27057;
continue;
} else {
var vec__27045 = cljs.core.first.call(null,seq__27026__$1);
var k = cljs.core.nth.call(null,vec__27045,(0),null);
var map__27048 = cljs.core.nth.call(null,vec__27045,(1),null);
var map__27048__$1 = (((((!((map__27048 == null))))?(((((map__27048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27048):map__27048);
var cm = cljs.core.get.call(null,map__27048__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__27048__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__27058 = cljs.core.next.call(null,seq__27026__$1);
var G__27059 = null;
var G__27060 = (0);
var G__27061 = (0);
seq__27026 = G__27058;
chunk__27027 = G__27059;
count__27028 = G__27060;
i__27029 = G__27061;
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
