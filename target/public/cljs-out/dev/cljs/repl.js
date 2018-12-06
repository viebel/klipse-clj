// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58702){
var map__58703 = p__58702;
var map__58703__$1 = ((((!((map__58703 == null)))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58703):map__58703);
var m = map__58703__$1;
var n = cljs.core.get.call(null,map__58703__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__58703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__58710_58758 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58711_58759 = null;
var count__58712_58760 = (0);
var i__58713_58761 = (0);
while(true){
if((i__58713_58761 < count__58712_58760)){
var f_58762 = cljs.core._nth.call(null,chunk__58711_58759,i__58713_58761);
cljs.core.println.call(null,"  ",f_58762);


var G__58763 = seq__58710_58758;
var G__58764 = chunk__58711_58759;
var G__58765 = count__58712_58760;
var G__58766 = (i__58713_58761 + (1));
seq__58710_58758 = G__58763;
chunk__58711_58759 = G__58764;
count__58712_58760 = G__58765;
i__58713_58761 = G__58766;
continue;
} else {
var temp__5457__auto___58767 = cljs.core.seq.call(null,seq__58710_58758);
if(temp__5457__auto___58767){
var seq__58710_58768__$1 = temp__5457__auto___58767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58710_58768__$1)){
var c__4319__auto___58769 = cljs.core.chunk_first.call(null,seq__58710_58768__$1);
var G__58774 = cljs.core.chunk_rest.call(null,seq__58710_58768__$1);
var G__58775 = c__4319__auto___58769;
var G__58776 = cljs.core.count.call(null,c__4319__auto___58769);
var G__58777 = (0);
seq__58710_58758 = G__58774;
chunk__58711_58759 = G__58775;
count__58712_58760 = G__58776;
i__58713_58761 = G__58777;
continue;
} else {
var f_58784 = cljs.core.first.call(null,seq__58710_58768__$1);
cljs.core.println.call(null,"  ",f_58784);


var G__58785 = cljs.core.next.call(null,seq__58710_58768__$1);
var G__58786 = null;
var G__58787 = (0);
var G__58788 = (0);
seq__58710_58758 = G__58785;
chunk__58711_58759 = G__58786;
count__58712_58760 = G__58787;
i__58713_58761 = G__58788;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58789 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58789);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58789)))?cljs.core.second.call(null,arglists_58789):arglists_58789));
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
var seq__58718_58807 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58719_58808 = null;
var count__58720_58809 = (0);
var i__58721_58810 = (0);
while(true){
if((i__58721_58810 < count__58720_58809)){
var vec__58722_58811 = cljs.core._nth.call(null,chunk__58719_58808,i__58721_58810);
var name_58812 = cljs.core.nth.call(null,vec__58722_58811,(0),null);
var map__58725_58813 = cljs.core.nth.call(null,vec__58722_58811,(1),null);
var map__58725_58814__$1 = ((((!((map__58725_58813 == null)))?(((((map__58725_58813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58725_58813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58725_58813):map__58725_58813);
var doc_58815 = cljs.core.get.call(null,map__58725_58814__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58816 = cljs.core.get.call(null,map__58725_58814__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58812);

cljs.core.println.call(null," ",arglists_58816);

if(cljs.core.truth_(doc_58815)){
cljs.core.println.call(null," ",doc_58815);
} else {
}


var G__58821 = seq__58718_58807;
var G__58822 = chunk__58719_58808;
var G__58823 = count__58720_58809;
var G__58824 = (i__58721_58810 + (1));
seq__58718_58807 = G__58821;
chunk__58719_58808 = G__58822;
count__58720_58809 = G__58823;
i__58721_58810 = G__58824;
continue;
} else {
var temp__5457__auto___58825 = cljs.core.seq.call(null,seq__58718_58807);
if(temp__5457__auto___58825){
var seq__58718_58826__$1 = temp__5457__auto___58825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58718_58826__$1)){
var c__4319__auto___58827 = cljs.core.chunk_first.call(null,seq__58718_58826__$1);
var G__58828 = cljs.core.chunk_rest.call(null,seq__58718_58826__$1);
var G__58829 = c__4319__auto___58827;
var G__58830 = cljs.core.count.call(null,c__4319__auto___58827);
var G__58831 = (0);
seq__58718_58807 = G__58828;
chunk__58719_58808 = G__58829;
count__58720_58809 = G__58830;
i__58721_58810 = G__58831;
continue;
} else {
var vec__58727_58833 = cljs.core.first.call(null,seq__58718_58826__$1);
var name_58834 = cljs.core.nth.call(null,vec__58727_58833,(0),null);
var map__58730_58835 = cljs.core.nth.call(null,vec__58727_58833,(1),null);
var map__58730_58836__$1 = ((((!((map__58730_58835 == null)))?(((((map__58730_58835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58730_58835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58730_58835):map__58730_58835);
var doc_58837 = cljs.core.get.call(null,map__58730_58836__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58838 = cljs.core.get.call(null,map__58730_58836__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58834);

cljs.core.println.call(null," ",arglists_58838);

if(cljs.core.truth_(doc_58837)){
cljs.core.println.call(null," ",doc_58837);
} else {
}


var G__58848 = cljs.core.next.call(null,seq__58718_58826__$1);
var G__58849 = null;
var G__58850 = (0);
var G__58851 = (0);
seq__58718_58807 = G__58848;
chunk__58719_58808 = G__58849;
count__58720_58809 = G__58850;
i__58721_58810 = G__58851;
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

var seq__58736 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58737 = null;
var count__58738 = (0);
var i__58739 = (0);
while(true){
if((i__58739 < count__58738)){
var role = cljs.core._nth.call(null,chunk__58737,i__58739);
var temp__5457__auto___58858__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___58858__$1)){
var spec_58859 = temp__5457__auto___58858__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58859));
} else {
}


var G__58860 = seq__58736;
var G__58861 = chunk__58737;
var G__58862 = count__58738;
var G__58863 = (i__58739 + (1));
seq__58736 = G__58860;
chunk__58737 = G__58861;
count__58738 = G__58862;
i__58739 = G__58863;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__58736);
if(temp__5457__auto____$1){
var seq__58736__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58736__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__58736__$1);
var G__58864 = cljs.core.chunk_rest.call(null,seq__58736__$1);
var G__58865 = c__4319__auto__;
var G__58866 = cljs.core.count.call(null,c__4319__auto__);
var G__58867 = (0);
seq__58736 = G__58864;
chunk__58737 = G__58865;
count__58738 = G__58866;
i__58739 = G__58867;
continue;
} else {
var role = cljs.core.first.call(null,seq__58736__$1);
var temp__5457__auto___58868__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___58868__$2)){
var spec_58869 = temp__5457__auto___58868__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_58869));
} else {
}


var G__58870 = cljs.core.next.call(null,seq__58736__$1);
var G__58871 = null;
var G__58872 = (0);
var G__58873 = (0);
seq__58736 = G__58870;
chunk__58737 = G__58871;
count__58738 = G__58872;
i__58739 = G__58873;
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
