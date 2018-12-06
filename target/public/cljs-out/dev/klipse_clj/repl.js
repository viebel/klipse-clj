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
var G__36945 = arguments.length;
switch (G__36945) {
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
return (function (p__36946){
var map__36947 = p__36946;
var map__36947__$1 = ((((!((map__36947 == null)))?(((((map__36947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36947):map__36947);
var value = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__36951 = arguments.length;
switch (G__36951) {
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
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__36952 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__36952);
} else {
return G__36952;
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
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__36953 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__36953);
} else {
return G__36953;
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
}catch (e36955){var _ = e36955;
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
var _STAR_print_newline_STAR_36956_36958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36957_36959 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36956_36958,_STAR_print_fn_STAR_36957_36959,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_36956_36958,_STAR_print_fn_STAR_36957_36959,sb__4430__auto__))
;

try{klipse_clj.repl.print_value.call(null,cljs.spec.alpha.describe.call(null,spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.repl","keyword-ns","klipse-clj.repl/keyword-ns",614877250),ns,new cljs.core.Keyword("klipse-clj.repl","spec?","klipse-clj.repl/spec?",288111418),true,new cljs.core.Keyword("klipse-clj.repl","as-code?","klipse-clj.repl/as-code?",578894325),true,new cljs.core.Keyword("klipse-clj.repl","term-width-adj","klipse-clj.repl/term-width-adj",-1860761290),(- left_margin)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36957_36959;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36956_36958;
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
klipse_clj.repl.print_doc = (function klipse_clj$repl$print_doc(p__36960){
var map__36961 = p__36960;
var map__36961__$1 = ((((!((map__36961 == null)))?(((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var m = map__36961__$1;
var n = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

var temp__5455__auto___36985 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto___36985)){
var spec_36986 = temp__5455__auto___36985;
klipse_clj.repl.print_value.call(null,spec_36986,cljs.core.PersistentArrayMap.EMPTY);
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
var seq__36963_36987 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36964_36988 = null;
var count__36965_36989 = (0);
var i__36966_36990 = (0);
while(true){
if((i__36966_36990 < count__36965_36989)){
var f_36991 = cljs.core._nth.call(null,chunk__36964_36988,i__36966_36990);
cljs.core.println.call(null,"  ",f_36991);


var G__36992 = seq__36963_36987;
var G__36993 = chunk__36964_36988;
var G__36994 = count__36965_36989;
var G__36995 = (i__36966_36990 + (1));
seq__36963_36987 = G__36992;
chunk__36964_36988 = G__36993;
count__36965_36989 = G__36994;
i__36966_36990 = G__36995;
continue;
} else {
var temp__5457__auto___36996 = cljs.core.seq.call(null,seq__36963_36987);
if(temp__5457__auto___36996){
var seq__36963_36997__$1 = temp__5457__auto___36996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36963_36997__$1)){
var c__4319__auto___36998 = cljs.core.chunk_first.call(null,seq__36963_36997__$1);
var G__36999 = cljs.core.chunk_rest.call(null,seq__36963_36997__$1);
var G__37000 = c__4319__auto___36998;
var G__37001 = cljs.core.count.call(null,c__4319__auto___36998);
var G__37002 = (0);
seq__36963_36987 = G__36999;
chunk__36964_36988 = G__37000;
count__36965_36989 = G__37001;
i__36966_36990 = G__37002;
continue;
} else {
var f_37003 = cljs.core.first.call(null,seq__36963_36997__$1);
cljs.core.println.call(null,"  ",f_37003);


var G__37004 = cljs.core.next.call(null,seq__36963_36997__$1);
var G__37005 = null;
var G__37006 = (0);
var G__37007 = (0);
seq__36963_36987 = G__37004;
chunk__36964_36988 = G__37005;
count__36965_36989 = G__37006;
i__36966_36990 = G__37007;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37008 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37008);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37008)))?cljs.core.second.call(null,arglists_37008):arglists_37008));
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
var seq__36967_37009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36968_37010 = null;
var count__36969_37011 = (0);
var i__36970_37012 = (0);
while(true){
if((i__36970_37012 < count__36969_37011)){
var vec__36971_37013 = cljs.core._nth.call(null,chunk__36968_37010,i__36970_37012);
var name_37014 = cljs.core.nth.call(null,vec__36971_37013,(0),null);
var map__36974_37015 = cljs.core.nth.call(null,vec__36971_37013,(1),null);
var map__36974_37016__$1 = ((((!((map__36974_37015 == null)))?(((((map__36974_37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36974_37015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36974_37015):map__36974_37015);
var doc_37017 = cljs.core.get.call(null,map__36974_37016__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37018 = cljs.core.get.call(null,map__36974_37016__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37014);

cljs.core.println.call(null," ",arglists_37018);

if(cljs.core.truth_(doc_37017)){
cljs.core.println.call(null," ",doc_37017);
} else {
}


var G__37019 = seq__36967_37009;
var G__37020 = chunk__36968_37010;
var G__37021 = count__36969_37011;
var G__37022 = (i__36970_37012 + (1));
seq__36967_37009 = G__37019;
chunk__36968_37010 = G__37020;
count__36969_37011 = G__37021;
i__36970_37012 = G__37022;
continue;
} else {
var temp__5457__auto___37023 = cljs.core.seq.call(null,seq__36967_37009);
if(temp__5457__auto___37023){
var seq__36967_37024__$1 = temp__5457__auto___37023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36967_37024__$1)){
var c__4319__auto___37025 = cljs.core.chunk_first.call(null,seq__36967_37024__$1);
var G__37026 = cljs.core.chunk_rest.call(null,seq__36967_37024__$1);
var G__37027 = c__4319__auto___37025;
var G__37028 = cljs.core.count.call(null,c__4319__auto___37025);
var G__37029 = (0);
seq__36967_37009 = G__37026;
chunk__36968_37010 = G__37027;
count__36969_37011 = G__37028;
i__36970_37012 = G__37029;
continue;
} else {
var vec__36976_37030 = cljs.core.first.call(null,seq__36967_37024__$1);
var name_37031 = cljs.core.nth.call(null,vec__36976_37030,(0),null);
var map__36979_37032 = cljs.core.nth.call(null,vec__36976_37030,(1),null);
var map__36979_37033__$1 = ((((!((map__36979_37032 == null)))?(((((map__36979_37032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36979_37032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36979_37032):map__36979_37032);
var doc_37034 = cljs.core.get.call(null,map__36979_37033__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37035 = cljs.core.get.call(null,map__36979_37033__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37031);

cljs.core.println.call(null," ",arglists_37035);

if(cljs.core.truth_(doc_37034)){
cljs.core.println.call(null," ",doc_37034);
} else {
}


var G__37036 = cljs.core.next.call(null,seq__36967_37024__$1);
var G__37037 = null;
var G__37038 = (0);
var G__37039 = (0);
seq__36967_37009 = G__37036;
chunk__36968_37010 = G__37037;
count__36969_37011 = G__37038;
i__36970_37012 = G__37039;
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
var spec_lookup = ((function (map__36961,map__36961__$1,m,n,nm){
return (function (ns_suffix){
return cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_suffix)].join(''),cljs.core.name.call(null,nm)));
});})(map__36961,map__36961__$1,m,n,nm))
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

var seq__36981_37040 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36982_37041 = null;
var count__36983_37042 = (0);
var i__36984_37043 = (0);
while(true){
if((i__36984_37043 < count__36983_37042)){
var role_37044 = cljs.core._nth.call(null,chunk__36982_37041,i__36984_37043);
var temp__5457__auto___37045__$1 = cljs.core.get.call(null,fnspec,role_37044);
if(cljs.core.truth_(temp__5457__auto___37045__$1)){
var spec_37046 = temp__5457__auto___37045__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role_37044)),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_37046,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_37044))),n));
} else {
}


var G__37047 = seq__36981_37040;
var G__37048 = chunk__36982_37041;
var G__37049 = count__36983_37042;
var G__37050 = (i__36984_37043 + (1));
seq__36981_37040 = G__37047;
chunk__36982_37041 = G__37048;
count__36983_37042 = G__37049;
i__36984_37043 = G__37050;
continue;
} else {
var temp__5457__auto___37051__$1 = cljs.core.seq.call(null,seq__36981_37040);
if(temp__5457__auto___37051__$1){
var seq__36981_37052__$1 = temp__5457__auto___37051__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36981_37052__$1)){
var c__4319__auto___37053 = cljs.core.chunk_first.call(null,seq__36981_37052__$1);
var G__37054 = cljs.core.chunk_rest.call(null,seq__36981_37052__$1);
var G__37055 = c__4319__auto___37053;
var G__37056 = cljs.core.count.call(null,c__4319__auto___37053);
var G__37057 = (0);
seq__36981_37040 = G__37054;
chunk__36982_37041 = G__37055;
count__36983_37042 = G__37056;
i__36984_37043 = G__37057;
continue;
} else {
var role_37058 = cljs.core.first.call(null,seq__36981_37052__$1);
var temp__5457__auto___37059__$2 = cljs.core.get.call(null,fnspec,role_37058);
if(cljs.core.truth_(temp__5457__auto___37059__$2)){
var spec_37060 = temp__5457__auto___37059__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role_37058)),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_37060,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_37058))),n));
} else {
}


var G__37061 = cljs.core.next.call(null,seq__36981_37052__$1);
var G__37062 = null;
var G__37063 = (0);
var G__37064 = (0);
seq__36981_37040 = G__37061;
chunk__36982_37041 = G__37062;
count__36983_37042 = G__37063;
i__36984_37043 = G__37064;
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
var _STAR_compiler_STAR_37065 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__9451__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_37065;
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
var _STAR_cljs_warning_handlers_STAR_37067 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = null;

try{var var$ = (function (){var or__3922__auto__ = (function (){var env__9451__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__9451__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9451__auto__))?cljs.core.atom.call(null,env__9451__auto__):(((((env__9451__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9451__auto__)))))?env__9451__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9451__auto__))].join('')))})()
));
var _STAR_compiler_STAR_37069 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__9451__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_37069;
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
return cljs.core.update.call(null,(function (){var G__37070 = var$;
var G__37070__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.call(null,G__37070,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__37070);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$))].join(''))){
return cljs.core.update.call(null,G__37070__$1,new cljs.core.Keyword(null,"name","name",1843675177),((function (G__37070,G__37070__$1,var$,_STAR_cljs_warning_handlers_STAR_37067){
return (function (p1__37066_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__37066_SHARP_));
});})(G__37070,G__37070__$1,var$,_STAR_cljs_warning_handlers_STAR_37067))
);
} else {
return G__37070__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.call(null,cljs.core.symbol,klipse_clj.repl.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR_37067;
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
var G__37071 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__37071,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__37071,var$,var$__$1,m,m__$1,temp__5455__auto__){
return (function (p__37072){
var vec__37073 = p__37072;
var fname = cljs.core.nth.call(null,vec__37073,(0),null);
var sigs = cljs.core.nth.call(null,vec__37073,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('')))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__37071,var$,var$__$1,m,m__$1,temp__5455__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__37071;
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
