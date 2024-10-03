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
var map__17860 = s;
var map__17860__$1 = cljs.core.__destructure_map.call(null,map__17860);
var name = cljs.core.get.call(null,map__17860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17860__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__17862 = info;
var map__17863 = G__17862;
var map__17863__$1 = cljs.core.__destructure_map.call(null,map__17863);
var shadow = cljs.core.get.call(null,map__17863__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__17862__$1 = G__17862;
while(true){
var d__$2 = d__$1;
var map__17865 = G__17862__$1;
var map__17865__$1 = cljs.core.__destructure_map.call(null,map__17865);
var shadow__$1 = cljs.core.get.call(null,map__17865__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17866 = (d__$2 + (1));
var G__17867 = shadow__$1;
d__$1 = G__17866;
G__17862__$1 = G__17867;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__17868){
var map__17869 = p__17868;
var map__17869__$1 = cljs.core.__destructure_map.call(null,map__17869);
var name_var = map__17869__$1;
var name = cljs.core.get.call(null,map__17869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__17869__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__17870 = info;
var map__17870__$1 = cljs.core.__destructure_map.call(null,map__17870);
var ns = cljs.core.get.call(null,map__17870__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__17870__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__17872 = arguments.length;
switch (G__17872) {
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
var G__17874 = cp;
switch (G__17874) {
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
var seq__17876_17880 = cljs.core.seq.call(null,s);
var chunk__17877_17881 = null;
var count__17878_17882 = (0);
var i__17879_17883 = (0);
while(true){
if((i__17879_17883 < count__17878_17882)){
var c_17884 = cljs.core._nth.call(null,chunk__17877_17881,i__17879_17883);
sb.append(cljs.compiler.escape_char.call(null,c_17884));


var G__17885 = seq__17876_17880;
var G__17886 = chunk__17877_17881;
var G__17887 = count__17878_17882;
var G__17888 = (i__17879_17883 + (1));
seq__17876_17880 = G__17885;
chunk__17877_17881 = G__17886;
count__17878_17882 = G__17887;
i__17879_17883 = G__17888;
continue;
} else {
var temp__5823__auto___17889 = cljs.core.seq.call(null,seq__17876_17880);
if(temp__5823__auto___17889){
var seq__17876_17890__$1 = temp__5823__auto___17889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17876_17890__$1)){
var c__5525__auto___17891 = cljs.core.chunk_first.call(null,seq__17876_17890__$1);
var G__17892 = cljs.core.chunk_rest.call(null,seq__17876_17890__$1);
var G__17893 = c__5525__auto___17891;
var G__17894 = cljs.core.count.call(null,c__5525__auto___17891);
var G__17895 = (0);
seq__17876_17880 = G__17892;
chunk__17877_17881 = G__17893;
count__17878_17882 = G__17894;
i__17879_17883 = G__17895;
continue;
} else {
var c_17896 = cljs.core.first.call(null,seq__17876_17890__$1);
sb.append(cljs.compiler.escape_char.call(null,c_17896));


var G__17897 = cljs.core.next.call(null,seq__17876_17890__$1);
var G__17898 = null;
var G__17899 = (0);
var G__17900 = (0);
seq__17876_17880 = G__17897;
chunk__17877_17881 = G__17898;
count__17878_17882 = G__17899;
i__17879_17883 = G__17900;
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
var map__17901_17904 = ast;
var map__17901_17905__$1 = cljs.core.__destructure_map.call(null,map__17901_17904);
var env_17906 = cljs.core.get.call(null,map__17901_17905__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17906))){
var map__17902_17907 = env_17906;
var map__17902_17908__$1 = cljs.core.__destructure_map.call(null,map__17902_17907);
var line_17909 = cljs.core.get.call(null,map__17902_17908__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17910 = cljs.core.get.call(null,map__17902_17908__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__17903 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__17903,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__17903;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17909 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17910)?(column_17910 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__17919 = arguments.length;
switch (G__17919) {
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
var len__5726__auto___17926 = arguments.length;
var i__5727__auto___17927 = (0);
while(true){
if((i__5727__auto___17927 < len__5726__auto___17926)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17927]));

var G__17928 = (i__5727__auto___17927 + (1));
i__5727__auto___17927 = G__17928;
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
var s_17929 = (function (){var G__17920 = a;
if((!(typeof a === 'string'))){
return G__17920.toString();
} else {
return G__17920;
}
})();
var temp__5827__auto___17930 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5827__auto___17930 == null)){
} else {
var sm_data_17931 = temp__5827__auto___17930;
cljs.core.swap_BANG_.call(null,sm_data_17931,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__17911_SHARP_){
return (p1__17911_SHARP_ + s_17929.length);
}));
}

cljs.core.print.call(null,s_17929);

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

var seq__17921 = cljs.core.seq.call(null,xs);
var chunk__17922 = null;
var count__17923 = (0);
var i__17924 = (0);
while(true){
if((i__17924 < count__17923)){
var x = cljs.core._nth.call(null,chunk__17922,i__17924);
cljs.compiler.emits.call(null,x);


var G__17932 = seq__17921;
var G__17933 = chunk__17922;
var G__17934 = count__17923;
var G__17935 = (i__17924 + (1));
seq__17921 = G__17932;
chunk__17922 = G__17933;
count__17923 = G__17934;
i__17924 = G__17935;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__17921);
if(temp__5823__auto__){
var seq__17921__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17921__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17921__$1);
var G__17936 = cljs.core.chunk_rest.call(null,seq__17921__$1);
var G__17937 = c__5525__auto__;
var G__17938 = cljs.core.count.call(null,c__5525__auto__);
var G__17939 = (0);
seq__17921 = G__17936;
chunk__17922 = G__17937;
count__17923 = G__17938;
i__17924 = G__17939;
continue;
} else {
var x = cljs.core.first.call(null,seq__17921__$1);
cljs.compiler.emits.call(null,x);


var G__17940 = cljs.core.next.call(null,seq__17921__$1);
var G__17941 = null;
var G__17942 = (0);
var G__17943 = (0);
seq__17921 = G__17940;
chunk__17922 = G__17941;
count__17923 = G__17942;
i__17924 = G__17943;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq17913){
var G__17914 = cljs.core.first.call(null,seq17913);
var seq17913__$1 = cljs.core.next.call(null,seq17913);
var G__17915 = cljs.core.first.call(null,seq17913__$1);
var seq17913__$2 = cljs.core.next.call(null,seq17913__$1);
var G__17916 = cljs.core.first.call(null,seq17913__$2);
var seq17913__$3 = cljs.core.next.call(null,seq17913__$2);
var G__17917 = cljs.core.first.call(null,seq17913__$3);
var seq17913__$4 = cljs.core.next.call(null,seq17913__$3);
var G__17918 = cljs.core.first.call(null,seq17913__$4);
var seq17913__$5 = cljs.core.next.call(null,seq17913__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17914,G__17915,G__17916,G__17917,G__17918,seq17913__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__17944){
var map__17945 = p__17944;
var map__17945__$1 = cljs.core.__destructure_map.call(null,map__17945);
var m = map__17945__$1;
var gen_line = cljs.core.get.call(null,map__17945__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__17953 = arguments.length;
switch (G__17953) {
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
var len__5726__auto___17959 = arguments.length;
var i__5727__auto___17960 = (0);
while(true){
if((i__5727__auto___17960 < len__5726__auto___17959)){
args_arr__5751__auto__.push((arguments[i__5727__auto___17960]));

var G__17961 = (i__5727__auto___17960 + (1));
i__5727__auto___17960 = G__17961;
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

var seq__17954_17962 = cljs.core.seq.call(null,xs);
var chunk__17955_17963 = null;
var count__17956_17964 = (0);
var i__17957_17965 = (0);
while(true){
if((i__17957_17965 < count__17956_17964)){
var x_17966 = cljs.core._nth.call(null,chunk__17955_17963,i__17957_17965);
cljs.compiler.emits.call(null,x_17966);


var G__17967 = seq__17954_17962;
var G__17968 = chunk__17955_17963;
var G__17969 = count__17956_17964;
var G__17970 = (i__17957_17965 + (1));
seq__17954_17962 = G__17967;
chunk__17955_17963 = G__17968;
count__17956_17964 = G__17969;
i__17957_17965 = G__17970;
continue;
} else {
var temp__5823__auto___17971 = cljs.core.seq.call(null,seq__17954_17962);
if(temp__5823__auto___17971){
var seq__17954_17972__$1 = temp__5823__auto___17971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17954_17972__$1)){
var c__5525__auto___17973 = cljs.core.chunk_first.call(null,seq__17954_17972__$1);
var G__17974 = cljs.core.chunk_rest.call(null,seq__17954_17972__$1);
var G__17975 = c__5525__auto___17973;
var G__17976 = cljs.core.count.call(null,c__5525__auto___17973);
var G__17977 = (0);
seq__17954_17962 = G__17974;
chunk__17955_17963 = G__17975;
count__17956_17964 = G__17976;
i__17957_17965 = G__17977;
continue;
} else {
var x_17978 = cljs.core.first.call(null,seq__17954_17972__$1);
cljs.compiler.emits.call(null,x_17978);


var G__17979 = cljs.core.next.call(null,seq__17954_17972__$1);
var G__17980 = null;
var G__17981 = (0);
var G__17982 = (0);
seq__17954_17962 = G__17979;
chunk__17955_17963 = G__17980;
count__17956_17964 = G__17981;
i__17957_17965 = G__17982;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq17947){
var G__17948 = cljs.core.first.call(null,seq17947);
var seq17947__$1 = cljs.core.next.call(null,seq17947);
var G__17949 = cljs.core.first.call(null,seq17947__$1);
var seq17947__$2 = cljs.core.next.call(null,seq17947__$1);
var G__17950 = cljs.core.first.call(null,seq17947__$2);
var seq17947__$3 = cljs.core.next.call(null,seq17947__$2);
var G__17951 = cljs.core.first.call(null,seq17947__$3);
var seq17947__$4 = cljs.core.next.call(null,seq17947__$3);
var G__17952 = cljs.core.first.call(null,seq17947__$4);
var seq17947__$5 = cljs.core.next.call(null,seq17947__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17948,G__17949,G__17950,G__17951,G__17952,seq17947__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17983_17987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17984_17988 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17985_17989 = true;
var _STAR_print_fn_STAR__temp_val__17986_17990 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17985_17989);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17986_17990);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17984_17988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17983_17987);
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
var vec__17991 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__17991,(0),null);
var name = cljs.core.nth.call(null,vec__17991,(1),null);
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
var vec__17994 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__17994,(0),null);
var flags = cljs.core.nth.call(null,vec__17994,(1),null);
var pattern = cljs.core.nth.call(null,vec__17994,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__17997_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__17997_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__17999){
var map__18000 = p__17999;
var map__18000__$1 = cljs.core.__destructure_map.call(null,map__18000);
var ast = map__18000__$1;
var info = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5821__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5821__auto__)){
var const_expr = temp__5821__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__18001 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__18001__$1 = cljs.core.__destructure_map.call(null,map__18001);
var cenv = map__18001__$1;
var options = cljs.core.get.call(null,map__18001__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__18002 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.call(null,G__18002,cljs.analyzer.es5_allowed);
} else {
return G__18002;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__18003 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__18003,reserved);
} else {
return G__18003;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__18004_18005 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__18004_18006__$1 = (((G__18004_18005 instanceof cljs.core.Keyword))?G__18004_18005.fqn:null);
switch (G__18004_18006__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__18008){
var map__18009 = p__18008;
var map__18009__$1 = cljs.core.__destructure_map.call(null,map__18009);
var arg = map__18009__$1;
var env = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__18010 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__18010__$1 = cljs.core.__destructure_map.call(null,map__18010);
var name = cljs.core.get.call(null,map__18010__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__18011){
var map__18012 = p__18011;
var map__18012__$1 = cljs.core.__destructure_map.call(null,map__18012);
var expr = cljs.core.get.call(null,map__18012__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__18012__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__18012__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__18013_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18013_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__18014){
var map__18015 = p__18014;
var map__18015__$1 = cljs.core.__destructure_map.call(null,map__18015);
var env = cljs.core.get.call(null,map__18015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__18015__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18015__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__18016){
var map__18017 = p__18016;
var map__18017__$1 = cljs.core.__destructure_map.call(null,map__18017);
var items = cljs.core.get.call(null,map__18017__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18017__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__18018_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__18018_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__18019){
var map__18020 = p__18019;
var map__18020__$1 = cljs.core.__destructure_map.call(null,map__18020);
var items = cljs.core.get.call(null,map__18020__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5823__auto___18043 = cljs.core.seq.call(null,items);
if(temp__5823__auto___18043){
var items_18044__$1 = temp__5823__auto___18043;
var vec__18021_18045 = items_18044__$1;
var seq__18022_18046 = cljs.core.seq.call(null,vec__18021_18045);
var first__18023_18047 = cljs.core.first.call(null,seq__18022_18046);
var seq__18022_18048__$1 = cljs.core.next.call(null,seq__18022_18046);
var vec__18024_18049 = first__18023_18047;
var k_18050 = cljs.core.nth.call(null,vec__18024_18049,(0),null);
var v_18051 = cljs.core.nth.call(null,vec__18024_18049,(1),null);
var r_18052 = seq__18022_18048__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_18050),"\": ",emit_js_object_val.call(null,v_18051));

var seq__18027_18053 = cljs.core.seq.call(null,r_18052);
var chunk__18028_18054 = null;
var count__18029_18055 = (0);
var i__18030_18056 = (0);
while(true){
if((i__18030_18056 < count__18029_18055)){
var vec__18037_18057 = cljs.core._nth.call(null,chunk__18028_18054,i__18030_18056);
var k_18058__$1 = cljs.core.nth.call(null,vec__18037_18057,(0),null);
var v_18059__$1 = cljs.core.nth.call(null,vec__18037_18057,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18058__$1),"\": ",emit_js_object_val.call(null,v_18059__$1));


var G__18060 = seq__18027_18053;
var G__18061 = chunk__18028_18054;
var G__18062 = count__18029_18055;
var G__18063 = (i__18030_18056 + (1));
seq__18027_18053 = G__18060;
chunk__18028_18054 = G__18061;
count__18029_18055 = G__18062;
i__18030_18056 = G__18063;
continue;
} else {
var temp__5823__auto___18064__$1 = cljs.core.seq.call(null,seq__18027_18053);
if(temp__5823__auto___18064__$1){
var seq__18027_18065__$1 = temp__5823__auto___18064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18027_18065__$1)){
var c__5525__auto___18066 = cljs.core.chunk_first.call(null,seq__18027_18065__$1);
var G__18067 = cljs.core.chunk_rest.call(null,seq__18027_18065__$1);
var G__18068 = c__5525__auto___18066;
var G__18069 = cljs.core.count.call(null,c__5525__auto___18066);
var G__18070 = (0);
seq__18027_18053 = G__18067;
chunk__18028_18054 = G__18068;
count__18029_18055 = G__18069;
i__18030_18056 = G__18070;
continue;
} else {
var vec__18040_18071 = cljs.core.first.call(null,seq__18027_18065__$1);
var k_18072__$1 = cljs.core.nth.call(null,vec__18040_18071,(0),null);
var v_18073__$1 = cljs.core.nth.call(null,vec__18040_18071,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_18072__$1),"\": ",emit_js_object_val.call(null,v_18073__$1));


var G__18074 = cljs.core.next.call(null,seq__18027_18065__$1);
var G__18075 = null;
var G__18076 = (0);
var G__18077 = (0);
seq__18027_18053 = G__18074;
chunk__18028_18054 = G__18075;
count__18029_18055 = G__18076;
i__18030_18056 = G__18077;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__18078){
var map__18079 = p__18078;
var map__18079__$1 = cljs.core.__destructure_map.call(null,map__18079);
var keys = cljs.core.get.call(null,map__18079__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__18079__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__18079__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__18080){
var map__18081 = p__18080;
var map__18081__$1 = cljs.core.__destructure_map.call(null,map__18081);
var items = cljs.core.get.call(null,map__18081__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__18081__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__18082){
var map__18083 = p__18082;
var map__18083__$1 = cljs.core.__destructure_map.call(null,map__18083);
var expr = cljs.core.get.call(null,map__18083__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__18084){
var map__18085 = p__18084;
var map__18085__$1 = cljs.core.__destructure_map.call(null,map__18085);
var form = cljs.core.get.call(null,map__18085__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__18085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__18086 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18086__$1 = cljs.core.__destructure_map.call(null,map__18086);
var op = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18086__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__18087 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__18087__$1 = cljs.core.__destructure_map.call(null,map__18087);
var op = cljs.core.get.call(null,map__18087__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__18087__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__18087__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__18088){
var map__18089 = p__18088;
var map__18089__$1 = cljs.core.__destructure_map.call(null,map__18089);
var test = cljs.core.get.call(null,map__18089__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__18089__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__18089__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__18089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__18089__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__18090){
var map__18091 = p__18090;
var map__18091__$1 = cljs.core.__destructure_map.call(null,map__18091);
var v = cljs.core.get.call(null,map__18091__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__18091__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__18091__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__18091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__18092_18120 = cljs.core.seq.call(null,nodes);
var chunk__18093_18121 = null;
var count__18094_18122 = (0);
var i__18095_18123 = (0);
while(true){
if((i__18095_18123 < count__18094_18122)){
var map__18108_18124 = cljs.core._nth.call(null,chunk__18093_18121,i__18095_18123);
var map__18108_18125__$1 = cljs.core.__destructure_map.call(null,map__18108_18124);
var ts_18126 = cljs.core.get.call(null,map__18108_18125__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18109_18127 = cljs.core.get.call(null,map__18108_18125__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18109_18128__$1 = cljs.core.__destructure_map.call(null,map__18109_18127);
var then_18129 = cljs.core.get.call(null,map__18109_18128__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18110_18130 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18126));
var chunk__18111_18131 = null;
var count__18112_18132 = (0);
var i__18113_18133 = (0);
while(true){
if((i__18113_18133 < count__18112_18132)){
var test_18134 = cljs.core._nth.call(null,chunk__18111_18131,i__18113_18133);
cljs.compiler.emitln.call(null,"case ",test_18134,":");


var G__18135 = seq__18110_18130;
var G__18136 = chunk__18111_18131;
var G__18137 = count__18112_18132;
var G__18138 = (i__18113_18133 + (1));
seq__18110_18130 = G__18135;
chunk__18111_18131 = G__18136;
count__18112_18132 = G__18137;
i__18113_18133 = G__18138;
continue;
} else {
var temp__5823__auto___18139 = cljs.core.seq.call(null,seq__18110_18130);
if(temp__5823__auto___18139){
var seq__18110_18140__$1 = temp__5823__auto___18139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18110_18140__$1)){
var c__5525__auto___18141 = cljs.core.chunk_first.call(null,seq__18110_18140__$1);
var G__18142 = cljs.core.chunk_rest.call(null,seq__18110_18140__$1);
var G__18143 = c__5525__auto___18141;
var G__18144 = cljs.core.count.call(null,c__5525__auto___18141);
var G__18145 = (0);
seq__18110_18130 = G__18142;
chunk__18111_18131 = G__18143;
count__18112_18132 = G__18144;
i__18113_18133 = G__18145;
continue;
} else {
var test_18146 = cljs.core.first.call(null,seq__18110_18140__$1);
cljs.compiler.emitln.call(null,"case ",test_18146,":");


var G__18147 = cljs.core.next.call(null,seq__18110_18140__$1);
var G__18148 = null;
var G__18149 = (0);
var G__18150 = (0);
seq__18110_18130 = G__18147;
chunk__18111_18131 = G__18148;
count__18112_18132 = G__18149;
i__18113_18133 = G__18150;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18129);
} else {
cljs.compiler.emitln.call(null,then_18129);
}

cljs.compiler.emitln.call(null,"break;");


var G__18151 = seq__18092_18120;
var G__18152 = chunk__18093_18121;
var G__18153 = count__18094_18122;
var G__18154 = (i__18095_18123 + (1));
seq__18092_18120 = G__18151;
chunk__18093_18121 = G__18152;
count__18094_18122 = G__18153;
i__18095_18123 = G__18154;
continue;
} else {
var temp__5823__auto___18155 = cljs.core.seq.call(null,seq__18092_18120);
if(temp__5823__auto___18155){
var seq__18092_18156__$1 = temp__5823__auto___18155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18092_18156__$1)){
var c__5525__auto___18157 = cljs.core.chunk_first.call(null,seq__18092_18156__$1);
var G__18158 = cljs.core.chunk_rest.call(null,seq__18092_18156__$1);
var G__18159 = c__5525__auto___18157;
var G__18160 = cljs.core.count.call(null,c__5525__auto___18157);
var G__18161 = (0);
seq__18092_18120 = G__18158;
chunk__18093_18121 = G__18159;
count__18094_18122 = G__18160;
i__18095_18123 = G__18161;
continue;
} else {
var map__18114_18162 = cljs.core.first.call(null,seq__18092_18156__$1);
var map__18114_18163__$1 = cljs.core.__destructure_map.call(null,map__18114_18162);
var ts_18164 = cljs.core.get.call(null,map__18114_18163__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__18115_18165 = cljs.core.get.call(null,map__18114_18163__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__18115_18166__$1 = cljs.core.__destructure_map.call(null,map__18115_18165);
var then_18167 = cljs.core.get.call(null,map__18115_18166__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__18116_18168 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_18164));
var chunk__18117_18169 = null;
var count__18118_18170 = (0);
var i__18119_18171 = (0);
while(true){
if((i__18119_18171 < count__18118_18170)){
var test_18172 = cljs.core._nth.call(null,chunk__18117_18169,i__18119_18171);
cljs.compiler.emitln.call(null,"case ",test_18172,":");


var G__18173 = seq__18116_18168;
var G__18174 = chunk__18117_18169;
var G__18175 = count__18118_18170;
var G__18176 = (i__18119_18171 + (1));
seq__18116_18168 = G__18173;
chunk__18117_18169 = G__18174;
count__18118_18170 = G__18175;
i__18119_18171 = G__18176;
continue;
} else {
var temp__5823__auto___18177__$1 = cljs.core.seq.call(null,seq__18116_18168);
if(temp__5823__auto___18177__$1){
var seq__18116_18178__$1 = temp__5823__auto___18177__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18116_18178__$1)){
var c__5525__auto___18179 = cljs.core.chunk_first.call(null,seq__18116_18178__$1);
var G__18180 = cljs.core.chunk_rest.call(null,seq__18116_18178__$1);
var G__18181 = c__5525__auto___18179;
var G__18182 = cljs.core.count.call(null,c__5525__auto___18179);
var G__18183 = (0);
seq__18116_18168 = G__18180;
chunk__18117_18169 = G__18181;
count__18118_18170 = G__18182;
i__18119_18171 = G__18183;
continue;
} else {
var test_18184 = cljs.core.first.call(null,seq__18116_18178__$1);
cljs.compiler.emitln.call(null,"case ",test_18184,":");


var G__18185 = cljs.core.next.call(null,seq__18116_18178__$1);
var G__18186 = null;
var G__18187 = (0);
var G__18188 = (0);
seq__18116_18168 = G__18185;
chunk__18117_18169 = G__18186;
count__18118_18170 = G__18187;
i__18119_18171 = G__18188;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_18167);
} else {
cljs.compiler.emitln.call(null,then_18167);
}

cljs.compiler.emitln.call(null,"break;");


var G__18189 = cljs.core.next.call(null,seq__18092_18156__$1);
var G__18190 = null;
var G__18191 = (0);
var G__18192 = (0);
seq__18092_18120 = G__18189;
chunk__18093_18121 = G__18190;
count__18094_18122 = G__18191;
i__18095_18123 = G__18192;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__18193){
var map__18194 = p__18193;
var map__18194__$1 = cljs.core.__destructure_map.call(null,map__18194);
var throw$ = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__18196 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__18196,(0),null);
var rstr = cljs.core.nth.call(null,vec__18196,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__18195_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18195_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__18199 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__18199,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__18199;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__18200_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__18200_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__18201 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18202 = cljs.core.seq.call(null,vec__18201);
var first__18203 = cljs.core.first.call(null,seq__18202);
var seq__18202__$1 = cljs.core.next.call(null,seq__18202);
var p = first__18203;
var first__18203__$1 = cljs.core.first.call(null,seq__18202__$1);
var seq__18202__$2 = cljs.core.next.call(null,seq__18202__$1);
var ts = first__18203__$1;
var first__18203__$2 = cljs.core.first.call(null,seq__18202__$2);
var seq__18202__$3 = cljs.core.next.call(null,seq__18202__$2);
var n = first__18203__$2;
var xs = seq__18202__$3;
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
var vec__18204 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__18205 = cljs.core.seq.call(null,vec__18204);
var first__18206 = cljs.core.first.call(null,seq__18205);
var seq__18205__$1 = cljs.core.next.call(null,seq__18205);
var p = first__18206;
var first__18206__$1 = cljs.core.first.call(null,seq__18205__$1);
var seq__18205__$2 = cljs.core.next.call(null,seq__18205__$1);
var ts = first__18206__$1;
var xs = seq__18205__$2;
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
var G__18209 = arguments.length;
switch (G__18209) {
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
var vec__18217 = cljs.core.map.call(null,(function (p1__18207_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__18207_SHARP_);
} else {
return p1__18207_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__18218 = cljs.core.seq.call(null,vec__18217);
var first__18219 = cljs.core.first.call(null,seq__18218);
var seq__18218__$1 = cljs.core.next.call(null,seq__18218);
var x = first__18219;
var ys = seq__18218__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__18220 = cljs.core.seq.call(null,ys);
var chunk__18221 = null;
var count__18222 = (0);
var i__18223 = (0);
while(true){
if((i__18223 < count__18222)){
var next_line = cljs.core._nth.call(null,chunk__18221,i__18223);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18229 = seq__18220;
var G__18230 = chunk__18221;
var G__18231 = count__18222;
var G__18232 = (i__18223 + (1));
seq__18220 = G__18229;
chunk__18221 = G__18230;
count__18222 = G__18231;
i__18223 = G__18232;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18220);
if(temp__5823__auto__){
var seq__18220__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18220__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18220__$1);
var G__18233 = cljs.core.chunk_rest.call(null,seq__18220__$1);
var G__18234 = c__5525__auto__;
var G__18235 = cljs.core.count.call(null,c__5525__auto__);
var G__18236 = (0);
seq__18220 = G__18233;
chunk__18221 = G__18234;
count__18222 = G__18235;
i__18223 = G__18236;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__18220__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__18237 = cljs.core.next.call(null,seq__18220__$1);
var G__18238 = null;
var G__18239 = (0);
var G__18240 = (0);
seq__18220 = G__18237;
chunk__18221 = G__18238;
count__18222 = G__18239;
i__18223 = G__18240;
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

var seq__18224_18241 = cljs.core.seq.call(null,docs__$2);
var chunk__18225_18242 = null;
var count__18226_18243 = (0);
var i__18227_18244 = (0);
while(true){
if((i__18227_18244 < count__18226_18243)){
var e_18245 = cljs.core._nth.call(null,chunk__18225_18242,i__18227_18244);
if(cljs.core.truth_(e_18245)){
print_comment_lines.call(null,e_18245);
} else {
}


var G__18246 = seq__18224_18241;
var G__18247 = chunk__18225_18242;
var G__18248 = count__18226_18243;
var G__18249 = (i__18227_18244 + (1));
seq__18224_18241 = G__18246;
chunk__18225_18242 = G__18247;
count__18226_18243 = G__18248;
i__18227_18244 = G__18249;
continue;
} else {
var temp__5823__auto___18250 = cljs.core.seq.call(null,seq__18224_18241);
if(temp__5823__auto___18250){
var seq__18224_18251__$1 = temp__5823__auto___18250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18224_18251__$1)){
var c__5525__auto___18252 = cljs.core.chunk_first.call(null,seq__18224_18251__$1);
var G__18253 = cljs.core.chunk_rest.call(null,seq__18224_18251__$1);
var G__18254 = c__5525__auto___18252;
var G__18255 = cljs.core.count.call(null,c__5525__auto___18252);
var G__18256 = (0);
seq__18224_18241 = G__18253;
chunk__18225_18242 = G__18254;
count__18226_18243 = G__18255;
i__18227_18244 = G__18256;
continue;
} else {
var e_18257 = cljs.core.first.call(null,seq__18224_18251__$1);
if(cljs.core.truth_(e_18257)){
print_comment_lines.call(null,e_18257);
} else {
}


var G__18258 = cljs.core.next.call(null,seq__18224_18251__$1);
var G__18259 = null;
var G__18260 = (0);
var G__18261 = (0);
seq__18224_18241 = G__18258;
chunk__18225_18242 = G__18259;
count__18226_18243 = G__18260;
i__18227_18244 = G__18261;
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
var and__5000__auto__ = cljs.core.some.call(null,(function (p1__18263_SHARP_){
return goog.string.startsWith(p1__18263_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__18264){
var map__18265 = p__18264;
var map__18265__$1 = cljs.core.__destructure_map.call(null,map__18265);
var doc = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__18265__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__18266){
var map__18267 = p__18266;
var map__18267__$1 = cljs.core.__destructure_map.call(null,map__18267);
var name = cljs.core.get.call(null,map__18267__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18267__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18267__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__18268_18292 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__18269_18293 = null;
var count__18270_18294 = (0);
var i__18271_18295 = (0);
while(true){
if((i__18271_18295 < count__18270_18294)){
var vec__18278_18296 = cljs.core._nth.call(null,chunk__18269_18293,i__18271_18295);
var i_18297 = cljs.core.nth.call(null,vec__18278_18296,(0),null);
var param_18298 = cljs.core.nth.call(null,vec__18278_18296,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18298);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18299 = seq__18268_18292;
var G__18300 = chunk__18269_18293;
var G__18301 = count__18270_18294;
var G__18302 = (i__18271_18295 + (1));
seq__18268_18292 = G__18299;
chunk__18269_18293 = G__18300;
count__18270_18294 = G__18301;
i__18271_18295 = G__18302;
continue;
} else {
var temp__5823__auto___18303 = cljs.core.seq.call(null,seq__18268_18292);
if(temp__5823__auto___18303){
var seq__18268_18304__$1 = temp__5823__auto___18303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18268_18304__$1)){
var c__5525__auto___18305 = cljs.core.chunk_first.call(null,seq__18268_18304__$1);
var G__18306 = cljs.core.chunk_rest.call(null,seq__18268_18304__$1);
var G__18307 = c__5525__auto___18305;
var G__18308 = cljs.core.count.call(null,c__5525__auto___18305);
var G__18309 = (0);
seq__18268_18292 = G__18306;
chunk__18269_18293 = G__18307;
count__18270_18294 = G__18308;
i__18271_18295 = G__18309;
continue;
} else {
var vec__18281_18310 = cljs.core.first.call(null,seq__18268_18304__$1);
var i_18311 = cljs.core.nth.call(null,vec__18281_18310,(0),null);
var param_18312 = cljs.core.nth.call(null,vec__18281_18310,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_18312);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__18313 = cljs.core.next.call(null,seq__18268_18304__$1);
var G__18314 = null;
var G__18315 = (0);
var G__18316 = (0);
seq__18268_18292 = G__18313;
chunk__18269_18293 = G__18314;
count__18270_18294 = G__18315;
i__18271_18295 = G__18316;
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

var seq__18284_18317 = cljs.core.seq.call(null,params);
var chunk__18285_18318 = null;
var count__18286_18319 = (0);
var i__18287_18320 = (0);
while(true){
if((i__18287_18320 < count__18286_18319)){
var param_18321 = cljs.core._nth.call(null,chunk__18285_18318,i__18287_18320);
cljs.compiler.emit.call(null,param_18321);

if(cljs.core._EQ_.call(null,param_18321,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18322 = seq__18284_18317;
var G__18323 = chunk__18285_18318;
var G__18324 = count__18286_18319;
var G__18325 = (i__18287_18320 + (1));
seq__18284_18317 = G__18322;
chunk__18285_18318 = G__18323;
count__18286_18319 = G__18324;
i__18287_18320 = G__18325;
continue;
} else {
var temp__5823__auto___18326 = cljs.core.seq.call(null,seq__18284_18317);
if(temp__5823__auto___18326){
var seq__18284_18327__$1 = temp__5823__auto___18326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18284_18327__$1)){
var c__5525__auto___18328 = cljs.core.chunk_first.call(null,seq__18284_18327__$1);
var G__18329 = cljs.core.chunk_rest.call(null,seq__18284_18327__$1);
var G__18330 = c__5525__auto___18328;
var G__18331 = cljs.core.count.call(null,c__5525__auto___18328);
var G__18332 = (0);
seq__18284_18317 = G__18329;
chunk__18285_18318 = G__18330;
count__18286_18319 = G__18331;
i__18287_18320 = G__18332;
continue;
} else {
var param_18333 = cljs.core.first.call(null,seq__18284_18327__$1);
cljs.compiler.emit.call(null,param_18333);

if(cljs.core._EQ_.call(null,param_18333,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18334 = cljs.core.next.call(null,seq__18284_18327__$1);
var G__18335 = null;
var G__18336 = (0);
var G__18337 = (0);
seq__18284_18317 = G__18334;
chunk__18285_18318 = G__18335;
count__18286_18319 = G__18336;
i__18287_18320 = G__18337;
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

var seq__18288_18338 = cljs.core.seq.call(null,params);
var chunk__18289_18339 = null;
var count__18290_18340 = (0);
var i__18291_18341 = (0);
while(true){
if((i__18291_18341 < count__18290_18340)){
var param_18342 = cljs.core._nth.call(null,chunk__18289_18339,i__18291_18341);
cljs.compiler.emit.call(null,param_18342);

if(cljs.core._EQ_.call(null,param_18342,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18343 = seq__18288_18338;
var G__18344 = chunk__18289_18339;
var G__18345 = count__18290_18340;
var G__18346 = (i__18291_18341 + (1));
seq__18288_18338 = G__18343;
chunk__18289_18339 = G__18344;
count__18290_18340 = G__18345;
i__18291_18341 = G__18346;
continue;
} else {
var temp__5823__auto___18347 = cljs.core.seq.call(null,seq__18288_18338);
if(temp__5823__auto___18347){
var seq__18288_18348__$1 = temp__5823__auto___18347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18288_18348__$1)){
var c__5525__auto___18349 = cljs.core.chunk_first.call(null,seq__18288_18348__$1);
var G__18350 = cljs.core.chunk_rest.call(null,seq__18288_18348__$1);
var G__18351 = c__5525__auto___18349;
var G__18352 = cljs.core.count.call(null,c__5525__auto___18349);
var G__18353 = (0);
seq__18288_18338 = G__18350;
chunk__18289_18339 = G__18351;
count__18290_18340 = G__18352;
i__18291_18341 = G__18353;
continue;
} else {
var param_18354 = cljs.core.first.call(null,seq__18288_18348__$1);
cljs.compiler.emit.call(null,param_18354);

if(cljs.core._EQ_.call(null,param_18354,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18355 = cljs.core.next.call(null,seq__18288_18348__$1);
var G__18356 = null;
var G__18357 = (0);
var G__18358 = (0);
seq__18288_18338 = G__18355;
chunk__18289_18339 = G__18356;
count__18290_18340 = G__18357;
i__18291_18341 = G__18358;
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
var seq__18359 = cljs.core.seq.call(null,params);
var chunk__18360 = null;
var count__18361 = (0);
var i__18362 = (0);
while(true){
if((i__18362 < count__18361)){
var param = cljs.core._nth.call(null,chunk__18360,i__18362);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18363 = seq__18359;
var G__18364 = chunk__18360;
var G__18365 = count__18361;
var G__18366 = (i__18362 + (1));
seq__18359 = G__18363;
chunk__18360 = G__18364;
count__18361 = G__18365;
i__18362 = G__18366;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__18359);
if(temp__5823__auto__){
var seq__18359__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18359__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__18359__$1);
var G__18367 = cljs.core.chunk_rest.call(null,seq__18359__$1);
var G__18368 = c__5525__auto__;
var G__18369 = cljs.core.count.call(null,c__5525__auto__);
var G__18370 = (0);
seq__18359 = G__18367;
chunk__18360 = G__18368;
count__18361 = G__18369;
i__18362 = G__18370;
continue;
} else {
var param = cljs.core.first.call(null,seq__18359__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18371 = cljs.core.next.call(null,seq__18359__$1);
var G__18372 = null;
var G__18373 = (0);
var G__18374 = (0);
seq__18359 = G__18371;
chunk__18360 = G__18372;
count__18361 = G__18373;
i__18362 = G__18374;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__18375){
var map__18376 = p__18375;
var map__18376__$1 = cljs.core.__destructure_map.call(null,map__18376);
var expr = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__18376__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__18377){
var map__18378 = p__18377;
var map__18378__$1 = cljs.core.__destructure_map.call(null,map__18378);
var f = map__18378__$1;
var expr = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_18387__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_18388 = cljs.compiler.munge.call(null,name_18387__$1);
var delegate_name_18389 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18388),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_18389," = function (");

var seq__18379_18390 = cljs.core.seq.call(null,params);
var chunk__18380_18391 = null;
var count__18381_18392 = (0);
var i__18382_18393 = (0);
while(true){
if((i__18382_18393 < count__18381_18392)){
var param_18394 = cljs.core._nth.call(null,chunk__18380_18391,i__18382_18393);
cljs.compiler.emit.call(null,param_18394);

if(cljs.core._EQ_.call(null,param_18394,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18395 = seq__18379_18390;
var G__18396 = chunk__18380_18391;
var G__18397 = count__18381_18392;
var G__18398 = (i__18382_18393 + (1));
seq__18379_18390 = G__18395;
chunk__18380_18391 = G__18396;
count__18381_18392 = G__18397;
i__18382_18393 = G__18398;
continue;
} else {
var temp__5823__auto___18399 = cljs.core.seq.call(null,seq__18379_18390);
if(temp__5823__auto___18399){
var seq__18379_18400__$1 = temp__5823__auto___18399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18379_18400__$1)){
var c__5525__auto___18401 = cljs.core.chunk_first.call(null,seq__18379_18400__$1);
var G__18402 = cljs.core.chunk_rest.call(null,seq__18379_18400__$1);
var G__18403 = c__5525__auto___18401;
var G__18404 = cljs.core.count.call(null,c__5525__auto___18401);
var G__18405 = (0);
seq__18379_18390 = G__18402;
chunk__18380_18391 = G__18403;
count__18381_18392 = G__18404;
i__18382_18393 = G__18405;
continue;
} else {
var param_18406 = cljs.core.first.call(null,seq__18379_18400__$1);
cljs.compiler.emit.call(null,param_18406);

if(cljs.core._EQ_.call(null,param_18406,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18407 = cljs.core.next.call(null,seq__18379_18400__$1);
var G__18408 = null;
var G__18409 = (0);
var G__18410 = (0);
seq__18379_18390 = G__18407;
chunk__18380_18391 = G__18408;
count__18381_18392 = G__18409;
i__18382_18393 = G__18410;
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

cljs.compiler.emitln.call(null,"var ",mname_18388," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_18411 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_18411,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_18389,".call(this,");

var seq__18383_18412 = cljs.core.seq.call(null,params);
var chunk__18384_18413 = null;
var count__18385_18414 = (0);
var i__18386_18415 = (0);
while(true){
if((i__18386_18415 < count__18385_18414)){
var param_18416 = cljs.core._nth.call(null,chunk__18384_18413,i__18386_18415);
cljs.compiler.emit.call(null,param_18416);

if(cljs.core._EQ_.call(null,param_18416,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18417 = seq__18383_18412;
var G__18418 = chunk__18384_18413;
var G__18419 = count__18385_18414;
var G__18420 = (i__18386_18415 + (1));
seq__18383_18412 = G__18417;
chunk__18384_18413 = G__18418;
count__18385_18414 = G__18419;
i__18386_18415 = G__18420;
continue;
} else {
var temp__5823__auto___18421 = cljs.core.seq.call(null,seq__18383_18412);
if(temp__5823__auto___18421){
var seq__18383_18422__$1 = temp__5823__auto___18421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18383_18422__$1)){
var c__5525__auto___18423 = cljs.core.chunk_first.call(null,seq__18383_18422__$1);
var G__18424 = cljs.core.chunk_rest.call(null,seq__18383_18422__$1);
var G__18425 = c__5525__auto___18423;
var G__18426 = cljs.core.count.call(null,c__5525__auto___18423);
var G__18427 = (0);
seq__18383_18412 = G__18424;
chunk__18384_18413 = G__18425;
count__18385_18414 = G__18426;
i__18386_18415 = G__18427;
continue;
} else {
var param_18428 = cljs.core.first.call(null,seq__18383_18422__$1);
cljs.compiler.emit.call(null,param_18428);

if(cljs.core._EQ_.call(null,param_18428,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__18429 = cljs.core.next.call(null,seq__18383_18422__$1);
var G__18430 = null;
var G__18431 = (0);
var G__18432 = (0);
seq__18383_18412 = G__18429;
chunk__18384_18413 = G__18430;
count__18385_18414 = G__18431;
i__18386_18415 = G__18432;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_18388,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_18388,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_18387__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_18388,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18389,";");

cljs.compiler.emitln.call(null,"return ",mname_18388,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__18436){
var map__18437 = p__18436;
var map__18437__$1 = cljs.core.__destructure_map.call(null,map__18437);
var variadic = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__18437__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__18433_SHARP_){
var and__5000__auto__ = p1__18433_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__18433_SHARP_));
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
var name_18489__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_18490 = cljs.compiler.munge.call(null,name_18489__$1);
var maxparams_18491 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_18492 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18490),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_18493 = cljs.core.sort_by.call(null,(function (p1__18434_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__18434_SHARP_)));
}),cljs.core.seq.call(null,mmap_18492));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_18490," = null;");

var seq__18438_18494 = cljs.core.seq.call(null,ms_18493);
var chunk__18439_18495 = null;
var count__18440_18496 = (0);
var i__18441_18497 = (0);
while(true){
if((i__18441_18497 < count__18440_18496)){
var vec__18448_18498 = cljs.core._nth.call(null,chunk__18439_18495,i__18441_18497);
var n_18499 = cljs.core.nth.call(null,vec__18448_18498,(0),null);
var meth_18500 = cljs.core.nth.call(null,vec__18448_18498,(1),null);
cljs.compiler.emits.call(null,"var ",n_18499," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18500))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_18500);
} else {
cljs.compiler.emit_fn_method.call(null,meth_18500);
}

cljs.compiler.emitln.call(null,";");


var G__18501 = seq__18438_18494;
var G__18502 = chunk__18439_18495;
var G__18503 = count__18440_18496;
var G__18504 = (i__18441_18497 + (1));
seq__18438_18494 = G__18501;
chunk__18439_18495 = G__18502;
count__18440_18496 = G__18503;
i__18441_18497 = G__18504;
continue;
} else {
var temp__5823__auto___18505 = cljs.core.seq.call(null,seq__18438_18494);
if(temp__5823__auto___18505){
var seq__18438_18506__$1 = temp__5823__auto___18505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18438_18506__$1)){
var c__5525__auto___18507 = cljs.core.chunk_first.call(null,seq__18438_18506__$1);
var G__18508 = cljs.core.chunk_rest.call(null,seq__18438_18506__$1);
var G__18509 = c__5525__auto___18507;
var G__18510 = cljs.core.count.call(null,c__5525__auto___18507);
var G__18511 = (0);
seq__18438_18494 = G__18508;
chunk__18439_18495 = G__18509;
count__18440_18496 = G__18510;
i__18441_18497 = G__18511;
continue;
} else {
var vec__18451_18512 = cljs.core.first.call(null,seq__18438_18506__$1);
var n_18513 = cljs.core.nth.call(null,vec__18451_18512,(0),null);
var meth_18514 = cljs.core.nth.call(null,vec__18451_18512,(1),null);
cljs.compiler.emits.call(null,"var ",n_18513," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18514))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_18514);
} else {
cljs.compiler.emit_fn_method.call(null,meth_18514);
}

cljs.compiler.emitln.call(null,";");


var G__18515 = cljs.core.next.call(null,seq__18438_18506__$1);
var G__18516 = null;
var G__18517 = (0);
var G__18518 = (0);
seq__18438_18494 = G__18515;
chunk__18439_18495 = G__18516;
count__18440_18496 = G__18517;
i__18441_18497 = G__18518;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_18490," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_18491),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_18491)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_18491));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__18454_18519 = cljs.core.seq.call(null,ms_18493);
var chunk__18455_18520 = null;
var count__18456_18521 = (0);
var i__18457_18522 = (0);
while(true){
if((i__18457_18522 < count__18456_18521)){
var vec__18464_18523 = cljs.core._nth.call(null,chunk__18455_18520,i__18457_18522);
var n_18524 = cljs.core.nth.call(null,vec__18464_18523,(0),null);
var meth_18525 = cljs.core.nth.call(null,vec__18464_18523,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18525))){
cljs.compiler.emitln.call(null,"default:");

var restarg_18526 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_18526," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_18527 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_18526," = new cljs.core.IndexedSeq(",a_18527,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_18524,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_18491)),(((cljs.core.count.call(null,maxparams_18491) > (1)))?", ":null),restarg_18526,");");
} else {
var pcnt_18528 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18525));
cljs.compiler.emitln.call(null,"case ",pcnt_18528,":");

cljs.compiler.emitln.call(null,"return ",n_18524,".call(this",(((pcnt_18528 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_18528,maxparams_18491)),null,(1),null)),(2),null))),");");
}


var G__18529 = seq__18454_18519;
var G__18530 = chunk__18455_18520;
var G__18531 = count__18456_18521;
var G__18532 = (i__18457_18522 + (1));
seq__18454_18519 = G__18529;
chunk__18455_18520 = G__18530;
count__18456_18521 = G__18531;
i__18457_18522 = G__18532;
continue;
} else {
var temp__5823__auto___18533 = cljs.core.seq.call(null,seq__18454_18519);
if(temp__5823__auto___18533){
var seq__18454_18534__$1 = temp__5823__auto___18533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18454_18534__$1)){
var c__5525__auto___18535 = cljs.core.chunk_first.call(null,seq__18454_18534__$1);
var G__18536 = cljs.core.chunk_rest.call(null,seq__18454_18534__$1);
var G__18537 = c__5525__auto___18535;
var G__18538 = cljs.core.count.call(null,c__5525__auto___18535);
var G__18539 = (0);
seq__18454_18519 = G__18536;
chunk__18455_18520 = G__18537;
count__18456_18521 = G__18538;
i__18457_18522 = G__18539;
continue;
} else {
var vec__18467_18540 = cljs.core.first.call(null,seq__18454_18534__$1);
var n_18541 = cljs.core.nth.call(null,vec__18467_18540,(0),null);
var meth_18542 = cljs.core.nth.call(null,vec__18467_18540,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18542))){
cljs.compiler.emitln.call(null,"default:");

var restarg_18543 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_18543," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_18544 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_18543," = new cljs.core.IndexedSeq(",a_18544,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_18541,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_18491)),(((cljs.core.count.call(null,maxparams_18491) > (1)))?", ":null),restarg_18543,");");
} else {
var pcnt_18545 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18542));
cljs.compiler.emitln.call(null,"case ",pcnt_18545,":");

cljs.compiler.emitln.call(null,"return ",n_18541,".call(this",(((pcnt_18545 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_18545,maxparams_18491)),null,(1),null)),(2),null))),");");
}


var G__18546 = cljs.core.next.call(null,seq__18454_18534__$1);
var G__18547 = null;
var G__18548 = (0);
var G__18549 = (0);
seq__18454_18519 = G__18546;
chunk__18455_18520 = G__18547;
count__18456_18521 = G__18548;
i__18457_18522 = G__18549;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_18550 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_18493)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_18550,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_18490,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_18490,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__18435_SHARP_){
var vec__18470 = p1__18435_SHARP_;
var n = cljs.core.nth.call(null,vec__18470,(0),null);
var m = cljs.core.nth.call(null,vec__18470,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_18493),".cljs$lang$applyTo;");
} else {
}

var seq__18473_18551 = cljs.core.seq.call(null,ms_18493);
var chunk__18474_18552 = null;
var count__18475_18553 = (0);
var i__18476_18554 = (0);
while(true){
if((i__18476_18554 < count__18475_18553)){
var vec__18483_18555 = cljs.core._nth.call(null,chunk__18474_18552,i__18476_18554);
var n_18556 = cljs.core.nth.call(null,vec__18483_18555,(0),null);
var meth_18557 = cljs.core.nth.call(null,vec__18483_18555,(1),null);
var c_18558 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18557));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18557))){
cljs.compiler.emitln.call(null,mname_18490,".cljs$core$IFn$_invoke$arity$variadic = ",n_18556,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_18490,".cljs$core$IFn$_invoke$arity$",c_18558," = ",n_18556,";");
}


var G__18559 = seq__18473_18551;
var G__18560 = chunk__18474_18552;
var G__18561 = count__18475_18553;
var G__18562 = (i__18476_18554 + (1));
seq__18473_18551 = G__18559;
chunk__18474_18552 = G__18560;
count__18475_18553 = G__18561;
i__18476_18554 = G__18562;
continue;
} else {
var temp__5823__auto___18563 = cljs.core.seq.call(null,seq__18473_18551);
if(temp__5823__auto___18563){
var seq__18473_18564__$1 = temp__5823__auto___18563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18473_18564__$1)){
var c__5525__auto___18565 = cljs.core.chunk_first.call(null,seq__18473_18564__$1);
var G__18566 = cljs.core.chunk_rest.call(null,seq__18473_18564__$1);
var G__18567 = c__5525__auto___18565;
var G__18568 = cljs.core.count.call(null,c__5525__auto___18565);
var G__18569 = (0);
seq__18473_18551 = G__18566;
chunk__18474_18552 = G__18567;
count__18475_18553 = G__18568;
i__18476_18554 = G__18569;
continue;
} else {
var vec__18486_18570 = cljs.core.first.call(null,seq__18473_18564__$1);
var n_18571 = cljs.core.nth.call(null,vec__18486_18570,(0),null);
var meth_18572 = cljs.core.nth.call(null,vec__18486_18570,(1),null);
var c_18573 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18572));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18572))){
cljs.compiler.emitln.call(null,mname_18490,".cljs$core$IFn$_invoke$arity$variadic = ",n_18571,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_18490,".cljs$core$IFn$_invoke$arity$",c_18573," = ",n_18571,";");
}


var G__18574 = cljs.core.next.call(null,seq__18473_18564__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__18473_18551 = G__18574;
chunk__18474_18552 = G__18575;
count__18475_18553 = G__18576;
i__18476_18554 = G__18577;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_18490,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__18578){
var map__18579 = p__18578;
var map__18579__$1 = cljs.core.__destructure_map.call(null,map__18579);
var statements = cljs.core.get.call(null,map__18579__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__18579__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__18579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__18580_18584 = cljs.core.seq.call(null,statements);
var chunk__18581_18585 = null;
var count__18582_18586 = (0);
var i__18583_18587 = (0);
while(true){
if((i__18583_18587 < count__18582_18586)){
var s_18588 = cljs.core._nth.call(null,chunk__18581_18585,i__18583_18587);
cljs.compiler.emitln.call(null,s_18588);


var G__18589 = seq__18580_18584;
var G__18590 = chunk__18581_18585;
var G__18591 = count__18582_18586;
var G__18592 = (i__18583_18587 + (1));
seq__18580_18584 = G__18589;
chunk__18581_18585 = G__18590;
count__18582_18586 = G__18591;
i__18583_18587 = G__18592;
continue;
} else {
var temp__5823__auto___18593 = cljs.core.seq.call(null,seq__18580_18584);
if(temp__5823__auto___18593){
var seq__18580_18594__$1 = temp__5823__auto___18593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18580_18594__$1)){
var c__5525__auto___18595 = cljs.core.chunk_first.call(null,seq__18580_18594__$1);
var G__18596 = cljs.core.chunk_rest.call(null,seq__18580_18594__$1);
var G__18597 = c__5525__auto___18595;
var G__18598 = cljs.core.count.call(null,c__5525__auto___18595);
var G__18599 = (0);
seq__18580_18584 = G__18596;
chunk__18581_18585 = G__18597;
count__18582_18586 = G__18598;
i__18583_18587 = G__18599;
continue;
} else {
var s_18600 = cljs.core.first.call(null,seq__18580_18594__$1);
cljs.compiler.emitln.call(null,s_18600);


var G__18601 = cljs.core.next.call(null,seq__18580_18594__$1);
var G__18602 = null;
var G__18603 = (0);
var G__18604 = (0);
seq__18580_18584 = G__18601;
chunk__18581_18585 = G__18602;
count__18582_18586 = G__18603;
i__18583_18587 = G__18604;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__18605){
var map__18606 = p__18605;
var map__18606__$1 = cljs.core.__destructure_map.call(null,map__18606);
var try$ = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__18607,is_loop){
var map__18608 = p__18607;
var map__18608__$1 = cljs.core.__destructure_map.call(null,map__18608);
var expr = cljs.core.get.call(null,map__18608__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__18608__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__18608__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__18609_18619 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__18610_18620 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__18610_18620);

try{var seq__18611_18621 = cljs.core.seq.call(null,bindings);
var chunk__18612_18622 = null;
var count__18613_18623 = (0);
var i__18614_18624 = (0);
while(true){
if((i__18614_18624 < count__18613_18623)){
var map__18617_18625 = cljs.core._nth.call(null,chunk__18612_18622,i__18614_18624);
var map__18617_18626__$1 = cljs.core.__destructure_map.call(null,map__18617_18625);
var binding_18627 = map__18617_18626__$1;
var init_18628 = cljs.core.get.call(null,map__18617_18626__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_18627);

cljs.compiler.emitln.call(null," = ",init_18628,";");


var G__18629 = seq__18611_18621;
var G__18630 = chunk__18612_18622;
var G__18631 = count__18613_18623;
var G__18632 = (i__18614_18624 + (1));
seq__18611_18621 = G__18629;
chunk__18612_18622 = G__18630;
count__18613_18623 = G__18631;
i__18614_18624 = G__18632;
continue;
} else {
var temp__5823__auto___18633 = cljs.core.seq.call(null,seq__18611_18621);
if(temp__5823__auto___18633){
var seq__18611_18634__$1 = temp__5823__auto___18633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18611_18634__$1)){
var c__5525__auto___18635 = cljs.core.chunk_first.call(null,seq__18611_18634__$1);
var G__18636 = cljs.core.chunk_rest.call(null,seq__18611_18634__$1);
var G__18637 = c__5525__auto___18635;
var G__18638 = cljs.core.count.call(null,c__5525__auto___18635);
var G__18639 = (0);
seq__18611_18621 = G__18636;
chunk__18612_18622 = G__18637;
count__18613_18623 = G__18638;
i__18614_18624 = G__18639;
continue;
} else {
var map__18618_18640 = cljs.core.first.call(null,seq__18611_18634__$1);
var map__18618_18641__$1 = cljs.core.__destructure_map.call(null,map__18618_18640);
var binding_18642 = map__18618_18641__$1;
var init_18643 = cljs.core.get.call(null,map__18618_18641__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_18642);

cljs.compiler.emitln.call(null," = ",init_18643,";");


var G__18644 = cljs.core.next.call(null,seq__18611_18634__$1);
var G__18645 = null;
var G__18646 = (0);
var G__18647 = (0);
seq__18611_18621 = G__18644;
chunk__18612_18622 = G__18645;
count__18613_18623 = G__18646;
i__18614_18624 = G__18647;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__18609_18619);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__18648){
var map__18649 = p__18648;
var map__18649__$1 = cljs.core.__destructure_map.call(null,map__18649);
var frame = cljs.core.get.call(null,map__18649__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__18649__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__18649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___18650 = cljs.core.count.call(null,exprs);
var i_18651 = (0);
while(true){
if((i_18651 < n__5593__auto___18650)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_18651)," = ",exprs.call(null,i_18651),";");

var G__18652 = (i_18651 + (1));
i_18651 = G__18652;
continue;
} else {
}
break;
}

var n__5593__auto___18653 = cljs.core.count.call(null,exprs);
var i_18654 = (0);
while(true){
if((i_18654 < n__5593__auto___18653)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_18654))," = ",temps.call(null,i_18654),";");

var G__18655 = (i_18654 + (1));
i_18654 = G__18655;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__18656){
var map__18657 = p__18656;
var map__18657__$1 = cljs.core.__destructure_map.call(null,map__18657);
var expr = cljs.core.get.call(null,map__18657__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__18657__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__18657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__18658_18666 = cljs.core.seq.call(null,bindings);
var chunk__18659_18667 = null;
var count__18660_18668 = (0);
var i__18661_18669 = (0);
while(true){
if((i__18661_18669 < count__18660_18668)){
var map__18664_18670 = cljs.core._nth.call(null,chunk__18659_18667,i__18661_18669);
var map__18664_18671__$1 = cljs.core.__destructure_map.call(null,map__18664_18670);
var binding_18672 = map__18664_18671__$1;
var init_18673 = cljs.core.get.call(null,map__18664_18671__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_18672)," = ",init_18673,";");


var G__18674 = seq__18658_18666;
var G__18675 = chunk__18659_18667;
var G__18676 = count__18660_18668;
var G__18677 = (i__18661_18669 + (1));
seq__18658_18666 = G__18674;
chunk__18659_18667 = G__18675;
count__18660_18668 = G__18676;
i__18661_18669 = G__18677;
continue;
} else {
var temp__5823__auto___18678 = cljs.core.seq.call(null,seq__18658_18666);
if(temp__5823__auto___18678){
var seq__18658_18679__$1 = temp__5823__auto___18678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18658_18679__$1)){
var c__5525__auto___18680 = cljs.core.chunk_first.call(null,seq__18658_18679__$1);
var G__18681 = cljs.core.chunk_rest.call(null,seq__18658_18679__$1);
var G__18682 = c__5525__auto___18680;
var G__18683 = cljs.core.count.call(null,c__5525__auto___18680);
var G__18684 = (0);
seq__18658_18666 = G__18681;
chunk__18659_18667 = G__18682;
count__18660_18668 = G__18683;
i__18661_18669 = G__18684;
continue;
} else {
var map__18665_18685 = cljs.core.first.call(null,seq__18658_18679__$1);
var map__18665_18686__$1 = cljs.core.__destructure_map.call(null,map__18665_18685);
var binding_18687 = map__18665_18686__$1;
var init_18688 = cljs.core.get.call(null,map__18665_18686__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_18687)," = ",init_18688,";");


var G__18689 = cljs.core.next.call(null,seq__18658_18679__$1);
var G__18690 = null;
var G__18691 = (0);
var G__18692 = (0);
seq__18658_18666 = G__18689;
chunk__18659_18667 = G__18690;
count__18660_18668 = G__18691;
i__18661_18669 = G__18692;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__18695){
var map__18696 = p__18695;
var map__18696__$1 = cljs.core.__destructure_map.call(null,map__18696);
var expr = map__18696__$1;
var f = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__18696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__18697 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18693_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__18693_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__18694_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__18694_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__18697,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__18697,(1),null);
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
var pimpl_18700 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_18700,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_18701 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_18701,args)),(((mfa_18701 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_18701,args)),"], 0))");
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
var fprop_18702 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_18702," ? ",f__$1,fprop_18702,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_18702," ? ",f__$1,fprop_18702,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__18703){
var map__18704 = p__18703;
var map__18704__$1 = cljs.core.__destructure_map.call(null,map__18704);
var ctor = cljs.core.get.call(null,map__18704__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__18704__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__18704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__18705){
var map__18706 = p__18705;
var map__18706__$1 = cljs.core.__destructure_map.call(null,map__18706);
var target = cljs.core.get.call(null,map__18706__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__18706__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__18706__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__18707_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18707_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__18708 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18708,(0),null);
var sublib = cljs.core.nth.call(null,vec__18708,(1),null);
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
var map__18711 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__18711__$1 = cljs.core.__destructure_map.call(null,map__18711);
var options = cljs.core.get.call(null,map__18711__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__18711__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__18712 = options;
var map__18712__$1 = cljs.core.__destructure_map.call(null,map__18712);
var target = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__18712__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__18713 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__18719 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__18719__$1 = cljs.core.__destructure_map.call(null,map__18719);
var node_libs = cljs.core.get.call(null,map__18719__$1,true);
var libs_to_load = cljs.core.get.call(null,map__18719__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__18713,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__18713,(1),null);
var vec__18716 = (function (){var map__18720 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__18720__$1 = cljs.core.__destructure_map.call(null,map__18720);
var goog_modules = cljs.core.get.call(null,map__18720__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__18720__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__18716,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__18716,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__18721_18765 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__18722_18766 = null;
var count__18723_18767 = (0);
var i__18724_18768 = (0);
while(true){
if((i__18724_18768 < count__18723_18767)){
var lib_18769 = cljs.core._nth.call(null,chunk__18722_18766,i__18724_18768);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_18769)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18769),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18769),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18769),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18769),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_18769,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18769),"');");
}

}
}
}


var G__18770 = seq__18721_18765;
var G__18771 = chunk__18722_18766;
var G__18772 = count__18723_18767;
var G__18773 = (i__18724_18768 + (1));
seq__18721_18765 = G__18770;
chunk__18722_18766 = G__18771;
count__18723_18767 = G__18772;
i__18724_18768 = G__18773;
continue;
} else {
var temp__5823__auto___18774 = cljs.core.seq.call(null,seq__18721_18765);
if(temp__5823__auto___18774){
var seq__18721_18775__$1 = temp__5823__auto___18774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18721_18775__$1)){
var c__5525__auto___18776 = cljs.core.chunk_first.call(null,seq__18721_18775__$1);
var G__18777 = cljs.core.chunk_rest.call(null,seq__18721_18775__$1);
var G__18778 = c__5525__auto___18776;
var G__18779 = cljs.core.count.call(null,c__5525__auto___18776);
var G__18780 = (0);
seq__18721_18765 = G__18777;
chunk__18722_18766 = G__18778;
count__18723_18767 = G__18779;
i__18724_18768 = G__18780;
continue;
} else {
var lib_18781 = cljs.core.first.call(null,seq__18721_18775__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_18781)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18781),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18781),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_18781),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18781),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_18781,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_18781),"');");
}

}
}
}


var G__18782 = cljs.core.next.call(null,seq__18721_18775__$1);
var G__18783 = null;
var G__18784 = (0);
var G__18785 = (0);
seq__18721_18765 = G__18782;
chunk__18722_18766 = G__18783;
count__18723_18767 = G__18784;
i__18724_18768 = G__18785;
continue;
}
} else {
}
}
break;
}

var seq__18725_18786 = cljs.core.seq.call(null,node_libs);
var chunk__18726_18787 = null;
var count__18727_18788 = (0);
var i__18728_18789 = (0);
while(true){
if((i__18728_18789 < count__18727_18788)){
var lib_18790 = cljs.core._nth.call(null,chunk__18726_18787,i__18728_18789);
var vec__18735_18791 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18790);
var lib_SINGLEQUOTE__18792 = cljs.core.nth.call(null,vec__18735_18791,(0),null);
var sublib_18793 = cljs.core.nth.call(null,vec__18735_18791,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_18790)," = require('",lib_SINGLEQUOTE__18792,"')",cljs.compiler.sublib_select.call(null,sublib_18793),";");


var G__18794 = seq__18725_18786;
var G__18795 = chunk__18726_18787;
var G__18796 = count__18727_18788;
var G__18797 = (i__18728_18789 + (1));
seq__18725_18786 = G__18794;
chunk__18726_18787 = G__18795;
count__18727_18788 = G__18796;
i__18728_18789 = G__18797;
continue;
} else {
var temp__5823__auto___18798 = cljs.core.seq.call(null,seq__18725_18786);
if(temp__5823__auto___18798){
var seq__18725_18799__$1 = temp__5823__auto___18798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18725_18799__$1)){
var c__5525__auto___18800 = cljs.core.chunk_first.call(null,seq__18725_18799__$1);
var G__18801 = cljs.core.chunk_rest.call(null,seq__18725_18799__$1);
var G__18802 = c__5525__auto___18800;
var G__18803 = cljs.core.count.call(null,c__5525__auto___18800);
var G__18804 = (0);
seq__18725_18786 = G__18801;
chunk__18726_18787 = G__18802;
count__18727_18788 = G__18803;
i__18728_18789 = G__18804;
continue;
} else {
var lib_18805 = cljs.core.first.call(null,seq__18725_18799__$1);
var vec__18738_18806 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18805);
var lib_SINGLEQUOTE__18807 = cljs.core.nth.call(null,vec__18738_18806,(0),null);
var sublib_18808 = cljs.core.nth.call(null,vec__18738_18806,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_18805)," = require('",lib_SINGLEQUOTE__18807,"')",cljs.compiler.sublib_select.call(null,sublib_18808),";");


var G__18809 = cljs.core.next.call(null,seq__18725_18799__$1);
var G__18810 = null;
var G__18811 = (0);
var G__18812 = (0);
seq__18725_18786 = G__18809;
chunk__18726_18787 = G__18810;
count__18727_18788 = G__18811;
i__18728_18789 = G__18812;
continue;
}
} else {
}
}
break;
}

var seq__18741_18813 = cljs.core.seq.call(null,goog_modules);
var chunk__18742_18814 = null;
var count__18743_18815 = (0);
var i__18744_18816 = (0);
while(true){
if((i__18744_18816 < count__18743_18815)){
var lib_18817 = cljs.core._nth.call(null,chunk__18742_18814,i__18744_18816);
var vec__18751_18818 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18817);
var lib_SINGLEQUOTE__18819 = cljs.core.nth.call(null,vec__18751_18818,(0),null);
var sublib_18820 = cljs.core.nth.call(null,vec__18751_18818,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__18819,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_18817)," = goog.module.get('",lib_SINGLEQUOTE__18819,"')",cljs.compiler.sublib_select.call(null,sublib_18820),";");

cljs.compiler.emitln.call(null,"});");


var G__18821 = seq__18741_18813;
var G__18822 = chunk__18742_18814;
var G__18823 = count__18743_18815;
var G__18824 = (i__18744_18816 + (1));
seq__18741_18813 = G__18821;
chunk__18742_18814 = G__18822;
count__18743_18815 = G__18823;
i__18744_18816 = G__18824;
continue;
} else {
var temp__5823__auto___18825 = cljs.core.seq.call(null,seq__18741_18813);
if(temp__5823__auto___18825){
var seq__18741_18826__$1 = temp__5823__auto___18825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18741_18826__$1)){
var c__5525__auto___18827 = cljs.core.chunk_first.call(null,seq__18741_18826__$1);
var G__18828 = cljs.core.chunk_rest.call(null,seq__18741_18826__$1);
var G__18829 = c__5525__auto___18827;
var G__18830 = cljs.core.count.call(null,c__5525__auto___18827);
var G__18831 = (0);
seq__18741_18813 = G__18828;
chunk__18742_18814 = G__18829;
count__18743_18815 = G__18830;
i__18744_18816 = G__18831;
continue;
} else {
var lib_18832 = cljs.core.first.call(null,seq__18741_18826__$1);
var vec__18754_18833 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18832);
var lib_SINGLEQUOTE__18834 = cljs.core.nth.call(null,vec__18754_18833,(0),null);
var sublib_18835 = cljs.core.nth.call(null,vec__18754_18833,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__18834,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_18832)," = goog.module.get('",lib_SINGLEQUOTE__18834,"')",cljs.compiler.sublib_select.call(null,sublib_18835),";");

cljs.compiler.emitln.call(null,"});");


var G__18836 = cljs.core.next.call(null,seq__18741_18826__$1);
var G__18837 = null;
var G__18838 = (0);
var G__18839 = (0);
seq__18741_18813 = G__18836;
chunk__18742_18814 = G__18837;
count__18743_18815 = G__18838;
i__18744_18816 = G__18839;
continue;
}
} else {
}
}
break;
}

var seq__18757_18840 = cljs.core.seq.call(null,global_exports_libs);
var chunk__18758_18841 = null;
var count__18759_18842 = (0);
var i__18760_18843 = (0);
while(true){
if((i__18760_18843 < count__18759_18842)){
var lib_18844 = cljs.core._nth.call(null,chunk__18758_18841,i__18760_18843);
var map__18763_18845 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18844))));
var map__18763_18846__$1 = cljs.core.__destructure_map.call(null,map__18763_18845);
var global_exports_18847 = cljs.core.get.call(null,map__18763_18846__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_18847,lib_18844);


var G__18848 = seq__18757_18840;
var G__18849 = chunk__18758_18841;
var G__18850 = count__18759_18842;
var G__18851 = (i__18760_18843 + (1));
seq__18757_18840 = G__18848;
chunk__18758_18841 = G__18849;
count__18759_18842 = G__18850;
i__18760_18843 = G__18851;
continue;
} else {
var temp__5823__auto___18852 = cljs.core.seq.call(null,seq__18757_18840);
if(temp__5823__auto___18852){
var seq__18757_18853__$1 = temp__5823__auto___18852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18757_18853__$1)){
var c__5525__auto___18854 = cljs.core.chunk_first.call(null,seq__18757_18853__$1);
var G__18855 = cljs.core.chunk_rest.call(null,seq__18757_18853__$1);
var G__18856 = c__5525__auto___18854;
var G__18857 = cljs.core.count.call(null,c__5525__auto___18854);
var G__18858 = (0);
seq__18757_18840 = G__18855;
chunk__18758_18841 = G__18856;
count__18759_18842 = G__18857;
i__18760_18843 = G__18858;
continue;
} else {
var lib_18859 = cljs.core.first.call(null,seq__18757_18853__$1);
var map__18764_18860 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_18859))));
var map__18764_18861__$1 = cljs.core.__destructure_map.call(null,map__18764_18860);
var global_exports_18862 = cljs.core.get.call(null,map__18764_18861__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_18862,lib_18859);


var G__18863 = cljs.core.next.call(null,seq__18757_18853__$1);
var G__18864 = null;
var G__18865 = (0);
var G__18866 = (0);
seq__18757_18840 = G__18863;
chunk__18758_18841 = G__18864;
count__18759_18842 = G__18865;
i__18760_18843 = G__18866;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__18867){
var map__18868 = p__18867;
var map__18868__$1 = cljs.core.__destructure_map.call(null,map__18868);
var name = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18868__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__18869){
var map__18870 = p__18869;
var map__18870__$1 = cljs.core.__destructure_map.call(null,map__18870);
var name = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__18870__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__18871){
var map__18872 = p__18871;
var map__18872__$1 = cljs.core.__destructure_map.call(null,map__18872);
var t = cljs.core.get.call(null,map__18872__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__18872__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__18872__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__18872__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__18872__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__18873_18897 = cljs.core.seq.call(null,protocols);
var chunk__18874_18898 = null;
var count__18875_18899 = (0);
var i__18876_18900 = (0);
while(true){
if((i__18876_18900 < count__18875_18899)){
var protocol_18901 = cljs.core._nth.call(null,chunk__18874_18898,i__18876_18900);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18901)),"}");


var G__18902 = seq__18873_18897;
var G__18903 = chunk__18874_18898;
var G__18904 = count__18875_18899;
var G__18905 = (i__18876_18900 + (1));
seq__18873_18897 = G__18902;
chunk__18874_18898 = G__18903;
count__18875_18899 = G__18904;
i__18876_18900 = G__18905;
continue;
} else {
var temp__5823__auto___18906 = cljs.core.seq.call(null,seq__18873_18897);
if(temp__5823__auto___18906){
var seq__18873_18907__$1 = temp__5823__auto___18906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18873_18907__$1)){
var c__5525__auto___18908 = cljs.core.chunk_first.call(null,seq__18873_18907__$1);
var G__18909 = cljs.core.chunk_rest.call(null,seq__18873_18907__$1);
var G__18910 = c__5525__auto___18908;
var G__18911 = cljs.core.count.call(null,c__5525__auto___18908);
var G__18912 = (0);
seq__18873_18897 = G__18909;
chunk__18874_18898 = G__18910;
count__18875_18899 = G__18911;
i__18876_18900 = G__18912;
continue;
} else {
var protocol_18913 = cljs.core.first.call(null,seq__18873_18907__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18913)),"}");


