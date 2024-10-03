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

cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),(function (p1__28410_SHARP_){
return cljs.core.assoc.call(null,(function (){var or__5002__auto__ = p1__28410_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
}));

var x28411_28412 = cm;
(x28411_28412.parinfer_codemirror$editor_support$IEditor$ = cljs.core.PROTOCOL_SENTINEL);

(x28411_28412.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = (function (this$){
var this$__$1 = this;
return prev_editor_state;
}));

(x28411_28412.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = (function (this$){
var this$__$1 = this;
return key_;
}));

(x28411_28412.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.editor.frame_updates),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
}));

(x28411_28412.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = (function (this$,value){
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
var seq__28413 = cljs.core.seq.call(null,new_state);
var chunk__28414 = null;
var count__28415 = (0);
var i__28416 = (0);
while(true){
if((i__28416 < count__28415)){
var vec__28425 = cljs.core._nth.call(null,chunk__28414,i__28416);
var k = cljs.core.nth.call(null,vec__28425,(0),null);
var map__28428 = cljs.core.nth.call(null,vec__28425,(1),null);
var map__28428__$1 = cljs.core.__destructure_map.call(null,map__28428);
var cm = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__28433 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__28433){
cm.setValue(text);
} else {
}


var G__28434 = seq__28413;
var G__28435 = chunk__28414;
var G__28436 = count__28415;
var G__28437 = (i__28416 + (1));
seq__28413 = G__28434;
chunk__28414 = G__28435;
count__28415 = G__28436;
i__28416 = G__28437;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__28413);
if(temp__5823__auto__){
var seq__28413__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28413__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__28413__$1);
var G__28438 = cljs.core.chunk_rest.call(null,seq__28413__$1);
var G__28439 = c__5525__auto__;
var G__28440 = cljs.core.count.call(null,c__5525__auto__);
var G__28441 = (0);
seq__28413 = G__28438;
chunk__28414 = G__28439;
count__28415 = G__28440;
i__28416 = G__28441;
continue;
} else {
var vec__28429 = cljs.core.first.call(null,seq__28413__$1);
var k = cljs.core.nth.call(null,vec__28429,(0),null);
var map__28432 = cljs.core.nth.call(null,vec__28429,(1),null);
var map__28432__$1 = cljs.core.__destructure_map.call(null,map__28432);
var cm = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28432__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__28442 = cljs.core.not_EQ_.call(null,text,cm.getValue());
if(changed_QMARK__28442){
cm.setValue(text);
} else {
}


var G__28443 = cljs.core.next.call(null,seq__28413__$1);
var G__28444 = null;
var G__28445 = (0);
var G__28446 = (0);
seq__28413 = G__28443;
chunk__28414 = G__28444;
count__28415 = G__28445;
i__28416 = G__28446;
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
var seq__28447 = cljs.core.seq.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state));
var chunk__28448 = null;
var count__28449 = (0);
var i__28450 = (0);
while(true){
if((i__28450 < count__28449)){
var vec__28459 = cljs.core._nth.call(null,chunk__28448,i__28450);
var k = cljs.core.nth.call(null,vec__28459,(0),null);
var map__28462 = cljs.core.nth.call(null,vec__28459,(1),null);
var map__28462__$1 = cljs.core.__destructure_map.call(null,map__28462);
var cm = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__28467 = seq__28447;
var G__28468 = chunk__28448;
var G__28469 = count__28449;
var G__28470 = (i__28450 + (1));
seq__28447 = G__28467;
chunk__28448 = G__28468;
count__28449 = G__28469;
i__28450 = G__28470;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__28447);
if(temp__5823__auto__){
var seq__28447__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28447__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__28447__$1);
var G__28471 = cljs.core.chunk_rest.call(null,seq__28447__$1);
var G__28472 = c__5525__auto__;
var G__28473 = cljs.core.count.call(null,c__5525__auto__);
var G__28474 = (0);
seq__28447 = G__28471;
chunk__28448 = G__28472;
count__28449 = G__28473;
i__28450 = G__28474;
continue;
} else {
var vec__28463 = cljs.core.first.call(null,seq__28447__$1);
var k = cljs.core.nth.call(null,vec__28463,(0),null);
var map__28466 = cljs.core.nth.call(null,vec__28463,(1),null);
var map__28466__$1 = cljs.core.__destructure_map.call(null,map__28466);
var cm = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.call(null,map__28466__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);


var G__28475 = cljs.core.next.call(null,seq__28447__$1);
var G__28476 = null;
var G__28477 = (0);
var G__28478 = (0);
seq__28447 = G__28475;
chunk__28448 = G__28476;
count__28449 = G__28477;
i__28450 = G__28478;
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
