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
return (function (p1__36791_SHARP_){
var k = f.call(null,p1__36791_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36792){
var vec__36793 = p__36792;
var k = cljs.core.nth.call(null,vec__36793,(0),null);
var v = cljs.core.nth.call(null,vec__36793,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36797 = arguments.length;
var i__4500__auto___36798 = (0);
while(true){
if((i__4500__auto___36798 < len__4499__auto___36797)){
args__4502__auto__.push((arguments[i__4500__auto___36798]));

var G__36799 = (i__4500__auto___36798 + (1));
i__4500__auto___36798 = G__36799;
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
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq36796){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36796));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__36802){
var map__36803 = p__36802;
var map__36803__$1 = ((((!((map__36803 == null)))?(((((map__36803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36803):map__36803);
var message = cljs.core.get.call(null,map__36803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__36803__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__36803,map__36803__$1,message,column){
return (function (p1__36801_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36801_SHARP_], null)));
});})(map__36803,map__36803__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__36803,map__36803__$1,message,column){
return (function (p1__36800_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__36800_SHARP_);
});})(map__36803,map__36803__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__36806){
var map__36807 = p__36806;
var map__36807__$1 = ((((!((map__36807 == null)))?(((((map__36807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36807):map__36807);
var message_data = map__36807__$1;
var message = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__36807__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__36809 = file_excerpt;
var map__36809__$1 = ((((!((map__36809 == null)))?(((((map__36809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36809):map__36809);
var start_line = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__36809__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__36809,map__36809__$1,start_line,path,excerpt,map__36807,map__36807__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__36809,map__36809__$1,start_line,path,excerpt,map__36807,map__36807__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__36810 = cljs.core.split_with.call(null,((function (map__36809,map__36809__$1,start_line,path,excerpt,lines,map__36807,map__36807__$1,message_data,message,line,column,file_excerpt){
return (function (p1__36805_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__36805_SHARP_));
});})(map__36809,map__36809__$1,start_line,path,excerpt,lines,map__36807,map__36807__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__36810,(0),null);
var end = cljs.core.nth.call(null,vec__36810,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__36814){
var map__36815 = p__36814;
var map__36815__$1 = ((((!((map__36815 == null)))?(((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36815):map__36815);
var file = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36817 = "";
var G__36817__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36817),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36817);
var G__36817__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36817__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36817__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36817__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36817__$2;
}
});
if(typeof figwheel.core.logger !== 'undefined'){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_36863 = (new goog.debug.Console());
var G__36824_36864 = c_36863.getFormatter();
goog.object.set(G__36824_36864,"showAbsoluteTime",false);

goog.object.set(G__36824_36864,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_36863);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__36825 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__36825,"data",(function (){var or__3922__auto__ = data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__36825;
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

var last_reload_timestamp_36865 = cljs.core.atom.call(null,(0));
var promise_chain_36866 = (new goog.Promise(((function (last_reload_timestamp_36865){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_36865))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_36865,promise_chain_36866){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3911__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_36865) < ts);
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
cljs.core.reset_BANG_.call(null,last_reload_timestamp_36865,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_36866.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_36826 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_36826,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866){
return (function (){
var seq__36827 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__36828 = null;
var count__36829 = (0);
var i__36830 = (0);
while(true){
if((i__36830 < count__36829)){
var w = cljs.core._nth.call(null,chunk__36828,i__36830);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__36867 = seq__36827;
var G__36868 = chunk__36828;
var G__36869 = count__36829;
var G__36870 = (i__36830 + (1));
seq__36827 = G__36867;
chunk__36828 = G__36868;
count__36829 = G__36869;
i__36830 = G__36870;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36827);
if(temp__5457__auto__){
var seq__36827__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36827__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36827__$1);
var G__36871 = cljs.core.chunk_rest.call(null,seq__36827__$1);
var G__36872 = c__4319__auto__;
var G__36873 = cljs.core.count.call(null,c__4319__auto__);
var G__36874 = (0);
seq__36827 = G__36871;
chunk__36828 = G__36872;
count__36829 = G__36873;
i__36830 = G__36874;
continue;
} else {
var w = cljs.core.first.call(null,seq__36827__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__36875 = cljs.core.next.call(null,seq__36827__$1);
var G__36876 = null;
var G__36877 = (0);
var G__36878 = (0);
seq__36827 = G__36875;
chunk__36828 = G__36876;
count__36829 = G__36877;
i__36830 = G__36878;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_36826,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_36826;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_36866.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866){
return (function (){
var _STAR_inline_code_message_max_column_STAR_36831 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_36831;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866))
);
} else {
return promise_chain_36866.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_36865,promise_chain_36866))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_36865,promise_chain_36866))
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
var len__4499__auto___36879 = arguments.length;
var i__4500__auto___36880 = (0);
while(true){
if((i__4500__auto___36880 < len__4499__auto___36879)){
args__4502__auto__.push((arguments[i__4500__auto___36880]));

var G__36881 = (i__4500__auto___36880 + (1));
i__4500__auto___36880 = G__36881;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__36834){
var vec__36835 = p__36834;
var n = cljs.core.nth.call(null,vec__36835,(0),null);
var mdata = cljs.core.nth.call(null,vec__36835,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__36838 = cljs.core.seq.call(null,hooks);
var chunk__36839 = null;
var count__36840 = (0);
var i__36841 = (0);
while(true){
if((i__36841 < count__36840)){
var vec__36842 = cljs.core._nth.call(null,chunk__36839,i__36841);
var n = cljs.core.nth.call(null,vec__36842,(0),null);
var f = cljs.core.nth.call(null,vec__36842,(1),null);
var temp__5455__auto___36882 = cljs.core.reduce.call(null,((function (seq__36838,chunk__36839,count__36840,i__36841,vec__36842,n,f,hooks){
return (function (p1__36818_SHARP_,p2__36819_SHARP_){
if(cljs.core.truth_(p1__36818_SHARP_)){
return goog.object.get(p1__36818_SHARP_,p2__36819_SHARP_);
} else {
return null;
}
});})(seq__36838,chunk__36839,count__36840,i__36841,vec__36842,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___36882)){
var hook_36883 = temp__5455__auto___36882;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_36883,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__36884 = seq__36838;
var G__36885 = chunk__36839;
var G__36886 = count__36840;
var G__36887 = (i__36841 + (1));
seq__36838 = G__36884;
chunk__36839 = G__36885;
count__36840 = G__36886;
i__36841 = G__36887;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36838);
if(temp__5457__auto__){
var seq__36838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36838__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36838__$1);
var G__36888 = cljs.core.chunk_rest.call(null,seq__36838__$1);
var G__36889 = c__4319__auto__;
var G__36890 = cljs.core.count.call(null,c__4319__auto__);
var G__36891 = (0);
seq__36838 = G__36888;
chunk__36839 = G__36889;
count__36840 = G__36890;
i__36841 = G__36891;
continue;
} else {
var vec__36845 = cljs.core.first.call(null,seq__36838__$1);
var n = cljs.core.nth.call(null,vec__36845,(0),null);
var f = cljs.core.nth.call(null,vec__36845,(1),null);
var temp__5455__auto___36892 = cljs.core.reduce.call(null,((function (seq__36838,chunk__36839,count__36840,i__36841,vec__36845,n,f,seq__36838__$1,temp__5457__auto__,hooks){
return (function (p1__36818_SHARP_,p2__36819_SHARP_){
if(cljs.core.truth_(p1__36818_SHARP_)){
return goog.object.get(p1__36818_SHARP_,p2__36819_SHARP_);
} else {
return null;
}
});})(seq__36838,chunk__36839,count__36840,i__36841,vec__36845,n,f,seq__36838__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___36892)){
var hook_36893 = temp__5455__auto___36892;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_36893,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__36894 = cljs.core.next.call(null,seq__36838__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36838 = G__36894;
chunk__36839 = G__36895;
count__36840 = G__36896;
i__36841 = G__36897;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq36832){
var G__36833 = cljs.core.first.call(null,seq36832);
var seq36832__$1 = cljs.core.next.call(null,seq36832);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36833,seq36832__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__36848){
var vec__36849 = p__36848;
var k = cljs.core.nth.call(null,vec__36849,(0),null);
var v = cljs.core.nth.call(null,vec__36849,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__36820_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__36820_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__36820_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__36821_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__36821_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3911__auto__ = !(figwheel.core.load_warninged_code);
if(and__3911__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3911__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__36822_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__36822_SHARP_);
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

var seq__36852_36898 = cljs.core.seq.call(null,to_reload);
var chunk__36853_36899 = null;
var count__36854_36900 = (0);
var i__36855_36901 = (0);
while(true){
if((i__36855_36901 < count__36854_36900)){
var ns_36902 = cljs.core._nth.call(null,chunk__36853_36899,i__36855_36901);
goog.require(cljs.core.name.call(null,ns_36902),true);


var G__36903 = seq__36852_36898;
var G__36904 = chunk__36853_36899;
var G__36905 = count__36854_36900;
var G__36906 = (i__36855_36901 + (1));
seq__36852_36898 = G__36903;
chunk__36853_36899 = G__36904;
count__36854_36900 = G__36905;
i__36855_36901 = G__36906;
continue;
} else {
var temp__5457__auto___36907 = cljs.core.seq.call(null,seq__36852_36898);
if(temp__5457__auto___36907){
var seq__36852_36908__$1 = temp__5457__auto___36907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36852_36908__$1)){
var c__4319__auto___36909 = cljs.core.chunk_first.call(null,seq__36852_36908__$1);
var G__36910 = cljs.core.chunk_rest.call(null,seq__36852_36908__$1);
var G__36911 = c__4319__auto___36909;
var G__36912 = cljs.core.count.call(null,c__4319__auto___36909);
var G__36913 = (0);
seq__36852_36898 = G__36910;
chunk__36853_36899 = G__36911;
count__36854_36900 = G__36912;
i__36855_36901 = G__36913;
continue;
} else {
var ns_36914 = cljs.core.first.call(null,seq__36852_36908__$1);
goog.require(cljs.core.name.call(null,ns_36914),true);


var G__36915 = cljs.core.next.call(null,seq__36852_36908__$1);
var G__36916 = null;
var G__36917 = (0);
var G__36918 = (0);
seq__36852_36898 = G__36915;
chunk__36853_36899 = G__36916;
count__36854_36900 = G__36917;
i__36855_36901 = G__36918;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_36919 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
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
figwheel.repl.after_reloads(after_reload_fn_36919);
} else {
setTimeout(after_reload_fn_36919,(100));
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

var seq__36856 = cljs.core.seq.call(null,warnings);
var chunk__36857 = null;
var count__36858 = (0);
var i__36859 = (0);
while(true){
if((i__36859 < count__36858)){
var warning = cljs.core._nth.call(null,chunk__36857,i__36859);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__36920 = seq__36856;
var G__36921 = chunk__36857;
var G__36922 = count__36858;
var G__36923 = (i__36859 + (1));
seq__36856 = G__36920;
chunk__36857 = G__36921;
count__36858 = G__36922;
i__36859 = G__36923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36856);
if(temp__5457__auto__){
var seq__36856__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36856__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36856__$1);
var G__36924 = cljs.core.chunk_rest.call(null,seq__36856__$1);
var G__36925 = c__4319__auto__;
var G__36926 = cljs.core.count.call(null,c__4319__auto__);
var G__36927 = (0);
seq__36856 = G__36924;
chunk__36857 = G__36925;
count__36858 = G__36926;
i__36859 = G__36927;
continue;
} else {
var warning = cljs.core.first.call(null,seq__36856__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__36928 = cljs.core.next.call(null,seq__36856__$1);
var G__36929 = null;
var G__36930 = (0);
var G__36931 = (0);
seq__36856 = G__36928;
chunk__36857 = G__36929;
count__36858 = G__36930;
i__36859 = G__36931;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__36860){
var map__36861 = p__36860;
var map__36861__$1 = ((((!((map__36861 == null)))?(((((map__36861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36861):map__36861);
var exception_data = map__36861__$1;
var file = cljs.core.get.call(null,map__36861__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__36861__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__36861__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__36861,map__36861__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__36861,map__36861__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__36861,map__36861__$1,exception_data,file,type,message){
return (function (p1__36823_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__36823_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__36861,map__36861__$1,exception_data,file,type,message))
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