var G__18914 = cljs.core.next.call(null,seq__18873_18907__$1);
var G__18915 = null;
var G__18916 = (0);
var G__18917 = (0);
seq__18873_18897 = G__18914;
chunk__18874_18898 = G__18915;
count__18875_18899 = G__18916;
i__18876_18900 = G__18917;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__18877_18918 = cljs.core.seq.call(null,fields__$1);
var chunk__18878_18919 = null;
var count__18879_18920 = (0);
var i__18880_18921 = (0);
while(true){
if((i__18880_18921 < count__18879_18920)){
var fld_18922 = cljs.core._nth.call(null,chunk__18878_18919,i__18880_18921);
cljs.compiler.emitln.call(null,"this.",fld_18922," = ",fld_18922,";");


var G__18923 = seq__18877_18918;
var G__18924 = chunk__18878_18919;
var G__18925 = count__18879_18920;
var G__18926 = (i__18880_18921 + (1));
seq__18877_18918 = G__18923;
chunk__18878_18919 = G__18924;
count__18879_18920 = G__18925;
i__18880_18921 = G__18926;
continue;
} else {
var temp__5823__auto___18927 = cljs.core.seq.call(null,seq__18877_18918);
if(temp__5823__auto___18927){
var seq__18877_18928__$1 = temp__5823__auto___18927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18877_18928__$1)){
var c__5525__auto___18929 = cljs.core.chunk_first.call(null,seq__18877_18928__$1);
var G__18930 = cljs.core.chunk_rest.call(null,seq__18877_18928__$1);
var G__18931 = c__5525__auto___18929;
var G__18932 = cljs.core.count.call(null,c__5525__auto___18929);
var G__18933 = (0);
seq__18877_18918 = G__18930;
chunk__18878_18919 = G__18931;
count__18879_18920 = G__18932;
i__18880_18921 = G__18933;
continue;
} else {
var fld_18934 = cljs.core.first.call(null,seq__18877_18928__$1);
cljs.compiler.emitln.call(null,"this.",fld_18934," = ",fld_18934,";");


var G__18935 = cljs.core.next.call(null,seq__18877_18928__$1);
var G__18936 = null;
var G__18937 = (0);
var G__18938 = (0);
seq__18877_18918 = G__18935;
chunk__18878_18919 = G__18936;
count__18879_18920 = G__18937;
i__18880_18921 = G__18938;
continue;
}
} else {
}
}
break;
}

