// Compiled by ClojureScript 1.10.516 {}
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
var G__25224 = arguments.length;
switch (G__25224) {
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
return (function (p__25225){
var map__25226 = p__25225;
var map__25226__$1 = (((((!((map__25226 == null))))?(((((map__25226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25226):map__25226);
var value = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var G__25230 = arguments.length;
switch (G__25230) {
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
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__25231 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__25231);
} else {
return G__25231;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var the_ns = temp__5720__auto__;
return klipse_clj.repl.eval_form.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5720__auto__ = cljs.core.find_ns.call(null,(function (){var G__25232 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__25232);
} else {
return G__25232;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var the_ns = temp__5720__auto__;
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
}catch (e25234){var _ = e25234;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
klipse_clj.repl.print_value = (function klipse_clj$repl$print_value(value,opts){
return cljs.core.prn.call(null,value);
});
klipse_clj.repl.str_butlast = (function klipse_clj$repl$str_butlast(s){
return cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - (1)));
});
klipse_clj.repl.format_spec = (function klipse_clj$repl$format_spec(spec,left_margin,ns){
var raw_print = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25235_25239 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25236_25240 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25237_25241 = true;
var _STAR_print_fn_STAR__temp_val__25238_25242 = ((function (_STAR_print_newline_STAR__orig_val__25235_25239,_STAR_print_fn_STAR__orig_val__25236_25240,_STAR_print_newline_STAR__temp_val__25237_25241,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25235_25239,_STAR_print_fn_STAR__orig_val__25236_25240,_STAR_print_newline_STAR__temp_val__25237_25241,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25237_25241;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25238_25242;

try{klipse_clj.repl.print_value.call(null,cljs.spec.alpha.describe.call(null,spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.repl","keyword-ns","klipse-clj.repl/keyword-ns",614877250),ns,new cljs.core.Keyword("klipse-clj.repl","spec?","klipse-clj.repl/spec?",288111418),true,new cljs.core.Keyword("klipse-clj.repl","as-code?","klipse-clj.repl/as-code?",578894325),true,new cljs.core.Keyword("klipse-clj.repl","term-width-adj","klipse-clj.repl/term-width-adj",-1860761290),(- left_margin)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25236_25240;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25235_25239;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
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
klipse_clj.repl.print_doc = (function klipse_clj$repl$print_doc(p__25243){
var map__25244 = p__25243;
var map__25244__$1 = (((((!((map__25244 == null))))?(((((map__25244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25244):map__25244);
var m = map__25244__$1;
var n = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

var temp__5718__auto___25278 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto___25278)){
var spec_25279 = temp__5718__auto___25278;
klipse_clj.repl.print_value.call(null,spec_25279,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.println.call(null,[(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__25246_25280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25247_25281 = null;
var count__25248_25282 = (0);
var i__25249_25283 = (0);
while(true){
if((i__25249_25283 < count__25248_25282)){
var f_25284 = cljs.core._nth.call(null,chunk__25247_25281,i__25249_25283);
cljs.core.println.call(null,"  ",f_25284);


var G__25285 = seq__25246_25280;
var G__25286 = chunk__25247_25281;
var G__25287 = count__25248_25282;
var G__25288 = (i__25249_25283 + (1));
seq__25246_25280 = G__25285;
chunk__25247_25281 = G__25286;
count__25248_25282 = G__25287;
i__25249_25283 = G__25288;
continue;
} else {
var temp__5720__auto___25289 = cljs.core.seq.call(null,seq__25246_25280);
if(temp__5720__auto___25289){
var seq__25246_25290__$1 = temp__5720__auto___25289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25246_25290__$1)){
var c__4550__auto___25291 = cljs.core.chunk_first.call(null,seq__25246_25290__$1);
var G__25292 = cljs.core.chunk_rest.call(null,seq__25246_25290__$1);
var G__25293 = c__4550__auto___25291;
var G__25294 = cljs.core.count.call(null,c__4550__auto___25291);
var G__25295 = (0);
seq__25246_25280 = G__25292;
chunk__25247_25281 = G__25293;
count__25248_25282 = G__25294;
i__25249_25283 = G__25295;
continue;
} else {
var f_25296 = cljs.core.first.call(null,seq__25246_25290__$1);
cljs.core.println.call(null,"  ",f_25296);


var G__25297 = cljs.core.next.call(null,seq__25246_25290__$1);
var G__25298 = null;
var G__25299 = (0);
var G__25300 = (0);
seq__25246_25280 = G__25297;
chunk__25247_25281 = G__25298;
count__25248_25282 = G__25299;
i__25249_25283 = G__25300;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25301 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25301);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25301)))?cljs.core.second.call(null,arglists_25301):arglists_25301));
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
var seq__25250_25302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25251_25303 = null;
var count__25252_25304 = (0);
var i__25253_25305 = (0);
while(true){
if((i__25253_25305 < count__25252_25304)){
var vec__25264_25306 = cljs.core._nth.call(null,chunk__25251_25303,i__25253_25305);
var name_25307 = cljs.core.nth.call(null,vec__25264_25306,(0),null);
var map__25267_25308 = cljs.core.nth.call(null,vec__25264_25306,(1),null);
var map__25267_25309__$1 = (((((!((map__25267_25308 == null))))?(((((map__25267_25308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25267_25308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267_25308):map__25267_25308);
var doc_25310 = cljs.core.get.call(null,map__25267_25309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25311 = cljs.core.get.call(null,map__25267_25309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25307);

cljs.core.println.call(null," ",arglists_25311);

if(cljs.core.truth_(doc_25310)){
cljs.core.println.call(null," ",doc_25310);
} else {
}


var G__25312 = seq__25250_25302;
var G__25313 = chunk__25251_25303;
var G__25314 = count__25252_25304;
var G__25315 = (i__25253_25305 + (1));
seq__25250_25302 = G__25312;
chunk__25251_25303 = G__25313;
count__25252_25304 = G__25314;
i__25253_25305 = G__25315;
continue;
} else {
var temp__5720__auto___25316 = cljs.core.seq.call(null,seq__25250_25302);
if(temp__5720__auto___25316){
var seq__25250_25317__$1 = temp__5720__auto___25316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25250_25317__$1)){
var c__4550__auto___25318 = cljs.core.chunk_first.call(null,seq__25250_25317__$1);
var G__25319 = cljs.core.chunk_rest.call(null,seq__25250_25317__$1);
var G__25320 = c__4550__auto___25318;
var G__25321 = cljs.core.count.call(null,c__4550__auto___25318);
var G__25322 = (0);
seq__25250_25302 = G__25319;
chunk__25251_25303 = G__25320;
count__25252_25304 = G__25321;
i__25253_25305 = G__25322;
continue;
} else {
var vec__25269_25323 = cljs.core.first.call(null,seq__25250_25317__$1);
var name_25324 = cljs.core.nth.call(null,vec__25269_25323,(0),null);
var map__25272_25325 = cljs.core.nth.call(null,vec__25269_25323,(1),null);
var map__25272_25326__$1 = (((((!((map__25272_25325 == null))))?(((((map__25272_25325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25272_25325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25272_25325):map__25272_25325);
var doc_25327 = cljs.core.get.call(null,map__25272_25326__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25328 = cljs.core.get.call(null,map__25272_25326__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25324);

cljs.core.println.call(null," ",arglists_25328);

if(cljs.core.truth_(doc_25327)){
cljs.core.println.call(null," ",doc_25327);
} else {
}


var G__25329 = cljs.core.next.call(null,seq__25250_25317__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25250_25302 = G__25329;
chunk__25251_25303 = G__25330;
count__25252_25304 = G__25331;
i__25253_25305 = G__25332;
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
var spec_lookup = ((function (map__25244,map__25244__$1,m,n,nm){
return (function (ns_suffix){
return cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_suffix)].join(''),cljs.core.name.call(null,nm)));
});})(map__25244,map__25244__$1,m,n,nm))
;
var temp__5720__auto__ = (function (){var or__4131__auto__ = spec_lookup.call(null,"");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return spec_lookup.call(null,"$macros");
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__25274_25333 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25275_25334 = null;
var count__25276_25335 = (0);
var i__25277_25336 = (0);
while(true){
if((i__25277_25336 < count__25276_25335)){
var role_25337 = cljs.core._nth.call(null,chunk__25275_25334,i__25277_25336);
var temp__5720__auto___25338__$1 = cljs.core.get.call(null,fnspec,role_25337);
if(cljs.core.truth_(temp__5720__auto___25338__$1)){
var spec_25339 = temp__5720__auto___25338__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role_25337),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_25339,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_25337))),n));
} else {
}


var G__25340 = seq__25274_25333;
var G__25341 = chunk__25275_25334;
var G__25342 = count__25276_25335;
var G__25343 = (i__25277_25336 + (1));
seq__25274_25333 = G__25340;
chunk__25275_25334 = G__25341;
count__25276_25335 = G__25342;
i__25277_25336 = G__25343;
continue;
} else {
var temp__5720__auto___25344__$1 = cljs.core.seq.call(null,seq__25274_25333);
if(temp__5720__auto___25344__$1){
var seq__25274_25345__$1 = temp__5720__auto___25344__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25274_25345__$1)){
var c__4550__auto___25346 = cljs.core.chunk_first.call(null,seq__25274_25345__$1);
var G__25347 = cljs.core.chunk_rest.call(null,seq__25274_25345__$1);
var G__25348 = c__4550__auto___25346;
var G__25349 = cljs.core.count.call(null,c__4550__auto___25346);
var G__25350 = (0);
seq__25274_25333 = G__25347;
chunk__25275_25334 = G__25348;
count__25276_25335 = G__25349;
i__25277_25336 = G__25350;
continue;
} else {
var role_25351 = cljs.core.first.call(null,seq__25274_25345__$1);
var temp__5720__auto___25352__$2 = cljs.core.get.call(null,fnspec,role_25351);
if(cljs.core.truth_(temp__5720__auto___25352__$2)){
var spec_25353 = temp__5720__auto___25352__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role_25351),":"].join(''),klipse_clj.repl.format_spec.call(null,spec_25353,((3) + cljs.core.count.call(null,cljs.core.name.call(null,role_25351))),n));
} else {
}


var G__25354 = cljs.core.next.call(null,seq__25274_25345__$1);
var G__25355 = null;
var G__25356 = (0);
var G__25357 = (0);
seq__25274_25333 = G__25354;
chunk__25275_25334 = G__25355;
count__25276_25335 = G__25356;
i__25277_25336 = G__25357;
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

var temp__5720__auto__ = (function (){var env__9409__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__9409__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9409__auto__))?cljs.core.atom.call(null,env__9409__auto__):(((((env__9409__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9409__auto__)))))?env__9409__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9409__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__25358 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__25359 = env__9409__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__25359;

try{return klipse_clj.repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__25358;
}})();
if(cljs.core.truth_(temp__5720__auto__)){
var macro_var = temp__5720__auto__;
return cljs.core.assoc.call(null,macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),macros_ns);
} else {
return null;
}
});
klipse_clj.repl.get_aenv = (function klipse_clj$repl$get_aenv(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.get_namespace.call(null,cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
});
klipse_clj.repl.get_var = (function klipse_clj$repl$get_var(env,sym){
var _STAR_cljs_warning_handlers_STAR__orig_val__25361 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__25362 = null;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__25362;

try{var var$ = (function (){var or__4131__auto__ = (function (){var env__9409__auto__ = cljs.core.deref.call(null,klipse_clj.repl.st);
var env__9409__auto____$1 = ((cljs.core.map_QMARK_.call(null,env__9409__auto__))?cljs.core.atom.call(null,env__9409__auto__):(((((env__9409__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__9409__auto__)))))?env__9409__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__9409__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__25365 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__25366 = env__9409__auto____$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__25366;

try{return klipse_clj.repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__25365;
}})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var temp__5720__auto__ = sym.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null)));
if(cljs.core.truth_(temp__5720__auto__)){
var macros_ns = temp__5720__auto__;
return klipse_clj.repl.get_macro_var.call(null,env,sym,macros_ns);
} else {
return null;
}
}
})();
if(cljs.core.truth_(var$)){
return cljs.core.update.call(null,(function (){var G__25367 = var$;
var G__25367__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.call(null,G__25367,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__25367);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.call(null,G__25367__$1,new cljs.core.Keyword(null,"name","name",1843675177),((function (G__25367,G__25367__$1,var$,_STAR_cljs_warning_handlers_STAR__orig_val__25361,_STAR_cljs_warning_handlers_STAR__temp_val__25362){
return (function (p1__25360_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__25360_SHARP_));
});})(G__25367,G__25367__$1,var$,_STAR_cljs_warning_handlers_STAR__orig_val__25361,_STAR_cljs_warning_handlers_STAR__temp_val__25362))
);
} else {
return G__25367__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.call(null,cljs.core.symbol,klipse_clj.repl.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__25361;
}});
klipse_clj.repl.doc_STAR_ = (function klipse_clj$repl$doc_STAR_(name){
var temp__5718__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null).call(null,name);
if(cljs.core.truth_(temp__5718__auto__)){
var special_name = temp__5718__auto__;
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
var G__25368 = cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.call(null,G__25368,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__25368,var$,var$__$1,m,m__$1,temp__5718__auto__){
return (function (p__25369){
var vec__25370 = p__25369;
var fname = cljs.core.nth.call(null,vec__25370,(0),null);
var sigs = cljs.core.nth.call(null,vec__25370,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__25368,var$,var$__$1,m,m__$1,temp__5718__auto__))
,cljs.core.get_in.call(null,var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null)))));
} else {
return G__25368;
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
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,cljs.core.key),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(cljs.core.truth_(allow_private_QMARK_)?cljs.core.identity:(function (p1__25373_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__25373_SHARP_)));
}))),cljs.core.remove.call(null,(function (p1__25374_SHARP_){
return new cljs.core.Keyword(null,"anonymous","anonymous",447897231).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__25374_SHARP_));
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
var G__25376 = arguments.length;
switch (G__25376) {
case 0:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return klipse_clj.repl.current_alias_map.call(null,cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval),cljs.core.deref.call(null,klipse_clj.repl.st));
});

klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$2 = (function (ns,state){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__25377){
var vec__25378 = p__25377;
var k = cljs.core.nth.call(null,vec__25378,(0),null);
var v = cljs.core.nth.call(null,vec__25378,(1),null);
return cljs.core._EQ_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});

klipse_clj.repl.current_alias_map.cljs$lang$maxFixedArity = 2;

klipse_clj.repl.namespace_completions = (function klipse_clj$repl$namespace_completions(){
return cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.namespace_completion_additons),cljs.core.remove.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.namespace_completion_exclusions)),cljs.core.map.call(null,(function (p1__25382_SHARP_){
return klipse_clj.repl.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25382_SHARP_));
}),klipse_clj.repl.all_ns.call(null))))));
});
/**
 * Expand the typed namespace symbol to a known namespace, consulting current
 *   namespace aliases if necessary.
 */
klipse_clj.repl.expand_typed_ns = (function klipse_clj$repl$expand_typed_ns(alias){
var alias__$1 = ((cljs.core.symbol_identical_QMARK_.call(null,alias,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null)))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):alias);
var or__4131__auto__ = cljs.core.get_in.call(null,klipse_clj.repl.st,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),alias__$1,new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = alias__$1.call(null,klipse_clj.repl.current_alias_map.call(null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return alias__$1;
}
}
});
klipse_clj.repl.completion_candidates = (function klipse_clj$repl$completion_candidates(top_form_QMARK_,typed_ns){
return cljs.core.set.call(null,(cljs.core.truth_(typed_ns)?(function (){var expanded_ns = klipse_clj.repl.expand_typed_ns.call(null,cljs.core.symbol.call(null,typed_ns));
return cljs.core.concat.call(null,klipse_clj.repl.completion_candidates_for_ns.call(null,expanded_ns,false),klipse_clj.repl.completion_candidates_for_ns.call(null,klipse_clj.repl.add_macros_suffix.call(null,expanded_ns),false));
})():cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,klipse_clj.repl.keyword_completions),klipse_clj.repl.namespace_completions.call(null),cljs.core.map.call(null,(function (p1__25383_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25383_SHARP_),"/"].join('');
}),cljs.core.keys.call(null,klipse_clj.repl.current_alias_map.call(null))),klipse_clj.repl.completion_candidates_for_ns.call(null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),false),klipse_clj.repl.completion_candidates_for_ns.call(null,new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),false),klipse_clj.repl.completion_candidates_for_current_ns.call(null),(cljs.core.truth_(top_form_QMARK_)?cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,klipse_clj.repl_resources.special_doc_map)),cljs.core.map.call(null,cljs.core.str,cljs.core.keys.call(null,klipse_clj.repl_resources.repl_special_doc_map))):null))));
});
klipse_clj.repl.longest_common_prefix = (function klipse_clj$repl$longest_common_prefix(strings){
var minl = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.count,strings));
var l = minl;
while(true){
if((l > (0))){
if(cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.subs.call(null,cljs.core.first.call(null,strings),(0),l)]),cljs.core.map.call(null,((function (l,minl){
return (function (p1__25384_SHARP_){
return cljs.core.subs.call(null,p1__25384_SHARP_,(0),l);
});})(l,minl))
,cljs.core.rest.call(null,strings)))){
return cljs.core.subs.call(null,cljs.core.first.call(null,strings),(0),l);
} else {
var G__25385 = (l - (1));
l = G__25385;
continue;
}
} else {
return "";
}
break;
}
});
klipse_clj.repl.spec_registered_keywords = (function klipse_clj$repl$spec_registered_keywords(ns){
return cljs.core.eduction.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_),cljs.core.filter.call(null,(function (p1__25386_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.namespace.call(null,p1__25386_SHARP_));
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
return (function (p1__25387_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__25387_SHARP_,kw_source);
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
var temp__5718__auto__ = klipse_clj.repl.local_keyword.call(null,buffer);
if(cljs.core.truth_(temp__5718__auto__)){
var kw_name = temp__5718__auto__;
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
