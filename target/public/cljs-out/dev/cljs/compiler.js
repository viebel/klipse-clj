// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-2018","ecmascript-2018",-811131980),new cljs.core.Keyword(null,"ecmascript-2019","ecmascript-2019",-1872209910),new cljs.core.Keyword(null,"ecmascript-2020","ecmascript-2020",1452286525),new cljs.core.Keyword(null,"ecmascript-2021","ecmascript-2021",-724420359),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
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
var map__17945 = s;
var map__17945__$1 = cljs.core.__destructure_map.call(null,map__17945);
var name = cljs.core.get.call(null,map__17945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17945__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__17947 = info;
var map__17948 = G__17947;
var map__17948__$1 = cljs.core.__destructure_map.call(null,map__17948);
var shadow = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__17947__$1 = G__17947;
while(true){
var d__$2 = d__$1;
var map__17950 = G__17947__$1;
var map__17950__$1 = cljs.core.__destructure_map.call(null,map__17950);
var shadow__$1 = cljs.core.get.call(null,map__17950__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17951 = (d__$2 + (1));
var G__17952 = shadow__$1;
d__$1 = G__17951;
G__17947__$1 = G__17952;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__17953){
var map__17954 = p__17953;
var map__17954__$1 = cljs.core.__destructure_map.call(null,map__17954);
var name_var = map__17954__$1;
var name = cljs.core.get.call(null,map__17954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17954__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__17955 = info;
var map__17955__$1 = cljs.core.__destructure_map.call(null,map__17955);
var ns = cljs.core.get.call(null,map__17955__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__17955__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__17957 = arguments.length;
switch (G__17957) {
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

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11982),(11982),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__17959 = cp;
switch (G__17959) {
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
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__17961_17965 = cljs.core.seq.call(null,s);
var chunk__17962_17966 = null;
var count__17963_17967 = (0);
var i__17964_17968 = (0);
while(true){
if((i__17964_17968 < count__17963_17967)){
var c_17969 = cljs.core._nth.call(null,chunk__17962_17966,i__17964_17968);
sb.append(cljs.compiler.escape_char.call(null,c_17969));


var G__17970 = seq__17961_17965;
var G__17971 = chunk__17962_17966;
var G__17972 = count__17963_17967;
var G__17973 = (i__17964_17968 + (1));
seq__17961_17965 = G__17970;
chunk__17962_17966 = G__17971;
count__17963_17967 = G__17972;
i__17964_17968 = G__17973;
continue;
} else {
var temp__5823__auto___17974 = cljs.core.seq.call(null,seq__17961_17965);
if(temp__5823__auto___17974){
var seq__17961_17975__$1 = temp__5823__auto___17974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17961_17975__$1)){
var c__5525__auto___17976 = cljs.core.chunk_first.call(null,seq__17961_17975__$1);
var G__17977 = cljs.core.chunk_rest.call(null,seq__17961_17975__$1);
var G__17978 = c__5525__auto___17976;
var G__17979 = cljs.core.count.call(null,c__5525__auto___17976);
var G__17980 = (0);
seq__17961_17965 = G__17977;
chunk__17962_17966 = G__17978;
count__17963_17967 = G__17979;
i__17964_17968 = G__17980;
continue;
} else {
var c_17981 = cljs.core.first.call(null,seq__17961_17975__$1);
sb.append(cljs.compiler.escape_char.call(null,c_17981));


var G__17982 = cljs.core.next.call(null,seq__17961_17975__$1);
var G__17983 = null;
var G__17984 = (0);
var G__17985 = (0);
seq__17961_17965 = G__17982;
chunk__17962_17966 = G__17983;
count__17963_17967 = G__17984;
i__17964_17968 = G__17985;
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
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__17986_17989 = ast;
var map__17986_17990__$1 = cljs.core.__destructure_map.call(null,map__17986_17989);
var env_17991 = cljs.core.get.call(null,map__17986_17990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17991))){
var map__17987_17992 = env_17991;
var map__17987_17993__$1 = cljs.core.__destructure_map.call(null,map__17987_17992);
var line_17994 = cljs.core.get.call(null,map__17987_17993__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17995 = cljs.core.get.call(null,map__17987_17993__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__17988 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__17988,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__17988;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17994 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17995)?(column_17995 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__18004 = arguments.length;
switch (G__18004) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___18011 = arguments.length;
var i__5727__auto___18012 = (0);
while(true){
if((i__5727__auto___18012 < len__5726__auto___18011)){
args_arr__5751__auto__.push((arguments[i__5727__auto___18012]));

var G__18013 = (i__5727__auto___18012 + (1));
i__5727__auto___18012 = G__18013;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_18014 = (function (){var G__18005 = a;
if((!(typeof a === 'string'))){
return G__18005.toString();
} else {
return G__18005;
}
})();
var temp__5827__auto___18015 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5827__auto___18015 == null)){
} else {
var sm_data_18016 = temp__5827__auto___18015;
cljs.core.swap_BANG_.call(null,sm_data_18016,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__17996_SHARP_){
return (p1__17996_SHARP_ + s_18014.length);
}));
}

cljs.core.print.call(null,s_18014);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__18006 = cljs.core.seq.call(null,xs);
var chunk__18007 = null;
var count__18008 = (0);
var i__18009 = (0);
while(true){
if((i__18009 < count__18008)){
var x = cljs.core._nth.call(null,chunk__18007,i__18009);
cljs.compiler.emits.call(null,x);


var G__18017 = seq__18006;
var G__18018 = chunk__18007;
var G__18019 = count__18008;
var G__18020 = (i__18009 + (1));
seq__18006 = G__18017;
chunk__18007 = G__18018;
count__18008 = G__18019;
i__18009 = G__18020;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18006);
if(temp__5823__auto__){
var seq__18006__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18006__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18006__$1);
var G__18021 = cljs.core.chunk_rest.call(null,seq__18006__$1);
var G__18022 = c__5525__auto__;
var G__18023 = cljs.core.count.call(null,c__5525__auto__);
var G__18024 = (0);
seq__18006 = G__18021;
chunk__18007 = G__18022;
count__18008 = G__18023;
i__18009 = G__18024;
continue;
} else {
var x = cljs.core.first.call(null,seq__18006__$1);
cljs.compiler.emits.call(null,x);


var G__18025 = cljs.core.next.call(null,seq__18006__$1);
var G__18026 = null;
var G__18027 = (0);
var G__18028 = (0);
seq__18006 = G__18025;
chunk__18007 = G__18026;
count__18008 = G__18027;
i__18009 = G__18028;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq17998){
var G__17999 = cljs.core.first.call(null,seq17998);
var seq17998__$1 = cljs.core.next.call(null,seq17998);
var G__18000 = cljs.core.first.call(null,seq17998__$1);
var seq17998__$2 = cljs.core.next.call(null,seq17998__$1);
var G__18001 = cljs.core.first.call(null,seq17998__$2);
var seq17998__$3 = cljs.core.next.call(null,seq17998__$2);
var G__18002 = cljs.core.first.call(null,seq17998__$3);
var seq17998__$4 = cljs.core.next.call(null,seq17998__$3);
var G__18003 = cljs.core.first.call(null,seq17998__$4);
var seq17998__$5 = cljs.core.next.call(null,seq17998__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17999,G__18000,G__18001,G__18002,G__18003,seq17998__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__18029){
var map__18030 = p__18029;
var map__18030__$1 = cljs.core.__destructure_map.call(null,map__18030);
var m = map__18030__$1;
var gen_line = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__18038 = arguments.length;
switch (G__18038) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___18044 = arguments.length;
var i__5727__auto___18045 = (0);
while(true){
if((i__5727__auto___18045 < len__5726__auto___18044)){
args_arr__5751__auto__.push((arguments[i__5727__auto___18045]));

var G__18046 = (i__5727__auto___18045 + (1));
i__5727__auto___18045 = G__18046;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__18039_18047 = cljs.core.seq.call(null,xs);
var chunk__18040_18048 = null;
var count__18041_18049 = (0);
var i__18042_18050 = (0);
while(true){
if((i__18042_18050 < count__18041_18049)){
var x_18051 = cljs.core._nth.call(null,chunk__18040_18048,i__18042_18050);
cljs.compiler.emits.call(null,x_18051);


var G__18052 = seq__18039_18047;
var G__18053 = chunk__18040_18048;
var G__18054 = count__18041_18049;
var G__18055 = (i__18042_18050 + (1));
seq__18039_18047 = G__18052;
chunk__18040_18048 = G__18053;
count__18041_18049 = G__18054;
i__18042_18050 = G__18055;
continue;
} else {
var temp__5823__auto___18056 = cljs.core.seq.call(null,seq__18039_18047);
if(temp__5823__auto___18056){
var seq__18039_18057__$1 = temp__5823__auto___18056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18039_18057__$1)){
var c__5525__auto___18058 = cljs.core.chunk_first.call(null,seq__18039_18057__$1);
var G__18059 = cljs.core.chunk_rest.call(null,seq__18039_18057__$1);
var G__18060 = c__5525__auto___18058;
var G__18061 = cljs.core.count.call(null,c__5525__auto___18058);
var G__18062 = (0);
seq__18039_18047 = G__18059;
chunk__18040_18048 = G__18060;
count__18041_18049 = G__18061;
i__18042_18050 = G__18062;
continue;
} else {
var x_18063 = cljs.core.first.call(null,seq__18039_18057__$1);
cljs.compiler.emits.call(null,x_18063);


var G__18064 = cljs.core.next.call(null,seq__18039_18057__$1);
var G__18065 = null;
var G__18066 = (0);
var G__18067 = (0);
seq__18039_18047 = G__18064;
chunk__18040_18048 = G__18065;
count__18041_18049 = G__18066;
i__18042_18050 = G__18067;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq18032){
var G__18033 = cljs.core.first.call(null,seq18032);
var seq18032__$1 = cljs.core.next.call(null,seq18032);
var G__18034 = cljs.core.first.call(null,seq18032__$1);
var seq18032__$2 = cljs.core.next.call(null,seq18032__$1);
var G__18035 = cljs.core.first.call(null,seq18032__$2);
var seq18032__$3 = cljs.core.next.call(null,seq18032__$2);
var G__18036 = cljs.core.first.call(null,seq18032__$3);
var seq18032__$4 = cljs.core.next.call(null,seq18032__$3);
var G__18037 = cljs.core.first.call(null,seq18032__$4);
var seq18032__$5 = cljs.core.next.call(null,seq18032__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18033,G__18034,G__18035,G__18036,G__18037,seq18032__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18068_18072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18069_18073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18070_18074 = true;
var _STAR_print_fn_STAR__temp_val__18071_18075 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18070_18074);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18071_18075);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18069_18073);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18068_18072);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__18076 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__18076,(0),null);
var name = cljs.core.nth.call(null,vec__18076,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.call(null,"(-0)");
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__18079 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__18079,(0),null);
var flags = cljs.core.nth.call(null,vec__18079,(1),null);
var pattern = cljs.core.nth.call(null,vec__18079,(2),null);
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

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
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
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5821__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var value = temp__5821__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5821__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var value = temp__5821__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__18082_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__18082_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__18084){
var map__18085 = p__18084;
var map__18085__$1 = cljs.core.__destructure_map.call(null,map__18085);
var ast = map__18085__$1;
var info = cljs.core.get.call(null,map__18085__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__18085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__18085__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5821__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5821__auto__)){
var const_expr = temp__5821__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__18086 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__18086__$1 = cljs.core.__destructure_map.call(null,map__18086);
var cenv = map__18086__$1;
var options = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5002__auto__ = js_module_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var reserved = (function (){var G__18087 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.call(null,G__18087,cljs.analyzer.es5_allowed);
} else {
return G__18087;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__18088 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__18088,reserved);
} else {
return G__18088;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__18089_18090 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__18089_18091__$1 = (((G__18089_18090 instanceof cljs.core.Keyword))?G__18089_18090.fqn:null);
switch (G__18089_18091__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__5000__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__18093){
var map__18094 = p__18093;
var map__18094__$1 = cljs.core.__destructure_map.call(null,map__18094);
var arg = map__18094__$1;
var env = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__18094__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__18095 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__18095__$1 = cljs.core.__destructure_map.call(null,map__18095);
var name = cljs.core.get.call(null,map__18095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__18096){
var map__18097 = p__18096;
var map__18097__$1 = cljs.core.__destructure_map.call(null,map__18097);
var expr = cljs.core.get.call(null,map__18097__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__18097__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__18097__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__18098_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18098_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__18099){
var map__18100 = p__18099;
var map__18100__$1 = cljs.core.__destructure_map.call(null,map__18100);
var env = cljs.core.get.call(null,map__18100__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__18100__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18100__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__18101){
var map__18102 = p__18101;
var map__18102__$1 = cljs.core.__destructure_map.call(null,map__18102);
var items = cljs.core.get.call(null,map__18102__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__18103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18103_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__18104){
var map__18105 = p__18104;
var map__18105__$1 = cljs.core.__destructure_map.call(null,map__18105);
var items = cljs.core.get.call(null,map__18105__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5823__auto___18128 = cljs.core.seq.call(null,items);
if(temp__5823__auto___18128){
var items_18129__$1 = temp__5823__auto___18128;
var vec__18106_18130 = items_18129__$1;
var seq__18107_18131 = cljs.core.seq.call(null,vec__18106_18130);
var first__18108_18132 = cljs.core.first.call(null,seq__18107_18131);
var seq__18107_18133__$1 = cljs.core.next.call(null,seq__18107_18131);
var vec__18109_18134 = first__18108_18132;
var k_18135 = cljs.core.nth.call(null,vec__18109_18134,(0),null);
var v_18136 = cljs.core.nth.call(null,vec__18109_18134,(1),null);
var r_18137 = seq__18107_18133__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_18135),"\": ",emit_js_object_val.call(null,v_18136));

var seq__18112_18138 = cljs.core.seq.call(null,r_18137);
var chunk__18113_18139 = null;
var count__18114_18140 = (0);
var i__18115_18141 = (0);
while(true){
if((i__18115_18141 < count__18114_18140)){
var vec__18122_18142 = cljs.core._nth.call(null,chunk__18113_18139,i__18115_18141);
var k_18143__$1 = cljs.core.nth.call(null,vec__18122_18142,(0),null);
var v_18144__$1 = cljs.core.nth.call(null,vec__18122_18142,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18143__$1),"\": ",emit_js_object_val.call(null,v_18144__$1));


var G__18145 = seq__18112_18138;
var G__18146 = chunk__18113_18139;
var G__18147 = count__18114_18140;
var G__18148 = (i__18115_18141 + (1));
seq__18112_18138 = G__18145;
chunk__18113_18139 = G__18146;
count__18114_18140 = G__18147;
i__18115_18141 = G__18148;
continue;
} else {
var temp__5823__auto___18149__$1 = cljs.core.seq.call(null,seq__18112_18138);
if(temp__5823__auto___18149__$1){
var seq__18112_18150__$1 = temp__5823__auto___18149__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18112_18150__$1)){
var c__5525__auto___18151 = cljs.core.chunk_first.call(null,seq__18112_18150__$1);
var G__18152 = cljs.core.chunk_rest.call(null,seq__18112_18150__$1);
var G__18153 = c__5525__auto___18151;
var G__18154 = cljs.core.count.call(null,c__5525__auto___18151);
var G__18155 = (0);
seq__18112_18138 = G__18152;
chunk__18113_18139 = G__18153;
count__18114_18140 = G__18154;
i__18115_18141 = G__18155;
continue;
} else {
var vec__18125_18156 = cljs.core.first.call(null,seq__18112_18150__$1);
var k_18157__$1 = cljs.core.nth.call(null,vec__18125_18156,(0),null);
var v_18158__$1 = cljs.core.nth.call(null,vec__18125_18156,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18157__$1),"\": ",emit_js_object_val.call(null,v_18158__$1));


var G__18159 = cljs.core.next.call(null,seq__18112_18150__$1);
var G__18160 = null;
var G__18161 = (0);
var G__18162 = (0);
seq__18112_18138 = G__18159;
chunk__18113_18139 = G__18160;
count__18114_18140 = G__18161;
i__18115_18141 = G__18162;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__18163){
var map__18164 = p__18163;
var map__18164__$1 = cljs.core.__destructure_map.call(null,map__18164);
var keys = cljs.core.get.call(null,map__18164__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18164__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__18164__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__18165){
var map__18166 = p__18165;
var map__18166__$1 = cljs.core.__destructure_map.call(null,map__18166);
var items = cljs.core.get.call(null,map__18166__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__18167){
var map__18168 = p__18167;
var map__18168__$1 = cljs.core.__destructure_map.call(null,map__18168);
var expr = cljs.core.get.call(null,map__18168__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__18169){
var map__18170 = p__18169;
var map__18170__$1 = cljs.core.__destructure_map.call(null,map__18170);
var form = cljs.core.get.call(null,map__18170__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__18170__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__18171 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18171__$1 = cljs.core.__destructure_map.call(null,map__18171);
var op = cljs.core.get.call(null,map__18171__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18171__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18171__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5000__auto__){
var and__5000__auto____$1 = form;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__18172 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18172__$1 = cljs.core.__destructure_map.call(null,map__18172);
var op = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__18173){
var map__18174 = p__18173;
var map__18174__$1 = cljs.core.__destructure_map.call(null,map__18174);
var test = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__5002__auto__ = unchecked;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__18175){
var map__18176 = p__18175;
var map__18176__$1 = cljs.core.__destructure_map.call(null,map__18176);
var v = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__18176__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__18177_18205 = cljs.core.seq.call(null,nodes);
var chunk__18178_18206 = null;
var count__18179_18207 = (0);
var i__18180_18208 = (0);
while(true){
if((i__18180_18208 < count__18179_18207)){
var map__18193_18209 = cljs.core._nth.call(null,chunk__18178_18206,i__18180_18208);
var map__18193_18210__$1 = cljs.core.__destructure_map.call(null,map__18193_18209);
var ts_18211 = cljs.core.get.call(null,map__18193_18210__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18194_18212 = cljs.core.get.call(null,map__18193_18210__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18194_18213__$1 = cljs.core.__destructure_map.call(null,map__18194_18212);
var then_18214 = cljs.core.get.call(null,map__18194_18213__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18195_18215 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18211));
var chunk__18196_18216 = null;
var count__18197_18217 = (0);
var i__18198_18218 = (0);
while(true){
if((i__18198_18218 < count__18197_18217)){
var test_18219 = cljs.core._nth.call(null,chunk__18196_18216,i__18198_18218);
cljs.compiler.emitln.call(null,"case ",test_18219,":");


var G__18220 = seq__18195_18215;
var G__18221 = chunk__18196_18216;
var G__18222 = count__18197_18217;
var G__18223 = (i__18198_18218 + (1));
seq__18195_18215 = G__18220;
chunk__18196_18216 = G__18221;
count__18197_18217 = G__18222;
i__18198_18218 = G__18223;
continue;
} else {
var temp__5823__auto___18224 = cljs.core.seq.call(null,seq__18195_18215);
if(temp__5823__auto___18224){
var seq__18195_18225__$1 = temp__5823__auto___18224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18195_18225__$1)){
var c__5525__auto___18226 = cljs.core.chunk_first.call(null,seq__18195_18225__$1);
var G__18227 = cljs.core.chunk_rest.call(null,seq__18195_18225__$1);
var G__18228 = c__5525__auto___18226;
var G__18229 = cljs.core.count.call(null,c__5525__auto___18226);
var G__18230 = (0);
seq__18195_18215 = G__18227;
chunk__18196_18216 = G__18228;
count__18197_18217 = G__18229;
i__18198_18218 = G__18230;
continue;
} else {
var test_18231 = cljs.core.first.call(null,seq__18195_18225__$1);
cljs.compiler.emitln.call(null,"case ",test_18231,":");


var G__18232 = cljs.core.next.call(null,seq__18195_18225__$1);
var G__18233 = null;
var G__18234 = (0);
var G__18235 = (0);
seq__18195_18215 = G__18232;
chunk__18196_18216 = G__18233;
count__18197_18217 = G__18234;
i__18198_18218 = G__18235;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18214);
} else {
cljs.compiler.emitln.call(null,then_18214);
}

cljs.compiler.emitln.call(null,"break;");


var G__18236 = seq__18177_18205;
var G__18237 = chunk__18178_18206;
var G__18238 = count__18179_18207;
var G__18239 = (i__18180_18208 + (1));
seq__18177_18205 = G__18236;
chunk__18178_18206 = G__18237;
count__18179_18207 = G__18238;
i__18180_18208 = G__18239;
continue;
} else {
var temp__5823__auto___18240 = cljs.core.seq.call(null,seq__18177_18205);
if(temp__5823__auto___18240){
var seq__18177_18241__$1 = temp__5823__auto___18240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18177_18241__$1)){
var c__5525__auto___18242 = cljs.core.chunk_first.call(null,seq__18177_18241__$1);
var G__18243 = cljs.core.chunk_rest.call(null,seq__18177_18241__$1);
var G__18244 = c__5525__auto___18242;
var G__18245 = cljs.core.count.call(null,c__5525__auto___18242);
var G__18246 = (0);
seq__18177_18205 = G__18243;
chunk__18178_18206 = G__18244;
count__18179_18207 = G__18245;
i__18180_18208 = G__18246;
continue;
} else {
var map__18199_18247 = cljs.core.first.call(null,seq__18177_18241__$1);
var map__18199_18248__$1 = cljs.core.__destructure_map.call(null,map__18199_18247);
var ts_18249 = cljs.core.get.call(null,map__18199_18248__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18200_18250 = cljs.core.get.call(null,map__18199_18248__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18200_18251__$1 = cljs.core.__destructure_map.call(null,map__18200_18250);
var then_18252 = cljs.core.get.call(null,map__18200_18251__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18201_18253 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18249));
var chunk__18202_18254 = null;
var count__18203_18255 = (0);
var i__18204_18256 = (0);
while(true){
if((i__18204_18256 < count__18203_18255)){
var test_18257 = cljs.core._nth.call(null,chunk__18202_18254,i__18204_18256);
cljs.compiler.emitln.call(null,"case ",test_18257,":");


var G__18258 = seq__18201_18253;
var G__18259 = chunk__18202_18254;
var G__18260 = count__18203_18255;
var G__18261 = (i__18204_18256 + (1));
seq__18201_18253 = G__18258;
chunk__18202_18254 = G__18259;
count__18203_18255 = G__18260;
i__18204_18256 = G__18261;
continue;
} else {
var temp__5823__auto___18262__$1 = cljs.core.seq.call(null,seq__18201_18253);
if(temp__5823__auto___18262__$1){
var seq__18201_18263__$1 = temp__5823__auto___18262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18201_18263__$1)){
var c__5525__auto___18264 = cljs.core.chunk_first.call(null,seq__18201_18263__$1);
var G__18265 = cljs.core.chunk_rest.call(null,seq__18201_18263__$1);
var G__18266 = c__5525__auto___18264;
var G__18267 = cljs.core.count.call(null,c__5525__auto___18264);
var G__18268 = (0);
seq__18201_18253 = G__18265;
chunk__18202_18254 = G__18266;
count__18203_18255 = G__18267;
i__18204_18256 = G__18268;
continue;
} else {
var test_18269 = cljs.core.first.call(null,seq__18201_18263__$1);
cljs.compiler.emitln.call(null,"case ",test_18269,":");


var G__18270 = cljs.core.next.call(null,seq__18201_18263__$1);
var G__18271 = null;
var G__18272 = (0);
var G__18273 = (0);
seq__18201_18253 = G__18270;
chunk__18202_18254 = G__18271;
count__18203_18255 = G__18272;
i__18204_18256 = G__18273;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18252);
} else {
cljs.compiler.emitln.call(null,then_18252);
}

cljs.compiler.emitln.call(null,"break;");


var G__18274 = cljs.core.next.call(null,seq__18177_18241__$1);
var G__18275 = null;
var G__18276 = (0);
var G__18277 = (0);
seq__18177_18205 = G__18274;
chunk__18178_18206 = G__18275;
count__18179_18207 = G__18276;
i__18180_18208 = G__18277;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__18278){
var map__18279 = p__18278;
var map__18279__$1 = cljs.core.__destructure_map.call(null,map__18279);
var throw$ = cljs.core.get.call(null,map__18279__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__18279__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__18281 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__18281,(0),null);
var rstr = cljs.core.nth.call(null,vec__18281,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__18280_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18280_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__18284 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__18284,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__18284;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__18285_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18285_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__18286 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18287 = cljs.core.seq.call(null,vec__18286);
var first__18288 = cljs.core.first.call(null,seq__18287);
var seq__18287__$1 = cljs.core.next.call(null,seq__18287);
var p = first__18288;
var first__18288__$1 = cljs.core.first.call(null,seq__18287__$1);
var seq__18287__$2 = cljs.core.next.call(null,seq__18287__$1);
var ts = first__18288__$1;
var first__18288__$2 = cljs.core.first.call(null,seq__18287__$2);
var seq__18287__$3 = cljs.core.next.call(null,seq__18287__$2);
var n = first__18288__$2;
var xs = seq__18287__$3;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__18289 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18290 = cljs.core.seq.call(null,vec__18289);
var first__18291 = cljs.core.first.call(null,seq__18290);
var seq__18290__$1 = cljs.core.next.call(null,seq__18290);
var p = first__18291;
var first__18291__$1 = cljs.core.first.call(null,seq__18290__$1);
var seq__18290__$2 = cljs.core.next.call(null,seq__18290__$1);
var ts = first__18291__$1;
var xs = seq__18290__$2;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
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
var G__18294 = arguments.length;
switch (G__18294) {
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

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__18302 = cljs.core.map.call(null,(function (p1__18292_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__18292_SHARP_);
} else {
return p1__18292_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__18303 = cljs.core.seq.call(null,vec__18302);
var first__18304 = cljs.core.first.call(null,seq__18303);
var seq__18303__$1 = cljs.core.next.call(null,seq__18303);
var x = first__18304;
var ys = seq__18303__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__18305 = cljs.core.seq.call(null,ys);
var chunk__18306 = null;
var count__18307 = (0);
var i__18308 = (0);
while(true){
if((i__18308 < count__18307)){
var next_line = cljs.core._nth.call(null,chunk__18306,i__18308);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18314 = seq__18305;
var G__18315 = chunk__18306;
var G__18316 = count__18307;
var G__18317 = (i__18308 + (1));
seq__18305 = G__18314;
chunk__18306 = G__18315;
count__18307 = G__18316;
i__18308 = G__18317;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18305);
if(temp__5823__auto__){
var seq__18305__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18305__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18305__$1);
var G__18318 = cljs.core.chunk_rest.call(null,seq__18305__$1);
var G__18319 = c__5525__auto__;
var G__18320 = cljs.core.count.call(null,c__5525__auto__);
var G__18321 = (0);
seq__18305 = G__18318;
chunk__18306 = G__18319;
count__18307 = G__18320;
i__18308 = G__18321;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__18305__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18322 = cljs.core.next.call(null,seq__18305__$1);
var G__18323 = null;
var G__18324 = (0);
var G__18325 = (0);
seq__18305 = G__18322;
chunk__18306 = G__18323;
count__18307 = G__18324;
i__18308 = G__18325;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__18309_18326 = cljs.core.seq.call(null,docs__$2);
var chunk__18310_18327 = null;
var count__18311_18328 = (0);
var i__18312_18329 = (0);
while(true){
if((i__18312_18329 < count__18311_18328)){
var e_18330 = cljs.core._nth.call(null,chunk__18310_18327,i__18312_18329);
if(cljs.core.truth_(e_18330)){
print_comment_lines.call(null,e_18330);
} else {
}


var G__18331 = seq__18309_18326;
var G__18332 = chunk__18310_18327;
var G__18333 = count__18311_18328;
var G__18334 = (i__18312_18329 + (1));
seq__18309_18326 = G__18331;
chunk__18310_18327 = G__18332;
count__18311_18328 = G__18333;
i__18312_18329 = G__18334;
continue;
} else {
var temp__5823__auto___18335 = cljs.core.seq.call(null,seq__18309_18326);
if(temp__5823__auto___18335){
var seq__18309_18336__$1 = temp__5823__auto___18335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18309_18336__$1)){
var c__5525__auto___18337 = cljs.core.chunk_first.call(null,seq__18309_18336__$1);
var G__18338 = cljs.core.chunk_rest.call(null,seq__18309_18336__$1);
var G__18339 = c__5525__auto___18337;
var G__18340 = cljs.core.count.call(null,c__5525__auto___18337);
var G__18341 = (0);
seq__18309_18326 = G__18338;
chunk__18310_18327 = G__18339;
count__18311_18328 = G__18340;
i__18312_18329 = G__18341;
continue;
} else {
var e_18342 = cljs.core.first.call(null,seq__18309_18336__$1);
if(cljs.core.truth_(e_18342)){
print_comment_lines.call(null,e_18342);
} else {
}


var G__18343 = cljs.core.next.call(null,seq__18309_18336__$1);
var G__18344 = null;
var G__18345 = (0);
var G__18346 = (0);
seq__18309_18326 = G__18343;
chunk__18310_18327 = G__18344;
count__18311_18328 = G__18345;
i__18312_18329 = G__18346;
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
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5000__auto__ = cljs.core.some.call(null,(function (p1__18348_SHARP_){
return goog.string.startsWith(p1__18348_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = opts;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5000__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__18349){
var map__18350 = p__18349;
var map__18350__$1 = cljs.core.__destructure_map.call(null,map__18350);
var doc = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__18350__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5002__auto__ = init;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

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
cljs.compiler.emits.call(null," = ",(function (){var temp__5821__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5821__auto__)){
var define = temp__5821__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

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

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return test;
} else {
return and__5000__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__18351){
var map__18352 = p__18351;
var map__18352__$1 = cljs.core.__destructure_map.call(null,map__18352);
var name = cljs.core.get.call(null,map__18352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18352__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__18353_18377 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__18354_18378 = null;
var count__18355_18379 = (0);
var i__18356_18380 = (0);
while(true){
if((i__18356_18380 < count__18355_18379)){
var vec__18363_18381 = cljs.core._nth.call(null,chunk__18354_18378,i__18356_18380);
var i_18382 = cljs.core.nth.call(null,vec__18363_18381,(0),null);
var param_18383 = cljs.core.nth.call(null,vec__18363_18381,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18383);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18384 = seq__18353_18377;
var G__18385 = chunk__18354_18378;
var G__18386 = count__18355_18379;
var G__18387 = (i__18356_18380 + (1));
seq__18353_18377 = G__18384;
chunk__18354_18378 = G__18385;
count__18355_18379 = G__18386;
i__18356_18380 = G__18387;
continue;
} else {
var temp__5823__auto___18388 = cljs.core.seq.call(null,seq__18353_18377);
if(temp__5823__auto___18388){
var seq__18353_18389__$1 = temp__5823__auto___18388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18353_18389__$1)){
var c__5525__auto___18390 = cljs.core.chunk_first.call(null,seq__18353_18389__$1);
var G__18391 = cljs.core.chunk_rest.call(null,seq__18353_18389__$1);
var G__18392 = c__5525__auto___18390;
var G__18393 = cljs.core.count.call(null,c__5525__auto___18390);
var G__18394 = (0);
seq__18353_18377 = G__18391;
chunk__18354_18378 = G__18392;
count__18355_18379 = G__18393;
i__18356_18380 = G__18394;
continue;
} else {
var vec__18366_18395 = cljs.core.first.call(null,seq__18353_18389__$1);
var i_18396 = cljs.core.nth.call(null,vec__18366_18395,(0),null);
var param_18397 = cljs.core.nth.call(null,vec__18366_18395,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18397);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18398 = cljs.core.next.call(null,seq__18353_18389__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__18353_18377 = G__18398;
chunk__18354_18378 = G__18399;
count__18355_18379 = G__18400;
i__18356_18380 = G__18401;
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

var seq__18369_18402 = cljs.core.seq.call(null,params);
var chunk__18370_18403 = null;
var count__18371_18404 = (0);
var i__18372_18405 = (0);
while(true){
if((i__18372_18405 < count__18371_18404)){
var param_18406 = cljs.core._nth.call(null,chunk__18370_18403,i__18372_18405);
cljs.compiler.emit.call(null,param_18406);

if(cljs.core._EQ_.call(null,param_18406,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18407 = seq__18369_18402;
var G__18408 = chunk__18370_18403;
var G__18409 = count__18371_18404;
var G__18410 = (i__18372_18405 + (1));
seq__18369_18402 = G__18407;
chunk__18370_18403 = G__18408;
count__18371_18404 = G__18409;
i__18372_18405 = G__18410;
continue;
} else {
var temp__5823__auto___18411 = cljs.core.seq.call(null,seq__18369_18402);
if(temp__5823__auto___18411){
var seq__18369_18412__$1 = temp__5823__auto___18411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18369_18412__$1)){
var c__5525__auto___18413 = cljs.core.chunk_first.call(null,seq__18369_18412__$1);
var G__18414 = cljs.core.chunk_rest.call(null,seq__18369_18412__$1);
var G__18415 = c__5525__auto___18413;
var G__18416 = cljs.core.count.call(null,c__5525__auto___18413);
var G__18417 = (0);
seq__18369_18402 = G__18414;
chunk__18370_18403 = G__18415;
count__18371_18404 = G__18416;
i__18372_18405 = G__18417;
continue;
} else {
var param_18418 = cljs.core.first.call(null,seq__18369_18412__$1);
cljs.compiler.emit.call(null,param_18418);

if(cljs.core._EQ_.call(null,param_18418,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18419 = cljs.core.next.call(null,seq__18369_18412__$1);
var G__18420 = null;
var G__18421 = (0);
var G__18422 = (0);
seq__18369_18402 = G__18419;
chunk__18370_18403 = G__18420;
count__18371_18404 = G__18421;
i__18372_18405 = G__18422;
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

var seq__18373_18423 = cljs.core.seq.call(null,params);
var chunk__18374_18424 = null;
var count__18375_18425 = (0);
var i__18376_18426 = (0);
while(true){
if((i__18376_18426 < count__18375_18425)){
var param_18427 = cljs.core._nth.call(null,chunk__18374_18424,i__18376_18426);
cljs.compiler.emit.call(null,param_18427);

if(cljs.core._EQ_.call(null,param_18427,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18428 = seq__18373_18423;
var G__18429 = chunk__18374_18424;
var G__18430 = count__18375_18425;
var G__18431 = (i__18376_18426 + (1));
seq__18373_18423 = G__18428;
chunk__18374_18424 = G__18429;
count__18375_18425 = G__18430;
i__18376_18426 = G__18431;
continue;
} else {
var temp__5823__auto___18432 = cljs.core.seq.call(null,seq__18373_18423);
if(temp__5823__auto___18432){
var seq__18373_18433__$1 = temp__5823__auto___18432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18373_18433__$1)){
var c__5525__auto___18434 = cljs.core.chunk_first.call(null,seq__18373_18433__$1);
var G__18435 = cljs.core.chunk_rest.call(null,seq__18373_18433__$1);
var G__18436 = c__5525__auto___18434;
var G__18437 = cljs.core.count.call(null,c__5525__auto___18434);
var G__18438 = (0);
seq__18373_18423 = G__18435;
chunk__18374_18424 = G__18436;
count__18375_18425 = G__18437;
i__18376_18426 = G__18438;
continue;
} else {
var param_18439 = cljs.core.first.call(null,seq__18373_18433__$1);
cljs.compiler.emit.call(null,param_18439);

if(cljs.core._EQ_.call(null,param_18439,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18440 = cljs.core.next.call(null,seq__18373_18433__$1);
var G__18441 = null;
var G__18442 = (0);
var G__18443 = (0);
seq__18373_18423 = G__18440;
chunk__18374_18424 = G__18441;
count__18375_18425 = G__18442;
i__18376_18426 = G__18443;
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
var seq__18444 = cljs.core.seq.call(null,params);
var chunk__18445 = null;
var count__18446 = (0);
var i__18447 = (0);
while(true){
if((i__18447 < count__18446)){
var param = cljs.core._nth.call(null,chunk__18445,i__18447);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18448 = seq__18444;
var G__18449 = chunk__18445;
var G__18450 = count__18446;
var G__18451 = (i__18447 + (1));
seq__18444 = G__18448;
chunk__18445 = G__18449;
count__18446 = G__18450;
i__18447 = G__18451;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18444);
if(temp__5823__auto__){
var seq__18444__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18444__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18444__$1);
var G__18452 = cljs.core.chunk_rest.call(null,seq__18444__$1);
var G__18453 = c__5525__auto__;
var G__18454 = cljs.core.count.call(null,c__5525__auto__);
var G__18455 = (0);
seq__18444 = G__18452;
chunk__18445 = G__18453;
count__18446 = G__18454;
i__18447 = G__18455;
continue;
} else {
var param = cljs.core.first.call(null,seq__18444__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18456 = cljs.core.next.call(null,seq__18444__$1);
var G__18457 = null;
var G__18458 = (0);
var G__18459 = (0);
seq__18444 = G__18456;
chunk__18445 = G__18457;
count__18446 = G__18458;
i__18447 = G__18459;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__18460){
var map__18461 = p__18460;
var map__18461__$1 = cljs.core.__destructure_map.call(null,map__18461);
var expr = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__18461__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__18462){
var map__18463 = p__18462;
var map__18463__$1 = cljs.core.__destructure_map.call(null,map__18463);
var f = map__18463__$1;
var expr = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__18463__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_18472__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_18473 = cljs.compiler.munge.call(null,name_18472__$1);
var delegate_name_18474 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18473),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_18474," = function (");

var seq__18464_18475 = cljs.core.seq.call(null,params);
var chunk__18465_18476 = null;
var count__18466_18477 = (0);
var i__18467_18478 = (0);
while(true){
if((i__18467_18478 < count__18466_18477)){
var param_18479 = cljs.core._nth.call(null,chunk__18465_18476,i__18467_18478);
cljs.compiler.emit.call(null,param_18479);

if(cljs.core._EQ_.call(null,param_18479,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18480 = seq__18464_18475;
var G__18481 = chunk__18465_18476;
var G__18482 = count__18466_18477;
var G__18483 = (i__18467_18478 + (1));
seq__18464_18475 = G__18480;
chunk__18465_18476 = G__18481;
count__18466_18477 = G__18482;
i__18467_18478 = G__18483;
continue;
} else {
var temp__5823__auto___18484 = cljs.core.seq.call(null,seq__18464_18475);
if(temp__5823__auto___18484){
var seq__18464_18485__$1 = temp__5823__auto___18484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18464_18485__$1)){
var c__5525__auto___18486 = cljs.core.chunk_first.call(null,seq__18464_18485__$1);
var G__18487 = cljs.core.chunk_rest.call(null,seq__18464_18485__$1);
var G__18488 = c__5525__auto___18486;
var G__18489 = cljs.core.count.call(null,c__5525__auto___18486);
var G__18490 = (0);
seq__18464_18475 = G__18487;
chunk__18465_18476 = G__18488;
count__18466_18477 = G__18489;
i__18467_18478 = G__18490;
continue;
} else {
var param_18491 = cljs.core.first.call(null,seq__18464_18485__$1);
cljs.compiler.emit.call(null,param_18491);

if(cljs.core._EQ_.call(null,param_18491,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18492 = cljs.core.next.call(null,seq__18464_18485__$1);
var G__18493 = null;
var G__18494 = (0);
var G__18495 = (0);
seq__18464_18475 = G__18492;
chunk__18465_18476 = G__18493;
count__18466_18477 = G__18494;
i__18467_18478 = G__18495;
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

cljs.compiler.emitln.call(null,"var ",mname_18473," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_18496 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_18496,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_18474,".call(this,");

var seq__18468_18497 = cljs.core.seq.call(null,params);
var chunk__18469_18498 = null;
var count__18470_18499 = (0);
var i__18471_18500 = (0);
while(true){
if((i__18471_18500 < count__18470_18499)){
var param_18501 = cljs.core._nth.call(null,chunk__18469_18498,i__18471_18500);
cljs.compiler.emit.call(null,param_18501);

if(cljs.core._EQ_.call(null,param_18501,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18502 = seq__18468_18497;
var G__18503 = chunk__18469_18498;
var G__18504 = count__18470_18499;
var G__18505 = (i__18471_18500 + (1));
seq__18468_18497 = G__18502;
chunk__18469_18498 = G__18503;
count__18470_18499 = G__18504;
i__18471_18500 = G__18505;
continue;
} else {
var temp__5823__auto___18506 = cljs.core.seq.call(null,seq__18468_18497);
if(temp__5823__auto___18506){
var seq__18468_18507__$1 = temp__5823__auto___18506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18468_18507__$1)){
var c__5525__auto___18508 = cljs.core.chunk_first.call(null,seq__18468_18507__$1);
var G__18509 = cljs.core.chunk_rest.call(null,seq__18468_18507__$1);
var G__18510 = c__5525__auto___18508;
var G__18511 = cljs.core.count.call(null,c__5525__auto___18508);
var G__18512 = (0);
seq__18468_18497 = G__18509;
chunk__18469_18498 = G__18510;
count__18470_18499 = G__18511;
i__18471_18500 = G__18512;
continue;
} else {
var param_18513 = cljs.core.first.call(null,seq__18468_18507__$1);
cljs.compiler.emit.call(null,param_18513);

if(cljs.core._EQ_.call(null,param_18513,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18514 = cljs.core.next.call(null,seq__18468_18507__$1);
var G__18515 = null;
var G__18516 = (0);
var G__18517 = (0);
seq__18468_18497 = G__18514;
chunk__18469_18498 = G__18515;
count__18470_18499 = G__18516;
i__18471_18500 = G__18517;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_18473,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_18473,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_18472__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_18473,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18474,";");

cljs.compiler.emitln.call(null,"return ",mname_18473,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__18521){
var map__18522 = p__18521;
var map__18522__$1 = cljs.core.__destructure_map.call(null,map__18522);
var variadic = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__18522__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__18518_SHARP_){
var and__5000__auto__ = p1__18518_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__18518_SHARP_));
} else {
return and__5000__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__5002__auto__ = in_loop;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
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
var name_18574__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_18575 = cljs.compiler.munge.call(null,name_18574__$1);
var maxparams_18576 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_18577 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18575),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_18578 = cljs.core.sort_by.call(null,(function (p1__18519_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__18519_SHARP_)));
}),cljs.core.seq.call(null,mmap_18577));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_18575," = null;");

var seq__18523_18579 = cljs.core.seq.call(null,ms_18578);
var chunk__18524_18580 = null;
var count__18525_18581 = (0);
var i__18526_18582 = (0);
while(true){
if((i__18526_18582 < count__18525_18581)){
var vec__18533_18583 = cljs.core._nth.call(null,chunk__18524_18580,i__18526_18582);
var n_18584 = cljs.core.nth.call(null,vec__18533_18583,(0),null);
var meth_18585 = cljs.core.nth.call(null,vec__18533_18583,(1),null);
cljs.compiler.emits.call(null,"var ",n_18584," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18585))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_18585);
} else {
cljs.compiler.emit_fn_method.call(null,meth_18585);
}

cljs.compiler.emitln.call(null,";");


var G__18586 = seq__18523_18579;
var G__18587 = chunk__18524_18580;
var G__18588 = count__18525_18581;
var G__18589 = (i__18526_18582 + (1));
seq__18523_18579 = G__18586;
chunk__18524_18580 = G__18587;
count__18525_18581 = G__18588;
i__18526_18582 = G__18589;
continue;
} else {
var temp__5823__auto___18590 = cljs.core.seq.call(null,seq__18523_18579);
if(temp__5823__auto___18590){
var seq__18523_18591__$1 = temp__5823__auto___18590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18523_18591__$1)){
var c__5525__auto___18592 = cljs.core.chunk_first.call(null,seq__18523_18591__$1);
var G__18593 = cljs.core.chunk_rest.call(null,seq__18523_18591__$1);
var G__18594 = c__5525__auto___18592;
var G__18595 = cljs.core.count.call(null,c__5525__auto___18592);
var G__18596 = (0);
seq__18523_18579 = G__18593;
chunk__18524_18580 = G__18594;
count__18525_18581 = G__18595;
i__18526_18582 = G__18596;
continue;
} else {
var vec__18536_18597 = cljs.core.first.call(null,seq__18523_18591__$1);
var n_18598 = cljs.core.nth.call(null,vec__18536_18597,(0),null);
var meth_18599 = cljs.core.nth.call(null,vec__18536_18597,(1),null);
cljs.compiler.emits.call(null,"var ",n_18598," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18599))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_18599);
} else {
cljs.compiler.emit_fn_method.call(null,meth_18599);
}

cljs.compiler.emitln.call(null,";");


var G__18600 = cljs.core.next.call(null,seq__18523_18591__$1);
var G__18601 = null;
var G__18602 = (0);
var G__18603 = (0);
seq__18523_18579 = G__18600;
chunk__18524_18580 = G__18601;
count__18525_18581 = G__18602;
i__18526_18582 = G__18603;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_18575," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_18576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_18576)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_18576));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__18539_18604 = cljs.core.seq.call(null,ms_18578);
var chunk__18540_18605 = null;
var count__18541_18606 = (0);
var i__18542_18607 = (0);
while(true){
if((i__18542_18607 < count__18541_18606)){
var vec__18549_18608 = cljs.core._nth.call(null,chunk__18540_18605,i__18542_18607);
var n_18609 = cljs.core.nth.call(null,vec__18549_18608,(0),null);
var meth_18610 = cljs.core.nth.call(null,vec__18549_18608,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18610))){
cljs.compiler.emitln.call(null,"default:");

var restarg_18611 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_18611," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_18612 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_18611," = new cljs.core.IndexedSeq(",a_18612,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_18609,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_18576)),(((cljs.core.count.call(null,maxparams_18576) > (1)))?", ":null),restarg_18611,");");
} else {
var pcnt_18613 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18610));
cljs.compiler.emitln.call(null,"case ",pcnt_18613,":");

cljs.compiler.emitln.call(null,"return ",n_18609,".call(this",(((pcnt_18613 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_18613,maxparams_18576)),null,(1),null)),(2),null))),");");
}


var G__18614 = seq__18539_18604;
var G__18615 = chunk__18540_18605;
var G__18616 = count__18541_18606;
var G__18617 = (i__18542_18607 + (1));
seq__18539_18604 = G__18614;
chunk__18540_18605 = G__18615;
count__18541_18606 = G__18616;
i__18542_18607 = G__18617;
continue;
} else {
var temp__5823__auto___18618 = cljs.core.seq.call(null,seq__18539_18604);
if(temp__5823__auto___18618){
var seq__18539_18619__$1 = temp__5823__auto___18618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18539_18619__$1)){
var c__5525__auto___18620 = cljs.core.chunk_first.call(null,seq__18539_18619__$1);
var G__18621 = cljs.core.chunk_rest.call(null,seq__18539_18619__$1);
var G__18622 = c__5525__auto___18620;
var G__18623 = cljs.core.count.call(null,c__5525__auto___18620);
var G__18624 = (0);
seq__18539_18604 = G__18621;
chunk__18540_18605 = G__18622;
count__18541_18606 = G__18623;
i__18542_18607 = G__18624;
continue;
} else {
var vec__18552_18625 = cljs.core.first.call(null,seq__18539_18619__$1);
var n_18626 = cljs.core.nth.call(null,vec__18552_18625,(0),null);
var meth_18627 = cljs.core.nth.call(null,vec__18552_18625,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18627))){
cljs.compiler.emitln.call(null,"default:");

var restarg_18628 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_18628," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_18629 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_18628," = new cljs.core.IndexedSeq(",a_18629,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_18626,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_18576)),(((cljs.core.count.call(null,maxparams_18576) > (1)))?", ":null),restarg_18628,");");
} else {
var pcnt_18630 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18627));
cljs.compiler.emitln.call(null,"case ",pcnt_18630,":");

cljs.compiler.emitln.call(null,"return ",n_18626,".call(this",(((pcnt_18630 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_18630,maxparams_18576)),null,(1),null)),(2),null))),");");
}


var G__18631 = cljs.core.next.call(null,seq__18539_18619__$1);
var G__18632 = null;
var G__18633 = (0);
var G__18634 = (0);
seq__18539_18604 = G__18631;
chunk__18540_18605 = G__18632;
count__18541_18606 = G__18633;
i__18542_18607 = G__18634;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_18635 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_18578)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_18635,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_18575,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_18575,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__18520_SHARP_){
var vec__18555 = p1__18520_SHARP_;
var n = cljs.core.nth.call(null,vec__18555,(0),null);
var m = cljs.core.nth.call(null,vec__18555,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_18578),".cljs$lang$applyTo;");
} else {
}

var seq__18558_18636 = cljs.core.seq.call(null,ms_18578);
var chunk__18559_18637 = null;
var count__18560_18638 = (0);
var i__18561_18639 = (0);
while(true){
if((i__18561_18639 < count__18560_18638)){
var vec__18568_18640 = cljs.core._nth.call(null,chunk__18559_18637,i__18561_18639);
var n_18641 = cljs.core.nth.call(null,vec__18568_18640,(0),null);
var meth_18642 = cljs.core.nth.call(null,vec__18568_18640,(1),null);
var c_18643 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18642));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18642))){
cljs.compiler.emitln.call(null,mname_18575,".cljs$core$IFn$_invoke$arity$variadic = ",n_18641,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_18575,".cljs$core$IFn$_invoke$arity$",c_18643," = ",n_18641,";");
}


var G__18644 = seq__18558_18636;
var G__18645 = chunk__18559_18637;
var G__18646 = count__18560_18638;
var G__18647 = (i__18561_18639 + (1));
seq__18558_18636 = G__18644;
chunk__18559_18637 = G__18645;
count__18560_18638 = G__18646;
i__18561_18639 = G__18647;
continue;
} else {
var temp__5823__auto___18648 = cljs.core.seq.call(null,seq__18558_18636);
if(temp__5823__auto___18648){
var seq__18558_18649__$1 = temp__5823__auto___18648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18558_18649__$1)){
var c__5525__auto___18650 = cljs.core.chunk_first.call(null,seq__18558_18649__$1);
var G__18651 = cljs.core.chunk_rest.call(null,seq__18558_18649__$1);
var G__18652 = c__5525__auto___18650;
var G__18653 = cljs.core.count.call(null,c__5525__auto___18650);
var G__18654 = (0);
seq__18558_18636 = G__18651;
chunk__18559_18637 = G__18652;
count__18560_18638 = G__18653;
i__18561_18639 = G__18654;
continue;
} else {
var vec__18571_18655 = cljs.core.first.call(null,seq__18558_18649__$1);
var n_18656 = cljs.core.nth.call(null,vec__18571_18655,(0),null);
var meth_18657 = cljs.core.nth.call(null,vec__18571_18655,(1),null);
var c_18658 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18657));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18657))){
cljs.compiler.emitln.call(null,mname_18575,".cljs$core$IFn$_invoke$arity$variadic = ",n_18656,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_18575,".cljs$core$IFn$_invoke$arity$",c_18658," = ",n_18656,";");
}


var G__18659 = cljs.core.next.call(null,seq__18558_18649__$1);
var G__18660 = null;
var G__18661 = (0);
var G__18662 = (0);
seq__18558_18636 = G__18659;
chunk__18559_18637 = G__18660;
count__18560_18638 = G__18661;
i__18561_18639 = G__18662;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_18575,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__18663){
var map__18664 = p__18663;
var map__18664__$1 = cljs.core.__destructure_map.call(null,map__18664);
var statements = cljs.core.get.call(null,map__18664__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__18664__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__18664__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__18665_18669 = cljs.core.seq.call(null,statements);
var chunk__18666_18670 = null;
var count__18667_18671 = (0);
var i__18668_18672 = (0);
while(true){
if((i__18668_18672 < count__18667_18671)){
var s_18673 = cljs.core._nth.call(null,chunk__18666_18670,i__18668_18672);
cljs.compiler.emitln.call(null,s_18673);


var G__18674 = seq__18665_18669;
var G__18675 = chunk__18666_18670;
var G__18676 = count__18667_18671;
var G__18677 = (i__18668_18672 + (1));
seq__18665_18669 = G__18674;
chunk__18666_18670 = G__18675;
count__18667_18671 = G__18676;
i__18668_18672 = G__18677;
continue;
} else {
var temp__5823__auto___18678 = cljs.core.seq.call(null,seq__18665_18669);
if(temp__5823__auto___18678){
var seq__18665_18679__$1 = temp__5823__auto___18678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18665_18679__$1)){
var c__5525__auto___18680 = cljs.core.chunk_first.call(null,seq__18665_18679__$1);
var G__18681 = cljs.core.chunk_rest.call(null,seq__18665_18679__$1);
var G__18682 = c__5525__auto___18680;
var G__18683 = cljs.core.count.call(null,c__5525__auto___18680);
var G__18684 = (0);
seq__18665_18669 = G__18681;
chunk__18666_18670 = G__18682;
count__18667_18671 = G__18683;
i__18668_18672 = G__18684;
continue;
} else {
var s_18685 = cljs.core.first.call(null,seq__18665_18679__$1);
cljs.compiler.emitln.call(null,s_18685);


var G__18686 = cljs.core.next.call(null,seq__18665_18679__$1);
var G__18687 = null;
var G__18688 = (0);
var G__18689 = (0);
seq__18665_18669 = G__18686;
chunk__18666_18670 = G__18687;
count__18667_18671 = G__18688;
i__18668_18672 = G__18689;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__18690){
var map__18691 = p__18690;
var map__18691__$1 = cljs.core.__destructure_map.call(null,map__18691);
var try$ = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__18692,is_loop){
var map__18693 = p__18692;
var map__18693__$1 = cljs.core.__destructure_map.call(null,map__18693);
var expr = cljs.core.get.call(null,map__18693__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__18693__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__18693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__18694_18704 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__18695_18705 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__18695_18705);

try{var seq__18696_18706 = cljs.core.seq.call(null,bindings);
var chunk__18697_18707 = null;
var count__18698_18708 = (0);
var i__18699_18709 = (0);
while(true){
if((i__18699_18709 < count__18698_18708)){
var map__18702_18710 = cljs.core._nth.call(null,chunk__18697_18707,i__18699_18709);
var map__18702_18711__$1 = cljs.core.__destructure_map.call(null,map__18702_18710);
var binding_18712 = map__18702_18711__$1;
var init_18713 = cljs.core.get.call(null,map__18702_18711__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_18712);

cljs.compiler.emitln.call(null," = ",init_18713,";");


var G__18714 = seq__18696_18706;
var G__18715 = chunk__18697_18707;
var G__18716 = count__18698_18708;
var G__18717 = (i__18699_18709 + (1));
seq__18696_18706 = G__18714;
chunk__18697_18707 = G__18715;
count__18698_18708 = G__18716;
i__18699_18709 = G__18717;
continue;
} else {
var temp__5823__auto___18718 = cljs.core.seq.call(null,seq__18696_18706);
if(temp__5823__auto___18718){
var seq__18696_18719__$1 = temp__5823__auto___18718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18696_18719__$1)){
var c__5525__auto___18720 = cljs.core.chunk_first.call(null,seq__18696_18719__$1);
var G__18721 = cljs.core.chunk_rest.call(null,seq__18696_18719__$1);
var G__18722 = c__5525__auto___18720;
var G__18723 = cljs.core.count.call(null,c__5525__auto___18720);
var G__18724 = (0);
seq__18696_18706 = G__18721;
chunk__18697_18707 = G__18722;
count__18698_18708 = G__18723;
i__18699_18709 = G__18724;
continue;
} else {
var map__18703_18725 = cljs.core.first.call(null,seq__18696_18719__$1);
var map__18703_18726__$1 = cljs.core.__destructure_map.call(null,map__18703_18725);
var binding_18727 = map__18703_18726__$1;
var init_18728 = cljs.core.get.call(null,map__18703_18726__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_18727);

cljs.compiler.emitln.call(null," = ",init_18728,";");


var G__18729 = cljs.core.next.call(null,seq__18696_18719__$1);
var G__18730 = null;
var G__18731 = (0);
var G__18732 = (0);
seq__18696_18706 = G__18729;
chunk__18697_18707 = G__18730;
count__18698_18708 = G__18731;
i__18699_18709 = G__18732;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__18694_18704);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__18733){
var map__18734 = p__18733;
var map__18734__$1 = cljs.core.__destructure_map.call(null,map__18734);
var frame = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__18734__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___18735 = cljs.core.count.call(null,exprs);
var i_18736 = (0);
while(true){
if((i_18736 < n__5593__auto___18735)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_18736)," = ",exprs.call(null,i_18736),";");

var G__18737 = (i_18736 + (1));
i_18736 = G__18737;
continue;
} else {
}
break;
}

var n__5593__auto___18738 = cljs.core.count.call(null,exprs);
var i_18739 = (0);
while(true){
if((i_18739 < n__5593__auto___18738)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_18739))," = ",temps.call(null,i_18739),";");

var G__18740 = (i_18739 + (1));
i_18739 = G__18740;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__18741){
var map__18742 = p__18741;
var map__18742__$1 = cljs.core.__destructure_map.call(null,map__18742);
var expr = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__18742__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__18743_18751 = cljs.core.seq.call(null,bindings);
var chunk__18744_18752 = null;
var count__18745_18753 = (0);
var i__18746_18754 = (0);
while(true){
if((i__18746_18754 < count__18745_18753)){
var map__18749_18755 = cljs.core._nth.call(null,chunk__18744_18752,i__18746_18754);
var map__18749_18756__$1 = cljs.core.__destructure_map.call(null,map__18749_18755);
var binding_18757 = map__18749_18756__$1;
var init_18758 = cljs.core.get.call(null,map__18749_18756__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_18757)," = ",init_18758,";");


var G__18759 = seq__18743_18751;
var G__18760 = chunk__18744_18752;
var G__18761 = count__18745_18753;
var G__18762 = (i__18746_18754 + (1));
seq__18743_18751 = G__18759;
chunk__18744_18752 = G__18760;
count__18745_18753 = G__18761;
i__18746_18754 = G__18762;
continue;
} else {
var temp__5823__auto___18763 = cljs.core.seq.call(null,seq__18743_18751);
if(temp__5823__auto___18763){
var seq__18743_18764__$1 = temp__5823__auto___18763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18743_18764__$1)){
var c__5525__auto___18765 = cljs.core.chunk_first.call(null,seq__18743_18764__$1);
var G__18766 = cljs.core.chunk_rest.call(null,seq__18743_18764__$1);
var G__18767 = c__5525__auto___18765;
var G__18768 = cljs.core.count.call(null,c__5525__auto___18765);
var G__18769 = (0);
seq__18743_18751 = G__18766;
chunk__18744_18752 = G__18767;
count__18745_18753 = G__18768;
i__18746_18754 = G__18769;
continue;
} else {
var map__18750_18770 = cljs.core.first.call(null,seq__18743_18764__$1);
var map__18750_18771__$1 = cljs.core.__destructure_map.call(null,map__18750_18770);
var binding_18772 = map__18750_18771__$1;
var init_18773 = cljs.core.get.call(null,map__18750_18771__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_18772)," = ",init_18773,";");


var G__18774 = cljs.core.next.call(null,seq__18743_18764__$1);
var G__18775 = null;
var G__18776 = (0);
var G__18777 = (0);
seq__18743_18751 = G__18774;
chunk__18744_18752 = G__18775;
count__18745_18753 = G__18776;
i__18746_18754 = G__18777;
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
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__18780){
var map__18781 = p__18780;
var map__18781__$1 = cljs.core.__destructure_map.call(null,map__18781);
var expr = map__18781__$1;
var f = cljs.core.get.call(null,map__18781__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__18781__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__18781__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5000__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5000__auto__ = protocol;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = tag;
if(cljs.core.truth_(and__5000__auto____$1)){
var or__5002__auto__ = (function (){var and__5000__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = protocol;
if(cljs.core.truth_(and__5000__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto____$2 = (function (){var or__5002__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5000__auto____$2)){
var or__5002__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__5000__auto____$3){
var and__5000__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__5000__auto____$4){
var temp__5823__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5823__auto__)){
var ps = temp__5823__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
}
} else {
return and__5000__auto____$2;
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5002__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5823__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5823__auto__)){
var ns_str = temp__5823__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__18782 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return (arity > mfa);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18778_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__18778_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18779_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__18779_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__18782,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__18782,(1),null);
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_18785 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_18785,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_18786 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_18786,args)),(((mfa_18786 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_18786,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__5000__auto__;
}
})())){
var fprop_18787 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_18787," ? ",f__$1,fprop_18787,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_18787," ? ",f__$1,fprop_18787,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__18788){
var map__18789 = p__18788;
var map__18789__$1 = cljs.core.__destructure_map.call(null,map__18789);
var ctor = cljs.core.get.call(null,map__18789__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__18789__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__18789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__18790){
var map__18791 = p__18790;
var map__18791__$1 = cljs.core.__destructure_map.call(null,map__18791);
var target = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__18791__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__18792_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18792_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__18793 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18793,(0),null);
var sublib = cljs.core.nth.call(null,vec__18793,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__5002__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__18796 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__18796__$1 = cljs.core.__destructure_map.call(null,map__18796);
var options = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__18796__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__18797 = options;
var map__18797__$1 = cljs.core.__destructure_map.call(null,map__18797);
var target = cljs.core.get.call(null,map__18797__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__18797__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__18797__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__18798 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__18804 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__18804__$1 = cljs.core.__destructure_map.call(null,map__18804);
var node_libs = cljs.core.get.call(null,map__18804__$1,true);
var libs_to_load = cljs.core.get.call(null,map__18804__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__18798,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__18798,(1),null);
var vec__18801 = (function (){var map__18805 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__18805__$1 = cljs.core.__destructure_map.call(null,map__18805);
var goog_modules = cljs.core.get.call(null,map__18805__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__18805__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__18801,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__18801,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__18806_18850 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__18807_18851 = null;
var count__18808_18852 = (0);
var i__18809_18853 = (0);
while(true){
if((i__18809_18853 < count__18808_18852)){
var lib_18854 = cljs.core._nth.call(null,chunk__18807_18851,i__18809_18853);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_18854)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18854),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18854),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18854),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18854),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_18854,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18854),"');");
}

}
}
}


var G__18855 = seq__18806_18850;
var G__18856 = chunk__18807_18851;
var G__18857 = count__18808_18852;
var G__18858 = (i__18809_18853 + (1));
seq__18806_18850 = G__18855;
chunk__18807_18851 = G__18856;
count__18808_18852 = G__18857;
i__18809_18853 = G__18858;
continue;
} else {
var temp__5823__auto___18859 = cljs.core.seq.call(null,seq__18806_18850);
if(temp__5823__auto___18859){
var seq__18806_18860__$1 = temp__5823__auto___18859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18806_18860__$1)){
var c__5525__auto___18861 = cljs.core.chunk_first.call(null,seq__18806_18860__$1);
var G__18862 = cljs.core.chunk_rest.call(null,seq__18806_18860__$1);
var G__18863 = c__5525__auto___18861;
var G__18864 = cljs.core.count.call(null,c__5525__auto___18861);
var G__18865 = (0);
seq__18806_18850 = G__18862;
chunk__18807_18851 = G__18863;
count__18808_18852 = G__18864;
i__18809_18853 = G__18865;
continue;
} else {
var lib_18866 = cljs.core.first.call(null,seq__18806_18860__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_18866)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18866),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18866),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18866),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18866),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_18866,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18866),"');");
}

}
}
}


var G__18867 = cljs.core.next.call(null,seq__18806_18860__$1);
var G__18868 = null;
var G__18869 = (0);
var G__18870 = (0);
seq__18806_18850 = G__18867;
chunk__18807_18851 = G__18868;
count__18808_18852 = G__18869;
i__18809_18853 = G__18870;
continue;
}
} else {
}
}
break;
}

var seq__18810_18871 = cljs.core.seq.call(null,node_libs);
var chunk__18811_18872 = null;
var count__18812_18873 = (0);
var i__18813_18874 = (0);
while(true){
if((i__18813_18874 < count__18812_18873)){
var lib_18875 = cljs.core._nth.call(null,chunk__18811_18872,i__18813_18874);
var vec__18820_18876 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18875);
var lib_SINGLEQUOTE__18877 = cljs.core.nth.call(null,vec__18820_18876,(0),null);
var sublib_18878 = cljs.core.nth.call(null,vec__18820_18876,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_18875)," = require('",lib_SINGLEQUOTE__18877,"')",cljs.compiler.sublib_select.call(null,sublib_18878),";");


var G__18879 = seq__18810_18871;
var G__18880 = chunk__18811_18872;
var G__18881 = count__18812_18873;
var G__18882 = (i__18813_18874 + (1));
seq__18810_18871 = G__18879;
chunk__18811_18872 = G__18880;
count__18812_18873 = G__18881;
i__18813_18874 = G__18882;
continue;
} else {
var temp__5823__auto___18883 = cljs.core.seq.call(null,seq__18810_18871);
if(temp__5823__auto___18883){
var seq__18810_18884__$1 = temp__5823__auto___18883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18810_18884__$1)){
var c__5525__auto___18885 = cljs.core.chunk_first.call(null,seq__18810_18884__$1);
var G__18886 = cljs.core.chunk_rest.call(null,seq__18810_18884__$1);
var G__18887 = c__5525__auto___18885;
var G__18888 = cljs.core.count.call(null,c__5525__auto___18885);
var G__18889 = (0);
seq__18810_18871 = G__18886;
chunk__18811_18872 = G__18887;
count__18812_18873 = G__18888;
i__18813_18874 = G__18889;
continue;
} else {
var lib_18890 = cljs.core.first.call(null,seq__18810_18884__$1);
var vec__18823_18891 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18890);
var lib_SINGLEQUOTE__18892 = cljs.core.nth.call(null,vec__18823_18891,(0),null);
var sublib_18893 = cljs.core.nth.call(null,vec__18823_18891,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_18890)," = require('",lib_SINGLEQUOTE__18892,"')",cljs.compiler.sublib_select.call(null,sublib_18893),";");


var G__18894 = cljs.core.next.call(null,seq__18810_18884__$1);
var G__18895 = null;
var G__18896 = (0);
var G__18897 = (0);
seq__18810_18871 = G__18894;
chunk__18811_18872 = G__18895;
count__18812_18873 = G__18896;
i__18813_18874 = G__18897;
continue;
}
} else {
}
}
break;
}

var seq__18826_18898 = cljs.core.seq.call(null,goog_modules);
var chunk__18827_18899 = null;
var count__18828_18900 = (0);
var i__18829_18901 = (0);
while(true){
if((i__18829_18901 < count__18828_18900)){
var lib_18902 = cljs.core._nth.call(null,chunk__18827_18899,i__18829_18901);
var vec__18836_18903 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18902);
var lib_SINGLEQUOTE__18904 = cljs.core.nth.call(null,vec__18836_18903,(0),null);
var sublib_18905 = cljs.core.nth.call(null,vec__18836_18903,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__18904,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_18902)," = goog.module.get('",lib_SINGLEQUOTE__18904,"')",cljs.compiler.sublib_select.call(null,sublib_18905),";");

cljs.compiler.emitln.call(null,"});");


var G__18906 = seq__18826_18898;
var G__18907 = chunk__18827_18899;
var G__18908 = count__18828_18900;
var G__18909 = (i__18829_18901 + (1));
seq__18826_18898 = G__18906;
chunk__18827_18899 = G__18907;
count__18828_18900 = G__18908;
i__18829_18901 = G__18909;
continue;
} else {
var temp__5823__auto___18910 = cljs.core.seq.call(null,seq__18826_18898);
if(temp__5823__auto___18910){
var seq__18826_18911__$1 = temp__5823__auto___18910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18826_18911__$1)){
var c__5525__auto___18912 = cljs.core.chunk_first.call(null,seq__18826_18911__$1);
var G__18913 = cljs.core.chunk_rest.call(null,seq__18826_18911__$1);
var G__18914 = c__5525__auto___18912;
var G__18915 = cljs.core.count.call(null,c__5525__auto___18912);
var G__18916 = (0);
seq__18826_18898 = G__18913;
chunk__18827_18899 = G__18914;
count__18828_18900 = G__18915;
i__18829_18901 = G__18916;
continue;
} else {
var lib_18917 = cljs.core.first.call(null,seq__18826_18911__$1);
var vec__18839_18918 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18917);
var lib_SINGLEQUOTE__18919 = cljs.core.nth.call(null,vec__18839_18918,(0),null);
var sublib_18920 = cljs.core.nth.call(null,vec__18839_18918,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__18919,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_18917)," = goog.module.get('",lib_SINGLEQUOTE__18919,"')",cljs.compiler.sublib_select.call(null,sublib_18920),";");

cljs.compiler.emitln.call(null,"});");


var G__18921 = cljs.core.next.call(null,seq__18826_18911__$1);
var G__18922 = null;
var G__18923 = (0);
var G__18924 = (0);
seq__18826_18898 = G__18921;
chunk__18827_18899 = G__18922;
count__18828_18900 = G__18923;
i__18829_18901 = G__18924;
continue;
}
} else {
}
}
break;
}

var seq__18842_18925 = cljs.core.seq.call(null,global_exports_libs);
var chunk__18843_18926 = null;
var count__18844_18927 = (0);
var i__18845_18928 = (0);
while(true){
if((i__18845_18928 < count__18844_18927)){
var lib_18929 = cljs.core._nth.call(null,chunk__18843_18926,i__18845_18928);
var map__18848_18930 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18929))));
var map__18848_18931__$1 = cljs.core.__destructure_map.call(null,map__18848_18930);
var global_exports_18932 = cljs.core.get.call(null,map__18848_18931__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_18932,lib_18929);


var G__18933 = seq__18842_18925;
var G__18934 = chunk__18843_18926;
var G__18935 = count__18844_18927;
var G__18936 = (i__18845_18928 + (1));
seq__18842_18925 = G__18933;
chunk__18843_18926 = G__18934;
count__18844_18927 = G__18935;
i__18845_18928 = G__18936;
continue;
} else {
var temp__5823__auto___18937 = cljs.core.seq.call(null,seq__18842_18925);
if(temp__5823__auto___18937){
var seq__18842_18938__$1 = temp__5823__auto___18937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18842_18938__$1)){
var c__5525__auto___18939 = cljs.core.chunk_first.call(null,seq__18842_18938__$1);
var G__18940 = cljs.core.chunk_rest.call(null,seq__18842_18938__$1);
var G__18941 = c__5525__auto___18939;
var G__18942 = cljs.core.count.call(null,c__5525__auto___18939);
var G__18943 = (0);
seq__18842_18925 = G__18940;
chunk__18843_18926 = G__18941;
count__18844_18927 = G__18942;
i__18845_18928 = G__18943;
continue;
} else {
var lib_18944 = cljs.core.first.call(null,seq__18842_18938__$1);
var map__18849_18945 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18944))));
var map__18849_18946__$1 = cljs.core.__destructure_map.call(null,map__18849_18945);
var global_exports_18947 = cljs.core.get.call(null,map__18849_18946__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_18947,lib_18944);


var G__18948 = cljs.core.next.call(null,seq__18842_18938__$1);
var G__18949 = null;
var G__18950 = (0);
var G__18951 = (0);
seq__18842_18925 = G__18948;
chunk__18843_18926 = G__18949;
count__18844_18927 = G__18950;
i__18845_18928 = G__18951;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__18952){
var map__18953 = p__18952;
var map__18953__$1 = cljs.core.__destructure_map.call(null,map__18953);
var name = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18953__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__18954){
var map__18955 = p__18954;
var map__18955__$1 = cljs.core.__destructure_map.call(null,map__18955);
var name = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18955__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__18956){
var map__18957 = p__18956;
var map__18957__$1 = cljs.core.__destructure_map.call(null,map__18957);
var t = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__18958_18982 = cljs.core.seq.call(null,protocols);
var chunk__18959_18983 = null;
var count__18960_18984 = (0);
var i__18961_18985 = (0);
while(true){
if((i__18961_18985 < count__18960_18984)){
var protocol_18986 = cljs.core._nth.call(null,chunk__18959_18983,i__18961_18985);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18986)),"}");


var G__18987 = seq__18958_18982;
var G__18988 = chunk__18959_18983;
var G__18989 = count__18960_18984;
var G__18990 = (i__18961_18985 + (1));
seq__18958_18982 = G__18987;
chunk__18959_18983 = G__18988;
count__18960_18984 = G__18989;
i__18961_18985 = G__18990;
continue;
} else {
var temp__5823__auto___18991 = cljs.core.seq.call(null,seq__18958_18982);
if(temp__5823__auto___18991){
var seq__18958_18992__$1 = temp__5823__auto___18991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18958_18992__$1)){
var c__5525__auto___18993 = cljs.core.chunk_first.call(null,seq__18958_18992__$1);
var G__18994 = cljs.core.chunk_rest.call(null,seq__18958_18992__$1);
var G__18995 = c__5525__auto___18993;
var G__18996 = cljs.core.count.call(null,c__5525__auto___18993);
var G__18997 = (0);
seq__18958_18982 = G__18994;
chunk__18959_18983 = G__18995;
count__18960_18984 = G__18996;
i__18961_18985 = G__18997;
continue;
} else {
var protocol_18998 = cljs.core.first.call(null,seq__18958_18992__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18998)),"}");


