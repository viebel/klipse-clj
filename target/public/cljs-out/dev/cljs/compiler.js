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
var map__118990 = s;
var map__118990__$1 = ((((!((map__118990 == null)))?(((((map__118990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118990):map__118990);
var name = cljs.core.get.call(null,map__118990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__118990__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__118993 = info;
var map__118994 = G__118993;
var map__118994__$1 = ((((!((map__118994 == null)))?(((((map__118994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118994):map__118994);
var shadow = cljs.core.get.call(null,map__118994__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__118993__$1 = G__118993;
while(true){
var d__$2 = d__$1;
var map__118996 = G__118993__$1;
var map__118996__$1 = ((((!((map__118996 == null)))?(((((map__118996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118996):map__118996);
var shadow__$1 = cljs.core.get.call(null,map__118996__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__118998 = (d__$2 + (1));
var G__118999 = shadow__$1;
d__$1 = G__118998;
G__118993__$1 = G__118999;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__119000){
var map__119001 = p__119000;
var map__119001__$1 = ((((!((map__119001 == null)))?(((((map__119001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119001):map__119001);
var name_var = map__119001__$1;
var name = cljs.core.get.call(null,map__119001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__119001__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__119003 = info;
var map__119003__$1 = ((((!((map__119003 == null)))?(((((map__119003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119003):map__119003);
var ns = cljs.core.get.call(null,map__119003__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__119003__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__119006 = arguments.length;
switch (G__119006) {
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
var G__119008 = cp;
switch (G__119008) {
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
var seq__119010_119014 = cljs.core.seq.call(null,s);
var chunk__119011_119015 = null;
var count__119012_119016 = (0);
var i__119013_119017 = (0);
while(true){
if((i__119013_119017 < count__119012_119016)){
var c_119018 = cljs.core._nth.call(null,chunk__119011_119015,i__119013_119017);
sb.append(cljs.compiler.escape_char.call(null,c_119018));


var G__119019 = seq__119010_119014;
var G__119020 = chunk__119011_119015;
var G__119021 = count__119012_119016;
var G__119022 = (i__119013_119017 + (1));
seq__119010_119014 = G__119019;
chunk__119011_119015 = G__119020;
count__119012_119016 = G__119021;
i__119013_119017 = G__119022;
continue;
} else {
var temp__5457__auto___119023 = cljs.core.seq.call(null,seq__119010_119014);
if(temp__5457__auto___119023){
var seq__119010_119024__$1 = temp__5457__auto___119023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119010_119024__$1)){
var c__4319__auto___119025 = cljs.core.chunk_first.call(null,seq__119010_119024__$1);
var G__119026 = cljs.core.chunk_rest.call(null,seq__119010_119024__$1);
var G__119027 = c__4319__auto___119025;
var G__119028 = cljs.core.count.call(null,c__4319__auto___119025);
var G__119029 = (0);
seq__119010_119014 = G__119026;
chunk__119011_119015 = G__119027;
count__119012_119016 = G__119028;
i__119013_119017 = G__119029;
continue;
} else {
var c_119030 = cljs.core.first.call(null,seq__119010_119024__$1);
sb.append(cljs.compiler.escape_char.call(null,c_119030));


var G__119031 = cljs.core.next.call(null,seq__119010_119024__$1);
var G__119032 = null;
var G__119033 = (0);
var G__119034 = (0);
seq__119010_119014 = G__119031;
chunk__119011_119015 = G__119032;
count__119012_119016 = G__119033;
i__119013_119017 = G__119034;
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
var val__14115__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__14115__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__119035_119040 = ast;
var map__119035_119041__$1 = ((((!((map__119035_119040 == null)))?(((((map__119035_119040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119035_119040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119035_119040):map__119035_119040);
var env_119042 = cljs.core.get.call(null,map__119035_119041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_119042))){
var map__119037_119043 = env_119042;
var map__119037_119044__$1 = ((((!((map__119037_119043 == null)))?(((((map__119037_119043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119037_119043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119037_119043):map__119037_119043);
var line_119045 = cljs.core.get.call(null,map__119037_119044__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_119046 = cljs.core.get.call(null,map__119037_119044__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__){
return (function (m){
var minfo = (function (){var G__119039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__119039,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__119039;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_119045 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_119046)?(column_119046 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__119037_119043,map__119037_119044__$1,line_119045,column_119046,map__119035_119040,map__119035_119041__$1,env_119042,val__14115__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__14115__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___119053 = arguments.length;
var i__4500__auto___119054 = (0);
while(true){
if((i__4500__auto___119054 < len__4499__auto___119053)){
args__4502__auto__.push((arguments[i__4500__auto___119054]));

var G__119055 = (i__4500__auto___119054 + (1));
i__4500__auto___119054 = G__119055;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__119049_119056 = cljs.core.seq.call(null,xs);
var chunk__119050_119057 = null;
var count__119051_119058 = (0);
var i__119052_119059 = (0);
while(true){
if((i__119052_119059 < count__119051_119058)){
var x_119060 = cljs.core._nth.call(null,chunk__119050_119057,i__119052_119059);
if((x_119060 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_119060)){
cljs.compiler.emit.call(null,x_119060);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_119060)){
cljs.core.apply.call(null,cljs.compiler.emits,x_119060);
} else {
if(goog.isFunction(x_119060)){
x_119060.call(null);
} else {
var s_119061 = cljs.core.print_str.call(null,x_119060);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__119049_119056,chunk__119050_119057,count__119051_119058,i__119052_119059,s_119061,x_119060){
return (function (p1__119047_SHARP_){
return (p1__119047_SHARP_ + cljs.core.count.call(null,s_119061));
});})(seq__119049_119056,chunk__119050_119057,count__119051_119058,i__119052_119059,s_119061,x_119060))
);
}

cljs.core.print.call(null,s_119061);

}
}
}
}


var G__119062 = seq__119049_119056;
var G__119063 = chunk__119050_119057;
var G__119064 = count__119051_119058;
var G__119065 = (i__119052_119059 + (1));
seq__119049_119056 = G__119062;
chunk__119050_119057 = G__119063;
count__119051_119058 = G__119064;
i__119052_119059 = G__119065;
continue;
} else {
var temp__5457__auto___119066 = cljs.core.seq.call(null,seq__119049_119056);
if(temp__5457__auto___119066){
var seq__119049_119067__$1 = temp__5457__auto___119066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119049_119067__$1)){
var c__4319__auto___119068 = cljs.core.chunk_first.call(null,seq__119049_119067__$1);
var G__119069 = cljs.core.chunk_rest.call(null,seq__119049_119067__$1);
var G__119070 = c__4319__auto___119068;
var G__119071 = cljs.core.count.call(null,c__4319__auto___119068);
var G__119072 = (0);
seq__119049_119056 = G__119069;
chunk__119050_119057 = G__119070;
count__119051_119058 = G__119071;
i__119052_119059 = G__119072;
continue;
} else {
var x_119073 = cljs.core.first.call(null,seq__119049_119067__$1);
if((x_119073 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_119073)){
cljs.compiler.emit.call(null,x_119073);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_119073)){
cljs.core.apply.call(null,cljs.compiler.emits,x_119073);
} else {
if(goog.isFunction(x_119073)){
x_119073.call(null);
} else {
var s_119074 = cljs.core.print_str.call(null,x_119073);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__119049_119056,chunk__119050_119057,count__119051_119058,i__119052_119059,s_119074,x_119073,seq__119049_119067__$1,temp__5457__auto___119066){
return (function (p1__119047_SHARP_){
return (p1__119047_SHARP_ + cljs.core.count.call(null,s_119074));
});})(seq__119049_119056,chunk__119050_119057,count__119051_119058,i__119052_119059,s_119074,x_119073,seq__119049_119067__$1,temp__5457__auto___119066))
);
}

cljs.core.print.call(null,s_119074);

}
}
}
}


var G__119075 = cljs.core.next.call(null,seq__119049_119067__$1);
var G__119076 = null;
var G__119077 = (0);
var G__119078 = (0);
seq__119049_119056 = G__119075;
chunk__119050_119057 = G__119076;
count__119051_119058 = G__119077;
i__119052_119059 = G__119078;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq119048){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119048));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___119084 = arguments.length;
var i__4500__auto___119085 = (0);
while(true){
if((i__4500__auto___119085 < len__4499__auto___119084)){
args__4502__auto__.push((arguments[i__4500__auto___119085]));

var G__119086 = (i__4500__auto___119085 + (1));
i__4500__auto___119085 = G__119086;
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

var _STAR_flush_on_newline_STAR_119080_119087 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_119080_119087;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__119081){
var map__119082 = p__119081;
var map__119082__$1 = ((((!((map__119082 == null)))?(((((map__119082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119082):map__119082);
var m = map__119082__$1;
var gen_line = cljs.core.get.call(null,map__119082__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq119079){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119079));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_119088_119090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_119089_119091 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_119088_119090,_STAR_print_fn_STAR_119089_119091,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_119088_119090,_STAR_print_fn_STAR_119089_119091,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_119089_119091;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_119088_119090;
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
var vec__119092 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__119092,(0),null);
var flags = cljs.core.nth.call(null,vec__119092,(1),null);
var pattern = cljs.core.nth.call(null,vec__119092,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__119096){
var map__119097 = p__119096;
var map__119097__$1 = ((((!((map__119097 == null)))?(((((map__119097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119097):map__119097);
var ast = map__119097__$1;
var info = cljs.core.get.call(null,map__119097__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__119097__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__119097__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__119099 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__119099__$1 = ((((!((map__119099 == null)))?(((((map__119099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119099):map__119099);
var cenv = map__119099__$1;
var options = cljs.core.get.call(null,map__119099__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__119101 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__119101,cljs.analyzer.es5_allowed);
} else {
return G__119101;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__119102 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__119102,reserved);
} else {
return G__119102;
}
})();
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__119103_119104 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__119103_119105__$1 = (((G__119103_119104 instanceof cljs.core.Keyword))?G__119103_119104.fqn:null);
switch (G__119103_119105__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__119107){
var map__119108 = p__119107;
var map__119108__$1 = ((((!((map__119108 == null)))?(((((map__119108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119108):map__119108);
var arg = map__119108__$1;
var env = cljs.core.get.call(null,map__119108__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__119108__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__119108__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__119108__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__119110 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__119110__$1 = ((((!((map__119110 == null)))?(((((map__119110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119110):map__119110);
var name = cljs.core.get.call(null,map__119110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__119112){
var map__119113 = p__119112;
var map__119113__$1 = ((((!((map__119113 == null)))?(((((map__119113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119113):map__119113);
var expr = cljs.core.get.call(null,map__119113__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__119113__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__119113__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__119115_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__119115_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__119116){
var map__119117 = p__119116;
var map__119117__$1 = ((((!((map__119117 == null)))?(((((map__119117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119117):map__119117);
var env = cljs.core.get.call(null,map__119117__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__119117__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__119117__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__119119){
var map__119120 = p__119119;
var map__119120__$1 = ((((!((map__119120 == null)))?(((((map__119120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119120):map__119120);
var items = cljs.core.get.call(null,map__119120__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__119120__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__119122){
var map__119123 = p__119122;
var map__119123__$1 = ((((!((map__119123 == null)))?(((((map__119123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119123):map__119123);
var items = cljs.core.get.call(null,map__119123__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__119123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_119125 = cljs.core.count.call(null,items);
if((cnt_119125 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_119125,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__119126_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__119126_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__119127){
var map__119128 = p__119127;
var map__119128__$1 = ((((!((map__119128 == null)))?(((((map__119128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119128):map__119128);
var items = cljs.core.get.call(null,map__119128__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__119128__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__119130){
var map__119131 = p__119130;
var map__119131__$1 = ((((!((map__119131 == null)))?(((((map__119131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119131):map__119131);
var items = cljs.core.get.call(null,map__119131__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__119131__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__119131__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___119149 = cljs.core.seq.call(null,items);
if(temp__5457__auto___119149){
var items_119150__$1 = temp__5457__auto___119149;
var vec__119133_119151 = items_119150__$1;
var seq__119134_119152 = cljs.core.seq.call(null,vec__119133_119151);
var first__119135_119153 = cljs.core.first.call(null,seq__119134_119152);
var seq__119134_119154__$1 = cljs.core.next.call(null,seq__119134_119152);
var vec__119136_119155 = first__119135_119153;
var k_119156 = cljs.core.nth.call(null,vec__119136_119155,(0),null);
var v_119157 = cljs.core.nth.call(null,vec__119136_119155,(1),null);
var r_119158 = seq__119134_119154__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_119156),"\": ",v_119157);

var seq__119139_119159 = cljs.core.seq.call(null,r_119158);
var chunk__119140_119160 = null;
var count__119141_119161 = (0);
var i__119142_119162 = (0);
while(true){
if((i__119142_119162 < count__119141_119161)){
var vec__119143_119163 = cljs.core._nth.call(null,chunk__119140_119160,i__119142_119162);
var k_119164__$1 = cljs.core.nth.call(null,vec__119143_119163,(0),null);
var v_119165__$1 = cljs.core.nth.call(null,vec__119143_119163,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_119164__$1),"\": ",v_119165__$1);


var G__119166 = seq__119139_119159;
var G__119167 = chunk__119140_119160;
var G__119168 = count__119141_119161;
var G__119169 = (i__119142_119162 + (1));
seq__119139_119159 = G__119166;
chunk__119140_119160 = G__119167;
count__119141_119161 = G__119168;
i__119142_119162 = G__119169;
continue;
} else {
var temp__5457__auto___119170__$1 = cljs.core.seq.call(null,seq__119139_119159);
if(temp__5457__auto___119170__$1){
var seq__119139_119171__$1 = temp__5457__auto___119170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119139_119171__$1)){
var c__4319__auto___119172 = cljs.core.chunk_first.call(null,seq__119139_119171__$1);
var G__119173 = cljs.core.chunk_rest.call(null,seq__119139_119171__$1);
var G__119174 = c__4319__auto___119172;
var G__119175 = cljs.core.count.call(null,c__4319__auto___119172);
var G__119176 = (0);
seq__119139_119159 = G__119173;
chunk__119140_119160 = G__119174;
count__119141_119161 = G__119175;
i__119142_119162 = G__119176;
continue;
} else {
var vec__119146_119177 = cljs.core.first.call(null,seq__119139_119171__$1);
var k_119178__$1 = cljs.core.nth.call(null,vec__119146_119177,(0),null);
var v_119179__$1 = cljs.core.nth.call(null,vec__119146_119177,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_119178__$1),"\": ",v_119179__$1);


var G__119180 = cljs.core.next.call(null,seq__119139_119171__$1);
var G__119181 = null;
var G__119182 = (0);
var G__119183 = (0);
seq__119139_119159 = G__119180;
chunk__119140_119160 = G__119181;
count__119141_119161 = G__119182;
i__119142_119162 = G__119183;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__119184){
var map__119185 = p__119184;
var map__119185__$1 = ((((!((map__119185 == null)))?(((((map__119185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119185):map__119185);
var items = cljs.core.get.call(null,map__119185__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__119185__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__119185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__119185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__119187){
var map__119188 = p__119187;
var map__119188__$1 = ((((!((map__119188 == null)))?(((((map__119188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119188):map__119188);
var form = cljs.core.get.call(null,map__119188__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__119188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__119190){
var map__119191 = p__119190;
var map__119191__$1 = ((((!((map__119191 == null)))?(((((map__119191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119191):map__119191);
var op = cljs.core.get.call(null,map__119191__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__119191__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__119191__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__119193){
var map__119194 = p__119193;
var map__119194__$1 = ((((!((map__119194 == null)))?(((((map__119194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119194):map__119194);
var op = cljs.core.get.call(null,map__119194__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__119194__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__119194__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__119196){
var map__119197 = p__119196;
var map__119197__$1 = ((((!((map__119197 == null)))?(((((map__119197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119197):map__119197);
var test = cljs.core.get.call(null,map__119197__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__119197__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__119197__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__119197__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__119197__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__119199){
var map__119200 = p__119199;
var map__119200__$1 = ((((!((map__119200 == null)))?(((((map__119200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119200):map__119200);
var v = cljs.core.get.call(null,map__119200__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__119200__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__119200__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__119200__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__119200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__119202_119220 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__119203_119221 = null;
var count__119204_119222 = (0);
var i__119205_119223 = (0);
while(true){
if((i__119205_119223 < count__119204_119222)){
var vec__119206_119224 = cljs.core._nth.call(null,chunk__119203_119221,i__119205_119223);
var ts_119225 = cljs.core.nth.call(null,vec__119206_119224,(0),null);
var then_119226 = cljs.core.nth.call(null,vec__119206_119224,(1),null);
var seq__119209_119227 = cljs.core.seq.call(null,ts_119225);
var chunk__119210_119228 = null;
var count__119211_119229 = (0);
var i__119212_119230 = (0);
while(true){
if((i__119212_119230 < count__119211_119229)){
var test_119231 = cljs.core._nth.call(null,chunk__119210_119228,i__119212_119230);
cljs.compiler.emitln.call(null,"case ",test_119231,":");


var G__119232 = seq__119209_119227;
var G__119233 = chunk__119210_119228;
var G__119234 = count__119211_119229;
var G__119235 = (i__119212_119230 + (1));
seq__119209_119227 = G__119232;
chunk__119210_119228 = G__119233;
count__119211_119229 = G__119234;
i__119212_119230 = G__119235;
continue;
} else {
var temp__5457__auto___119236 = cljs.core.seq.call(null,seq__119209_119227);
if(temp__5457__auto___119236){
var seq__119209_119237__$1 = temp__5457__auto___119236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119209_119237__$1)){
var c__4319__auto___119238 = cljs.core.chunk_first.call(null,seq__119209_119237__$1);
var G__119239 = cljs.core.chunk_rest.call(null,seq__119209_119237__$1);
var G__119240 = c__4319__auto___119238;
var G__119241 = cljs.core.count.call(null,c__4319__auto___119238);
var G__119242 = (0);
seq__119209_119227 = G__119239;
chunk__119210_119228 = G__119240;
count__119211_119229 = G__119241;
i__119212_119230 = G__119242;
continue;
} else {
var test_119243 = cljs.core.first.call(null,seq__119209_119237__$1);
cljs.compiler.emitln.call(null,"case ",test_119243,":");


var G__119244 = cljs.core.next.call(null,seq__119209_119237__$1);
var G__119245 = null;
var G__119246 = (0);
var G__119247 = (0);
seq__119209_119227 = G__119244;
chunk__119210_119228 = G__119245;
count__119211_119229 = G__119246;
i__119212_119230 = G__119247;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_119226);
} else {
cljs.compiler.emitln.call(null,then_119226);
}

cljs.compiler.emitln.call(null,"break;");


var G__119248 = seq__119202_119220;
var G__119249 = chunk__119203_119221;
var G__119250 = count__119204_119222;
var G__119251 = (i__119205_119223 + (1));
seq__119202_119220 = G__119248;
chunk__119203_119221 = G__119249;
count__119204_119222 = G__119250;
i__119205_119223 = G__119251;
continue;
} else {
var temp__5457__auto___119252 = cljs.core.seq.call(null,seq__119202_119220);
if(temp__5457__auto___119252){
var seq__119202_119253__$1 = temp__5457__auto___119252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119202_119253__$1)){
var c__4319__auto___119254 = cljs.core.chunk_first.call(null,seq__119202_119253__$1);
var G__119255 = cljs.core.chunk_rest.call(null,seq__119202_119253__$1);
var G__119256 = c__4319__auto___119254;
var G__119257 = cljs.core.count.call(null,c__4319__auto___119254);
var G__119258 = (0);
seq__119202_119220 = G__119255;
chunk__119203_119221 = G__119256;
count__119204_119222 = G__119257;
i__119205_119223 = G__119258;
continue;
} else {
var vec__119213_119259 = cljs.core.first.call(null,seq__119202_119253__$1);
var ts_119260 = cljs.core.nth.call(null,vec__119213_119259,(0),null);
var then_119261 = cljs.core.nth.call(null,vec__119213_119259,(1),null);
var seq__119216_119262 = cljs.core.seq.call(null,ts_119260);
var chunk__119217_119263 = null;
var count__119218_119264 = (0);
var i__119219_119265 = (0);
while(true){
if((i__119219_119265 < count__119218_119264)){
var test_119266 = cljs.core._nth.call(null,chunk__119217_119263,i__119219_119265);
cljs.compiler.emitln.call(null,"case ",test_119266,":");


var G__119267 = seq__119216_119262;
var G__119268 = chunk__119217_119263;
var G__119269 = count__119218_119264;
var G__119270 = (i__119219_119265 + (1));
seq__119216_119262 = G__119267;
chunk__119217_119263 = G__119268;
count__119218_119264 = G__119269;
i__119219_119265 = G__119270;
continue;
} else {
var temp__5457__auto___119271__$1 = cljs.core.seq.call(null,seq__119216_119262);
if(temp__5457__auto___119271__$1){
var seq__119216_119272__$1 = temp__5457__auto___119271__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119216_119272__$1)){
var c__4319__auto___119273 = cljs.core.chunk_first.call(null,seq__119216_119272__$1);
var G__119274 = cljs.core.chunk_rest.call(null,seq__119216_119272__$1);
var G__119275 = c__4319__auto___119273;
var G__119276 = cljs.core.count.call(null,c__4319__auto___119273);
var G__119277 = (0);
seq__119216_119262 = G__119274;
chunk__119217_119263 = G__119275;
count__119218_119264 = G__119276;
i__119219_119265 = G__119277;
continue;
} else {
var test_119278 = cljs.core.first.call(null,seq__119216_119272__$1);
cljs.compiler.emitln.call(null,"case ",test_119278,":");


var G__119279 = cljs.core.next.call(null,seq__119216_119272__$1);
var G__119280 = null;
var G__119281 = (0);
var G__119282 = (0);
seq__119216_119262 = G__119279;
chunk__119217_119263 = G__119280;
count__119218_119264 = G__119281;
i__119219_119265 = G__119282;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_119261);
} else {
cljs.compiler.emitln.call(null,then_119261);
}

cljs.compiler.emitln.call(null,"break;");


var G__119283 = cljs.core.next.call(null,seq__119202_119253__$1);
var G__119284 = null;
var G__119285 = (0);
var G__119286 = (0);
seq__119202_119220 = G__119283;
chunk__119203_119221 = G__119284;
count__119204_119222 = G__119285;
i__119205_119223 = G__119286;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__119287){
var map__119288 = p__119287;
var map__119288__$1 = ((((!((map__119288 == null)))?(((((map__119288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119288):map__119288);
var throw$ = cljs.core.get.call(null,map__119288__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__119288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__119291 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__119291,(0),null);
var rstr = cljs.core.nth.call(null,vec__119291,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__119291,fstr,rstr,ret_t,axstr){
return (function (p1__119290_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__119290_SHARP_);
});})(idx,vec__119291,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__119294 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__119294),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__119294;
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
return (function (p1__119295_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__119295_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__119296 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__119297 = cljs.core.seq.call(null,vec__119296);
var first__119298 = cljs.core.first.call(null,seq__119297);
var seq__119297__$1 = cljs.core.next.call(null,seq__119297);
var p = first__119298;
var first__119298__$1 = cljs.core.first.call(null,seq__119297__$1);
var seq__119297__$2 = cljs.core.next.call(null,seq__119297__$1);
var ts = first__119298__$1;
var first__119298__$2 = cljs.core.first.call(null,seq__119297__$2);
var seq__119297__$3 = cljs.core.next.call(null,seq__119297__$2);
var n = first__119298__$2;
var xs = seq__119297__$3;
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
var vec__119299 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__119300 = cljs.core.seq.call(null,vec__119299);
var first__119301 = cljs.core.first.call(null,seq__119300);
var seq__119300__$1 = cljs.core.next.call(null,seq__119300);
var p = first__119301;
var first__119301__$1 = cljs.core.first.call(null,seq__119300__$1);
var seq__119300__$2 = cljs.core.next.call(null,seq__119300__$1);
var ts = first__119301__$1;
var xs = seq__119300__$2;
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
var G__119304 = arguments.length;
switch (G__119304) {
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
var vec__119312 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__119302_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__119302_SHARP_);
} else {
return p1__119302_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__119313 = cljs.core.seq.call(null,vec__119312);
var first__119314 = cljs.core.first.call(null,seq__119313);
var seq__119313__$1 = cljs.core.next.call(null,seq__119313);
var x = first__119314;
var ys = seq__119313__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__119315 = cljs.core.seq.call(null,ys);
var chunk__119316 = null;
var count__119317 = (0);
var i__119318 = (0);
while(true){
if((i__119318 < count__119317)){
var next_line = cljs.core._nth.call(null,chunk__119316,i__119318);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__119324 = seq__119315;
var G__119325 = chunk__119316;
var G__119326 = count__119317;
var G__119327 = (i__119318 + (1));
seq__119315 = G__119324;
chunk__119316 = G__119325;
count__119317 = G__119326;
i__119318 = G__119327;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__119315);
if(temp__5457__auto__){
var seq__119315__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119315__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__119315__$1);
var G__119328 = cljs.core.chunk_rest.call(null,seq__119315__$1);
var G__119329 = c__4319__auto__;
var G__119330 = cljs.core.count.call(null,c__4319__auto__);
var G__119331 = (0);
seq__119315 = G__119328;
chunk__119316 = G__119329;
count__119317 = G__119330;
i__119318 = G__119331;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__119315__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__119332 = cljs.core.next.call(null,seq__119315__$1);
var G__119333 = null;
var G__119334 = (0);
var G__119335 = (0);
seq__119315 = G__119332;
chunk__119316 = G__119333;
count__119317 = G__119334;
i__119318 = G__119335;
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

var seq__119319_119336 = cljs.core.seq.call(null,docs__$2);
var chunk__119320_119337 = null;
var count__119321_119338 = (0);
var i__119322_119339 = (0);
while(true){
if((i__119322_119339 < count__119321_119338)){
var e_119340 = cljs.core._nth.call(null,chunk__119320_119337,i__119322_119339);
if(cljs.core.truth_(e_119340)){
print_comment_lines.call(null,e_119340);
} else {
}


var G__119341 = seq__119319_119336;
var G__119342 = chunk__119320_119337;
var G__119343 = count__119321_119338;
var G__119344 = (i__119322_119339 + (1));
seq__119319_119336 = G__119341;
chunk__119320_119337 = G__119342;
count__119321_119338 = G__119343;
i__119322_119339 = G__119344;
continue;
} else {
var temp__5457__auto___119345 = cljs.core.seq.call(null,seq__119319_119336);
if(temp__5457__auto___119345){
var seq__119319_119346__$1 = temp__5457__auto___119345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119319_119346__$1)){
var c__4319__auto___119347 = cljs.core.chunk_first.call(null,seq__119319_119346__$1);
var G__119348 = cljs.core.chunk_rest.call(null,seq__119319_119346__$1);
var G__119349 = c__4319__auto___119347;
var G__119350 = cljs.core.count.call(null,c__4319__auto___119347);
var G__119351 = (0);
seq__119319_119336 = G__119348;
chunk__119320_119337 = G__119349;
count__119321_119338 = G__119350;
i__119322_119339 = G__119351;
continue;
} else {
var e_119352 = cljs.core.first.call(null,seq__119319_119346__$1);
if(cljs.core.truth_(e_119352)){
print_comment_lines.call(null,e_119352);
} else {
}


var G__119353 = cljs.core.next.call(null,seq__119319_119346__$1);
var G__119354 = null;
var G__119355 = (0);
var G__119356 = (0);
seq__119319_119336 = G__119353;
chunk__119320_119337 = G__119354;
count__119321_119338 = G__119355;
i__119322_119339 = G__119356;
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
return (function (p1__119358_SHARP_){
return goog.string.startsWith(p1__119358_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__119359){
var map__119360 = p__119359;
var map__119360__$1 = ((((!((map__119360 == null)))?(((((map__119360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119360):map__119360);
var name = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__119360__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__119362){
var map__119363 = p__119362;
var map__119363__$1 = ((((!((map__119363 == null)))?(((((map__119363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119363):map__119363);
var name = cljs.core.get.call(null,map__119363__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__119363__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__119363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__119365_119383 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__119366_119384 = null;
var count__119367_119385 = (0);
var i__119368_119386 = (0);
while(true){
if((i__119368_119386 < count__119367_119385)){
var vec__119369_119387 = cljs.core._nth.call(null,chunk__119366_119384,i__119368_119386);
var i_119388 = cljs.core.nth.call(null,vec__119369_119387,(0),null);
var param_119389 = cljs.core.nth.call(null,vec__119369_119387,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_119389);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__119390 = seq__119365_119383;
var G__119391 = chunk__119366_119384;
var G__119392 = count__119367_119385;
var G__119393 = (i__119368_119386 + (1));
seq__119365_119383 = G__119390;
chunk__119366_119384 = G__119391;
count__119367_119385 = G__119392;
i__119368_119386 = G__119393;
continue;
} else {
var temp__5457__auto___119394 = cljs.core.seq.call(null,seq__119365_119383);
if(temp__5457__auto___119394){
var seq__119365_119395__$1 = temp__5457__auto___119394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119365_119395__$1)){
var c__4319__auto___119396 = cljs.core.chunk_first.call(null,seq__119365_119395__$1);
var G__119397 = cljs.core.chunk_rest.call(null,seq__119365_119395__$1);
var G__119398 = c__4319__auto___119396;
var G__119399 = cljs.core.count.call(null,c__4319__auto___119396);
var G__119400 = (0);
seq__119365_119383 = G__119397;
chunk__119366_119384 = G__119398;
count__119367_119385 = G__119399;
i__119368_119386 = G__119400;
continue;
} else {
var vec__119372_119401 = cljs.core.first.call(null,seq__119365_119395__$1);
var i_119402 = cljs.core.nth.call(null,vec__119372_119401,(0),null);
var param_119403 = cljs.core.nth.call(null,vec__119372_119401,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_119403);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__119404 = cljs.core.next.call(null,seq__119365_119395__$1);
var G__119405 = null;
var G__119406 = (0);
var G__119407 = (0);
seq__119365_119383 = G__119404;
chunk__119366_119384 = G__119405;
count__119367_119385 = G__119406;
i__119368_119386 = G__119407;
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

var seq__119375_119408 = cljs.core.seq.call(null,params);
var chunk__119376_119409 = null;
var count__119377_119410 = (0);
var i__119378_119411 = (0);
while(true){
if((i__119378_119411 < count__119377_119410)){
var param_119412 = cljs.core._nth.call(null,chunk__119376_119409,i__119378_119411);
cljs.compiler.emit.call(null,param_119412);

if(cljs.core._EQ_.call(null,param_119412,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119413 = seq__119375_119408;
var G__119414 = chunk__119376_119409;
var G__119415 = count__119377_119410;
var G__119416 = (i__119378_119411 + (1));
seq__119375_119408 = G__119413;
chunk__119376_119409 = G__119414;
count__119377_119410 = G__119415;
i__119378_119411 = G__119416;
continue;
} else {
var temp__5457__auto___119417 = cljs.core.seq.call(null,seq__119375_119408);
if(temp__5457__auto___119417){
var seq__119375_119418__$1 = temp__5457__auto___119417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119375_119418__$1)){
var c__4319__auto___119419 = cljs.core.chunk_first.call(null,seq__119375_119418__$1);
var G__119420 = cljs.core.chunk_rest.call(null,seq__119375_119418__$1);
var G__119421 = c__4319__auto___119419;
var G__119422 = cljs.core.count.call(null,c__4319__auto___119419);
var G__119423 = (0);
seq__119375_119408 = G__119420;
chunk__119376_119409 = G__119421;
count__119377_119410 = G__119422;
i__119378_119411 = G__119423;
continue;
} else {
var param_119424 = cljs.core.first.call(null,seq__119375_119418__$1);
cljs.compiler.emit.call(null,param_119424);

if(cljs.core._EQ_.call(null,param_119424,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119425 = cljs.core.next.call(null,seq__119375_119418__$1);
var G__119426 = null;
var G__119427 = (0);
var G__119428 = (0);
seq__119375_119408 = G__119425;
chunk__119376_119409 = G__119426;
count__119377_119410 = G__119427;
i__119378_119411 = G__119428;
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

var seq__119379_119429 = cljs.core.seq.call(null,params);
var chunk__119380_119430 = null;
var count__119381_119431 = (0);
var i__119382_119432 = (0);
while(true){
if((i__119382_119432 < count__119381_119431)){
var param_119433 = cljs.core._nth.call(null,chunk__119380_119430,i__119382_119432);
cljs.compiler.emit.call(null,param_119433);

if(cljs.core._EQ_.call(null,param_119433,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119434 = seq__119379_119429;
var G__119435 = chunk__119380_119430;
var G__119436 = count__119381_119431;
var G__119437 = (i__119382_119432 + (1));
seq__119379_119429 = G__119434;
chunk__119380_119430 = G__119435;
count__119381_119431 = G__119436;
i__119382_119432 = G__119437;
continue;
} else {
var temp__5457__auto___119438 = cljs.core.seq.call(null,seq__119379_119429);
if(temp__5457__auto___119438){
var seq__119379_119439__$1 = temp__5457__auto___119438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119379_119439__$1)){
var c__4319__auto___119440 = cljs.core.chunk_first.call(null,seq__119379_119439__$1);
var G__119441 = cljs.core.chunk_rest.call(null,seq__119379_119439__$1);
var G__119442 = c__4319__auto___119440;
var G__119443 = cljs.core.count.call(null,c__4319__auto___119440);
var G__119444 = (0);
seq__119379_119429 = G__119441;
chunk__119380_119430 = G__119442;
count__119381_119431 = G__119443;
i__119382_119432 = G__119444;
continue;
} else {
var param_119445 = cljs.core.first.call(null,seq__119379_119439__$1);
cljs.compiler.emit.call(null,param_119445);

if(cljs.core._EQ_.call(null,param_119445,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119446 = cljs.core.next.call(null,seq__119379_119439__$1);
var G__119447 = null;
var G__119448 = (0);
var G__119449 = (0);
seq__119379_119429 = G__119446;
chunk__119380_119430 = G__119447;
count__119381_119431 = G__119448;
i__119382_119432 = G__119449;
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
var seq__119450 = cljs.core.seq.call(null,params);
var chunk__119451 = null;
var count__119452 = (0);
var i__119453 = (0);
while(true){
if((i__119453 < count__119452)){
var param = cljs.core._nth.call(null,chunk__119451,i__119453);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119454 = seq__119450;
var G__119455 = chunk__119451;
var G__119456 = count__119452;
var G__119457 = (i__119453 + (1));
seq__119450 = G__119454;
chunk__119451 = G__119455;
count__119452 = G__119456;
i__119453 = G__119457;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__119450);
if(temp__5457__auto__){
var seq__119450__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119450__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__119450__$1);
var G__119458 = cljs.core.chunk_rest.call(null,seq__119450__$1);
var G__119459 = c__4319__auto__;
var G__119460 = cljs.core.count.call(null,c__4319__auto__);
var G__119461 = (0);
seq__119450 = G__119458;
chunk__119451 = G__119459;
count__119452 = G__119460;
i__119453 = G__119461;
continue;
} else {
var param = cljs.core.first.call(null,seq__119450__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119462 = cljs.core.next.call(null,seq__119450__$1);
var G__119463 = null;
var G__119464 = (0);
var G__119465 = (0);
seq__119450 = G__119462;
chunk__119451 = G__119463;
count__119452 = G__119464;
i__119453 = G__119465;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__119466){
var map__119467 = p__119466;
var map__119467__$1 = ((((!((map__119467 == null)))?(((((map__119467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119467):map__119467);
var type = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__119467__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__119469){
var map__119470 = p__119469;
var map__119470__$1 = ((((!((map__119470 == null)))?(((((map__119470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119470):map__119470);
var f = map__119470__$1;
var type = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__119470__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_119480__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_119481 = cljs.compiler.munge.call(null,name_119480__$1);
var delegate_name_119482 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_119481),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_119482," = function (");

var seq__119472_119483 = cljs.core.seq.call(null,params);
var chunk__119473_119484 = null;
var count__119474_119485 = (0);
var i__119475_119486 = (0);
while(true){
if((i__119475_119486 < count__119474_119485)){
var param_119487 = cljs.core._nth.call(null,chunk__119473_119484,i__119475_119486);
cljs.compiler.emit.call(null,param_119487);

if(cljs.core._EQ_.call(null,param_119487,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119488 = seq__119472_119483;
var G__119489 = chunk__119473_119484;
var G__119490 = count__119474_119485;
var G__119491 = (i__119475_119486 + (1));
seq__119472_119483 = G__119488;
chunk__119473_119484 = G__119489;
count__119474_119485 = G__119490;
i__119475_119486 = G__119491;
continue;
} else {
var temp__5457__auto___119492 = cljs.core.seq.call(null,seq__119472_119483);
if(temp__5457__auto___119492){
var seq__119472_119493__$1 = temp__5457__auto___119492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119472_119493__$1)){
var c__4319__auto___119494 = cljs.core.chunk_first.call(null,seq__119472_119493__$1);
var G__119495 = cljs.core.chunk_rest.call(null,seq__119472_119493__$1);
var G__119496 = c__4319__auto___119494;
var G__119497 = cljs.core.count.call(null,c__4319__auto___119494);
var G__119498 = (0);
seq__119472_119483 = G__119495;
chunk__119473_119484 = G__119496;
count__119474_119485 = G__119497;
i__119475_119486 = G__119498;
continue;
} else {
var param_119499 = cljs.core.first.call(null,seq__119472_119493__$1);
cljs.compiler.emit.call(null,param_119499);

if(cljs.core._EQ_.call(null,param_119499,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119500 = cljs.core.next.call(null,seq__119472_119493__$1);
var G__119501 = null;
var G__119502 = (0);
var G__119503 = (0);
seq__119472_119483 = G__119500;
chunk__119473_119484 = G__119501;
count__119474_119485 = G__119502;
i__119475_119486 = G__119503;
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

cljs.compiler.emitln.call(null,"var ",mname_119481," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_119504 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_119504,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_119482,".call(this,");

var seq__119476_119505 = cljs.core.seq.call(null,params);
var chunk__119477_119506 = null;
var count__119478_119507 = (0);
var i__119479_119508 = (0);
while(true){
if((i__119479_119508 < count__119478_119507)){
var param_119509 = cljs.core._nth.call(null,chunk__119477_119506,i__119479_119508);
cljs.compiler.emit.call(null,param_119509);

if(cljs.core._EQ_.call(null,param_119509,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119510 = seq__119476_119505;
var G__119511 = chunk__119477_119506;
var G__119512 = count__119478_119507;
var G__119513 = (i__119479_119508 + (1));
seq__119476_119505 = G__119510;
chunk__119477_119506 = G__119511;
count__119478_119507 = G__119512;
i__119479_119508 = G__119513;
continue;
} else {
var temp__5457__auto___119514 = cljs.core.seq.call(null,seq__119476_119505);
if(temp__5457__auto___119514){
var seq__119476_119515__$1 = temp__5457__auto___119514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119476_119515__$1)){
var c__4319__auto___119516 = cljs.core.chunk_first.call(null,seq__119476_119515__$1);
var G__119517 = cljs.core.chunk_rest.call(null,seq__119476_119515__$1);
var G__119518 = c__4319__auto___119516;
var G__119519 = cljs.core.count.call(null,c__4319__auto___119516);
var G__119520 = (0);
seq__119476_119505 = G__119517;
chunk__119477_119506 = G__119518;
count__119478_119507 = G__119519;
i__119479_119508 = G__119520;
continue;
} else {
var param_119521 = cljs.core.first.call(null,seq__119476_119515__$1);
cljs.compiler.emit.call(null,param_119521);

if(cljs.core._EQ_.call(null,param_119521,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__119522 = cljs.core.next.call(null,seq__119476_119515__$1);
var G__119523 = null;
var G__119524 = (0);
var G__119525 = (0);
seq__119476_119505 = G__119522;
chunk__119477_119506 = G__119523;
count__119478_119507 = G__119524;
i__119479_119508 = G__119525;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_119481,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_119481,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_119480__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_119481,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_119482,";");

cljs.compiler.emitln.call(null,"return ",mname_119481,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__119529){
var map__119530 = p__119529;
var map__119530__$1 = ((((!((map__119530 == null)))?(((((map__119530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119530):map__119530);
var name = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__119530__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__119526_SHARP_){
var and__3911__auto__ = p1__119526_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__119526_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_119565__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_119566 = cljs.compiler.munge.call(null,name_119565__$1);
var maxparams_119567 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_119568 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_119565__$1,mname_119566,maxparams_119567,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_119566),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_119565__$1,mname_119566,maxparams_119567,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_119569 = cljs.core.sort_by.call(null,((function (name_119565__$1,mname_119566,maxparams_119567,mmap_119568,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__119527_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__119527_SHARP_)));
});})(name_119565__$1,mname_119566,maxparams_119567,mmap_119568,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_119568));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_119566," = null;");

var seq__119532_119570 = cljs.core.seq.call(null,ms_119569);
var chunk__119533_119571 = null;
var count__119534_119572 = (0);
var i__119535_119573 = (0);
while(true){
if((i__119535_119573 < count__119534_119572)){
var vec__119536_119574 = cljs.core._nth.call(null,chunk__119533_119571,i__119535_119573);
var n_119575 = cljs.core.nth.call(null,vec__119536_119574,(0),null);
var meth_119576 = cljs.core.nth.call(null,vec__119536_119574,(1),null);
cljs.compiler.emits.call(null,"var ",n_119575," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119576))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_119576);
} else {
cljs.compiler.emit_fn_method.call(null,meth_119576);
}

cljs.compiler.emitln.call(null,";");


var G__119577 = seq__119532_119570;
var G__119578 = chunk__119533_119571;
var G__119579 = count__119534_119572;
var G__119580 = (i__119535_119573 + (1));
seq__119532_119570 = G__119577;
chunk__119533_119571 = G__119578;
count__119534_119572 = G__119579;
i__119535_119573 = G__119580;
continue;
} else {
var temp__5457__auto___119581 = cljs.core.seq.call(null,seq__119532_119570);
if(temp__5457__auto___119581){
var seq__119532_119582__$1 = temp__5457__auto___119581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119532_119582__$1)){
var c__4319__auto___119583 = cljs.core.chunk_first.call(null,seq__119532_119582__$1);
var G__119584 = cljs.core.chunk_rest.call(null,seq__119532_119582__$1);
var G__119585 = c__4319__auto___119583;
var G__119586 = cljs.core.count.call(null,c__4319__auto___119583);
var G__119587 = (0);
seq__119532_119570 = G__119584;
chunk__119533_119571 = G__119585;
count__119534_119572 = G__119586;
i__119535_119573 = G__119587;
continue;
} else {
var vec__119539_119588 = cljs.core.first.call(null,seq__119532_119582__$1);
var n_119589 = cljs.core.nth.call(null,vec__119539_119588,(0),null);
var meth_119590 = cljs.core.nth.call(null,vec__119539_119588,(1),null);
cljs.compiler.emits.call(null,"var ",n_119589," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119590))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_119590);
} else {
cljs.compiler.emit_fn_method.call(null,meth_119590);
}

cljs.compiler.emitln.call(null,";");


var G__119591 = cljs.core.next.call(null,seq__119532_119582__$1);
var G__119592 = null;
var G__119593 = (0);
var G__119594 = (0);
seq__119532_119570 = G__119591;
chunk__119533_119571 = G__119592;
count__119534_119572 = G__119593;
i__119535_119573 = G__119594;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_119566," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_119567),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_119567)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_119567));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__119542_119595 = cljs.core.seq.call(null,ms_119569);
var chunk__119543_119596 = null;
var count__119544_119597 = (0);
var i__119545_119598 = (0);
while(true){
if((i__119545_119598 < count__119544_119597)){
var vec__119546_119599 = cljs.core._nth.call(null,chunk__119543_119596,i__119545_119598);
var n_119600 = cljs.core.nth.call(null,vec__119546_119599,(0),null);
var meth_119601 = cljs.core.nth.call(null,vec__119546_119599,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119601))){
cljs.compiler.emitln.call(null,"default:");

var restarg_119602 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_119602," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_119603 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_119602," = new cljs.core.IndexedSeq(",a_119603,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_119600,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_119567)),(((cljs.core.count.call(null,maxparams_119567) > (1)))?", ":null),restarg_119602,");");
} else {
var pcnt_119604 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_119601));
cljs.compiler.emitln.call(null,"case ",pcnt_119604,":");

cljs.compiler.emitln.call(null,"return ",n_119600,".call(this",(((pcnt_119604 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_119604,maxparams_119567)),null,(1),null)),(2),null))),");");
}


var G__119605 = seq__119542_119595;
var G__119606 = chunk__119543_119596;
var G__119607 = count__119544_119597;
var G__119608 = (i__119545_119598 + (1));
seq__119542_119595 = G__119605;
chunk__119543_119596 = G__119606;
count__119544_119597 = G__119607;
i__119545_119598 = G__119608;
continue;
} else {
var temp__5457__auto___119609 = cljs.core.seq.call(null,seq__119542_119595);
if(temp__5457__auto___119609){
var seq__119542_119610__$1 = temp__5457__auto___119609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119542_119610__$1)){
var c__4319__auto___119611 = cljs.core.chunk_first.call(null,seq__119542_119610__$1);
var G__119612 = cljs.core.chunk_rest.call(null,seq__119542_119610__$1);
var G__119613 = c__4319__auto___119611;
var G__119614 = cljs.core.count.call(null,c__4319__auto___119611);
var G__119615 = (0);
seq__119542_119595 = G__119612;
chunk__119543_119596 = G__119613;
count__119544_119597 = G__119614;
i__119545_119598 = G__119615;
continue;
} else {
var vec__119549_119616 = cljs.core.first.call(null,seq__119542_119610__$1);
var n_119617 = cljs.core.nth.call(null,vec__119549_119616,(0),null);
var meth_119618 = cljs.core.nth.call(null,vec__119549_119616,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119618))){
cljs.compiler.emitln.call(null,"default:");

var restarg_119619 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_119619," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_119620 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_119619," = new cljs.core.IndexedSeq(",a_119620,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_119617,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_119567)),(((cljs.core.count.call(null,maxparams_119567) > (1)))?", ":null),restarg_119619,");");
} else {
var pcnt_119621 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_119618));
cljs.compiler.emitln.call(null,"case ",pcnt_119621,":");

cljs.compiler.emitln.call(null,"return ",n_119617,".call(this",(((pcnt_119621 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_119621,maxparams_119567)),null,(1),null)),(2),null))),");");
}


var G__119622 = cljs.core.next.call(null,seq__119542_119610__$1);
var G__119623 = null;
var G__119624 = (0);
var G__119625 = (0);
seq__119542_119595 = G__119622;
chunk__119543_119596 = G__119623;
count__119544_119597 = G__119624;
i__119545_119598 = G__119625;
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
cljs.compiler.emitln.call(null,mname_119566,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_119566,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_119565__$1,mname_119566,maxparams_119567,mmap_119568,ms_119569,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__119528_SHARP_){
var vec__119552 = p1__119528_SHARP_;
var n = cljs.core.nth.call(null,vec__119552,(0),null);
var m = cljs.core.nth.call(null,vec__119552,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_119565__$1,mname_119566,maxparams_119567,mmap_119568,ms_119569,loop_locals,map__119530,map__119530__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_119569),".cljs$lang$applyTo;");
} else {
}

var seq__119555_119626 = cljs.core.seq.call(null,ms_119569);
var chunk__119556_119627 = null;
var count__119557_119628 = (0);
var i__119558_119629 = (0);
while(true){
if((i__119558_119629 < count__119557_119628)){
var vec__119559_119630 = cljs.core._nth.call(null,chunk__119556_119627,i__119558_119629);
var n_119631 = cljs.core.nth.call(null,vec__119559_119630,(0),null);
var meth_119632 = cljs.core.nth.call(null,vec__119559_119630,(1),null);
var c_119633 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_119632));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119632))){
cljs.compiler.emitln.call(null,mname_119566,".cljs$core$IFn$_invoke$arity$variadic = ",n_119631,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_119566,".cljs$core$IFn$_invoke$arity$",c_119633," = ",n_119631,";");
}


var G__119634 = seq__119555_119626;
var G__119635 = chunk__119556_119627;
var G__119636 = count__119557_119628;
var G__119637 = (i__119558_119629 + (1));
seq__119555_119626 = G__119634;
chunk__119556_119627 = G__119635;
count__119557_119628 = G__119636;
i__119558_119629 = G__119637;
continue;
} else {
var temp__5457__auto___119638 = cljs.core.seq.call(null,seq__119555_119626);
if(temp__5457__auto___119638){
var seq__119555_119639__$1 = temp__5457__auto___119638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119555_119639__$1)){
var c__4319__auto___119640 = cljs.core.chunk_first.call(null,seq__119555_119639__$1);
var G__119641 = cljs.core.chunk_rest.call(null,seq__119555_119639__$1);
var G__119642 = c__4319__auto___119640;
var G__119643 = cljs.core.count.call(null,c__4319__auto___119640);
var G__119644 = (0);
seq__119555_119626 = G__119641;
chunk__119556_119627 = G__119642;
count__119557_119628 = G__119643;
i__119558_119629 = G__119644;
continue;
} else {
var vec__119562_119645 = cljs.core.first.call(null,seq__119555_119639__$1);
var n_119646 = cljs.core.nth.call(null,vec__119562_119645,(0),null);
var meth_119647 = cljs.core.nth.call(null,vec__119562_119645,(1),null);
var c_119648 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_119647));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_119647))){
cljs.compiler.emitln.call(null,mname_119566,".cljs$core$IFn$_invoke$arity$variadic = ",n_119646,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_119566,".cljs$core$IFn$_invoke$arity$",c_119648," = ",n_119646,";");
}


var G__119649 = cljs.core.next.call(null,seq__119555_119639__$1);
var G__119650 = null;
var G__119651 = (0);
var G__119652 = (0);
seq__119555_119626 = G__119649;
chunk__119556_119627 = G__119650;
count__119557_119628 = G__119651;
i__119558_119629 = G__119652;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_119566,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__119653){
var map__119654 = p__119653;
var map__119654__$1 = ((((!((map__119654 == null)))?(((((map__119654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119654):map__119654);
var statements = cljs.core.get.call(null,map__119654__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__119654__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__119654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__119656_119660 = cljs.core.seq.call(null,statements);
var chunk__119657_119661 = null;
var count__119658_119662 = (0);
var i__119659_119663 = (0);
while(true){
if((i__119659_119663 < count__119658_119662)){
var s_119664 = cljs.core._nth.call(null,chunk__119657_119661,i__119659_119663);
cljs.compiler.emitln.call(null,s_119664);


var G__119665 = seq__119656_119660;
var G__119666 = chunk__119657_119661;
var G__119667 = count__119658_119662;
var G__119668 = (i__119659_119663 + (1));
seq__119656_119660 = G__119665;
chunk__119657_119661 = G__119666;
count__119658_119662 = G__119667;
i__119659_119663 = G__119668;
continue;
} else {
var temp__5457__auto___119669 = cljs.core.seq.call(null,seq__119656_119660);
if(temp__5457__auto___119669){
var seq__119656_119670__$1 = temp__5457__auto___119669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119656_119670__$1)){
var c__4319__auto___119671 = cljs.core.chunk_first.call(null,seq__119656_119670__$1);
var G__119672 = cljs.core.chunk_rest.call(null,seq__119656_119670__$1);
var G__119673 = c__4319__auto___119671;
var G__119674 = cljs.core.count.call(null,c__4319__auto___119671);
var G__119675 = (0);
seq__119656_119660 = G__119672;
chunk__119657_119661 = G__119673;
count__119658_119662 = G__119674;
i__119659_119663 = G__119675;
continue;
} else {
var s_119676 = cljs.core.first.call(null,seq__119656_119670__$1);
cljs.compiler.emitln.call(null,s_119676);


var G__119677 = cljs.core.next.call(null,seq__119656_119670__$1);
var G__119678 = null;
var G__119679 = (0);
var G__119680 = (0);
seq__119656_119660 = G__119677;
chunk__119657_119661 = G__119678;
count__119658_119662 = G__119679;
i__119659_119663 = G__119680;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__119681){
var map__119682 = p__119681;
var map__119682__$1 = ((((!((map__119682 == null)))?(((((map__119682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119682):map__119682);
var env = cljs.core.get.call(null,map__119682__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__119682__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__119682__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__119682__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__119682__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__119684,is_loop){
var map__119685 = p__119684;
var map__119685__$1 = ((((!((map__119685 == null)))?(((((map__119685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119685):map__119685);
var bindings = cljs.core.get.call(null,map__119685__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__119685__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__119685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_119687_119696 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_119687_119696,context,map__119685,map__119685__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_119687_119696,context,map__119685,map__119685__$1,bindings,expr,env))
,bindings):null));

try{var seq__119688_119697 = cljs.core.seq.call(null,bindings);
var chunk__119689_119698 = null;
var count__119690_119699 = (0);
var i__119691_119700 = (0);
while(true){
if((i__119691_119700 < count__119690_119699)){
var map__119692_119701 = cljs.core._nth.call(null,chunk__119689_119698,i__119691_119700);
var map__119692_119702__$1 = ((((!((map__119692_119701 == null)))?(((((map__119692_119701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119692_119701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119692_119701):map__119692_119701);
var binding_119703 = map__119692_119702__$1;
var init_119704 = cljs.core.get.call(null,map__119692_119702__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_119703);

cljs.compiler.emitln.call(null," = ",init_119704,";");


var G__119705 = seq__119688_119697;
var G__119706 = chunk__119689_119698;
var G__119707 = count__119690_119699;
var G__119708 = (i__119691_119700 + (1));
seq__119688_119697 = G__119705;
chunk__119689_119698 = G__119706;
count__119690_119699 = G__119707;
i__119691_119700 = G__119708;
continue;
} else {
var temp__5457__auto___119709 = cljs.core.seq.call(null,seq__119688_119697);
if(temp__5457__auto___119709){
var seq__119688_119710__$1 = temp__5457__auto___119709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119688_119710__$1)){
var c__4319__auto___119711 = cljs.core.chunk_first.call(null,seq__119688_119710__$1);
var G__119712 = cljs.core.chunk_rest.call(null,seq__119688_119710__$1);
var G__119713 = c__4319__auto___119711;
var G__119714 = cljs.core.count.call(null,c__4319__auto___119711);
var G__119715 = (0);
seq__119688_119697 = G__119712;
chunk__119689_119698 = G__119713;
count__119690_119699 = G__119714;
i__119691_119700 = G__119715;
continue;
} else {
var map__119694_119716 = cljs.core.first.call(null,seq__119688_119710__$1);
var map__119694_119717__$1 = ((((!((map__119694_119716 == null)))?(((((map__119694_119716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119694_119716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119694_119716):map__119694_119716);
var binding_119718 = map__119694_119717__$1;
var init_119719 = cljs.core.get.call(null,map__119694_119717__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_119718);

cljs.compiler.emitln.call(null," = ",init_119719,";");


var G__119720 = cljs.core.next.call(null,seq__119688_119710__$1);
var G__119721 = null;
var G__119722 = (0);
var G__119723 = (0);
seq__119688_119697 = G__119720;
chunk__119689_119698 = G__119721;
count__119690_119699 = G__119722;
i__119691_119700 = G__119723;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_119687_119696;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__119724){
var map__119725 = p__119724;
var map__119725__$1 = ((((!((map__119725 == null)))?(((((map__119725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119725):map__119725);
var frame = cljs.core.get.call(null,map__119725__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__119725__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__119725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___119727 = cljs.core.count.call(null,exprs);
var i_119728 = (0);
while(true){
if((i_119728 < n__4376__auto___119727)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_119728)," = ",exprs.call(null,i_119728),";");

var G__119729 = (i_119728 + (1));
i_119728 = G__119729;
continue;
} else {
}
break;
}

var n__4376__auto___119730 = cljs.core.count.call(null,exprs);
var i_119731 = (0);
while(true){
if((i_119731 < n__4376__auto___119730)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_119731))," = ",temps.call(null,i_119731),";");

var G__119732 = (i_119731 + (1));
i_119731 = G__119732;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__119733){
var map__119734 = p__119733;
var map__119734__$1 = ((((!((map__119734 == null)))?(((((map__119734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119734):map__119734);
var bindings = cljs.core.get.call(null,map__119734__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__119734__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__119734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__119736_119744 = cljs.core.seq.call(null,bindings);
var chunk__119737_119745 = null;
var count__119738_119746 = (0);
var i__119739_119747 = (0);
while(true){
if((i__119739_119747 < count__119738_119746)){
var map__119740_119748 = cljs.core._nth.call(null,chunk__119737_119745,i__119739_119747);
var map__119740_119749__$1 = ((((!((map__119740_119748 == null)))?(((((map__119740_119748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119740_119748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119740_119748):map__119740_119748);
var binding_119750 = map__119740_119749__$1;
var init_119751 = cljs.core.get.call(null,map__119740_119749__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_119750)," = ",init_119751,";");


var G__119752 = seq__119736_119744;
var G__119753 = chunk__119737_119745;
var G__119754 = count__119738_119746;
var G__119755 = (i__119739_119747 + (1));
seq__119736_119744 = G__119752;
chunk__119737_119745 = G__119753;
count__119738_119746 = G__119754;
i__119739_119747 = G__119755;
continue;
} else {
var temp__5457__auto___119756 = cljs.core.seq.call(null,seq__119736_119744);
if(temp__5457__auto___119756){
var seq__119736_119757__$1 = temp__5457__auto___119756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119736_119757__$1)){
var c__4319__auto___119758 = cljs.core.chunk_first.call(null,seq__119736_119757__$1);
var G__119759 = cljs.core.chunk_rest.call(null,seq__119736_119757__$1);
var G__119760 = c__4319__auto___119758;
var G__119761 = cljs.core.count.call(null,c__4319__auto___119758);
var G__119762 = (0);
seq__119736_119744 = G__119759;
chunk__119737_119745 = G__119760;
count__119738_119746 = G__119761;
i__119739_119747 = G__119762;
continue;
} else {
var map__119742_119763 = cljs.core.first.call(null,seq__119736_119757__$1);
var map__119742_119764__$1 = ((((!((map__119742_119763 == null)))?(((((map__119742_119763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119742_119763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119742_119763):map__119742_119763);
var binding_119765 = map__119742_119764__$1;
var init_119766 = cljs.core.get.call(null,map__119742_119764__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_119765)," = ",init_119766,";");


var G__119767 = cljs.core.next.call(null,seq__119736_119757__$1);
var G__119768 = null;
var G__119769 = (0);
var G__119770 = (0);
seq__119736_119744 = G__119767;
chunk__119737_119745 = G__119768;
count__119738_119746 = G__119769;
i__119739_119747 = G__119770;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__119773){
var map__119774 = p__119773;
var map__119774__$1 = ((((!((map__119774 == null)))?(((((map__119774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119774):map__119774);
var expr = map__119774__$1;
var f = cljs.core.get.call(null,map__119774__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__119774__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__119774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__119776 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env){
return (function (p1__119771_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__119771_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env){
return (function (p1__119772_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__119772_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__119774,map__119774__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__119776,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__119776,(1),null);
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_119779 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_119779,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_119780 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_119780,args)),(((mfa_119780 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_119780,args)),"], 0))");
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
var fprop_119781 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_119781," ? ",f__$1,fprop_119781,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_119781," ? ",f__$1,fprop_119781,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__119782){
var map__119783 = p__119782;
var map__119783__$1 = ((((!((map__119783 == null)))?(((((map__119783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119783):map__119783);
var ctor = cljs.core.get.call(null,map__119783__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__119783__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__119783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__119785){
var map__119786 = p__119785;
var map__119786__$1 = ((((!((map__119786 == null)))?(((((map__119786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119786):map__119786);
var target = cljs.core.get.call(null,map__119786__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__119786__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__119786__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__119788 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__119788__$1 = ((((!((map__119788 == null)))?(((((map__119788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119788):map__119788);
var options = cljs.core.get.call(null,map__119788__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__119788__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__119789 = options;
var map__119789__$1 = ((((!((map__119789 == null)))?(((((map__119789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119789):map__119789);
var target = cljs.core.get.call(null,map__119789__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__119789__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__119790 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__119795 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__119795__$1 = ((((!((map__119795 == null)))?(((((map__119795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119795):map__119795);
var node_libs = cljs.core.get.call(null,map__119795__$1,true);
var libs_to_load = cljs.core.get.call(null,map__119795__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__119790,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__119790,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__119797_119813 = cljs.core.seq.call(null,libs_to_load);
var chunk__119798_119814 = null;
var count__119799_119815 = (0);
var i__119800_119816 = (0);
while(true){
if((i__119800_119816 < count__119799_119815)){
var lib_119817 = cljs.core._nth.call(null,chunk__119798_119814,i__119800_119816);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_119817)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_119817),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119817),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_119817),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119817),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119817),"');");

}
}
}


var G__119818 = seq__119797_119813;
var G__119819 = chunk__119798_119814;
var G__119820 = count__119799_119815;
var G__119821 = (i__119800_119816 + (1));
seq__119797_119813 = G__119818;
chunk__119798_119814 = G__119819;
count__119799_119815 = G__119820;
i__119800_119816 = G__119821;
continue;
} else {
var temp__5457__auto___119822 = cljs.core.seq.call(null,seq__119797_119813);
if(temp__5457__auto___119822){
var seq__119797_119823__$1 = temp__5457__auto___119822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119797_119823__$1)){
var c__4319__auto___119824 = cljs.core.chunk_first.call(null,seq__119797_119823__$1);
var G__119825 = cljs.core.chunk_rest.call(null,seq__119797_119823__$1);
var G__119826 = c__4319__auto___119824;
var G__119827 = cljs.core.count.call(null,c__4319__auto___119824);
var G__119828 = (0);
seq__119797_119813 = G__119825;
chunk__119798_119814 = G__119826;
count__119799_119815 = G__119827;
i__119800_119816 = G__119828;
continue;
} else {
var lib_119829 = cljs.core.first.call(null,seq__119797_119823__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_119829)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_119829),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119829),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_119829),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119829),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_119829),"');");

}
}
}


var G__119830 = cljs.core.next.call(null,seq__119797_119823__$1);
var G__119831 = null;
var G__119832 = (0);
var G__119833 = (0);
seq__119797_119813 = G__119830;
chunk__119798_119814 = G__119831;
count__119799_119815 = G__119832;
i__119800_119816 = G__119833;
continue;
}
} else {
}
}
break;
}

var seq__119801_119834 = cljs.core.seq.call(null,node_libs);
var chunk__119802_119835 = null;
var count__119803_119836 = (0);
var i__119804_119837 = (0);
while(true){
if((i__119804_119837 < count__119803_119836)){
var lib_119838 = cljs.core._nth.call(null,chunk__119802_119835,i__119804_119837);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_119838)," = require('",lib_119838,"');");


var G__119839 = seq__119801_119834;
var G__119840 = chunk__119802_119835;
var G__119841 = count__119803_119836;
var G__119842 = (i__119804_119837 + (1));
seq__119801_119834 = G__119839;
chunk__119802_119835 = G__119840;
count__119803_119836 = G__119841;
i__119804_119837 = G__119842;
continue;
} else {
var temp__5457__auto___119843 = cljs.core.seq.call(null,seq__119801_119834);
if(temp__5457__auto___119843){
var seq__119801_119844__$1 = temp__5457__auto___119843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119801_119844__$1)){
var c__4319__auto___119845 = cljs.core.chunk_first.call(null,seq__119801_119844__$1);
var G__119846 = cljs.core.chunk_rest.call(null,seq__119801_119844__$1);
var G__119847 = c__4319__auto___119845;
var G__119848 = cljs.core.count.call(null,c__4319__auto___119845);
var G__119849 = (0);
seq__119801_119834 = G__119846;
chunk__119802_119835 = G__119847;
count__119803_119836 = G__119848;
i__119804_119837 = G__119849;
continue;
} else {
var lib_119850 = cljs.core.first.call(null,seq__119801_119844__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_119850)," = require('",lib_119850,"');");


var G__119851 = cljs.core.next.call(null,seq__119801_119844__$1);
var G__119852 = null;
var G__119853 = (0);
var G__119854 = (0);
seq__119801_119834 = G__119851;
chunk__119802_119835 = G__119852;
count__119803_119836 = G__119853;
i__119804_119837 = G__119854;
continue;
}
} else {
}
}
break;
}

var seq__119805_119855 = cljs.core.seq.call(null,global_exports_libs);
var chunk__119806_119856 = null;
var count__119807_119857 = (0);
var i__119808_119858 = (0);
while(true){
if((i__119808_119858 < count__119807_119857)){
var lib_119859 = cljs.core._nth.call(null,chunk__119806_119856,i__119808_119858);
var map__119809_119860 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_119859));
var map__119809_119861__$1 = ((((!((map__119809_119860 == null)))?(((((map__119809_119860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119809_119860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119809_119860):map__119809_119860);
var global_exports_119862 = cljs.core.get.call(null,map__119809_119861__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_119859)," = goog.global.",cljs.core.get.call(null,global_exports_119862,cljs.core.symbol.call(null,lib_119859)),";");


var G__119863 = seq__119805_119855;
var G__119864 = chunk__119806_119856;
var G__119865 = count__119807_119857;
var G__119866 = (i__119808_119858 + (1));
seq__119805_119855 = G__119863;
chunk__119806_119856 = G__119864;
count__119807_119857 = G__119865;
i__119808_119858 = G__119866;
continue;
} else {
var temp__5457__auto___119867 = cljs.core.seq.call(null,seq__119805_119855);
if(temp__5457__auto___119867){
var seq__119805_119868__$1 = temp__5457__auto___119867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119805_119868__$1)){
var c__4319__auto___119869 = cljs.core.chunk_first.call(null,seq__119805_119868__$1);
var G__119870 = cljs.core.chunk_rest.call(null,seq__119805_119868__$1);
var G__119871 = c__4319__auto___119869;
var G__119872 = cljs.core.count.call(null,c__4319__auto___119869);
var G__119873 = (0);
seq__119805_119855 = G__119870;
chunk__119806_119856 = G__119871;
count__119807_119857 = G__119872;
i__119808_119858 = G__119873;
continue;
} else {
var lib_119874 = cljs.core.first.call(null,seq__119805_119868__$1);
var map__119811_119875 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_119874));
var map__119811_119876__$1 = ((((!((map__119811_119875 == null)))?(((((map__119811_119875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119811_119875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119811_119875):map__119811_119875);
var global_exports_119877 = cljs.core.get.call(null,map__119811_119876__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_119874)," = goog.global.",cljs.core.get.call(null,global_exports_119877,cljs.core.symbol.call(null,lib_119874)),";");


var G__119878 = cljs.core.next.call(null,seq__119805_119868__$1);
var G__119879 = null;
var G__119880 = (0);
var G__119881 = (0);
seq__119805_119855 = G__119878;
chunk__119806_119856 = G__119879;
count__119807_119857 = G__119880;
i__119808_119858 = G__119881;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__119882){
var map__119883 = p__119882;
var map__119883__$1 = ((((!((map__119883 == null)))?(((((map__119883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119883):map__119883);
var name = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__119883__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__119885){
var map__119886 = p__119885;
var map__119886__$1 = ((((!((map__119886 == null)))?(((((map__119886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119886):map__119886);
var name = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__119886__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__119888){
var map__119889 = p__119888;
var map__119889__$1 = ((((!((map__119889 == null)))?(((((map__119889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119889):map__119889);
var t = cljs.core.get.call(null,map__119889__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__119889__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__119889__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__119889__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__119889__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__119891_119909 = cljs.core.seq.call(null,protocols);
var chunk__119892_119910 = null;
var count__119893_119911 = (0);
var i__119894_119912 = (0);
while(true){
if((i__119894_119912 < count__119893_119911)){
var protocol_119913 = cljs.core._nth.call(null,chunk__119892_119910,i__119894_119912);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_119913)].join('')),"}");


var G__119914 = seq__119891_119909;
var G__119915 = chunk__119892_119910;
var G__119916 = count__119893_119911;
var G__119917 = (i__119894_119912 + (1));
seq__119891_119909 = G__119914;
chunk__119892_119910 = G__119915;
count__119893_119911 = G__119916;
i__119894_119912 = G__119917;
continue;
} else {
var temp__5457__auto___119918 = cljs.core.seq.call(null,seq__119891_119909);
if(temp__5457__auto___119918){
var seq__119891_119919__$1 = temp__5457__auto___119918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119891_119919__$1)){
var c__4319__auto___119920 = cljs.core.chunk_first.call(null,seq__119891_119919__$1);
var G__119921 = cljs.core.chunk_rest.call(null,seq__119891_119919__$1);
var G__119922 = c__4319__auto___119920;
var G__119923 = cljs.core.count.call(null,c__4319__auto___119920);
var G__119924 = (0);
seq__119891_119909 = G__119921;
chunk__119892_119910 = G__119922;
count__119893_119911 = G__119923;
i__119894_119912 = G__119924;
continue;
} else {
var protocol_119925 = cljs.core.first.call(null,seq__119891_119919__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_119925)].join('')),"}");


var G__119926 = cljs.core.next.call(null,seq__119891_119919__$1);
var G__119927 = null;
var G__119928 = (0);
var G__119929 = (0);
seq__119891_119909 = G__119926;
chunk__119892_119910 = G__119927;
count__119893_119911 = G__119928;
i__119894_119912 = G__119929;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__119895_119930 = cljs.core.seq.call(null,fields__$1);
var chunk__119896_119931 = null;
var count__119897_119932 = (0);
var i__119898_119933 = (0);
while(true){
if((i__119898_119933 < count__119897_119932)){
var fld_119934 = cljs.core._nth.call(null,chunk__119896_119931,i__119898_119933);
cljs.compiler.emitln.call(null,"this.",fld_119934," = ",fld_119934,";");


var G__119935 = seq__119895_119930;
var G__119936 = chunk__119896_119931;
var G__119937 = count__119897_119932;
var G__119938 = (i__119898_119933 + (1));
seq__119895_119930 = G__119935;
chunk__119896_119931 = G__119936;
count__119897_119932 = G__119937;
i__119898_119933 = G__119938;
continue;
} else {
var temp__5457__auto___119939 = cljs.core.seq.call(null,seq__119895_119930);
if(temp__5457__auto___119939){
var seq__119895_119940__$1 = temp__5457__auto___119939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119895_119940__$1)){
var c__4319__auto___119941 = cljs.core.chunk_first.call(null,seq__119895_119940__$1);
var G__119942 = cljs.core.chunk_rest.call(null,seq__119895_119940__$1);
var G__119943 = c__4319__auto___119941;
var G__119944 = cljs.core.count.call(null,c__4319__auto___119941);
var G__119945 = (0);
seq__119895_119930 = G__119942;
chunk__119896_119931 = G__119943;
count__119897_119932 = G__119944;
i__119898_119933 = G__119945;
continue;
} else {
var fld_119946 = cljs.core.first.call(null,seq__119895_119940__$1);
cljs.compiler.emitln.call(null,"this.",fld_119946," = ",fld_119946,";");


var G__119947 = cljs.core.next.call(null,seq__119895_119940__$1);
var G__119948 = null;
var G__119949 = (0);
var G__119950 = (0);
seq__119895_119930 = G__119947;
chunk__119896_119931 = G__119948;
count__119897_119932 = G__119949;
i__119898_119933 = G__119950;
continue;
}
} else {
}
}
break;
}

var seq__119899_119951 = cljs.core.seq.call(null,pmasks);
var chunk__119900_119952 = null;
var count__119901_119953 = (0);
var i__119902_119954 = (0);
while(true){
if((i__119902_119954 < count__119901_119953)){
var vec__119903_119955 = cljs.core._nth.call(null,chunk__119900_119952,i__119902_119954);
var pno_119956 = cljs.core.nth.call(null,vec__119903_119955,(0),null);
var pmask_119957 = cljs.core.nth.call(null,vec__119903_119955,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_119956,"$ = ",pmask_119957,";");


var G__119958 = seq__119899_119951;
var G__119959 = chunk__119900_119952;
var G__119960 = count__119901_119953;
var G__119961 = (i__119902_119954 + (1));
seq__119899_119951 = G__119958;
chunk__119900_119952 = G__119959;
count__119901_119953 = G__119960;
i__119902_119954 = G__119961;
continue;
} else {
var temp__5457__auto___119962 = cljs.core.seq.call(null,seq__119899_119951);
if(temp__5457__auto___119962){
var seq__119899_119963__$1 = temp__5457__auto___119962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119899_119963__$1)){
var c__4319__auto___119964 = cljs.core.chunk_first.call(null,seq__119899_119963__$1);
var G__119965 = cljs.core.chunk_rest.call(null,seq__119899_119963__$1);
var G__119966 = c__4319__auto___119964;
var G__119967 = cljs.core.count.call(null,c__4319__auto___119964);
var G__119968 = (0);
seq__119899_119951 = G__119965;
chunk__119900_119952 = G__119966;
count__119901_119953 = G__119967;
i__119902_119954 = G__119968;
continue;
} else {
var vec__119906_119969 = cljs.core.first.call(null,seq__119899_119963__$1);
var pno_119970 = cljs.core.nth.call(null,vec__119906_119969,(0),null);
var pmask_119971 = cljs.core.nth.call(null,vec__119906_119969,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_119970,"$ = ",pmask_119971,";");


var G__119972 = cljs.core.next.call(null,seq__119899_119963__$1);
var G__119973 = null;
var G__119974 = (0);
var G__119975 = (0);
seq__119899_119951 = G__119972;
chunk__119900_119952 = G__119973;
count__119901_119953 = G__119974;
i__119902_119954 = G__119975;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__119976){
var map__119977 = p__119976;
var map__119977__$1 = ((((!((map__119977 == null)))?(((((map__119977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119977):map__119977);
var t = cljs.core.get.call(null,map__119977__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__119977__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__119977__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__119977__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__119977__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__119979_119997 = cljs.core.seq.call(null,protocols);
var chunk__119980_119998 = null;
var count__119981_119999 = (0);
var i__119982_120000 = (0);
while(true){
if((i__119982_120000 < count__119981_119999)){
var protocol_120001 = cljs.core._nth.call(null,chunk__119980_119998,i__119982_120000);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_120001)].join('')),"}");


var G__120002 = seq__119979_119997;
var G__120003 = chunk__119980_119998;
var G__120004 = count__119981_119999;
var G__120005 = (i__119982_120000 + (1));
seq__119979_119997 = G__120002;
chunk__119980_119998 = G__120003;
count__119981_119999 = G__120004;
i__119982_120000 = G__120005;
continue;
} else {
var temp__5457__auto___120006 = cljs.core.seq.call(null,seq__119979_119997);
if(temp__5457__auto___120006){
var seq__119979_120007__$1 = temp__5457__auto___120006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119979_120007__$1)){
var c__4319__auto___120008 = cljs.core.chunk_first.call(null,seq__119979_120007__$1);
var G__120009 = cljs.core.chunk_rest.call(null,seq__119979_120007__$1);
var G__120010 = c__4319__auto___120008;
var G__120011 = cljs.core.count.call(null,c__4319__auto___120008);
var G__120012 = (0);
seq__119979_119997 = G__120009;
chunk__119980_119998 = G__120010;
count__119981_119999 = G__120011;
i__119982_120000 = G__120012;
continue;
} else {
var protocol_120013 = cljs.core.first.call(null,seq__119979_120007__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_120013)].join('')),"}");


var G__120014 = cljs.core.next.call(null,seq__119979_120007__$1);
var G__120015 = null;
var G__120016 = (0);
var G__120017 = (0);
seq__119979_119997 = G__120014;
chunk__119980_119998 = G__120015;
count__119981_119999 = G__120016;
i__119982_120000 = G__120017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__119983_120018 = cljs.core.seq.call(null,fields__$1);
var chunk__119984_120019 = null;
var count__119985_120020 = (0);
var i__119986_120021 = (0);
while(true){
if((i__119986_120021 < count__119985_120020)){
var fld_120022 = cljs.core._nth.call(null,chunk__119984_120019,i__119986_120021);
cljs.compiler.emitln.call(null,"this.",fld_120022," = ",fld_120022,";");


var G__120023 = seq__119983_120018;
var G__120024 = chunk__119984_120019;
var G__120025 = count__119985_120020;
var G__120026 = (i__119986_120021 + (1));
seq__119983_120018 = G__120023;
chunk__119984_120019 = G__120024;
count__119985_120020 = G__120025;
i__119986_120021 = G__120026;
continue;
} else {
var temp__5457__auto___120027 = cljs.core.seq.call(null,seq__119983_120018);
if(temp__5457__auto___120027){
var seq__119983_120028__$1 = temp__5457__auto___120027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119983_120028__$1)){
var c__4319__auto___120029 = cljs.core.chunk_first.call(null,seq__119983_120028__$1);
var G__120030 = cljs.core.chunk_rest.call(null,seq__119983_120028__$1);
var G__120031 = c__4319__auto___120029;
var G__120032 = cljs.core.count.call(null,c__4319__auto___120029);
var G__120033 = (0);
seq__119983_120018 = G__120030;
chunk__119984_120019 = G__120031;
count__119985_120020 = G__120032;
i__119986_120021 = G__120033;
continue;
} else {
var fld_120034 = cljs.core.first.call(null,seq__119983_120028__$1);
cljs.compiler.emitln.call(null,"this.",fld_120034," = ",fld_120034,";");


var G__120035 = cljs.core.next.call(null,seq__119983_120028__$1);
var G__120036 = null;
var G__120037 = (0);
var G__120038 = (0);
seq__119983_120018 = G__120035;
chunk__119984_120019 = G__120036;
count__119985_120020 = G__120037;
i__119986_120021 = G__120038;
continue;
}
} else {
}
}
break;
}

var seq__119987_120039 = cljs.core.seq.call(null,pmasks);
var chunk__119988_120040 = null;
var count__119989_120041 = (0);
var i__119990_120042 = (0);
while(true){
if((i__119990_120042 < count__119989_120041)){
var vec__119991_120043 = cljs.core._nth.call(null,chunk__119988_120040,i__119990_120042);
var pno_120044 = cljs.core.nth.call(null,vec__119991_120043,(0),null);
var pmask_120045 = cljs.core.nth.call(null,vec__119991_120043,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_120044,"$ = ",pmask_120045,";");


var G__120046 = seq__119987_120039;
var G__120047 = chunk__119988_120040;
var G__120048 = count__119989_120041;
var G__120049 = (i__119990_120042 + (1));
seq__119987_120039 = G__120046;
chunk__119988_120040 = G__120047;
count__119989_120041 = G__120048;
i__119990_120042 = G__120049;
continue;
} else {
var temp__5457__auto___120050 = cljs.core.seq.call(null,seq__119987_120039);
if(temp__5457__auto___120050){
var seq__119987_120051__$1 = temp__5457__auto___120050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119987_120051__$1)){
var c__4319__auto___120052 = cljs.core.chunk_first.call(null,seq__119987_120051__$1);
var G__120053 = cljs.core.chunk_rest.call(null,seq__119987_120051__$1);
var G__120054 = c__4319__auto___120052;
var G__120055 = cljs.core.count.call(null,c__4319__auto___120052);
var G__120056 = (0);
seq__119987_120039 = G__120053;
chunk__119988_120040 = G__120054;
count__119989_120041 = G__120055;
i__119990_120042 = G__120056;
continue;
} else {
var vec__119994_120057 = cljs.core.first.call(null,seq__119987_120051__$1);
var pno_120058 = cljs.core.nth.call(null,vec__119994_120057,(0),null);
var pmask_120059 = cljs.core.nth.call(null,vec__119994_120057,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_120058,"$ = ",pmask_120059,";");


var G__120060 = cljs.core.next.call(null,seq__119987_120051__$1);
var G__120061 = null;
var G__120062 = (0);
var G__120063 = (0);
seq__119987_120039 = G__120060;
chunk__119988_120040 = G__120061;
count__119989_120041 = G__120062;
i__119990_120042 = G__120063;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__120064){
var map__120065 = p__120064;
var map__120065__$1 = ((((!((map__120065 == null)))?(((((map__120065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120065):map__120065);
var target = cljs.core.get.call(null,map__120065__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__120065__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__120065__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__120065__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__120065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__120067){
var map__120068 = p__120067;
var map__120068__$1 = ((((!((map__120068 == null)))?(((((map__120068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120068):map__120068);
var op = cljs.core.get.call(null,map__120068__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__120068__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__120068__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__120068__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__120068__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__14182__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14182__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__120073 = cljs.core.seq.call(null,table);
var chunk__120074 = null;
var count__120075 = (0);
var i__120076 = (0);
while(true){
if((i__120076 < count__120075)){
var vec__120077 = cljs.core._nth.call(null,chunk__120074,i__120076);
var sym = cljs.core.nth.call(null,vec__120077,(0),null);
var value = cljs.core.nth.call(null,vec__120077,(1),null);
var ns_120083 = cljs.core.namespace.call(null,sym);
var name_120084 = cljs.core.name.call(null,sym);
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


var G__120085 = seq__120073;
var G__120086 = chunk__120074;
var G__120087 = count__120075;
var G__120088 = (i__120076 + (1));
seq__120073 = G__120085;
chunk__120074 = G__120086;
count__120075 = G__120087;
i__120076 = G__120088;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__120073);
if(temp__5457__auto__){
var seq__120073__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120073__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__120073__$1);
var G__120089 = cljs.core.chunk_rest.call(null,seq__120073__$1);
var G__120090 = c__4319__auto__;
var G__120091 = cljs.core.count.call(null,c__4319__auto__);
var G__120092 = (0);
seq__120073 = G__120089;
chunk__120074 = G__120090;
count__120075 = G__120091;
i__120076 = G__120092;
continue;
} else {
var vec__120080 = cljs.core.first.call(null,seq__120073__$1);
var sym = cljs.core.nth.call(null,vec__120080,(0),null);
var value = cljs.core.nth.call(null,vec__120080,(1),null);
var ns_120093 = cljs.core.namespace.call(null,sym);
var name_120094 = cljs.core.name.call(null,sym);
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


var G__120095 = cljs.core.next.call(null,seq__120073__$1);
var G__120096 = null;
var G__120097 = (0);
var G__120098 = (0);
seq__120073 = G__120095;
chunk__120074 = G__120096;
count__120075 = G__120097;
i__120076 = G__120098;
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
var G__120100 = arguments.length;
switch (G__120100) {
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
var k_120105 = cljs.core.first.call(null,ks);
var vec__120101_120106 = cljs.core.conj.call(null,prefix,k_120105);
var top_120107 = cljs.core.nth.call(null,vec__120101_120106,(0),null);
var prefix_SINGLEQUOTE__120108 = vec__120101_120106;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_120105)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__120108) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_120107)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_120107))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__120108)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_120107);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__120108)),";");
}
} else {
}

var m_120109 = cljs.core.get.call(null,externs,k_120105);
if(cljs.core.empty_QMARK_.call(null,m_120109)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__120108,m_120109,top_level,known_externs);
}

var G__120110 = cljs.core.next.call(null,ks);
ks = G__120110;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
