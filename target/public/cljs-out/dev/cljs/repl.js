// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21355){
var map__21356 = p__21355;
var map__21356__$1 = (((((!((map__21356 == null))))?(((((map__21356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21356):map__21356);
var m = map__21356__$1;
var n = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21356__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21358_21390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21359_21391 = null;
var count__21360_21392 = (0);
var i__21361_21393 = (0);
while(true){
if((i__21361_21393 < count__21360_21392)){
var f_21394 = cljs.core._nth.call(null,chunk__21359_21391,i__21361_21393);
cljs.core.println.call(null,"  ",f_21394);


var G__21395 = seq__21358_21390;
var G__21396 = chunk__21359_21391;
var G__21397 = count__21360_21392;
var G__21398 = (i__21361_21393 + (1));
seq__21358_21390 = G__21395;
chunk__21359_21391 = G__21396;
count__21360_21392 = G__21397;
i__21361_21393 = G__21398;
continue;
} else {
var temp__5720__auto___21399 = cljs.core.seq.call(null,seq__21358_21390);
if(temp__5720__auto___21399){
var seq__21358_21400__$1 = temp__5720__auto___21399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21358_21400__$1)){
var c__4550__auto___21401 = cljs.core.chunk_first.call(null,seq__21358_21400__$1);
var G__21402 = cljs.core.chunk_rest.call(null,seq__21358_21400__$1);
var G__21403 = c__4550__auto___21401;
var G__21404 = cljs.core.count.call(null,c__4550__auto___21401);
var G__21405 = (0);
seq__21358_21390 = G__21402;
chunk__21359_21391 = G__21403;
count__21360_21392 = G__21404;
i__21361_21393 = G__21405;
continue;
} else {
var f_21406 = cljs.core.first.call(null,seq__21358_21400__$1);
cljs.core.println.call(null,"  ",f_21406);


var G__21407 = cljs.core.next.call(null,seq__21358_21400__$1);
var G__21408 = null;
var G__21409 = (0);
var G__21410 = (0);
seq__21358_21390 = G__21407;
chunk__21359_21391 = G__21408;
count__21360_21392 = G__21409;
i__21361_21393 = G__21410;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21411 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21411);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21411)))?cljs.core.second.call(null,arglists_21411):arglists_21411));
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
var seq__21362_21412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21363_21413 = null;
var count__21364_21414 = (0);
var i__21365_21415 = (0);
while(true){
if((i__21365_21415 < count__21364_21414)){
var vec__21376_21416 = cljs.core._nth.call(null,chunk__21363_21413,i__21365_21415);
var name_21417 = cljs.core.nth.call(null,vec__21376_21416,(0),null);
var map__21379_21418 = cljs.core.nth.call(null,vec__21376_21416,(1),null);
var map__21379_21419__$1 = (((((!((map__21379_21418 == null))))?(((((map__21379_21418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21379_21418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21379_21418):map__21379_21418);
var doc_21420 = cljs.core.get.call(null,map__21379_21419__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21421 = cljs.core.get.call(null,map__21379_21419__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21417);

cljs.core.println.call(null," ",arglists_21421);

if(cljs.core.truth_(doc_21420)){
cljs.core.println.call(null," ",doc_21420);
} else {
}


var G__21422 = seq__21362_21412;
var G__21423 = chunk__21363_21413;
var G__21424 = count__21364_21414;
var G__21425 = (i__21365_21415 + (1));
seq__21362_21412 = G__21422;
chunk__21363_21413 = G__21423;
count__21364_21414 = G__21424;
i__21365_21415 = G__21425;
continue;
} else {
var temp__5720__auto___21426 = cljs.core.seq.call(null,seq__21362_21412);
if(temp__5720__auto___21426){
var seq__21362_21427__$1 = temp__5720__auto___21426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21362_21427__$1)){
var c__4550__auto___21428 = cljs.core.chunk_first.call(null,seq__21362_21427__$1);
var G__21429 = cljs.core.chunk_rest.call(null,seq__21362_21427__$1);
var G__21430 = c__4550__auto___21428;
var G__21431 = cljs.core.count.call(null,c__4550__auto___21428);
var G__21432 = (0);
seq__21362_21412 = G__21429;
chunk__21363_21413 = G__21430;
count__21364_21414 = G__21431;
i__21365_21415 = G__21432;
continue;
} else {
var vec__21381_21433 = cljs.core.first.call(null,seq__21362_21427__$1);
var name_21434 = cljs.core.nth.call(null,vec__21381_21433,(0),null);
var map__21384_21435 = cljs.core.nth.call(null,vec__21381_21433,(1),null);
var map__21384_21436__$1 = (((((!((map__21384_21435 == null))))?(((((map__21384_21435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21384_21435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21384_21435):map__21384_21435);
var doc_21437 = cljs.core.get.call(null,map__21384_21436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21438 = cljs.core.get.call(null,map__21384_21436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21434);

cljs.core.println.call(null," ",arglists_21438);

if(cljs.core.truth_(doc_21437)){
cljs.core.println.call(null," ",doc_21437);
} else {
}


var G__21439 = cljs.core.next.call(null,seq__21362_21427__$1);
var G__21440 = null;
var G__21441 = (0);
var G__21442 = (0);
seq__21362_21412 = G__21439;
chunk__21363_21413 = G__21440;
count__21364_21414 = G__21441;
i__21365_21415 = G__21442;
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

var seq__21386 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21387 = null;
var count__21388 = (0);
var i__21389 = (0);
while(true){
if((i__21389 < count__21388)){
var role = cljs.core._nth.call(null,chunk__21387,i__21389);
var temp__5720__auto___21443__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21443__$1)){
var spec_21444 = temp__5720__auto___21443__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21444));
} else {
}


var G__21445 = seq__21386;
var G__21446 = chunk__21387;
var G__21447 = count__21388;
var G__21448 = (i__21389 + (1));
seq__21386 = G__21445;
chunk__21387 = G__21446;
count__21388 = G__21447;
i__21389 = G__21448;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21386);
if(temp__5720__auto____$1){
var seq__21386__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21386__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21386__$1);
var G__21449 = cljs.core.chunk_rest.call(null,seq__21386__$1);
var G__21450 = c__4550__auto__;
var G__21451 = cljs.core.count.call(null,c__4550__auto__);
var G__21452 = (0);
seq__21386 = G__21449;
chunk__21387 = G__21450;
count__21388 = G__21451;
i__21389 = G__21452;
continue;
} else {
var role = cljs.core.first.call(null,seq__21386__$1);
var temp__5720__auto___21453__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21453__$2)){
var spec_21454 = temp__5720__auto___21453__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21454));
} else {
}


var G__21455 = cljs.core.next.call(null,seq__21386__$1);
var G__21456 = null;
var G__21457 = (0);
var G__21458 = (0);
seq__21386 = G__21455;
chunk__21387 = G__21456;
count__21388 = G__21457;
i__21389 = G__21458;
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
var G__21459 = cljs.core.conj.call(null,via,t);
var G__21460 = cljs.core.ex_cause.call(null,t);
via = G__21459;
t = G__21460;
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
var map__21463 = datafied_throwable;
var map__21463__$1 = (((((!((map__21463 == null))))?(((((map__21463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21463):map__21463);
var via = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21464 = cljs.core.last.call(null,via);
var map__21464__$1 = (((((!((map__21464 == null))))?(((((map__21464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21464):map__21464);
var type = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21464__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21465 = data;
var map__21465__$1 = (((((!((map__21465 == null))))?(((((map__21465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21465):map__21465);
var problems = cljs.core.get.call(null,map__21465__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21465__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21465__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21466 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21466__$1 = (((((!((map__21466 == null))))?(((((map__21466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21466):map__21466);
var top_data = map__21466__$1;
var source = cljs.core.get.call(null,map__21466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21471 = phase;
var G__21471__$1 = (((G__21471 instanceof cljs.core.Keyword))?G__21471.fqn:null);
switch (G__21471__$1) {
case "read-source":
var map__21472 = data;
var map__21472__$1 = (((((!((map__21472 == null))))?(((((map__21472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21472):map__21472);
var line = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21474 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21474__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21474,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21474);
var G__21474__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21474__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21474__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21474__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21474__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21475 = top_data;
var G__21475__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21475,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21475);
var G__21475__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21475__$1);
var G__21475__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21475__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21475__$2);
var G__21475__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21475__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21475__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21475__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21475__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21476 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21476,(0),null);
var method = cljs.core.nth.call(null,vec__21476,(1),null);
var file = cljs.core.nth.call(null,vec__21476,(2),null);
var line = cljs.core.nth.call(null,vec__21476,(3),null);
var G__21479 = top_data;
var G__21479__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21479,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21479);
var G__21479__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21479__$1);
var G__21479__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__21479__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21479__$2);
var G__21479__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21479__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21479__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21479__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21479__$4;
}

break;
case "execution":
var vec__21480 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21480,(0),null);
var method = cljs.core.nth.call(null,vec__21480,(1),null);
var file = cljs.core.nth.call(null,vec__21480,(2),null);
var line = cljs.core.nth.call(null,vec__21480,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__21480,source__$1,method,file,line,G__21471,G__21471__$1,map__21463,map__21463__$1,via,trace,phase,map__21464,map__21464__$1,type,message,data,map__21465,map__21465__$1,problems,fn,caller,map__21466,map__21466__$1,top_data,source){
return (function (p1__21462_SHARP_){
var or__4131__auto__ = (p1__21462_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21462_SHARP_);
}
});})(vec__21480,source__$1,method,file,line,G__21471,G__21471__$1,map__21463,map__21463__$1,via,trace,phase,map__21464,map__21464__$1,type,message,data,map__21465,map__21465__$1,problems,fn,caller,map__21466,map__21466__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21483__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21483);
var G__21483__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21483__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21483__$1);
var G__21483__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__21483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21483__$2);
var G__21483__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21483__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21483__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21483__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21483__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21471__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21487){
var map__21488 = p__21487;
var map__21488__$1 = (((((!((map__21488 == null))))?(((((map__21488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21488):map__21488);
var triage_data = map__21488__$1;
var phase = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21488__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21490 = phase;
var G__21490__$1 = (((G__21490 instanceof cljs.core.Keyword))?G__21490.fqn:null);
switch (G__21490__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21491_21500 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21492_21501 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21493_21502 = true;
var _STAR_print_fn_STAR__temp_val__21494_21503 = ((function (_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21493_21502;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21494_21503;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,_STAR_print_fn_STAR__temp_val__21494_21503,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,_STAR_print_fn_STAR__temp_val__21494_21503,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21485_SHARP_){
return cljs.core.dissoc.call(null,p1__21485_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,_STAR_print_fn_STAR__temp_val__21494_21503,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21491_21500,_STAR_print_fn_STAR__orig_val__21492_21501,_STAR_print_newline_STAR__temp_val__21493_21502,_STAR_print_fn_STAR__temp_val__21494_21503,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21492_21501;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21491_21500;
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
var _STAR_print_newline_STAR__orig_val__21495_21504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21496_21505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21497_21506 = true;
var _STAR_print_fn_STAR__temp_val__21498_21507 = ((function (_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21497_21506;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21498_21507;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,_STAR_print_fn_STAR__temp_val__21498_21507,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,_STAR_print_fn_STAR__temp_val__21498_21507,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21486_SHARP_){
return cljs.core.dissoc.call(null,p1__21486_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,_STAR_print_fn_STAR__temp_val__21498_21507,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21495_21504,_STAR_print_fn_STAR__orig_val__21496_21505,_STAR_print_newline_STAR__temp_val__21497_21506,_STAR_print_fn_STAR__temp_val__21498_21507,sb__4661__auto__,G__21490,G__21490__$1,loc,class_name,simple_class,cause_type,format,map__21488,map__21488__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21496_21505;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21495_21504;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21490__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