var seq__18881_18939 = cljs.core.seq.call(null,pmasks);
var chunk__18882_18940 = null;
var count__18883_18941 = (0);
var i__18884_18942 = (0);
while(true){
if((i__18884_18942 < count__18883_18941)){
var vec__18891_18943 = cljs.core._nth.call(null,chunk__18882_18940,i__18884_18942);
var pno_18944 = cljs.core.nth.call(null,vec__18891_18943,(0),null);
var pmask_18945 = cljs.core.nth.call(null,vec__18891_18943,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18944,"$ = ",pmask_18945,";");


var G__18946 = seq__18881_18939;
var G__18947 = chunk__18882_18940;
var G__18948 = count__18883_18941;
var G__18949 = (i__18884_18942 + (1));
seq__18881_18939 = G__18946;
chunk__18882_18940 = G__18947;
count__18883_18941 = G__18948;
i__18884_18942 = G__18949;
continue;
} else {
var temp__5823__auto___18950 = cljs.core.seq.call(null,seq__18881_18939);
if(temp__5823__auto___18950){
var seq__18881_18951__$1 = temp__5823__auto___18950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18881_18951__$1)){
var c__5525__auto___18952 = cljs.core.chunk_first.call(null,seq__18881_18951__$1);
var G__18953 = cljs.core.chunk_rest.call(null,seq__18881_18951__$1);
var G__18954 = c__5525__auto___18952;
var G__18955 = cljs.core.count.call(null,c__5525__auto___18952);
var G__18956 = (0);
seq__18881_18939 = G__18953;
chunk__18882_18940 = G__18954;
count__18883_18941 = G__18955;
i__18884_18942 = G__18956;
continue;
} else {
var vec__18894_18957 = cljs.core.first.call(null,seq__18881_18951__$1);
var pno_18958 = cljs.core.nth.call(null,vec__18894_18957,(0),null);
var pmask_18959 = cljs.core.nth.call(null,vec__18894_18957,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_18958,"$ = ",pmask_18959,";");


var G__18960 = cljs.core.next.call(null,seq__18881_18951__$1);
var G__18961 = null;
var G__18962 = (0);
var G__18963 = (0);
seq__18881_18939 = G__18960;
chunk__18882_18940 = G__18961;
count__18883_18941 = G__18962;
i__18884_18942 = G__18963;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__18964){
var map__18965 = p__18964;
var map__18965__$1 = cljs.core.__destructure_map.call(null,map__18965);
var t = cljs.core.get.call(null,map__18965__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__18965__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__18965__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__18965__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__18965__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__18966_18990 = cljs.core.seq.call(null,protocols);
var chunk__18967_18991 = null;
var count__18968_18992 = (0);
var i__18969_18993 = (0);
while(true){
if((i__18969_18993 < count__18968_18992)){
var protocol_18994 = cljs.core._nth.call(null,chunk__18967_18991,i__18969_18993);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18994)),"}");


var G__18995 = seq__18966_18990;
var G__18996 = chunk__18967_18991;
var G__18997 = count__18968_18992;
var G__18998 = (i__18969_18993 + (1));
seq__18966_18990 = G__18995;
chunk__18967_18991 = G__18996;
count__18968_18992 = G__18997;
i__18969_18993 = G__18998;
continue;
} else {
var temp__5823__auto___18999 = cljs.core.seq.call(null,seq__18966_18990);
if(temp__5823__auto___18999){
var seq__18966_19000__$1 = temp__5823__auto___18999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18966_19000__$1)){
var c__5525__auto___19001 = cljs.core.chunk_first.call(null,seq__18966_19000__$1);
var G__19002 = cljs.core.chunk_rest.call(null,seq__18966_19000__$1);
var G__19003 = c__5525__auto___19001;
var G__19004 = cljs.core.count.call(null,c__5525__auto___19001);
var G__19005 = (0);
seq__18966_18990 = G__19002;
chunk__18967_18991 = G__19003;
count__18968_18992 = G__19004;
i__18969_18993 = G__19005;
continue;
} else {
var protocol_19006 = cljs.core.first.call(null,seq__18966_19000__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19006)),"}");


