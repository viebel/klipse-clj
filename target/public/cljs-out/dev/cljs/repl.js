// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32236){
var map__32237 = p__32236;
var map__32237__$1 = cljs.core.__destructure_map.call(null,map__32237);
var m = map__32237__$1;
var n = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
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
var seq__32238_32266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32239_32267 = null;
var count__32240_32268 = (0);
var i__32241_32269 = (0);
while(true){
if((i__32241_32269 < count__32240_32268)){
var f_32270 = cljs.core._nth.call(null,chunk__32239_32267,i__32241_32269);
cljs.core.println.call(null,"  ",f_32270);


var G__32271 = seq__32238_32266;
var G__32272 = chunk__32239_32267;
var G__32273 = count__32240_32268;
var G__32274 = (i__32241_32269 + (1));
seq__32238_32266 = G__32271;
chunk__32239_32267 = G__32272;
count__32240_32268 = G__32273;
i__32241_32269 = G__32274;
continue;
} else {
var temp__5823__auto___32275 = cljs.core.seq.call(null,seq__32238_32266);
if(temp__5823__auto___32275){
var seq__32238_32276__$1 = temp__5823__auto___32275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32238_32276__$1)){
var c__5525__auto___32277 = cljs.core.chunk_first.call(null,seq__32238_32276__$1);
var G__32278 = cljs.core.chunk_rest.call(null,seq__32238_32276__$1);
var G__32279 = c__5525__auto___32277;
var G__32280 = cljs.core.count.call(null,c__5525__auto___32277);
var G__32281 = (0);
seq__32238_32266 = G__32278;
chunk__32239_32267 = G__32279;
count__32240_32268 = G__32280;
i__32241_32269 = G__32281;
continue;
} else {
var f_32282 = cljs.core.first.call(null,seq__32238_32276__$1);
cljs.core.println.call(null,"  ",f_32282);


var G__32283 = cljs.core.next.call(null,seq__32238_32276__$1);
var G__32284 = null;
var G__32285 = (0);
var G__32286 = (0);
seq__32238_32266 = G__32283;
chunk__32239_32267 = G__32284;
count__32240_32268 = G__32285;
i__32241_32269 = G__32286;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32287 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32287);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32287)))?cljs.core.second.call(null,arglists_32287):arglists_32287));
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
var seq__32242_32288 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32243_32289 = null;
var count__32244_32290 = (0);
var i__32245_32291 = (0);
while(true){
if((i__32245_32291 < count__32244_32290)){
var vec__32254_32292 = cljs.core._nth.call(null,chunk__32243_32289,i__32245_32291);
var name_32293 = cljs.core.nth.call(null,vec__32254_32292,(0),null);
var map__32257_32294 = cljs.core.nth.call(null,vec__32254_32292,(1),null);
var map__32257_32295__$1 = cljs.core.__destructure_map.call(null,map__32257_32294);
var doc_32296 = cljs.core.get.call(null,map__32257_32295__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32297 = cljs.core.get.call(null,map__32257_32295__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32293);

cljs.core.println.call(null," ",arglists_32297);

if(cljs.core.truth_(doc_32296)){
cljs.core.println.call(null," ",doc_32296);
} else {
}


var G__32298 = seq__32242_32288;
var G__32299 = chunk__32243_32289;
var G__32300 = count__32244_32290;
var G__32301 = (i__32245_32291 + (1));
seq__32242_32288 = G__32298;
chunk__32243_32289 = G__32299;
count__32244_32290 = G__32300;
i__32245_32291 = G__32301;
continue;
} else {
var temp__5823__auto___32302 = cljs.core.seq.call(null,seq__32242_32288);
if(temp__5823__auto___32302){
var seq__32242_32303__$1 = temp__5823__auto___32302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32242_32303__$1)){
var c__5525__auto___32304 = cljs.core.chunk_first.call(null,seq__32242_32303__$1);
var G__32305 = cljs.core.chunk_rest.call(null,seq__32242_32303__$1);
var G__32306 = c__5525__auto___32304;
var G__32307 = cljs.core.count.call(null,c__5525__auto___32304);
var G__32308 = (0);
seq__32242_32288 = G__32305;
chunk__32243_32289 = G__32306;
count__32244_32290 = G__32307;
i__32245_32291 = G__32308;
continue;
} else {
var vec__32258_32309 = cljs.core.first.call(null,seq__32242_32303__$1);
var name_32310 = cljs.core.nth.call(null,vec__32258_32309,(0),null);
var map__32261_32311 = cljs.core.nth.call(null,vec__32258_32309,(1),null);
var map__32261_32312__$1 = cljs.core.__destructure_map.call(null,map__32261_32311);
var doc_32313 = cljs.core.get.call(null,map__32261_32312__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32314 = cljs.core.get.call(null,map__32261_32312__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32310);

cljs.core.println.call(null," ",arglists_32314);

if(cljs.core.truth_(doc_32313)){
cljs.core.println.call(null," ",doc_32313);
} else {
}


var G__32315 = cljs.core.next.call(null,seq__32242_32303__$1);
var G__32316 = null;
var G__32317 = (0);
var G__32318 = (0);
seq__32242_32288 = G__32315;
chunk__32243_32289 = G__32316;
count__32244_32290 = G__32317;
i__32245_32291 = G__32318;
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
var temp__5823__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.call(null,"Spec");

var seq__32262 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32263 = null;
var count__32264 = (0);
var i__32265 = (0);
while(true){
if((i__32265 < count__32264)){
var role = cljs.core._nth.call(null,chunk__32263,i__32265);
var temp__5823__auto___32319__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32319__$1)){
var spec_32320 = temp__5823__auto___32319__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32320));
} else {
}


var G__32321 = seq__32262;
var G__32322 = chunk__32263;
var G__32323 = count__32264;
var G__32324 = (i__32265 + (1));
seq__32262 = G__32321;
chunk__32263 = G__32322;
count__32264 = G__32323;
i__32265 = G__32324;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__32262);
if(temp__5823__auto____$1){
var seq__32262__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32262__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__32262__$1);
var G__32325 = cljs.core.chunk_rest.call(null,seq__32262__$1);
var G__32326 = c__5525__auto__;
var G__32327 = cljs.core.count.call(null,c__5525__auto__);
var G__32328 = (0);
seq__32262 = G__32325;
chunk__32263 = G__32326;
count__32264 = G__32327;
i__32265 = G__32328;
continue;
} else {
var role = cljs.core.first.call(null,seq__32262__$1);
var temp__5823__auto___32329__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32329__$2)){
var spec_32330 = temp__5823__auto___32329__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32330));
} else {
}


