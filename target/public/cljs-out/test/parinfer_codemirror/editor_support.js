// Compiled by ClojureScript 1.10.520 {}
goog.provide('parinfer_codemirror.editor_support');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.indent_mode');
goog.require('parinfer.paren_mode');
goog.require('parinfer_codemirror.state');

/**
 * Custom data/methods for a CodeMirror editor.
 * @interface
 */
parinfer_codemirror.editor_support.IEditor = function(){};

parinfer_codemirror.editor_support.cm_key = (function parinfer_codemirror$editor_support$cm_key(this$){
if((((!((this$ == null)))) && ((!((this$.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 == null)))))){
return this$.parinfer_codemirror$editor_support$IEditor$cm_key$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (parinfer_codemirror.editor_support.cm_key[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (parinfer_codemirror.editor_support.cm_key["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEditor.cm-key",this$);
}
}
}
});

parinfer_codemirror.editor_support.get_prev_state = (function parinfer_codemirror$editor_support$get_prev_state(this$){
if((((!((this$ == null)))) && ((!((this$.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 == null)))))){
return this$.parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (parinfer_codemirror.editor_support.get_prev_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (parinfer_codemirror.editor_support.get_prev_state["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEditor.get-prev-state",this$);
}
}
}
});

parinfer_codemirror.editor_support.frame_updated_QMARK_ = (function parinfer_codemirror$editor_support$frame_updated_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 == null)))))){
return this$.parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (parinfer_codemirror.editor_support.frame_updated_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (parinfer_codemirror.editor_support.frame_updated_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IEditor.frame-updated?",this$);
}
}
}
});

parinfer_codemirror.editor_support.set_frame_updated_BANG_ = (function parinfer_codemirror$editor_support$set_frame_updated_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 == null)))))){
return this$.parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2(this$,value);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (parinfer_codemirror.editor_support.set_frame_updated_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$,value);
} else {
var m__4431__auto__ = (parinfer_codemirror.editor_support.set_frame_updated_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IEditor.set-frame-updated!",this$);
}
}
}
});

/**
 * Correctly position cursor after text that was just typed.
 *   We need this since reformatting the text can shift things forward past our cursor.
 */
parinfer_codemirror.editor_support.update_cursor_BANG_ = (function parinfer_codemirror$editor_support$update_cursor_BANG_(cm,change){
if(cljs.core._EQ_.call(null,"+input",change.origin)){
var selection_QMARK_ = cm.somethingSelected();
var text = clojure.string.join.call(null,"\n",change.text);
var from_x = change.from.ch;
var line_no = change.from.line;
var line = cm.getLine(line_no);
var insert_x = line.indexOf(text,from_x);
var after_x = (insert_x + cljs.core.count.call(null,text));
if(cljs.core.truth_(selection_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.call(null,text,"\n")){
return null;
} else {
if(cljs.core._EQ_.call(null,text,";")){
return cm.setCursor(line_no,after_x);
} else {
if(((cljs.core._EQ_.call(null,(-1),insert_x)) || ((insert_x > from_x)))){
return cm.setCursor(line_no,from_x);
} else {
return null;

}
}
}
}
} else {
return null;
}
});
parinfer_codemirror.editor_support.compute_cursor_dx = (function parinfer_codemirror$editor_support$compute_cursor_dx(cursor,change){
if(cljs.core.truth_(change)){
var ignore_QMARK_ = cljs.core._EQ_.call(null,"+indenthack",change.origin);
if(ignore_QMARK_){
return (0);
} else {
var start_x = change.to.ch;
var new_lines = change.text;
var len_last_line = cljs.core.count.call(null,cljs.core.last.call(null,new_lines));
var end_x = (((cljs.core.count.call(null,new_lines) > (1)))?len_last_line:(len_last_line + change.from.ch));
return (end_x - start_x);
}
} else {
return null;
}
});
parinfer_codemirror.editor_support.compute_cm_change = (function parinfer_codemirror$editor_support$compute_cm_change(cm,change,options,prev_state){
var map__19015 = (cljs.core.truth_(change)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),change.from.line,new cljs.core.Keyword(null,"end-line","end-line",1837326455),(change.to.line + (1)),new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),change.text.length], null):(function (){var start = new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007).cljs$core$IFn$_invoke$arity$1(prev_state);
var end = (start + (1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),start,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),(end - start)], null);
})());
var map__19015__$1 = (((((!((map__19015 == null))))?(((((map__19015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19015):map__19015);
var start_line = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var end_line = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var num_new_lines = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646));
var lines = (function (){var iter__4523__auto__ = ((function (map__19015,map__19015__$1,start_line,end_line,num_new_lines){
return (function parinfer_codemirror$editor_support$compute_cm_change_$_iter__19017(s__19018){
return (new cljs.core.LazySeq(null,((function (map__19015,map__19015__$1,start_line,end_line,num_new_lines){
return (function (){
var s__19018__$1 = s__19018;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19018__$1);
if(temp__5804__auto__){
var s__19018__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19018__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19018__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19020 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19019 = (0);
while(true){
if((i__19019 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19019);
cljs.core.chunk_append.call(null,b__19020,cm.getLine(i));

var G__19021 = (i__19019 + (1));
i__19019 = G__19021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19020),parinfer_codemirror$editor_support$compute_cm_change_$_iter__19017.call(null,cljs.core.chunk_rest.call(null,s__19018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19020),null);
}
} else {
var i = cljs.core.first.call(null,s__19018__$2);
return cljs.core.cons.call(null,cm.getLine(i),parinfer_codemirror$editor_support$compute_cm_change_$_iter__19017.call(null,cljs.core.rest.call(null,s__19018__$2)));
}
} else {
return null;
}
break;
}
});})(map__19015,map__19015__$1,start_line,end_line,num_new_lines))
,null,null));
});})(map__19015,map__19015__$1,start_line,end_line,num_new_lines))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start_line,(start_line + num_new_lines)));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_line,end_line], null),new cljs.core.Keyword(null,"new-line","new-line",1060819447),lines], null);
});
/**
 * Correctly format the text from the given editor.
 */
