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
var map__14091 = s;
var map__14091__$1 = ((((!((map__14091 == null)))?(((((map__14091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14091):map__14091);
var name = cljs.core.get.call(null,map__14091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14091__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14094 = info;
var map__14095 = G__14094;
var map__14095__$1 = ((((!((map__14095 == null)))?(((((map__14095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14095):map__14095);
var shadow = cljs.core.get.call(null,map__14095__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14094__$1 = G__14094;
while(true){
var d__$2 = d__$1;
var map__14097 = G__14094__$1;
var map__14097__$1 = ((((!((map__14097 == null)))?(((((map__14097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14097):map__14097);
var shadow__$1 = cljs.core.get.call(null,map__14097__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14099 = (d__$2 + (1));
var G__14100 = shadow__$1;
d__$1 = G__14099;
G__14094__$1 = G__14100;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14101){
var map__14102 = p__14101;
var map__14102__$1 = ((((!((map__14102 == null)))?(((((map__14102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14102):map__14102);
var name_var = map__14102__$1;
var name = cljs.core.get.call(null,map__14102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14102__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__14104 = info;
var map__14104__$1 = ((((!((map__14104 == null)))?(((((map__14104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14104):map__14104);
var ns = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14104__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__14107 = arguments.length;
switch (G__14107) {
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
var G__14109 = cp;
switch (G__14109) {
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
var seq__14111_14115 = cljs.core.seq.call(null,s);
var chunk__14112_14116 = null;
var count__14113_14117 = (0);
var i__14114_14118 = (0);
while(true){
if((i__14114_14118 < count__14113_14117)){
var c_14119 = cljs.core._nth.call(null,chunk__14112_14116,i__14114_14118);
sb.append(cljs.compiler.escape_char.call(null,c_14119));


var G__14120 = seq__14111_14115;
var G__14121 = chunk__14112_14116;
var G__14122 = count__14113_14117;
var G__14123 = (i__14114_14118 + (1));
seq__14111_14115 = G__14120;
chunk__14112_14116 = G__14121;
count__14113_14117 = G__14122;
i__14114_14118 = G__14123;
continue;
} else {
var temp__5457__auto___14124 = cljs.core.seq.call(null,seq__14111_14115);
if(temp__5457__auto___14124){
var seq__14111_14125__$1 = temp__5457__auto___14124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14111_14125__$1)){
var c__4319__auto___14126 = cljs.core.chunk_first.call(null,seq__14111_14125__$1);
var G__14127 = cljs.core.chunk_rest.call(null,seq__14111_14125__$1);
var G__14128 = c__4319__auto___14126;
var G__14129 = cljs.core.count.call(null,c__4319__auto___14126);
var G__14130 = (0);
seq__14111_14115 = G__14127;
chunk__14112_14116 = G__14128;
count__14113_14117 = G__14129;
i__14114_14118 = G__14130;
continue;
} else {
var c_14131 = cljs.core.first.call(null,seq__14111_14125__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14131));


var G__14132 = cljs.core.next.call(null,seq__14111_14125__$1);
var G__14133 = null;
var G__14134 = (0);
var G__14135 = (0);
seq__14111_14115 = G__14132;
chunk__14112_14116 = G__14133;
count__14113_14117 = G__14134;
i__14114_14118 = G__14135;
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
var val__9835__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__9835__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14136_14141 = ast;
var map__14136_14142__$1 = ((((!((map__14136_14141 == null)))?(((((map__14136_14141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14136_14141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14136_14141):map__14136_14141);
var env_14143 = cljs.core.get.call(null,map__14136_14142__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14143))){
var map__14138_14144 = env_14143;
var map__14138_14145__$1 = ((((!((map__14138_14144 == null)))?(((((map__14138_14144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14138_14144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14138_14144):map__14138_14144);
var line_14146 = cljs.core.get.call(null,map__14138_14145__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14147 = cljs.core.get.call(null,map__14138_14145__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__){
return (function (m){
var minfo = (function (){var G__14140 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__14140,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__14140;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14146 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14147)?(column_14147 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__14138_14144,map__14138_14145__$1,line_14146,column_14147,map__14136_14141,map__14136_14142__$1,env_14143,val__9835__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__9835__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14154 = arguments.length;
var i__4500__auto___14155 = (0);
while(true){
if((i__4500__auto___14155 < len__4499__auto___14154)){
args__4502__auto__.push((arguments[i__4500__auto___14155]));

var G__14156 = (i__4500__auto___14155 + (1));
i__4500__auto___14155 = G__14156;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14150_14157 = cljs.core.seq.call(null,xs);
var chunk__14151_14158 = null;
var count__14152_14159 = (0);
var i__14153_14160 = (0);
while(true){
if((i__14153_14160 < count__14152_14159)){
var x_14161 = cljs.core._nth.call(null,chunk__14151_14158,i__14153_14160);
if((x_14161 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14161)){
cljs.compiler.emit.call(null,x_14161);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14161)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14161);
} else {
if(goog.isFunction(x_14161)){
x_14161.call(null);
} else {
var s_14162 = cljs.core.print_str.call(null,x_14161);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14150_14157,chunk__14151_14158,count__14152_14159,i__14153_14160,s_14162,x_14161){
return (function (p1__14148_SHARP_){
return (p1__14148_SHARP_ + cljs.core.count.call(null,s_14162));
});})(seq__14150_14157,chunk__14151_14158,count__14152_14159,i__14153_14160,s_14162,x_14161))
);
}

cljs.core.print.call(null,s_14162);

}
}
}
}


var G__14163 = seq__14150_14157;
var G__14164 = chunk__14151_14158;
var G__14165 = count__14152_14159;
var G__14166 = (i__14153_14160 + (1));
seq__14150_14157 = G__14163;
chunk__14151_14158 = G__14164;
count__14152_14159 = G__14165;
i__14153_14160 = G__14166;
continue;
} else {
var temp__5457__auto___14167 = cljs.core.seq.call(null,seq__14150_14157);
if(temp__5457__auto___14167){
var seq__14150_14168__$1 = temp__5457__auto___14167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14150_14168__$1)){
var c__4319__auto___14169 = cljs.core.chunk_first.call(null,seq__14150_14168__$1);
var G__14170 = cljs.core.chunk_rest.call(null,seq__14150_14168__$1);
var G__14171 = c__4319__auto___14169;
var G__14172 = cljs.core.count.call(null,c__4319__auto___14169);
var G__14173 = (0);
seq__14150_14157 = G__14170;
chunk__14151_14158 = G__14171;
count__14152_14159 = G__14172;
i__14153_14160 = G__14173;
continue;
} else {
var x_14174 = cljs.core.first.call(null,seq__14150_14168__$1);
if((x_14174 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14174)){
cljs.compiler.emit.call(null,x_14174);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14174)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14174);
} else {
if(goog.isFunction(x_14174)){
x_14174.call(null);
} else {
var s_14175 = cljs.core.print_str.call(null,x_14174);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14150_14157,chunk__14151_14158,count__14152_14159,i__14153_14160,s_14175,x_14174,seq__14150_14168__$1,temp__5457__auto___14167){
return (function (p1__14148_SHARP_){
return (p1__14148_SHARP_ + cljs.core.count.call(null,s_14175));
});})(seq__14150_14157,chunk__14151_14158,count__14152_14159,i__14153_14160,s_14175,x_14174,seq__14150_14168__$1,temp__5457__auto___14167))
);
}

cljs.core.print.call(null,s_14175);

}
}
}
}


var G__14176 = cljs.core.next.call(null,seq__14150_14168__$1);
var G__14177 = null;
var G__14178 = (0);
var G__14179 = (0);
seq__14150_14157 = G__14176;
chunk__14151_14158 = G__14177;
count__14152_14159 = G__14178;
i__14153_14160 = G__14179;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq14149){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14149));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___14185 = arguments.length;
var i__4500__auto___14186 = (0);
while(true){
if((i__4500__auto___14186 < len__4499__auto___14185)){
args__4502__auto__.push((arguments[i__4500__auto___14186]));

var G__14187 = (i__4500__auto___14186 + (1));
i__4500__auto___14186 = G__14187;
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

var _STAR_flush_on_newline_STAR_14181_14188 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_14181_14188;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14182){
var map__14183 = p__14182;
var map__14183__$1 = ((((!((map__14183 == null)))?(((((map__14183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14183):map__14183);
var m = map__14183__$1;
var gen_line = cljs.core.get.call(null,map__14183__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14180){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14180));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14189_14191 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14190_14192 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14189_14191,_STAR_print_fn_STAR_14190_14192,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_14189_14191,_STAR_print_fn_STAR_14190_14192,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14190_14192;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14189_14191;
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
var vec__14193 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__14193,(0),null);
var flags = cljs.core.nth.call(null,vec__14193,(1),null);
var pattern = cljs.core.nth.call(null,vec__14193,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14197){
var map__14198 = p__14197;
var map__14198__$1 = ((((!((map__14198 == null)))?(((((map__14198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14198):map__14198);
var ast = map__14198__$1;
var info = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14198__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__14200 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__14200__$1 = ((((!((map__14200 == null)))?(((((map__14200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);
var cenv = map__14200__$1;
var options = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__14202 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__14202,cljs.analyzer.es5_allowed);
} else {
return G__14202;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__14203 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__14203,reserved);
} else {
return G__14203;
}
})();
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__14204_14205 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__14204_14206__$1 = (((G__14204_14205 instanceof cljs.core.Keyword))?G__14204_14205.fqn:null);
switch (G__14204_14206__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__14208){
var map__14209 = p__14208;
var map__14209__$1 = ((((!((map__14209 == null)))?(((((map__14209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14209):map__14209);
var arg = map__14209__$1;
var env = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__14209__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14211 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14211__$1 = ((((!((map__14211 == null)))?(((((map__14211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14211):map__14211);
var name = cljs.core.get.call(null,map__14211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__14213){
var map__14214 = p__14213;
var map__14214__$1 = ((((!((map__14214 == null)))?(((((map__14214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14214):map__14214);
var expr = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__14216_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14216_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14217){
var map__14218 = p__14217;
var map__14218__$1 = ((((!((map__14218 == null)))?(((((map__14218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14218):map__14218);
var env = cljs.core.get.call(null,map__14218__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__14218__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__14218__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14220){
var map__14221 = p__14220;
var map__14221__$1 = ((((!((map__14221 == null)))?(((((map__14221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14221):map__14221);
var items = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14223){
var map__14224 = p__14223;
var map__14224__$1 = ((((!((map__14224 == null)))?(((((map__14224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14224):map__14224);
var items = cljs.core.get.call(null,map__14224__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14224__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_14226 = cljs.core.count.call(null,items);
if((cnt_14226 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_14226,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__14227_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14227_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14228){
var map__14229 = p__14228;
var map__14229__$1 = ((((!((map__14229 == null)))?(((((map__14229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14229):map__14229);
var items = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14229__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14231){
var map__14232 = p__14231;
var map__14232__$1 = ((((!((map__14232 == null)))?(((((map__14232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14232):map__14232);
var items = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__14232__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___14250 = cljs.core.seq.call(null,items);
if(temp__5457__auto___14250){
var items_14251__$1 = temp__5457__auto___14250;
var vec__14234_14252 = items_14251__$1;
var seq__14235_14253 = cljs.core.seq.call(null,vec__14234_14252);
var first__14236_14254 = cljs.core.first.call(null,seq__14235_14253);
var seq__14235_14255__$1 = cljs.core.next.call(null,seq__14235_14253);
var vec__14237_14256 = first__14236_14254;
var k_14257 = cljs.core.nth.call(null,vec__14237_14256,(0),null);
var v_14258 = cljs.core.nth.call(null,vec__14237_14256,(1),null);
var r_14259 = seq__14235_14255__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_14257),"\": ",v_14258);

var seq__14240_14260 = cljs.core.seq.call(null,r_14259);
var chunk__14241_14261 = null;
var count__14242_14262 = (0);
var i__14243_14263 = (0);
while(true){
if((i__14243_14263 < count__14242_14262)){
var vec__14244_14264 = cljs.core._nth.call(null,chunk__14241_14261,i__14243_14263);
var k_14265__$1 = cljs.core.nth.call(null,vec__14244_14264,(0),null);
var v_14266__$1 = cljs.core.nth.call(null,vec__14244_14264,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14265__$1),"\": ",v_14266__$1);


var G__14267 = seq__14240_14260;
var G__14268 = chunk__14241_14261;
var G__14269 = count__14242_14262;
var G__14270 = (i__14243_14263 + (1));
seq__14240_14260 = G__14267;
chunk__14241_14261 = G__14268;
count__14242_14262 = G__14269;
i__14243_14263 = G__14270;
continue;
} else {
var temp__5457__auto___14271__$1 = cljs.core.seq.call(null,seq__14240_14260);
if(temp__5457__auto___14271__$1){
var seq__14240_14272__$1 = temp__5457__auto___14271__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14240_14272__$1)){
var c__4319__auto___14273 = cljs.core.chunk_first.call(null,seq__14240_14272__$1);
var G__14274 = cljs.core.chunk_rest.call(null,seq__14240_14272__$1);
var G__14275 = c__4319__auto___14273;
var G__14276 = cljs.core.count.call(null,c__4319__auto___14273);
var G__14277 = (0);
seq__14240_14260 = G__14274;
chunk__14241_14261 = G__14275;
count__14242_14262 = G__14276;
i__14243_14263 = G__14277;
continue;
} else {
var vec__14247_14278 = cljs.core.first.call(null,seq__14240_14272__$1);
var k_14279__$1 = cljs.core.nth.call(null,vec__14247_14278,(0),null);
var v_14280__$1 = cljs.core.nth.call(null,vec__14247_14278,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14279__$1),"\": ",v_14280__$1);


var G__14281 = cljs.core.next.call(null,seq__14240_14272__$1);
var G__14282 = null;
var G__14283 = (0);
var G__14284 = (0);
seq__14240_14260 = G__14281;
chunk__14241_14261 = G__14282;
count__14242_14262 = G__14283;
i__14243_14263 = G__14284;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__14285){
var map__14286 = p__14285;
var map__14286__$1 = ((((!((map__14286 == null)))?(((((map__14286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14286):map__14286);
var items = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__14288){
var map__14289 = p__14288;
var map__14289__$1 = ((((!((map__14289 == null)))?(((((map__14289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14289):map__14289);
var form = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__14289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14291){
var map__14292 = p__14291;
var map__14292__$1 = ((((!((map__14292 == null)))?(((((map__14292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14292):map__14292);
var op = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__14292__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14294){
var map__14295 = p__14294;
var map__14295__$1 = ((((!((map__14295 == null)))?(((((map__14295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14295):map__14295);
var op = cljs.core.get.call(null,map__14295__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14295__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__14295__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14297){
var map__14298 = p__14297;
var map__14298__$1 = ((((!((map__14298 == null)))?(((((map__14298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14298):map__14298);
var test = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__14298__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14300){
var map__14301 = p__14300;
var map__14301__$1 = ((((!((map__14301 == null)))?(((((map__14301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14301):map__14301);
var v = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__14301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14303_14321 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__14304_14322 = null;
var count__14305_14323 = (0);
var i__14306_14324 = (0);
while(true){
if((i__14306_14324 < count__14305_14323)){
var vec__14307_14325 = cljs.core._nth.call(null,chunk__14304_14322,i__14306_14324);
var ts_14326 = cljs.core.nth.call(null,vec__14307_14325,(0),null);
var then_14327 = cljs.core.nth.call(null,vec__14307_14325,(1),null);
var seq__14310_14328 = cljs.core.seq.call(null,ts_14326);
var chunk__14311_14329 = null;
var count__14312_14330 = (0);
var i__14313_14331 = (0);
while(true){
if((i__14313_14331 < count__14312_14330)){
var test_14332 = cljs.core._nth.call(null,chunk__14311_14329,i__14313_14331);
cljs.compiler.emitln.call(null,"case ",test_14332,":");


var G__14333 = seq__14310_14328;
var G__14334 = chunk__14311_14329;
var G__14335 = count__14312_14330;
var G__14336 = (i__14313_14331 + (1));
seq__14310_14328 = G__14333;
chunk__14311_14329 = G__14334;
count__14312_14330 = G__14335;
i__14313_14331 = G__14336;
continue;
} else {
var temp__5457__auto___14337 = cljs.core.seq.call(null,seq__14310_14328);
if(temp__5457__auto___14337){
var seq__14310_14338__$1 = temp__5457__auto___14337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14310_14338__$1)){
var c__4319__auto___14339 = cljs.core.chunk_first.call(null,seq__14310_14338__$1);
var G__14340 = cljs.core.chunk_rest.call(null,seq__14310_14338__$1);
var G__14341 = c__4319__auto___14339;
var G__14342 = cljs.core.count.call(null,c__4319__auto___14339);
var G__14343 = (0);
seq__14310_14328 = G__14340;
chunk__14311_14329 = G__14341;
count__14312_14330 = G__14342;
i__14313_14331 = G__14343;
continue;
} else {
var test_14344 = cljs.core.first.call(null,seq__14310_14338__$1);
cljs.compiler.emitln.call(null,"case ",test_14344,":");


var G__14345 = cljs.core.next.call(null,seq__14310_14338__$1);
var G__14346 = null;
var G__14347 = (0);
var G__14348 = (0);
seq__14310_14328 = G__14345;
chunk__14311_14329 = G__14346;
count__14312_14330 = G__14347;
i__14313_14331 = G__14348;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14327);
} else {
cljs.compiler.emitln.call(null,then_14327);
}

cljs.compiler.emitln.call(null,"break;");


var G__14349 = seq__14303_14321;
var G__14350 = chunk__14304_14322;
var G__14351 = count__14305_14323;
var G__14352 = (i__14306_14324 + (1));
seq__14303_14321 = G__14349;
chunk__14304_14322 = G__14350;
count__14305_14323 = G__14351;
i__14306_14324 = G__14352;
continue;
} else {
var temp__5457__auto___14353 = cljs.core.seq.call(null,seq__14303_14321);
if(temp__5457__auto___14353){
var seq__14303_14354__$1 = temp__5457__auto___14353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14303_14354__$1)){
var c__4319__auto___14355 = cljs.core.chunk_first.call(null,seq__14303_14354__$1);
var G__14356 = cljs.core.chunk_rest.call(null,seq__14303_14354__$1);
var G__14357 = c__4319__auto___14355;
var G__14358 = cljs.core.count.call(null,c__4319__auto___14355);
var G__14359 = (0);
seq__14303_14321 = G__14356;
chunk__14304_14322 = G__14357;
count__14305_14323 = G__14358;
i__14306_14324 = G__14359;
continue;
} else {
var vec__14314_14360 = cljs.core.first.call(null,seq__14303_14354__$1);
var ts_14361 = cljs.core.nth.call(null,vec__14314_14360,(0),null);
var then_14362 = cljs.core.nth.call(null,vec__14314_14360,(1),null);
var seq__14317_14363 = cljs.core.seq.call(null,ts_14361);
var chunk__14318_14364 = null;
var count__14319_14365 = (0);
var i__14320_14366 = (0);
while(true){
if((i__14320_14366 < count__14319_14365)){
var test_14367 = cljs.core._nth.call(null,chunk__14318_14364,i__14320_14366);
cljs.compiler.emitln.call(null,"case ",test_14367,":");


var G__14368 = seq__14317_14363;
var G__14369 = chunk__14318_14364;
var G__14370 = count__14319_14365;
var G__14371 = (i__14320_14366 + (1));
seq__14317_14363 = G__14368;
chunk__14318_14364 = G__14369;
count__14319_14365 = G__14370;
i__14320_14366 = G__14371;
continue;
} else {
var temp__5457__auto___14372__$1 = cljs.core.seq.call(null,seq__14317_14363);
if(temp__5457__auto___14372__$1){
var seq__14317_14373__$1 = temp__5457__auto___14372__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14317_14373__$1)){
var c__4319__auto___14374 = cljs.core.chunk_first.call(null,seq__14317_14373__$1);
var G__14375 = cljs.core.chunk_rest.call(null,seq__14317_14373__$1);
var G__14376 = c__4319__auto___14374;
var G__14377 = cljs.core.count.call(null,c__4319__auto___14374);
var G__14378 = (0);
seq__14317_14363 = G__14375;
chunk__14318_14364 = G__14376;
count__14319_14365 = G__14377;
i__14320_14366 = G__14378;
continue;
} else {
var test_14379 = cljs.core.first.call(null,seq__14317_14373__$1);
cljs.compiler.emitln.call(null,"case ",test_14379,":");


var G__14380 = cljs.core.next.call(null,seq__14317_14373__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14317_14363 = G__14380;
chunk__14318_14364 = G__14381;
count__14319_14365 = G__14382;
i__14320_14366 = G__14383;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14362);
} else {
cljs.compiler.emitln.call(null,then_14362);
}

cljs.compiler.emitln.call(null,"break;");


var G__14384 = cljs.core.next.call(null,seq__14303_14354__$1);
var G__14385 = null;
var G__14386 = (0);
var G__14387 = (0);
seq__14303_14321 = G__14384;
chunk__14304_14322 = G__14385;
count__14305_14323 = G__14386;
i__14306_14324 = G__14387;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14388){
var map__14389 = p__14388;
var map__14389__$1 = ((((!((map__14389 == null)))?(((((map__14389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14389):map__14389);
var throw$ = cljs.core.get.call(null,map__14389__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__14389__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14392 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__14392,(0),null);
var rstr = cljs.core.nth.call(null,vec__14392,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__14392,fstr,rstr,ret_t,axstr){
return (function (p1__14391_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14391_SHARP_);
});})(idx,vec__14392,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__14395 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14395),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__14395;
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
return (function (p1__14396_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14396_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__14397 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14398 = cljs.core.seq.call(null,vec__14397);
var first__14399 = cljs.core.first.call(null,seq__14398);
var seq__14398__$1 = cljs.core.next.call(null,seq__14398);
var p = first__14399;
var first__14399__$1 = cljs.core.first.call(null,seq__14398__$1);
var seq__14398__$2 = cljs.core.next.call(null,seq__14398__$1);
var ts = first__14399__$1;
var first__14399__$2 = cljs.core.first.call(null,seq__14398__$2);
var seq__14398__$3 = cljs.core.next.call(null,seq__14398__$2);
var n = first__14399__$2;
var xs = seq__14398__$3;
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
var vec__14400 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14401 = cljs.core.seq.call(null,vec__14400);
var first__14402 = cljs.core.first.call(null,seq__14401);
var seq__14401__$1 = cljs.core.next.call(null,seq__14401);
var p = first__14402;
var first__14402__$1 = cljs.core.first.call(null,seq__14401__$1);
var seq__14401__$2 = cljs.core.next.call(null,seq__14401__$1);
var ts = first__14402__$1;
var xs = seq__14401__$2;
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
var G__14405 = arguments.length;
switch (G__14405) {
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
var vec__14413 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__14403_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__14403_SHARP_);
} else {
return p1__14403_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__14414 = cljs.core.seq.call(null,vec__14413);
var first__14415 = cljs.core.first.call(null,seq__14414);
var seq__14414__$1 = cljs.core.next.call(null,seq__14414);
var x = first__14415;
var ys = seq__14414__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__14416 = cljs.core.seq.call(null,ys);
var chunk__14417 = null;
var count__14418 = (0);
var i__14419 = (0);
while(true){
if((i__14419 < count__14418)){
var next_line = cljs.core._nth.call(null,chunk__14417,i__14419);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__14425 = seq__14416;
var G__14426 = chunk__14417;
var G__14427 = count__14418;
var G__14428 = (i__14419 + (1));
seq__14416 = G__14425;
chunk__14417 = G__14426;
count__14418 = G__14427;
i__14419 = G__14428;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14416);
if(temp__5457__auto__){
var seq__14416__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14416__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14416__$1);
var G__14429 = cljs.core.chunk_rest.call(null,seq__14416__$1);
var G__14430 = c__4319__auto__;
var G__14431 = cljs.core.count.call(null,c__4319__auto__);
var G__14432 = (0);
seq__14416 = G__14429;
chunk__14417 = G__14430;
count__14418 = G__14431;
i__14419 = G__14432;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__14416__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__14433 = cljs.core.next.call(null,seq__14416__$1);
var G__14434 = null;
var G__14435 = (0);
var G__14436 = (0);
seq__14416 = G__14433;
chunk__14417 = G__14434;
count__14418 = G__14435;
i__14419 = G__14436;
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

var seq__14420_14437 = cljs.core.seq.call(null,docs__$2);
var chunk__14421_14438 = null;
var count__14422_14439 = (0);
var i__14423_14440 = (0);
while(true){
if((i__14423_14440 < count__14422_14439)){
var e_14441 = cljs.core._nth.call(null,chunk__14421_14438,i__14423_14440);
if(cljs.core.truth_(e_14441)){
print_comment_lines.call(null,e_14441);
} else {
}


var G__14442 = seq__14420_14437;
var G__14443 = chunk__14421_14438;
var G__14444 = count__14422_14439;
var G__14445 = (i__14423_14440 + (1));
seq__14420_14437 = G__14442;
chunk__14421_14438 = G__14443;
count__14422_14439 = G__14444;
i__14423_14440 = G__14445;
continue;
} else {
var temp__5457__auto___14446 = cljs.core.seq.call(null,seq__14420_14437);
if(temp__5457__auto___14446){
var seq__14420_14447__$1 = temp__5457__auto___14446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14420_14447__$1)){
var c__4319__auto___14448 = cljs.core.chunk_first.call(null,seq__14420_14447__$1);
var G__14449 = cljs.core.chunk_rest.call(null,seq__14420_14447__$1);
var G__14450 = c__4319__auto___14448;
var G__14451 = cljs.core.count.call(null,c__4319__auto___14448);
var G__14452 = (0);
seq__14420_14437 = G__14449;
chunk__14421_14438 = G__14450;
count__14422_14439 = G__14451;
i__14423_14440 = G__14452;
continue;
} else {
var e_14453 = cljs.core.first.call(null,seq__14420_14447__$1);
if(cljs.core.truth_(e_14453)){
print_comment_lines.call(null,e_14453);
} else {
}


var G__14454 = cljs.core.next.call(null,seq__14420_14447__$1);
var G__14455 = null;
var G__14456 = (0);
var G__14457 = (0);
seq__14420_14437 = G__14454;
chunk__14421_14438 = G__14455;
count__14422_14439 = G__14456;
i__14423_14440 = G__14457;
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
return (function (p1__14459_SHARP_){
return goog.string.startsWith(p1__14459_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14460){
var map__14461 = p__14460;
var map__14461__$1 = ((((!((map__14461 == null)))?(((((map__14461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14461):map__14461);
var name = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__14461__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14463){
var map__14464 = p__14463;
var map__14464__$1 = ((((!((map__14464 == null)))?(((((map__14464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14464):map__14464);
var name = cljs.core.get.call(null,map__14464__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14464__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14464__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14466_14484 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14467_14485 = null;
var count__14468_14486 = (0);
var i__14469_14487 = (0);
while(true){
if((i__14469_14487 < count__14468_14486)){
var vec__14470_14488 = cljs.core._nth.call(null,chunk__14467_14485,i__14469_14487);
var i_14489 = cljs.core.nth.call(null,vec__14470_14488,(0),null);
var param_14490 = cljs.core.nth.call(null,vec__14470_14488,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14490);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14491 = seq__14466_14484;
var G__14492 = chunk__14467_14485;
var G__14493 = count__14468_14486;
var G__14494 = (i__14469_14487 + (1));
seq__14466_14484 = G__14491;
chunk__14467_14485 = G__14492;
count__14468_14486 = G__14493;
i__14469_14487 = G__14494;
continue;
} else {
var temp__5457__auto___14495 = cljs.core.seq.call(null,seq__14466_14484);
if(temp__5457__auto___14495){
var seq__14466_14496__$1 = temp__5457__auto___14495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14466_14496__$1)){
var c__4319__auto___14497 = cljs.core.chunk_first.call(null,seq__14466_14496__$1);
var G__14498 = cljs.core.chunk_rest.call(null,seq__14466_14496__$1);
var G__14499 = c__4319__auto___14497;
var G__14500 = cljs.core.count.call(null,c__4319__auto___14497);
var G__14501 = (0);
seq__14466_14484 = G__14498;
chunk__14467_14485 = G__14499;
count__14468_14486 = G__14500;
i__14469_14487 = G__14501;
continue;
} else {
var vec__14473_14502 = cljs.core.first.call(null,seq__14466_14496__$1);
var i_14503 = cljs.core.nth.call(null,vec__14473_14502,(0),null);
var param_14504 = cljs.core.nth.call(null,vec__14473_14502,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14504);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14505 = cljs.core.next.call(null,seq__14466_14496__$1);
var G__14506 = null;
var G__14507 = (0);
var G__14508 = (0);
seq__14466_14484 = G__14505;
chunk__14467_14485 = G__14506;
count__14468_14486 = G__14507;
i__14469_14487 = G__14508;
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

var seq__14476_14509 = cljs.core.seq.call(null,params);
var chunk__14477_14510 = null;
var count__14478_14511 = (0);
var i__14479_14512 = (0);
while(true){
if((i__14479_14512 < count__14478_14511)){
var param_14513 = cljs.core._nth.call(null,chunk__14477_14510,i__14479_14512);
cljs.compiler.emit.call(null,param_14513);

if(cljs.core._EQ_.call(null,param_14513,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14514 = seq__14476_14509;
var G__14515 = chunk__14477_14510;
var G__14516 = count__14478_14511;
var G__14517 = (i__14479_14512 + (1));
seq__14476_14509 = G__14514;
chunk__14477_14510 = G__14515;
count__14478_14511 = G__14516;
i__14479_14512 = G__14517;
continue;
} else {
var temp__5457__auto___14518 = cljs.core.seq.call(null,seq__14476_14509);
if(temp__5457__auto___14518){
var seq__14476_14519__$1 = temp__5457__auto___14518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14476_14519__$1)){
var c__4319__auto___14520 = cljs.core.chunk_first.call(null,seq__14476_14519__$1);
var G__14521 = cljs.core.chunk_rest.call(null,seq__14476_14519__$1);
var G__14522 = c__4319__auto___14520;
var G__14523 = cljs.core.count.call(null,c__4319__auto___14520);
var G__14524 = (0);
seq__14476_14509 = G__14521;
chunk__14477_14510 = G__14522;
count__14478_14511 = G__14523;
i__14479_14512 = G__14524;
continue;
} else {
var param_14525 = cljs.core.first.call(null,seq__14476_14519__$1);
cljs.compiler.emit.call(null,param_14525);

if(cljs.core._EQ_.call(null,param_14525,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14526 = cljs.core.next.call(null,seq__14476_14519__$1);
var G__14527 = null;
var G__14528 = (0);
var G__14529 = (0);
seq__14476_14509 = G__14526;
chunk__14477_14510 = G__14527;
count__14478_14511 = G__14528;
i__14479_14512 = G__14529;
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

var seq__14480_14530 = cljs.core.seq.call(null,params);
var chunk__14481_14531 = null;
var count__14482_14532 = (0);
var i__14483_14533 = (0);
while(true){
if((i__14483_14533 < count__14482_14532)){
var param_14534 = cljs.core._nth.call(null,chunk__14481_14531,i__14483_14533);
cljs.compiler.emit.call(null,param_14534);

if(cljs.core._EQ_.call(null,param_14534,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14535 = seq__14480_14530;
var G__14536 = chunk__14481_14531;
var G__14537 = count__14482_14532;
var G__14538 = (i__14483_14533 + (1));
seq__14480_14530 = G__14535;
chunk__14481_14531 = G__14536;
count__14482_14532 = G__14537;
i__14483_14533 = G__14538;
continue;
} else {
var temp__5457__auto___14539 = cljs.core.seq.call(null,seq__14480_14530);
if(temp__5457__auto___14539){
var seq__14480_14540__$1 = temp__5457__auto___14539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14480_14540__$1)){
var c__4319__auto___14541 = cljs.core.chunk_first.call(null,seq__14480_14540__$1);
var G__14542 = cljs.core.chunk_rest.call(null,seq__14480_14540__$1);
var G__14543 = c__4319__auto___14541;
var G__14544 = cljs.core.count.call(null,c__4319__auto___14541);
var G__14545 = (0);
seq__14480_14530 = G__14542;
chunk__14481_14531 = G__14543;
count__14482_14532 = G__14544;
i__14483_14533 = G__14545;
continue;
} else {
var param_14546 = cljs.core.first.call(null,seq__14480_14540__$1);
cljs.compiler.emit.call(null,param_14546);

if(cljs.core._EQ_.call(null,param_14546,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14547 = cljs.core.next.call(null,seq__14480_14540__$1);
var G__14548 = null;
var G__14549 = (0);
var G__14550 = (0);
seq__14480_14530 = G__14547;
chunk__14481_14531 = G__14548;
count__14482_14532 = G__14549;
i__14483_14533 = G__14550;
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
var seq__14551 = cljs.core.seq.call(null,params);
var chunk__14552 = null;
var count__14553 = (0);
var i__14554 = (0);
while(true){
if((i__14554 < count__14553)){
var param = cljs.core._nth.call(null,chunk__14552,i__14554);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14555 = seq__14551;
var G__14556 = chunk__14552;
var G__14557 = count__14553;
var G__14558 = (i__14554 + (1));
seq__14551 = G__14555;
chunk__14552 = G__14556;
count__14553 = G__14557;
i__14554 = G__14558;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14551);
if(temp__5457__auto__){
var seq__14551__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14551__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__14551__$1);
var G__14559 = cljs.core.chunk_rest.call(null,seq__14551__$1);
var G__14560 = c__4319__auto__;
var G__14561 = cljs.core.count.call(null,c__4319__auto__);
var G__14562 = (0);
seq__14551 = G__14559;
chunk__14552 = G__14560;
count__14553 = G__14561;
i__14554 = G__14562;
continue;
} else {
var param = cljs.core.first.call(null,seq__14551__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14563 = cljs.core.next.call(null,seq__14551__$1);
var G__14564 = null;
var G__14565 = (0);
var G__14566 = (0);
seq__14551 = G__14563;
chunk__14552 = G__14564;
count__14553 = G__14565;
i__14554 = G__14566;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14567){
var map__14568 = p__14567;
var map__14568__$1 = ((((!((map__14568 == null)))?(((((map__14568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14568):map__14568);
var type = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14568__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14570){
var map__14571 = p__14570;
var map__14571__$1 = ((((!((map__14571 == null)))?(((((map__14571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14571):map__14571);
var f = map__14571__$1;
var type = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_14581__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14582 = cljs.compiler.munge.call(null,name_14581__$1);
var delegate_name_14583 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14582),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_14583," = function (");

var seq__14573_14584 = cljs.core.seq.call(null,params);
var chunk__14574_14585 = null;
var count__14575_14586 = (0);
var i__14576_14587 = (0);
while(true){
if((i__14576_14587 < count__14575_14586)){
var param_14588 = cljs.core._nth.call(null,chunk__14574_14585,i__14576_14587);
cljs.compiler.emit.call(null,param_14588);

if(cljs.core._EQ_.call(null,param_14588,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14589 = seq__14573_14584;
var G__14590 = chunk__14574_14585;
var G__14591 = count__14575_14586;
var G__14592 = (i__14576_14587 + (1));
seq__14573_14584 = G__14589;
chunk__14574_14585 = G__14590;
count__14575_14586 = G__14591;
i__14576_14587 = G__14592;
continue;
} else {
var temp__5457__auto___14593 = cljs.core.seq.call(null,seq__14573_14584);
if(temp__5457__auto___14593){
var seq__14573_14594__$1 = temp__5457__auto___14593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14573_14594__$1)){
var c__4319__auto___14595 = cljs.core.chunk_first.call(null,seq__14573_14594__$1);
var G__14596 = cljs.core.chunk_rest.call(null,seq__14573_14594__$1);
var G__14597 = c__4319__auto___14595;
var G__14598 = cljs.core.count.call(null,c__4319__auto___14595);
var G__14599 = (0);
seq__14573_14584 = G__14596;
chunk__14574_14585 = G__14597;
count__14575_14586 = G__14598;
i__14576_14587 = G__14599;
continue;
} else {
var param_14600 = cljs.core.first.call(null,seq__14573_14594__$1);
cljs.compiler.emit.call(null,param_14600);

if(cljs.core._EQ_.call(null,param_14600,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14601 = cljs.core.next.call(null,seq__14573_14594__$1);
var G__14602 = null;
var G__14603 = (0);
var G__14604 = (0);
seq__14573_14584 = G__14601;
chunk__14574_14585 = G__14602;
count__14575_14586 = G__14603;
i__14576_14587 = G__14604;
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

cljs.compiler.emitln.call(null,"var ",mname_14582," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_14605 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_14605,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_14583,".call(this,");

var seq__14577_14606 = cljs.core.seq.call(null,params);
var chunk__14578_14607 = null;
var count__14579_14608 = (0);
var i__14580_14609 = (0);
while(true){
if((i__14580_14609 < count__14579_14608)){
var param_14610 = cljs.core._nth.call(null,chunk__14578_14607,i__14580_14609);
cljs.compiler.emit.call(null,param_14610);

if(cljs.core._EQ_.call(null,param_14610,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14611 = seq__14577_14606;
var G__14612 = chunk__14578_14607;
var G__14613 = count__14579_14608;
var G__14614 = (i__14580_14609 + (1));
seq__14577_14606 = G__14611;
chunk__14578_14607 = G__14612;
count__14579_14608 = G__14613;
i__14580_14609 = G__14614;
continue;
} else {
var temp__5457__auto___14615 = cljs.core.seq.call(null,seq__14577_14606);
if(temp__5457__auto___14615){
var seq__14577_14616__$1 = temp__5457__auto___14615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14577_14616__$1)){
var c__4319__auto___14617 = cljs.core.chunk_first.call(null,seq__14577_14616__$1);
var G__14618 = cljs.core.chunk_rest.call(null,seq__14577_14616__$1);
var G__14619 = c__4319__auto___14617;
var G__14620 = cljs.core.count.call(null,c__4319__auto___14617);
var G__14621 = (0);
seq__14577_14606 = G__14618;
chunk__14578_14607 = G__14619;
count__14579_14608 = G__14620;
i__14580_14609 = G__14621;
continue;
} else {
var param_14622 = cljs.core.first.call(null,seq__14577_14616__$1);
cljs.compiler.emit.call(null,param_14622);

if(cljs.core._EQ_.call(null,param_14622,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14623 = cljs.core.next.call(null,seq__14577_14616__$1);
var G__14624 = null;
var G__14625 = (0);
var G__14626 = (0);
seq__14577_14606 = G__14623;
chunk__14578_14607 = G__14624;
count__14579_14608 = G__14625;
i__14580_14609 = G__14626;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_14582,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_14582,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_14581__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_14582,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14583,";");

cljs.compiler.emitln.call(null,"return ",mname_14582,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14630){
var map__14631 = p__14630;
var map__14631__$1 = ((((!((map__14631 == null)))?(((((map__14631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14631):map__14631);
var name = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__14631__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14627_SHARP_){
var and__3911__auto__ = p1__14627_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14627_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_14666__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_14667 = cljs.compiler.munge.call(null,name_14666__$1);
var maxparams_14668 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14669 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_14666__$1,mname_14667,maxparams_14668,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14667),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14666__$1,mname_14667,maxparams_14668,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_14670 = cljs.core.sort_by.call(null,((function (name_14666__$1,mname_14667,maxparams_14668,mmap_14669,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14628_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14628_SHARP_)));
});})(name_14666__$1,mname_14667,maxparams_14668,mmap_14669,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_14669));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_14667," = null;");

var seq__14633_14671 = cljs.core.seq.call(null,ms_14670);
var chunk__14634_14672 = null;
var count__14635_14673 = (0);
var i__14636_14674 = (0);
while(true){
if((i__14636_14674 < count__14635_14673)){
var vec__14637_14675 = cljs.core._nth.call(null,chunk__14634_14672,i__14636_14674);
var n_14676 = cljs.core.nth.call(null,vec__14637_14675,(0),null);
var meth_14677 = cljs.core.nth.call(null,vec__14637_14675,(1),null);
cljs.compiler.emits.call(null,"var ",n_14676," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14677))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14677);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14677);
}

cljs.compiler.emitln.call(null,";");


var G__14678 = seq__14633_14671;
var G__14679 = chunk__14634_14672;
var G__14680 = count__14635_14673;
var G__14681 = (i__14636_14674 + (1));
seq__14633_14671 = G__14678;
chunk__14634_14672 = G__14679;
count__14635_14673 = G__14680;
i__14636_14674 = G__14681;
continue;
} else {
var temp__5457__auto___14682 = cljs.core.seq.call(null,seq__14633_14671);
if(temp__5457__auto___14682){
var seq__14633_14683__$1 = temp__5457__auto___14682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14633_14683__$1)){
var c__4319__auto___14684 = cljs.core.chunk_first.call(null,seq__14633_14683__$1);
var G__14685 = cljs.core.chunk_rest.call(null,seq__14633_14683__$1);
var G__14686 = c__4319__auto___14684;
var G__14687 = cljs.core.count.call(null,c__4319__auto___14684);
var G__14688 = (0);
seq__14633_14671 = G__14685;
chunk__14634_14672 = G__14686;
count__14635_14673 = G__14687;
i__14636_14674 = G__14688;
continue;
} else {
var vec__14640_14689 = cljs.core.first.call(null,seq__14633_14683__$1);
var n_14690 = cljs.core.nth.call(null,vec__14640_14689,(0),null);
var meth_14691 = cljs.core.nth.call(null,vec__14640_14689,(1),null);
cljs.compiler.emits.call(null,"var ",n_14690," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14691))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_14691);
} else {
cljs.compiler.emit_fn_method.call(null,meth_14691);
}

cljs.compiler.emitln.call(null,";");


var G__14692 = cljs.core.next.call(null,seq__14633_14683__$1);
var G__14693 = null;
var G__14694 = (0);
var G__14695 = (0);
seq__14633_14671 = G__14692;
chunk__14634_14672 = G__14693;
count__14635_14673 = G__14694;
i__14636_14674 = G__14695;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_14667," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_14668),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14668)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_14668));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__14643_14696 = cljs.core.seq.call(null,ms_14670);
var chunk__14644_14697 = null;
var count__14645_14698 = (0);
var i__14646_14699 = (0);
while(true){
if((i__14646_14699 < count__14645_14698)){
var vec__14647_14700 = cljs.core._nth.call(null,chunk__14644_14697,i__14646_14699);
var n_14701 = cljs.core.nth.call(null,vec__14647_14700,(0),null);
var meth_14702 = cljs.core.nth.call(null,vec__14647_14700,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14702))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14703 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14703," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14704 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14703," = new cljs.core.IndexedSeq(",a_14704,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14701,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14668)),(((cljs.core.count.call(null,maxparams_14668) > (1)))?", ":null),restarg_14703,");");
} else {
var pcnt_14705 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14702));
cljs.compiler.emitln.call(null,"case ",pcnt_14705,":");

cljs.compiler.emitln.call(null,"return ",n_14701,".call(this",(((pcnt_14705 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14705,maxparams_14668)),null,(1),null)),(2),null))),");");
}


var G__14706 = seq__14643_14696;
var G__14707 = chunk__14644_14697;
var G__14708 = count__14645_14698;
var G__14709 = (i__14646_14699 + (1));
seq__14643_14696 = G__14706;
chunk__14644_14697 = G__14707;
count__14645_14698 = G__14708;
i__14646_14699 = G__14709;
continue;
} else {
var temp__5457__auto___14710 = cljs.core.seq.call(null,seq__14643_14696);
if(temp__5457__auto___14710){
var seq__14643_14711__$1 = temp__5457__auto___14710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14643_14711__$1)){
var c__4319__auto___14712 = cljs.core.chunk_first.call(null,seq__14643_14711__$1);
var G__14713 = cljs.core.chunk_rest.call(null,seq__14643_14711__$1);
var G__14714 = c__4319__auto___14712;
var G__14715 = cljs.core.count.call(null,c__4319__auto___14712);
var G__14716 = (0);
seq__14643_14696 = G__14713;
chunk__14644_14697 = G__14714;
count__14645_14698 = G__14715;
i__14646_14699 = G__14716;
continue;
} else {
var vec__14650_14717 = cljs.core.first.call(null,seq__14643_14711__$1);
var n_14718 = cljs.core.nth.call(null,vec__14650_14717,(0),null);
var meth_14719 = cljs.core.nth.call(null,vec__14650_14717,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14719))){
cljs.compiler.emitln.call(null,"default:");

var restarg_14720 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_14720," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_14721 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_14720," = new cljs.core.IndexedSeq(",a_14721,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_14718,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_14668)),(((cljs.core.count.call(null,maxparams_14668) > (1)))?", ":null),restarg_14720,");");
} else {
var pcnt_14722 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14719));
cljs.compiler.emitln.call(null,"case ",pcnt_14722,":");

cljs.compiler.emitln.call(null,"return ",n_14718,".call(this",(((pcnt_14722 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_14722,maxparams_14668)),null,(1),null)),(2),null))),");");
}


var G__14723 = cljs.core.next.call(null,seq__14643_14711__$1);
var G__14724 = null;
var G__14725 = (0);
var G__14726 = (0);
seq__14643_14696 = G__14723;
chunk__14644_14697 = G__14724;
count__14645_14698 = G__14725;
i__14646_14699 = G__14726;
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
cljs.compiler.emitln.call(null,mname_14667,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_14667,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_14666__$1,mname_14667,maxparams_14668,mmap_14669,ms_14670,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14629_SHARP_){
var vec__14653 = p1__14629_SHARP_;
var n = cljs.core.nth.call(null,vec__14653,(0),null);
var m = cljs.core.nth.call(null,vec__14653,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14666__$1,mname_14667,maxparams_14668,mmap_14669,ms_14670,loop_locals,map__14631,map__14631__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_14670),".cljs$lang$applyTo;");
} else {
}

var seq__14656_14727 = cljs.core.seq.call(null,ms_14670);
var chunk__14657_14728 = null;
var count__14658_14729 = (0);
var i__14659_14730 = (0);
while(true){
if((i__14659_14730 < count__14658_14729)){
var vec__14660_14731 = cljs.core._nth.call(null,chunk__14657_14728,i__14659_14730);
var n_14732 = cljs.core.nth.call(null,vec__14660_14731,(0),null);
var meth_14733 = cljs.core.nth.call(null,vec__14660_14731,(1),null);
var c_14734 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14733));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14733))){
cljs.compiler.emitln.call(null,mname_14667,".cljs$core$IFn$_invoke$arity$variadic = ",n_14732,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14667,".cljs$core$IFn$_invoke$arity$",c_14734," = ",n_14732,";");
}


var G__14735 = seq__14656_14727;
var G__14736 = chunk__14657_14728;
var G__14737 = count__14658_14729;
var G__14738 = (i__14659_14730 + (1));
seq__14656_14727 = G__14735;
chunk__14657_14728 = G__14736;
count__14658_14729 = G__14737;
i__14659_14730 = G__14738;
continue;
} else {
var temp__5457__auto___14739 = cljs.core.seq.call(null,seq__14656_14727);
if(temp__5457__auto___14739){
var seq__14656_14740__$1 = temp__5457__auto___14739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14656_14740__$1)){
var c__4319__auto___14741 = cljs.core.chunk_first.call(null,seq__14656_14740__$1);
var G__14742 = cljs.core.chunk_rest.call(null,seq__14656_14740__$1);
var G__14743 = c__4319__auto___14741;
var G__14744 = cljs.core.count.call(null,c__4319__auto___14741);
var G__14745 = (0);
seq__14656_14727 = G__14742;
chunk__14657_14728 = G__14743;
count__14658_14729 = G__14744;
i__14659_14730 = G__14745;
continue;
} else {
var vec__14663_14746 = cljs.core.first.call(null,seq__14656_14740__$1);
var n_14747 = cljs.core.nth.call(null,vec__14663_14746,(0),null);
var meth_14748 = cljs.core.nth.call(null,vec__14663_14746,(1),null);
var c_14749 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14748));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14748))){
cljs.compiler.emitln.call(null,mname_14667,".cljs$core$IFn$_invoke$arity$variadic = ",n_14747,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_14667,".cljs$core$IFn$_invoke$arity$",c_14749," = ",n_14747,";");
}


var G__14750 = cljs.core.next.call(null,seq__14656_14740__$1);
var G__14751 = null;
var G__14752 = (0);
var G__14753 = (0);
seq__14656_14727 = G__14750;
chunk__14657_14728 = G__14751;
count__14658_14729 = G__14752;
i__14659_14730 = G__14753;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_14667,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__14754){
var map__14755 = p__14754;
var map__14755__$1 = ((((!((map__14755 == null)))?(((((map__14755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14755):map__14755);
var statements = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14757_14761 = cljs.core.seq.call(null,statements);
var chunk__14758_14762 = null;
var count__14759_14763 = (0);
var i__14760_14764 = (0);
while(true){
if((i__14760_14764 < count__14759_14763)){
var s_14765 = cljs.core._nth.call(null,chunk__14758_14762,i__14760_14764);
cljs.compiler.emitln.call(null,s_14765);


var G__14766 = seq__14757_14761;
var G__14767 = chunk__14758_14762;
var G__14768 = count__14759_14763;
var G__14769 = (i__14760_14764 + (1));
seq__14757_14761 = G__14766;
chunk__14758_14762 = G__14767;
count__14759_14763 = G__14768;
i__14760_14764 = G__14769;
continue;
} else {
var temp__5457__auto___14770 = cljs.core.seq.call(null,seq__14757_14761);
if(temp__5457__auto___14770){
var seq__14757_14771__$1 = temp__5457__auto___14770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14757_14771__$1)){
var c__4319__auto___14772 = cljs.core.chunk_first.call(null,seq__14757_14771__$1);
var G__14773 = cljs.core.chunk_rest.call(null,seq__14757_14771__$1);
var G__14774 = c__4319__auto___14772;
var G__14775 = cljs.core.count.call(null,c__4319__auto___14772);
var G__14776 = (0);
seq__14757_14761 = G__14773;
chunk__14758_14762 = G__14774;
count__14759_14763 = G__14775;
i__14760_14764 = G__14776;
continue;
} else {
var s_14777 = cljs.core.first.call(null,seq__14757_14771__$1);
cljs.compiler.emitln.call(null,s_14777);


var G__14778 = cljs.core.next.call(null,seq__14757_14771__$1);
var G__14779 = null;
var G__14780 = (0);
var G__14781 = (0);
seq__14757_14761 = G__14778;
chunk__14758_14762 = G__14779;
count__14759_14763 = G__14780;
i__14760_14764 = G__14781;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__14782){
var map__14783 = p__14782;
var map__14783__$1 = ((((!((map__14783 == null)))?(((((map__14783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14783):map__14783);
var env = cljs.core.get.call(null,map__14783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__14783__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__14783__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__14783__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__14783__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__14785,is_loop){
var map__14786 = p__14785;
var map__14786__$1 = ((((!((map__14786 == null)))?(((((map__14786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14786):map__14786);
var bindings = cljs.core.get.call(null,map__14786__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14786__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_14788_14797 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_14788_14797,context,map__14786,map__14786__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_14788_14797,context,map__14786,map__14786__$1,bindings,expr,env))
,bindings):null));

try{var seq__14789_14798 = cljs.core.seq.call(null,bindings);
var chunk__14790_14799 = null;
var count__14791_14800 = (0);
var i__14792_14801 = (0);
while(true){
if((i__14792_14801 < count__14791_14800)){
var map__14793_14802 = cljs.core._nth.call(null,chunk__14790_14799,i__14792_14801);
var map__14793_14803__$1 = ((((!((map__14793_14802 == null)))?(((((map__14793_14802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14793_14802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14793_14802):map__14793_14802);
var binding_14804 = map__14793_14803__$1;
var init_14805 = cljs.core.get.call(null,map__14793_14803__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14804);

cljs.compiler.emitln.call(null," = ",init_14805,";");


var G__14806 = seq__14789_14798;
var G__14807 = chunk__14790_14799;
var G__14808 = count__14791_14800;
var G__14809 = (i__14792_14801 + (1));
seq__14789_14798 = G__14806;
chunk__14790_14799 = G__14807;
count__14791_14800 = G__14808;
i__14792_14801 = G__14809;
continue;
} else {
var temp__5457__auto___14810 = cljs.core.seq.call(null,seq__14789_14798);
if(temp__5457__auto___14810){
var seq__14789_14811__$1 = temp__5457__auto___14810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14789_14811__$1)){
var c__4319__auto___14812 = cljs.core.chunk_first.call(null,seq__14789_14811__$1);
var G__14813 = cljs.core.chunk_rest.call(null,seq__14789_14811__$1);
var G__14814 = c__4319__auto___14812;
var G__14815 = cljs.core.count.call(null,c__4319__auto___14812);
var G__14816 = (0);
seq__14789_14798 = G__14813;
chunk__14790_14799 = G__14814;
count__14791_14800 = G__14815;
i__14792_14801 = G__14816;
continue;
} else {
var map__14795_14817 = cljs.core.first.call(null,seq__14789_14811__$1);
var map__14795_14818__$1 = ((((!((map__14795_14817 == null)))?(((((map__14795_14817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14795_14817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14795_14817):map__14795_14817);
var binding_14819 = map__14795_14818__$1;
var init_14820 = cljs.core.get.call(null,map__14795_14818__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_14819);

cljs.compiler.emitln.call(null," = ",init_14820,";");


var G__14821 = cljs.core.next.call(null,seq__14789_14811__$1);
var G__14822 = null;
var G__14823 = (0);
var G__14824 = (0);
seq__14789_14798 = G__14821;
chunk__14790_14799 = G__14822;
count__14791_14800 = G__14823;
i__14792_14801 = G__14824;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_14788_14797;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__14825){
var map__14826 = p__14825;
var map__14826__$1 = ((((!((map__14826 == null)))?(((((map__14826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14826):map__14826);
var frame = cljs.core.get.call(null,map__14826__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__14826__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__14826__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___14828 = cljs.core.count.call(null,exprs);
var i_14829 = (0);
while(true){
if((i_14829 < n__4376__auto___14828)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_14829)," = ",exprs.call(null,i_14829),";");

var G__14830 = (i_14829 + (1));
i_14829 = G__14830;
continue;
} else {
}
break;
}

var n__4376__auto___14831 = cljs.core.count.call(null,exprs);
var i_14832 = (0);
while(true){
if((i_14832 < n__4376__auto___14831)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_14832))," = ",temps.call(null,i_14832),";");

var G__14833 = (i_14832 + (1));
i_14832 = G__14833;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__14834){
var map__14835 = p__14834;
var map__14835__$1 = ((((!((map__14835 == null)))?(((((map__14835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14835):map__14835);
var bindings = cljs.core.get.call(null,map__14835__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__14835__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__14835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__14837_14845 = cljs.core.seq.call(null,bindings);
var chunk__14838_14846 = null;
var count__14839_14847 = (0);
var i__14840_14848 = (0);
while(true){
if((i__14840_14848 < count__14839_14847)){
var map__14841_14849 = cljs.core._nth.call(null,chunk__14838_14846,i__14840_14848);
var map__14841_14850__$1 = ((((!((map__14841_14849 == null)))?(((((map__14841_14849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14841_14849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14841_14849):map__14841_14849);
var binding_14851 = map__14841_14850__$1;
var init_14852 = cljs.core.get.call(null,map__14841_14850__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14851)," = ",init_14852,";");


var G__14853 = seq__14837_14845;
var G__14854 = chunk__14838_14846;
var G__14855 = count__14839_14847;
var G__14856 = (i__14840_14848 + (1));
seq__14837_14845 = G__14853;
chunk__14838_14846 = G__14854;
count__14839_14847 = G__14855;
i__14840_14848 = G__14856;
continue;
} else {
var temp__5457__auto___14857 = cljs.core.seq.call(null,seq__14837_14845);
if(temp__5457__auto___14857){
var seq__14837_14858__$1 = temp__5457__auto___14857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14837_14858__$1)){
var c__4319__auto___14859 = cljs.core.chunk_first.call(null,seq__14837_14858__$1);
var G__14860 = cljs.core.chunk_rest.call(null,seq__14837_14858__$1);
var G__14861 = c__4319__auto___14859;
var G__14862 = cljs.core.count.call(null,c__4319__auto___14859);
var G__14863 = (0);
seq__14837_14845 = G__14860;
chunk__14838_14846 = G__14861;
count__14839_14847 = G__14862;
i__14840_14848 = G__14863;
continue;
} else {
var map__14843_14864 = cljs.core.first.call(null,seq__14837_14858__$1);
var map__14843_14865__$1 = ((((!((map__14843_14864 == null)))?(((((map__14843_14864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14843_14864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14843_14864):map__14843_14864);
var binding_14866 = map__14843_14865__$1;
var init_14867 = cljs.core.get.call(null,map__14843_14865__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_14866)," = ",init_14867,";");


var G__14868 = cljs.core.next.call(null,seq__14837_14858__$1);
var G__14869 = null;
var G__14870 = (0);
var G__14871 = (0);
seq__14837_14845 = G__14868;
chunk__14838_14846 = G__14869;
count__14839_14847 = G__14870;
i__14840_14848 = G__14871;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__14874){
var map__14875 = p__14874;
var map__14875__$1 = ((((!((map__14875 == null)))?(((((map__14875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14875):map__14875);
var expr = map__14875__$1;
var f = cljs.core.get.call(null,map__14875__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__14875__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14877 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env){
return (function (p1__14872_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14872_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env){
return (function (p1__14873_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__14873_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__14875,map__14875__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__14877,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__14877,(1),null);
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_14880 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_14880,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14881 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_14881,args)),(((mfa_14881 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_14881,args)),"], 0))");
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
var fprop_14882 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_14882," ? ",f__$1,fprop_14882,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_14882," ? ",f__$1,fprop_14882,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__14883){
var map__14884 = p__14883;
var map__14884__$1 = ((((!((map__14884 == null)))?(((((map__14884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14884):map__14884);
var ctor = cljs.core.get.call(null,map__14884__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__14884__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__14884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__14886){
var map__14887 = p__14886;
var map__14887__$1 = ((((!((map__14887 == null)))?(((((map__14887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14887):map__14887);
var target = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__14887__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__14889 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__14889__$1 = ((((!((map__14889 == null)))?(((((map__14889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14889):map__14889);
var options = cljs.core.get.call(null,map__14889__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__14889__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__14890 = options;
var map__14890__$1 = ((((!((map__14890 == null)))?(((((map__14890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14890):map__14890);
var target = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__14890__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__14891 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__14896 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__14896__$1 = ((((!((map__14896 == null)))?(((((map__14896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14896):map__14896);
var node_libs = cljs.core.get.call(null,map__14896__$1,true);
var libs_to_load = cljs.core.get.call(null,map__14896__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__14891,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__14891,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__14898_14914 = cljs.core.seq.call(null,libs_to_load);
var chunk__14899_14915 = null;
var count__14900_14916 = (0);
var i__14901_14917 = (0);
while(true){
if((i__14901_14917 < count__14900_14916)){
var lib_14918 = cljs.core._nth.call(null,chunk__14899_14915,i__14901_14917);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14918)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14918),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14918),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14918),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14918),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14918),"');");

}
}
}


var G__14919 = seq__14898_14914;
var G__14920 = chunk__14899_14915;
var G__14921 = count__14900_14916;
var G__14922 = (i__14901_14917 + (1));
seq__14898_14914 = G__14919;
chunk__14899_14915 = G__14920;
count__14900_14916 = G__14921;
i__14901_14917 = G__14922;
continue;
} else {
var temp__5457__auto___14923 = cljs.core.seq.call(null,seq__14898_14914);
if(temp__5457__auto___14923){
var seq__14898_14924__$1 = temp__5457__auto___14923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14898_14924__$1)){
var c__4319__auto___14925 = cljs.core.chunk_first.call(null,seq__14898_14924__$1);
var G__14926 = cljs.core.chunk_rest.call(null,seq__14898_14924__$1);
var G__14927 = c__4319__auto___14925;
var G__14928 = cljs.core.count.call(null,c__4319__auto___14925);
var G__14929 = (0);
seq__14898_14914 = G__14926;
chunk__14899_14915 = G__14927;
count__14900_14916 = G__14928;
i__14901_14917 = G__14929;
continue;
} else {
var lib_14930 = cljs.core.first.call(null,seq__14898_14924__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_14930)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14930),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14930),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_14930),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14930),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_14930),"');");

}
}
}


var G__14931 = cljs.core.next.call(null,seq__14898_14924__$1);
var G__14932 = null;
var G__14933 = (0);
var G__14934 = (0);
seq__14898_14914 = G__14931;
chunk__14899_14915 = G__14932;
count__14900_14916 = G__14933;
i__14901_14917 = G__14934;
continue;
}
} else {
}
}
break;
}

var seq__14902_14935 = cljs.core.seq.call(null,node_libs);
var chunk__14903_14936 = null;
var count__14904_14937 = (0);
var i__14905_14938 = (0);
while(true){
if((i__14905_14938 < count__14904_14937)){
var lib_14939 = cljs.core._nth.call(null,chunk__14903_14936,i__14905_14938);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_14939)," = require('",lib_14939,"');");


var G__14940 = seq__14902_14935;
var G__14941 = chunk__14903_14936;
var G__14942 = count__14904_14937;
var G__14943 = (i__14905_14938 + (1));
seq__14902_14935 = G__14940;
chunk__14903_14936 = G__14941;
count__14904_14937 = G__14942;
i__14905_14938 = G__14943;
continue;
} else {
var temp__5457__auto___14944 = cljs.core.seq.call(null,seq__14902_14935);
if(temp__5457__auto___14944){
var seq__14902_14945__$1 = temp__5457__auto___14944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14902_14945__$1)){
var c__4319__auto___14946 = cljs.core.chunk_first.call(null,seq__14902_14945__$1);
var G__14947 = cljs.core.chunk_rest.call(null,seq__14902_14945__$1);
var G__14948 = c__4319__auto___14946;
var G__14949 = cljs.core.count.call(null,c__4319__auto___14946);
var G__14950 = (0);
seq__14902_14935 = G__14947;
chunk__14903_14936 = G__14948;
count__14904_14937 = G__14949;
i__14905_14938 = G__14950;
continue;
} else {
var lib_14951 = cljs.core.first.call(null,seq__14902_14945__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_14951)," = require('",lib_14951,"');");


var G__14952 = cljs.core.next.call(null,seq__14902_14945__$1);
var G__14953 = null;
var G__14954 = (0);
var G__14955 = (0);
seq__14902_14935 = G__14952;
chunk__14903_14936 = G__14953;
count__14904_14937 = G__14954;
i__14905_14938 = G__14955;
continue;
}
} else {
}
}
break;
}

var seq__14906_14956 = cljs.core.seq.call(null,global_exports_libs);
var chunk__14907_14957 = null;
var count__14908_14958 = (0);
var i__14909_14959 = (0);
while(true){
if((i__14909_14959 < count__14908_14958)){
var lib_14960 = cljs.core._nth.call(null,chunk__14907_14957,i__14909_14959);
var map__14910_14961 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_14960));
var map__14910_14962__$1 = ((((!((map__14910_14961 == null)))?(((((map__14910_14961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14910_14961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14910_14961):map__14910_14961);
var global_exports_14963 = cljs.core.get.call(null,map__14910_14962__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_14960)," = goog.global.",cljs.core.get.call(null,global_exports_14963,cljs.core.symbol.call(null,lib_14960)),";");


var G__14964 = seq__14906_14956;
var G__14965 = chunk__14907_14957;
var G__14966 = count__14908_14958;
var G__14967 = (i__14909_14959 + (1));
seq__14906_14956 = G__14964;
chunk__14907_14957 = G__14965;
count__14908_14958 = G__14966;
i__14909_14959 = G__14967;
continue;
} else {
var temp__5457__auto___14968 = cljs.core.seq.call(null,seq__14906_14956);
if(temp__5457__auto___14968){
var seq__14906_14969__$1 = temp__5457__auto___14968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14906_14969__$1)){
var c__4319__auto___14970 = cljs.core.chunk_first.call(null,seq__14906_14969__$1);
var G__14971 = cljs.core.chunk_rest.call(null,seq__14906_14969__$1);
var G__14972 = c__4319__auto___14970;
var G__14973 = cljs.core.count.call(null,c__4319__auto___14970);
var G__14974 = (0);
seq__14906_14956 = G__14971;
chunk__14907_14957 = G__14972;
count__14908_14958 = G__14973;
i__14909_14959 = G__14974;
continue;
} else {
var lib_14975 = cljs.core.first.call(null,seq__14906_14969__$1);
var map__14912_14976 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_14975));
var map__14912_14977__$1 = ((((!((map__14912_14976 == null)))?(((((map__14912_14976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14912_14976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14912_14976):map__14912_14976);
var global_exports_14978 = cljs.core.get.call(null,map__14912_14977__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_14975)," = goog.global.",cljs.core.get.call(null,global_exports_14978,cljs.core.symbol.call(null,lib_14975)),";");


var G__14979 = cljs.core.next.call(null,seq__14906_14969__$1);
var G__14980 = null;
var G__14981 = (0);
var G__14982 = (0);
seq__14906_14956 = G__14979;
chunk__14907_14957 = G__14980;
count__14908_14958 = G__14981;
i__14909_14959 = G__14982;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__14983){
var map__14984 = p__14983;
var map__14984__$1 = ((((!((map__14984 == null)))?(((((map__14984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14984):map__14984);
var name = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14984__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__14986){
var map__14987 = p__14986;
var map__14987__$1 = ((((!((map__14987 == null)))?(((((map__14987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14987):map__14987);
var name = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__14987__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__14989){
var map__14990 = p__14989;
var map__14990__$1 = ((((!((map__14990 == null)))?(((((map__14990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14990):map__14990);
var t = cljs.core.get.call(null,map__14990__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__14990__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__14990__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__14990__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__14990__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__14992_15010 = cljs.core.seq.call(null,protocols);
var chunk__14993_15011 = null;
var count__14994_15012 = (0);
var i__14995_15013 = (0);
while(true){
if((i__14995_15013 < count__14994_15012)){
var protocol_15014 = cljs.core._nth.call(null,chunk__14993_15011,i__14995_15013);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15014)].join('')),"}");


var G__15015 = seq__14992_15010;
var G__15016 = chunk__14993_15011;
var G__15017 = count__14994_15012;
var G__15018 = (i__14995_15013 + (1));
seq__14992_15010 = G__15015;
chunk__14993_15011 = G__15016;
count__14994_15012 = G__15017;
i__14995_15013 = G__15018;
continue;
} else {
var temp__5457__auto___15019 = cljs.core.seq.call(null,seq__14992_15010);
if(temp__5457__auto___15019){
var seq__14992_15020__$1 = temp__5457__auto___15019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14992_15020__$1)){
var c__4319__auto___15021 = cljs.core.chunk_first.call(null,seq__14992_15020__$1);
var G__15022 = cljs.core.chunk_rest.call(null,seq__14992_15020__$1);
var G__15023 = c__4319__auto___15021;
var G__15024 = cljs.core.count.call(null,c__4319__auto___15021);
var G__15025 = (0);
seq__14992_15010 = G__15022;
chunk__14993_15011 = G__15023;
count__14994_15012 = G__15024;
i__14995_15013 = G__15025;
continue;
} else {
var protocol_15026 = cljs.core.first.call(null,seq__14992_15020__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15026)].join('')),"}");


var G__15027 = cljs.core.next.call(null,seq__14992_15020__$1);
var G__15028 = null;
var G__15029 = (0);
var G__15030 = (0);
seq__14992_15010 = G__15027;
chunk__14993_15011 = G__15028;
count__14994_15012 = G__15029;
i__14995_15013 = G__15030;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__14996_15031 = cljs.core.seq.call(null,fields__$1);
var chunk__14997_15032 = null;
var count__14998_15033 = (0);
var i__14999_15034 = (0);
while(true){
if((i__14999_15034 < count__14998_15033)){
var fld_15035 = cljs.core._nth.call(null,chunk__14997_15032,i__14999_15034);
cljs.compiler.emitln.call(null,"this.",fld_15035," = ",fld_15035,";");


var G__15036 = seq__14996_15031;
var G__15037 = chunk__14997_15032;
var G__15038 = count__14998_15033;
var G__15039 = (i__14999_15034 + (1));
seq__14996_15031 = G__15036;
chunk__14997_15032 = G__15037;
count__14998_15033 = G__15038;
i__14999_15034 = G__15039;
continue;
} else {
var temp__5457__auto___15040 = cljs.core.seq.call(null,seq__14996_15031);
if(temp__5457__auto___15040){
var seq__14996_15041__$1 = temp__5457__auto___15040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14996_15041__$1)){
var c__4319__auto___15042 = cljs.core.chunk_first.call(null,seq__14996_15041__$1);
var G__15043 = cljs.core.chunk_rest.call(null,seq__14996_15041__$1);
var G__15044 = c__4319__auto___15042;
var G__15045 = cljs.core.count.call(null,c__4319__auto___15042);
var G__15046 = (0);
seq__14996_15031 = G__15043;
chunk__14997_15032 = G__15044;
count__14998_15033 = G__15045;
i__14999_15034 = G__15046;
continue;
} else {
var fld_15047 = cljs.core.first.call(null,seq__14996_15041__$1);
cljs.compiler.emitln.call(null,"this.",fld_15047," = ",fld_15047,";");


var G__15048 = cljs.core.next.call(null,seq__14996_15041__$1);
var G__15049 = null;
var G__15050 = (0);
var G__15051 = (0);
seq__14996_15031 = G__15048;
chunk__14997_15032 = G__15049;
count__14998_15033 = G__15050;
i__14999_15034 = G__15051;
continue;
}
} else {
}
}
break;
}

var seq__15000_15052 = cljs.core.seq.call(null,pmasks);
var chunk__15001_15053 = null;
var count__15002_15054 = (0);
var i__15003_15055 = (0);
while(true){
if((i__15003_15055 < count__15002_15054)){
var vec__15004_15056 = cljs.core._nth.call(null,chunk__15001_15053,i__15003_15055);
var pno_15057 = cljs.core.nth.call(null,vec__15004_15056,(0),null);
var pmask_15058 = cljs.core.nth.call(null,vec__15004_15056,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15057,"$ = ",pmask_15058,";");


var G__15059 = seq__15000_15052;
var G__15060 = chunk__15001_15053;
var G__15061 = count__15002_15054;
var G__15062 = (i__15003_15055 + (1));
seq__15000_15052 = G__15059;
chunk__15001_15053 = G__15060;
count__15002_15054 = G__15061;
i__15003_15055 = G__15062;
continue;
} else {
var temp__5457__auto___15063 = cljs.core.seq.call(null,seq__15000_15052);
if(temp__5457__auto___15063){
var seq__15000_15064__$1 = temp__5457__auto___15063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15000_15064__$1)){
var c__4319__auto___15065 = cljs.core.chunk_first.call(null,seq__15000_15064__$1);
var G__15066 = cljs.core.chunk_rest.call(null,seq__15000_15064__$1);
var G__15067 = c__4319__auto___15065;
var G__15068 = cljs.core.count.call(null,c__4319__auto___15065);
var G__15069 = (0);
seq__15000_15052 = G__15066;
chunk__15001_15053 = G__15067;
count__15002_15054 = G__15068;
i__15003_15055 = G__15069;
continue;
} else {
var vec__15007_15070 = cljs.core.first.call(null,seq__15000_15064__$1);
var pno_15071 = cljs.core.nth.call(null,vec__15007_15070,(0),null);
var pmask_15072 = cljs.core.nth.call(null,vec__15007_15070,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15071,"$ = ",pmask_15072,";");


var G__15073 = cljs.core.next.call(null,seq__15000_15064__$1);
var G__15074 = null;
var G__15075 = (0);
var G__15076 = (0);
seq__15000_15052 = G__15073;
chunk__15001_15053 = G__15074;
count__15002_15054 = G__15075;
i__15003_15055 = G__15076;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15077){
var map__15078 = p__15077;
var map__15078__$1 = ((((!((map__15078 == null)))?(((((map__15078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15078):map__15078);
var t = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15078__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15080_15098 = cljs.core.seq.call(null,protocols);
var chunk__15081_15099 = null;
var count__15082_15100 = (0);
var i__15083_15101 = (0);
while(true){
if((i__15083_15101 < count__15082_15100)){
var protocol_15102 = cljs.core._nth.call(null,chunk__15081_15099,i__15083_15101);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15102)].join('')),"}");


var G__15103 = seq__15080_15098;
var G__15104 = chunk__15081_15099;
var G__15105 = count__15082_15100;
var G__15106 = (i__15083_15101 + (1));
seq__15080_15098 = G__15103;
chunk__15081_15099 = G__15104;
count__15082_15100 = G__15105;
i__15083_15101 = G__15106;
continue;
} else {
var temp__5457__auto___15107 = cljs.core.seq.call(null,seq__15080_15098);
if(temp__5457__auto___15107){
var seq__15080_15108__$1 = temp__5457__auto___15107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15080_15108__$1)){
var c__4319__auto___15109 = cljs.core.chunk_first.call(null,seq__15080_15108__$1);
var G__15110 = cljs.core.chunk_rest.call(null,seq__15080_15108__$1);
var G__15111 = c__4319__auto___15109;
var G__15112 = cljs.core.count.call(null,c__4319__auto___15109);
var G__15113 = (0);
seq__15080_15098 = G__15110;
chunk__15081_15099 = G__15111;
count__15082_15100 = G__15112;
i__15083_15101 = G__15113;
continue;
} else {
var protocol_15114 = cljs.core.first.call(null,seq__15080_15108__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15114)].join('')),"}");


var G__15115 = cljs.core.next.call(null,seq__15080_15108__$1);
var G__15116 = null;
var G__15117 = (0);
var G__15118 = (0);
seq__15080_15098 = G__15115;
chunk__15081_15099 = G__15116;
count__15082_15100 = G__15117;
i__15083_15101 = G__15118;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15084_15119 = cljs.core.seq.call(null,fields__$1);
var chunk__15085_15120 = null;
var count__15086_15121 = (0);
var i__15087_15122 = (0);
while(true){
if((i__15087_15122 < count__15086_15121)){
var fld_15123 = cljs.core._nth.call(null,chunk__15085_15120,i__15087_15122);
cljs.compiler.emitln.call(null,"this.",fld_15123," = ",fld_15123,";");


var G__15124 = seq__15084_15119;
var G__15125 = chunk__15085_15120;
var G__15126 = count__15086_15121;
var G__15127 = (i__15087_15122 + (1));
seq__15084_15119 = G__15124;
chunk__15085_15120 = G__15125;
count__15086_15121 = G__15126;
i__15087_15122 = G__15127;
continue;
} else {
var temp__5457__auto___15128 = cljs.core.seq.call(null,seq__15084_15119);
if(temp__5457__auto___15128){
var seq__15084_15129__$1 = temp__5457__auto___15128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15084_15129__$1)){
var c__4319__auto___15130 = cljs.core.chunk_first.call(null,seq__15084_15129__$1);
var G__15131 = cljs.core.chunk_rest.call(null,seq__15084_15129__$1);
var G__15132 = c__4319__auto___15130;
var G__15133 = cljs.core.count.call(null,c__4319__auto___15130);
var G__15134 = (0);
seq__15084_15119 = G__15131;
chunk__15085_15120 = G__15132;
count__15086_15121 = G__15133;
i__15087_15122 = G__15134;
continue;
} else {
var fld_15135 = cljs.core.first.call(null,seq__15084_15129__$1);
cljs.compiler.emitln.call(null,"this.",fld_15135," = ",fld_15135,";");


var G__15136 = cljs.core.next.call(null,seq__15084_15129__$1);
var G__15137 = null;
var G__15138 = (0);
var G__15139 = (0);
seq__15084_15119 = G__15136;
chunk__15085_15120 = G__15137;
count__15086_15121 = G__15138;
i__15087_15122 = G__15139;
continue;
}
} else {
}
}
break;
}

var seq__15088_15140 = cljs.core.seq.call(null,pmasks);
var chunk__15089_15141 = null;
var count__15090_15142 = (0);
var i__15091_15143 = (0);
while(true){
if((i__15091_15143 < count__15090_15142)){
var vec__15092_15144 = cljs.core._nth.call(null,chunk__15089_15141,i__15091_15143);
var pno_15145 = cljs.core.nth.call(null,vec__15092_15144,(0),null);
var pmask_15146 = cljs.core.nth.call(null,vec__15092_15144,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15145,"$ = ",pmask_15146,";");


var G__15147 = seq__15088_15140;
var G__15148 = chunk__15089_15141;
var G__15149 = count__15090_15142;
var G__15150 = (i__15091_15143 + (1));
seq__15088_15140 = G__15147;
chunk__15089_15141 = G__15148;
count__15090_15142 = G__15149;
i__15091_15143 = G__15150;
continue;
} else {
var temp__5457__auto___15151 = cljs.core.seq.call(null,seq__15088_15140);
if(temp__5457__auto___15151){
var seq__15088_15152__$1 = temp__5457__auto___15151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15088_15152__$1)){
var c__4319__auto___15153 = cljs.core.chunk_first.call(null,seq__15088_15152__$1);
var G__15154 = cljs.core.chunk_rest.call(null,seq__15088_15152__$1);
var G__15155 = c__4319__auto___15153;
var G__15156 = cljs.core.count.call(null,c__4319__auto___15153);
var G__15157 = (0);
seq__15088_15140 = G__15154;
chunk__15089_15141 = G__15155;
count__15090_15142 = G__15156;
i__15091_15143 = G__15157;
continue;
} else {
var vec__15095_15158 = cljs.core.first.call(null,seq__15088_15152__$1);
var pno_15159 = cljs.core.nth.call(null,vec__15095_15158,(0),null);
var pmask_15160 = cljs.core.nth.call(null,vec__15095_15158,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15159,"$ = ",pmask_15160,";");


var G__15161 = cljs.core.next.call(null,seq__15088_15152__$1);
var G__15162 = null;
var G__15163 = (0);
var G__15164 = (0);
seq__15088_15140 = G__15161;
chunk__15089_15141 = G__15162;
count__15090_15142 = G__15163;
i__15091_15143 = G__15164;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15165){
var map__15166 = p__15165;
var map__15166__$1 = ((((!((map__15166 == null)))?(((((map__15166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15166):map__15166);
var target = cljs.core.get.call(null,map__15166__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15166__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15166__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15166__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15168){
var map__15169 = p__15168;
var map__15169__$1 = ((((!((map__15169 == null)))?(((((map__15169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15169):map__15169);
var op = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15169__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12960__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12960__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__15174 = cljs.core.seq.call(null,table);
var chunk__15175 = null;
var count__15176 = (0);
var i__15177 = (0);
while(true){
if((i__15177 < count__15176)){
var vec__15178 = cljs.core._nth.call(null,chunk__15175,i__15177);
var sym = cljs.core.nth.call(null,vec__15178,(0),null);
var value = cljs.core.nth.call(null,vec__15178,(1),null);
var ns_15184 = cljs.core.namespace.call(null,sym);
var name_15185 = cljs.core.name.call(null,sym);
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


var G__15186 = seq__15174;
var G__15187 = chunk__15175;
var G__15188 = count__15176;
var G__15189 = (i__15177 + (1));
seq__15174 = G__15186;
chunk__15175 = G__15187;
count__15176 = G__15188;
i__15177 = G__15189;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15174);
if(temp__5457__auto__){
var seq__15174__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15174__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__15174__$1);
var G__15190 = cljs.core.chunk_rest.call(null,seq__15174__$1);
var G__15191 = c__4319__auto__;
var G__15192 = cljs.core.count.call(null,c__4319__auto__);
var G__15193 = (0);
seq__15174 = G__15190;
chunk__15175 = G__15191;
count__15176 = G__15192;
i__15177 = G__15193;
continue;
} else {
var vec__15181 = cljs.core.first.call(null,seq__15174__$1);
var sym = cljs.core.nth.call(null,vec__15181,(0),null);
var value = cljs.core.nth.call(null,vec__15181,(1),null);
var ns_15194 = cljs.core.namespace.call(null,sym);
var name_15195 = cljs.core.name.call(null,sym);
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


var G__15196 = cljs.core.next.call(null,seq__15174__$1);
var G__15197 = null;
var G__15198 = (0);
var G__15199 = (0);
seq__15174 = G__15196;
chunk__15175 = G__15197;
count__15176 = G__15198;
i__15177 = G__15199;
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
var G__15201 = arguments.length;
switch (G__15201) {
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
var k_15206 = cljs.core.first.call(null,ks);
var vec__15202_15207 = cljs.core.conj.call(null,prefix,k_15206);
var top_15208 = cljs.core.nth.call(null,vec__15202_15207,(0),null);
var prefix_SINGLEQUOTE__15209 = vec__15202_15207;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_15206)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__15209) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_15208)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_15208))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15209)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_15208);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15209)),";");
}
} else {
}

var m_15210 = cljs.core.get.call(null,externs,k_15206);
if(cljs.core.empty_QMARK_.call(null,m_15210)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__15209,m_15210,top_level,known_externs);
}

var G__15211 = cljs.core.next.call(null,ks);
ks = G__15211;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