var G__18999 = cljs.core.next.call(null,seq__18958_18992__$1);
var G__19000 = null;
var G__19001 = (0);
var G__19002 = (0);
seq__18958_18982 = G__18999;
chunk__18959_18983 = G__19000;
count__18960_18984 = G__19001;
i__18961_18985 = G__19002;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__18962_19003 = cljs.core.seq.call(null,fields__$1);
var chunk__18963_19004 = null;
var count__18964_19005 = (0);
var i__18965_19006 = (0);
while(true){
if((i__18965_19006 < count__18964_19005)){
var fld_19007 = cljs.core._nth.call(null,chunk__18963_19004,i__18965_19006);
cljs.compiler.emitln.call(null,"this.",fld_19007," = ",fld_19007,";");


var G__19008 = seq__18962_19003;
var G__19009 = chunk__18963_19004;
var G__19010 = count__18964_19005;
var G__19011 = (i__18965_19006 + (1));
seq__18962_19003 = G__19008;
chunk__18963_19004 = G__19009;
count__18964_19005 = G__19010;
i__18965_19006 = G__19011;
continue;
} else {
var temp__5823__auto___19012 = cljs.core.seq.call(null,seq__18962_19003);
if(temp__5823__auto___19012){
var seq__18962_19013__$1 = temp__5823__auto___19012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18962_19013__$1)){
var c__5525__auto___19014 = cljs.core.chunk_first.call(null,seq__18962_19013__$1);
var G__19015 = cljs.core.chunk_rest.call(null,seq__18962_19013__$1);
var G__19016 = c__5525__auto___19014;
var G__19017 = cljs.core.count.call(null,c__5525__auto___19014);
var G__19018 = (0);
seq__18962_19003 = G__19015;
chunk__18963_19004 = G__19016;
count__18964_19005 = G__19017;
i__18965_19006 = G__19018;
continue;
} else {
var fld_19019 = cljs.core.first.call(null,seq__18962_19013__$1);
cljs.compiler.emitln.call(null,"this.",fld_19019," = ",fld_19019,";");


var G__19020 = cljs.core.next.call(null,seq__18962_19013__$1);
var G__19021 = null;
var G__19022 = (0);
var G__19023 = (0);
seq__18962_19003 = G__19020;
chunk__18963_19004 = G__19021;
count__18964_19005 = G__19022;
i__18965_19006 = G__19023;
continue;
}
} else {
}
}
break;
}

