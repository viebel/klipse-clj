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
return (function (p1__37231_SHARP_){
var k = f.call(null,p1__37231_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37232){
var vec__37233 = p__37232;
var k = cljs.core.nth.call(null,vec__37233,(0),null);
var v = cljs.core.nth.call(null,vec__37233,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__19138__auto__ = [];
var len__19128__auto___37237 = arguments.length;
var i__19129__auto___37238 = (0);
while(true){
if((i__19129__auto___37238 < len__19128__auto___37237)){
args__19138__auto__.push((arguments[i__19129__auto___37238]));

var G__37239 = (i__19129__auto___37238 + (1));
i__19129__auto___37238 = G__37239;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((0) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__19139__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq37236){
var self__19114__auto__ = this;
return self__19114__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37236));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__37242){
var map__37243 = p__37242;
var map__37243__$1 = (((((!((map__37243 == null))))?(((((map__37243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37243):map__37243);
var message = cljs.core.get.call(null,map__37243__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__37243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__37243,map__37243__$1,message,column){
return (function (p1__37241_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37241_SHARP_], null)));
});})(map__37243,map__37243__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__37243,map__37243__$1,message,column){
return (function (p1__37240_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__37240_SHARP_);
});})(map__37243,map__37243__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__37246){
var map__37247 = p__37246;
var map__37247__$1 = (((((!((map__37247 == null))))?(((((map__37247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37247):map__37247);
var message_data = map__37247__$1;
var message = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__37247__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__37249 = file_excerpt;
var map__37249__$1 = (((((!((map__37249 == null))))?(((((map__37249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37249):map__37249);
var start_line = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__37249,map__37249__$1,start_line,path,excerpt,map__37247,map__37247__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__37249,map__37249__$1,start_line,path,excerpt,map__37247,map__37247__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__37250 = cljs.core.split_with.call(null,((function (map__37249,map__37249__$1,start_line,path,excerpt,lines,map__37247,map__37247__$1,message_data,message,line,column,file_excerpt){
return (function (p1__37245_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__37245_SHARP_));
});})(map__37249,map__37249__$1,start_line,path,excerpt,lines,map__37247,map__37247__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__37250,(0),null);
var end = cljs.core.nth.call(null,vec__37250,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__37254){
var map__37255 = p__37254;
var map__37255__$1 = (((((!((map__37255 == null))))?(((((map__37255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37255):map__37255);
var file = cljs.core.get.call(null,map__37255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37255__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37255__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37257 = "";
var G__37257__$1 = (cljs.core.truth_(file)?[G__37257,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37257);
var G__37257__$2 = (cljs.core.truth_(line)?[G__37257__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37257__$1);
if(cljs.core.truth_((function (){var and__17804__auto__ = line;
if(cljs.core.truth_(and__17804__auto__)){
return column;
} else {
return and__17804__auto__;
}
})())){
return [G__37257__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37257__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_37311 = (new goog.debug.Console());
var G__37264_37312 = c_37311.getFormatter();
goog.object.set(G__37264_37312,"showAbsoluteTime",false);

goog.object.set(G__37264_37312,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_37311);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__37265 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__37265,"data",(function (){var or__17819__auto__ = data;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__37265;
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

var last_reload_timestamp_37313 = cljs.core.atom.call(null,(0));
var promise_chain_37314 = (new goog.Promise(((function (last_reload_timestamp_37313){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_37313))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_37313,promise_chain_37314){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__17804__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_37313) < ts);
if(and__17804__auto__){
return ts;
} else {
return and__17804__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_37313,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_37314.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__37266 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__37267 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__37267;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__37266,_STAR_inline_code_message_max_column_STAR__temp_val__37267,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314){
return (function (){
var seq__37268 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__37269 = null;
var count__37270 = (0);
var i__37271 = (0);
while(true){
if((i__37271 < count__37270)){
var w = cljs.core._nth.call(null,chunk__37269,i__37271);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__37315 = seq__37268;
var G__37316 = chunk__37269;
var G__37317 = count__37270;
var G__37318 = (i__37271 + (1));
seq__37268 = G__37315;
chunk__37269 = G__37316;
count__37270 = G__37317;
i__37271 = G__37318;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37268);
if(temp__5720__auto__){
var seq__37268__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37268__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__37268__$1);
var G__37319 = cljs.core.chunk_rest.call(null,seq__37268__$1);
var G__37320 = c__18776__auto__;
var G__37321 = cljs.core.count.call(null,c__18776__auto__);
var G__37322 = (0);
seq__37268 = G__37319;
chunk__37269 = G__37320;
count__37270 = G__37321;
i__37271 = G__37322;
continue;
} else {
var w = cljs.core.first.call(null,seq__37268__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__37323 = cljs.core.next.call(null,seq__37268__$1);
var G__37324 = null;
var G__37325 = (0);
var G__37326 = (0);
seq__37268 = G__37323;
chunk__37269 = G__37324;
count__37270 = G__37325;
i__37271 = G__37326;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__37266,_STAR_inline_code_message_max_column_STAR__temp_val__37267,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__37266;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_37314.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__37272 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__37273 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__37273;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__37272;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314))
);
} else {
return promise_chain_37314.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_37313,promise_chain_37314))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_37313,promise_chain_37314))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__17819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var or__17819__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__17819__auto____$1)){
return or__17819__auto____$1;
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
var and__17804__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__17804__auto__){
var and__17804__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__17804__auto____$1){
var or__17819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var or__17819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__17819__auto____$1)){
return or__17819__auto____$1;
} else {
var or__17819__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__17819__auto____$2)){
return or__17819__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__17804__auto____$1;
}
} else {
return and__17804__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__19138__auto__ = [];
var len__19128__auto___37327 = arguments.length;
var i__19129__auto___37328 = (0);
while(true){
if((i__19129__auto___37328 < len__19128__auto___37327)){
args__19138__auto__.push((arguments[i__19129__auto___37328]));

var G__37329 = (i__19129__auto___37328 + (1));
i__19129__auto___37328 = G__37329;
continue;
} else {
}
break;
}

var argseq__19139__auto__ = ((((1) < args__19138__auto__.length))?(new cljs.core.IndexedSeq(args__19138__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19139__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__37276){
var vec__37277 = p__37276;
var n = cljs.core.nth.call(null,vec__37277,(0),null);
var mdata = cljs.core.nth.call(null,vec__37277,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__37280 = cljs.core.seq.call(null,hooks);
var chunk__37281 = null;
var count__37282 = (0);
var i__37283 = (0);
while(true){
if((i__37283 < count__37282)){
var vec__37290 = cljs.core._nth.call(null,chunk__37281,i__37283);
var n = cljs.core.nth.call(null,vec__37290,(0),null);
var f = cljs.core.nth.call(null,vec__37290,(1),null);
var temp__5718__auto___37330 = cljs.core.reduce.call(null,((function (seq__37280,chunk__37281,count__37282,i__37283,vec__37290,n,f,hooks){
return (function (p1__37258_SHARP_,p2__37259_SHARP_){
if(cljs.core.truth_(p1__37258_SHARP_)){
return goog.object.get(p1__37258_SHARP_,p2__37259_SHARP_);
} else {
return null;
}
});})(seq__37280,chunk__37281,count__37282,i__37283,vec__37290,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___37330)){
var hook_37331 = temp__5718__auto___37330;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_37331,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__37332 = seq__37280;
var G__37333 = chunk__37281;
var G__37334 = count__37282;
var G__37335 = (i__37283 + (1));
seq__37280 = G__37332;
chunk__37281 = G__37333;
count__37282 = G__37334;
i__37283 = G__37335;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37280);
if(temp__5720__auto__){
var seq__37280__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37280__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__37280__$1);
var G__37336 = cljs.core.chunk_rest.call(null,seq__37280__$1);
var G__37337 = c__18776__auto__;
var G__37338 = cljs.core.count.call(null,c__18776__auto__);
var G__37339 = (0);
seq__37280 = G__37336;
chunk__37281 = G__37337;
count__37282 = G__37338;
i__37283 = G__37339;
continue;
} else {
var vec__37293 = cljs.core.first.call(null,seq__37280__$1);
var n = cljs.core.nth.call(null,vec__37293,(0),null);
var f = cljs.core.nth.call(null,vec__37293,(1),null);
var temp__5718__auto___37340 = cljs.core.reduce.call(null,((function (seq__37280,chunk__37281,count__37282,i__37283,vec__37293,n,f,seq__37280__$1,temp__5720__auto__,hooks){
return (function (p1__37258_SHARP_,p2__37259_SHARP_){
if(cljs.core.truth_(p1__37258_SHARP_)){
return goog.object.get(p1__37258_SHARP_,p2__37259_SHARP_);
} else {
return null;
}
});})(seq__37280,chunk__37281,count__37282,i__37283,vec__37293,n,f,seq__37280__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___37340)){
var hook_37341 = temp__5718__auto___37340;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_37341,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__37342 = cljs.core.next.call(null,seq__37280__$1);
var G__37343 = null;
var G__37344 = (0);
var G__37345 = (0);
seq__37280 = G__37342;
chunk__37281 = G__37343;
count__37282 = G__37344;
i__37283 = G__37345;
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
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq37274){
var G__37275 = cljs.core.first.call(null,seq37274);
var seq37274__$1 = cljs.core.next.call(null,seq37274);
var self__19113__auto__ = this;
return self__19113__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37275,seq37274__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__37296){
var vec__37297 = p__37296;
var k = cljs.core.nth.call(null,vec__37297,(0),null);
var v = cljs.core.nth.call(null,vec__37297,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__37260_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__37260_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__37260_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__37261_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__37261_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__17804__auto__ = (!(figwheel.core.load_warninged_code));
if(and__17804__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__17804__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__37262_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__37262_SHARP_);
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

var seq__37300_37346 = cljs.core.seq.call(null,to_reload);
var chunk__37301_37347 = null;
var count__37302_37348 = (0);
var i__37303_37349 = (0);
while(true){
if((i__37303_37349 < count__37302_37348)){
var ns_37350 = cljs.core._nth.call(null,chunk__37301_37347,i__37303_37349);
goog.require(cljs.core.name.call(null,ns_37350),true);


var G__37351 = seq__37300_37346;
var G__37352 = chunk__37301_37347;
var G__37353 = count__37302_37348;
var G__37354 = (i__37303_37349 + (1));
seq__37300_37346 = G__37351;
chunk__37301_37347 = G__37352;
count__37302_37348 = G__37353;
i__37303_37349 = G__37354;
continue;
} else {
var temp__5720__auto___37355 = cljs.core.seq.call(null,seq__37300_37346);
if(temp__5720__auto___37355){
var seq__37300_37356__$1 = temp__5720__auto___37355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37300_37356__$1)){
var c__18776__auto___37357 = cljs.core.chunk_first.call(null,seq__37300_37356__$1);
var G__37358 = cljs.core.chunk_rest.call(null,seq__37300_37356__$1);
var G__37359 = c__18776__auto___37357;
var G__37360 = cljs.core.count.call(null,c__18776__auto___37357);
var G__37361 = (0);
seq__37300_37346 = G__37358;
chunk__37301_37347 = G__37359;
count__37302_37348 = G__37360;
i__37303_37349 = G__37361;
continue;
} else {
var ns_37362 = cljs.core.first.call(null,seq__37300_37356__$1);
goog.require(cljs.core.name.call(null,ns_37362),true);


var G__37363 = cljs.core.next.call(null,seq__37300_37356__$1);
var G__37364 = null;
var G__37365 = (0);
var G__37366 = (0);
seq__37300_37346 = G__37363;
chunk__37301_37347 = G__37364;
count__37302_37348 = G__37365;
i__37303_37349 = G__37366;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_37367 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
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
figwheel.repl.after_reloads(after_reload_fn_37367);
} else {
setTimeout(after_reload_fn_37367,(100));
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

var seq__37304 = cljs.core.seq.call(null,warnings);
var chunk__37305 = null;
var count__37306 = (0);
var i__37307 = (0);
while(true){
if((i__37307 < count__37306)){
var warning = cljs.core._nth.call(null,chunk__37305,i__37307);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__37368 = seq__37304;
var G__37369 = chunk__37305;
var G__37370 = count__37306;
var G__37371 = (i__37307 + (1));
seq__37304 = G__37368;
chunk__37305 = G__37369;
count__37306 = G__37370;
i__37307 = G__37371;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37304);
if(temp__5720__auto__){
var seq__37304__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37304__$1)){
var c__18776__auto__ = cljs.core.chunk_first.call(null,seq__37304__$1);
var G__37372 = cljs.core.chunk_rest.call(null,seq__37304__$1);
var G__37373 = c__18776__auto__;
var G__37374 = cljs.core.count.call(null,c__18776__auto__);
var G__37375 = (0);
seq__37304 = G__37372;
chunk__37305 = G__37373;
count__37306 = G__37374;
i__37307 = G__37375;
continue;
} else {
var warning = cljs.core.first.call(null,seq__37304__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__37376 = cljs.core.next.call(null,seq__37304__$1);
var G__37377 = null;
var G__37378 = (0);
var G__37379 = (0);
seq__37304 = G__37376;
chunk__37305 = G__37377;
count__37306 = G__37378;
i__37307 = G__37379;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__37308){
var map__37309 = p__37308;
var map__37309__$1 = (((((!((map__37309 == null))))?(((((map__37309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37309):map__37309);
var exception_data = map__37309__$1;
var file = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__37309,map__37309__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__37309,map__37309__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__37309,map__37309__$1,exception_data,file,type,message){
return (function (p1__37263_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__37263_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__37309,map__37309__$1,exception_data,file,type,message))
);

goog.log.info(figwheel.core.logger,"Compile Exception");

if(cljs.core.truth_((function (){var or__17819__auto__ = type;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
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
