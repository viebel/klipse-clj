// Compiled by ClojureScript 1.10.492 {}
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
return (function (p1__39607_SHARP_){
var k = f.call(null,p1__39607_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39608){
var vec__39609 = p__39608;
var k = cljs.core.nth.call(null,vec__39609,(0),null);
var v = cljs.core.nth.call(null,vec__39609,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4607__auto__ = [];
var len__4601__auto___39613 = arguments.length;
var i__4602__auto___39614 = (0);
while(true){
if((i__4602__auto___39614 < len__4601__auto___39613)){
args__4607__auto__.push((arguments[i__4602__auto___39614]));

var G__39615 = (i__4602__auto___39614 + (1));
i__4602__auto___39614 = G__39615;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq39612){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39612));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__39618){
var map__39619 = p__39618;
var map__39619__$1 = (((((!((map__39619 == null))))?(((((map__39619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39619):map__39619);
var message = cljs.core.get.call(null,map__39619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__39619__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__39619,map__39619__$1,message,column){
return (function (p1__39617_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39617_SHARP_], null)));
});})(map__39619,map__39619__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__39619,map__39619__$1,message,column){
return (function (p1__39616_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__39616_SHARP_);
});})(map__39619,map__39619__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__39622){
var map__39623 = p__39622;
var map__39623__$1 = (((((!((map__39623 == null))))?(((((map__39623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39623):map__39623);
var message_data = map__39623__$1;
var message = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__39625 = file_excerpt;
var map__39625__$1 = (((((!((map__39625 == null))))?(((((map__39625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39625):map__39625);
var start_line = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__39625,map__39625__$1,start_line,path,excerpt,map__39623,map__39623__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__39625,map__39625__$1,start_line,path,excerpt,map__39623,map__39623__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__39626 = cljs.core.split_with.call(null,((function (map__39625,map__39625__$1,start_line,path,excerpt,lines,map__39623,map__39623__$1,message_data,message,line,column,file_excerpt){
return (function (p1__39621_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__39621_SHARP_));
});})(map__39625,map__39625__$1,start_line,path,excerpt,lines,map__39623,map__39623__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__39626,(0),null);
var end = cljs.core.nth.call(null,vec__39626,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__39630){
var map__39631 = p__39630;
var map__39631__$1 = (((((!((map__39631 == null))))?(((((map__39631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39631):map__39631);
var file = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39631__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39633 = "";
var G__39633__$1 = (cljs.core.truth_(file)?[G__39633,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39633);
var G__39633__$2 = (cljs.core.truth_(line)?[G__39633__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39633__$1);
if(cljs.core.truth_((function (){var and__3991__auto__ = line;
if(cljs.core.truth_(and__3991__auto__)){
return column;
} else {
return and__3991__auto__;
}
})())){
return [G__39633__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39633__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_39687 = (new goog.debug.Console());
var G__39640_39688 = c_39687.getFormatter();
goog.object.set(G__39640_39688,"showAbsoluteTime",false);

goog.object.set(G__39640_39688,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_39687);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__39641 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__39641,"data",(function (){var or__4002__auto__ = data;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__39641;
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

var last_reload_timestamp_39689 = cljs.core.atom.call(null,(0));
var promise_chain_39690 = (new goog.Promise(((function (last_reload_timestamp_39689){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_39689))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_39689,promise_chain_39690){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__3991__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_39689) < ts);
if(and__3991__auto__){
return ts;
} else {
return and__3991__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_39689,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_39690.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__39642 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__39643 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__39643;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__39642,_STAR_inline_code_message_max_column_STAR__temp_val__39643,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690){
return (function (){
var seq__39644 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__39645 = null;
var count__39646 = (0);
var i__39647 = (0);
while(true){
if((i__39647 < count__39646)){
var w = cljs.core._nth.call(null,chunk__39645,i__39647);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__39691 = seq__39644;
var G__39692 = chunk__39645;
var G__39693 = count__39646;
var G__39694 = (i__39647 + (1));
seq__39644 = G__39691;
chunk__39645 = G__39692;
count__39646 = G__39693;
i__39647 = G__39694;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39644);
if(temp__5720__auto__){
var seq__39644__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39644__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39644__$1);
var G__39695 = cljs.core.chunk_rest.call(null,seq__39644__$1);
var G__39696 = c__4421__auto__;
var G__39697 = cljs.core.count.call(null,c__4421__auto__);
var G__39698 = (0);
seq__39644 = G__39695;
chunk__39645 = G__39696;
count__39646 = G__39697;
i__39647 = G__39698;
continue;
} else {
var w = cljs.core.first.call(null,seq__39644__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__39699 = cljs.core.next.call(null,seq__39644__$1);
var G__39700 = null;
var G__39701 = (0);
var G__39702 = (0);
seq__39644 = G__39699;
chunk__39645 = G__39700;
count__39646 = G__39701;
i__39647 = G__39702;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__39642,_STAR_inline_code_message_max_column_STAR__temp_val__39643,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__39642;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_39690.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__39648 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__39649 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__39649;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__39648;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690))
);
} else {
return promise_chain_39690.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_39689,promise_chain_39690))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_39689,promise_chain_39690))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
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
var and__3991__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3991__auto__){
var and__3991__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3991__auto____$1){
var or__4002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
var or__4002__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4002__auto____$2)){
return or__4002__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4607__auto__ = [];
var len__4601__auto___39703 = arguments.length;
var i__4602__auto___39704 = (0);
while(true){
if((i__4602__auto___39704 < len__4601__auto___39703)){
args__4607__auto__.push((arguments[i__4602__auto___39704]));

var G__39705 = (i__4602__auto___39704 + (1));
i__4602__auto___39704 = G__39705;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((1) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4608__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__39652){
var vec__39653 = p__39652;
var n = cljs.core.nth.call(null,vec__39653,(0),null);
var mdata = cljs.core.nth.call(null,vec__39653,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__39656 = cljs.core.seq.call(null,hooks);
var chunk__39657 = null;
var count__39658 = (0);
var i__39659 = (0);
while(true){
if((i__39659 < count__39658)){
var vec__39666 = cljs.core._nth.call(null,chunk__39657,i__39659);
var n = cljs.core.nth.call(null,vec__39666,(0),null);
var f = cljs.core.nth.call(null,vec__39666,(1),null);
var temp__5718__auto___39706 = cljs.core.reduce.call(null,((function (seq__39656,chunk__39657,count__39658,i__39659,vec__39666,n,f,hooks){
return (function (p1__39634_SHARP_,p2__39635_SHARP_){
if(cljs.core.truth_(p1__39634_SHARP_)){
return goog.object.get(p1__39634_SHARP_,p2__39635_SHARP_);
} else {
return null;
}
});})(seq__39656,chunk__39657,count__39658,i__39659,vec__39666,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___39706)){
var hook_39707 = temp__5718__auto___39706;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_39707,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__39708 = seq__39656;
var G__39709 = chunk__39657;
var G__39710 = count__39658;
var G__39711 = (i__39659 + (1));
seq__39656 = G__39708;
chunk__39657 = G__39709;
count__39658 = G__39710;
i__39659 = G__39711;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39656);
if(temp__5720__auto__){
var seq__39656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39656__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39656__$1);
var G__39712 = cljs.core.chunk_rest.call(null,seq__39656__$1);
var G__39713 = c__4421__auto__;
var G__39714 = cljs.core.count.call(null,c__4421__auto__);
var G__39715 = (0);
seq__39656 = G__39712;
chunk__39657 = G__39713;
count__39658 = G__39714;
i__39659 = G__39715;
continue;
} else {
var vec__39669 = cljs.core.first.call(null,seq__39656__$1);
var n = cljs.core.nth.call(null,vec__39669,(0),null);
var f = cljs.core.nth.call(null,vec__39669,(1),null);
var temp__5718__auto___39716 = cljs.core.reduce.call(null,((function (seq__39656,chunk__39657,count__39658,i__39659,vec__39669,n,f,seq__39656__$1,temp__5720__auto__,hooks){
return (function (p1__39634_SHARP_,p2__39635_SHARP_){
if(cljs.core.truth_(p1__39634_SHARP_)){
return goog.object.get(p1__39634_SHARP_,p2__39635_SHARP_);
} else {
return null;
}
});})(seq__39656,chunk__39657,count__39658,i__39659,vec__39669,n,f,seq__39656__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___39716)){
var hook_39717 = temp__5718__auto___39716;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_39717,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__39718 = cljs.core.next.call(null,seq__39656__$1);
var G__39719 = null;
var G__39720 = (0);
var G__39721 = (0);
seq__39656 = G__39718;
chunk__39657 = G__39719;
count__39658 = G__39720;
i__39659 = G__39721;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq39650){
var G__39651 = cljs.core.first.call(null,seq39650);
var seq39650__$1 = cljs.core.next.call(null,seq39650);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39651,seq39650__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39672){
var vec__39673 = p__39672;
var k = cljs.core.nth.call(null,vec__39673,(0),null);
var v = cljs.core.nth.call(null,vec__39673,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__39636_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__39636_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__39636_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__39637_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__39637_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3991__auto__ = (!(figwheel.core.load_warninged_code));
if(and__3991__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3991__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__39638_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__39638_SHARP_);
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

var seq__39676_39722 = cljs.core.seq.call(null,to_reload);
var chunk__39677_39723 = null;
var count__39678_39724 = (0);
var i__39679_39725 = (0);
while(true){
if((i__39679_39725 < count__39678_39724)){
var ns_39726 = cljs.core._nth.call(null,chunk__39677_39723,i__39679_39725);
goog.require(cljs.core.name.call(null,ns_39726),true);


var G__39727 = seq__39676_39722;
var G__39728 = chunk__39677_39723;
var G__39729 = count__39678_39724;
var G__39730 = (i__39679_39725 + (1));
seq__39676_39722 = G__39727;
chunk__39677_39723 = G__39728;
count__39678_39724 = G__39729;
i__39679_39725 = G__39730;
continue;
} else {
var temp__5720__auto___39731 = cljs.core.seq.call(null,seq__39676_39722);
if(temp__5720__auto___39731){
var seq__39676_39732__$1 = temp__5720__auto___39731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39676_39732__$1)){
var c__4421__auto___39733 = cljs.core.chunk_first.call(null,seq__39676_39732__$1);
var G__39734 = cljs.core.chunk_rest.call(null,seq__39676_39732__$1);
var G__39735 = c__4421__auto___39733;
var G__39736 = cljs.core.count.call(null,c__4421__auto___39733);
var G__39737 = (0);
seq__39676_39722 = G__39734;
chunk__39677_39723 = G__39735;
count__39678_39724 = G__39736;
i__39679_39725 = G__39737;
continue;
} else {
var ns_39738 = cljs.core.first.call(null,seq__39676_39732__$1);
goog.require(cljs.core.name.call(null,ns_39738),true);


var G__39739 = cljs.core.next.call(null,seq__39676_39732__$1);
var G__39740 = null;
var G__39741 = (0);
var G__39742 = (0);
seq__39676_39722 = G__39739;
chunk__39677_39723 = G__39740;
count__39678_39724 = G__39741;
i__39679_39725 = G__39742;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_39743 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
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
figwheel.repl.after_reloads(after_reload_fn_39743);
} else {
setTimeout(after_reload_fn_39743,(100));
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

var seq__39680 = cljs.core.seq.call(null,warnings);
var chunk__39681 = null;
var count__39682 = (0);
var i__39683 = (0);
while(true){
if((i__39683 < count__39682)){
var warning = cljs.core._nth.call(null,chunk__39681,i__39683);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__39744 = seq__39680;
var G__39745 = chunk__39681;
var G__39746 = count__39682;
var G__39747 = (i__39683 + (1));
seq__39680 = G__39744;
chunk__39681 = G__39745;
count__39682 = G__39746;
i__39683 = G__39747;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39680);
if(temp__5720__auto__){
var seq__39680__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39680__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39680__$1);
var G__39748 = cljs.core.chunk_rest.call(null,seq__39680__$1);
var G__39749 = c__4421__auto__;
var G__39750 = cljs.core.count.call(null,c__4421__auto__);
var G__39751 = (0);
seq__39680 = G__39748;
chunk__39681 = G__39749;
count__39682 = G__39750;
i__39683 = G__39751;
continue;
} else {
var warning = cljs.core.first.call(null,seq__39680__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__39752 = cljs.core.next.call(null,seq__39680__$1);
var G__39753 = null;
var G__39754 = (0);
var G__39755 = (0);
seq__39680 = G__39752;
chunk__39681 = G__39753;
count__39682 = G__39754;
i__39683 = G__39755;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__39684){
var map__39685 = p__39684;
var map__39685__$1 = (((((!((map__39685 == null))))?(((((map__39685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39685):map__39685);
var exception_data = map__39685__$1;
var file = cljs.core.get.call(null,map__39685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__39685__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39685__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__39685,map__39685__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__39685,map__39685__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__39685,map__39685__$1,exception_data,file,type,message){
return (function (p1__39639_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__39639_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__39685,map__39685__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__4002__auto__ = type;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
