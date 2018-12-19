// Compiled by ClojureScript 1.10.492 {}
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
var map__14850 = s;
var map__14850__$1 = (((((!((map__14850 == null))))?(((((map__14850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14850):map__14850);
var name = cljs.core.get.call(null,map__14850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14850__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14853 = info;
var map__14854 = G__14853;
var map__14854__$1 = (((((!((map__14854 == null))))?(((((map__14854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14854):map__14854);
var shadow = cljs.core.get.call(null,map__14854__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14853__$1 = G__14853;
while(true){
var d__$2 = d__$1;
var map__14858 = G__14853__$1;
var map__14858__$1 = (((((!((map__14858 == null))))?(((((map__14858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14858):map__14858);
var shadow__$1 = cljs.core.get.call(null,map__14858__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14860 = (d__$2 + (1));
var G__14861 = shadow__$1;
d__$1 = G__14860;
G__14853__$1 = G__14861;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14862){
var map__14863 = p__14862;
var map__14863__$1 = (((((!((map__14863 == null))))?(((((map__14863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14863):map__14863);
var name_var = map__14863__$1;
var name = cljs.core.get.call(null,map__14863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14863__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__14865 = info;
var map__14865__$1 = (((((!((map__14865 == null))))?(((((map__14865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14865):map__14865);
var ns = cljs.core.get.call(null,map__14865__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14865__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
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
var G__14868 = arguments.length;
switch (G__14868) {
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
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(17),(1),(11471),(11471),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
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
var G__14870 = cp;
switch (G__14870) {
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
var seq__14872_14876 = cljs.core.seq.call(null,s);
var chunk__14873_14877 = null;
var count__14874_14878 = (0);
var i__14875_14879 = (0);
while(true){
if((i__14875_14879 < count__14874_14878)){
var c_14880 = cljs.core._nth.call(null,chunk__14873_14877,i__14875_14879);
sb.append(cljs.compiler.escape_char.call(null,c_14880));


var G__14881 = seq__14872_14876;
var G__14882 = chunk__14873_14877;
var G__14883 = count__14874_14878;
var G__14884 = (i__14875_14879 + (1));
seq__14872_14876 = G__14881;
chunk__14873_14877 = G__14882;
count__14874_14878 = G__14883;
i__14875_14879 = G__14884;
continue;
} else {
var temp__5720__auto___14885 = cljs.core.seq.call(null,seq__14872_14876);
if(temp__5720__auto___14885){
var seq__14872_14886__$1 = temp__5720__auto___14885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14872_14886__$1)){
var c__4421__auto___14887 = cljs.core.chunk_first.call(null,seq__14872_14886__$1);
var G__14888 = cljs.core.chunk_rest.call(null,seq__14872_14886__$1);
var G__14889 = c__4421__auto___14887;
var G__14890 = cljs.core.count.call(null,c__4421__auto___14887);
var G__14891 = (0);
seq__14872_14876 = G__14888;
chunk__14873_14877 = G__14889;
count__14874_14878 = G__14890;
i__14875_14879 = G__14891;
continue;
} else {
var c_14892 = cljs.core.first.call(null,seq__14872_14886__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14892));


var G__14893 = cljs.core.next.call(null,seq__14872_14886__$1);
var G__14894 = null;
var G__14895 = (0);
var G__14896 = (0);
seq__14872_14876 = G__14893;
chunk__14873_14877 = G__14894;
count__14874_14878 = G__14895;
i__14875_14879 = G__14896;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14897_14902 = ast;
var map__14897_14903__$1 = (((((!((map__14897_14902 == null))))?(((((map__14897_14902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14897_14902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14897_14902):map__14897_14902);
var env_14904 = cljs.core.get.call(null,map__14897_14903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14904))){
var map__14899_14905 = env_14904;
var map__14899_14906__$1 = (((((!((map__14899_14905 == null))))?(((((map__14899_14905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14899_14905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14899_14905):map__14899_14905);
var line_14907 = cljs.core.get.call(null,map__14899_14906__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14908 = cljs.core.get.call(null,map__14899_14906__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904){
return (function (m){
var minfo = (function (){var G__14901 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__14901,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__14901;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14907 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14908)?(column_14908 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904))
,cljs.core.sorted_map.call(null)));
});})(map__14899_14905,map__14899_14906__$1,line_14907,column_14908,map__14897_14902,map__14897_14903__$1,env_14904))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__14917 = arguments.length;
switch (G__14917) {
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
var args_arr__4622__auto__ = [];
var len__4601__auto___14924 = arguments.length;
var i__4602__auto___14925 = (0);
while(true){
if((i__4602__auto___14925 < len__4601__auto___14924)){
args_arr__4622__auto__.push((arguments[i__4602__auto___14925]));

var G__14926 = (i__4602__auto___14925 + (1));
i__4602__auto___14925 = G__14926;
continue;
} else {
}
break;
}

var argseq__4623__auto__ = (new cljs.core.IndexedSeq(args_arr__4622__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4623__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_14927 = (function (){var G__14918 = a;
if((!(typeof a === 'string'))){
return G__14918.toString();
} else {
return G__14918;
}
})();
var temp__5724__auto___14928 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5724__auto___14928 == null)){
} else {
var sm_data_14929 = temp__5724__auto___14928;
cljs.core.swap_BANG_.call(null,sm_data_14929,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_14929,temp__5724__auto___14928,s_14927){
return (function (p1__14909_SHARP_){
return (p1__14909_SHARP_ + s_14927.length);
});})(sm_data_14929,temp__5724__auto___14928,s_14927))
);
}

cljs.core.print.call(null,s_14927);

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__14919 = cljs.core.seq.call(null,xs);
var chunk__14920 = null;
var count__14921 = (0);
var i__14922 = (0);
while(true){
if((i__14922 < count__14921)){
var x = cljs.core._nth.call(null,chunk__14920,i__14922);
cljs.compiler.emits.call(null,x);


var G__14930 = seq__14919;
var G__14931 = chunk__14920;
var G__14932 = count__14921;
var G__14933 = (i__14922 + (1));
seq__14919 = G__14930;
chunk__14920 = G__14931;
count__14921 = G__14932;
i__14922 = G__14933;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14919);
if(temp__5720__auto__){
var seq__14919__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14919__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__14919__$1);
var G__14934 = cljs.core.chunk_rest.call(null,seq__14919__$1);
var G__14935 = c__4421__auto__;
var G__14936 = cljs.core.count.call(null,c__4421__auto__);
var G__14937 = (0);
seq__14919 = G__14934;
chunk__14920 = G__14935;
count__14921 = G__14936;
i__14922 = G__14937;
continue;
} else {
var x = cljs.core.first.call(null,seq__14919__$1);
cljs.compiler.emits.call(null,x);


var G__14938 = cljs.core.next.call(null,seq__14919__$1);
var G__14939 = null;
var G__14940 = (0);
var G__14941 = (0);
seq__14919 = G__14938;
chunk__14920 = G__14939;
count__14921 = G__14940;
i__14922 = G__14941;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq14911){
var G__14912 = cljs.core.first.call(null,seq14911);
var seq14911__$1 = cljs.core.next.call(null,seq14911);
var G__14913 = cljs.core.first.call(null,seq14911__$1);
var seq14911__$2 = cljs.core.next.call(null,seq14911__$1);
var G__14914 = cljs.core.first.call(null,seq14911__$2);
var seq14911__$3 = cljs.core.next.call(null,seq14911__$2);
var G__14915 = cljs.core.first.call(null,seq14911__$3);
var seq14911__$4 = cljs.core.next.call(null,seq14911__$3);
var G__14916 = cljs.core.first.call(null,seq14911__$4);
var seq14911__$5 = cljs.core.next.call(null,seq14911__$4);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14912,G__14913,G__14914,G__14915,G__14916,seq14911__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14942){
var map__14943 = p__14942;
var map__14943__$1 = (((((!((map__14943 == null))))?(((((map__14943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14943):map__14943);
var m = map__14943__$1;
var gen_line = cljs.core.get.call(null,map__14943__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__14952 = arguments.length;
switch (G__14952) {
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
var args_arr__4622__auto__ = [];
var len__4601__auto___14958 = arguments.length;
var i__4602__auto___14959 = (0);
while(true){
if((i__4602__auto___14959 < len__4601__auto___14958)){
args_arr__4622__auto__.push((arguments[i__4602__auto___14959]));

var G__14960 = (i__4602__auto___14959 + (1));
i__4602__auto___14959 = G__14960;
continue;
} else {
}
break;
}

var argseq__4623__auto__ = (new cljs.core.IndexedSeq(args_arr__4622__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4623__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__14953_14961 = cljs.core.seq.call(null,xs);
var chunk__14954_14962 = null;
var count__14955_14963 = (0);
var i__14956_14964 = (0);
while(true){
if((i__14956_14964 < count__14955_14963)){
var x_14965 = cljs.core._nth.call(null,chunk__14954_14962,i__14956_14964);
cljs.compiler.emits.call(null,x_14965);


var G__14966 = seq__14953_14961;
var G__14967 = chunk__14954_14962;
var G__14968 = count__14955_14963;
var G__14969 = (i__14956_14964 + (1));
seq__14953_14961 = G__14966;
chunk__14954_14962 = G__14967;
count__14955_14963 = G__14968;
i__14956_14964 = G__14969;
continue;
} else {
var temp__5720__auto___14970 = cljs.core.seq.call(null,seq__14953_14961);
if(temp__5720__auto___14970){
var seq__14953_14971__$1 = temp__5720__auto___14970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14953_14971__$1)){
var c__4421__auto___14972 = cljs.core.chunk_first.call(null,seq__14953_14971__$1);
var G__14973 = cljs.core.chunk_rest.call(null,seq__14953_14971__$1);
var G__14974 = c__4421__auto___14972;
var G__14975 = cljs.core.count.call(null,c__4421__auto___14972);
var G__14976 = (0);
seq__14953_14961 = G__14973;
chunk__14954_14962 = G__14974;
count__14955_14963 = G__14975;
i__14956_14964 = G__14976;
continue;
} else {
var x_14977 = cljs.core.first.call(null,seq__14953_14971__$1);
cljs.compiler.emits.call(null,x_14977);


var G__14978 = cljs.core.next.call(null,seq__14953_14971__$1);
var G__14979 = null;
var G__14980 = (0);
var G__14981 = (0);
seq__14953_14961 = G__14978;
chunk__14954_14962 = G__14979;
count__14955_14963 = G__14980;
i__14956_14964 = G__14981;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14946){
var G__14947 = cljs.core.first.call(null,seq14946);
var seq14946__$1 = cljs.core.next.call(null,seq14946);
var G__14948 = cljs.core.first.call(null,seq14946__$1);
var seq14946__$2 = cljs.core.next.call(null,seq14946__$1);
var G__14949 = cljs.core.first.call(null,seq14946__$2);
var seq14946__$3 = cljs.core.next.call(null,seq14946__$2);
var G__14950 = cljs.core.first.call(null,seq14946__$3);
var seq14946__$4 = cljs.core.next.call(null,seq14946__$3);
var G__14951 = cljs.core.first.call(null,seq14946__$4);
var seq14946__$5 = cljs.core.next.call(null,seq14946__$4);
var self__4588__auto__ = this;
return self__4588__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14947,G__14948,G__14949,G__14950,G__14951,seq14946__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4532__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14982_14986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14983_14987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14984_14988 = true;
var _STAR_print_fn_STAR__temp_val__14985_14989 = ((function (_STAR_print_newline_STAR__orig_val__14982_14986,_STAR_print_fn_STAR__orig_val__14983_14987,_STAR_print_newline_STAR__temp_val__14984_14988,sb__4532__auto__){
return (function (x__4533__auto__){
return sb__4532__auto__.append(x__4533__auto__);
});})(_STAR_print_newline_STAR__orig_val__14982_14986,_STAR_print_fn_STAR__orig_val__14983_14987,_STAR_print_newline_STAR__temp_val__14984_14988,sb__4532__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14984_14988;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14985_14989;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14983_14987;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14982_14986;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4532__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4488__auto__,method_table__4484__auto__,prefer_table__4485__auto__,method_cache__4486__auto__,cached_hierarchy__4487__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__14990 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__14990,(0),null);
var name = cljs.core.nth.call(null,vec__14990,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__14990,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__14990,ns,name))
);
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
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
return cljs.compiler.emit_with_meta.call(null,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
});})(m))
,((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
});})(m))
);
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
return cljs.compiler.emits.call(null,"(",x,")");

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
var vec__14993 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__14993,(0),null);
var flags = cljs.core.nth.call(null,vec__14993,(1),null);
var pattern = cljs.core.nth.call(null,vec__14993,(2),null);
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
var temp__5718__auto__ = (function (){var and__3991__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3991__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5718__auto__ = (function (){var and__3991__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3991__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,((function (items){
return (function (p1__14996_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__14996_SHARP_);
});
;})(items))
});})(items))
);
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__14998){
var map__14999 = p__14998;
var map__14999__$1 = (((((!((map__14999 == null))))?(((((map__14999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14999):map__14999);
var ast = map__14999__$1;
var info = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14999__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5718__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5718__auto__)){
var const_expr = temp__5718__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15001 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15001__$1 = (((((!((map__15001 == null))))?(((((map__15001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15001):map__15001);
var cenv = map__15001__$1;
var options = cljs.core.get.call(null,map__15001__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4002__auto__ = js_module_name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
var reserved = (function (){var G__15003 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3991__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__3991__auto__;
}
})())){
return clojure.set.difference.call(null,G__15003,cljs.analyzer.es5_allowed);
} else {
return G__15003;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4002__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__15004 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__15004,reserved);
} else {
return G__15004;
}
})();
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__15005_15006 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15005_15007__$1 = (((G__15005_15006 instanceof cljs.core.Keyword))?G__15005_15006.fqn:null);
switch (G__15005_15007__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3991__auto__;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15009){
var map__15010 = p__15009;
var map__15010__$1 = (((((!((map__15010 == null))))?(((((map__15010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15010):map__15010);
var arg = map__15010__$1;
var env = cljs.core.get.call(null,map__15010__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__15010__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__15010__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__15010__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15012 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15012__$1 = (((((!((map__15012 == null))))?(((((map__15012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15012):map__15012);
var name = cljs.core.get.call(null,map__15012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15014){
var map__15015 = p__15014;
var map__15015__$1 = (((((!((map__15015 == null))))?(((((map__15015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15015):map__15015);
var expr = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__15015__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__15017_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15017_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15018){
var map__15019 = p__15018;
var map__15019__$1 = (((((!((map__15019 == null))))?(((((map__15019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15019):map__15019);
var env = cljs.core.get.call(null,map__15019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__15019__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15019__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15021){
var map__15022 = p__15021;
var map__15022__$1 = (((((!((map__15022 == null))))?(((((map__15022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15022):map__15022);
var items = cljs.core.get.call(null,map__15022__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15022__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__15024_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15024_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15025){
var map__15026 = p__15025;
var map__15026__$1 = (((((!((map__15026 == null))))?(((((map__15026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15026):map__15026);
var items = cljs.core.get.call(null,map__15026__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15026__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5720__auto___15050 = cljs.core.seq.call(null,items);
if(temp__5720__auto___15050){
var items_15051__$1 = temp__5720__auto___15050;
var vec__15028_15052 = items_15051__$1;
var seq__15029_15053 = cljs.core.seq.call(null,vec__15028_15052);
var first__15030_15054 = cljs.core.first.call(null,seq__15029_15053);
var seq__15029_15055__$1 = cljs.core.next.call(null,seq__15029_15053);
var vec__15031_15056 = first__15030_15054;
var k_15057 = cljs.core.nth.call(null,vec__15031_15056,(0),null);
var v_15058 = cljs.core.nth.call(null,vec__15031_15056,(1),null);
var r_15059 = seq__15029_15055__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_15057),"\": ",emit_js_object_val.call(null,v_15058));

var seq__15034_15060 = cljs.core.seq.call(null,r_15059);
var chunk__15035_15061 = null;
var count__15036_15062 = (0);
var i__15037_15063 = (0);
while(true){
if((i__15037_15063 < count__15036_15062)){
var vec__15044_15064 = cljs.core._nth.call(null,chunk__15035_15061,i__15037_15063);
var k_15065__$1 = cljs.core.nth.call(null,vec__15044_15064,(0),null);
var v_15066__$1 = cljs.core.nth.call(null,vec__15044_15064,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15065__$1),"\": ",emit_js_object_val.call(null,v_15066__$1));


var G__15067 = seq__15034_15060;
var G__15068 = chunk__15035_15061;
var G__15069 = count__15036_15062;
var G__15070 = (i__15037_15063 + (1));
seq__15034_15060 = G__15067;
chunk__15035_15061 = G__15068;
count__15036_15062 = G__15069;
i__15037_15063 = G__15070;
continue;
} else {
var temp__5720__auto___15071__$1 = cljs.core.seq.call(null,seq__15034_15060);
if(temp__5720__auto___15071__$1){
var seq__15034_15072__$1 = temp__5720__auto___15071__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15034_15072__$1)){
var c__4421__auto___15073 = cljs.core.chunk_first.call(null,seq__15034_15072__$1);
var G__15074 = cljs.core.chunk_rest.call(null,seq__15034_15072__$1);
var G__15075 = c__4421__auto___15073;
var G__15076 = cljs.core.count.call(null,c__4421__auto___15073);
var G__15077 = (0);
seq__15034_15060 = G__15074;
chunk__15035_15061 = G__15075;
count__15036_15062 = G__15076;
i__15037_15063 = G__15077;
continue;
} else {
var vec__15047_15078 = cljs.core.first.call(null,seq__15034_15072__$1);
var k_15079__$1 = cljs.core.nth.call(null,vec__15047_15078,(0),null);
var v_15080__$1 = cljs.core.nth.call(null,vec__15047_15078,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_15079__$1),"\": ",emit_js_object_val.call(null,v_15080__$1));


var G__15081 = cljs.core.next.call(null,seq__15034_15072__$1);
var G__15082 = null;
var G__15083 = (0);
var G__15084 = (0);
seq__15034_15060 = G__15081;
chunk__15035_15061 = G__15082;
count__15036_15062 = G__15083;
i__15037_15063 = G__15084;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15085){
var map__15086 = p__15085;
var map__15086__$1 = (((((!((map__15086 == null))))?(((((map__15086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15086):map__15086);
var keys = cljs.core.get.call(null,map__15086__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__15086__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__15086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15088){
var map__15089 = p__15088;
var map__15089__$1 = (((((!((map__15089 == null))))?(((((map__15089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15089):map__15089);
var items = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__15089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15091){
var map__15092 = p__15091;
var map__15092__$1 = (((((!((map__15092 == null))))?(((((map__15092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15092):map__15092);
var expr = cljs.core.get.call(null,map__15092__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15094){
var map__15095 = p__15094;
var map__15095__$1 = (((((!((map__15095 == null))))?(((((map__15095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15095):map__15095);
var form = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__15095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15097 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15097__$1 = (((((!((map__15097 == null))))?(((((map__15097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15097):map__15097);
var op = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4002__auto__ = (function (){var and__3991__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__3991__auto__){
var and__3991__auto____$1 = form;
if(cljs.core.truth_(and__3991__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})();
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var and__3991__auto__ = (!((const_expr == null)));
if(and__3991__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3991__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__15099 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__15099__$1 = (((((!((map__15099 == null))))?(((((map__15099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15099):map__15099);
var op = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__15099__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4002__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var and__3991__auto__ = (!((const_expr == null)));
if(and__3991__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3991__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15101){
var map__15102 = p__15101;
var map__15102__$1 = (((((!((map__15102 == null))))?(((((map__15102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15102):map__15102);
var test = cljs.core.get.call(null,map__15102__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__15102__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__15102__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__15102__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__15102__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4002__auto__ = unchecked;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15104){
var map__15105 = p__15104;
var map__15105__$1 = (((((!((map__15105 == null))))?(((((map__15105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15105):map__15105);
var v = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__15105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15107_15143 = cljs.core.seq.call(null,nodes);
var chunk__15108_15144 = null;
var count__15109_15145 = (0);
var i__15110_15146 = (0);
while(true){
if((i__15110_15146 < count__15109_15145)){
var map__15127_15147 = cljs.core._nth.call(null,chunk__15108_15144,i__15110_15146);
var map__15127_15148__$1 = (((((!((map__15127_15147 == null))))?(((((map__15127_15147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15127_15147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15127_15147):map__15127_15147);
var ts_15149 = cljs.core.get.call(null,map__15127_15148__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15128_15150 = cljs.core.get.call(null,map__15127_15148__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15128_15151__$1 = (((((!((map__15128_15150 == null))))?(((((map__15128_15150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15128_15150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15128_15150):map__15128_15150);
var then_15152 = cljs.core.get.call(null,map__15128_15151__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15131_15153 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15149));
var chunk__15132_15154 = null;
var count__15133_15155 = (0);
var i__15134_15156 = (0);
while(true){
if((i__15134_15156 < count__15133_15155)){
var test_15157 = cljs.core._nth.call(null,chunk__15132_15154,i__15134_15156);
cljs.compiler.emitln.call(null,"case ",test_15157,":");


var G__15158 = seq__15131_15153;
var G__15159 = chunk__15132_15154;
var G__15160 = count__15133_15155;
var G__15161 = (i__15134_15156 + (1));
seq__15131_15153 = G__15158;
chunk__15132_15154 = G__15159;
count__15133_15155 = G__15160;
i__15134_15156 = G__15161;
continue;
} else {
var temp__5720__auto___15162 = cljs.core.seq.call(null,seq__15131_15153);
if(temp__5720__auto___15162){
var seq__15131_15163__$1 = temp__5720__auto___15162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15131_15163__$1)){
var c__4421__auto___15164 = cljs.core.chunk_first.call(null,seq__15131_15163__$1);
var G__15165 = cljs.core.chunk_rest.call(null,seq__15131_15163__$1);
var G__15166 = c__4421__auto___15164;
var G__15167 = cljs.core.count.call(null,c__4421__auto___15164);
var G__15168 = (0);
seq__15131_15153 = G__15165;
chunk__15132_15154 = G__15166;
count__15133_15155 = G__15167;
i__15134_15156 = G__15168;
continue;
} else {
var test_15169 = cljs.core.first.call(null,seq__15131_15163__$1);
cljs.compiler.emitln.call(null,"case ",test_15169,":");


var G__15170 = cljs.core.next.call(null,seq__15131_15163__$1);
var G__15171 = null;
var G__15172 = (0);
var G__15173 = (0);
seq__15131_15153 = G__15170;
chunk__15132_15154 = G__15171;
count__15133_15155 = G__15172;
i__15134_15156 = G__15173;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15152);
} else {
cljs.compiler.emitln.call(null,then_15152);
}

cljs.compiler.emitln.call(null,"break;");


var G__15174 = seq__15107_15143;
var G__15175 = chunk__15108_15144;
var G__15176 = count__15109_15145;
var G__15177 = (i__15110_15146 + (1));
seq__15107_15143 = G__15174;
chunk__15108_15144 = G__15175;
count__15109_15145 = G__15176;
i__15110_15146 = G__15177;
continue;
} else {
var temp__5720__auto___15178 = cljs.core.seq.call(null,seq__15107_15143);
if(temp__5720__auto___15178){
var seq__15107_15179__$1 = temp__5720__auto___15178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15107_15179__$1)){
var c__4421__auto___15180 = cljs.core.chunk_first.call(null,seq__15107_15179__$1);
var G__15181 = cljs.core.chunk_rest.call(null,seq__15107_15179__$1);
var G__15182 = c__4421__auto___15180;
var G__15183 = cljs.core.count.call(null,c__4421__auto___15180);
var G__15184 = (0);
seq__15107_15143 = G__15181;
chunk__15108_15144 = G__15182;
count__15109_15145 = G__15183;
i__15110_15146 = G__15184;
continue;
} else {
var map__15135_15185 = cljs.core.first.call(null,seq__15107_15179__$1);
var map__15135_15186__$1 = (((((!((map__15135_15185 == null))))?(((((map__15135_15185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15135_15185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15135_15185):map__15135_15185);
var ts_15187 = cljs.core.get.call(null,map__15135_15186__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__15136_15188 = cljs.core.get.call(null,map__15135_15186__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__15136_15189__$1 = (((((!((map__15136_15188 == null))))?(((((map__15136_15188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15136_15188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15136_15188):map__15136_15188);
var then_15190 = cljs.core.get.call(null,map__15136_15189__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__15139_15191 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_15187));
var chunk__15140_15192 = null;
var count__15141_15193 = (0);
var i__15142_15194 = (0);
while(true){
if((i__15142_15194 < count__15141_15193)){
var test_15195 = cljs.core._nth.call(null,chunk__15140_15192,i__15142_15194);
cljs.compiler.emitln.call(null,"case ",test_15195,":");


var G__15196 = seq__15139_15191;
var G__15197 = chunk__15140_15192;
var G__15198 = count__15141_15193;
var G__15199 = (i__15142_15194 + (1));
seq__15139_15191 = G__15196;
chunk__15140_15192 = G__15197;
count__15141_15193 = G__15198;
i__15142_15194 = G__15199;
continue;
} else {
var temp__5720__auto___15200__$1 = cljs.core.seq.call(null,seq__15139_15191);
if(temp__5720__auto___15200__$1){
var seq__15139_15201__$1 = temp__5720__auto___15200__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15139_15201__$1)){
var c__4421__auto___15202 = cljs.core.chunk_first.call(null,seq__15139_15201__$1);
var G__15203 = cljs.core.chunk_rest.call(null,seq__15139_15201__$1);
var G__15204 = c__4421__auto___15202;
var G__15205 = cljs.core.count.call(null,c__4421__auto___15202);
var G__15206 = (0);
seq__15139_15191 = G__15203;
chunk__15140_15192 = G__15204;
count__15141_15193 = G__15205;
i__15142_15194 = G__15206;
continue;
} else {
var test_15207 = cljs.core.first.call(null,seq__15139_15201__$1);
cljs.compiler.emitln.call(null,"case ",test_15207,":");


var G__15208 = cljs.core.next.call(null,seq__15139_15201__$1);
var G__15209 = null;
var G__15210 = (0);
var G__15211 = (0);
seq__15139_15191 = G__15208;
chunk__15140_15192 = G__15209;
count__15141_15193 = G__15210;
i__15142_15194 = G__15211;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_15190);
} else {
cljs.compiler.emitln.call(null,then_15190);
}

cljs.compiler.emitln.call(null,"break;");


var G__15212 = cljs.core.next.call(null,seq__15107_15179__$1);
var G__15213 = null;
var G__15214 = (0);
var G__15215 = (0);
seq__15107_15143 = G__15212;
chunk__15108_15144 = G__15213;
count__15109_15145 = G__15214;
i__15110_15146 = G__15215;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__15216){
var map__15217 = p__15216;
var map__15217__$1 = (((((!((map__15217 == null))))?(((((map__15217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15217):map__15217);
var throw$ = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__15217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15220 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__15220,(0),null);
var rstr = cljs.core.nth.call(null,vec__15220,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__15220,fstr,rstr,ret_t,axstr){
return (function (p1__15219_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15219_SHARP_);
});})(idx,vec__15220,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__15223 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__15223,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__15223;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
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
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__15224_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__15224_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__15225 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15226 = cljs.core.seq.call(null,vec__15225);
var first__15227 = cljs.core.first.call(null,seq__15226);
var seq__15226__$1 = cljs.core.next.call(null,seq__15226);
var p = first__15227;
var first__15227__$1 = cljs.core.first.call(null,seq__15226__$1);
var seq__15226__$2 = cljs.core.next.call(null,seq__15226__$1);
var ts = first__15227__$1;
var first__15227__$2 = cljs.core.first.call(null,seq__15226__$2);
var seq__15226__$3 = cljs.core.next.call(null,seq__15226__$2);
var n = first__15227__$2;
var xs = seq__15226__$3;
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3991__auto__){
var and__3991__auto____$1 = ts;
if(cljs.core.truth_(and__3991__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__15228 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__15229 = cljs.core.seq.call(null,vec__15228);
var first__15230 = cljs.core.first.call(null,seq__15229);
var seq__15229__$1 = cljs.core.next.call(null,seq__15229);
var p = first__15230;
var first__15230__$1 = cljs.core.first.call(null,seq__15229__$1);
var seq__15229__$2 = cljs.core.next.call(null,seq__15229__$1);
var ts = first__15230__$1;
var xs = seq__15229__$2;
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3991__auto__){
var and__3991__auto____$1 = ts;
if(cljs.core.truth_(and__3991__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
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
var G__15233 = arguments.length;
switch (G__15233) {
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
var vec__15241 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__15231_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__15231_SHARP_);
} else {
return p1__15231_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__15242 = cljs.core.seq.call(null,vec__15241);
var first__15243 = cljs.core.first.call(null,seq__15242);
var seq__15242__$1 = cljs.core.next.call(null,seq__15242);
var x = first__15243;
var ys = seq__15242__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__15244 = cljs.core.seq.call(null,ys);
var chunk__15245 = null;
var count__15246 = (0);
var i__15247 = (0);
while(true){
if((i__15247 < count__15246)){
var next_line = cljs.core._nth.call(null,chunk__15245,i__15247);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15253 = seq__15244;
var G__15254 = chunk__15245;
var G__15255 = count__15246;
var G__15256 = (i__15247 + (1));
seq__15244 = G__15253;
chunk__15245 = G__15254;
count__15246 = G__15255;
i__15247 = G__15256;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15244);
if(temp__5720__auto__){
var seq__15244__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15244__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__15244__$1);
var G__15257 = cljs.core.chunk_rest.call(null,seq__15244__$1);
var G__15258 = c__4421__auto__;
var G__15259 = cljs.core.count.call(null,c__4421__auto__);
var G__15260 = (0);
seq__15244 = G__15257;
chunk__15245 = G__15258;
count__15246 = G__15259;
i__15247 = G__15260;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__15244__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__15261 = cljs.core.next.call(null,seq__15244__$1);
var G__15262 = null;
var G__15263 = (0);
var G__15264 = (0);
seq__15244 = G__15261;
chunk__15245 = G__15262;
count__15246 = G__15263;
i__15247 = G__15264;
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

var seq__15248_15265 = cljs.core.seq.call(null,docs__$2);
var chunk__15249_15266 = null;
var count__15250_15267 = (0);
var i__15251_15268 = (0);
while(true){
if((i__15251_15268 < count__15250_15267)){
var e_15269 = cljs.core._nth.call(null,chunk__15249_15266,i__15251_15268);
if(cljs.core.truth_(e_15269)){
print_comment_lines.call(null,e_15269);
} else {
}


var G__15270 = seq__15248_15265;
var G__15271 = chunk__15249_15266;
var G__15272 = count__15250_15267;
var G__15273 = (i__15251_15268 + (1));
seq__15248_15265 = G__15270;
chunk__15249_15266 = G__15271;
count__15250_15267 = G__15272;
i__15251_15268 = G__15273;
continue;
} else {
var temp__5720__auto___15274 = cljs.core.seq.call(null,seq__15248_15265);
if(temp__5720__auto___15274){
var seq__15248_15275__$1 = temp__5720__auto___15274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15248_15275__$1)){
var c__4421__auto___15276 = cljs.core.chunk_first.call(null,seq__15248_15275__$1);
var G__15277 = cljs.core.chunk_rest.call(null,seq__15248_15275__$1);
var G__15278 = c__4421__auto___15276;
var G__15279 = cljs.core.count.call(null,c__4421__auto___15276);
var G__15280 = (0);
seq__15248_15265 = G__15277;
chunk__15249_15266 = G__15278;
count__15250_15267 = G__15279;
i__15251_15268 = G__15280;
continue;
} else {
var e_15281 = cljs.core.first.call(null,seq__15248_15275__$1);
if(cljs.core.truth_(e_15281)){
print_comment_lines.call(null,e_15281);
} else {
}


var G__15282 = cljs.core.next.call(null,seq__15248_15275__$1);
var G__15283 = null;
var G__15284 = (0);
var G__15285 = (0);
seq__15248_15265 = G__15282;
chunk__15249_15266 = G__15283;
count__15250_15267 = G__15284;
i__15251_15268 = G__15285;
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
var and__3991__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__15287_SHARP_){
return goog.string.startsWith(p1__15287_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = opts;
if(cljs.core.truth_(and__3991__auto____$1)){
var and__3991__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3991__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3991__auto____$2;
}
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__15288){
var map__15289 = p__15288;
var map__15289__$1 = (((((!((map__15289 == null))))?(((((map__15289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15289):map__15289);
var doc = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__15289__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4002__auto__ = init;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
cljs.compiler.emits.call(null," = ",(function (){var temp__5718__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5718__auto__)){
var define = temp__5718__auto__;
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

if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3991__auto__){
return test;
} else {
return and__3991__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__15291){
var map__15292 = p__15291;
var map__15292__$1 = (((((!((map__15292 == null))))?(((((map__15292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15292):map__15292);
var name = cljs.core.get.call(null,map__15292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15292__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__15294_15318 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__15295_15319 = null;
var count__15296_15320 = (0);
var i__15297_15321 = (0);
while(true){
if((i__15297_15321 < count__15296_15320)){
var vec__15304_15322 = cljs.core._nth.call(null,chunk__15295_15319,i__15297_15321);
var i_15323 = cljs.core.nth.call(null,vec__15304_15322,(0),null);
var param_15324 = cljs.core.nth.call(null,vec__15304_15322,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15324);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15325 = seq__15294_15318;
var G__15326 = chunk__15295_15319;
var G__15327 = count__15296_15320;
var G__15328 = (i__15297_15321 + (1));
seq__15294_15318 = G__15325;
chunk__15295_15319 = G__15326;
count__15296_15320 = G__15327;
i__15297_15321 = G__15328;
continue;
} else {
var temp__5720__auto___15329 = cljs.core.seq.call(null,seq__15294_15318);
if(temp__5720__auto___15329){
var seq__15294_15330__$1 = temp__5720__auto___15329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15294_15330__$1)){
var c__4421__auto___15331 = cljs.core.chunk_first.call(null,seq__15294_15330__$1);
var G__15332 = cljs.core.chunk_rest.call(null,seq__15294_15330__$1);
var G__15333 = c__4421__auto___15331;
var G__15334 = cljs.core.count.call(null,c__4421__auto___15331);
var G__15335 = (0);
seq__15294_15318 = G__15332;
chunk__15295_15319 = G__15333;
count__15296_15320 = G__15334;
i__15297_15321 = G__15335;
continue;
} else {
var vec__15307_15336 = cljs.core.first.call(null,seq__15294_15330__$1);
var i_15337 = cljs.core.nth.call(null,vec__15307_15336,(0),null);
var param_15338 = cljs.core.nth.call(null,vec__15307_15336,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_15338);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__15339 = cljs.core.next.call(null,seq__15294_15330__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__15294_15318 = G__15339;
chunk__15295_15319 = G__15340;
count__15296_15320 = G__15341;
i__15297_15321 = G__15342;
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

var seq__15310_15343 = cljs.core.seq.call(null,params);
var chunk__15311_15344 = null;
var count__15312_15345 = (0);
var i__15313_15346 = (0);
while(true){
if((i__15313_15346 < count__15312_15345)){
var param_15347 = cljs.core._nth.call(null,chunk__15311_15344,i__15313_15346);
cljs.compiler.emit.call(null,param_15347);

if(cljs.core._EQ_.call(null,param_15347,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15348 = seq__15310_15343;
var G__15349 = chunk__15311_15344;
var G__15350 = count__15312_15345;
var G__15351 = (i__15313_15346 + (1));
seq__15310_15343 = G__15348;
chunk__15311_15344 = G__15349;
count__15312_15345 = G__15350;
i__15313_15346 = G__15351;
continue;
} else {
var temp__5720__auto___15352 = cljs.core.seq.call(null,seq__15310_15343);
if(temp__5720__auto___15352){
var seq__15310_15353__$1 = temp__5720__auto___15352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15310_15353__$1)){
var c__4421__auto___15354 = cljs.core.chunk_first.call(null,seq__15310_15353__$1);
var G__15355 = cljs.core.chunk_rest.call(null,seq__15310_15353__$1);
var G__15356 = c__4421__auto___15354;
var G__15357 = cljs.core.count.call(null,c__4421__auto___15354);
var G__15358 = (0);
seq__15310_15343 = G__15355;
chunk__15311_15344 = G__15356;
count__15312_15345 = G__15357;
i__15313_15346 = G__15358;
continue;
} else {
var param_15359 = cljs.core.first.call(null,seq__15310_15353__$1);
cljs.compiler.emit.call(null,param_15359);

if(cljs.core._EQ_.call(null,param_15359,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15360 = cljs.core.next.call(null,seq__15310_15353__$1);
var G__15361 = null;
var G__15362 = (0);
var G__15363 = (0);
seq__15310_15343 = G__15360;
chunk__15311_15344 = G__15361;
count__15312_15345 = G__15362;
i__15313_15346 = G__15363;
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

var seq__15314_15364 = cljs.core.seq.call(null,params);
var chunk__15315_15365 = null;
var count__15316_15366 = (0);
var i__15317_15367 = (0);
while(true){
if((i__15317_15367 < count__15316_15366)){
var param_15368 = cljs.core._nth.call(null,chunk__15315_15365,i__15317_15367);
cljs.compiler.emit.call(null,param_15368);

if(cljs.core._EQ_.call(null,param_15368,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15369 = seq__15314_15364;
var G__15370 = chunk__15315_15365;
var G__15371 = count__15316_15366;
var G__15372 = (i__15317_15367 + (1));
seq__15314_15364 = G__15369;
chunk__15315_15365 = G__15370;
count__15316_15366 = G__15371;
i__15317_15367 = G__15372;
continue;
} else {
var temp__5720__auto___15373 = cljs.core.seq.call(null,seq__15314_15364);
if(temp__5720__auto___15373){
var seq__15314_15374__$1 = temp__5720__auto___15373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15314_15374__$1)){
var c__4421__auto___15375 = cljs.core.chunk_first.call(null,seq__15314_15374__$1);
var G__15376 = cljs.core.chunk_rest.call(null,seq__15314_15374__$1);
var G__15377 = c__4421__auto___15375;
var G__15378 = cljs.core.count.call(null,c__4421__auto___15375);
var G__15379 = (0);
seq__15314_15364 = G__15376;
chunk__15315_15365 = G__15377;
count__15316_15366 = G__15378;
i__15317_15367 = G__15379;
continue;
} else {
var param_15380 = cljs.core.first.call(null,seq__15314_15374__$1);
cljs.compiler.emit.call(null,param_15380);

if(cljs.core._EQ_.call(null,param_15380,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15381 = cljs.core.next.call(null,seq__15314_15374__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__15314_15364 = G__15381;
chunk__15315_15365 = G__15382;
count__15316_15366 = G__15383;
i__15317_15367 = G__15384;
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
var seq__15385 = cljs.core.seq.call(null,params);
var chunk__15386 = null;
var count__15387 = (0);
var i__15388 = (0);
while(true){
if((i__15388 < count__15387)){
var param = cljs.core._nth.call(null,chunk__15386,i__15388);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15389 = seq__15385;
var G__15390 = chunk__15386;
var G__15391 = count__15387;
var G__15392 = (i__15388 + (1));
seq__15385 = G__15389;
chunk__15386 = G__15390;
count__15387 = G__15391;
i__15388 = G__15392;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15385);
if(temp__5720__auto__){
var seq__15385__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15385__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__15385__$1);
var G__15393 = cljs.core.chunk_rest.call(null,seq__15385__$1);
var G__15394 = c__4421__auto__;
var G__15395 = cljs.core.count.call(null,c__4421__auto__);
var G__15396 = (0);
seq__15385 = G__15393;
chunk__15386 = G__15394;
count__15387 = G__15395;
i__15388 = G__15396;
continue;
} else {
var param = cljs.core.first.call(null,seq__15385__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15397 = cljs.core.next.call(null,seq__15385__$1);
var G__15398 = null;
var G__15399 = (0);
var G__15400 = (0);
seq__15385 = G__15397;
chunk__15386 = G__15398;
count__15387 = G__15399;
i__15388 = G__15400;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15401){
var map__15402 = p__15401;
var map__15402__$1 = (((((!((map__15402 == null))))?(((((map__15402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15402):map__15402);
var expr = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15402__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15404){
var map__15405 = p__15404;
var map__15405__$1 = (((((!((map__15405 == null))))?(((((map__15405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15405):map__15405);
var f = map__15405__$1;
var expr = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15405__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15415__$1 = (function (){var or__4002__auto__ = name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15416 = cljs.compiler.munge.call(null,name_15415__$1);
var delegate_name_15417 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15416),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15417," = function (");

var seq__15407_15418 = cljs.core.seq.call(null,params);
var chunk__15408_15419 = null;
var count__15409_15420 = (0);
var i__15410_15421 = (0);
while(true){
if((i__15410_15421 < count__15409_15420)){
var param_15422 = cljs.core._nth.call(null,chunk__15408_15419,i__15410_15421);
cljs.compiler.emit.call(null,param_15422);

if(cljs.core._EQ_.call(null,param_15422,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15423 = seq__15407_15418;
var G__15424 = chunk__15408_15419;
var G__15425 = count__15409_15420;
var G__15426 = (i__15410_15421 + (1));
seq__15407_15418 = G__15423;
chunk__15408_15419 = G__15424;
count__15409_15420 = G__15425;
i__15410_15421 = G__15426;
continue;
} else {
var temp__5720__auto___15427 = cljs.core.seq.call(null,seq__15407_15418);
if(temp__5720__auto___15427){
var seq__15407_15428__$1 = temp__5720__auto___15427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15407_15428__$1)){
var c__4421__auto___15429 = cljs.core.chunk_first.call(null,seq__15407_15428__$1);
var G__15430 = cljs.core.chunk_rest.call(null,seq__15407_15428__$1);
var G__15431 = c__4421__auto___15429;
var G__15432 = cljs.core.count.call(null,c__4421__auto___15429);
var G__15433 = (0);
seq__15407_15418 = G__15430;
chunk__15408_15419 = G__15431;
count__15409_15420 = G__15432;
i__15410_15421 = G__15433;
continue;
} else {
var param_15434 = cljs.core.first.call(null,seq__15407_15428__$1);
cljs.compiler.emit.call(null,param_15434);

if(cljs.core._EQ_.call(null,param_15434,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15435 = cljs.core.next.call(null,seq__15407_15428__$1);
var G__15436 = null;
var G__15437 = (0);
var G__15438 = (0);
seq__15407_15418 = G__15435;
chunk__15408_15419 = G__15436;
count__15409_15420 = G__15437;
i__15410_15421 = G__15438;
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

cljs.compiler.emitln.call(null,"var ",mname_15416," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15439 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15439,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15417,".call(this,");

var seq__15411_15440 = cljs.core.seq.call(null,params);
var chunk__15412_15441 = null;
var count__15413_15442 = (0);
var i__15414_15443 = (0);
while(true){
if((i__15414_15443 < count__15413_15442)){
var param_15444 = cljs.core._nth.call(null,chunk__15412_15441,i__15414_15443);
cljs.compiler.emit.call(null,param_15444);

if(cljs.core._EQ_.call(null,param_15444,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15445 = seq__15411_15440;
var G__15446 = chunk__15412_15441;
var G__15447 = count__15413_15442;
var G__15448 = (i__15414_15443 + (1));
seq__15411_15440 = G__15445;
chunk__15412_15441 = G__15446;
count__15413_15442 = G__15447;
i__15414_15443 = G__15448;
continue;
} else {
var temp__5720__auto___15449 = cljs.core.seq.call(null,seq__15411_15440);
if(temp__5720__auto___15449){
var seq__15411_15450__$1 = temp__5720__auto___15449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15411_15450__$1)){
var c__4421__auto___15451 = cljs.core.chunk_first.call(null,seq__15411_15450__$1);
var G__15452 = cljs.core.chunk_rest.call(null,seq__15411_15450__$1);
var G__15453 = c__4421__auto___15451;
var G__15454 = cljs.core.count.call(null,c__4421__auto___15451);
var G__15455 = (0);
seq__15411_15440 = G__15452;
chunk__15412_15441 = G__15453;
count__15413_15442 = G__15454;
i__15414_15443 = G__15455;
continue;
} else {
var param_15456 = cljs.core.first.call(null,seq__15411_15450__$1);
cljs.compiler.emit.call(null,param_15456);

if(cljs.core._EQ_.call(null,param_15456,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15457 = cljs.core.next.call(null,seq__15411_15450__$1);
var G__15458 = null;
var G__15459 = (0);
var G__15460 = (0);
seq__15411_15440 = G__15457;
chunk__15412_15441 = G__15458;
count__15413_15442 = G__15459;
i__15414_15443 = G__15460;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15416,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15416,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15415__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15416,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15417,";");

cljs.compiler.emitln.call(null,"return ",mname_15416,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15464){
var map__15465 = p__15464;
var map__15465__$1 = (((((!((map__15465 == null))))?(((((map__15465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15465):map__15465);
var variadic = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15465__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15461_SHARP_){
var and__3991__auto__ = p1__15461_SHARP_;
if(cljs.core.truth_(and__3991__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15461_SHARP_));
} else {
return and__3991__auto__;
}
});})(map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_15518__$1 = (function (){var or__4002__auto__ = name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15519 = cljs.compiler.munge.call(null,name_15518__$1);
var maxparams_15520 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15521 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15518__$1,mname_15519,maxparams_15520,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15519),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15518__$1,mname_15519,maxparams_15520,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_15522 = cljs.core.sort_by.call(null,((function (name_15518__$1,mname_15519,maxparams_15520,mmap_15521,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15462_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15462_SHARP_)));
});})(name_15518__$1,mname_15519,maxparams_15520,mmap_15521,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15521));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15519," = null;");

var seq__15467_15523 = cljs.core.seq.call(null,ms_15522);
var chunk__15468_15524 = null;
var count__15469_15525 = (0);
var i__15470_15526 = (0);
while(true){
if((i__15470_15526 < count__15469_15525)){
var vec__15477_15527 = cljs.core._nth.call(null,chunk__15468_15524,i__15470_15526);
var n_15528 = cljs.core.nth.call(null,vec__15477_15527,(0),null);
var meth_15529 = cljs.core.nth.call(null,vec__15477_15527,(1),null);
cljs.compiler.emits.call(null,"var ",n_15528," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15529))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15529);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15529);
}

cljs.compiler.emitln.call(null,";");


var G__15530 = seq__15467_15523;
var G__15531 = chunk__15468_15524;
var G__15532 = count__15469_15525;
var G__15533 = (i__15470_15526 + (1));
seq__15467_15523 = G__15530;
chunk__15468_15524 = G__15531;
count__15469_15525 = G__15532;
i__15470_15526 = G__15533;
continue;
} else {
var temp__5720__auto___15534 = cljs.core.seq.call(null,seq__15467_15523);
if(temp__5720__auto___15534){
var seq__15467_15535__$1 = temp__5720__auto___15534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15467_15535__$1)){
var c__4421__auto___15536 = cljs.core.chunk_first.call(null,seq__15467_15535__$1);
var G__15537 = cljs.core.chunk_rest.call(null,seq__15467_15535__$1);
var G__15538 = c__4421__auto___15536;
var G__15539 = cljs.core.count.call(null,c__4421__auto___15536);
var G__15540 = (0);
seq__15467_15523 = G__15537;
chunk__15468_15524 = G__15538;
count__15469_15525 = G__15539;
i__15470_15526 = G__15540;
continue;
} else {
var vec__15480_15541 = cljs.core.first.call(null,seq__15467_15535__$1);
var n_15542 = cljs.core.nth.call(null,vec__15480_15541,(0),null);
var meth_15543 = cljs.core.nth.call(null,vec__15480_15541,(1),null);
cljs.compiler.emits.call(null,"var ",n_15542," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15543))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15543);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15543);
}

cljs.compiler.emitln.call(null,";");


var G__15544 = cljs.core.next.call(null,seq__15467_15535__$1);
var G__15545 = null;
var G__15546 = (0);
var G__15547 = (0);
seq__15467_15523 = G__15544;
chunk__15468_15524 = G__15545;
count__15469_15525 = G__15546;
i__15470_15526 = G__15547;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15519," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15520),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15520)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15520));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15483_15548 = cljs.core.seq.call(null,ms_15522);
var chunk__15484_15549 = null;
var count__15485_15550 = (0);
var i__15486_15551 = (0);
while(true){
if((i__15486_15551 < count__15485_15550)){
var vec__15493_15552 = cljs.core._nth.call(null,chunk__15484_15549,i__15486_15551);
var n_15553 = cljs.core.nth.call(null,vec__15493_15552,(0),null);
var meth_15554 = cljs.core.nth.call(null,vec__15493_15552,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15554))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15555 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15555," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15556 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15555," = new cljs.core.IndexedSeq(",a_15556,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15553,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15520)),(((cljs.core.count.call(null,maxparams_15520) > (1)))?", ":null),restarg_15555,");");
} else {
var pcnt_15557 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15554));
cljs.compiler.emitln.call(null,"case ",pcnt_15557,":");

cljs.compiler.emitln.call(null,"return ",n_15553,".call(this",(((pcnt_15557 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15557,maxparams_15520)),null,(1),null)),(2),null))),");");
}


var G__15558 = seq__15483_15548;
var G__15559 = chunk__15484_15549;
var G__15560 = count__15485_15550;
var G__15561 = (i__15486_15551 + (1));
seq__15483_15548 = G__15558;
chunk__15484_15549 = G__15559;
count__15485_15550 = G__15560;
i__15486_15551 = G__15561;
continue;
} else {
var temp__5720__auto___15562 = cljs.core.seq.call(null,seq__15483_15548);
if(temp__5720__auto___15562){
var seq__15483_15563__$1 = temp__5720__auto___15562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15483_15563__$1)){
var c__4421__auto___15564 = cljs.core.chunk_first.call(null,seq__15483_15563__$1);
var G__15565 = cljs.core.chunk_rest.call(null,seq__15483_15563__$1);
var G__15566 = c__4421__auto___15564;
var G__15567 = cljs.core.count.call(null,c__4421__auto___15564);
var G__15568 = (0);
seq__15483_15548 = G__15565;
chunk__15484_15549 = G__15566;
count__15485_15550 = G__15567;
i__15486_15551 = G__15568;
continue;
} else {
var vec__15496_15569 = cljs.core.first.call(null,seq__15483_15563__$1);
var n_15570 = cljs.core.nth.call(null,vec__15496_15569,(0),null);
var meth_15571 = cljs.core.nth.call(null,vec__15496_15569,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15571))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15572 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15572," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15573 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15572," = new cljs.core.IndexedSeq(",a_15573,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15570,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15520)),(((cljs.core.count.call(null,maxparams_15520) > (1)))?", ":null),restarg_15572,");");
} else {
var pcnt_15574 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15571));
cljs.compiler.emitln.call(null,"case ",pcnt_15574,":");

cljs.compiler.emitln.call(null,"return ",n_15570,".call(this",(((pcnt_15574 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15574,maxparams_15520)),null,(1),null)),(2),null))),");");
}


var G__15575 = cljs.core.next.call(null,seq__15483_15563__$1);
var G__15576 = null;
var G__15577 = (0);
var G__15578 = (0);
seq__15483_15548 = G__15575;
chunk__15484_15549 = G__15576;
count__15485_15550 = G__15577;
i__15486_15551 = G__15578;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15579 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15522)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15579,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15519,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15519,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15518__$1,mname_15519,maxparams_15520,mmap_15521,ms_15522,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__15463_SHARP_){
var vec__15499 = p1__15463_SHARP_;
var n = cljs.core.nth.call(null,vec__15499,(0),null);
var m = cljs.core.nth.call(null,vec__15499,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15518__$1,mname_15519,maxparams_15520,mmap_15521,ms_15522,loop_locals,map__15465,map__15465__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_15522),".cljs$lang$applyTo;");
} else {
}

var seq__15502_15580 = cljs.core.seq.call(null,ms_15522);
var chunk__15503_15581 = null;
var count__15504_15582 = (0);
var i__15505_15583 = (0);
while(true){
if((i__15505_15583 < count__15504_15582)){
var vec__15512_15584 = cljs.core._nth.call(null,chunk__15503_15581,i__15505_15583);
var n_15585 = cljs.core.nth.call(null,vec__15512_15584,(0),null);
var meth_15586 = cljs.core.nth.call(null,vec__15512_15584,(1),null);
var c_15587 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15586));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15586))){
cljs.compiler.emitln.call(null,mname_15519,".cljs$core$IFn$_invoke$arity$variadic = ",n_15585,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15519,".cljs$core$IFn$_invoke$arity$",c_15587," = ",n_15585,";");
}


var G__15588 = seq__15502_15580;
var G__15589 = chunk__15503_15581;
var G__15590 = count__15504_15582;
var G__15591 = (i__15505_15583 + (1));
seq__15502_15580 = G__15588;
chunk__15503_15581 = G__15589;
count__15504_15582 = G__15590;
i__15505_15583 = G__15591;
continue;
} else {
var temp__5720__auto___15592 = cljs.core.seq.call(null,seq__15502_15580);
if(temp__5720__auto___15592){
var seq__15502_15593__$1 = temp__5720__auto___15592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15502_15593__$1)){
var c__4421__auto___15594 = cljs.core.chunk_first.call(null,seq__15502_15593__$1);
var G__15595 = cljs.core.chunk_rest.call(null,seq__15502_15593__$1);
var G__15596 = c__4421__auto___15594;
var G__15597 = cljs.core.count.call(null,c__4421__auto___15594);
var G__15598 = (0);
seq__15502_15580 = G__15595;
chunk__15503_15581 = G__15596;
count__15504_15582 = G__15597;
i__15505_15583 = G__15598;
continue;
} else {
var vec__15515_15599 = cljs.core.first.call(null,seq__15502_15593__$1);
var n_15600 = cljs.core.nth.call(null,vec__15515_15599,(0),null);
var meth_15601 = cljs.core.nth.call(null,vec__15515_15599,(1),null);
var c_15602 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15601));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_15601))){
cljs.compiler.emitln.call(null,mname_15519,".cljs$core$IFn$_invoke$arity$variadic = ",n_15600,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15519,".cljs$core$IFn$_invoke$arity$",c_15602," = ",n_15600,";");
}


var G__15603 = cljs.core.next.call(null,seq__15502_15593__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15502_15580 = G__15603;
chunk__15503_15581 = G__15604;
count__15504_15582 = G__15605;
i__15505_15583 = G__15606;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15519,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15607){
var map__15608 = p__15607;
var map__15608__$1 = (((((!((map__15608 == null))))?(((((map__15608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15608):map__15608);
var statements = cljs.core.get.call(null,map__15608__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15608__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15608__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__15610_15614 = cljs.core.seq.call(null,statements);
var chunk__15611_15615 = null;
var count__15612_15616 = (0);
var i__15613_15617 = (0);
while(true){
if((i__15613_15617 < count__15612_15616)){
var s_15618 = cljs.core._nth.call(null,chunk__15611_15615,i__15613_15617);
cljs.compiler.emitln.call(null,s_15618);


var G__15619 = seq__15610_15614;
var G__15620 = chunk__15611_15615;
var G__15621 = count__15612_15616;
var G__15622 = (i__15613_15617 + (1));
seq__15610_15614 = G__15619;
chunk__15611_15615 = G__15620;
count__15612_15616 = G__15621;
i__15613_15617 = G__15622;
continue;
} else {
var temp__5720__auto___15623 = cljs.core.seq.call(null,seq__15610_15614);
if(temp__5720__auto___15623){
var seq__15610_15624__$1 = temp__5720__auto___15623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15610_15624__$1)){
var c__4421__auto___15625 = cljs.core.chunk_first.call(null,seq__15610_15624__$1);
var G__15626 = cljs.core.chunk_rest.call(null,seq__15610_15624__$1);
var G__15627 = c__4421__auto___15625;
var G__15628 = cljs.core.count.call(null,c__4421__auto___15625);
var G__15629 = (0);
seq__15610_15614 = G__15626;
chunk__15611_15615 = G__15627;
count__15612_15616 = G__15628;
i__15613_15617 = G__15629;
continue;
} else {
var s_15630 = cljs.core.first.call(null,seq__15610_15624__$1);
cljs.compiler.emitln.call(null,s_15630);


var G__15631 = cljs.core.next.call(null,seq__15610_15624__$1);
var G__15632 = null;
var G__15633 = (0);
var G__15634 = (0);
seq__15610_15614 = G__15631;
chunk__15611_15615 = G__15632;
count__15612_15616 = G__15633;
i__15613_15617 = G__15634;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15635){
var map__15636 = p__15635;
var map__15636__$1 = (((((!((map__15636 == null))))?(((((map__15636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15636):map__15636);
var try$ = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4002__auto__ = name;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15638,is_loop){
var map__15639 = p__15638;
var map__15639__$1 = (((((!((map__15639 == null))))?(((((map__15639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15639):map__15639);
var expr = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__15641_15655 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__15642_15656 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__15641_15655,context,map__15639,map__15639__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__15641_15655,context,map__15639,map__15639__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__15642_15656;

try{var seq__15643_15657 = cljs.core.seq.call(null,bindings);
var chunk__15644_15658 = null;
var count__15645_15659 = (0);
var i__15646_15660 = (0);
while(true){
if((i__15646_15660 < count__15645_15659)){
var map__15651_15661 = cljs.core._nth.call(null,chunk__15644_15658,i__15646_15660);
var map__15651_15662__$1 = (((((!((map__15651_15661 == null))))?(((((map__15651_15661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15651_15661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15651_15661):map__15651_15661);
var binding_15663 = map__15651_15662__$1;
var init_15664 = cljs.core.get.call(null,map__15651_15662__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15663);

cljs.compiler.emitln.call(null," = ",init_15664,";");


var G__15665 = seq__15643_15657;
var G__15666 = chunk__15644_15658;
var G__15667 = count__15645_15659;
var G__15668 = (i__15646_15660 + (1));
seq__15643_15657 = G__15665;
chunk__15644_15658 = G__15666;
count__15645_15659 = G__15667;
i__15646_15660 = G__15668;
continue;
} else {
var temp__5720__auto___15669 = cljs.core.seq.call(null,seq__15643_15657);
if(temp__5720__auto___15669){
var seq__15643_15670__$1 = temp__5720__auto___15669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15643_15670__$1)){
var c__4421__auto___15671 = cljs.core.chunk_first.call(null,seq__15643_15670__$1);
var G__15672 = cljs.core.chunk_rest.call(null,seq__15643_15670__$1);
var G__15673 = c__4421__auto___15671;
var G__15674 = cljs.core.count.call(null,c__4421__auto___15671);
var G__15675 = (0);
seq__15643_15657 = G__15672;
chunk__15644_15658 = G__15673;
count__15645_15659 = G__15674;
i__15646_15660 = G__15675;
continue;
} else {
var map__15653_15676 = cljs.core.first.call(null,seq__15643_15670__$1);
var map__15653_15677__$1 = (((((!((map__15653_15676 == null))))?(((((map__15653_15676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15653_15676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15653_15676):map__15653_15676);
var binding_15678 = map__15653_15677__$1;
var init_15679 = cljs.core.get.call(null,map__15653_15677__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15678);

cljs.compiler.emitln.call(null," = ",init_15679,";");


var G__15680 = cljs.core.next.call(null,seq__15643_15670__$1);
var G__15681 = null;
var G__15682 = (0);
var G__15683 = (0);
seq__15643_15657 = G__15680;
chunk__15644_15658 = G__15681;
count__15645_15659 = G__15682;
i__15646_15660 = G__15683;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__15641_15655;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15684){
var map__15685 = p__15684;
var map__15685__$1 = (((((!((map__15685 == null))))?(((((map__15685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15685):map__15685);
var frame = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4478__auto___15687 = cljs.core.count.call(null,exprs);
var i_15688 = (0);
while(true){
if((i_15688 < n__4478__auto___15687)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15688)," = ",exprs.call(null,i_15688),";");

var G__15689 = (i_15688 + (1));
i_15688 = G__15689;
continue;
} else {
}
break;
}

var n__4478__auto___15690 = cljs.core.count.call(null,exprs);
var i_15691 = (0);
while(true){
if((i_15691 < n__4478__auto___15690)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15691))," = ",temps.call(null,i_15691),";");

var G__15692 = (i_15691 + (1));
i_15691 = G__15692;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15693){
var map__15694 = p__15693;
var map__15694__$1 = (((((!((map__15694 == null))))?(((((map__15694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15694):map__15694);
var expr = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__15694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15696_15708 = cljs.core.seq.call(null,bindings);
var chunk__15697_15709 = null;
var count__15698_15710 = (0);
var i__15699_15711 = (0);
while(true){
if((i__15699_15711 < count__15698_15710)){
var map__15704_15712 = cljs.core._nth.call(null,chunk__15697_15709,i__15699_15711);
var map__15704_15713__$1 = (((((!((map__15704_15712 == null))))?(((((map__15704_15712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15704_15712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15704_15712):map__15704_15712);
var binding_15714 = map__15704_15713__$1;
var init_15715 = cljs.core.get.call(null,map__15704_15713__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15714)," = ",init_15715,";");


var G__15716 = seq__15696_15708;
var G__15717 = chunk__15697_15709;
var G__15718 = count__15698_15710;
var G__15719 = (i__15699_15711 + (1));
seq__15696_15708 = G__15716;
chunk__15697_15709 = G__15717;
count__15698_15710 = G__15718;
i__15699_15711 = G__15719;
continue;
} else {
var temp__5720__auto___15720 = cljs.core.seq.call(null,seq__15696_15708);
if(temp__5720__auto___15720){
var seq__15696_15721__$1 = temp__5720__auto___15720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15696_15721__$1)){
var c__4421__auto___15722 = cljs.core.chunk_first.call(null,seq__15696_15721__$1);
var G__15723 = cljs.core.chunk_rest.call(null,seq__15696_15721__$1);
var G__15724 = c__4421__auto___15722;
var G__15725 = cljs.core.count.call(null,c__4421__auto___15722);
var G__15726 = (0);
seq__15696_15708 = G__15723;
chunk__15697_15709 = G__15724;
count__15698_15710 = G__15725;
i__15699_15711 = G__15726;
continue;
} else {
var map__15706_15727 = cljs.core.first.call(null,seq__15696_15721__$1);
var map__15706_15728__$1 = (((((!((map__15706_15727 == null))))?(((((map__15706_15727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15706_15727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15706_15727):map__15706_15727);
var binding_15729 = map__15706_15728__$1;
var init_15730 = cljs.core.get.call(null,map__15706_15728__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15729)," = ",init_15730,";");


var G__15731 = cljs.core.next.call(null,seq__15696_15721__$1);
var G__15732 = null;
var G__15733 = (0);
var G__15734 = (0);
seq__15696_15708 = G__15731;
chunk__15697_15709 = G__15732;
count__15698_15710 = G__15733;
i__15699_15711 = G__15734;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15737){
var map__15738 = p__15737;
var map__15738__$1 = (((((!((map__15738 == null))))?(((((map__15738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15738):map__15738);
var expr = map__15738__$1;
var f = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3991__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3991__auto__){
var and__3991__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3991__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3991__auto__ = protocol;
if(cljs.core.truth_(and__3991__auto__)){
var and__3991__auto____$1 = tag;
if(cljs.core.truth_(and__3991__auto____$1)){
var or__4002__auto__ = (function (){var and__3991__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3991__auto____$2){
var and__3991__auto____$3 = protocol;
if(cljs.core.truth_(and__3991__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3991__auto____$3;
}
} else {
return and__3991__auto____$2;
}
})();
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var and__3991__auto____$2 = (function (){var or__4002__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4002__auto____$1){
return or__4002__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3991__auto____$2)){
var or__4002__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4002__auto____$1){
return or__4002__auto____$1;
} else {
var and__3991__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__3991__auto____$3){
var and__3991__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__3991__auto____$4){
var temp__5720__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5720__auto__)){
var ps = temp__5720__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3991__auto____$4;
}
} else {
return and__3991__auto____$3;
}
}
} else {
return and__3991__auto____$2;
}
}
} else {
return and__3991__auto____$1;
}
} else {
return and__3991__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4002__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = (function (){var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5720__auto__)){
var ns_str = temp__5720__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4002__auto____$1)){
return or__4002__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4002__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f));
if(or__4002__auto__){
return or__4002__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__15740 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3991__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3991__auto__)){
return (arity > mfa);
} else {
return and__3991__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env){
return (function (p1__15735_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15735_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env){
return (function (p1__15736_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15736_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15738,map__15738__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__15740,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__15740,(1),null);
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15743 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_15743,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15744 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_15744,args)),(((mfa_15744 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_15744,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4002__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
var or__4002__auto____$1 = js_QMARK_;
if(or__4002__auto____$1){
return or__4002__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__3991__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3991__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__3991__auto__;
}
})())){
var fprop_15745 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_15745," ? ",f__$1,fprop_15745,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_15745," ? ",f__$1,fprop_15745,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15746){
var map__15747 = p__15746;
var map__15747__$1 = (((((!((map__15747 == null))))?(((((map__15747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15747):map__15747);
var ctor = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15749){
var map__15750 = p__15749;
var map__15750__$1 = (((((!((map__15750 == null))))?(((((map__15750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15750):map__15750);
var target = cljs.core.get.call(null,map__15750__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__15750__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__15750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4002__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__15752 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15752__$1 = (((((!((map__15752 == null))))?(((((map__15752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15752):map__15752);
var options = cljs.core.get.call(null,map__15752__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__15752__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__15753 = options;
var map__15753__$1 = (((((!((map__15753 == null))))?(((((map__15753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15753):map__15753);
var target = cljs.core.get.call(null,map__15753__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__15753__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__15754 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__15759 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__15759__$1 = (((((!((map__15759 == null))))?(((((map__15759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15759):map__15759);
var node_libs = cljs.core.get.call(null,map__15759__$1,true);
var libs_to_load = cljs.core.get.call(null,map__15759__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__15754,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__15754,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__15761_15781 = cljs.core.seq.call(null,libs_to_load);
var chunk__15762_15782 = null;
var count__15763_15783 = (0);
var i__15764_15784 = (0);
while(true){
if((i__15764_15784 < count__15763_15783)){
var lib_15785 = cljs.core._nth.call(null,chunk__15762_15782,i__15764_15784);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15785)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15785),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15785),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15785),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15785),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15785,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15785),"');");
}

}
}
}


var G__15786 = seq__15761_15781;
var G__15787 = chunk__15762_15782;
var G__15788 = count__15763_15783;
var G__15789 = (i__15764_15784 + (1));
seq__15761_15781 = G__15786;
chunk__15762_15782 = G__15787;
count__15763_15783 = G__15788;
i__15764_15784 = G__15789;
continue;
} else {
var temp__5720__auto___15790 = cljs.core.seq.call(null,seq__15761_15781);
if(temp__5720__auto___15790){
var seq__15761_15791__$1 = temp__5720__auto___15790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15761_15791__$1)){
var c__4421__auto___15792 = cljs.core.chunk_first.call(null,seq__15761_15791__$1);
var G__15793 = cljs.core.chunk_rest.call(null,seq__15761_15791__$1);
var G__15794 = c__4421__auto___15792;
var G__15795 = cljs.core.count.call(null,c__4421__auto___15792);
var G__15796 = (0);
seq__15761_15781 = G__15793;
chunk__15762_15782 = G__15794;
count__15763_15783 = G__15795;
i__15764_15784 = G__15796;
continue;
} else {
var lib_15797 = cljs.core.first.call(null,seq__15761_15791__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15797)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15797),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15797),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4002__auto__)){
return or__4002__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15797),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15797),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15797,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15797),"');");
}

}
}
}


var G__15798 = cljs.core.next.call(null,seq__15761_15791__$1);
var G__15799 = null;
var G__15800 = (0);
var G__15801 = (0);
seq__15761_15781 = G__15798;
chunk__15762_15782 = G__15799;
count__15763_15783 = G__15800;
i__15764_15784 = G__15801;
continue;
}
} else {
}
}
break;
}

var seq__15765_15802 = cljs.core.seq.call(null,node_libs);
var chunk__15766_15803 = null;
var count__15767_15804 = (0);
var i__15768_15805 = (0);
while(true){
if((i__15768_15805 < count__15767_15804)){
var lib_15806 = cljs.core._nth.call(null,chunk__15766_15803,i__15768_15805);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15806)," = require('",lib_15806,"');");


var G__15807 = seq__15765_15802;
var G__15808 = chunk__15766_15803;
var G__15809 = count__15767_15804;
var G__15810 = (i__15768_15805 + (1));
seq__15765_15802 = G__15807;
chunk__15766_15803 = G__15808;
count__15767_15804 = G__15809;
i__15768_15805 = G__15810;
continue;
} else {
var temp__5720__auto___15811 = cljs.core.seq.call(null,seq__15765_15802);
if(temp__5720__auto___15811){
var seq__15765_15812__$1 = temp__5720__auto___15811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15765_15812__$1)){
var c__4421__auto___15813 = cljs.core.chunk_first.call(null,seq__15765_15812__$1);
var G__15814 = cljs.core.chunk_rest.call(null,seq__15765_15812__$1);
var G__15815 = c__4421__auto___15813;
var G__15816 = cljs.core.count.call(null,c__4421__auto___15813);
var G__15817 = (0);
seq__15765_15802 = G__15814;
chunk__15766_15803 = G__15815;
count__15767_15804 = G__15816;
i__15768_15805 = G__15817;
continue;
} else {
var lib_15818 = cljs.core.first.call(null,seq__15765_15812__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15818)," = require('",lib_15818,"');");


var G__15819 = cljs.core.next.call(null,seq__15765_15812__$1);
var G__15820 = null;
var G__15821 = (0);
var G__15822 = (0);
seq__15765_15802 = G__15819;
chunk__15766_15803 = G__15820;
count__15767_15804 = G__15821;
i__15768_15805 = G__15822;
continue;
}
} else {
}
}
break;
}

var seq__15769_15823 = cljs.core.seq.call(null,global_exports_libs);
var chunk__15770_15824 = null;
var count__15771_15825 = (0);
var i__15772_15826 = (0);
while(true){
if((i__15772_15826 < count__15771_15825)){
var lib_15827 = cljs.core._nth.call(null,chunk__15770_15824,i__15772_15826);
var map__15777_15828 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15827));
var map__15777_15829__$1 = (((((!((map__15777_15828 == null))))?(((((map__15777_15828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15777_15828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15777_15828):map__15777_15828);
var global_exports_15830 = cljs.core.get.call(null,map__15777_15829__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_15830,lib_15827);


var G__15831 = seq__15769_15823;
var G__15832 = chunk__15770_15824;
var G__15833 = count__15771_15825;
var G__15834 = (i__15772_15826 + (1));
seq__15769_15823 = G__15831;
chunk__15770_15824 = G__15832;
count__15771_15825 = G__15833;
i__15772_15826 = G__15834;
continue;
} else {
var temp__5720__auto___15835 = cljs.core.seq.call(null,seq__15769_15823);
if(temp__5720__auto___15835){
var seq__15769_15836__$1 = temp__5720__auto___15835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15769_15836__$1)){
var c__4421__auto___15837 = cljs.core.chunk_first.call(null,seq__15769_15836__$1);
var G__15838 = cljs.core.chunk_rest.call(null,seq__15769_15836__$1);
var G__15839 = c__4421__auto___15837;
var G__15840 = cljs.core.count.call(null,c__4421__auto___15837);
var G__15841 = (0);
seq__15769_15823 = G__15838;
chunk__15770_15824 = G__15839;
count__15771_15825 = G__15840;
i__15772_15826 = G__15841;
continue;
} else {
var lib_15842 = cljs.core.first.call(null,seq__15769_15836__$1);
var map__15779_15843 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15842));
var map__15779_15844__$1 = (((((!((map__15779_15843 == null))))?(((((map__15779_15843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15779_15843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15779_15843):map__15779_15843);
var global_exports_15845 = cljs.core.get.call(null,map__15779_15844__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_15845,lib_15842);


var G__15846 = cljs.core.next.call(null,seq__15769_15836__$1);
var G__15847 = null;
var G__15848 = (0);
var G__15849 = (0);
seq__15769_15823 = G__15846;
chunk__15770_15824 = G__15847;
count__15771_15825 = G__15848;
i__15772_15826 = G__15849;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__15850){
var map__15851 = p__15850;
var map__15851__$1 = (((((!((map__15851 == null))))?(((((map__15851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15851):map__15851);
var name = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15851__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15853){
var map__15854 = p__15853;
var map__15854__$1 = (((((!((map__15854 == null))))?(((((map__15854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15854):map__15854);
var name = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15854__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__15856){
var map__15857 = p__15856;
var map__15857__$1 = (((((!((map__15857 == null))))?(((((map__15857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15857):map__15857);
var t = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15859_15883 = cljs.core.seq.call(null,protocols);
var chunk__15860_15884 = null;
var count__15861_15885 = (0);
var i__15862_15886 = (0);
while(true){
if((i__15862_15886 < count__15861_15885)){
var protocol_15887 = cljs.core._nth.call(null,chunk__15860_15884,i__15862_15886);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15887)),"}");


var G__15888 = seq__15859_15883;
var G__15889 = chunk__15860_15884;
var G__15890 = count__15861_15885;
var G__15891 = (i__15862_15886 + (1));
seq__15859_15883 = G__15888;
chunk__15860_15884 = G__15889;
count__15861_15885 = G__15890;
i__15862_15886 = G__15891;
continue;
} else {
var temp__5720__auto___15892 = cljs.core.seq.call(null,seq__15859_15883);
if(temp__5720__auto___15892){
var seq__15859_15893__$1 = temp__5720__auto___15892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15859_15893__$1)){
var c__4421__auto___15894 = cljs.core.chunk_first.call(null,seq__15859_15893__$1);
var G__15895 = cljs.core.chunk_rest.call(null,seq__15859_15893__$1);
var G__15896 = c__4421__auto___15894;
var G__15897 = cljs.core.count.call(null,c__4421__auto___15894);
var G__15898 = (0);
seq__15859_15883 = G__15895;
chunk__15860_15884 = G__15896;
count__15861_15885 = G__15897;
i__15862_15886 = G__15898;
continue;
} else {
var protocol_15899 = cljs.core.first.call(null,seq__15859_15893__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15899)),"}");


var G__15900 = cljs.core.next.call(null,seq__15859_15893__$1);
var G__15901 = null;
var G__15902 = (0);
var G__15903 = (0);
seq__15859_15883 = G__15900;
chunk__15860_15884 = G__15901;
count__15861_15885 = G__15902;
i__15862_15886 = G__15903;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15863_15904 = cljs.core.seq.call(null,fields__$1);
var chunk__15864_15905 = null;
var count__15865_15906 = (0);
var i__15866_15907 = (0);
while(true){
if((i__15866_15907 < count__15865_15906)){
var fld_15908 = cljs.core._nth.call(null,chunk__15864_15905,i__15866_15907);
cljs.compiler.emitln.call(null,"this.",fld_15908," = ",fld_15908,";");


var G__15909 = seq__15863_15904;
var G__15910 = chunk__15864_15905;
var G__15911 = count__15865_15906;
var G__15912 = (i__15866_15907 + (1));
seq__15863_15904 = G__15909;
chunk__15864_15905 = G__15910;
count__15865_15906 = G__15911;
i__15866_15907 = G__15912;
continue;
} else {
var temp__5720__auto___15913 = cljs.core.seq.call(null,seq__15863_15904);
if(temp__5720__auto___15913){
var seq__15863_15914__$1 = temp__5720__auto___15913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15863_15914__$1)){
var c__4421__auto___15915 = cljs.core.chunk_first.call(null,seq__15863_15914__$1);
var G__15916 = cljs.core.chunk_rest.call(null,seq__15863_15914__$1);
var G__15917 = c__4421__auto___15915;
var G__15918 = cljs.core.count.call(null,c__4421__auto___15915);
var G__15919 = (0);
seq__15863_15904 = G__15916;
chunk__15864_15905 = G__15917;
count__15865_15906 = G__15918;
i__15866_15907 = G__15919;
continue;
} else {
var fld_15920 = cljs.core.first.call(null,seq__15863_15914__$1);
cljs.compiler.emitln.call(null,"this.",fld_15920," = ",fld_15920,";");


var G__15921 = cljs.core.next.call(null,seq__15863_15914__$1);
var G__15922 = null;
var G__15923 = (0);
var G__15924 = (0);
seq__15863_15904 = G__15921;
chunk__15864_15905 = G__15922;
count__15865_15906 = G__15923;
i__15866_15907 = G__15924;
continue;
}
} else {
}
}
break;
}

var seq__15867_15925 = cljs.core.seq.call(null,pmasks);
var chunk__15868_15926 = null;
var count__15869_15927 = (0);
var i__15870_15928 = (0);
while(true){
if((i__15870_15928 < count__15869_15927)){
var vec__15877_15929 = cljs.core._nth.call(null,chunk__15868_15926,i__15870_15928);
var pno_15930 = cljs.core.nth.call(null,vec__15877_15929,(0),null);
var pmask_15931 = cljs.core.nth.call(null,vec__15877_15929,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15930,"$ = ",pmask_15931,";");


var G__15932 = seq__15867_15925;
var G__15933 = chunk__15868_15926;
var G__15934 = count__15869_15927;
var G__15935 = (i__15870_15928 + (1));
seq__15867_15925 = G__15932;
chunk__15868_15926 = G__15933;
count__15869_15927 = G__15934;
i__15870_15928 = G__15935;
continue;
} else {
var temp__5720__auto___15936 = cljs.core.seq.call(null,seq__15867_15925);
if(temp__5720__auto___15936){
var seq__15867_15937__$1 = temp__5720__auto___15936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15867_15937__$1)){
var c__4421__auto___15938 = cljs.core.chunk_first.call(null,seq__15867_15937__$1);
var G__15939 = cljs.core.chunk_rest.call(null,seq__15867_15937__$1);
var G__15940 = c__4421__auto___15938;
var G__15941 = cljs.core.count.call(null,c__4421__auto___15938);
var G__15942 = (0);
seq__15867_15925 = G__15939;
chunk__15868_15926 = G__15940;
count__15869_15927 = G__15941;
i__15870_15928 = G__15942;
continue;
} else {
var vec__15880_15943 = cljs.core.first.call(null,seq__15867_15937__$1);
var pno_15944 = cljs.core.nth.call(null,vec__15880_15943,(0),null);
var pmask_15945 = cljs.core.nth.call(null,vec__15880_15943,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15944,"$ = ",pmask_15945,";");


var G__15946 = cljs.core.next.call(null,seq__15867_15937__$1);
var G__15947 = null;
var G__15948 = (0);
var G__15949 = (0);
seq__15867_15925 = G__15946;
chunk__15868_15926 = G__15947;
count__15869_15927 = G__15948;
i__15870_15928 = G__15949;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__15950){
var map__15951 = p__15950;
var map__15951__$1 = (((((!((map__15951 == null))))?(((((map__15951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15951):map__15951);
var t = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15953_15977 = cljs.core.seq.call(null,protocols);
var chunk__15954_15978 = null;
var count__15955_15979 = (0);
var i__15956_15980 = (0);
while(true){
if((i__15956_15980 < count__15955_15979)){
var protocol_15981 = cljs.core._nth.call(null,chunk__15954_15978,i__15956_15980);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15981)),"}");


var G__15982 = seq__15953_15977;
var G__15983 = chunk__15954_15978;
var G__15984 = count__15955_15979;
var G__15985 = (i__15956_15980 + (1));
seq__15953_15977 = G__15982;
chunk__15954_15978 = G__15983;
count__15955_15979 = G__15984;
i__15956_15980 = G__15985;
continue;
} else {
var temp__5720__auto___15986 = cljs.core.seq.call(null,seq__15953_15977);
if(temp__5720__auto___15986){
var seq__15953_15987__$1 = temp__5720__auto___15986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15953_15987__$1)){
var c__4421__auto___15988 = cljs.core.chunk_first.call(null,seq__15953_15987__$1);
var G__15989 = cljs.core.chunk_rest.call(null,seq__15953_15987__$1);
var G__15990 = c__4421__auto___15988;
var G__15991 = cljs.core.count.call(null,c__4421__auto___15988);
var G__15992 = (0);
seq__15953_15977 = G__15989;
chunk__15954_15978 = G__15990;
count__15955_15979 = G__15991;
i__15956_15980 = G__15992;
continue;
} else {
var protocol_15993 = cljs.core.first.call(null,seq__15953_15987__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15993)),"}");


var G__15994 = cljs.core.next.call(null,seq__15953_15987__$1);
var G__15995 = null;
var G__15996 = (0);
var G__15997 = (0);
seq__15953_15977 = G__15994;
chunk__15954_15978 = G__15995;
count__15955_15979 = G__15996;
i__15956_15980 = G__15997;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15957_15998 = cljs.core.seq.call(null,fields__$1);
var chunk__15958_15999 = null;
var count__15959_16000 = (0);
var i__15960_16001 = (0);
while(true){
if((i__15960_16001 < count__15959_16000)){
var fld_16002 = cljs.core._nth.call(null,chunk__15958_15999,i__15960_16001);
cljs.compiler.emitln.call(null,"this.",fld_16002," = ",fld_16002,";");


var G__16003 = seq__15957_15998;
var G__16004 = chunk__15958_15999;
var G__16005 = count__15959_16000;
var G__16006 = (i__15960_16001 + (1));
seq__15957_15998 = G__16003;
chunk__15958_15999 = G__16004;
count__15959_16000 = G__16005;
i__15960_16001 = G__16006;
continue;
} else {
var temp__5720__auto___16007 = cljs.core.seq.call(null,seq__15957_15998);
if(temp__5720__auto___16007){
var seq__15957_16008__$1 = temp__5720__auto___16007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15957_16008__$1)){
var c__4421__auto___16009 = cljs.core.chunk_first.call(null,seq__15957_16008__$1);
var G__16010 = cljs.core.chunk_rest.call(null,seq__15957_16008__$1);
var G__16011 = c__4421__auto___16009;
var G__16012 = cljs.core.count.call(null,c__4421__auto___16009);
var G__16013 = (0);
seq__15957_15998 = G__16010;
chunk__15958_15999 = G__16011;
count__15959_16000 = G__16012;
i__15960_16001 = G__16013;
continue;
} else {
var fld_16014 = cljs.core.first.call(null,seq__15957_16008__$1);
cljs.compiler.emitln.call(null,"this.",fld_16014," = ",fld_16014,";");


var G__16015 = cljs.core.next.call(null,seq__15957_16008__$1);
var G__16016 = null;
var G__16017 = (0);
var G__16018 = (0);
seq__15957_15998 = G__16015;
chunk__15958_15999 = G__16016;
count__15959_16000 = G__16017;
i__15960_16001 = G__16018;
continue;
}
} else {
}
}
break;
}

var seq__15961_16019 = cljs.core.seq.call(null,pmasks);
var chunk__15962_16020 = null;
var count__15963_16021 = (0);
var i__15964_16022 = (0);
while(true){
if((i__15964_16022 < count__15963_16021)){
var vec__15971_16023 = cljs.core._nth.call(null,chunk__15962_16020,i__15964_16022);
var pno_16024 = cljs.core.nth.call(null,vec__15971_16023,(0),null);
var pmask_16025 = cljs.core.nth.call(null,vec__15971_16023,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16024,"$ = ",pmask_16025,";");


var G__16026 = seq__15961_16019;
var G__16027 = chunk__15962_16020;
var G__16028 = count__15963_16021;
var G__16029 = (i__15964_16022 + (1));
seq__15961_16019 = G__16026;
chunk__15962_16020 = G__16027;
count__15963_16021 = G__16028;
i__15964_16022 = G__16029;
continue;
} else {
var temp__5720__auto___16030 = cljs.core.seq.call(null,seq__15961_16019);
if(temp__5720__auto___16030){
var seq__15961_16031__$1 = temp__5720__auto___16030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15961_16031__$1)){
var c__4421__auto___16032 = cljs.core.chunk_first.call(null,seq__15961_16031__$1);
var G__16033 = cljs.core.chunk_rest.call(null,seq__15961_16031__$1);
var G__16034 = c__4421__auto___16032;
var G__16035 = cljs.core.count.call(null,c__4421__auto___16032);
var G__16036 = (0);
seq__15961_16019 = G__16033;
chunk__15962_16020 = G__16034;
count__15963_16021 = G__16035;
i__15964_16022 = G__16036;
continue;
} else {
var vec__15974_16037 = cljs.core.first.call(null,seq__15961_16031__$1);
var pno_16038 = cljs.core.nth.call(null,vec__15974_16037,(0),null);
var pmask_16039 = cljs.core.nth.call(null,vec__15974_16037,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_16038,"$ = ",pmask_16039,";");


var G__16040 = cljs.core.next.call(null,seq__15961_16031__$1);
var G__16041 = null;
var G__16042 = (0);
var G__16043 = (0);
seq__15961_16019 = G__16040;
chunk__15962_16020 = G__16041;
count__15963_16021 = G__16042;
i__15964_16022 = G__16043;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16044){
var map__16045 = p__16044;
var map__16045__$1 = (((((!((map__16045 == null))))?(((((map__16045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16045):map__16045);
var target = cljs.core.get.call(null,map__16045__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__16045__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__16045__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__16045__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__16045__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16047){
var map__16048 = p__16047;
var map__16048__$1 = (((((!((map__16048 == null))))?(((((map__16048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16048):map__16048);
var op = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__16048__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3991__auto__ = code;
if(cljs.core.truth_(and__3991__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3991__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13592__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13592__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__16054 = cljs.core.seq.call(null,table);
var chunk__16055 = null;
var count__16056 = (0);
var i__16057 = (0);
while(true){
if((i__16057 < count__16056)){
var vec__16064 = cljs.core._nth.call(null,chunk__16055,i__16057);
var sym = cljs.core.nth.call(null,vec__16064,(0),null);
var value = cljs.core.nth.call(null,vec__16064,(1),null);
var ns_16070 = cljs.core.namespace.call(null,sym);
var name_16071 = cljs.core.name.call(null,sym);
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


var G__16072 = seq__16054;
var G__16073 = chunk__16055;
var G__16074 = count__16056;
var G__16075 = (i__16057 + (1));
seq__16054 = G__16072;
chunk__16055 = G__16073;
count__16056 = G__16074;
i__16057 = G__16075;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16054);
if(temp__5720__auto__){
var seq__16054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16054__$1)){
var c__4421__auto__ = cljs.core.chunk_first.call(null,seq__16054__$1);
var G__16076 = cljs.core.chunk_rest.call(null,seq__16054__$1);
var G__16077 = c__4421__auto__;
var G__16078 = cljs.core.count.call(null,c__4421__auto__);
var G__16079 = (0);
seq__16054 = G__16076;
chunk__16055 = G__16077;
count__16056 = G__16078;
i__16057 = G__16079;
continue;
} else {
var vec__16067 = cljs.core.first.call(null,seq__16054__$1);
var sym = cljs.core.nth.call(null,vec__16067,(0),null);
var value = cljs.core.nth.call(null,vec__16067,(1),null);
var ns_16080 = cljs.core.namespace.call(null,sym);
var name_16081 = cljs.core.name.call(null,sym);
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


var G__16082 = cljs.core.next.call(null,seq__16054__$1);
var G__16083 = null;
var G__16084 = (0);
var G__16085 = (0);
seq__16054 = G__16082;
chunk__16055 = G__16083;
count__16056 = G__16084;
i__16057 = G__16085;
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
var G__16087 = arguments.length;
switch (G__16087) {
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
var k_16092 = cljs.core.first.call(null,ks);
var vec__16088_16093 = cljs.core.conj.call(null,prefix,k_16092);
var top_16094 = cljs.core.nth.call(null,vec__16088_16093,(0),null);
var prefix_SINGLEQUOTE__16095 = vec__16088_16093;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_16092)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__16095) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_16094)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_16094)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16095)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_16094);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__16095)),";");
}
} else {
}

var m_16096 = cljs.core.get.call(null,externs,k_16092);
if(cljs.core.empty_QMARK_.call(null,m_16096)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__16095,m_16096,top_level,known_externs);
}

var G__16097 = cljs.core.next.call(null,ks);
ks = G__16097;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