var seq__18966_19024 = cljs.core.seq.call(null,pmasks);
var chunk__18967_19025 = null;
var count__18968_19026 = (0);
var i__18969_19027 = (0);
while(true){
if((i__18969_19027 < count__18968_19026)){
var vec__18976_19028 = cljs.core._nth.call(null,chunk__18967_19025,i__18969_19027);
var pno_19029 = cljs.core.nth.call(null,vec__18976_19028,(0),null);
var pmask_19030 = cljs.core.nth.call(null,vec__18976_19028,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19029,"$ = ",pmask_19030,";");


var G__19031 = seq__18966_19024;
var G__19032 = chunk__18967_19025;
var G__19033 = count__18968_19026;
var G__19034 = (i__18969_19027 + (1));
seq__18966_19024 = G__19031;
chunk__18967_19025 = G__19032;
count__18968_19026 = G__19033;
i__18969_19027 = G__19034;
continue;
} else {
var temp__5823__auto___19035 = cljs.core.seq.call(null,seq__18966_19024);
if(temp__5823__auto___19035){
var seq__18966_19036__$1 = temp__5823__auto___19035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18966_19036__$1)){
var c__5525__auto___19037 = cljs.core.chunk_first.call(null,seq__18966_19036__$1);
var G__19038 = cljs.core.chunk_rest.call(null,seq__18966_19036__$1);
var G__19039 = c__5525__auto___19037;
var G__19040 = cljs.core.count.call(null,c__5525__auto___19037);
var G__19041 = (0);
seq__18966_19024 = G__19038;
chunk__18967_19025 = G__19039;
count__18968_19026 = G__19040;
i__18969_19027 = G__19041;
continue;
} else {
var vec__18979_19042 = cljs.core.first.call(null,seq__18966_19036__$1);
var pno_19043 = cljs.core.nth.call(null,vec__18979_19042,(0),null);
var pmask_19044 = cljs.core.nth.call(null,vec__18979_19042,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19043,"$ = ",pmask_19044,";");


var G__19045 = cljs.core.next.call(null,seq__18966_19036__$1);
var G__19046 = null;
var G__19047 = (0);
var G__19048 = (0);
seq__18966_19024 = G__19045;
chunk__18967_19025 = G__19046;
count__18968_19026 = G__19047;
i__18969_19027 = G__19048;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__19049){
var map__19050 = p__19049;
var map__19050__$1 = cljs.core.__destructure_map.call(null,map__19050);
var t = cljs.core.get.call(null,map__19050__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__19050__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__19050__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__19050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__19050__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__19051_19075 = cljs.core.seq.call(null,protocols);
var chunk__19052_19076 = null;
var count__19053_19077 = (0);
var i__19054_19078 = (0);
while(true){
if((i__19054_19078 < count__19053_19077)){
var protocol_19079 = cljs.core._nth.call(null,chunk__19052_19076,i__19054_19078);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19079)),"}");


var G__19080 = seq__19051_19075;
var G__19081 = chunk__19052_19076;
var G__19082 = count__19053_19077;
var G__19083 = (i__19054_19078 + (1));
seq__19051_19075 = G__19080;
chunk__19052_19076 = G__19081;
count__19053_19077 = G__19082;
i__19054_19078 = G__19083;
continue;
} else {
var temp__5823__auto___19084 = cljs.core.seq.call(null,seq__19051_19075);
if(temp__5823__auto___19084){
var seq__19051_19085__$1 = temp__5823__auto___19084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19051_19085__$1)){
var c__5525__auto___19086 = cljs.core.chunk_first.call(null,seq__19051_19085__$1);
var G__19087 = cljs.core.chunk_rest.call(null,seq__19051_19085__$1);
var G__19088 = c__5525__auto___19086;
var G__19089 = cljs.core.count.call(null,c__5525__auto___19086);
var G__19090 = (0);
seq__19051_19075 = G__19087;
chunk__19052_19076 = G__19088;
count__19053_19077 = G__19089;
i__19054_19078 = G__19090;
continue;
} else {
var protocol_19091 = cljs.core.first.call(null,seq__19051_19085__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19091)),"}");


