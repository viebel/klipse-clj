// Compiled by ClojureScript 1.10.492 {}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.log');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
figwheel.repl.default_port = (9500);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = goog.log.getLogger("Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_39095 = (new goog.debug.Console());
var G__39007_39096 = c_39095.getFormatter();
goog.object.set(G__39007_39096,"showAbsoluteTime",false);

goog.object.set(G__39007_39096,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_39095);

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
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.log_console !== 'undefined')){
} else {
figwheel.repl.log_console = figwheel.repl.console_logging.call(null);
}

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return goog.log.log(figwheel.repl.logger,goog.debug.Logger.Level.FINEST,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
var path = goog.object.get(goog.dependencies_.nameToPath,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
goog.require = figwheel.repl.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

if(cljs.core.truth_((function (){var or__4002__auto__ = reload;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
goog.require_figwheel_backup_ = (function (){var or__4002__auto__ = goog.require__;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return goog.require;
}
})();
}

goog.isProvided_ = (function (name){
return false;
});

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload;

return goog.require = figwheel.repl.figwheel_require;
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__38995_SHARP_,p2__38996_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38995_SHARP_)),p2__38996_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__38997_SHARP_,p2__38998_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38997_SHARP_),p2__38998_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__39008 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39008.addCallback(((function (G__39008){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39008))
);

G__39008.addErrback(((function (G__39008){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39008))
);

return G__39008;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e39009){if((e39009 instanceof Error)){
var e = e39009;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e39009;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39010){if((e39010 instanceof Error)){
var e = e39010;
goog.log.error(figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

goog.log.error(figwheel.repl.logger,e);

return false;
} else {
throw e39010;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__39011 = cljs.core._EQ_;
var expr__39012 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39011.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39012))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39011.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39012))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39011.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39012))){
return figwheel.repl.worker_import_script;
} else {
return ((function (pred__39011,expr__39012){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39011,expr__39012))
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__39014,callback){
var map__39015 = p__39014;
var map__39015__$1 = (((((!((map__39015 == null))))?(((((map__39015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39015):map__39015);
var file_msg = map__39015__$1;
var request_url = cljs.core.get.call(null,map__39015__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

goog.log.fine(figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4002__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39015,map__39015__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
goog.log.fine(figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
goog.log.error(figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39015,map__39015__$1,file_msg,request_url))
);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__38999_SHARP_){
return p1__38999_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__39018 = arguments.length;
switch (G__39018) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
});

figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
var temp__5720__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__39000_SHARP_){
return p1__39000_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e39019){if((e39019 instanceof Error)){
var e_39098 = e39019;
goog.log.error(figwheel.repl.logger,e_39098);
} else {
throw e39019;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__39001_SHARP_){
return p1__39001_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5720__auto__)){
var next_promise_fn = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
});

figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2;


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__39002_SHARP_){
return p1__39002_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/** @define {string} */
goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),((function (method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__){
return (function (k,args){
return k;
});})(method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),((function (method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__){
return (function (k,args){
return k;
});})(method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__,hierarchy__4488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,goog.array.clone(cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__39099__delegate = function (args){
var seq__39020 = cljs.core.seq.call(null,printers);
var chunk__39021 = null;
var count__39022 = (0);
var i__39023 = (0);
while(true){
if((i__39023 < count__39022)){
var p = cljs.core._nth.call(null,chunk__39021,i__39023);
figwheel.repl.out_print.call(null,p,args);


var G__39100 = seq__39020;
var G__39101 = chunk__39021;
var G__39102 = count__39022;
var G__39103 = (i__39023 + (1));
seq__39020 = G__39100;
chunk__39021 = G__39101;
count__39022 = G__39102;
i__39023 = G__39103;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39020);
if(temp__5720__auto__){
var seq__39020__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39020__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39020__$1);
var G__39104 = cljs.core.chunk_rest.call(null,seq__39020__$1);
var G__39105 = c__4421__auto__;
var G__39106 = cljs.core.count.call(null,c__4421__auto__);
var G__39107 = (0);
seq__39020 = G__39104;
chunk__39021 = G__39105;
count__39022 = G__39106;
i__39023 = G__39107;
continue;
} else {
var p = cljs.core.first.call(null,seq__39020__$1);
figwheel.repl.out_print.call(null,p,args);


var G__39108 = cljs.core.next.call(null,seq__39020__$1);
var G__39109 = null;
var G__39110 = (0);
var G__39111 = (0);
seq__39020 = G__39108;
chunk__39021 = G__39109;
count__39022 = G__39110;
i__39023 = G__39111;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__39099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39112__i = 0, G__39112__a = new Array(arguments.length -  0);
while (G__39112__i < G__39112__a.length) {G__39112__a[G__39112__i] = arguments[G__39112__i + 0]; ++G__39112__i;}
  args = new cljs.core.IndexedSeq(G__39112__a,0,null);
} 
return G__39099__delegate.call(this,args);};
G__39099.cljs$lang$maxFixedArity = 0;
G__39099.cljs$lang$applyTo = (function (arglist__39113){
var args = cljs.core.seq(arglist__39113);
return G__39099__delegate(args);
});
G__39099.cljs$core$IFn$_invoke$arity$variadic = G__39099__delegate;
return G__39099;
})()
;})(printers))
);

return cljs.core.set_print_err_fn_BANG_.call(null,((function (printers){
return (function() { 
var G__39114__delegate = function (args){
var seq__39024 = cljs.core.seq.call(null,printers);
var chunk__39025 = null;
var count__39026 = (0);
var i__39027 = (0);
while(true){
if((i__39027 < count__39026)){
var p = cljs.core._nth.call(null,chunk__39025,i__39027);
figwheel.repl.err_print.call(null,p,args);


var G__39115 = seq__39024;
var G__39116 = chunk__39025;
var G__39117 = count__39026;
var G__39118 = (i__39027 + (1));
seq__39024 = G__39115;
chunk__39025 = G__39116;
count__39026 = G__39117;
i__39027 = G__39118;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39024);
if(temp__5720__auto__){
var seq__39024__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39024__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39024__$1);
var G__39119 = cljs.core.chunk_rest.call(null,seq__39024__$1);
var G__39120 = c__4421__auto__;
var G__39121 = cljs.core.count.call(null,c__4421__auto__);
var G__39122 = (0);
seq__39024 = G__39119;
chunk__39025 = G__39120;
count__39026 = G__39121;
i__39027 = G__39122;
continue;
} else {
var p = cljs.core.first.call(null,seq__39024__$1);
figwheel.repl.err_print.call(null,p,args);


var G__39123 = cljs.core.next.call(null,seq__39024__$1);
var G__39124 = null;
var G__39125 = (0);
var G__39126 = (0);
seq__39024 = G__39123;
chunk__39025 = G__39124;
count__39026 = G__39125;
i__39027 = G__39126;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__39114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39127__i = 0, G__39127__a = new Array(arguments.length -  0);
while (G__39127__i < G__39127__a.length) {G__39127__a[G__39127__i] = arguments[G__39127__i + 0]; ++G__39127__i;}
  args = new cljs.core.IndexedSeq(G__39127__a,0,null);
} 
return G__39114__delegate.call(this,args);};
G__39114.cljs$lang$maxFixedArity = 0;
G__39114.cljs$lang$applyTo = (function (arglist__39128){
var args = cljs.core.seq(arglist__39128);
return G__39114__delegate(args);
});
G__39114.cljs$core$IFn$_invoke$arity$variadic = G__39114__delegate;
return G__39114;
})()
;})(printers))
);
});


