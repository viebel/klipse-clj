// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__45518 = s;
var map__45518__$1 = ((((!((map__45518 == null)))?(((((map__45518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45518):map__45518);
var name = cljs.core.get.call(null,map__45518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__45518__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__45521 = info;
var map__45522 = G__45521;
var map__45522__$1 = ((((!((map__45522 == null)))?(((((map__45522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45522):map__45522);
var shadow = cljs.core.get.call(null,map__45522__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__45521__$1 = G__45521;
while(true){
var d__$2 = d__$1;
var map__45524 = G__45521__$1;
var map__45524__$1 = ((((!((map__45524 == null)))?(((((map__45524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45524):map__45524);
var shadow__$1 = cljs.core.get.call(null,map__45524__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__45528 = (d__$2 + (1));
var G__45529 = shadow__$1;
d__$1 = G__45528;
G__45521__$1 = G__45529;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__45530){
var map__45531 = p__45530;
var map__45531__$1 = ((((!((map__45531 == null)))?(((((map__45531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45531):map__45531);
var name_var = map__45531__$1;
var name = cljs.core.get.call(null,map__45531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__45531__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__45533 = info;
var map__45533__$1 = ((((!((map__45533 == null)))?(((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45533):map__45533);
var ns = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__45533__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__45544 = arguments.length;
switch (G__45544) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__45546 = cp;
switch (G__45546) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__45548_45552 = cljs.core.seq.call(null,s);
var chunk__45549_45553 = null;
var count__45550_45554 = (0);
var i__45551_45555 = (0);
while(true){
if((i__45551_45555 < count__45550_45554)){
var c_45558 = cljs.core._nth.call(null,chunk__45549_45553,i__45551_45555);
sb.append(cljs.compiler.escape_char.call(null,c_45558));


var G__45559 = seq__45548_45552;
var G__45560 = chunk__45549_45553;
var G__45561 = count__45550_45554;
var G__45562 = (i__45551_45555 + (1));
seq__45548_45552 = G__45559;
chunk__45549_45553 = G__45560;
count__45550_45554 = G__45561;
i__45551_45555 = G__45562;
continue;
} else {
var temp__5457__auto___45563 = cljs.core.seq.call(null,seq__45548_45552);
if(temp__5457__auto___45563){
var seq__45548_45564__$1 = temp__5457__auto___45563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45548_45564__$1)){
var c__4319__auto___45565 = cljs.core.chunk_first.call(null,seq__45548_45564__$1);
var G__45566 = cljs.core.chunk_rest.call(null,seq__45548_45564__$1);
var G__45567 = c__4319__auto___45565;
var G__45568 = cljs.core.count.call(null,c__4319__auto___45565);
var G__45569 = (0);
seq__45548_45552 = G__45566;
chunk__45549_45553 = G__45567;
count__45550_45554 = G__45568;
i__45551_45555 = G__45569;
continue;
} else {
var c_45570 = cljs.core.first.call(null,seq__45548_45564__$1);
sb.append(cljs.compiler.escape_char.call(null,c_45570));


var G__45571 = cljs.core.next.call(null,seq__45548_45564__$1);
var G__45572 = null;
var G__45573 = (0);
var G__45574 = (0);
seq__45548_45552 = G__45571;
chunk__45549_45553 = G__45572;
count__45550_45554 = G__45573;
i__45551_45555 = G__45574;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__9457__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__9457__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__45579_45585 = ast;
var map__45579_45586__$1 = ((((!((map__45579_45585 == null)))?(((((map__45579_45585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45579_45585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45579_45585):map__45579_45585);
var env_45587 = cljs.core.get.call(null,map__45579_45586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_45587))){
var map__45581_45591 = env_45587;
var map__45581_45592__$1 = ((((!((map__45581_45591 == null)))?(((((map__45581_45591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45581_45591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45581_45591):map__45581_45591);
var line_45593 = cljs.core.get.call(null,map__45581_45592__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45594 = cljs.core.get.call(null,map__45581_45592__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__){
return (function (m){
var minfo = (function (){var G__45583 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__45583,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__45583;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_45593 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_45594)?(column_45594 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__45581_45591,map__45581_45592__$1,line_45593,column_45594,map__45579_45585,map__45579_45586__$1,env_45587,val__9457__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__9457__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45604 = arguments.length;
var i__4500__auto___45605 = (0);
while(true){
if((i__4500__auto___45605 < len__4499__auto___45604)){
args__4502__auto__.push((arguments[i__4500__auto___45605]));

var G__45606 = (i__4500__auto___45605 + (1));
i__4500__auto___45605 = G__45606;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__45600_45607 = cljs.core.seq.call(null,xs);
var chunk__45601_45608 = null;
var count__45602_45609 = (0);
var i__45603_45610 = (0);
while(true){
if((i__45603_45610 < count__45602_45609)){
var x_45611 = cljs.core._nth.call(null,chunk__45601_45608,i__45603_45610);
if((x_45611 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_45611)){
cljs.compiler.emit.call(null,x_45611);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_45611)){
cljs.core.apply.call(null,cljs.compiler.emits,x_45611);
} else {
if(goog.isFunction(x_45611)){
x_45611.call(null);
} else {
var s_45613 = cljs.core.print_str.call(null,x_45611);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__45600_45607,chunk__45601_45608,count__45602_45609,i__45603_45610,s_45613,x_45611){
return (function (p1__45598_SHARP_){
return (p1__45598_SHARP_ + cljs.core.count.call(null,s_45613));
});})(seq__45600_45607,chunk__45601_45608,count__45602_45609,i__45603_45610,s_45613,x_45611))
);
}

cljs.core.print.call(null,s_45613);

}
}
}
}


var G__45614 = seq__45600_45607;
var G__45615 = chunk__45601_45608;
var G__45616 = count__45602_45609;
var G__45617 = (i__45603_45610 + (1));
seq__45600_45607 = G__45614;
chunk__45601_45608 = G__45615;
count__45602_45609 = G__45616;
i__45603_45610 = G__45617;
continue;
} else {
var temp__5457__auto___45619 = cljs.core.seq.call(null,seq__45600_45607);
if(temp__5457__auto___45619){
var seq__45600_45620__$1 = temp__5457__auto___45619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45600_45620__$1)){
var c__4319__auto___45621 = cljs.core.chunk_first.call(null,seq__45600_45620__$1);
var G__45622 = cljs.core.chunk_rest.call(null,seq__45600_45620__$1);
var G__45623 = c__4319__auto___45621;
var G__45624 = cljs.core.count.call(null,c__4319__auto___45621);
var G__45625 = (0);
seq__45600_45607 = G__45622;
chunk__45601_45608 = G__45623;
count__45602_45609 = G__45624;
i__45603_45610 = G__45625;
continue;
} else {
var x_45626 = cljs.core.first.call(null,seq__45600_45620__$1);
if((x_45626 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_45626)){
cljs.compiler.emit.call(null,x_45626);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_45626)){
cljs.core.apply.call(null,cljs.compiler.emits,x_45626);
} else {
if(goog.isFunction(x_45626)){
x_45626.call(null);
} else {
var s_45628 = cljs.core.print_str.call(null,x_45626);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__45600_45607,chunk__45601_45608,count__45602_45609,i__45603_45610,s_45628,x_45626,seq__45600_45620__$1,temp__5457__auto___45619){
return (function (p1__45598_SHARP_){
return (p1__45598_SHARP_ + cljs.core.count.call(null,s_45628));
});})(seq__45600_45607,chunk__45601_45608,count__45602_45609,i__45603_45610,s_45628,x_45626,seq__45600_45620__$1,temp__5457__auto___45619))
);
}

cljs.core.print.call(null,s_45628);

}
}
}
}


var G__45629 = cljs.core.next.call(null,seq__45600_45620__$1);
var G__45630 = null;
var G__45631 = (0);
var G__45632 = (0);
seq__45600_45607 = G__45629;
chunk__45601_45608 = G__45630;
count__45602_45609 = G__45631;
i__45603_45610 = G__45632;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq45599){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45599));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45640 = arguments.length;
var i__4500__auto___45641 = (0);
while(true){
if((i__4500__auto___45641 < len__4499__auto___45640)){
args__4502__auto__.push((arguments[i__4500__auto___45641]));

var G__45643 = (i__4500__auto___45641 + (1));
i__4500__auto___45641 = G__45643;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_45636_45644 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_45636_45644;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__45637){
var map__45638 = p__45637;
var map__45638__$1 = ((((!((map__45638 == null)))?(((((map__45638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45638):map__45638);
var m = map__45638__$1;
var gen_line = cljs.core.get.call(null,map__45638__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq45634){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45634));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45647_45649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45648_45650 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45647_45649,_STAR_print_fn_STAR_45648_45650,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_45647_45649,_STAR_print_fn_STAR_45648_45650,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45648_45650;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45647_45649;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__45655 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__45655,(0),null);
var flags = cljs.core.nth.call(null,vec__45655,(1),null);
var pattern = cljs.core.nth.call(null,vec__45655,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__45667){
var map__45668 = p__45667;
var map__45668__$1 = ((((!((map__45668 == null)))?(((((map__45668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45668):map__45668);
var ast = map__45668__$1;
var info = cljs.core.get.call(null,map__45668__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__45668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__45668__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__45672 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__45672__$1 = ((((!((map__45672 == null)))?(((((map__45672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45672):map__45672);
var cenv = map__45672__$1;
var options = cljs.core.get.call(null,map__45672__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__45675 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__45675,cljs.analyzer.es5_allowed);
} else {
return G__45675;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__45676 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__45676,reserved);
} else {
return G__45676;
}
})();
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__45678_45690 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__45678_45691__$1 = (((G__45678_45690 instanceof cljs.core.Keyword))?G__45678_45690.fqn:null);
switch (G__45678_45691__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__45698){
var map__45699 = p__45698;
var map__45699__$1 = ((((!((map__45699 == null)))?(((((map__45699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45699):map__45699);
var arg = map__45699__$1;
var env = cljs.core.get.call(null,map__45699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__45699__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__45699__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__45699__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__45703 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__45703__$1 = ((((!((map__45703 == null)))?(((((map__45703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45703):map__45703);
var name = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__45711){
var map__45712 = p__45711;
var map__45712__$1 = ((((!((map__45712 == null)))?(((((map__45712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45712):map__45712);
var expr = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__45721_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__45721_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__45726){
var map__45727 = p__45726;
var map__45727__$1 = ((((!((map__45727 == null)))?(((((map__45727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45727):map__45727);
var env = cljs.core.get.call(null,map__45727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__45727__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__45727__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__45737){
var map__45738 = p__45737;
var map__45738__$1 = ((((!((map__45738 == null)))?(((((map__45738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45738):map__45738);
var items = cljs.core.get.call(null,map__45738__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__45744){
var map__45745 = p__45744;
var map__45745__$1 = ((((!((map__45745 == null)))?(((((map__45745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45745):map__45745);
var items = cljs.core.get.call(null,map__45745__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_45752 = cljs.core.count.call(null,items);
if((cnt_45752 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_45752,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__45753_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__45753_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__45757){
var map__45758 = p__45757;
var map__45758__$1 = ((((!((map__45758 == null)))?(((((map__45758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45758):map__45758);
var items = cljs.core.get.call(null,map__45758__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__45758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__45768){
var map__45769 = p__45768;
var map__45769__$1 = ((((!((map__45769 == null)))?(((((map__45769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45769):map__45769);
var items = cljs.core.get.call(null,map__45769__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__45769__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__45769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___45792 = cljs.core.seq.call(null,items);
if(temp__5457__auto___45792){
var items_45795__$1 = temp__5457__auto___45792;
var vec__45772_45796 = items_45795__$1;
var seq__45773_45797 = cljs.core.seq.call(null,vec__45772_45796);
var first__45774_45798 = cljs.core.first.call(null,seq__45773_45797);
var seq__45773_45799__$1 = cljs.core.next.call(null,seq__45773_45797);
var vec__45775_45800 = first__45774_45798;
var k_45801 = cljs.core.nth.call(null,vec__45775_45800,(0),null);
var v_45802 = cljs.core.nth.call(null,vec__45775_45800,(1),null);
var r_45803 = seq__45773_45799__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_45801),"\": ",v_45802);

var seq__45778_45805 = cljs.core.seq.call(null,r_45803);
var chunk__45779_45806 = null;
var count__45780_45807 = (0);
var i__45781_45808 = (0);
while(true){
if((i__45781_45808 < count__45780_45807)){
var vec__45782_45809 = cljs.core._nth.call(null,chunk__45779_45806,i__45781_45808);
var k_45810__$1 = cljs.core.nth.call(null,vec__45782_45809,(0),null);
var v_45811__$1 = cljs.core.nth.call(null,vec__45782_45809,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_45810__$1),"\": ",v_45811__$1);


var G__45812 = seq__45778_45805;
var G__45813 = chunk__45779_45806;
var G__45814 = count__45780_45807;
var G__45815 = (i__45781_45808 + (1));
seq__45778_45805 = G__45812;
chunk__45779_45806 = G__45813;
count__45780_45807 = G__45814;
i__45781_45808 = G__45815;
continue;
} else {
var temp__5457__auto___45816__$1 = cljs.core.seq.call(null,seq__45778_45805);
if(temp__5457__auto___45816__$1){
var seq__45778_45817__$1 = temp__5457__auto___45816__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45778_45817__$1)){
var c__4319__auto___45818 = cljs.core.chunk_first.call(null,seq__45778_45817__$1);
var G__45819 = cljs.core.chunk_rest.call(null,seq__45778_45817__$1);
var G__45820 = c__4319__auto___45818;
var G__45821 = cljs.core.count.call(null,c__4319__auto___45818);
var G__45822 = (0);
seq__45778_45805 = G__45819;
chunk__45779_45806 = G__45820;
count__45780_45807 = G__45821;
i__45781_45808 = G__45822;
continue;
} else {
var vec__45787_45824 = cljs.core.first.call(null,seq__45778_45817__$1);
var k_45825__$1 = cljs.core.nth.call(null,vec__45787_45824,(0),null);
var v_45826__$1 = cljs.core.nth.call(null,vec__45787_45824,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_45825__$1),"\": ",v_45826__$1);


var G__45827 = cljs.core.next.call(null,seq__45778_45817__$1);
var G__45828 = null;
var G__45829 = (0);
var G__45830 = (0);
seq__45778_45805 = G__45827;
chunk__45779_45806 = G__45828;
count__45780_45807 = G__45829;
i__45781_45808 = G__45830;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__45832){
var map__45833 = p__45832;
var map__45833__$1 = ((((!((map__45833 == null)))?(((((map__45833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45833):map__45833);
var items = cljs.core.get.call(null,map__45833__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__45833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__45833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__45833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__45837){
var map__45838 = p__45837;
var map__45838__$1 = ((((!((map__45838 == null)))?(((((map__45838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45838):map__45838);
var form = cljs.core.get.call(null,map__45838__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__45838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__45841){
var map__45842 = p__45841;
var map__45842__$1 = ((((!((map__45842 == null)))?(((((map__45842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45842):map__45842);
var op = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__45842__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__45847){
var map__45848 = p__45847;
var map__45848__$1 = ((((!((map__45848 == null)))?(((((map__45848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45848):map__45848);
var op = cljs.core.get.call(null,map__45848__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__45848__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__45848__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__45853){
var map__45854 = p__45853;
var map__45854__$1 = ((((!((map__45854 == null)))?(((((map__45854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45854):map__45854);
var test = cljs.core.get.call(null,map__45854__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__45854__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__45854__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__45854__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__45854__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__45860){
var map__45861 = p__45860;
var map__45861__$1 = ((((!((map__45861 == null)))?(((((map__45861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45861):map__45861);
var v = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__45861__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__45863_45885 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__45864_45886 = null;
var count__45865_45887 = (0);
var i__45866_45888 = (0);
while(true){
if((i__45866_45888 < count__45865_45887)){
var vec__45867_45889 = cljs.core._nth.call(null,chunk__45864_45886,i__45866_45888);
var ts_45890 = cljs.core.nth.call(null,vec__45867_45889,(0),null);
var then_45891 = cljs.core.nth.call(null,vec__45867_45889,(1),null);
var seq__45870_45892 = cljs.core.seq.call(null,ts_45890);
var chunk__45871_45893 = null;
var count__45872_45894 = (0);
var i__45873_45895 = (0);
while(true){
if((i__45873_45895 < count__45872_45894)){
var test_45896 = cljs.core._nth.call(null,chunk__45871_45893,i__45873_45895);
cljs.compiler.emitln.call(null,"case ",test_45896,":");


var G__45898 = seq__45870_45892;
var G__45899 = chunk__45871_45893;
var G__45900 = count__45872_45894;
var G__45901 = (i__45873_45895 + (1));
seq__45870_45892 = G__45898;
chunk__45871_45893 = G__45899;
count__45872_45894 = G__45900;
i__45873_45895 = G__45901;
continue;
} else {
var temp__5457__auto___45902 = cljs.core.seq.call(null,seq__45870_45892);
if(temp__5457__auto___45902){
var seq__45870_45903__$1 = temp__5457__auto___45902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45870_45903__$1)){
var c__4319__auto___45904 = cljs.core.chunk_first.call(null,seq__45870_45903__$1);
var G__45905 = cljs.core.chunk_rest.call(null,seq__45870_45903__$1);
var G__45906 = c__4319__auto___45904;
var G__45907 = cljs.core.count.call(null,c__4319__auto___45904);
var G__45908 = (0);
seq__45870_45892 = G__45905;
chunk__45871_45893 = G__45906;
count__45872_45894 = G__45907;
i__45873_45895 = G__45908;
continue;
} else {
var test_45909 = cljs.core.first.call(null,seq__45870_45903__$1);
cljs.compiler.emitln.call(null,"case ",test_45909,":");


var G__45911 = cljs.core.next.call(null,seq__45870_45903__$1);
var G__45912 = null;
var G__45913 = (0);
var G__45914 = (0);
seq__45870_45892 = G__45911;
chunk__45871_45893 = G__45912;
count__45872_45894 = G__45913;
i__45873_45895 = G__45914;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_45891);
} else {
cljs.compiler.emitln.call(null,then_45891);
}

cljs.compiler.emitln.call(null,"break;");


var G__45915 = seq__45863_45885;
var G__45916 = chunk__45864_45886;
var G__45917 = count__45865_45887;
var G__45918 = (i__45866_45888 + (1));
seq__45863_45885 = G__45915;
chunk__45864_45886 = G__45916;
count__45865_45887 = G__45917;
i__45866_45888 = G__45918;
continue;
} else {
var temp__5457__auto___45920 = cljs.core.seq.call(null,seq__45863_45885);
if(temp__5457__auto___45920){
var seq__45863_45921__$1 = temp__5457__auto___45920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45863_45921__$1)){
var c__4319__auto___45922 = cljs.core.chunk_first.call(null,seq__45863_45921__$1);
var G__45923 = cljs.core.chunk_rest.call(null,seq__45863_45921__$1);
var G__45924 = c__4319__auto___45922;
var G__45925 = cljs.core.count.call(null,c__4319__auto___45922);
var G__45926 = (0);
seq__45863_45885 = G__45923;
chunk__45864_45886 = G__45924;
count__45865_45887 = G__45925;
i__45866_45888 = G__45926;
continue;
} else {
var vec__45875_45929 = cljs.core.first.call(null,seq__45863_45921__$1);
var ts_45930 = cljs.core.nth.call(null,vec__45875_45929,(0),null);
var then_45931 = cljs.core.nth.call(null,vec__45875_45929,(1),null);
var seq__45878_45933 = cljs.core.seq.call(null,ts_45930);
var chunk__45879_45934 = null;
var count__45880_45935 = (0);
var i__45881_45936 = (0);
while(true){
if((i__45881_45936 < count__45880_45935)){
var test_45937 = cljs.core._nth.call(null,chunk__45879_45934,i__45881_45936);
cljs.compiler.emitln.call(null,"case ",test_45937,":");


var G__45938 = seq__45878_45933;
var G__45939 = chunk__45879_45934;
var G__45940 = count__45880_45935;
var G__45941 = (i__45881_45936 + (1));
seq__45878_45933 = G__45938;
chunk__45879_45934 = G__45939;
count__45880_45935 = G__45940;
i__45881_45936 = G__45941;
continue;
} else {
var temp__5457__auto___45943__$1 = cljs.core.seq.call(null,seq__45878_45933);
if(temp__5457__auto___45943__$1){
var seq__45878_45944__$1 = temp__5457__auto___45943__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45878_45944__$1)){
var c__4319__auto___45945 = cljs.core.chunk_first.call(null,seq__45878_45944__$1);
var G__45946 = cljs.core.chunk_rest.call(null,seq__45878_45944__$1);
var G__45947 = c__4319__auto___45945;
var G__45948 = cljs.core.count.call(null,c__4319__auto___45945);
var G__45949 = (0);
seq__45878_45933 = G__45946;
chunk__45879_45934 = G__45947;
count__45880_45935 = G__45948;
i__45881_45936 = G__45949;
continue;
} else {
var test_45952 = cljs.core.first.call(null,seq__45878_45944__$1);
cljs.compiler.emitln.call(null,"case ",test_45952,":");


var G__45954 = cljs.core.next.call(null,seq__45878_45944__$1);
var G__45955 = null;
var G__45956 = (0);
var G__45957 = (0);
seq__45878_45933 = G__45954;
chunk__45879_45934 = G__45955;
count__45880_45935 = G__45956;
i__45881_45936 = G__45957;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_45931);
} else {
cljs.compiler.emitln.call(null,then_45931);
}

cljs.compiler.emitln.call(null,"break;");


var G__45958 = cljs.core.next.call(null,seq__45863_45921__$1);
var G__45959 = null;
var G__45960 = (0);
var G__45961 = (0);
seq__45863_45885 = G__45958;
chunk__45864_45886 = G__45959;
count__45865_45887 = G__45960;
i__45866_45888 = G__45961;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__45966){
var map__45967 = p__45966;
var map__45967__$1 = ((((!((map__45967 == null)))?(((((map__45967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45967):map__45967);
var throw$ = cljs.core.get.call(null,map__45967__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__45967__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__45975 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__45975,(0),null);
var rstr = cljs.core.nth.call(null,vec__45975,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__45975,fstr,rstr,ret_t,axstr){
return (function (p1__45973_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__45973_SHARP_);
});})(idx,vec__45975,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__45981 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45981),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__45981;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__45990_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__45990_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__45995 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__45996 = cljs.core.seq.call(null,vec__45995);
var first__45997 = cljs.core.first.call(null,seq__45996);
var seq__45996__$1 = cljs.core.next.call(null,seq__45996);
var p = first__45997;
var first__45997__$1 = cljs.core.first.call(null,seq__45996__$1);
var seq__45996__$2 = cljs.core.next.call(null,seq__45996__$1);
var ts = first__45997__$1;
var first__45997__$2 = cljs.core.first.call(null,seq__45996__$2);
var seq__45996__$3 = cljs.core.next.call(null,seq__45996__$2);
var n = first__45997__$2;
var xs = seq__45996__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__45999 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__46000 = cljs.core.seq.call(null,vec__45999);
var first__46001 = cljs.core.first.call(null,seq__46000);
var seq__46000__$1 = cljs.core.next.call(null,seq__46000);
var p = first__46001;
var first__46001__$1 = cljs.core.first.call(null,seq__46000__$1);
var seq__46000__$2 = cljs.core.next.call(null,seq__46000__$1);
var ts = first__46001__$1;
var xs = seq__46000__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__46016 = arguments.length;
switch (G__46016) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__46028 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__46013_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__46013_SHARP_);
} else {
return p1__46013_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__46029 = cljs.core.seq.call(null,vec__46028);
var first__46030 = cljs.core.first.call(null,seq__46029);
var seq__46029__$1 = cljs.core.next.call(null,seq__46029);
var x = first__46030;
var ys = seq__46029__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__46031 = cljs.core.seq.call(null,ys);
var chunk__46032 = null;
var count__46033 = (0);
var i__46034 = (0);
while(true){
if((i__46034 < count__46033)){
var next_line = cljs.core._nth.call(null,chunk__46032,i__46034);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__46051 = seq__46031;
var G__46052 = chunk__46032;
var G__46053 = count__46033;
var G__46054 = (i__46034 + (1));
seq__46031 = G__46051;
chunk__46032 = G__46052;
count__46033 = G__46053;
i__46034 = G__46054;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46031);
if(temp__5457__auto__){
var seq__46031__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46031__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__46031__$1);
var G__46056 = cljs.core.chunk_rest.call(null,seq__46031__$1);
var G__46057 = c__4319__auto__;
var G__46058 = cljs.core.count.call(null,c__4319__auto__);
var G__46059 = (0);
seq__46031 = G__46056;
chunk__46032 = G__46057;
count__46033 = G__46058;
i__46034 = G__46059;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__46031__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__46061 = cljs.core.next.call(null,seq__46031__$1);
var G__46062 = null;
var G__46063 = (0);
var G__46064 = (0);
seq__46031 = G__46061;
chunk__46032 = G__46062;
count__46033 = G__46063;
i__46034 = G__46064;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__46038_46067 = cljs.core.seq.call(null,docs__$2);
var chunk__46039_46068 = null;
var count__46040_46069 = (0);
var i__46041_46070 = (0);
while(true){
if((i__46041_46070 < count__46040_46069)){
var e_46071 = cljs.core._nth.call(null,chunk__46039_46068,i__46041_46070);
if(cljs.core.truth_(e_46071)){
print_comment_lines.call(null,e_46071);
} else {
}


var G__46072 = seq__46038_46067;
var G__46073 = chunk__46039_46068;
var G__46074 = count__46040_46069;
var G__46075 = (i__46041_46070 + (1));
seq__46038_46067 = G__46072;
chunk__46039_46068 = G__46073;
count__46040_46069 = G__46074;
i__46041_46070 = G__46075;
continue;
} else {
var temp__5457__auto___46077 = cljs.core.seq.call(null,seq__46038_46067);
if(temp__5457__auto___46077){
var seq__46038_46078__$1 = temp__5457__auto___46077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46038_46078__$1)){
var c__4319__auto___46079 = cljs.core.chunk_first.call(null,seq__46038_46078__$1);
var G__46080 = cljs.core.chunk_rest.call(null,seq__46038_46078__$1);
var G__46081 = c__4319__auto___46079;
var G__46082 = cljs.core.count.call(null,c__4319__auto___46079);
var G__46083 = (0);
seq__46038_46067 = G__46080;
chunk__46039_46068 = G__46081;
count__46040_46069 = G__46082;
i__46041_46070 = G__46083;
continue;
} else {
var e_46086 = cljs.core.first.call(null,seq__46038_46078__$1);
if(cljs.core.truth_(e_46086)){
print_comment_lines.call(null,e_46086);
} else {
}


var G__46088 = cljs.core.next.call(null,seq__46038_46078__$1);
var G__46089 = null;
var G__46090 = (0);
var G__46091 = (0);
seq__46038_46067 = G__46088;
chunk__46039_46068 = G__46089;
count__46040_46069 = G__46090;
i__46041_46070 = G__46091;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__46097_SHARP_){
return goog.string.startsWith(p1__46097_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__46103){
var map__46104 = p__46103;
var map__46104__$1 = ((((!((map__46104 == null)))?(((((map__46104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46104):map__46104);
var name = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__46104__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__46119){
var map__46120 = p__46119;
var map__46120__$1 = ((((!((map__46120 == null)))?(((((map__46120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46120):map__46120);
var name = cljs.core.get.call(null,map__46120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__46120__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__46120__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__46122_46140 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__46123_46141 = null;
var count__46124_46142 = (0);
var i__46125_46143 = (0);
while(true){
if((i__46125_46143 < count__46124_46142)){
var vec__46126_46144 = cljs.core._nth.call(null,chunk__46123_46141,i__46125_46143);
var i_46145 = cljs.core.nth.call(null,vec__46126_46144,(0),null);
var param_46146 = cljs.core.nth.call(null,vec__46126_46144,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_46146);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__46147 = seq__46122_46140;
var G__46148 = chunk__46123_46141;
var G__46149 = count__46124_46142;
var G__46150 = (i__46125_46143 + (1));
seq__46122_46140 = G__46147;
chunk__46123_46141 = G__46148;
count__46124_46142 = G__46149;
i__46125_46143 = G__46150;
continue;
} else {
var temp__5457__auto___46151 = cljs.core.seq.call(null,seq__46122_46140);
if(temp__5457__auto___46151){
var seq__46122_46152__$1 = temp__5457__auto___46151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46122_46152__$1)){
var c__4319__auto___46153 = cljs.core.chunk_first.call(null,seq__46122_46152__$1);
var G__46154 = cljs.core.chunk_rest.call(null,seq__46122_46152__$1);
var G__46155 = c__4319__auto___46153;
var G__46156 = cljs.core.count.call(null,c__4319__auto___46153);
var G__46157 = (0);
seq__46122_46140 = G__46154;
chunk__46123_46141 = G__46155;
count__46124_46142 = G__46156;
i__46125_46143 = G__46157;
continue;
} else {
var vec__46129_46158 = cljs.core.first.call(null,seq__46122_46152__$1);
var i_46159 = cljs.core.nth.call(null,vec__46129_46158,(0),null);
var param_46160 = cljs.core.nth.call(null,vec__46129_46158,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_46160);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__46162 = cljs.core.next.call(null,seq__46122_46152__$1);
var G__46163 = null;
var G__46164 = (0);
var G__46165 = (0);
seq__46122_46140 = G__46162;
chunk__46123_46141 = G__46163;
count__46124_46142 = G__46164;
i__46125_46143 = G__46165;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__46132_46167 = cljs.core.seq.call(null,params);
var chunk__46133_46168 = null;
var count__46134_46169 = (0);
var i__46135_46170 = (0);
while(true){
if((i__46135_46170 < count__46134_46169)){
var param_46171 = cljs.core._nth.call(null,chunk__46133_46168,i__46135_46170);
cljs.compiler.emit.call(null,param_46171);

if(cljs.core._EQ_.call(null,param_46171,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46172 = seq__46132_46167;
var G__46173 = chunk__46133_46168;
var G__46174 = count__46134_46169;
var G__46175 = (i__46135_46170 + (1));
seq__46132_46167 = G__46172;
chunk__46133_46168 = G__46173;
count__46134_46169 = G__46174;
i__46135_46170 = G__46175;
continue;
} else {
var temp__5457__auto___46176 = cljs.core.seq.call(null,seq__46132_46167);
if(temp__5457__auto___46176){
var seq__46132_46177__$1 = temp__5457__auto___46176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46132_46177__$1)){
var c__4319__auto___46178 = cljs.core.chunk_first.call(null,seq__46132_46177__$1);
var G__46179 = cljs.core.chunk_rest.call(null,seq__46132_46177__$1);
var G__46180 = c__4319__auto___46178;
var G__46181 = cljs.core.count.call(null,c__4319__auto___46178);
var G__46182 = (0);
seq__46132_46167 = G__46179;
chunk__46133_46168 = G__46180;
count__46134_46169 = G__46181;
i__46135_46170 = G__46182;
continue;
} else {
var param_46183 = cljs.core.first.call(null,seq__46132_46177__$1);
cljs.compiler.emit.call(null,param_46183);

if(cljs.core._EQ_.call(null,param_46183,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46184 = cljs.core.next.call(null,seq__46132_46177__$1);
var G__46185 = null;
var G__46186 = (0);
var G__46187 = (0);
seq__46132_46167 = G__46184;
chunk__46133_46168 = G__46185;
count__46134_46169 = G__46186;
i__46135_46170 = G__46187;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__46136_46188 = cljs.core.seq.call(null,params);
var chunk__46137_46189 = null;
var count__46138_46190 = (0);
var i__46139_46191 = (0);
while(true){
if((i__46139_46191 < count__46138_46190)){
var param_46192 = cljs.core._nth.call(null,chunk__46137_46189,i__46139_46191);
cljs.compiler.emit.call(null,param_46192);

if(cljs.core._EQ_.call(null,param_46192,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46193 = seq__46136_46188;
var G__46194 = chunk__46137_46189;
var G__46195 = count__46138_46190;
var G__46196 = (i__46139_46191 + (1));
seq__46136_46188 = G__46193;
chunk__46137_46189 = G__46194;
count__46138_46190 = G__46195;
i__46139_46191 = G__46196;
continue;
} else {
var temp__5457__auto___46197 = cljs.core.seq.call(null,seq__46136_46188);
if(temp__5457__auto___46197){
var seq__46136_46198__$1 = temp__5457__auto___46197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46136_46198__$1)){
var c__4319__auto___46199 = cljs.core.chunk_first.call(null,seq__46136_46198__$1);
var G__46200 = cljs.core.chunk_rest.call(null,seq__46136_46198__$1);
var G__46201 = c__4319__auto___46199;
var G__46202 = cljs.core.count.call(null,c__4319__auto___46199);
var G__46203 = (0);
seq__46136_46188 = G__46200;
chunk__46137_46189 = G__46201;
count__46138_46190 = G__46202;
i__46139_46191 = G__46203;
continue;
} else {
var param_46204 = cljs.core.first.call(null,seq__46136_46198__$1);
cljs.compiler.emit.call(null,param_46204);

if(cljs.core._EQ_.call(null,param_46204,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46205 = cljs.core.next.call(null,seq__46136_46198__$1);
var G__46206 = null;
var G__46207 = (0);
var G__46208 = (0);
seq__46136_46188 = G__46205;
chunk__46137_46189 = G__46206;
count__46138_46190 = G__46207;
i__46139_46191 = G__46208;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__46209 = cljs.core.seq.call(null,params);
var chunk__46210 = null;
var count__46211 = (0);
var i__46212 = (0);
while(true){
if((i__46212 < count__46211)){
var param = cljs.core._nth.call(null,chunk__46210,i__46212);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46213 = seq__46209;
var G__46214 = chunk__46210;
var G__46215 = count__46211;
var G__46216 = (i__46212 + (1));
seq__46209 = G__46213;
chunk__46210 = G__46214;
count__46211 = G__46215;
i__46212 = G__46216;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46209);
if(temp__5457__auto__){
var seq__46209__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46209__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__46209__$1);
var G__46217 = cljs.core.chunk_rest.call(null,seq__46209__$1);
var G__46218 = c__4319__auto__;
var G__46219 = cljs.core.count.call(null,c__4319__auto__);
var G__46220 = (0);
seq__46209 = G__46217;
chunk__46210 = G__46218;
count__46211 = G__46219;
i__46212 = G__46220;
continue;
} else {
var param = cljs.core.first.call(null,seq__46209__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46221 = cljs.core.next.call(null,seq__46209__$1);
var G__46222 = null;
var G__46223 = (0);
var G__46224 = (0);
seq__46209 = G__46221;
chunk__46210 = G__46222;
count__46211 = G__46223;
i__46212 = G__46224;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__46225){
var map__46226 = p__46225;
var map__46226__$1 = ((((!((map__46226 == null)))?(((((map__46226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46226):map__46226);
var type = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__46226__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__46228){
var map__46229 = p__46228;
var map__46229__$1 = ((((!((map__46229 == null)))?(((((map__46229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46229):map__46229);
var f = map__46229__$1;
var type = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__46229__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_46239__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_46240 = cljs.compiler.munge.call(null,name_46239__$1);
var delegate_name_46241 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_46240),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_46241," = function (");

var seq__46231_46242 = cljs.core.seq.call(null,params);
var chunk__46232_46243 = null;
var count__46233_46244 = (0);
var i__46234_46245 = (0);
while(true){
if((i__46234_46245 < count__46233_46244)){
var param_46246 = cljs.core._nth.call(null,chunk__46232_46243,i__46234_46245);
cljs.compiler.emit.call(null,param_46246);

if(cljs.core._EQ_.call(null,param_46246,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46247 = seq__46231_46242;
var G__46248 = chunk__46232_46243;
var G__46249 = count__46233_46244;
var G__46250 = (i__46234_46245 + (1));
seq__46231_46242 = G__46247;
chunk__46232_46243 = G__46248;
count__46233_46244 = G__46249;
i__46234_46245 = G__46250;
continue;
} else {
var temp__5457__auto___46251 = cljs.core.seq.call(null,seq__46231_46242);
if(temp__5457__auto___46251){
var seq__46231_46252__$1 = temp__5457__auto___46251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46231_46252__$1)){
var c__4319__auto___46253 = cljs.core.chunk_first.call(null,seq__46231_46252__$1);
var G__46254 = cljs.core.chunk_rest.call(null,seq__46231_46252__$1);
var G__46255 = c__4319__auto___46253;
var G__46256 = cljs.core.count.call(null,c__4319__auto___46253);
var G__46257 = (0);
seq__46231_46242 = G__46254;
chunk__46232_46243 = G__46255;
count__46233_46244 = G__46256;
i__46234_46245 = G__46257;
continue;
} else {
var param_46258 = cljs.core.first.call(null,seq__46231_46252__$1);
cljs.compiler.emit.call(null,param_46258);

if(cljs.core._EQ_.call(null,param_46258,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46259 = cljs.core.next.call(null,seq__46231_46252__$1);
var G__46260 = null;
var G__46261 = (0);
var G__46262 = (0);
seq__46231_46242 = G__46259;
chunk__46232_46243 = G__46260;
count__46233_46244 = G__46261;
i__46234_46245 = G__46262;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_46240," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_46263 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_46263,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_46241,".call(this,");

var seq__46235_46264 = cljs.core.seq.call(null,params);
var chunk__46236_46265 = null;
var count__46237_46266 = (0);
var i__46238_46267 = (0);
while(true){
if((i__46238_46267 < count__46237_46266)){
var param_46268 = cljs.core._nth.call(null,chunk__46236_46265,i__46238_46267);
cljs.compiler.emit.call(null,param_46268);

if(cljs.core._EQ_.call(null,param_46268,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46269 = seq__46235_46264;
var G__46270 = chunk__46236_46265;
var G__46271 = count__46237_46266;
var G__46272 = (i__46238_46267 + (1));
seq__46235_46264 = G__46269;
chunk__46236_46265 = G__46270;
count__46237_46266 = G__46271;
i__46238_46267 = G__46272;
continue;
} else {
var temp__5457__auto___46273 = cljs.core.seq.call(null,seq__46235_46264);
if(temp__5457__auto___46273){
var seq__46235_46274__$1 = temp__5457__auto___46273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46235_46274__$1)){
var c__4319__auto___46275 = cljs.core.chunk_first.call(null,seq__46235_46274__$1);
var G__46276 = cljs.core.chunk_rest.call(null,seq__46235_46274__$1);
var G__46277 = c__4319__auto___46275;
var G__46278 = cljs.core.count.call(null,c__4319__auto___46275);
var G__46279 = (0);
seq__46235_46264 = G__46276;
chunk__46236_46265 = G__46277;
count__46237_46266 = G__46278;
i__46238_46267 = G__46279;
continue;
} else {
var param_46280 = cljs.core.first.call(null,seq__46235_46274__$1);
cljs.compiler.emit.call(null,param_46280);

if(cljs.core._EQ_.call(null,param_46280,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__46281 = cljs.core.next.call(null,seq__46235_46274__$1);
var G__46282 = null;
var G__46283 = (0);
var G__46284 = (0);
seq__46235_46264 = G__46281;
chunk__46236_46265 = G__46282;
count__46237_46266 = G__46283;
i__46238_46267 = G__46284;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_46240,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_46240,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_46239__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_46240,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_46241,";");

cljs.compiler.emitln.call(null,"return ",mname_46240,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__46288){
var map__46289 = p__46288;
var map__46289__$1 = ((((!((map__46289 == null)))?(((((map__46289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46289):map__46289);
var name = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__46285_SHARP_){
var and__3911__auto__ = p1__46285_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__46285_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_46324__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_46325 = cljs.compiler.munge.call(null,name_46324__$1);
var maxparams_46326 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_46327 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_46324__$1,mname_46325,maxparams_46326,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_46325),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_46324__$1,mname_46325,maxparams_46326,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_46328 = cljs.core.sort_by.call(null,((function (name_46324__$1,mname_46325,maxparams_46326,mmap_46327,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__46286_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46286_SHARP_)));
});})(name_46324__$1,mname_46325,maxparams_46326,mmap_46327,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_46327));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_46325," = null;");

var seq__46291_46331 = cljs.core.seq.call(null,ms_46328);
var chunk__46292_46332 = null;
var count__46293_46333 = (0);
var i__46294_46334 = (0);
while(true){
if((i__46294_46334 < count__46293_46333)){
var vec__46295_46335 = cljs.core._nth.call(null,chunk__46292_46332,i__46294_46334);
var n_46336 = cljs.core.nth.call(null,vec__46295_46335,(0),null);
var meth_46337 = cljs.core.nth.call(null,vec__46295_46335,(1),null);
cljs.compiler.emits.call(null,"var ",n_46336," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46337))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_46337);
} else {
cljs.compiler.emit_fn_method.call(null,meth_46337);
}

cljs.compiler.emitln.call(null,";");


var G__46338 = seq__46291_46331;
var G__46339 = chunk__46292_46332;
var G__46340 = count__46293_46333;
var G__46341 = (i__46294_46334 + (1));
seq__46291_46331 = G__46338;
chunk__46292_46332 = G__46339;
count__46293_46333 = G__46340;
i__46294_46334 = G__46341;
continue;
} else {
var temp__5457__auto___46342 = cljs.core.seq.call(null,seq__46291_46331);
if(temp__5457__auto___46342){
var seq__46291_46343__$1 = temp__5457__auto___46342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46291_46343__$1)){
var c__4319__auto___46344 = cljs.core.chunk_first.call(null,seq__46291_46343__$1);
var G__46345 = cljs.core.chunk_rest.call(null,seq__46291_46343__$1);
var G__46346 = c__4319__auto___46344;
var G__46347 = cljs.core.count.call(null,c__4319__auto___46344);
var G__46348 = (0);
seq__46291_46331 = G__46345;
chunk__46292_46332 = G__46346;
count__46293_46333 = G__46347;
i__46294_46334 = G__46348;
continue;
} else {
var vec__46298_46349 = cljs.core.first.call(null,seq__46291_46343__$1);
var n_46350 = cljs.core.nth.call(null,vec__46298_46349,(0),null);
var meth_46351 = cljs.core.nth.call(null,vec__46298_46349,(1),null);
cljs.compiler.emits.call(null,"var ",n_46350," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46351))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_46351);
} else {
cljs.compiler.emit_fn_method.call(null,meth_46351);
}

cljs.compiler.emitln.call(null,";");


var G__46352 = cljs.core.next.call(null,seq__46291_46343__$1);
var G__46353 = null;
var G__46354 = (0);
var G__46355 = (0);
seq__46291_46331 = G__46352;
chunk__46292_46332 = G__46353;
count__46293_46333 = G__46354;
i__46294_46334 = G__46355;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_46325," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_46326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_46326)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_46326));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__46301_46356 = cljs.core.seq.call(null,ms_46328);
var chunk__46302_46357 = null;
var count__46303_46358 = (0);
var i__46304_46359 = (0);
while(true){
if((i__46304_46359 < count__46303_46358)){
var vec__46305_46360 = cljs.core._nth.call(null,chunk__46302_46357,i__46304_46359);
var n_46361 = cljs.core.nth.call(null,vec__46305_46360,(0),null);
var meth_46362 = cljs.core.nth.call(null,vec__46305_46360,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46362))){
cljs.compiler.emitln.call(null,"default:");

var restarg_46363 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_46363," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_46364 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_46363," = new cljs.core.IndexedSeq(",a_46364,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_46361,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_46326)),(((cljs.core.count.call(null,maxparams_46326) > (1)))?", ":null),restarg_46363,");");
} else {
var pcnt_46365 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46362));
cljs.compiler.emitln.call(null,"case ",pcnt_46365,":");

cljs.compiler.emitln.call(null,"return ",n_46361,".call(this",(((pcnt_46365 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_46365,maxparams_46326)),null,(1),null)),(2),null))),");");
}


var G__46366 = seq__46301_46356;
var G__46367 = chunk__46302_46357;
var G__46368 = count__46303_46358;
var G__46369 = (i__46304_46359 + (1));
seq__46301_46356 = G__46366;
chunk__46302_46357 = G__46367;
count__46303_46358 = G__46368;
i__46304_46359 = G__46369;
continue;
} else {
var temp__5457__auto___46370 = cljs.core.seq.call(null,seq__46301_46356);
if(temp__5457__auto___46370){
var seq__46301_46371__$1 = temp__5457__auto___46370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46301_46371__$1)){
var c__4319__auto___46372 = cljs.core.chunk_first.call(null,seq__46301_46371__$1);
var G__46373 = cljs.core.chunk_rest.call(null,seq__46301_46371__$1);
var G__46374 = c__4319__auto___46372;
var G__46375 = cljs.core.count.call(null,c__4319__auto___46372);
var G__46376 = (0);
seq__46301_46356 = G__46373;
chunk__46302_46357 = G__46374;
count__46303_46358 = G__46375;
i__46304_46359 = G__46376;
continue;
} else {
var vec__46308_46377 = cljs.core.first.call(null,seq__46301_46371__$1);
var n_46378 = cljs.core.nth.call(null,vec__46308_46377,(0),null);
var meth_46379 = cljs.core.nth.call(null,vec__46308_46377,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46379))){
cljs.compiler.emitln.call(null,"default:");

var restarg_46380 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_46380," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_46381 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_46380," = new cljs.core.IndexedSeq(",a_46381,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_46378,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_46326)),(((cljs.core.count.call(null,maxparams_46326) > (1)))?", ":null),restarg_46380,");");
} else {
var pcnt_46382 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46379));
cljs.compiler.emitln.call(null,"case ",pcnt_46382,":");

cljs.compiler.emitln.call(null,"return ",n_46378,".call(this",(((pcnt_46382 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_46382,maxparams_46326)),null,(1),null)),(2),null))),");");
}


var G__46383 = cljs.core.next.call(null,seq__46301_46371__$1);
var G__46384 = null;
var G__46385 = (0);
var G__46386 = (0);
seq__46301_46356 = G__46383;
chunk__46302_46357 = G__46384;
count__46303_46358 = G__46385;
i__46304_46359 = G__46386;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_46325,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_46325,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_46324__$1,mname_46325,maxparams_46326,mmap_46327,ms_46328,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__46287_SHARP_){
var vec__46311 = p1__46287_SHARP_;
var n = cljs.core.nth.call(null,vec__46311,(0),null);
var m = cljs.core.nth.call(null,vec__46311,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_46324__$1,mname_46325,maxparams_46326,mmap_46327,ms_46328,loop_locals,map__46289,map__46289__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_46328),".cljs$lang$applyTo;");
} else {
}

var seq__46314_46387 = cljs.core.seq.call(null,ms_46328);
var chunk__46315_46388 = null;
var count__46316_46389 = (0);
var i__46317_46390 = (0);
while(true){
if((i__46317_46390 < count__46316_46389)){
var vec__46318_46391 = cljs.core._nth.call(null,chunk__46315_46388,i__46317_46390);
var n_46392 = cljs.core.nth.call(null,vec__46318_46391,(0),null);
var meth_46393 = cljs.core.nth.call(null,vec__46318_46391,(1),null);
var c_46394 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46393));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46393))){
cljs.compiler.emitln.call(null,mname_46325,".cljs$core$IFn$_invoke$arity$variadic = ",n_46392,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_46325,".cljs$core$IFn$_invoke$arity$",c_46394," = ",n_46392,";");
}


var G__46396 = seq__46314_46387;
var G__46397 = chunk__46315_46388;
var G__46398 = count__46316_46389;
var G__46399 = (i__46317_46390 + (1));
seq__46314_46387 = G__46396;
chunk__46315_46388 = G__46397;
count__46316_46389 = G__46398;
i__46317_46390 = G__46399;
continue;
} else {
var temp__5457__auto___46400 = cljs.core.seq.call(null,seq__46314_46387);
if(temp__5457__auto___46400){
var seq__46314_46401__$1 = temp__5457__auto___46400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46314_46401__$1)){
var c__4319__auto___46402 = cljs.core.chunk_first.call(null,seq__46314_46401__$1);
var G__46403 = cljs.core.chunk_rest.call(null,seq__46314_46401__$1);
var G__46404 = c__4319__auto___46402;
var G__46405 = cljs.core.count.call(null,c__4319__auto___46402);
var G__46406 = (0);
seq__46314_46387 = G__46403;
chunk__46315_46388 = G__46404;
count__46316_46389 = G__46405;
i__46317_46390 = G__46406;
continue;
} else {
var vec__46321_46407 = cljs.core.first.call(null,seq__46314_46401__$1);
var n_46408 = cljs.core.nth.call(null,vec__46321_46407,(0),null);
var meth_46409 = cljs.core.nth.call(null,vec__46321_46407,(1),null);
var c_46410 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_46409));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_46409))){
cljs.compiler.emitln.call(null,mname_46325,".cljs$core$IFn$_invoke$arity$variadic = ",n_46408,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_46325,".cljs$core$IFn$_invoke$arity$",c_46410," = ",n_46408,";");
}


var G__46412 = cljs.core.next.call(null,seq__46314_46401__$1);
var G__46413 = null;
var G__46414 = (0);
var G__46415 = (0);
seq__46314_46387 = G__46412;
chunk__46315_46388 = G__46413;
count__46316_46389 = G__46414;
i__46317_46390 = G__46415;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_46325,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__46416){
var map__46417 = p__46416;
var map__46417__$1 = ((((!((map__46417 == null)))?(((((map__46417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46417):map__46417);
var statements = cljs.core.get.call(null,map__46417__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__46417__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__46417__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__46419_46425 = cljs.core.seq.call(null,statements);
var chunk__46420_46426 = null;
var count__46421_46427 = (0);
var i__46422_46428 = (0);
while(true){
if((i__46422_46428 < count__46421_46427)){
var s_46429 = cljs.core._nth.call(null,chunk__46420_46426,i__46422_46428);
cljs.compiler.emitln.call(null,s_46429);


var G__46430 = seq__46419_46425;
var G__46431 = chunk__46420_46426;
var G__46432 = count__46421_46427;
var G__46433 = (i__46422_46428 + (1));
seq__46419_46425 = G__46430;
chunk__46420_46426 = G__46431;
count__46421_46427 = G__46432;
i__46422_46428 = G__46433;
continue;
} else {
var temp__5457__auto___46434 = cljs.core.seq.call(null,seq__46419_46425);
if(temp__5457__auto___46434){
var seq__46419_46435__$1 = temp__5457__auto___46434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46419_46435__$1)){
var c__4319__auto___46436 = cljs.core.chunk_first.call(null,seq__46419_46435__$1);
var G__46437 = cljs.core.chunk_rest.call(null,seq__46419_46435__$1);
var G__46438 = c__4319__auto___46436;
var G__46439 = cljs.core.count.call(null,c__4319__auto___46436);
var G__46440 = (0);
seq__46419_46425 = G__46437;
chunk__46420_46426 = G__46438;
count__46421_46427 = G__46439;
i__46422_46428 = G__46440;
continue;
} else {
var s_46441 = cljs.core.first.call(null,seq__46419_46435__$1);
cljs.compiler.emitln.call(null,s_46441);


var G__46442 = cljs.core.next.call(null,seq__46419_46435__$1);
var G__46443 = null;
var G__46444 = (0);
var G__46445 = (0);
seq__46419_46425 = G__46442;
chunk__46420_46426 = G__46443;
count__46421_46427 = G__46444;
i__46422_46428 = G__46445;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__46446){
var map__46447 = p__46446;
var map__46447__$1 = ((((!((map__46447 == null)))?(((((map__46447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46447):map__46447);
var env = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__46452,is_loop){
var map__46453 = p__46452;
var map__46453__$1 = ((((!((map__46453 == null)))?(((((map__46453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46453):map__46453);
var bindings = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_46455_46464 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_46455_46464,context,map__46453,map__46453__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_46455_46464,context,map__46453,map__46453__$1,bindings,expr,env))
,bindings):null));

try{var seq__46456_46466 = cljs.core.seq.call(null,bindings);
var chunk__46457_46467 = null;
var count__46458_46468 = (0);
var i__46459_46469 = (0);
while(true){
if((i__46459_46469 < count__46458_46468)){
var map__46460_46470 = cljs.core._nth.call(null,chunk__46457_46467,i__46459_46469);
var map__46460_46471__$1 = ((((!((map__46460_46470 == null)))?(((((map__46460_46470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46460_46470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46460_46470):map__46460_46470);
var binding_46472 = map__46460_46471__$1;
var init_46473 = cljs.core.get.call(null,map__46460_46471__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_46472);

cljs.compiler.emitln.call(null," = ",init_46473,";");


var G__46476 = seq__46456_46466;
var G__46477 = chunk__46457_46467;
var G__46478 = count__46458_46468;
var G__46479 = (i__46459_46469 + (1));
seq__46456_46466 = G__46476;
chunk__46457_46467 = G__46477;
count__46458_46468 = G__46478;
i__46459_46469 = G__46479;
continue;
} else {
var temp__5457__auto___46480 = cljs.core.seq.call(null,seq__46456_46466);
if(temp__5457__auto___46480){
var seq__46456_46481__$1 = temp__5457__auto___46480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46456_46481__$1)){
var c__4319__auto___46482 = cljs.core.chunk_first.call(null,seq__46456_46481__$1);
var G__46484 = cljs.core.chunk_rest.call(null,seq__46456_46481__$1);
var G__46485 = c__4319__auto___46482;
var G__46486 = cljs.core.count.call(null,c__4319__auto___46482);
var G__46487 = (0);
seq__46456_46466 = G__46484;
chunk__46457_46467 = G__46485;
count__46458_46468 = G__46486;
i__46459_46469 = G__46487;
continue;
} else {
var map__46462_46488 = cljs.core.first.call(null,seq__46456_46481__$1);
var map__46462_46489__$1 = ((((!((map__46462_46488 == null)))?(((((map__46462_46488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46462_46488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46462_46488):map__46462_46488);
var binding_46490 = map__46462_46489__$1;
var init_46491 = cljs.core.get.call(null,map__46462_46489__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_46490);

cljs.compiler.emitln.call(null," = ",init_46491,";");


var G__46492 = cljs.core.next.call(null,seq__46456_46481__$1);
var G__46493 = null;
var G__46494 = (0);
var G__46495 = (0);
seq__46456_46466 = G__46492;
chunk__46457_46467 = G__46493;
count__46458_46468 = G__46494;
i__46459_46469 = G__46495;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_46455_46464;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__46496){
var map__46497 = p__46496;
var map__46497__$1 = ((((!((map__46497 == null)))?(((((map__46497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46497):map__46497);
var frame = cljs.core.get.call(null,map__46497__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__46497__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__46497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___46499 = cljs.core.count.call(null,exprs);
var i_46500 = (0);
while(true){
if((i_46500 < n__4376__auto___46499)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_46500)," = ",exprs.call(null,i_46500),";");

var G__46501 = (i_46500 + (1));
i_46500 = G__46501;
continue;
} else {
}
break;
}

var n__4376__auto___46502 = cljs.core.count.call(null,exprs);
var i_46503 = (0);
while(true){
if((i_46503 < n__4376__auto___46502)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_46503))," = ",temps.call(null,i_46503),";");

var G__46504 = (i_46503 + (1));
i_46503 = G__46504;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__46505){
var map__46506 = p__46505;
var map__46506__$1 = ((((!((map__46506 == null)))?(((((map__46506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46506):map__46506);
var bindings = cljs.core.get.call(null,map__46506__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__46506__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__46506__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__46508_46517 = cljs.core.seq.call(null,bindings);
var chunk__46509_46518 = null;
var count__46510_46519 = (0);
var i__46511_46520 = (0);
while(true){
if((i__46511_46520 < count__46510_46519)){
var map__46512_46523 = cljs.core._nth.call(null,chunk__46509_46518,i__46511_46520);
var map__46512_46524__$1 = ((((!((map__46512_46523 == null)))?(((((map__46512_46523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46512_46523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46512_46523):map__46512_46523);
var binding_46525 = map__46512_46524__$1;
var init_46526 = cljs.core.get.call(null,map__46512_46524__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_46525)," = ",init_46526,";");


var G__46533 = seq__46508_46517;
var G__46534 = chunk__46509_46518;
var G__46535 = count__46510_46519;
var G__46536 = (i__46511_46520 + (1));
seq__46508_46517 = G__46533;
chunk__46509_46518 = G__46534;
count__46510_46519 = G__46535;
i__46511_46520 = G__46536;
continue;
} else {
var temp__5457__auto___46537 = cljs.core.seq.call(null,seq__46508_46517);
if(temp__5457__auto___46537){
var seq__46508_46539__$1 = temp__5457__auto___46537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46508_46539__$1)){
var c__4319__auto___46546 = cljs.core.chunk_first.call(null,seq__46508_46539__$1);
var G__46547 = cljs.core.chunk_rest.call(null,seq__46508_46539__$1);
var G__46548 = c__4319__auto___46546;
var G__46549 = cljs.core.count.call(null,c__4319__auto___46546);
var G__46550 = (0);
seq__46508_46517 = G__46547;
chunk__46509_46518 = G__46548;
count__46510_46519 = G__46549;
i__46511_46520 = G__46550;
continue;
} else {
var map__46514_46551 = cljs.core.first.call(null,seq__46508_46539__$1);
var map__46514_46552__$1 = ((((!((map__46514_46551 == null)))?(((((map__46514_46551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46514_46551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46514_46551):map__46514_46551);
var binding_46553 = map__46514_46552__$1;
var init_46554 = cljs.core.get.call(null,map__46514_46552__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_46553)," = ",init_46554,";");


var G__46560 = cljs.core.next.call(null,seq__46508_46539__$1);
var G__46561 = null;
var G__46562 = (0);
var G__46563 = (0);
seq__46508_46517 = G__46560;
chunk__46509_46518 = G__46561;
count__46510_46519 = G__46562;
i__46511_46520 = G__46563;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__46583){
var map__46587 = p__46583;
var map__46587__$1 = ((((!((map__46587 == null)))?(((((map__46587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46587):map__46587);
var expr = map__46587__$1;
var f = cljs.core.get.call(null,map__46587__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__46587__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__46587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__46589 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env){
return (function (p1__46581_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__46581_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env){
return (function (p1__46582_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__46582_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__46587,map__46587__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__46589,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__46589,(1),null);
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_46710 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_46710,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_46712 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_46712,args)),(((mfa_46712 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_46712,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_46713 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_46713," ? ",f__$1,fprop_46713,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_46713," ? ",f__$1,fprop_46713,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__46716){
var map__46717 = p__46716;
var map__46717__$1 = ((((!((map__46717 == null)))?(((((map__46717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46717):map__46717);
var ctor = cljs.core.get.call(null,map__46717__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__46717__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__46717__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__46720){
var map__46721 = p__46720;
var map__46721__$1 = ((((!((map__46721 == null)))?(((((map__46721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46721):map__46721);
var target = cljs.core.get.call(null,map__46721__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__46721__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__46721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__46723 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__46723__$1 = ((((!((map__46723 == null)))?(((((map__46723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46723):map__46723);
var options = cljs.core.get.call(null,map__46723__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__46723__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__46724 = options;
var map__46724__$1 = ((((!((map__46724 == null)))?(((((map__46724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46724):map__46724);
var target = cljs.core.get.call(null,map__46724__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__46724__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__46725 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__46732 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__46732__$1 = ((((!((map__46732 == null)))?(((((map__46732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46732):map__46732);
var node_libs = cljs.core.get.call(null,map__46732__$1,true);
var libs_to_load = cljs.core.get.call(null,map__46732__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__46725,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__46725,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__46734_46757 = cljs.core.seq.call(null,libs_to_load);
var chunk__46735_46758 = null;
var count__46736_46759 = (0);
var i__46737_46760 = (0);
while(true){
if((i__46737_46760 < count__46736_46759)){
var lib_46761 = cljs.core._nth.call(null,chunk__46735_46758,i__46737_46760);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_46761)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46761),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46761),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46761),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46761),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46761),"');");

}
}
}


var G__46763 = seq__46734_46757;
var G__46764 = chunk__46735_46758;
var G__46765 = count__46736_46759;
var G__46766 = (i__46737_46760 + (1));
seq__46734_46757 = G__46763;
chunk__46735_46758 = G__46764;
count__46736_46759 = G__46765;
i__46737_46760 = G__46766;
continue;
} else {
var temp__5457__auto___46767 = cljs.core.seq.call(null,seq__46734_46757);
if(temp__5457__auto___46767){
var seq__46734_46768__$1 = temp__5457__auto___46767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46734_46768__$1)){
var c__4319__auto___46769 = cljs.core.chunk_first.call(null,seq__46734_46768__$1);
var G__46770 = cljs.core.chunk_rest.call(null,seq__46734_46768__$1);
var G__46771 = c__4319__auto___46769;
var G__46772 = cljs.core.count.call(null,c__4319__auto___46769);
var G__46773 = (0);
seq__46734_46757 = G__46770;
chunk__46735_46758 = G__46771;
count__46736_46759 = G__46772;
i__46737_46760 = G__46773;
continue;
} else {
var lib_46776 = cljs.core.first.call(null,seq__46734_46768__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_46776)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46776),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46776),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_46776),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46776),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_46776),"');");

}
}
}


var G__46778 = cljs.core.next.call(null,seq__46734_46768__$1);
var G__46779 = null;
var G__46780 = (0);
var G__46781 = (0);
seq__46734_46757 = G__46778;
chunk__46735_46758 = G__46779;
count__46736_46759 = G__46780;
i__46737_46760 = G__46781;
continue;
}
} else {
}
}
break;
}

var seq__46740_46782 = cljs.core.seq.call(null,node_libs);
var chunk__46741_46783 = null;
var count__46742_46784 = (0);
var i__46743_46785 = (0);
while(true){
if((i__46743_46785 < count__46742_46784)){
var lib_46786 = cljs.core._nth.call(null,chunk__46741_46783,i__46743_46785);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_46786)," = require('",lib_46786,"');");


var G__46787 = seq__46740_46782;
var G__46788 = chunk__46741_46783;
var G__46789 = count__46742_46784;
var G__46790 = (i__46743_46785 + (1));
seq__46740_46782 = G__46787;
chunk__46741_46783 = G__46788;
count__46742_46784 = G__46789;
i__46743_46785 = G__46790;
continue;
} else {
var temp__5457__auto___46791 = cljs.core.seq.call(null,seq__46740_46782);
if(temp__5457__auto___46791){
var seq__46740_46792__$1 = temp__5457__auto___46791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46740_46792__$1)){
var c__4319__auto___46793 = cljs.core.chunk_first.call(null,seq__46740_46792__$1);
var G__46794 = cljs.core.chunk_rest.call(null,seq__46740_46792__$1);
var G__46795 = c__4319__auto___46793;
var G__46796 = cljs.core.count.call(null,c__4319__auto___46793);
var G__46797 = (0);
seq__46740_46782 = G__46794;
chunk__46741_46783 = G__46795;
count__46742_46784 = G__46796;
i__46743_46785 = G__46797;
continue;
} else {
var lib_46798 = cljs.core.first.call(null,seq__46740_46792__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_46798)," = require('",lib_46798,"');");


var G__46799 = cljs.core.next.call(null,seq__46740_46792__$1);
var G__46800 = null;
var G__46801 = (0);
var G__46802 = (0);
seq__46740_46782 = G__46799;
chunk__46741_46783 = G__46800;
count__46742_46784 = G__46801;
i__46743_46785 = G__46802;
continue;
}
} else {
}
}
break;
}

var seq__46744_46803 = cljs.core.seq.call(null,global_exports_libs);
var chunk__46745_46804 = null;
var count__46746_46805 = (0);
var i__46747_46806 = (0);
while(true){
if((i__46747_46806 < count__46746_46805)){
var lib_46808 = cljs.core._nth.call(null,chunk__46745_46804,i__46747_46806);
var map__46748_46810 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_46808));
var map__46748_46811__$1 = ((((!((map__46748_46810 == null)))?(((((map__46748_46810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46748_46810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46748_46810):map__46748_46810);
var global_exports_46812 = cljs.core.get.call(null,map__46748_46811__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_46808)," = goog.global.",cljs.core.get.call(null,global_exports_46812,cljs.core.symbol.call(null,lib_46808)),";");


var G__46817 = seq__46744_46803;
var G__46818 = chunk__46745_46804;
var G__46819 = count__46746_46805;
var G__46820 = (i__46747_46806 + (1));
seq__46744_46803 = G__46817;
chunk__46745_46804 = G__46818;
count__46746_46805 = G__46819;
i__46747_46806 = G__46820;
continue;
} else {
var temp__5457__auto___46821 = cljs.core.seq.call(null,seq__46744_46803);
if(temp__5457__auto___46821){
var seq__46744_46822__$1 = temp__5457__auto___46821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46744_46822__$1)){
var c__4319__auto___46823 = cljs.core.chunk_first.call(null,seq__46744_46822__$1);
var G__46824 = cljs.core.chunk_rest.call(null,seq__46744_46822__$1);
var G__46825 = c__4319__auto___46823;
var G__46826 = cljs.core.count.call(null,c__4319__auto___46823);
var G__46827 = (0);
seq__46744_46803 = G__46824;
chunk__46745_46804 = G__46825;
count__46746_46805 = G__46826;
i__46747_46806 = G__46827;
continue;
} else {
var lib_46831 = cljs.core.first.call(null,seq__46744_46822__$1);
var map__46750_46832 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_46831));
var map__46750_46833__$1 = ((((!((map__46750_46832 == null)))?(((((map__46750_46832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46750_46832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46750_46832):map__46750_46832);
var global_exports_46834 = cljs.core.get.call(null,map__46750_46833__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_46831)," = goog.global.",cljs.core.get.call(null,global_exports_46834,cljs.core.symbol.call(null,lib_46831)),";");


var G__46835 = cljs.core.next.call(null,seq__46744_46822__$1);
var G__46836 = null;
var G__46837 = (0);
var G__46838 = (0);
seq__46744_46803 = G__46835;
chunk__46745_46804 = G__46836;
count__46746_46805 = G__46837;
i__46747_46806 = G__46838;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__46852){
var map__46853 = p__46852;
var map__46853__$1 = ((((!((map__46853 == null)))?(((((map__46853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46853):map__46853);
var name = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__46853__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__46875){
var map__46876 = p__46875;
var map__46876__$1 = ((((!((map__46876 == null)))?(((((map__46876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46876):map__46876);
var name = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__46876__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__46879){
var map__46880 = p__46879;
var map__46880__$1 = ((((!((map__46880 == null)))?(((((map__46880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46880):map__46880);
var t = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__46882_46900 = cljs.core.seq.call(null,protocols);
var chunk__46883_46901 = null;
var count__46884_46902 = (0);
var i__46885_46903 = (0);
while(true){
if((i__46885_46903 < count__46884_46902)){
var protocol_46904 = cljs.core._nth.call(null,chunk__46883_46901,i__46885_46903);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46904)].join('')),"}");


var G__46905 = seq__46882_46900;
var G__46906 = chunk__46883_46901;
var G__46907 = count__46884_46902;
var G__46908 = (i__46885_46903 + (1));
seq__46882_46900 = G__46905;
chunk__46883_46901 = G__46906;
count__46884_46902 = G__46907;
i__46885_46903 = G__46908;
continue;
} else {
var temp__5457__auto___46909 = cljs.core.seq.call(null,seq__46882_46900);
if(temp__5457__auto___46909){
var seq__46882_46910__$1 = temp__5457__auto___46909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46882_46910__$1)){
var c__4319__auto___46911 = cljs.core.chunk_first.call(null,seq__46882_46910__$1);
var G__46912 = cljs.core.chunk_rest.call(null,seq__46882_46910__$1);
var G__46913 = c__4319__auto___46911;
var G__46914 = cljs.core.count.call(null,c__4319__auto___46911);
var G__46915 = (0);
seq__46882_46900 = G__46912;
chunk__46883_46901 = G__46913;
count__46884_46902 = G__46914;
i__46885_46903 = G__46915;
continue;
} else {
var protocol_46916 = cljs.core.first.call(null,seq__46882_46910__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_46916)].join('')),"}");


var G__46917 = cljs.core.next.call(null,seq__46882_46910__$1);
var G__46918 = null;
var G__46919 = (0);
var G__46920 = (0);
seq__46882_46900 = G__46917;
chunk__46883_46901 = G__46918;
count__46884_46902 = G__46919;
i__46885_46903 = G__46920;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__46886_46921 = cljs.core.seq.call(null,fields__$1);
var chunk__46887_46922 = null;
var count__46888_46923 = (0);
var i__46889_46924 = (0);
while(true){
if((i__46889_46924 < count__46888_46923)){
var fld_46925 = cljs.core._nth.call(null,chunk__46887_46922,i__46889_46924);
cljs.compiler.emitln.call(null,"this.",fld_46925," = ",fld_46925,";");


var G__46926 = seq__46886_46921;
var G__46927 = chunk__46887_46922;
var G__46928 = count__46888_46923;
var G__46929 = (i__46889_46924 + (1));
seq__46886_46921 = G__46926;
chunk__46887_46922 = G__46927;
count__46888_46923 = G__46928;
i__46889_46924 = G__46929;
continue;
} else {
var temp__5457__auto___46930 = cljs.core.seq.call(null,seq__46886_46921);
if(temp__5457__auto___46930){
var seq__46886_46931__$1 = temp__5457__auto___46930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46886_46931__$1)){
var c__4319__auto___46932 = cljs.core.chunk_first.call(null,seq__46886_46931__$1);
var G__46933 = cljs.core.chunk_rest.call(null,seq__46886_46931__$1);
var G__46934 = c__4319__auto___46932;
var G__46935 = cljs.core.count.call(null,c__4319__auto___46932);
var G__46936 = (0);
seq__46886_46921 = G__46933;
chunk__46887_46922 = G__46934;
count__46888_46923 = G__46935;
i__46889_46924 = G__46936;
continue;
} else {
var fld_46937 = cljs.core.first.call(null,seq__46886_46931__$1);
cljs.compiler.emitln.call(null,"this.",fld_46937," = ",fld_46937,";");


var G__46938 = cljs.core.next.call(null,seq__46886_46931__$1);
var G__46939 = null;
var G__46940 = (0);
var G__46941 = (0);
seq__46886_46921 = G__46938;
chunk__46887_46922 = G__46939;
count__46888_46923 = G__46940;
i__46889_46924 = G__46941;
continue;
}
} else {
}
}
break;
}

var seq__46890_46942 = cljs.core.seq.call(null,pmasks);
var chunk__46891_46943 = null;
var count__46892_46944 = (0);
var i__46893_46945 = (0);
while(true){
if((i__46893_46945 < count__46892_46944)){
var vec__46894_46946 = cljs.core._nth.call(null,chunk__46891_46943,i__46893_46945);
var pno_46947 = cljs.core.nth.call(null,vec__46894_46946,(0),null);
var pmask_46948 = cljs.core.nth.call(null,vec__46894_46946,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46947,"$ = ",pmask_46948,";");


var G__46949 = seq__46890_46942;
var G__46950 = chunk__46891_46943;
var G__46951 = count__46892_46944;
var G__46952 = (i__46893_46945 + (1));
seq__46890_46942 = G__46949;
chunk__46891_46943 = G__46950;
count__46892_46944 = G__46951;
i__46893_46945 = G__46952;
continue;
} else {
var temp__5457__auto___46953 = cljs.core.seq.call(null,seq__46890_46942);
if(temp__5457__auto___46953){
var seq__46890_46954__$1 = temp__5457__auto___46953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46890_46954__$1)){
var c__4319__auto___46955 = cljs.core.chunk_first.call(null,seq__46890_46954__$1);
var G__46956 = cljs.core.chunk_rest.call(null,seq__46890_46954__$1);
var G__46957 = c__4319__auto___46955;
var G__46958 = cljs.core.count.call(null,c__4319__auto___46955);
var G__46959 = (0);
seq__46890_46942 = G__46956;
chunk__46891_46943 = G__46957;
count__46892_46944 = G__46958;
i__46893_46945 = G__46959;
continue;
} else {
var vec__46897_46960 = cljs.core.first.call(null,seq__46890_46954__$1);
var pno_46961 = cljs.core.nth.call(null,vec__46897_46960,(0),null);
var pmask_46962 = cljs.core.nth.call(null,vec__46897_46960,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_46961,"$ = ",pmask_46962,";");


var G__46965 = cljs.core.next.call(null,seq__46890_46954__$1);
var G__46966 = null;
var G__46967 = (0);
var G__46968 = (0);
seq__46890_46942 = G__46965;
chunk__46891_46943 = G__46966;
count__46892_46944 = G__46967;
i__46893_46945 = G__46968;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__46971){
var map__46972 = p__46971;
var map__46972__$1 = ((((!((map__46972 == null)))?(((((map__46972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46972):map__46972);
var t = cljs.core.get.call(null,map__46972__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__46972__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__46972__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__46972__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__46972__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__46974_46996 = cljs.core.seq.call(null,protocols);
var chunk__46975_46997 = null;
var count__46976_46998 = (0);
var i__46977_46999 = (0);
while(true){
if((i__46977_46999 < count__46976_46998)){
var protocol_47000 = cljs.core._nth.call(null,chunk__46975_46997,i__46977_46999);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_47000)].join('')),"}");


var G__47001 = seq__46974_46996;
var G__47002 = chunk__46975_46997;
var G__47003 = count__46976_46998;
var G__47004 = (i__46977_46999 + (1));
seq__46974_46996 = G__47001;
chunk__46975_46997 = G__47002;
count__46976_46998 = G__47003;
i__46977_46999 = G__47004;
continue;
} else {
var temp__5457__auto___47005 = cljs.core.seq.call(null,seq__46974_46996);
if(temp__5457__auto___47005){
var seq__46974_47006__$1 = temp__5457__auto___47005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46974_47006__$1)){
var c__4319__auto___47007 = cljs.core.chunk_first.call(null,seq__46974_47006__$1);
var G__47008 = cljs.core.chunk_rest.call(null,seq__46974_47006__$1);
var G__47009 = c__4319__auto___47007;
var G__47010 = cljs.core.count.call(null,c__4319__auto___47007);
var G__47011 = (0);
seq__46974_46996 = G__47008;
chunk__46975_46997 = G__47009;
count__46976_46998 = G__47010;
i__46977_46999 = G__47011;
continue;
} else {
var protocol_47012 = cljs.core.first.call(null,seq__46974_47006__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_47012)].join('')),"}");


var G__47013 = cljs.core.next.call(null,seq__46974_47006__$1);
var G__47014 = null;
var G__47015 = (0);
var G__47016 = (0);
seq__46974_46996 = G__47013;
chunk__46975_46997 = G__47014;
count__46976_46998 = G__47015;
i__46977_46999 = G__47016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__46978_47017 = cljs.core.seq.call(null,fields__$1);
var chunk__46979_47018 = null;
var count__46980_47019 = (0);
var i__46981_47020 = (0);
while(true){
if((i__46981_47020 < count__46980_47019)){
var fld_47021 = cljs.core._nth.call(null,chunk__46979_47018,i__46981_47020);
cljs.compiler.emitln.call(null,"this.",fld_47021," = ",fld_47021,";");


var G__47022 = seq__46978_47017;
var G__47023 = chunk__46979_47018;
var G__47024 = count__46980_47019;
var G__47025 = (i__46981_47020 + (1));
seq__46978_47017 = G__47022;
chunk__46979_47018 = G__47023;
count__46980_47019 = G__47024;
i__46981_47020 = G__47025;
continue;
} else {
var temp__5457__auto___47026 = cljs.core.seq.call(null,seq__46978_47017);
if(temp__5457__auto___47026){
var seq__46978_47027__$1 = temp__5457__auto___47026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46978_47027__$1)){
var c__4319__auto___47028 = cljs.core.chunk_first.call(null,seq__46978_47027__$1);
var G__47029 = cljs.core.chunk_rest.call(null,seq__46978_47027__$1);
var G__47030 = c__4319__auto___47028;
var G__47031 = cljs.core.count.call(null,c__4319__auto___47028);
var G__47032 = (0);
seq__46978_47017 = G__47029;
chunk__46979_47018 = G__47030;
count__46980_47019 = G__47031;
i__46981_47020 = G__47032;
continue;
} else {
var fld_47033 = cljs.core.first.call(null,seq__46978_47027__$1);
cljs.compiler.emitln.call(null,"this.",fld_47033," = ",fld_47033,";");


var G__47034 = cljs.core.next.call(null,seq__46978_47027__$1);
var G__47035 = null;
var G__47036 = (0);
var G__47037 = (0);
seq__46978_47017 = G__47034;
chunk__46979_47018 = G__47035;
count__46980_47019 = G__47036;
i__46981_47020 = G__47037;
continue;
}
} else {
}
}
break;
}

var seq__46984_47038 = cljs.core.seq.call(null,pmasks);
var chunk__46985_47039 = null;
var count__46986_47040 = (0);
var i__46987_47041 = (0);
while(true){
if((i__46987_47041 < count__46986_47040)){
var vec__46988_47042 = cljs.core._nth.call(null,chunk__46985_47039,i__46987_47041);
var pno_47043 = cljs.core.nth.call(null,vec__46988_47042,(0),null);
var pmask_47044 = cljs.core.nth.call(null,vec__46988_47042,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_47043,"$ = ",pmask_47044,";");


var G__47045 = seq__46984_47038;
var G__47046 = chunk__46985_47039;
var G__47047 = count__46986_47040;
var G__47048 = (i__46987_47041 + (1));
seq__46984_47038 = G__47045;
chunk__46985_47039 = G__47046;
count__46986_47040 = G__47047;
i__46987_47041 = G__47048;
continue;
} else {
var temp__5457__auto___47049 = cljs.core.seq.call(null,seq__46984_47038);
if(temp__5457__auto___47049){
var seq__46984_47050__$1 = temp__5457__auto___47049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46984_47050__$1)){
var c__4319__auto___47051 = cljs.core.chunk_first.call(null,seq__46984_47050__$1);
var G__47052 = cljs.core.chunk_rest.call(null,seq__46984_47050__$1);
var G__47053 = c__4319__auto___47051;
var G__47054 = cljs.core.count.call(null,c__4319__auto___47051);
var G__47055 = (0);
seq__46984_47038 = G__47052;
chunk__46985_47039 = G__47053;
count__46986_47040 = G__47054;
i__46987_47041 = G__47055;
continue;
} else {
var vec__46993_47056 = cljs.core.first.call(null,seq__46984_47050__$1);
var pno_47057 = cljs.core.nth.call(null,vec__46993_47056,(0),null);
var pmask_47058 = cljs.core.nth.call(null,vec__46993_47056,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_47057,"$ = ",pmask_47058,";");


var G__47059 = cljs.core.next.call(null,seq__46984_47050__$1);
var G__47060 = null;
var G__47061 = (0);
var G__47062 = (0);
seq__46984_47038 = G__47059;
chunk__46985_47039 = G__47060;
count__46986_47040 = G__47061;
i__46987_47041 = G__47062;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__47063){
var map__47064 = p__47063;
var map__47064__$1 = ((((!((map__47064 == null)))?(((((map__47064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47064):map__47064);
var target = cljs.core.get.call(null,map__47064__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__47064__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__47064__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__47064__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__47064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__47066){
var map__47067 = p__47066;
var map__47067__$1 = ((((!((map__47067 == null)))?(((((map__47067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47067):map__47067);
var op = cljs.core.get.call(null,map__47067__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__47067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__47067__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__47067__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__47067__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11055__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11055__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__47072 = cljs.core.seq.call(null,table);
var chunk__47073 = null;
var count__47074 = (0);
var i__47075 = (0);
while(true){
if((i__47075 < count__47074)){
var vec__47076 = cljs.core._nth.call(null,chunk__47073,i__47075);
var sym = cljs.core.nth.call(null,vec__47076,(0),null);
var value = cljs.core.nth.call(null,vec__47076,(1),null);
var ns_47089 = cljs.core.namespace.call(null,sym);
var name_47090 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__47091 = seq__47072;
var G__47092 = chunk__47073;
var G__47093 = count__47074;
var G__47094 = (i__47075 + (1));
seq__47072 = G__47091;
chunk__47073 = G__47092;
count__47074 = G__47093;
i__47075 = G__47094;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47072);
if(temp__5457__auto__){
var seq__47072__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47072__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__47072__$1);
var G__47095 = cljs.core.chunk_rest.call(null,seq__47072__$1);
var G__47096 = c__4319__auto__;
var G__47097 = cljs.core.count.call(null,c__4319__auto__);
var G__47098 = (0);
seq__47072 = G__47095;
chunk__47073 = G__47096;
count__47074 = G__47097;
i__47075 = G__47098;
continue;
} else {
var vec__47082 = cljs.core.first.call(null,seq__47072__$1);
var sym = cljs.core.nth.call(null,vec__47082,(0),null);
var value = cljs.core.nth.call(null,vec__47082,(1),null);
var ns_47100 = cljs.core.namespace.call(null,sym);
var name_47101 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__47102 = cljs.core.next.call(null,seq__47072__$1);
var G__47103 = null;
var G__47104 = (0);
var G__47105 = (0);
seq__47072 = G__47102;
chunk__47073 = G__47103;
count__47074 = G__47104;
i__47075 = G__47105;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__47107 = arguments.length;
switch (G__47107) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_47112 = cljs.core.first.call(null,ks);
var vec__47108_47113 = cljs.core.conj.call(null,prefix,k_47112);
var top_47114 = cljs.core.nth.call(null,vec__47108_47113,(0),null);
var prefix_SINGLEQUOTE__47115 = vec__47108_47113;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_47112)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__47115) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_47114)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_47114))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__47115)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_47114);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__47115)),";");
}
} else {
}

var m_47116 = cljs.core.get.call(null,externs,k_47112);
if(cljs.core.empty_QMARK_.call(null,m_47116)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__47115,m_47116,top_level,known_externs);
}

var G__47117 = cljs.core.next.call(null,ks);
ks = G__47117;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
