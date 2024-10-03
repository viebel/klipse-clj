// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32151){
var map__32152 = p__32151;
var map__32152__$1 = cljs.core.__destructure_map.call(null,map__32152);
var m = map__32152__$1;
var n = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32153_32181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32154_32182 = null;
var count__32155_32183 = (0);
var i__32156_32184 = (0);
while(true){
if((i__32156_32184 < count__32155_32183)){
var f_32185 = cljs.core._nth.call(null,chunk__32154_32182,i__32156_32184);
cljs.core.println.call(null,"  ",f_32185);


var G__32186 = seq__32153_32181;
var G__32187 = chunk__32154_32182;
var G__32188 = count__32155_32183;
var G__32189 = (i__32156_32184 + (1));
seq__32153_32181 = G__32186;
chunk__32154_32182 = G__32187;
count__32155_32183 = G__32188;
i__32156_32184 = G__32189;
continue;
} else {
var temp__5823__auto___32190 = cljs.core.seq.call(null,seq__32153_32181);
if(temp__5823__auto___32190){
var seq__32153_32191__$1 = temp__5823__auto___32190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32153_32191__$1)){
var c__5525__auto___32192 = cljs.core.chunk_first.call(null,seq__32153_32191__$1);
var G__32193 = cljs.core.chunk_rest.call(null,seq__32153_32191__$1);
var G__32194 = c__5525__auto___32192;
var G__32195 = cljs.core.count.call(null,c__5525__auto___32192);
var G__32196 = (0);
seq__32153_32181 = G__32193;
chunk__32154_32182 = G__32194;
count__32155_32183 = G__32195;
i__32156_32184 = G__32196;
continue;
} else {
var f_32197 = cljs.core.first.call(null,seq__32153_32191__$1);
cljs.core.println.call(null,"  ",f_32197);


var G__32198 = cljs.core.next.call(null,seq__32153_32191__$1);
var G__32199 = null;
var G__32200 = (0);
var G__32201 = (0);
seq__32153_32181 = G__32198;
chunk__32154_32182 = G__32199;
count__32155_32183 = G__32200;
i__32156_32184 = G__32201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32202)))?cljs.core.second.call(null,arglists_32202):arglists_32202));
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
var seq__32157_32203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32158_32204 = null;
var count__32159_32205 = (0);
var i__32160_32206 = (0);
while(true){
if((i__32160_32206 < count__32159_32205)){
var vec__32169_32207 = cljs.core._nth.call(null,chunk__32158_32204,i__32160_32206);
var name_32208 = cljs.core.nth.call(null,vec__32169_32207,(0),null);
var map__32172_32209 = cljs.core.nth.call(null,vec__32169_32207,(1),null);
var map__32172_32210__$1 = cljs.core.__destructure_map.call(null,map__32172_32209);
var doc_32211 = cljs.core.get.call(null,map__32172_32210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32212 = cljs.core.get.call(null,map__32172_32210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32208);

cljs.core.println.call(null," ",arglists_32212);

if(cljs.core.truth_(doc_32211)){
cljs.core.println.call(null," ",doc_32211);
} else {
}


var G__32213 = seq__32157_32203;
var G__32214 = chunk__32158_32204;
var G__32215 = count__32159_32205;
var G__32216 = (i__32160_32206 + (1));
seq__32157_32203 = G__32213;
chunk__32158_32204 = G__32214;
count__32159_32205 = G__32215;
i__32160_32206 = G__32216;
continue;
} else {
var temp__5823__auto___32217 = cljs.core.seq.call(null,seq__32157_32203);
if(temp__5823__auto___32217){
var seq__32157_32218__$1 = temp__5823__auto___32217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32157_32218__$1)){
var c__5525__auto___32219 = cljs.core.chunk_first.call(null,seq__32157_32218__$1);
var G__32220 = cljs.core.chunk_rest.call(null,seq__32157_32218__$1);
var G__32221 = c__5525__auto___32219;
var G__32222 = cljs.core.count.call(null,c__5525__auto___32219);
var G__32223 = (0);
seq__32157_32203 = G__32220;
chunk__32158_32204 = G__32221;
count__32159_32205 = G__32222;
i__32160_32206 = G__32223;
continue;
} else {
var vec__32173_32224 = cljs.core.first.call(null,seq__32157_32218__$1);
var name_32225 = cljs.core.nth.call(null,vec__32173_32224,(0),null);
var map__32176_32226 = cljs.core.nth.call(null,vec__32173_32224,(1),null);
var map__32176_32227__$1 = cljs.core.__destructure_map.call(null,map__32176_32226);
var doc_32228 = cljs.core.get.call(null,map__32176_32227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32229 = cljs.core.get.call(null,map__32176_32227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32225);

cljs.core.println.call(null," ",arglists_32229);

if(cljs.core.truth_(doc_32228)){
cljs.core.println.call(null," ",doc_32228);
} else {
}


var G__32230 = cljs.core.next.call(null,seq__32157_32218__$1);
var G__32231 = null;
var G__32232 = (0);
var G__32233 = (0);
seq__32157_32203 = G__32230;
chunk__32158_32204 = G__32231;
count__32159_32205 = G__32232;
i__32160_32206 = G__32233;
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

var seq__32177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32178 = null;
var count__32179 = (0);
var i__32180 = (0);
while(true){
if((i__32180 < count__32179)){
var role = cljs.core._nth.call(null,chunk__32178,i__32180);
var temp__5823__auto___32234__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32234__$1)){
var spec_32235 = temp__5823__auto___32234__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32235));
} else {
}


var G__32236 = seq__32177;
var G__32237 = chunk__32178;
var G__32238 = count__32179;
var G__32239 = (i__32180 + (1));
seq__32177 = G__32236;
chunk__32178 = G__32237;
count__32179 = G__32238;
i__32180 = G__32239;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__32177);
if(temp__5823__auto____$1){
var seq__32177__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32177__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__32177__$1);
var G__32240 = cljs.core.chunk_rest.call(null,seq__32177__$1);
var G__32241 = c__5525__auto__;
var G__32242 = cljs.core.count.call(null,c__5525__auto__);
var G__32243 = (0);
seq__32177 = G__32240;
chunk__32178 = G__32241;
count__32179 = G__32242;
i__32180 = G__32243;
continue;
} else {
var role = cljs.core.first.call(null,seq__32177__$1);
var temp__5823__auto___32244__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32244__$2)){
var spec_32245 = temp__5823__auto___32244__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32245));
} else {
}


