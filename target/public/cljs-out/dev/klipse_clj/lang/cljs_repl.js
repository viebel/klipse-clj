// Compiled by ClojureScript 1.10.520 {}
goog.provide('klipse_clj.lang.cljs_repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
klipse_clj.lang.cljs_repl.Error__GT_map = (function klipse_clj$lang$cljs_repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__22374 = cljs.core.conj.call(null,via,t);
var G__22375 = cljs.core.ex_cause.call(null,t);
via = G__22374;
t = G__22375;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
klipse_clj.lang.cljs_repl.ex_triage = (function klipse_clj$lang$cljs_repl$ex_triage(datafied_throwable){
var map__22378 = datafied_throwable;
var map__22378__$1 = (((((!((map__22378 == null))))?(((((map__22378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22378):map__22378);
var via = cljs.core.get.call(null,map__22378__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22378__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22378__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22379 = cljs.core.last.call(null,via);
var map__22379__$1 = (((((!((map__22379 == null))))?(((((map__22379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22379):map__22379);
var type = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22379__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22380 = data;
var map__22380__$1 = (((((!((map__22380 == null))))?(((((map__22380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22380):map__22380);
var problems = cljs.core.get.call(null,map__22380__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22380__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22380__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__22381 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22381__$1 = (((((!((map__22381 == null))))?(((((map__22381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);
var top_data = map__22381__$1;
var source = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22386 = phase;
var G__22386__$1 = (((G__22386 instanceof cljs.core.Keyword))?G__22386.fqn:null);
switch (G__22386__$1) {
case "read-source":
var map__22387 = data;
var map__22387__$1 = (((((!((map__22387 == null))))?(((((map__22387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22387):map__22387);
var line = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22389 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22389__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22389,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22389);
var G__22389__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22389__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22389__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22389__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22390 = top_data;
var G__22390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22390);
var G__22390__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22390__$1);
var G__22390__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22390__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22390__$2);
var G__22390__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22390__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22390__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22390__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22390__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22391 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22391,(0),null);
var method = cljs.core.nth.call(null,vec__22391,(1),null);
var file = cljs.core.nth.call(null,vec__22391,(2),null);
var line = cljs.core.nth.call(null,vec__22391,(3),null);
var G__22394 = top_data;
var G__22394__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22394,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22394);
var G__22394__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22394__$1);
var G__22394__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__22394__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22394__$2);
var G__22394__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22394__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22394__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22394__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22394__$4;
}

break;
case "execution":
var vec__22395 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22395,(0),null);
var method = cljs.core.nth.call(null,vec__22395,(1),null);
var file = cljs.core.nth.call(null,vec__22395,(2),null);
var line = cljs.core.nth.call(null,vec__22395,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__22395,source__$1,method,file,line,G__22386,G__22386__$1,map__22378,map__22378__$1,via,trace,phase,map__22379,map__22379__$1,type,message,data,map__22380,map__22380__$1,problems,fn,caller,map__22381,map__22381__$1,top_data,source){
return (function (p1__22377_SHARP_){
var or__4131__auto__ = (p1__22377_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22377_SHARP_);
}
});})(vec__22395,source__$1,method,file,line,G__22386,G__22386__$1,map__22378,map__22378__$1,via,trace,phase,map__22379,map__22379__$1,type,message,data,map__22380,map__22380__$1,problems,fn,caller,map__22381,map__22381__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22398 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22398__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22398,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22398);
var G__22398__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22398__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22398__$1);
var G__22398__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__22398__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22398__$2);
var G__22398__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22398__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22398__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22398__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22398__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22386__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
klipse_clj.lang.cljs_repl.ex_str = (function klipse_clj$lang$cljs_repl$ex_str(p__22402){
var map__22403 = p__22402;
var map__22403__$1 = (((((!((map__22403 == null))))?(((((map__22403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22403):map__22403);
var triage_data = map__22403__$1;
var phase = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__22405 = phase;
var G__22405__$1 = (((G__22405 instanceof cljs.core.Keyword))?G__22405.fqn:null);
switch (G__22405__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22406_22415 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22407_22416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22408_22417 = true;
var _STAR_print_fn_STAR__temp_val__22409_22418 = ((function (_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22408_22417;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22409_22418;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,_STAR_print_fn_STAR__temp_val__22409_22418,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,_STAR_print_fn_STAR__temp_val__22409_22418,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22400_SHARP_){
return cljs.core.dissoc.call(null,p1__22400_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,_STAR_print_fn_STAR__temp_val__22409_22418,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22406_22415,_STAR_print_fn_STAR__orig_val__22407_22416,_STAR_print_newline_STAR__temp_val__22408_22417,_STAR_print_fn_STAR__temp_val__22409_22418,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22407_22416;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22406_22415;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22410_22419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22411_22420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22412_22421 = true;
var _STAR_print_fn_STAR__temp_val__22413_22422 = ((function (_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22412_22421;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22413_22422;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,_STAR_print_fn_STAR__temp_val__22413_22422,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,_STAR_print_fn_STAR__temp_val__22413_22422,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22401_SHARP_){
return cljs.core.dissoc.call(null,p1__22401_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,_STAR_print_fn_STAR__temp_val__22413_22422,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22410_22419,_STAR_print_fn_STAR__orig_val__22411_22420,_STAR_print_newline_STAR__temp_val__22412_22421,_STAR_print_fn_STAR__temp_val__22413_22422,sb__4661__auto__,G__22405,G__22405__$1,loc,class_name,simple_class,cause_type,format,map__22403,map__22403__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22411_22420;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22410_22419;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22405__$1)].join('')));

}
});
klipse_clj.lang.cljs_repl.error__GT_str = (function klipse_clj$lang$cljs_repl$error__GT_str(error){
return klipse_clj.lang.cljs_repl.ex_str.call(null,klipse_clj.lang.cljs_repl.ex_triage.call(null,klipse_clj.lang.cljs_repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=cljs_repl.js.map
