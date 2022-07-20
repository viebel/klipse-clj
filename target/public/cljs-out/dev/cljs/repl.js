// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20920){
var map__20921 = p__20920;
var map__20921__$1 = (((((!((map__20921 == null))))?(((((map__20921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20921):map__20921);
var m = map__20921__$1;
var n = cljs.core.get.call(null,map__20921__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20921__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__20923_20955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20924_20956 = null;
var count__20925_20957 = (0);
var i__20926_20958 = (0);
while(true){
if((i__20926_20958 < count__20925_20957)){
var f_20959 = cljs.core._nth.call(null,chunk__20924_20956,i__20926_20958);
cljs.core.println.call(null,"  ",f_20959);


var G__20960 = seq__20923_20955;
var G__20961 = chunk__20924_20956;
var G__20962 = count__20925_20957;
var G__20963 = (i__20926_20958 + (1));
seq__20923_20955 = G__20960;
chunk__20924_20956 = G__20961;
count__20925_20957 = G__20962;
i__20926_20958 = G__20963;
continue;
} else {
var temp__5720__auto___20964 = cljs.core.seq.call(null,seq__20923_20955);
if(temp__5720__auto___20964){
var seq__20923_20965__$1 = temp__5720__auto___20964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20923_20965__$1)){
var c__4550__auto___20966 = cljs.core.chunk_first.call(null,seq__20923_20965__$1);
var G__20967 = cljs.core.chunk_rest.call(null,seq__20923_20965__$1);
var G__20968 = c__4550__auto___20966;
var G__20969 = cljs.core.count.call(null,c__4550__auto___20966);
var G__20970 = (0);
seq__20923_20955 = G__20967;
chunk__20924_20956 = G__20968;
count__20925_20957 = G__20969;
i__20926_20958 = G__20970;
continue;
} else {
var f_20971 = cljs.core.first.call(null,seq__20923_20965__$1);
cljs.core.println.call(null,"  ",f_20971);


var G__20972 = cljs.core.next.call(null,seq__20923_20965__$1);
var G__20973 = null;
var G__20974 = (0);
var G__20975 = (0);
seq__20923_20955 = G__20972;
chunk__20924_20956 = G__20973;
count__20925_20957 = G__20974;
i__20926_20958 = G__20975;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20976 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20976);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20976)))?cljs.core.second.call(null,arglists_20976):arglists_20976));
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
var seq__20927_20977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20928_20978 = null;
var count__20929_20979 = (0);
var i__20930_20980 = (0);
while(true){
if((i__20930_20980 < count__20929_20979)){
var vec__20941_20981 = cljs.core._nth.call(null,chunk__20928_20978,i__20930_20980);
var name_20982 = cljs.core.nth.call(null,vec__20941_20981,(0),null);
var map__20944_20983 = cljs.core.nth.call(null,vec__20941_20981,(1),null);
var map__20944_20984__$1 = (((((!((map__20944_20983 == null))))?(((((map__20944_20983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20944_20983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20944_20983):map__20944_20983);
var doc_20985 = cljs.core.get.call(null,map__20944_20984__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20986 = cljs.core.get.call(null,map__20944_20984__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20982);

cljs.core.println.call(null," ",arglists_20986);

if(cljs.core.truth_(doc_20985)){
cljs.core.println.call(null," ",doc_20985);
} else {
}


var G__20987 = seq__20927_20977;
var G__20988 = chunk__20928_20978;
var G__20989 = count__20929_20979;
var G__20990 = (i__20930_20980 + (1));
seq__20927_20977 = G__20987;
chunk__20928_20978 = G__20988;
count__20929_20979 = G__20989;
i__20930_20980 = G__20990;
continue;
} else {
var temp__5720__auto___20991 = cljs.core.seq.call(null,seq__20927_20977);
if(temp__5720__auto___20991){
var seq__20927_20992__$1 = temp__5720__auto___20991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20927_20992__$1)){
var c__4550__auto___20993 = cljs.core.chunk_first.call(null,seq__20927_20992__$1);
var G__20994 = cljs.core.chunk_rest.call(null,seq__20927_20992__$1);
var G__20995 = c__4550__auto___20993;
var G__20996 = cljs.core.count.call(null,c__4550__auto___20993);
var G__20997 = (0);
seq__20927_20977 = G__20994;
chunk__20928_20978 = G__20995;
count__20929_20979 = G__20996;
i__20930_20980 = G__20997;
continue;
} else {
var vec__20946_20998 = cljs.core.first.call(null,seq__20927_20992__$1);
var name_20999 = cljs.core.nth.call(null,vec__20946_20998,(0),null);
var map__20949_21000 = cljs.core.nth.call(null,vec__20946_20998,(1),null);
var map__20949_21001__$1 = (((((!((map__20949_21000 == null))))?(((((map__20949_21000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20949_21000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20949_21000):map__20949_21000);
var doc_21002 = cljs.core.get.call(null,map__20949_21001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21003 = cljs.core.get.call(null,map__20949_21001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20999);

cljs.core.println.call(null," ",arglists_21003);

if(cljs.core.truth_(doc_21002)){
cljs.core.println.call(null," ",doc_21002);
} else {
}


var G__21004 = cljs.core.next.call(null,seq__20927_20992__$1);
var G__21005 = null;
var G__21006 = (0);
var G__21007 = (0);
seq__20927_20977 = G__21004;
chunk__20928_20978 = G__21005;
count__20929_20979 = G__21006;
i__20930_20980 = G__21007;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__20951 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20952 = null;
var count__20953 = (0);
var i__20954 = (0);
while(true){
if((i__20954 < count__20953)){
var role = cljs.core._nth.call(null,chunk__20952,i__20954);
var temp__5720__auto___21008__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21008__$1)){
var spec_21009 = temp__5720__auto___21008__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21009));
} else {
}


var G__21010 = seq__20951;
var G__21011 = chunk__20952;
var G__21012 = count__20953;
var G__21013 = (i__20954 + (1));
seq__20951 = G__21010;
chunk__20952 = G__21011;
count__20953 = G__21012;
i__20954 = G__21013;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20951);
if(temp__5720__auto____$1){
var seq__20951__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20951__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__20951__$1);
var G__21014 = cljs.core.chunk_rest.call(null,seq__20951__$1);
var G__21015 = c__4550__auto__;
var G__21016 = cljs.core.count.call(null,c__4550__auto__);
var G__21017 = (0);
seq__20951 = G__21014;
chunk__20952 = G__21015;
count__20953 = G__21016;
i__20954 = G__21017;
continue;
} else {
var role = cljs.core.first.call(null,seq__20951__$1);
var temp__5720__auto___21018__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21018__$2)){
var spec_21019 = temp__5720__auto___21018__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21019));
} else {
}


var G__21020 = cljs.core.next.call(null,seq__20951__$1);
var G__21021 = null;
var G__21022 = (0);
var G__21023 = (0);
seq__20951 = G__21020;
chunk__20952 = G__21021;
count__20953 = G__21022;
i__20954 = G__21023;
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
var G__21024 = cljs.core.conj.call(null,via,t);
var G__21025 = cljs.core.ex_cause.call(null,t);
via = G__21024;
t = G__21025;
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
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21028 = datafied_throwable;
var map__21028__$1 = (((((!((map__21028 == null))))?(((((map__21028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21028):map__21028);
var via = cljs.core.get.call(null,map__21028__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21028__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21028__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21029 = cljs.core.last.call(null,via);
var map__21029__$1 = (((((!((map__21029 == null))))?(((((map__21029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21029):map__21029);
var type = cljs.core.get.call(null,map__21029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21029__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21029__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21030 = data;
var map__21030__$1 = (((((!((map__21030 == null))))?(((((map__21030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21030):map__21030);
var problems = cljs.core.get.call(null,map__21030__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21030__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21030__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21031 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21031__$1 = (((((!((map__21031 == null))))?(((((map__21031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21031):map__21031);
var top_data = map__21031__$1;
var source = cljs.core.get.call(null,map__21031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21036 = phase;
var G__21036__$1 = (((G__21036 instanceof cljs.core.Keyword))?G__21036.fqn:null);
switch (G__21036__$1) {
case "read-source":
var map__21037 = data;
var map__21037__$1 = (((((!((map__21037 == null))))?(((((map__21037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21037):map__21037);
var line = cljs.core.get.call(null,map__21037__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21037__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21039 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21039);
var G__21039__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21039__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21039__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21039__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21040 = top_data;
var G__21040__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21040,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21040);
var G__21040__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21040__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21040__$1);
var G__21040__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21040__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21040__$2);
var G__21040__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21040__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21040__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21040__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21040__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21041 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21041,(0),null);
var method = cljs.core.nth.call(null,vec__21041,(1),null);
var file = cljs.core.nth.call(null,vec__21041,(2),null);
var line = cljs.core.nth.call(null,vec__21041,(3),null);
var G__21044 = top_data;
var G__21044__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21044,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21044);
var G__21044__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21044__$1);
var G__21044__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__21044__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21044__$2);
var G__21044__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21044__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21044__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21044__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21044__$4;
}

break;
case "execution":
var vec__21045 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21045,(0),null);
var method = cljs.core.nth.call(null,vec__21045,(1),null);
var file = cljs.core.nth.call(null,vec__21045,(2),null);
var line = cljs.core.nth.call(null,vec__21045,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__21045,source__$1,method,file,line,G__21036,G__21036__$1,map__21028,map__21028__$1,via,trace,phase,map__21029,map__21029__$1,type,message,data,map__21030,map__21030__$1,problems,fn,caller,map__21031,map__21031__$1,top_data,source){
return (function (p1__21027_SHARP_){
var or__4131__auto__ = (p1__21027_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21027_SHARP_);
}
});})(vec__21045,source__$1,method,file,line,G__21036,G__21036__$1,map__21028,map__21028__$1,via,trace,phase,map__21029,map__21029__$1,type,message,data,map__21030,map__21030__$1,problems,fn,caller,map__21031,map__21031__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21048 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21048__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21048,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21048);
var G__21048__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21048__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21048__$1);
var G__21048__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__21048__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21048__$2);
var G__21048__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21048__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21048__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21048__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21048__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21036__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21052){
var map__21053 = p__21052;
var map__21053__$1 = (((((!((map__21053 == null))))?(((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21053):map__21053);
var triage_data = map__21053__$1;
var phase = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21055 = phase;
var G__21055__$1 = (((G__21055 instanceof cljs.core.Keyword))?G__21055.fqn:null);
switch (G__21055__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21056_21065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21057_21066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21058_21067 = true;
var _STAR_print_fn_STAR__temp_val__21059_21068 = ((function (_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21058_21067;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21059_21068;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,_STAR_print_fn_STAR__temp_val__21059_21068,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,_STAR_print_fn_STAR__temp_val__21059_21068,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21050_SHARP_){
return cljs.core.dissoc.call(null,p1__21050_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,_STAR_print_fn_STAR__temp_val__21059_21068,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21056_21065,_STAR_print_fn_STAR__orig_val__21057_21066,_STAR_print_newline_STAR__temp_val__21058_21067,_STAR_print_fn_STAR__temp_val__21059_21068,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21057_21066;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21056_21065;
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
var _STAR_print_newline_STAR__orig_val__21060_21069 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21061_21070 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21062_21071 = true;
var _STAR_print_fn_STAR__temp_val__21063_21072 = ((function (_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21062_21071;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21063_21072;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,_STAR_print_fn_STAR__temp_val__21063_21072,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,_STAR_print_fn_STAR__temp_val__21063_21072,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21051_SHARP_){
return cljs.core.dissoc.call(null,p1__21051_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,_STAR_print_fn_STAR__temp_val__21063_21072,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21060_21069,_STAR_print_fn_STAR__orig_val__21061_21070,_STAR_print_newline_STAR__temp_val__21062_21071,_STAR_print_fn_STAR__temp_val__21063_21072,sb__4661__auto__,G__21055,G__21055__$1,loc,class_name,simple_class,cause_type,format,map__21053,map__21053__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21061_21070;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21060_21069;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21055__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
