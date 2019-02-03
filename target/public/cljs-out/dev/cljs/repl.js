// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30699){
var map__30700 = p__30699;
var map__30700__$1 = (((((!((map__30700 == null))))?(((((map__30700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);
var m = map__30700__$1;
var n = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30702_30734 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30703_30735 = null;
var count__30704_30736 = (0);
var i__30705_30737 = (0);
while(true){
if((i__30705_30737 < count__30704_30736)){
var f_30738 = cljs.core._nth.call(null,chunk__30703_30735,i__30705_30737);
cljs.core.println.call(null,"  ",f_30738);


var G__30739 = seq__30702_30734;
var G__30740 = chunk__30703_30735;
var G__30741 = count__30704_30736;
var G__30742 = (i__30705_30737 + (1));
seq__30702_30734 = G__30739;
chunk__30703_30735 = G__30740;
count__30704_30736 = G__30741;
i__30705_30737 = G__30742;
continue;
} else {
var temp__5720__auto___30743 = cljs.core.seq.call(null,seq__30702_30734);
if(temp__5720__auto___30743){
var seq__30702_30744__$1 = temp__5720__auto___30743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30702_30744__$1)){
var c__4550__auto___30745 = cljs.core.chunk_first.call(null,seq__30702_30744__$1);
var G__30746 = cljs.core.chunk_rest.call(null,seq__30702_30744__$1);
var G__30747 = c__4550__auto___30745;
var G__30748 = cljs.core.count.call(null,c__4550__auto___30745);
var G__30749 = (0);
seq__30702_30734 = G__30746;
chunk__30703_30735 = G__30747;
count__30704_30736 = G__30748;
i__30705_30737 = G__30749;
continue;
} else {
var f_30750 = cljs.core.first.call(null,seq__30702_30744__$1);
cljs.core.println.call(null,"  ",f_30750);


var G__30751 = cljs.core.next.call(null,seq__30702_30744__$1);
var G__30752 = null;
var G__30753 = (0);
var G__30754 = (0);
seq__30702_30734 = G__30751;
chunk__30703_30735 = G__30752;
count__30704_30736 = G__30753;
i__30705_30737 = G__30754;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30755 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30755);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30755)))?cljs.core.second.call(null,arglists_30755):arglists_30755));
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
var seq__30706_30756 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30707_30757 = null;
var count__30708_30758 = (0);
var i__30709_30759 = (0);
while(true){
if((i__30709_30759 < count__30708_30758)){
var vec__30720_30760 = cljs.core._nth.call(null,chunk__30707_30757,i__30709_30759);
var name_30761 = cljs.core.nth.call(null,vec__30720_30760,(0),null);
var map__30723_30762 = cljs.core.nth.call(null,vec__30720_30760,(1),null);
var map__30723_30763__$1 = (((((!((map__30723_30762 == null))))?(((((map__30723_30762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30723_30762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30723_30762):map__30723_30762);
var doc_30764 = cljs.core.get.call(null,map__30723_30763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30765 = cljs.core.get.call(null,map__30723_30763__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30761);

cljs.core.println.call(null," ",arglists_30765);

if(cljs.core.truth_(doc_30764)){
cljs.core.println.call(null," ",doc_30764);
} else {
}


var G__30766 = seq__30706_30756;
var G__30767 = chunk__30707_30757;
var G__30768 = count__30708_30758;
var G__30769 = (i__30709_30759 + (1));
seq__30706_30756 = G__30766;
chunk__30707_30757 = G__30767;
count__30708_30758 = G__30768;
i__30709_30759 = G__30769;
continue;
} else {
var temp__5720__auto___30770 = cljs.core.seq.call(null,seq__30706_30756);
if(temp__5720__auto___30770){
var seq__30706_30771__$1 = temp__5720__auto___30770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30706_30771__$1)){
var c__4550__auto___30772 = cljs.core.chunk_first.call(null,seq__30706_30771__$1);
var G__30773 = cljs.core.chunk_rest.call(null,seq__30706_30771__$1);
var G__30774 = c__4550__auto___30772;
var G__30775 = cljs.core.count.call(null,c__4550__auto___30772);
var G__30776 = (0);
seq__30706_30756 = G__30773;
chunk__30707_30757 = G__30774;
count__30708_30758 = G__30775;
i__30709_30759 = G__30776;
continue;
} else {
var vec__30725_30777 = cljs.core.first.call(null,seq__30706_30771__$1);
var name_30778 = cljs.core.nth.call(null,vec__30725_30777,(0),null);
var map__30728_30779 = cljs.core.nth.call(null,vec__30725_30777,(1),null);
var map__30728_30780__$1 = (((((!((map__30728_30779 == null))))?(((((map__30728_30779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30728_30779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30728_30779):map__30728_30779);
var doc_30781 = cljs.core.get.call(null,map__30728_30780__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30782 = cljs.core.get.call(null,map__30728_30780__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30778);

cljs.core.println.call(null," ",arglists_30782);

if(cljs.core.truth_(doc_30781)){
cljs.core.println.call(null," ",doc_30781);
} else {
}


var G__30783 = cljs.core.next.call(null,seq__30706_30771__$1);
var G__30784 = null;
var G__30785 = (0);
var G__30786 = (0);
seq__30706_30756 = G__30783;
chunk__30707_30757 = G__30784;
count__30708_30758 = G__30785;
i__30709_30759 = G__30786;
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

var seq__30730 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30731 = null;
var count__30732 = (0);
var i__30733 = (0);
while(true){
if((i__30733 < count__30732)){
var role = cljs.core._nth.call(null,chunk__30731,i__30733);
var temp__5720__auto___30787__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30787__$1)){
var spec_30788 = temp__5720__auto___30787__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30788));
} else {
}


var G__30789 = seq__30730;
var G__30790 = chunk__30731;
var G__30791 = count__30732;
var G__30792 = (i__30733 + (1));
seq__30730 = G__30789;
chunk__30731 = G__30790;
count__30732 = G__30791;
i__30733 = G__30792;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30730);
if(temp__5720__auto____$1){
var seq__30730__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30730__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30730__$1);
var G__30793 = cljs.core.chunk_rest.call(null,seq__30730__$1);
var G__30794 = c__4550__auto__;
var G__30795 = cljs.core.count.call(null,c__4550__auto__);
var G__30796 = (0);
seq__30730 = G__30793;
chunk__30731 = G__30794;
count__30732 = G__30795;
i__30733 = G__30796;
continue;
} else {
var role = cljs.core.first.call(null,seq__30730__$1);
var temp__5720__auto___30797__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30797__$2)){
var spec_30798 = temp__5720__auto___30797__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30798));
} else {
}


var G__30799 = cljs.core.next.call(null,seq__30730__$1);
var G__30800 = null;
var G__30801 = (0);
var G__30802 = (0);
seq__30730 = G__30799;
chunk__30731 = G__30800;
count__30732 = G__30801;
i__30733 = G__30802;
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
var G__30803 = cljs.core.conj.call(null,via,t);
var G__30804 = cljs.core.ex_cause.call(null,t);
via = G__30803;
t = G__30804;
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
var map__30807 = datafied_throwable;
var map__30807__$1 = (((((!((map__30807 == null))))?(((((map__30807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30807):map__30807);
var via = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30808 = cljs.core.last.call(null,via);
var map__30808__$1 = (((((!((map__30808 == null))))?(((((map__30808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30808):map__30808);
var type = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30808__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30809 = data;
var map__30809__$1 = (((((!((map__30809 == null))))?(((((map__30809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30809):map__30809);
var problems = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30809__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30810 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30810__$1 = (((((!((map__30810 == null))))?(((((map__30810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810):map__30810);
var top_data = map__30810__$1;
var source = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30815 = phase;
var G__30815__$1 = (((G__30815 instanceof cljs.core.Keyword))?G__30815.fqn:null);
switch (G__30815__$1) {
case "read-source":
var map__30816 = data;
var map__30816__$1 = (((((!((map__30816 == null))))?(((((map__30816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);
var line = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30818 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30818__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30818,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30818);
var G__30818__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30818__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30818__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30818__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30818__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30819 = top_data;
var G__30819__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30819,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30819);
var G__30819__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30819__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30819__$1);
var G__30819__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30819__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30819__$2);
var G__30819__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30819__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30819__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30819__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30819__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30820 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30820,(0),null);
var method = cljs.core.nth.call(null,vec__30820,(1),null);
var file = cljs.core.nth.call(null,vec__30820,(2),null);
var line = cljs.core.nth.call(null,vec__30820,(3),null);
var G__30823 = top_data;
var G__30823__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30823,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30823);
var G__30823__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30823__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30823__$1);
var G__30823__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30823__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30823__$2);
var G__30823__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30823__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30823__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30823__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30823__$4;
}

break;
case "execution":
var vec__30824 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30824,(0),null);
var method = cljs.core.nth.call(null,vec__30824,(1),null);
var file = cljs.core.nth.call(null,vec__30824,(2),null);
var line = cljs.core.nth.call(null,vec__30824,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30824,source__$1,method,file,line,G__30815,G__30815__$1,map__30807,map__30807__$1,via,trace,phase,map__30808,map__30808__$1,type,message,data,map__30809,map__30809__$1,problems,fn,caller,map__30810,map__30810__$1,top_data,source){
return (function (p1__30806_SHARP_){
var or__4131__auto__ = (p1__30806_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30806_SHARP_);
}
});})(vec__30824,source__$1,method,file,line,G__30815,G__30815__$1,map__30807,map__30807__$1,via,trace,phase,map__30808,map__30808__$1,type,message,data,map__30809,map__30809__$1,problems,fn,caller,map__30810,map__30810__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30827 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30827__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30827,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30827);
var G__30827__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30827__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30827__$1);
var G__30827__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__30827__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30827__$2);
var G__30827__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30827__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30827__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30827__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30827__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30815__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30831){
var map__30832 = p__30831;
var map__30832__$1 = (((((!((map__30832 == null))))?(((((map__30832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30832):map__30832);
var triage_data = map__30832__$1;
var phase = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30832__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30834 = phase;
var G__30834__$1 = (((G__30834 instanceof cljs.core.Keyword))?G__30834.fqn:null);
switch (G__30834__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30835_30844 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30836_30845 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30837_30846 = true;
var _STAR_print_fn_STAR__temp_val__30838_30847 = ((function (_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30837_30846;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30838_30847;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,_STAR_print_fn_STAR__temp_val__30838_30847,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,_STAR_print_fn_STAR__temp_val__30838_30847,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30829_SHARP_){
return cljs.core.dissoc.call(null,p1__30829_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,_STAR_print_fn_STAR__temp_val__30838_30847,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30835_30844,_STAR_print_fn_STAR__orig_val__30836_30845,_STAR_print_newline_STAR__temp_val__30837_30846,_STAR_print_fn_STAR__temp_val__30838_30847,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30836_30845;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30835_30844;
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
var _STAR_print_newline_STAR__orig_val__30839_30848 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30840_30849 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30841_30850 = true;
var _STAR_print_fn_STAR__temp_val__30842_30851 = ((function (_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30841_30850;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30842_30851;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,_STAR_print_fn_STAR__temp_val__30842_30851,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,_STAR_print_fn_STAR__temp_val__30842_30851,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30830_SHARP_){
return cljs.core.dissoc.call(null,p1__30830_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,_STAR_print_fn_STAR__temp_val__30842_30851,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30839_30848,_STAR_print_fn_STAR__orig_val__30840_30849,_STAR_print_newline_STAR__temp_val__30841_30850,_STAR_print_fn_STAR__temp_val__30842_30851,sb__4661__auto__,G__30834,G__30834__$1,loc,class_name,simple_class,cause_type,format,map__30832,map__30832__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30840_30849;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30839_30848;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30834__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
