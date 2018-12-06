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
return (function (p1__154693_SHARP_){
var k = f.call(null,p1__154693_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__154694){
var vec__154695 = p__154694;
var k = cljs.core.nth.call(null,vec__154695,(0),null);
var v = cljs.core.nth.call(null,vec__154695,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___154699 = arguments.length;
var i__4500__auto___154700 = (0);
while(true){
if((i__4500__auto___154700 < len__4499__auto___154699)){
args__4502__auto__.push((arguments[i__4500__auto___154700]));

var G__154701 = (i__4500__auto___154700 + (1));
i__4500__auto___154700 = G__154701;
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
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq154698){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154698));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__154704){
var map__154705 = p__154704;
var map__154705__$1 = ((((!((map__154705 == null)))?(((((map__154705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__154705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154705):map__154705);
var message = cljs.core.get.call(null,map__154705__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__154705__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__154705,map__154705__$1,message,column){
return (function (p1__154703_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__154703_SHARP_], null)));
});})(map__154705,map__154705__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__154705,map__154705__$1,message,column){
return (function (p1__154702_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__154702_SHARP_);
});})(map__154705,map__154705__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__154708){
var map__154709 = p__154708;
var map__154709__$1 = ((((!((map__154709 == null)))?(((((map__154709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__154709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154709):map__154709);
var message_data = map__154709__$1;
var message = cljs.core.get.call(null,map__154709__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__154709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__154709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__154709__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__154711 = file_excerpt;
var map__154711__$1 = ((((!((map__154711 == null)))?(((((map__154711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__154711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154711):map__154711);
var start_line = cljs.core.get.call(null,map__154711__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__154711__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__154711__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__154711,map__154711__$1,start_line,path,excerpt,map__154709,map__154709__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__154711,map__154711__$1,start_line,path,excerpt,map__154709,map__154709__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__154712 = cljs.core.split_with.call(null,((function (map__154711,map__154711__$1,start_line,path,excerpt,lines,map__154709,map__154709__$1,message_data,message,line,column,file_excerpt){
return (function (p1__154707_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__154707_SHARP_));
});})(map__154711,map__154711__$1,start_line,path,excerpt,lines,map__154709,map__154709__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__154712,(0),null);
var end = cljs.core.nth.call(null,vec__154712,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__154716){
var map__154717 = p__154716;
var map__154717__$1 = ((((!((map__154717 == null)))?(((((map__154717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__154717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154717):map__154717);
var file = cljs.core.get.call(null,map__154717__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__154717__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__154717__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__154719 = "";
var G__154719__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__154719),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__154719);
var G__154719__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__154719__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__154719__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__154719__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__154719__$2;
}
});
if(typeof figwheel.core.logger !== 'undefined'){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_154765 = (new goog.debug.Console());
var G__154726_154766 = c_154765.getFormatter();
goog.object.set(G__154726_154766,"showAbsoluteTime",false);

goog.object.set(G__154726_154766,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_154765);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__154727 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__154727,"data",(function (){var or__3922__auto__ = data;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__154727;
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

var last_reload_timestamp_154767 = cljs.core.atom.call(null,(0));
var promise_chain_154768 = (new goog.Promise(((function (last_reload_timestamp_154767){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_154767))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_154767,promise_chain_154768){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__3911__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_154767) < ts);
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
cljs.core.reset_BANG_.call(null,last_reload_timestamp_154767,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_154768.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR_154728 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR_154728,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768){
return (function (){
var seq__154729 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__154730 = null;
var count__154731 = (0);
var i__154732 = (0);
while(true){
if((i__154732 < count__154731)){
var w = cljs.core._nth.call(null,chunk__154730,i__154732);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__154769 = seq__154729;
var G__154770 = chunk__154730;
var G__154771 = count__154731;
var G__154772 = (i__154732 + (1));
seq__154729 = G__154769;
chunk__154730 = G__154770;
count__154731 = G__154771;
i__154732 = G__154772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__154729);
if(temp__5457__auto__){
var seq__154729__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154729__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__154729__$1);
var G__154773 = cljs.core.chunk_rest.call(null,seq__154729__$1);
var G__154774 = c__4319__auto__;
var G__154775 = cljs.core.count.call(null,c__4319__auto__);
var G__154776 = (0);
seq__154729 = G__154773;
chunk__154730 = G__154774;
count__154731 = G__154775;
i__154732 = G__154776;
continue;
} else {
var w = cljs.core.first.call(null,seq__154729__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__154777 = cljs.core.next.call(null,seq__154729__$1);
var G__154778 = null;
var G__154779 = (0);
var G__154780 = (0);
seq__154729 = G__154777;
chunk__154730 = G__154778;
count__154731 = G__154779;
i__154732 = G__154780;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR_154728,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_154728;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_154768.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768){
return (function (){
var _STAR_inline_code_message_max_column_STAR_154733 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (132);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR_154733;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768))
);
} else {
return promise_chain_154768.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_154767,promise_chain_154768))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_154767,promise_chain_154768))
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
var len__4499__auto___154781 = arguments.length;
var i__4500__auto___154782 = (0);
while(true){
if((i__4500__auto___154782 < len__4499__auto___154781)){
args__4502__auto__.push((arguments[i__4500__auto___154782]));

var G__154783 = (i__4500__auto___154782 + (1));
i__4500__auto___154782 = G__154783;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__154736){
var vec__154737 = p__154736;
var n = cljs.core.nth.call(null,vec__154737,(0),null);
var mdata = cljs.core.nth.call(null,vec__154737,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__154740 = cljs.core.seq.call(null,hooks);
var chunk__154741 = null;
var count__154742 = (0);
var i__154743 = (0);
while(true){
if((i__154743 < count__154742)){
var vec__154744 = cljs.core._nth.call(null,chunk__154741,i__154743);
var n = cljs.core.nth.call(null,vec__154744,(0),null);
var f = cljs.core.nth.call(null,vec__154744,(1),null);
var temp__5455__auto___154784 = cljs.core.reduce.call(null,((function (seq__154740,chunk__154741,count__154742,i__154743,vec__154744,n,f,hooks){
return (function (p1__154720_SHARP_,p2__154721_SHARP_){
if(cljs.core.truth_(p1__154720_SHARP_)){
return goog.object.get(p1__154720_SHARP_,p2__154721_SHARP_);
} else {
return null;
}
});})(seq__154740,chunk__154741,count__154742,i__154743,vec__154744,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___154784)){
var hook_154785 = temp__5455__auto___154784;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_154785,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__154786 = seq__154740;
var G__154787 = chunk__154741;
var G__154788 = count__154742;
var G__154789 = (i__154743 + (1));
seq__154740 = G__154786;
chunk__154741 = G__154787;
count__154742 = G__154788;
i__154743 = G__154789;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__154740);
if(temp__5457__auto__){
var seq__154740__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154740__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__154740__$1);
var G__154790 = cljs.core.chunk_rest.call(null,seq__154740__$1);
var G__154791 = c__4319__auto__;
var G__154792 = cljs.core.count.call(null,c__4319__auto__);
var G__154793 = (0);
seq__154740 = G__154790;
chunk__154741 = G__154791;
count__154742 = G__154792;
i__154743 = G__154793;
continue;
} else {
var vec__154747 = cljs.core.first.call(null,seq__154740__$1);
var n = cljs.core.nth.call(null,vec__154747,(0),null);
var f = cljs.core.nth.call(null,vec__154747,(1),null);
var temp__5455__auto___154794 = cljs.core.reduce.call(null,((function (seq__154740,chunk__154741,count__154742,i__154743,vec__154747,n,f,seq__154740__$1,temp__5457__auto__,hooks){
return (function (p1__154720_SHARP_,p2__154721_SHARP_){
if(cljs.core.truth_(p1__154720_SHARP_)){
return goog.object.get(p1__154720_SHARP_,p2__154721_SHARP_);
} else {
return null;
}
});})(seq__154740,chunk__154741,count__154742,i__154743,vec__154747,n,f,seq__154740__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___154794)){
var hook_154795 = temp__5455__auto___154794;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_154795,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,hook_key))," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__154796 = cljs.core.next.call(null,seq__154740__$1);
var G__154797 = null;
var G__154798 = (0);
var G__154799 = (0);
seq__154740 = G__154796;
chunk__154741 = G__154797;
count__154742 = G__154798;
i__154743 = G__154799;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq154734){
var G__154735 = cljs.core.first.call(null,seq154734);
var seq154734__$1 = cljs.core.next.call(null,seq154734);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__154735,seq154734__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__154750){
var vec__154751 = p__154750;
var k = cljs.core.nth.call(null,vec__154751,(0),null);
var v = cljs.core.nth.call(null,vec__154751,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__154722_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__154722_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__154722_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__154723_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__154723_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__3911__auto__ = !(figwheel.core.load_warninged_code);
if(and__3911__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__3911__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__154724_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__154724_SHARP_);
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

var seq__154754_154800 = cljs.core.seq.call(null,to_reload);
var chunk__154755_154801 = null;
var count__154756_154802 = (0);
var i__154757_154803 = (0);
while(true){
if((i__154757_154803 < count__154756_154802)){
var ns_154804 = cljs.core._nth.call(null,chunk__154755_154801,i__154757_154803);
goog.require(cljs.core.name.call(null,ns_154804),true);


var G__154805 = seq__154754_154800;
var G__154806 = chunk__154755_154801;
var G__154807 = count__154756_154802;
var G__154808 = (i__154757_154803 + (1));
seq__154754_154800 = G__154805;
chunk__154755_154801 = G__154806;
count__154756_154802 = G__154807;
i__154757_154803 = G__154808;
continue;
} else {
var temp__5457__auto___154809 = cljs.core.seq.call(null,seq__154754_154800);
if(temp__5457__auto___154809){
var seq__154754_154810__$1 = temp__5457__auto___154809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154754_154810__$1)){
var c__4319__auto___154811 = cljs.core.chunk_first.call(null,seq__154754_154810__$1);
var G__154812 = cljs.core.chunk_rest.call(null,seq__154754_154810__$1);
var G__154813 = c__4319__auto___154811;
var G__154814 = cljs.core.count.call(null,c__4319__auto___154811);
var G__154815 = (0);
seq__154754_154800 = G__154812;
chunk__154755_154801 = G__154813;
count__154756_154802 = G__154814;
i__154757_154803 = G__154815;
continue;
} else {
var ns_154816 = cljs.core.first.call(null,seq__154754_154810__$1);
goog.require(cljs.core.name.call(null,ns_154816),true);


var G__154817 = cljs.core.next.call(null,seq__154754_154810__$1);
var G__154818 = null;
var G__154819 = (0);
var G__154820 = (0);
seq__154754_154800 = G__154817;
chunk__154755_154801 = G__154818;
count__154756_154802 = G__154819;
i__154757_154803 = G__154820;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_154821 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
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
figwheel.repl.after_reloads(after_reload_fn_154821);
} else {
setTimeout(after_reload_fn_154821,(100));
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

var seq__154758 = cljs.core.seq.call(null,warnings);
var chunk__154759 = null;
var count__154760 = (0);
var i__154761 = (0);
while(true){
if((i__154761 < count__154760)){
var warning = cljs.core._nth.call(null,chunk__154759,i__154761);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__154822 = seq__154758;
var G__154823 = chunk__154759;
var G__154824 = count__154760;
var G__154825 = (i__154761 + (1));
seq__154758 = G__154822;
chunk__154759 = G__154823;
count__154760 = G__154824;
i__154761 = G__154825;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__154758);
if(temp__5457__auto__){
var seq__154758__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154758__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__154758__$1);
var G__154826 = cljs.core.chunk_rest.call(null,seq__154758__$1);
var G__154827 = c__4319__auto__;
var G__154828 = cljs.core.count.call(null,c__4319__auto__);
var G__154829 = (0);
seq__154758 = G__154826;
chunk__154759 = G__154827;
count__154760 = G__154828;
i__154761 = G__154829;
continue;
} else {
var warning = cljs.core.first.call(null,seq__154758__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core.file_line_column.call(null,warning))].join(''));


var G__154830 = cljs.core.next.call(null,seq__154758__$1);
var G__154831 = null;
var G__154832 = (0);
var G__154833 = (0);
seq__154758 = G__154830;
chunk__154759 = G__154831;
count__154760 = G__154832;
i__154761 = G__154833;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__154762){
var map__154763 = p__154762;
var map__154763__$1 = ((((!((map__154763 == null)))?(((((map__154763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__154763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154763):map__154763);
var exception_data = map__154763__$1;
var file = cljs.core.get.call(null,map__154763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__154763__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__154763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__154763,map__154763__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__154763,map__154763__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__154763,map__154763__$1,exception_data,file,type,message){
return (function (p1__154725_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__154725_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__154763,map__154763__$1,exception_data,file,type,message))
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
