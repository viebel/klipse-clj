// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__46615_SHARP_){
var k = f.call(null,p1__46615_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46616){
var vec__46617 = p__46616;
var k = cljs.core.nth.call(null,vec__46617,(0),null);
var v = cljs.core.nth.call(null,vec__46617,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__19135__auto__ = [];
var len__19125__auto___46621 = arguments.length;
var i__19126__auto___46622 = (0);
while(true){
if((i__19126__auto___46622 < len__19125__auto___46621)){
args__19135__auto__.push((arguments[i__19126__auto___46622]));

var G__46623 = (i__19126__auto___46622 + (1));
i__19126__auto___46622 = G__46623;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((0) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__19136__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq46620){
var self__19111__auto__ = this;
return self__19111__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46620));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__46626){
var map__46627 = p__46626;
var map__46627__$1 = (((((!((map__46627 == null))))?(((((map__46627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46627):map__46627);
var message = cljs.core.get.call(null,map__46627__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__46627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__46627,map__46627__$1,message,column){
return (function (p1__46625_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46625_SHARP_], null)));
});})(map__46627,map__46627__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__46627,map__46627__$1,message,column){
return (function (p1__46624_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__46624_SHARP_);
});})(map__46627,map__46627__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__46630){
var map__46631 = p__46630;
var map__46631__$1 = (((((!((map__46631 == null))))?(((((map__46631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46631):map__46631);
var message_data = map__46631__$1;
var message = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__46631__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__46633 = file_excerpt;
var map__46633__$1 = (((((!((map__46633 == null))))?(((((map__46633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46633):map__46633);
var start_line = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__46633__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__46633,map__46633__$1,start_line,path,excerpt,map__46631,map__46631__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__46633,map__46633__$1,start_line,path,excerpt,map__46631,map__46631__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__46634 = cljs.core.split_with.call(null,((function (map__46633,map__46633__$1,start_line,path,excerpt,lines,map__46631,map__46631__$1,message_data,message,line,column,file_excerpt){
return (function (p1__46629_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__46629_SHARP_));
});})(map__46633,map__46633__$1,start_line,path,excerpt,lines,map__46631,map__46631__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__46634,(0),null);
var end = cljs.core.nth.call(null,vec__46634,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__46638){
var map__46639 = p__46638;
var map__46639__$1 = (((((!((map__46639 == null))))?(((((map__46639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46639):map__46639);
var file = cljs.core.get.call(null,map__46639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46639__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46639__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46641 = "";
var G__46641__$1 = (cljs.core.truth_(file)?[G__46641,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46641);
var G__46641__$2 = (cljs.core.truth_(line)?[G__46641__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46641__$1);
if(cljs.core.truth_((function (){var and__17801__auto__ = line;
if(cljs.core.truth_(and__17801__auto__)){
return column;
} else {
return and__17801__auto__;
}
})())){
return [G__46641__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46641__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_46695 = (new goog.debug.Console());
var G__46648_46696 = c_46695.getFormatter();
goog.object.set(G__46648_46696,"showAbsoluteTime",false);

goog.object.set(G__46648_46696,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_46695);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((((typeof document !== 'undefined')) && ((typeof document !== 'undefined') && (typeof document.body !== 'undefined'))))?document.body:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__46649 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__46649,"data",(function (){var or__17816__auto__ = data;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__46649;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_46697 = cljs.core.atom.call(null,(0));
var promise_chain_46698 = (new goog.Promise(((function (last_reload_timestamp_46697){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_46697))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_46697,promise_chain_46698){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__17801__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_46697) < ts);
if(and__17801__auto__){
return ts;
} else {
return and__17801__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_46697,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_46698.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__46650 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__46651 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__46651;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__46650,_STAR_inline_code_message_max_column_STAR__temp_val__46651,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698){
return (function (){
var seq__46652 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__46653 = null;
var count__46654 = (0);
var i__46655 = (0);
while(true){
if((i__46655 < count__46654)){
var w = cljs.core._nth.call(null,chunk__46653,i__46655);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__46699 = seq__46652;
var G__46700 = chunk__46653;
var G__46701 = count__46654;
var G__46702 = (i__46655 + (1));
seq__46652 = G__46699;
chunk__46653 = G__46700;
count__46654 = G__46701;
i__46655 = G__46702;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46652);
if(temp__5720__auto__){
var seq__46652__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46652__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__46652__$1);
var G__46703 = cljs.core.chunk_rest.call(null,seq__46652__$1);
var G__46704 = c__18773__auto__;
var G__46705 = cljs.core.count.call(null,c__18773__auto__);
var G__46706 = (0);
seq__46652 = G__46703;
chunk__46653 = G__46704;
count__46654 = G__46705;
i__46655 = G__46706;
continue;
} else {
var w = cljs.core.first.call(null,seq__46652__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__46707 = cljs.core.next.call(null,seq__46652__$1);
var G__46708 = null;
var G__46709 = (0);
var G__46710 = (0);
seq__46652 = G__46707;
chunk__46653 = G__46708;
count__46654 = G__46709;
i__46655 = G__46710;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__46650,_STAR_inline_code_message_max_column_STAR__temp_val__46651,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__46650;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_46698.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__46656 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__46657 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__46657;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__46656;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698))
);
} else {
return promise_chain_46698.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_46697,promise_chain_46698))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_46697,promise_chain_46698))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__17816__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__17816__auto____$1)){
return or__17816__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__17801__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__17801__auto__){
var and__17801__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__17801__auto____$1){
var or__17816__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var or__17816__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__17816__auto____$1)){
return or__17816__auto____$1;
} else {
var or__17816__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__17816__auto____$2)){
return or__17816__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__17801__auto____$1;
}
} else {
return and__17801__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__19135__auto__ = [];
var len__19125__auto___46711 = arguments.length;
var i__19126__auto___46712 = (0);
while(true){
if((i__19126__auto___46712 < len__19125__auto___46711)){
args__19135__auto__.push((arguments[i__19126__auto___46712]));

var G__46713 = (i__19126__auto___46712 + (1));
i__19126__auto___46712 = G__46713;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__46660){
var vec__46661 = p__46660;
var n = cljs.core.nth.call(null,vec__46661,(0),null);
var mdata = cljs.core.nth.call(null,vec__46661,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__46664 = cljs.core.seq.call(null,hooks);
var chunk__46665 = null;
var count__46666 = (0);
var i__46667 = (0);
while(true){
if((i__46667 < count__46666)){
var vec__46674 = cljs.core._nth.call(null,chunk__46665,i__46667);
var n = cljs.core.nth.call(null,vec__46674,(0),null);
var f = cljs.core.nth.call(null,vec__46674,(1),null);
var temp__5718__auto___46714 = cljs.core.reduce.call(null,((function (seq__46664,chunk__46665,count__46666,i__46667,vec__46674,n,f,hooks){
return (function (p1__46642_SHARP_,p2__46643_SHARP_){
if(cljs.core.truth_(p1__46642_SHARP_)){
return goog.object.get(p1__46642_SHARP_,p2__46643_SHARP_);
} else {
return null;
}
});})(seq__46664,chunk__46665,count__46666,i__46667,vec__46674,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___46714)){
var hook_46715 = temp__5718__auto___46714;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_46715,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__46716 = seq__46664;
var G__46717 = chunk__46665;
var G__46718 = count__46666;
var G__46719 = (i__46667 + (1));
seq__46664 = G__46716;
chunk__46665 = G__46717;
count__46666 = G__46718;
i__46667 = G__46719;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46664);
if(temp__5720__auto__){
var seq__46664__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46664__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__46664__$1);
var G__46720 = cljs.core.chunk_rest.call(null,seq__46664__$1);
var G__46721 = c__18773__auto__;
var G__46722 = cljs.core.count.call(null,c__18773__auto__);
var G__46723 = (0);
seq__46664 = G__46720;
chunk__46665 = G__46721;
count__46666 = G__46722;
i__46667 = G__46723;
continue;
} else {
var vec__46677 = cljs.core.first.call(null,seq__46664__$1);
var n = cljs.core.nth.call(null,vec__46677,(0),null);
var f = cljs.core.nth.call(null,vec__46677,(1),null);
var temp__5718__auto___46724 = cljs.core.reduce.call(null,((function (seq__46664,chunk__46665,count__46666,i__46667,vec__46677,n,f,seq__46664__$1,temp__5720__auto__,hooks){
return (function (p1__46642_SHARP_,p2__46643_SHARP_){
if(cljs.core.truth_(p1__46642_SHARP_)){
return goog.object.get(p1__46642_SHARP_,p2__46643_SHARP_);
} else {
return null;
}
});})(seq__46664,chunk__46665,count__46666,i__46667,vec__46677,n,f,seq__46664__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___46724)){
var hook_46725 = temp__5718__auto___46724;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_46725,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__46726 = cljs.core.next.call(null,seq__46664__$1);
var G__46727 = null;
var G__46728 = (0);
var G__46729 = (0);
seq__46664 = G__46726;
chunk__46665 = G__46727;
count__46666 = G__46728;
i__46667 = G__46729;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq46658){
var G__46659 = cljs.core.first.call(null,seq46658);
var seq46658__$1 = cljs.core.next.call(null,seq46658);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46659,seq46658__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46680){
var vec__46681 = p__46680;
var k = cljs.core.nth.call(null,vec__46681,(0),null);
var v = cljs.core.nth.call(null,vec__46681,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__46644_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__46644_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__46644_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__46645_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__46645_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__17801__auto__ = (!(figwheel.core.load_warninged_code));
if(and__17801__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__17801__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__46646_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__46646_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__46684_46730 = cljs.core.seq.call(null,to_reload);
var chunk__46685_46731 = null;
var count__46686_46732 = (0);
var i__46687_46733 = (0);
while(true){
if((i__46687_46733 < count__46686_46732)){
var ns_46734 = cljs.core._nth.call(null,chunk__46685_46731,i__46687_46733);
goog.require(cljs.core.name.call(null,ns_46734),true);


var G__46735 = seq__46684_46730;
var G__46736 = chunk__46685_46731;
var G__46737 = count__46686_46732;
var G__46738 = (i__46687_46733 + (1));
seq__46684_46730 = G__46735;
chunk__46685_46731 = G__46736;
count__46686_46732 = G__46737;
i__46687_46733 = G__46738;
continue;
} else {
var temp__5720__auto___46739 = cljs.core.seq.call(null,seq__46684_46730);
if(temp__5720__auto___46739){
var seq__46684_46740__$1 = temp__5720__auto___46739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46684_46740__$1)){
var c__18773__auto___46741 = cljs.core.chunk_first.call(null,seq__46684_46740__$1);
var G__46742 = cljs.core.chunk_rest.call(null,seq__46684_46740__$1);
var G__46743 = c__18773__auto___46741;
var G__46744 = cljs.core.count.call(null,c__18773__auto___46741);
var G__46745 = (0);
seq__46684_46730 = G__46742;
chunk__46685_46731 = G__46743;
count__46686_46732 = G__46744;
i__46687_46733 = G__46745;
continue;
} else {
var ns_46746 = cljs.core.first.call(null,seq__46684_46740__$1);
goog.require(cljs.core.name.call(null,ns_46746),true);


var G__46747 = cljs.core.next.call(null,seq__46684_46740__$1);
var G__46748 = null;
var G__46749 = (0);
var G__46750 = (0);
seq__46684_46730 = G__46747;
chunk__46685_46731 = G__46748;
count__46686_46732 = G__46749;
i__46687_46733 = G__46750;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_46751 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_46751);
} else {
setTimeout(after_reload_fn_46751,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__46688 = cljs.core.seq.call(null,warnings);
var chunk__46689 = null;
var count__46690 = (0);
var i__46691 = (0);
while(true){
if((i__46691 < count__46690)){
var warning = cljs.core._nth.call(null,chunk__46689,i__46691);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__46752 = seq__46688;
var G__46753 = chunk__46689;
var G__46754 = count__46690;
var G__46755 = (i__46691 + (1));
seq__46688 = G__46752;
chunk__46689 = G__46753;
count__46690 = G__46754;
i__46691 = G__46755;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__46688);
if(temp__5720__auto__){
var seq__46688__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46688__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__46688__$1);
var G__46756 = cljs.core.chunk_rest.call(null,seq__46688__$1);
var G__46757 = c__18773__auto__;
var G__46758 = cljs.core.count.call(null,c__18773__auto__);
var G__46759 = (0);
seq__46688 = G__46756;
chunk__46689 = G__46757;
count__46690 = G__46758;
i__46691 = G__46759;
continue;
} else {
var warning = cljs.core.first.call(null,seq__46688__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__46760 = cljs.core.next.call(null,seq__46688__$1);
var G__46761 = null;
var G__46762 = (0);
var G__46763 = (0);
seq__46688 = G__46760;
chunk__46689 = G__46761;
count__46690 = G__46762;
i__46691 = G__46763;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__46692){
var map__46693 = p__46692;
var map__46693__$1 = (((((!((map__46693 == null))))?(((((map__46693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46693):map__46693);
var exception_data = map__46693__$1;
var file = cljs.core.get.call(null,map__46693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__46693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__46693__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__46693,map__46693__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__46693,map__46693__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__46693,map__46693__$1,exception_data,file,type,message){
return (function (p1__46647_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__46647_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__46693,map__46693__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__17816__auto__ = type;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return message;
}
})())){
goog.log.info(figwheel.core.logger,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))));
} else {
}

if(cljs.core.truth_(file)){
return goog.log.info(figwheel.core.logger,["Error on ",figwheel.core.file_line_column.call(null,exception_data)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
