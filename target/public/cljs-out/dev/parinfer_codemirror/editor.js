// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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

cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),(function (p1__28495_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__5002__auto__ = p1__28495_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
}));

var x28496_28497 = cm;
(x28496_28497.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL);

(x28496_28497.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = (function (this$){
var this$__$1 = this;
return prev_editor_state;
}));

(x28496_28497.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = (function (this$){
var this$__$1 = this;
return key_;
}));

(x28496_28497.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
}));

(x28496_28497.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
}));


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
var seq__28498 = cljs.core.seq.call(null,new_state);
var chunk__28499 = null;
var count__28500 = (0);
var i__28501 = (0);
while(true){
if((i__28501 < count__28500)){
var vec__28510 = cljs.core._nth.call(null,chunk__28499,i__28501);
var k = cljs.core.nth.call(null,vec__28510,(0),null);
var map__28513 = cljs.core.nth.call(null,vec__28510,(1),null);
var map__28513__$1 = cljs.core.__destructure_map.call(null,map__28513);
var cm = cljs.core.get.call(null,map__28513__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28513__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__28518 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__28518){
cm.setValue(text);
} else {
}


var G__28519 = seq__28498;
var G__28520 = chunk__28499;
var G__28521 = count__28500;
var G__28522 = (i__28501 + (1));
seq__28498 = G__28519;
chunk__28499 = G__28520;
count__28500 = G__28521;
i__28501 = G__28522;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__28498);
if(temp__5823__auto__){
var seq__28498__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28498__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__28498__$1);
var G__28523 = cljs.core.chunk_rest.call(null,seq__28498__$1);
var G__28524 = c__5525__auto__;
var G__28525 = cljs.core.count.call(null,c__5525__auto__);
var G__28526 = (0);
seq__28498 = G__28523;
chunk__28499 = G__28524;
count__28500 = G__28525;
i__28501 = G__28526;
continue;
} else {
var vec__28514 = cljs.core.first.call(null,seq__28498__$1);
var k = cljs.core.nth.call(null,vec__28514,(0),null);
var map__28517 = cljs.core.nth.call(null,vec__28514,(1),null);
var map__28517__$1 = cljs.core.__destructure_map.call(null,map__28517);
var cm = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__28527 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__28527){
cm.setValue(text);
} else {
}


var G__28528 = cljs.core.next.call(null,seq__28498__$1);
var G__28529 = null;
var G__28530 = (0);
var G__28531 = (0);
seq__28498 = G__28528;
chunk__28499 = G__28529;
count__28500 = G__28530;
i__28501 = G__28531;
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
var seq__28532 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__28533 = null;
var count__28534 = (0);
var i__28535 = (0);
while(true){
if((i__28535 < count__28534)){
var vec__28544 = cljs.core._nth.call(null,chunk__28533,i__28535);
var k = cljs.core.nth.call(null,vec__28544,(0),null);
var map__28547 = cljs.core.nth.call(null,vec__28544,(1),null);
var map__28547__$1 = cljs.core.__destructure_map.call(null,map__28547);
var cm = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28547__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__28552 = seq__28532;
var G__28553 = chunk__28533;
var G__28554 = count__28534;
var G__28555 = (i__28535 + (1));
seq__28532 = G__28552;
chunk__28533 = G__28553;
count__28534 = G__28554;
i__28535 = G__28555;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__28532);
if(temp__5823__auto__){
var seq__28532__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28532__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__28532__$1);
var G__28556 = cljs.core.chunk_rest.call(null,seq__28532__$1);
var G__28557 = c__5525__auto__;
var G__28558 = cljs.core.count.call(null,c__5525__auto__);
var G__28559 = (0);
seq__28532 = G__28556;
chunk__28533 = G__28557;
count__28534 = G__28558;
i__28535 = G__28559;
continue;
} else {
var vec__28548 = cljs.core.first.call(null,seq__28532__$1);
var k = cljs.core.nth.call(null,vec__28548,(0),null);
var map__28551 = cljs.core.nth.call(null,vec__28548,(1),null);
var map__28551__$1 = cljs.core.__destructure_map.call(null,map__28551);
var cm = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__28560 = cljs.core.next.call(null,seq__28532__$1);
var G__28561 = null;
var G__28562 = (0);
var G__28563 = (0);
seq__28532 = G__28560;
chunk__28533 = G__28561;
count__28534 = G__28562;
i__28535 = G__28563;
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
