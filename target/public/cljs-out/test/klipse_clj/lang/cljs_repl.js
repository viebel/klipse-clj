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
)))))))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
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
var G__22844 = cljs.core.conj.call(null,via,t);
var G__22845 = cljs.core.ex_cause.call(null,t);
via = G__22844;
t = G__22845;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
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
var map__22848 = datafied_throwable;
var map__22848__$1 = (((((!((map__22848 == null))))?(((((map__22848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22848):map__22848);
var via = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__22848__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__22849 = cljs.core.last.call(null,via);
var map__22849__$1 = (((((!((map__22849 == null))))?(((((map__22849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22849):map__22849);
var type = cljs.core.get.call(null,map__22849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__22849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__22849__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__22850 = data;
var map__22850__$1 = (((((!((map__22850 == null))))?(((((map__22850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22850):map__22850);
var problems = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__22851 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__22851__$1 = (((((!((map__22851 == null))))?(((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var top_data = map__22851__$1;
var source = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__22856 = phase;
var G__22856__$1 = (((G__22856 instanceof cljs.core.Keyword))?G__22856.fqn:null);
switch (G__22856__$1) {
case "read-source":
var map__22857 = data;
var map__22857__$1 = (((((!((map__22857 == null))))?(((((map__22857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22857):map__22857);
var line = cljs.core.get.call(null,map__22857__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22857__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__22859 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__22859__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22859,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22859);
var G__22859__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22859__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22859__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22859__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22859__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__22860 = top_data;
var G__22860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__22860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__22860);
var G__22860__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__22860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__22860__$1);
var G__22860__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22860__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22860__$2);
var G__22860__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22860__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22860__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__22861 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22861,(0),null);
var method = cljs.core.nth.call(null,vec__22861,(1),null);
var file = cljs.core.nth.call(null,vec__22861,(2),null);
var line = cljs.core.nth.call(null,vec__22861,(3),null);
var G__22864 = top_data;
var G__22864__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__22864,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__22864);
var G__22864__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__22864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__22864__$1);
var G__22864__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__22864__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__22864__$2);
var G__22864__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__22864__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__22864__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__22864__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__22864__$4;
}

break;
case "execution":
var vec__22865 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__22865,(0),null);
var method = cljs.core.nth.call(null,vec__22865,(1),null);
var file = cljs.core.nth.call(null,vec__22865,(2),null);
var line = cljs.core.nth.call(null,vec__22865,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__22865,source__$1,method,file,line,G__22856,G__22856__$1,map__22848,map__22848__$1,via,trace,phase,map__22849,map__22849__$1,type,message,data,map__22850,map__22850__$1,problems,fn,caller,map__22851,map__22851__$1,top_data,source){
return (function (p1__22847_SHARP_){
var or__4131__auto__ = (p1__22847_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__22847_SHARP_);
}
});})(vec__22865,source__$1,method,file,line,G__22856,G__22856__$1,map__22848,map__22848__$1,via,trace,phase,map__22849,map__22849__$1,type,message,data,map__22850,map__22850__$1,problems,fn,caller,map__22851,map__22851__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__22868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__22868__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__22868,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__22868);
var G__22868__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__22868__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__22868__$1);
var G__22868__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__22868__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__22868__$2);
var G__22868__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__22868__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__22868__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__22868__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__22868__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22856__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
klipse_clj.lang.cljs_repl.ex_str = (function klipse_clj$lang$cljs_repl$ex_str(p__22872){
var map__22873 = p__22872;
var map__22873__$1 = (((((!((map__22873 == null))))?(((((map__22873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22873):map__22873);
var triage_data = map__22873__$1;
var phase = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__22875 = phase;
var G__22875__$1 = (((G__22875 instanceof cljs.core.Keyword))?G__22875.fqn:null);
switch (G__22875__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22876_22885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22877_22886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22878_22887 = true;
var _STAR_print_fn_STAR__temp_val__22879_22888 = ((function (_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22878_22887;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22879_22888;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,_STAR_print_fn_STAR__temp_val__22879_22888,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,_STAR_print_fn_STAR__temp_val__22879_22888,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22870_SHARP_){
return cljs.core.dissoc.call(null,p1__22870_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,_STAR_print_fn_STAR__temp_val__22879_22888,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22876_22885,_STAR_print_fn_STAR__orig_val__22877_22886,_STAR_print_newline_STAR__temp_val__22878_22887,_STAR_print_fn_STAR__temp_val__22879_22888,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22877_22886;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22876_22885;
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
var _STAR_print_newline_STAR__orig_val__22880_22889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22881_22890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22882_22891 = true;
var _STAR_print_fn_STAR__temp_val__22883_22892 = ((function (_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22882_22891;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22883_22892;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,_STAR_print_fn_STAR__temp_val__22883_22892,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,_STAR_print_fn_STAR__temp_val__22883_22892,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__22871_SHARP_){
return cljs.core.dissoc.call(null,p1__22871_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,_STAR_print_fn_STAR__temp_val__22883_22892,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__22880_22889,_STAR_print_fn_STAR__orig_val__22881_22890,_STAR_print_newline_STAR__temp_val__22882_22891,_STAR_print_fn_STAR__temp_val__22883_22892,sb__4661__auto__,G__22875,G__22875__$1,loc,class_name,simple_class,cause_type,format,map__22873,map__22873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22881_22890;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22880_22889;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22875__$1)].join('')));

}
});
klipse_clj.lang.cljs_repl.error__GT_str = (function klipse_clj$lang$cljs_repl$error__GT_str(error){
return klipse_clj.lang.cljs_repl.ex_str.call(null,klipse_clj.lang.cljs_repl.ex_triage.call(null,klipse_clj.lang.cljs_repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=cljs_repl.js.map