var G__32331 = cljs.core.next.call(null,seq__32262__$1);
var G__32332 = null;
var G__32333 = (0);
var G__32334 = (0);
seq__32262 = G__32331;
chunk__32263 = G__32332;
count__32264 = G__32333;
i__32265 = G__32334;
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
return cljs.core.Throwable__GT_map.call(null,o);
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
var map__32337 = datafied_throwable;
var map__32337__$1 = cljs.core.__destructure_map.call(null,map__32337);
var via = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32337__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32338 = cljs.core.last.call(null,via);
var map__32338__$1 = cljs.core.__destructure_map.call(null,map__32338);
var type = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32339 = data;
var map__32339__$1 = cljs.core.__destructure_map.call(null,map__32339);
var problems = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32339__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32340 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32340__$1 = cljs.core.__destructure_map.call(null,map__32340);
var top_data = map__32340__$1;
var source = cljs.core.get.call(null,map__32340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32341 = phase;
var G__32341__$1 = (((G__32341 instanceof cljs.core.Keyword))?G__32341.fqn:null);
switch (G__32341__$1) {
case "read-source":
var map__32342 = data;
var map__32342__$1 = cljs.core.__destructure_map.call(null,map__32342);
var line = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32343 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32343);
var G__32343__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32343__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32343__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32343__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32344 = top_data;
var G__32344__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32344,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32344);
var G__32344__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32344__$1);
var G__32344__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32344__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32344__$2);
var G__32344__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32344__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32344__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32344__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32344__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32345 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32345,(0),null);
var method = cljs.core.nth.call(null,vec__32345,(1),null);
var file = cljs.core.nth.call(null,vec__32345,(2),null);
var line = cljs.core.nth.call(null,vec__32345,(3),null);
var G__32348 = top_data;
var G__32348__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32348,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32348);
var G__32348__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32348__$1);
var G__32348__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__32348__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32348__$2);
var G__32348__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32348__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32348__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32348__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32348__$4;
}

break;
case "execution":
var vec__32349 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32349,(0),null);
var method = cljs.core.nth.call(null,vec__32349,(1),null);
var file = cljs.core.nth.call(null,vec__32349,(2),null);
var line = cljs.core.nth.call(null,vec__32349,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32336_SHARP_){
var or__5002__auto__ = (p1__32336_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32336_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__32352 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32352__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32352,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32352);
var G__32352__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32352__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32352__$1);
var G__32352__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32352__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32352__$2);
var G__32352__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32352__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32352__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32352__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32352__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32341__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32356){
var map__32357 = p__32356;
var map__32357__$1 = cljs.core.__destructure_map.call(null,map__32357);
var triage_data = map__32357__$1;
var phase = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32357__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32358 = phase;
var G__32358__$1 = (((G__32358 instanceof cljs.core.Keyword))?G__32358.fqn:null);
switch (G__32358__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32359_32368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32360_32369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32361_32370 = true;
var _STAR_print_fn_STAR__temp_val__32362_32371 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32361_32370);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32362_32371);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32354_SHARP_){
return cljs.core.dissoc.call(null,p1__32354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32360_32369);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32359_32368);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32363_32372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32364_32373 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32365_32374 = true;
var _STAR_print_fn_STAR__temp_val__32366_32375 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32365_32374);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32366_32375);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32355_SHARP_){
return cljs.core.dissoc.call(null,p1__32355_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32364_32373);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32363_32372);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32358__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