var G__19007 = cljs.core.next.call(null,seq__18966_19000__$1);
var G__19008 = null;
var G__19009 = (0);
var G__19010 = (0);
seq__18966_18990 = G__19007;
chunk__18967_18991 = G__19008;
count__18968_18992 = G__19009;
i__18969_18993 = G__19010;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__18970_19011 = cljs.core.seq.call(null,fields__$1);
var chunk__18971_19012 = null;
var count__18972_19013 = (0);
var i__18973_19014 = (0);
while(true){
if((i__18973_19014 < count__18972_19013)){
var fld_19015 = cljs.core._nth.call(null,chunk__18971_19012,i__18973_19014);
cljs.compiler.emitln.call(null,"this.",fld_19015," = ",fld_19015,";");


var G__19016 = seq__18970_19011;
var G__19017 = chunk__18971_19012;
var G__19018 = count__18972_19013;
var G__19019 = (i__18973_19014 + (1));
seq__18970_19011 = G__19016;
chunk__18971_19012 = G__19017;
count__18972_19013 = G__19018;
i__18973_19014 = G__19019;
continue;
} else {
var temp__5823__auto___19020 = cljs.core.seq.call(null,seq__18970_19011);
if(temp__5823__auto___19020){
var seq__18970_19021__$1 = temp__5823__auto___19020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18970_19021__$1)){
var c__5525__auto___19022 = cljs.core.chunk_first.call(null,seq__18970_19021__$1);
var G__19023 = cljs.core.chunk_rest.call(null,seq__18970_19021__$1);
var G__19024 = c__5525__auto___19022;
var G__19025 = cljs.core.count.call(null,c__5525__auto___19022);
var G__19026 = (0);
seq__18970_19011 = G__19023;
chunk__18971_19012 = G__19024;
count__18972_19013 = G__19025;
i__18973_19014 = G__19026;
continue;
} else {
var fld_19027 = cljs.core.first.call(null,seq__18970_19021__$1);
cljs.compiler.emitln.call(null,"this.",fld_19027," = ",fld_19027,";");


var G__19028 = cljs.core.next.call(null,seq__18970_19021__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__18970_19011 = G__19028;
chunk__18971_19012 = G__19029;
count__18972_19013 = G__19030;
i__18973_19014 = G__19031;
continue;
}
} else {
}
}
break;
}

