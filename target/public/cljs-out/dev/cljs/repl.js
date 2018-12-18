// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39658){
var map__39659 = p__39658;
var map__39659__$1 = (((((!((map__39659 == null))))?(((((map__39659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39659):map__39659);
var m = map__39659__$1;
var n = cljs.core.get.call(null,map__39659__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__17816__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
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
var seq__39661_39693 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39662_39694 = null;
var count__39663_39695 = (0);
var i__39664_39696 = (0);
while(true){
if((i__39664_39696 < count__39663_39695)){
var f_39697 = cljs.core._nth.call(null,chunk__39662_39694,i__39664_39696);
cljs.core.println.call(null,"  ",f_39697);


var G__39698 = seq__39661_39693;
var G__39699 = chunk__39662_39694;
var G__39700 = count__39663_39695;
var G__39701 = (i__39664_39696 + (1));
seq__39661_39693 = G__39698;
chunk__39662_39694 = G__39699;
count__39663_39695 = G__39700;
i__39664_39696 = G__39701;
continue;
} else {
var temp__5720__auto___39702 = cljs.core.seq.call(null,seq__39661_39693);
if(temp__5720__auto___39702){
var seq__39661_39703__$1 = temp__5720__auto___39702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39661_39703__$1)){
var c__18773__auto___39704 = cljs.core.chunk_first.call(null,seq__39661_39703__$1);
var G__39705 = cljs.core.chunk_rest.call(null,seq__39661_39703__$1);
var G__39706 = c__18773__auto___39704;
var G__39707 = cljs.core.count.call(null,c__18773__auto___39704);
var G__39708 = (0);
seq__39661_39693 = G__39705;
chunk__39662_39694 = G__39706;
count__39663_39695 = G__39707;
i__39664_39696 = G__39708;
continue;
} else {
var f_39709 = cljs.core.first.call(null,seq__39661_39703__$1);
cljs.core.println.call(null,"  ",f_39709);


var G__39710 = cljs.core.next.call(null,seq__39661_39703__$1);
var G__39711 = null;
var G__39712 = (0);
var G__39713 = (0);
seq__39661_39693 = G__39710;
chunk__39662_39694 = G__39711;
count__39663_39695 = G__39712;
i__39664_39696 = G__39713;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39714 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17816__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39714);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39714)))?cljs.core.second.call(null,arglists_39714):arglists_39714));
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
var seq__39665_39715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39666_39716 = null;
var count__39667_39717 = (0);
var i__39668_39718 = (0);
while(true){
if((i__39668_39718 < count__39667_39717)){
var vec__39679_39719 = cljs.core._nth.call(null,chunk__39666_39716,i__39668_39718);
var name_39720 = cljs.core.nth.call(null,vec__39679_39719,(0),null);
var map__39682_39721 = cljs.core.nth.call(null,vec__39679_39719,(1),null);
var map__39682_39722__$1 = (((((!((map__39682_39721 == null))))?(((((map__39682_39721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39682_39721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39682_39721):map__39682_39721);
var doc_39723 = cljs.core.get.call(null,map__39682_39722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39724 = cljs.core.get.call(null,map__39682_39722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39720);

cljs.core.println.call(null," ",arglists_39724);

if(cljs.core.truth_(doc_39723)){
cljs.core.println.call(null," ",doc_39723);
} else {
}


var G__39725 = seq__39665_39715;
var G__39726 = chunk__39666_39716;
var G__39727 = count__39667_39717;
var G__39728 = (i__39668_39718 + (1));
seq__39665_39715 = G__39725;
chunk__39666_39716 = G__39726;
count__39667_39717 = G__39727;
i__39668_39718 = G__39728;
continue;
} else {
var temp__5720__auto___39729 = cljs.core.seq.call(null,seq__39665_39715);
if(temp__5720__auto___39729){
var seq__39665_39730__$1 = temp__5720__auto___39729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39665_39730__$1)){
var c__18773__auto___39731 = cljs.core.chunk_first.call(null,seq__39665_39730__$1);
var G__39732 = cljs.core.chunk_rest.call(null,seq__39665_39730__$1);
var G__39733 = c__18773__auto___39731;
var G__39734 = cljs.core.count.call(null,c__18773__auto___39731);
var G__39735 = (0);
seq__39665_39715 = G__39732;
chunk__39666_39716 = G__39733;
count__39667_39717 = G__39734;
i__39668_39718 = G__39735;
continue;
} else {
var vec__39684_39736 = cljs.core.first.call(null,seq__39665_39730__$1);
var name_39737 = cljs.core.nth.call(null,vec__39684_39736,(0),null);
var map__39687_39738 = cljs.core.nth.call(null,vec__39684_39736,(1),null);
var map__39687_39739__$1 = (((((!((map__39687_39738 == null))))?(((((map__39687_39738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39687_39738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39687_39738):map__39687_39738);
var doc_39740 = cljs.core.get.call(null,map__39687_39739__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39741 = cljs.core.get.call(null,map__39687_39739__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39737);

cljs.core.println.call(null," ",arglists_39741);

if(cljs.core.truth_(doc_39740)){
cljs.core.println.call(null," ",doc_39740);
} else {
}


var G__39742 = cljs.core.next.call(null,seq__39665_39730__$1);
var G__39743 = null;
var G__39744 = (0);
var G__39745 = (0);
seq__39665_39715 = G__39742;
chunk__39666_39716 = G__39743;
count__39667_39717 = G__39744;
i__39668_39718 = G__39745;
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

var seq__39689 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39690 = null;
var count__39691 = (0);
var i__39692 = (0);
while(true){
if((i__39692 < count__39691)){
var role = cljs.core._nth.call(null,chunk__39690,i__39692);
var temp__5720__auto___39746__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39746__$1)){
var spec_39747 = temp__5720__auto___39746__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39747));
} else {
}


var G__39748 = seq__39689;
var G__39749 = chunk__39690;
var G__39750 = count__39691;
var G__39751 = (i__39692 + (1));
seq__39689 = G__39748;
chunk__39690 = G__39749;
count__39691 = G__39750;
i__39692 = G__39751;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__39689);
if(temp__5720__auto____$1){
var seq__39689__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39689__$1)){
var c__18773__auto__ = cljs.core.chunk_first.call(null,seq__39689__$1);
var G__39752 = cljs.core.chunk_rest.call(null,seq__39689__$1);
var G__39753 = c__18773__auto__;
var G__39754 = cljs.core.count.call(null,c__18773__auto__);
var G__39755 = (0);
seq__39689 = G__39752;
chunk__39690 = G__39753;
count__39691 = G__39754;
i__39692 = G__39755;
continue;
} else {
var role = cljs.core.first.call(null,seq__39689__$1);
var temp__5720__auto___39756__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___39756__$2)){
var spec_39757 = temp__5720__auto___39756__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39757));
} else {
}


var G__39758 = cljs.core.next.call(null,seq__39689__$1);
var G__39759 = null;
var G__39760 = (0);
var G__39761 = (0);
seq__39689 = G__39758;
chunk__39690 = G__39759;
count__39691 = G__39760;
i__39692 = G__39761;
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
var G__39762 = cljs.core.conj.call(null,via,t);
var G__39763 = cljs.core.ex_cause.call(null,t);
via = G__39762;
t = G__39763;
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
var map__39766 = datafied_throwable;
var map__39766__$1 = (((((!((map__39766 == null))))?(((((map__39766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39766):map__39766);
var via = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39767 = cljs.core.last.call(null,via);
var map__39767__$1 = (((((!((map__39767 == null))))?(((((map__39767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39767):map__39767);
var type = cljs.core.get.call(null,map__39767__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__39767__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__39767__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39768 = data;
var map__39768__$1 = (((((!((map__39768 == null))))?(((((map__39768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39768):map__39768);
var problems = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__39768__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__39769 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__39769__$1 = (((((!((map__39769 == null))))?(((((map__39769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39769):map__39769);
var top_data = map__39769__$1;
var source = cljs.core.get.call(null,map__39769__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__39774 = phase;
var G__39774__$1 = (((G__39774 instanceof cljs.core.Keyword))?G__39774.fqn:null);
switch (G__39774__$1) {
case "read-source":
var map__39775 = data;
var map__39775__$1 = (((((!((map__39775 == null))))?(((((map__39775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39775):map__39775);
var line = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39775__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39777 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__39777__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39777,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39777);
var G__39777__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39777__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39777__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39777__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39777__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39778 = top_data;
var G__39778__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__39778,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39778);
var G__39778__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__39778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39778__$1);
var G__39778__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39778__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39778__$2);
var G__39778__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39778__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39778__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39778__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39778__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39779 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39779,(0),null);
var method = cljs.core.nth.call(null,vec__39779,(1),null);
var file = cljs.core.nth.call(null,vec__39779,(2),null);
var line = cljs.core.nth.call(null,vec__39779,(3),null);
var G__39782 = top_data;
var G__39782__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__39782,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39782);
var G__39782__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__39782__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39782__$1);
var G__39782__$3 = (cljs.core.truth_((function (){var and__17801__auto__ = source__$1;
if(cljs.core.truth_(and__17801__auto__)){
return method;
} else {
return and__17801__auto__;
}
})())?cljs.core.assoc.call(null,G__39782__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39782__$2);
var G__39782__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__39782__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39782__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__39782__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39782__$4;
}

break;
case "execution":
var vec__39783 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__39783,(0),null);
var method = cljs.core.nth.call(null,vec__39783,(1),null);
var file = cljs.core.nth.call(null,vec__39783,(2),null);
var line = cljs.core.nth.call(null,vec__39783,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__39783,source__$1,method,file,line,G__39774,G__39774__$1,map__39766,map__39766__$1,via,trace,phase,map__39767,map__39767__$1,type,message,data,map__39768,map__39768__$1,problems,fn,caller,map__39769,map__39769__$1,top_data,source){
return (function (p1__39765_SHARP_){
var or__17816__auto__ = (p1__39765_SHARP_ == null);
if(or__17816__auto__){
return or__17816__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__39765_SHARP_);
}
});})(vec__39783,source__$1,method,file,line,G__39774,G__39774__$1,map__39766,map__39766__$1,via,trace,phase,map__39767,map__39767__$1,type,message,data,map__39768,map__39768__$1,problems,fn,caller,map__39769,map__39769__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__17816__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return line;
}
})();
var G__39786 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39786__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__39786,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39786);
var G__39786__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__39786__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39786__$1);
var G__39786__$3 = (cljs.core.truth_((function (){var or__17816__auto__ = fn;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
var and__17801__auto__ = source__$1;
if(cljs.core.truth_(and__17801__auto__)){
return method;
} else {
return and__17801__auto__;
}
}
})())?cljs.core.assoc.call(null,G__39786__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__17816__auto__ = fn;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39786__$2);
var G__39786__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__39786__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39786__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__39786__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39786__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39774__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39790){
var map__39791 = p__39790;
var map__39791__$1 = (((((!((map__39791 == null))))?(((((map__39791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39791):map__39791);
var triage_data = map__39791__$1;
var phase = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17816__auto__ = source;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__17816__auto__ = line;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__17816__auto__ = class$;
if(cljs.core.truth_(or__17816__auto__)){
return or__17816__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39793 = phase;
var G__39793__$1 = (((G__39793 instanceof cljs.core.Keyword))?G__39793.fqn:null);
switch (G__39793__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__18966__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39794_39803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39795_39804 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39796_39805 = true;
var _STAR_print_fn_STAR__temp_val__39797_39806 = ((function (_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18967__auto__){
return sb__18966__auto__.append(x__18967__auto__);
});})(_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39796_39805;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39797_39806;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,_STAR_print_fn_STAR__temp_val__39797_39806,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,_STAR_print_fn_STAR__temp_val__39797_39806,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39788_SHARP_){
return cljs.core.dissoc.call(null,p1__39788_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,_STAR_print_fn_STAR__temp_val__39797_39806,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39794_39803,_STAR_print_fn_STAR__orig_val__39795_39804,_STAR_print_newline_STAR__temp_val__39796_39805,_STAR_print_fn_STAR__temp_val__39797_39806,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39795_39804;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39794_39803;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18966__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__18966__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39798_39807 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39799_39808 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39800_39809 = true;
var _STAR_print_fn_STAR__temp_val__39801_39810 = ((function (_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__18967__auto__){
return sb__18966__auto__.append(x__18967__auto__);
});})(_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39800_39809;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39801_39810;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,_STAR_print_fn_STAR__temp_val__39801_39810,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,_STAR_print_fn_STAR__temp_val__39801_39810,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39789_SHARP_){
return cljs.core.dissoc.call(null,p1__39789_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,_STAR_print_fn_STAR__temp_val__39801_39810,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39798_39807,_STAR_print_fn_STAR__orig_val__39799_39808,_STAR_print_newline_STAR__temp_val__39800_39809,_STAR_print_fn_STAR__temp_val__39801_39810,sb__18966__auto__,G__39793,G__39793__$1,loc,class_name,simple_class,cause_type,format,map__39791,map__39791__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39799_39808;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39798_39807;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__18966__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39793__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
