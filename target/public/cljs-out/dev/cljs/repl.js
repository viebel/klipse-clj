// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28723){
var map__28724 = p__28723;
var map__28724__$1 = (((((!((map__28724 == null))))?(((((map__28724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28724):map__28724);
var m = map__28724__$1;
var n = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28726_28748 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28727_28749 = null;
var count__28728_28750 = (0);
var i__28729_28751 = (0);
while(true){
if((i__28729_28751 < count__28728_28750)){
var f_28752 = cljs.core._nth.call(null,chunk__28727_28749,i__28729_28751);
cljs.core.println.call(null,"  ",f_28752);


var G__28753 = seq__28726_28748;
var G__28754 = chunk__28727_28749;
var G__28755 = count__28728_28750;
var G__28756 = (i__28729_28751 + (1));
seq__28726_28748 = G__28753;
chunk__28727_28749 = G__28754;
count__28728_28750 = G__28755;
i__28729_28751 = G__28756;
continue;
} else {
var temp__5720__auto___28757 = cljs.core.seq.call(null,seq__28726_28748);
if(temp__5720__auto___28757){
var seq__28726_28758__$1 = temp__5720__auto___28757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28726_28758__$1)){
var c__4461__auto___28759 = cljs.core.chunk_first.call(null,seq__28726_28758__$1);
var G__28760 = cljs.core.chunk_rest.call(null,seq__28726_28758__$1);
var G__28761 = c__4461__auto___28759;
var G__28762 = cljs.core.count.call(null,c__4461__auto___28759);
var G__28763 = (0);
seq__28726_28748 = G__28760;
chunk__28727_28749 = G__28761;
count__28728_28750 = G__28762;
i__28729_28751 = G__28763;
continue;
} else {
var f_28764 = cljs.core.first.call(null,seq__28726_28758__$1);
cljs.core.println.call(null,"  ",f_28764);


var G__28765 = cljs.core.next.call(null,seq__28726_28758__$1);
var G__28766 = null;
var G__28767 = (0);
var G__28768 = (0);
seq__28726_28748 = G__28765;
chunk__28727_28749 = G__28766;
count__28728_28750 = G__28767;
i__28729_28751 = G__28768;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28769 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28769);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28769)))?cljs.core.second.call(null,arglists_28769):arglists_28769));
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
var seq__28730_28770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28731_28771 = null;
var count__28732_28772 = (0);
var i__28733_28773 = (0);
while(true){
if((i__28733_28773 < count__28732_28772)){
var vec__28734_28774 = cljs.core._nth.call(null,chunk__28731_28771,i__28733_28773);
var name_28775 = cljs.core.nth.call(null,vec__28734_28774,(0),null);
var map__28737_28776 = cljs.core.nth.call(null,vec__28734_28774,(1),null);
var map__28737_28777__$1 = (((((!((map__28737_28776 == null))))?(((((map__28737_28776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28737_28776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28737_28776):map__28737_28776);
var doc_28778 = cljs.core.get.call(null,map__28737_28777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28779 = cljs.core.get.call(null,map__28737_28777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28775);

cljs.core.println.call(null," ",arglists_28779);

if(cljs.core.truth_(doc_28778)){
cljs.core.println.call(null," ",doc_28778);
} else {
}


var G__28780 = seq__28730_28770;
var G__28781 = chunk__28731_28771;
var G__28782 = count__28732_28772;
var G__28783 = (i__28733_28773 + (1));
seq__28730_28770 = G__28780;
chunk__28731_28771 = G__28781;
count__28732_28772 = G__28782;
i__28733_28773 = G__28783;
continue;
} else {
var temp__5720__auto___28784 = cljs.core.seq.call(null,seq__28730_28770);
if(temp__5720__auto___28784){
var seq__28730_28785__$1 = temp__5720__auto___28784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28730_28785__$1)){
var c__4461__auto___28786 = cljs.core.chunk_first.call(null,seq__28730_28785__$1);
var G__28787 = cljs.core.chunk_rest.call(null,seq__28730_28785__$1);
var G__28788 = c__4461__auto___28786;
var G__28789 = cljs.core.count.call(null,c__4461__auto___28786);
var G__28790 = (0);
seq__28730_28770 = G__28787;
chunk__28731_28771 = G__28788;
count__28732_28772 = G__28789;
i__28733_28773 = G__28790;
continue;
} else {
var vec__28739_28791 = cljs.core.first.call(null,seq__28730_28785__$1);
var name_28792 = cljs.core.nth.call(null,vec__28739_28791,(0),null);
var map__28742_28793 = cljs.core.nth.call(null,vec__28739_28791,(1),null);
var map__28742_28794__$1 = (((((!((map__28742_28793 == null))))?(((((map__28742_28793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28742_28793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28742_28793):map__28742_28793);
var doc_28795 = cljs.core.get.call(null,map__28742_28794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28796 = cljs.core.get.call(null,map__28742_28794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28792);

cljs.core.println.call(null," ",arglists_28796);

if(cljs.core.truth_(doc_28795)){
cljs.core.println.call(null," ",doc_28795);
} else {
}


var G__28797 = cljs.core.next.call(null,seq__28730_28785__$1);
var G__28798 = null;
var G__28799 = (0);
var G__28800 = (0);
seq__28730_28770 = G__28797;
chunk__28731_28771 = G__28798;
count__28732_28772 = G__28799;
i__28733_28773 = G__28800;
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

var seq__28744 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28745 = null;
var count__28746 = (0);
var i__28747 = (0);
while(true){
if((i__28747 < count__28746)){
var role = cljs.core._nth.call(null,chunk__28745,i__28747);
var temp__5720__auto___28801__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28801__$1)){
var spec_28802 = temp__5720__auto___28801__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28802));
} else {
}


var G__28803 = seq__28744;
var G__28804 = chunk__28745;
var G__28805 = count__28746;
var G__28806 = (i__28747 + (1));
seq__28744 = G__28803;
chunk__28745 = G__28804;
count__28746 = G__28805;
i__28747 = G__28806;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28744);
if(temp__5720__auto____$1){
var seq__28744__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28744__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28744__$1);
var G__28807 = cljs.core.chunk_rest.call(null,seq__28744__$1);
var G__28808 = c__4461__auto__;
var G__28809 = cljs.core.count.call(null,c__4461__auto__);
var G__28810 = (0);
seq__28744 = G__28807;
chunk__28745 = G__28808;
count__28746 = G__28809;
i__28747 = G__28810;
continue;
} else {
var role = cljs.core.first.call(null,seq__28744__$1);
var temp__5720__auto___28811__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28811__$2)){
var spec_28812 = temp__5720__auto___28811__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28812));
} else {
}


var G__28813 = cljs.core.next.call(null,seq__28744__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__28744 = G__28813;
chunk__28745 = G__28814;
count__28746 = G__28815;
i__28747 = G__28816;
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
