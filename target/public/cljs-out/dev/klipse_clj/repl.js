// Compiled by ClojureScript 0.0.668480191 {}
goog.provide('klipse_clj.repl');
goog.require('cljs.core');
goog.require('klipse_clj.repl_resources');
goog.require('cljs.analyzer');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('cljs.js');
if(typeof window !== "undefined") {window.cljs.user = {}};
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.current_ns_eval !== 'undefined')){
} else {
klipse_clj.repl.current_ns_eval = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.current_ns_compile !== 'undefined')){
} else {
klipse_clj.repl.current_ns_compile = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
klipse_clj.repl.reset_ns_eval_BANG_ = (function klipse_clj$repl$reset_ns_eval_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_eval,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
klipse_clj.repl.reset_ns_compile_BANG_ = (function klipse_clj$repl$reset_ns_compile_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_compile,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.st !== 'undefined')){
} else {
klipse_clj.repl.st = cljs.core.atom.call(null,null);
}
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
klipse_clj.repl.add_macros_suffix = (function klipse_clj$repl$add_macros_suffix(sym){
return cljs.core.symbol.call(null,[cljs.core.name.call(null,sym),"$macros"].join(''));
});
klipse_clj.repl.eval_form = (function klipse_clj$repl$eval_form(var_args){
var G__29068 = arguments.length;
switch (G__29068) {
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
return (function (p__29069){
var map__29070 = p__29069;
var map__29070__$1 = (((((!((map__29070 == null))))?(((((map__29070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29070):map__29070);
var value = cljs.core.get.call(null,map__29070__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__29070__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__29074 = arguments.length;
switch (G__29074) {
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
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__29075 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__29075);
} else {
return G__29075;
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
var temp__5457__auto__ = cljs.core.find_ns.call(null,(function (){var G__29076 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__29076);
} else {
return G__29076;
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
}catch (e29078){var _ = e29078;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
klipse_clj.repl.print_value = (function klipse_clj$repl$print_value(value,opts){
return cljs.core.prn.call(null,value);
});
klipse_clj.repl.str_butlast = (function klipse_clj$repl$str_butlast(s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});
klipse_clj.repl.format_spec = (function klipse_clj$repl$format_spec(spec,left_margin,ns){
var raw_print = (function (){var sb__21461__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29079_29083 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29080_29084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29081_29085 = true;
var _STAR_print_fn_STAR__temp_val__29082_29086 = ((function (_STAR_print_newline_STAR__orig_val__29079_29083,_STAR_print_fn_STAR__orig_val__29080_29084,_STAR_print_newline_STAR__temp_val__29081_29085,sb__21461__auto__){
return (function (x__21462__auto__){
return sb__21461__auto__.append(x__21462__auto__);
});})(_STAR_print_newline_STAR__orig_val__29079_29083,_STAR_print_fn_STAR__orig_val__29080_29084,_STAR_print_newline_STAR__temp_val__29081_29085,sb__21461__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29081_29085;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29082_29086;

try{klipse_clj.repl.print_value.call(null,cljs.spec.alpha.describe.call(null,spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.repl","keyword-ns","klipse-clj.repl/keyword-ns",614877250),ns,new cljs.core.Keyword("klipse-clj.repl","spec?","klipse-clj.repl/spec?",288111418),true,new cljs.core.Keyword("klipse-clj.repl","as-code?","klipse-clj.repl/as-code?",578894325),true,new cljs.core.Keyword("klipse-clj.repl","term-width-adj","klipse-clj.repl/term-width-adj",-1860761290),(- left_margin)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29080_29084;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29079_29083;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__21461__auto__);
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
klipse_clj.repl.print_doc = (function klipse_clj$repl$print_doc(p__29087){
var map__29088 = p__29087;
var map__29088__$1 = (((((!((map__29088 == null))))?(((((map__29088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var m = map__29088__$1;
var n = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

var temp__5455__auto___29122 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5455__auto___29122)){
var spec_29123 = temp__5455__auto___29122;
klipse_clj.repl.print_value.call(null,spec_29123,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.println.call(null,[(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29090_29124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29091_29125 = null;
var count__29092_29126 = (0);
var i__29093_29127 = (0);
while(true){
if((i__29093_29127 < count__29092_29126)){
var f_29128 = cljs.core._nth.call(null,chunk__29091_29125,i__29093_29127);
cljs.core.println.call(null,"  ",f_29128);


var G__29129 = seq__29090_29124;
var G__29130 = chunk__29091_29125;
var G__29131 = count__29092_29126;
var G__29132 = (i__29093_29127 + (1));
seq__29090_29124 = G__29129;
chunk__29091_29125 = G__29130;
count__29092_29126 = G__29131;
i__29093_29127 = G__29132;
continue;
} else {
var temp__5457__auto___29133 = cljs.core.seq.call(null,seq__29090_29124);
if(temp__5457__auto___29133){
var seq__29090_29134__$1 = temp__5457__auto___29133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29090_29134__$1)){
var c__21083__auto___29135 = cljs.core.chunk_first.call(null,seq__29090_29134__$1);
var G__29136 = cljs.core.chunk_rest.call(null,seq__29090_29134__$1);
var G__29137 = c__21083__auto___29135;
var G__29138 = cljs.core.count.call(null,c__21083__auto___29135);
var G__29139 = (0);
seq__29090_29124 = G__29136;
chunk__29091_29125 = G__29137;
count__29092_29126 = G__29138;
i__29093_29127 = G__29139;
continue;
} else {
var f_29140 = cljs.core.first.call(null,seq__29090_29134__$1);
cljs.core.println.call(null,"  ",f_29140);


var G__29141 = cljs.core.next.call(null,seq__29090_29134__$1);
var G__29142 = null;
var G__29143 = (0);
var G__29144 = (0);
seq__29090_29124 = G__29141;
chunk__29091_29125 = G__29142;
count__29092_29126 = G__29143;
i__29093_29127 = G__29144;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29145 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19429__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29145);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29145)))?cljs.core.second.call(null,arglists_29145):arglists_29145));
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
var seq__29094_29146 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29095_29147 = null;
var count__29096_29148 = (0);
var i__29097_29149 = (0);
while(true){
if((i__29097_29149 < count__29096_29148)){
var vec__29108_29150 = cljs.core._nth.call(null,chunk__29095_29147,i__29097_29149);
var name_29151 = cljs.core.nth.call(null,vec__29108_29150,(0),null);
var map__29111_29152 = cljs.core.nth.call(null,vec__29108_29150,(1),null);
var map__29111_29153__$1 = (((((!((map__29111_29152 == null))))?(((((map__29111_29152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29111_29152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29111_29152):map__29111_29152);
var doc_29154 = cljs.core.get.call(null,map__29111_29153__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29155 = cljs.core.get.call(null,map__29111_29153__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29151);

cljs.core.println.call(null," ",arglists_29155);

if(cljs.core.truth_(doc_29154)){
cljs.core.println.call(null," ",doc_29154);
} else {
}


var G__29156 = seq__29094_29146;
var G__29157 = chunk__29095_29147;
var G__29158 = count__29096_29148;
var G__29159 = (i__29097_29149 + (1));
seq__29094_29146 = G__29156;
chunk__29095_29147 = G__29157;
count__29096_29148 = G__29158;
i__29097_29149 = G__29159;
continue;
} else {
var temp__5457__auto___29160 = cljs.core.seq.call(null,seq__29094_29146);
if(temp__5457__auto___29160){
var seq__29094_29161__$1 = temp__5457__auto___29160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29094_29161__$1)){
var c__21083__auto___29162 = cljs.core.chunk_first.call(null,seq__29094_29161__$1);
var G__29163 = cljs.core.chunk_rest.call(null,seq__29094_29161__$1);
var G__29164 = c__21083__auto___29162;
var G__29165 = cljs.core.count.call(null,c__21083__auto___29162);
var G__29166 = (0);
seq__29094_29146 = G__29163;
chunk__29095_29147 = G__29164;
count__29096_29148 = G__29165;
i__29097_29149 = G__29166;
continue;
} else {
var vec__29113_29167 = cljs.core.first.call(null,seq__29094_29161__$1);
var name_29168 = cljs.core.nth.call(null,vec__29113_29167,(0),null);
var map__29116_29169 = cljs.core.nth.call(null,vec__29113_29167,(1),null);
var map__29116_29170__$1 = (((((!((map__29116_29169 == null))))?(((((map__29116_29169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29116_29169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116_29169):map__29116_29169);
var doc_29171 = cljs.core.get.call(null,map__29116_29170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29172 = cljs.core.get.call(null,map__29116_29170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29168);

cljs.core.println.call(null," ",arglists_29172);

if(cljs.core.truth_(doc_29171)){
cljs.core.println.call(null," ",doc_29171);
} else {
}


var G__29173 = cljs.core.next.call(null,seq__29094_29161__$1);
var G__29174 = null;
var G__29175 = (0);
var G__29176 = (0);
seq__29094_29146 = G__29173;
chunk__29095_29147 = G__29174;
count__29096_29148 = G__29175;
i__29097_29149 = G__29176;
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
var spec_lookup = ((function (map__29088,map__29088__$1,m,n,nm){
return (function (ns_suffix){
return cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_suffix)].join(''),cljs.core.name.call(null,nm)));
});})(map__29088,map__29088__$1,m,n,nm))
;
var temp__5457__auto__ = (function (){var or__19429__auto__ = spec_lookup.call(null,"");
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
} else {
return spec_lookup.call(null,"$macros");
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29118_29177 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29119_29178 = null;
var count__29120_29179 = (0);
var i__29121_29180 = (0);
while(true){
if((i__29121_29180 < count__29120_29179)){
var role_29181 = cljs.core._nth.call(null,chunk__29119_29178,i__29121_29180);
var temp__5457__auto___29182__$1 = cljs.core.get.call(null,fnspec,role_29181);
if(cljs.core.truth_(temp__5457__auto___29182__$1)){
var spec_29183 = temp__5457__auto___29182__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role_29181),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_29183,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_29181))),n));
} else {
}


var G__29184 = seq__29118_29177;
var G__29185 = chunk__29119_29178;
var G__29186 = count__29120_29179;
var G__29187 = (i__29121_29180 + (1));
seq__29118_29177 = G__29184;
chunk__29119_29178 = G__29185;
count__29120_29179 = G__29186;
i__29121_29180 = G__29187;
continue;
} else {
var temp__5457__auto___29188__$1 = cljs.core.seq.call(null,seq__29118_29177);
if(temp__5457__auto___29188__$1){
var seq__29118_29189__$1 = temp__5457__auto___29188__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29118_29189__$1)){
var c__21083__auto___29190 = cljs.core.chunk_first.call(null,seq__29118_29189__$1);
var G__29191 = cljs.core.chunk_rest.call(null,seq__29118_29189__$1);
var G__29192 = c__21083__auto___29190;
var G__29193 = cljs.core.count.call(null,c__21083__auto___29190);
var G__29194 = (0);
seq__29118_29177 = G__29191;
chunk__29119_29178 = G__29192;
count__29120_29179 = G__29193;
i__29121_29180 = G__29194;
continue;
} else {
var role_29195 = cljs.core.first.call(null,seq__29118_29189__$1);
var temp__5457__auto___29196__$2 = cljs.core.get.call(null,fnspec,role_29195);
if(cljs.core.truth_(temp__5457__auto___29196__$2)){
var spec_29197 = temp__5457__auto___29196__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role_29195),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_29197,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_29195))),n));
} else {
}


var G__29198 = cljs.core.next.call(null,seq__29118_29189__$1);
var G__29199 = null;
var G__29200 = (0);
var G__29201 = (0);
seq__29118_29177 = G__29198;
chunk__29119_29178 = G__29199;
count__29120_29179 = G__29200;
i__29121_29180 = G__29201;
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

var temp__5457__auto__ = (function (){var env__24718__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__24718__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__24718__auto__))?cljs.core.atom.call(null,env__24718__auto__):(((((env__24718__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__24718__auto__)))))?env__24718__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__24718__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__29202 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__29203 = env__24718__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29203;

try{return klipse_clj.repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29202;
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
var _STAR_cljs_warning_handlers_STAR__orig_val__29205 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__29206 = null;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__29206;

try{var var$ = (function (){var or__19429__auto__ = (function (){var env__24718__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__24718__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__24718__auto__))?cljs.core.atom.call(null,env__24718__auto__):(((((env__24718__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__24718__auto__)))))?env__24718__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__24718__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__29209 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__29210 = env__24718__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__29210;

try{return klipse_clj.repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__29209;
}})();
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
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
return cljs.core.update.call(null,(function (){var G__29211 = var$;
var G__29211__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.call(null,G__29211,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__29211);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.call(null,G__29211__$1,new cljs.core.Keyword(null,"name","name",1843675177),((function (G__29211,G__29211__$1,var$,_STAR_cljs_warning_handlers_STAR__orig_val__29205,_STAR_cljs_warning_handlers_STAR__temp_val__29206){
return (function (p1__29204_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__29204_SHARP_));
});})(G__29211,G__29211__$1,var$,_STAR_cljs_warning_handlers_STAR__orig_val__29205,_STAR_cljs_warning_handlers_STAR__temp_val__29206))
);
} else {
return G__29211__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.call(null,cljs.core.symbol,klipse_clj.repl.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__29205;
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
var G__29212 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__29212,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__29212,var$,var$__$1,m,m__$1,temp__5455__auto__){
return (function (p__29213){
var vec__29214 = p__29213;
var fname = cljs.core.nth.call(null,vec__29214,(0),null);
var sigs = cljs.core.nth.call(null,vec__29214,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__29212,var$,var$__$1,m,m__$1,temp__5455__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__29212;
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
klipse_clj.repl.completion_candidates_for_ns = (function klipse_clj$repl$completion_candidates_for_ns(ns_sym,allow_private_QMARK_){
if(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),"goog")){
if(cljs.core.truth_(cljs.core.find_ns.call(null,ns_sym))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.js_keys.call(null,goog.getObjectByName(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,cljs.core.key),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(cljs.core.truth_(allow_private_QMARK_)?cljs.core.identity:(function (p1__29217_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__29217_SHARP_)));
}))),cljs.core.remove.call(null,(function (p1__29218_SHARP_){
return new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__29218_SHARP_));
}))),cljs.core.apply.call(null,cljs.core.merge,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.Keyword(null,"macros","macros",811339431)).call(null,klipse_clj.repl.get_namespace.call(null,ns_sym)))));
}
});
klipse_clj.repl.completion_candidates_for_current_ns = (function klipse_clj$repl$completion_candidates_for_current_ns(){
var cur_ns = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
return cljs.core.into.call(null,klipse_clj.repl.completion_candidates_for_ns.call(null,cur_ns,true),cljs.core.comp.call(null,cljs.core.mapcat.call(null,cljs.core.keys),cljs.core.map.call(null,cljs.core.str)),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"renames","renames",343278368),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)).call(null,klipse_clj.repl.get_namespace.call(null,cur_ns)));
});
klipse_clj.repl.is_completion_QMARK_ = (function klipse_clj$repl$is_completion_QMARK_(match_suffix,candidate){
var escaped_suffix = clojure.string.replace.call(null,match_suffix,/[-\\/\\^$*+?.()|\[\]{}]/,"\\$&");
return cljs.core.re_find.call(null,(new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(escaped_suffix)].join(''),"i")),candidate);
});
klipse_clj.repl.keyword_completions = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"refer","refer",-964295553),new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),new cljs.core.Keyword(null,"exclude","exclude",-1230250334),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"while","while",963117786),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"gen-class","gen-class",-426712454),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null);
klipse_clj.repl.namespace_completion_exclusions = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"planck.from.io.aviso.ansi","planck.from.io.aviso.ansi",2068713725,null),new cljs.core.Symbol(null,"planck.pprint.code","planck.pprint.code",1586576325,null),new cljs.core.Symbol(null,"planck.pprint.data","planck.pprint.data",804516122,null),new cljs.core.Symbol(null,"planck.bundle","planck.bundle",-403959080,null),new cljs.core.Symbol(null,"planck.closure","planck.closure",261112148,null),new cljs.core.Symbol(null,"planck.js-deps","planck.js-deps",791456760,null),new cljs.core.Symbol(null,"planck.repl","planck.repl",366873093,null),new cljs.core.Symbol(null,"planck.repl-resources","planck.repl-resources",143473453,null),new cljs.core.Symbol(null,"planck.themes","planck.themes",-2083267640,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector","clojure.core.rrb-vector",-1155220319,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.interop","clojure.core.rrb-vector.interop",1752227054,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.nodes","clojure.core.rrb-vector.nodes",-1723556804,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.protocols","clojure.core.rrb-vector.protocols",1645101092,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.rrbt","clojure.core.rrb-vector.rrbt",1108920338,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.transients","clojure.core.rrb-vector.transients",1281641467,null),new cljs.core.Symbol(null,"clojure.core.rrb-vector.trees","clojure.core.rrb-vector.trees",1420144023,null),new cljs.core.Symbol(null,"cognitect.transit","cognitect.transit",-750660177,null),new cljs.core.Symbol(null,"fipp.deque","fipp.deque",162107275,null),new cljs.core.Symbol(null,"fipp.engine","fipp.engine",104802855,null),new cljs.core.Symbol(null,"fipp.visit","fipp.visit",-938866813,null),new cljs.core.Symbol(null,"lazy-map.core","lazy-map.core",462322712,null),new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),new cljs.core.Symbol(null,"cljs.source-map.base64","cljs.source-map.base64",-1764326399,null),new cljs.core.Symbol(null,"cljs.source-map.base64-vlq","cljs.source-map.base64-vlq",-397707708,null),new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"cljs.tools.reader.impl.utils","cljs.tools.reader.impl.utils",1797659699,null),new cljs.core.Symbol(null,"cljs.stacktrace","cljs.stacktrace",880035689,null)], null);
klipse_clj.repl.namespace_completion_additons = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"clojure.test","clojure.test",-699730006,null),new cljs.core.Symbol(null,"clojure.spec.alpha","clojure.spec.alpha",369813921,null),new cljs.core.Symbol(null,"clojure.spec.test.alpha","clojure.spec.test.alpha",-562225269,null),new cljs.core.Symbol(null,"clojure.spec.gen.alpha","clojure.spec.gen.alpha",231332697,null),new cljs.core.Symbol(null,"clojure.pprint","clojure.pprint",-547379114,null)], null);
/**
 * Returns a sequence of all namespaces.
 */
klipse_clj.repl.all_ns = (function klipse_clj$repl$all_ns(){
return cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st))));
});
klipse_clj.repl.current_alias_map = (function klipse_clj$repl$current_alias_map(var_args){
var G__29220 = arguments.length;
switch (G__29220) {
case 0:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return klipse_clj.repl.current_alias_map.call(null,cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
});

klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__29221){
var vec__29222 = p__29221;
var k = cljs.core.nth.call(null,vec__29222,(0),null);
var v = cljs.core.nth.call(null,vec__29222,(1),null);
return cljs.core._EQ_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});

klipse_clj.repl.current_alias_map.cljs$lang$maxFixedArity = 1;

klipse_clj.repl.namespace_completions = (function klipse_clj$repl$namespace_completions(){
return cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.namespace_completion_additons),cljs.core.remove.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.namespace_completion_exclusions)),cljs.core.map.call(null,(function (p1__29226_SHARP_){
return klipse_clj.repl.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29226_SHARP_));
}),klipse_clj.repl.all_ns.call(null))))));
});
/**
 * Expand the typed namespace symbol to a known namespace, consulting current
 *   namespace aliases if necessary.
 */
klipse_clj.repl.expand_typed_ns = (function klipse_clj$repl$expand_typed_ns(alias){
var alias__$1 = ((cljs.core.symbol_identical_QMARK_.call(null,alias,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):alias);
var or__19429__auto__ = cljs.core.get_in.call(null,klipse_clj.repl.st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),alias__$1,new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__19429__auto__)){
return or__19429__auto__;
} else {
var or__19429__auto____$1 = alias__$1.call(null,klipse_clj.repl.current_alias_map.call(null));
if(cljs.core.truth_(or__19429__auto____$1)){
return or__19429__auto____$1;
} else {
return alias__$1;
}
}
});
klipse_clj.repl.completion_candidates = (function klipse_clj$repl$completion_candidates(top_form_QMARK_,typed_ns){
return cljs.core.set.call(null,(cljs.core.truth_(typed_ns)?(function (){var expanded_ns = klipse_clj.repl.expand_typed_ns.call(null,cljs.core.symbol.call(null,typed_ns));
return cljs.core.concat.call(null,klipse_clj.repl.completion_candidates_for_ns.call(null,expanded_ns,false),klipse_clj.repl.completion_candidates_for_ns.call(null,klipse_clj.repl.add_macros_suffix.call(null,expanded_ns),false));
})():cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.keyword_completions),klipse_clj.repl.namespace_completions.call(null),cljs.core.map.call(null,(function (p1__29227_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29227_SHARP_),"/"].join('');
}),cljs.core.keys.call(null,klipse_clj.repl.current_alias_map.call(null))),klipse_clj.repl.completion_candidates_for_ns.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),false),klipse_clj.repl.completion_candidates_for_ns.call(null,new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),false),klipse_clj.repl.completion_candidates_for_current_ns.call(null),(cljs.core.truth_(top_form_QMARK_)?cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,klipse_clj.repl_resources.special_doc_map)),cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,klipse_clj.repl_resources.repl_special_doc_map))):null))));
});
klipse_clj.repl.longest_common_prefix = (function klipse_clj$repl$longest_common_prefix(strings){
var minl = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.count,strings));
var l = minl;
while(true){
if((l > (0))){
if(cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.subs.call(null,cljs.core.first.call(null,strings),(0),l)]),cljs.core.map.call(null,((function (l,minl){
return (function (p1__29228_SHARP_){
return cljs.core.subs.call(null,p1__29228_SHARP_,(0),l);
});})(l,minl))
,cljs.core.rest.call(null,strings)))){
return cljs.core.subs.call(null,cljs.core.first.call(null,strings),(0),l);
} else {
var G__29229 = (l - (1));
l = G__29229;
continue;
}
} else {
return "";
}
break;
}
});
klipse_clj.repl.spec_registered_keywords = (function klipse_clj$repl$spec_registered_keywords(ns){
return cljs.core.eduction.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_),cljs.core.filter.call(null,(function (p1__29230_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.namespace.call(null,p1__29230_SHARP_));
})),cljs.core.keys.call(null,cljs.spec.alpha.registry.call(null)));
});
klipse_clj.repl.local_keyword_str = (function klipse_clj$repl$local_keyword_str(kw){
return ["::",cljs.core.name.call(null,kw)].join('');
});
/**
 * Returns foo for ::foo, otherwise nil
 */