/** @define {string} */
goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__39028,response_body){
var map__39029 = p__39028;
var map__39029__$1 = (((((!((map__39029 == null))))?(((((map__39029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39029):map__39029);
var uuid = cljs.core.get.call(null,map__39029__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__39031 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__39031,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__39031;
}
});

figwheel.repl.http_post = (function (){var pred__39032 = cljs.core._EQ_;
var expr__39033 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39032.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39033))){
var http = require("http");
return ((function (http,pred__39032,expr__39033){
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__39035 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5720__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5720__auto__)){
var q = temp__5720__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),((function (data,uri,http,pred__39032,expr__39033){
return (function (x){
return null;
});})(data,uri,http,pred__39032,expr__39033))
).on("error",((function (data,uri,http,pred__39032,expr__39033){
return (function (p1__39003_SHARP_){
return console.error(p1__39003_SHARP_);
});})(data,uri,http,pred__39032,expr__39033))
);
G__39035.write(post_data);

G__39035.end();

return G__39035;
});
;})(http,pred__39032,expr__39033))
} else {
return ((function (pred__39032,expr__39033){
return (function (url,response){
return goog.net.XhrIo.send(url,((function (pred__39032,expr__39033){
return (function (e){
return figwheel.repl.debug.call(null,"Response Posted");
});})(pred__39032,expr__39033))
,"POST",response);
});
;})(pred__39032,expr__39033))
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__39036,response_body){
var map__39037 = p__39036;
var map__39037__$1 = (((((!((map__39037 == null))))?(((((map__39037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39037):map__39037);
var old_msg = map__39037__$1;
var websocket = cljs.core.get.call(null,map__39037__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__39037__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5720__auto___39129 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5720__auto___39129)){
var sn_39130 = temp__5720__auto___39129;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_39130);
} else {
}

var temp__5720__auto___39131 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5720__auto___39131)){
var sid_39132 = temp__5720__auto___39131;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_39132);
} else {
}

goog.log.info(figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return goog.log.info(figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__39133 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = ((function (print_to_console_QMARK__39133){
return (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39040 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39041 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39042 = true;
var _STAR_print_fn_STAR__temp_val__39043 = ((function (_STAR_print_newline_STAR__orig_val__39040,_STAR_print_fn_STAR__orig_val__39041,_STAR_print_newline_STAR__temp_val__39042,sb,ua_product,print_to_console_QMARK__39133){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__39040,_STAR_print_fn_STAR__orig_val__39041,_STAR_print_newline_STAR__temp_val__39042,sb,ua_product,print_to_console_QMARK__39133))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39042;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39043;

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e39044){if((e39044 instanceof Error)){
var e = e39044;
return null;
} else {
throw e39044;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__3991__auto__ = print_to_console_QMARK__39133;
if(cljs.core.truth_(and__3991__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__3991__auto__;
}
})())){
setTimeout(((function (result_value,result_value__$1,output_str,_STAR_print_newline_STAR__orig_val__39040,_STAR_print_fn_STAR__orig_val__39041,_STAR_print_newline_STAR__temp_val__39042,_STAR_print_fn_STAR__temp_val__39043,sb,ua_product,print_to_console_QMARK__39133){
return (function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
});})(result_value,result_value__$1,output_str,_STAR_print_newline_STAR__orig_val__39040,_STAR_print_fn_STAR__orig_val__39041,_STAR_print_newline_STAR__temp_val__39042,_STAR_print_fn_STAR__temp_val__39043,sb,ua_product,print_to_console_QMARK__39133))
,(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39041;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39040;
}}catch (e39039){if((e39039 instanceof Error)){
var e = e39039;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e39039;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});})(print_to_console_QMARK__39133))
;

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__39045){
var map__39046 = p__39045;
var map__39046__$1 = (((((!((map__39046 == null))))?(((((map__39046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39046):map__39046);
var msg = map__39046__$1;
var code = cljs.core.get.call(null,map__39046__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__39048){
var map__39049 = p__39048;
var map__39049__$1 = (((((!((map__39049 == null))))?(((((map__39049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39049):map__39049);
var messages = cljs.core.get.call(null,map__39049__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__39049__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__39051 = cljs.core.seq.call(null,messages);
var chunk__39052 = null;
var count__39053 = (0);
var i__39054 = (0);
while(true){
if((i__39054 < count__39053)){
var msg = cljs.core._nth.call(null,chunk__39052,i__39054);
figwheel.repl.message.call(null,(function (){var G__39057 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__39057,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__39057;
}
})());


var G__39134 = seq__39051;
var G__39135 = chunk__39052;
var G__39136 = count__39053;
var G__39137 = (i__39054 + (1));
seq__39051 = G__39134;
chunk__39052 = G__39135;
count__39053 = G__39136;
i__39054 = G__39137;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39051);
if(temp__5720__auto__){
var seq__39051__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39051__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39051__$1);
var G__39138 = cljs.core.chunk_rest.call(null,seq__39051__$1);
var G__39139 = c__4421__auto__;
var G__39140 = cljs.core.count.call(null,c__4421__auto__);
var G__39141 = (0);
seq__39051 = G__39138;
chunk__39052 = G__39139;
count__39053 = G__39140;
i__39054 = G__39141;
continue;
} else {
var msg = cljs.core.first.call(null,seq__39051__$1);
figwheel.repl.message.call(null,(function (){var G__39058 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__39058,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__39058;
}
})());


var G__39142 = cljs.core.next.call(null,seq__39051__$1);
var G__39143 = null;
var G__39144 = (0);
var G__39145 = (0);
seq__39051 = G__39142;
chunk__39052 = G__39143;
count__39053 = G__39144;
i__39054 = G__39145;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__4002__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var G__39059_39146 = uri.getQueryData().add("fwsid",(function (){var or__4002__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__39059_39146.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__4093__auto__ = Math.pow((2),attempt);
var y__4094__auto__ = (20);
return ((x__4093__auto__ < y__4094__auto__) ? x__4093__auto__ : y__4094__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39004_SHARP_){
if(typeof p1__39004_SHARP_ === 'string'){
return p1__39004_SHARP_;
} else {
return goog.json.serialize(p1__39004_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39005_SHARP_){
if(typeof p1__39005_SHARP_ === 'string'){
return p1__39005_SHARP_;
} else {
return goog.json.serialize(p1__39005_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__39060 = (new Event("figwheel.repl.connected",target));
goog.object.add(G__39060,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__39060;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__39061 = (new Event("figwheel.repl.disconnected",target));
goog.object.add(G__39061,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__39061;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__4002__auto__ = goog.object.get(goog.global,"WebSocket");
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = goog.object.get(goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
var or__4002__auto____$2 = (function (){var and__3991__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__3991__auto__){
try{return require("ws");
}catch (e39065){if((e39065 instanceof Error)){
var e = e39065;
return null;
} else {
throw e39065;

}
}} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(or__4002__auto____$2)){
return or__4002__auto____$2;
} else {
var and__3991__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__3991__auto__){
return goog.object.get(self,"WebSocket");
} else {
return and__3991__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(goog.object.get(goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5718__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5718__auto__)){
var websocket_class = temp__5718__auto__;
goog.object.set(goog.global,"WebSocket",websocket_class);

thunk.call(null);

return goog.object.set(goog.global,"WebSocket",null);
} else {
return goog.log.error(figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__4607__auto__ = [];
var len__4601__auto___39147 = arguments.length;
var i__4602__auto___39148 = (0);
while(true){
if((i__4602__auto___39148 < len__4601__auto___39147)){
args__4607__auto__.push((arguments[i__4602__auto___39148]));

var G__39149 = (i__4602__auto___39148 + (1));
i__4602__auto___39148 = G__39149;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39067){
var vec__39068 = p__39067;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39068,(0),null);
return figwheel.repl.ensure_websocket.call(null,((function (vec__39068,websocket_url_SINGLEQUOTE_){
return (function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var G__39071 = websocket;
G__39071.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_){
return (function (e){
var temp__5720__auto__ = goog.object.get(e,"message");
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e39072){if((e39072 instanceof Error)){
var e__$1 = e39072;
return goog.log.error(figwheel.repl.logger,e__$1);
} else {
throw e39072;

}
}} else {
return null;
}
});})(G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_))
);

G__39071.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_){
return (function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
});})(G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_))
);

G__39071.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_){
return (function (e){
return figwheel.repl.connection_closed_BANG_.call(null,url);
});})(G__39071,websocket,url,vec__39068,websocket_url_SINGLEQUOTE_))
);

G__39071.open(url);

return G__39071;
});})(vec__39068,websocket_url_SINGLEQUOTE_))
);
});

figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq39066){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39066));
});


figwheel.repl.http_get = (function (){var pred__39073 = cljs.core._EQ_;
var expr__39074 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__39073.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39074))){
var http = require("http");
return ((function (http,pred__39073,expr__39074){
return (function (url){
return (new goog.Promise(((function (http,pred__39073,expr__39074){
return (function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),((function (data,http,pred__39073,expr__39074){
return (function (response){
response.on("data",((function (data,http,pred__39073,expr__39074){
return (function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
});})(data,http,pred__39073,expr__39074))
);

return response.on("end",((function (data,http,pred__39073,expr__39074){
return (function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e39076){if((e39076 instanceof Error)){
var e = e39076;
console.error(e);

return err.call(null,e);
} else {
throw e39076;

}
}})());
});})(data,http,pred__39073,expr__39074))
);
});})(data,http,pred__39073,expr__39074))
).on("error",err);
});})(http,pred__39073,expr__39074))
));
});
;})(http,pred__39073,expr__39074))
} else {
return ((function (pred__39073,expr__39074){
return (function (url){
return (new goog.Promise(((function (pred__39073,expr__39074){
return (function (succ,err){
return goog.net.XhrIo.send(url,((function (pred__39073,expr__39074){
return (function (e){
var xhr = goog.object.get(e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
});})(pred__39073,expr__39074))
);
});})(pred__39073,expr__39074))
));
});
;})(pred__39073,expr__39074))
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = ((function (url,surl){
return (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e39077){if((e39077 instanceof Error)){
var e = e39077;
return goog.log.error(figwheel.repl.logger,e);
} else {
throw e39077;

}
}});})(url,surl))
;
var G__39078_39150 = url.getQueryData();
G__39078_39150.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then(((function (url,surl,msg_fn){
return (function (msg){
var typ = goog.object.get(msg,"connection-type");
goog.log.info(figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
});})(url,surl,msg_fn))
,((function (url,surl,msg_fn){
return (function (e){
if((e instanceof Error)){
goog.log.error(figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__3991__auto__ = (e instanceof goog.net.XhrIo);
if(and__3991__auto__){
return e.getResponseBody();
} else {
return and__3991__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
goog.log.info(figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout(((function (wait_time,url,surl,msg_fn){
return (function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
});})(wait_time,url,surl,msg_fn))
,wait_time);
});})(url,surl,msg_fn))
);
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__4607__auto__ = [];
var len__4601__auto___39151 = arguments.length;
var i__4602__auto___39152 = (0);
while(true){
if((i__4602__auto___39152 < len__4601__auto___39151)){
args__4607__auto__.push((arguments[i__4602__auto___39152]));

var G__39153 = (i__4602__auto___39152 + (1));
i__4602__auto___39152 = G__39153;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39080){
var vec__39081 = p__39080;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39081,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
});

figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq39079){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39079));
});


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__4002__auto__ = goog.string.startsWith(url,"http");
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
goog.log.warning(figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/** @define {string} */
goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__39006_SHARP_){
return goog.object.get(goog.debug.Logger.Level,p1__39006_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));

