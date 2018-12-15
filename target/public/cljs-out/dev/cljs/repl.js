// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39667){
var map__39668 = p__39667;
var map__39668__$1 = (((((!((map__39668 == null))))?(((((map__39668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39668):map__39668);
var m = map__39668__$1;
var n = cljs.core.get.call(null,map__39668__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39668__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__17825__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__39670_39702 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39671_39703 = null;
var count__39672_39704 = (0);
var i__39673_39705 = (0);
while(true){
if((i__39673_39705 < count__39672_39704)){
var f_39706 = cljs.core._nth.call(null,chunk__39671_39703,i__39673_39705);
cljs.core.println.call(null,"  ",f_39706);


var G__39707 = seq__39670_39702;
var G__39708 = chunk__39671_39703;
var G__39709 = count__39672_39704;
var G__39710 = (i__39673_39705 + (1));
seq__39670_39702 = G__39707;
chunk__39671_39703 = G__39708;
count__39672_39704 = G__39709;
i__39673_39705 = G__39710;
continue;
} else {
var temp__5457__auto___39711 = cljs.core.seq.call(null,seq__39670_39702);
if(temp__5457__auto___39711){
var seq__39670_39712__$1 = temp__5457__auto___39711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39670_39712__$1)){
var c__18782__auto___39713 = cljs.core.chunk_first.call(null,seq__39670_39712__$1);
var G__39714 = cljs.core.chunk_rest.call(null,seq__39670_39712__$1);
var G__39715 = c__18782__auto___39713;
var G__39716 = cljs.core.count.call(null,c__18782__auto___39713);
var G__39717 = (0);
seq__39670_39702 = G__39714;
chunk__39671_39703 = G__39715;
count__39672_39704 = G__39716;
i__39673_39705 = G__39717;
continue;
} else {
var f_39718 = cljs.core.first.call(null,seq__39670_39712__$1);
cljs.core.println.call(null,"  ",f_39718);


var G__39719 = cljs.core.next.call(null,seq__39670_39712__$1);
var G__39720 = null;
var G__39721 = (0);
var G__39722 = (0);
seq__39670_39702 = G__39719;
chunk__39671_39703 = G__39720;
count__39672_39704 = G__39721;
i__39673_39705 = G__39722;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39723 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17825__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39723);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39723)))?cljs.core.second.call(null,arglists_39723):arglists_39723));
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
var seq__39674_39724 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39675_39725 = null;
var count__39676_39726 = (0);
var i__39677_39727 = (0);
while(true){
if((i__39677_39727 < count__39676_39726)){
var vec__39688_39728 = cljs.core._nth.call(null,chunk__39675_39725,i__39677_39727);
var name_39729 = cljs.core.nth.call(null,vec__39688_39728,(0),null);
var map__39691_39730 = cljs.core.nth.call(null,vec__39688_39728,(1),null);
var map__39691_39731__$1 = (((((!((map__39691_39730 == null))))?(((((map__39691_39730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39691_39730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39691_39730):map__39691_39730);
var doc_39732 = cljs.core.get.call(null,map__39691_39731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39733 = cljs.core.get.call(null,map__39691_39731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39729);

cljs.core.println.call(null," ",arglists_39733);

if(cljs.core.truth_(doc_39732)){
cljs.core.println.call(null," ",doc_39732);
} else {
}


var G__39734 = seq__39674_39724;
var G__39735 = chunk__39675_39725;
var G__39736 = count__39676_39726;
var G__39737 = (i__39677_39727 + (1));
seq__39674_39724 = G__39734;
chunk__39675_39725 = G__39735;
count__39676_39726 = G__39736;
i__39677_39727 = G__39737;
continue;
} else {
var temp__5457__auto___39738 = cljs.core.seq.call(null,seq__39674_39724);
if(temp__5457__auto___39738){
var seq__39674_39739__$1 = temp__5457__auto___39738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39674_39739__$1)){
var c__18782__auto___39740 = cljs.core.chunk_first.call(null,seq__39674_39739__$1);
var G__39741 = cljs.core.chunk_rest.call(null,seq__39674_39739__$1);
var G__39742 = c__18782__auto___39740;
var G__39743 = cljs.core.count.call(null,c__18782__auto___39740);
var G__39744 = (0);
seq__39674_39724 = G__39741;
chunk__39675_39725 = G__39742;
count__39676_39726 = G__39743;
i__39677_39727 = G__39744;
continue;
} else {
var vec__39693_39745 = cljs.core.first.call(null,seq__39674_39739__$1);
var name_39746 = cljs.core.nth.call(null,vec__39693_39745,(0),null);
var map__39696_39747 = cljs.core.nth.call(null,vec__39693_39745,(1),null);
var map__39696_39748__$1 = (((((!((map__39696_39747 == null))))?(((((map__39696_39747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39696_39747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39696_39747):map__39696_39747);
var doc_39749 = cljs.core.get.call(null,map__39696_39748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39750 = cljs.core.get.call(null,map__39696_39748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39746);

cljs.core.println.call(null," ",arglists_39750);

if(cljs.core.truth_(doc_39749)){
cljs.core.println.call(null," ",doc_39749);
} else {
}


var G__39751 = cljs.core.next.call(null,seq__39674_39739__$1);
var G__39752 = null;
var G__39753 = (0);
var G__39754 = (0);
seq__39674_39724 = G__39751;
chunk__39675_39725 = G__39752;
count__39676_39726 = G__39753;
i__39677_39727 = G__39754;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39698 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39699 = null;
var count__39700 = (0);
var i__39701 = (0);
while(true){
if((i__39701 < count__39700)){
var role = cljs.core._nth.call(null,chunk__39699,i__39701);
var temp__5457__auto___39755__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39755__$1)){
var spec_39756 = temp__5457__auto___39755__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39756));
} else {
}


var G__39757 = seq__39698;
var G__39758 = chunk__39699;
var G__39759 = count__39700;
var G__39760 = (i__39701 + (1));
seq__39698 = G__39757;
chunk__39699 = G__39758;
count__39700 = G__39759;
i__39701 = G__39760;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39698);
if(temp__5457__auto____$1){
var seq__39698__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39698__$1)){
var c__18782__auto__ = cljs.core.chunk_first.call(null,seq__39698__$1);
var G__39761 = cljs.core.chunk_rest.call(null,seq__39698__$1);
var G__39762 = c__18782__auto__;
var G__39763 = cljs.core.count.call(null,c__18782__auto__);
var G__39764 = (0);
seq__39698 = G__39761;
chunk__39699 = G__39762;
count__39700 = G__39763;
i__39701 = G__39764;
continue;
} else {
var role = cljs.core.first.call(null,seq__39698__$1);
var temp__5457__auto___39765__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39765__$2)){
var spec_39766 = temp__5457__auto___39765__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39766));
} else {
}


var G__39767 = cljs.core.next.call(null,seq__39698__$1);
var G__39768 = null;
var G__39769 = (0);
var G__39770 = (0);
seq__39698 = G__39767;
chunk__39699 = G__39768;
count__39700 = G__39769;
i__39701 = G__39770;
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
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
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
var G__39771 = cljs.core.conj.call(null,via,t);
var G__39772 = cljs.core.ex_cause.call(null,t);
via = G__39771;
t = G__39772;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
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
var map__39775 = datafied_throwable;
var map__39775__$1 = (((((!((map__39775 == null))))?(((((map__39775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39775):map__39775);
var via = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39776 = cljs.core.last.call(null,via);
var map__39776__$1 = (((((!((map__39776 == null))))?(((((map__39776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39776):map__39776);
var type = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39776__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39777 = data;
var map__39777__$1 = (((((!((map__39777 == null))))?(((((map__39777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39777):map__39777);
var problems = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__39778 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39778__$1 = (((((!((map__39778 == null))))?(((((map__39778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39778):map__39778);
var top_data = map__39778__$1;
var source = cljs.core.get.call(null,map__39778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39783 = phase;
var G__39783__$1 = (((G__39783 instanceof cljs.core.Keyword))?G__39783.fqn:null);
switch (G__39783__$1) {
case "read-source":
var map__39784 = data;
var map__39784__$1 = (((((!((map__39784 == null))))?(((((map__39784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39784):map__39784);
var line = cljs.core.get.call(null,map__39784__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39784__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39786 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39786__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39786,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39786);
var G__39786__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39786__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39786__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39786__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39786__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39787 = top_data;
var G__39787__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39787,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39787);
var G__39787__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39787__$1);
var G__39787__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39787__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39787__$2);
var G__39787__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39787__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39787__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39787__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39787__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39788 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39788,(0),null);
var method = cljs.core.nth.call(null,vec__39788,(1),null);
var file = cljs.core.nth.call(null,vec__39788,(2),null);
var line = cljs.core.nth.call(null,vec__39788,(3),null);
var G__39791 = top_data;
var G__39791__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39791,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39791);
var G__39791__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39791__$1);
var G__39791__$3 = (cljs.core.truth_((function (){var and__17810__auto__ = source__$1;
if(cljs.core.truth_(and__17810__auto__)){
return method;
} else {
return and__17810__auto__;
}
})())?cljs.core.assoc.call(null,G__39791__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39791__$2);
var G__39791__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39791__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39791__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39791__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39791__$4;
}

break;
case "execution":
var vec__39792 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39792,(0),null);
var method = cljs.core.nth.call(null,vec__39792,(1),null);
var file = cljs.core.nth.call(null,vec__39792,(2),null);
var line = cljs.core.nth.call(null,vec__39792,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__39792,source__$1,method,file,line,G__39783,G__39783__$1,map__39775,map__39775__$1,via,trace,phase,map__39776,map__39776__$1,type,message,data,map__39777,map__39777__$1,problems,fn,caller,map__39778,map__39778__$1,top_data,source){
return (function (p1__39774_SHARP_){
var or__17825__auto__ = (p1__39774_SHARP_ == null);
if(or__17825__auto__){
return or__17825__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39774_SHARP_);
}
});})(vec__39792,source__$1,method,file,line,G__39783,G__39783__$1,map__39775,map__39775__$1,via,trace,phase,map__39776,map__39776__$1,type,message,data,map__39777,map__39777__$1,problems,fn,caller,map__39778,map__39778__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__17825__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return line;
}
})();
var G__39795 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39795__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39795,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39795);
var G__39795__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39795__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39795__$1);
var G__39795__$3 = (cljs.core.truth_((function (){var or__17825__auto__ = fn;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
var and__17810__auto__ = source__$1;
if(cljs.core.truth_(and__17810__auto__)){
return method;
} else {
return and__17810__auto__;
}
}
})())?cljs.core.assoc.call(null,G__39795__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__17825__auto__ = fn;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39795__$2);
var G__39795__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39795__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39795__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39795__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39795__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39783__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39799){
var map__39800 = p__39799;
var map__39800__$1 = (((((!((map__39800 == null))))?(((((map__39800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39800):map__39800);
var triage_data = map__39800__$1;
var phase = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17825__auto__ = source;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17825__auto__ = line;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__17825__auto__ = class$;
if(cljs.core.truth_(or__17825__auto__)){
return or__17825__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39802 = phase;
var G__39802__$1 = (((G__39802 instanceof cljs.core.Keyword))?G__39802.fqn:null);
switch (G__39802__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__18975__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39803_39812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39804_39813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39805_39814 = true;
var _STAR_print_fn_STAR__temp_val__39806_39815 = ((function (_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18976__auto__){
return sb__18975__auto__.append(x__18976__auto__);
});})(_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39805_39814;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39806_39815;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,_STAR_print_fn_STAR__temp_val__39806_39815,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,_STAR_print_fn_STAR__temp_val__39806_39815,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39797_SHARP_){
return cljs.core.dissoc.call(null,p1__39797_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,_STAR_print_fn_STAR__temp_val__39806_39815,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39803_39812,_STAR_print_fn_STAR__orig_val__39804_39813,_STAR_print_newline_STAR__temp_val__39805_39814,_STAR_print_fn_STAR__temp_val__39806_39815,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39804_39813;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39803_39812;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18975__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__18975__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39807_39816 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39808_39817 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39809_39818 = true;
var _STAR_print_fn_STAR__temp_val__39810_39819 = ((function (_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18976__auto__){
return sb__18975__auto__.append(x__18976__auto__);
});})(_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39809_39818;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39810_39819;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,_STAR_print_fn_STAR__temp_val__39810_39819,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,_STAR_print_fn_STAR__temp_val__39810_39819,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39798_SHARP_){
return cljs.core.dissoc.call(null,p1__39798_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,_STAR_print_fn_STAR__temp_val__39810_39819,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39807_39816,_STAR_print_fn_STAR__orig_val__39808_39817,_STAR_print_newline_STAR__temp_val__39809_39818,_STAR_print_fn_STAR__temp_val__39810_39819,sb__18975__auto__,G__39802,G__39802__$1,loc,class_name,simple_class,cause_type,format,map__39800,map__39800__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39808_39817;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39807_39816;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18975__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39802__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
