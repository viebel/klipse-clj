// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
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
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__52121_SHARP_){
var k = f.call(null,p1__52121_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__52122){
var vec__52123 = p__52122;
var k = cljs.core.nth.call(null,vec__52123,(0),null);
var v = cljs.core.nth.call(null,vec__52123,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___52127 = arguments.length;
var i__5727__auto___52128 = (0);
while(true){
if((i__5727__auto___52128 < len__5726__auto___52127)){
args__5732__auto__.push((arguments[i__5727__auto___52128]));

var G__52129 = (i__5727__auto___52128 + (1));
i__5727__auto___52128 = G__52129;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq52126){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52126));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__52132){
var map__52133 = p__52132;
var map__52133__$1 = cljs.core.__destructure_map.call(null,map__52133);
var message = cljs.core.get.call(null,map__52133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__52133__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__52131_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52131_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__52130_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__52130_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__52135){
var map__52136 = p__52135;
var map__52136__$1 = cljs.core.__destructure_map.call(null,map__52136);
var message_data = map__52136__$1;
var message = cljs.core.get.call(null,map__52136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__52136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52136__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__52136__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__52137 = file_excerpt;
var map__52137__$1 = cljs.core.__destructure_map.call(null,map__52137);
var start_line = cljs.core.get.call(null,map__52137__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__52137__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__52137__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__52138 = cljs.core.split_with.call(null,(function (p1__52134_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__52134_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__52138,(0),null);
var end = cljs.core.nth.call(null,vec__52138,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__52141){
var map__52142 = p__52141;
var map__52142__$1 = cljs.core.__destructure_map.call(null,map__52142);
var file = cljs.core.get.call(null,map__52142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52142__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52142__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52143 = "";
var G__52143__$1 = (cljs.core.truth_(file)?[G__52143,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__52143);
var G__52143__$2 = (cljs.core.truth_(line)?[G__52143__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__52143__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = line;
if(cljs.core.truth_(and__5000__auto__)){
return column;
} else {
return and__5000__auto__;
}
})())){
return [G__52143__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__52143__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_52201 = (new goog.debug.Console());
var G__52150_52202 = c_52201.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__52150_52202,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__52150_52202,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_52201);

}

var temp__5823__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5823__auto__)){
var console_instance = temp__5823__auto__;
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

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
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
return figwheel.core.event_target.dispatchEvent((function (){var G__52151 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__52151,"data",(function (){var or__5002__auto__ = data;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__52151;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5821__auto__ = e.event_;
if(cljs.core.truth_(temp__5821__auto__)){
var e__$1 = temp__5821__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5000__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5000__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5000__auto__;
}
});

var last_reload_timestamp_52203 = cljs.core.atom.call(null,(0));
var promise_chain_52204 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5821__auto__ = (function (){var temp__5823__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var ts = temp__5823__auto__;
var and__5000__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_52203) < ts);
if(and__5000__auto__){
return ts;
} else {
return and__5000__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var ts = temp__5821__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_52203,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_52204.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__52152 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__52153 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__52153);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__52154 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__52155 = null;
var count__52156 = (0);
var i__52157 = (0);
while(true){
if((i__52157 < count__52156)){
var w = cljs.core._nth.call(null,chunk__52155,i__52157);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__52205 = seq__52154;
var G__52206 = chunk__52155;
var G__52207 = count__52156;
var G__52208 = (i__52157 + (1));
seq__52154 = G__52205;
chunk__52155 = G__52206;
count__52156 = G__52207;
i__52157 = G__52208;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__52154);
if(temp__5823__auto__){
var seq__52154__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52154__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__52154__$1);
var G__52209 = cljs.core.chunk_rest.call(null,seq__52154__$1);
var G__52210 = c__5525__auto__;
var G__52211 = cljs.core.count.call(null,c__5525__auto__);
var G__52212 = (0);
seq__52154 = G__52209;
chunk__52155 = G__52210;
count__52156 = G__52211;
i__52157 = G__52212;
continue;
} else {
var w = cljs.core.first.call(null,seq__52154__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__52213 = cljs.core.next.call(null,seq__52154__$1);
var G__52214 = null;
var G__52215 = (0);
var G__52216 = (0);
seq__52154 = G__52213;
chunk__52155 = G__52214;
count__52156 = G__52215;
i__52157 = G__52216;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__52152);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_52204.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__52158 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__52159 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__52159);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__52158);
}}));
} else {
return promise_chain_52204.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5000__auto____$1){
var or__5002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___52217 = arguments.length;
var i__5727__auto___52218 = (0);
while(true){
if((i__5727__auto___52218 < len__5726__auto___52217)){
args__5732__auto__.push((arguments[i__5727__auto___52218]));

var G__52219 = (i__5727__auto___52218 + (1));
i__5727__auto___52218 = G__52219;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__52162){
var vec__52163 = p__52162;
var n = cljs.core.nth.call(null,vec__52163,(0),null);
var mdata = cljs.core.nth.call(null,vec__52163,(1),null);
var temp__5823__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__52166 = cljs.core.seq.call(null,hooks);
var chunk__52167 = null;
var count__52168 = (0);
var i__52169 = (0);
while(true){
if((i__52169 < count__52168)){
var vec__52178 = cljs.core._nth.call(null,chunk__52167,i__52169);
var n = cljs.core.nth.call(null,vec__52178,(0),null);
var f = cljs.core.nth.call(null,vec__52178,(1),null);
var temp__5821__auto___52220 = cljs.core.reduce.call(null,((function (seq__52166,chunk__52167,count__52168,i__52169,vec__52178,n,f,hooks){
return (function (p1__52144_SHARP_,p2__52145_SHARP_){
if(cljs.core.truth_(p1__52144_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__52144_SHARP_,p2__52145_SHARP_);
} else {
return null;
}
});})(seq__52166,chunk__52167,count__52168,i__52169,vec__52178,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___52220)){
var hook_52221 = temp__5821__auto___52220;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_52221,args);
}catch (e52181){if((e52181 instanceof Error)){
var e_52222 = e52181;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_52222);
} else {
throw e52181;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__52223 = seq__52166;
var G__52224 = chunk__52167;
var G__52225 = count__52168;
var G__52226 = (i__52169 + (1));
seq__52166 = G__52223;
chunk__52167 = G__52224;
count__52168 = G__52225;
i__52169 = G__52226;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__52166);
if(temp__5823__auto__){
var seq__52166__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52166__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__52166__$1);
var G__52227 = cljs.core.chunk_rest.call(null,seq__52166__$1);
var G__52228 = c__5525__auto__;
var G__52229 = cljs.core.count.call(null,c__5525__auto__);
var G__52230 = (0);
seq__52166 = G__52227;
chunk__52167 = G__52228;
count__52168 = G__52229;
i__52169 = G__52230;
continue;
} else {
var vec__52182 = cljs.core.first.call(null,seq__52166__$1);
var n = cljs.core.nth.call(null,vec__52182,(0),null);
var f = cljs.core.nth.call(null,vec__52182,(1),null);
var temp__5821__auto___52231 = cljs.core.reduce.call(null,((function (seq__52166,chunk__52167,count__52168,i__52169,vec__52182,n,f,seq__52166__$1,temp__5823__auto__,hooks){
return (function (p1__52144_SHARP_,p2__52145_SHARP_){
if(cljs.core.truth_(p1__52144_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__52144_SHARP_,p2__52145_SHARP_);
} else {
return null;
}
});})(seq__52166,chunk__52167,count__52168,i__52169,vec__52182,n,f,seq__52166__$1,temp__5823__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___52231)){
var hook_52232 = temp__5821__auto___52231;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_52232,args);
}catch (e52185){if((e52185 instanceof Error)){
var e_52233 = e52185;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_52233);
} else {
throw e52185;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__52234 = cljs.core.next.call(null,seq__52166__$1);
var G__52235 = null;
var G__52236 = (0);
var G__52237 = (0);
seq__52166 = G__52234;
chunk__52167 = G__52235;
count__52168 = G__52236;
i__52169 = G__52237;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq52160){
var G__52161 = cljs.core.first.call(null,seq52160);
var seq52160__$1 = cljs.core.next.call(null,seq52160);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52161,seq52160__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__52186){
var vec__52187 = p__52186;
var k = cljs.core.nth.call(null,vec__52187,(0),null);
var v = cljs.core.nth.call(null,vec__52187,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__52146_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__52146_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__52146_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__52147_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__52147_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5000__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5000__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__52148_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__52148_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__52190_52238 = cljs.core.seq.call(null,to_reload);
var chunk__52191_52239 = null;
var count__52192_52240 = (0);
var i__52193_52241 = (0);
while(true){
if((i__52193_52241 < count__52192_52240)){
var ns_52242 = cljs.core._nth.call(null,chunk__52191_52239,i__52193_52241);
goog.require(cljs.core.name.call(null,ns_52242),true);


var G__52243 = seq__52190_52238;
var G__52244 = chunk__52191_52239;
var G__52245 = count__52192_52240;
var G__52246 = (i__52193_52241 + (1));
seq__52190_52238 = G__52243;
chunk__52191_52239 = G__52244;
count__52192_52240 = G__52245;
i__52193_52241 = G__52246;
continue;
} else {
var temp__5823__auto___52247 = cljs.core.seq.call(null,seq__52190_52238);
if(temp__5823__auto___52247){
var seq__52190_52248__$1 = temp__5823__auto___52247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52190_52248__$1)){
var c__5525__auto___52249 = cljs.core.chunk_first.call(null,seq__52190_52248__$1);
var G__52250 = cljs.core.chunk_rest.call(null,seq__52190_52248__$1);
var G__52251 = c__5525__auto___52249;
var G__52252 = cljs.core.count.call(null,c__5525__auto___52249);
var G__52253 = (0);
seq__52190_52238 = G__52250;
chunk__52191_52239 = G__52251;
count__52192_52240 = G__52252;
i__52193_52241 = G__52253;
continue;
} else {
var ns_52254 = cljs.core.first.call(null,seq__52190_52248__$1);
goog.require(cljs.core.name.call(null,ns_52254),true);


var G__52255 = cljs.core.next.call(null,seq__52190_52248__$1);
var G__52256 = null;
var G__52257 = (0);
var G__52258 = (0);
seq__52190_52238 = G__52255;
chunk__52191_52239 = G__52256;
count__52192_52240 = G__52257;
i__52193_52241 = G__52258;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_52259 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5823__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var not_loaded = temp__5823__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_52259);
} else {
setTimeout(after_reload_fn_52259,(100));
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

var seq__52194 = cljs.core.seq.call(null,warnings);
var chunk__52195 = null;
var count__52196 = (0);
var i__52197 = (0);
while(true){
if((i__52197 < count__52196)){
var warning = cljs.core._nth.call(null,chunk__52195,i__52197);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__52260 = seq__52194;
var G__52261 = chunk__52195;
var G__52262 = count__52196;
var G__52263 = (i__52197 + (1));
seq__52194 = G__52260;
chunk__52195 = G__52261;
count__52196 = G__52262;
i__52197 = G__52263;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__52194);
if(temp__5823__auto__){
var seq__52194__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52194__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__52194__$1);
var G__52264 = cljs.core.chunk_rest.call(null,seq__52194__$1);
var G__52265 = c__5525__auto__;
var G__52266 = cljs.core.count.call(null,c__5525__auto__);
var G__52267 = (0);
seq__52194 = G__52264;
chunk__52195 = G__52265;
count__52196 = G__52266;
i__52197 = G__52267;
continue;
} else {
var warning = cljs.core.first.call(null,seq__52194__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__52268 = cljs.core.next.call(null,seq__52194__$1);
var G__52269 = null;
var G__52270 = (0);
var G__52271 = (0);
seq__52194 = G__52268;
chunk__52195 = G__52269;
count__52196 = G__52270;
i__52197 = G__52271;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__52198){
var map__52199 = p__52198;
var map__52199__$1 = cljs.core.__destructure_map.call(null,map__52199);
var exception_data = map__52199__$1;
var file = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__52199__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__52149_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__52149_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__52200 = "Compile Exception - ";
var G__52200__$1 = (cljs.core.truth_((function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return message;
}
})())?[G__52200,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__52200);
if(cljs.core.truth_(file)){
return [G__52200__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__52200__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
