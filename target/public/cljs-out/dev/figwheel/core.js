// Compiled by ClojureScript 1.10.238 {}
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
return (function (p1__71259_SHARP_){
var k = f.call(null,p1__71259_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__71260){
var vec__71261 = p__71260;
var k = cljs.core.nth.call(null,vec__71261,(0),null);
var v = cljs.core.nth.call(null,vec__71261,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___71265 = arguments.length;
var i__4500__auto___71266 = (0);
while(true){
if((i__4500__auto___71266 < len__4499__auto___71265)){
args__4502__auto__.push((arguments[i__4500__auto___71266]));

var G__71267 = (i__4500__auto___71266 + (1));
i__4500__auto___71266 = G__71267;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq71264){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71264));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__71270){
var map__71271 = p__71270;
var map__71271__$1 = ((((!((map__71271 == null)))?(((((map__71271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71271):map__71271);
var message = cljs.core.get.call(null,map__71271__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__71271__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__71271,map__71271__$1,message,column){
return (function (p1__71269_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71269_SHARP_], null)));
});})(map__71271,map__71271__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__71271,map__71271__$1,message,column){
return (function (p1__71268_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__71268_SHARP_);
});})(map__71271,map__71271__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__71274){
var map__71275 = p__71274;
var map__71275__$1 = ((((!((map__71275 == null)))?(((((map__71275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71275):map__71275);
var message_data = map__71275__$1;
var message = cljs.core.get.call(null,map__71275__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__71275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__71275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__71275__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__71277 = file_excerpt;
var map__71277__$1 = ((((!((map__71277 == null)))?(((((map__71277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71277):map__71277);
var start_line = cljs.core.get.call(null,map__71277__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__71277__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__71277__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__71277,map__71277__$1,start_line,path,excerpt,map__71275,map__71275__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__71277,map__71277__$1,start_line,path,excerpt,map__71275,map__71275__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__71278 = cljs.core.split_with.call(null,((function (map__71277,map__71277__$1,start_line,path,excerpt,lines,map__71275,map__71275__$1,message_data,message,line,column,file_excerpt){
return (function (p1__71273_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__71273_SHARP_));
});})(map__71277,map__71277__$1,start_line,path,excerpt,lines,map__71275,map__71275__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__71278,(0),null);
var end = cljs.core.nth.call(null,vec__71278,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__71282){
var map__71283 = p__71282;
var map__71283__$1 = ((((!((map__71283 == null)))?(((((map__71283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71283):map__71283);
var file = cljs.core.get.call(null,map__71283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__71283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__71283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__71285 = "";
var G__71285__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71285),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__71285);
var G__71285__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71285__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__71285__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71285__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__71285__$2;
}
});
if(typeof figwheel.core.logger !== 'undefined'){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_71331 = (new goog.debug.Console());
var G__71292_71332 = c_71331.getFormatter();
goog.object.set(G__71292_71332,"showAbsoluteTime",false);

goog.object.set(G__71292_71332,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_71331);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if(typeof figwheel.core.log_console !== 'undefined'){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = ((((typeof document !== 'undefined') && (typeof document.body !== 'undefined')))?document.body:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if(typeof figwheel.core.listener_key_map !== 'undefined'){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
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
return figwheel.core.event_target.dispatchEvent((function (){var G__71293 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__71293,"data",(function (){var or__3922__auto__ = data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__71293;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
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

if(typeof figwheel.core.state !== 'undefined'){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && (!((goog.global.document == null))));
});

var last_reload_timestamp_71333 = cljs.core.atom.call(null,(0));
var promise_chain_71334 = (new goog.Promise(((function (last_reload_timestamp_71333){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_71333))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_71333,promise_chain_71334){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3911__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_71333) < ts);
if(and__3911__auto__){
return ts;
} else {
return and__3911__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_71333,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_71334.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_71294 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_71294,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334){
return (function (){
var seq__71295 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__71296 = null;
var count__71297 = (0);
var i__71298 = (0);
while(true){
if((i__71298 < count__71297)){
var w = cljs.core._nth.call(null,chunk__71296,i__71298);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__71335 = seq__71295;
var G__71336 = chunk__71296;
var G__71337 = count__71297;
var G__71338 = (i__71298 + (1));
seq__71295 = G__71335;
chunk__71296 = G__71336;
count__71297 = G__71337;
i__71298 = G__71338;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71295);
if(temp__5457__auto__){
var seq__71295__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71295__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__71295__$1);
var G__71339 = cljs.core.chunk_rest.call(null,seq__71295__$1);
var G__71340 = c__4319__auto__;
var G__71341 = cljs.core.count.call(null,c__4319__auto__);
var G__71342 = (0);
seq__71295 = G__71339;
chunk__71296 = G__71340;
count__71297 = G__71341;
i__71298 = G__71342;
continue;
} else {
var w = cljs.core.first.call(null,seq__71295__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__71343 = cljs.core.next.call(null,seq__71295__$1);
var G__71344 = null;
var G__71345 = (0);
var G__71346 = (0);
seq__71295 = G__71343;
chunk__71296 = G__71344;
count__71297 = G__71345;
i__71298 = G__71346;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_71294,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_71294;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_71334.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334){
return (function (){
var _STAR_inline_code_message_max_column_STAR_71299 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_71299;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334))
);
} else {
return promise_chain_71334.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_71333,promise_chain_71334))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_71333,promise_chain_71334))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
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
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__3911__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__3911__auto____$1){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4502__auto__ = [];
var len__4499__auto___71347 = arguments.length;
var i__4500__auto___71348 = (0);
while(true){
if((i__4500__auto___71348 < len__4499__auto___71347)){
args__4502__auto__.push((arguments[i__4500__auto___71348]));

var G__71349 = (i__4500__auto___71348 + (1));
i__4500__auto___71348 = G__71349;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__71302){
var vec__71303 = p__71302;
var n = cljs.core.nth.call(null,vec__71303,(0),null);
var mdata = cljs.core.nth.call(null,vec__71303,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__71306 = cljs.core.seq.call(null,hooks);
var chunk__71307 = null;
var count__71308 = (0);
var i__71309 = (0);
while(true){
if((i__71309 < count__71308)){
var vec__71310 = cljs.core._nth.call(null,chunk__71307,i__71309);
var n = cljs.core.nth.call(null,vec__71310,(0),null);
var f = cljs.core.nth.call(null,vec__71310,(1),null);
var temp__5455__auto___71350 = cljs.core.reduce.call(null,((function (seq__71306,chunk__71307,count__71308,i__71309,vec__71310,n,f,hooks){
return (function (p1__71286_SHARP_,p2__71287_SHARP_){
if(cljs.core.truth_(p1__71286_SHARP_)){
return goog.object.get(p1__71286_SHARP_,p2__71287_SHARP_);
} else {
return null;
}
});})(seq__71306,chunk__71307,count__71308,i__71309,vec__71310,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___71350)){
var hook_71351 = temp__5455__auto___71350;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_71351,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__71352 = seq__71306;
var G__71353 = chunk__71307;
var G__71354 = count__71308;
var G__71355 = (i__71309 + (1));
seq__71306 = G__71352;
chunk__71307 = G__71353;
count__71308 = G__71354;
i__71309 = G__71355;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71306);
if(temp__5457__auto__){
var seq__71306__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71306__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__71306__$1);
var G__71356 = cljs.core.chunk_rest.call(null,seq__71306__$1);
var G__71357 = c__4319__auto__;
var G__71358 = cljs.core.count.call(null,c__4319__auto__);
var G__71359 = (0);
seq__71306 = G__71356;
chunk__71307 = G__71357;
count__71308 = G__71358;
i__71309 = G__71359;
continue;
} else {
var vec__71313 = cljs.core.first.call(null,seq__71306__$1);
var n = cljs.core.nth.call(null,vec__71313,(0),null);
var f = cljs.core.nth.call(null,vec__71313,(1),null);
var temp__5455__auto___71360 = cljs.core.reduce.call(null,((function (seq__71306,chunk__71307,count__71308,i__71309,vec__71313,n,f,seq__71306__$1,temp__5457__auto__,hooks){
return (function (p1__71286_SHARP_,p2__71287_SHARP_){
if(cljs.core.truth_(p1__71286_SHARP_)){
return goog.object.get(p1__71286_SHARP_,p2__71287_SHARP_);
} else {
return null;
}
});})(seq__71306,chunk__71307,count__71308,i__71309,vec__71313,n,f,seq__71306__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___71360)){
var hook_71361 = temp__5455__auto___71360;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_71361,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__71362 = cljs.core.next.call(null,seq__71306__$1);
var G__71363 = null;
var G__71364 = (0);
var G__71365 = (0);
seq__71306 = G__71362;
chunk__71307 = G__71363;
count__71308 = G__71364;
i__71309 = G__71365;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq71300){
var G__71301 = cljs.core.first.call(null,seq71300);
var seq71300__$1 = cljs.core.next.call(null,seq71300);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71301,seq71300__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__71316){
var vec__71317 = p__71316;
var k = cljs.core.nth.call(null,vec__71317,(0),null);
var v = cljs.core.nth.call(null,vec__71317,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__71288_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__71288_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__71288_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__71289_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__71289_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3911__auto__ = !(figwheel.core.load_warninged_code);
if(and__3911__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3911__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__71290_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__71290_SHARP_);
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

var seq__71320_71366 = cljs.core.seq.call(null,to_reload);
var chunk__71321_71367 = null;
var count__71322_71368 = (0);
var i__71323_71369 = (0);
while(true){
if((i__71323_71369 < count__71322_71368)){
var ns_71370 = cljs.core._nth.call(null,chunk__71321_71367,i__71323_71369);
goog.require(cljs.core.name.call(null,ns_71370),true);


var G__71371 = seq__71320_71366;
var G__71372 = chunk__71321_71367;
var G__71373 = count__71322_71368;
var G__71374 = (i__71323_71369 + (1));
seq__71320_71366 = G__71371;
chunk__71321_71367 = G__71372;
count__71322_71368 = G__71373;
i__71323_71369 = G__71374;
continue;
} else {
var temp__5457__auto___71375 = cljs.core.seq.call(null,seq__71320_71366);
if(temp__5457__auto___71375){
var seq__71320_71376__$1 = temp__5457__auto___71375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71320_71376__$1)){
var c__4319__auto___71377 = cljs.core.chunk_first.call(null,seq__71320_71376__$1);
var G__71378 = cljs.core.chunk_rest.call(null,seq__71320_71376__$1);
var G__71379 = c__4319__auto___71377;
var G__71380 = cljs.core.count.call(null,c__4319__auto___71377);
var G__71381 = (0);
seq__71320_71366 = G__71378;
chunk__71321_71367 = G__71379;
count__71322_71368 = G__71380;
i__71323_71369 = G__71381;
continue;
} else {
var ns_71382 = cljs.core.first.call(null,seq__71320_71376__$1);
goog.require(cljs.core.name.call(null,ns_71382),true);


var G__71383 = cljs.core.next.call(null,seq__71320_71376__$1);
var G__71384 = null;
var G__71385 = (0);
var G__71386 = (0);
seq__71320_71366 = G__71383;
chunk__71321_71367 = G__71384;
count__71322_71368 = G__71385;
i__71323_71369 = G__71386;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_71387 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,to_reload))].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded))].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if(((typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined'))){
figwheel.repl.after_reloads(after_reload_fn_71387);
} else {
setTimeout(after_reload_fn_71387,(100));
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

var seq__71324 = cljs.core.seq.call(null,warnings);
var chunk__71325 = null;
var count__71326 = (0);
var i__71327 = (0);
while(true){
if((i__71327 < count__71326)){
var warning = cljs.core._nth.call(null,chunk__71325,i__71327);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__71388 = seq__71324;
var G__71389 = chunk__71325;
var G__71390 = count__71326;
var G__71391 = (i__71327 + (1));
seq__71324 = G__71388;
chunk__71325 = G__71389;
count__71326 = G__71390;
i__71327 = G__71391;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__71324);
if(temp__5457__auto__){
var seq__71324__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71324__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__71324__$1);
var G__71392 = cljs.core.chunk_rest.call(null,seq__71324__$1);
var G__71393 = c__4319__auto__;
var G__71394 = cljs.core.count.call(null,c__4319__auto__);
var G__71395 = (0);
seq__71324 = G__71392;
chunk__71325 = G__71393;
count__71326 = G__71394;
i__71327 = G__71395;
continue;
} else {
var warning = cljs.core.first.call(null,seq__71324__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__71396 = cljs.core.next.call(null,seq__71324__$1);
var G__71397 = null;
var G__71398 = (0);
var G__71399 = (0);
seq__71324 = G__71396;
chunk__71325 = G__71397;
count__71326 = G__71398;
i__71327 = G__71399;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__71328){
var map__71329 = p__71328;
var map__71329__$1 = ((((!((map__71329 == null)))?(((((map__71329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71329):map__71329);
var exception_data = map__71329__$1;
var file = cljs.core.get.call(null,map__71329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__71329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__71329__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__71329,map__71329__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__71329,map__71329__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__71329,map__71329__$1,exception_data,file,type,message){
return (function (p1__71291_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__71291_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__71329,map__71329__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__3922__auto__ = type;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return message;
}
})())){
goog.log.info(figwheel.core.logger,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))));
} else {
}

if(cljs.core.truth_(file)){
return goog.log.info(figwheel.core.logger,["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,exception_data))].join(''));
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