var seq__18974_19032 = cljs.core.seq.call(null,pmasks);
var chunk__18975_19033 = null;
var count__18976_19034 = (0);
var i__18977_19035 = (0);
while(true){
if((i__18977_19035 < count__18976_19034)){
var vec__18984_19036 = cljs.core._nth.call(null,chunk__18975_19033,i__18977_19035);
var pno_19037 = cljs.core.nth.call(null,vec__18984_19036,(0),null);
var pmask_19038 = cljs.core.nth.call(null,vec__18984_19036,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19037,"$ = ",pmask_19038,";");


var G__19039 = seq__18974_19032;
var G__19040 = chunk__18975_19033;
var G__19041 = count__18976_19034;
var G__19042 = (i__18977_19035 + (1));
seq__18974_19032 = G__19039;
chunk__18975_19033 = G__19040;
count__18976_19034 = G__19041;
i__18977_19035 = G__19042;
continue;
} else {
var temp__5823__auto___19043 = cljs.core.seq.call(null,seq__18974_19032);
if(temp__5823__auto___19043){
var seq__18974_19044__$1 = temp__5823__auto___19043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18974_19044__$1)){
var c__5525__auto___19045 = cljs.core.chunk_first.call(null,seq__18974_19044__$1);
var G__19046 = cljs.core.chunk_rest.call(null,seq__18974_19044__$1);
var G__19047 = c__5525__auto___19045;
var G__19048 = cljs.core.count.call(null,c__5525__auto___19045);
var G__19049 = (0);
seq__18974_19032 = G__19046;
chunk__18975_19033 = G__19047;
count__18976_19034 = G__19048;
i__18977_19035 = G__19049;
continue;
} else {
var vec__18987_19050 = cljs.core.first.call(null,seq__18974_19044__$1);
var pno_19051 = cljs.core.nth.call(null,vec__18987_19050,(0),null);
var pmask_19052 = cljs.core.nth.call(null,vec__18987_19050,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_19051,"$ = ",pmask_19052,";");


var G__19053 = cljs.core.next.call(null,seq__18974_19044__$1);
var G__19054 = null;
var G__19055 = (0);
var G__19056 = (0);
seq__18974_19032 = G__19053;
chunk__18975_19033 = G__19054;
count__18976_19034 = G__19055;
i__18977_19035 = G__19056;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__19057){
var map__19058 = p__19057;
var map__19058__$1 = cljs.core.__destructure_map.call(null,map__19058);
var target = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__19058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__19059){
var map__19060 = p__19059;
var map__19060__$1 = cljs.core.__destructure_map.call(null,map__19060);
var op = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__19065 = cljs.core.seq.call(null,table);
var chunk__19066 = null;
var count__19067 = (0);
var i__19068 = (0);
while(true){
if((i__19068 < count__19067)){
var vec__19075 = cljs.core._nth.call(null,chunk__19066,i__19068);
var sym = cljs.core.nth.call(null,vec__19075,(0),null);
var value = cljs.core.nth.call(null,vec__19075,(1),null);
var ns_19081 = cljs.core.namespace.call(null,sym);
var name_19082 = cljs.core.name.call(null,sym);
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


var G__19083 = seq__19065;
var G__19084 = chunk__19066;
var G__19085 = count__19067;
var G__19086 = (i__19068 + (1));
seq__19065 = G__19083;
chunk__19066 = G__19084;
count__19067 = G__19085;
i__19068 = G__19086;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__19065);
if(temp__5823__auto__){
var seq__19065__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19065__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__19065__$1);
var G__19087 = cljs.core.chunk_rest.call(null,seq__19065__$1);
var G__19088 = c__5525__auto__;
var G__19089 = cljs.core.count.call(null,c__5525__auto__);
var G__19090 = (0);
seq__19065 = G__19087;
chunk__19066 = G__19088;
count__19067 = G__19089;
i__19068 = G__19090;
continue;
} else {
var vec__19078 = cljs.core.first.call(null,seq__19065__$1);
var sym = cljs.core.nth.call(null,vec__19078,(0),null);
var value = cljs.core.nth.call(null,vec__19078,(1),null);
var ns_19091 = cljs.core.namespace.call(null,sym);
var name_19092 = cljs.core.name.call(null,sym);
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


var G__19093 = cljs.core.next.call(null,seq__19065__$1);
var G__19094 = null;
var G__19095 = (0);
var G__19096 = (0);
seq__19065 = G__19093;
chunk__19066 = G__19094;
count__19067 = G__19095;
i__19068 = G__19096;
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
var G__19098 = arguments.length;
switch (G__19098) {
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
var k_19103 = cljs.core.first.call(null,ks);
var vec__19099_19104 = cljs.core.conj.call(null,prefix,k_19103);
var top_19105 = cljs.core.nth.call(null,vec__19099_19104,(0),null);
var prefix_SINGLEQUOTE__19106 = vec__19099_19104;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19103)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__19106) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_19105)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_19105)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19106)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_19105);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__19106)),";");
}
} else {
}

var m_19107 = cljs.core.get.call(null,externs,k_19103);
if(cljs.core.empty_QMARK_.call(null,m_19107)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__19106,m_19107,top_level,known_externs);
}

var G__19108 = cljs.core.next.call(null,ks);
ks = G__19108;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
