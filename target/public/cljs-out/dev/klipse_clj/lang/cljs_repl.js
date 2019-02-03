// Compiled by ClojureScript 1.10.492 {}
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
var G__33958 = cljs.core.conj.call(null,via,t);
var G__33959 = cljs.core.ex_cause.call(null,t);
via = G__33958;
t = G__33959;
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
var map__33962 = datafied_throwable;
var map__33962__$1 = (((((!((map__33962 == null))))?(((((map__33962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33962):map__33962);
var via = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__33962__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33963 = cljs.core.last.call(null,via);
var map__33963__$1 = (((((!((map__33963 == null))))?(((((map__33963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33963):map__33963);
var type = cljs.core.get.call(null,map__33963__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__33963__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__33963__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33964 = data;
var map__33964__$1 = (((((!((map__33964 == null))))?(((((map__33964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33964):map__33964);
var problems = cljs.core.get.call(null,map__33964__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__33964__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__33964__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__33965 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__33965__$1 = (((((!((map__33965 == null))))?(((((map__33965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33965):map__33965);
var top_data = map__33965__$1;
var source = cljs.core.get.call(null,map__33965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__33970 = phase;
var G__33970__$1 = (((G__33970 instanceof cljs.core.Keyword))?G__33970.fqn:null);
switch (G__33970__$1) {
case "read-source":
var map__33971 = data;
var map__33971__$1 = (((((!((map__33971 == null))))?(((((map__33971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33971):map__33971);
var line = cljs.core.get.call(null,map__33971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33973 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__33973__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33973,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33973);
var G__33973__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33973__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33973__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33973__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33973__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33974 = top_data;
var G__33974__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__33974,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33974);
var G__33974__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__33974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33974__$1);
var G__33974__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33974__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33974__$2);
var G__33974__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33974__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33974__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33974__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33974__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33975 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33975,(0),null);
var method = cljs.core.nth.call(null,vec__33975,(1),null);
var file = cljs.core.nth.call(null,vec__33975,(2),null);
var line = cljs.core.nth.call(null,vec__33975,(3),null);
var G__33978 = top_data;
var G__33978__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__33978,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33978);
var G__33978__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__33978__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33978__$1);
var G__33978__$3 = (cljs.core.truth_((function (){var and__17804__auto__ = source__$1;
if(cljs.core.truth_(and__17804__auto__)){
return method;
} else {
return and__17804__auto__;
}
})())?cljs.core.assoc.call(null,G__33978__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33978__$2);
var G__33978__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__33978__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33978__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__33978__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33978__$4;
}

break;
case "execution":
var vec__33979 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__33979,(0),null);
var method = cljs.core.nth.call(null,vec__33979,(1),null);
var file = cljs.core.nth.call(null,vec__33979,(2),null);
var line = cljs.core.nth.call(null,vec__33979,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__33979,source__$1,method,file,line,G__33970,G__33970__$1,map__33962,map__33962__$1,via,trace,phase,map__33963,map__33963__$1,type,message,data,map__33964,map__33964__$1,problems,fn,caller,map__33965,map__33965__$1,top_data,source){
return (function (p1__33961_SHARP_){
var or__17819__auto__ = (p1__33961_SHARP_ == null);
if(or__17819__auto__){
return or__17819__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__33961_SHARP_);
}
});})(vec__33979,source__$1,method,file,line,G__33970,G__33970__$1,map__33962,map__33962__$1,via,trace,phase,map__33963,map__33963__$1,type,message,data,map__33964,map__33964__$1,problems,fn,caller,map__33965,map__33965__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__17819__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return line;
}
})();
var G__33982 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33982__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__33982,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33982);
var G__33982__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__33982__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33982__$1);
var G__33982__$3 = (cljs.core.truth_((function (){var or__17819__auto__ = fn;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
var and__17804__auto__ = source__$1;
if(cljs.core.truth_(and__17804__auto__)){
return method;
} else {
return and__17804__auto__;
}
}
})())?cljs.core.assoc.call(null,G__33982__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__17819__auto__ = fn;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33982__$2);
var G__33982__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__33982__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33982__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__33982__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33982__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33970__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
klipse_clj.lang.cljs_repl.ex_str = (function klipse_clj$lang$cljs_repl$ex_str(p__33986){
var map__33987 = p__33986;
var map__33987__$1 = (((((!((map__33987 == null))))?(((((map__33987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33987):map__33987);
var triage_data = map__33987__$1;
var phase = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__33987__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17819__auto__ = source;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17819__auto__ = line;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__17819__auto__ = class$;
if(cljs.core.truth_(or__17819__auto__)){
return or__17819__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33989 = phase;
var G__33989__$1 = (((G__33989 instanceof cljs.core.Keyword))?G__33989.fqn:null);
switch (G__33989__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33990_33999 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33991_34000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33992_34001 = true;
var _STAR_print_fn_STAR__temp_val__33993_34002 = ((function (_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33992_34001;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33993_34002;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,_STAR_print_fn_STAR__temp_val__33993_34002,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,_STAR_print_fn_STAR__temp_val__33993_34002,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33984_SHARP_){
return cljs.core.dissoc.call(null,p1__33984_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,_STAR_print_fn_STAR__temp_val__33993_34002,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33990_33999,_STAR_print_fn_STAR__orig_val__33991_34000,_STAR_print_newline_STAR__temp_val__33992_34001,_STAR_print_fn_STAR__temp_val__33993_34002,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33991_34000;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33990_33999;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__18969__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33994_34003 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33995_34004 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33996_34005 = true;
var _STAR_print_fn_STAR__temp_val__33997_34006 = ((function (_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18970__auto__){
return sb__18969__auto__.append(x__18970__auto__);
});})(_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33996_34005;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33997_34006;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,_STAR_print_fn_STAR__temp_val__33997_34006,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,_STAR_print_fn_STAR__temp_val__33997_34006,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__33985_SHARP_){
return cljs.core.dissoc.call(null,p1__33985_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,_STAR_print_fn_STAR__temp_val__33997_34006,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__33994_34003,_STAR_print_fn_STAR__orig_val__33995_34004,_STAR_print_newline_STAR__temp_val__33996_34005,_STAR_print_fn_STAR__temp_val__33997_34006,sb__18969__auto__,G__33989,G__33989__$1,loc,class_name,simple_class,cause_type,format,map__33987,map__33987__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33995_34004;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33994_34003;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18969__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33989__$1)].join('')));

}
});
klipse_clj.lang.cljs_repl.error__GT_str = (function klipse_clj$lang$cljs_repl$error__GT_str(error){
return klipse_clj.lang.cljs_repl.ex_str.call(null,klipse_clj.lang.cljs_repl.ex_triage.call(null,klipse_clj.lang.cljs_repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=cljs_repl.js.map
