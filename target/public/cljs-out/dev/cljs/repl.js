// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39222){
var map__39223 = p__39222;
var map__39223__$1 = ((((!((map__39223 == null)))?(((((map__39223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39223):map__39223);
var m = map__39223__$1;
var n = cljs.core.get.call(null,map__39223__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39223__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39225_39247 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39226_39248 = null;
var count__39227_39249 = (0);
var i__39228_39250 = (0);
while(true){
if((i__39228_39250 < count__39227_39249)){
var f_39251 = cljs.core._nth.call(null,chunk__39226_39248,i__39228_39250);
cljs.core.println.call(null,"  ",f_39251);


var G__39252 = seq__39225_39247;
var G__39253 = chunk__39226_39248;
var G__39254 = count__39227_39249;
var G__39255 = (i__39228_39250 + (1));
seq__39225_39247 = G__39252;
chunk__39226_39248 = G__39253;
count__39227_39249 = G__39254;
i__39228_39250 = G__39255;
continue;
} else {
var temp__5457__auto___39256 = cljs.core.seq.call(null,seq__39225_39247);
if(temp__5457__auto___39256){
var seq__39225_39257__$1 = temp__5457__auto___39256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39225_39257__$1)){
var c__4319__auto___39258 = cljs.core.chunk_first.call(null,seq__39225_39257__$1);
var G__39259 = cljs.core.chunk_rest.call(null,seq__39225_39257__$1);
var G__39260 = c__4319__auto___39258;
var G__39261 = cljs.core.count.call(null,c__4319__auto___39258);
var G__39262 = (0);
seq__39225_39247 = G__39259;
chunk__39226_39248 = G__39260;
count__39227_39249 = G__39261;
i__39228_39250 = G__39262;
continue;
} else {
var f_39263 = cljs.core.first.call(null,seq__39225_39257__$1);
cljs.core.println.call(null,"  ",f_39263);


var G__39264 = cljs.core.next.call(null,seq__39225_39257__$1);
var G__39265 = null;
var G__39266 = (0);
var G__39267 = (0);
seq__39225_39247 = G__39264;
chunk__39226_39248 = G__39265;
count__39227_39249 = G__39266;
i__39228_39250 = G__39267;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39268 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39268);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39268)))?cljs.core.second.call(null,arglists_39268):arglists_39268));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39229_39269 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39230_39270 = null;
var count__39231_39271 = (0);
var i__39232_39272 = (0);
while(true){
if((i__39232_39272 < count__39231_39271)){
var vec__39233_39273 = cljs.core._nth.call(null,chunk__39230_39270,i__39232_39272);
var name_39274 = cljs.core.nth.call(null,vec__39233_39273,(0),null);
var map__39236_39275 = cljs.core.nth.call(null,vec__39233_39273,(1),null);
var map__39236_39276__$1 = ((((!((map__39236_39275 == null)))?(((((map__39236_39275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39236_39275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39236_39275):map__39236_39275);
var doc_39277 = cljs.core.get.call(null,map__39236_39276__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39278 = cljs.core.get.call(null,map__39236_39276__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39274);

cljs.core.println.call(null," ",arglists_39278);

if(cljs.core.truth_(doc_39277)){
cljs.core.println.call(null," ",doc_39277);
} else {
}


var G__39279 = seq__39229_39269;
var G__39280 = chunk__39230_39270;
var G__39281 = count__39231_39271;
var G__39282 = (i__39232_39272 + (1));
seq__39229_39269 = G__39279;
chunk__39230_39270 = G__39280;
count__39231_39271 = G__39281;
i__39232_39272 = G__39282;
continue;
} else {
var temp__5457__auto___39283 = cljs.core.seq.call(null,seq__39229_39269);
if(temp__5457__auto___39283){
var seq__39229_39284__$1 = temp__5457__auto___39283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39229_39284__$1)){
var c__4319__auto___39285 = cljs.core.chunk_first.call(null,seq__39229_39284__$1);
var G__39286 = cljs.core.chunk_rest.call(null,seq__39229_39284__$1);
var G__39287 = c__4319__auto___39285;
var G__39288 = cljs.core.count.call(null,c__4319__auto___39285);
var G__39289 = (0);
seq__39229_39269 = G__39286;
chunk__39230_39270 = G__39287;
count__39231_39271 = G__39288;
i__39232_39272 = G__39289;
continue;
} else {
var vec__39238_39290 = cljs.core.first.call(null,seq__39229_39284__$1);
var name_39291 = cljs.core.nth.call(null,vec__39238_39290,(0),null);
var map__39241_39292 = cljs.core.nth.call(null,vec__39238_39290,(1),null);
var map__39241_39293__$1 = ((((!((map__39241_39292 == null)))?(((((map__39241_39292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39241_39292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39241_39292):map__39241_39292);
var doc_39294 = cljs.core.get.call(null,map__39241_39293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39295 = cljs.core.get.call(null,map__39241_39293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39291);

cljs.core.println.call(null," ",arglists_39295);

if(cljs.core.truth_(doc_39294)){
cljs.core.println.call(null," ",doc_39294);
} else {
}


var G__39296 = cljs.core.next.call(null,seq__39229_39284__$1);
var G__39297 = null;
var G__39298 = (0);
var G__39299 = (0);
seq__39229_39269 = G__39296;
chunk__39230_39270 = G__39297;
count__39231_39271 = G__39298;
i__39232_39272 = G__39299;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__39243 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39244 = null;
var count__39245 = (0);
var i__39246 = (0);
while(true){
if((i__39246 < count__39245)){
var role = cljs.core._nth.call(null,chunk__39244,i__39246);
var temp__5457__auto___39300__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39300__$1)){
var spec_39301 = temp__5457__auto___39300__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39301));
} else {
}


var G__39302 = seq__39243;
var G__39303 = chunk__39244;
var G__39304 = count__39245;
var G__39305 = (i__39246 + (1));
seq__39243 = G__39302;
chunk__39244 = G__39303;
count__39245 = G__39304;
i__39246 = G__39305;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39243);
if(temp__5457__auto____$1){
var seq__39243__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39243__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39243__$1);
var G__39306 = cljs.core.chunk_rest.call(null,seq__39243__$1);
var G__39307 = c__4319__auto__;
var G__39308 = cljs.core.count.call(null,c__4319__auto__);
var G__39309 = (0);
seq__39243 = G__39306;
chunk__39244 = G__39307;
count__39245 = G__39308;
i__39246 = G__39309;
continue;
} else {
var role = cljs.core.first.call(null,seq__39243__$1);
var temp__5457__auto___39310__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39310__$2)){
var spec_39311 = temp__5457__auto___39310__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39311));
} else {
}


var G__39312 = cljs.core.next.call(null,seq__39243__$1);
var G__39313 = null;
var G__39314 = (0);
var G__39315 = (0);
seq__39243 = G__39312;
chunk__39244 = G__39313;
count__39245 = G__39314;
i__39246 = G__39315;
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

//# sourceMappingURL=repl.js.map