klipse_clj.repl.local_keyword = (function klipse_clj$repl$local_keyword(buffer){
return cljs.core.second.call(null,cljs.core.re_find.call(null,/::([a-zA-Z-]*)$/,buffer));
});
klipse_clj.repl.local_keyword_completions = (function klipse_clj$repl$local_keyword_completions(kw_name){
var kw_source = ["::",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw_name)].join('');
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_source], null),cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.map.call(null,klipse_clj.repl.local_keyword_str),cljs.core.filter.call(null,((function (kw_source){
return (function (p1__29231_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__29231_SHARP_,kw_source);
});})(kw_source))
)),klipse_clj.repl.spec_registered_keywords.call(null,cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval)))));
});
/**
 * Returns an array of the buffer-match-suffix, along with completions for the
 *   entered text. If one completion is returned the line should be completed to
 *   match it (in which the completion may actually only be a longest prefix from
 *   the list of candiates), otherwise the list of completions should be
 *   displayed.
 */
klipse_clj.repl.get_completions = (function klipse_clj$repl$get_completions(buffer){
if((cljs.core.deref.call(null,klipse_clj.repl.st) == null)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready","ready",1086465795),false], null));
} else {
var temp__5455__auto__ = klipse_clj.repl.local_keyword.call(null,buffer);
if(cljs.core.truth_(temp__5455__auto__)){
var kw_name = temp__5455__auto__;
return klipse_clj.repl.local_keyword_completions.call(null,kw_name);
} else {
var top_form_QMARK_ = cljs.core.re_find.call(null,/^\s*\(\s*[^()\s]*$/,buffer);
var typed_ns = cljs.core.second.call(null,cljs.core.re_find.call(null,/\(*(\b[a-zA-Z0-9-.<>*=&?]+)\/[a-zA-Z0-9-]*$/,buffer));
var buffer_match_suffix = cljs.core.first.call(null,cljs.core.re_find.call(null,/:?([a-zA-Z0-9-.<>*=&?]*|^\(\/)$/,buffer));
var completions = cljs.core.sort.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,klipse_clj.repl.is_completion_QMARK_,buffer_match_suffix),klipse_clj.repl.completion_candidates.call(null,top_form_QMARK_,typed_ns)));
var common_prefix = klipse_clj.repl.longest_common_prefix.call(null,completions);
return cljs.core.with_meta.call(null,((((cljs.core.empty_QMARK_.call(null,common_prefix)) || (cljs.core._EQ_.call(null,common_prefix,buffer_match_suffix))))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer_match_suffix], null),completions):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buffer_match_suffix,common_prefix], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready","ready",1086465795),true], null));
}
}
});

//# sourceMappingURL=repl.js.map