parinfer_codemirror.editor_support.fix_text_BANG_ = (function parinfer_codemirror$editor_support$fix_text_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19028 = arguments.length;
var i__4731__auto___19029 = (0);
while(true){
if((i__4731__auto___19029 < len__4730__auto___19028)){
args__4736__auto__.push((arguments[i__4731__auto___19029]));

var G__19030 = (i__4731__auto___19029 + (1));
i__4731__auto___19029 = G__19030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__19024){
var map__19025 = p__19024;
var map__19025__$1 = (((((!((map__19025 == null))))?(((((map__19025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19025):map__19025);
var change = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"change","change",-1163046502),null);
var use_cache_QMARK_ = cljs.core.get.call(null,map__19025__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false);
var current_text = cm.getValue();
var selection_QMARK_ = cm.somethingSelected();
var selections = cm.listSelections();
var cursor = cm.getCursor();
var scroller = cm.getScrollerElement();
var scroll_x = scroller.scrollLeft;
var scroll_y = scroller.scrollTop;
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007),cursor.line,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266),cursor.ch,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327),parinfer_codemirror.editor_support.compute_cursor_dx.call(null,cursor,change)], null);
var key_ = parinfer_codemirror.editor_support.cm_key.call(null,cm);
var mode = (function (){var or__4131__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,parinfer_codemirror.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"mode","mode",654403691)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542);
}
})();
var prev_state = parinfer_codemirror.editor_support.get_prev_state.call(null,cm);
var new_text = (function (){var G__19027 = mode;
var G__19027__$1 = (((G__19027 instanceof cljs.core.Keyword))?G__19027.fqn:null);
switch (G__19027__$1) {
case "indent-mode":
var result = (cljs.core.truth_((function (){var and__4120__auto__ = use_cache_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,prev_state);
} else {
return and__4120__auto__;
}
})())?parinfer.indent_mode.format_text_change.call(null,current_text,cljs.core.deref.call(null,prev_state),parinfer_codemirror.editor_support.compute_cm_change.call(null,cm,change,options,cljs.core.deref.call(null,prev_state)),options):parinfer.indent_mode.format_text.call(null,current_text,options));
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_.call(null,prev_state,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
case "paren-mode":
var result = parinfer.paren_mode.format_text.call(null,current_text,options);
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
default:
return null;

}
})();
cljs.core.swap_BANG_.call(null,parinfer_codemirror.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_text);

if(cljs.core.truth_(selection_QMARK_)){
cm.setSelections(selections);
} else {
cm.setCursor(cursor);
}

return cm.scrollTo(scroll_x,scroll_y);
});

parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$applyTo = (function (seq19022){
var G__19023 = cljs.core.first.call(null,seq19022);
var seq19022__$1 = cljs.core.next.call(null,seq19022);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19023,seq19022__$1);
});


//# sourceMappingURL=editor_support.js.map
