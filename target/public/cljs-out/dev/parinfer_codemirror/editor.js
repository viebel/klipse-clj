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
return (function (p1__37655_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__17825__auto__ = p1__37655_SHARP_;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x37656_37657 = cm;
x37656_37657.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL;

x37656_37657.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x37656_37657,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x37656_37657,initial_state,prev_editor_state))
;

x37656_37657.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x37656_37657,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x37656_37657,initial_state,prev_editor_state))
;

x37656_37657.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x37656_37657,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x37656_37657,initial_state,prev_editor_state))
;

x37656_37657.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x37656_37657,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x37656_37657,initial_state,prev_editor_state))
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
var seq__37658 = cljs.core.seq.call(null,new_state);
var chunk__37659 = null;
var count__37660 = (0);
var i__37661 = (0);
while(true){
if((i__37661 < count__37660)){
var vec__37672 = cljs.core._nth.call(null,chunk__37659,i__37661);
var k = cljs.core.nth.call(null,vec__37672,(0),null);
var map__37675 = cljs.core.nth.call(null,vec__37672,(1),null);
var map__37675__$1 = (((((!((map__37675 == null))))?(((((map__37675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37675):map__37675);
var cm = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37675__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37682 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37682){
cm.setValue(text);
} else {
}


var G__37683 = seq__37658;
var G__37684 = chunk__37659;
var G__37685 = count__37660;
var G__37686 = (i__37661 + (1));
seq__37658 = G__37683;
chunk__37659 = G__37684;
count__37660 = G__37685;
i__37661 = G__37686;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37658);
if(temp__5457__auto__){
var seq__37658__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37658__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__37658__$1);
var G__37687 = cljs.core.chunk_rest.call(null,seq__37658__$1);
var G__37688 = c__18782__auto__;
var G__37689 = cljs.core.count.call(null,c__18782__auto__);
var G__37690 = (0);
seq__37658 = G__37687;
chunk__37659 = G__37688;
count__37660 = G__37689;
i__37661 = G__37690;
continue;
} else {
var vec__37677 = cljs.core.first.call(null,seq__37658__$1);
var k = cljs.core.nth.call(null,vec__37677,(0),null);
var map__37680 = cljs.core.nth.call(null,vec__37677,(1),null);
var map__37680__$1 = (((((!((map__37680 == null))))?(((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37680):map__37680);
var cm = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__37691 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__37691){
cm.setValue(text);
} else {
}


var G__37692 = cljs.core.next.call(null,seq__37658__$1);
var G__37693 = null;
var G__37694 = (0);
var G__37695 = (0);
seq__37658 = G__37692;
chunk__37659 = G__37693;
count__37660 = G__37694;
i__37661 = G__37695;
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
var seq__37696 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__37697 = null;
var count__37698 = (0);
var i__37699 = (0);
while(true){
if((i__37699 < count__37698)){
var vec__37710 = cljs.core._nth.call(null,chunk__37697,i__37699);
var k = cljs.core.nth.call(null,vec__37710,(0),null);
var map__37713 = cljs.core.nth.call(null,vec__37710,(1),null);
var map__37713__$1 = (((((!((map__37713 == null))))?(((((map__37713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37713):map__37713);
var cm = cljs.core.get.call(null,map__37713__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37713__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37720 = seq__37696;
var G__37721 = chunk__37697;
var G__37722 = count__37698;
var G__37723 = (i__37699 + (1));
seq__37696 = G__37720;
chunk__37697 = G__37721;
count__37698 = G__37722;
i__37699 = G__37723;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37696);
if(temp__5457__auto__){
var seq__37696__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37696__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__37696__$1);
var G__37724 = cljs.core.chunk_rest.call(null,seq__37696__$1);
var G__37725 = c__18782__auto__;
var G__37726 = cljs.core.count.call(null,c__18782__auto__);
var G__37727 = (0);
seq__37696 = G__37724;
chunk__37697 = G__37725;
count__37698 = G__37726;
i__37699 = G__37727;
continue;
} else {
var vec__37715 = cljs.core.first.call(null,seq__37696__$1);
var k = cljs.core.nth.call(null,vec__37715,(0),null);
var map__37718 = cljs.core.nth.call(null,vec__37715,(1),null);
var map__37718__$1 = (((((!((map__37718 == null))))?(((((map__37718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37718):map__37718);
var cm = cljs.core.get.call(null,map__37718__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__37718__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__37728 = cljs.core.next.call(null,seq__37696__$1);
var G__37729 = null;
var G__37730 = (0);
var G__37731 = (0);
seq__37696 = G__37728;
chunk__37697 = G__37729;
count__37698 = G__37730;
i__37699 = G__37731;
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
