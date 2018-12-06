// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__144047){
var map__144049 = p__144047;
var map__144049__$1 = ((((!((map__144049 == null)))?(((((map__144049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__144049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144049):map__144049);
var m = map__144049__$1;
var n = cljs.core.get.call(null,map__144049__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__144049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__144052_144084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__144053_144085 = null;
var count__144054_144086 = (0);
var i__144055_144087 = (0);
while(true){
if((i__144055_144087 < count__144054_144086)){
var f_144088 = cljs.core._nth.call(null,chunk__144053_144085,i__144055_144087);
cljs.core.println.call(null,"  ",f_144088);


var G__144089 = seq__144052_144084;
var G__144090 = chunk__144053_144085;
var G__144091 = count__144054_144086;
var G__144092 = (i__144055_144087 + (1));
seq__144052_144084 = G__144089;
chunk__144053_144085 = G__144090;
count__144054_144086 = G__144091;
i__144055_144087 = G__144092;
continue;
} else {
var temp__5457__auto___144093 = cljs.core.seq.call(null,seq__144052_144084);
if(temp__5457__auto___144093){
var seq__144052_144094__$1 = temp__5457__auto___144093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144052_144094__$1)){
var c__4319__auto___144095 = cljs.core.chunk_first.call(null,seq__144052_144094__$1);
var G__144096 = cljs.core.chunk_rest.call(null,seq__144052_144094__$1);
var G__144097 = c__4319__auto___144095;
var G__144098 = cljs.core.count.call(null,c__4319__auto___144095);
var G__144099 = (0);
seq__144052_144084 = G__144096;
chunk__144053_144085 = G__144097;
count__144054_144086 = G__144098;
i__144055_144087 = G__144099;
continue;
} else {
var f_144100 = cljs.core.first.call(null,seq__144052_144094__$1);
cljs.core.println.call(null,"  ",f_144100);


var G__144101 = cljs.core.next.call(null,seq__144052_144094__$1);
var G__144102 = null;
var G__144103 = (0);
var G__144104 = (0);
seq__144052_144084 = G__144101;
chunk__144053_144085 = G__144102;
count__144054_144086 = G__144103;
i__144055_144087 = G__144104;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_144105 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_144105);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_144105)))?cljs.core.second.call(null,arglists_144105):arglists_144105));
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
var seq__144056_144106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__144057_144107 = null;
var count__144058_144108 = (0);
var i__144059_144109 = (0);
while(true){
if((i__144059_144109 < count__144058_144108)){
var vec__144060_144110 = cljs.core._nth.call(null,chunk__144057_144107,i__144059_144109);
var name_144111 = cljs.core.nth.call(null,vec__144060_144110,(0),null);
var map__144063_144112 = cljs.core.nth.call(null,vec__144060_144110,(1),null);
var map__144063_144113__$1 = ((((!((map__144063_144112 == null)))?(((((map__144063_144112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__144063_144112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144063_144112):map__144063_144112);
var doc_144114 = cljs.core.get.call(null,map__144063_144113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_144115 = cljs.core.get.call(null,map__144063_144113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_144111);

cljs.core.println.call(null," ",arglists_144115);

if(cljs.core.truth_(doc_144114)){
cljs.core.println.call(null," ",doc_144114);
} else {
}


var G__144116 = seq__144056_144106;
var G__144117 = chunk__144057_144107;
var G__144118 = count__144058_144108;
var G__144119 = (i__144059_144109 + (1));
seq__144056_144106 = G__144116;
chunk__144057_144107 = G__144117;
count__144058_144108 = G__144118;
i__144059_144109 = G__144119;
continue;
} else {
var temp__5457__auto___144120 = cljs.core.seq.call(null,seq__144056_144106);
if(temp__5457__auto___144120){
var seq__144056_144121__$1 = temp__5457__auto___144120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144056_144121__$1)){
var c__4319__auto___144122 = cljs.core.chunk_first.call(null,seq__144056_144121__$1);
var G__144123 = cljs.core.chunk_rest.call(null,seq__144056_144121__$1);
var G__144124 = c__4319__auto___144122;
var G__144125 = cljs.core.count.call(null,c__4319__auto___144122);
var G__144126 = (0);
seq__144056_144106 = G__144123;
chunk__144057_144107 = G__144124;
count__144058_144108 = G__144125;
i__144059_144109 = G__144126;
continue;
} else {
var vec__144069_144127 = cljs.core.first.call(null,seq__144056_144121__$1);
var name_144128 = cljs.core.nth.call(null,vec__144069_144127,(0),null);
var map__144072_144129 = cljs.core.nth.call(null,vec__144069_144127,(1),null);
var map__144072_144130__$1 = ((((!((map__144072_144129 == null)))?(((((map__144072_144129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__144072_144129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__144072_144129):map__144072_144129);
var doc_144131 = cljs.core.get.call(null,map__144072_144130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_144132 = cljs.core.get.call(null,map__144072_144130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_144128);

cljs.core.println.call(null," ",arglists_144132);

if(cljs.core.truth_(doc_144131)){
cljs.core.println.call(null," ",doc_144131);
} else {
}


var G__144133 = cljs.core.next.call(null,seq__144056_144121__$1);
var G__144134 = null;
var G__144135 = (0);
var G__144136 = (0);
seq__144056_144106 = G__144133;
chunk__144057_144107 = G__144134;
count__144058_144108 = G__144135;
i__144059_144109 = G__144136;
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

var seq__144074 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__144075 = null;
var count__144076 = (0);
var i__144077 = (0);
while(true){
if((i__144077 < count__144076)){
var role = cljs.core._nth.call(null,chunk__144075,i__144077);
var temp__5457__auto___144137__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___144137__$1)){
var spec_144138 = temp__5457__auto___144137__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_144138));
} else {
}


var G__144139 = seq__144074;
var G__144140 = chunk__144075;
var G__144141 = count__144076;
var G__144142 = (i__144077 + (1));
seq__144074 = G__144139;
chunk__144075 = G__144140;
count__144076 = G__144141;
i__144077 = G__144142;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__144074);
if(temp__5457__auto____$1){
var seq__144074__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__144074__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__144074__$1);
var G__144143 = cljs.core.chunk_rest.call(null,seq__144074__$1);
var G__144144 = c__4319__auto__;
var G__144145 = cljs.core.count.call(null,c__4319__auto__);
var G__144146 = (0);
seq__144074 = G__144143;
chunk__144075 = G__144144;
count__144076 = G__144145;
i__144077 = G__144146;
continue;
} else {
var role = cljs.core.first.call(null,seq__144074__$1);
var temp__5457__auto___144147__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___144147__$2)){
var spec_144148 = temp__5457__auto___144147__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_144148));
} else {
}


var G__144149 = cljs.core.next.call(null,seq__144074__$1);
var G__144150 = null;
var G__144151 = (0);
var G__144152 = (0);
seq__144074 = G__144149;
chunk__144075 = G__144150;
count__144076 = G__144151;
i__144077 = G__144152;
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
