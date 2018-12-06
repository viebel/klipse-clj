// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29014){
var map__29015 = p__29014;
var map__29015__$1 = ((((!((map__29015 == null)))?(((((map__29015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);
var m = map__29015__$1;
var n = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29017_29039 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29018_29040 = null;
var count__29019_29041 = (0);
var i__29020_29042 = (0);
while(true){
if((i__29020_29042 < count__29019_29041)){
var f_29043 = cljs.core._nth.call(null,chunk__29018_29040,i__29020_29042);
cljs.core.println.call(null,"  ",f_29043);


var G__29044 = seq__29017_29039;
var G__29045 = chunk__29018_29040;
var G__29046 = count__29019_29041;
var G__29047 = (i__29020_29042 + (1));
seq__29017_29039 = G__29044;
chunk__29018_29040 = G__29045;
count__29019_29041 = G__29046;
i__29020_29042 = G__29047;
continue;
} else {
var temp__5457__auto___29048 = cljs.core.seq.call(null,seq__29017_29039);
if(temp__5457__auto___29048){
var seq__29017_29049__$1 = temp__5457__auto___29048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29017_29049__$1)){
var c__4319__auto___29050 = cljs.core.chunk_first.call(null,seq__29017_29049__$1);
var G__29051 = cljs.core.chunk_rest.call(null,seq__29017_29049__$1);
var G__29052 = c__4319__auto___29050;
var G__29053 = cljs.core.count.call(null,c__4319__auto___29050);
var G__29054 = (0);
seq__29017_29039 = G__29051;
chunk__29018_29040 = G__29052;
count__29019_29041 = G__29053;
i__29020_29042 = G__29054;
continue;
} else {
var f_29055 = cljs.core.first.call(null,seq__29017_29049__$1);
cljs.core.println.call(null,"  ",f_29055);


var G__29056 = cljs.core.next.call(null,seq__29017_29049__$1);
var G__29057 = null;
var G__29058 = (0);
var G__29059 = (0);
seq__29017_29039 = G__29056;
chunk__29018_29040 = G__29057;
count__29019_29041 = G__29058;
i__29020_29042 = G__29059;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29060 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29060);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29060)))?cljs.core.second.call(null,arglists_29060):arglists_29060));
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
var seq__29021_29061 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29022_29062 = null;
var count__29023_29063 = (0);
var i__29024_29064 = (0);
while(true){
if((i__29024_29064 < count__29023_29063)){
var vec__29025_29065 = cljs.core._nth.call(null,chunk__29022_29062,i__29024_29064);
var name_29066 = cljs.core.nth.call(null,vec__29025_29065,(0),null);
var map__29028_29067 = cljs.core.nth.call(null,vec__29025_29065,(1),null);
var map__29028_29068__$1 = ((((!((map__29028_29067 == null)))?(((((map__29028_29067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29028_29067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29028_29067):map__29028_29067);
var doc_29069 = cljs.core.get.call(null,map__29028_29068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29070 = cljs.core.get.call(null,map__29028_29068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29066);

cljs.core.println.call(null," ",arglists_29070);

if(cljs.core.truth_(doc_29069)){
cljs.core.println.call(null," ",doc_29069);
} else {
}


var G__29071 = seq__29021_29061;
var G__29072 = chunk__29022_29062;
var G__29073 = count__29023_29063;
var G__29074 = (i__29024_29064 + (1));
seq__29021_29061 = G__29071;
chunk__29022_29062 = G__29072;
count__29023_29063 = G__29073;
i__29024_29064 = G__29074;
continue;
} else {
var temp__5457__auto___29075 = cljs.core.seq.call(null,seq__29021_29061);
if(temp__5457__auto___29075){
var seq__29021_29076__$1 = temp__5457__auto___29075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29021_29076__$1)){
var c__4319__auto___29077 = cljs.core.chunk_first.call(null,seq__29021_29076__$1);
var G__29078 = cljs.core.chunk_rest.call(null,seq__29021_29076__$1);
var G__29079 = c__4319__auto___29077;
var G__29080 = cljs.core.count.call(null,c__4319__auto___29077);
var G__29081 = (0);
seq__29021_29061 = G__29078;
chunk__29022_29062 = G__29079;
count__29023_29063 = G__29080;
i__29024_29064 = G__29081;
continue;
} else {
var vec__29030_29082 = cljs.core.first.call(null,seq__29021_29076__$1);
var name_29083 = cljs.core.nth.call(null,vec__29030_29082,(0),null);
var map__29033_29084 = cljs.core.nth.call(null,vec__29030_29082,(1),null);
var map__29033_29085__$1 = ((((!((map__29033_29084 == null)))?(((((map__29033_29084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033_29084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29033_29084):map__29033_29084);
var doc_29086 = cljs.core.get.call(null,map__29033_29085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29087 = cljs.core.get.call(null,map__29033_29085__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29083);

cljs.core.println.call(null," ",arglists_29087);

if(cljs.core.truth_(doc_29086)){
cljs.core.println.call(null," ",doc_29086);
} else {
}


var G__29088 = cljs.core.next.call(null,seq__29021_29076__$1);
var G__29089 = null;
var G__29090 = (0);
var G__29091 = (0);
seq__29021_29061 = G__29088;
chunk__29022_29062 = G__29089;
count__29023_29063 = G__29090;
i__29024_29064 = G__29091;
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

var seq__29035 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29036 = null;
var count__29037 = (0);
var i__29038 = (0);
while(true){
if((i__29038 < count__29037)){
var role = cljs.core._nth.call(null,chunk__29036,i__29038);
var temp__5457__auto___29092__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29092__$1)){
var spec_29093 = temp__5457__auto___29092__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29093));
} else {
}


var G__29094 = seq__29035;
var G__29095 = chunk__29036;
var G__29096 = count__29037;
var G__29097 = (i__29038 + (1));
seq__29035 = G__29094;
chunk__29036 = G__29095;
count__29037 = G__29096;
i__29038 = G__29097;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29035);
if(temp__5457__auto____$1){
var seq__29035__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29035__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29035__$1);
var G__29098 = cljs.core.chunk_rest.call(null,seq__29035__$1);
var G__29099 = c__4319__auto__;
var G__29100 = cljs.core.count.call(null,c__4319__auto__);
var G__29101 = (0);
seq__29035 = G__29098;
chunk__29036 = G__29099;
count__29037 = G__29100;
i__29038 = G__29101;
continue;
} else {
var role = cljs.core.first.call(null,seq__29035__$1);
var temp__5457__auto___29102__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29102__$2)){
var spec_29103 = temp__5457__auto___29102__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29103));
} else {
}


var G__29104 = cljs.core.next.call(null,seq__29035__$1);
var G__29105 = null;
var G__29106 = (0);
var G__29107 = (0);
seq__29035 = G__29104;
chunk__29036 = G__29105;
count__29037 = G__29106;
i__29038 = G__29107;
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