var G__19092 = cljs.core.next.call(null,seq__19051_19085__$1);
var G__19093 = null;
var G__19094 = (0);
var G__19095 = (0);
seq__19051_19075 = G__19092;
chunk__19052_19076 = G__19093;
count__19053_19077 = G__19094;
i__19054_19078 = G__19095;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__19055_19096 = cljs.core.seq.call(null,fields__$1);
var chunk__19056_19097 = null;
var count__19057_19098 = (0);
var i__19058_19099 = (0);
while(true){
if((i__19058_19099 < count__19057_19098)){
var fld_19100 = cljs.core._nth.call(null,chunk__19056_19097,i__19058_19099);
cljs.compiler.emitln.call(null,"this.",fld_19100," = ",fld_19100,";");


var G__19101 = seq__19055_19096;
var G__19102 = chunk__19056_19097;
var G__19103 = count__19057_19098;
var G__19104 = (i__19058_19099 + (1));
seq__19055_19096 = G__19101;
chunk__19056_19097 = G__19102;
count__19057_19098 = G__19103;
i__19058_19099 = G__19104;
continue;
} else {
var temp__5823__auto___19105 = cljs.core.seq.call(null,seq__19055_19096);
if(temp__5823__auto___19105){
var seq__19055_19106__$1 = temp__5823__auto___19105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19055_19106__$1)){
var c__5525__auto___19107 = cljs.core.chunk_first.call(null,seq__19055_19106__$1);
var G__19108 = cljs.core.chunk_rest.call(null,seq__19055_19106__$1);
var G__19109 = c__5525__auto___19107;
var G__19110 = cljs.core.count.call(null,c__5525__auto___19107);
var G__19111 = (0);
seq__19055_19096 = G__19108;
chunk__19056_19097 = G__19109;
count__19057_19098 = G__19110;
i__19058_19099 = G__19111;
continue;
} else {
var fld_19112 = cljs.core.first.call(null,seq__19055_19106__$1);
cljs.compiler.emitln.call(null,"this.",fld_19112," = ",fld_19112,";");


var G__19113 = cljs.core.next.call(null,seq__19055_19106__$1);
var G__19114 = null;
var G__19115 = (0);
var G__19116 = (0);
seq__19055_19096 = G__19113;
chunk__19056_19097 = G__19114;
count__19057_19098 = G__19115;
i__19058_19099 = G__19116;
continue;
}
} else {
}
}
break;
}

