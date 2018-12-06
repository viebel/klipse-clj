// Compiled by ClojureScript 1.10.238 {}
goog.provide('klipse_clj.repl');
goog.require('cljs.core');
goog.require('klipse_clj.repl_resources');
goog.require('cljs.analyzer');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cljs.js');
if(typeof window !== "undefined") {window.cljs.user = {}};
if(typeof klipse_clj.repl.current_ns_eval !== 'undefined'){
} else {
klipse_clj.repl.current_ns_eval = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
if(typeof klipse_clj.repl.current_ns_compile !== 'undefined'){
} else {
klipse_clj.repl.current_ns_compile = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
klipse_clj.repl.reset_ns_eval_BANG_ = (function klipse_clj$repl$reset_ns_eval_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_eval,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
klipse_clj.repl.reset_ns_compile_BANG_ = (function klipse_clj$repl$reset_ns_compile_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_compile,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
klipse_clj.repl.st = cljs.core.atom.call(null,null);
klipse_clj.repl.reset_state_eval_BANG_ = (function klipse_clj$repl$reset_state_eval_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,null);
});
klipse_clj.repl.st_compile = cljs.core.atom.call(null,null);
klipse_clj.repl.create_state_compile = (function klipse_clj$repl$create_state_compile(){
if((cljs.core.deref.call(null,klipse_clj.repl.st_compile) == null)){
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st_compile,cljs.js.empty_state.call(null));
} else {
}

return cljs.core.deref.call(null,klipse_clj.repl.st_compile);
});
klipse_clj.repl.reset_state_compile_BANG_ = (function klipse_clj$repl$reset_state_compile_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.st_compile,null);
});
klipse_clj.repl.eval_form = (function klipse_clj$repl$eval_form(var_args){
var G__51033 = arguments.length;
switch (G__51033) {
case 1:
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1 = (function (form){
return klipse_clj.repl.eval_form.call(null,cljs.core._STAR_ns_STAR_.name);
});

klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
cljs.js.eval.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (result){
return (function (p__51034){
var map__51035 = p__51034;
var map__51035__$1 = ((((!((map__51035 == null)))?(((((map__51035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51035):map__51035);
var value = cljs.core.get.call(null,map__51035__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__51035__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(result))
);

return cljs.core.deref.call(null,result);
});

klipse_clj.repl.eval_form.cljs$lang$maxFixedArity = 2;

klipse_clj.repl.def_a_var = (function klipse_clj$repl$def_a_var(var_args){
var G__51043 = arguments.length;
switch (G__51043) {
case 2:
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2 = (function (ns,name){
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__51044 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__51044);
} else {
return G__51044;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse_clj.repl.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__51045 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__51045);
} else {
return G__51045;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var the_ns = temp__5457__auto__;
return klipse_clj.repl.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse_clj.repl.def_a_var.cljs$lang$maxFixedArity = 3;

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
klipse_clj.repl.resolve_var = (function klipse_clj$repl$resolve_var(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}catch (e51047){var _ = e51047;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
klipse_clj.repl.print_value = (function klipse_clj$repl$print_value(value,opts){
return cljs.core.prn.call(null,value);
});
klipse_clj.repl.str_butlast = (function klipse_clj$repl$str_butlast(s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});
klipse_clj.repl.format_spec = (function klipse_clj$repl$format_spec(spec,left_margin,ns){
var raw_print = (function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51048_51050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51049_51051 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51048_51050,_STAR_print_fn_STAR_51049_51051,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_51048_51050,_STAR_print_fn_STAR_51049_51051,sb__4430__auto__))
;

try{klipse_clj.repl.print_value.call(null,cljs.spec.alpha.describe.call(null,spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.repl","keyword-ns","klipse-clj.repl/keyword-ns",614877250),ns,new cljs.core.Keyword("klipse-clj.repl","spec?","klipse-clj.repl/spec?",288111418),true,new cljs.core.Keyword("klipse-clj.repl","as-code?","klipse-clj.repl/as-code?",578894325),true,new cljs.core.Keyword("klipse-clj.repl","term-width-adj","klipse-clj.repl/term-width-adj",-1860761290),(- left_margin)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51049_51051;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51048_51050;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})();
return clojure.string.replace.call(null,klipse_clj.repl.str_butlast.call(null,raw_print),/\n/,cljs.core.apply.call(null,cljs.core.str,"\n",cljs.core.repeat.call(null,left_margin," ")));
});
klipse_clj.repl.drop_macros_suffix = (function klipse_clj$repl$drop_macros_suffix(ns_name){
if(clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros")){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(7),ns_name));
} else {
return ns_name;
}
});
/**
 * Undoes the effect that wrapping a reader conditional around a defn has on a
 *   docstring.
 */
klipse_clj.repl.undo_reader_conditional_whitespace_docstring = (function klipse_clj$repl$undo_reader_conditional_whitespace_docstring(s){
if((s == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/[^\n]*\n\n?      ?\S.*/,s))){
return clojure.string.replace.call(null,s,/\n      ?/,"\n  ");
} else {
return s;
}
}
});
klipse_clj.repl.print_doc = (function klipse_clj$repl$print_doc(p__51052){
var map__51053 = p__51052;
var map__51053__$1 = ((((!((map__51053 == null)))?(((((map__51053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51053):map__51053);
var m = map__51053__$1;
var n = cljs.core.get.call(null,map__51053__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

var temp__5455__auto___51077 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto___51077)){
var spec_51078 = temp__5455__auto___51077;
klipse_clj.repl.print_value.call(null,spec_51078,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51055_51079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51056_51080 = null;
var count__51057_51081 = (0);
var i__51058_51082 = (0);
while(true){
if((i__51058_51082 < count__51057_51081)){
var f_51083 = cljs.core._nth.call(null,chunk__51056_51080,i__51058_51082);
cljs.core.println.call(null,"  ",f_51083);


var G__51084 = seq__51055_51079;
var G__51085 = chunk__51056_51080;
var G__51086 = count__51057_51081;
var G__51087 = (i__51058_51082 + (1));
seq__51055_51079 = G__51084;
chunk__51056_51080 = G__51085;
count__51057_51081 = G__51086;
i__51058_51082 = G__51087;
continue;
} else {
var temp__5457__auto___51088 = cljs.core.seq.call(null,seq__51055_51079);
if(temp__5457__auto___51088){
var seq__51055_51089__$1 = temp__5457__auto___51088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51055_51089__$1)){
var c__4319__auto___51090 = cljs.core.chunk_first.call(null,seq__51055_51089__$1);
var G__51091 = cljs.core.chunk_rest.call(null,seq__51055_51089__$1);
var G__51092 = c__4319__auto___51090;
var G__51093 = cljs.core.count.call(null,c__4319__auto___51090);
var G__51094 = (0);
seq__51055_51079 = G__51091;
chunk__51056_51080 = G__51092;
count__51057_51081 = G__51093;
i__51058_51082 = G__51094;
continue;
} else {
var f_51095 = cljs.core.first.call(null,seq__51055_51089__$1);
cljs.core.println.call(null,"  ",f_51095);


var G__51096 = cljs.core.next.call(null,seq__51055_51089__$1);
var G__51097 = null;
var G__51098 = (0);
var G__51099 = (0);
seq__51055_51079 = G__51096;
chunk__51056_51080 = G__51097;
count__51057_51081 = G__51098;
i__51058_51082 = G__51099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51100);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51100)))?cljs.core.second.call(null,arglists_51100):arglists_51100));
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
var seq__51059_51101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51060_51102 = null;
var count__51061_51103 = (0);
var i__51062_51104 = (0);
while(true){
if((i__51062_51104 < count__51061_51103)){
var vec__51063_51105 = cljs.core._nth.call(null,chunk__51060_51102,i__51062_51104);
var name_51106 = cljs.core.nth.call(null,vec__51063_51105,(0),null);
var map__51066_51107 = cljs.core.nth.call(null,vec__51063_51105,(1),null);
var map__51066_51108__$1 = ((((!((map__51066_51107 == null)))?(((((map__51066_51107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51066_51107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51066_51107):map__51066_51107);
var doc_51109 = cljs.core.get.call(null,map__51066_51108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51110 = cljs.core.get.call(null,map__51066_51108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51106);

cljs.core.println.call(null," ",arglists_51110);

if(cljs.core.truth_(doc_51109)){
cljs.core.println.call(null," ",doc_51109);
} else {
}


var G__51111 = seq__51059_51101;
var G__51112 = chunk__51060_51102;
var G__51113 = count__51061_51103;
var G__51114 = (i__51062_51104 + (1));
seq__51059_51101 = G__51111;
chunk__51060_51102 = G__51112;
count__51061_51103 = G__51113;
i__51062_51104 = G__51114;
continue;
} else {
var temp__5457__auto___51115 = cljs.core.seq.call(null,seq__51059_51101);
if(temp__5457__auto___51115){
var seq__51059_51116__$1 = temp__5457__auto___51115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51059_51116__$1)){
var c__4319__auto___51117 = cljs.core.chunk_first.call(null,seq__51059_51116__$1);
var G__51118 = cljs.core.chunk_rest.call(null,seq__51059_51116__$1);
var G__51119 = c__4319__auto___51117;
var G__51120 = cljs.core.count.call(null,c__4319__auto___51117);
var G__51121 = (0);
seq__51059_51101 = G__51118;
chunk__51060_51102 = G__51119;
count__51061_51103 = G__51120;
i__51062_51104 = G__51121;
continue;
} else {
var vec__51068_51122 = cljs.core.first.call(null,seq__51059_51116__$1);
var name_51123 = cljs.core.nth.call(null,vec__51068_51122,(0),null);
var map__51071_51124 = cljs.core.nth.call(null,vec__51068_51122,(1),null);
var map__51071_51125__$1 = ((((!((map__51071_51124 == null)))?(((((map__51071_51124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51071_51124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51071_51124):map__51071_51124);
var doc_51126 = cljs.core.get.call(null,map__51071_51125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51127 = cljs.core.get.call(null,map__51071_51125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51123);

cljs.core.println.call(null," ",arglists_51127);

if(cljs.core.truth_(doc_51126)){
cljs.core.println.call(null," ",doc_51126);
} else {
}


var G__51128 = cljs.core.next.call(null,seq__51059_51116__$1);
var G__51129 = null;
var G__51130 = (0);
var G__51131 = (0);
seq__51059_51101 = G__51128;
chunk__51060_51102 = G__51129;
count__51061_51103 = G__51130;
i__51062_51104 = G__51131;
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
var spec_lookup = ((function (map__51053,map__51053__$1,m,n,nm){
return (function (ns_suffix){
return cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_suffix)].join(''),cljs.core.name.call(null,nm)));
});})(map__51053,map__51053__$1,m,n,nm))
;
var temp__5457__auto__ = (function (){var or__3922__auto__ = spec_lookup.call(null,"");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return spec_lookup.call(null,"$macros");
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__51073_51132 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51074_51133 = null;
var count__51075_51134 = (0);
var i__51076_51135 = (0);
while(true){
if((i__51076_51135 < count__51075_51134)){
var role_51136 = cljs.core._nth.call(null,chunk__51074_51133,i__51076_51135);
var temp__5457__auto___51137__$1 = cljs.core.get.call(null,fnspec,role_51136);
if(cljs.core.truth_(temp__5457__auto___51137__$1)){
var spec_51138 = temp__5457__auto___51137__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role_51136)),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_51138,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_51136))),n));
} else {
}


var G__51141 = seq__51073_51132;
var G__51142 = chunk__51074_51133;
var G__51143 = count__51075_51134;
var G__51144 = (i__51076_51135 + (1));
seq__51073_51132 = G__51141;
chunk__51074_51133 = G__51142;
count__51075_51134 = G__51143;
i__51076_51135 = G__51144;
continue;
} else {
var temp__5457__auto___51145__$1 = cljs.core.seq.call(null,seq__51073_51132);
if(temp__5457__auto___51145__$1){
var seq__51073_51146__$1 = temp__5457__auto___51145__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51073_51146__$1)){
var c__4319__auto___51147 = cljs.core.chunk_first.call(null,seq__51073_51146__$1);
var G__51148 = cljs.core.chunk_rest.call(null,seq__51073_51146__$1);
var G__51149 = c__4319__auto___51147;
var G__51150 = cljs.core.count.call(null,c__4319__auto___51147);
var G__51151 = (0);
seq__51073_51132 = G__51148;
chunk__51074_51133 = G__51149;
count__51075_51134 = G__51150;
i__51076_51135 = G__51151;
continue;
} else {
var role_51152 = cljs.core.first.call(null,seq__51073_51146__$1);
var temp__5457__auto___51153__$2 = cljs.core.get.call(null,fnspec,role_51152);
if(cljs.core.truth_(temp__5457__auto___51153__$2)){
var spec_51154 = temp__5457__auto___51153__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role_51152)),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_51154,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_51152))),n));
} else {
}


var G__51155 = cljs.core.next.call(null,seq__51073_51146__$1);
var G__51156 = null;
var G__51157 = (0);
var G__51158 = (0);
seq__51073_51132 = G__51155;
chunk__51074_51133 = G__51156;
count__51075_51134 = G__51157;
i__51076_51135 = G__51158;
continue;
}
} else {
}
}
break;
}

return cljs.core.println.call(null);
} else {
return null;
}
} else {
return null;
}
}
});
klipse_clj.repl.special_doc = (function klipse_clj$repl$special_doc(name_symbol){
return cljs.core.assoc.call(null,klipse_clj.repl_resources.special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true);
});
klipse_clj.repl.repl_special_doc = (function klipse_clj$repl$repl_special_doc(name_symbol){
return cljs.core.assoc.call(null,klipse_clj.repl_resources.repl_special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true);
});
/**
 * Gets the AST for a given namespace.
 */
klipse_clj.repl.get_namespace = (function klipse_clj$repl$get_namespace(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
});
klipse_clj.repl.get_macro_var = (function klipse_clj$repl$get_macro_var(env,sym,macros_ns){
if((macros_ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? macros-ns)"));
}

var temp__5457__auto__ = (function (){var env__9451__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__9451__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9451__auto__))?cljs.core.atom.call(null,env__9451__auto__):(((((env__9451__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9451__auto__)))))?env__9451__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9451__auto__))].join('')))})()
));
var _STAR_compiler_STAR_51159 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__9451__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_51159;
}})();
if(cljs.core.truth_(temp__5457__auto__)){
var macro_var = temp__5457__auto__;
return cljs.core.assoc.call(null,macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),macros_ns);
} else {
return null;
}
});
klipse_clj.repl.get_aenv = (function klipse_clj$repl$get_aenv(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.get_namespace.call(null,cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
});
klipse_clj.repl.get_var = (function klipse_clj$repl$get_var(env,sym){
var _STAR_cljs_warning_handlers_STAR_51163 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = null;

try{var var$ = (function (){var or__3922__auto__ = (function (){var env__9451__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__9451__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9451__auto__))?cljs.core.atom.call(null,env__9451__auto__):(((((env__9451__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9451__auto__)))))?env__9451__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9451__auto__))].join('')))})()
));
var _STAR_compiler_STAR_51165 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__9451__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_51165;
}})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var temp__5457__auto__ = sym.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null)));
if(cljs.core.truth_(temp__5457__auto__)){
var macros_ns = temp__5457__auto__;
return klipse_clj.repl.get_macro_var.call(null,env,sym,macros_ns);
} else {
return null;
}
}
})();
if(cljs.core.truth_(var$)){
return cljs.core.update.call(null,(function (){var G__51166 = var$;
var G__51166__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.call(null,G__51166,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__51166);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$))].join(''))){
return cljs.core.update.call(null,G__51166__$1,new cljs.core.Keyword(null,"name","name",1843675177),((function (G__51166,G__51166__$1,var$,_STAR_cljs_warning_handlers_STAR_51163){
return (function (p1__51162_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__51162_SHARP_));
});})(G__51166,G__51166__$1,var$,_STAR_cljs_warning_handlers_STAR_51163))
);
} else {
return G__51166__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.call(null,cljs.core.symbol,klipse_clj.repl.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR_51163;
}});
klipse_clj.repl.doc_STAR_ = (function klipse_clj$repl$doc_STAR_(name){
var temp__5455__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null).call(null,name);
if(cljs.core.truth_(temp__5455__auto__)){
var special_name = temp__5455__auto__;
return klipse_clj.repl.doc_STAR_.call(null,special_name);
} else {
if(cljs.core.truth_(klipse_clj.repl_resources.special_doc_map.call(null,name))){
return klipse_clj.repl.print_doc.call(null,klipse_clj.repl.special_doc.call(null,name));
} else {
if(cljs.core.truth_(klipse_clj.repl_resources.repl_special_doc_map.call(null,name))){
return klipse_clj.repl.print_doc.call(null,klipse_clj.repl.repl_special_doc.call(null,name));
} else {
if(cljs.core.qualified_keyword_QMARK_.call(null,name)){
return klipse_clj.repl.print_doc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),name,new cljs.core.Keyword(null,"doc","doc",1913296891),klipse_clj.repl.format_spec.call(null,cljs.spec.alpha.get_spec.call(null,name),(3),cljs.core.symbol.call(null,cljs.core.namespace.call(null,name)))], null));
} else {
if(cljs.core.truth_(klipse_clj.repl.get_namespace.call(null,name))){
return klipse_clj.repl.print_doc.call(null,cljs.core.select_keys.call(null,klipse_clj.repl.get_namespace.call(null,name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null)));
} else {
if(cljs.core.truth_(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),name))){
return klipse_clj.repl.print_doc.call(null,(function (){var var$ = klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),name);
var var$__$1 = cljs.core.assoc.call(null,var$,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.second.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$))));
var m = cljs.core.select_keys.call(null,var$__$1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"url","url",276297046)], null));
var m__$1 = cljs.core.update.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),klipse_clj.repl.undo_reader_conditional_whitespace_docstring);
var G__51167 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__51167,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__51167,var$,var$__$1,m,m__$1,temp__5455__auto__){
return (function (p__51168){
var vec__51169 = p__51168;
var fname = cljs.core.nth.call(null,vec__51169,(0),null);
var sigs = cljs.core.nth.call(null,vec__51169,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('')))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__51167,var$,var$__$1,m,m__$1,temp__5455__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__51167;
}
})());
} else {
return null;
}
}
}
}
}
}
});

//# sourceMappingURL=repl.js.map
