// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__19135__auto__ = [];
var len__19125__auto___45430 = arguments.length;
var i__19126__auto___45431 = (0);
while(true){
if((i__19126__auto___45431 < len__19125__auto___45430)){
args__19135__auto__.push((arguments[i__19126__auto___45431]));

var G__45432 = (i__19126__auto___45431 + (1));
i__19126__auto___45431 = G__45432;
continue;
} else {
}
break;
}

var argseq__19136__auto__ = ((((1) < args__19135__auto__.length))?(new cljs.core.IndexedSeq(args__19135__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19136__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__45425){
var vec__45426 = p__45425;
var context = cljs.core.nth.call(null,vec__45426,(0),null);
var footer = cljs.core.nth.call(null,vec__45426,(1),null);
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__17816__auto__ = e.message;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info.call(null),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
}catch (e45429){var e__$1 = e45429;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq45423){
var G__45424 = cljs.core.first.call(null,seq45423);
var seq45423__$1 = cljs.core.next.call(null,seq45423);
var self__19110__auto__ = this;
return self__19110__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45424,seq45423__$1);
});


//# sourceMappingURL=reporter.js.map
