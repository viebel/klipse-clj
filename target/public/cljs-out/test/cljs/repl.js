// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20923){
var map__20924 = p__20923;
var map__20924__$1 = (((((!((map__20924 == null))))?(((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var m = map__20924__$1;
var n = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20926_20958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20927_20959 = null;
var count__20928_20960 = (0);
var i__20929_20961 = (0);
while(true){
if((i__20929_20961 < count__20928_20960)){
var f_20962 = cljs.core._nth.call(null,chunk__20927_20959,i__20929_20961);
cljs.core.println.call(null,"  ",f_20962);


var G__20963 = seq__20926_20958;
var G__20964 = chunk__20927_20959;
var G__20965 = count__20928_20960;
var G__20966 = (i__20929_20961 + (1));
seq__20926_20958 = G__20963;
chunk__20927_20959 = G__20964;
count__20928_20960 = G__20965;
i__20929_20961 = G__20966;
continue;
} else {
var temp__5804__auto___20967 = cljs.core.seq.call(null,seq__20926_20958);
if(temp__5804__auto___20967){
var seq__20926_20968__$1 = temp__5804__auto___20967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20926_20968__$1)){
var c__4550__auto___20969 = cljs.core.chunk_first.call(null,seq__20926_20968__$1);
var G__20970 = cljs.core.chunk_rest.call(null,seq__20926_20968__$1);
var G__20971 = c__4550__auto___20969;
var G__20972 = cljs.core.count.call(null,c__4550__auto___20969);
var G__20973 = (0);
seq__20926_20958 = G__20970;
chunk__20927_20959 = G__20971;
count__20928_20960 = G__20972;
i__20929_20961 = G__20973;
continue;
} else {
var f_20974 = cljs.core.first.call(null,seq__20926_20968__$1);
cljs.core.println.call(null,"  ",f_20974);


var G__20975 = cljs.core.next.call(null,seq__20926_20968__$1);
var G__20976 = null;
var G__20977 = (0);
var G__20978 = (0);
seq__20926_20958 = G__20975;
chunk__20927_20959 = G__20976;
count__20928_20960 = G__20977;
i__20929_20961 = G__20978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20979);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20979)))?cljs.core.second.call(null,arglists_20979):arglists_20979));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20930_20980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20931_20981 = null;
var count__20932_20982 = (0);
var i__20933_20983 = (0);
while(true){
if((i__20933_20983 < count__20932_20982)){
var vec__20944_20984 = cljs.core._nth.call(null,chunk__20931_20981,i__20933_20983);
var name_20985 = cljs.core.nth.call(null,vec__20944_20984,(0),null);
var map__20947_20986 = cljs.core.nth.call(null,vec__20944_20984,(1),null);
var map__20947_20987__$1 = (((((!((map__20947_20986 == null))))?(((((map__20947_20986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20947_20986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20947_20986):map__20947_20986);
var doc_20988 = cljs.core.get.call(null,map__20947_20987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20989 = cljs.core.get.call(null,map__20947_20987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20985);

cljs.core.println.call(null," ",arglists_20989);

if(cljs.core.truth_(doc_20988)){
cljs.core.println.call(null," ",doc_20988);
} else {
}


var G__20990 = seq__20930_20980;
var G__20991 = chunk__20931_20981;
var G__20992 = count__20932_20982;
var G__20993 = (i__20933_20983 + (1));
seq__20930_20980 = G__20990;
chunk__20931_20981 = G__20991;
count__20932_20982 = G__20992;
i__20933_20983 = G__20993;
continue;
} else {
var temp__5804__auto___20994 = cljs.core.seq.call(null,seq__20930_20980);
if(temp__5804__auto___20994){
var seq__20930_20995__$1 = temp__5804__auto___20994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20930_20995__$1)){
var c__4550__auto___20996 = cljs.core.chunk_first.call(null,seq__20930_20995__$1);
var G__20997 = cljs.core.chunk_rest.call(null,seq__20930_20995__$1);
var G__20998 = c__4550__auto___20996;
var G__20999 = cljs.core.count.call(null,c__4550__auto___20996);
var G__21000 = (0);
seq__20930_20980 = G__20997;
chunk__20931_20981 = G__20998;
count__20932_20982 = G__20999;
i__20933_20983 = G__21000;
continue;
} else {
var vec__20949_21001 = cljs.core.first.call(null,seq__20930_20995__$1);
var name_21002 = cljs.core.nth.call(null,vec__20949_21001,(0),null);
var map__20952_21003 = cljs.core.nth.call(null,vec__20949_21001,(1),null);
var map__20952_21004__$1 = (((((!((map__20952_21003 == null))))?(((((map__20952_21003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20952_21003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20952_21003):map__20952_21003);
var doc_21005 = cljs.core.get.call(null,map__20952_21004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21006 = cljs.core.get.call(null,map__20952_21004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21002);

cljs.core.println.call(null," ",arglists_21006);

if(cljs.core.truth_(doc_21005)){
cljs.core.println.call(null," ",doc_21005);
} else {
}


var G__21007 = cljs.core.next.call(null,seq__20930_20995__$1);
var G__21008 = null;
var G__21009 = (0);
var G__21010 = (0);
seq__20930_20980 = G__21007;
chunk__20931_20981 = G__21008;
count__20932_20982 = G__21009;
i__20933_20983 = G__21010;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__20954 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20955 = null;
var count__20956 = (0);
var i__20957 = (0);
while(true){
if((i__20957 < count__20956)){
var role = cljs.core._nth.call(null,chunk__20955,i__20957);
var temp__5804__auto___21011__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21011__$1)){
var spec_21012 = temp__5804__auto___21011__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21012));
} else {
}


var G__21013 = seq__20954;
var G__21014 = chunk__20955;
var G__21015 = count__20956;
var G__21016 = (i__20957 + (1));
seq__20954 = G__21013;
chunk__20955 = G__21014;
count__20956 = G__21015;
i__20957 = G__21016;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__20954);
if(temp__5804__auto____$1){
var seq__20954__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20954__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__20954__$1);
var G__21017 = cljs.core.chunk_rest.call(null,seq__20954__$1);
var G__21018 = c__4550__auto__;
var G__21019 = cljs.core.count.call(null,c__4550__auto__);
var G__21020 = (0);
seq__20954 = G__21017;
chunk__20955 = G__21018;
count__20956 = G__21019;
i__20957 = G__21020;
continue;
} else {
var role = cljs.core.first.call(null,seq__20954__$1);
var temp__5804__auto___21021__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21021__$2)){
var spec_21022 = temp__5804__auto___21021__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21022));
} else {
}


var G__21023 = cljs.core.next.call(null,seq__20954__$1);
var G__21024 = null;
var G__21025 = (0);
var G__21026 = (0);
seq__20954 = G__21023;
chunk__20955 = G__21024;
count__20956 = G__21025;
i__20957 = G__21026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
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
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
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
var G__21027 = cljs.core.conj.call(null,via,t);
var G__21028 = cljs.core.ex_cause.call(null,t);
via = G__21027;
t = G__21028;
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
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21031 = datafied_throwable;
var map__21031__$1 = (((((!((map__21031 == null))))?(((((map__21031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21031):map__21031);
var via = cljs.core.get.call(null,map__21031__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21031__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21031__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21032 = cljs.core.last.call(null,via);
var map__21032__$1 = (((((!((map__21032 == null))))?(((((map__21032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21032):map__21032);
var type = cljs.core.get.call(null,map__21032__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21032__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21033 = data;
var map__21033__$1 = (((((!((map__21033 == null))))?(((((map__21033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21033):map__21033);
var problems = cljs.core.get.call(null,map__21033__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21033__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21033__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21034 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21034__$1 = (((((!((map__21034 == null))))?(((((map__21034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21034):map__21034);
var top_data = map__21034__$1;
var source = cljs.core.get.call(null,map__21034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21039 = phase;
var G__21039__$1 = (((G__21039 instanceof cljs.core.Keyword))?G__21039.fqn:null);
switch (G__21039__$1) {
case "read-source":
var map__21040 = data;
var map__21040__$1 = (((((!((map__21040 == null))))?(((((map__21040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21040):map__21040);
var line = cljs.core.get.call(null,map__21040__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21040__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21042 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21042__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21042,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21042);
var G__21042__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21042__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21042__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21042__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21042__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21043 = top_data;
var G__21043__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21043,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21043);
var G__21043__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21043__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21043__$1);
var G__21043__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21043__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21043__$2);
var G__21043__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21043__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21043__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21043__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21043__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21044 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21044,(0),null);
var method = cljs.core.nth.call(null,vec__21044,(1),null);
var file = cljs.core.nth.call(null,vec__21044,(2),null);
var line = cljs.core.nth.call(null,vec__21044,(3),null);
var G__21047 = top_data;
var G__21047__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21047,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21047);
var G__21047__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21047__$1);
var G__21047__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__21047__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21047__$2);
var G__21047__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21047__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21047__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21047__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21047__$4;
}

break;
case "execution":
var vec__21048 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21048,(0),null);
var method = cljs.core.nth.call(null,vec__21048,(1),null);
var file = cljs.core.nth.call(null,vec__21048,(2),null);
var line = cljs.core.nth.call(null,vec__21048,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__21048,source__$1,method,file,line,G__21039,G__21039__$1,map__21031,map__21031__$1,via,trace,phase,map__21032,map__21032__$1,type,message,data,map__21033,map__21033__$1,problems,fn,caller,map__21034,map__21034__$1,top_data,source){
return (function (p1__21030_SHARP_){
var or__4131__auto__ = (p1__21030_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21030_SHARP_);
}
});})(vec__21048,source__$1,method,file,line,G__21039,G__21039__$1,map__21031,map__21031__$1,via,trace,phase,map__21032,map__21032__$1,type,message,data,map__21033,map__21033__$1,problems,fn,caller,map__21034,map__21034__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21051 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21051__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21051,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21051);
var G__21051__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21051__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21051__$1);
var G__21051__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__21051__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21051__$2);
var G__21051__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21051__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21051__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21051__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21051__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21039__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21055){
var map__21056 = p__21055;
var map__21056__$1 = (((((!((map__21056 == null))))?(((((map__21056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);
var triage_data = map__21056__$1;
var phase = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21058 = phase;
var G__21058__$1 = (((G__21058 instanceof cljs.core.Keyword))?G__21058.fqn:null);
switch (G__21058__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21059_21068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21060_21069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21061_21070 = true;
var _STAR_print_fn_STAR__temp_val__21062_21071 = ((function (_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21061_21070;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21062_21071;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,_STAR_print_fn_STAR__temp_val__21062_21071,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,_STAR_print_fn_STAR__temp_val__21062_21071,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21053_SHARP_){
return cljs.core.dissoc.call(null,p1__21053_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,_STAR_print_fn_STAR__temp_val__21062_21071,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21059_21068,_STAR_print_fn_STAR__orig_val__21060_21069,_STAR_print_newline_STAR__temp_val__21061_21070,_STAR_print_fn_STAR__temp_val__21062_21071,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21060_21069;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21059_21068;
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
var _STAR_print_newline_STAR__orig_val__21063_21072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21064_21073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21065_21074 = true;
var _STAR_print_fn_STAR__temp_val__21066_21075 = ((function (_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21065_21074;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21066_21075;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,_STAR_print_fn_STAR__temp_val__21066_21075,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,_STAR_print_fn_STAR__temp_val__21066_21075,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21054_SHARP_){
return cljs.core.dissoc.call(null,p1__21054_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,_STAR_print_fn_STAR__temp_val__21066_21075,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21063_21072,_STAR_print_fn_STAR__orig_val__21064_21073,_STAR_print_newline_STAR__temp_val__21065_21074,_STAR_print_fn_STAR__temp_val__21066_21075,sb__4661__auto__,G__21058,G__21058__$1,loc,class_name,simple_class,cause_type,format,map__21056,map__21056__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21064_21073;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21063_21072;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21058__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