figwheel.repl.set_log_level = (function figwheel$repl$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5718__auto__ = cljs.core.get.call(null,figwheel.repl.log_levels,level);
if(cljs.core.truth_(temp__5718__auto__)){
var lvl = temp__5718__auto__;
logger_SINGLEQUOTE_.setLevel(lvl);

return figwheel.repl.debug.call(null,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));
} else {
return goog.log.warn(["Log level ",cljs.core.pr_str.call(null,level)," doesn't exist must be one of ",cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest"))].join(''));
}
});

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__39084 = cljs.core.seq.call(null,(function (){var G__39089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__39089,figwheel.core.logger);
} else {
return G__39089;
}
})());
var chunk__39085 = null;
var count__39086 = (0);
var i__39087 = (0);
while(true){
if((i__39087 < count__39086)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__39085,i__39087);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__39154 = seq__39084;
var G__39155 = chunk__39085;
var G__39156 = count__39086;
var G__39157 = (i__39087 + (1));
seq__39084 = G__39154;
chunk__39085 = G__39155;
count__39086 = G__39156;
i__39087 = G__39157;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39084);
if(temp__5720__auto__){
var seq__39084__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39084__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__39084__$1);
var G__39158 = cljs.core.chunk_rest.call(null,seq__39084__$1);
var G__39159 = c__4421__auto__;
var G__39160 = cljs.core.count.call(null,c__4421__auto__);
var G__39161 = (0);
seq__39084 = G__39158;
chunk__39085 = G__39159;
count__39086 = G__39160;
i__39087 = G__39161;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__39084__$1);
figwheel.repl.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__39162 = cljs.core.next.call(null,seq__39084__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__39084 = G__39162;
chunk__39085 = G__39163;
count__39086 = G__39164;
i__39087 = G__39165;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__4002__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(cljs.core.truth_(goog.string.startsWith(url,"ws"))){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(cljs.core.truth_(goog.string.startsWith(url,"http"))){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__4607__auto__ = [];
var len__4601__auto___39166 = arguments.length;
var i__4602__auto___39167 = (0);
while(true){
if((i__4602__auto___39167 < len__4601__auto___39166)){
args__4607__auto__.push((arguments[i__4602__auto___39167]));

var G__39168 = (i__4602__auto___39167 + (1));
i__4602__auto___39167 = G__39168;
continue;
} else {
}
break;
}

var argseq__4608__auto__ = ((((0) < args__4607__auto__.length))?(new cljs.core.IndexedSeq(args__4607__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__4608__auto__);
});

figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__39091){
var vec__39092 = p__39091;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39092,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
});

figwheel.repl.connect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.repl.connect.cljs$lang$applyTo = (function (seq39090){
var self__4589__auto__ = this;
return self__4589__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39090));
});


//# sourceMappingURL=repl.js.map
