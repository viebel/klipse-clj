// Compiled by ClojureScript 1.10.492 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30437){
var map__30438 = p__30437;
var map__30438__$1 = (((((!((map__30438 == null))))?(((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var m = map__30438__$1;
var n = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var seq__30440_30472 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30441_30473 = null;
var count__30442_30474 = (0);
var i__30443_30475 = (0);
while(true){
if((i__30443_30475 < count__30442_30474)){
var f_30476 = cljs.core._nth.call(null,chunk__30441_30473,i__30443_30475);
cljs.core.println.call(null,"  ",f_30476);


var G__30477 = seq__30440_30472;
var G__30478 = chunk__30441_30473;
var G__30479 = count__30442_30474;
var G__30480 = (i__30443_30475 + (1));
seq__30440_30472 = G__30477;
chunk__30441_30473 = G__30478;
count__30442_30474 = G__30479;
i__30443_30475 = G__30480;
continue;
} else {
var temp__5720__auto___30481 = cljs.core.seq.call(null,seq__30440_30472);
if(temp__5720__auto___30481){
var seq__30440_30482__$1 = temp__5720__auto___30481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30440_30482__$1)){
var c__4421__auto___30483 = cljs.core.chunk_first.call(null,seq__30440_30482__$1);
var G__30484 = cljs.core.chunk_rest.call(null,seq__30440_30482__$1);
var G__30485 = c__4421__auto___30483;
var G__30486 = cljs.core.count.call(null,c__4421__auto___30483);
var G__30487 = (0);
seq__30440_30472 = G__30484;
chunk__30441_30473 = G__30485;
count__30442_30474 = G__30486;
i__30443_30475 = G__30487;
continue;
} else {
var f_30488 = cljs.core.first.call(null,seq__30440_30482__$1);
cljs.core.println.call(null,"  ",f_30488);


var G__30489 = cljs.core.next.call(null,seq__30440_30482__$1);
var G__30490 = null;
var G__30491 = (0);
var G__30492 = (0);
seq__30440_30472 = G__30489;
chunk__30441_30473 = G__30490;
count__30442_30474 = G__30491;
i__30443_30475 = G__30492;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30493 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30493);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30493)))?cljs.core.second.call(null,arglists_30493):arglists_30493));
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
var seq__30444_30494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30445_30495 = null;
var count__30446_30496 = (0);
var i__30447_30497 = (0);
while(true){
if((i__30447_30497 < count__30446_30496)){
var vec__30458_30498 = cljs.core._nth.call(null,chunk__30445_30495,i__30447_30497);
var name_30499 = cljs.core.nth.call(null,vec__30458_30498,(0),null);
var map__30461_30500 = cljs.core.nth.call(null,vec__30458_30498,(1),null);
var map__30461_30501__$1 = (((((!((map__30461_30500 == null))))?(((((map__30461_30500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30461_30500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30461_30500):map__30461_30500);
var doc_30502 = cljs.core.get.call(null,map__30461_30501__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30503 = cljs.core.get.call(null,map__30461_30501__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30499);

cljs.core.println.call(null," ",arglists_30503);

if(cljs.core.truth_(doc_30502)){
cljs.core.println.call(null," ",doc_30502);
} else {
}


var G__30504 = seq__30444_30494;
var G__30505 = chunk__30445_30495;
var G__30506 = count__30446_30496;
var G__30507 = (i__30447_30497 + (1));
seq__30444_30494 = G__30504;
chunk__30445_30495 = G__30505;
count__30446_30496 = G__30506;
i__30447_30497 = G__30507;
continue;
} else {
var temp__5720__auto___30508 = cljs.core.seq.call(null,seq__30444_30494);
if(temp__5720__auto___30508){
var seq__30444_30509__$1 = temp__5720__auto___30508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30444_30509__$1)){
var c__4421__auto___30510 = cljs.core.chunk_first.call(null,seq__30444_30509__$1);
var G__30511 = cljs.core.chunk_rest.call(null,seq__30444_30509__$1);
var G__30512 = c__4421__auto___30510;
var G__30513 = cljs.core.count.call(null,c__4421__auto___30510);
var G__30514 = (0);
seq__30444_30494 = G__30511;
chunk__30445_30495 = G__30512;
count__30446_30496 = G__30513;
i__30447_30497 = G__30514;
continue;
} else {
var vec__30463_30515 = cljs.core.first.call(null,seq__30444_30509__$1);
var name_30516 = cljs.core.nth.call(null,vec__30463_30515,(0),null);
var map__30466_30517 = cljs.core.nth.call(null,vec__30463_30515,(1),null);
var map__30466_30518__$1 = (((((!((map__30466_30517 == null))))?(((((map__30466_30517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30466_30517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466_30517):map__30466_30517);
var doc_30519 = cljs.core.get.call(null,map__30466_30518__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30520 = cljs.core.get.call(null,map__30466_30518__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30516);

cljs.core.println.call(null," ",arglists_30520);

if(cljs.core.truth_(doc_30519)){
cljs.core.println.call(null," ",doc_30519);
} else {
}


var G__30521 = cljs.core.next.call(null,seq__30444_30509__$1);
var G__30522 = null;
var G__30523 = (0);
var G__30524 = (0);
seq__30444_30494 = G__30521;
chunk__30445_30495 = G__30522;
count__30446_30496 = G__30523;
i__30447_30497 = G__30524;
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

var seq__30468 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30469 = null;
var count__30470 = (0);
var i__30471 = (0);
while(true){
if((i__30471 < count__30470)){
var role = cljs.core._nth.call(null,chunk__30469,i__30471);
var temp__5720__auto___30525__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30525__$1)){
var spec_30526 = temp__5720__auto___30525__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30526));
} else {
}


var G__30527 = seq__30468;
var G__30528 = chunk__30469;
var G__30529 = count__30470;
var G__30530 = (i__30471 + (1));
seq__30468 = G__30527;
chunk__30469 = G__30528;
count__30470 = G__30529;
i__30471 = G__30530;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30468);
if(temp__5720__auto____$1){
var seq__30468__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30468__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__30468__$1);
var G__30531 = cljs.core.chunk_rest.call(null,seq__30468__$1);
var G__30532 = c__4421__auto__;
var G__30533 = cljs.core.count.call(null,c__4421__auto__);
var G__30534 = (0);
seq__30468 = G__30531;
chunk__30469 = G__30532;
count__30470 = G__30533;
i__30471 = G__30534;
continue;
} else {
var role = cljs.core.first.call(null,seq__30468__$1);
var temp__5720__auto___30535__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30535__$2)){
var spec_30536 = temp__5720__auto___30535__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30536));
} else {
}


var G__30537 = cljs.core.next.call(null,seq__30468__$1);
var G__30538 = null;
var G__30539 = (0);
var G__30540 = (0);
seq__30468 = G__30537;
chunk__30469 = G__30538;
count__30470 = G__30539;
i__30471 = G__30540;
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
var G__30541 = cljs.core.conj.call(null,via,t);
var G__30542 = cljs.core.ex_cause.call(null,t);
via = G__30541;
t = G__30542;
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
var map__30545 = datafied_throwable;
var map__30545__$1 = (((((!((map__30545 == null))))?(((((map__30545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);
var via = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30546 = cljs.core.last.call(null,via);
var map__30546__$1 = (((((!((map__30546 == null))))?(((((map__30546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30546):map__30546);
var type = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30546__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30547 = data;
var map__30547__$1 = (((((!((map__30547 == null))))?(((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var problems = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword("cljs.spec.alpha","caller","cljs.spec.alpha/caller",1365484640));
var map__30548 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30548__$1 = (((((!((map__30548 == null))))?(((((map__30548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30548):map__30548);
var top_data = map__30548__$1;
var source = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30553 = phase;
var G__30553__$1 = (((G__30553 instanceof cljs.core.Keyword))?G__30553.fqn:null);
switch (G__30553__$1) {
case "read-source":
var map__30554 = data;
var map__30554__$1 = (((((!((map__30554 == null))))?(((((map__30554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30554):map__30554);
var line = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30556 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30556__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30556,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30556);
var G__30556__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30556__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30556__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30556__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30557 = top_data;
var G__30557__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30557,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30557);
var G__30557__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30557__$1);
var G__30557__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30557__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30557__$2);
var G__30557__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30557__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30557__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30557__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30557__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30558 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30558,(0),null);
var method = cljs.core.nth.call(null,vec__30558,(1),null);
var file = cljs.core.nth.call(null,vec__30558,(2),null);
var line = cljs.core.nth.call(null,vec__30558,(3),null);
var G__30561 = top_data;
var G__30561__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30561,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30561);
var G__30561__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30561__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30561__$1);
var G__30561__$3 = (cljs.core.truth_((function (){var and__3991__auto__ = source__$1;
if(cljs.core.truth_(and__3991__auto__)){
return method;
} else {
return and__3991__auto__;
}
})())?cljs.core.assoc.call(null,G__30561__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30561__$2);
var G__30561__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30561__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30561__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30561__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30561__$4;
}

break;
case "execution":
var vec__30562 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30562,(0),null);
var method = cljs.core.nth.call(null,vec__30562,(1),null);
var file = cljs.core.nth.call(null,vec__30562,(2),null);
var line = cljs.core.nth.call(null,vec__30562,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30562,source__$1,method,file,line,G__30553,G__30553__$1,map__30545,map__30545__$1,via,trace,phase,map__30546,map__30546__$1,type,message,data,map__30547,map__30547__$1,problems,fn,caller,map__30548,map__30548__$1,top_data,source){
return (function (p1__30544_SHARP_){
var or__4002__auto__ = (p1__30544_SHARP_ == null);
if(or__4002__auto__){
return or__4002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30544_SHARP_);
}
});})(vec__30562,source__$1,method,file,line,G__30553,G__30553__$1,map__30545,map__30545__$1,via,trace,phase,map__30546,map__30546__$1,type,message,data,map__30547,map__30547__$1,problems,fn,caller,map__30548,map__30548__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return line;
}
})();
var G__30565 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30565__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30565,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30565);
var G__30565__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30565__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30565__$1);
var G__30565__$3 = (cljs.core.truth_((function (){var or__4002__auto__ = fn;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var and__3991__auto__ = source__$1;
if(cljs.core.truth_(and__3991__auto__)){
return method;
} else {
return and__3991__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30565__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4002__auto__ = fn;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30565__$2);
var G__30565__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30565__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30565__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30565__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30565__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30553__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30569){
var map__30570 = p__30569;
var map__30570__$1 = (((((!((map__30570 == null))))?(((((map__30570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);
var triage_data = map__30570__$1;
var phase = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4002__auto__ = source;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4002__auto__ = line;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4002__auto__ = class$;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30572 = phase;
var G__30572__$1 = (((G__30572 instanceof cljs.core.Keyword))?G__30572.fqn:null);
switch (G__30572__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30573_30582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30574_30583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30575_30584 = true;
var _STAR_print_fn_STAR__temp_val__30576_30585 = ((function (_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30575_30584;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30576_30585;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,_STAR_print_fn_STAR__temp_val__30576_30585,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,_STAR_print_fn_STAR__temp_val__30576_30585,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30567_SHARP_){
return cljs.core.dissoc.call(null,p1__30567_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,_STAR_print_fn_STAR__temp_val__30576_30585,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30573_30582,_STAR_print_fn_STAR__orig_val__30574_30583,_STAR_print_newline_STAR__temp_val__30575_30584,_STAR_print_fn_STAR__temp_val__30576_30585,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30574_30583;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30573_30582;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30577_30586 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30578_30587 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30579_30588 = true;
var _STAR_print_fn_STAR__temp_val__30580_30589 = ((function (_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30579_30588;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30580_30589;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,_STAR_print_fn_STAR__temp_val__30580_30589,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,_STAR_print_fn_STAR__temp_val__30580_30589,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30568_SHARP_){
return cljs.core.dissoc.call(null,p1__30568_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,_STAR_print_fn_STAR__temp_val__30580_30589,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30577_30586,_STAR_print_fn_STAR__orig_val__30578_30587,_STAR_print_newline_STAR__temp_val__30579_30588,_STAR_print_fn_STAR__temp_val__30580_30589,sb__4532__auto__,G__30572,G__30572__$1,loc,class_name,simple_class,cause_type,format,map__30570,map__30570__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30578_30587;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30577_30586;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30572__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