var seq__19059_19117 = cljs.core.seq.call(null,pmasks);
var chunk__19060_19118 = null;
var count__19061_19119 = (0);
var i__19062_19120 = (0);
while(true){
if((i__19062_19120 < count__19061_19119)){
var vec__19069_19121 = cljs.core._nth.call(null,chunk__19060_19118,i__19062_19120);
var pno_19122 = cljs.core.nth.call(null,vec__19069_19121,(0),null);
var pmask_19123 = cljs.core.nth.call(null,vec__19069_19121,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19122,"$ = ",pmask_19123,";");


var G__19124 = seq__19059_19117;
var G__19125 = chunk__19060_19118;
var G__19126 = count__19061_19119;
var G__19127 = (i__19062_19120 + (1));
seq__19059_19117 = G__19124;
chunk__19060_19118 = G__19125;
count__19061_19119 = G__19126;
i__19062_19120 = G__19127;
continue;
} else {
var temp__5823__auto___19128 = cljs.core.seq.call(null,seq__19059_19117);
if(temp__5823__auto___19128){
var seq__19059_19129__$1 = temp__5823__auto___19128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19059_19129__$1)){
var c__5525__auto___19130 = cljs.core.chunk_first.call(null,seq__19059_19129__$1);
var G__19131 = cljs.core.chunk_rest.call(null,seq__19059_19129__$1);
var G__19132 = c__5525__auto___19130;
var G__19133 = cljs.core.count.call(null,c__5525__auto___19130);
var G__19134 = (0);
seq__19059_19117 = G__19131;
chunk__19060_19118 = G__19132;
count__19061_19119 = G__19133;
i__19062_19120 = G__19134;
continue;
} else {
var vec__19072_19135 = cljs.core.first.call(null,seq__19059_19129__$1);
var pno_19136 = cljs.core.nth.call(null,vec__19072_19135,(0),null);
var pmask_19137 = cljs.core.nth.call(null,vec__19072_19135,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19136,"$ = ",pmask_19137,";");


var G__19138 = cljs.core.next.call(null,seq__19059_19129__$1);
var G__19139 = null;
var G__19140 = (0);
var G__19141 = (0);
seq__19059_19117 = G__19138;
chunk__19060_19118 = G__19139;
count__19061_19119 = G__19140;
i__19062_19120 = G__19141;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__19142){
var map__19143 = p__19142;
var map__19143__$1 = cljs.core.__destructure_map.call(null,map__19143);
var target = cljs.core.get.call(null,map__19143__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__19143__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__19143__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__19143__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__19144){
var map__19145 = p__19144;
var map__19145__$1 = cljs.core.__destructure_map.call(null,map__19145);
var op = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__19145__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5000__auto__ = code;
if(cljs.core.truth_(and__5000__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__5000__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__19150 = cljs.core.seq.call(null,table);
var chunk__19151 = null;
var count__19152 = (0);
var i__19153 = (0);
while(true){
if((i__19153 < count__19152)){
var vec__19160 = cljs.core._nth.call(null,chunk__19151,i__19153);
var sym = cljs.core.nth.call(null,vec__19160,(0),null);
var value = cljs.core.nth.call(null,vec__19160,(1),null);
var ns_19166 = cljs.core.namespace.call(null,sym);
var name_19167 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__19168 = seq__19150;
var G__19169 = chunk__19151;
var G__19170 = count__19152;
var G__19171 = (i__19153 + (1));
seq__19150 = G__19168;
chunk__19151 = G__19169;
count__19152 = G__19170;
i__19153 = G__19171;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__19150);
if(temp__5823__auto__){
var seq__19150__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19150__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19150__$1);
var G__19172 = cljs.core.chunk_rest.call(null,seq__19150__$1);
var G__19173 = c__5525__auto__;
var G__19174 = cljs.core.count.call(null,c__5525__auto__);
var G__19175 = (0);
seq__19150 = G__19172;
chunk__19151 = G__19173;
count__19152 = G__19174;
i__19153 = G__19175;
continue;
} else {
var vec__19163 = cljs.core.first.call(null,seq__19150__$1);
var sym = cljs.core.nth.call(null,vec__19163,(0),null);
var value = cljs.core.nth.call(null,vec__19163,(1),null);
var ns_19176 = cljs.core.namespace.call(null,sym);
var name_19177 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__19178 = cljs.core.next.call(null,seq__19150__$1);
var G__19179 = null;
var G__19180 = (0);
var G__19181 = (0);
seq__19150 = G__19178;
chunk__19151 = G__19179;
count__19152 = G__19180;
i__19153 = G__19181;
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
var G__19183 = arguments.length;
switch (G__19183) {
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

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_19188 = cljs.core.first.call(null,ks);
var vec__19184_19189 = cljs.core.conj.call(null,prefix,k_19188);
var top_19190 = cljs.core.nth.call(null,vec__19184_19189,(0),null);
var prefix_SINGLEQUOTE__19191 = vec__19184_19189;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19188)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__19191) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_19190)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_19190)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19191)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_19190);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19191)),";");
}
} else {
}

var m_19192 = cljs.core.get.call(null,externs,k_19188);
if(cljs.core.empty_QMARK_.call(null,m_19192)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__19191,m_19192,top_level,known_externs);
}

var G__19193 = cljs.core.next.call(null,ks);
ks = G__19193;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