var G__32246 = cljs.core.next.call(null,seq__32177__$1);
var G__32247 = null;
var G__32248 = (0);
var G__32249 = (0);
seq__32177 = G__32246;
chunk__32178 = G__32247;
count__32179 = G__32248;
i__32180 = G__32249;
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
var map__32252 = datafied_throwable;
var map__32252__$1 = cljs.core.__destructure_map.call(null,map__32252);
var via = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32253 = cljs.core.last.call(null,via);
var map__32253__$1 = cljs.core.__destructure_map.call(null,map__32253);
var type = cljs.core.get.call(null,map__32253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32254 = data;
var map__32254__$1 = cljs.core.__destructure_map.call(null,map__32254);
var problems = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32254__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32255 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32255__$1 = cljs.core.__destructure_map.call(null,map__32255);
var top_data = map__32255__$1;
var source = cljs.core.get.call(null,map__32255__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32256 = phase;
var G__32256__$1 = (((G__32256 instanceof cljs.core.Keyword))?G__32256.fqn:null);
switch (G__32256__$1) {
case "read-source":
var map__32257 = data;
var map__32257__$1 = cljs.core.__destructure_map.call(null,map__32257);
var line = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32258 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32258__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32258,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32258);
var G__32258__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32258__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32258__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32258__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32259 = top_data;
var G__32259__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32259,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32259);
var G__32259__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32259__$1);
var G__32259__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32259__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32259__$2);
var G__32259__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32259__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32259__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32259__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32259__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32260 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32260,(0),null);
var method = cljs.core.nth.call(null,vec__32260,(1),null);
var file = cljs.core.nth.call(null,vec__32260,(2),null);
var line = cljs.core.nth.call(null,vec__32260,(3),null);
var G__32263 = top_data;
var G__32263__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32263,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32263);
var G__32263__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32263__$1);
var G__32263__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__32263__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32263__$2);
var G__32263__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32263__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32263__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32263__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32263__$4;
}

break;
case "execution":
var vec__32264 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32264,(0),null);
var method = cljs.core.nth.call(null,vec__32264,(1),null);
var file = cljs.core.nth.call(null,vec__32264,(2),null);
var line = cljs.core.nth.call(null,vec__32264,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32251_SHARP_){
var or__5002__auto__ = (p1__32251_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32251_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__32267 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32267__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32267,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32267);
var G__32267__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32267__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32267__$1);
var G__32267__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__32267__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32267__$2);
var G__32267__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32267__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32267__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32267__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32267__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32256__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32271){
var map__32272 = p__32271;
var map__32272__$1 = cljs.core.__destructure_map.call(null,map__32272);
var triage_data = map__32272__$1;
var phase = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__32273 = phase;
var G__32273__$1 = (((G__32273 instanceof cljs.core.Keyword))?G__32273.fqn:null);
switch (G__32273__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32274_32283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32275_32284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32276_32285 = true;
var _STAR_print_fn_STAR__temp_val__32277_32286 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32276_32285);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32277_32286);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32269_SHARP_){
return cljs.core.dissoc.call(null,p1__32269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32275_32284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32274_32283);
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
var _STAR_print_newline_STAR__orig_val__32278_32287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32279_32288 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32280_32289 = true;
var _STAR_print_fn_STAR__temp_val__32281_32290 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32280_32289);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32281_32290);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32270_SHARP_){
return cljs.core.dissoc.call(null,p1__32270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32279_32288);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32278_32287);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32273__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
